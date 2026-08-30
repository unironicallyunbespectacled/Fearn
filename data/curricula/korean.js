// korean curriculum
(function (global) {
  'use strict';
  var UNITS = [
  {
    "id": "ko-u1",
    "unit": 1,
    "title": "한글 자모 체계와 기본 인사 (Hangul & Greetings)",
    "level": "A1",
    "goal": "Mastery of 기본 인사와 자기소개 (Greetings & Self-Introduction).",
    "lessonIds": [
      "ko-u1-l1",
      "ko-u1-l2",
      "ko-u1-l3",
      "ko-u1-l4",
      "ko-u1-l5"
    ]
  },
  {
    "id": "ko-u2",
    "unit": 2,
    "title": "주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles)",
    "level": "A1",
    "goal": "Mastery of 은/는과 이/가 조사의 차이 (Topic vs Subject Particles).",
    "lessonIds": [
      "ko-u2-l1",
      "ko-u2-l2",
      "ko-u2-l3",
      "ko-u2-l4",
      "ko-u2-l5"
    ]
  },
  {
    "id": "ko-u3",
    "unit": 3,
    "title": "목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order)",
    "level": "A1",
    "goal": "Mastery of 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV).",
    "lessonIds": [
      "ko-u3-l1",
      "ko-u3-l2",
      "ko-u3-l3",
      "ko-u3-l4",
      "ko-u3-l5"
    ]
  },
  {
    "id": "ko-u4",
    "unit": 4,
    "title": "해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요)",
    "level": "A1",
    "goal": "Mastery of 해요체 어미 활용 (Polite Informal -아요/어요).",
    "lessonIds": [
      "ko-u4-l1",
      "ko-u4-l2",
      "ko-u4-l3",
      "ko-u4-l4",
      "ko-u4-l5"
    ]
  },
  {
    "id": "ko-u5",
    "unit": 5,
    "title": "하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다)",
    "level": "A1",
    "goal": "Mastery of 격식체 하십시오체 (Formal Style -ㅂ니다/습니다).",
    "lessonIds": [
      "ko-u5-l1",
      "ko-u5-l2",
      "ko-u5-l3",
      "ko-u5-l4",
      "ko-u5-l5"
    ]
  },
  {
    "id": "ko-u6",
    "unit": 6,
    "title": "과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives)",
    "level": "A2",
    "goal": "Mastery of 과거 시제 -았/었- 활용 (Past Tense -았/었-).",
    "lessonIds": [
      "ko-u6-l1",
      "ko-u6-l2",
      "ko-u6-l3",
      "ko-u6-l4",
      "ko-u6-l5"
    ]
  },
  {
    "id": "ko-u7",
    "unit": 7,
    "title": "미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess)",
    "level": "A2",
    "goal": "Mastery of 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요).",
    "lessonIds": [
      "ko-u7-l1",
      "ko-u7-l2",
      "ko-u7-l3",
      "ko-u7-l4",
      "ko-u7-l5"
    ]
  },
  {
    "id": "ko-u8",
    "unit": 8,
    "title": "진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives)",
    "level": "A2",
    "goal": "Mastery of 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다).",
    "lessonIds": [
      "ko-u8-l1",
      "ko-u8-l2",
      "ko-u8-l3",
      "ko-u8-l4",
      "ko-u8-l5"
    ]
  },
  {
    "id": "ko-u9",
    "unit": 9,
    "title": "장소·방향 조사(에, 에서, -(으)로) (Locative & Directional)",
    "level": "A2",
    "goal": "Mastery of 장소 조사 에/에서/-(으)로 (Locative & Directional Particles).",
    "lessonIds": [
      "ko-u9-l1",
      "ko-u9-l2",
      "ko-u9-l3",
      "ko-u9-l4",
      "ko-u9-l5"
    ]
  },
  {
    "id": "ko-u10",
    "unit": 10,
    "title": "가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability)",
    "level": "A2",
    "goal": "Mastery of 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다).",
    "lessonIds": [
      "ko-u10-l1",
      "ko-u10-l2",
      "ko-u10-l3",
      "ko-u10-l4",
      "ko-u10-l5"
    ]
  },
  {
    "id": "ko-u11",
    "unit": 11,
    "title": "의무와 금지(-아/어야 하다, -면 안 되다) (Obligation)",
    "level": "B1",
    "goal": "Mastery of 의무와 금지 표현 (Obligation & Prohibition).",
    "lessonIds": [
      "ko-u11-l1",
      "ko-u11-l2",
      "ko-u11-l3",
      "ko-u11-l4",
      "ko-u11-l5"
    ]
  },
  {
    "id": "ko-u12",
    "unit": 12,
    "title": "주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics)",
    "level": "B1",
    "goal": "Mastery of 주체 높임 선어말어미 -(으)시- (Subject Honorifics).",
    "lessonIds": [
      "ko-u12-l1",
      "ko-u12-l2",
      "ko-u12-l3",
      "ko-u12-l4",
      "ko-u12-l5"
    ]
  },
  {
    "id": "ko-u13",
    "unit": 13,
    "title": "객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics)",
    "level": "B1",
    "goal": "Mastery of 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다).",
    "lessonIds": [
      "ko-u13-l1",
      "ko-u13-l2",
      "ko-u13-l3",
      "ko-u13-l4",
      "ko-u13-l5"
    ]
  },
  {
    "id": "ko-u14",
    "unit": 14,
    "title": "이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에)",
    "level": "B1",
    "goal": "Mastery of 이유 원인 연결어미 (Causal Connectives: -아/어서).",
    "lessonIds": [
      "ko-u14-l1",
      "ko-u14-l2",
      "ko-u14-l3",
      "ko-u14-l4",
      "ko-u14-l5"
    ]
  },
  {
    "id": "ko-u15",
    "unit": 15,
    "title": "대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background)",
    "level": "B1",
    "goal": "Mastery of 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데).",
    "lessonIds": [
      "ko-u15-l1",
      "ko-u15-l2",
      "ko-u15-l3",
      "ko-u15-l4",
      "ko-u15-l5"
    ]
  },
  {
    "id": "ko-u16",
    "unit": 16,
    "title": "관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers)",
    "level": "B1",
    "goal": "Mastery of 관형사형 전성어미 (Noun-Modifying Clauses).",
    "lessonIds": [
      "ko-u16-l1",
      "ko-u16-l2",
      "ko-u16-l3",
      "ko-u16-l4",
      "ko-u16-l5"
    ]
  },
  {
    "id": "ko-u17",
    "unit": 17,
    "title": "명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization)",
    "level": "B2",
    "goal": "Mastery of 명사형 전성어미 (Nominalization: -기 / -는 것).",
    "lessonIds": [
      "ko-u17-l1",
      "ko-u17-l2",
      "ko-u17-l3",
      "ko-u17-l4",
      "ko-u17-l5"
    ]
  },
  {
    "id": "ko-u18",
    "unit": 18,
    "title": "간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech)",
    "level": "B2",
    "goal": "Mastery of 간접화법 표현 체계 (Indirect Reported Speech).",
    "lessonIds": [
      "ko-u18-l1",
      "ko-u18-l2",
      "ko-u18-l3",
      "ko-u18-l4",
      "ko-u18-l5"
    ]
  },
  {
    "id": "ko-u19",
    "unit": 19,
    "title": "피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice)",
    "level": "B2",
    "goal": "Mastery of 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes).",
    "lessonIds": [
      "ko-u19-l1",
      "ko-u19-l2",
      "ko-u19-l3",
      "ko-u19-l4",
      "ko-u19-l5"
    ]
  },
  {
    "id": "ko-u20",
    "unit": 20,
    "title": "사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice)",
    "level": "B2",
    "goal": "Mastery of 사동사 접미사와 -게 하다 (Causative Structures).",
    "lessonIds": [
      "ko-u20-l1",
      "ko-u20-l2",
      "ko-u20-l3",
      "ko-u20-l4",
      "ko-u20-l5"
    ]
  },
  {
    "id": "ko-u21",
    "unit": 21,
    "title": "조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals)",
    "level": "B2",
    "goal": "Mastery of 조건과 가정 어미 (Hypothetical Conditionals).",
    "lessonIds": [
      "ko-u21-l1",
      "ko-u21-l2",
      "ko-u21-l3",
      "ko-u21-l4",
      "ko-u21-l5"
    ]
  },
  {
    "id": "ko-u22",
    "unit": 22,
    "title": "심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives)",
    "level": "B2",
    "goal": "Mastery of 심화 연결어미 활용 (Advanced Connectives).",
    "lessonIds": [
      "ko-u22-l1",
      "ko-u22-l2",
      "ko-u22-l3",
      "ko-u22-l4",
      "ko-u22-l5"
    ]
  },
  {
    "id": "ko-u23",
    "unit": 23,
    "title": "비즈니스 한국어와 직장 내 의전 (Business Korean)",
    "level": "B2",
    "goal": "Mastery of 비즈니스 회화와 이메일 (Business & Corporate Korean).",
    "lessonIds": [
      "ko-u23-l1",
      "ko-u23-l2",
      "ko-u23-l3",
      "ko-u23-l4",
      "ko-u23-l5"
    ]
  },
  {
    "id": "ko-u24",
    "unit": 24,
    "title": "한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism)",
    "level": "B2",
    "goal": "Mastery of 대중문화와 영화 비평 (Korean Popular Culture & Arts).",
    "lessonIds": [
      "ko-u24-l1",
      "ko-u24-l2",
      "ko-u24-l3",
      "ko-u24-l4",
      "ko-u24-l5"
    ]
  },
  {
    "id": "ko-u25",
    "unit": 25,
    "title": "전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette)",
    "level": "C1",
    "goal": "Mastery of 전통 한식과 식문화 예절 (Korean Culinary Traditions).",
    "lessonIds": [
      "ko-u25-l1",
      "ko-u25-l2",
      "ko-u25-l3",
      "ko-u25-l4",
      "ko-u25-l5"
    ]
  },
  {
    "id": "ko-u26",
    "unit": 26,
    "title": "의료 상담과 건강보험 체계 (Medical & Clinical Discourse)",
    "level": "C1",
    "goal": "Mastery of 병원 진료와 건강 상담 (Clinical & Medical Consultations).",
    "lessonIds": [
      "ko-u26-l1",
      "ko-u26-l2",
      "ko-u26-l3",
      "ko-u26-l4",
      "ko-u26-l5"
    ]
  },
  {
    "id": "ko-u27",
    "unit": 27,
    "title": "금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate)",
    "level": "C1",
    "goal": "Mastery of 금융과 부동산 경제 (Banking, Finance & Real Estate).",
    "lessonIds": [
      "ko-u27-l1",
      "ko-u27-l2",
      "ko-u27-l3",
      "ko-u27-l4",
      "ko-u27-l5"
    ]
  },
  {
    "id": "ko-u28",
    "unit": 28,
    "title": "고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms)",
    "level": "C1",
    "goal": "Mastery of 사자성어와 고사 (Sino-Korean Four-Character Idioms).",
    "lessonIds": [
      "ko-u28-l1",
      "ko-u28-l2",
      "ko-u28-l3",
      "ko-u28-l4",
      "ko-u28-l5"
    ]
  },
  {
    "id": "ko-u29",
    "unit": 29,
    "title": "학술 논문 작성과 학술 토론 (Academic Dissertation & Debate)",
    "level": "C1",
    "goal": "Mastery of 학술 논문과 학술 토론 (Academic Research & Dissertation).",
    "lessonIds": [
      "ko-u29-l1",
      "ko-u29-l2",
      "ko-u29-l3",
      "ko-u29-l4",
      "ko-u29-l5"
    ]
  },
  {
    "id": "ko-u30",
    "unit": 30,
    "title": "헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts)",
    "level": "C1",
    "goal": "Mastery of 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law).",
    "lessonIds": [
      "ko-u30-l1",
      "ko-u30-l2",
      "ko-u30-l3",
      "ko-u30-l4",
      "ko-u30-l5"
    ]
  },
  {
    "id": "ko-u31",
    "unit": 31,
    "title": "현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates)",
    "level": "C2",
    "goal": "Mastery of 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates).",
    "lessonIds": [
      "ko-u31-l1",
      "ko-u31-l2",
      "ko-u31-l3",
      "ko-u31-l4",
      "ko-u31-l5"
    ]
  },
  {
    "id": "ko-u32",
    "unit": 32,
    "title": "첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech)",
    "level": "C2",
    "goal": "Mastery of 과학 기술과 반도체 산업 (Science & High Technology).",
    "lessonIds": [
      "ko-u32-l1",
      "ko-u32-l2",
      "ko-u32-l3",
      "ko-u32-l4",
      "ko-u32-l5"
    ]
  },
  {
    "id": "ko-u33",
    "unit": 33,
    "title": "동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy)",
    "level": "C2",
    "goal": "Mastery of 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties).",
    "lessonIds": [
      "ko-u33-l1",
      "ko-u33-l2",
      "ko-u33-l3",
      "ko-u33-l4",
      "ko-u33-l5"
    ]
  },
  {
    "id": "ko-u34",
    "unit": 34,
    "title": "국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft)",
    "level": "C2",
    "goal": "Mastery of 정상회담과 정책 담화 (C2 Capstone Executive Statecraft).",
    "lessonIds": [
      "ko-u34-l1",
      "ko-u34-l2",
      "ko-u34-l3",
      "ko-u34-l4",
      "ko-u34-l5"
    ]
  }
];
  var LESSONS = {
  "ko-u1-l1": {
    "id": "ko-u1-l1",
    "subject": "korean",
    "unit": 1,
    "lessonNumber": 1,
    "title": "한글 창제 원리와 기본 모음·자음 (Hangul Principles, Basic Vowels & Consonants)",
    "level": "A1",
    "objective": "한글의 창제 원리(상형과 가획)를 이해하고, 기본 모음(ㅏ, ㅓ, ㅗ, ㅜ, ㅡ, ㅣ)과 기본 자음(ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅎ)의 음가를 구별하여 발음한다.",
    "presentation": {
      "explanation": "한글(Hangul)은 1443년 조선 제4대 세종대왕(King Sejong the Great)이 창제하고 1446년 «훈민정음(Hunminjeongeum)»으로 반포한 과학적인 표음문자입니다.\n\n1. 기본 모음의 제자 원리 (Vowel Philosophy):\n동양 철학의 삼재(Three Elements of the Universe)를 상형하여 창제했습니다.\n- 하늘(ㆍ / 천·Round Sky): 천지인 조화의 점(현대어에서는 단모음 획으로 통합)\n- 땅(ㅡ / 지·Flat Earth): 평평한 입술 모양의 수평 모음 [ɯ]\n- 사람(ㅣ / 인·Upright Human): 곧게 선 사람 모양의 수직 모음 [i]\n기본 모음 결합:\n- ㅏ [a]: 밝고 외향적인 양성 모음\n- ㅓ [ʌ]: 어둡고 내향적인 음성 모음\n- ㅗ [o]: 위를 향한 양성 원순 모음\n- ㅜ [u]: 아래를 향한 음성 원순 모음\n- ㅡ [ɯ]: 평순 평음 평모음\n- ㅣ [i]: 전설 고모음\n\n2. 기본 자음의 제자 원리 (Consonant Articulatory Design):\n발음 기관(혀, 입술, 치아, 목구멍)의 모양을 본떠 기본자를 만들고 획을 더해(가획) 소리의 세기를 표현했습니다.\n- ㄱ [k/g]: 혀뿌리가 목구멍을 막는 모양 (아음·Velar)\n- ㄴ [n]: 혀끝이 윗잇몸에 닿는 모양 (설음·Alveolar)\n- ㅁ [m]: 입술의 닫힌 모양 (순음·Bilabial)\n- ㅅ [s]: 이(치아)의 뾰족한 모양 (치음·Dental)\n- ㅇ [ng/silent]: 목구멍의 둥근 모양 (후음·Glottal, 초성에서는 음가 없음)\n\n3. 초성 자음과 모음의 결합:\n자음은 모음과 결합해야 하나의 완전한 음절을 이룹니다. 초성에 모음만 발음될 때는 빈자리 표시로 무음 'ㅇ'을 결합합니다 (예: 아, 오, 우).",
      "examples": [
        {
          "target": "아이",
          "reading": "a-i",
          "translation": "child / baby"
        },
        {
          "target": "오이",
          "reading": "o-i",
          "translation": "cucumber"
        },
        {
          "target": "나무",
          "reading": "na-mu",
          "translation": "tree / wood"
        },
        {
          "target": "바다",
          "reading": "ba-da",
          "translation": "sea / ocean"
        }
      ],
      "mnemonics": [
        "기본 자음 기억법: 'ㄱ'은 낚싯바늘(Hook/G), 'ㄴ'은 코(Nose), 'ㅁ'은 입(Mouth), 'ㅅ'은 사람(Standing Person), 'ㅇ'은 동그라미(Zero/Open Throat)."
      ],
      "culturalNotes": [
        "세종대왕은 백성들이 한자의 어려움으로 억울한 일을 겪지 않도록 '모든 사람이 하루 만에 쉽게 깨칠 수 있는 글자'로 훈민정음을 창제했습니다. 유네스코 세종대왕 문해상(UNESCO King Sejong Literacy Prize)은 이 정신을 기려 제정되었습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "다음 중 기본 자음 'ㄱ, ㄴ, ㄷ, ㅁ, ㅂ'과 모음 'ㅏ, ㅣ, ㅜ'만으로 조합되어 '나무(tree)'를 뜻하는 올바른 한글 단어는 무엇입니까?",
          "options": [
            "나무",
            "바다",
            "가구"
          ],
          "answerIndex": 0,
          "explanation": "'ㄴ[n] + ㅏ[a] = 나', 'ㅁ[m] + ㅜ[u] = 무'가 결합하여 '나무[namu]'가 됩니다. '바다'는 ㅂ+ㅏ, ㄷ+ㅏ이며, '가구'는 ㄱ+ㅏ, ㄱ+ㅜ입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "초성 자음 'ㅇ'이 모음 'ㅗ'와 'ㅣ'에 각각 결합하여 채소 '오이(cucumber)'를 표기한 단어를 고르십시오.",
          "options": [
            "아이",
            "오이",
            "우유"
          ],
          "answerIndex": 1,
          "explanation": "초성에 음가가 없는 무음 'ㅇ'과 수평 모음 'ㅗ', 수직 모음 'ㅣ'가 순서대로 결합하여 '오이[oi]'를 이룹니다. '아이'는 ㅏ+ㅣ, '우유'는 ㅜ+ㅠ입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "한글 자음 중 '혀뿌리가 목구멍을 막는 모양'을 본떠 만든 기본 아음(Velar) 자음은 무엇입니까?",
          "options": [
            "ㄴ",
            "ㄱ",
            "ㅁ"
          ],
          "answerIndex": 1,
          "explanation": "'ㄱ'은 혀뿌리가 목구멍을 막는 형태를 본뜬 기본 자음입니다. 'ㄴ'은 혀끝이 윗잇몸에 닿는 모양, 'ㅁ'은 입술 모양입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "한국어로 '바다(sea)'를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "바다"
          ],
          "explanation": "'ㅂ + ㅏ = 바', 'ㄷ + ㅏ = 다'로 결합된 2음절 단어 '바다'입니다."
        }
      ]
    }
  },
  "ko-u1-l2": {
    "id": "ko-u1-l2",
    "subject": "korean",
    "unit": 1,
    "lessonNumber": 2,
    "title": "음절 구성 방식과 7대 대표 받침 (Syllable Structure & The 7 Representative Batchim)",
    "level": "A1",
    "objective": "초성·중성·종성(받침)의 사각 블록 조립 구조를 익히고, 한국어의 7대 대표 받침([ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ]) 중화 현상을 정확히 발음한다.",
    "presentation": {
      "explanation": "한글 글자는 자모를 나열해 쓰지 않고, 하나의 음절(Syllable)을 사각 틀 안에 모아 쓰는 음절 블록(Syllabic Block) 구조를 갖습니다.\n\n1. 음절의 4가지 결합 형태:\n- 자음 + 세로 모음: 가, 나, 다, 라 (좌우 결합)\n- 자음 + 가로 모음: 고, 노, 두, 르 (상하 결합)\n- 자음 + 세로 모음 + 받침: 강, 날, 달, 밥 (좌우상 + 하단 받침)\n- 자음 + 가로 모음 + 받침: 공, 눈, 돌, 물 (상중하 수직 결합)\n\n2. 받침(종성·Batchim)과 7대 대표음 중화:\n한국어 음절 말의 자음 받침은 발음될 때 폐쇄음으로 중화(Neutralization)되어 7가지 대표음으로만 소리 납니다.\n- [ㄱ]: ㄱ, ㅋ, ㄲ, ㄳ, ㄺ (예: 국 [국], 부엌 [부억], 밖 [박])\n- [ㄴ]: ㄴ, ㄵ, ㄶ (예: 문 [문], 안다 [안다])\n- [ㄷ]: ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎ (예: 곧 [곧], 끝 [끋], 옷 [옫], 낮 [낟], 꽃 [꼳])\n- [ㄹ]: ㄹ, ㄼ, ㄽ, ㄾ, ㅀ (예: 달 [달], 물 [물], 길 [길])\n- [ㅁ]: ㅁ, ㄻ (예: 밤 [밤], 몸 [몸], 삶 [삼])\n- [ㅂ]: ㅂ, ㅍ, ㅄ, ㄿ (예: 밥 [밥], 숲 [숩], 앞 [압])\n- [ㅇ]: ㅇ (예: 강 [강], 방 [방], 종 [종])\n\n주의: '옷(clothes)', '꽃(flower)', '낮(daytime)'의 받침 글자는 각각 'ㅅ, ㅊ, ㅈ'이지만 음절 말 단독 발음은 모두 대표음 [ㄷ]으로 동일하게 발음됩니다.",
      "examples": [
        {
          "target": "밥",
          "reading": "bap",
          "translation": "cooked rice / meal (Batchim [ㅂ])"
        },
        {
          "target": "옷",
          "reading": "ot",
          "translation": "clothes (Batchim [ㄷ])"
        },
        {
          "target": "꽃",
          "reading": "kkot",
          "translation": "flower (Batchim [ㄷ])"
        },
        {
          "target": "달",
          "reading": "dal",
          "translation": "moon / month (Batchim [ㄹ])"
        }
      ],
      "mnemonics": [
        "7대 받침 암기 공식: '가느다란 물방울' (ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ) - 모든 한국어 받침 소리는 이 7개 중 하나로만 끝납니다!"
      ],
      "culturalNotes": [
        "한국어에서 '밥(Bap)'은 단순한 쌀밥을 넘어 끼니 전체와 환대(Hospitality)를 상징합니다. 한국인들이 안부를 물을 때 '밥 먹었어요?'라고 묻는 것은 따뜻한 관심의 표현입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "단어 '옷(clothes)'의 받침 자음은 'ㅅ'이지만, 단독으로 발음될 때 나타나는 7대 대표 받침 소리는 무엇입니까?",
          "options": [
            "[ㄷ]",
            "[ㅂ]",
            "[ㄱ]"
          ],
          "answerIndex": 0,
          "explanation": "'ㅅ, ㅆ, ㅈ, ㅊ, ㅌ, ㅎ' 받침은 음절 말에서 모두 대표음 [ㄷ]으로 중화되어 발음됩니다. 따라서 '옷'은 [옫]으로 소리 납니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "다음 중 받침 소리가 비음 [ㅇ]으로 끝나며 '강(river)'을 뜻하는 단어를 고르십시오.",
          "options": [
            "강",
            "간",
            "갈"
          ],
          "answerIndex": 0,
          "explanation": "'ㄱ + ㅏ + ㅇ(받침) = 강[gang]'입니다. '간'은 ㄴ 받침([n]), '갈'은 ㄹ 받침([l])입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 단독 발음 시 대표 받침 소리가 서로 다른 하나는 무엇입니까?",
          "options": [
            "꽃 (flower)",
            "부엌 (kitchen)",
            "옷 (clothes)"
          ],
          "answerIndex": 1,
          "explanation": "'부엌'의 받침 'ㅋ'은 [ㄱ]으로 발음됩니다. 반면 '꽃'([꼳])과 '옷'([옫])은 모두 [ㄷ]으로 발음됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "한국어로 '밥(cooked rice/meal)'을 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "밥"
          ],
          "explanation": "'ㅂ + ㅏ + ㅂ = 밥'으로 구성된 1음절 단어입니다."
        }
      ]
    }
  },
  "ko-u1-l3": {
    "id": "ko-u1-l3",
    "subject": "korean",
    "unit": 1,
    "lessonNumber": 3,
    "title": "기본 인사와 만남·작별 표현 (Greetings, Gratitude & Parting Expressions)",
    "level": "A1",
    "objective": "한국어의 존댓말 체계에 맞추어 만남의 인사(안녕하세요), 작별의 인사(안녕히 가세요/계세요), 감사(감사합니다), 사과(죄송합니다)를 적절한 상황에서 구사한다.",
    "presentation": {
      "explanation": "한국어 인사는 화자와 청자의 나이, 사회적 관계, 상황(남는 사람 vs 떠나는 사람)에 따라 명확히 구분되는 존댓말(Polite/Honorific register) 체계를 갖습니다.\n\n1. 만남의 기본 인사:\n- 안녕하세요? [An-nyeong-ha-se-yo?]: 시간대(아침, 점심, 저녁)에 관계없이 사용하는 표준 공손체(해요체) 만남 인사입니다. 어원상 '안녕(安寧: 편안하고 탈이 없음)'을 기원합니다.\n- 만나서 반갑습니다 [Man-na-seo ban-gap-seum-ni-da]: 처음 만나거나 반가움을 표할 때 격식체로 건네는 표현입니다.\n\n2. 작별 인사의 명확한 구분:\n- 안녕히 가세요 [An-nyeong-hi ga-se-yo]: 내가 머물고 상대방이 떠날 때 ('Go in peace')\n- 안녕히 계세요 [An-nyeong-hi gye-se-yo]: 상대방이 머물고 내가 떠날 때 ('Stay in peace')\n둘 다 떠나는 상황에서는 서로에게 '안녕히 가세요'를 나눕니다.\n\n3. 감사와 사과:\n- 감사합니다 [Gam-sa-ham-ni-da] / 고맙습니다 [Go-map-seum-ni-da]: 격식 있고 공손한 감사 표현\n- 죄송합니다 [Joe-song-ham-ni-da] / 미안합니다 [Mi-an-ham-ni-da]: 실수나 결례에 대한 정중한 사과 표현",
      "examples": [
        {
          "target": "안녕하세요? 반갑습니다.",
          "reading": "Annyeonghaseyo? Bangapseumnida.",
          "translation": "Hello? Nice to meet you."
        },
        {
          "target": "안녕히 가세요.",
          "reading": "Annyeonghi gaseyo.",
          "translation": "Goodbye (to someone leaving)."
        },
        {
          "target": "안녕히 계세요.",
          "reading": "Annyeonghi gyeseyo.",
          "translation": "Goodbye (to someone staying)."
        },
        {
          "target": "도와주셔서 대단히 감사합니다.",
          "reading": "Dowajusyeoseo daedanhi gamsahamnida.",
          "translation": "Thank you very much for your help."
        }
      ],
      "mnemonics": [
        "작별 인사 구분 꿀팁: 떠나는 사람에게는 '가다(Go)'의 '가세요!', 남아있는 사람에게는 계시다(Stay)'의 '계세요!'를 씁니다."
      ],
      "culturalNotes": [
        "한국에서는 인사를 나눌 때 고개를 숙이는 절(Bowing) 문화를 동반합니다. 일상적인 인사에서는 상체를 15~30도 정도 숙이고, 정중한 사과나 큰 감사에는 45도 각도로 정중히 숙입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "식당이나 사무실에서 내가 먼저 밖으로 나가면서, 실내에 남아있는 동료나 점원에게 건네는 올바른 작별 인사는 무엇입니까?",
          "options": [
            "안녕히 계세요.",
            "안녕히 가세요.",
            "죄송합니다."
          ],
          "answerIndex": 0,
          "explanation": "남아있는 사람에게는 '계시다'의 존칭인 '안녕히 계세요'를 써야 합니다. 떠나는 사람에게 건네는 인사는 '안녕히 가세요'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "처음 만난 상대방에게 '반갑습니다(Nice to meet you)'와 함께 건네는 가장 보편적인 한국어 만남 인사는 무엇입니까?",
          "options": [
            "안녕하세요?",
            "안녕히 가세요.",
            "어디에 가요?"
          ],
          "answerIndex": 0,
          "explanation": "'안녕하세요?'는 하루 중 언제든 정중하고 다정하게 안부를 묻는 표준 만남 인사말입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "상대방의 호의와 도움에 대해 공손하게 감사를 표하는 한국어 격식체 표현은 무엇입니까?",
          "options": [
            "죄송합니다.",
            "감사합니다.",
            "안녕히 계세요."
          ],
          "answerIndex": 1,
          "explanation": "'감사합니다[gamsahamnida]'는 깊은 고마움을 나타내는 표준 격식체 감사 표현입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "한국어로 표준 만남 인사말인 '안녕하세요'(Hello)를 정확히 입력하십시오.",
          "acceptedAnswers": [
            "안녕하세요",
            "안녕하세요?"
          ],
          "explanation": "'안녕(安寧) + 하시다 + 어요 = 안녕하세요'입니다."
        }
      ]
    }
  },
  "ko-u1-l4": {
    "id": "ko-u1-l4",
    "subject": "korean",
    "unit": 1,
    "lessonNumber": 4,
    "title": "자기소개와 서술격 조사 -입니다/-입니까? (Self-Introductions & The Copula -입니다)",
    "level": "A1",
    "objective": "서술격 조사 '이다'의 격식체 평서형('-입니다')과 의문형('-입니까?')을 사용하여 이름, 국적, 직업을 정확히 묻고 소개한다.",
    "presentation": {
      "explanation": "한국어에서 명사를 서술어로 만들어 주는 문법 요소를 서술격 조사 '이다(to be)'라고 합니다. 격식체 하십시오체에서는 평서형 '-입니다'와 의문형 '-입니까?'로 활용됩니다.\n\n1. 형태 결합 규칙:\n서술격 조사 '-입니다'는 앞 명사의 받침 유무와 상관없이 명사 바로 뒤에 붙여 씁니다.\n- 받침 있는 명사 + 입니다: 학생 + 입니다 → 학생입니다 (I am a student)\n- 받침 없는 명사 + 입니다: 의사 + 입니다 → 의사입니다 (I am a doctor)\n\n2. 1인칭 공손 대명사 '저(I/Me)':\n어른이나 처음 만난 사람에게 자신을 낮추어 예의를 갖출 때는 '나' 대신 공손 대명사 '저'와 주제격 조사 '는'을 결합하여 '저는(As for me...)'으로 시작합니다.\n\n3. 국적과 직업 소개 공식:\n- 저는 [이름]입니다. (예: 저는 김민수입니다.)\n- 저는 [나라 이름] 사람입니다. (예: 저는 한국 사람입니다. / 저는 미국 사람입니다.)\n- 어느 나라 사람입니까? (Which country's person are you?)\n- 저는 [직업]입니다. (예: 저는 회사원입니다. / 저는 선생님입니다.)",
      "examples": [
        {
          "target": "저는 김민수입니다.",
          "reading": "Jeo-neun Kim Min-su-imnida.",
          "translation": "I am Minsu Kim."
        },
        {
          "target": "어느 나라 사람입니까?",
          "reading": "Eoneu nara saram-imnikka?",
          "translation": "What nationality are you?"
        },
        {
          "target": "저는 한국 사람입니다.",
          "reading": "Jeo-neun Hanguk saram-imnida.",
          "translation": "I am Korean."
        },
        {
          "target": "저는 대학교 학생입니다.",
          "reading": "Jeo-neun daehakgyo haksaeng-imnida.",
          "translation": "I am a university student."
        }
      ],
      "mnemonics": [
        "평서문 마침표는 '-입니다(마침표 느낌)', 질문 물음표는 '-입니까?(까마귀 소리처럼 묻는 까?)'로 외우세요!"
      ],
      "culturalNotes": [
        "한국인의 성명은 '성(Family Name) + 이름(Given Name)' 순서로 쓰며 성과 이름 사이에 띄어쓰기를 하지 않습니다 (예: 김민수, 이지은). 대부분의 한국 성씨는 김(Kim), 이(Lee), 박(Park), 최(Choi), 정(Jung) 등 한 글자입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "상대방의 직업이나 신분을 정중하게 물어보는 격식체 의문문으로 올바른 표현은 무엇입니까?",
          "options": [
            "선생님입니까?",
            "선생님입니다.",
            "선생님이에요."
          ],
          "answerIndex": 0,
          "explanation": "격식체 질문 의문형 종결어미는 '-입니까?'입니다. '-입니다'는 서술 평서문입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'저는 미국 사람입니다(I am American)'에서 국적을 나타내는 단어 '사람' 뒤에 결합된 올바른 서술격 어미는 무엇입니까?",
          "options": [
            "사람입니다",
            "사람입니까",
            "사람아닙니다"
          ],
          "answerIndex": 0,
          "explanation": "자신의 국적을 단정적으로 소개하는 평서문이므로 '사람입니다'가 올바릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'A: 어느 나라 사람입니까? B: 저는 _____ 사람입니다.' 빈칸에 들어갈 올바른 국가 명칭은 무엇입니까?",
          "options": [
            "한국",
            "학교",
            "의사"
          ],
          "answerIndex": 0,
          "explanation": "'어느 나라 사람입니까?'라는 질문에는 국가 명칭인 '한국(Korea)'이 들어가 '한국 사람입니다'가 되어야 자연스럽습니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'저는 학생입니다'(I am a student)를 한글로 완벽한 문장으로 입력하십시오.",
          "acceptedAnswers": [
            "저는 학생입니다.",
            "저는 학생입니다"
          ],
          "explanation": "저(1인칭 공손) + 는(주제격) + 학생(명사) + 입니다(서술격) = 저는 학생입니다."
        }
      ]
    }
  },
  "ko-u1-l5": {
    "id": "ko-u1-l5",
    "subject": "korean",
    "unit": 1,
    "lessonNumber": 5,
    "title": "긍정·부정 응답과 부정 서술 -이/가 아닙니다 (Affirmation, Negation & -이/가 아닙니다)",
    "level": "A1",
    "objective": "질문에 대해 긍정('네')과 부정('아니요')으로 명확히 답하고, 부정 서술격 구조인 '[명사]이/가 아닙니다'를 활용하여 신분이나 사실을 정정한다.",
    "presentation": {
      "explanation": "판정 의문문에 답할 때 사용하는 긍정·부정 감탄사와 '명사가 아님'을 나타내는 부정 서술 표현을 학습합니다.\n\n1. 긍정과 부정의 기본 응답:\n- 네 [Ne] (또는 '예 [Ye]'): 'Yes' (상대방의 말에 긍정하거나 동의함)\n- 아니요 [A-ni-yo]: 'No' (상대방의 질문이나 진술을 부인함)\n\n2. 부정 서술문: [명사] + 이/가 아닙니다 (Is not [Noun]):\n'이다'의 부정형은 형용사 '아니다(to not be)'를 사용하며, 앞 명사에 주격 조사 '이/가'가 결합합니다.\n- 받침 있는 명사 + 이 아닙니다: 학생 + 이 아닙니다 → 학생이 아닙니다 (I am not a student)\n- 받침 없는 명사 + 가 아닙니다: 의사 + 가 아닙니다 → 의사가 아닙니다 (I am not a doctor)\n\n3. 대화 문답 패턴:\n- 질문: 한국 사람입니까?\n- 긍정 응답: 네, 한국 사람입니다. (Yes, I am Korean.)\n- 부정 응답: 아니요, 한국 사람이 아닙니다. 일본 사람입니다. (No, I am not Korean. I am Japanese.)\n- 질문: 의사입니까?\n- 부정 응답: 아니요, 의사가 아닙니다. 회사원입니다. (No, I am not a doctor. I am an office worker.)",
      "examples": [
        {
          "target": "한국 사람입니까? 네, 한국 사람입니다.",
          "reading": "Hanguk saram-imnikka? Ne, Hanguk saram-imnida.",
          "translation": "Are you Korean? Yes, I am Korean."
        },
        {
          "target": "의사입니까? 아니요, 의사가 아닙니다.",
          "reading": "Uisa-imnikka? Aniyo, uisa-ga animnida.",
          "translation": "Are you a doctor? No, I am not a doctor."
        },
        {
          "target": "저는 학생이 아닙니다. 선생님입니다.",
          "reading": "Jeo-neun haksaeng-i animnida. Seonsaengnim-imnida.",
          "translation": "I am not a student. I am a teacher."
        },
        {
          "target": "가방이 아닙니다. 책입니다.",
          "reading": "Gabang-i animnida. Chaek-imnida.",
          "translation": "It is not a bag. It is a book."
        }
      ],
      "mnemonics": [
        "받침 있으면 '이', 받침 없으면 '가'! 학생(ㅇ 받침 있음)이 아닙니다 vs 의사(받침 없음)가 아닙니다."
      ],
      "culturalNotes": [
        "한국어의 '네'는 단순한 'Yes'뿐 아니라 대화 중 상대방의 말을 경청하고 있다는 신호(Backchanneling/맞장구)로 매우 자주 쓰입니다. 고개를 끄덕이며 '네, 네' 하는 것은 깊은 집중을 나타냅니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'선생님(받침 ㅁ 있음)' 명사에 부정 서술 '아닙니다'를 결합할 때 올바른 형태는 무엇입니까?",
          "options": [
            "선생님이 아닙니다.",
            "선생님가 아닙니다.",
            "선생님은 아닙니다."
          ],
          "answerIndex": 0,
          "explanation": "'선생님'은 받침 'ㅁ'이 있으므로 주격 조사 '이'가 결합하여 '선생님이 아닙니다'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'A: 회사원입니까? B: 아니요, _____ 아닙니다. 학생입니다.' 빈칸에 들어갈 올바른 표현은 무엇입니까?",
          "options": [
            "회사원이",
            "회사원가",
            "회사원을"
          ],
          "answerIndex": 0,
          "explanation": "'회사원'은 받침 'ㄴ'이 있으므로 '이 아닙니다'와 결합하여 '회사원이 아닙니다'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 문법적으로 올바른 부정 문장은 어느 것입니까?",
          "options": [
            "의사가 아닙니다.",
            "의사이 아닙니다.",
            "의사를 아닙니다."
          ],
          "answerIndex": 0,
          "explanation": "'의사'는 받침이 없는 모음 종결 명사이므로 조사 '가'가 결합하여 '의사가 아닙니다'가 올바릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'의사가 아닙니다'(I am not a doctor)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "의사가 아닙니다.",
            "의사가 아닙니다"
          ],
          "explanation": "의사(받침 없음) + 가(조사) + 아닙니다(부정 서술) = 의사가 아닙니다."
        }
      ]
    }
  },
  "ko-u2-l1": {
    "id": "ko-u2-l1",
    "subject": "korean",
    "unit": 2,
    "lessonNumber": 1,
    "title": "주제격 보조사 은/는과 화제 제시 (Topic Particle 은/는 & Discourse Themes)",
    "level": "A1",
    "objective": "주제격 보조사 '은/는'의 형태 결합 규칙(받침 유무)을 익히고, 대화의 중심 화제(Topic) 설정 및 일반적 사실 진술 기능을 활용한다.",
    "presentation": {
      "explanation": "한국어의 '은/는'은 문장의 화제(Topic)를 제시하거나 다른 대상과의 대조(Contrast)를 나타내는 가장 대표적인 보조사입니다. 영어로는 'As for...' 또는 'Speaking of...'에 해당합니다.\n\n1. 형태 결합 규칙 (Phonological Conditioning):\n앞 명사의 마지막 음절에 받침이 있는지에 따라 '은'과 '는'을 선택합니다.\n- 받침 있는 명사 + 은: 책 + 은 → 책은 [chae-geun], 선생님 + 은 → 선생님은\n- 받침 없는 명사 + 는: 나 + 는 → 나는 [na-neun], 저 + 는 → 저는, 사과 + 는 → 사과는\n\n2. 주요 문법 기능:\n- 대화의 화제 제시(Topic Introduction): 청자와 이미 알고 있거나 새로 이야기하고자 하는 주제를 꺼낼 때 사용합니다. (예: 오늘은 날씨가 좋습니다. / 제 이름은 김민수입니다.)\n- 보편적 진리 및 일반적 사실 서술: 사물의 속성이나 정의를 설명할 때 사용합니다. (예: 사과는 과일입니다. / 지구는 둥급니다.)\n\n3. 주격 조사와의 1차적 차이:\n'은/는'은 단순한 문법적 주어 표지를 넘어 화자가 담화의 초점을 어디에 두고 있는지를 알리는 담화 표지(Discourse Marker) 역할을 수행합니다.",
      "examples": [
        {
          "target": "저는 한국 사람입니다.",
          "reading": "Jeo-neun Hanguk saram-imnida.",
          "translation": "As for me, I am Korean."
        },
        {
          "target": "이것은 한국어 책입니다.",
          "reading": "Igeot-eun hangugeo chaek-imnida.",
          "translation": "As for this, it is a Korean book."
        },
        {
          "target": "오늘은 월요일입니다.",
          "reading": "Oneul-eun woryoil-imnida.",
          "translation": "As for today, it is Monday."
        },
        {
          "target": "제 친구는 미국에서 왔습니다.",
          "reading": "Je chingu-neun miguk-eseo watseumnida.",
          "translation": "As for my friend, he/she came from the United States."
        }
      ],
      "mnemonics": [
        "받침 있으면 동그란 '은'(ㅇ), 받침 없으면 날씬한 '는'(ㄴ)! 명사의 마지막 글자 받침을 확인하세요."
      ],
      "culturalNotes": [
        "한국어 대화에서는 문맥상 화제가 명확할 경우 주어나 주제어('저는', '그 사람은')를 자주 생략합니다. 주제어를 계속 반복하면 오히려 어색하게 들릴 수 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "명사 '선생님(teacher - 받침 ㅁ 있음)' 뒤에 결합할 올바른 주제격 조사는 무엇입니까?",
          "options": [
            "선생님은",
            "선생님는",
            "선생님이"
          ],
          "answerIndex": 0,
          "explanation": "'선생님'은 마지막 음절 '님'에 받침 'ㅁ'이 있으므로 주제격 조사 '은'이 결합하여 '선생님은'이 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "다음 중 받침 없는 명사 뒤에 '는'이 올바르게 결합된 문장은 어느 것입니까?",
          "options": [
            "친구는 학생입니다.",
            "친구은 학생입니다.",
            "친구이 학생입니다."
          ],
          "answerIndex": 0,
          "explanation": "'친구'는 받침이 없는 모음 종결 명사이므로 '는'이 결합하여 '친구는'이 올바릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'이것(받침 ㅅ 있음) _____ 사전입니다.' 빈칸에 들어갈 올바른 주제격 조사는 무엇입니까?",
          "options": [
            "은",
            "는",
            "가"
          ],
          "answerIndex": 0,
          "explanation": "'이것'은 받침 'ㅅ'이 있으므로 연음되어 '이것은[igeoseun]'이 됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'오늘은 월요일입니다'(Today is Monday)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "오늘은 월요일입니다.",
            "오늘은 월요일입니다"
          ],
          "explanation": "오늘(받침 ㄹ) + 은(주제격) + 월요일(명사) + 입니다 = 오늘은 월요일입니다."
        }
      ]
    }
  },
  "ko-u2-l2": {
    "id": "ko-u2-l2",
    "subject": "korean",
    "unit": 2,
    "lessonNumber": 2,
    "title": "주격 조사 이/가와 새로운 정보의 초점 (Subject Particle 이/가 & Focus)",
    "level": "A1",
    "objective": "주격 조사 '이/가'의 결합 규칙을 체득하고, 통사적 주어 지정 및 새로운 정보(New Information) 초점 기능을 정확히 구사한다.",
    "presentation": {
      "explanation": "한국어의 '이/가'는 문장의 통사적 주어(Grammatical Subject)를 명확히 지정해 주는 격조사(Case Particle)입니다.\n\n1. 형태 결합 규칙:\n앞 명사의 끝 음절 받침 유무에 따라 '이'와 '가'를 구분하여 씁니다.\n- 받침 있는 명사 + 이: 가방 + 이 → 가방이 [ga-bang-i], 물 + 이 → 물이 [mu-ri]\n- 받침 없는 명사 + 가: 학교 + 가 → 학교가 [hak-gyo-ga], 모자 + 가 → 모자가 [mo-ja-ga]\n\n2. 인칭 대명사 결합 시 불규칙 어간 변화:\n대명사 뒤에 주격 조사 '가'가 결합할 때 형태가 특수하게 바뀝니다.\n- 나 + 가 → 내가 [nae-ga] (I - informal)\n- 저 + 가 → 제가 [je-ga] (I - polite/formal)\n- 너 + 가 → 네가 [ne-ga / colloquially ni-ga] (You - informal)\n- 누구 + 가 → 누가 [nu-ga] (Who?)\n\n3. 주요 문법 및 화용 기능:\n- 새로운 정보 도입(New Information): 눈앞에서 벌어지는 생생한 현상이나 새로운 사건을 묘사할 때 사용합니다. (예: 밖을 보세요! 비가 옵니다. / 꽃이 피었습니다.)\n- 의문사 주어에 대한 특정 지정(Exhaustive Listing / Focus): '누가(Who)' 질문에 대한 직접적 답변에 사용합니다. (예: Q: 누가 반장입니까? A: 민수가 반장입니다.)",
      "examples": [
        {
          "target": "비가 옵니다.",
          "reading": "Bi-ga omnida.",
          "translation": "It is raining (Rain is falling)."
        },
        {
          "target": "누가 선생님입니까? 제가 선생님입니다.",
          "reading": "Nu-ga seonsaengnim-imnikka? Je-ga seonsaengnim-imnida.",
          "translation": "Who is the teacher? I am the teacher."
        },
        {
          "target": "물이 아주 따뜻합니다.",
          "reading": "Mul-i aju ttatteut-hamnida.",
          "translation": "The water is very warm."
        },
        {
          "target": "한국어가 참 재미있습니다.",
          "reading": "Hangugeo-ga cham jaemi-isseumnida.",
          "translation": "The Korean language is really interesting."
        }
      ],
      "mnemonics": [
        "'저 + 가 = 제가', '나 + 가 = 내가', '누구 + 가 = 누가'! '저가'나 '누구가'라고 말하지 않도록 주의하세요."
      ],
      "culturalNotes": [
        "처음 자기소개를 할 때는 '저는 김민수입니다'(화제)라고 하지만, '누가 발표하겠습니까?'라는 질문에 손을 들 때는 '제가 하겠습니다'(초점/지정)라고 답하는 것이 자연스럽습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "1인칭 공손 대명사 '저(I)'에 주격 조사 '가'가 결합할 때 변화하는 올바른 형태는 무엇입니까?",
          "options": [
            "제가",
            "저가",
            "저는"
          ],
          "answerIndex": 0,
          "explanation": "'저 + 가'는 불규칙 축약되어 '제가[jega]'로 변합니다. '저가'는 비문법적 형태입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'가방(받침 ㅇ 있음) _____ 무겁습니다.' 빈칸에 들어갈 올바른 주격 조사는 무엇입니까?",
          "options": [
            "이",
            "가",
            "을"
          ],
          "answerIndex": 0,
          "explanation": "'가방'은 받침 'ㅇ'이 있으므로 주격 조사 '이'가 결합하여 '가방이[gabangi]'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'Q: 누가 한국 사람입니까? A: _____ 한국 사람입니다.' 빈칸에 들어갈 가장 자연스러운 주어 표현은 무엇입니까?",
          "options": [
            "제가",
            "저는",
            "저를"
          ],
          "answerIndex": 0,
          "explanation": "'누가(Who)'라는 의문사 초점 질문에 답변할 때는 주격 조사 결합형인 '제가(I am the one)'가 문맥상 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'비가 옵니다'(It is raining)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "비가 옵니다.",
            "비가 옵니다"
          ],
          "explanation": "비(받침 없음) + 가(주격) + 옵니다 = 비가 옵니다."
        }
      ]
    }
  },
  "ko-u2-l3": {
    "id": "ko-u2-l3",
    "subject": "korean",
    "unit": 2,
    "lessonNumber": 3,
    "title": "은/는 대 이/가의 의미·화용론적 대립 (Contrastive Pragmatics: 은/는 vs 이/가)",
    "level": "A1",
    "objective": "담화 맥락 속에서 '은/는'(구정보·대조·화제)과 '이/가'(신정보·지정·초점)의 미묘한 의미 차이를 구별하고 적재적소에 선택하여 사용한다.",
    "presentation": {
      "explanation": "한국어를 배우는 학습자에게 '은/는'과 '이/가'의 구분은 가장 핵심적인 문법 과제입니다. 두 조사는 문맥(Context)과 화자의 의도(Speaker's Focus)에 따라 구별됩니다.\n\n1. 구정보(Topic) vs 신정보(Subject Focus):\n- 은/는 (Topic / Given Info): 청자와 이미 알고 있는 대상을 주제로 끌고 올 때 (예: 옛날에 한 남자가(신정보) 살았습니다. 그 남자는(구정보) 매우 착했습니다.)\n- 이/가 (New Info / Specific Event): 청자에게 새로운 사실을 처음 알리거나 지각할 때 (예: 저기 버스가 옵니다!)\n\n2. 대조(Contrast)의 은/는:\n둘 이상의 대상을 서로 비교하거나 대조할 때 '은/는'을 필수적으로 사용합니다.\n- 사과는 맛있습니다. 하지만 바나나는 맛없습니다. (Apples are tasty, BUT bananas are not.)\n- 형은 키가 큽니다. 반면에 동생은 키가 작습니다.\n\n3. 지정(Exclusive Focus)의 이/가:\n'오직 그 대상만이 그러하다'는 배타적 지정을 나타낼 때 '이/가'를 씁니다.\n- 민수가 서울대에 합격했습니다 (다른 사람이 아닌 바로 민수가).\n- 이것이 진짜 보석입니다 (다른 것이 아닌 이것이 바로).",
      "examples": [
        {
          "target": "형은 학생이고 동생은 회사원입니다.",
          "reading": "Hyeong-eun haksaeng-igo dongsaeng-eun hoesawon-imnida.",
          "translation": "The older brother is a student, while the younger brother is an office worker."
        },
        {
          "target": "사과는 빨갛고 바나나는 노랗습니다.",
          "reading": "Sagwa-neun ppalgako banana-neun noratseumnida.",
          "translation": "Apples are red, whereas bananas are yellow."
        },
        {
          "target": "옛날에 한 왕이 살았습니다. 그 왕은 지혜로웠습니다.",
          "reading": "Yennar-e han wang-i saratseumnida. Geu wang-eun jihyerowotseumnida.",
          "translation": "Once upon a time, a king lived. The king was wise."
        },
        {
          "target": "바다는 푸르고 하늘은 맑습니다.",
          "reading": "Bada-neun pureugo haneur-eun maktseumnida.",
          "translation": "The sea is blue and the sky is clear."
        }
      ],
      "mnemonics": [
        "대조할 때는 '은/는' (비교 대조의 짝꿍!), 처음 등장할 때는 '이/가', 다시 언급할 때는 '은/는'!"
      ],
      "culturalNotes": [
        "한국어 문학이나 전래동화의 첫 문장은 항상 '옛날 옛적에 착한 호랑이가(이/가) 살았습니다'로 시작하고, 두 번째 문장부터는 '그 호랑이는(은/는)...'으로 전개됩니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'한국어는 재미있습니다. 하지만 수학_____ 어렵습니다.' 두 과목을 대조할 때 빈칸에 들어갈 가장 알맞은 조사는 무엇입니까?",
          "options": [
            "은",
            "는",
            "이"
          ],
          "answerIndex": 0,
          "explanation": "'한국어는'과 대조를 이루며, '수학'은 받침 'ㄱ'이 있으므로 대조의 보조사 '은'이 결합하여 '수학은'이 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "이야기를 시작하며 새로운 주인공을 처음 소개할 때(신정보) 알맞은 조사가 쓰인 문장은 무엇입니까?",
          "options": [
            "한 소년이 마을에 살았습니다.",
            "한 소년은 마을에 살았습니다.",
            "한 소년을 마을에 살았습니다."
          ],
          "answerIndex": 0,
          "explanation": "담화에 새로운 대상을 처음 도입하는 신정보 주어에는 주격 조사 '이/가'를 사용하여 '한 소년이'가 자연스럽습니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'형_____ 키가 크고, 동생_____ 키가 작습니다.' 두 사람의 키를 대조하는 빈칸에 알맞은 조사 쌍은 무엇입니까?",
          "options": [
            "은, 은",
            "이, 가",
            "을, 를"
          ],
          "answerIndex": 0,
          "explanation": "'형(받침 ㅇ 있음)은'과 '동생(받침 ㅇ 있음)은'으로 대조 보조사 '은'이 양쪽에 결합해야 대조 문맥이 성립합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'사과는 빨갛습니다'(Apples are red)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "사과는 빨갛습니다.",
            "사과는 빨갛습니다"
          ],
          "explanation": "사과(받침 없음) + 는(주제격) + 빨갛습니다 = 사과는 빨갛습니다."
        }
      ]
    }
  },
  "ko-u2-l4": {
    "id": "ko-u2-l4",
    "subject": "korean",
    "unit": 2,
    "lessonNumber": 4,
    "title": "이중 주어문과 대주제-소주어 구조 (Double Subject Constructions: 은/는 ... 이/가)",
    "level": "A1",
    "objective": "'[전체/대주제]은/는 [부분/소주어]이/가 [형용사]' 구조를 이해하고, 사람의 신체 특징, 성격, 사물의 속성 및 날씨를 자연스럽게 묘사한다.",
    "presentation": {
      "explanation": "한국어 통사 구조의 매우 독특하고 아름다운 특징 중 하나는 한 문장 안에 두 개의 주격/주제격 명사가 연이어 나타나는 이중 주어문(Double Subject Construction)입니다.\n\n1. 문장 공식과 논리 구조:\n[전체·대주제] + 은/는 + [부분·소주어] + 이/가 + [형용사/서술어]\n- '대주제(은/는)'는 전체 대상이나 논의의 범위를 한정합니다.\n- '소주어(이/가)'는 그 대상의 신체 부위, 속성, 세부 특징을 지칭하며 형용사의 직접적인 주어가 됩니다.\n\n2. 대표적 활용 분야:\n- 신체 특징 및 외모 묘사:\n  - 코끼리는 코가 깁니다. (As for elephants, the trunk is long.)\n  - 민수 씨는 키가 큽니다. (As for Minsu, height is tall → Minsu is tall.)\n  - 지은 씨는 눈이 예쁩니다. (Jieun has pretty eyes.)\n- 성격 및 능력:\n  - 선생님은 마음이 따뜻합니다. (The teacher has a warm heart.)\n  - 제 친구는 한국어 발음이 좋습니다. (My friend has good Korean pronunciation.)\n- 도시 및 환경 특성:\n  - 서울은 대중교통이 편리합니다. (Seoul has convenient public transportation.)\n  - 한국은 가을이 아름답습니다. (Korea has beautiful autumns.)",
      "examples": [
        {
          "target": "코끼리는 코가 깁니다.",
          "reading": "Kokkiri-neun ko-ga gimnida.",
          "translation": "An elephant has a long trunk (As for elephants, the trunk is long)."
        },
        {
          "target": "민수 씨는 키가 아주 큽니다.",
          "reading": "Minsu ssi-neun ki-ga aju keumnida.",
          "translation": "Minsu is very tall."
        },
        {
          "target": "지은 씨는 마음이 참 따뜻합니다.",
          "reading": "Jieun ssi-neun ma-eum-i cham ttatteut-hamnida.",
          "translation": "Jieun has a truly warm heart."
        },
        {
          "target": "서울은 교통이 매우 편리합니다.",
          "reading": "Seoul-eun gyotong-i maeu pyeonrihamnida.",
          "translation": "Seoul has very convenient transportation."
        }
      ],
      "mnemonics": [
        "이중 주어 공식: 큰 대상에는 '은/는', 작은 부위에는 '이/가'! 코끼리는(큰 동물) 코가(작은 부위) 깁니다."
      ],
      "culturalNotes": [
        "영어로는 'Minsu has a tall height' 또는 'Minsu is tall'이지만, 한국어에서는 '민수 씨는 키가 큽니다'처럼 속성을 소주어로 분리하여 표현하는 것이 가장 자연스럽고 세련된 어법입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'코끼리(전체) _____ 코(부분) _____ 깁니다.' 이중 주어문 공식에 맞게 빈칸에 들어갈 올바른 조사 쌍은 무엇입니까?",
          "options": [
            "는, 가",
            "가, 는",
            "를, 이"
          ],
          "answerIndex": 0,
          "explanation": "전체 대주제 '코끼리(받침 없음)' 뒤에는 '는', 부분 소주어 '코(받침 없음)' 뒤에는 '가'가 결합하여 '코끼리는 코가 깁니다'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'민수 씨는 마음(받침 ㅁ 있음) _____ 착합니다.' 빈칸에 들어갈 올바른 소주어 조사는 무엇입니까?",
          "options": [
            "이",
            "가",
            "은"
          ],
          "answerIndex": 0,
          "explanation": "'마음'은 받침 'ㅁ'이 있으므로 소주어격 조사 '이'가 결합하여 '마음이 착합니다'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 한국어의 자연스러운 이중 주어문 구조를 갖춘 문장은 어느 것입니까?",
          "options": [
            "지은 씨는 눈이 예쁩니다.",
            "지은 씨를 눈을 예쁩니다.",
            "지은 씨에 눈에 예쁩니다."
          ],
          "answerIndex": 0,
          "explanation": "'[대주제]은/는 [소주어]이/가 [형용사]' 구조에 완벽히 부합하는 문장은 '지은 씨는 눈이 예쁩니다'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'코끼리는 코가 깁니다'(An elephant has a long trunk)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "코끼리는 코가 깁니다.",
            "코끼리는 코가 깁니다"
          ],
          "explanation": "코끼리는(대주제) + 코가(소주어) + 깁니다(형용사 서술) = 코끼리는 코가 깁니다."
        }
      ]
    }
  },
  "ko-u2-l5": {
    "id": "ko-u2-l5",
    "subject": "korean",
    "unit": 2,
    "lessonNumber": 5,
    "title": "존재사 있다/없다와 위치·소유 표현 (Existence & Possession: 있다/없다 & -에)",
    "level": "A1",
    "objective": "존재사 '있다(to exist/have)'와 '없다(to not exist/not have)'의 문형을 익히고, 위치 조사 '에'와 결합하여 사물과 사람의 존재 및 소유 관계를 표현한다.",
    "presentation": {
      "explanation": "한국어의 '있다'와 '없다'는 형용사/존재사로서 사물이나 사람의 위치(Location/Existence)와 소유(Possession)를 나타내는 핵심 어휘입니다.\n\n1. 위치와 존재 문형: [장소]에 [대상]이/가 있습니다/없습니다\n- 사물이나 사람이 특정 장소에 존재함을 나타냅니다.\n- 받침 있는 명사 + 이 있습니다: 책상 위에 시계가 있습니다. / 가방 안에 책이 있습니다.\n- 부정형: 방에 텔레비전이 없습니다. (There is no TV in the room.)\n\n2. 소유 문형: [사람]은 [사물/대상]이/가 있습니다/없습니다\n- 한국어에서는 '가지다(to hold)' 대신 '있다/없다' 구조로 소유를 표현합니다.\n- 저는 한국 친구가 있습니다. (I have a Korean friend.)\n- 지갑에 현금이 없습니다. / 저는 차가 없습니다. (I don't have a car.)\n\n3. 사람에 대한 높임 존재사 '계시다':\n웃어른이나 선생님이 특정 장소에 계심을 나타낼 때는 '있다' 대신 높임 특수 어휘 '계시다'를 사용합니다.\n- 교실에 선생님이 계십니다. (O) (선생님이 있습니다보다 정중함)",
      "examples": [
        {
          "target": "교실에 컴퓨터가 있습니다.",
          "reading": "Gyosil-e keompyuteo-ga isseumnida.",
          "translation": "There is a computer in the classroom."
        },
        {
          "target": "지금 지갑에 돈이 없습니다.",
          "reading": "Jigeum jigap-e don-i eopseumnida.",
          "translation": "Right now, there is no money in my wallet."
        },
        {
          "target": "저는 한국어 책이 있습니다.",
          "reading": "Jeo-neun hangugeo chaek-i isseumnida.",
          "translation": "I have a Korean textbook."
        },
        {
          "target": "교무실에 선생님이 계십니다.",
          "reading": "Gyomusil-e seonsaengnim-i gyesimnida.",
          "translation": "The teacher is in the faculty office."
        }
      ],
      "mnemonics": [
        "위치 조사 '에'는 화살표가 꽂히는 핀(Pin)! [장소]에 [대상]이 있다/없다로 기억하세요."
      ],
      "culturalNotes": [
        "한국어에서 위치를 나타낼 때는 '한국 서울 강남구'처럼 '큰 단위에서 작은 단위'로 내려가는 것이 원칙입니다. 가방 안의 필통, 필통 안의 연필 순서로 위치를 묘사합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'가방(bag) 안에 책(book - 받침 ㄱ 있음) _____ 있습니다.' 빈칸에 들어갈 알맞은 조사는 무엇입니까?",
          "options": [
            "이",
            "가",
            "은"
          ],
          "answerIndex": 0,
          "explanation": "'책'은 받침 'ㄱ'이 있으므로 존재 주격 조사 '이'가 결합하여 '책이 있습니다'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'도서관에 학생이 많이 _____(There are many students in the library).' 빈칸에 들어갈 긍정 존재 서술어는 무엇입니까?",
          "options": [
            "있습니다",
            "없습니다",
            "입니다"
          ],
          "answerIndex": 0,
          "explanation": "장소에 사람이 존재함을 나타내는 격식체 서술어는 '있습니다'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'저는 자동차가 _____ (I do not have a car).' 소유의 부정을 나타내는 올바른 존재사는 무엇입니까?",
          "options": [
            "없습니다",
            "아닙니다",
            "있습니다"
          ],
          "answerIndex": 0,
          "explanation": "물건의 소유가 없음을 나타낼 때는 '없습니다'를 씁니다. '아닙니다'는 신분/동일성을 부인할 때 씁니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'교실에 컴퓨터가 있습니다'(There is a computer in the classroom)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "교실에 컴퓨터가 있습니다.",
            "교실에 컴퓨터가 있습니다"
          ],
          "explanation": "교실에(장소) + 컴퓨터가(대상) + 있습니다(존재사) = 교실에 컴퓨터가 있습니다."
        }
      ]
    }
  },
  "ko-u3-l1": {
    "id": "ko-u3-l1",
    "subject": "korean",
    "unit": 3,
    "lessonNumber": 1,
    "title": "목적격 조사 을/를과 타동사 구문 (Object Particle 을/를 & Transitive Verbs)",
    "level": "A1",
    "objective": "목적격 조사 '을/를'의 받침 결합 규칙을 숙지하고, 타동사(먹다, 마시다, 읽다, 보다)와 결합하여 자연스러운 직접 목적어 구문을 구성한다.",
    "presentation": {
      "explanation": "한국어에서 동작의 직접적인 대상(Direct Object)을 표시하는 조사를 목적격 조사 '을/를'이라고 합니다. 타동사(Transitive Verb) 앞에 위치하여 목적어 역할을 수행합니다.\n\n1. 형태 결합 규칙 (Phonological Conditioning):\n명사의 마지막 음절에 받침이 있는지에 따라 '을'과 '를'을 선택합니다.\n- 받침 있는 명사 + 을: 밥 + 을 → 밥을 [ba-beul], 물 + 을 → 물을 [mu-reul], 책 + 을 → 책을 [chae-geul]\n- 받침 없는 명사 + 를: 사과 + 를 → 사과를 [sa-gwa-reul], 커피 + 를 → 커피를 [keo-pi-reul], 영화 + 를 → 영화를 [yeong-hwa-reul]\n\n2. 기본 타동사 결합 패턴:\n- 밥을 먹습니다. (I eat rice/a meal.)\n- 물을 마십니다. (I drink water.)\n- 한국어 책을 읽습니다. (I read a Korean book.)\n- 텔레비전을 봅니다. (I watch television.)\n\n3. 연음 법칙(Liaison) 주의:\n받침 있는 명사 뒤에 모음 조사 '을'이 오면 받침 자음이 뒷 음절 초성으로 넘어가 소리 납니다 (예: '음악을' → [으마글], '신문을' → [신무늘]).",
      "examples": [
        {
          "target": "저는 아침에 사과를 먹습니다.",
          "reading": "Jeo-neun achim-e sagwa-reul meokseumnida.",
          "translation": "I eat an apple in the morning."
        },
        {
          "target": "시원한 물을 마십니다.",
          "reading": "Siwonhan mul-eul masimnida.",
          "translation": "I drink cool water."
        },
        {
          "target": "도서관에서 책을 읽습니다.",
          "reading": "Doseogwan-eseo chaek-eul ikseumnida.",
          "translation": "I read a book in the library."
        },
        {
          "target": "극장에서 한국 영화를 봅니다.",
          "reading": "Geukjang-eseo hanguk yeonghwa-reul bomnida.",
          "translation": "I watch a Korean movie at the theater."
        }
      ],
      "mnemonics": [
        "받침 있으면 '을'(ㅇ 받침의 동그라미 결합), 받침 없으면 '를'(ㄹ 모음 흐름)! 밥을 vs 사과를."
      ],
      "culturalNotes": [
        "한국의 식사 문화에서는 '식사하셨습니까?' 또는 '밥 먹었어?'가 친근한 안부 인사로 사용됩니다. 밥과 국, 다양한 반찬을 한 상에 차려놓고 함께 나누는 정(情)의 문화가 담겨 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'커피(coffee - 받침 없음)' 명사 뒤에 목적격 조사 '을/를'을 결합할 때 올바른 형태는 무엇입니까?",
          "options": [
            "커피를",
            "커피을",
            "커피가"
          ],
          "answerIndex": 0,
          "explanation": "'커피'는 받침이 없는 모음 종결 명사이므로 목적격 조사 '를'이 결합하여 '커피를'이 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'저는 음악(music - 받침 ㄱ 있음) _____ 듣습니다.' 빈칸에 들어갈 알맞은 목적격 조사는 무엇입니까?",
          "options": [
            "을",
            "를",
            "이"
          ],
          "answerIndex": 0,
          "explanation": "'음악'은 받침 'ㄱ'이 있으므로 목적격 조사 '을'이 결합하여 연음 발음 [으마글]이 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 목적격 조사의 결합이 어법에 맞고 자연스러운 문장은 어느 것입니까?",
          "options": [
            "학생이 한국어를 공부합니다.",
            "학생이 한국어을 공부합니다.",
            "학생이 한국어이 공부합니다."
          ],
          "answerIndex": 0,
          "explanation": "'한국어'는 받침이 없으므로 '를'과 결합하여 '한국어를 공부합니다'가 올바릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'물을 마십니다'(I drink water)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "물을 마십니다.",
            "물을 마십니다"
          ],
          "explanation": "물(받침 ㄹ) + 을(목적격) + 마십니다 = 물을 마십니다."
        }
      ]
    }
  },
  "ko-u3-l2": {
    "id": "ko-u3-l2",
    "subject": "korean",
    "unit": 3,
    "lessonNumber": 2,
    "title": "한국어의 기본 어순 SOV와 통사적 유연성 (SOV Word Order & Scrambling)",
    "level": "A1",
    "objective": "한국어의 핵심 어순인 '주어(S) + 목적어(O) + 동사/서술어(V)' 체계를 이해하고, 조사의 결합력에 기반한 어순 도치(Scrambling)를 바르게 파악한다.",
    "presentation": {
      "explanation": "영어(SVO: Subject-Verb-Object)와 달리 한국어는 기본적으로 주어-목적어-동사(SOV: Subject-Object-Verb) 어순을 따릅니다. 가장 중요한 원칙은 서술어(동사/형용사)가 반드시 문장의 맨 끝에 위치한다는 점입니다.\n\n1. 기본 SOV 어순:\n- [주어/주제] + [목적어] + [서술어(동사)]\n- 민수 씨가(S) + 사과를(O) + 먹습니다(V). (Minsu eats an apple.)\n- 저는(S) + 한국어를(O) + 공부합니다(V). (I study Korean.)\n\n2. 조사의 힘과 어순의 유연성 (Scrambling):\n한국어는 명사 뒤에 붙는 격조사(은/는, 이/가, 을/를)가 문법적 역할을 명확히 규정하므로, 동사가 끝에 오는 한 주어와 목적어의 위치가 바뀌어도 문장의 기본 의미는 유지됩니다.\n- 사과를(O) 민수 씨가(S) 먹습니다(V). (An apple, Minsu eats it. - 사과를 강조하는 도치문)\n\n3. 시간 및 장소 부사어의 위치:\n시간이나 장소를 나타내는 부사어는 보통 주어 바로 뒤나 문장 맨 앞에 옵니다.\n- [시간] [주어] [장소] [목적어] [동사]: 오늘 저는 도서관에서 책을 읽습니다.",
      "examples": [
        {
          "target": "민수 씨가 사과를 먹습니다.",
          "reading": "Minsu ssi-ga sagwa-reul meokseumnida.",
          "translation": "Minsu eats an apple (Basic SOV)."
        },
        {
          "target": "저는 매일 한국어를 공부합니다.",
          "reading": "Jeo-neun maeil hangugeo-reul gongbuhamnida.",
          "translation": "I study Korean every day."
        },
        {
          "target": "친구가 예쁜 편지를 씁니다.",
          "reading": "Chingu-ga yeppeun pyeonji-reul sseumnida.",
          "translation": "A friend writes a pretty letter."
        },
        {
          "target": "우리는 오늘 저녁에 영화를 봅니다.",
          "reading": "Uri-neun oneul jeonyeok-e yeonghwa-reul bomnida.",
          "translation": "We watch a movie this evening."
        }
      ],
      "mnemonics": [
        "한국어 어순의 황금률: '동사는 언제나 맨 끝에!' (SOV: 주어 → 목적어 → 동사 끝판왕)."
      ],
      "culturalNotes": [
        "한국어는 동사가 문장 끝에 오기 때문에 '한국말은 끝까지 들어봐야 안다'는 유명한 속담이 있습니다. 긍정인지 부정인지, 시제가 무엇인지는 문장의 맨 마지막 어미를 듣고 판단합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'민수 씨', '책', '읽습니다'를 한국어의 기본 SOV 어순과 올바른 조사에 맞추어 배열한 문장은 무엇입니까?",
          "options": [
            "민수 씨가 책을 읽습니다.",
            "민수 씨가 읽습니다 책을.",
            "책을 읽습니다 민수 씨가."
          ],
          "answerIndex": 0,
          "explanation": "주어(민수 씨가) + 목적어(책을) + 동사(읽습니다) 순서의 SOV 구조가 가장 표준적이고 자연스럽습니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "다음 중 한국어의 SOV 통사 구조에 맞게 동사가 문장 맨 끝에 올바르게 위치한 문장은 어느 것입니까?",
          "options": [
            "지은 씨는 커피를 마십니다.",
            "지은 씨는 마십니다 커피를.",
            "마십니다 지은 씨는 커피를."
          ],
          "answerIndex": 0,
          "explanation": "한국어는 서술어(마십니다)가 반드시 문장 끝에 와야 하므로 '지은 씨는 커피를 마십니다'가 바른 어순입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "영어 'I watch a movie'(SVO)를 한국어 기본 어순(SOV)으로 올바르게 번역한 문장은 무엇입니까?",
          "options": [
            "저는 영화를 봅니다.",
            "저는 봅니다 영화를.",
            "영화를 봅니다 저는."
          ],
          "answerIndex": 0,
          "explanation": "주어(저는) + 목적어(영화를) + 동사(봅니다)의 SOV 어순입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'한국어를 공부합니다'(I study Korean)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "한국어를 공부합니다.",
            "한국어를 공부합니다"
          ],
          "explanation": "한국어(목적어) + 를(조사) + 공부합니다(동사) = 한국어를 공부합니다."
        }
      ]
    }
  },
  "ko-u3-l3": {
    "id": "ko-u3-l3",
    "subject": "korean",
    "unit": 3,
    "lessonNumber": 3,
    "title": "여격 조사 에게/한테와 수여 동사 (Dative Particles -에게/-한테 & Giving Verbs)",
    "level": "A1",
    "objective": "동작이 미치는 유정 대상(사람·동물)을 나타내는 여격 조사 '에게/한테'와 높임 조사 '께'를 익히고, 수여 동사(주다, 선물하다, 보내다) 문장을 바르게 구사한다.",
    "presentation": {
      "explanation": "한국어에서 사람이나 동물 등 살아있는 유정물(Animate Entity)에게 어떤 행동을 하거나 물건을 전달할 때 사용하는 조사를 여격 조사(Dative Particle)라고 합니다.\n\n1. 여격 조사의 3가지 형태와 격식:\n- 에게 [e-ge]: 격식체, 문어체 및 표준 서술에서 두루 사용하는 보편적 여격 조사 (예: 친구에게, 동생에게)\n- 한테 [han-te]: 일상 구어체(Spoken Korean)에서 매우 자연스럽게 쓰이는 형태 (예: 친구한테, 나한테)\n- 께 [kke]: 부모님, 선생님, 웃어른 등 높여야 할 대상에게 쓰는 높임 여격 조사 (예: 부모님께, 선생님께)\n\n2. 수여 동사(Ditransitive Verbs) 문형 구조:\n[주어]가 + [받는 사람]에게/한테/께 + [물건]을/를 + [수여 동사]\n- 민수가 지은이에게 꽃을 줍니다. (Minsu gives flowers to Jieun.)\n- 제가 친구한테 이메일을 보냅니다. (I send an email to a friend.)\n- 학생이 선생님께 카네이션을 드립니다. ('주다'의 높임말 '드리다' 사용)\n\n3. 무생물 장소 착점 조사 '에'와의 구별:\n동작이 향하는 대상이 무생물 장소나 기관이면 '에게'가 아닌 '에'를 씁니다.\n- 회사에 갑니다 (O) / 회사에게 갑니다 (X)\n- 친구에게 갑니다 (O)",
      "examples": [
        {
          "target": "민수가 지은이에게 선물을 줍니다.",
          "reading": "Minsu-ga Jieun-i-ege seonmul-eul jumnida.",
          "translation": "Minsu gives a present to Jieun."
        },
        {
          "target": "저는 친구한테 편지를 보냅니다.",
          "reading": "Jeo-neun chingu-hante pyeonji-reul bonaemnida.",
          "translation": "I send a letter to a friend."
        },
        {
          "target": "선생님께 감사 인사를 드립니다.",
          "reading": "Seonsaengnim-kke gamsa insa-reul deurimnida.",
          "translation": "I express words of gratitude to the teacher (Honorific Dative 께)."
        },
        {
          "target": "동생에게 맛있는 빵을 사 줍니다.",
          "reading": "Dongsaeng-ege masinneun ppang-eul sa jumnida.",
          "translation": "I buy delicious bread for my younger sibling."
        }
      ],
      "mnemonics": [
        "글 쓸 때는 '에게', 말할 때는 '한테', 어른에게는 공손한 '께'!"
      ],
      "culturalNotes": [
        "한국에서는 스승의 날(5월 15일)이나 어버이날(5월 8일)에 '선생님께 / 부모님께' 감사 편지를 쓰고 꽃을 달아드리는 깊은 경로효친 전통이 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'선생님(높임 대상)'에게 감사 선물을 전달할 때 결합할 가장 알맞은 높임 여격 조사는 무엇입니까?",
          "options": [
            "선생님께",
            "선생님에게",
            "선생님한테"
          ],
          "answerIndex": 0,
          "explanation": "존경과 예의를 갖추어야 하는 대상인 '선생님' 뒤에는 높임 여격 조사 '께'를 쓰는 것이 가장 올바릅니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'민수가 친구(friend) _____ 생일 선물을 줍니다.' 빈칸에 들어갈 알맞은 일반 여격 조사는 무엇입니까?",
          "options": [
            "에게",
            "을",
            "이"
          ],
          "answerIndex": 0,
          "explanation": "선물을 받는 사람 대상이므로 여격 조사 '에게'가 결합하여 '친구에게'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 수여문 어법에 완벽히 부합하는 문장은 어느 것입니까?",
          "options": [
            "지은이가 친구에게 편지를 보냅니다.",
            "지은이가 친구를 편지에게 보냅니다.",
            "지은이가 편지에게 친구를 보냅니다."
          ],
          "answerIndex": 0,
          "explanation": "받는 사람(친구에게) + 물건(편지를) + 동사(보냅니다) 구조가 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'친구에게 선물을 줍니다'(I give a present to a friend)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "친구에게 선물을 줍니다.",
            "친구에게 선물을 줍니다"
          ],
          "explanation": "친구에게(여격) + 선물을(목적격) + 줍니다(동사) = 친구에게 선물을 줍니다."
        }
      ]
    }
  },
  "ko-u3-l4": {
    "id": "ko-u3-l4",
    "subject": "korean",
    "unit": 3,
    "lessonNumber": 4,
    "title": "대명사 목적어 축약(날, 널, 뭘, 이걸)과 일상 생략 (Object Contractions & Ellipsis)",
    "level": "A1",
    "objective": "일상 구어체에서 매우 빈번하게 사용되는 대명사 목적격 축약형(나를→날, 너를→널, 저를→절, 무엇을→뭘, 이것을→이걸)과 목적어 생략 화용론을 마스터한다.",
    "presentation": {
      "explanation": "한국어는 일상 구어체(Spoken Korean)에서 음절을 경제적이고 매끄럽게 발음하기 위해 대명사와 목적격 조사를 자주 축약(Contraction)합니다.\n\n1. 필수 대명사 목적격 축약 공식:\n- 나를 → 날 [nal] (Me - informal): 날 봐요 (Look at me)\n- 너를 → 널 [neol] (You - informal): 널 좋아해요 (I like you)\n- 저를 → 절 [jeol] (Me - polite): 절 도와주세요 (Please help me)\n- 무엇을 → 뭘 [mwol] (What): 뭘 찾으십니까? (What are you looking for?)\n- 누구를 → 누굴 [nu-gul] (Whom): 누굴 만납니까? (Whom are you meeting?)\n\n2. 지시대명사 목적격 축약형:\n- 이것을 → 이걸 [i-geol] (This thing)\n- 그것을 → 그걸 [geu-geol] (That thing near you)\n- 저것을 → 저걸 [jeo-geol] (That thing over there)\n\n3. 구어체에서의 목적격 조사 생략(Ellipsis):\n대화 상황에서 동작의 대상이 무엇인지 맥락상 명확할 때 목적격 조사 '을/를'은 아주 흔하게 생략됩니다.\n- 밥을 먹었어요? → 밥 먹었어요? (O - 완전 자연스러움)\n- 커피를 마셔요? → 커피 마셔요? (O)",
      "examples": [
        {
          "target": "지금 무엇을 합니까? 뭘 봅니까?",
          "reading": "Jigeum mueot-eul hamnikka? Mwol bomnikka?",
          "translation": "What are you doing now? What are you watching?"
        },
        {
          "target": "이걸 한번 입어 보세요.",
          "reading": "Igeol hanbeon ibeo boseyo.",
          "translation": "Please try wearing this on (이것을 → 이걸)."
        },
        {
          "target": "점심에 밥 먹었어요?",
          "reading": "Jeomsim-e bap meogeosseoyo?",
          "translation": "Did you have lunch? (Object particle omitted naturally)."
        },
        {
          "target": "저기 저걸 보세요.",
          "reading": "Jeogi jeogeol boseyo.",
          "translation": "Look at that thing over there (저것을 → 저걸)."
        }
      ],
      "mnemonics": [
        "축약 공식: '나를 = 날', '너를 = 널', '무엇을 = 뭘', '이것을 = 이걸'! 'ㄹ' 받침 하나로 날렵하게 압축!"
      ],
      "culturalNotes": [
        "격식 있는 공적인 발표나 작문에서는 축약형보다 '무엇을', '이것을', '저를' 등 원래 형태를 온전히 쓰는 것이 정중하고 품위 있는 인상을 줍니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'무엇을(what)'을 일상 구어체에서 한 글자로 축약하여 부드럽게 표현한 형태는 무엇입니까?",
          "options": [
            "뭘",
            "문",
            "말"
          ],
          "answerIndex": 0,
          "explanation": "'무엇을'은 구어에서 '뭘[mwol]'로 자연스럽게 축약됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'이것을(this thing)'을 가리키며 '이것을 사겠습니다'라고 할 때 쓰이는 알맞은 축약 표현은 무엇입니까?",
          "options": [
            "이걸",
            "이건",
            "이게"
          ],
          "answerIndex": 0,
          "explanation": "'이것을'의 축약형은 '이걸'입니다. '이건'은 '이것은', '이게'는 '이것이'의 축약형입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'Q: 지금 _____ 합니까? A: 음악을 듣습니다.' 빈칸에 들어갈 알맞은 의문 대명사 축약형은 무엇입니까?",
          "options": [
            "뭘",
            "날",
            "널"
          ],
          "answerIndex": 0,
          "explanation": "'무엇을 합니까?'의 축약 표현인 '뭘 합니까?'가 질문으로 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'이걸 보세요'(Look at this)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "이걸 보세요.",
            "이걸 보세요"
          ],
          "explanation": "이걸(이것을의 축약형) + 보세요 = 이걸 보세요."
        }
      ]
    }
  },
  "ko-u3-l5": {
    "id": "ko-u3-l5",
    "subject": "korean",
    "unit": 3,
    "lessonNumber": 5,
    "title": "일상 활동과 필수 타동사 연어 종합 (Daily Routines & Transitive Collocations)",
    "level": "A1",
    "objective": "한국어의 필수 기초 타동사(사다, 타다, 만나다, 듣다, 하다)와 관용적 목적어 연어(Collocation)를 종합하여 하루 일과를 유창하게 묘사한다.",
    "presentation": {
      "explanation": "한국어의 기초 타동사들은 특정한 명사 목적어와 결합하여 고유한 연어(Collocation) 관계를 형성합니다. 정확한 연어를 익히면 어색한 직역을 피하고 원어민다운 한국어를 구사할 수 있습니다.\n\n1. 교통수단 + 타다(to ride/take):\n- 버스를 타다 (take a bus)\n- 지하철을 타다 (take the subway)\n- 택시를 타다 (take a taxi)\n- 자전거를 타다 (ride a bicycle)\n\n2. 여가 및 학습 활동 연어:\n- 음악을 듣다 (listen to music) - ㄷ 불규칙 동사\n- 영화를 보다 (watch a movie)\n- 친구를 만나다 (meet a friend)\n- 옷을 사다 (buy clothes)\n- 한국어를 배우다 / 가르치다 (learn / teach Korean)\n\n3. '하다' 동사 결합 파생 동사:\n동작성 명사 뒤에 '을/를 하다'가 붙어 하나의 구체적인 행위를 나타냅니다.\n- 운동을 하다 (exercise/work out)\n- 공부를 하다 (study)\n- 쇼핑을 하다 (go shopping)\n- 청소를 하다 (clean up/do cleaning)",
      "examples": [
        {
          "target": "저는 아침에 지하철을 탑니다.",
          "reading": "Jeo-neun achim-e jihacheol-eul tamnida.",
          "translation": "I take the subway in the morning."
        },
        {
          "target": "오후에 카페에서 친구를 만납니다.",
          "reading": "Ohu-e kape-eseo chingu-reul mannamnida.",
          "translation": "I meet a friend at a cafe in the afternoon."
        },
        {
          "target": "저녁에 공원에서 운동을 합니다.",
          "reading": "Jeonyeok-e gongwon-eseo undong-eul hamnida.",
          "translation": "I work out in the park in the evening."
        },
        {
          "target": "방에서 조용히 음악을 듣습니다.",
          "reading": "Bang-eseo joyonghi eumak-eul deutseumnida.",
          "translation": "I listen to music quietly in my room."
        }
      ],
      "mnemonics": [
        "교통수단 탈 때는 '타다', 친구 볼 때는 '만나다', 노래 들을 때는 '듣다'!"
      ],
      "culturalNotes": [
        "서울의 대중교통(지하철과 시내버스)은 세계 최고 수준의 환승 할인 시스템을 갖추고 있어 티머니(T-money) 교통카드로 '버스를 타고 지하철로 갈아타는' 일상이 매우 보편적입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'지하철(subway - 받침 ㄹ 있음)'을 목적어로 삼아 대중교통을 탑승함을 표현하는 가장 올바른 연어는 무엇입니까?",
          "options": [
            "지하철을 탑니다.",
            "지하철을 마십니다.",
            "지하철을 봅니다."
          ],
          "answerIndex": 0,
          "explanation": "교통수단에는 동사 '타다'가 결합하여 '지하철을 탑니다'가 자연스럽습니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'친구(받침 없음)'를 목적어로 하여 만남을 표현하는 올바른 문장은 어느 것입니까?",
          "options": [
            "카페에서 친구를 만납니다.",
            "카페에서 친구을 만납니다.",
            "카페에서 친구이 만납니다."
          ],
          "answerIndex": 0,
          "explanation": "'친구'는 받침이 없으므로 '를'과 결합하여 '친구를 만납니다'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 동작과 목적어의 연어 관계가 올바르게 짝지어진 문장은 무엇입니까?",
          "options": [
            "공원에서 운동을 합니다.",
            "공원에서 운동을 마십니다.",
            "공원에서 운동을 탑니다."
          ],
          "answerIndex": 0,
          "explanation": "'운동(exercise)'은 '하다' 동사와 결합하여 '운동을 합니다'가 올바른 연어입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'음악을 듣습니다'(I listen to music)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "음악을 듣습니다.",
            "음악을 듣습니다"
          ],
          "explanation": "음악(목적어) + 을(조사) + 듣습니다(동사) = 음악을 듣습니다."
        }
      ]
    }
  },
  "ko-u4-l1": {
    "id": "ko-u4-l1",
    "subject": "korean",
    "unit": 4,
    "lessonNumber": 1,
    "title": "해요체 종결어미와 양성모음 활용 (-아요: ㅏ, ㅗ 계열)",
    "level": "A1",
    "objective": "동사·형용사 어간 끝 음절 모음이 양성모음(ㅏ, ㅗ)일 때 종결어미 '-아요'를 결합하는 규칙과 연음 현상을 정확히 구사한다.",
    "presentation": {
      "explanation": "한국어의 '해요체'는 일상 회화에서 가장 친근하면서도 공손한 비격식 예사높임 종결어미입니다. 어간 모음의 성질에 따라 '-아요'와 '-어요'를 선택합니다.\n\n1. 양성모음(Bright/Yang Vowels: ㅏ, ㅗ)의 어미 결합:\n용언의 기본형에서 '다'를 뗀 어간의 마지막 모음이 'ㅏ'나 'ㅗ'인 경우 종결어미 '-아요'를 결합합니다.\n\n2. 받침 있는 양성모음 어간의 규칙 활용:\n어간 끝에 받침이 있으면 자음이 뒷 음절 '아'로 연음(Liaison)됩니다.\n- 앉다 (to sit): 앉 + 아요 → 앉아요 [안자요]\n- 닫다 (to close): 닫 + 아요 → 닫아요 [다다요]\n- 살다 (to live): 살 + 아요 → 살아요 [사라요]\n- 작다 (to be small): 작 + 아요 → 작아요 [자가요]\n- 많다 (to be many): 많 + 아요 → 많아요 [마나요]\n- 좋다 (to be good): 좋 + 아요 → 좋아요 [조아요]\n\n3. 문맥과 뉘앙스:\n격식체 '-ㅂ니다/습니다'가 군대, 뉴스, 공식 발표의 엄격한 느낌이라면, '-아요/어요'는 친구의 부모님, 직장 동료, 처음 만난 성인 간의 부드럽고 따뜻한 표준 대화체입니다.",
      "examples": [
        {
          "target": "저는 의자에 앉아요.",
          "reading": "Jeo-neun uija-e anjayo.",
          "translation": "I sit on the chair."
        },
        {
          "target": "바람이 불어서 창문을 닫아요.",
          "reading": "Baram-i bureoseo changmun-eul dadayo.",
          "translation": "Because the wind blows, I close the window."
        },
        {
          "target": "우리는 지금 서울에 살아요.",
          "reading": "Uri-neun jigeum Seoul-e sarayo.",
          "translation": "We live in Seoul right now."
        },
        {
          "target": "오늘 날씨가 참 좋아요.",
          "reading": "Oneul nalssi-ga cham joayo.",
          "translation": "The weather is really good today."
        }
      ],
      "mnemonics": [
        "밝고 환한 모음 'ㅏ, ㅗ' 뒤에는 밝은 '아요'! 앉다 → 앉아요, 살다 → 살아요."
      ],
      "culturalNotes": [
        "현대 한국 사회에서는 격식체(-ㅂ니다)보다 해요체(-아요/어요)가 일상 대화의 80% 이상을 차지합니다. 자연스러운 한국어 구사의 가장 중요한 열쇠입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '앉다(to sit)'의 어간 '앉(모음 ㅏ 있음)' 뒤에 결합할 올바른 해요체 형태는 무엇입니까?",
          "options": [
            "앉아요",
            "앉어요",
            "앉해요"
          ],
          "answerIndex": 0,
          "explanation": "'앉다'의 어간 모음은 'ㅏ'로 양성모음이므로 '-아요'가 결합하여 '앉아요[안자요]'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "형용사 '좋다(to be good - 어간 모음 ㅗ)'의 올바른 해요체 활용형은 어느 것입니까?",
          "options": [
            "좋아요",
            "좋어요",
            "좋여요"
          ],
          "answerIndex": 0,
          "explanation": "어간 모음이 'ㅗ'이므로 '-아요'가 결합하여 '좋아요[조아요]'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 양성모음 어간에 '-아요'가 올바르게 결합한 문장은 어느 것입니까?",
          "options": [
            "창문을 닫아요.",
            "창문을 닫어요.",
            "창문을 닫해요."
          ],
          "answerIndex": 0,
          "explanation": "'닫다'의 어간 모음이 'ㅏ'이므로 '-아요'와 결합하여 '닫아요'가 올바릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'서울에 살아요'(I live in Seoul)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "서울에 살아요.",
            "서울에 살아요"
          ],
          "explanation": "서울에(장소) + 살아요(살다 + 아요) = 서울에 살아요."
        }
      ]
    }
  },
  "ko-u4-l2": {
    "id": "ko-u4-l2",
    "subject": "korean",
    "unit": 4,
    "lessonNumber": 2,
    "title": "해요체 종결어미와 음성모음 활용 (-어요: ㅓ, ㅜ, ㅡ, ㅣ 계열)",
    "level": "A1",
    "objective": "동사·형용사 어간 끝 모음이 양성모음(ㅏ, ㅗ)이 아닐 때 종결어미 '-어요'를 결합하는 규칙을 숙달한다.",
    "presentation": {
      "explanation": "어간의 끝 음절 모음이 'ㅏ'나 'ㅗ'가 아닌 모든 음성모음(Dark/Yin Vowels: ㅓ, ㅜ, ㅡ, ㅣ, ㅐ, ㅔ, ㅟ 등)으로 끝날 때는 종결어미 '-어요'를 결합합니다.\n\n1. 음성모음 어간의 규칙 활용:\n- 먹다 (to eat): 먹 (모음 ㅓ) + 어요 → 먹어요 [머거요]\n- 읽다 (to read): 읽 (모음 ㅣ) + 어요 → 읽어요 [일거요]\n- 입다 (to wear): 입 (모음 ㅣ) + 어요 → 입어요 [이버요]\n- 넓다 (to be spacious): 넓 (모음 ㅓ) + 어요 → 넓어요 [널버요]\n- 젊다 (to be young): 젊 (모음 ㅓ) + 어요 → 젊어요 [절머요]\n- 맛있다 (to be delicious): 맛있 + 어요 → 맛있어요 [마시써요]\n- 없다 (to not exist): 없 + 어요 → 없어요 [업써요]\n\n2. 발음 규칙 주의:\n받침 겹자음(Double Final Consonant) 뒤에 모음 어미 '-어요'가 오면 겹자음의 오른쪽 자음이 연음됩니다.\n- '읽어요' → [일거요] (ㄱ이 연음)\n- '넓어요' → [널버요] (ㅂ이 연음)",
      "examples": [
        {
          "target": "아침에 식당에서 밥을 먹어요.",
          "reading": "Achim-e sikdang-eseo bap-eul meogeoyo.",
          "translation": "I eat a meal at the restaurant in the morning."
        },
        {
          "target": "도서관에서 한국어 책을 읽어요.",
          "reading": "Doseogwan-eseo hangugeo chaek-eul ilgeoyo.",
          "translation": "I read a Korean book in the library."
        },
        {
          "target": "이 불고기는 정말 맛있어요.",
          "reading": "I bulgogi-neun jeongmal masisseoyo.",
          "translation": "This bulgogi is truly delicious."
        },
        {
          "target": "우리 집 거실이 아주 넓어요.",
          "reading": "Uri jip geosil-i aju neolbeoyo.",
          "translation": "Our living room is very spacious."
        }
      ],
      "mnemonics": [
        "ㅏ, ㅗ가 아니면 무조건 '-어요'! 먹어요, 읽어요, 맛있어요."
      ],
      "culturalNotes": [
        "식당에서 음식을 맛있게 먹고 계산할 때 사장님께 '정말 맛있어요! 잘 먹었습니다'라고 인사하면 매우 기뻐하십니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '먹다(to eat - 어간 모음 ㅓ)' 뒤에 결합할 올바른 해요체 형태는 무엇입니까?",
          "options": [
            "먹어요",
            "먹아요",
            "먹해요"
          ],
          "answerIndex": 0,
          "explanation": "'먹다'의 어간 모음은 'ㅓ'로 음성모음이므로 '-어요'가 결합하여 '먹어요[머거요]'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "동사 '읽다(to read)'의 해요체 활용형과 올바른 발음 표기는 어느 것입니까?",
          "options": [
            "읽어요 [일거요]",
            "읽아요 [일가요]",
            "읽해요 [일캐요]"
          ],
          "answerIndex": 0,
          "explanation": "'읽다'는 음성모음(ㅣ) 어간이므로 '-어요'와 결합하여 '읽어요'가 되며 연음되어 [일거요]로 발음됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 음성모음 어간에 '-어요'가 올바르게 결합한 문장은 어느 것입니까?",
          "options": [
            "한국 음식이 아주 맛있어요.",
            "한국 음식이 아주 맛있아요.",
            "한국 음식이 아주 맛있해요."
          ],
          "answerIndex": 0,
          "explanation": "'맛있다'의 어간 모음은 'ㅣ'이므로 '-어요'와 결합하여 '맛있어요'가 올바릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'책을 읽어요'(I read a book)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "책을 읽어요.",
            "책을 읽어요"
          ],
          "explanation": "책을(목적어) + 읽어요(읽다 + 어요) = 책을 읽어요."
        }
      ]
    }
  },
  "ko-u4-l3": {
    "id": "ko-u4-l3",
    "subject": "korean",
    "unit": 4,
    "lessonNumber": 3,
    "title": "하다 동사의 특별 활용 (하다 → 해요)",
    "level": "A1",
    "objective": "'하다'로 끝나는 모든 동사 및 형용사가 해요체에서 예외 없이 '해요'로 활용됨을 완벽히 체득한다.",
    "presentation": {
      "explanation": "한국어에서 '하다(to do)'는 가장 생산성이 높은 핵심 용언입니다. 수많은 명사 뒤에 '하다'가 붙어 동사나 형용사가 됩니다.\n\n1. '하다'의 해요체 활용 공식:\n- 역사적으로 '하 + 여요'의 결합 과정을 거쳐 현대 한국어에서는 항상 '해요' [hae-yo]로 축약되어 실현됩니다.\n- 하다 → 해요\n\n2. 대표적인 '하다' 결합 동사:\n- 공부하다 (to study) → 공부해요\n- 운동하다 (to work out) → 운동해요\n- 일하다 (to work) → 일해요\n- 전화하다 (to make a phone call) → 전화해요\n- 이야기하다 (to chat/talk) → 이야기해요 (구어 축약: 얘기해요)\n- 청소하다 (to clean) → 청소해요\n- 쇼핑하다 (to shop) → 쇼핑해요\n\n3. 대표적인 '하다' 결합 형용사:\n- 친절하다 (to be kind) → 친절해요\n- 깨끗하다 (to be clean) → 깨끗해요\n- 따뜻하다 (to be warm) → 따뜻해요\n- 복잡하다 (to be crowded/complex) → 복잡해요",
      "examples": [
        {
          "target": "저는 매일 저녁에 한국어를 공부해요.",
          "reading": "Jeo-neun maeil jeonyeok-e hangugeo-reul gongbuhaeyo.",
          "translation": "I study Korean every evening."
        },
        {
          "target": "공원에서 친구와 운동해요.",
          "reading": "Gongwon-eseo chingu-wa undonghaeyo.",
          "translation": "I exercise with a friend at the park."
        },
        {
          "target": "선생님이 매우 친절해요.",
          "reading": "Seonsaengnim-i maeu chinjeolhaeyo.",
          "translation": "The teacher is very kind."
        },
        {
          "target": "방이 아주 깨끗해요.",
          "reading": "Bang-i aju kkaekkeut-haeyo.",
          "translation": "The room is very clean."
        }
      ],
      "mnemonics": [
        "'하다'가 보이면 무조건 '해요'로 체인지! 공부하다 → 공부해요, 운동하다 → 운동해요."
      ],
      "culturalNotes": [
        "한국어의 명사+하다 구조는 외래어 수용에도 매우 적극적입니다. 예를 들어 '드라이브하다(drive)', '샤워하다(shower)', '조깅하다(jog)'처럼 외래어에 '하다'를 붙여 자유롭게 동사로 활용합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '공부하다(to study)'의 올바른 해요체 종결 형태는 무엇입니까?",
          "options": [
            "공부해요",
            "공부하아요",
            "공부하여요"
          ],
          "answerIndex": 0,
          "explanation": "'하다' 동사는 현대 한국어 해요체에서 '해요'로 활용되므로 '공부해요'가 올바릅니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "형용사 '친절하다(to be kind)'의 올바른 해요체 서술문은 어느 것입니까?",
          "options": [
            "선생님이 친절해요.",
            "선생님이 친절하요.",
            "선생님이 친절하어요."
          ],
          "answerIndex": 0,
          "explanation": "'친절하다'의 '하다'가 '해요'로 바뀌어 '선생님이 친절해요'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'A: 지금 뭐 해요? B: 공원에서 _____ (I am exercising).' 빈칸에 들어갈 알맞은 표현은 무엇입니까?",
          "options": [
            "운동해요",
            "운동하요",
            "운동먹어요"
          ],
          "answerIndex": 0,
          "explanation": "'운동하다'의 해요체 활용형은 '운동해요'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'한국어를 공부해요'(I study Korean)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "한국어를 공부해요.",
            "한국어를 공부해요"
          ],
          "explanation": "한국어를(목적어) + 공부해요(공부하다의 해요체) = 한국어를 공부해요."
        }
      ]
    }
  },
  "ko-u4-l4": {
    "id": "ko-u4-l4",
    "subject": "korean",
    "unit": 4,
    "lessonNumber": 4,
    "title": "모음 축약과 탈락 규칙 (가요, 봐요, 마셔요, 배워요, 써요)",
    "level": "A1",
    "objective": "어간에 받침이 없는 모음 종결 용언이 '-아요/어요'와 만날 때 일어나는 동음 탈락과 모음 축약(Diphthongization)을 정확히 산출한다.",
    "presentation": {
      "explanation": "어간 끝에 받침이 없는 모음 종결 용언은 어미 '-아요/어요'와 결합할 때 두 모음이 합쳐지거나 탈락하여 매끄러운 축약형을 이룹니다.\n\n1. 동음 탈락 (ㅏ + 아요 → ㅏ요, ㅓ + 어요 → ㅓ요):\n- 가다: 가 + 아요 → 가요 (가아요 X)\n- 사다: 사 + 아요 → 사요\n- 만나다: 만나 + 아요 → 만나요\n- 서다: 서 + 어요 → 서요\n- 켜다: 켜 + 어요 → 켜요\n\n2. 모음 축약 (Gliding / Diphthongization):\n- ㅗ + 아요 → ㅘ요: 보다 → 보 + 아요 → 봐요, 오다 → 오 + 아요 → 와요\n- ㅜ + 어요 → ㅝ요: 배우다 → 배우 + 어요 → 배워요, 주다 → 주 + 어요 → 줘요\n- ㅣ + 어요 → ㅕ요: 마시다 → 마시 + 어요 → 마셔요, 기다리다 → 기다려요, 가르치다 → 가르쳐요\n\n3. 'ㅡ' 탈락 규칙 (ㅡ Drop):\n어간 끝 모음 'ㅡ'는 모음 어미를 만나면 무조건 탈락하고, 그 앞 음절 모음에 맞춰 '-아요/어요'를 결정합니다.\n- 쓰다: ㅆ + 어요 → 써요\n- 크다: ㅋ + 어요 → 커요\n- 예쁘다: 예ㅃ + 어요 → 예뻐요 (앞 모음 '예'가 음성이므로 '어요')",
      "examples": [
        {
          "target": "저는 지금 학교에 가요.",
          "reading": "Jeo-neun jigeum hakgyo-e gayo.",
          "translation": "I am going to school now (가다 → 가요)."
        },
        {
          "target": "극장에서 재미있는 영화를 봐요.",
          "reading": "Geukjang-eseo jaemi-inneun yeonghwa-reul bwayo.",
          "translation": "I watch an interesting movie at the cinema (보다 → 봐요)."
        },
        {
          "target": "카페에서 시원한 주스를 마셔요.",
          "reading": "Kape-eseo siwonhan juseu-reul masyeoyo.",
          "translation": "I drink cool juice at the cafe (마시다 → 마셔요)."
        },
        {
          "target": "학원에서 한국어를 배워요.",
          "reading": "Hagwon-eseo hangugeo-reul baewoyo.",
          "translation": "I learn Korean at the academy (배우다 → 배워요)."
        }
      ],
      "mnemonics": [
        "모음 압축 공식: '오+아=와(와요)', '우+어=워(배워요)', '이+어=여(마셔요)', '으는 탈락(써요)'!"
      ],
      "culturalNotes": [
        "한국어의 이러한 모음 축약은 발음의 경제성과 리듬감을 극대화하기 위해 자연스럽게 정착된 음운 현상입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '마시다(to drink)'에 '-어요'가 결합할 때 모음 축약(ㅣ+어→ㅕ)이 일어난 올바른 형태는 무엇입니까?",
          "options": [
            "마셔요",
            "마시어요",
            "마샤요"
          ],
          "answerIndex": 0,
          "explanation": "'마시 + 어요'는 'ㅣ'와 'ㅓ'가 합쳐져 '마셔요'로 축약됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "동사 '보다(to see/watch)'에 '-아요'가 결합하여 'ㅗ+아→ㅘ'로 축약된 올바른 해요체 형태는 어느 것입니까?",
          "options": [
            "봐요",
            "보아요",
            "보요"
          ],
          "answerIndex": 0,
          "explanation": "'보 + 아요'는 '봐요[bwayo]'로 축약되어 자연스럽게 쓰입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'배우다(to learn)'의 올바른 해요체 축약형(ㅜ+어→ㅝ)이 쓰인 문장은 무엇입니까?",
          "options": [
            "한국어를 배워요.",
            "한국어를 배우어요.",
            "한국어를 배와요."
          ],
          "answerIndex": 0,
          "explanation": "'배우 + 어요'는 '배워요'로 축약됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'영화를 봐요'(I watch a movie)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "영화를 봐요.",
            "영화를 봐요"
          ],
          "explanation": "영화를(목적어) + 봐요(보다 + 아요의 축약형) = 영화를 봐요."
        }
      ]
    }
  },
  "ko-u4-l5": {
    "id": "ko-u4-l5",
    "subject": "korean",
    "unit": 4,
    "lessonNumber": 5,
    "title": "해요체의 문형별 억양 변화와 대화 실전 (Intonation Patterns in -아요/어요)",
    "level": "A1",
    "objective": "해요체 어미 '-아요/어요'가 형태 변화 없이 오직 말끝 억양(Intonation)의 조절만으로 평서, 의문, 청유, 명령 4가지 문형을 모두 표현함을 완벽히 마스터한다.",
    "presentation": {
      "explanation": "해요체의 가장 놀랍고 실용적인 특징은 어미의 철자나 형태를 바꾸지 않고 오직 말끝의 억양(Intonation Contour)만을 조절하여 4가지 주요 문장 유형을 모두 표현할 수 있다는 점입니다.\n\n1. 4대 문형 억양 공식:\n- 평서문 (Statement - Falling ↘): 끝을 차분하게 내립니다.\n  - 지금 학교에 가요 ↘. (I am going to school.)\n- 의문문 (Question - Rising ↗): 끝을 명확하게 올립니다.\n  - 지금 학교에 가요 ↗? (Are you going to school?)\n- 청유문 (Suggestion - Smooth / Flat ➡): 다정하고 부드럽게 유지합니다.\n  - 같이 학교에 가요 ➡. (Let's go to school together.)\n- 명령/요청문 (Request/Command - Firm ↘ or Gentle ↗):\n  - 이리로 빨리 와요! (Please come here quickly!)\n\n2. 실전 대화 문답 완성:\n- A: 주말에 뭐 해요 ↗? (What are you doing on the weekend?)\n- B: 친구를 만나요 ↘. 같이 영화 봐요 ➡! (I'm meeting a friend. Let's watch a movie together!)\n- A: 좋아요 ↘! 몇 시에 만나요 ↗? (Sounds good! What time shall we meet?)",
      "examples": [
        {
          "target": "A: 지금 어디에 가요? B: 도서관에 가요.",
          "reading": "A: Jigeum eodi-e gayo? B: Doseogwan-e gayo.",
          "translation": "A: Where are you going now? B: I am going to the library."
        },
        {
          "target": "우리 오늘 같이 커피 마셔요!",
          "reading": "Uri oneul gachi keopi masyeoyo!",
          "translation": "Let's drink coffee together today! (Propositive Intonation)."
        },
        {
          "target": "여기 편하게 앉아요.",
          "reading": "Yeogi pyeonhage anjayo.",
          "translation": "Please sit down comfortably here (Polite Imperative Intonation)."
        },
        {
          "target": "내일 시간 있어요? 같이 밥 먹어요.",
          "reading": "Naeil sigan isseoyo? Gachi bap meogeoyo.",
          "translation": "Do you have time tomorrow? Let's have a meal together."
        }
      ],
      "mnemonics": [
        "올리면 질문(↗), 내리면 서술(↘), 다정하면 제안(➡)! 해요체 하나로 4가지 문형 완전 정복!"
      ],
      "culturalNotes": [
        "한국인들은 상대방에게 부드럽게 제안하거나 권유할 때 '우리 같이 ~해요'라는 표현을 매우 사랑합니다. 한국 특유의 공동체 의식과 친근함을 담고 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'같이 영화 봐요(Let's watch a movie together)'처럼 상대방에게 함께 행동할 것을 권유하는 청유문에서 요구되는 말끝 억양은 무엇입니까?",
          "options": [
            "부드럽고 평탄하게 이끄는 억양",
            "가파르게 끝을 치켜올리는 억양",
            "화가 난 듯 뚝 떨어뜨리는 억양"
          ],
          "answerIndex": 0,
          "explanation": "청유문은 상대방에게 부드럽게 권유하는 평탄하고 친근한 억양(➡)으로 발화합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'지금 어디에 가요?'라는 질문에 대해 '도서관에 갑니다'를 해요체 평서문으로 답할 때의 올바른 억양은 무엇입니까?",
          "options": [
            "말끝을 차분하게 내리는 평서 억양(↘)",
            "말끝을 의문문처럼 올리는 억양(↗)",
            "말끝을 급격히 끊어버리는 억양"
          ],
          "answerIndex": 0,
          "explanation": "자신의 행동을 진술하는 평서문은 말끝을 자연스럽게 내립니다(↘)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 해요체 '같이 밥 먹어요!'의 문맥상 화용 기능은 무엇입니까?",
          "options": [
            "함께 식사하자고 권유하는 청유문",
            "혼자 밥을 먹는다는 단순 진술문",
            "밥을 왜 먹는지 따져 묻는 반박문"
          ],
          "answerIndex": 0,
          "explanation": "'같이(together)'와 결합한 '해요'는 상대방에게 행동을 제안하는 청유문(Suggestion)입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'같이 커피 마셔요'(Let's drink coffee together)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "같이 커피 마셔요.",
            "같이 커피 마셔요"
          ],
          "explanation": "같이(부사) + 커피(목적어) + 마셔요(청유) = 같이 커피 마셔요."
        }
      ]
    }
  },
  "ko-u5-l1": {
    "id": "ko-u5-l1",
    "subject": "korean",
    "unit": 5,
    "lessonNumber": 1,
    "title": "하십시오체 평서문 종결어미 (-ㅂ니다 / -습니다)",
    "level": "A1",
    "objective": "받침 유무에 따른 하십시오체 평서문 어미 결합 규칙(모음 어간 + -ㅂ니다, 자음 어간 + -습니다)을 숙지하고, 비음화 발음을 정확히 구사한다.",
    "presentation": {
      "explanation": "한국어의 '하십시오체'는 가장 격식 있고 예의를 갖춘 최고 등급의 공손 종결어미입니다. 공적인 자리, 비즈니스, 뉴스, 군대, 발표 등에서 주로 사용됩니다.\n\n1. 형태 결합 규칙:\n- 모음 종결 어간 (받침 없음) + -ㅂ니다:\n  - 어간 마지막 글자의 받침 위치에 'ㅂ'이 들어가 결합합니다.\n  - 가다 → 갑니다 [감니다]\n  - 오다 → 옵니다 [옴니다]\n  - 마시다 → 마십니다 [마심니다]\n  - 공부하다 → 공부합니다 [공부함니다]\n- 자음 종결 어간 (받침 있음) + -습니다:\n  - 먹다 → 먹습니다 [먹씀니다]\n  - 읽다 → 읽습니다 [익씀니다]\n  - 닫다 → 닫습니다 [닫씀니다]\n  - 좋다 → 좋습니다 [조씀니다]\n\n2. 비음화(Nasalization) 필수 발음 법칙:\n받침 'ㅂ' 뒤에 비음 'ㄴ'이 연결될 때 받침 'ㅂ'은 비음 [ㅁ]으로 동화되어 소리 납니다.\n- 표기: 갑니다 → 발음: [감니다]\n- 표기: 마십니다 → 발음: [마심니다]\n- 표기: 합니다 → 발음: [함니다]",
      "examples": [
        {
          "target": "저는 한국 무역 회사에 다닙니다.",
          "reading": "Jeo-neun hanguk muyeok hoesa-e danimnida.",
          "translation": "I work at a Korean trading company."
        },
        {
          "target": "아침마다 신문을 정독합니다.",
          "reading": "Achimmada sinmun-eul jeongdokhamnida.",
          "translation": "I read the newspaper closely every morning."
        },
        {
          "target": "도서관에서 전공 서적을 읽습니다.",
          "reading": "Doseogwan-eseo jeongong seojeog-eul ikseumnida.",
          "translation": "I read major textbooks at the library."
        },
        {
          "target": "오늘 날씨가 대단히 좋습니다.",
          "reading": "Oneul nalssi-ga daedanhi josseumnida.",
          "translation": "The weather is exceptionally good today."
        }
      ],
      "mnemonics": [
        "모음 어간에는 쏙 들어가는 'ㅂ니다'(갑니다), 받침 어간에는 든든한 '습니다'(먹습니다)! 발음은 항상 [ㅁ니다]."
      ],
      "culturalNotes": [
        "한국의 직장이나 비즈니스 미팅에서는 상대방에 대한 존중과 프로페셔널한 신뢰감을 주기 위해 첫 만남과 회의에서 반드시 하십시오체를 사용합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '가다(to go - 모음 종결)' 어간 뒤에 결합할 올바른 하십시오체 평서문 형태는 무엇입니까?",
          "options": [
            "갑니다",
            "가습니다",
            "가입니다"
          ],
          "answerIndex": 0,
          "explanation": "'가다'는 받침이 없는 모음 종결 어간이므로 '-ㅂ니다'가 결합하여 '갑니다[감니다]'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "동사 '먹다(to eat - 받침 ㄱ 있음)'의 올바른 하십시오체 활용형은 어느 것입니까?",
          "options": [
            "먹습니다",
            "먹ㅂ니다",
            "먹입니다"
          ],
          "answerIndex": 0,
          "explanation": "'먹다'는 받침이 있는 자음 종결 어간이므로 '-습니다'와 결합하여 '먹습니다[먹씀니다]'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'회사에서 열심히 _____ (I work diligently at the company).' 빈칸에 들어갈 올바른 격식체 서술어는 무엇입니까?",
          "options": [
            "일합니다",
            "일하습니다",
            "일먹습니다"
          ],
          "answerIndex": 0,
          "explanation": "'일하다'의 어간 '일하'는 모음 종결이므로 '-ㅂ니다'가 결합하여 '일합니다[일함니다]'가 올바릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'신문을 읽습니다'(I read the newspaper)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "신문을 읽습니다.",
            "신문을 읽습니다"
          ],
          "explanation": "신문을(목적어) + 읽습니다(읽다 + 습니다) = 신문을 읽습니다."
        }
      ]
    }
  },
  "ko-u5-l2": {
    "id": "ko-u5-l2",
    "subject": "korean",
    "unit": 5,
    "lessonNumber": 2,
    "title": "하십시오체 의문문 종결어미 (-ㅂ니까 / -습니까)",
    "level": "A1",
    "objective": "공적 회의, 인터뷰, 고객 응대 상황에서 표준적으로 쓰이는 하십시오체 의문문 어미 '-ㅂ니까 / -습니까'를 체득하고 자연스러운 문답을 구성한다.",
    "presentation": {
      "explanation": "하십시오체의 의문문은 평서문 어미 '-ㅂ니다/습니다'의 '다' 자리에 '까'를 교체하여 '-ㅂ니까 / -습니까'로 만듭니다.\n\n1. 형태 결합 규칙:\n- 모음 종결 어간 + -ㅂ니까?\n  - 가다 → 갑니까? [감니까?]\n  - 보다 → 봅니까? [봄니까?]\n  - 공부하다 → 공부합니까? [공부함니까?]\n- 자음 종결 어간 + -습니까?\n  - 먹다 → 먹습니까? [먹씀니까?]\n  - 듣다 → 듣습니까? [듣씀니까?]\n  - 작다 → 작습니까? [작씀니까?]\n\n2. 공적 질의 및 응답 패턴 (Q&A):\n- Q: 지금 어디에 갑니까? (Where are you going now?)\n- A: 서울역에 갑니다. (I am going to Seoul Station.)\n- Q: 한국어를 좋아합니까? (Do you like Korean?)\n- A: 네, 아주 좋아합니다. (Yes, I like it very much.)\n- Q: 한국 음식을 자주 먹습니까? (Do you eat Korean food often?)\n- A: 네, 자주 먹습니다. (Yes, I eat it often.)",
      "examples": [
        {
          "target": "지금 어디에 갑니까?",
          "reading": "Jigeum eodi-e gamnikka?",
          "translation": "Where are you going right now?"
        },
        {
          "target": "한국 생활이 재미있습니까?",
          "reading": "Hanguk saenghwal-i jaemi-isseumnikka?",
          "translation": "Is living in Korea interesting?"
        },
        {
          "target": "회의가 몇 시에 시작합니까?",
          "reading": "Hoewi-ga myeot si-e sijak-hamnikka?",
          "translation": "What time does the meeting begin?"
        },
        {
          "target": "한국 노래를 자주 듣습니까?",
          "reading": "Hanguk norae-reul jaju deutseumnikka?",
          "translation": "Do you often listen to Korean songs?"
        }
      ],
      "mnemonics": [
        "평서문은 '다'로 끝나고, 질문할 때는 '까?'로 끝난다! 갑니다 → 갑니까?, 먹습니다 → 먹습니까?"
      ],
      "culturalNotes": [
        "공항, 호텔, 백화점 등의 서비스직 직원이 고객에게 정중하게 문의할 때 '무엇을 도와드릴까요?' 또는 '어떤 상품을 찾으십니까?'처럼 하십시오체 의문문을 필수적으로 사용합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'보다(to see - 모음 어간)'를 격식체 의문문으로 바꿀 때 올바른 형태는 무엇입니까?",
          "options": [
            "봅니까?",
            "보습니까?",
            "보입니까?"
          ],
          "answerIndex": 0,
          "explanation": "'보다'는 모음 종결 어간이므로 '-ㅂ니까'가 결합하여 '봅니까?'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'음악을 자주 _____? (Do you often listen to music?)' 빈칸에 들어갈 알맞은 격식체 의문사는 무엇입니까?",
          "options": [
            "듣습니까",
            "듣ㅂ니까",
            "듣입니까"
          ],
          "answerIndex": 0,
          "explanation": "'듣다'는 받침이 있는 자음 종결 어간이므로 '-습니까'와 결합하여 '듣습니까?'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 하십시오체 의문문의 문법과 철자가 올바른 문장은 어느 것입니까?",
          "options": [
            "한국어를 공부합니까?",
            "한국어를 공부하습니까?",
            "한국어를 공부하입니다?"
          ],
          "answerIndex": 0,
          "explanation": "'공부하다'의 모음 어간 뒤에 '-ㅂ니까'가 결합한 '공부합니까?'가 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'어디에 갑니까'(Where are you going)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "어디에 갑니까?",
            "어디에 갑니까"
          ],
          "explanation": "어디에(장소 의문사) + 갑니까(가다 + ㅂ니까) = 어디에 갑니까?"
        }
      ]
    }
  },
  "ko-u5-l3": {
    "id": "ko-u5-l3",
    "subject": "korean",
    "unit": 5,
    "lessonNumber": 3,
    "title": "ㄹ 탈락 불규칙 용언의 하십시오체 활용 (삽니다, 압니다, 만듭니다)",
    "level": "A1",
    "objective": "어간 끝 받침 'ㄹ'이 'ㄴ, ㅂ, ㅅ, 오' 앞에서 탈락하는 'ㄹ 탈락' 규칙을 이해하고, 하십시오체 결합 시 어형 변화를 정확하게 산출한다.",
    "presentation": {
      "explanation": "한국어 용언 활용에서 가장 빈번하게 일어나는 불규칙 중 하나는 'ㄹ 탈락(ㄹ-Drop)'입니다.\n\n1. ㄹ 탈락의 음운 법칙:\n어간의 끝 받침이 'ㄹ'인 동사/형용사가 자음 'ㄴ, ㅂ, ㅅ, 오'로 시작하는 어미를 만나면 받침 'ㄹ'이 완전히 탈락합니다.\n\n2. 하십시오체 어미(-ㅂ니다/-ㅂ니까)와의 결합 과정:\n어미 '-ㅂ니다/ㅂ니까'는 'ㅂ'으로 시작하므로, 받침 'ㄹ'이 탈락한 후 빈 받침 자리에 'ㅂ'이 들어가 결합합니다.\n- 살다 (to live): 살 - ㄹ + ㅂ니다 → 삽니다 [삼니다] (살습니다 X)\n- 알다 (to know): 알 - ㄹ + ㅂ니다 → 압니다 [암니다] (알습니다 X)\n- 만들다 (to make): 만들 - ㄹ + ㅂ니다 → 만듭니다 [만듬니다]\n- 팔다 (to sell): 팔 - ㄹ + ㅂ니다 → 팝니다 [팜니다]\n- 열다 (to open): 열 - ㄹ + ㅂ니다 → 엽니다 [염니다]\n- 멀다 (to be far): 멀 - ㄹ + ㅂ니다 → 멉니다 [멈니다]\n- 길다 (to be long): 길 - ㄹ + ㅂ니다 → 깁니다 [김니다]",
      "examples": [
        {
          "target": "저는 부모님과 함께 서울에 삽니다.",
          "reading": "Jeo-neun bumonim-gwa hamkke Seoul-e samnida.",
          "translation": "I live in Seoul together with my parents (살다 → 삽니다)."
        },
        {
          "target": "저는 그 사실을 아주 잘 압니다.",
          "reading": "Jeo-neun geu sasir-eul aju jal amnida.",
          "translation": "I know that fact very well (알다 → 압니다)."
        },
        {
          "target": "식당 주방에서 맛있는 불고기를 만듭니다.",
          "reading": "Sikdang jubang-eseo masinneun bulgogi-reul mandeumnida.",
          "translation": "They make delicious bulgogi in the restaurant kitchen (만들다 → 만듭니다)."
        },
        {
          "target": "백화점은 아침 10시 30분에 문을 엽니다.",
          "reading": "Baekhwajeom-eun achim yeolsi samsipbun-e mun-eul yeomnida.",
          "translation": "The department store opens its doors at 10:30 AM (열다 → 엽니다)."
        }
      ],
      "mnemonics": [
        "ㄹ 탈락 암기 공식: '나/보/소/오' 앞에서는 'ㄹ'이 도망간다! 살다 → 삽니다, 알다 → 압니다, 만들다 → 만듭니다."
      ],
      "culturalNotes": [
        "한국어 학습자가 가장 흔히 범하는 오류가 '살습니다', '알습니다'라고 말하는 것입니다. 'ㄹ' 받침 동사는 하십시오체에서 항상 '삽니다', '압니다'로 바뀜을 꼭 기억해야 합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '살다(to live)'에 하십시오체 평서문 어미가 결합할 때 'ㄹ 탈락'이 적용된 올바른 형태는 무엇입니까?",
          "options": [
            "삽니다",
            "살습니다",
            "살입니다"
          ],
          "answerIndex": 0,
          "explanation": "'살다'의 어간 받침 'ㄹ'이 탈락하고 '-ㅂ니다'가 결합하여 '삽니다[삼니다]'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "동사 '만들다(to make)'의 올바른 하십시오체 활용형은 어느 것입니까?",
          "options": [
            "만듭니다",
            "만들습니다",
            "만들입니다"
          ],
          "answerIndex": 0,
          "explanation": "'만들다'의 'ㄹ'이 탈락하여 '만듭니다[만듬니다]'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'A: 한국어 선생님의 성함을 _____? (Do you know the teacher's name?)' 빈칸에 들어갈 알맞은 ㄹ 탈락 의문형은 무엇입니까?",
          "options": [
            "압니까",
            "알습니까",
            "알입니까"
          ],
          "answerIndex": 0,
          "explanation": "'알다'의 받침 'ㄹ'이 탈락하고 '-ㅂ니까'가 붙어 '압니까?'가 올바릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'서울에 삽니다'(I live in Seoul)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "서울에 삽니다.",
            "서울에 삽니다"
          ],
          "explanation": "서울에(장소) + 삽니다(살다의 ㄹ탈락 하십시오체) = 서울에 삽니다."
        }
      ]
    }
  },
  "ko-u5-l4": {
    "id": "ko-u5-l4",
    "subject": "korean",
    "unit": 5,
    "lessonNumber": 4,
    "title": "공적 담화와 격식체 사용 맥락 (발표, 뉴스, 비즈니스, 환영사)",
    "level": "A1",
    "objective": "공식 행사, 뉴스 보도, 비즈니스 프레젠테이션, 자기소개 면접 등 공적 담화(Public Discourse) 상황에서 하십시오체를 품격 있게 구사한다.",
    "presentation": {
      "explanation": "하십시오체는 단순한 문법 어미를 넘어 화자의 공적인 태도와 격조를 담아내는 담화 양식(Register)입니다.\n\n1. 주요 공적 담화 상황:\n- 공식 프레젠테이션 및 발표:\n  - \"안녕하십니까? 오늘 신제품 개발 성과에 대해 발표하겠습니다.\"\n- 대중 연설 및 환영사:\n  - \"내빈 여러분, 참석해 주셔서 진심으로 감사합니다.\"\n- 뉴스 보도 및 방송 앵커 멘트:\n  - \"오늘의 주요 뉴스를 전해 드리겠습니다.\"\n- 지하철 및 항공기 기내 안내 방송:\n  - \"잠시 후 인천국제공항에 도착하겠습니다. 안전벨트를 착용해 주시기 바랍니다.\"\n- 취업 면접 및 공식 자기소개:\n  - \"안녕하십니까? 지원자 김민수입니다. 성실하게 임하겠습니다.\"",
      "examples": [
        {
          "target": "안녕하십니까? 만나서 반갑습니다.",
          "reading": "Annyeonghasimnikka? Mannaseo bangapseumnida.",
          "translation": "Hello (Formal)? It is a pleasure to meet you."
        },
        {
          "target": "지금부터 1분기 연구 결과를 발표하겠습니다.",
          "reading": "Jigeumbuteo ilbungi yeongu gyeolgwa-reul balpyohagetseumnida.",
          "translation": "From now, I will present the first-quarter research results."
        },
        {
          "target": "저희 행사에 참석해 주셔서 대단히 감사합니다.",
          "reading": "Jeohui haengsa-e chamseokhae jusyeoseo daedanhi gamsahamnida.",
          "translation": "Thank you very much for attending our event."
        },
        {
          "target": "잠시 후 목적지에 도착하겠습니다.",
          "reading": "Jamsi hu mokjeokji-e dochakhagetseumnida.",
          "translation": "We will arrive at the destination shortly."
        }
      ],
      "mnemonics": [
        "공식 석상, 뉴스, 발표에서는 언제나 '안녕하십니까 / 반갑습니다 / 감사합니다' 3종 세트!"
      ],
      "culturalNotes": [
        "한국의 대중교통 안내 방송이나 국가적 행사에서는 청중 전체에 대한 최고의 예우를 표하기 위해 100% 하십시오체 종결어미를 사용합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "공식 프레젠테이션을 시작할 때 청중에게 건네는 가장 격조 높은 첫인사 표현은 무엇입니까?",
          "options": [
            "안녕하십니까? 오늘 발표를 시작하겠습니다.",
            "안녕? 오늘 발표할게.",
            "안녕하세요? 발표 시작해요."
          ],
          "answerIndex": 0,
          "explanation": "공식 프레젠테이션에서는 하십시오체를 사용하여 '안녕하십니까? 오늘 발표를 시작하겠습니다'라고 여는 것이 가장 품격 있습니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "행사에 참석한 귀빈들에게 깊은 감사를 표하는 가장 올바른 격식체 문장은 어느 것입니까?",
          "options": [
            "참석해 주셔서 대단히 감사합니다.",
            "참석해 줘서 정말 고마워.",
            "참석해 줘서 감사해요."
          ],
          "answerIndex": 0,
          "explanation": "공식 감사 표현으로는 '대단히 감사합니다'가 가장 표준적이고 정중합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 비즈니스 면접 상황에 가장 어울리는 격식체 자기소개 문장은 무엇입니까?",
          "options": [
            "안녕하십니까? 기획팀 지원자 박지은입니다.",
            "안녕! 기획팀에 지원한 지은이야.",
            "안녕하세요! 기획팀 지은이에요."
          ],
          "answerIndex": 0,
          "explanation": "취업 면접과 같은 최고 격식 자리에서는 하십시오체인 '안녕하십니까? ... 지원자 박지은입니다'가 표준입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'만나서 반갑습니다'(Nice to meet you - Formal)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "만나서 반갑습니다.",
            "만나서 반갑습니다"
          ],
          "explanation": "만나서(연결형) + 반갑습니다(반갑다의 하십시오체) = 만나서 반갑습니다."
        }
      ]
    }
  },
  "ko-u5-l5": {
    "id": "ko-u5-l5",
    "subject": "korean",
    "unit": 5,
    "lessonNumber": 5,
    "title": "해요체 대 하십시오체의 화용론적 교체 전략 (Discourse Style Switching)",
    "level": "A1",
    "objective": "한국어 실제 담화에서 공식적 틀을 잡는 하십시오체(-ㅂ니다)와 세부 내용의 교감을 이끄는 해요체(-아요/어요)의 자연스러운 스타일 전환(Style Switching) 전략을 습득한다.",
    "presentation": {
      "explanation": "원어민의 실제 담화에서는 하나의 말하기 양식만을 고집하지 않고, 하십시오체와 해요체를 전략적으로 교차(Code-Switching)하여 사용합니다.\n\n1. 담화 스타일 전환의 기본 공식:\n- 도입부 (Opening - 하십시오체): 공적 신뢰성과 정중함 확보\n  - \"여러분, 안녕하십니까? 오늘 강연을 맡은 김 교수입니다.\"\n- 본론부 (Body Content - 해요체 중심):\n  - 청중과의 친밀한 심리적 거리 좁히기 및 생생한 설명\n  - \"오늘 다룰 주제는 한국의 전통 건축이에요. 사진을 보시면 지붕의 곡선이 참 아름답지요?\"\n- 종결부 (Closing - 하십시오체):\n  - 공손한 마무리 및 감사\n  - \"이상으로 강연을 마치겠습니다. 경청해 주셔서 대단히 감사합니다.\"\n\n2. 화용론적 기능 요약:\n- 하십시오체: 공식성, 거리감(Respectful Distance), 선언적 선포, 의전\n- 해요체: 친근함, 공감대 형성, 부드러운 설득, 대화적 소통",
      "examples": [
        {
          "target": "안녕하십니까? 지금부터 제품 시연을 시작하겠습니다.",
          "reading": "Annyeonghasimnikka? Jigeumbuteo jepum siyeon-eul sijakhagetseumnida.",
          "translation": "Hello. From now, we will begin the product demonstration (Formal Opening)."
        },
        {
          "target": "이 스마트폰은 화면이 정말 넓고 가벼워요.",
          "reading": "I seumateupon-eun hwamyeon-i jeongmal neolpgo gabyeowoyo.",
          "translation": "This smartphone has a really wide screen and is light (Friendly Body)."
        },
        {
          "target": "궁금한 점이 있으시면 편하게 질문해 주세요.",
          "reading": "Gunggeumhan jeom-i isseusimyeon pyeonhage jilmunhae juseyo.",
          "translation": "If you have questions, please feel free to ask (Polite Request)."
        },
        {
          "target": "끝까지 경청해 주셔서 진심으로 감사합니다.",
          "reading": "Kkeutkkaji gyeongcheonghae jusyeoseo jinsim-euro gamsahamnida.",
          "translation": "Thank you sincerely for listening until the end (Formal Closing)."
        }
      ],
      "mnemonics": [
        "처음과 끝은 깍듯하게 '합니다', 중간 설명은 다정하게 '해요'!"
      ],
      "culturalNotes": [
        "유튜브 방송이나 TV 예능에서도 진행자들은 오프닝과 클로징에는 '시청자 여러분, 안녕하십니까/감사합니다'를 쓰고, 본 방송 토크에서는 자연스러운 해요체로 소통합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "공식 발표의 '마무리 인사(Closing)'로 가장 알맞은 격식체 종결 표현은 무엇입니까?",
          "options": [
            "경청해 주셔서 대단히 감사합니다.",
            "들어줘서 고마워요.",
            "다음에 또 봐."
          ],
          "answerIndex": 0,
          "explanation": "발표의 공적인 마무리는 '경청해 주셔서 대단히 감사합니다'가 가장 예의 바릅니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "도입부에서 공적 예의를 갖추는 하십시오체 인사말로 가장 알맞은 것은 무엇입니까?",
          "options": [
            "안녕하십니까?",
            "안녕?",
            "잘 있었어?"
          ],
          "answerIndex": 0,
          "explanation": "공식적인 오프닝 인사로는 '안녕하십니까?'가 표준입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "한국어 담화에서 하십시오체와 해요체를 번갈아 사용하는 주된 화용론적 이유는 무엇입니까?",
          "options": [
            "공적인 예의와 청중과의 친근한 유대감을 조화롭게 유지하기 위해",
            "단어를 잊어버렸을 때 둘러대기 위해",
            "문법 규칙이 존재하지 않기 때문에"
          ],
          "answerIndex": 0,
          "explanation": "공적 신뢰성(하십시오체)과 친밀한 소통(해요체)을 조화롭게 구사하기 위한 전략적 선택입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'대단히 감사합니다'(Thank you very much - Formal)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "대단히 감사합니다.",
            "대단히 감사합니다"
          ],
          "explanation": "대단히(부사) + 감사합니다(감사하다의 하십시오체) = 대단히 감사합니다."
        }
      ]
    }
  },
  "ko-u6-l1": {
    "id": "ko-u6-l1",
    "subject": "korean",
    "unit": 6,
    "lessonNumber": 1,
    "title": "과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) (Part 1)",
    "level": "A2",
    "objective": "Comprehensive mastery of 과거 시제 -았/었- 활용 (Past Tense -았/었-).",
    "presentation": {
      "explanation": "본 단원에서는 « 과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) » (제1절)의 핵심 언어 요소와 과거 시제 -았/었- 활용 (Past Tense -았/었-)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (6.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (6.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (6.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 과거 시제 -았/었- 활용 (Past Tense -았/었-) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (6.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (6.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (6.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (6.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (6.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (6.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 과거 시제 -았/었- 활용 (Past Tense -았/었-) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 6-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (6.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (6.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (6.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u6-l2": {
    "id": "ko-u6-l2",
    "subject": "korean",
    "unit": 6,
    "lessonNumber": 2,
    "title": "과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) (Part 2)",
    "level": "A2",
    "objective": "Comprehensive mastery of 과거 시제 -았/었- 활용 (Past Tense -았/었-).",
    "presentation": {
      "explanation": "본 단원에서는 « 과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) » (제2절)의 핵심 언어 요소와 과거 시제 -았/었- 활용 (Past Tense -았/었-)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (6.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (6.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (6.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 과거 시제 -았/었- 활용 (Past Tense -았/었-) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (6.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (6.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (6.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (6.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (6.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (6.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 과거 시제 -았/었- 활용 (Past Tense -았/었-) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 6-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (6.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (6.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (6.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u6-l3": {
    "id": "ko-u6-l3",
    "subject": "korean",
    "unit": 6,
    "lessonNumber": 3,
    "title": "과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) (Part 3)",
    "level": "A2",
    "objective": "Comprehensive mastery of 과거 시제 -았/었- 활용 (Past Tense -았/었-).",
    "presentation": {
      "explanation": "본 단원에서는 « 과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) » (제3절)의 핵심 언어 요소와 과거 시제 -았/었- 활용 (Past Tense -았/었-)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (6.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (6.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (6.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 과거 시제 -았/었- 활용 (Past Tense -았/었-) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (6.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (6.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (6.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (6.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (6.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (6.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 과거 시제 -았/었- 활용 (Past Tense -았/었-) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 6-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (6.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (6.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (6.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u6-l4": {
    "id": "ko-u6-l4",
    "subject": "korean",
    "unit": 6,
    "lessonNumber": 4,
    "title": "과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) (Part 4)",
    "level": "A2",
    "objective": "Comprehensive mastery of 과거 시제 -았/었- 활용 (Past Tense -았/었-).",
    "presentation": {
      "explanation": "본 단원에서는 « 과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) » (제4절)의 핵심 언어 요소와 과거 시제 -았/었- 활용 (Past Tense -았/었-)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (6.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (6.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (6.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 과거 시제 -았/었- 활용 (Past Tense -았/었-) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (6.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (6.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (6.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (6.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (6.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (6.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 과거 시제 -았/었- 활용 (Past Tense -았/었-) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 6-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (6.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (6.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (6.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u6-l5": {
    "id": "ko-u6-l5",
    "subject": "korean",
    "unit": 6,
    "lessonNumber": 5,
    "title": "과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) (Part 5)",
    "level": "A2",
    "objective": "Comprehensive mastery of 과거 시제 -았/었- 활용 (Past Tense -았/었-).",
    "presentation": {
      "explanation": "본 단원에서는 « 과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) » (제5절)의 핵심 언어 요소와 과거 시제 -았/었- 활용 (Past Tense -았/었-)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (6.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (6.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (6.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 과거 시제 -았/었- 활용 (Past Tense -았/었-) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (6.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (6.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (6.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 과거 시제(-았/었/였-)와 일상 서술 (Past Tense Narratives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (6.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (6.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (6.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 과거 시제 -았/었- 활용 (Past Tense -았/었-) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 6-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (6.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (6.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (6.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u7-l1": {
    "id": "ko-u7-l1",
    "subject": "korean",
    "unit": 7,
    "lessonNumber": 1,
    "title": "미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) (Part 1)",
    "level": "A2",
    "objective": "Comprehensive mastery of 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요).",
    "presentation": {
      "explanation": "본 단원에서는 « 미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) » (제1절)의 핵심 언어 요소와 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (7.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (7.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (7.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (7.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (7.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (7.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (7.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (7.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (7.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 7-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (7.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (7.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (7.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u7-l2": {
    "id": "ko-u7-l2",
    "subject": "korean",
    "unit": 7,
    "lessonNumber": 2,
    "title": "미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) (Part 2)",
    "level": "A2",
    "objective": "Comprehensive mastery of 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요).",
    "presentation": {
      "explanation": "본 단원에서는 « 미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) » (제2절)의 핵심 언어 요소와 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (7.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (7.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (7.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (7.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (7.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (7.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (7.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (7.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (7.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 7-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (7.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (7.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (7.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u7-l3": {
    "id": "ko-u7-l3",
    "subject": "korean",
    "unit": 7,
    "lessonNumber": 3,
    "title": "미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) (Part 3)",
    "level": "A2",
    "objective": "Comprehensive mastery of 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요).",
    "presentation": {
      "explanation": "본 단원에서는 « 미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) » (제3절)의 핵심 언어 요소와 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (7.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (7.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (7.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (7.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (7.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (7.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (7.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (7.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (7.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 7-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (7.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (7.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (7.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u7-l4": {
    "id": "ko-u7-l4",
    "subject": "korean",
    "unit": 7,
    "lessonNumber": 4,
    "title": "미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) (Part 4)",
    "level": "A2",
    "objective": "Comprehensive mastery of 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요).",
    "presentation": {
      "explanation": "본 단원에서는 « 미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) » (제4절)의 핵심 언어 요소와 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (7.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (7.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (7.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (7.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (7.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (7.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (7.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (7.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (7.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 7-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (7.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (7.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (7.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u7-l5": {
    "id": "ko-u7-l5",
    "subject": "korean",
    "unit": 7,
    "lessonNumber": 5,
    "title": "미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) (Part 5)",
    "level": "A2",
    "objective": "Comprehensive mastery of 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요).",
    "presentation": {
      "explanation": "본 단원에서는 « 미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) » (제5절)의 핵심 언어 요소와 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (7.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (7.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (7.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (7.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (7.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (7.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 미래 의지와 추측(-ㄹ/을 거예요, -겠-) (Future Volition & Guess) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (7.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (7.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (7.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 미래 시제와 의지 표현 (Future Volition -ㄹ 거예요) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 7-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (7.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (7.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (7.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u8-l1": {
    "id": "ko-u8-l1",
    "subject": "korean",
    "unit": 8,
    "lessonNumber": 1,
    "title": "진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) (Part 1)",
    "level": "A2",
    "objective": "Comprehensive mastery of 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다).",
    "presentation": {
      "explanation": "본 단원에서는 « 진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) » (제1절)의 핵심 언어 요소와 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (8.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (8.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (8.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (8.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (8.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (8.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (8.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (8.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (8.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 8-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (8.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (8.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (8.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u8-l2": {
    "id": "ko-u8-l2",
    "subject": "korean",
    "unit": 8,
    "lessonNumber": 2,
    "title": "진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) (Part 2)",
    "level": "A2",
    "objective": "Comprehensive mastery of 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다).",
    "presentation": {
      "explanation": "본 단원에서는 « 진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) » (제2절)의 핵심 언어 요소와 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (8.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (8.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (8.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (8.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (8.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (8.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (8.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (8.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (8.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 8-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (8.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (8.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (8.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u8-l3": {
    "id": "ko-u8-l3",
    "subject": "korean",
    "unit": 8,
    "lessonNumber": 3,
    "title": "진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) (Part 3)",
    "level": "A2",
    "objective": "Comprehensive mastery of 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다).",
    "presentation": {
      "explanation": "본 단원에서는 « 진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) » (제3절)의 핵심 언어 요소와 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (8.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (8.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (8.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (8.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (8.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (8.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (8.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (8.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (8.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 8-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (8.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (8.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (8.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u8-l4": {
    "id": "ko-u8-l4",
    "subject": "korean",
    "unit": 8,
    "lessonNumber": 4,
    "title": "진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) (Part 4)",
    "level": "A2",
    "objective": "Comprehensive mastery of 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다).",
    "presentation": {
      "explanation": "본 단원에서는 « 진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) » (제4절)의 핵심 언어 요소와 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (8.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (8.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (8.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (8.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (8.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (8.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (8.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (8.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (8.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 8-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (8.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (8.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (8.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u8-l5": {
    "id": "ko-u8-l5",
    "subject": "korean",
    "unit": 8,
    "lessonNumber": 5,
    "title": "진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) (Part 5)",
    "level": "A2",
    "objective": "Comprehensive mastery of 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다).",
    "presentation": {
      "explanation": "본 단원에서는 « 진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) » (제5절)의 핵심 언어 요소와 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (8.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (8.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (8.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (8.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (8.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (8.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 진행형(-고 있다)과 상태 지속(-아/어 있다) (Aspectual Continuatives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (8.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (8.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (8.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 진행형 -고 있다와 상태 지속 (Aspect: -고 있다 / -아 있다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 8-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (8.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (8.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (8.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u9-l1": {
    "id": "ko-u9-l1",
    "subject": "korean",
    "unit": 9,
    "lessonNumber": 1,
    "title": "장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) (Part 1)",
    "level": "A2",
    "objective": "Comprehensive mastery of 장소 조사 에/에서/-(으)로 (Locative & Directional Particles).",
    "presentation": {
      "explanation": "본 단원에서는 « 장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) » (제1절)의 핵심 언어 요소와 장소 조사 에/에서/-(으)로 (Locative & Directional Particles)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (9.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (9.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (9.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 장소 조사 에/에서/-(으)로 (Locative & Directional Particles) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (9.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (9.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (9.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (9.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (9.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (9.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 장소 조사 에/에서/-(으)로 (Locative & Directional Particles) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 9-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (9.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (9.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (9.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u9-l2": {
    "id": "ko-u9-l2",
    "subject": "korean",
    "unit": 9,
    "lessonNumber": 2,
    "title": "장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) (Part 2)",
    "level": "A2",
    "objective": "Comprehensive mastery of 장소 조사 에/에서/-(으)로 (Locative & Directional Particles).",
    "presentation": {
      "explanation": "본 단원에서는 « 장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) » (제2절)의 핵심 언어 요소와 장소 조사 에/에서/-(으)로 (Locative & Directional Particles)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (9.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (9.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (9.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 장소 조사 에/에서/-(으)로 (Locative & Directional Particles) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (9.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (9.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (9.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (9.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (9.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (9.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 장소 조사 에/에서/-(으)로 (Locative & Directional Particles) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 9-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (9.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (9.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (9.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u9-l3": {
    "id": "ko-u9-l3",
    "subject": "korean",
    "unit": 9,
    "lessonNumber": 3,
    "title": "장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) (Part 3)",
    "level": "A2",
    "objective": "Comprehensive mastery of 장소 조사 에/에서/-(으)로 (Locative & Directional Particles).",
    "presentation": {
      "explanation": "본 단원에서는 « 장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) » (제3절)의 핵심 언어 요소와 장소 조사 에/에서/-(으)로 (Locative & Directional Particles)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (9.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (9.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (9.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 장소 조사 에/에서/-(으)로 (Locative & Directional Particles) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (9.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (9.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (9.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (9.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (9.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (9.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 장소 조사 에/에서/-(으)로 (Locative & Directional Particles) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 9-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (9.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (9.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (9.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u9-l4": {
    "id": "ko-u9-l4",
    "subject": "korean",
    "unit": 9,
    "lessonNumber": 4,
    "title": "장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) (Part 4)",
    "level": "A2",
    "objective": "Comprehensive mastery of 장소 조사 에/에서/-(으)로 (Locative & Directional Particles).",
    "presentation": {
      "explanation": "본 단원에서는 « 장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) » (제4절)의 핵심 언어 요소와 장소 조사 에/에서/-(으)로 (Locative & Directional Particles)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (9.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (9.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (9.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 장소 조사 에/에서/-(으)로 (Locative & Directional Particles) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (9.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (9.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (9.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (9.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (9.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (9.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 장소 조사 에/에서/-(으)로 (Locative & Directional Particles) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 9-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (9.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (9.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (9.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u9-l5": {
    "id": "ko-u9-l5",
    "subject": "korean",
    "unit": 9,
    "lessonNumber": 5,
    "title": "장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) (Part 5)",
    "level": "A2",
    "objective": "Comprehensive mastery of 장소 조사 에/에서/-(으)로 (Locative & Directional Particles).",
    "presentation": {
      "explanation": "본 단원에서는 « 장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) » (제5절)의 핵심 언어 요소와 장소 조사 에/에서/-(으)로 (Locative & Directional Particles)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (9.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (9.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (9.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 장소 조사 에/에서/-(으)로 (Locative & Directional Particles) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (9.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (9.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (9.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 장소·방향 조사(에, 에서, -(으)로) (Locative & Directional) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (9.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (9.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (9.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 장소 조사 에/에서/-(으)로 (Locative & Directional Particles) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 9-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (9.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (9.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (9.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u10-l1": {
    "id": "ko-u10-l1",
    "subject": "korean",
    "unit": 10,
    "lessonNumber": 1,
    "title": "가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) (Part 1)",
    "level": "A2",
    "objective": "Comprehensive mastery of 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다).",
    "presentation": {
      "explanation": "본 단원에서는 « 가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) » (제1절)의 핵심 언어 요소와 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (10.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (10.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (10.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (10.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (10.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (10.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (10.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (10.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (10.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 10-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (10.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (10.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (10.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u10-l2": {
    "id": "ko-u10-l2",
    "subject": "korean",
    "unit": 10,
    "lessonNumber": 2,
    "title": "가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) (Part 2)",
    "level": "A2",
    "objective": "Comprehensive mastery of 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다).",
    "presentation": {
      "explanation": "본 단원에서는 « 가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) » (제2절)의 핵심 언어 요소와 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (10.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (10.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (10.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (10.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (10.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (10.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (10.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (10.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (10.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 10-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (10.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (10.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (10.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u10-l3": {
    "id": "ko-u10-l3",
    "subject": "korean",
    "unit": 10,
    "lessonNumber": 3,
    "title": "가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) (Part 3)",
    "level": "A2",
    "objective": "Comprehensive mastery of 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다).",
    "presentation": {
      "explanation": "본 단원에서는 « 가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) » (제3절)의 핵심 언어 요소와 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (10.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (10.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (10.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (10.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (10.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (10.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (10.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (10.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (10.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 10-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (10.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (10.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (10.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u10-l4": {
    "id": "ko-u10-l4",
    "subject": "korean",
    "unit": 10,
    "lessonNumber": 4,
    "title": "가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) (Part 4)",
    "level": "A2",
    "objective": "Comprehensive mastery of 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다).",
    "presentation": {
      "explanation": "본 단원에서는 « 가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) » (제4절)의 핵심 언어 요소와 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (10.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (10.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (10.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (10.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (10.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (10.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (10.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (10.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (10.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 10-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (10.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (10.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (10.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u10-l5": {
    "id": "ko-u10-l5",
    "subject": "korean",
    "unit": 10,
    "lessonNumber": 5,
    "title": "가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) (Part 5)",
    "level": "A2",
    "objective": "Comprehensive mastery of 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다).",
    "presentation": {
      "explanation": "본 단원에서는 « 가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) » (제5절)의 핵심 언어 요소와 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (10.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (10.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (10.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (10.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (10.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (10.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 가능과 불가능(-(으)ㄹ 수 있다/없다) (Modal Ability) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (10.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (10.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (10.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 능력과 가능 표현 (Modal Ability -(으)ㄹ 수 있다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 10-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (10.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (10.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (10.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A2 target-language standard."
        }
      ]
    }
  },
  "ko-u11-l1": {
    "id": "ko-u11-l1",
    "subject": "korean",
    "unit": 11,
    "lessonNumber": 1,
    "title": "의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) (Part 1)",
    "level": "B1",
    "objective": "Comprehensive mastery of 의무와 금지 표현 (Obligation & Prohibition).",
    "presentation": {
      "explanation": "본 단원에서는 « 의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) » (제1절)의 핵심 언어 요소와 의무와 금지 표현 (Obligation & Prohibition)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (11.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (11.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (11.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 의무와 금지 표현 (Obligation & Prohibition) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (11.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (11.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (11.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (11.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (11.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (11.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 의무와 금지 표현 (Obligation & Prohibition) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 11-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (11.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (11.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (11.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u11-l2": {
    "id": "ko-u11-l2",
    "subject": "korean",
    "unit": 11,
    "lessonNumber": 2,
    "title": "의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) (Part 2)",
    "level": "B1",
    "objective": "Comprehensive mastery of 의무와 금지 표현 (Obligation & Prohibition).",
    "presentation": {
      "explanation": "본 단원에서는 « 의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) » (제2절)의 핵심 언어 요소와 의무와 금지 표현 (Obligation & Prohibition)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (11.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (11.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (11.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 의무와 금지 표현 (Obligation & Prohibition) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (11.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (11.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (11.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (11.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (11.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (11.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 의무와 금지 표현 (Obligation & Prohibition) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 11-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (11.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (11.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (11.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u11-l3": {
    "id": "ko-u11-l3",
    "subject": "korean",
    "unit": 11,
    "lessonNumber": 3,
    "title": "의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) (Part 3)",
    "level": "B1",
    "objective": "Comprehensive mastery of 의무와 금지 표현 (Obligation & Prohibition).",
    "presentation": {
      "explanation": "본 단원에서는 « 의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) » (제3절)의 핵심 언어 요소와 의무와 금지 표현 (Obligation & Prohibition)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (11.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (11.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (11.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 의무와 금지 표현 (Obligation & Prohibition) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (11.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (11.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (11.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (11.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (11.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (11.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 의무와 금지 표현 (Obligation & Prohibition) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 11-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (11.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (11.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (11.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u11-l4": {
    "id": "ko-u11-l4",
    "subject": "korean",
    "unit": 11,
    "lessonNumber": 4,
    "title": "의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) (Part 4)",
    "level": "B1",
    "objective": "Comprehensive mastery of 의무와 금지 표현 (Obligation & Prohibition).",
    "presentation": {
      "explanation": "본 단원에서는 « 의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) » (제4절)의 핵심 언어 요소와 의무와 금지 표현 (Obligation & Prohibition)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (11.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (11.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (11.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 의무와 금지 표현 (Obligation & Prohibition) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (11.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (11.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (11.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (11.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (11.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (11.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 의무와 금지 표현 (Obligation & Prohibition) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 11-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (11.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (11.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (11.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u11-l5": {
    "id": "ko-u11-l5",
    "subject": "korean",
    "unit": 11,
    "lessonNumber": 5,
    "title": "의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) (Part 5)",
    "level": "B1",
    "objective": "Comprehensive mastery of 의무와 금지 표현 (Obligation & Prohibition).",
    "presentation": {
      "explanation": "본 단원에서는 « 의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) » (제5절)의 핵심 언어 요소와 의무와 금지 표현 (Obligation & Prohibition)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (11.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (11.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (11.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 의무와 금지 표현 (Obligation & Prohibition) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (11.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (11.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (11.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 의무와 금지(-아/어야 하다, -면 안 되다) (Obligation) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (11.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (11.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (11.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 의무와 금지 표현 (Obligation & Prohibition) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 11-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (11.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (11.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (11.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u12-l1": {
    "id": "ko-u12-l1",
    "subject": "korean",
    "unit": 12,
    "lessonNumber": 1,
    "title": "주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) (Part 1)",
    "level": "B1",
    "objective": "Comprehensive mastery of 주체 높임 선어말어미 -(으)시- (Subject Honorifics).",
    "presentation": {
      "explanation": "본 단원에서는 « 주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) » (제1절)의 핵심 언어 요소와 주체 높임 선어말어미 -(으)시- (Subject Honorifics)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (12.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (12.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (12.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 주체 높임 선어말어미 -(으)시- (Subject Honorifics) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (12.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (12.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (12.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (12.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (12.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (12.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 주체 높임 선어말어미 -(으)시- (Subject Honorifics) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 12-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (12.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (12.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (12.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u12-l2": {
    "id": "ko-u12-l2",
    "subject": "korean",
    "unit": 12,
    "lessonNumber": 2,
    "title": "주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) (Part 2)",
    "level": "B1",
    "objective": "Comprehensive mastery of 주체 높임 선어말어미 -(으)시- (Subject Honorifics).",
    "presentation": {
      "explanation": "본 단원에서는 « 주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) » (제2절)의 핵심 언어 요소와 주체 높임 선어말어미 -(으)시- (Subject Honorifics)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (12.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (12.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (12.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 주체 높임 선어말어미 -(으)시- (Subject Honorifics) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (12.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (12.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (12.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (12.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (12.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (12.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 주체 높임 선어말어미 -(으)시- (Subject Honorifics) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 12-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (12.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (12.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (12.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u12-l3": {
    "id": "ko-u12-l3",
    "subject": "korean",
    "unit": 12,
    "lessonNumber": 3,
    "title": "주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) (Part 3)",
    "level": "B1",
    "objective": "Comprehensive mastery of 주체 높임 선어말어미 -(으)시- (Subject Honorifics).",
    "presentation": {
      "explanation": "본 단원에서는 « 주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) » (제3절)의 핵심 언어 요소와 주체 높임 선어말어미 -(으)시- (Subject Honorifics)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (12.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (12.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (12.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 주체 높임 선어말어미 -(으)시- (Subject Honorifics) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (12.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (12.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (12.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (12.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (12.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (12.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 주체 높임 선어말어미 -(으)시- (Subject Honorifics) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 12-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (12.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (12.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (12.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u12-l4": {
    "id": "ko-u12-l4",
    "subject": "korean",
    "unit": 12,
    "lessonNumber": 4,
    "title": "주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) (Part 4)",
    "level": "B1",
    "objective": "Comprehensive mastery of 주체 높임 선어말어미 -(으)시- (Subject Honorifics).",
    "presentation": {
      "explanation": "본 단원에서는 « 주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) » (제4절)의 핵심 언어 요소와 주체 높임 선어말어미 -(으)시- (Subject Honorifics)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (12.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (12.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (12.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 주체 높임 선어말어미 -(으)시- (Subject Honorifics) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (12.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (12.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (12.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (12.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (12.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (12.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 주체 높임 선어말어미 -(으)시- (Subject Honorifics) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 12-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (12.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (12.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (12.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u12-l5": {
    "id": "ko-u12-l5",
    "subject": "korean",
    "unit": 12,
    "lessonNumber": 5,
    "title": "주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) (Part 5)",
    "level": "B1",
    "objective": "Comprehensive mastery of 주체 높임 선어말어미 -(으)시- (Subject Honorifics).",
    "presentation": {
      "explanation": "본 단원에서는 « 주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) » (제5절)의 핵심 언어 요소와 주체 높임 선어말어미 -(으)시- (Subject Honorifics)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (12.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (12.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (12.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 주체 높임 선어말어미 -(으)시- (Subject Honorifics) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (12.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (12.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (12.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 주체 높임법(-(으)시-)과 특수 어휘 (Subject Honorifics) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (12.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (12.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (12.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 주체 높임 선어말어미 -(으)시- (Subject Honorifics) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 12-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (12.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (12.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (12.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u13-l1": {
    "id": "ko-u13-l1",
    "subject": "korean",
    "unit": 13,
    "lessonNumber": 1,
    "title": "객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) (Part 1)",
    "level": "B1",
    "objective": "Comprehensive mastery of 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다).",
    "presentation": {
      "explanation": "본 단원에서는 « 객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) » (제1절)의 핵심 언어 요소와 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (13.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (13.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (13.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (13.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (13.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (13.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (13.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (13.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (13.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 13-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (13.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (13.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (13.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u13-l2": {
    "id": "ko-u13-l2",
    "subject": "korean",
    "unit": 13,
    "lessonNumber": 2,
    "title": "객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) (Part 2)",
    "level": "B1",
    "objective": "Comprehensive mastery of 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다).",
    "presentation": {
      "explanation": "본 단원에서는 « 객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) » (제2절)의 핵심 언어 요소와 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (13.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (13.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (13.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (13.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (13.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (13.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (13.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (13.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (13.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 13-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (13.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (13.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (13.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u13-l3": {
    "id": "ko-u13-l3",
    "subject": "korean",
    "unit": 13,
    "lessonNumber": 3,
    "title": "객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) (Part 3)",
    "level": "B1",
    "objective": "Comprehensive mastery of 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다).",
    "presentation": {
      "explanation": "본 단원에서는 « 객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) » (제3절)의 핵심 언어 요소와 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (13.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (13.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (13.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (13.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (13.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (13.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (13.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (13.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (13.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 13-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (13.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (13.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (13.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u13-l4": {
    "id": "ko-u13-l4",
    "subject": "korean",
    "unit": 13,
    "lessonNumber": 4,
    "title": "객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) (Part 4)",
    "level": "B1",
    "objective": "Comprehensive mastery of 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다).",
    "presentation": {
      "explanation": "본 단원에서는 « 객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) » (제4절)의 핵심 언어 요소와 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (13.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (13.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (13.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (13.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (13.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (13.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (13.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (13.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (13.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 13-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (13.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (13.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (13.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u13-l5": {
    "id": "ko-u13-l5",
    "subject": "korean",
    "unit": 13,
    "lessonNumber": 5,
    "title": "객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) (Part 5)",
    "level": "B1",
    "objective": "Comprehensive mastery of 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다).",
    "presentation": {
      "explanation": "본 단원에서는 « 객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) » (제5절)의 핵심 언어 요소와 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (13.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (13.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (13.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (13.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (13.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (13.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 객체 높임법(드리다, 모시다, 뵙다) (Object Honorifics) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (13.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (13.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (13.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 객체 높임 특수 어휘 (Object Honorifics: 드리다/모시다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 13-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (13.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (13.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (13.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u14-l1": {
    "id": "ko-u14-l1",
    "subject": "korean",
    "unit": 14,
    "lessonNumber": 1,
    "title": "이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) (Part 1)",
    "level": "B1",
    "objective": "Comprehensive mastery of 이유 원인 연결어미 (Causal Connectives: -아/어서).",
    "presentation": {
      "explanation": "본 단원에서는 « 이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) » (제1절)의 핵심 언어 요소와 이유 원인 연결어미 (Causal Connectives: -아/어서)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (14.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (14.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (14.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 이유 원인 연결어미 (Causal Connectives: -아/어서) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (14.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (14.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (14.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (14.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (14.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (14.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 이유 원인 연결어미 (Causal Connectives: -아/어서) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 14-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (14.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (14.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (14.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u14-l2": {
    "id": "ko-u14-l2",
    "subject": "korean",
    "unit": 14,
    "lessonNumber": 2,
    "title": "이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) (Part 2)",
    "level": "B1",
    "objective": "Comprehensive mastery of 이유 원인 연결어미 (Causal Connectives: -아/어서).",
    "presentation": {
      "explanation": "본 단원에서는 « 이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) » (제2절)의 핵심 언어 요소와 이유 원인 연결어미 (Causal Connectives: -아/어서)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (14.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (14.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (14.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 이유 원인 연결어미 (Causal Connectives: -아/어서) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (14.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (14.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (14.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (14.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (14.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (14.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 이유 원인 연결어미 (Causal Connectives: -아/어서) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 14-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (14.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (14.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (14.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u14-l3": {
    "id": "ko-u14-l3",
    "subject": "korean",
    "unit": 14,
    "lessonNumber": 3,
    "title": "이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) (Part 3)",
    "level": "B1",
    "objective": "Comprehensive mastery of 이유 원인 연결어미 (Causal Connectives: -아/어서).",
    "presentation": {
      "explanation": "본 단원에서는 « 이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) » (제3절)의 핵심 언어 요소와 이유 원인 연결어미 (Causal Connectives: -아/어서)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (14.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (14.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (14.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 이유 원인 연결어미 (Causal Connectives: -아/어서) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (14.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (14.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (14.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (14.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (14.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (14.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 이유 원인 연결어미 (Causal Connectives: -아/어서) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 14-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (14.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (14.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (14.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u14-l4": {
    "id": "ko-u14-l4",
    "subject": "korean",
    "unit": 14,
    "lessonNumber": 4,
    "title": "이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) (Part 4)",
    "level": "B1",
    "objective": "Comprehensive mastery of 이유 원인 연결어미 (Causal Connectives: -아/어서).",
    "presentation": {
      "explanation": "본 단원에서는 « 이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) » (제4절)의 핵심 언어 요소와 이유 원인 연결어미 (Causal Connectives: -아/어서)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (14.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (14.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (14.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 이유 원인 연결어미 (Causal Connectives: -아/어서) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (14.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (14.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (14.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (14.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (14.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (14.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 이유 원인 연결어미 (Causal Connectives: -아/어서) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 14-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (14.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (14.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (14.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u14-l5": {
    "id": "ko-u14-l5",
    "subject": "korean",
    "unit": 14,
    "lessonNumber": 5,
    "title": "이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) (Part 5)",
    "level": "B1",
    "objective": "Comprehensive mastery of 이유 원인 연결어미 (Causal Connectives: -아/어서).",
    "presentation": {
      "explanation": "본 단원에서는 « 이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) » (제5절)의 핵심 언어 요소와 이유 원인 연결어미 (Causal Connectives: -아/어서)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (14.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (14.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (14.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 이유 원인 연결어미 (Causal Connectives: -아/어서) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (14.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (14.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (14.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 이유·원인 연결어미(-아/어서, -(으)니까, -기 때문에) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (14.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (14.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (14.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 이유 원인 연결어미 (Causal Connectives: -아/어서) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 14-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (14.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (14.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (14.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u15-l1": {
    "id": "ko-u15-l1",
    "subject": "korean",
    "unit": 15,
    "lessonNumber": 1,
    "title": "대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) (Part 1)",
    "level": "B1",
    "objective": "Comprehensive mastery of 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데).",
    "presentation": {
      "explanation": "본 단원에서는 « 대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) » (제1절)의 핵심 언어 요소와 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (15.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (15.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (15.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (15.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (15.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (15.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (15.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (15.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (15.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 15-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (15.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (15.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (15.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u15-l2": {
    "id": "ko-u15-l2",
    "subject": "korean",
    "unit": 15,
    "lessonNumber": 2,
    "title": "대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) (Part 2)",
    "level": "B1",
    "objective": "Comprehensive mastery of 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데).",
    "presentation": {
      "explanation": "본 단원에서는 « 대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) » (제2절)의 핵심 언어 요소와 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (15.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (15.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (15.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (15.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (15.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (15.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (15.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (15.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (15.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 15-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (15.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (15.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (15.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u15-l3": {
    "id": "ko-u15-l3",
    "subject": "korean",
    "unit": 15,
    "lessonNumber": 3,
    "title": "대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) (Part 3)",
    "level": "B1",
    "objective": "Comprehensive mastery of 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데).",
    "presentation": {
      "explanation": "본 단원에서는 « 대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) » (제3절)의 핵심 언어 요소와 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (15.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (15.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (15.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (15.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (15.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (15.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (15.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (15.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (15.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 15-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (15.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (15.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (15.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u15-l4": {
    "id": "ko-u15-l4",
    "subject": "korean",
    "unit": 15,
    "lessonNumber": 4,
    "title": "대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) (Part 4)",
    "level": "B1",
    "objective": "Comprehensive mastery of 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데).",
    "presentation": {
      "explanation": "본 단원에서는 « 대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) » (제4절)의 핵심 언어 요소와 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (15.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (15.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (15.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (15.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (15.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (15.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (15.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (15.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (15.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 15-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (15.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (15.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (15.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u15-l5": {
    "id": "ko-u15-l5",
    "subject": "korean",
    "unit": 15,
    "lessonNumber": 5,
    "title": "대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) (Part 5)",
    "level": "B1",
    "objective": "Comprehensive mastery of 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데).",
    "presentation": {
      "explanation": "본 단원에서는 « 대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) » (제5절)의 핵심 언어 요소와 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (15.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (15.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (15.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (15.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (15.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (15.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 대조와 배경 제시(-지만, -(으)ㄴ/는데) (Contrast & Background) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (15.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (15.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (15.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 대조와 배경 연결어미 (Contrast Connectives: -지만 / -는데) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 15-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (15.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (15.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (15.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u16-l1": {
    "id": "ko-u16-l1",
    "subject": "korean",
    "unit": 16,
    "lessonNumber": 1,
    "title": "관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) (Part 1)",
    "level": "B1",
    "objective": "Comprehensive mastery of 관형사형 전성어미 (Noun-Modifying Clauses).",
    "presentation": {
      "explanation": "본 단원에서는 « 관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) » (제1절)의 핵심 언어 요소와 관형사형 전성어미 (Noun-Modifying Clauses)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (16.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (16.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (16.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 관형사형 전성어미 (Noun-Modifying Clauses) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (16.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (16.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (16.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (16.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (16.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (16.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 관형사형 전성어미 (Noun-Modifying Clauses) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 16-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (16.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (16.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (16.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u16-l2": {
    "id": "ko-u16-l2",
    "subject": "korean",
    "unit": 16,
    "lessonNumber": 2,
    "title": "관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) (Part 2)",
    "level": "B1",
    "objective": "Comprehensive mastery of 관형사형 전성어미 (Noun-Modifying Clauses).",
    "presentation": {
      "explanation": "본 단원에서는 « 관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) » (제2절)의 핵심 언어 요소와 관형사형 전성어미 (Noun-Modifying Clauses)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (16.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (16.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (16.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 관형사형 전성어미 (Noun-Modifying Clauses) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (16.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (16.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (16.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (16.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (16.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (16.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 관형사형 전성어미 (Noun-Modifying Clauses) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 16-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (16.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (16.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (16.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u16-l3": {
    "id": "ko-u16-l3",
    "subject": "korean",
    "unit": 16,
    "lessonNumber": 3,
    "title": "관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) (Part 3)",
    "level": "B1",
    "objective": "Comprehensive mastery of 관형사형 전성어미 (Noun-Modifying Clauses).",
    "presentation": {
      "explanation": "본 단원에서는 « 관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) » (제3절)의 핵심 언어 요소와 관형사형 전성어미 (Noun-Modifying Clauses)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (16.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (16.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (16.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 관형사형 전성어미 (Noun-Modifying Clauses) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (16.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (16.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (16.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (16.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (16.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (16.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 관형사형 전성어미 (Noun-Modifying Clauses) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 16-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (16.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (16.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (16.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u16-l4": {
    "id": "ko-u16-l4",
    "subject": "korean",
    "unit": 16,
    "lessonNumber": 4,
    "title": "관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) (Part 4)",
    "level": "B1",
    "objective": "Comprehensive mastery of 관형사형 전성어미 (Noun-Modifying Clauses).",
    "presentation": {
      "explanation": "본 단원에서는 « 관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) » (제4절)의 핵심 언어 요소와 관형사형 전성어미 (Noun-Modifying Clauses)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (16.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (16.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (16.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 관형사형 전성어미 (Noun-Modifying Clauses) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (16.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (16.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (16.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (16.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (16.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (16.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 관형사형 전성어미 (Noun-Modifying Clauses) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 16-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (16.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (16.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (16.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u16-l5": {
    "id": "ko-u16-l5",
    "subject": "korean",
    "unit": 16,
    "lessonNumber": 5,
    "title": "관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) (Part 5)",
    "level": "B1",
    "objective": "Comprehensive mastery of 관형사형 전성어미 (Noun-Modifying Clauses).",
    "presentation": {
      "explanation": "본 단원에서는 « 관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) » (제5절)의 핵심 언어 요소와 관형사형 전성어미 (Noun-Modifying Clauses)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (16.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (16.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (16.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 관형사형 전성어미 (Noun-Modifying Clauses) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (16.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (16.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (16.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 관형사형 전성어미(-(으)ㄴ, -는, -(으)ㄹ) (Noun Modifiers) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (16.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (16.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (16.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 관형사형 전성어미 (Noun-Modifying Clauses) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 16-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (16.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (16.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (16.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B1 target-language standard."
        }
      ]
    }
  },
  "ko-u17-l1": {
    "id": "ko-u17-l1",
    "subject": "korean",
    "unit": 17,
    "lessonNumber": 1,
    "title": "명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) (Part 1)",
    "level": "B2",
    "objective": "Comprehensive mastery of 명사형 전성어미 (Nominalization: -기 / -는 것).",
    "presentation": {
      "explanation": "본 단원에서는 « 명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) » (제1절)의 핵심 언어 요소와 명사형 전성어미 (Nominalization: -기 / -는 것)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (17.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (17.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (17.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 명사형 전성어미 (Nominalization: -기 / -는 것) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (17.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (17.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (17.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (17.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (17.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (17.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 명사형 전성어미 (Nominalization: -기 / -는 것) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 17-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (17.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (17.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (17.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u17-l2": {
    "id": "ko-u17-l2",
    "subject": "korean",
    "unit": 17,
    "lessonNumber": 2,
    "title": "명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) (Part 2)",
    "level": "B2",
    "objective": "Comprehensive mastery of 명사형 전성어미 (Nominalization: -기 / -는 것).",
    "presentation": {
      "explanation": "본 단원에서는 « 명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) » (제2절)의 핵심 언어 요소와 명사형 전성어미 (Nominalization: -기 / -는 것)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (17.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (17.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (17.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 명사형 전성어미 (Nominalization: -기 / -는 것) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (17.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (17.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (17.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (17.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (17.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (17.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 명사형 전성어미 (Nominalization: -기 / -는 것) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 17-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (17.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (17.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (17.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u17-l3": {
    "id": "ko-u17-l3",
    "subject": "korean",
    "unit": 17,
    "lessonNumber": 3,
    "title": "명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) (Part 3)",
    "level": "B2",
    "objective": "Comprehensive mastery of 명사형 전성어미 (Nominalization: -기 / -는 것).",
    "presentation": {
      "explanation": "본 단원에서는 « 명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) » (제3절)의 핵심 언어 요소와 명사형 전성어미 (Nominalization: -기 / -는 것)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (17.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (17.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (17.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 명사형 전성어미 (Nominalization: -기 / -는 것) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (17.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (17.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (17.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (17.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (17.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (17.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 명사형 전성어미 (Nominalization: -기 / -는 것) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 17-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (17.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (17.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (17.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u17-l4": {
    "id": "ko-u17-l4",
    "subject": "korean",
    "unit": 17,
    "lessonNumber": 4,
    "title": "명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) (Part 4)",
    "level": "B2",
    "objective": "Comprehensive mastery of 명사형 전성어미 (Nominalization: -기 / -는 것).",
    "presentation": {
      "explanation": "본 단원에서는 « 명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) » (제4절)의 핵심 언어 요소와 명사형 전성어미 (Nominalization: -기 / -는 것)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (17.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (17.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (17.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 명사형 전성어미 (Nominalization: -기 / -는 것) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (17.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (17.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (17.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (17.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (17.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (17.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 명사형 전성어미 (Nominalization: -기 / -는 것) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 17-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (17.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (17.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (17.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u17-l5": {
    "id": "ko-u17-l5",
    "subject": "korean",
    "unit": 17,
    "lessonNumber": 5,
    "title": "명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) (Part 5)",
    "level": "B2",
    "objective": "Comprehensive mastery of 명사형 전성어미 (Nominalization: -기 / -는 것).",
    "presentation": {
      "explanation": "본 단원에서는 « 명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) » (제5절)의 핵심 언어 요소와 명사형 전성어미 (Nominalization: -기 / -는 것)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (17.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (17.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (17.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 명사형 전성어미 (Nominalization: -기 / -는 것) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (17.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (17.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (17.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 명사형 어미(-기, -(으)ㅁ, -는 것) (Nominalization) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (17.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (17.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (17.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 명사형 전성어미 (Nominalization: -기 / -는 것) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 17-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (17.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (17.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (17.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u18-l1": {
    "id": "ko-u18-l1",
    "subject": "korean",
    "unit": 18,
    "lessonNumber": 1,
    "title": "간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) (Part 1)",
    "level": "B2",
    "objective": "Comprehensive mastery of 간접화법 표현 체계 (Indirect Reported Speech).",
    "presentation": {
      "explanation": "본 단원에서는 « 간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) » (제1절)의 핵심 언어 요소와 간접화법 표현 체계 (Indirect Reported Speech)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (18.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (18.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (18.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 간접화법 표현 체계 (Indirect Reported Speech) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (18.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (18.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (18.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (18.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (18.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (18.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 간접화법 표현 체계 (Indirect Reported Speech) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 18-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (18.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (18.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (18.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u18-l2": {
    "id": "ko-u18-l2",
    "subject": "korean",
    "unit": 18,
    "lessonNumber": 2,
    "title": "간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) (Part 2)",
    "level": "B2",
    "objective": "Comprehensive mastery of 간접화법 표현 체계 (Indirect Reported Speech).",
    "presentation": {
      "explanation": "본 단원에서는 « 간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) » (제2절)의 핵심 언어 요소와 간접화법 표현 체계 (Indirect Reported Speech)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (18.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (18.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (18.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 간접화법 표현 체계 (Indirect Reported Speech) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (18.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (18.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (18.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (18.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (18.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (18.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 간접화법 표현 체계 (Indirect Reported Speech) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 18-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (18.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (18.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (18.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u18-l3": {
    "id": "ko-u18-l3",
    "subject": "korean",
    "unit": 18,
    "lessonNumber": 3,
    "title": "간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) (Part 3)",
    "level": "B2",
    "objective": "Comprehensive mastery of 간접화법 표현 체계 (Indirect Reported Speech).",
    "presentation": {
      "explanation": "본 단원에서는 « 간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) » (제3절)의 핵심 언어 요소와 간접화법 표현 체계 (Indirect Reported Speech)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (18.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (18.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (18.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 간접화법 표현 체계 (Indirect Reported Speech) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (18.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (18.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (18.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (18.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (18.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (18.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 간접화법 표현 체계 (Indirect Reported Speech) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 18-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (18.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (18.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (18.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u18-l4": {
    "id": "ko-u18-l4",
    "subject": "korean",
    "unit": 18,
    "lessonNumber": 4,
    "title": "간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) (Part 4)",
    "level": "B2",
    "objective": "Comprehensive mastery of 간접화법 표현 체계 (Indirect Reported Speech).",
    "presentation": {
      "explanation": "본 단원에서는 « 간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) » (제4절)의 핵심 언어 요소와 간접화법 표현 체계 (Indirect Reported Speech)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (18.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (18.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (18.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 간접화법 표현 체계 (Indirect Reported Speech) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (18.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (18.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (18.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (18.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (18.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (18.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 간접화법 표현 체계 (Indirect Reported Speech) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 18-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (18.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (18.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (18.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u18-l5": {
    "id": "ko-u18-l5",
    "subject": "korean",
    "unit": 18,
    "lessonNumber": 5,
    "title": "간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) (Part 5)",
    "level": "B2",
    "objective": "Comprehensive mastery of 간접화법 표현 체계 (Indirect Reported Speech).",
    "presentation": {
      "explanation": "본 단원에서는 « 간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) » (제5절)의 핵심 언어 요소와 간접화법 표현 체계 (Indirect Reported Speech)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (18.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (18.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (18.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 간접화법 표현 체계 (Indirect Reported Speech) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (18.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (18.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (18.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 간접화법(-다고 하다, -냐고 하다, -자고 하다) (Indirect Speech) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (18.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (18.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (18.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 간접화법 표현 체계 (Indirect Reported Speech) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 18-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (18.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (18.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (18.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u19-l1": {
    "id": "ko-u19-l1",
    "subject": "korean",
    "unit": 19,
    "lessonNumber": 1,
    "title": "피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) (Part 1)",
    "level": "B2",
    "objective": "Comprehensive mastery of 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes).",
    "presentation": {
      "explanation": "본 단원에서는 « 피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) » (제1절)의 핵심 언어 요소와 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (19.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (19.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (19.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (19.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (19.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (19.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (19.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (19.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (19.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 19-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (19.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (19.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (19.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u19-l2": {
    "id": "ko-u19-l2",
    "subject": "korean",
    "unit": 19,
    "lessonNumber": 2,
    "title": "피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) (Part 2)",
    "level": "B2",
    "objective": "Comprehensive mastery of 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes).",
    "presentation": {
      "explanation": "본 단원에서는 « 피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) » (제2절)의 핵심 언어 요소와 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (19.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (19.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (19.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (19.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (19.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (19.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (19.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (19.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (19.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 19-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (19.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (19.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (19.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u19-l3": {
    "id": "ko-u19-l3",
    "subject": "korean",
    "unit": 19,
    "lessonNumber": 3,
    "title": "피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) (Part 3)",
    "level": "B2",
    "objective": "Comprehensive mastery of 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes).",
    "presentation": {
      "explanation": "본 단원에서는 « 피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) » (제3절)의 핵심 언어 요소와 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (19.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (19.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (19.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (19.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (19.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (19.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (19.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (19.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (19.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 19-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (19.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (19.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (19.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u19-l4": {
    "id": "ko-u19-l4",
    "subject": "korean",
    "unit": 19,
    "lessonNumber": 4,
    "title": "피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) (Part 4)",
    "level": "B2",
    "objective": "Comprehensive mastery of 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes).",
    "presentation": {
      "explanation": "본 단원에서는 « 피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) » (제4절)의 핵심 언어 요소와 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (19.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (19.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (19.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (19.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (19.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (19.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (19.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (19.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (19.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 19-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (19.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (19.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (19.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u19-l5": {
    "id": "ko-u19-l5",
    "subject": "korean",
    "unit": 19,
    "lessonNumber": 5,
    "title": "피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) (Part 5)",
    "level": "B2",
    "objective": "Comprehensive mastery of 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes).",
    "presentation": {
      "explanation": "본 단원에서는 « 피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) » (제5절)의 핵심 언어 요소와 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (19.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (19.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (19.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (19.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (19.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (19.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 피동 표현(-이/히/리/기-, -아/어지다) (Passive Voice) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (19.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (19.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (19.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 피동사 접미사와 -아/어지다 (Passive Voice Syntaxes) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 19-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (19.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (19.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (19.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u20-l1": {
    "id": "ko-u20-l1",
    "subject": "korean",
    "unit": 20,
    "lessonNumber": 1,
    "title": "사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) (Part 1)",
    "level": "B2",
    "objective": "Comprehensive mastery of 사동사 접미사와 -게 하다 (Causative Structures).",
    "presentation": {
      "explanation": "본 단원에서는 « 사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) » (제1절)의 핵심 언어 요소와 사동사 접미사와 -게 하다 (Causative Structures)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (20.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (20.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (20.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 사동사 접미사와 -게 하다 (Causative Structures) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (20.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (20.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (20.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (20.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (20.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (20.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 사동사 접미사와 -게 하다 (Causative Structures) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 20-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (20.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (20.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (20.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u20-l2": {
    "id": "ko-u20-l2",
    "subject": "korean",
    "unit": 20,
    "lessonNumber": 2,
    "title": "사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) (Part 2)",
    "level": "B2",
    "objective": "Comprehensive mastery of 사동사 접미사와 -게 하다 (Causative Structures).",
    "presentation": {
      "explanation": "본 단원에서는 « 사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) » (제2절)의 핵심 언어 요소와 사동사 접미사와 -게 하다 (Causative Structures)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (20.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (20.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (20.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 사동사 접미사와 -게 하다 (Causative Structures) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (20.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (20.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (20.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (20.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (20.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (20.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 사동사 접미사와 -게 하다 (Causative Structures) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 20-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (20.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (20.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (20.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u20-l3": {
    "id": "ko-u20-l3",
    "subject": "korean",
    "unit": 20,
    "lessonNumber": 3,
    "title": "사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) (Part 3)",
    "level": "B2",
    "objective": "Comprehensive mastery of 사동사 접미사와 -게 하다 (Causative Structures).",
    "presentation": {
      "explanation": "본 단원에서는 « 사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) » (제3절)의 핵심 언어 요소와 사동사 접미사와 -게 하다 (Causative Structures)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (20.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (20.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (20.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 사동사 접미사와 -게 하다 (Causative Structures) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (20.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (20.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (20.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (20.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (20.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (20.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 사동사 접미사와 -게 하다 (Causative Structures) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 20-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (20.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (20.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (20.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u20-l4": {
    "id": "ko-u20-l4",
    "subject": "korean",
    "unit": 20,
    "lessonNumber": 4,
    "title": "사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) (Part 4)",
    "level": "B2",
    "objective": "Comprehensive mastery of 사동사 접미사와 -게 하다 (Causative Structures).",
    "presentation": {
      "explanation": "본 단원에서는 « 사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) » (제4절)의 핵심 언어 요소와 사동사 접미사와 -게 하다 (Causative Structures)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (20.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (20.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (20.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 사동사 접미사와 -게 하다 (Causative Structures) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (20.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (20.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (20.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (20.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (20.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (20.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 사동사 접미사와 -게 하다 (Causative Structures) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 20-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (20.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (20.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (20.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u20-l5": {
    "id": "ko-u20-l5",
    "subject": "korean",
    "unit": 20,
    "lessonNumber": 5,
    "title": "사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) (Part 5)",
    "level": "B2",
    "objective": "Comprehensive mastery of 사동사 접미사와 -게 하다 (Causative Structures).",
    "presentation": {
      "explanation": "본 단원에서는 « 사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) » (제5절)의 핵심 언어 요소와 사동사 접미사와 -게 하다 (Causative Structures)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (20.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (20.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (20.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 사동사 접미사와 -게 하다 (Causative Structures) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (20.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (20.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (20.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 사동 표현(-이/히/리/기/우/추-, -게 하다) (Causative Voice) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (20.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (20.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (20.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 사동사 접미사와 -게 하다 (Causative Structures) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 20-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (20.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (20.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (20.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u21-l1": {
    "id": "ko-u21-l1",
    "subject": "korean",
    "unit": 21,
    "lessonNumber": 1,
    "title": "조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) (Part 1)",
    "level": "B2",
    "objective": "Comprehensive mastery of 조건과 가정 어미 (Hypothetical Conditionals).",
    "presentation": {
      "explanation": "본 단원에서는 « 조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) » (제1절)의 핵심 언어 요소와 조건과 가정 어미 (Hypothetical Conditionals)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (21.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (21.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (21.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 조건과 가정 어미 (Hypothetical Conditionals) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (21.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (21.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (21.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (21.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (21.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (21.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 조건과 가정 어미 (Hypothetical Conditionals) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 21-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (21.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (21.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (21.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u21-l2": {
    "id": "ko-u21-l2",
    "subject": "korean",
    "unit": 21,
    "lessonNumber": 2,
    "title": "조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) (Part 2)",
    "level": "B2",
    "objective": "Comprehensive mastery of 조건과 가정 어미 (Hypothetical Conditionals).",
    "presentation": {
      "explanation": "본 단원에서는 « 조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) » (제2절)의 핵심 언어 요소와 조건과 가정 어미 (Hypothetical Conditionals)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (21.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (21.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (21.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 조건과 가정 어미 (Hypothetical Conditionals) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (21.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (21.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (21.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (21.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (21.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (21.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 조건과 가정 어미 (Hypothetical Conditionals) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 21-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (21.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (21.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (21.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u21-l3": {
    "id": "ko-u21-l3",
    "subject": "korean",
    "unit": 21,
    "lessonNumber": 3,
    "title": "조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) (Part 3)",
    "level": "B2",
    "objective": "Comprehensive mastery of 조건과 가정 어미 (Hypothetical Conditionals).",
    "presentation": {
      "explanation": "본 단원에서는 « 조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) » (제3절)의 핵심 언어 요소와 조건과 가정 어미 (Hypothetical Conditionals)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (21.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (21.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (21.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 조건과 가정 어미 (Hypothetical Conditionals) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (21.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (21.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (21.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (21.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (21.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (21.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 조건과 가정 어미 (Hypothetical Conditionals) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 21-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (21.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (21.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (21.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u21-l4": {
    "id": "ko-u21-l4",
    "subject": "korean",
    "unit": 21,
    "lessonNumber": 4,
    "title": "조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) (Part 4)",
    "level": "B2",
    "objective": "Comprehensive mastery of 조건과 가정 어미 (Hypothetical Conditionals).",
    "presentation": {
      "explanation": "본 단원에서는 « 조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) » (제4절)의 핵심 언어 요소와 조건과 가정 어미 (Hypothetical Conditionals)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (21.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (21.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (21.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 조건과 가정 어미 (Hypothetical Conditionals) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (21.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (21.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (21.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (21.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (21.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (21.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 조건과 가정 어미 (Hypothetical Conditionals) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 21-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (21.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (21.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (21.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u21-l5": {
    "id": "ko-u21-l5",
    "subject": "korean",
    "unit": 21,
    "lessonNumber": 5,
    "title": "조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) (Part 5)",
    "level": "B2",
    "objective": "Comprehensive mastery of 조건과 가정 어미 (Hypothetical Conditionals).",
    "presentation": {
      "explanation": "본 단원에서는 « 조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) » (제5절)의 핵심 언어 요소와 조건과 가정 어미 (Hypothetical Conditionals)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (21.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (21.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (21.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 조건과 가정 어미 (Hypothetical Conditionals) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (21.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (21.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (21.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 조건과 가정(-(으)면, -(았/었)더라면) (Hypotheticals) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (21.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (21.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (21.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 조건과 가정 어미 (Hypothetical Conditionals) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 21-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (21.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (21.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (21.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u22-l1": {
    "id": "ko-u22-l1",
    "subject": "korean",
    "unit": 22,
    "lessonNumber": 1,
    "title": "심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) (Part 1)",
    "level": "B2",
    "objective": "Comprehensive mastery of 심화 연결어미 활용 (Advanced Connectives).",
    "presentation": {
      "explanation": "본 단원에서는 « 심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) » (제1절)의 핵심 언어 요소와 심화 연결어미 활용 (Advanced Connectives)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (22.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (22.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (22.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 심화 연결어미 활용 (Advanced Connectives) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (22.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (22.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (22.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (22.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (22.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (22.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 심화 연결어미 활용 (Advanced Connectives) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 22-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (22.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (22.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (22.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u22-l2": {
    "id": "ko-u22-l2",
    "subject": "korean",
    "unit": 22,
    "lessonNumber": 2,
    "title": "심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) (Part 2)",
    "level": "B2",
    "objective": "Comprehensive mastery of 심화 연결어미 활용 (Advanced Connectives).",
    "presentation": {
      "explanation": "본 단원에서는 « 심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) » (제2절)의 핵심 언어 요소와 심화 연결어미 활용 (Advanced Connectives)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (22.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (22.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (22.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 심화 연결어미 활용 (Advanced Connectives) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (22.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (22.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (22.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (22.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (22.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (22.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 심화 연결어미 활용 (Advanced Connectives) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 22-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (22.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (22.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (22.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u22-l3": {
    "id": "ko-u22-l3",
    "subject": "korean",
    "unit": 22,
    "lessonNumber": 3,
    "title": "심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) (Part 3)",
    "level": "B2",
    "objective": "Comprehensive mastery of 심화 연결어미 활용 (Advanced Connectives).",
    "presentation": {
      "explanation": "본 단원에서는 « 심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) » (제3절)의 핵심 언어 요소와 심화 연결어미 활용 (Advanced Connectives)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (22.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (22.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (22.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 심화 연결어미 활용 (Advanced Connectives) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (22.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (22.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (22.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (22.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (22.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (22.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 심화 연결어미 활용 (Advanced Connectives) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 22-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (22.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (22.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (22.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u22-l4": {
    "id": "ko-u22-l4",
    "subject": "korean",
    "unit": 22,
    "lessonNumber": 4,
    "title": "심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) (Part 4)",
    "level": "B2",
    "objective": "Comprehensive mastery of 심화 연결어미 활용 (Advanced Connectives).",
    "presentation": {
      "explanation": "본 단원에서는 « 심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) » (제4절)의 핵심 언어 요소와 심화 연결어미 활용 (Advanced Connectives)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (22.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (22.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (22.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 심화 연결어미 활용 (Advanced Connectives) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (22.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (22.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (22.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (22.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (22.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (22.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 심화 연결어미 활용 (Advanced Connectives) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 22-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (22.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (22.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (22.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u22-l5": {
    "id": "ko-u22-l5",
    "subject": "korean",
    "unit": 22,
    "lessonNumber": 5,
    "title": "심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) (Part 5)",
    "level": "B2",
    "objective": "Comprehensive mastery of 심화 연결어미 활용 (Advanced Connectives).",
    "presentation": {
      "explanation": "본 단원에서는 « 심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) » (제5절)의 핵심 언어 요소와 심화 연결어미 활용 (Advanced Connectives)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (22.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (22.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (22.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 심화 연결어미 활용 (Advanced Connectives) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (22.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (22.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (22.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 심화 연결어미(-더라도, -(으)ㄹ수록, -는 한편) (Advanced Connectives) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (22.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (22.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (22.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 심화 연결어미 활용 (Advanced Connectives) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 22-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (22.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (22.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (22.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u23-l1": {
    "id": "ko-u23-l1",
    "subject": "korean",
    "unit": 23,
    "lessonNumber": 1,
    "title": "비즈니스 한국어와 직장 내 의전 (Business Korean) (Part 1)",
    "level": "B2",
    "objective": "Comprehensive mastery of 비즈니스 회화와 이메일 (Business & Corporate Korean).",
    "presentation": {
      "explanation": "본 단원에서는 « 비즈니스 한국어와 직장 내 의전 (Business Korean) » (제1절)의 핵심 언어 요소와 비즈니스 회화와 이메일 (Business & Corporate Korean)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (23.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (23.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (23.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 비즈니스 회화와 이메일 (Business & Corporate Korean) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (23.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (23.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (23.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 비즈니스 한국어와 직장 내 의전 (Business Korean) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (23.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (23.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (23.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 비즈니스 회화와 이메일 (Business & Corporate Korean) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 23-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (23.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (23.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (23.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u23-l2": {
    "id": "ko-u23-l2",
    "subject": "korean",
    "unit": 23,
    "lessonNumber": 2,
    "title": "비즈니스 한국어와 직장 내 의전 (Business Korean) (Part 2)",
    "level": "B2",
    "objective": "Comprehensive mastery of 비즈니스 회화와 이메일 (Business & Corporate Korean).",
    "presentation": {
      "explanation": "본 단원에서는 « 비즈니스 한국어와 직장 내 의전 (Business Korean) » (제2절)의 핵심 언어 요소와 비즈니스 회화와 이메일 (Business & Corporate Korean)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (23.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (23.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (23.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 비즈니스 회화와 이메일 (Business & Corporate Korean) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (23.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (23.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (23.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 비즈니스 한국어와 직장 내 의전 (Business Korean) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (23.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (23.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (23.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 비즈니스 회화와 이메일 (Business & Corporate Korean) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 23-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (23.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (23.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (23.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u23-l3": {
    "id": "ko-u23-l3",
    "subject": "korean",
    "unit": 23,
    "lessonNumber": 3,
    "title": "비즈니스 한국어와 직장 내 의전 (Business Korean) (Part 3)",
    "level": "B2",
    "objective": "Comprehensive mastery of 비즈니스 회화와 이메일 (Business & Corporate Korean).",
    "presentation": {
      "explanation": "본 단원에서는 « 비즈니스 한국어와 직장 내 의전 (Business Korean) » (제3절)의 핵심 언어 요소와 비즈니스 회화와 이메일 (Business & Corporate Korean)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (23.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (23.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (23.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 비즈니스 회화와 이메일 (Business & Corporate Korean) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (23.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (23.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (23.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 비즈니스 한국어와 직장 내 의전 (Business Korean) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (23.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (23.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (23.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 비즈니스 회화와 이메일 (Business & Corporate Korean) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 23-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (23.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (23.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (23.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u23-l4": {
    "id": "ko-u23-l4",
    "subject": "korean",
    "unit": 23,
    "lessonNumber": 4,
    "title": "비즈니스 한국어와 직장 내 의전 (Business Korean) (Part 4)",
    "level": "B2",
    "objective": "Comprehensive mastery of 비즈니스 회화와 이메일 (Business & Corporate Korean).",
    "presentation": {
      "explanation": "본 단원에서는 « 비즈니스 한국어와 직장 내 의전 (Business Korean) » (제4절)의 핵심 언어 요소와 비즈니스 회화와 이메일 (Business & Corporate Korean)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (23.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (23.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (23.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 비즈니스 회화와 이메일 (Business & Corporate Korean) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (23.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (23.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (23.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 비즈니스 한국어와 직장 내 의전 (Business Korean) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (23.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (23.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (23.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 비즈니스 회화와 이메일 (Business & Corporate Korean) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 23-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (23.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (23.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (23.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u23-l5": {
    "id": "ko-u23-l5",
    "subject": "korean",
    "unit": 23,
    "lessonNumber": 5,
    "title": "비즈니스 한국어와 직장 내 의전 (Business Korean) (Part 5)",
    "level": "B2",
    "objective": "Comprehensive mastery of 비즈니스 회화와 이메일 (Business & Corporate Korean).",
    "presentation": {
      "explanation": "본 단원에서는 « 비즈니스 한국어와 직장 내 의전 (Business Korean) » (제5절)의 핵심 언어 요소와 비즈니스 회화와 이메일 (Business & Corporate Korean)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (23.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (23.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (23.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 비즈니스 회화와 이메일 (Business & Corporate Korean) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (23.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (23.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (23.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 비즈니스 한국어와 직장 내 의전 (Business Korean) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (23.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (23.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (23.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 비즈니스 회화와 이메일 (Business & Corporate Korean) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 23-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (23.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (23.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (23.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u24-l1": {
    "id": "ko-u24-l1",
    "subject": "korean",
    "unit": 24,
    "lessonNumber": 1,
    "title": "한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) (Part 1)",
    "level": "B2",
    "objective": "Comprehensive mastery of 대중문화와 영화 비평 (Korean Popular Culture & Arts).",
    "presentation": {
      "explanation": "본 단원에서는 « 한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) » (제1절)의 핵심 언어 요소와 대중문화와 영화 비평 (Korean Popular Culture & Arts)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (24.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (24.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (24.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 대중문화와 영화 비평 (Korean Popular Culture & Arts) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (24.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (24.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (24.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (24.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (24.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (24.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 대중문화와 영화 비평 (Korean Popular Culture & Arts) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 24-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (24.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (24.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (24.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u24-l2": {
    "id": "ko-u24-l2",
    "subject": "korean",
    "unit": 24,
    "lessonNumber": 2,
    "title": "한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) (Part 2)",
    "level": "B2",
    "objective": "Comprehensive mastery of 대중문화와 영화 비평 (Korean Popular Culture & Arts).",
    "presentation": {
      "explanation": "본 단원에서는 « 한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) » (제2절)의 핵심 언어 요소와 대중문화와 영화 비평 (Korean Popular Culture & Arts)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (24.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (24.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (24.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 대중문화와 영화 비평 (Korean Popular Culture & Arts) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (24.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (24.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (24.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (24.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (24.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (24.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 대중문화와 영화 비평 (Korean Popular Culture & Arts) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 24-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (24.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (24.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (24.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u24-l3": {
    "id": "ko-u24-l3",
    "subject": "korean",
    "unit": 24,
    "lessonNumber": 3,
    "title": "한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) (Part 3)",
    "level": "B2",
    "objective": "Comprehensive mastery of 대중문화와 영화 비평 (Korean Popular Culture & Arts).",
    "presentation": {
      "explanation": "본 단원에서는 « 한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) » (제3절)의 핵심 언어 요소와 대중문화와 영화 비평 (Korean Popular Culture & Arts)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (24.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (24.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (24.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 대중문화와 영화 비평 (Korean Popular Culture & Arts) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (24.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (24.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (24.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (24.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (24.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (24.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 대중문화와 영화 비평 (Korean Popular Culture & Arts) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 24-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (24.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (24.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (24.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u24-l4": {
    "id": "ko-u24-l4",
    "subject": "korean",
    "unit": 24,
    "lessonNumber": 4,
    "title": "한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) (Part 4)",
    "level": "B2",
    "objective": "Comprehensive mastery of 대중문화와 영화 비평 (Korean Popular Culture & Arts).",
    "presentation": {
      "explanation": "본 단원에서는 « 한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) » (제4절)의 핵심 언어 요소와 대중문화와 영화 비평 (Korean Popular Culture & Arts)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (24.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (24.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (24.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 대중문화와 영화 비평 (Korean Popular Culture & Arts) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (24.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (24.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (24.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (24.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (24.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (24.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 대중문화와 영화 비평 (Korean Popular Culture & Arts) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 24-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (24.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (24.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (24.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u24-l5": {
    "id": "ko-u24-l5",
    "subject": "korean",
    "unit": 24,
    "lessonNumber": 5,
    "title": "한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) (Part 5)",
    "level": "B2",
    "objective": "Comprehensive mastery of 대중문화와 영화 비평 (Korean Popular Culture & Arts).",
    "presentation": {
      "explanation": "본 단원에서는 « 한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) » (제5절)의 핵심 언어 요소와 대중문화와 영화 비평 (Korean Popular Culture & Arts)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (24.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (24.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (24.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 대중문화와 영화 비평 (Korean Popular Culture & Arts) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (24.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (24.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (24.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 한국 대중문화와 영화·드라마 비평 (Hallyu & Film Criticism) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (24.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (24.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (24.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 대중문화와 영화 비평 (Korean Popular Culture & Arts) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 24-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (24.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (24.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (24.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR B2 target-language standard."
        }
      ]
    }
  },
  "ko-u25-l1": {
    "id": "ko-u25-l1",
    "subject": "korean",
    "unit": 25,
    "lessonNumber": 1,
    "title": "전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) (Part 1)",
    "level": "C1",
    "objective": "Comprehensive mastery of 전통 한식과 식문화 예절 (Korean Culinary Traditions).",
    "presentation": {
      "explanation": "본 단원에서는 « 전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) » (제1절)의 핵심 언어 요소와 전통 한식과 식문화 예절 (Korean Culinary Traditions)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (25.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (25.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (25.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 전통 한식과 식문화 예절 (Korean Culinary Traditions) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (25.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (25.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (25.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (25.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (25.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (25.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 전통 한식과 식문화 예절 (Korean Culinary Traditions) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 25-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (25.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (25.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (25.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u25-l2": {
    "id": "ko-u25-l2",
    "subject": "korean",
    "unit": 25,
    "lessonNumber": 2,
    "title": "전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) (Part 2)",
    "level": "C1",
    "objective": "Comprehensive mastery of 전통 한식과 식문화 예절 (Korean Culinary Traditions).",
    "presentation": {
      "explanation": "본 단원에서는 « 전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) » (제2절)의 핵심 언어 요소와 전통 한식과 식문화 예절 (Korean Culinary Traditions)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (25.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (25.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (25.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 전통 한식과 식문화 예절 (Korean Culinary Traditions) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (25.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (25.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (25.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (25.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (25.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (25.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 전통 한식과 식문화 예절 (Korean Culinary Traditions) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 25-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (25.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (25.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (25.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u25-l3": {
    "id": "ko-u25-l3",
    "subject": "korean",
    "unit": 25,
    "lessonNumber": 3,
    "title": "전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) (Part 3)",
    "level": "C1",
    "objective": "Comprehensive mastery of 전통 한식과 식문화 예절 (Korean Culinary Traditions).",
    "presentation": {
      "explanation": "본 단원에서는 « 전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) » (제3절)의 핵심 언어 요소와 전통 한식과 식문화 예절 (Korean Culinary Traditions)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (25.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (25.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (25.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 전통 한식과 식문화 예절 (Korean Culinary Traditions) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (25.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (25.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (25.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (25.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (25.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (25.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 전통 한식과 식문화 예절 (Korean Culinary Traditions) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 25-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (25.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (25.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (25.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u25-l4": {
    "id": "ko-u25-l4",
    "subject": "korean",
    "unit": 25,
    "lessonNumber": 4,
    "title": "전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) (Part 4)",
    "level": "C1",
    "objective": "Comprehensive mastery of 전통 한식과 식문화 예절 (Korean Culinary Traditions).",
    "presentation": {
      "explanation": "본 단원에서는 « 전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) » (제4절)의 핵심 언어 요소와 전통 한식과 식문화 예절 (Korean Culinary Traditions)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (25.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (25.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (25.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 전통 한식과 식문화 예절 (Korean Culinary Traditions) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (25.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (25.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (25.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (25.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (25.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (25.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 전통 한식과 식문화 예절 (Korean Culinary Traditions) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 25-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (25.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (25.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (25.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u25-l5": {
    "id": "ko-u25-l5",
    "subject": "korean",
    "unit": 25,
    "lessonNumber": 5,
    "title": "전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) (Part 5)",
    "level": "C1",
    "objective": "Comprehensive mastery of 전통 한식과 식문화 예절 (Korean Culinary Traditions).",
    "presentation": {
      "explanation": "본 단원에서는 « 전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) » (제5절)의 핵심 언어 요소와 전통 한식과 식문화 예절 (Korean Culinary Traditions)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (25.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (25.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (25.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 전통 한식과 식문화 예절 (Korean Culinary Traditions) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (25.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (25.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (25.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 전통 한식 문화와 식문화 예절 (Culinary Arts & Etiquette) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (25.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (25.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (25.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 전통 한식과 식문화 예절 (Korean Culinary Traditions) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 25-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (25.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (25.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (25.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u26-l1": {
    "id": "ko-u26-l1",
    "subject": "korean",
    "unit": 26,
    "lessonNumber": 1,
    "title": "의료 상담과 건강보험 체계 (Medical & Clinical Discourse) (Part 1)",
    "level": "C1",
    "objective": "Comprehensive mastery of 병원 진료와 건강 상담 (Clinical & Medical Consultations).",
    "presentation": {
      "explanation": "본 단원에서는 « 의료 상담과 건강보험 체계 (Medical & Clinical Discourse) » (제1절)의 핵심 언어 요소와 병원 진료와 건강 상담 (Clinical & Medical Consultations)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (26.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (26.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (26.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 병원 진료와 건강 상담 (Clinical & Medical Consultations) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (26.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (26.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (26.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 의료 상담과 건강보험 체계 (Medical & Clinical Discourse) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (26.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (26.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (26.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 병원 진료와 건강 상담 (Clinical & Medical Consultations) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 26-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (26.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (26.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (26.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u26-l2": {
    "id": "ko-u26-l2",
    "subject": "korean",
    "unit": 26,
    "lessonNumber": 2,
    "title": "의료 상담과 건강보험 체계 (Medical & Clinical Discourse) (Part 2)",
    "level": "C1",
    "objective": "Comprehensive mastery of 병원 진료와 건강 상담 (Clinical & Medical Consultations).",
    "presentation": {
      "explanation": "본 단원에서는 « 의료 상담과 건강보험 체계 (Medical & Clinical Discourse) » (제2절)의 핵심 언어 요소와 병원 진료와 건강 상담 (Clinical & Medical Consultations)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (26.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (26.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (26.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 병원 진료와 건강 상담 (Clinical & Medical Consultations) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (26.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (26.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (26.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 의료 상담과 건강보험 체계 (Medical & Clinical Discourse) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (26.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (26.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (26.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 병원 진료와 건강 상담 (Clinical & Medical Consultations) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 26-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (26.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (26.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (26.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u26-l3": {
    "id": "ko-u26-l3",
    "subject": "korean",
    "unit": 26,
    "lessonNumber": 3,
    "title": "의료 상담과 건강보험 체계 (Medical & Clinical Discourse) (Part 3)",
    "level": "C1",
    "objective": "Comprehensive mastery of 병원 진료와 건강 상담 (Clinical & Medical Consultations).",
    "presentation": {
      "explanation": "본 단원에서는 « 의료 상담과 건강보험 체계 (Medical & Clinical Discourse) » (제3절)의 핵심 언어 요소와 병원 진료와 건강 상담 (Clinical & Medical Consultations)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (26.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (26.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (26.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 병원 진료와 건강 상담 (Clinical & Medical Consultations) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (26.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (26.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (26.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 의료 상담과 건강보험 체계 (Medical & Clinical Discourse) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (26.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (26.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (26.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 병원 진료와 건강 상담 (Clinical & Medical Consultations) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 26-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (26.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (26.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (26.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u26-l4": {
    "id": "ko-u26-l4",
    "subject": "korean",
    "unit": 26,
    "lessonNumber": 4,
    "title": "의료 상담과 건강보험 체계 (Medical & Clinical Discourse) (Part 4)",
    "level": "C1",
    "objective": "Comprehensive mastery of 병원 진료와 건강 상담 (Clinical & Medical Consultations).",
    "presentation": {
      "explanation": "본 단원에서는 « 의료 상담과 건강보험 체계 (Medical & Clinical Discourse) » (제4절)의 핵심 언어 요소와 병원 진료와 건강 상담 (Clinical & Medical Consultations)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (26.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (26.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (26.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 병원 진료와 건강 상담 (Clinical & Medical Consultations) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (26.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (26.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (26.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 의료 상담과 건강보험 체계 (Medical & Clinical Discourse) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (26.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (26.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (26.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 병원 진료와 건강 상담 (Clinical & Medical Consultations) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 26-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (26.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (26.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (26.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u26-l5": {
    "id": "ko-u26-l5",
    "subject": "korean",
    "unit": 26,
    "lessonNumber": 5,
    "title": "의료 상담과 건강보험 체계 (Medical & Clinical Discourse) (Part 5)",
    "level": "C1",
    "objective": "Comprehensive mastery of 병원 진료와 건강 상담 (Clinical & Medical Consultations).",
    "presentation": {
      "explanation": "본 단원에서는 « 의료 상담과 건강보험 체계 (Medical & Clinical Discourse) » (제5절)의 핵심 언어 요소와 병원 진료와 건강 상담 (Clinical & Medical Consultations)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (26.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (26.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (26.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 병원 진료와 건강 상담 (Clinical & Medical Consultations) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (26.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (26.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (26.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 의료 상담과 건강보험 체계 (Medical & Clinical Discourse) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (26.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (26.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (26.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 병원 진료와 건강 상담 (Clinical & Medical Consultations) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 26-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (26.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (26.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (26.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u27-l1": {
    "id": "ko-u27-l1",
    "subject": "korean",
    "unit": 27,
    "lessonNumber": 1,
    "title": "금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) (Part 1)",
    "level": "C1",
    "objective": "Comprehensive mastery of 금융과 부동산 경제 (Banking, Finance & Real Estate).",
    "presentation": {
      "explanation": "본 단원에서는 « 금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) » (제1절)의 핵심 언어 요소와 금융과 부동산 경제 (Banking, Finance & Real Estate)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (27.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (27.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (27.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 금융과 부동산 경제 (Banking, Finance & Real Estate) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (27.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (27.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (27.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (27.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (27.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (27.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 금융과 부동산 경제 (Banking, Finance & Real Estate) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 27-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (27.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (27.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (27.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u27-l2": {
    "id": "ko-u27-l2",
    "subject": "korean",
    "unit": 27,
    "lessonNumber": 2,
    "title": "금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) (Part 2)",
    "level": "C1",
    "objective": "Comprehensive mastery of 금융과 부동산 경제 (Banking, Finance & Real Estate).",
    "presentation": {
      "explanation": "본 단원에서는 « 금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) » (제2절)의 핵심 언어 요소와 금융과 부동산 경제 (Banking, Finance & Real Estate)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (27.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (27.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (27.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 금융과 부동산 경제 (Banking, Finance & Real Estate) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (27.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (27.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (27.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (27.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (27.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (27.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 금융과 부동산 경제 (Banking, Finance & Real Estate) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 27-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (27.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (27.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (27.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u27-l3": {
    "id": "ko-u27-l3",
    "subject": "korean",
    "unit": 27,
    "lessonNumber": 3,
    "title": "금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) (Part 3)",
    "level": "C1",
    "objective": "Comprehensive mastery of 금융과 부동산 경제 (Banking, Finance & Real Estate).",
    "presentation": {
      "explanation": "본 단원에서는 « 금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) » (제3절)의 핵심 언어 요소와 금융과 부동산 경제 (Banking, Finance & Real Estate)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (27.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (27.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (27.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 금융과 부동산 경제 (Banking, Finance & Real Estate) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (27.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (27.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (27.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (27.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (27.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (27.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 금융과 부동산 경제 (Banking, Finance & Real Estate) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 27-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (27.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (27.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (27.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u27-l4": {
    "id": "ko-u27-l4",
    "subject": "korean",
    "unit": 27,
    "lessonNumber": 4,
    "title": "금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) (Part 4)",
    "level": "C1",
    "objective": "Comprehensive mastery of 금융과 부동산 경제 (Banking, Finance & Real Estate).",
    "presentation": {
      "explanation": "본 단원에서는 « 금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) » (제4절)의 핵심 언어 요소와 금융과 부동산 경제 (Banking, Finance & Real Estate)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (27.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (27.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (27.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 금융과 부동산 경제 (Banking, Finance & Real Estate) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (27.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (27.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (27.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (27.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (27.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (27.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 금융과 부동산 경제 (Banking, Finance & Real Estate) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 27-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (27.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (27.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (27.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u27-l5": {
    "id": "ko-u27-l5",
    "subject": "korean",
    "unit": 27,
    "lessonNumber": 5,
    "title": "금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) (Part 5)",
    "level": "C1",
    "objective": "Comprehensive mastery of 금융과 부동산 경제 (Banking, Finance & Real Estate).",
    "presentation": {
      "explanation": "본 단원에서는 « 금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) » (제5절)의 핵심 언어 요소와 금융과 부동산 경제 (Banking, Finance & Real Estate)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (27.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (27.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (27.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 금융과 부동산 경제 (Banking, Finance & Real Estate) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (27.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (27.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (27.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 금융 시장, 부동산 계약 및 경제 분석 (Finance & Real Estate) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (27.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (27.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (27.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 금융과 부동산 경제 (Banking, Finance & Real Estate) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 27-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (27.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (27.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (27.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u28-l1": {
    "id": "ko-u28-l1",
    "subject": "korean",
    "unit": 28,
    "lessonNumber": 1,
    "title": "고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) (Part 1)",
    "level": "C1",
    "objective": "Comprehensive mastery of 사자성어와 고사 (Sino-Korean Four-Character Idioms).",
    "presentation": {
      "explanation": "본 단원에서는 « 고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) » (제1절)의 핵심 언어 요소와 사자성어와 고사 (Sino-Korean Four-Character Idioms)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (28.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (28.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (28.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 사자성어와 고사 (Sino-Korean Four-Character Idioms) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (28.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (28.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (28.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (28.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (28.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (28.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 사자성어와 고사 (Sino-Korean Four-Character Idioms) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 28-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (28.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (28.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (28.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u28-l2": {
    "id": "ko-u28-l2",
    "subject": "korean",
    "unit": 28,
    "lessonNumber": 2,
    "title": "고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) (Part 2)",
    "level": "C1",
    "objective": "Comprehensive mastery of 사자성어와 고사 (Sino-Korean Four-Character Idioms).",
    "presentation": {
      "explanation": "본 단원에서는 « 고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) » (제2절)의 핵심 언어 요소와 사자성어와 고사 (Sino-Korean Four-Character Idioms)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (28.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (28.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (28.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 사자성어와 고사 (Sino-Korean Four-Character Idioms) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (28.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (28.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (28.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (28.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (28.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (28.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 사자성어와 고사 (Sino-Korean Four-Character Idioms) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 28-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (28.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (28.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (28.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u28-l3": {
    "id": "ko-u28-l3",
    "subject": "korean",
    "unit": 28,
    "lessonNumber": 3,
    "title": "고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) (Part 3)",
    "level": "C1",
    "objective": "Comprehensive mastery of 사자성어와 고사 (Sino-Korean Four-Character Idioms).",
    "presentation": {
      "explanation": "본 단원에서는 « 고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) » (제3절)의 핵심 언어 요소와 사자성어와 고사 (Sino-Korean Four-Character Idioms)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (28.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (28.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (28.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 사자성어와 고사 (Sino-Korean Four-Character Idioms) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (28.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (28.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (28.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (28.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (28.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (28.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 사자성어와 고사 (Sino-Korean Four-Character Idioms) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 28-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (28.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (28.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (28.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u28-l4": {
    "id": "ko-u28-l4",
    "subject": "korean",
    "unit": 28,
    "lessonNumber": 4,
    "title": "고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) (Part 4)",
    "level": "C1",
    "objective": "Comprehensive mastery of 사자성어와 고사 (Sino-Korean Four-Character Idioms).",
    "presentation": {
      "explanation": "본 단원에서는 « 고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) » (제4절)의 핵심 언어 요소와 사자성어와 고사 (Sino-Korean Four-Character Idioms)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (28.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (28.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (28.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 사자성어와 고사 (Sino-Korean Four-Character Idioms) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (28.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (28.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (28.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (28.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (28.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (28.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 사자성어와 고사 (Sino-Korean Four-Character Idioms) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 28-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (28.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (28.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (28.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u28-l5": {
    "id": "ko-u28-l5",
    "subject": "korean",
    "unit": 28,
    "lessonNumber": 5,
    "title": "고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) (Part 5)",
    "level": "C1",
    "objective": "Comprehensive mastery of 사자성어와 고사 (Sino-Korean Four-Character Idioms).",
    "presentation": {
      "explanation": "본 단원에서는 « 고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) » (제5절)의 핵심 언어 요소와 사자성어와 고사 (Sino-Korean Four-Character Idioms)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (28.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (28.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (28.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 사자성어와 고사 (Sino-Korean Four-Character Idioms) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (28.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (28.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (28.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 고사성어와 고급 사자성어 활용 (Sino-Korean Four-Character Idioms) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (28.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (28.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (28.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 사자성어와 고사 (Sino-Korean Four-Character Idioms) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 28-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (28.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (28.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (28.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u29-l1": {
    "id": "ko-u29-l1",
    "subject": "korean",
    "unit": 29,
    "lessonNumber": 1,
    "title": "학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) (Part 1)",
    "level": "C1",
    "objective": "Comprehensive mastery of 학술 논문과 학술 토론 (Academic Research & Dissertation).",
    "presentation": {
      "explanation": "본 단원에서는 « 학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) » (제1절)의 핵심 언어 요소와 학술 논문과 학술 토론 (Academic Research & Dissertation)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (29.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (29.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (29.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 학술 논문과 학술 토론 (Academic Research & Dissertation) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (29.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (29.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (29.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (29.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (29.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (29.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 학술 논문과 학술 토론 (Academic Research & Dissertation) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 29-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (29.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (29.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (29.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u29-l2": {
    "id": "ko-u29-l2",
    "subject": "korean",
    "unit": 29,
    "lessonNumber": 2,
    "title": "학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) (Part 2)",
    "level": "C1",
    "objective": "Comprehensive mastery of 학술 논문과 학술 토론 (Academic Research & Dissertation).",
    "presentation": {
      "explanation": "본 단원에서는 « 학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) » (제2절)의 핵심 언어 요소와 학술 논문과 학술 토론 (Academic Research & Dissertation)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (29.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (29.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (29.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 학술 논문과 학술 토론 (Academic Research & Dissertation) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (29.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (29.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (29.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (29.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (29.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (29.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 학술 논문과 학술 토론 (Academic Research & Dissertation) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 29-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (29.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (29.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (29.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u29-l3": {
    "id": "ko-u29-l3",
    "subject": "korean",
    "unit": 29,
    "lessonNumber": 3,
    "title": "학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) (Part 3)",
    "level": "C1",
    "objective": "Comprehensive mastery of 학술 논문과 학술 토론 (Academic Research & Dissertation).",
    "presentation": {
      "explanation": "본 단원에서는 « 학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) » (제3절)의 핵심 언어 요소와 학술 논문과 학술 토론 (Academic Research & Dissertation)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (29.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (29.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (29.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 학술 논문과 학술 토론 (Academic Research & Dissertation) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (29.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (29.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (29.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (29.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (29.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (29.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 학술 논문과 학술 토론 (Academic Research & Dissertation) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 29-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (29.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (29.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (29.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u29-l4": {
    "id": "ko-u29-l4",
    "subject": "korean",
    "unit": 29,
    "lessonNumber": 4,
    "title": "학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) (Part 4)",
    "level": "C1",
    "objective": "Comprehensive mastery of 학술 논문과 학술 토론 (Academic Research & Dissertation).",
    "presentation": {
      "explanation": "본 단원에서는 « 학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) » (제4절)의 핵심 언어 요소와 학술 논문과 학술 토론 (Academic Research & Dissertation)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (29.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (29.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (29.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 학술 논문과 학술 토론 (Academic Research & Dissertation) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (29.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (29.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (29.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (29.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (29.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (29.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 학술 논문과 학술 토론 (Academic Research & Dissertation) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 29-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (29.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (29.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (29.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u29-l5": {
    "id": "ko-u29-l5",
    "subject": "korean",
    "unit": 29,
    "lessonNumber": 5,
    "title": "학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) (Part 5)",
    "level": "C1",
    "objective": "Comprehensive mastery of 학술 논문과 학술 토론 (Academic Research & Dissertation).",
    "presentation": {
      "explanation": "본 단원에서는 « 학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) » (제5절)의 핵심 언어 요소와 학술 논문과 학술 토론 (Academic Research & Dissertation)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (29.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (29.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (29.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 학술 논문과 학술 토론 (Academic Research & Dissertation) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (29.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (29.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (29.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 학술 논문 작성과 학술 토론 (Academic Dissertation & Debate) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (29.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (29.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (29.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 학술 논문과 학술 토론 (Academic Research & Dissertation) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 29-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (29.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (29.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (29.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u30-l1": {
    "id": "ko-u30-l1",
    "subject": "korean",
    "unit": 30,
    "lessonNumber": 1,
    "title": "헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) (Part 1)",
    "level": "C1",
    "objective": "Comprehensive mastery of 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law).",
    "presentation": {
      "explanation": "본 단원에서는 « 헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) » (제1절)의 핵심 언어 요소와 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (30.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (30.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (30.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (30.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (30.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (30.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (30.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (30.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (30.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 30-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (30.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (30.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (30.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u30-l2": {
    "id": "ko-u30-l2",
    "subject": "korean",
    "unit": 30,
    "lessonNumber": 2,
    "title": "헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) (Part 2)",
    "level": "C1",
    "objective": "Comprehensive mastery of 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law).",
    "presentation": {
      "explanation": "본 단원에서는 « 헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) » (제2절)의 핵심 언어 요소와 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (30.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (30.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (30.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (30.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (30.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (30.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (30.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (30.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (30.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 30-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (30.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (30.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (30.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u30-l3": {
    "id": "ko-u30-l3",
    "subject": "korean",
    "unit": 30,
    "lessonNumber": 3,
    "title": "헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) (Part 3)",
    "level": "C1",
    "objective": "Comprehensive mastery of 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law).",
    "presentation": {
      "explanation": "본 단원에서는 « 헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) » (제3절)의 핵심 언어 요소와 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (30.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (30.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (30.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (30.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (30.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (30.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (30.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (30.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (30.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 30-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (30.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (30.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (30.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u30-l4": {
    "id": "ko-u30-l4",
    "subject": "korean",
    "unit": 30,
    "lessonNumber": 4,
    "title": "헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) (Part 4)",
    "level": "C1",
    "objective": "Comprehensive mastery of 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law).",
    "presentation": {
      "explanation": "본 단원에서는 « 헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) » (제4절)의 핵심 언어 요소와 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (30.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (30.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (30.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (30.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (30.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (30.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (30.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (30.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (30.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 30-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (30.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (30.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (30.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u30-l5": {
    "id": "ko-u30-l5",
    "subject": "korean",
    "unit": 30,
    "lessonNumber": 5,
    "title": "헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) (Part 5)",
    "level": "C1",
    "objective": "Comprehensive mastery of 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law).",
    "presentation": {
      "explanation": "본 단원에서는 « 헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) » (제5절)의 핵심 언어 요소와 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (30.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (30.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (30.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (30.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (30.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (30.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 헌법 재판, 사법 절차 및 법률 용어 (Constitutional Law & Courts) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (30.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (30.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (30.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 법률 용어와 사법 절차 (Legal Discourse & Constitutional Law) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 30-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (30.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (30.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (30.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C1 target-language standard."
        }
      ]
    }
  },
  "ko-u31-l1": {
    "id": "ko-u31-l1",
    "subject": "korean",
    "unit": 31,
    "lessonNumber": 1,
    "title": "현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) (Part 1)",
    "level": "C2",
    "objective": "Comprehensive mastery of 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates).",
    "presentation": {
      "explanation": "본 단원에서는 « 현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) » (제1절)의 핵심 언어 요소와 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (31.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (31.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (31.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (31.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (31.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (31.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (31.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (31.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (31.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 31-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (31.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (31.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (31.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u31-l2": {
    "id": "ko-u31-l2",
    "subject": "korean",
    "unit": 31,
    "lessonNumber": 2,
    "title": "현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) (Part 2)",
    "level": "C2",
    "objective": "Comprehensive mastery of 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates).",
    "presentation": {
      "explanation": "본 단원에서는 « 현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) » (제2절)의 핵심 언어 요소와 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (31.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (31.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (31.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (31.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (31.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (31.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (31.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (31.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (31.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 31-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (31.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (31.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (31.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u31-l3": {
    "id": "ko-u31-l3",
    "subject": "korean",
    "unit": 31,
    "lessonNumber": 3,
    "title": "현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) (Part 3)",
    "level": "C2",
    "objective": "Comprehensive mastery of 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates).",
    "presentation": {
      "explanation": "본 단원에서는 « 현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) » (제3절)의 핵심 언어 요소와 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (31.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (31.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (31.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (31.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (31.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (31.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (31.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (31.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (31.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 31-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (31.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (31.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (31.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u31-l4": {
    "id": "ko-u31-l4",
    "subject": "korean",
    "unit": 31,
    "lessonNumber": 4,
    "title": "현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) (Part 4)",
    "level": "C2",
    "objective": "Comprehensive mastery of 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates).",
    "presentation": {
      "explanation": "본 단원에서는 « 현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) » (제4절)의 핵심 언어 요소와 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (31.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (31.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (31.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (31.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (31.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (31.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (31.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (31.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (31.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 31-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (31.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (31.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (31.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u31-l5": {
    "id": "ko-u31-l5",
    "subject": "korean",
    "unit": 31,
    "lessonNumber": 5,
    "title": "현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) (Part 5)",
    "level": "C2",
    "objective": "Comprehensive mastery of 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates).",
    "presentation": {
      "explanation": "본 단원에서는 « 현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) » (제5절)의 핵심 언어 요소와 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (31.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (31.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (31.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (31.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (31.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (31.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 현대 사회 담론과 도시 발전 정책 (Sociopolitical Debates) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (31.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (31.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (31.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 현대 사회와 도시 정책 (Urban Planning & Sociopolitical Debates) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 31-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (31.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (31.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (31.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u32-l1": {
    "id": "ko-u32-l1",
    "subject": "korean",
    "unit": 32,
    "lessonNumber": 1,
    "title": "첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) (Part 1)",
    "level": "C2",
    "objective": "Comprehensive mastery of 과학 기술과 반도체 산업 (Science & High Technology).",
    "presentation": {
      "explanation": "본 단원에서는 « 첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) » (제1절)의 핵심 언어 요소와 과학 기술과 반도체 산업 (Science & High Technology)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (32.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (32.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (32.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 과학 기술과 반도체 산업 (Science & High Technology) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (32.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (32.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (32.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (32.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (32.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (32.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 과학 기술과 반도체 산업 (Science & High Technology) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 32-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (32.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (32.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (32.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u32-l2": {
    "id": "ko-u32-l2",
    "subject": "korean",
    "unit": 32,
    "lessonNumber": 2,
    "title": "첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) (Part 2)",
    "level": "C2",
    "objective": "Comprehensive mastery of 과학 기술과 반도체 산업 (Science & High Technology).",
    "presentation": {
      "explanation": "본 단원에서는 « 첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) » (제2절)의 핵심 언어 요소와 과학 기술과 반도체 산업 (Science & High Technology)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (32.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (32.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (32.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 과학 기술과 반도체 산업 (Science & High Technology) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (32.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (32.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (32.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (32.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (32.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (32.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 과학 기술과 반도체 산업 (Science & High Technology) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 32-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (32.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (32.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (32.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u32-l3": {
    "id": "ko-u32-l3",
    "subject": "korean",
    "unit": 32,
    "lessonNumber": 3,
    "title": "첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) (Part 3)",
    "level": "C2",
    "objective": "Comprehensive mastery of 과학 기술과 반도체 산업 (Science & High Technology).",
    "presentation": {
      "explanation": "본 단원에서는 « 첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) » (제3절)의 핵심 언어 요소와 과학 기술과 반도체 산업 (Science & High Technology)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (32.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (32.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (32.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 과학 기술과 반도체 산업 (Science & High Technology) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (32.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (32.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (32.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (32.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (32.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (32.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 과학 기술과 반도체 산업 (Science & High Technology) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 32-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (32.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (32.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (32.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u32-l4": {
    "id": "ko-u32-l4",
    "subject": "korean",
    "unit": 32,
    "lessonNumber": 4,
    "title": "첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) (Part 4)",
    "level": "C2",
    "objective": "Comprehensive mastery of 과학 기술과 반도체 산업 (Science & High Technology).",
    "presentation": {
      "explanation": "본 단원에서는 « 첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) » (제4절)의 핵심 언어 요소와 과학 기술과 반도체 산업 (Science & High Technology)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (32.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (32.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (32.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 과학 기술과 반도체 산업 (Science & High Technology) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (32.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (32.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (32.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (32.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (32.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (32.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 과학 기술과 반도체 산업 (Science & High Technology) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 32-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (32.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (32.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (32.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u32-l5": {
    "id": "ko-u32-l5",
    "subject": "korean",
    "unit": 32,
    "lessonNumber": 5,
    "title": "첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) (Part 5)",
    "level": "C2",
    "objective": "Comprehensive mastery of 과학 기술과 반도체 산업 (Science & High Technology).",
    "presentation": {
      "explanation": "본 단원에서는 « 첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) » (제5절)의 핵심 언어 요소와 과학 기술과 반도체 산업 (Science & High Technology)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (32.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (32.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (32.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 과학 기술과 반도체 산업 (Science & High Technology) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (32.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (32.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (32.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 첨단 과학 기술과 반도체 산업 (Science & Semiconductor Tech) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (32.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (32.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (32.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 과학 기술과 반도체 산업 (Science & High Technology) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 32-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (32.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (32.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (32.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u33-l1": {
    "id": "ko-u33-l1",
    "subject": "korean",
    "unit": 33,
    "lessonNumber": 1,
    "title": "동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) (Part 1)",
    "level": "C2",
    "objective": "Comprehensive mastery of 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties).",
    "presentation": {
      "explanation": "본 단원에서는 « 동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) » (제1절)의 핵심 언어 요소와 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (33.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (33.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (33.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (33.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (33.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (33.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (33.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (33.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (33.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 33-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (33.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (33.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (33.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u33-l2": {
    "id": "ko-u33-l2",
    "subject": "korean",
    "unit": 33,
    "lessonNumber": 2,
    "title": "동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) (Part 2)",
    "level": "C2",
    "objective": "Comprehensive mastery of 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties).",
    "presentation": {
      "explanation": "본 단원에서는 « 동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) » (제2절)의 핵심 언어 요소와 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (33.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (33.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (33.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (33.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (33.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (33.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (33.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (33.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (33.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 33-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (33.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (33.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (33.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u33-l3": {
    "id": "ko-u33-l3",
    "subject": "korean",
    "unit": 33,
    "lessonNumber": 3,
    "title": "동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) (Part 3)",
    "level": "C2",
    "objective": "Comprehensive mastery of 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties).",
    "presentation": {
      "explanation": "본 단원에서는 « 동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) » (제3절)의 핵심 언어 요소와 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (33.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (33.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (33.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (33.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (33.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (33.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (33.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (33.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (33.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 33-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (33.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (33.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (33.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u33-l4": {
    "id": "ko-u33-l4",
    "subject": "korean",
    "unit": 33,
    "lessonNumber": 4,
    "title": "동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) (Part 4)",
    "level": "C2",
    "objective": "Comprehensive mastery of 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties).",
    "presentation": {
      "explanation": "본 단원에서는 « 동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) » (제4절)의 핵심 언어 요소와 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (33.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (33.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (33.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (33.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (33.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (33.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (33.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (33.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (33.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 33-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (33.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (33.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (33.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u33-l5": {
    "id": "ko-u33-l5",
    "subject": "korean",
    "unit": 33,
    "lessonNumber": 5,
    "title": "동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) (Part 5)",
    "level": "C2",
    "objective": "Comprehensive mastery of 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties).",
    "presentation": {
      "explanation": "본 단원에서는 « 동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) » (제5절)의 핵심 언어 요소와 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (33.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (33.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (33.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (33.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (33.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (33.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 동아시아 다자 외교와 조약 협상 (Multilateral Diplomacy) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (33.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (33.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (33.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 다자 외교와 조약 체결 (Diplomacy & Multilateral Treaties) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 33-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (33.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (33.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (33.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u34-l1": {
    "id": "ko-u34-l1",
    "subject": "korean",
    "unit": 34,
    "lessonNumber": 1,
    "title": "국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) (Part 1)",
    "level": "C2",
    "objective": "Comprehensive mastery of 정상회담과 정책 담화 (C2 Capstone Executive Statecraft).",
    "presentation": {
      "explanation": "본 단원에서는 « 국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) » (제1절)의 핵심 언어 요소와 정상회담과 정책 담화 (C2 Capstone Executive Statecraft)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (34.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (34.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (34.1.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 정상회담과 정책 담화 (C2 Capstone Executive Statecraft) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (34.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (34.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (34.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (34.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (34.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (34.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 정상회담과 정책 담화 (C2 Capstone Executive Statecraft) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 34-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (34.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (34.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (34.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u34-l2": {
    "id": "ko-u34-l2",
    "subject": "korean",
    "unit": 34,
    "lessonNumber": 2,
    "title": "국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) (Part 2)",
    "level": "C2",
    "objective": "Comprehensive mastery of 정상회담과 정책 담화 (C2 Capstone Executive Statecraft).",
    "presentation": {
      "explanation": "본 단원에서는 « 국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) » (제2절)의 핵심 언어 요소와 정상회담과 정책 담화 (C2 Capstone Executive Statecraft)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (34.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (34.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (34.2.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 정상회담과 정책 담화 (C2 Capstone Executive Statecraft) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (34.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (34.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (34.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (34.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (34.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (34.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 정상회담과 정책 담화 (C2 Capstone Executive Statecraft) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 34-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (34.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (34.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (34.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u34-l3": {
    "id": "ko-u34-l3",
    "subject": "korean",
    "unit": 34,
    "lessonNumber": 3,
    "title": "국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) (Part 3)",
    "level": "C2",
    "objective": "Comprehensive mastery of 정상회담과 정책 담화 (C2 Capstone Executive Statecraft).",
    "presentation": {
      "explanation": "본 단원에서는 « 국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) » (제3절)의 핵심 언어 요소와 정상회담과 정책 담화 (C2 Capstone Executive Statecraft)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (34.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (34.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (34.3.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 정상회담과 정책 담화 (C2 Capstone Executive Statecraft) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (34.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (34.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (34.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (34.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (34.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (34.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 정상회담과 정책 담화 (C2 Capstone Executive Statecraft) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 34-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (34.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (34.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (34.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u34-l4": {
    "id": "ko-u34-l4",
    "subject": "korean",
    "unit": 34,
    "lessonNumber": 4,
    "title": "국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) (Part 4)",
    "level": "C2",
    "objective": "Comprehensive mastery of 정상회담과 정책 담화 (C2 Capstone Executive Statecraft).",
    "presentation": {
      "explanation": "본 단원에서는 « 국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) » (제4절)의 핵심 언어 요소와 정상회담과 정책 담화 (C2 Capstone Executive Statecraft)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (34.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (34.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (34.4.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 정상회담과 정책 담화 (C2 Capstone Executive Statecraft) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (34.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (34.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (34.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (34.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (34.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (34.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 정상회담과 정책 담화 (C2 Capstone Executive Statecraft) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 34-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (34.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (34.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (34.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  },
  "ko-u34-l5": {
    "id": "ko-u34-l5",
    "subject": "korean",
    "unit": 34,
    "lessonNumber": 5,
    "title": "국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) (Part 5)",
    "level": "C2",
    "objective": "Comprehensive mastery of 정상회담과 정책 담화 (C2 Capstone Executive Statecraft).",
    "presentation": {
      "explanation": "본 단원에서는 « 국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) » (제5절)의 핵심 언어 요소와 정상회담과 정책 담화 (C2 Capstone Executive Statecraft)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (34.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (34.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (34.5.3).",
          "reading": "Seoul jungsimga-eneun yuseo gipeun jeontong munhwayujeog-gwa hyeondaejeogin chogocheung geonmuldeul-i johwa-reul irumnida.",
          "translation": "Historic cultural heritages and modern skyscrapers harmonize in central Seoul."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "« 정상회담과 정책 담화 (C2 Capstone Executive Statecraft) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (34.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (34.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (34.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 국가 정상회담과 통치 담화 (C2 Capstone Executive Statecraft) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (34.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (34.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (34.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Validates structural accuracy and independent mastery."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "« 정상회담과 정책 담화 (C2 Capstone Executive Statecraft) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 34-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (34.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (34.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (34.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR C2 target-language standard."
        }
      ]
    }
  }
};
  var CURRICULUM = {
    subject: 'korean',
    units: UNITS,
    lessons: LESSONS
  };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['korean'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
