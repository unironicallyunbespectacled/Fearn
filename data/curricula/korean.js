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
    "title": "과거 시제 선어말어미 결합 규칙 (-았-/-었-/-였-)",
    "level": "A2",
    "objective": "어간 끝 모음의 음운적 성질(양성모음 vs 음성모음 vs 하다)에 따라 과거 시제 선어말어미 '-았-', '-었-', '-였-'을 정확히 선택 결합한다.",
    "presentation": {
      "explanation": "한국어의 과거 시제는 용언(동사/형용사) 어간과 종결어미 사이에 과거 시제 선어말어미 '-았/었/였-'을 결합하여 나타냅니다.\n\n1. 모음조화에 따른 3대 결합 공식:\n- 양성모음 어간 (끝 모음이 'ㅏ, ㅗ') + -았-:\n  - 가다 → 가 + 았어요 → 갔어요 / 갔습니다 (went)\n  - 보다 → 보 + 았어요 → 봤어요 / 봤습니다 (saw)\n  - 오다 → 오 + 았어요 → 왔어요 / 왔습니다 (came)\n  - 앉다 → 앉 + 았어요 → 앉았어요 / 앉았습니다 (sat)\n  - 살다 → 살 + 았어요 → 살았어요 / 살았습니다 (lived)\n- 음성모음 어간 (끝 모음이 'ㅓ, ㅜ, ㅡ, ㅣ') + -었-:\n  - 먹다 → 먹 + 었어요 → 먹었어요 / 먹었습니다 (ate)\n  - 읽다 → 읽 + 었어요 → 읽었어요 / 읽었습니다 (read)\n  - 배우다 → 배우 + 었어요 → 배웠어요 / 배웠습니다 (learned)\n  - 마시다 → 마시 + 었어요 → 마셨어요 / 마셨습니다 (drank)\n- '하다' 동사/형용사 + -였- (축약형: -했-):\n  - 공부하다 → 공부하였어요 → 공부했어요 / 공부했습니다 (studied)\n  - 운동하다 → 운동했어요 / 운동했습니다 (exercised)\n  - 일하다 → 일했어요 / 일했습니다 (worked)",
      "examples": [
        {
          "target": "어제 친구와 함께 극장에서 영화를 봤어요.",
          "reading": "Eoje chingu-wa hamkke geukjang-eseo yeonghwa-reul bwasseoyo.",
          "translation": "Yesterday, I watched a movie at the theatre with a friend."
        },
        {
          "target": "아침에 따뜻한 녹차를 마셨어요.",
          "reading": "Achim-e ttatteuthan nokcha-reul masyeosseoyo.",
          "translation": "In the morning, I drank warm green tea."
        },
        {
          "target": "주말에 도서관에서 한국어를 열심히 공부했습니다.",
          "reading": "Jumal-e doseogwan-eseo hangug-eo-reul yeolsimhi gongbuhaesseumnida.",
          "translation": "On the weekend, I studied Korean diligently in the library."
        },
        {
          "target": "손님들이 식당 의자에 편하게 앉았습니다.",
          "reading": "Sonnimdeul-i sikdang uija-e pyeonhage anjasseumnida.",
          "translation": "The guests sat down comfortably on the restaurant chairs."
        }
      ],
      "mnemonics": [
        "밝은 모음(ㅏ, ㅗ)은 '-았-', 어두운 모음(ㅓ, ㅜ, ㅡ, ㅣ)은 '-었-', '하다'는 언제나 '-했-'!"
      ],
      "culturalNotes": [
        "한국어의 과거 시제 '-았/었-'은 과거에 완료된 동작뿐 아니라 과거의 행위로 인한 현재의 상태가 지속됨을 나타내기도 합니다 (예: '의자에 앉았어요' = 앉는 동작을 완료하여 지금 앉아 있는 상태임)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '먹다(to eat - 음성모음 ㅓ)'의 올바른 해요체 과거형은 무엇입니까?",
          "options": [
            "먹었어요",
            "먹았어요",
            "먹했어요"
          ],
          "answerIndex": 0,
          "explanation": "'먹다'의 어간 모음 'ㅓ'는 음성모음이므로 '-었-'과 결합하여 '먹었어요'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'보다(to see - 양성모음 ㅗ)'의 올바른 격식체 하십시오체 과거형은 어느 것입니까?",
          "options": [
            "봤습니다",
            "보었습니다",
            "보했습니다"
          ],
          "answerIndex": 0,
          "explanation": "'보다'는 양성모음이므로 '-았-'과 축약 결합하여 '봤습니다[봣씀니다]'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'어제 공원에서 1시간 동안 열심히 _____ (I exercised diligently in the park yesterday).' 빈칸에 알맞은 과거형은?",
          "options": [
            "운동했어요",
            "운동았어요",
            "운동먹었어요"
          ],
          "answerIndex": 0,
          "explanation": "'운동하다'는 '하다' 동사이므로 과거형 '운동했어요'가 올바릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'영화를 봤어요'(I watched a movie)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "영화를 봤어요.",
            "영화를 봤어요"
          ],
          "explanation": "영화를(목적어) + 봤어요(보다의 과거형) = 영화를 봤어요."
        }
      ]
    }
  },
  "ko-u6-l2": {
    "id": "ko-u6-l2",
    "subject": "korean",
    "unit": 6,
    "lessonNumber": 2,
    "title": "과거 시제의 모음 축약과 'ㅡ' 탈락 규칙 (썼어요, 컸어요, 만났어요)",
    "level": "A2",
    "objective": "과거 시제 형성 시 일어나는 동일 모음 탈락(가+았→갔), 활음화 축약(보+았→봤, 마시+었→마셨), 'ㅡ' 탈락(쓰+었→썼, 크+었→컸)의 음운 현상을 완벽히 파악한다.",
    "presentation": {
      "explanation": "모음으로 끝나는 용언 어간에 과거 시제 어미 '-았/었-'이 결합할 때는 음운 축약(Contraction)과 탈락(Deletion)이 활발하게 일어납니다.\n\n1. 동일 모음 충돌 탈락 (아/어 탈락):\n- 어간 끝 모음과 어미의 첫 모음이 같으면 하나가 탈락합니다.\n  - 가다: 가 + 았어요 → 갔어요 (가았어요 X)\n  - 만나다: 만나 + 았어요 → 만났어요 (만나았어요 X)\n  - 서다: 서 + 었어요 → 섰어요 (서었어요 X)\n\n2. 모음 활음화 축약 (Gliding):\n- 오다: 오 + 았어요 → 왔어요 [와써요]\n- 마시다: 마시 + 었어요 → 마셨어요 [마셔써요]\n- 기다리다: 기다리 + 었어요 → 기다렸어요 [기다려써요]\n- 배우다: 배우 + 었어요 → 배웠어요 [배워써요]\n\n3. 'ㅡ' 탈락 불규칙 (ㅡ-Drop in Past Tense):\n- 어간 모음 'ㅡ'는 모음 어미 '-았/었-' 앞에서 반드시 탈락합니다.\n- 앞 음절에 다른 모음이 없으면 '-었-' 결합:\n  - 쓰다 (to write / use): 쓰 - ㅡ + 었어요 → 썼어요 [써써요]\n  - 크다 (to be big / grow): 크 - ㅡ + 었어요 → 컸어요 [커써요]\n  - 끄다 (to turn off): 끄 - ㅡ + 었어요 → 껐어요 [꺼써요]\n- 앞 음절의 모음이 'ㅏ, ㅗ'이면 '-았-' 결합:\n  - 바쁘다 (to be busy): 바ㅃ(앞음절 'ㅏ') + 았어요 → 바빴어요 [바빠써요]\n  - 아프다 (to hurt / be sick): 아ㅍ(앞음절 'ㅏ') + 았어요 → 아팠어요 [아파써요]",
      "examples": [
        {
          "target": "어젯밤에 부모님께 감사 편지를 썼어요.",
          "reading": "Eojetbam-e bumonim-kke gamsa pyeonji-reul sseosseoyo.",
          "translation": "Last night, I wrote a thank-you letter to my parents (쓰다 → 썼어요)."
        },
        {
          "target": "지난주에는 회사 일 때문에 정말 바빴어요.",
          "reading": "Jinanju-eneun hoesa il ttaemune jeongmal bappasseoyo.",
          "translation": "Last week, I was really busy because of company work (바쁘다 → 바빴어요)."
        },
        {
          "target": "역 앞에서 친구를 30분 동안 기다렸어요.",
          "reading": "Yeok ap-eseo chingu-reul samsipbun dongan gidaryeosseoyo.",
          "translation": "I waited for my friend in front of the station for 30 minutes (기다리다 → 기다렸어요)."
        },
        {
          "target": "방에 들어와서 방 불을 껐어요.",
          "reading": "Bang-e deureowaseo bang bul-eul kkeosseoyo.",
          "translation": "I came into the room and turned off the room light (끄다 → 껐어요)."
        }
      ],
      "mnemonics": [
        "모음 어미 앞의 'ㅡ'는 무조건 탈락! 쓰다 → 썼어요, 끄다 → 껐어요, 바쁘다 → 바빴어요!"
      ],
      "culturalNotes": [
        "한국인들은 안부를 물을 때 '요즘 많이 바빴지요?'처럼 과거형 형용사를 사용하여 상대방의 지난 노고를 따뜻하게 위로하고 공감하는 어법을 자주 구사합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '쓰다(to write)'의 올바른 과거형 서술어는 무엇입니까?",
          "options": [
            "썼어요",
            "쓰었어요",
            "쓰았어요"
          ],
          "answerIndex": 0,
          "explanation": "'쓰다'의 모음 'ㅡ'가 탈락하고 '-었-'과 결합하여 '썼어요[써써요]'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "형용사 '바쁘다(to be busy)'의 올바른 과거형은 어느 것입니까?",
          "options": [
            "바빴어요",
            "바뻤어요",
            "바쁘었어요"
          ],
          "answerIndex": 0,
          "explanation": "'바쁘다'의 'ㅡ'가 탈락한 후 앞 음절 '바'의 양성모음 'ㅏ'에 호응하여 '-았-'이 붙어 '바빴어요'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'약속 장소에서 친구를 1시간 동안 _____ (I waited for my friend for an hour).' 빈칸에 알맞은 형태는?",
          "options": [
            "기다렸어요",
            "기다리았어요",
            "기다리했어요"
          ],
          "answerIndex": 0,
          "explanation": "'기다리다'의 어간 끝 'ㅣ'와 '-었-'이 축약되어 '기다렸어요'가 됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'편지를 썼어요'(I wrote a letter)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "편지를 썼어요.",
            "편지를 썼어요"
          ],
          "explanation": "편지를(목적어) + 썼어요(쓰다의 ㅡ탈락 과거형) = 편지를 썼어요."
        }
      ]
    }
  },
  "ko-u6-l3": {
    "id": "ko-u6-l3",
    "subject": "korean",
    "unit": 6,
    "lessonNumber": 3,
    "title": "과거 시간 부사어의 통사적 호응과 시제 일치 (어제, 지난주, 작년, 아까)",
    "level": "A2",
    "objective": "'어제', '지난주', '작년', '아까', '그때' 등 과거를 지시하는 필수 시간 부사어와 과거 시제 서술어의 엄격한 통사적 호응 규칙을 체득한다.",
    "presentation": {
      "explanation": "한국어 문장에서 시간 부사어(Time Adverbials)는 문장 전체의 시제(Tense)를 결정하는 중요한 통사적 길잡이 역할을 합니다.\n\n1. 필수 과거 시간 부사어 목록:\n- 어제 (Yesterday): 어제 저녁에 불고기를 먹었어요.\n- 그저께 / 엊그제 (The day before yesterday / a couple days ago): 그저께 한국에 도착했어요.\n- 아까 (A little while ago / earlier today): 아까 커피를 마셨어요.\n- 지난주 (Last week): 지난주에 한국어 시험을 봤어요.\n- 지난달 (Last month): 지난달에 새 집으로 이사했어요.\n- 작년 (Last year - 발음: [장년]): 작년에 대학교를 졸업했습니다.\n- 그때 (At that time / back then): 그때는 한국어를 전혀 몰랐어요.\n\n2. 시제 일치(Tense Concord) 규칙:\n- 문장에 명시적인 과거 시간 부사가 포함되면 서술어는 반드시 과거 시제 선어말어미(-았/었-)를 취해야 합니다.\n  - (올바른 문장) 어제 친구를 만났어요. (O)\n  - (비문법적 오류) *어제 친구를 만나요. (X - 시간 부사와 현재 시제 충돌)",
      "examples": [
        {
          "target": "어제 오후에 시내 중심가에서 친구를 만났어요.",
          "reading": "Eoje ohu-e sinae jungsimga-eseo chingu-reul mannasseoyo.",
          "translation": "Yesterday afternoon, I met a friend in downtown."
        },
        {
          "target": "아까 점심시간에 맛있는 비빔밥을 먹었어요.",
          "reading": "Akka jeomsimsigan-e masinneun bibimbap-eul meogeosseoyo.",
          "translation": "A little while ago at lunchtime, I ate delicious bibimbap."
        },
        {
          "target": "작년에 한국 문화에 대해 처음 배웠습니다.",
          "reading": "Jangnyeon-e hanguk munhwa-e daehae cheoeum baewosseumnida.",
          "translation": "Last year, I learned about Korean culture for the first time."
        },
        {
          "target": "지난주 주말에는 집에서 푹 쉬었어요.",
          "reading": "Jinanju jumal-eneun jib-eseo puk swieosseoyo.",
          "translation": "Last weekend, I rested deeply at home."
        }
      ],
      "mnemonics": [
        "'어제, 지난주, 작년, 아까'가 보이면 서술어는 무조건 '-았/었어요'로 시제 일치!"
      ],
      "culturalNotes": [
        "'작년(去年)'의 한자어 발음은 비음화 현상에 의해 [장년]으로 소리 납니다. [작년]으로 발음하지 않도록 유의해야 합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'어제(yesterday)'라는 시간 부사와 통사적으로 호응하는 올바른 서술어는 무엇입니까?",
          "options": [
            "도서관에 갔어요",
            "도서관에 가요",
            "도서관에 갈 거예요"
          ],
          "answerIndex": 0,
          "explanation": "'어제'는 명백한 과거 시점이므로 과거형 서술어인 '갔어요'와 호응해야 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'아까(earlier today)'와 시제 일치를 이루는 올바른 문장은 어느 것입니까?",
          "options": [
            "아까 커피를 마셨어요.",
            "아까 커피를 마셔요.",
            "아까 커피를 마실래요."
          ],
          "answerIndex": 0,
          "explanation": "'아까'는 과거 시간을 가리키므로 과거형 '마셨어요'가 올바릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 시간 부사와 서술어 시제 일치가 문법적으로 완벽한 문장은 무엇입니까?",
          "options": [
            "지난주에 한국어 시험을 봤어요.",
            "어제 친구와 영화를 봐요.",
            "작년에 서울에 가요."
          ],
          "answerIndex": 0,
          "explanation": "'지난주에 ... 시험을 봤어요'는 과거 시간 부사와 과거 시제 서술어가 완벽히 일치합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'어제 친구를 만났어요'(Yesterday I met a friend)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "어제 친구를 만났어요.",
            "어제 친구를 만났어요"
          ],
          "explanation": "어제(과거 부사) + 친구를(목적어) + 만났어요(만나다의 과거형) = 어제 친구를 만났어요."
        }
      ]
    }
  },
  "ko-u6-l4": {
    "id": "ko-u6-l4",
    "subject": "korean",
    "unit": 6,
    "lessonNumber": 4,
    "title": "ㄷ 불규칙 및 ㅂ 불규칙 용언의 과거 시제 (들었어요, 도왔어요, 추웠어요)",
    "level": "A2",
    "objective": "어간 끝 받침 'ㄷ'이 모음 어미 앞에서 'ㄹ'로 바뀌는 ㄷ 불규칙(듣다→들었어요)과 'ㅂ'이 '오/우'로 바뀌는 ㅂ 불규칙(돕다→도왔어요, 춥다→추웠어요)의 과거형을 완벽히 마스터한다.",
    "presentation": {
      "explanation": "한국어의 대표적 불규칙 활용인 'ㄷ 불규칙'과 'ㅂ 불규칙'은 모음으로 시작하는 과거 시제 어미 '-았/었-'과 만날 때 독특한 음운 변화를 일으킵니다.\n\n1. ㄷ 불규칙 과거형 (ㄷ → ㄹ 교체):\n- 어간 끝 받침 'ㄷ'이 모음 어미 앞에서 'ㄹ'로 교체됩니다.\n  - 듣다 (to listen): 듣 + 었어요 → 들었어요 [드러써요] / 들었습니다\n  - 걷다 (to walk): 걷 + 었어요 → 걸었어요 [거러써요] / 걸었습니다\n  - 묻다 (to ask): 묻 + 었어요 → 물었어요 [무러써요] / 물었습니다\n- 규칙 ㄷ 용언 주의 (변화 없음): 닫다 → 닫았어요, 받다 → 받았어요, 믿다 → 믿었어요.\n\n2. ㅂ 불규칙 과거형 (ㅂ → 오/우 교체):\n- 단음절 양성 어간 '돕다', '곱다': 받침 'ㅂ'이 '오'로 바뀌어 '-았-'과 축약 → 도왔어요 [도와써요], 고왔어요 [고와써요].\n- 대부분의 ㅂ 형용사/동사: 받침 'ㅂ'이 '우'로 바뀌어 '-었-'과 축약 → '-웠어요':\n  - 춥다 (cold) → 추 + 우 + 었어요 → 추웠어요 [추워써요]\n  - 덥다 (hot) → 더 + 우 + 었어요 → 더웠어요 [더워써요]\n  - 어렵다 (difficult) → 어려웠어요 [어려워써요]\n  - 맵다 (spicy) → 매웠어요 [매워써요]\n  - 맛있다/맛없다 (규칙): 받침 'ㅆ' 그대로 유지 → 맛있었어요 [마시써써요].",
      "examples": [
        {
          "target": "어제 한국 전통 음악을 많이 들었어요.",
          "reading": "Eoje hanguk jeontong eumak-eul mani deureosseoyo.",
          "translation": "Yesterday, I listened to a lot of Korean traditional music (듣다 → 들었어요)."
        },
        {
          "target": "어제는 날씨가 정말 바람이 불고 추웠어요.",
          "reading": "Eoje-neun nalssi-ga jeongmal baram-i bulgo chuwosseoyo.",
          "translation": "Yesterday, the weather was really windy and cold (춥다 → 추웠어요)."
        },
        {
          "target": "어려운 이웃을 성심껏 도왔습니다.",
          "reading": "Eoryeoun iut-eul seongsimkkeot dowasseumnida.",
          "translation": "I helped neighbors in need with all my heart (돕다 → 도왔습니다)."
        },
        {
          "target": "지난 학기 한국어 시험이 조금 어려웠어요.",
          "reading": "Jinan hakgi hangug-eo siheom-i jogeum eoryeowosseoyo.",
          "translation": "Last semester's Korean exam was a little difficult (어렵다 → 어려웠어요)."
        }
      ],
      "mnemonics": [
        "듣다는 '들었어요', 돕다는 '도왔어요', 춥다는 '추웠어요'! 모음 앞에서는 ㄷ이 ㄹ로, ㅂ이 오/우로 변신!"
      ],
      "culturalNotes": [
        "'맛있다'는 글자 끝에 받침 'ㅆ'이 있으므로 ㅂ 불규칙이 아닌 규칙 활용을 하여 과거형이 '맛있었어요'가 됨을 꼭 기억하세요."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '듣다(to listen)'의 올바른 과거형은 무엇입니까?",
          "options": [
            "들었어요",
            "듣었어요",
            "듣았어요"
          ],
          "answerIndex": 0,
          "explanation": "'듣다'의 받침 'ㄷ'은 모음 어미 앞에서 'ㄹ'로 바뀌므로 '들었어요[드러써요]'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "형용사 '춥다(to be cold)'의 올바른 과거형은 어느 것입니까?",
          "options": [
            "추웠어요",
            "춥었어요",
            "추왔어요"
          ],
          "answerIndex": 0,
          "explanation": "'춥다'의 'ㅂ'은 '우'로 바뀌어 '-었-'과 축약되므로 '추웠어요[추워써요]'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'A: 어제 시험이 어땠어요? B: 문제가 아주 _____ (The questions were very difficult).' 빈칸에 알맞은 과거형은?",
          "options": [
            "어려웠어요",
            "어렵었어요",
            "어려왔어요"
          ],
          "answerIndex": 0,
          "explanation": "'어렵다'는 ㅂ 불규칙 형용사이므로 과거형 '어려웠어요'가 올바릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'음악을 들었어요'(I listened to music)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "음악을 들었어요.",
            "음악을 들었어요"
          ],
          "explanation": "음악을(목적어) + 들었어요(듣다의 ㄷ불규칙 과거형) = 음악을 들었어요."
        }
      ]
    }
  },
  "ko-u6-l5": {
    "id": "ko-u6-l5",
    "subject": "korean",
    "unit": 6,
    "lessonNumber": 5,
    "title": "하루 일과의 시간 순차적 과거 서술과 담화 연결 (-고, 그리고)",
    "level": "A2",
    "objective": "연결 어미 '-고'와 접속 부사 '그리고', '그 다음에'를 활용하여 하루 동안 일어난 여러 사건들을 시간 순서대로 일관되게 서술하는 담화 능력을 구축한다.",
    "presentation": {
      "explanation": "하루 동안 일어난 여러 일과를 시간의 흐름에 따라 자연스럽게 엮어 말할 때는 나열 연결 어미 '-고'와 접속 부사 '그리고'를 전략적으로 사용합니다.\n\n1. 연결 어미 '-고'의 시제 생략 규칙:\n- 두 개 이상의 동작을 시간 순서대로 연결할 때 선행절(앞 절) 서술어에는 과거 시제를 쓰지 않고 기본 어간에 '-고'만 붙이며, 과거 시제(-았/었-)는 문장의 맨 마지막 종결 서술어에만 표시합니다.\n  - (자연스러운 표현) 아침에 밥을 먹고 학교에 갔어요. (O)\n  - (어색한 중복 표현) *아침에 밥을 먹었고 학교에 갔어요. (X)\n\n2. 하루 일과 과거 서술 담화 모델:\n- \"어제 아침 7시에 일어났어요. (I woke up at 7 AM yesterday.)\"\n- \"물 한 잔을 마시고 집 근처 공원에서 조깅을 했어요. (I drank a glass of water and jogged at the park near my house.)\"\n- \"오전에는 도서관에서 한국어를 열심히 공부했어요. (In the morning, I studied Korean hard at the library.)\"\n- \"점심에는 친구를 만나서 비빔밥을 맛있게 먹었어요. (For lunch, I met a friend and ate delicious bibimbap.)\"\n- \"그리고 저녁에는 집에서 음악을 들으며 편하게 쉬었습니다. (And in the evening, I rested comfortably at home listening to music.)\"",
      "examples": [
        {
          "target": "어제 아침에 일찍 일어나서 운동을 하고 샤워를 했어요.",
          "reading": "Eoje achim-e iljjik ireonaseo undong-eul hago syawo-reul haesseoyo.",
          "translation": "Yesterday morning, I woke up early, exercised, and took a shower."
        },
        {
          "target": "도서관에서 책을 읽고 친구와 함께 점심을 먹었어요.",
          "reading": "Doseogwan-eseo chaek-eul ikgo chingu-wa hamkke jeomsim-eul meogeosseoyo.",
          "translation": "I read a book at the library and had lunch with a friend."
        },
        {
          "target": "저녁에 퇴근하고 집에서 맛있는 저녁 식사를 만들었습니다.",
          "reading": "Jeonyeog-e toegeunhago jib-eseo masinneun jeonyeok siksa-reul mandeureosseumnida.",
          "translation": "In the evening, I finished work and made a delicious dinner at home."
        },
        {
          "target": "어제는 정말 즐겁고 보람찬 하루였어요.",
          "reading": "Eoje-neun jeongmal jeulgeopgo boramchan haruyeosseoyo.",
          "translation": "Yesterday was truly a pleasant and fruitful day."
        }
      ],
      "mnemonics": [
        "동작을 순서대로 이을 때는 앞은 '-고', 과거 시제(-았/었-)는 맨 끝에 한 번만!"
      ],
      "culturalNotes": [
        "한국인들은 일기나 SNS에 하루 일과를 적을 때 '오늘도 알차고 보람찬 하루를 보냈습니다'라는 표현으로 하루를 긍정적으로 마무리하는 문화적 습관이 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'아침을 먹다'와 '학교에 가다'를 연결 어미 '-고'로 자연스럽게 이은 과거형 문장은 무엇입니까?",
          "options": [
            "아침을 먹고 학교에 갔어요.",
            "아침을 먹었고 학교에 갔어요.",
            "아침을 먹고 학교에 가요."
          ],
          "answerIndex": 0,
          "explanation": "앞 절은 기본 어간에 '-고'만 붙이고 과거 시제는 마지막 서술어에 '갔어요'로 한 번만 표기하는 것이 가장 자연스럽습니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'책을 읽다'와 '숙제를 하다'를 시간 순서대로 표현한 올바른 과거 서술 문장은 어느 것입니까?",
          "options": [
            "책을 읽고 숙제를 했어요.",
            "책을 읽었고 숙제를 했어요.",
            "책을 읽고 숙제를 해요."
          ],
          "answerIndex": 0,
          "explanation": "'읽고(비시제 연결) + 했어요(종결 과거 시제)'의 구조가 표준적입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 하루 일과를 시간 순서대로 서술한 문법적으로 가장 자연스러운 문장은 무엇입니까?",
          "options": [
            "친구를 만나고 같이 영화를 봤어요.",
            "친구를 만났고 같이 영화를 봤어요.",
            "친구를 만나고 같이 영화를 봐요."
          ],
          "answerIndex": 0,
          "explanation": "'만나고 ... 봤어요'가 연결 어미 시제 생략 규칙에 부합하는 가장 자연스러운 한국어 문장입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'운동을 하고 샤워를 했어요'(I exercised and took a shower)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "운동을 하고 샤워를 했어요.",
            "운동을 하고 샤워를 했어요"
          ],
          "explanation": "운동을 하고(동작 연결) + 샤워를 했어요(과거 종결) = 운동을 하고 샤워를 했어요."
        }
      ]
    }
  },
  "ko-u7-l1": {
    "id": "ko-u7-l1",
    "subject": "korean",
    "unit": 7,
    "lessonNumber": 1,
    "title": "미래 시제와 예정 어미 (-(으)ㄹ 거예요)",
    "level": "A2",
    "objective": "받침 유무에 따른 미래 시제 예정 어미 '-(으)ㄹ 거예요'의 결합 규칙(모음 어간 + -ㄹ 거예요, 자음 어간 + -을 거예요, ㄹ 받침 + 거예요)을 체득하고 정확한 된소리 발음을 구사한다.",
    "presentation": {
      "explanation": "한국어에서 미래의 계획, 예정, 또는 일어날 일에 대한 추측을 나타내는 가장 보편적인 종결어미는 '-(으)ㄹ 거예요'입니다.\n\n1. 형태 결합 규칙:\n- 모음 종결 어간 (받침 없음) + -ㄹ 거예요:\n  - 가다 → 갈 거예요 [갈꺼예요] (will go)\n  - 보다 → 볼 거예요 [볼꺼예요] (will see)\n  - 하다 → 할 거예요 [할꺼예요] (will do)\n  - 마시다 → 마실 거예요 [마실꺼예요] (will drink)\n- 자음 종결 어간 (받침 있음) + -을 거예요:\n  - 먹다 → 먹을 거예요 [머글꺼예요] (will eat)\n  - 읽다 → 읽을 거예요 [일글꺼예요] (will read)\n  - 입다 → 입을 거예요 [이블꺼예요] (will wear)\n  - 닫다 → 닫을 거예요 [다들꺼예요] (will close)\n- 'ㄹ' 받침 종결 어간 + 거예요 (ㄹ 받침 유지):\n  - 살다 → 살 거예요 [살꺼예요] (will live)\n  - 만들다 → 만들 거예요 [만들꺼예요] (will make)\n  - 팔다 → 팔 거예요 [팔꺼예요] (will sell)\n\n2. 된소리 발음 법칙:\n관형사형 어미 '-(으)ㄹ' 뒤에 결합하는 '거예요'는 실제 구어 발음에서 된소리 [꺼예요]로 소리 납니다.",
      "examples": [
        {
          "target": "내일 오후에 친구와 함께 시내 대형 서점에 갈 거예요.",
          "reading": "Naeil ohu-e chingu-wa hamkke sinae daehyeong seojeom-e gal geoyeyo.",
          "translation": "Tomorrow afternoon, I will go to a large bookstore downtown with a friend."
        },
        {
          "target": "오늘 저녁에는 한국 식당에서 맛있는 불고기를 먹을 거예요.",
          "reading": "Oneul jeonyeog-eneun hanguk sikdang-eseo masinneun bulgogi-reul meog-eul geoyeyo.",
          "translation": "Tonight, I will eat delicious bulgogi at a Korean restaurant."
        },
        {
          "target": "주말에 부모님을 위해 특별한 한국 요리를 만들 거예요.",
          "reading": "Jumal-e bumonim-eul wihae teukbyeolhan hanguk yori-reul mandeul geoyeyo.",
          "translation": "On the weekend, I will make a special Korean dish for my parents."
        },
        {
          "target": "다음 학기에는 한국어 고급 과정을 신청할 거예요.",
          "reading": "Daeum hakgi-eneun hangug-eo gogeup gwajeong-eul sincheonghal geoyeyo.",
          "translation": "Next semester, I will apply for the advanced Korean course."
        }
      ],
      "mnemonics": [
        "받침 없으면 아래에 'ㄹ 거예요'(갈 거예요), 받침 있으면 '을 거예요'(먹을 거예요)! 발음은 짱짱하게 [꺼예요]!"
      ],
      "culturalNotes": [
        "'-(으)ㄹ 거예요'는 평서문에서는 미래의 계획이나 예정(I will)을 나타내고, 말끝을 올리면 상대방의 예정(Will you...?)을 묻는 질문이 됩니다 (예: '내일 뭐 할 거예요 ↗?')."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '가다(to go - 모음 어간)'의 올바른 미래 예정형은 무엇입니까?",
          "options": [
            "갈 거예요",
            "가을 거예요",
            "가ㄹ 거예요"
          ],
          "answerIndex": 0,
          "explanation": "'가다'는 받침이 없는 모음 종결 어간이므로 '-ㄹ 거예요'가 결합하여 '갈 거예요[갈꺼예요]'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "동사 '먹다(to eat - 자음 어간)'의 올바른 미래 예정형은 어느 것입니까?",
          "options": [
            "먹을 거예요",
            "먹ㄹ 거예요",
            "먹예요"
          ],
          "answerIndex": 0,
          "explanation": "'먹다'는 받침이 있는 자음 어간이므로 '-을 거예요'와 결합하여 '먹을 거예요[머글꺼예요]'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'주말에 맛있는 저녁 요리를 _____ (I will make delicious dinner).' 빈칸에 알맞은 '만들다'의 미래형은?",
          "options": [
            "만들 거예요",
            "만들을 거예요",
            "만들ㄹ 거예요"
          ],
          "answerIndex": 0,
          "explanation": "'만들다'는 어간 끝이 'ㄹ' 받침이므로 그대로 '거예요'가 결합하여 '만들 거예요[만들꺼예요]'가 됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'내일 영화를 볼 거예요'(I will watch a movie tomorrow)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "내일 영화를 볼 거예요.",
            "내일 영화를 볼 거예요"
          ],
          "explanation": "내일(시간) + 영화를(목적어) + 볼 거예요(보다의 미래형) = 내일 영화를 볼 거예요."
        }
      ]
    }
  },
  "ko-u7-l2": {
    "id": "ko-u7-l2",
    "subject": "korean",
    "unit": 7,
    "lessonNumber": 2,
    "title": "화자의 확고한 의지와 격식체 미래 선언 (-겠습니다)",
    "level": "A2",
    "objective": "공식적인 발표, 의식, 약속 및 비즈니스 상황에서 주어(화자)의 단호하고 예의 바른 의지를 나타내는 선어말어미 '-겠-'의 용법을 체득한다.",
    "presentation": {
      "explanation": "선어말어미 '-겠-'은 화자(1인칭)의 강력한 결의, 의지, 공손한 선언을 나타내며 주로 하십시오체와 결합하여 '-겠습니다'의 형태로 널리 쓰입니다.\n\n1. 화자의 단호한 의지(Volition) 표명:\n- 공식 석상, 직장, 면접, 연설에서 자신의 의지를 확고히 밝힐 때 사용합니다.\n  - 하다 → 하겠습니다 (I will do it)\n  - 가다 → 가겠습니다 (I will go)\n  - 배우다 → 열심히 배우겠습니다 (I will learn diligently)\n  - 지키다 → 약속을 반드시 지키겠습니다 (I will surely keep the promise)\n\n2. 한국의 필수 관용 인사말:\n- 식사 시작 전 인사: \"잘 먹겠습니다!\" (I will eat well / Thank you for the meal!)\n- 식사 완료 후 인사: \"잘 먹었습니다!\" (과거형: I ate well!)\n- 첫 만남 인사: \"처음 뵙겠습니다.\" (Pleased to meet you for the first time.)\n- 행사 시작 안내: \"지금부터 개회식을 시작하겠습니다.\" (We will now begin the opening ceremony.)",
      "examples": [
        {
          "target": "식사 맛있게 잘 먹겠습니다!",
          "reading": "Siksa masitge jal meokgetseumnida!",
          "translation": "I will eat this meal deliciously and well (Standard table etiquette before eating)."
        },
        {
          "target": "이번 프로젝트를 최선을 다해 성공시키겠습니다.",
          "reading": "Ibeon peurojekteu-reul choeseon-eul dahae seonggongsikigetseumnida.",
          "translation": "I will do my absolute best to make this project successful."
        },
        {
          "target": "안녕하십니까? 처음 뵙겠습니다.",
          "reading": "Annyeonghasimnikka? Cheoeum boepgetseumnida.",
          "translation": "Hello. It is an honor to meet you for the first time."
        },
        {
          "target": "지금부터 2026년 정기 학술대회를 시작하겠습니다.",
          "reading": "Jigeumbuteo icheon-isibyungnyeon jeonggi haksuldaehoe-reul sijakhagetseumnida.",
          "translation": "From now, we will begin the 2026 Regular Academic Conference."
        }
      ],
      "mnemonics": [
        "밥 먹기 전엔 '잘 먹겠습니다', 다짐할 땐 '열심히 하겠습니다'! 나의 강력한 의지는 '-겠-'!"
      ],
      "culturalNotes": [
        "한국에서는 가족 간이든 직장 동료 간이든 식사를 시작할 때 밥을 차려준 사람이나 동석자에게 '잘 먹겠습니다'라고 외치는 것이 핵심 식사 예절입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "한국에서 식사를 시작하기 직전에 동석자나 식사를 준비해 준 사람에게 건네는 가장 올바른 인사말은 무엇입니까?",
          "options": [
            "잘 먹겠습니다.",
            "잘 먹었습니다.",
            "잘 먹을 거예요."
          ],
          "answerIndex": 0,
          "explanation": "식사 전에는 의지와 감사를 담아 '잘 먹겠습니다'라고 인사합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "공식 회의를 시작할 때 사회자가 사용하는 가장 격식 있고 정중한 선언 표현은 어느 것입니까?",
          "options": [
            "지금부터 회의를 시작하겠습니다.",
            "지금부터 회의를 시작할게.",
            "지금부터 회의를 시작했어요."
          ],
          "answerIndex": 0,
          "explanation": "공식 행사나 회의의 개회 선언은 '시작하겠습니다'가 표준입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'회사에서 맡은 일에 최선을 다해 _____ (I will work diligently).' 빈칸에 알맞은 의지 표명 서술어는?",
          "options": [
            "일하겠습니다",
            "일하었습니다",
            "일하먹겠습니다"
          ],
          "answerIndex": 0,
          "explanation": "'일하다'에 확고한 의지를 나타내는 선어말어미 '-겠-'이 결합한 '일하겠습니다'가 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'잘 먹겠습니다'(Thank you for the meal / I will eat well)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "잘 먹겠습니다.",
            "잘 먹겠습니다"
          ],
          "explanation": "잘(부사) + 먹겠습니다(먹다 + 겠 + 습니다) = 잘 먹겠습니다."
        }
      ]
    }
  },
  "ko-u7-l3": {
    "id": "ko-u7-l3",
    "subject": "korean",
    "unit": 7,
    "lessonNumber": 3,
    "title": "지각적 단서에 기반한 직관적 추측 (-겠어요: 맛있겠어요, 힘들겠어요)",
    "level": "A2",
    "objective": "눈앞의 상황이나 시각/청각적 단서를 접하고 즉각적으로 판단하고 공감하는 직관적 추측 선어말어미 '-겠어요'의 용법을 체득한다.",
    "presentation": {
      "explanation": "선어말어미 '-겠-'이 2·3인칭 주어 또는 형용사와 결합하면 화자가 직접 보고 들은 상황을 바탕으로 내리는 '직관적 추측(Intuitive Conjecture)' 및 '감정적 공감(Empathy)'을 나타냅니다.\n\n1. 직관적 추측과 공감 표현의 주요 용례:\n- 먹음직스러운 음식을 보았을 때:\n  - \"와, 이 불고기 정말 맛있겠어요!\" (Wow, this bulgogi looks so delicious!)\n- 상대방이 과중한 업무로 야근을 했다는 말을 들었을 때:\n  - \"오늘 정말 피곤하겠어요 / 힘들겠어요.\" (You must be so tired / having a hard time today.)\n- 하늘에 먹구름이 짙게 끼었을 때:\n  - \"하늘이 어두워요. 곧 비가 오겠어요.\" (The sky is dark. It looks like it will rain soon.)\n- 상대방이 좋은 시험 성적을 받았을 때:\n  - \"정말 기분 좋겠어요! 축하해요!\" (You must feel so good! Congratulations!)\n\n2. 1인칭 의지와 3인칭 추측의 화용론적 구별:\n- 1인칭 + 동작동사: 화자의 의지 (제가 가겠습니다 = I will go)\n- 상태 형용사 / 상황 단서: 화자의 추측/공감 (정말 맛있겠어요 = It looks delicious)",
      "examples": [
        {
          "target": "테이블 위에 차려진 음식이 정말 맛있겠어요.",
          "reading": "Teibeul wi-e charyeojin eumsik-i jeongmal masitgetseoyo.",
          "translation": "The food set on the table looks really delicious."
        },
        {
          "target": "어제 밤새워서 일해서 오늘 많이 피곤하겠어요.",
          "reading": "Eoje bamsaewoseo ilhaeseo oneul mani pigonhagetseoyo.",
          "translation": "You must be very tired today because you worked through the night yesterday."
        },
        {
          "target": "바깥 날씨가 흐려서 곧 눈이 오겠어요.",
          "reading": "Bakkat nalssi-ga heuryeoseo got nun-i ogetseoyo.",
          "translation": "The outside weather is overcast, so it looks like it will snow soon."
        },
        {
          "target": "방학 동안 해외여행을 가서 정말 좋겠어요.",
          "reading": "Banghak dongan hae-woeyeohaeng-eul gaseo jeongmal jokgetseoyo.",
          "translation": "It must be so nice that you are traveling abroad during vacation."
        }
      ],
      "mnemonics": [
        "음식 보면 '맛있겠다!', 지친 친구에겐 '힘들겠다!' 상황을 보고 즉시 느끼는 직관적 추측 '-겠어요'!"
      ],
      "culturalNotes": [
        "한국인들은 상대방의 처지에 깊이 공감할 때 '힘드시겠어요', '좋으시겠어요'처럼 존칭 '-시-'를 넣은 '-시겠어요' 표현을 대단히 애용합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "식당에서 맛있어 보이는 요리를 처음 보았을 때 감탄하며 건네는 올바른 추측 표현은 무엇입니까?",
          "options": [
            "정말 맛있겠어요!",
            "정말 맛있었어요!",
            "정말 맛있을게요!"
          ],
          "answerIndex": 0,
          "explanation": "눈앞의 외관을 보고 직관적으로 맛있을 것이라 추측할 때는 '맛있겠어요!'가 올바릅니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "하루 종일 쉬지 않고 일한 동료에게 건네는 가장 따뜻한 공감과 추측의 위로 표현은 어느 것입니까?",
          "options": [
            "오늘 정말 힘들겠어요. 푹 쉬세요.",
            "오늘 정말 힘들었어요. 나 먼저 갈게.",
            "오늘 정말 힘듭니다. 내가 쉬겠어."
          ],
          "answerIndex": 0,
          "explanation": "상대방의 힘든 상황을 짐작하고 공감할 때는 '힘들겠어요'가 가장 적절합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'A: 내일부터 2주 동안 휴가예요. B: 와, 정말 _____! (Wow, that must be so great!)' 빈칸에 알맞은 형태는?",
          "options": [
            "좋겠어요",
            "좋았어요",
            "좋을게요"
          ],
          "answerIndex": 0,
          "explanation": "상대방의 기쁜 상황을 공감하며 추측하는 표현은 '좋겠어요'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'정말 맛있겠어요'(It looks really delicious)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "정말 맛있겠어요.",
            "정말 맛있겠어요"
          ],
          "explanation": "정말(부사) + 맛있겠어요(맛있다 + 겠 + 어요) = 정말 맛있겠어요."
        }
      ]
    }
  },
  "ko-u7-l4": {
    "id": "ko-u7-l4",
    "subject": "korean",
    "unit": 7,
    "lessonNumber": 4,
    "title": "화자의 약속·즉각적 반응 '-(으)ㄹ게요'와 일반 예정 '-(으)ㄹ 거예요'의 화용적 대비",
    "level": "A2",
    "objective": "상대방과의 대화 맥락에서 자신의 행동을 약속하거나 즉각적으로 응답하는 '-(으)ㄹ게요'와 객관적 미래 일정을 진술하는 '-(으)ㄹ 거예요'의 화용론적 차이를 정밀하게 구분한다.",
    "presentation": {
      "explanation": "한국어 학습자가 가장 헷갈려하는 두 미래 표현 '-(으)ㄹ게요'와 '-(으)ㄹ 거예요'는 뚜렷한 화용론적 기능 차이를 지닙니다.\n\n1. '-(으)ㄹ게요'의 화용론적 성격 (약속 및 청자 지향적 반응):\n- 오직 1인칭 주어(화자)의 평서문에서만 사용됩니다 (의문문 절대 불가).\n- 청자(상대방)에게 \"내가 그렇게 하겠다\"고 약속하거나, 청자의 말에 즉각적으로 반응할 때 씁니다.\n  - \"제가 내일 아침에 다시 전화할게요.\" (I will call you again tomorrow - Promise to listener)\n  - \"오늘 커피는 제가 살게요!\" (I will buy the coffee today!)\n  - \"먼저 퇴근할게요. 내일 봐요.\" (I will leave work first. See you tomorrow.)\n\n2. '-(으)ㄹ 거예요'와의 정밀 대비:\n- '-(으)ㄹ 거예요':\n  - 청자와 무관한 화자의 단순한 개인적 미래 계획이나 객관적 일정 진술.\n  - 의문문 가능: \"내일 뭐 할 거예요?\"\n  - 3인칭 주어 가능: \"민수 씨는 내일 올 거예요.\"\n- '-(으)ㄹ게요':\n  - 청자와의 관계 속에서 일어나는 약속 및 배려의 즉각적 선언.\n  - 의문문 불가 (*내일 뭐 할게요? X)\n  - 3인칭 주어 불가 (*민수 씨가 갈게요 X)",
      "examples": [
        {
          "target": "제가 내일 오후 3시에 사무실로 전화할게요.",
          "reading": "Jeo-ga naeil ohu sesi-e samusil-ro jeonhwahalgeyo.",
          "translation": "I will call your office at 3 PM tomorrow (Promise to the listener)."
        },
        {
          "target": "오늘 저녁 식사 비용은 제가 낼게요.",
          "reading": "Oneul jeonyeok siksa biyong-eun jeo-ga naelgeyo.",
          "translation": "I will pay for tonight's dinner (Immediate offer/promise)."
        },
        {
          "target": "저는 이번 주말에 집에서 푹 쉴 거예요.",
          "reading": "Jeo-neun ibeon jumal-e jib-eseo puk swil geoyeyo.",
          "translation": "I will rest deeply at home this weekend (General personal plan)."
        },
        {
          "target": "내일 회의 준비를 제가 미리 해 둘게요.",
          "reading": "Naeil hoewi junbi-reul jeo-ga miri hae dulgeyo.",
          "translation": "I will prepare for tomorrow's meeting in advance (Helpful commitment)."
        }
      ],
      "mnemonics": [
        "상대방에게 약속할 땐 '-(으)ㄹ게요' (내가 살게!), 혼자 계획 말할 땐 '-(으)ㄹ 거예요' (집에 갈 거야)!"
      ],
      "culturalNotes": [
        "한국의 직장이나 일상 모임에서 '제가 할게요(I will do it)' 또는 '제가 살게요(I will treat you)'라는 말은 상대방에 대한 적극적인 배려와 솔선수범을 나타내는 매우 호감도 높은 화법입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "카페에서 친구에게 '오늘 커피는 내가 살게(약속/호의)'라고 말할 때 가장 자연스러운 표현은 무엇입니까?",
          "options": [
            "오늘 커피는 제가 살게요.",
            "오늘 커피는 제가 살 거예요.",
            "오늘 커피는 제가 샀어요."
          ],
          "answerIndex": 0,
          "explanation": "청자에게 호의를 베풀거나 약속하는 1인칭 즉각 반응이므로 '살게요'가 가장 자연스럽습니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "다음 중 '-(으)ㄹ게요'의 문법 규칙에 엄격히 부합하는 올바른 문장은 어느 것입니까?",
          "options": [
            "제가 내일 아침 일찍 연락할게요.",
            "선생님, 내일 학교에 올게요?",
            "민수 씨가 내일 영화를 볼게요."
          ],
          "answerIndex": 0,
          "explanation": "'-(으)ㄹ게요'는 1인칭 주어 평서문에서만 사용 가능하므로 '제가 ... 연락할게요'가 유일하게 올바릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'A: 서류 정리가 좀 많네요. B: 걱정하지 마세요. 제가 _____ (Don't worry, I will help you).' 빈칸에 알맞은 약속형은?",
          "options": [
            "도와드릴게요",
            "도와드릴 거예요",
            "도와드렸어요"
          ],
          "answerIndex": 0,
          "explanation": "상대방을 돕겠다고 약속하는 대화 상황이므로 '도와드릴게요'가 가장 적절합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'제가 전화할게요'(I will call you - Promise)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "제가 전화할게요.",
            "제가 전화할게요"
          ],
          "explanation": "제가(주어) + 전화할게요(전화하다 + ㄹ게요) = 제가 전화할게요."
        }
      ]
    }
  },
  "ko-u7-l5": {
    "id": "ko-u7-l5",
    "subject": "korean",
    "unit": 7,
    "lessonNumber": 5,
    "title": "미래 계획과 주말 스케줄 담화 구성 (실전 계획 대화)",
    "level": "A2",
    "objective": "'이번 주말에 뭐 할 거예요?', '방학 때 어디에 갈 거예요?' 등 미래 계획을 묻고 답하는 다채로운 담화 패턴을 유창하게 구성한다.",
    "presentation": {
      "explanation": "미래의 스케줄과 계획을 주제로 대화할 때는 미래 시간 부사, 목적격 조사, 그리고 미래 시제 어미들을 유기적으로 결합하여 생동감 있는 담화를 이끌어냅니다.\n\n1. 핵심 미래 시간 부사 목록:\n- 내일 (Tomorrow): 내일 오전에 회의가 있어요.\n- 모레 (The day after tomorrow): 모레 친구가 한국에 와요.\n- 이번 주말 (This weekend): 이번 주말에 등산을 갈 거예요.\n- 다음 주 (Next week): 다음 주에 새 프로젝트를 시작해요.\n- 다음 달 (Next month): 다음 달에 새 아파트로 이사할 거예요.\n- 내년 (Next year): 내년에 한국 대학교에 입학할 거예요.\n\n2. 실전 주말 계획 대화 모델:\n- A: 지은 씨, 이번 주말에 특별한 계획이 있어요?\n- B: 네, 토요일에 오랜만에 고향 친구를 만날 거예요. 같이 쇼핑을 하고 맛있는 저녁을 먹을 거예요.\n- A: 일요일에는 뭐 할 거예요?\n- B: 일요일에는 집에서 청소를 하고 푹 쉬면서 한국어 복습을 할 거예요. 민수 씨는요?\n- A: 저는 가족들과 함께 서울 근교로 드라이브를 갈 거예요.",
      "examples": [
        {
          "target": "A: 이번 주말에 뭐 할 거예요? B: 친구와 한강 공원에 갈 거예요.",
          "reading": "A: Ibeon jumal-e mwo hal geoyeyo? B: Chingu-wa Hangang gongwon-e gal geoyeyo.",
          "translation": "A: What will you do this weekend? B: I will go to Hangang Park with a friend."
        },
        {
          "target": "다음 달에 제주도로 가족 여행을 떠날 거예요.",
          "reading": "Daeum dal-e Jeju-do-ro gajok yeohaeng-eul tteonal geoyeyo.",
          "translation": "Next month, I will leave for a family trip to Jeju Island."
        },
        {
          "target": "내일 퇴근 후에 헬스장에서 1시간 운동할 거예요.",
          "reading": "Naeil toegeun hu-e helseujang-eseo han sigan undonghal geoyeyo.",
          "translation": "Tomorrow after work, I will exercise for an hour at the gym."
        },
        {
          "target": "이번 방학에는 한국어 능력 시험 4급을 준비할 거예요.",
          "reading": "Ibeon banghak-eneun hangug-eo neungnyeok siheom sageup-eul junbihal geoyeyo.",
          "translation": "During this vacation, I will prepare for TOPIK Level 4."
        }
      ],
      "mnemonics": [
        "'시간 부사 + 목적어 + -ㄹ 거예요'로 나만의 완벽한 주말 계획 완성!"
      ],
      "culturalNotes": [
        "한국인들은 금요일 오후가 되면 동료나 친구에게 '주말 잘 보내세요!(Have a great weekend!)'라는 따뜻한 주말 인사말을 반드시 주고받습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'이번 주말에 뭐 할 거예요?'라는 질문에 대한 가장 자연스러운 대답 문장은 무엇입니까?",
          "options": [
            "친구와 함께 영화를 볼 거예요.",
            "친구와 함께 영화를 봤어요.",
            "친구와 함께 영화를 봐라."
          ],
          "answerIndex": 0,
          "explanation": "주말 계획을 묻는 질문이므로 미래 시제인 '볼 거예요'로 답해야 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "금요일 퇴근길에 직장 동료에게 건네는 가장 표준적인 주말 인사말은 어느 것입니까?",
          "options": [
            "주말 잘 보내세요!",
            "주말 잘 먹겠습니다!",
            "주말 잘 갔어요!"
          ],
          "answerIndex": 0,
          "explanation": "주말을 즐겁게 보내라는 표준 인사말은 '주말 잘 보내세요!'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 미래 계획을 묻고 답하는 담화로 문법과 맥락이 완벽한 것은 무엇입니까?",
          "options": [
            "A: 내일 어디에 갈 거예요? B: 서울역에 갈 거예요.",
            "A: 내일 어디에 갈 거예요? B: 어제 서울역에 갔어요.",
            "A: 어제 어디에 갔어요? B: 내일 서울역에 갈게요."
          ],
          "answerIndex": 0,
          "explanation": "내일의 계획을 묻고 미래형 '갈 거예요'로 답한 첫 번째 대화가 완벽합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'주말에 친구를 만날 거예요'(I will meet a friend on the weekend)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "주말에 친구를 만날 거예요.",
            "주말에 친구를 만날 거예요"
          ],
          "explanation": "주말에(시간) + 친구를(목적어) + 만날 거예요(만나다의 미래형) = 주말에 친구를 만날 거예요."
        }
      ]
    }
  },
  "ko-u8-l1": {
    "id": "ko-u8-l1",
    "subject": "korean",
    "unit": 8,
    "lessonNumber": 1,
    "title": "동작의 역동적 진행상 어미 (-고 있다)",
    "level": "A2",
    "objective": "발화 시점에 어떤 동작이 실시간으로 진행되고 있음을 나타내는 진행상 어미 '-고 있다'의 결합 구조와 주체 높임 형태('-고 계시다')를 완벽히 체득한다.",
    "presentation": {
      "explanation": "한국어에서 현재 발화 시점에 동작이 계속해서 진행 중임을 나타낼 때는 동사 어간 뒤에 진행상 어미 '-고 있다'를 결합합니다.\n\n1. 형태 결합 규칙:\n- 동사 어간의 받침 유무와 관계없이 어간에 바로 '-고 있다'를 붙입니다.\n  - 먹다 → 먹고 있어요 (am/is/are eating)\n  - 마시다 → 마시고 있어요 (am/is/are drinking)\n  - 읽다 → 읽고 있어요 (am/is/are reading)\n  - 공부하다 → 공부하고 있어요 (am/is/are studying)\n  - 청소하다 → 청소하고 있어요 (am/is/are cleaning)\n\n2. 주체 높임 형태 ('-고 계시다'):\n주어가 존경과 예우의 대상(선생님, 부모님, 사장님 등)일 때는 '있다' 대신 높임 특수 용언 '계시다'를 사용하여 '-고 계시다 / -고 계십니다'로 표현합니다.\n- \"선생님께서 교실에서 학생들을 가르치고 계십니다.\"\n- \"아버지께서 거실에서 신문을 읽고 계세요.\"",
      "examples": [
        {
          "target": "지금 도서관에서 한국어 시험을 준비하고 있어요.",
          "reading": "Jigeum doseogwan-eseo hangug-eo siheom-eul junbihago isseoyo.",
          "translation": "I am preparing for the Korean exam at the library right now."
        },
        {
          "target": "어머니께서 주방에서 저녁 식사를 만들고 계세요.",
          "reading": "Eomeoni-kkeseo jubang-eseo jeonyeok siksa-reul mandeulgo gyeseyo.",
          "translation": "Mother is making dinner in the kitchen (Honorific Progressive)."
        },
        {
          "target": "친구와 함께 카페에서 시원한 아이스커피를 마시고 있어요.",
          "reading": "Chingu-wa hamkke kape-eseo siwonhan aiseukeopi-reul masigo isseoyo.",
          "translation": "I am drinking cool iced coffee with a friend at the cafe."
        },
        {
          "target": "지하철 안에서 많은 사람들이 스마트폰을 보고 있습니다.",
          "reading": "Jihacheol an-eseo maneun saramdeul-i seumateupon-eul bogo itseumnida.",
          "translation": "Many people are looking at their smartphones on the subway."
        }
      ],
      "mnemonics": [
        "동작 진행 중일 땐 동사 뒤에 '-고 있다'! 어른께는 공손하게 '-고 계시다'!"
      ],
      "culturalNotes": [
        "전화 통화에서 '지금 뭐 하고 있어요?'는 한국인들이 대화를 시작할 때 상대방의 현재 상황을 배려하며 묻는 가장 일상적인 안부 질문입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '공부하다(to study)'를 현재 동작 진행형으로 나타낸 올바른 표현은 무엇입니까?",
          "options": [
            "공부하고 있어요",
            "공부해 있어요",
            "공부하겠어요"
          ],
          "answerIndex": 0,
          "explanation": "동작의 진행은 동사 어간에 '-고 있다'가 결합한 '공부하고 있어요'가 올바릅니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'선생님께서 책을 _____' 빈칸에 들어갈 가장 알맞은 주체 높임 진행 표현은 어느 것입니까?",
          "options": [
            "읽고 계십니다",
            "읽고 있습니다",
            "읽어 있습니다"
          ],
          "answerIndex": 0,
          "explanation": "주어가 '선생님'이므로 '있다'의 높임 형태인 '읽고 계십니다'가 가장 예의 바릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'A: 지금 어디에서 뭐 해요? B: 식당에서 친구와 밥을 _____.' 빈칸에 알맞은 형태는?",
          "options": [
            "먹고 있어요",
            "먹어 있어요",
            "먹겠어요"
          ],
          "answerIndex": 0,
          "explanation": "현재 식사 동작을 진행 중임을 나타내므로 '먹고 있어요'가 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'책을 읽고 있어요'(I am reading a book)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "책을 읽고 있어요.",
            "책을 읽고 있어요"
          ],
          "explanation": "책을(목적어) + 읽고 있어요(읽다의 진행형) = 책을 읽고 있어요."
        }
      ]
    }
  },
  "ko-u8-l2": {
    "id": "ko-u8-l2",
    "subject": "korean",
    "unit": 8,
    "lessonNumber": 2,
    "title": "완료된 동작의 결과 상태 지속 (-아/어 있다)",
    "level": "A2",
    "objective": "동작이 완료된 후 그 결과 상태가 계속 유지되고 있음을 나타내는 '-아/어 있다'의 상적 의미와 자동사 결합 필수 제약을 체득한다.",
    "presentation": {
      "explanation": "보조용언 '-아/어 있다'는 동작 자체가 일어나는 중이 아니라, 동작이 끝난 뒤 그로 인해 형성된 '결과 상태(Resultant State)'가 지속됨을 나타냅니다.\n\n1. 자동사(Intransitive Verbs) 결합 제약:\n'-아/어 있다'는 목적어를 취하지 않는 자동사 또는 피동사와 결합합니다 (타동사 결합 불가).\n- 자세/위치 동사:\n  - 앉다 (to sit) → 의자에 앉아 있어요 (is seated in a chair)\n  - 서다 (to stand) → 문 앞에 서 있어요 (is standing in front of the door)\n  - 눕다 (to lie) → 침대에 누워 있어요 (is lying in bed)\n- 상태/피동 동사:\n  - 열리다 (to be open) → 창문이 열려 있어요 (The window is open)\n  - 닫히다 (to be closed) → 문이 닫혀 있어요 (The door is closed)\n  - 피다 (to bloom) → 정원에 장미꽃이 피어 있어요 (Roses are in bloom)\n  - 떨어지다 (to fall) → 낙엽이 떨어져 있어요 (Fallen leaves lie on the ground)",
      "examples": [
        {
          "target": "손님들이 로비 소파에 편하게 앉아 있습니다.",
          "reading": "Sonnimdeul-i robi sopa-e pyeonhage anja itseumnida.",
          "translation": "The guests are seated comfortably on the lobby sofa."
        },
        {
          "target": "환기를 위해 교실 창문이 활짝 열려 있어요.",
          "reading": "Hwangi-reul wihae gyosil changmun-i hwaljjak yeollyeo isseoyo.",
          "translation": "The classroom window is wide open for ventilation."
        },
        {
          "target": "봄이 와서 공원에 화사한 벚꽃이 활짝 피어 있어요.",
          "reading": "Bom-i waseo gongwon-e hwasahan beotkkochi hwaljjak pieo isseoyo.",
          "translation": "Spring has come, and brilliant cherry blossoms are in full bloom in the park."
        },
        {
          "target": "안내 데스크 앞에 한 남자가 조용히 서 있습니다.",
          "reading": "Annae deseukeu ap-e han namja-ga joyonghi seo itseumnida.",
          "translation": "A man is standing quietly in front of the information desk."
        }
      ],
      "mnemonics": [
        "동작이 끝난 후 상태가 계속될 땐 '-아/어 있다'! 앉아 있다, 서 있다, 열려 있다, 피어 있다!"
      ],
      "culturalNotes": [
        "한국의 봄철 뉴스에서는 '전국에 벚꽃이 만발해 있습니다 / 피어 있습니다'라는 상태 지속 표현으로 꽃의 만개 소식을 전합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "의자에 사람이 착석을 마친 채 계속 머물러 있는 상태를 가장 자연스럽게 묘사한 표현은 무엇입니까?",
          "options": [
            "의자에 앉아 있어요.",
            "의자에 앉고 있어요.",
            "의자에 앉겠어요."
          ],
          "answerIndex": 0,
          "explanation": "착석이 완료된 결과 상태가 지속되는 것은 '-아/어 있다'를 쓴 '앉아 있어요'가 가장 표준적입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'창문이 닫힌 상태'를 올바르게 묘사한 문장은 어느 것입니까?",
          "options": [
            "창문이 닫혀 있어요.",
            "창문이 닫아 있어요.",
            "창문이 닫고 있어요."
          ],
          "answerIndex": 0,
          "explanation": "피동사 '닫히다'의 어간에 '-어 있다'가 결합하여 '닫혀 있어요'가 올바릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 '-아/어 있다'의 문법 규칙(자동사 결합 제약)에 완벽히 부합하는 문장은 무엇입니까?",
          "options": [
            "공원에 예쁜 꽃이 피어 있어요.",
            "친구가 밥을 먹어 있어요.",
            "내가 책을 읽어 있어요."
          ],
          "answerIndex": 0,
          "explanation": "'-아/어 있다'는 타동사(밥을 먹다, 책을 읽다)와 결합할 수 없으며, 자동사인 '피다'와 결합한 '피어 있어요'가 유일하게 올바릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'문이 열려 있어요'(The door is open)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "문이 열려 있어요.",
            "문이 열려 있어요"
          ],
          "explanation": "문이(주어) + 열려 있어요(열리다 + 어 있다) = 문이 열려 있어요."
        }
      ]
    }
  },
  "ko-u8-l3": {
    "id": "ko-u8-l3",
    "subject": "korean",
    "unit": 8,
    "lessonNumber": 3,
    "title": "진행상 '-고 있다'와 상태 지속상 '-아/어 있다'의 결정적 문법 대비",
    "level": "A2",
    "objective": "실시간 동작 진행(-고 있다)과 완료 후 결과 지속(-아/어 있다)의 의미 차이를 구별하고 타동사 대 자동사의 문법적 제약을 정밀하게 적용한다.",
    "presentation": {
      "explanation": "한국어의 두 가지 지속상(Continuatives)인 '-고 있다'와 '-아/어 있다'는 다음과 같은 결정적인 차이를 지닙니다.\n\n1. 의미적 차이 (Action vs Resultant State):\n- '-고 있다': 지금 이 순간 주어가 어떤 행위(Action)를 끊임없이 실행 중임.\n  - 예: 학교에 가고 있어요 (I am walking/traveling toward school).\n- '-아/어 있다': 주어가 행위를 마친 후 그 자리에 그대로 상태(State)를 유지하고 있음.\n  - 예: 선생님이 교실에 가 계십니다 (The teacher went to the classroom and is staying there).\n\n2. 통사적 제약 (Transitivity Constraint):\n- 타동사 (목적어를 취하는 동사): 오직 '-고 있다'만 결합 가능.\n  - 밥을 먹고 있다 (O) / *밥을 먹어 있다 (X)\n  - 책을 읽고 있다 (O) / *책을 읽어 있다 (X)\n- 자동사 (자세, 상태 동사): 주로 '-아/어 있다'로 자연스러운 상태를 표현.\n  - 의자에 앉아 있다 (O - 착석 상태) / 의자에 앉고 있다 (? - 엉덩이를 내리는 중)",
      "examples": [
        {
          "target": "저는 지금 도서관에 가고 있어요. (이동 중인 동작)",
          "reading": "Jeo-neun jigeum doseogwan-e gago isseoyo.",
          "translation": "I am going to the library right now (Action in progress)."
        },
        {
          "target": "선생님은 지금 회의실에 가 계세요. (도착하여 머무는 상태)",
          "reading": "Seonsaengnim-eun jigeum hoewisil-e ga gyeseyo.",
          "translation": "The teacher has gone to the meeting room and is staying there (Resultant state)."
        },
        {
          "target": "지하철 역 앞에 사람들이 줄을 서 있습니다.",
          "reading": "Jihacheol yeok ap-e saramdeul-i jul-eul seo itseumnida.",
          "translation": "People are standing in line in front of the subway station (State of standing)."
        },
        {
          "target": "방 안에서 음악을 크게 틀고 춤을 추고 있어요.",
          "reading": "Bang an-eseo eumak-eul keuge teulgo chum-eul chugo isseoyo.",
          "translation": "I turned up the music in my room and am dancing (Dynamic action)."
        }
      ],
      "mnemonics": [
        "타동사는 오직 '-고 있다'만(밥을 먹고 있다)! 자리에 머무는 자세/상태는 '-아/어 있다'(앉아 있다)!"
      ],
      "culturalNotes": [
        "한국어에서 사람이 죽거나 사라지지 않고 살아 있음을 나타낼 때도 '살아 있다'처럼 '-아 있다' 형태를 사용합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "다음 중 비문법적인 잘못된 문장은 어느 것입니까?",
          "options": [
            "친구가 도서관에서 신문을 읽어 있어요.",
            "친구가 도서관에서 신문을 읽고 있어요.",
            "친구가 도서관 의자에 앉아 있어요."
          ],
          "answerIndex": 0,
          "explanation": "'신문을 읽다'는 타동사이므로 '-아/어 있다'와 결합할 수 없어 '읽어 있어요'는 비문법적입니다 ('읽고 있어요'가 올바름)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "지하철을 타고 친구를 만나러 '이동 중인 동작'을 가장 정확하게 표현한 것은 어느 것입니까?",
          "options": [
            "지금 강남역으로 가고 있어요.",
            "지금 강남역으로 가 있어요.",
            "지금 강남역으로 갔었어요."
          ],
          "answerIndex": 0,
          "explanation": "이동 동작이 실시간 진행 중일 때는 '-고 있다'를 쓴 '가고 있어요'가 올바릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'-고 있다'와 '-아/어 있다'의 결합 규칙에 대한 설명 중 옳은 것은 무엇입니까?",
          "options": [
            "목적어를 취하는 타동사는 '-아/어 있다'와 결합할 수 없고 '-고 있다'와만 결합한다.",
            "모든 타동사는 '-아/어 있다'와 자유롭게 결합한다.",
            "'-고 있다'는 사람이 죽었을 때만 쓴다."
          ],
          "answerIndex": 0,
          "explanation": "타동사는 '-아/어 있다'와 결합할 수 없으며 오직 '-고 있다'만 가능합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'사람들이 서 있어요'(People are standing)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "사람들이 서 있어요.",
            "사람들이 서 있어요"
          ],
          "explanation": "사람들이(주어) + 서 있어요(서다 + 어 있다) = 사람들이 서 있어요."
        }
      ]
    }
  },
  "ko-u8-l4": {
    "id": "ko-u8-l4",
    "subject": "korean",
    "unit": 8,
    "lessonNumber": 4,
    "title": "신체 착용 동사(입다, 쓰다, 신다)의 이중적 상(Aspect)과 '-고 있다'",
    "level": "A2",
    "objective": "'입다', '쓰다', '신다', '끼다' 등 신체 착용 동사가 '-고 있다'와 결합할 때 동작 진행과 착용 완료 상태를 동시에 나타낼 수 있는 독특한 한국어 상적 특성을 마스터한다.",
    "presentation": {
      "explanation": "신체에 의복이나 장신구를 걸치는 '착용 동사(Verbs of Wearing)'는 한국어에서 대단히 독특한 상(Aspect)적 특징을 지닙니다.\n\n1. 신체 부위별 착용 동사 매칭:\n- 옷 (상의/하의/외투): 입다 → 코트를 입다, 청바지를 입다\n- 모자, 안경, 마스크 (머리/얼굴): 쓰다 → 모자를 쓰다, 안경을 쓰다\n- 신발, 양말 (발): 신다 → 운동화를 신다, 구두를 신다\n- 장갑, 반지 (손/손가락): 끼다 → 가죽 장갑을 끼다, 반지를 끼다\n- 시계, 팔찌 (손목): 차다 → 손목시계를 차다\n- 넥타이, 스카프 (목): 매다 / 두르다\n\n2. 착용 동사 + '-고 있다'의 이중적 상(Dual Aspect):\n착용 동사에 '-고 있다'가 붙으면 문맥에 따라 두 가지 의미를 모두 가집니다.\n- 의미 1 (동작 진행): 지금 옷에 팔을 넣으며 착용하는 동작 중임.\n- 의미 2 (착용 상태 지속 - 90% 이상): 이미 옷/모자를 착용한 채로 그 상태를 유지하고 있음.\n  - 예: \"민수 씨는 오늘 검은색 정장을 입고 있어요.\" (검은 정장을 입은 상태임)",
      "examples": [
        {
          "target": "저기 빨간색 모자를 쓰고 있는 사람이 제 동생이에요.",
          "reading": "Jeogi ppalgansaek moja-reul sseugo inneun saram-i je dongsaeng-ieyo.",
          "translation": "The person wearing a red hat over there is my younger sibling."
        },
        {
          "target": "오늘 날씨가 추워서 두꺼운 패딩 코트를 입고 있어요.",
          "reading": "Oneul nalssi-ga chuwoseo dukkeoun paeding koteu-reul ipgo isseoyo.",
          "translation": "Because the weather is cold today, I am wearing a thick padded coat."
        },
        {
          "target": "편한 운동화를 신고 공원을 산책했어요.",
          "reading": "Pyeonhan undonghwa-reul singo gongwon-eul sanchaekhaesseoyo.",
          "translation": "I wore comfortable sneakers and took a walk in the park."
        },
        {
          "target": "선생님은 항상 멋진 뿔테 안경을 쓰고 계십니다.",
          "reading": "Seonsaengnim-eun hangsang meotjin ppulte angyeong-eul sseugo gyesimnida.",
          "translation": "The teacher is always wearing stylish horn-rimmed glasses."
        }
      ],
      "mnemonics": [
        "옷은 '입고', 모자는 '쓰고', 신발은 '신고', 반지는 '끼고'! 착용한 채로 있을 때도 '-고 있다'!"
      ],
      "culturalNotes": [
        "한국어에서는 신체 부위마다 결합하는 착용 동사가 매우 엄격히 구별됩니다. 모자를 '입다'나 신발을 '쓰다'라고 말하면 매우 어색하므로 부위별 동사를 정확히 외워야 합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'안경(glasses)'을 착용할 때 결합하는 올바른 착용 동사는 무엇입니까?",
          "options": [
            "쓰다 (안경을 쓰다)",
            "입다 (안경을 입다)",
            "신다 (안경을 신다)"
          ],
          "answerIndex": 0,
          "explanation": "얼굴이나 머리에 착용하는 것은 동사 '쓰다'를 사용하므로 '안경을 쓰다'가 올바릅니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'운동화(sneakers)'를 발에 신은 상태를 묘사한 올바른 문장은 어느 것입니까?",
          "options": [
            "새 운동화를 신고 있어요.",
            "새 운동화를 쓰고 있어요.",
            "새 운동화를 끼고 있어요."
          ],
          "answerIndex": 0,
          "explanation": "발에 착용하는 신발류는 '신다'를 쓰므로 '신고 있어요'가 정확합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'손에 따뜻한 가죽 장갑을 _____.' 빈칸에 알맞은 착용 동사는?",
          "options": [
            "끼고 있어요",
            "입고 있어요",
            "신고 있어요"
          ],
          "answerIndex": 0,
          "explanation": "손이나 손가락에 끼우는 장신구/보호구는 '끼다'를 쓰므로 '끼고 있어요'가 올바릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'모자를 쓰고 있어요'(I am wearing a hat)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "모자를 쓰고 있어요.",
            "모자를 쓰고 있어요"
          ],
          "explanation": "모자를(목적어) + 쓰고 있어요(쓰다의 착용 진행/상태형) = 모자를 쓰고 있어요."
        }
      ]
    }
  },
  "ko-u8-l5": {
    "id": "ko-u8-l5",
    "subject": "korean",
    "unit": 8,
    "lessonNumber": 5,
    "title": "진행과 상태를 활용한 사진 및 공간 풍경 묘사 담화",
    "level": "A2",
    "objective": "사진 속 인물들의 역동적 행동(-고 있다)과 사물 및 배경의 정적인 배치 상태(-아/어 있다)를 조화롭게 엮어 풍부한 묘사 담화를 구성한다.",
    "presentation": {
      "explanation": "실제 사진이나 공간 풍경을 한국어로 묘사할 때는 인물의 동작과 사물의 상태를 명확히 구분하여 서술하는 담화 전략이 필요합니다.\n\n1. 이원적 묘사 서술 공식:\n- 인물의 능동적 행위 (Dynamic Action) → 동사 + '-고 있다':\n  - \"한 여성이 벤치에 앉아서 커피를 마시고 있어요.\"\n  - \"아이들이 잔디밭에서 공놀이를 하고 있어요.\"\n- 사물과 배경의 정적인 배치 (Static State) → 자동사/피동사 + '-아/어 있다':\n  - \"테이블 위에 꽃병이 놓여 있어요.\"\n  - \"벽에는 아름다운 유화 그림이 걸려 있어요.\"\n  - \"창문이 활짝 열려 있어요.\"\n\n2. 실전 카페 사진 묘사 모델:\n- \"이 사진은 아늑한 도심 카페의 오후 풍경입니다.\"\n- \"창가 쪽에는 두 남녀가 마주 앉아 있습니다.\"\n- \"한 사람은 노트북으로 문서를 작성하고 있고, 다른 사람은 따뜻한 아메리카노를 마시고 있습니다.\"\n- \"테이블 위에는 달콤한 조각 케이크가 놓여 있고, 벽에는 은은한 조명이 켜져 있습니다.\"",
      "examples": [
        {
          "target": "창가 테이블 위에 예쁜 유리 화병이 놓여 있어요.",
          "reading": "Changga teibeul wi-e yeoppeun yuri hwabyeong-i noyeo isseoyo.",
          "translation": "A pretty glass vase is placed on the window table (Resultant state of '놓이다')."
        },
        {
          "target": "공원 잔디밭에서 아이들이 신나게 공을 차고 있어요.",
          "reading": "Gongwon jandibat-eseo aideul-i sinnage gong-eul chago isseoyo.",
          "translation": "Children are excitedly kicking a ball on the park lawn (Action in progress)."
        },
        {
          "target": "벽에 유명한 화가의 풍경화 그림이 걸려 있습니다.",
          "reading": "Byeog-e yumyeonghan hwaga-ui punggyeonghwa geurim-i geollyeo itseumnida.",
          "translation": "A landscape painting by a famous artist is hanging on the wall."
        },
        {
          "target": "소파 옆 테이블에는 커피 잔과 책 한 권이 놓여 있습니다.",
          "reading": "Sopa yeop teibeul-eneun keopi jan-gwa chaek han gwon-i noyeo itseumnida.",
          "translation": "A coffee cup and a book are placed on the table next to the sofa."
        }
      ],
      "mnemonics": [
        "사람의 행동은 '-고 있다', 물건의 놓인 상태는 '-아/어 있다'! 두 날개로 완성하는 완벽한 묘사!"
      ],
      "culturalNotes": [
        "한국어능력시험(TOPIK) 쓰기와 말하기 시험에서는 그림이나 사진을 보고 상황을 묘사하는 문제가 단골로 출제되며, '-고 있다'와 '-아/어 있다'의 정확한 구분이 핵심 채점 기준입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "벽에 그림이 '걸려 있는 상태'를 묘사할 때 가장 알맞은 표현은 무엇입니까?",
          "options": [
            "그림이 걸려 있어요.",
            "그림이 걸고 있어요.",
            "그림이 걸렸겠어요."
          ],
          "answerIndex": 0,
          "explanation": "피동사 '걸리다'에 상태 지속 어미 '-어 있다'가 결합한 '걸려 있어요'가 올바릅니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "테이블 위에 책이 '놓여 있는 상태'를 바르게 표현한 것은 어느 것입니까?",
          "options": [
            "책이 놓여 있어요.",
            "책이 놓고 있어요.",
            "책이 놓겠어요."
          ],
          "answerIndex": 0,
          "explanation": "'놓이다(to be placed)'의 상태 지속형인 '놓여 있어요'가 정확합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "사진 묘사에서 '인물의 진행 동작'과 '사물의 지속 상태'가 모두 올바르게 사용된 문장은?",
          "options": [
            "소파에 앉아 있는 사람이 커피를 마시고 있어요.",
            "소파에 앉고 있는 사람이 커피를 마셔 있어요.",
            "소파에 앉겠는 사람이 커피를 마셨겠어요."
          ],
          "answerIndex": 0,
          "explanation": "착석 상태('앉아 있는')와 음료 섭취 동작('마시고 있어요')이 완벽하게 결합되었습니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'꽃병이 놓여 있어요'(The vase is placed)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "꽃병이 놓여 있어요.",
            "꽃병이 놓여 있어요"
          ],
          "explanation": "꽃병이(주어) + 놓여 있어요(놓이다 + 어 있다) = 꽃병이 놓여 있어요."
        }
      ]
    }
  },
  "ko-u9-l1": {
    "id": "ko-u9-l1",
    "subject": "korean",
    "unit": 9,
    "lessonNumber": 1,
    "title": "정적 존재 위치와 이동의 도착점 조사 (-에)",
    "level": "A2",
    "objective": "사물이나 사람의 정적 존재/부재 위치(있다/없다/살다) 및 이동 동작의 최종 도착점(가다/오다/도착하다)을 나타내는 격조사 '-에'의 용법을 체득한다.",
    "presentation": {
      "explanation": "격조사 '-에'는 명사 뒤에 붙어 크게 두 가지 핵심 문법 기능을 수행합니다.\n\n1. 정적 존재 및 위치 (Static Location):\n- 사람이나 사물이 어느 장소에 머물러 있거나 존재함을 나타내며, 주로 '있다, 없다, 살다, 많다'와 호응합니다.\n  - \"책상 위에 한국어 교재가 있어요.\" (There is a Korean textbook on the desk.)\n  - \"냉장고 안에 시원한 생수가 없습니다.\" (There is no cold bottled water in the refrigerator.)\n  - \"민수 씨는 지금 서울에 살고 있습니다.\" (Minsu is currently living in Seoul.)\n\n2. 이동 동사의 최종 도착점 (Destination):\n- 이동을 나타내는 동사('가다, 오다, 다니다, 도착하다, 들어가다')와 결합하여 이동의 도달 지점을 나타냅니다.\n  - \"아침마다 지하철을 타고 회사에 가요.\" (I go to the company by subway every morning.)\n  - \"비행기가 인천국제공항에 안전하게 도착했습니다.\" (The airplane arrived safely at Incheon International Airport.)",
      "examples": [
        {
          "target": "저는 매일 아침 8시에 대학교에 갑니다.",
          "reading": "Jeo-neun maeil achim yeodeolpsi-e daehakgyo-e gamnida.",
          "translation": "I go to university at 8 o'clock every morning (Destination '-에')."
        },
        {
          "target": "거실 소파 위에 귀여운 고양이가 자고 있어요.",
          "reading": "Geosil sopa wi-e gwiyeoun goyangi-ga jago isseoyo.",
          "translation": "A cute cat is sleeping on the living room sofa (Static location '-에')."
        },
        {
          "target": "이번 여름휴가에는 부산 해운대에 갈 거예요.",
          "reading": "Ibeon yeoreumhyuga-eneun Busan Haeundae-e gal geoyeyo.",
          "translation": "I will go to Haeundae in Busan this summer vacation."
        },
        {
          "target": "방 안에 넓은 책상과 편안한 침대가 있습니다.",
          "reading": "Bang an-e neolbeun chaeksang-gwa pyeon-anhan chimdae-ga itseumnida.",
          "translation": "There are a wide desk and a comfortable bed in the room."
        }
      ],
      "mnemonics": [
        "가고, 오고, 도착하는 '목적지'엔 '-에'(학교에 가다)! 가만히 머물러 '있는 곳'도 '-에'(집에 있다)!"
      ],
      "culturalNotes": [
        "한국에서는 거주지를 소개할 때 '저는 서울에 살아요' 또는 직장을 말할 때 '저는 IT 회사에 다녀요'처럼 '-에 살다/다니다' 구문을 매우 자주 사용합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'학교(school)'로 이동하여 도달함을 나타내는 가장 올바른 조사는 무엇입니까?",
          "options": [
            "학교에 가요.",
            "학교에서 가요.",
            "학교를 가요."
          ],
          "answerIndex": 0,
          "explanation": "이동 동사 '가다'의 도착점을 나타내는 격조사는 '-에'이므로 '학교에 가요'가 올바릅니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'방 안에 컴퓨터가 있다'를 바르게 나타낸 문장은 어느 것입니까?",
          "options": [
            "방에 컴퓨터가 있어요.",
            "방에서 컴퓨터가 있어요.",
            "방을 컴퓨터가 있어요."
          ],
          "answerIndex": 0,
          "explanation": "사물이 존재하는 정적 위치를 나타내는 서술어 '있다' 앞에는 조사 '-에'를 씁니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'A: 지금 어디에 살아요? B: 저는 _____ 살아요.' 빈칸에 알맞은 조사는?",
          "options": [
            "서울에",
            "서울에서",
            "서울을"
          ],
          "answerIndex": 0,
          "explanation": "'살다'가 거주하는 정적 위치를 나타낼 때는 '서울에 살아요'가 가장 표준적입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'회사에 가요'(I go to work / I go to the company)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "회사에 가요.",
            "회사에 가요"
          ],
          "explanation": "회사(명사) + 에(도착점 조사) + 가요(서술어) = 회사에 가요."
        }
      ]
    }
  },
  "ko-u9-l2": {
    "id": "ko-u9-l2",
    "subject": "korean",
    "unit": 9,
    "lessonNumber": 2,
    "title": "역동적 행위 발생 공간 및 출발점 조사 (-에서)",
    "level": "A2",
    "objective": "구체적인 역동적 행위가 일어나는 발생 장소(Action Location)와 이동의 출발점/출처(Origin from)를 나타내는 격조사 '-에서'의 용법을 체득한다.",
    "presentation": {
      "explanation": "격조사 '-에서'는 명사 뒤에 결합하여 구체적인 행동이 수행되는 장소나 출발점을 지정합니다.\n\n1. 역동적 행위 발생 장소 (Action Location):\n- 주어가 능동적으로 어떤 동작(공부하다, 밥을 먹다, 친구를 만나다, 운동하다, 일하다 등)을 하는 공간을 나타냅니다.\n  - \"도서관에서 한국어 문법을 열심히 공부해요.\" (I study Korean grammar hard in the library.)\n  - \"한식당에서 따뜻한 김치찌개를 먹었어요.\" (I ate warm kimchi stew at a Korean restaurant.)\n  - \"백화점에서 친구의 생일 선물을 샀습니다.\" (I bought a friend's birthday present at the department store.)\n\n2. 출발점 및 출처 (Origin / Source):\n- 동작이나 이동이 시작되는 기점을 나타냅니다 (from).\n  - \"어디에서 왔어요? - 저는 캐나다에서 왔어요.\" (Where are you from? - I am from Canada.)\n  - \"집에서 회사까지 지하철로 30분 걸려요.\" (It takes 30 minutes by subway from home to work.)",
      "examples": [
        {
          "target": "친구와 함께 카페에서 커피를 마시며 이야기를 나눴어요.",
          "reading": "Chingu-wa hamkke kape-eseo keopi-reul masimyeo iyagi-reul nanwosseoyo.",
          "translation": "I had a chat while drinking coffee at the cafe with a friend (Action location '-에서')."
        },
        {
          "target": "어제 오후에 서점에서 새로 나온 베스트셀러 소설을 샀어요.",
          "reading": "Eoje ohu-e seojeom-eseo saero naon beseuteoselleo soseol-eul sasseoyo.",
          "translation": "Yesterday afternoon, I bought a new bestselling novel at the bookstore."
        },
        {
          "target": "헬스장에서 매일 저녁 1시간씩 열심히 운동합니다.",
          "reading": "Helseujang-eseo maeil jeonyeok han siganssik yeolsimhi undonghamnida.",
          "translation": "I exercise hard for 1 hour every evening at the gym."
        },
        {
          "target": "저는 미국 뉴욕에서 온 유학생 마이클입니다.",
          "reading": "Jeo-neun Miguk Nyuyok-eseo on yuhaksaeng Maikeul-imnida.",
          "translation": "I am Michael, an international student from New York, USA (Origin '-에서')."
        }
      ],
      "mnemonics": [
        "먹고, 공부하고, 운동하고, 물건 사는 '행동'의 무대는 무조건 '-에서'!"
      ],
      "culturalNotes": [
        "한국인을 처음 만났을 때 '어디에서 오셨어요?'라고 묻는 것은 고향이나 출신 지역을 묻는 가장 정중하고 자연스러운 표현입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'도서관'에서 '책을 읽는 행동'을 할 때 결합하는 올바른 조사는 무엇입니까?",
          "options": [
            "도서관에서 책을 읽어요.",
            "도서관에 책을 읽어요.",
            "도서관으로 책을 읽어요."
          ],
          "answerIndex": 0,
          "explanation": "책을 읽는 구체적인 동작이 일어나는 장소이므로 '-에서'가 올바릅니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'식당에서 밥을 먹었다'를 바르게 나타낸 문장은 어느 것입니까?",
          "options": [
            "식당에서 점심을 먹었어요.",
            "식당에 점심을 먹었어요.",
            "식당을 점심을 먹었어요."
          ],
          "answerIndex": 0,
          "explanation": "식사라는 역동적 행위가 일어나는 공간이므로 '-에서'를 사용합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'A: 어디_____ 왔어요? B: 저는 호주_____ 왔어요.' 빈칸에 공통으로 알맞은 출처 조사는?",
          "options": [
            "에서",
            "에",
            "으로"
          ],
          "answerIndex": 0,
          "explanation": "출신지나 출발 기점을 나타내는 조사는 '-에서'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'카페에서 만나요'(Let's meet at the cafe)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "카페에서 만나요.",
            "카페에서 만나요"
          ],
          "explanation": "카페(명사) + 에서(장소 조사) + 만나요(만나다의 청유/서술형) = 카페에서 만나요."
        }
      ]
    }
  },
  "ko-u9-l3": {
    "id": "ko-u9-l3",
    "subject": "korean",
    "unit": 9,
    "lessonNumber": 3,
    "title": "정적 도착점 '-에'와 동적 행위 공간 '-에서'의 결정적 문법 대비",
    "level": "A2",
    "objective": "동일한 장소 명사 뒤에서 서술어의 성격(정적 존재/도착점 vs 역동적 동작 수행)에 따라 '-에'와 '-에서'를 정밀하게 구별하여 사용한다.",
    "presentation": {
      "explanation": "한국어 학습자들이 가장 자주 실수하는 '-에'와 '-에서'의 선택 기준은 오직 뒤에 오는 '서술어의 성격'에 달려 있습니다.\n\n1. 핵심 서술어 유형에 따른 분기 규칙:\n- [장소] + 에:\n  - 정적 존재: 있다, 없다, 계시다, 살다, 많다\n    - \"친구가 집에 있어요.\" (Friend is at home.)\n  - 이동의 도착점: 가다, 오다, 다니다, 도착하다, 올라가다\n    - \"지금 학교에 가요.\" (I am going to school.)\n- [장소] + 에서:\n  - 동적 행위 수행: 먹다, 마시다, 공부하다, 일하다, 사다, 운동하다, 만나다\n    - \"집에서 밥을 먹어요.\" (I eat food at home.)\n    - \"학교에서 한국어를 배워요.\" (I learn Korean at school.)\n\n2. 동일 장소 대조 예시 (집 / 학교 / 도서관):\n- 집에 가요 (Go home) vs 집에서 쉬어요 (Rest at home)\n- 학교에 도착했어요 (Arrived at school) vs 학교에서 축구를 했어요 (Played soccer at school)\n- 도서관에 사람이 많아요 (Many people in the library) vs 도서관에서 공부해요 (Study in the library)",
      "examples": [
        {
          "target": "오전에 도서관에 가서 도서관에서 책을 빌렸어요.",
          "reading": "Ojeon-e doseogwan-e gaseo doseogwan-eseo chaek-eul billyeosseoyo.",
          "translation": "I went to the library in the morning and borrowed a book at the library ('-에 가다' vs '-에서 빌리다')."
        },
        {
          "target": "지금 백화점에 가고 있어요. 백화점에서 옷을 살 거예요.",
          "reading": "Jigeum baekhwajeom-e gago isseoyo. Baekhwajeom-eseo ot-eul sal geoyeyo.",
          "translation": "I am going to the department store now. I will buy clothes at the department store."
        },
        {
          "target": "민수 씨는 지금 사무실에 없어요. 밖에서 점심을 먹고 있어요.",
          "reading": "Minsu ssi-neun jigeum samusil-e eopseoyo. Bakkat-eseo jeomsim-eul meokgo isseoyo.",
          "translation": "Minsu is not in the office right now. He is eating lunch outside."
        },
        {
          "target": "공원에 산책하러 가서 벤치에서 음악을 들었습니다.",
          "reading": "Gongwon-e sanchaekhareo gaseo benchi-eseo eumak-eul deureotseumnida.",
          "translation": "I went to the park for a walk and listened to music on the bench."
        }
      ],
      "mnemonics": [
        "목적지로 가면 '-에 가다', 그곳에서 무언가를 하면 '-에서 하다'! 서술어를 보면 답이 보인다!"
      ],
      "culturalNotes": [
        "한국어에서는 '방에 자다'가 아니라 '방에서 자다(동작)'라고 표현하며, '침대에 눕다(착지/도착점)'처럼 동사의 동작 특성에 따라 조사가 엄밀히 나뉩니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "다음 중 조사의 쓰임이 문법적으로 올바른 문장은 어느 것입니까?",
          "options": [
            "식당에서 맛있는 비빔밥을 먹었어요.",
            "식당에 맛있는 비빔밥을 먹었어요.",
            "식당을 맛있는 비빔밥에 먹었어요."
          ],
          "answerIndex": 0,
          "explanation": "'먹다'는 구체적 행위 동사이므로 장소 조사 '-에서'가 결합해야 올바릅니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'A: 지금 어디에 가요? B: 시장_____ 가요. 시장_____ 과일을 살 거예요.' 빈칸에 차례대로 들어갈 조사는?",
          "options": [
            "에, 에서",
            "에서, 에",
            "에, 에"
          ],
          "answerIndex": 0,
          "explanation": "첫 문장은 이동 도착점('시장에 가요'), 두 번째 문장은 구매 행동 장소('시장에서 살 거예요')입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 '-에'와 '-에서'의 구분이 모두 완벽한 복합 문장은 무엇입니까?",
          "options": [
            "주말에 공원에 가서 공원에서 자전거를 탔어요.",
            "주말에서 공원에서 가서 공원에 자전거를 탔어요.",
            "주말에 공원에 가서 공원에 자전거를 탔어요."
          ],
          "answerIndex": 0,
          "explanation": "시간('-에'), 이동 도착점('공원에 가서'), 동작 수행 장소('공원에서 자전거를 탔어요')의 조사가 모두 완벽합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'도서관에서 공부해요'(I study at the library)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "도서관에서 공부해요.",
            "도서관에서 공부해요"
          ],
          "explanation": "도서관(명사) + 에서(행위 장소 조사) + 공부해요(서술어) = 도서관에서 공부해요."
        }
      ]
    }
  },
  "ko-u9-l4": {
    "id": "ko-u9-l4",
    "subject": "korean",
    "unit": 9,
    "lessonNumber": 4,
    "title": "지향 방향 및 경로 표시 조사 (-(으)로)",
    "level": "A2",
    "objective": "받침 유무에 따른 방향 격조사 '-(으)로'의 결합 규칙(모음/ㄹ 받침 + 로, 자음 받침 + 으로)과 단순 도착점(-에)과의 방향성 차이를 이해한다.",
    "presentation": {
      "explanation": "격조사 '-(으)로'는 명사 뒤에 붙어 이동의 지향 방향(Direction)이나 이동 경로(Path)를 나타냅니다.\n\n1. 형태 결합 규칙:\n- 모음 종결 명사 or 'ㄹ' 받침 명사 + 로:\n  - 오른쪽 → 오른쪽으로 (to the right - 받침 ㄱ이므로 자음규칙)\n  - 위 → 위로 (upward - 모음)\n  - 아래 → 아래로 (downward - 모음)\n  - 서울 → 서울로 (towards Seoul - ㄹ 받침)\n  - 교실 → 교실로 (towards the classroom - ㄹ 받침)\n- 'ㄹ'을 제외한 자음 종결 명사 (받침 있음) + 으로:\n  - 앞 → 앞으로 (forward)\n  - 뒤 → 뒤로 (backward)\n  - 옆 → 옆으로 (to the side)\n  - 밖 → 밖으로 (outside)\n  - 집 → 집으로 (towards home)\n  - 오른쪽 → 오른쪽으로 (to the right)\n\n2. '-에'와 '-(으)로'의 뉘앙스 차이:\n- '-에': 고정된 최종 목적지/도착점(Destination)에 초점 (예: 학교에 도착하다).\n- '-(으)로': 이동해 가는 방향이나 진행 경로(Heading/Direction)에 초점 (예: 서울 방향으로 달리다).",
      "examples": [
        {
          "target": "사거리에서 오른쪽으로 돌아가세요.",
          "reading": "Sageori-eseo oreunjjok-euro doragaseyo.",
          "translation": "Please turn to the right at the intersection (Direction '-(으)로')."
        },
        {
          "target": "엘리베이터를 타고 5층 위로 올라갔습니다.",
          "reading": "Ellibeiteo-reul tago ocheung wi-ro ollagatseumnida.",
          "translation": "I took the elevator and went up to the 5th floor."
        },
        {
          "target": "수업이 끝나고 모두 집으로 돌아갔어요.",
          "reading": "Sueop-i kkeunnago modu jib-euro doragasseoyo.",
          "translation": "After class finished, everyone returned home."
        },
        {
          "target": "이번 주말에 부산으로 여행을 떠날 예정입니다.",
          "reading": "Ibeon jumal-e Busan-euro yeohaeng-eul tteonal yeojeong-imnida.",
          "translation": "I plan to leave on a trip toward Busan this weekend."
        }
      ],
      "mnemonics": [
        "모음과 ㄹ 받침엔 '-로'(위로, 서울로)! 그 밖의 자음 받침엔 '-으로'(앞으로, 집으로)!"
      ],
      "culturalNotes": [
        "한국의 대중교통 안내방송에서는 '이번 역은 강남, 강남역입니다. 내리실 문은 오른쪽입니다(또는 오른쪽으로 내리실 수 있습니다)'라는 방향 안내 표현이 쓰입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'오른쪽(right side)' 방향으로 이동하라고 안내할 때 올바른 결합 형태는 무엇입니까?",
          "options": [
            "오른쪽으로",
            "오른쪽로",
            "오른쪽에로"
          ],
          "answerIndex": 0,
          "explanation": "'오른쪽'은 'ㄱ' 받침(ㄹ 제외 자음)으로 끝나므로 '-으로'가 결합하여 '오른쪽으로'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'서울(Seoul - ㄹ 받침)'을 지향 방향으로 나타낼 때 올바른 형태는 어느 것입니까?",
          "options": [
            "서울로",
            "서울으로",
            "서울에게"
          ],
          "answerIndex": 0,
          "explanation": "'ㄹ' 받침 뒤에는 매개모음 '으'가 들어가지 않고 바로 '-로'가 결합하므로 '서울로'가 올바릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'앞(front)' 방향으로 나아가라고 말할 때 알맞은 조사는?",
          "options": [
            "앞으로 가세요.",
            "앞로 가세요.",
            "앞에서 가세요."
          ],
          "answerIndex": 0,
          "explanation": "'앞'은 ㅍ 받침(자음)이 있으므로 '-으로'가 결합하여 '앞으로'가 됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'오른쪽으로 가세요'(Please go to the right)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "오른쪽으로 가세요.",
            "오른쪽으로 가세요"
          ],
          "explanation": "오른쪽(명사) + 으로(방향 조사) + 가세요(가다의 정중 명령형) = 오른쪽으로 가세요."
        }
      ]
    }
  },
  "ko-u9-l5": {
    "id": "ko-u9-l5",
    "subject": "korean",
    "unit": 9,
    "lessonNumber": 5,
    "title": "길 찾기 및 위치 안내 실전 대화 구성",
    "level": "A2",
    "objective": "위치 명사(앞, 뒤, 옆, 맞은편, 사이)와 방향/장소 조사를 결합하여 길을 묻고 위치를 상세히 안내하는 유창한 실전 담화를 구사한다.",
    "presentation": {
      "explanation": "거리에서 목적지를 묻고 길을 안내할 때는 위치 명사(Spatial Nouns)와 방향/장소 조사를 유기적으로 결합합니다.\n\n1. 필수 위치 명사 목록:\n- 앞 (in front of) ↔ 뒤 (behind)\n- 옆 (beside/next to)\n- 안 (inside) ↔ 밖 (outside)\n- 위 (on/above) ↔ 아래/밑 (under/below)\n- 사이 (between: A와 B 사이)\n- 맞은편 / 건너편 (across from / opposite side)\n\n2. 실전 길 찾기 문답 대화 모델:\n- A: 실례합니다. 이 근처에 약국이 어디에 있어요?\n- B: 저기 사거리에서 왼쪽으로 돌아가세요. 편의점 옆에 약국이 있어요.\n- A: 지하철역에서 얼마나 걸려요?\n- B: 걸어서 3분 정도 걸려요. 건물 1층에 바로 보여요.\n- A: 친절하게 가르쳐 주셔서 정말 감사합니다!\n- B: 아니에요. 조심히 찾아가세요.",
      "examples": [
        {
          "target": "A: 은행이 어디에 있어요? B: 우체국 맞은편에 있어요.",
          "reading": "A: Eunhaeng-i eodi-e isseoyo? B: Ucheguk majeunpyeon-e isseoyo.",
          "translation": "A: Where is the bank? B: It is across from the post office."
        },
        {
          "target": "저기 신호등에서 오른쪽으로 돌아가시면 병원이 나옵니다.",
          "reading": "Jeogi sinhodeung-eseo oreunjjok-euro doragasimyeon byeongwon-i naomnida.",
          "translation": "If you turn right at that traffic light, the hospital will appear."
        },
        {
          "target": "서점과 카페 사이에 작은 꽃집이 하나 있어요.",
          "reading": "Seojeom-gwa kape sai-e jageun kkotjib-i hana isseoyo.",
          "translation": "There is a small flower shop between the bookstore and the cafe."
        },
        {
          "target": "지하철역 3번 출구 앞으로 나오시면 바로 찾을 수 있습니다.",
          "reading": "Jihacheol-yeok sambeon chulgu ap-euro naosimyeon baro chajeul su itseumnida.",
          "translation": "If you come out in front of Exit 3 of the subway station, you can find it immediately."
        }
      ],
      "mnemonics": [
        "'어디에 있어요?'로 묻고, '방향(-으로) + 위치 명사(-에)'로 친절하게 안내하자!"
      ],
      "culturalNotes": [
        "한국의 도심에서는 길을 물을 때 '실례합니다(Excuse me)' 또는 '말씀 좀 묻겠습니다(May I ask a question?)'로 공손하게 운을 떼는 것이 좋은 매너입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "건물 건너편에 위치함을 나타낼 때 가장 알맞은 위치 명사는 무엇입니까?",
          "options": [
            "맞은편 (건너편)",
            "옆",
            "사이"
          ],
          "answerIndex": 0,
          "explanation": "길이나 공간 건너편을 가리키는 위치 명사는 '맞은편 / 건너편'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'A와 B 사이에 있다'를 바르게 표현한 문장은 어느 것입니까?",
          "options": [
            "은행과 약국 사이에 카페가 있어요.",
            "은행과 약국 위에 카페가 있어요.",
            "은행과 약국 뒤로 카페가 있어요."
          ],
          "answerIndex": 0,
          "explanation": "두 대상의 중간 위치는 '사이에'를 사용하므로 '은행과 약국 사이에'가 정확합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "길 안내 대화 중 문맥과 조사의 사용이 가장 완벽한 것은 무엇입니까?",
          "options": [
            "A: 약국이 어디에 있어요? B: 사거리에서 왼쪽으로 가세요. 은행 옆에 있어요.",
            "A: 약국이 어디에서 있어요? B: 사거리에 왼쪽에서 가세요. 은행을 있어요.",
            "A: 약국을 어디로 있어요? B: 사거리로 왼쪽으로 가요. 은행에서 있어요."
          ],
          "answerIndex": 0,
          "explanation": "위치 질문('어디에 있어요?'), 방향 지시('왼쪽으로 가세요'), 위치 답변('은행 옆에 있어요')이 완벽합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'은행 옆에 있어요'(It is next to the bank)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "은행 옆에 있어요.",
            "은행 옆에 있어요"
          ],
          "explanation": "은행(명사) + 옆에(위치 명사 + 조사) + 있어요(존재 서술어) = 은행 옆에 있어요."
        }
      ]
    }
  },
  "ko-u10-l1": {
    "id": "ko-u10-l1",
    "subject": "korean",
    "unit": 10,
    "lessonNumber": 1,
    "title": "능력 및 가능성 긍정 어미 (-(으)ㄹ 수 있다)",
    "level": "A2",
    "objective": "주어의 내적 능력 또는 외적 상황의 가능성을 나타내는 '-(으)ㄹ 수 있다'의 형태 결합 규칙(모음 어간 + -ㄹ 수 있다, 자음 어간 + -을 수 있다, ㄹ 받침 + 수 있다)을 체득한다.",
    "presentation": {
      "explanation": "동사 뒤에 결합하는 '-(으)ㄹ 수 있다'는 주어가 어떤 행위를 할 수 있는 '능력(Ability)'이나 그렇게 할 수 있는 '상황적 가능성(Possibility)'을 나타냅니다.\n\n1. 형태 결합 규칙:\n- 모음 종결 어간 (받침 없음) + -ㄹ 수 있다:\n  - 가다 → 갈 수 있어요 (can go)\n  - 보다 → 볼 수 있어요 (can see)\n  - 하다 → 한국어로 대화할 수 있어요 (can converse in Korean)\n  - 수영하다 → 수영할 수 있어요 (can swim)\n- 자음 종결 어간 (받침 있음) + -을 수 있다:\n  - 먹다 → 먹을 수 있어요 (can eat)\n  - 읽다 → 읽을 수 있어요 (can read)\n  - 입다 → 입을 수 있어요 (can wear)\n  - 찾다 → 찾을 수 있어요 (can find)\n- 'ㄹ' 받침 종결 어간 + 수 있다 (ㄹ 탈락 없음):\n  - 만들다 → 만들 수 있어요 (can make)\n  - 살다 → 살 수 있어요 (can live)\n  - 열다 → 열 수 있어요 (can open)\n\n2. 두 가지 핵심 의미 범주:\n- 주어의 고유한 능력 (Internal Ability): \"저는 한글을 읽을 수 있어요.\"\n- 외적 상황의 가능성 (External Possibility): \"오늘 저녁에 시간이 있어서 만날 수 있어요.\"",
      "examples": [
        {
          "target": "저는 한국어로 간단한 일상 대화를 할 수 있습니다.",
          "reading": "Jeo-neun hangug-eo-ro gandanhan ilsang daehwa-reul hal su itseumnida.",
          "translation": "I can have simple daily conversations in Korean (Ability)."
        },
        {
          "target": "매운 음식을 잘 먹어서 김치찌개도 맛있게 먹을 수 있어요.",
          "reading": "Maeun eumsik-eul jal meog-eoseo gimchijjigae-do masitge meog-eul su isseoyo.",
          "translation": "I eat spicy food well, so I can eat kimchi stew deliciously too."
        },
        {
          "target": "부모님을 위해 특별한 생일 케이크를 직접 만들 수 있어요.",
          "reading": "Bumonim-eul wihae teukbyeolhan saeng-il keikeu-reul jikjeop mandeul su isseoyo.",
          "translation": "I can make a special birthday cake myself for my parents."
        },
        {
          "target": "내일 오후에는 수업이 없어서 친구를 만날 수 있습니다.",
          "reading": "Naeil ohu-eneun sueop-i eopseoseo chingu-reul mannal su itseumnida.",
          "translation": "Tomorrow afternoon I have no classes, so I can meet a friend (Possibility)."
        }
      ],
      "mnemonics": [
        "받침 없으면 '-ㄹ 수 있다'(갈 수 있다), 받침 있으면 '-을 수 있다'(먹을 수 있다), ㄹ 받침은 그대로 '만들 수 있다'!"
      ],
      "culturalNotes": [
        "한국인에게 '한국어 할 수 있어요?'라고 물었을 때, 실제로는 매우 유창함에도 '조금밖에 못해요 / 조금 할 수 있어요'라고 겸손하게 답하는 것이 전형적인 미덕입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '가다(to go)'의 올바른 능력/가능 긍정형은 무엇입니까?",
          "options": [
            "갈 수 있어요",
            "가을 수 있어요",
            "가 수 있어요"
          ],
          "answerIndex": 0,
          "explanation": "'가다'는 받침이 없는 모음 종결 어간이므로 '-ㄹ 수 있다'가 결합하여 '갈 수 있어요'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "동사 '읽다(to read - 자음 받침)'의 올바른 가능형은 어느 것입니까?",
          "options": [
            "읽을 수 있어요",
            "읽ㄹ 수 있어요",
            "읽 수 있어요"
          ],
          "answerIndex": 0,
          "explanation": "'읽다'는 받침이 있으므로 '-을 수 있다'와 결합하여 '읽을 수 있어요'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'한국 요리를 혼자서 _____ (I can make Korean food alone).' 빈칸에 알맞은 '만들다'의 가능형은?",
          "options": [
            "만들 수 있어요",
            "만들을 수 있어요",
            "만들ㄹ 수 있어요"
          ],
          "answerIndex": 0,
          "explanation": "'만들다'는 어간 끝이 'ㄹ' 받침이므로 그대로 '수 있다'가 결합하여 '만들 수 있어요'가 됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'한국어를 할 수 있어요'(I can speak Korean)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "한국어를 할 수 있어요.",
            "한국어를 할 수 있어요"
          ],
          "explanation": "한국어를(목적어) + 할 수 있어요(하다의 가능형) = 한국어를 할 수 있어요."
        }
      ]
    }
  },
  "ko-u10-l2": {
    "id": "ko-u10-l2",
    "subject": "korean",
    "unit": 10,
    "lessonNumber": 2,
    "title": "능력 및 가능성 부정 어미 (-(으)ㄹ 수 없다)",
    "level": "A2",
    "objective": "내적 능력의 한계나 외적 상황의 불가피성을 나타내는 장문 부정 어미 '-(으)ㄹ 수 없다'의 용법과 정중한 거절 표현을 체득한다.",
    "presentation": {
      "explanation": "동사 어간 뒤에 '-(으)ㄹ 수 없다'를 결합하면 어떤 행위를 할 능력이나 여건이 되지 않음을 나타냅니다 (Cannot do / Unable to do).\n\n1. 형태 결합 규칙:\n- '있다' 자리에 부정 형용사 '없다'를 결합합니다.\n  - 가다 → 갈 수 없어요 / 갈 수 없습니다 (cannot go)\n  - 먹다 → 먹을 수 없어요 / 먹을 수 없습니다 (cannot eat)\n  - 오다 → 올 수 없어요 (cannot come)\n  - 수영하다 → 수영할 수 없어요 (cannot swim)\n  - 만들다 → 만들 수 없어요 (cannot make)\n\n2. 공손하고 정중한 거절(Polite Refusal) 화법:\n한국의 사회생활 및 비즈니스 환경에서 제안이나 초대를 정중하게 사절할 때 가장 널리 쓰이는 완곡한 표현입니다.\n- \"죄송합니다. 오늘 저녁에는 선약이 있어서 모임에 갈 수 없습니다.\"\n- \"지금은 회의 중이라서 전화를 받을 수 없어요.\"",
      "examples": [
        {
          "target": "죄송하지만 다음 주말에는 바빠서 모임에 갈 수 없어요.",
          "reading": "Joesonghajiman daeum jumal-eneun bappaseo moim-e gal su eopseoyo.",
          "translation": "I am sorry, but I am busy next weekend so I cannot go to the gathering."
        },
        {
          "target": "매운 음식을 전혀 못 먹어서 떡볶이를 먹을 수 없습니다.",
          "reading": "Maeun eumsik-eul jeonhyeo mot meog-eoseo tteokbokki-reul meog-eul su eopseumnida.",
          "translation": "I cannot eat spicy food at all, so I cannot eat tteokbokki."
        },
        {
          "target": "운전면허가 없어서 자동차를 운전할 수 없어요.",
          "reading": "Unjeonmyeonheo-ga eopseoseo jadongcha-reul unjeonhal su eopseoyo.",
          "translation": "I do not have a driver's license, so I cannot drive a car."
        },
        {
          "target": "지금은 도서관 열람실 안이라서 큰 소리로 통화할 수 없습니다.",
          "reading": "Jigeum-eun doseogwan yeollamsil an-iraseo keun sori-ro tonghwahal su eopseumnida.",
          "translation": "Because I am inside the library reading room right now, I cannot talk loudly on the phone."
        }
      ],
      "mnemonics": [
        "할 수 없을 땐 '있다' 대신 '없다'! '갈 수 없다, 먹을 수 없다'로 정중하게 거절하자!"
      ],
      "culturalNotes": [
        "한국에서는 거절할 때 단칼에 '안 해요'라고 하기보다 '죄송하지만 ~해서 할 수 없어요'처럼 이유와 함께 '-(으)ㄹ 수 없다'를 사용하는 것이 상대방의 체면을 배려하는 표준적인 언어 예절입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '가다(to go)'의 능력/상황 부정형으로 가장 올바른 것은 무엇입니까?",
          "options": [
            "갈 수 없어요",
            "가을 수 없어요",
            "가 수 없어요"
          ],
          "answerIndex": 0,
          "explanation": "'가다'에 부정 어미 '-ㄹ 수 없다'가 결합하여 '갈 수 없어요'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'회의 중이라서 전화를 받지 못한다'를 정중하게 표현한 문장은 어느 것입니까?",
          "options": [
            "회의 중이라서 전화를 받을 수 없어요.",
            "회의 중이라서 전화를 받ㄹ 수 없어요.",
            "회의 중이라서 전화를 받아 수 없어요."
          ],
          "answerIndex": 0,
          "explanation": "'받다'는 자음 받침이 있으므로 '-을 수 없다'와 결합하여 '받을 수 없어요'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 정중한 거절 표현으로 문법과 화용이 가장 자연스러운 문장은?",
          "options": [
            "죄송하지만 내일은 일정이 있어서 갈 수 없습니다.",
            "죄송하지만 내일은 일정이 있어서 갈 수 있습니다.",
            "죄송하지만 내일은 일정이 있어서 가지 수 없어요."
          ],
          "answerIndex": 0,
          "explanation": "사과 표현('죄송하지만')과 이유('일정이 있어서'), 정중한 불가능 서술('갈 수 없습니다')이 완벽합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'갈 수 없어요'(I cannot go)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "갈 수 없어요.",
            "갈 수 없어요"
          ],
          "explanation": "가다 + ㄹ 수 없다 + 어요 = 갈 수 없어요."
        }
      ]
    }
  },
  "ko-u10-l3": {
    "id": "ko-u10-l3",
    "subject": "korean",
    "unit": 10,
    "lessonNumber": 3,
    "title": "단문 불가능 부사 '못'과 장문 가능 부정 '-(으)ㄹ 수 없다'의 화용적 대비",
    "level": "A2",
    "objective": "일상 구어에서 직관적으로 쓰는 단문 부정 부사 '못'과 공식적/완곡한 장문 부정 '-(으)ㄹ 수 없다'의 통사적 위치와 화용론적 뉘앙스 차이를 구분한다.",
    "presentation": {
      "explanation": "한국어에서 능력이 없거나 상황상 할 수 없음을 나타낼 때 단문 부정 부사 '못'과 장문 부정 어미 '-(으)ㄹ 수 없다'를 모두 사용할 수 있습니다.\n\n1. 통사적 위치와 결합 방식:\n- 단문 부정 부사 '못':\n  - 일반 동사 바로 앞에 위치: \"오늘 학교에 못 가요.\", \"김치를 못 먹어요.\"\n  - '명사+하다' 동사는 명사 뒤/하다 앞에 삽입: \"수영을 못해요 (O) / *못 수영해요 (X)\", \"운전을 못해요 (O) / *못 운전해요 (X)\"\n  - 형용사에는 결합 불가 (*오늘 못 춥다 X → 안 춥다 O)\n- 장문 부정 어미 '-(으)ㄹ 수 없다':\n  - 동사 어간 끝에 결합: \"갈 수 없어요\", \"수영할 수 없어요\"\n\n2. 화용론적 스타일과 어감 대비:\n- '못 + 동사': 일상 구어체에서 빠르고 간결하게 자신의 상황을 직설적으로 전달할 때 주로 쓰임.\n- '-(으)ㄹ 수 없다': 공식적인 담화, 공손한 거절, 글말(문어체)에서 정중하고 완곡한 뉘앙스를 부여함.",
      "examples": [
        {
          "target": "감기에 심하게 걸려서 오늘 수업에 못 갔어요.",
          "reading": "Gamgi-e simhage geollyeoseo oneul sueop-e mot gasseoyo.",
          "translation": "I caught a bad cold, so I could not go to class today (Short negative '못')."
        },
        {
          "target": "저는 수영을 전혀 못해서 바다에 들어갈 수 없어요.",
          "reading": "Jeo-neun suyeong-eul jeonhyeo mothaeseo bada-e deureogal su eopseoyo.",
          "translation": "I cannot swim at all, so I cannot enter the sea ('수영을 못하다' + '-ㄹ 수 없다')."
        },
        {
          "target": "어제는 야근 때문에 친구와의 약속을 지키지 못했습니다.",
          "reading": "Eoje-neun yageun ttaemun-e chingu-wa-ui yaksok-eul jikiji mothaetseumnida.",
          "translation": "Yesterday, because of overtime work, I could not keep the promise with my friend."
        },
        {
          "target": "아침을 못 먹어서 지금 배가 너무 고파요.",
          "reading": "Achim-eul mot meog-eoseo jigeum bae-ga neomu gopayo.",
          "translation": "I couldn't eat breakfast, so I am very hungry right now."
        }
      ],
      "mnemonics": [
        "구어에서 빠를 땐 '못 가요, 밥 못 먹어요'! '하다' 동사는 가운데 쏙 '공부 못해요'!"
      ],
      "culturalNotes": [
        "'안 해요(의지적 거부: I don't want to)'와 '못 해요(능력/상황적 불가능: I can't)'를 혼동하여 쓰면 한국인에게 큰 오해를 불러일으킬 수 있으므로 명확히 구별해야 합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'운전하다(to drive)'를 부정 부사 '못'을 사용하여 바르게 표현한 것은 무엇입니까?",
          "options": [
            "운전을 못해요.",
            "못 운전해요.",
            "운전이 못해요."
          ],
          "answerIndex": 0,
          "explanation": "'명사+하다' 구조의 동사는 '못'이 '하다' 바로 앞에 들어가 '운전을 못해요'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "다음 중 '못'의 결합이 문법적으로 잘못된 비문은 어느 것입니까?",
          "options": [
            "오늘 날씨가 못 추워요.",
            "오늘 학교에 못 가요.",
            "김치를 매워서 못 먹어요."
          ],
          "answerIndex": 0,
          "explanation": "'못'은 형용사(춥다)와 결합할 수 없으며 단순 부정 부사인 '안'을 써야 합니다 ('안 추워요')."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'시간이 부족해서 점심을 _____ (I couldn't eat lunch).' 빈칸에 알맞은 형태는?",
          "options": [
            "못 먹었어요",
            "안 먹었어요",
            "못 춥었어요"
          ],
          "answerIndex": 0,
          "explanation": "시간 부족이라는 외적 여건으로 인해 먹지 못한 상황이므로 능력/상황 부정인 '못 먹었어요'가 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'오늘 학교에 못 가요'(I cannot go to school today)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "오늘 학교에 못 가요.",
            "오늘 학교에 못 가요"
          ],
          "explanation": "오늘(시간) + 학교에(도착점) + 못(부정 부사) + 가요(서술어) = 오늘 학교에 못 가요."
        }
      ]
    }
  },
  "ko-u10-l4": {
    "id": "ko-u10-l4",
    "subject": "korean",
    "unit": 10,
    "lessonNumber": 4,
    "title": "방법 및 기능 습득 표현 (-(으)ㄹ 줄 알다 / 모르다)",
    "level": "A2",
    "objective": "어떤 기술, 기예, 스포츠 등의 실행 방법(know-how)을 배워서 알고 있는지의 여부를 나타내는 '-(으)ㄹ 줄 알다/모르다'의 문법을 마스터한다.",
    "presentation": {
      "explanation": "관형사형 어미 '-(으)ㄹ' 뒤에 의존명사 '줄'과 동사 '알다/모르다'가 결합한 구조는 어떤 동작을 수행하는 '방법(How to do)'이나 '기술적 요령'을 습득했는지를 나타냅니다.\n\n1. 형태 결합 규칙:\n- 모음 어간 / 'ㄹ' 받침 어간 + -ㄹ 줄 알다/모르다:\n  - 운전하다 → 운전할 줄 알아요 (I know how to drive)\n  - 수영하다 → 수영할 줄 몰라요 (I don't know how to swim)\n  - 만들다 → 만들 줄 알아요 (I know how to make)\n- 자음 어간 (받침 있음) + -을 줄 알다/모르다:\n  - 읽다 → 한자를 읽을 줄 알아요 (I know how to read Hanja)\n  - 치다 → 피아노를 칠 줄 알아요 (I know how to play the piano)\n\n2. '-(으)ㄹ 수 있다'와의 뉘앙스 차이:\n- '-(으)ㄹ 줄 알다': 오직 '방법을 배워서 할 수 있음(Know-how / Skill)'에 초점.\n- '-(으)ㄹ 수 있다': 기술적 능력뿐 아니라 '오늘 시간이 있어서 할 수 있다' 같은 외적 여건과 가능성까지 포괄함.",
      "examples": [
        {
          "target": "저는 어렸을 때 태권도를 배워서 태권도를 할 줄 압니다.",
          "reading": "Jeo-neun eoryeosseul ttae taegwondo-reul baewoseo taegwondo-reul hal jul amnida.",
          "translation": "I learned Taekwondo when I was young, so I know how to do Taekwondo ('-ㄹ 줄 알다')."
        },
        {
          "target": "자동차 운전면허가 있어서 운전할 줄 알아요.",
          "reading": "Jadongcha unjeonmyeonheo-ga isseoseo unjeonhal jul arayo.",
          "translation": "I have a driver's license, so I know how to drive."
        },
        {
          "target": "젓가락을 아직 잘 쓸 줄 몰라서 포크를 사용해요.",
          "reading": "Jeotgarak-eul ajik jal sseul jul mollaseo pokeu-reul sayonghaeyo.",
          "translation": "I don't know how to use chopsticks well yet, so I use a fork ('-ㄹ 줄 모르다')."
        },
        {
          "target": "어머니께 한국 전통 된장찌개 끓이는 법을 배워서 끓일 줄 알아요.",
          "reading": "Eomeoni-kke hanguk jeontong doenjangjjigae kkeurhineun beob-eul baewoseo kkeurhil jul arayo.",
          "translation": "I learned how to cook traditional Korean doenjang stew from my mother, so I know how to boil it."
        }
      ],
      "mnemonics": [
        "방법을 알면 '-ㄹ 줄 알다', 방법을 모르면 '-ㄹ 줄 모르다'! 기술과 요령의 '줄'!"
      ],
      "culturalNotes": [
        "한국 식당에 외국인 친구와 함께 갔을 때 '젓가락 쓸 줄 알아요?'라고 친절하게 물어보는 것은 매우 흔하고 다정한 배려의 대화입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "피아노 연주 방법을 알고 있음을 나타내는 가장 올바른 표현은 무엇입니까?",
          "options": [
            "피아노를 칠 줄 알아요.",
            "피아노를 치을 줄 알아요.",
            "피아노를 쳐 줄 알아요."
          ],
          "answerIndex": 0,
          "explanation": "'치다'는 모음 종결 어간이므로 '-ㄹ 줄 알다'가 결합하여 '칠 줄 알아요'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'스키를 타는 방법을 모른다'를 바르게 표현한 문장은 어느 것입니까?",
          "options": [
            "스키를 탈 줄 몰라요.",
            "스키를 타을 줄 몰라요.",
            "스키를 탈 줄 알아요."
          ],
          "answerIndex": 0,
          "explanation": "방법을 모를 때는 '모르다'를 결합하여 '탈 줄 몰라요'가 올바릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'A: 한국 요리 할 줄 알아요? B: 네, 불고기를 _____.' 빈칸에 알맞은 형태는?",
          "options": [
            "만들 줄 알아요",
            "만들을 줄 알아요",
            "만들 줄 몰라요"
          ],
          "answerIndex": 0,
          "explanation": "'네'로 긍정 답변을 했으며 '만들다'는 ㄹ 받침이므로 '만들 줄 알아요'가 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'운전할 줄 알아요'(I know how to drive)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "운전할 줄 알아요.",
            "운전할 줄 알아요"
          ],
          "explanation": "운전하다 + ㄹ 줄 알다 + 아요 = 운전할 줄 알아요."
        }
      ]
    }
  },
  "ko-u10-l5": {
    "id": "ko-u10-l5",
    "subject": "korean",
    "unit": 10,
    "lessonNumber": 5,
    "title": "외국어 구사 및 취미 능력 교환 실전 담화 구성",
    "level": "A2",
    "objective": "'한국어 할 수 있어요?', '스키 탈 줄 알아요?' 등 상대방의 특기와 능력을 묻고 자신의 역량을 겸손하고 정확하게 표현하는 담화를 완성한다.",
    "presentation": {
      "explanation": "취미, 스포츠, 외국어 능력에 대해 대화할 때는 능력 표현('-(으)ㄹ 수 있다/없다')과 기능 표현('-(으)ㄹ 줄 알다/모르다')을 다채롭게 활용합니다.\n\n1. 필수 능력 문답 모델:\n- A: 준호 씨는 외국어를 몇 개나 할 수 있어요?\n- B: 저는 영어와 한국어를 할 수 있어요. 그리고 일본어는 조금 알아들을 수 있어요.\n- A: 와, 대단하네요! 혹시 악기도 연주할 줄 알아요?\n- B: 네, 통기타를 조금 칠 줄 알아요. 지은 씨는요?\n- A: 저는 악기는 전혀 못 다루지만, 스노보드는 정말 잘 탈 수 있어요!\n\n2. 겸손과 능력의 정도를 나타내는 부사:\n- 조금 (a little): \"한국어를 조금 할 수 있어요.\"\n- 잘 (well): \"수영을 아주 잘해요.\"\n- 전혀 + 부정 (not at all): \"매운 음식을 전혀 못 먹어요.\"\n- 아직 (not yet): \"아직 서툴러서 잘 못해요.\"",
      "examples": [
        {
          "target": "A: 한국어 신문을 읽을 수 있어요? B: 아직 한자를 몰라서 신문은 읽을 수 없어요.",
          "reading": "A: Hangug-eo sinmun-eul ilgeul su isseoyo? B: Ajik hanja-reul mollaseo sinmun-eun ilgeul su eopseoyo.",
          "translation": "A: Can you read Korean newspapers? B: I don't know hanja yet, so I cannot read newspapers."
        },
        {
          "target": "저는 스페인어를 조금 할 줄 알지만 유창하게 하지는 못합니다.",
          "reading": "Jeo-neun Seupein-eo-reul jogeum hal jul aljiman yuchanghage hajineun mothamnida.",
          "translation": "I know how to speak a little Spanish, but I cannot speak fluently."
        },
        {
          "target": "겨울에 친구들과 함께 스키장에 가서 스키를 탈 수 있어요.",
          "reading": "Gyeoul-e chingudeul-gwa hamkke seukijang-e gaseo seuki-reul tal su isseoyo.",
          "translation": "In winter, I can go to the ski resort with friends and ski."
        },
        {
          "target": "한국 요리 중에서 김치볶음밥을 아주 맛있게 만들 수 있습니다.",
          "reading": "Hanguk yori jung-eseo gimchibokkeumbap-eul aju masitge mandeul su itseumnida.",
          "translation": "Among Korean dishes, I can make kimchi fried rice very deliciously."
        }
      ],
      "mnemonics": [
        "자랑하지 않고 '조금 할 수 있어요'로 겸손하게, 배운 기술은 '-ㄹ 줄 알아요'로 당당하게!"
      ],
      "culturalNotes": [
        "한국에서는 재능을 칭찬받았을 때 '아니에요, 아직 많이 부족합니다 / 배울 게 많아요'라고 답하는 것이 겸양의 미덕으로 높이 평가받습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'외국어를 조금 할 수 있다'고 겸손하게 답할 때 가장 자연스러운 문장은 무엇입니까?",
          "options": [
            "한국어를 조금 할 수 있어요.",
            "한국어를 전혀 할 수 있어요.",
            "한국어를 못 할 수 있어요."
          ],
          "answerIndex": 0,
          "explanation": "부사 '조금'과 가능 어미 '할 수 있어요'가 결합한 '조금 할 수 있어요'가 가장 표준적입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'악기를 전혀 연주하지 못한다'를 바르게 표현한 문장은 어느 것입니까?",
          "options": [
            "기타를 전혀 칠 줄 몰라요.",
            "기타를 전혀 칠 줄 알아요.",
            "기타를 조금 칠 줄 몰라요."
          ],
          "answerIndex": 0,
          "explanation": "부사 '전혀'는 부정 표현인 '칠 줄 몰라요'와 호응합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "능력 문답 대화 중 문맥과 문법이 가장 완벽한 것은 무엇입니까?",
          "options": [
            "A: 수영할 줄 알아요? B: 네, 어렸을 때 배워서 수영할 수 있어요.",
            "A: 수영할 줄 알아요? B: 네, 수영을 전혀 못해요.",
            "A: 수영할 줄 알아요? B: 아니요, 수영을 아주 잘해요."
          ],
          "answerIndex": 0,
          "explanation": "수영 기술 습득 여부를 묻고 긍정적으로 답한 첫 번째 대화가 완벽합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'스키를 탈 줄 알아요'(I know how to ski)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "스키를 탈 줄 알아요.",
            "스키를 탈 줄 알아요"
          ],
          "explanation": "스키를(목적어) + 탈 줄 알아요(타다 + ㄹ 줄 알다) = 스키를 탈 줄 알아요."
        }
      ]
    }
  },
  "ko-u11-l1": {
    "id": "ko-u11-l1",
    "subject": "korean",
    "unit": 11,
    "lessonNumber": 1,
    "title": "필수 당위성과 당위적 의무 어미 (-아/어야 하다 / 되다)",
    "level": "B1",
    "objective": "어떤 행위가 필연적 의무이자 당위임을 나타내는 '-아/어야 하다 / 되다'의 모음 조화 결합 규칙을 완벽히 체득한다.",
    "presentation": {
      "explanation": "한국어에서 주어가 반드시 완수해야 하는 의무(Obligation)나 상황적 당위성(Necessity)을 나타낼 때는 동사 어간 뒤에 '-아/어야 하다' 또는 '-아/어야 되다'를 결합합니다 (Must / Have to).\n\n1. 형태 결합 규칙 (모음 조화):\n- 양성 모음 (ㅏ, ㅗ) 어간 + -아야 하다/되다:\n  - 가다 → 가야 해요 / 가야 돼요 (must go)\n  - 보다 → 봐야 해요 / 봐야 돼요 (must watch/see)\n  - 받다 → 받아야 해요 (must receive)\n  - 닫다 → 닫아야 해요 (must close)\n- 음성 모음 (ㅓ, ㅜ, ㅡ, ㅣ 등) 어간 + -어야 하다/되다:\n  - 먹다 → 먹어야 해요 / 먹어야 돼요 (must eat)\n  - 읽다 → 읽어야 해요 (must read)\n  - 쓰다 → 써야 해요 (must write/use)\n  - 지키다 → 지켜야 해요 (must keep/obey)\n- '하다' 동사 → 해야 하다/되다:\n  - 공부하다 → 공부해야 해요 (must study)\n  - 제출하다 → 제출해야 해요 (must submit)\n\n2. '-아/어야 하다' vs '-아/어야 되다':\n- '-아/어야 하다': 공적인 발표, 규정, 문어체에서 규범적 당위성을 강조할 때 쓰임.\n- '-아/어야 되다': 일상 구어체 대화에서 부드럽고 자연스럽게 의무를 전달할 때 널리 쓰임.",
      "examples": [
        {
          "target": "내일 아침 일찍 중요한 회의가 있어서 일찍 일어나야 해요.",
          "reading": "Naeil achim iljjik jungyohan hoewi-ga isseoseo iljjik ireonaya haeyo.",
          "translation": "I have an important meeting early tomorrow morning, so I must wake up early ('-아/어야 하다')."
        },
        {
          "target": "한국어 시험에 합격하기 위해 매일 단어를 50개씩 외워야 돼요.",
          "reading": "Hangug-eo siheom-e hapgyeokhagi wihae maeil daneo-reul osipgaessik oewoya dwaeyo.",
          "translation": "To pass the Korean exam, I have to memorize 50 vocabulary words every day ('-아/어야 되다')."
        },
        {
          "target": "도서관에서 빌린 책은 다음 주 금요일까지 반드시 반납해야 합니다.",
          "reading": "Doseogwan-eseo billin chaek-eun daeum ju geumyoil-kkaji bandeusi bannaphaeya hamnida.",
          "translation": "Books borrowed from the library must be returned by next Friday."
        },
        {
          "target": "건강을 위해 하루에 물을 최소 2리터 이상 마셔야 합니다.",
          "reading": "Geon-gang-eul wihae haru-e mul-eul choeso iriteo isang masyeoya hamnida.",
          "translation": "For health, you must drink at least 2 liters of water a day."
        }
      ],
      "mnemonics": [
        "양성은 '-아야 해요', 음성은 '-어야 해요', 하다는 '해야 돼요'! 피할 수 없는 의무의 공식!"
      ],
      "culturalNotes": [
        "한국의 직장 문화에서는 상사가 지시할 때 '이 보고서는 내일까지 작성해 주셔야 합니다'처럼 존칭 '-시-'를 결합한 '-셔야 합니다' 형태가 널리 쓰입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '가다(to go)'의 올바른 의무 당위 표현은 무엇입니까?",
          "options": [
            "가야 해요 (가야 돼요)",
            "가어야 해요",
            "가아야 돼요"
          ],
          "answerIndex": 0,
          "explanation": "'가다'의 어간 '가-'는 양성 모음 ㅏ로 끝나므로 '-아야'와 축약되어 '가야 해요'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "동사 '먹다(to eat)'에 의무 어미가 결합한 올바른 형태는 어느 것입니까?",
          "options": [
            "먹어야 해요 (먹어야 돼요)",
            "먹아야 해요",
            "먹해야 돼요"
          ],
          "answerIndex": 0,
          "explanation": "'먹다'의 어간 모음은 음성 모음 'ㅓ'이므로 '-어야 해요'가 결합합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'숙제를 오늘 밤까지 반드시 _____ (I must finish the homework).' 빈칸에 알맞은 '끝내다'의 의무형은?",
          "options": [
            "끝내야 해요",
            "끝나야 해요",
            "끝내어야 해요"
          ],
          "answerIndex": 0,
          "explanation": "'끝내다'의 어간 끝 'ㅐ'에 '-어야'가 축약되어 '끝내야 해요'가 됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'일찍 자야 해요'(I have to go to sleep early)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "일찍 자야 해요.",
            "일찍 자야 해요"
          ],
          "explanation": "일찍(부사) + 자야 해요(자다 + 아야 하다) = 일찍 자야 해요."
        }
      ]
    }
  },
  "ko-u11-l2": {
    "id": "ko-u11-l2",
    "subject": "korean",
    "unit": 11,
    "lessonNumber": 2,
    "title": "행위 불허와 조건부 금지 규범 어미 (-면 안 되다)",
    "level": "B1",
    "objective": "어떤 행위를 결코 해서는 안 됨을 규정하는 사회적/법적 금지 어미 '-(으)면 안 되다'의 형태 결합 및 화용 규칙을 마스터한다.",
    "presentation": {
      "explanation": "조건 연결어미 '-(으)면'과 부정 부사 '안', 동사 '되다'가 결합한 '-(으)면 안 되다'는 '만약 그 행위를 한다면 도덕적/규정상 용납될 수 없다'는 절대적 금지(Prohibition: Must not)를 나타냅니다.\n\n1. 형태 결합 규칙:\n- 모음 종결 어간 or 'ㄹ' 받침 어간 + -면 안 되다:\n  - 가다 → 가면 안 돼요 (must not go)\n  - 피우다 → 담배를 피우면 안 돼요 (must not smoke)\n  - 만들다 → 만들면 안 돼요 (must not make)\n  - 열다 → 문을 열면 안 돼요 (must not open the door)\n- 'ㄹ' 제외 자음 종결 어간 + -으면 안 되다:\n  - 먹다 → 먹으면 안 돼요 (must not eat)\n  - 찍다 → 사진을 찍으면 안 돼요 (must not take photos)\n  - 밟다 → 잔디를 밟으면 안 됩니다 (must not step on the lawn)\n  - 앉다 → 여기에 앉으면 안 됩니다 (must not sit here)\n\n2. 공공장소 안내문과 규범 준수:\n- \"이곳은 금연 구역이므로 흡연하시면 안 됩니다.\"\n- \"박물관 내부에서는 플래시를 터뜨리면 안 됩니다.\"",
      "examples": [
        {
          "target": "이곳은 금연 구역이니 담배를 피우면 안 됩니다.",
          "reading": "Igot-eun geum-yeon guyeok-ini dambae-reul piumyeon an doemnida.",
          "translation": "This is a non-smoking area, so you must not smoke here ('-면 안 되다')."
        },
        {
          "target": "시험 중에는 옆 사람과 이야기를 나누면 안 돼요.",
          "reading": "Siheom jung-eneun yeop saram-gwa iyagi-reul nanumyeon an dwaeyo.",
          "translation": "During the exam, you must not talk with the person next to you."
        },
        {
          "target": "도서관 열람실 안에서는 음식물을 먹으면 안 됩니다.",
          "reading": "Doseogwan yeollamsil an-eseoneun eumsikmul-eul meog-eumyeon an doemnida.",
          "translation": "You must not eat food inside the library reading room."
        },
        {
          "target": "안전선 밖으로 몸을 내밀면 안 돼요.",
          "reading": "Anjeonseon bakkeuro mom-eul naemilmyeon an dwaeyo.",
          "translation": "You must not lean your body outside the safety line."
        }
      ],
      "mnemonics": [
        "받침 없으면 '-면 안 돼요'(가면 안 돼), 받침 있으면 '-으면 안 돼요'(먹으면 안 돼)! 금지의 붉은 신호등!"
      ],
      "culturalNotes": [
        "한국의 버스 및 지하철 등 대중교통에서는 뚜껑이 없는 테이크아웃 음료를 들고 탑승하면 승차 거부를 당할 수 있으며, '음료를 들고 타시면 안 됩니다'라는 안내 방송이 나옵니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'담배를 피우다(to smoke)'를 행위 금지형으로 올바르게 표현한 문장은 무엇입니까?",
          "options": [
            "담배를 피우면 안 돼요.",
            "담배를 피우으면 안 돼요.",
            "담배를 피워야 안 돼요."
          ],
          "answerIndex": 0,
          "explanation": "'피우다'는 모음 종결 어간이므로 '-면 안 돼요'가 결합하여 '피우면 안 돼요'가 올바릅니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'사진을 찍다(to take photos - 자음 받침)'를 금지형으로 바르게 나타낸 것은 어느 것입니까?",
          "options": [
            "사진을 찍으면 안 됩니다.",
            "사진을 찍면 안 됩니다.",
            "사진을 찍어야 안 됩니다."
          ],
          "answerIndex": 0,
          "explanation": "'찍다'는 자음 받침이 있으므로 '-으면 안 됩니다'가 결합합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'공원 잔디밭에 _____ (You must not enter).' 빈칸에 알맞은 '들어가다'의 금지형은?",
          "options": [
            "들어가면 안 됩니다",
            "들어가으면 안 됩니다",
            "들어가면 돼요"
          ],
          "answerIndex": 0,
          "explanation": "'들어가다'는 모음 종결 어간이므로 '-면 안 됩니다'가 결합합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'여기서 담배를 피우면 안 돼요'(You must not smoke here)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "여기서 담배를 피우면 안 돼요.",
            "여기서 담배를 피우면 안 돼요"
          ],
          "explanation": "여기서 + 담배를 + 피우면 안 돼요 = 여기서 담배를 피우면 안 돼요."
        }
      ]
    }
  },
  "ko-u11-l3": {
    "id": "ko-u11-l3",
    "subject": "korean",
    "unit": 11,
    "lessonNumber": 3,
    "title": "행위 허가 '-아/어도 되다'와 행위 금지 '-면 안 되다'의 대칭적 화용",
    "level": "B1",
    "objective": "허락을 구하고 승인하는 '-아/어도 되다'와 이를 거절/금지하는 '-면 안 되다'의 대칭적 화용 구조를 완벽히 이해한다.",
    "presentation": {
      "explanation": "어떤 행동을 해도 되는지 질문하고 허락하거나 금지할 때 '-아/어도 되다'와 '-면 안 되다'가 완벽한 대칭 쌍을 이룹니다.\n\n1. 허가 구문 ('-아/어도 되다' - May / Permitted to do):\n- \"여기 앉아도 돼요?\" (May I sit here?)\n- \"네, 앉으셔도 됩니다.\" (Yes, you may sit here.)\n- \"실내에서 사진을 찍어도 돼요.\" (You may take photos inside.)\n\n2. 대칭적 문답 담화 모델:\n- 질문: \"선생님, 지금 교실에 들어가도 돼요?\"\n  - 긍정 허가 (Permission granted): \"네, 지금 들어와도 돼요.\"\n  - 부정 금지 (Prohibited): \"아니요, 아직 청소 중이니까 들어가면 안 돼요.\"\n- 질문: \"여기 주차해도 돼요?\"\n  - 긍정 허가: \"네, 여기에 세우셔도 돼요.\"\n  - 부정 금지: \"아니요, 여기는 장애인 전용 구역이라서 주차하시면 안 됩니다.\"",
      "examples": [
        {
          "target": "A: 여기에 잠깐 앉아도 돼요? B: 네, 편하게 앉으셔도 돼요.",
          "reading": "A: Yeogi-e jamkkan anjado dwaeyo? B: Ne, pyeonhage anjeusyeodo dwaeyo.",
          "translation": "A: May I sit here for a moment? B: Yes, you may sit comfortably ('-아/어도 되다')."
        },
        {
          "target": "A: 전시관 안에서 사진을 찍어도 돼요? B: 아니요, 찍으면 안 됩니다.",
          "reading": "A: Jeonsigwan an-eseo sajin-eul jjigeodo dwaeyo? B: Aniyo, jjigeumyeon an doemnida.",
          "translation": "A: May I take photos inside the exhibition hall? B: No, you must not take photos ('-면 안 되다')."
        },
        {
          "target": "수업 중에 급한 일이 있으면 잠시 밖에 나가도 됩니다.",
          "reading": "Sueop jung-e geuphan il-i isseumyeon jamsi bakke nagado doemnida.",
          "translation": "If you have urgent business during class, you may go outside for a moment."
        },
        {
          "target": "공연 중에는 스마트폰 화면을 켜면 안 됩니다.",
          "reading": "Gong-yeon jung-eneun seumateupon hwamyeon-eul kyeomyeon an doemnida.",
          "translation": "During the performance, you must not turn on the smartphone screen."
        }
      ],
      "mnemonics": [
        "허락을 구할 땐 '-아/어도 돼요?', 승낙할 땐 '해도 돼요', 거절/금지할 땐 '-면 안 돼요'!"
      ],
      "culturalNotes": [
        "상대방의 공간이나 물건을 이용하기 전에 '잠깐 써도 돼요?' 또는 '여기에 앉아도 돼요?'라고 사전에 양해를 구하는 것은 한국에서 필수적인 배려 화법입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'여기 앉아도 돼요?'라는 질문에 대해 거절 및 금지를 나타내는 가장 적절한 대답은 무엇입니까?",
          "options": [
            "아니요, 여기에 앉으면 안 돼요.",
            "네, 여기에 앉으면 안 돼요.",
            "아니요, 여기에 앉아도 돼요."
          ],
          "answerIndex": 0,
          "explanation": "거절과 금지는 '아니요'와 함께 '-면 안 돼요'를 사용한 첫 번째 대답이 완벽합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'창문을 열어도 됩니까?'라는 정중한 허가 질문에 알맞은 승인 답변은 어느 것입니까?",
          "options": [
            "네, 창문을 여셔도 됩니다.",
            "네, 창문을 열면 안 됩니다.",
            "아니요, 창문을 여셔도 돼요."
          ],
          "answerIndex": 0,
          "explanation": "허가를 승인할 때는 '네'와 함께 '-아/어도 되다(존칭: -으셔도 되다)'를 씁니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 허가와 금지의 문답이 문법과 맥락상 가장 완벽한 것은?",
          "options": [
            "A: 지금 질문해도 돼요? B: 네, 편하게 질문하셔도 돼요.",
            "A: 지금 질문해도 돼요? B: 네, 질문하면 안 돼요.",
            "A: 지금 질문하면 안 돼요? B: 아니요, 질문해야 해요."
          ],
          "answerIndex": 0,
          "explanation": "허가 질문('질문해도 돼요?')에 대해 친절하게 허가('질문하셔도 돼요')한 첫 번째 대화가 완벽합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'사진을 찍어도 돼요'(You may take photos)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "사진을 찍어도 돼요.",
            "사진을 찍어도 돼요"
          ],
          "explanation": "사진을 + 찍어도 돼요(찍다 + 어도 되다) = 사진을 찍어도 돼요."
        }
      ]
    }
  },
  "ko-u11-l4": {
    "id": "ko-u11-l4",
    "subject": "korean",
    "unit": 11,
    "lessonNumber": 4,
    "title": "불필요 및 비의무 표현 (-지 않아도 되다 / 안 -아/어도 되다)",
    "level": "B1",
    "objective": "의무를 면제해주어 '그렇게 할 필요가 없다(No need to / Don't have to)'를 나타내는 '-지 않아도 되다'의 통사 구조를 체득한다.",
    "presentation": {
      "explanation": "의무 표현('-아/어야 하다')의 부정은 금지('-면 안 되다')뿐만 아니라, 의무를 해제해 주는 '불필요/비의무(-지 않아도 되다)'의 영역이 존재합니다.\n\n1. 형태 결합 및 구조:\n- 동사 어간 + '-지 않아도 되다' / '안 + 동사-아/어도 되다':\n  - 오다 → 내일 학교에 오지 않아도 돼요 / 안 와도 돼요 (You don't have to come tomorrow)\n  - 내다 → 입장료를 내지 않아도 됩니다 (You don't need to pay admission fee)\n  - 서두르다 → 서두르지 않아도 돼요 (No need to hurry)\n  - 먹다 → 다 안 먹어도 돼요 / 다 먹지 않아도 돼요 (You don't have to eat it all)\n\n2. '금지'와 '불필요'의 결정적 구분:\n- 금지 (Prohibition): \"먹으면 안 돼요!\" (You MUST NOT eat - 먹으면 탈이 나거나 규정 위반임)\n- 불필요 (Exemption): \"다 안 먹어도 돼요.\" (You DON'T HAVE TO eat all - 남겨도 괜찮음)",
      "examples": [
        {
          "target": "내일은 공휴일이라서 회사에 출근하지 않아도 됩니다.",
          "reading": "Naeil-eun gonghyuil-iraseo hoesa-e chulgeunhaji anhado doemnida.",
          "translation": "Tomorrow is a public holiday, so you do not have to come to work ('-지 않아도 되다')."
        },
        {
          "target": "시간이 아직 충분하니 너무 서두르지 않아도 돼요.",
          "reading": "Sigan-i ajik chungbunhani neomu seodureuji anhado dwaeyo.",
          "translation": "We still have plenty of time, so you don't need to rush."
        },
        {
          "target": "이 미술관은 무료 관람이라서 표를 사지 않아도 돼요.",
          "reading": "I misulgwan-eun muryo gwallam-iraseo pyo-reul saji anhado dwaeyo.",
          "translation": "This art museum is free admission, so you don't have to buy a ticket."
        },
        {
          "target": "배가 부르면 억지로 다 먹지 않아도 괜찮습니다.",
          "reading": "Bae-ga bureumyeon eokjiro da meokji anhado gwaenchanseumnida.",
          "translation": "If you are full, it is okay not to force yourself to eat everything."
        }
      ],
      "mnemonics": [
        "안 해도 괜찮을 땐 '-지 않아도 돼요'! 해야 할 의무를 덜어주는 마법의 말!"
      ],
      "culturalNotes": [
        "한국의 식사 자리에서 손님이 배불러할 때 주인이나 선배가 '무리해서 다 안 드셔도 돼요'라고 권하는 것은 상대방을 편안하게 해주는 따뜻한 배려의 표현입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'내일 일찍 일어날 필요가 없다(No need to wake up early)'를 나타낸 올바른 문장은 무엇입니까?",
          "options": [
            "내일 일찍 일어나지 않아도 돼요.",
            "내일 일찍 일어나면 안 돼요.",
            "내일 일찍 일어나야 돼요."
          ],
          "answerIndex": 0,
          "explanation": "의무의 면제/불필요는 '-지 않아도 되다'를 사용하므로 '일어나지 않아도 돼요'가 정확합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'돈을 내지 않아도 된다'를 바르게 표현한 문장은 어느 것입니까?",
          "options": [
            "돈을 안 내도 돼요.",
            "돈을 내면 안 돼요.",
            "돈을 내야 돼요."
          ],
          "answerIndex": 0,
          "explanation": "'안 -아/어도 되다'는 불필요 표현이므로 '돈을 안 내도 돼요'가 올바릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'금지(Must not)'와 '불필요(Don't have to)'의 짝이 올바르게 묶인 것은?",
          "options": [
            "금지: 가면 안 돼요 / 불필요: 가지 않아도 돼요",
            "금지: 가지 않아도 돼요 / 불필요: 가면 안 돼요",
            "금지: 가야 돼요 / 불필요: 가지 마세요"
          ],
          "answerIndex": 0,
          "explanation": "'-면 안 되다'는 금지, '-지 않아도 되다'는 불필요를 나타냅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'안 와도 돼요'(You don't have to come)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "안 와도 돼요.",
            "안 와도 돼요"
          ],
          "explanation": "안 + 오다 + 아도 되다 = 안 와도 돼요."
        }
      ]
    }
  },
  "ko-u11-l5": {
    "id": "ko-u11-l5",
    "subject": "korean",
    "unit": 11,
    "lessonNumber": 5,
    "title": "공공시설 이용 규칙 및 예절 에티켓 실전 담화",
    "level": "B1",
    "objective": "미술관, 도서관, 극장, 병원 등 공공장소에서 허가, 금지, 의무 표현을 정확히 구사하여 공공 규칙 안내 및 질문 담화를 완성한다.",
    "presentation": {
      "explanation": "공공장소의 에티켓과 이용 수칙을 주제로 대화할 때는 의무('-아/어야 하다'), 금지('-면 안 되다'), 허가('-아/어도 되다') 표현을 조화롭게 결합합니다.\n\n1. 공공장소별 핵심 안내 수칙 모델:\n- 도서관 (Library):\n  - \"열람실 안에서는 휴대전화를 무음으로 설정해야 합니다.\"\n  - \"통화를 하실 때는 복도로 나가셔야 합니다.\"\n  - \"음료수는 뚜껑이 있는 용기만 반입하셔도 됩니다.\"\n- 미술관 (Art Museum):\n  - \"작품은 눈으로만 감상하시고 절대 손으로 만지시면 안 됩니다.\"\n  - \"플래시 없이 일반 사진 촬영은 하셔도 됩니다.\"\n- 병원 (Hospital):\n  - \"진료 10분 전까지 도착하셔서 접수하셔야 합니다.\"\n  - \"검사실 안에는 금속 물질을 가지고 들어가시면 안 됩니다.\"",
      "examples": [
        {
          "target": "A: 미술관 안에서 사진을 찍어도 되나요? B: 네, 하지만 플래시는 켜면 안 됩니다.",
          "reading": "A: Misulgwan an-eseo sajin-eul jjigeodo doenayo? B: Ne, hajiman peullaesi-neun kyeomyeon an doemnida.",
          "translation": "A: May I take photos inside the art museum? B: Yes, but you must not turn on the flash."
        },
        {
          "target": "도서관에서는 다른 사람들을 위해 조용히 해야 합니다.",
          "reading": "Doseogwan-eseoneun dareun saramdeul-eul wihae joyonghi haeya hamnida.",
          "translation": "In the library, you must stay quiet for the sake of others ('-아/어야 하다')."
        },
        {
          "target": "병원에 오실 때는 신분증이나 건강보험증을 꼭 챙겨 오셔야 돼요.",
          "reading": "Byeongwon-e osil ttae-neun sinbunjeung-ina geon-gangboheomjeung-eul kkok chaenggyeo osyeoya dwaeyo.",
          "translation": "When you come to the hospital, you must bring your ID or health insurance card."
        },
        {
          "target": "비행기 이착륙 중에는 전자기기 전원을 꺼야 합니다.",
          "reading": "Bihaenggi ichangnyuk jung-eneun jeonjagigi jeonwon-eul kkeoya hamnida.",
          "translation": "During airplane takeoff and landing, you must turn off the power of electronic devices."
        }
      ],
      "mnemonics": [
        "허락은 '-아/어도 되다', 금지는 '-면 안 되다', 지킬 것은 '-아/어야 하다'로 품격 있는 에티켓 완성!"
      ],
      "culturalNotes": [
        "한국의 영화관이나 공연장에서는 공연 시작 직전에 '휴대전화는 진동이나 비행기 탑승 모드로 전환해 주시기 바랍니다'라는 에티켓 영상이 상영됩니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "미술관 관람 규칙으로 가장 적절한 문장은 무엇입니까?",
          "options": [
            "작품을 손으로 만지면 안 됩니다.",
            "작품을 손으로 만져야 합니다.",
            "작품을 손으로 만지지 않아도 됩니다."
          ],
          "answerIndex": 0,
          "explanation": "작품 훼손 방지를 위한 공공 규칙이므로 금지 표현인 '만지면 안 됩니다'가 정확합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "도서관 이용 수칙 중 올바른 의무 표현은 어느 것입니까?",
          "options": [
            "열람실 안에서는 조용히 해야 합니다.",
            "열람실 안에서는 크게 떠들어야 합니다.",
            "열람실 안에서는 노래를 불러도 됩니다."
          ],
          "answerIndex": 0,
          "explanation": "도서관 열람실에서는 정숙이 의무이므로 '조용히 해야 합니다'가 올바릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "공공장소 에티켓 안내 대화 중 문맥과 규범이 가장 자연스러운 것은?",
          "options": [
            "A: 전시관에 음료수를 들고 들어가도 돼요? B: 아니요, 음식물은 가지고 들어가시면 안 됩니다.",
            "A: 전시관에 음료수를 들고 들어가도 돼요? B: 네, 음료수는 버려야 합니다.",
            "A: 전시관에 음료수를 들고 들어가면 안 돼요? B: 네, 들고 들어가야 돼요."
          ],
          "answerIndex": 0,
          "explanation": "음료 반입 여부 질문에 정중하게 금지 규칙을 안내한 첫 번째 대화가 완벽합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'조용히 해야 합니다'(You must stay quiet)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "조용히 해야 합니다.",
            "조용히 해야 합니다"
          ],
          "explanation": "조용히(부사) + 해야 합니다(하다 + 여야 합니다) = 조용히 해야 합니다."
        }
      ]
    }
  },
  "ko-u12-l1": {
    "id": "ko-u12-l1",
    "subject": "korean",
    "unit": 12,
    "lessonNumber": 1,
    "title": "주체 높임 선어말어미 (-(으)시-)의 형태 체계",
    "level": "B1",
    "objective": "문장의 주어(행동의 주체)가 화자보다 존중해야 할 대상일 때 서술어에 삽입하는 선어말어미 '-(으)시-'의 형태 결합 규칙과 시제별 활용을 마스터한다.",
    "presentation": {
      "explanation": "주체 높임법은 문장의 주어인 인물이 화자(말하는 이)보다 나이가 많거나 사회적 지위가 높을 때, 그 주어를 높여 대우하는 한국어 문법의 핵심 체계입니다. 용언의 어간과 어말어미 사이에 선어말어미 '-(으)시-'를 삽입합니다.\n\n1. 형태 결합 규칙:\n- 모음 종결 어간 + -시-:\n  - 가다 → 가시다 (현재: 가세요 / 가십니다, 과거: 가셨어요 / 가셨습니다)\n  - 보다 → 보시다 (현재: 보세요 / 보십니다, 과거: 보셨어요 / 보셨습니다)\n  - 하다 → 하시다 (현재: 하세요 / 하십니다, 과거: 하셨어요 / 하셨습니다)\n- 자음 종결 어간 (받침 있음) + -으시-:\n  - 읽다 → 읽으시다 (현재: 읽으세요 / 읽으십니다, 과거: 읽으셨어요 / 읽으셨습니다)\n  - 앉다 → 앉으시다 (현재: 앉으세요 / 앉으십니다, 과거: 앉으셨어요 / 앉으셨습니다)\n  - 닫다 → 닫으시다 (현재: 닫으세요 / 닫으십니다, 과거: 닫으셨어요 / 닫으셨습니다)\n- 'ㄹ' 받침 종결 어간 + -시- ('ㄹ' 탈락 규칙):\n  - 살다 → 사시다 (사세요 / 사십니다)\n  - 만들다 → 만드시다 (만드세요 / 만드십니다)\n  - 알다 → 아시다 (아세요 / 아십니다)",
      "examples": [
        {
          "target": "선생님께서 도서관에서 한국 역사 책을 읽으십니다.",
          "reading": "Seonsaengnim-kkeseo doseogwan-eseo hanguk yeoksa chaeg-eul ilgeusimnida.",
          "translation": "The teacher is reading a Korean history book in the library ('읽다' + '-으시-')."
        },
        {
          "target": "아버지께서는 주말마다 산에서 신선한 공기를 마시며 등산하세요.",
          "reading": "Abeoji-kkeseoneun jumalmada san-eseo sinseonhan gonggi-reul masimyeo deungsanhaseyo.",
          "translation": "Father hikes in the mountains every weekend, breathing fresh air ('등산하다' + '-시-')."
        },
        {
          "target": "어머니께서 가족들을 위해 정성껏 맛있는 저녁 식사를 만드셨어요.",
          "reading": "Eomeoni-kkeseo gajokdeul-eul wihae jeongseongkkeot masinneun jeonyeok siksa-reul mandeusyeosseoyo.",
          "translation": "Mother made a delicious dinner with all her heart for the family ('만들다' → ㄹ-drop '만드셨어요')."
        },
        {
          "target": "할아버지께서는 서울 종로구의 조용한 한옥에 오래 사십니다.",
          "reading": "Harabeoji-kkeseoneun Seoul Jongno-gu-ui joyonghan han-og-e orae sasimnida.",
          "translation": "Grandfather has been living in a quiet Hanok in Jongno-gu, Seoul for a long time ('살다' → '사십니다')."
        }
      ],
      "mnemonics": [
        "받침 없으면 '-시-', 받침 있으면 '-으시-', ㄹ 받침은 떨어져 나가 '사시다, 만드시다'!"
      ],
      "culturalNotes": [
        "한국어에서 자신보다 윗사람인 부모님, 조부모님, 선생님, 직장 상사에 대해 말할 때는 반드시 주체 높임 선어말어미 '-(으)시-'를 사용하는 것이 필수적인 기본 예절입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동사 '가다(to go)'의 주체 높임 현재 해요체 형태는 무엇입니까?",
          "options": [
            "가세요",
            "가으세요",
            "가셔요"
          ],
          "answerIndex": 0,
          "explanation": "'가다'의 어간에 '-시-'와 '-어요'가 결합하면 표준적으로 축약되어 '가세요'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "동사 '만들다(to make - ㄹ 받침)'의 주체 높임 과거 해요체 형태는 어느 것입니까?",
          "options": [
            "만드셨어요",
            "만들으셨어요",
            "만들셨어요"
          ],
          "answerIndex": 0,
          "explanation": "'만들다'는 'ㄹ' 받침이 탈락하면서 '-시-'가 결합하므로 '만드셨어요'가 올바릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'선생님께서 신문을 _____ (The teacher reads the newspaper).' 빈칸에 알맞은 '읽다'의 주체 높임 격식체(하십시오체)는?",
          "options": [
            "읽으십니다",
            "읽십니다",
            "읽으세요"
          ],
          "answerIndex": 0,
          "explanation": "'읽다'는 자음 받침이 있으므로 '-으십니다'가 결합하여 '읽으십니다'가 됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'선생님께서 책을 읽으세요'(The teacher reads a book)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "선생님께서 책을 읽으세요.",
            "선생님께서 책을 읽으세요"
          ],
          "explanation": "선생님께서(높임 주어) + 책을(목적어) + 읽으세요(읽다 + 으시 + 어요) = 선생님께서 책을 읽으세요."
        }
      ]
    }
  },
  "ko-u12-l2": {
    "id": "ko-u12-l2",
    "subject": "korean",
    "unit": 12,
    "lessonNumber": 2,
    "title": "주체 높임 주격 조사 '께서'와 주제 보조사 '께서는'",
    "level": "B1",
    "objective": "주어 명사 뒤에 결합하여 주어를 극존칭으로 대우하는 주격 조사 '께서'와 대조/주제 보조사 '께서는'의 통사적 일치(Syntactic Agreement)를 체득한다.",
    "presentation": {
      "explanation": "문장의 주어가 높임의 대상일 때는 서술어의 '-(으)시-'뿐만 아니라 주격 조사 역시 평칭 '이/가' 대신 존칭 주격 조사 '께서'를 사용해야 완벽한 주체 높임 통사 구조가 완성됩니다.\n\n1. 통사적 대응 구조:\n- 평칭 주격 조사 '이/가' → 존칭 주격 조사 '께서':\n  - 친구가 집에 갑니다. → 선생님께서 댁에 가십니다.\n  - 동생이 노래를 부릅니다. → 어머니께서 노래를 부르십니다.\n- 평칭 주제 보조사 '은/는' → 존칭 주제 보조사 '께서는':\n  - 형은 운동을 좋아해요. → 아버지께서는 운동을 좋아하세요.\n  - 민수는 친절해요. → 교수님께서는 매우 친절하십니다.\n\n2. 주어 명사의 호칭/직함 접미사 '-님':\n- 선생 → 선생님께서, 교수 → 교수님께서, 사장 → 사장님께서, 부모 → 부모님께서",
      "examples": [
        {
          "target": "교수님께서 학생들에게 유익한 전공 강의를 열정적으로 해 주셨습니다.",
          "reading": "Gyosunim-kkeseo haksaengdeul-ege yuikhan jeongong gang-ui-reul yeoljeongjeog-euro hae jusyeotseumnida.",
          "translation": "The professor passionately gave a beneficial lecture in the major to the students ('교수님께서')."
        },
        {
          "target": "할머니께서는 따뜻한 봄날에 공원에서 산책하시는 것을 좋아하세요.",
          "reading": "Harabeoji-kkeseoneun ttatteut-han bomnal-e gongwon-eseo sanchaekhasineun geos-eul joahaseyo.",
          "translation": "Grandmother likes taking a walk in the park on warm spring days ('할머니께서는')."
        },
        {
          "target": "사장님께서 오늘 회의에서 올해 사업 목표를 명확히 발표하셨습니다.",
          "reading": "Sajangnim-kkeseo oneul hoewi-eseo olhae saeop mokpyo-reul myeonghwakhi balpyohasyeotseumnida.",
          "translation": "The president clearly announced this year's business goals at today's meeting."
        },
        {
          "target": "어머니께서는 항상 가족들의 건강과 행복을 위해 기도하십니다.",
          "reading": "Eomeoni-kkeseoneun hangsang gajokdeul-ui geon-gang-gwa haengbok-eul wihae gidohasimnida.",
          "translation": "Mother always prays for the health and happiness of the family."
        }
      ],
      "mnemonics": [
        "높은 분 뒤엔 '이/가' 대신 '께서', '은/는' 대신 '께서는'! 조사부터 깍듯이 모시자!"
      ],
      "culturalNotes": [
        "한국어 문법에서는 주어 조사('께서')와 서술어 어미('-(으)시-')가 호응을 이루어야 합니다. '선생님이 가셨어요'처럼 구어에서 조사를 축약하기도 하지만, 격식 있는 자리에서는 '선생님께서 가셨습니다'가 올바른 표준 문장입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'할아버지(Grandfather)' 뒤에 올 가장 알맞은 존칭 주격 조사는 무엇입니까?",
          "options": [
            "께서",
            "가",
            "에게"
          ],
          "answerIndex": 0,
          "explanation": "주체 높임 대상 뒤에는 존칭 주격 조사 '께서'가 결합합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "주어 조사와 서술어 높임이 완벽히 일치한 문장은 어느 것입니까?",
          "options": [
            "아버지께서 아침 일찍 산책을 하십니다.",
            "아버지가 아침 일찍 산책을 합니다.",
            "아버지에게 아침 일찍 산책을 하십니다."
          ],
          "answerIndex": 0,
          "explanation": "'아버지께서(존칭 주어) + 하십니다(주체 높임 서술어)'의 호응이 완벽합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'교수님_____ 연구실에서 책을 읽으십니다.' 빈칸에 들어갈 가장 알맞은 존칭 조사는?",
          "options": [
            "께서",
            "께",
            "을"
          ],
          "answerIndex": 0,
          "explanation": "행동의 주체인 교수님을 높이는 주격 조사는 '께서'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'어머니께서 요리하세요'(Mother cooks)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "어머니께서 요리하세요.",
            "어머니께서 요리하세요"
          ],
          "explanation": "어머니께서 + 요리하세요 = 어머니께서 요리하세요."
        }
      ]
    }
  },
  "ko-u12-l3": {
    "id": "ko-u12-l3",
    "subject": "korean",
    "unit": 12,
    "lessonNumber": 3,
    "title": "주체 높임 특수 어휘 (계시다, 드시다, 주무시다, 편찮으시다)",
    "level": "B1",
    "objective": "'-(으)시-'를 붙이지 않고 어휘 자체가 교체되는 보충법적(Suppletive) 주체 높임 특수 동사 및 형용사의 목록을 완벽히 암기하고 구별한다.",
    "presentation": {
      "explanation": "한국어의 일부 기초 동사와 형용사는 일반 어간에 '-(으)시-'를 붙이지 않고, 아예 형태가 완전히 다른 '특수 높임 어휘(Suppletive Honorific Words)'를 사용합니다.\n\n1. 필수 주체 높임 특수 어휘 목록:\n- 있다 (존재: exist/stay) → 계시다 (할머니께서 방에 계십니다)\n- 먹다 / 마시다 (eat/drink) → 드시다 / 잡수시다 (선생님께서 식사를 드십니다)\n- 자다 (sleep) → 주무시다 (아버지께서 안방에서 주무십니다)\n- 아프다 (be sick) → 편찮으시다 (할아버지께서 허리가 편찮으십니다)\n- 죽다 (die) → 돌아가시다 (작년에 할아버지께서 돌아가셨습니다)\n- 말하다 (speak/say) → 말씀하시다 (교수님께서 말씀하십니다)\n\n2. '계시다' vs '있으시다' (직접 높임 vs 간접 높임의 결정적 대비):\n- 사람 자체의 존재 (직접 높임): \"선생님께서 교무실에 계십니다.\"\n- 사람의 소유물/시간/증상 (간접 높임): \"선생님, 질문이 있으십니까?\", \"사장님, 지금 시간 있으세요?\" (*시간 계세요 X)",
      "examples": [
        {
          "target": "선생님께서는 지금 연구실에 계시니 방문해 보십시오.",
          "reading": "Seonsaengnim-kkeseoneun jigeum yeongusil-e gyesini bangmunhae bosipsio.",
          "translation": "The professor is in the research lab right now, so please visit ('있다' → 특수 동사 '계시다')."
        },
        {
          "target": "할머니, 따뜻한 둥굴레차 한잔 드시면서 이야기 나누세요.",
          "reading": "Harabeoji, ttatteut-han dunggullecha hanjan deusimyeonseo iyagi nanuseyo.",
          "translation": "Grandmother, please have a warm cup of Solomon's seal tea and converse ('마시다' → '드시다')."
        },
        {
          "target": "아버지께서 피곤하셔서 일찍 안방에 들어가 주무십니다.",
          "reading": "Abeoji-kkeseo pigonhasyeoseo iljjik anbang-e deureoga jumusimnida.",
          "translation": "Father is tired, so he went into the master bedroom early and is sleeping ('자다' → '주무시다')."
        },
        {
          "target": "외할아버지께서 며칠 전부터 감기 기운으로 몸이 편찮으십니다.",
          "reading": "Oeharabeoji-kkeseo myeochil jeonbuteo gamgi giun-euro mom-i pyeonchaneusimnida.",
          "translation": "Maternal grandfather has been feeling sick with cold symptoms for a few days ('아프다' → '편찮으시다')."
        }
      ],
      "mnemonics": [
        "있다는 '계시다', 먹다는 '드시다', 자다는 '주무시다', 아프다는 '편찮으시다'! 4대 특수 높임!"
      ],
      "culturalNotes": [
        "한국의 가정에서 아침에 웃어른께 인사드릴 때 '안녕히 주무셨어요?'라고 인사하고, 식사 자리에서는 '맛있게 드세요'라고 권하는 것이 가장 기초적인 가족 예절입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'자다(to sleep)'의 주체 높임 특수 동사는 무엇입니까?",
          "options": [
            "주무시다",
            "자시다",
            "자으시다"
          ],
          "answerIndex": 0,
          "explanation": "'자다'의 주체 높임 특수 동사는 '주무시다'입니다 (*자시다 X)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'할머니께서 집에 계신다(Grandmother is at home)'를 바르게 표현한 문장은 어느 것입니까?",
          "options": [
            "할머니께서 집에 계십니다.",
            "할머니께서 집에 있으십니다.",
            "할머니께서 집에 사십니다."
          ],
          "answerIndex": 0,
          "explanation": "인물 자체의 존재를 직접 높일 때는 특수 동사 '계시다'를 씁니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'어머니께서 저녁 식사를 맛있게 _____.' 빈칸에 알맞은 '먹다'의 특수 높임형은?",
          "options": [
            "드셨어요 (잡수셨어요)",
            "먹으셨어요",
            "주무셨어요"
          ],
          "answerIndex": 0,
          "explanation": "'먹다'의 주체 높임형은 '드시다/잡수시다'이므로 과거형 '드셨어요/잡수셨어요'가 올바릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'할머니께서 안방에 계세요'(Grandmother is in the master bedroom)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "할머니께서 안방에 계세요.",
            "할머니께서 안방에 계세요"
          ],
          "explanation": "할머니께서 + 안방에 + 계세요(계시다 + 어요) = 할머니께서 안방에 계세요."
        }
      ]
    }
  },
  "ko-u12-l4": {
    "id": "ko-u12-l4",
    "subject": "korean",
    "unit": 12,
    "lessonNumber": 4,
    "title": "주체 높임 명사 어휘 (진지, 댁, 성함, 연세) 및 간접 높임 원리",
    "level": "B1",
    "objective": "높임 대상과 관련된 사물/개념을 가리키는 특수 명사 어휘와 신체/소유물을 높이는 간접 높임(Indirect Honorifics)의 규칙을 체득한다.",
    "presentation": {
      "explanation": "주체 높임법은 서술어뿐만 아니라 주어와 관련된 명사(Nouns) 역시 전용 높임 어휘로 교체하며, 대상의 소유물이나 신체 부위를 높이는 '간접 높임' 원리를 따릅니다.\n\n1. 필수 높임 명사 대응 목록:\n- 밥 (meal/rice) → 진지 (진지 잡수셨습니까?)\n- 집 (house) → 댁 (교수님 댁에 찾아뵈었습니다)\n- 이름 (name) → 성함 (성함이 어떻게 되십니까?)\n- 나이 (age) → 연세 (할아버지께서는 연세가 많으십니다)\n- 말 (words/speech) → 말씀 (선생님 말씀이 옳습니다)\n- 생일 (birthday) → 생신 (아버지 생신 축하드립니다)\n\n2. 간접 높임(Indirect Honorifics)의 원칙과 과도 존대 방지:\n- 원칙: 높임 대상의 신체 부위, 소유물, 생각, 가족 등을 간접적으로 높일 때는 특수 동사(계시다) 대신 '-(으)시-'만을 서술어에 결합합니다.\n  - \"할머니께서는 눈이 밝으십니다 (O).\"\n  - \"선생님, 감기 기운이 있으세요 (O) / *감기 기운이 계세요 (X).\"\n- 사물 과도 존대 오류 주의: 사람이 아닌 사물 자체를 높여서는 안 됩니다.\n  - \"커피 나오셨습니다 (X - 커피는 사람이 아님) → 커피 나왔습니다 (O)\"",
      "examples": [
        {
          "target": "어르신, 실례지만 성함과 연세가 어떻게 되시는지요?",
          "reading": "Eoreusin, sillyejiman seongham-gwa yeonse-ga eotteoke doesineunjiyo?",
          "translation": "Elder, excuse me, but may I ask what your name and age are ('이름' → '성함', '나이' → '연세')."
        },
        {
          "target": "할머니께서는 아직 귀가 밝으셔서 작은 소리도 잘 들으십니다.",
          "reading": "Harabeoji-kkeseoneun ajik gwi-ga balgeusyeoseo jageun sori-do jal deureusimnida.",
          "translation": "Grandmother still has sharp hearing, so she hears small sounds well (Indirect Honorific: '밝으십니다')."
        },
        {
          "target": "내일은 아버지의 칠순 생신이셔서 온 가족이 모입니다.",
          "reading": "Naeil-eun abeoji-ui chilsun saengsin-isyeoseo on gajok-i moimnida.",
          "translation": "Tomorrow is Father's 70th birthday, so the whole family gathers ('생일' → '생신')."
        },
        {
          "target": "교수님 댁에 초대받아 따뜻하고 정갈한 진지를 대접받았습니다.",
          "reading": "Gyosunim daek-e chodaebada ttatteuthago jeonggalhan jinji-reul daejeopbadatseumnida.",
          "translation": "I was invited to the professor's house and was treated to a warm and neat meal ('집' → '댁', '밥' → '진지')."
        }
      ],
      "mnemonics": [
        "이름은 '성함', 나이는 '연세', 집은 '댁', 밥은 '진지', 생일은 '생신'! 명사도 품격 있게!"
      ],
      "culturalNotes": [
        "한국의 서비스직(카페, 백화점 등)에서 '주문하신 상품이 품절이십니다'처럼 사물을 과도하게 존대하는 것은 문법적으로 잘못된 언어 습관(사물 과도 존대)으로 꼽힙니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "웃어른의 '이름(Name)'을 정중하게 여쭈어볼 때 쓰는 높임 명사는 무엇입니까?",
          "options": [
            "성함",
            "연세",
            "진지"
          ],
          "answerIndex": 0,
          "explanation": "'이름'의 높임 명사는 '성함'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "웃어른의 신체나 소유물을 높이는 간접 높임 문장으로 가장 올바른 것은 어느 것입니까?",
          "options": [
            "교수님께서는 키가 크십니다.",
            "교수님께서는 키가 크계십니다.",
            "교수님께서는 키가 큽니다."
          ],
          "answerIndex": 0,
          "explanation": "주체의 신체(키)를 간접 높임할 때는 특수 어휘가 아닌 '크시다(크다 + 시)'를 씁니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'선생님, 지금 잠시 _____ (Teacher, do you have a moment)?' 빈칸에 알맞은 표현은?",
          "options": [
            "시간 있으세요?",
            "시간 계세요?",
            "시간 있어요?"
          ],
          "answerIndex": 0,
          "explanation": "소유물이나 시간은 간접 높임이므로 '계시다'가 아닌 '있으시다(있으세요)'를 써야 합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'성함이 어떻게 되세요?'(What is your name?)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "성함이 어떻게 되세요?",
            "성함이 어떻게 되세요"
          ],
          "explanation": "성함이(이름의 높임) + 어떻게(의문 부사) + 되세요(되다 + 시 + 어요) = 성함이 어떻게 되세요?"
        }
      ]
    }
  },
  "ko-u12-l5": {
    "id": "ko-u12-l5",
    "subject": "korean",
    "unit": 12,
    "lessonNumber": 5,
    "title": "웃어른 안부 묻기 및 공경의 실전 경어 담화 구성",
    "level": "B1",
    "objective": "부모님, 교수님, 은사님께 안부를 묻고 건강과 일상을 공경하는 완벽한 주체 높임 담화를 구사한다.",
    "presentation": {
      "explanation": "부모님, 교수님, 직장 상사, 어르신과의 대화에서는 주체 높임 선어말어미('-(으)시-'), 특수 어휘('계시다, 드시다, 주무시다'), 높임 명사('성함, 연세, 진지, 댁')를 조화롭게 융합하여 격식 있고 품격 있는 담화를 완성합니다.\n\n1. 실전 안부 문답 대화 모델:\n- A: 교수님, 그동안 평안하셨습니까? 연구실로 찾아뵙게 되어 정말 기쁩니다.\n- B: 어서 와요, 민수 군! 한 학기 동안 잘 지냈나요?\n- A: 네, 교수님께서 늘 따뜻하게 지도해 주신 덕분에 보람차게 보냈습니다. 요즘 건강은 어떠신지요?\n- B: 덕분에 아주 건강하게 잘 지내고 있어요. 부모님께서도 모두 평안하시지요?\n- A: 네, 부모님께서도 매일 운동하시며 건강하게 지내고 계십니다.\n- B: 참 다행이네요. 부모님께도 제 안부 전해 드려요.\n- A: 네, 꼭 전해 드리겠습니다. 좋은 말씀 감사드립니다.",
      "examples": [
        {
          "target": "A: 교수님, 그동안 안녕하셨습니까? B: 네, 민수 군도 잘 지냈지요?",
          "reading": "A: Gyosunim, geudong-an annyeonghasyeotseumnikka? B: Ne, Minsu gun-do jal jinaetjiyo?",
          "translation": "A: Professor, have you been well all this time? B: Yes, have you been doing well too, Minsu?"
        },
        {
          "target": "할머니, 오늘 진지 맛있게 잡수셨어요? 밤에는 따뜻하게 주무세요.",
          "reading": "Harabeoji, oneul jinji masitge jabsusyeosseoyo? Bam-eneun ttatteuthage jumuseyo.",
          "translation": "Grandmother, did you have a delicious meal today? Please sleep warmly at night."
        },
        {
          "target": "아버지께서 퇴근 후 거실에서 조용히 클래식 음악을 들으십니다.",
          "reading": "Abeoji-kkeseo toegeun hu geosil-eseo joyonghi keullaesik eum-ag-eul deureusimnida.",
          "translation": "Father is quietly listening to classical music in the living room after work."
        },
        {
          "target": "선생님께서 해주신 조언 덕분에 큰 용기를 얻을 수 있었습니다.",
          "reading": "Seonsaengnim-kkeseo haejusin joeon deokbun-e keun yonggi-reul eodeul su isseotseumnida.",
          "translation": "Thanks to the advice the teacher gave me, I was able to gain great courage."
        }
      ],
      "mnemonics": [
        "서술어엔 '-(으)시-', 명사엔 '진지/댁/성함', 특수 동사엔 '드시다/계시다'로 한국어 예절의 꽃을 피우자!"
      ],
      "culturalNotes": [
        "한국에서는 오랜만에 윗사람을 만났을 때 '식사하셨습니까?' 또는 '그동안 편안하셨습니까?'라고 묻는 것이 상대방의 안녕과 건강을 배려하는 가장 보편적인 환영 인사입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "오랜만에 뵌 은사님께 정중하게 안부를 묻는 가장 적절한 인사말은 무엇입니까?",
          "options": [
            "교수님, 그동안 안녕하셨습니까?",
            "교수님, 그동안 밥 먹었어?",
            "교수님, 그동안 잘 있었니?"
          ],
          "answerIndex": 0,
          "explanation": "은사님께는 존칭 주체 높임 의문형인 '그동안 안녕하셨습니까?'가 가장 완벽합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "할머니께 식사 여부를 공손히 여쭈어보는 문장으로 가장 올바른 것은 어느 것입니까?",
          "options": [
            "할머니, 진지 잡수셨어요?",
            "할머니, 밥 먹었어요?",
            "할머니, 식사하셨니?"
          ],
          "answerIndex": 0,
          "explanation": "'진지(높임 명사)'와 '잡수셨어요(특수 동사 잡수시다의 과거형)'가 호응하는 첫 번째 문장이 가장 공손합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "웃어른과의 안부 대화 중 높임법 체계가 가장 완벽하게 적용된 문장은?",
          "options": [
            "선생님께서 건강하시고 댁내 두루 평안하시기를 바랍니다.",
            "선생님이 건강하고 집이 다 편안하기를 바란다.",
            "선생님께서 건강하셔서 집에 계셨으면 좋겠다."
          ],
          "answerIndex": 0,
          "explanation": "'선생님께서', '건강하시고', '댁내', '평안하시기를' 등 모든 요소가 존경의 격식을 갖추었습니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'교수님께서 도서관에 계십니다'(The professor is in the library)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "교수님께서 도서관에 계십니다.",
            "교수님께서 도서관에 계십니다"
          ],
          "explanation": "교수님께서(높임 주어) + 도서관에(장소) + 계십니다(특수 높임 서술어) = 교수님께서 도서관에 계십니다."
        }
      ]
    }
  },
  "ko-u13-l1": {
    "id": "ko-u13-l1",
    "subject": "korean",
    "unit": 13,
    "lessonNumber": 1,
    "title": "객체 높임 여격 조사 '께'와 수여 특수 동사 '드리다'",
    "level": "B1",
    "objective": "문장의 목적어나 부사어(행위가 미치는 대상/받는 사람)가 화자보다 높을 때 사용하는 여격 조사 '께'와 '주다'의 겸양/높임형 '드리다'의 결합 규칙을 마스터한다.",
    "presentation": {
      "explanation": "객체 높임법(Object Honorifics)은 문장의 주어가 아닌, 행동이 미치는 대상(목적어나 부사어로 표현되는 사람)이 화자보다 높은 인물일 때 그 대상을 높이고 화자 자신을 낮추는 한국어 경어법의 핵심입니다.\n\n1. 통사적 대응 구조:\n- 평칭 여격 조사 '에게 / 한테' → 존칭 여격 조사 '께':\n  - 친구에게 선물을 주다. → 선생님께 선물을 드리다.\n  - 동생한테 편지를 쓰다. → 할머니께 편지를 쓰다(올리다).\n- 평칭 수여 동사 '주다' → 겸양 수여 동사 '드리다':\n  - 책을 주다 → 책을 드리다\n  - 도와주다 → 도와드리다\n  - 알려주다 → 알려드리다\n\n2. '명사 + 드리다' 합성 겸양 표현:\n- 말씀 드리다 (tell / say to an elder)\n- 인사 드리다 (greet an elder)\n- 전화 드리다 (call an elder on phone)\n- 감사 드리다 (express gratitude)",
      "examples": [
        {
          "target": "스승의 날을 맞이하여 은사님께 카네이션 꽃과 감사 편지를 드렸습니다.",
          "reading": "Seuseung-ui nal-eul majihayeo eunsa-nim-kke kaneisyeon kkot-gwa gamsa pyeonji-reul deuryeotseumnida.",
          "translation": "On Teacher's Day, I gave carnation flowers and a thank-you letter to my teacher ('선생님께' + '드리다')."
        },
        {
          "target": "어머니께 매일 저녁 퇴근길에 안부 전화를 드립니다.",
          "reading": "Eomeoni-kke maeil jeonyeok toegeungil-e anbu jeonhwa-reul deurimnida.",
          "translation": "I make a courtesy phone call to Mother every evening on my way home from work ('전화 드리다')."
        },
        {
          "target": "무거운 짐을 들고 계시는 할머니를 위해 짐을 들어 드렸어요.",
          "reading": "Mugeoun jim-eul deulgo gyesineun harabeoji-reul wihae jim-eul deureo deuryeosseoyo.",
          "translation": "I carried the heavy luggage for Grandmother who was holding it ('들어 드리다')."
        },
        {
          "target": "교수님께 연구 계획서 초안을 이메일로 보내 드렸습니다.",
          "reading": "Gyosunim-kke yeongu gyehoekseo choan-eul imeil-ro bonae deuryeotseumnida.",
          "translation": "I sent the draft of the research proposal to the professor by email ('보내 드리다')."
        }
      ],
      "mnemonics": [
        "받는 분이 높은 분이면 '에게' 대신 '께', '주다' 대신 '드리다'! 깍듯한 선물과 마음의 '드리다'!"
      ],
      "culturalNotes": [
        "한국에서는 윗사람에게 물건을 건네드릴 때 반드시 '두 손'으로 공손히 받쳐 드려야 하며, 한 손으로만 물건을 건네는 것은 큰 결례입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'선생님(Teacher)'에게 물건을 건넬 때 결합할 가장 알맞은 여격 조사는 무엇입니까?",
          "options": [
            "께",
            "에게",
            "한테"
          ],
          "answerIndex": 0,
          "explanation": "웃어른이나 존경의 대상인 부사어 뒤에는 존칭 여격 조사 '께'가 결합합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'할아버지께 선물을 주다'를 완벽한 객체 높임으로 바르게 고친 문장은 어느 것입니까?",
          "options": [
            "할아버지께 선물을 드렸습니다.",
            "할아버지에게 선물을 주었습니다.",
            "할아버지가 선물을 드렸습니다."
          ],
          "answerIndex": 0,
          "explanation": "여격 조사 '께'와 겸양 동사 '드리다'가 결합한 '할아버지께 선물을 드렸습니다'가 완벽합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'제가 교수님을 _____ (I will help the professor).' 빈칸에 알맞은 객체 높임형은?",
          "options": [
            "도와 드리겠습니다",
            "도와 주겠습니다",
            "도와 계시겠습니다"
          ],
          "answerIndex": 0,
          "explanation": "높임 대상인 교수님을 위해 돕는 행위이므로 겸양 수여 동사 '도와 드리겠습니다'가 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'선생님께 선물을 드렸어요'(I gave a present to the teacher)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "선생님께 선물을 드렸어요.",
            "선생님께 선물을 드렸어요"
          ],
          "explanation": "선생님께(여격) + 선물을(목적어) + 드렸어요(드리다 과거형) = 선생님께 선물을 드렸어요."
        }
      ]
    }
  },
  "ko-u13-l2": {
    "id": "ko-u13-l2",
    "subject": "korean",
    "unit": 13,
    "lessonNumber": 2,
    "title": "동행 및 동반의 객체 높임 특수 동사 '모시다'",
    "level": "B1",
    "objective": "웃어른을 데리고 가거나 동행하여 모실 때 평칭 '데리다/데려가다' 대신 사용하는 특수 동사 '모시다 / 모시고 가다 / 모셔다 드리다'의 용법을 체득한다.",
    "presentation": {
      "explanation": "화자가 웃어른과 함께 동행하거나 어딘가로 안내하여 데려갈 때는 평칭 동사 '데리다(데리고 가다, 데려다주다)'를 결코 쓰지 않고, 극존칭 객체 특수 동사 '모시다'를 사용합니다.\n\n1. 통사적 대응 구조:\n- 평칭: 동생을 데리고 병원에 가다. → 높임: 할머니를 모시고 병원에 가다.\n- 평칭: 친구를 집에 데려다주다. → 높임: 부모님을 댁에 모셔다 드리다.\n- 평칭: 손님을 방으로 데려오다. → 높임: 귀빈을 VIP룸으로 모셔오다.\n\n2. '모시다'의 다양한 의미 영역:\n- 동행 (Accompany): \"부모님을 모시고 제주도로 효도 여행을 다녀왔습니다.\"\n- 배웅 및 마중 (Escort / Drive): \"제가 공항까지 차로 모셔다 드리겠습니다.\"\n- 봉양 및 거주 (Live with / Take care of): \"시부모님을 정성껏 모시고 삽니다.\"",
      "examples": [
        {
          "target": "어머니를 모시고 대학병원 안과에 정기 검진을 다녀왔습니다.",
          "reading": "Eomeoni-reul mosigo daehakbyeongwon an-gwa-e jeonggi geomjin-eul danyeowatseumnida.",
          "translation": "I accompanied Mother and went to the university hospital ophthalmology department for a routine checkup ('모시고 가다')."
        },
        {
          "target": "비가 많이 오니 제가 우산으로 교수님을 연구동까지 모셔다 드릴게요.",
          "reading": "Bi-ga mani oni je-ga usan-euro gyosunim-eul yeongudong-kkaji mosyeoda deurilgeyo.",
          "translation": "Since it is raining heavily, I will escort the professor to the research building with an umbrella ('모셔다 드리다')."
        },
        {
          "target": "오늘 저녁에 귀한 손님을 모시고 유명한 한정식 식당에 갑니다.",
          "reading": "Oneul jeonyeok-e gwihan sonnim-eul mosigo yumyeonghan hanjeongsik sikdang-e gamnida.",
          "translation": "This evening, I am hosting a precious guest and going to a famous Korean course restaurant."
        },
        {
          "target": "저희 부부는 시골에 계신 부모님을 서울 집으로 모셔왔습니다.",
          "reading": "Jeohui bubu-neun sigol-e gyesin bumonim-eul Seoul jib-euro mosyeowatseumnida.",
          "translation": "Our married couple brought our parents from the countryside to our home in Seoul ('모셔오다')."
        }
      ],
      "mnemonics": [
        "어른과 함께 갈 땐 '데리고'는 절대 금지! 깍듯이 '모시고 가고, 모셔다 드리자'!"
      ],
      "culturalNotes": [
        "한국에서 윗사람과 동행하여 걸을 때는 어른보다 반 걸음 정도 뒤쪽이나 옆쪽에서 보폭을 맞추며 걷는 것이 '모시는' 전통적인 예절입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'할아버지를 데리고 병원에 갔다'를 올바른 객체 높임으로 바꾼 문장은 무엇입니까?",
          "options": [
            "할아버지를 모시고 병원에 갔습니다.",
            "할아버지를 데리고 병원에 갔습니다.",
            "할아버지를 가시고 병원에 갔습니다."
          ],
          "answerIndex": 0,
          "explanation": "'데리다'의 객체 높임 특수 동사는 '모시다'이므로 '모시고'가 정확합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'부모님을 집까지 안전하게 차로 데려다주었다'를 객체 높임으로 바르게 표현한 것은 어느 것입니까?",
          "options": [
            "부모님을 댁까지 차로 모셔다 드렸습니다.",
            "부모님을 댁까지 차로 데려다 드렸습니다.",
            "부모님을 집까지 차로 모셔다 주었습니다."
          ],
          "answerIndex": 0,
          "explanation": "목적어 명사 '댁', 동행 동사 '모시다', 수여 보조동사 '드리다'가 완벽히 결합했습니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'제가 교수님을 역까지 _____ (I will escort the professor to the station).' 빈칸에 알맞은 표현은?",
          "options": [
            "모셔다 드리겠습니다",
            "데려다 주겠습니다",
            "가셔다 드리겠습니다"
          ],
          "answerIndex": 0,
          "explanation": "교수님을 배웅하는 상황이므로 '모셔다 드리겠습니다'가 가장 공손하고 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'부모님을 모시고 식당에 갔어요'(I went to the restaurant accompanying my parents)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "부모님을 모시고 식당에 갔어요.",
            "부모님을 모시고 식당에 갔어요"
          ],
          "explanation": "부모님을 + 모시고 + 식당에 + 갔어요 = 부모님을 모시고 식당에 갔어요."
        }
      ]
    }
  },
  "ko-u13-l3": {
    "id": "ko-u13-l3",
    "subject": "korean",
    "unit": 13,
    "lessonNumber": 3,
    "title": "만남과 예방(禮訪)의 객체 높임 특수 동사 '뵙다 / 뵈다'",
    "level": "B1",
    "objective": "웃어른을 만나거나 찾아뵐 때 '만나다/보다' 대신 사용하는 '뵙다 / 뵈다'의 형태 구분(뵙겠습니다 vs 봬요)과 공손한 인사법을 익힌다.",
    "presentation": {
      "explanation": "화자가 웃어른을 직접 만나거나 찾아가는 행위(Visit/Meet)를 표현할 때는 일반 동사 '만나다'나 '보다' 대신 자신을 낮추는 겸양 특수 동사 '뵙다 / 뵈다'를 사용합니다.\n\n1. 형태 및 철자 구별 규칙 (Spelling Rules):\n- 자음으로 시작하는 어미 앞 → '뵙-':\n  - 뵙겠습니다 (I will see you)\n  - 뵙고 싶었습니다 (I wanted to see you)\n  - 뵙게 되어 영광입니다 (It is an honor to meet you)\n- 모음으로 시작하는 어미 앞 → '뵈-' + '-어(요)' = '봬(요)':\n  - 뵈다 + 어요 → 봬요 (내일 봬요 - *뵈어요 축약)\n  - 뵈다 + 었습니다 → 뵀습니다 (어제 뵀습니다 - *뵈었습니다 축약)\n- 의도/목적 어미 앞 → '뵈러':\n  - 뵈러 가다 (교수님을 뵈러 연구실에 갑니다)\n\n2. 필수적인 첫인사 및 약속 공식:\n- \"처음 뵙겠습니다. 반갑습니다.\"\n- \"내일 오후 세 시에 찾아뵙겠습니다.\"",
      "examples": [
        {
          "target": "처음 뵙겠습니다. 이번 학기 신입 연구원 김민수라고 합니다.",
          "reading": "Cheo-eum boepgetseumnida. Ibeon hakgi sin-ip yeonguwon Kim Minsu-rago hamnida.",
          "translation": "Nice to meet you for the first time. I am Minsu Kim, the new researcher this semester ('처음 뵙겠습니다')."
        },
        {
          "target": "교수님, 내일 오후 두 시에 연구실로 찾아봬도 될까요?",
          "reading": "Gyosunim, naeil ohu du si-e yeongusil-ro chajabaedo doelkkayo?",
          "translation": "Professor, may I visit you in your office tomorrow at 2 PM? ('찾아봬도' = 찾아뵈- + -어도)."
        },
        {
          "target": "오랫동안 뵙지 못했던 고등학교 은사님을 드디어 뵀습니다.",
          "reading": "Oraedong-an boepji mothaetdeon godeunghakgyo eunsanim-eul deudieo baetseumnida.",
          "translation": "I finally met my high school teacher whom I had not seen for a long time ('뵀습니다' = 뵈었습니다)."
        },
        {
          "target": "선생님, 오늘 정말 감사했습니다. 다음 주 월요일에 봬요!",
          "reading": "Seonsaengnim, oneul jeongmal gamsahaetseumnida. Daeum ju woryoil-e bwaeyo!",
          "translation": "Teacher, thank you so much today. See you next Monday ('봬요' = 뵈어요)!"
        }
      ],
      "mnemonics": [
        "자음 앞엔 '뵙겠습니다', 모음 앞엔 '봬요(찾아뵀어요)', 목적은 '뵈러 가다'! 철자까지 완벽하게!"
      ],
      "culturalNotes": [
        "한국어 문자 메시지나 이메일에서 '내일 뵈요(X)'라고 잘못 쓰는 경우가 흔하지만, '뵈어요'의 준말은 반드시 '봬요(O)'로 표기해야 하는 맞춤법 핵심 사항입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "처음 만난 웃어른께 건네는 가장 표준적이고 정중한 인사말은 무엇입니까?",
          "options": [
            "처음 뵙겠습니다.",
            "처음 만나겠습니다.",
            "처음 보겠습니다."
          ],
          "answerIndex": 0,
          "explanation": "첫 만남의 정중한 인사말은 '처음 뵙겠습니다'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'다음 주에 만나요(See you next week)'를 선생님께 올바른 해요체 높임으로 표현한 것은 어느 것입니까?",
          "options": [
            "다음 주에 봬요.",
            "다음 주에 뵈요.",
            "다음 주에 뵙어요."
          ],
          "answerIndex": 0,
          "explanation": "'뵈다'에 '-어요'가 결합하여 축약된 올바른 표기는 '봬요'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'교수님을 _____ 연구실에 갔습니다 (I went to the lab to see the professor).' 빈칸에 알맞은 형태는?",
          "options": [
            "뵈러",
            "뵙으러",
            "봬러"
          ],
          "answerIndex": 0,
          "explanation": "목적 연결어미 '-(으)러' 앞에서는 어간 '뵈-' 뒤에 '러'가 붙어 '뵈러'가 됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'내일 연구실에서 뵙겠습니다'(I will see you in the office tomorrow)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "내일 연구실에서 뵙겠습니다.",
            "내일 연구실에서 뵙겠습니다"
          ],
          "explanation": "내일 + 연구실에서 + 뵙겠습니다 = 내일 연구실에서 뵙겠습니다."
        }
      ]
    }
  },
  "ko-u13-l4": {
    "id": "ko-u13-l4",
    "subject": "korean",
    "unit": 13,
    "lessonNumber": 4,
    "title": "질문과 조언 요청의 객체 높임 '여쭙다 / 여쭤보다'",
    "level": "B1",
    "objective": "웃어른께 궁금한 점을 묻거나 자문을 구할 때 '묻다' 대신 자신을 낮추며 공손히 질문하는 '여쭙다 / 여쭤보다'의 문법과 화용을 마스터한다.",
    "presentation": {
      "explanation": "화자가 웃어른께 어떤 사실을 질문하거나 의견을 구할 때는 일반 동사 '묻다(물어보다)' 대신 겸양 특수 동사 '여쭙다 / 여쭤보다(여쭈어보다)'를 사용합니다.\n\n1. 형태 및 활용 규칙 (ㅂ 불규칙 활용):\n- 기본형: 여쭙다 (또는 여쭈다)\n- 자음 어미 앞: 여쭙겠습니다, 여쭙고 싶습니다\n- 모음 어미 앞: 여쭙- + -어 → 여쭈어 / 여쭤 (여쭤보다, 여쭤봤습니다)\n\n2. '여쭙다' vs '말씀을 여쭙다':\n- \"교수님, 논문 주제에 대해 한 가지 여쭤보고 싶습니다.\"\n- \"부모님께 먼저 말씀을 여쭙고 허락을 받겠습니다.\"\n\n3. 조언과 자문을 구할 때의 관용적 화법:\n- \"실례지만 한 가지만 여쭤봐도 되겠습니까?\" (Excuse me, but may I ask you one question?)\n- \"잘 모르는 부분이 있어서 여쭙고자 찾아왔습니다.\"",
      "examples": [
        {
          "target": "교수님, 이번 학기 과제 제출 기한에 대해 한 가지 여쭤보고 싶습니다.",
          "reading": "Gyosunim, ibeon hakgi gwaje jechul gihan-e daehae han gaji yeojjwobogo sipseumnida.",
          "translation": "Professor, I would like to ask one question regarding the assignment submission deadline ('여쭤보다')."
        },
        {
          "target": "실례지만 길을 잘 몰라서 그러는데 버스 정류장 위치 좀 여쭤봐도 될까요?",
          "reading": "Sillyejiman gil-eul jal mollaseo geureoneunde beoseu jeongnyujang wichi jom yeojjwobaedo doelkkayo?",
          "translation": "Excuse me, but I don't know the way well, so may I ask the location of the bus stop?"
        },
        {
          "target": "앞으로의 진로에 대해 아버지께 조언을 여쭙고 깊이 고민했습니다.",
          "reading": "Apeuro-ui jinro-e daehae abeoji-kke joeon-eul yeojjupgo gipi gominhaetseumnida.",
          "translation": "I asked Father for advice regarding my future career path and pondered deeply ('여쭙고')."
        },
        {
          "target": "선생님께 궁금한 점을 여쭈어보았더니 아주 친절하게 설명해 주셨습니다.",
          "reading": "Seonsaengnim-kke gunggeumhan jeom-eul yeojjueoboatdeoni aju chinjeolhage seolmyeonghae jusyeotseumnida.",
          "translation": "When I asked the teacher about things I was curious about, they explained very kindly."
        }
      ],
      "mnemonics": [
        "어른께 물어볼 땐 '물어보다' 말고 '여쭤보다'! ㅂ 불규칙이라 '여쭤보겠습니다'!"
      ],
      "culturalNotes": [
        "한국의 학계나 직장에서 윗사람에게 질문할 때는 '질문이 있습니다'보다 '한 가지 여쭤봐도 되겠습니까?'로 시작하는 것이 훨씬 더 정중하고 공손한 인상을 줍니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'선생님께 질문을 묻다'를 객체 높임으로 바르게 표현한 문장은 무엇입니까?",
          "options": [
            "선생님께 질문을 여쭤보았습니다.",
            "선생님께 질문을 물어보았습니다.",
            "선생님에게 질문을 물었습니다."
          ],
          "answerIndex": 0,
          "explanation": "웃어른께 질문할 때는 특수 겸양 동사인 '여쭤보다(여쭙다)'를 씁니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'교수님께 길을 물어봐도 됩니까?'를 정중한 허가 질문으로 바르게 고친 것은 어느 것입니까?",
          "options": [
            "교수님, 한 가지 여쭤봐도 될까요?",
            "교수님, 한 가지 물어봐도 될까요?",
            "교수님, 한 가지 말씀해도 될까요?"
          ],
          "answerIndex": 0,
          "explanation": "'여쭤보다'와 허가 어미 '-아/어도 되다'가 결합한 '여쭤봐도 될까요?'가 가장 공손합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'진로 문제에 대해 선배님께 _____ (I would like to ask for advice).' 빈칸에 알맞은 표현은?",
          "options": [
            "조언을 여쭙고 싶습니다",
            "조언을 묻고 싶습니다",
            "조언을 드리고 싶습니다"
          ],
          "answerIndex": 0,
          "explanation": "선배나 윗사람에게 조언을 구하는 질문이므로 '조언을 여쭙고 싶습니다'가 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'한 가지 여쭤봐도 될까요?'(May I ask you one question?)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "한 가지 여쭤봐도 될까요?",
            "한 가지 여쭤봐도 될까요"
          ],
          "explanation": "한 가지(수량) + 여쭤봐도(여쭙다 + 아도) + 될까요(되다 + ㄹ까요) = 한 가지 여쭤봐도 될까요?"
        }
      ]
    }
  },
  "ko-u13-l5": {
    "id": "ko-u13-l5",
    "subject": "korean",
    "unit": 13,
    "lessonNumber": 5,
    "title": "연구실 면담 및 은사님 예방 실전 객체 경어 담화",
    "level": "B1",
    "objective": "여격 조사 '께', 수여 '드리다', 동행 '모시다', 방문 '뵙다', 질문 '여쭙다'를 결합하여 완벽한 격식 상담 담화를 완성한다.",
    "presentation": {
      "explanation": "대학원 진학, 직장 멘토링, 은사님 예방 등의 격식 있는 대면 상황에서는 주체 높임법과 객체 높임법이 복합적으로 얽혀 나타납니다.\n\n1. 실전 연구실 방문 상담 담화 모델:\n- A: 실례합니다, 교수님. 약속드린 시간에 찾아뵈었습니다.\n- B: 어서 들어와요, 민수 군. 날씨가 꽤 쌀쌀하지요?\n- A: 네, 조금 춥지만 찾아뵙게 되어 기쁩니다. 작은 전통차 세트를 준비했는데 교수님께 드리고 싶습니다.\n- B: 고마워요, 아주 향이 좋겠네요. 오늘 어떤 상담을 하고 싶어서 찾아왔나요?\n- A: 이번 졸업 논문 주제에 대해 교수님께 몇 가지 조언을 여쭙고자 찾아왔습니다.\n- B: 그래요, 준비한 논문 계획서가 있으면 보여줘 봐요.\n- A: 네, 여기 출력해 온 자료를 교수님께 드리겠습니다. 꼼꼼히 지도해 주시면 감사하겠습니다.\n- B: 주제가 매우 참신하고 좋네요. 이번 학기 동안 열심히 지도해 줄게요.\n- A: 바쁘신 중에 시간 내어 주셔서 진심으로 감사드립니다. 다음 주에 다시 뵙겠습니다!",
      "examples": [
        {
          "target": "A: 교수님, 약속 시간에 찾아뵈었습니다. B: 네, 민수 군 어서 들어오세요.",
          "reading": "A: Gyosunim, yaksok sigan-e chajabaetseumnida. B: Ne, Minsu gun eoseo deureooseyo.",
          "translation": "A: Professor, I have come to see you at the appointed time. B: Yes, please come in, Minsu."
        },
        {
          "target": "선생님께 약소하지만 정성껏 준비한 선물을 전해 드렸습니다.",
          "reading": "Seonsaengnim-kke yaksohajiman jeongseongkkeot junbihan seonmul-eul jeonhae deuryeotseumnida.",
          "translation": "I presented the gift that I prepared with all my heart to the teacher ('전해 드리다')."
        },
        {
          "target": "학술 대회 발표 준비에 대해 선배님께 노하우를 여쭤보았습니다.",
          "reading": "Haksul daehoe balpyo junbi-e daehae seonbaenim-kke nohau-reul yeojjwoboatseumnida.",
          "translation": "I asked my senior colleague about the know-how for conference presentation preparation."
        },
        {
          "target": "부모님을 모시고 시골 고향에 계신 조부모님 댁을 찾아뵈었습니다.",
          "reading": "Bumonim-eul mosigo sigol gohyang-e gyesin jobumonim daek-eul chajabaetseumnida.",
          "translation": "Accompanying my parents, I visited my grandparents' home in my rural hometown ('모시고' + '찾아뵈었습니다')."
        }
      ],
      "mnemonics": [
        "어른께 드릴 땐 '께'와 '드리다', 동행할 땐 '모시다', 찾아갈 땐 '뵙다', 물어볼 땐 '여쭙다'로 객체 높임 완벽 마스터!"
      ],
      "culturalNotes": [
        "한국에서는 은사님이나 상사의 연구실/사무실에 방문할 때 약속 시간 5분 전에 도착하여 노크를 3번 하고 들어가는 것이 정중한 비즈니스 에티켓입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "교수님 연구실에 들어가며 선물을 건넬 때 가장 적절한 경어 표현은 무엇입니까?",
          "options": [
            "교수님께 드리려고 작은 선물을 준비했습니다.",
            "교수님에게 주려고 작은 선물을 준비했습니다.",
            "교수님이 주려고 작은 선물을 준비했습니다."
          ],
          "answerIndex": 0,
          "explanation": "여격 조사 '께'와 수여 동사 '드리다'가 사용된 첫 번째 문장이 완벽합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "연구실 상담 대화 중 모든 객체/주체 높임법이 완벽히 적용된 것은 어느 것입니까?",
          "options": [
            "논문 주제에 대해 교수님께 조언을 여쭙고자 찾아뵈었습니다.",
            "논문 주제에 대해 교수님에게 조언을 묻고자 찾아보았습니다.",
            "논문 주제에 대해 교수님께 조언을 말하고자 찾아갔습니다."
          ],
          "answerIndex": 0,
          "explanation": "'교수님께', '여쭙고자', '찾아뵈었습니다'가 완벽한 객체 경어 호응을 이룹니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 상담 대화 중 화용론적으로 가장 품격 있고 자연스러운 문장은?",
          "options": [
            "바쁘신 중에 귀한 시간 내어 주셔서 감사드리며, 다음 주에 다시 뵙겠습니다.",
            "바쁜데 시간 줘서 고맙고 다음 주에 다시 만나겠다.",
            "바쁘신 중에 시간 줘서 감사하고 다음 주에 보자."
          ],
          "answerIndex": 0,
          "explanation": "감사 인사('감사드리며')와 다음 약속 인사('다시 뵙겠습니다')가 완벽한 격식을 갖추었습니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'교수님께 조언을 여쭤보았습니다'(I asked the professor for advice)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "교수님께 조언을 여쭤보았습니다.",
            "교수님께 조언을 여쭤보았습니다"
          ],
          "explanation": "교수님께 + 조언을 + 여쭤보았습니다 = 교수님께 조언을 여쭤보았습니다."
        }
      ]
    }
  },
  "ko-u14-l1": {
    "id": "ko-u14-l1",
    "subject": "korean",
    "unit": 14,
    "lessonNumber": 1,
    "title": "자연적 인과 및 순차적 이유 연결어미 (-아/어서)",
    "level": "B1",
    "objective": "앞 절의 상황이 자연스러운 원인/이유가 되어 뒤 절의 결과가 필연적으로 발생함을 나타내는 '-아/어서'의 형태 결합과 문법 제약을 체득한다.",
    "presentation": {
      "explanation": "'-아/어서'는 앞 절의 사태가 뒤 절의 행위나 상태를 발생시키는 직접적이고 자연스러운 원인(Natural Cause)임을 나타냅니다.\n\n1. 형태 결합 규칙 (모음 조화):\n- 양성 모음 (ㅏ, ㅗ) 어간 + -아서: 가다 → 가서, 보다 → 봐서, 맑다 → 맑아서\n- 음성 모음 (ㅓ, ㅜ, ㅡ, ㅣ 등) 어간 + -어서: 먹다 → 먹어서, 춥다 → 추워서 (ㅂ 불규칙), 늦다 → 늦어서\n- '하다' 동사/형용사 → 해서: 피곤하다 → 피곤해서, 바쁘다 → 바빠서 (ㅡ 탈락)\n\n2. '-아/어서'의 핵심 문법적 제약 (Crucial Constraints):\n- 제약 1: 명령문(-으세요) 및 청유문(-자, -(으)ㅂ시다)에 결합 불가!\n  - \"비가 와서 우산을 쓰세요 (X)\" → \"비가 오니까 우산을 쓰세요 (O)\"\n- 제약 2: 앞 절에 과거 시제 선어말어미('-았/었-') 결합 불가!\n  - \"어제 늦게 잤어서 피곤해요 (X)\" → \"어제 늦게 자서 피곤해요 (O)\"\n- 제약 3: 인사, 사과, 감사의 관용 표현에는 오직 '-아/어서'만 사용!\n  - \"도와주셔서 감사합니다 (O)\", \"늦어서 죄송합니다 (O)\"",
      "examples": [
        {
          "target": "어제 밤늦게까지 야근을 해서 오늘 아침에 늦잠을 잤어요.",
          "reading": "Eoje bamneutge-kkaji yageun-eul haeseo oneul achim-e neutjam-eul jasseoyo.",
          "translation": "I worked overtime until late last night, so I overslept this morning ('-아/어서')."
        },
        {
          "target": "갑자기 소나기가 내려서 옷이 다 젖었습니다.",
          "reading": "Gapjagi sonagi-ga naeryeoseo os-i da jeojeotseumnida.",
          "translation": "A sudden rain shower fell, so my clothes got completely wet."
        },
        {
          "target": "감기에 심하게 걸려서 오늘 학교 수업에 가지 못했습니다.",
          "reading": "Gamgi-e simhage geollyeoseo oneul hakgyo sueop-e gaji mothaetseumnida.",
          "translation": "I caught a bad cold, so I could not go to school classes today."
        },
        {
          "target": "저를 친절하게 도와주셔서 진심으로 감사드립니다.",
          "reading": "Jeo-reul chinjeolhage dowajusyeoseo jinsim-euro gamsadeurimnida.",
          "translation": "Thank you very much for kindly helping me (Idiomatic gratitude with '-아/어서')."
        }
      ],
      "mnemonics": [
        "자연스런 원인은 '-아/어서'! 하지만 '과거(-았/었-)'와 '명령/청유(-으세요/합시다)'는 절대 금지!"
      ],
      "culturalNotes": [
        "한국어에서 사과나 감사를 표할 때는 오직 '-아/어서'만을 씁니다. '도와주니까 감사합니다'나 '늦었기 때문에 죄송합니다'는 한국인에게 매우 어색하고 딱딱하게 들립니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'배가 고프다(to be hungry)'를 '-아/어서'로 바르게 연결한 형태는 무엇입니까?",
          "options": [
            "배가 고파서",
            "배가 고파서서",
            "배가 고펐어서"
          ],
          "answerIndex": 0,
          "explanation": "'고프다'의 어간 끝 모음 'ㅡ'가 탈락하고 양성 모음 'ㅏ'가 붙어 '배가 고파서'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "다음 중 '-아/어서'의 문법적 제약을 위반한 비문은 어느 것입니까?",
          "options": [
            "날씨가 좋아서 산책하러 갑시다.",
            "날씨가 좋아서 기분이 상쾌해요.",
            "날씨가 좋아서 빨래가 잘 말라요."
          ],
          "answerIndex": 0,
          "explanation": "'-아/어서'는 청유문('-갑시다')의 이유로 쓰일 수 없습니다 (청유문에는 '날씨가 좋으니까' 사용)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'약속 시간에 _____ 죄송합니다 (I am sorry for being late).' 빈칸에 가장 알맞은 표현은?",
          "options": [
            "늦어서",
            "늦으니까",
            "늦었기 때문에"
          ],
          "answerIndex": 0,
          "explanation": "사과 표현('죄송합니다') 앞의 이유에는 관용적으로 '-아/어서(늦어서)'를 써야 자연스럽습니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'비가 와서 우산을 썼어요'(It rained, so I used an umbrella)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "비가 와서 우산을 썼어요.",
            "비가 와서 우산을 썼어요"
          ],
          "explanation": "비가 + 와서(오다 + 아서) + 우산을 + 썼어요 = 비가 와서 우산을 썼어요."
        }
      ]
    }
  },
  "ko-u14-l2": {
    "id": "ko-u14-l2",
    "subject": "korean",
    "unit": 14,
    "lessonNumber": 2,
    "title": "주관적 판단·발견 및 명령·청유 전제 어미 (-(으)니까)",
    "level": "B1",
    "objective": "화자의 주관적 판단이나 상황적 발견을 근거로 제시하며, 명령문 및 청유문의 당위적 전제를 나타내는 '-(으)니까'의 문법을 마스터한다.",
    "presentation": {
      "explanation": "'-(으)니까'는 화자가 경험하거나 인지한 주관적 사실/판단을 근거로 삼아 상대방에게 권유, 제안, 명령, 행동을 촉구할 때 쓰이는 대표적인 이유 연결어미입니다.\n\n1. 형태 결합 규칙:\n- 모음 종결 어간 or 'ㄹ' 받침 어간 + -니까:\n  - 가다 → 가니까, 보다 → 보니까, 만들다 → 만드니까 (ㄹ 탈락), 살다 → 사니까\n- 'ㄹ' 제외 자음 종결 어간 + -으니까:\n  - 먹다 → 먹으니까, 읽다 → 읽으니까, 닫다 → 닫으니까\n\n2. '-(으)니까'의 강력한 문법적 특징:\n- 특징 1: 명령문(-으세요, -아/어라) 및 청유문(-자, -(으)ㅂ시다)과 완벽하게 결합!\n  - \"날씨가 추우니까 따뜻하게 입으세요 (O)\"\n  - \"시간이 늦었으니까 택시를 타자 (O)\"\n- 특징 2: 앞 절에 과거 시제 선어말어미('-았/었-') 결합 가능!\n  - \"점심을 많이 먹었으니까 저녁은 가볍게 먹읍시다 (O)\"\n- 특징 3: 발견/확인(Discovery)의 의미: \"집에 가니까 동생이 청소하고 있었어요.\"",
      "examples": [
        {
          "target": "도로가 많이 막히니까 지하철을 타고 이동합시다.",
          "reading": "Doro-ga mani makhini-kka jihacheol-eul tago idonghapsida.",
          "translation": "The roads are heavily congested, so let's travel by subway ('-(으)니까' + 청유문)."
        },
        {
          "target": "밖이 많이 쌀쌀하니까 외투를 따뜻하게 입고 나가세요.",
          "reading": "Bakk-i mani ssalssalhani-kka oetu-reul ttatteuthage ipgo nagaseyo.",
          "translation": "It is very chilly outside, so please dress warmly in an overcoat and go out ('-(으)니까' + 명령문)."
        },
        {
          "target": "아침에 창문을 여니까 상쾌한 산바람이 불어왔어요.",
          "reading": "Achim-e changmun-eul yeoni-kka sangkwaehan sanbaram-i bureowasseoyo.",
          "translation": "When I opened the window in the morning, a refreshing mountain breeze blew in (Discovery/Condition)."
        },
        {
          "target": "어제 충분히 쉬었으니까 오늘부터 다시 열심히 공부합시다.",
          "reading": "Eoje chungbunhi swieosseuni-kka oneulbuteo dasi yeolsimhi gongbuhapsida.",
          "translation": "Since we rested enough yesterday, let's study hard again starting today (Past tense '-았/었-' allowed)."
        }
      ],
      "mnemonics": [
        "명령할 때(-으세요)와 제안할 때(-ㅂ시다)는 무조건 '-(으)니까'! 과거('-았/었-')도 환영!"
      ],
      "culturalNotes": [
        "한국인과의 일상 대화에서 상대방에게 무언가를 배려하거나 제안할 때 '-(으)니까'는 화자의 다정하고 주도적인 뉘앙스를 자연스럽게 전달합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "명령문 '서두르세요(Please hurry)' 앞의 이유 절로 가장 올바른 형태는 무엇입니까?",
          "options": [
            "시간이 없으니까",
            "시간이 없어서",
            "시간이 없으면"
          ],
          "answerIndex": 0,
          "explanation": "명령문의 전제 이유로는 '-아/어서'가 아닌 '-(으)니까'를 사용하므로 '시간이 없으니까'가 정확합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "청유문 '-합시다'와 결합하여 문법적으로 완벽한 문장은 어느 것입니까?",
          "options": [
            "날씨가 화창하니까 한강 공원으로 소풍을 갑시다.",
            "날씨가 화창해서 한강 공원으로 소풍을 갑시다.",
            "날씨가 화창하지만 한강 공원으로 소풍을 갑시다."
          ],
          "answerIndex": 0,
          "explanation": "청유문('-갑시다') 앞에는 반드시 '-(으)니까'가 호응합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'점심을 이미 _____ 카페로 바로 가요 (Since we already ate lunch, let's go straight to the cafe).' 빈칸에 알맞은 형태는?",
          "options": [
            "먹었으니까",
            "먹었어서",
            "먹었기"
          ],
          "answerIndex": 0,
          "explanation": "과거 시제 선어말어미와 제안형 청유가 결합할 수 있는 어미는 '먹었으니까'뿐입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'추우니까 따뜻하게 입으세요'(It is cold, so please dress warmly)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "추우니까 따뜻하게 입으세요.",
            "추우니까 따뜻하게 입으세요"
          ],
          "explanation": "추우니까(춥다 + 으니까) + 따뜻하게 + 입으세요 = 추우니까 따뜻하게 입으세요."
        }
      ]
    }
  },
  "ko-u14-l3": {
    "id": "ko-u14-l3",
    "subject": "korean",
    "unit": 14,
    "lessonNumber": 3,
    "title": "객관적·공식적 인과 명사화 어미 (-기 때문에)",
    "level": "B1",
    "objective": "동사/형용사를 명사화 접미사 '-기'로 바꾼 후 이유 의존명사 구문 '-기 때문에'를 결합하여 객관적 원인을 명확히 서술하는 문법을 마스터한다.",
    "presentation": {
      "explanation": "'-기 때문에'는 동사나 형용사 어간 뒤에 명사형 어미 '-기'와 원인을 나타내는 명사 '때문에'가 결합한 구조로, 객관적이고 논리적인 인과관계(Objective Cause / Because of)를 엄정하게 서술할 때 쓰입니다.\n\n1. 형태 결합 규칙:\n- 동사 / 형용사 어간 + -기 때문에:\n  - 가다 → 가기 때문에, 먹다 → 먹기 때문에, 춥다 → 춥기 때문에\n- 과거 시제 결합: 어간 + -았/었기 때문에:\n  - 비가 오다 → 비가 왔기 때문에, 공부하다 → 공부했기 때문에\n- 명사 뒤 결합: 명사 + (이)기 때문에 or 명사 + 때문에:\n  - 방학 → 방학이기 때문에 / 방학 때문에, 시험 → 시험 때문에\n\n2. 화용론적 특징:\n- 뉴스 보도, 학술 논문, 공식 연설, 공지사항 등 공식적이고 객관적인 담화에서 가장 선호됨.\n- 주관적인 명령이나 청유문에는 결합하지 않는 것이 원칙입니다.",
      "examples": [
        {
          "target": "폭설이 심하게 내렸기 때문에 모든 항공편의 운항이 결항되었습니다.",
          "reading": "Pokseol-i simhage naeryeotgi ttaemun-e modeun hanggongpyeon-ui unhang-i gyeolhangdoeeotseumnida.",
          "translation": "Because heavy snow fell severely, the operation of all flights was canceled ('-았/었기 때문에')."
        },
        {
          "target": "도로 공사로 인한 교통 정체 때문에 회의 시작 시간에 늦었습니다.",
          "reading": "Doro gongsa-ro inan gyotong jeongche ttaemun-e hoewi sijak sigan-e neujeotseumnida.",
          "translation": "Because of traffic congestion caused by road construction, I was late for the meeting start time (Noun + '때문에')."
        },
        {
          "target": "규칙적으로 유산소 운동을 하기 때문에 체력이 아주 건강합니다.",
          "reading": "Gyuchikjeog-euro yusanso undong-eul hagi ttaemun-e cheryeog-i aju geon-ganghamnida.",
          "translation": "Because I do aerobic exercise regularly, my physical stamina is very healthy."
        },
        {
          "target": "물가가 전년 대비 크게 올랐기 때문에 가계 소비가 위축되었습니다.",
          "reading": "Mulga-ga jeonnyeon daebi keuge ollatgi ttaemun-e gagye sobi-ga wichukdoeeotseumnida.",
          "translation": "Because prices rose significantly compared to the previous year, household consumption contracted."
        }
      ],
      "mnemonics": [
        "논리적이고 객관적인 공식 인과엔 '-기 때문에'! 명사 뒤엔 그냥 '명사 때문에'!"
      ],
      "culturalNotes": [
        "한국의 비즈니스 보고서나 학술 발표에서는 '-아/어서'보다 '-기 때문에'를 사용하는 것이 객관적이고 논리적인 인상을 주어 공신력을 높여줍니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "명사 '비(Rain)' 뒤에 직접 결합하여 원인을 나타내는 올바른 형태는 무엇입니까?",
          "options": [
            "비 때문에 (비이기 때문에)",
            "비 때문에기",
            "비해서"
          ],
          "answerIndex": 0,
          "explanation": "순수 명사 뒤에는 '때문에' 또는 서술격 조사와 결합한 '이기 때문에'가 옵니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "공식 뉴스 보도 문장으로 가장 논리적이고 자연스러운 것은 어느 것입니까?",
          "options": [
            "태풍이 상륙했기 때문에 여객선 운항이 전면 통제되었습니다.",
            "태풍이 상륙해서 여객선 운항을 통제하십시오.",
            "태풍이 상륙하니까 여객선 운항이 통제되었습니다."
          ],
          "answerIndex": 0,
          "explanation": "공식 보도 및 객관적 서술문에는 '-았/었기 때문에'가 가장 적합합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'건강을 매일 관리_____ 질병에 걸리지 않습니다.' 빈칸에 알맞은 객관적 인과 표현은?",
          "options": [
            "하기 때문에",
            "하니까요",
            "해서요"
          ],
          "answerIndex": 0,
          "explanation": "평서문에서 객관적 인과 관계를 나타내는 '하기 때문에'가 가장 완벽합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'비가 오기 때문에 취소되었어요'(It was canceled because it rained)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "비가 오기 때문에 취소되었어요.",
            "비가 오기 때문에 취소되었어요"
          ],
          "explanation": "비가 + 오기 때문에 + 취소되었어요 = 비가 오기 때문에 취소되었어요."
        }
      ]
    }
  },
  "ko-u14-l4": {
    "id": "ko-u14-l4",
    "subject": "korean",
    "unit": 14,
    "lessonNumber": 4,
    "title": "3대 이유 어미(-아/어서 vs -(으)니까 vs -기 때문에) 비교 및 문법 제약",
    "level": "B1",
    "objective": "'-아/어서', '-(으)니까', '-기 때문에'의 명령/청유문 제약, 시제 선어말어미 제약, 관용적 감사/사과 제약을 일목요연하게 비교 분석한다.",
    "presentation": {
      "explanation": "한국어 3대 이유 어미는 언뜻 유사해 보이지만 엄격한 문법적 제약과 화용론적 기능 차이가 존재합니다.\n\n1. 핵심 문법 제약 대조표 (Comparative Matrix):\n- 명령문(-으세요) / 청유문(-ㅂ시다) 결합 가능 여부:\n  - '-아/어서': 절대 불가 (*비가 와서 우산 쓰세요 X)\n  - '-(으)니까': 완벽 결합 (비가 오니까 우산 쓰세요 O)\n  - '-기 때문에': 결합 어색/불가 (*비가 오기 때문에 우산 쓰세요 X)\n- 앞 절 과거 시제('-았/었-') 결합 여부:\n  - '-아/어서': 결합 불가 (*늦었어서 죄송합니다 X)\n  - '-(으)니까': 결합 가능 (늦었으니까 서두르자 O)\n  - '-기 때문에': 결합 가능 (늦었기 때문에 지각했습니다 O)\n- 감사 / 사과 관용 표현 호응:\n  - '-아/어서': 전용 표현 (도와주셔서 감사합니다 O, 늦어서 죄송합니다 O)\n  - '-(으)니까': 사용 불가 (*도와주니까 감사합니다 X)\n  - '-기 때문에': 딱딱하고 부자연스러움 (*도와주었기 때문에 감사합니다 X)",
      "examples": [
        {
          "target": "A: 날씨가 추우니까 창문을 닫으세요. B: 네, 바로 닫겠습니다.",
          "reading": "A: Nalssi-ga chuuni-kka changmun-eul dad-euseyo. B: Ne, baro datgetseumnida.",
          "translation": "A: It is cold, so please close the window (Imperative allows only '-(으)니까'). B: Yes, I will close it right away."
        },
        {
          "target": "어제 잠을 잘 못 자서 오늘 하루 종일 머리가 아파요.",
          "reading": "Eoje jam-eul jal mot jaseo oneul haru jong-il meori-ga apayo.",
          "translation": "I couldn't sleep well yesterday, so my head hurts all day today (Natural consequence with '-아/어서')."
        },
        {
          "target": "지하철 고장으로 인해 도착이 늦었기 때문에 시험을 보지 못했습니다.",
          "reading": "Jihacheol gojang-euro inhe dochak-i neujeotgi ttaemun-e siheom-eul boji mothaetseumnida.",
          "translation": "Because my arrival was delayed due to subway breakdown, I could not take the exam (Objective cause with '-았/었기 때문에')."
        },
        {
          "target": "초대해 주셔서 감사드리며, 늦지 않게 도착하도록 하겠습니다.",
          "reading": "Chodaehae jusyeoseo gamsadeurimyeo, neutji anhge dochakhadorok hagetseumnida.",
          "translation": "Thank you for inviting me, and I will make sure to arrive without being late (Gratitude with '-아/어서')."
        }
      ],
      "mnemonics": [
        "명령·청유엔 '-(으)니까', 감사·사과엔 '-아/어서', 공식 보도엔 '-기 때문에'! 3대 법칙!"
      ],
      "culturalNotes": [
        "이유 연결어미를 잘못 사용하면 문법적 오류뿐 아니라 상대방에게 무례하거나 어색한 인상을 줄 수 있으므로 문장의 종결 형태(명령, 청유, 감사 등)를 반드시 확인해야 합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'배가 부르다'를 이유로 하여 '식사를 그만합시다(Let's stop eating)'와 결합할 때 올바른 어미는?",
          "options": [
            "배가 부르니까",
            "배가 불러서",
            "배가 부르기 때문에"
          ],
          "answerIndex": 0,
          "explanation": "청유문('-합시다') 앞에는 오직 '-(으)니까(배가 부르니까)'만 결합할 수 있습니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "다음 중 세 이유 어미의 문법적 제약이 올바르게 지켜진 문장은 어느 것입니까?",
          "options": [
            "시간이 늦었으니 어서 집으로 돌아가세요.",
            "시간이 늦어서 어서 집으로 돌아가세요.",
            "시간이 늦기 때문에 어서 집으로 돌아가세요."
          ],
          "answerIndex": 0,
          "explanation": "명령문('-돌아가세요') 앞에는 '-(으)니까(축약형: -(으)니)'가 결합한 첫 번째 문장이 유일하게 올바릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 세 문장의 문법적 정오 판단이 모두 올바른 것은?",
          "options": [
            "1. 와 주셔서 감사합니다 (O) / 2. 추우니까 코트 입으세요 (O) / 3. 비가 와서 우산 쓰세요 (X)",
            "1. 와 주셔서 감사합니다 (X) / 2. 추우니까 코트 입으세요 (O) / 3. 비가 와서 우산 쓰세요 (O)",
            "1. 와 주니까 감사합니다 (O) / 2. 추워서 코트 입으세요 (O) / 3. 비가 오기 때문에 우산 쓰세요 (O)"
          ],
          "answerIndex": 0,
          "explanation": "감사에는 '-아/어서', 명령에는 '-(으)니까'가 맞으며, 명령에 '-아/어서'를 쓴 3번은 비문(X)입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'도와주셔서 감사합니다'(Thank you for helping me)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "도와주셔서 감사합니다.",
            "도와주셔서 감사합니다"
          ],
          "explanation": "도와주셔서 + 감사합니다 = 도와주셔서 감사합니다."
        }
      ]
    }
  },
  "ko-u14-l5": {
    "id": "ko-u14-l5",
    "subject": "korean",
    "unit": 14,
    "lessonNumber": 5,
    "title": "핑계, 사유 설명 및 약속 변경 실전 담화 구성",
    "level": "B1",
    "objective": "지각 사유 해명, 일정 변경 요청, 불가피한 사정 설명 담화에서 이유 어미를 상황에 맞게 유창하게 구사한다.",
    "presentation": {
      "explanation": "일상 및 비즈니스 상황에서 약속 시간을 변경하거나 불가피한 사유로 결석/지각할 때는 사과('-아/어서'), 사유 설명('-아/어서, -기 때문에'), 대안 제시 및 청유('-(으)니까')를 유기적으로 연결합니다.\n\n1. 실전 약속 변경 담화 모델:\n- A: 수진 씨, 오늘 오후 2시 회의에 참석하기 어려울 것 같아요. 정말 죄송합니다.\n- B: 민수 씨, 무슨 일 있으세요?\n- A: 갑자기 회사 서버에 오류가 생겨서 긴급 복구 작업을 해야 하거든요. 작업에 시간이 걸리기 때문에 3시 이후에나 끝날 것 같습니다.\n- B: 그렇군요. 중요한 긴급 상황이니까 너무 걱정하지 마세요.\n- A: 배려해 주셔서 진심으로 감사합니다. 회의를 4시로 미룰 수 있을까요?\n- B: 네, 4시에는 저도 일정이 비어 있으니까 4시에 봬요!\n\n2. 필수 완곡 사유 표현:\n- \"갑자기 급한 사정이 생겨서...\"\n- \"몸이 조금 안 좋아서 그러는데...\"\n- \"시간을 조금만 늦출 수 있을까요?\"",
      "examples": [
        {
          "target": "A: 차가 막혀서 10분 정도 늦을 것 같아요. B: 네, 서두르지 말고 조심히 오세요.",
          "reading": "A: Cha-ga makhyeoseo sipbun jeongdo neujeul geot gat-ayo. B: Ne, seodureuji malgo josimhi oseyo.",
          "translation": "A: The traffic is backed up, so I think I will be about 10 minutes late. B: Yes, don't rush and come safely."
        },
        {
          "target": "갑작스러운 출장이 잡혀서 이번 주말 모임에 참석할 수 없게 되었습니다.",
          "reading": "Gapjakseureoun chuljang-i japhyeoseo ibeon jumal moim-e chamseokhal su eopge doeeotseumnida.",
          "translation": "A sudden business trip was scheduled, so I came to be unable to attend this weekend's gathering."
        },
        {
          "target": "날씨가 궂어서 등산은 다음 주로 연기하는 것이 좋겠습니다.",
          "reading": "Nalssi-ga gujeoseo deungsan-eun daeum ju-ro yeongihaneun geos-i joketseumnida.",
          "translation": "The weather is bad, so it would be better to postpone mountain hiking to next week."
        },
        {
          "target": "사정을 너그럽게 이해해 주셔서 진심으로 감사드립니다.",
          "reading": "Sajeong-eul neogeureopge ihaehae jusyeoseo jinsim-euro gamsadeurimnida.",
          "translation": "Thank you very much for generously understanding my circumstances."
        }
      ],
      "mnemonics": [
        "지각엔 '늦어서 죄송해요', 제안엔 '바쁘니까 미뤄요', 감사엔 '이해해 주셔서 감사해요'!"
      ],
      "culturalNotes": [
        "한국에서는 약속에 늦거나 변경할 때 미리 연락하여 사유를 명확히 밝히고 사과하는 것이 신뢰를 지키는 가장 중요한 인간관계의 기본 매너입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "교통 체증으로 늦을 때 상대방에게 상황을 설명하는 가장 자연스러운 문장은 무엇입니까?",
          "options": [
            "차가 많이 막혀서 조금 늦을 것 같습니다.",
            "차가 많이 막히니까 조금 늦었습니다.",
            "차가 많이 막히면 조금 늦으세요."
          ],
          "answerIndex": 0,
          "explanation": "자신의 지각 원인을 완곡하게 설명할 때는 '-아/어서'가 가장 표준적입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "상대방의 양해에 대해 감사함을 표현하는 가장 올바른 문장은 어느 것입니까?",
          "options": [
            "사정을 이해해 주셔서 정말 감사합니다.",
            "사정을 이해해 주니까 정말 감사합니다.",
            "사정을 이해해 주기 때문에 정말 감사합니다."
          ],
          "answerIndex": 0,
          "explanation": "감사 인사 앞에는 오직 '-아/어서(이해해 주셔서)'가 호응합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "약속 변경 대화 중 문맥과 이유 표현이 가장 완벽한 것은?",
          "options": [
            "A: 급한 일이 생겨서 약속을 3시로 미룰 수 있을까요? B: 네, 3시에 만나요.",
            "A: 급한 일이 생기니까 약속을 3시로 미루세요. B: 네, 감사해요.",
            "A: 급한 일이 생기면 약속을 3시로 미뤘어요. B: 네, 좋아요."
          ],
          "answerIndex": 0,
          "explanation": "완곡한 사유 제시('생겨서')와 정중한 가능성 질문('미룰 수 있을까요')이 완벽합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'차가 막혀서 늦었어요'(I was late because traffic was jammed)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "차가 막혀서 늦었어요.",
            "차가 막혀서 늦었어요"
          ],
          "explanation": "차가 + 막혀서(막히다 + 어서) + 늦었어요 = 차가 막혀서 늦었어요."
        }
      ]
    }
  },
  "ko-u15-l1": {
    "id": "ko-u15-l1",
    "subject": "korean",
    "unit": 15,
    "lessonNumber": 1,
    "title": "단순 명제 대조 연결어미 (-지만)",
    "level": "B1",
    "objective": "앞 절의 사실과 뒤 절의 사실이 서로 상반되거나 대조적임을 직관적으로 연결하는 '-지만'의 형태 결합과 통사적 기능을 마스터한다.",
    "presentation": {
      "explanation": "'-지만'은 영어의 'but / although'에 해당하는 대표적인 대조 연결어미로, 앞 절의 명제와 뒤 절의 명제가 서로 직접적으로 상반되거나 대립할 때 사용됩니다.\n\n1. 형태 결합 규칙 (무변화 단순 결합):\n- 동사 / 형용사 어간에 받침 유무와 상관없이 바로 '-지만' 결합:\n  - 크다 → 크지만, 작다 → 작지만, 먹다 → 먹지만, 가다 → 가지만\n- 과거 시제 결합: 어간 + -았/었지만:\n  - 피곤하다 → 피곤했지만, 열심히 공부하다 → 열심히 공부했지만\n- 명사 뒤 결합: 명사 + (이)지만:\n  - 학생이지만, 의사지만, 외국인이지만\n\n2. 통사적 특징:\n- 앞뒤 절의 문법적 제약이 거의 없어 평서문, 의문문, 명령문, 청유문 모두에 자유롭게 연결됩니다.\n- 감정이나 맥락의 완곡성보다는 두 사실의 '직접적인 논리적 대조'를 명확하게 드러냅니다.",
      "examples": [
        {
          "target": "한국어 문법은 조금 복잡하고 어렵지만 공부할수록 정말 재미있습니다.",
          "reading": "Hangug-eo munbeop-eun jogeum bokjaphago eoryeopjiman gongbuhalsurok jeongmal jaemi-itseumnida.",
          "translation": "Korean grammar is a bit complex and difficult, but it is really interesting as I study more ('형용사 어간 + -지만')."
        },
        {
          "target": "어제는 날씨가 맑았지만 오늘은 아침부터 하루 종일 비가 내립니다.",
          "reading": "Eoje-neun nalssi-ga malgatjiman oneul-eun achimbuteo haru jong-il bi-ga naerimnida.",
          "translation": "Yesterday the weather was clear, but today it is raining all day from the morning (Past tense '-았/었지만')."
        },
        {
          "target": "가격은 다소 비싸지만 품질이 매우 우수하여 인기가 높습니다.",
          "reading": "Gagyeog-eun daso bissajiman pumjil-i maeu usu-hayeo ingi-ga nopseumnida.",
          "translation": "The price is somewhat expensive, but the quality is very superior so it is highly popular."
        },
        {
          "target": "저는 외국인이지만 한국 전통 음식인 김치찌개를 아주 좋아합니다.",
          "reading": "Jeo-neun oegug-in-ijiman Hanguk jeontong eumsig-in gimchijjigae-reul aju joahamnida.",
          "translation": "I am a foreigner, but I like kimchi stew, a traditional Korean food, very much (Noun + '-(이)지만')."
        }
      ],
      "mnemonics": [
        "받침 고민 없이 무조건 어간 뒤에 '-지만' 찰떡 결합! 깔끔하고 직관적인 1:1 대조!"
      ],
      "culturalNotes": [
        "'-지만'은 솔직하고 직접적인 사실 대조에 적합하며, 상대방에게 부탁이나 거절을 할 때는 뒤에서 배울 '-(으)ㄴ/는데'가 훨씬 더 부드럽고 예의 바른 느낌을 줍니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'비싸다(expensive)'와 '맛있다(delicious)'를 '-지만'으로 올바르게 연결한 문장은?",
          "options": [
            "이 식당은 가격은 비싸지만 음식이 정말 맛있습니다.",
            "이 식당은 가격은 비싸는데 음식이 정말 맛있습니다.",
            "이 식당은 가격은 비싼지만 음식이 정말 맛있습니다."
          ],
          "answerIndex": 0,
          "explanation": "형용사 어간 '비싸-' 뒤에 바로 '-지만'이 붙어 '비싸지만'이 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'피곤했다(was tired)'의 과거 대조를 '-지만'으로 바르게 표현한 것은 어느 것입니까?",
          "options": [
            "몸은 피곤했지만 끝까지 최선을 다했습니다.",
            "몸은 피곤하서 끝까지 최선을 다했습니다.",
            "몸은 피곤했으면 끝까지 최선을 다했습니다."
          ],
          "answerIndex": 0,
          "explanation": "과거 시제 선어말어미 '-았/었-'과 결합한 '피곤했지만'이 정확합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'바쁘다(busy)'를 대조하여 '내일 친구를 만날 것이다'와 결합할 때 알맞은 형태는?",
          "options": [
            "바쁘지만",
            "바쁜지만",
            "바쁘서"
          ],
          "answerIndex": 0,
          "explanation": "어간 '바쁘-' 뒤에 바로 '-지만'이 결합하여 '바쁘지만'이 됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'어렵지만 재미있어요'(It is difficult, but interesting)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "어렵지만 재미있어요.",
            "어렵지만 재미있어요"
          ],
          "explanation": "어렵지만(어렵다 + 지만) + 재미있어요 = 어렵지만 재미있어요."
        }
      ]
    }
  },
  "ko-u15-l2": {
    "id": "ko-u15-l2",
    "subject": "korean",
    "unit": 15,
    "lessonNumber": 2,
    "title": "배경 상황 제시 및 도입 연결어미 (-(으)ㄴ/는데)",
    "level": "B1",
    "objective": "품사별(동사 -는데, 형용사 -(으)ㄴ데, 명사 인데, 과거 -았/었는데) 형태 결합 규칙을 숙지하고 뒤 절의 본론을 꺼내기 위한 배경 제시 문법을 체득한다.",
    "presentation": {
      "explanation": "'-(으)ㄴ/는데'는 뒤 절에서 본격적으로 질문, 제안, 부탁, 설명, 명령을 시작하기에 앞서 청자에게 '상황적 배경(Background Context / Premise)'을 부드럽게 깔아주는 한국어 특유의 핵심 연결어미입니다.\n\n1. 품사별 정밀 형태 결합 공식 (Crucial Morphology):\n- 동사 현재형 (받침 유무 불문): 어간 + -는데\n  - 가다 → 가는데, 먹다 → 먹는데, 살다 → 사는데 (ㄹ 탈락), 만들다 → 만드는데\n- 형용사 현재형 (받침 유무 구별): 어간 + -(으)ㄴ데\n  - 모음 종결: 예쁘다 → 예쁜데, 크다 → 큰데, 바쁘다 → 바쁜데\n  - 자음 종결: 작다 → 작은데, 많다 → 많은데, 좋다 → 좋은데\n  - ㅂ 불규칙: 덥다 → 더운데, 춥다 → 추운데\n- 있다 / 없다 계열: 무조건 -는데!\n  - 있다 → 있는데, 없다 → 없는데, 맛있다 → 맛있는데, 재미있다 → 재미있는데\n- 명사 서술격: 명사 + (이)ㄴ데 (학생인데, 의사인데, 주말인데)\n- 과거 시제: 품사 불문 어간 + -았/었는데 (갔는데, 먹었는데, 예뻤는데)",
      "examples": [
        {
          "target": "지금 마트에 장을 보러 가는데, 필요한 것 있으면 말씀하세요.",
          "reading": "Jigeum mateu-e jang-eul boreo ganeunde, piryohan geot isseumyeon malsseumhaseyo.",
          "translation": "I am going to the supermarket to buy groceries right now, so please let me know if you need anything (Verb + '-는데' background)."
        },
        {
          "target": "날씨가 아주 화창하고 좋은데, 우리 같이 공원에 산책 갈까요?",
          "reading": "Nalssi-ga aju hwachanghago joeunde, uri gachi gongwon-e sanchaek galkkayo?",
          "translation": "The weather is very sunny and fine, shall we go for a walk in the park together? (Adjective + '-은데' background)."
        },
        {
          "target": "어제 그 영화를 직접 봤는데, 스토리가 정말 감동적이었어요.",
          "reading": "Eoje geu yeonghwa-reul jikjeop bwatneunde, seutori-ga jeongmal gamdongjeogieosseoyo.",
          "translation": "I watched that movie in person yesterday, and the storyline was truly touching (Past tense '-았/었는데')."
        },
        {
          "target": "제가 지금 급한 회의 중인데, 10분 후에 다시 전화 드려도 될까요?",
          "reading": "Je-ga jigeum geuphan hoewi jung-inde, sipbun hu-e dasi jeonhwa deuryeodo doelkkayo?",
          "translation": "I am currently in an urgent meeting, so may I call you back in 10 minutes? (Noun + '인데')."
        }
      ],
      "mnemonics": [
        "동사는 '-는데', 형용사는 '-(으)ㄴ데', '있다/없다'는 무조건 '-는데', 명사는 '인데'!"
      ],
      "culturalNotes": [
        "한국어 담화에서 용건을 불쑥 말하지 않고 '-(으)ㄴ/는데'로 전후 상황을 먼저 완곡하게 설명하는 것은 상대방의 부담을 덜어주는 필수적인 언어 예절입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "형용사 '예쁘다(pretty)'에 배경 제시 어미가 결합한 올바른 형태는 무엇입니까?",
          "options": [
            "예쁜데",
            "예쁘는데",
            "예쁜는데"
          ],
          "answerIndex": 0,
          "explanation": "형용사 모음 종결 어간 뒤에는 '-(으)ㄴ데'가 붙어 '예쁜데'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "동사 '먹다(eat)'와 '있다(exist)'의 배경 제시 형태가 모두 올바르게 짝지어진 것은?",
          "options": [
            "먹는데 - 있는데",
            "먹은데 - 있은데",
            "먹는데 - 있은데"
          ],
          "answerIndex": 0,
          "explanation": "동사는 '-는데(먹는데)', '있다/없다'도 항상 '-는데(있는데)'가 결합합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'제가 지금 도서관에 _____ 책을 빌려다 드릴까요? (I am in the library now, shall I borrow a book for you?)' 빈칸에 알맞은 형태는?",
          "options": [
            "있는데",
            "있은데",
            "있는지"
          ],
          "answerIndex": 0,
          "explanation": "'있다'의 어간 뒤에는 '-는데'가 결합하여 '있는데'가 됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'지금 바쁜데 나중에 이야기해요'(I am busy now, so let's talk later)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "지금 바쁜데 나중에 이야기해요.",
            "지금 바쁜데 나중에 이야기해요"
          ],
          "explanation": "지금 + 바쁜데(바쁘다 + ㄴ데) + 나중에 + 이야기해요 = 지금 바쁜데 나중에 이야기해요."
        }
      ]
    }
  },
  "ko-u15-l3": {
    "id": "ko-u15-l3",
    "subject": "korean",
    "unit": 15,
    "lessonNumber": 3,
    "title": "화용론적 대조·반전의 '-(으)ㄴ/는데' vs '-지만' 뉘앙스 대비",
    "level": "B1",
    "objective": "'-지만'(단순 직접 대조)과 '-(으)ㄴ/는데'(완곡한 대조, 기대와 다른 반전, 거절의 서두)의 화용론적 차이를 깊이 있게 구별한다.",
    "presentation": {
      "explanation": "한국어에서 '-(으)ㄴ/는데'는 단순한 배경 제시뿐 아니라, 화자의 기대와 다른 사태가 발생했음을 나타내는 '완곡한 대조/반전(Subtle Contrast / Soft Counter-expectation)'의 용법으로도 광범위하게 쓰입니다.\n\n1. '-지만' vs '-(으)ㄴ/는데' 대조 분석:\n- '-지만' (Direct Propositional Contrast):\n  - 두 명제를 흑백 논리처럼 객관적이고 대등하게 맞비교함.\n  - \"이 옷은 비싸지만 품질이 좋습니다.\" (단순 사실 대립)\n- '-(으)ㄴ/는데' (Pragmatic Contextual Contrast & Refusal):\n  - 화자의 심리적 완곡성, 아쉬움, 반전, 상대방의 양해를 구하는 뉘앙스 내포.\n  - \"가고 싶은데 시간이 없어요.\" (가고 싶다는 마음을 전제로 완곡하게 거절)\n  - \"열심히 공부했는데 시험 점수가 안 나왔어요.\" (기대와 어긋난 반전에 대한 아쉬움)\n\n2. 완곡한 거절(Polite Refusal) 공식:\n- 제안: \"오늘 저녁에 같이 삼겹살 먹으러 갈래요?\"\n- 거절: \"정말 가고 싶은데 오늘 선약이 있어서 어려울 것 같아요.\" (거절의 충격을 대폭 완화)",
      "examples": [
        {
          "target": "약속 장소에 일찍 도착했는데 아무도 안 와 있었어요.",
          "reading": "Yaksok jangso-e iljjik dochakhaetneunde amudo an wa isseosseoyo.",
          "translation": "I arrived early at the meeting spot, but surprisingly no one had come (Counter-expectation with '-았/었는데')."
        },
        {
          "target": "도와드리고 싶은데 제가 지금 외출 준비를 해야 해서 죄송해요.",
          "reading": "Dowadeurigo sipeunde je-ga jigeum oechul junbi-reul haeya haeseo joesonghaeyo.",
          "translation": "I would like to help you, but I have to get ready to go out now, so I am sorry (Soft polite refusal)."
        },
        {
          "target": "백화점에 코트를 사러 갔는데 마음에 드는 디자인이 전혀 없었습니다.",
          "reading": "Baekhwajeom-e koteu-reul sareo gatneunde maeum-e deuneun dijain-i jeonhyeo eopseotseumnida.",
          "translation": "I went to the department store to buy a coat, but there was no design that I liked at all."
        },
        {
          "target": "한국에서 1년 동안 살았는데 아직도 한국말이 서툴러요.",
          "reading": "Hanguk-eseo ilnyeon dong-an saratneunde ajikdo hangukmal-i seotulleoyo.",
          "translation": "I lived in Korea for a year, but my Korean is still clumsy (Subtle background contrast)."
        }
      ],
      "mnemonics": [
        "딱딱한 대조는 '-지만', 마음을 담은 완곡한 거절과 아쉬운 반전은 '-(으)ㄴ/는데'!"
      ],
      "culturalNotes": [
        "한국에서는 상대방의 제안을 단칼에 '싫어요'나 '-지만 안 돼요'로 거절하지 않고, '가고 싶은데...'처럼 '-(으)ㄴ/는데'로 여운을 주며 완곡하게 거절하는 것이 상대의 체면을 살려주는 정중한 화법입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "친구의 식사 제안을 완곡하고 공손하게 거절하는 가장 적절한 표현은 무엇입니까?",
          "options": [
            "같이 가고 싶은데 오늘 다른 약속이 있어요.",
            "같이 가고 싶지만 오늘 다른 약속이 있습니다.",
            "같이 가고 싶으니까 안 갈 거예요."
          ],
          "answerIndex": 0,
          "explanation": "화자의 마음을 완곡하게 밝히며 거절할 때는 '가고 싶은데'가 가장 자연스럽고 부드럽습니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "기대와 다른 반전 상황을 아쉬움을 담아 표현한 가장 자연스러운 문장은 어느 것입니까?",
          "options": [
            "열심히 찾아봤는데 지갑이 어디에도 없어요.",
            "열심히 찾아봤지만 지갑이 어디에도 없습니다.",
            "열심히 찾아보니까 지갑이 어디에도 없습니다."
          ],
          "answerIndex": 0,
          "explanation": "일상 구어에서 기대와 어긋난 반전적 아쉬움을 완곡히 전할 때는 '-았/었는데'가 으뜸입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'영화를 보러 _____ 표가 매진되었어요 (I went to see a movie, but tickets were sold out).' 빈칸에 알맞은 형태는?",
          "options": [
            "갔는데",
            "가서",
            "가니까요"
          ],
          "answerIndex": 0,
          "explanation": "과거 행동 뒤에 기대와 다른 상황(표 매진)을 맞닥뜨린 반전 배경이므로 '갔는데'가 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'도와주고 싶은데 시간이 없어요'(I want to help, but have no time)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "도와주고 싶은데 시간이 없어요.",
            "도와주고 싶은데 시간이 없어요"
          ],
          "explanation": "도와주고 싶은데(싶다 + 은데) + 시간이 + 없어요 = 도와주고 싶은데 시간이 없어요."
        }
      ]
    }
  },
  "ko-u15-l4": {
    "id": "ko-u15-l4",
    "subject": "korean",
    "unit": 15,
    "lessonNumber": 4,
    "title": "문장 종결 표현으로서의 '-(으)ㄴ/는데요'",
    "level": "B1",
    "objective": "연결어미가 문장 종결 표현으로 전성된 '-(으)ㄴ/는데요'의 여운, 완곡한 반박/거절, 상대 반응 유도 화용 기능을 체득한다.",
    "presentation": {
      "explanation": "한국어 구어에서는 연결어미 '-(으)ㄴ/는데' 뒤에 보조사 '요'를 붙여 문장을 그대로 끝맺는 '-(으)ㄴ/는데요' 종결 표현이 매우 빈번하게 사용됩니다.\n\n1. '-(으)ㄴ/는데요'의 3대 화용론적 기능:\n- 기능 1: 완곡한 거절 및 반박 (Soft Disagreement / Polite Refusal)\n  - A: \"김 대리님, 오늘 같이 야근할 수 있죠?\"\n  - B: \"저 오늘은 집안에 급한 일이 좀 있는데요...\" (뒤 말을 생략하여 상대가 알아차리게 유도)\n- 기능 2: 상대방의 반응 및 추가 설명 유도 (Eliciting Response)\n  - A: \"실례지만 민수 씨 계신가요?\"\n  - B: \"제가 민수인데요. (무슨 일이신가요?)\"\n- 기능 3: 의외의 사실에 대한 감탄 및 조심스러운 감정 표출\n  - \"이 옷 생각보다 정말 예쁜데요!\"\n  - \"한국 음식이 제 입맛에 아주 잘 맞는데요.\"",
      "examples": [
        {
          "target": "A: 실례지만 김 교수님 계십니까? B: 네, 제가 김 교수인데요.",
          "reading": "A: Sillyejiman Kim Gyosunim gyesimnikka? B: Ne, je-ga Kim Gyosun-inde-yo.",
          "translation": "A: Excuse me, is Professor Kim there? B: Yes, I am Professor Kim (Eliciting the visitor's business)."
        },
        {
          "target": "A: 이 신발 사이즈가 맞으세요? B: 조금 작은 것 같은데요.",
          "reading": "A: I sinbal saijeu-ga majeuseyo? B: Jogeum jageun geot gateunde-yo.",
          "translation": "A: Does this shoe size fit you? B: I think it is a little bit small (Polite subtle feedback)."
        },
        {
          "target": "오늘 처음 먹어 봤는데 국물이 정말 시원하고 맛있는데요!",
          "reading": "Oneul cheo-eum meogeo bwatneunde gungmul-i jeongmal siwonhago masitneunde-yo!",
          "translation": "I tried it for the first time today, and the broth is really refreshing and delicious! (Mild admiration)."
        },
        {
          "target": "그 서류는 제가 어제 이미 부장님께 제출했는데요.",
          "reading": "Geu seoryu-neun je-ga eoje imi bujangnim-kke jechulhaetneunde-yo.",
          "translation": "Regarding that document, I already submitted it to the department head yesterday (Gentle correction)."
        }
      ],
      "mnemonics": [
        "말끝을 흐리듯 '-(으)ㄴ/는데요'로 끝내면 배려와 예절이 두 배! 정중한 한국어의 마법!"
      ],
      "culturalNotes": [
        "한국어에서 단정적으로 잘라 말하지 않고 '-(으)ㄴ/는데요'로 말끝에 여운을 남기는 것은 상대방이 스스로 상황을 판단하고 다음 말을 자연스럽게 이어갈 수 있도록 배려하는 고유한 화법입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'제가 민수입니다(I am Minsu)'를 전화를 걸어온 상대에게 부드럽게 밝히는 종결 표현은?",
          "options": [
            "제가 민수인데요.",
            "제가 민수지만요.",
            "제가 민수니까요."
          ],
          "answerIndex": 0,
          "explanation": "자신임을 밝히며 상대방의 용건을 묻는 정중한 응답은 '제가 민수인데요'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "음식 맛에 대한 부드러운 감탄을 나타내는 가장 자연스러운 종결형은 어느 것입니까?",
          "options": [
            "생각했던 것보다 훨씬 더 맛있는데요!",
            "생각했던 것보다 훨씬 더 맛있지만요!",
            "생각했던 것보다 훨씬 더 맛있어서요!"
          ],
          "answerIndex": 0,
          "explanation": "예상 밖의 맛에 대한 기분 좋은 감탄과 피드백에는 '맛있는데요'가 가장 자연스럽습니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'A: 커피 한잔 더 드실래요? B: 저는 방금 _____ (I drank just now).' 빈칸에 알맞은 완곡 거절형은?",
          "options": [
            "마셨는데요",
            "마셨지만요",
            "마시니까요"
          ],
          "answerIndex": 0,
          "explanation": "이미 마셨음을 완곡히 알리며 사양하는 종결형은 '마셨는데요'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'제가 김민수인데요'(I am Kim Minsu)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "제가 김민수인데요.",
            "제가 김민수인데요"
          ],
          "explanation": "제가 + 김민수인데요(명사 + 인데요) = 제가 김민수인데요."
        }
      ]
    }
  },
  "ko-u15-l5": {
    "id": "ko-u15-l5",
    "subject": "korean",
    "unit": 15,
    "lessonNumber": 5,
    "title": "식당 주문, 상품 교환 및 일상 요청 실전 담화 구성",
    "level": "B1",
    "objective": "배경 제시('-(으)ㄴ/는데'), 대조('-지만'), 종결 어미('-(으)ㄴ/는데요')를 통합하여 고객 서비스 및 일상 요청 실전 담화를 완성한다.",
    "presentation": {
      "explanation": "식당, 매장, 서비스 센터에서의 주문, 문의, 교환/환불 요청 상황에서는 배경 설명과 완곡한 부탁 화법이 핵심적 역할을 수행합니다.\n\n1. 매장 상품 교환 실전 담화 모델:\n- 손님: 저기요, 실례지만 어제 여기서 셔츠를 샀는데요.\n- 직원: 네, 손님! 무슨 문제 있으신가요?\n- 손님: 디자인은 정말 마음에 들지만, 집에 가서 입어 보니까 사이즈가 조금 작은 것 같은데요. 혹시 한 치수 큰 걸로 교환할 수 있을까요?\n- 직원: 영수증 가지고 계신가요?\n- 손님: 네, 결제한 영수증 여기 있는데요.\n- 직원: 잠시만 기다려 주세요. 재고가 있는지 확인해 드리겠습니다.\n- 직원: 손님, 원하시는 라지 사이즈 재고가 딱 하나 남아 있는데요, 바로 교환해 드릴게요!\n- 손님: 친절하게 도와주셔서 정말 감사합니다.",
      "examples": [
        {
          "target": "A: 저기요, 메뉴판 좀 보고 싶은데요. B: 네, 여기 메뉴판 가져다 드리겠습니다.",
          "reading": "A: Jeogi-yo, menyupan jom bogo sipeunde-yo. B: Ne, yeogi menyupan gajyeoda deurigetseumnida.",
          "translation": "A: Excuse me, I would like to look at the menu (Soft request with '-고 싶은데요'). B: Yes, I will bring the menu over here."
        },
        {
          "target": "이 바지가 길이는 맞지만 허리가 조금 꽉 끼는데 수선이 가능할까요?",
          "reading": "I baji-ga giri-neun matjiman heori-ga jogeum kkwak kkkineunde suseon-i ganeunghalkkayo?",
          "translation": "These pants fit in length, but the waist is a bit tight; is alteration possible? ('-지만' + '-는데')."
        },
        {
          "target": "주문한 음식이 아직 안 나왔는데 확인 좀 부탁드립니다.",
          "reading": "Jumunhan eumsik-i ajik an nawanneunde hwag-in jom butakdeurimnida.",
          "translation": "The ordered food hasn't come out yet, so please check it for me ('-았/었는데' + 부탁)."
        },
        {
          "target": "제가 알레르기가 있어서 그런데, 땅콩은 빼고 조리해 주실 수 있나요?",
          "reading": "Je-ga allereugi-ga isseoseo geureoneunde, ttangkong-eun ppaego jorihae jusil su innayo?",
          "translation": "I have an allergy, so is it possible to cook without peanuts? ('-아서 그런데')."
        }
      ],
      "mnemonics": [
        "부탁할 땐 '사고 싶은데요', 사유엔 '있어서 그런데', 대조엔 '-지만'으로 품격 있는 실전 담화!"
      ],
      "culturalNotes": [
        "한국의 식당이나 가게에서 직원에게 요청할 때 '저기요, 물 주세요'보다 '저기요, 시원한 물 좀 부탁드리고 싶은데요'라고 말하면 훨씬 더 정중하고 품격 있는 손님으로 대우받습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "식당에서 직원에게 물을 정중하게 요청하는 가장 자연스러운 표현은 무엇입니까?",
          "options": [
            "저기요, 시원한 물 좀 주시면 좋겠는데요.",
            "저기요, 시원한 물 좀 줘야 하지만요.",
            "저기요, 시원한 물 좀 주니까요."
          ],
          "answerIndex": 0,
          "explanation": "부탁과 희망을 완곡하게 전달하는 '좋겠는데요'가 가장 정중합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "옷 매장에서 교환을 요청하는 대화 중 문법과 맥락이 가장 완벽한 것은 어느 것입니까?",
          "options": [
            "어제 산 바지인데, 사이즈가 안 맞아서 교환하고 싶어요.",
            "어제 산 바지이지만, 사이즈가 맞으니까 교환하세요.",
            "어제 산 바지여서, 사이즈가 맞아서 교환할래요."
          ],
          "answerIndex": 0,
          "explanation": "배경 제시('바지인데')와 원인('안 맞아서')이 완벽한 논리 구조를 이룹니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 매장 담화 중 빈칸에 들어갈 가장 자연스러운 요청 종결형은?\n\"직원: 무엇을 도와드릴까요?\n손님: 어제 구입한 가방 환불을 좀 _____.\"",
          "options": [
            "받고 싶은데요",
            "받고 싶지만요",
            "받고 싶으니까요"
          ],
          "answerIndex": 0,
          "explanation": "용건과 희망 사항을 정중하게 제시하는 '받고 싶은데요'가 가장 표준적입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'사이즈를 교환하고 싶은데요'(I would like to exchange the size)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "사이즈를 교환하고 싶은데요.",
            "사이즈를 교환하고 싶은데요"
          ],
          "explanation": "사이즈를 + 교환하고 싶은데요 = 사이즈를 교환하고 싶은데요."
        }
      ]
    }
  },
  "ko-u16-l1": {
    "id": "ko-u16-l1",
    "subject": "korean",
    "unit": 16,
    "lessonNumber": 1,
    "title": "동사의 현재 시제 관형사형 어미 (-는)",
    "level": "B1",
    "objective": "동사 어간 뒤에 '-는'을 결합하여 뒤에 오는 명사를 실시간 동작이나 현재 습관으로 수식하는 관형절 문법을 마스터한다.",
    "presentation": {
      "explanation": "한국어에서 동사가 명사를 앞에서 꾸밀 때(Noun Modifying Clause), 현재 진행 중인 동작이나 현재의 일반적 습관/상태를 나타내기 위해 관형사형 전성어미 '-는'을 사용합니다.\n\n1. 형태 결합 규칙 (동사 현재형 전용):\n- 받침 유무에 관계없이 모든 동사 어간 뒤에 '-는' 결합:\n  - 가다 → 가는 (가는 사람)\n  - 먹다 → 먹는 (먹는 음식)\n  - 읽다 → 읽는 (읽는 책) [발음: 잉는]\n  - 듣다 → 듣는 (듣는 음악) (ㄷ 불규칙 유지)\n- 'ㄹ' 받침 동사 특수 규칙: 'ㄹ' 탈락 후 '-는' 결합!\n  - 살다 → 사는 (서울에 사는 친구)\n  - 만들다 → 만드는 (빵을 만드는 요리사)\n  - 알다 → 아는 (잘 아는 사람)\n- 있다 / 없다 계열: 항상 '-는' 결합!\n  - 맛있다 → 맛있는, 재미있다 → 재미있는, 돈이 없다 → 돈이 없는",
      "examples": [
        {
          "target": "저기 벤치에 앉아서 커피를 마시는 사람이 제 대학교 룸메이트입니다.",
          "reading": "Jeogi benchi-e anj-aseo keopi-reul masineun saram-i je daehakgyo rummeiteu-imnida.",
          "translation": "The person drinking coffee while sitting on that bench is my college roommate (Verb + '-는' modifier)."
        },
        {
          "target": "제가 요즘 매일 출퇴근길 지하철에서 즐겨 읽는 소설책이에요.",
          "reading": "Je-ga yojeum maeil chultoegeungil jihacheol-eseo jeulgyeo ilneun soseolchaeg-ieyo.",
          "translation": "This is the novel that I enjoy reading every day on the subway commuting to work."
        },
        {
          "target": "부산에 사는 친한 고등학교 동창이 주말에 서울로 놀러 왔습니다.",
          "reading": "Busan-e saneun chinhan godeunghakgyo dongchang-i jumal-e Seoul-ro nolleo watseumnida.",
          "translation": "A close high school alumnus living in Busan came to Seoul to hang out on the weekend ('살다' → '사는')."
        },
        {
          "target": "한국 요리 중에서 제가 가장 좋아하는 메뉴는 매콤한 떡볶이입니다.",
          "reading": "Hanguk yori jung-eseo je-ga gajang joahaneun menyu-neun maekomhan tteokbokki-imnida.",
          "translation": "Among Korean dishes, the menu that I like the most is spicy tteokbokki."
        }
      ],
      "mnemonics": [
        "동사 현재 수식은 무조건 '-는'! 'ㄹ' 받침은 탈락하여 '살다→사는, 만들다→만드는'!"
      ],
      "culturalNotes": [
        "한국어의 관형절 수식은 영어의 관계대명사(who, which, that)와 달리 항상 수식받는 명사 '앞'에 위치하며, 어순이 [주어 + 목적어 + 동사-는 + 명사] 형태로 압축됩니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'살다(live)'가 명사 '사람(person)'을 현재형으로 수식할 때 올바른 형태는 무엇입니까?",
          "options": [
            "사는 사람",
            "살는 사람",
            "사는는 사람"
          ],
          "answerIndex": 0,
          "explanation": "'살다'의 어간 끝 받침 'ㄹ'이 탈락하고 '-는'이 붙어 '사는 사람'이 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'지금 듣다(listening now)'를 사용하여 '음악(music)'을 바르게 수식한 구는 어느 것입니까?",
          "options": [
            "지금 듣는 음악",
            "지금 들은 음악",
            "지금 들을 음악"
          ],
          "answerIndex": 0,
          "explanation": "현재 듣고 있는 음악이므로 동사 어간 '듣-' 뒤에 '-는'이 결합한 '지금 듣는 음악'이 정확합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'빵을 _____ 요리사 (A chef who makes bread).' 빈칸에 알맞은 형태는?",
          "options": [
            "만드는",
            "만들는",
            "만든"
          ],
          "answerIndex": 0,
          "explanation": "'만들다'의 'ㄹ'이 탈락하고 현재 관형형 어미 '-는'이 붙어 '만드는'이 됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'내가 좋아하는 노래예요'(This is a song that I like)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "내가 좋아하는 노래예요.",
            "내가 좋아하는 노래예요"
          ],
          "explanation": "내가 + 좋아하는(좋아하다 + 는) + 노래예요 = 내가 좋아하는 노래예요."
        }
      ]
    }
  },
  "ko-u16-l2": {
    "id": "ko-u16-l2",
    "subject": "korean",
    "unit": 16,
    "lessonNumber": 2,
    "title": "동사의 과거 관형형 ('-(으)ㄴ') vs 형용사의 현재 관형형 ('-(으)ㄴ')",
    "level": "B1",
    "objective": "동일한 형태 '-(으)ㄴ'이 동사에 붙을 때는 '과거 완료', 형용사에 붙을 때는 '현재 상태'를 나타내는 품사별 시제 분화 규칙을 마스터한다.",
    "presentation": {
      "explanation": "한국어 관형사형 어미 중 가장 혼동하기 쉬우면서도 중요한 문법이 바로 '-(으)ㄴ'의 품사별 시제 차이입니다.\n\n1. 동사 + -(으)ㄴ = [과거 / 완료된 동작] (Past Action):\n- 모음 종결 동사 어간 + -ㄴ: 가다 → 간 (어제 간 식당), 보다 → 본 (지난주에 본 영화)\n- 자음 종결 동사 어간 + -은: 먹다 → 먹은 (아침에 먹은 빵), 읽다 → 읽은 (어제 읽은 책)\n- 'ㄹ' 탈락: 만들다 → 만든 (내가 만든 요리), 살다 → 산 (작년에 산 집)\n\n2. 형용사 + -(으)ㄴ = [현재 상태] (Present State Attribute):\n- 모음 종결 형용사 + -ㄴ: 예쁘다 → 예쁜 (예쁜 꽃), 크다 → 큰 (큰 가방), 바쁘다 → 바쁜 (바쁜 사람)\n- 자음 종결 형용사 + -은: 작다 → 작은 (작은 방), 많다 → 많은 (많은 돈), 좋다 → 좋은 (좋은 날씨)\n- ㅂ 불규칙: 춥다 → 추운 (추운 겨울), 덥다 → 더운 (더운 여름), 아름답다 → 아름다운\n\n3. 결정적 대비 (Crucial Contrast):\n- 어제 만난 친구 (동사 만나다 + -ㄴ = 과거에 만난 친구)\n- 친절한 친구 (형용사 친절하다 + -ㄴ = 현재 친절한 상태인 친구)",
      "examples": [
        {
          "target": "어제 백화점에서 산 코트가 정말 따뜻하고 마음에 들어요.",
          "reading": "Eoje baekhwajeom-eseo san koteu-ga jeongmal ttatteuthago maeum-e deureoyo.",
          "translation": "The coat that I bought at the department store yesterday is really warm and to my liking ('사다' verb past '산' + '따뜻하다' adj present '따뜻한')."
        },
        {
          "target": "지난 주말에 친구들과 함께 본 한국 영화가 무척 감동적이었습니다.",
          "reading": "Jinan jumal-e chin-gudeul-gwa hamkke bon hanguk yeonghwa-ga mucheok gamdongjeogieotseumnida.",
          "translation": "The Korean movie that I watched together with friends last weekend was very touching ('보다' past '본')."
        },
        {
          "target": "성격이 아주 밝고 친절한 새 직원이 우리 팀에 입사했습니다.",
          "reading": "Seonggyeog-i aju balkgo chinjeolhan sae jigwon-i uri tim-e ipsahaetseumnida.",
          "translation": "A new employee who has a very bright and kind personality joined our team ('친절하다' adj present '친절한')."
        },
        {
          "target": "아침에 마신 따뜻한 녹차 한 잔 덕분에 기분이 상쾌해졌습니다.",
          "reading": "Achim-e masin ttatteuthan nokcha han jan deokbun-e gibun-i sangkwaehaejyeotseumnida.",
          "translation": "Thanks to a cup of warm green tea that I drank in the morning, my mood became refreshed ('마시다' past '마신' + '따뜻하다' present '따뜻한')."
        }
      ],
      "mnemonics": [
        "동사에 '-(으)ㄴ'은 '이미 끝난 과거'! 형용사에 '-(으)ㄴ'은 '지금 예쁜 현재'!"
      ],
      "culturalNotes": [
        "한국어 학습자들이 가장 많이 범하는 오류가 형용사에 '-는'을 붙이는 것(*좋는 날씨 X, *예쁘는 꽃 X)입니다. 형용사의 현재 수식은 반드시 '-(으)ㄴ(좋은 날씨, 예쁜 꽃)'이어야 합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "형용사 '좋다(good)'가 명사 '날씨(weather)'를 현재형으로 수식하는 올바른 형태는?",
          "options": [
            "좋은 날씨",
            "좋는 날씨",
            "좋은는 날씨"
          ],
          "answerIndex": 0,
          "explanation": "형용사의 현재 관형형은 '-(으)ㄴ'이므로 '좋은 날씨'가 정확합니다 (*'좋는'은 비문)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'어제 읽다(read yesterday)'를 사용하여 '책(book)'을 과거 관형형으로 바르게 수식한 것은?",
          "options": [
            "어제 읽은 책",
            "어제 읽는 책",
            "어제 읽을 책"
          ],
          "answerIndex": 0,
          "explanation": "동사의 과거 관형형은 '-(으)ㄴ'이므로 자음 받침 뒤에 '-은'이 붙은 '어제 읽은 책'이 맞습니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'어제 _____ 사람과 오늘 _____ 사람은 다른 사람입니다.' 빈칸에 들어갈 알맞은 형태 순서는?",
          "options": [
            "만난 / 만나는",
            "만나는 / 만난",
            "만날 / 만난"
          ],
          "answerIndex": 0,
          "explanation": "어제 만난(과거 동사 '-(으)ㄴ') + 오늘 만나는(현재 동사 '-는')의 대조가 완벽합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'어제 만난 친구예요'(This is a friend I met yesterday)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "어제 만난 친구예요.",
            "어제 만난 친구예요"
          ],
          "explanation": "어제 + 만난(만나다 + ㄴ) + 친구예요 = 어제 만난 친구예요."
        }
      ]
    }
  },
  "ko-u16-l3": {
    "id": "ko-u16-l3",
    "subject": "korean",
    "unit": 16,
    "lessonNumber": 3,
    "title": "동사/형용사의 미래·예정·추측 관형형 어미 ('-(으)ㄹ')",
    "level": "B1",
    "objective": "앞으로 일어날 미래의 행동이나 예정, 혹은 추측되는 상태를 수식하는 관형사형 어미 '-(으)ㄹ'의 형태 결합과 의존명사 구문 결합력을 익힌다.",
    "presentation": {
      "explanation": "'-(으)ㄹ'은 동사나 형용사 뒤에 결합하여 앞으로 일어날 사건(Future Event), 예정된 계획(Plan), 또는 화자의 추측(Conjecture)을 나타내는 미래 관형사형 전성어미입니다.\n\n1. 형태 결합 규칙:\n- 모음 종결 어간 or 'ㄹ' 받침 어간 + -ㄹ:\n  - 가다 → 갈 (내일 갈 장소)\n  - 보다 → 볼 (주말에 볼 영화)\n  - 만들다 → 만들 (앞으로 만들 계획)\n  - 살다 → 살 (이사 갈 살 집)\n- 'ㄹ' 제외 자음 종결 어간 + -을:\n  - 먹다 → 먹을 (점심에 먹을 음식)\n  - 읽다 → 읽을 (내일 읽을 책)\n  - 입다 → 입을 (결혼식에 입을 옷)\n- ㅂ 불규칙: 돕다 → 도울, 춥다 → 추울\n\n2. 주요 의존명사 결합 구문 (Essential Bound Noun Structures):\n- '-(으)ㄹ 것' (미래/예정 사실): \"내일 회의에서 발표할 것입니다.\"\n- '-(으)ㄹ 때' (시간): \"한국에 여행 갈 때 연락하세요.\"\n- '-(으)ㄹ 수 있다/없다' (가능성/능력): \"한국어로 대화할 수 있습니다.\"\n- '-(으)ㄹ 줄 알다/모르다' (방법/지식): \"수영할 줄 알아요.\"",
      "examples": [
        {
          "target": "이번 여름휴가 때 가족들과 함께 여행을 갈 장소를 정했습니다.",
          "reading": "Ibeon yeoreumhyuga ttae gajokdeul-gwa hamkke yeohaeng-eul gal jangso-reul jeonghaetseumnida.",
          "translation": "I decided on the place to go on a trip together with my family during this summer vacation (Future modifier '갈')."
        },
        {
          "target": "내일 저녁 회식 때 마실 음료와 먹을 고기를 미리 주문했습니다.",
          "reading": "Naeil jeonyeok hoesik ttae masil eumryo-wa meog-eul gogi-reul miri jumunhaetseumnida.",
          "translation": "I ordered in advance the drinks to drink and meat to eat for tomorrow evening's company dinner."
        },
        {
          "target": "다음 주 월요일에 부장님께 제출할 프로젝트 기획서 초안입니다.",
          "reading": "Daeum ju woryoil-e bujangnim-kke jechulhal peurojekteu gihoekseo choan-imnida.",
          "translation": "This is the draft of the project proposal to submit to the department manager next Monday."
        },
        {
          "target": "주말에 비가 올 가능성이 높으니 실내 활동 계획을 세웁시다.",
          "reading": "Jumal-e bi-ga ol ganeungseong-i nopeuni silnae hwaldong gyehoek-eul seoupsida.",
          "translation": "Since the possibility that it will rain on the weekend is high, let's make indoor activity plans (Conjectural '올')."
        }
      ],
      "mnemonics": [
        "내일 할 일, 앞으로 먹을 밥엔 무조건 '-(으)ㄹ'! 미래의 계획을 활짝 펼치자!"
      ],
      "culturalNotes": [
        "한국어에서 '-(으)ㄹ'은 '-(으)ㄹ 때(when)', '-(으)ㄹ 수 있다(can)', '-(으)ㄹ 것 같다(it seems)' 등 수많은 고급 문법 구문의 핵심 모체가 됩니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'내일 먹다(eat tomorrow)'를 사용하여 '음식(food)'을 미래 관형형으로 바르게 수식한 형태는?",
          "options": [
            "내일 먹을 음식",
            "내일 먹는 음식",
            "내일 먹은 음식"
          ],
          "answerIndex": 0,
          "explanation": "미래 시제 관형형 어미는 '-(으)ㄹ'이므로 '먹을 음식'이 정확합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'주말에 가다(go on the weekend)'를 '곳(place)'과 결합한 올바른 미래 관형절은?",
          "options": [
            "주말에 갈 곳",
            "주말에 가는 곳",
            "주말에 간 곳"
          ],
          "answerIndex": 0,
          "explanation": "모음 종결 어간 '가-'에 '-ㄹ'이 붙어 '갈 곳'이 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'내일 시험에서 _____ 문제들을 미리 복습했습니다.' 빈칸에 알맞은 미래형은?",
          "options": [
            "나올",
            "나오는",
            "나온"
          ],
          "answerIndex": 0,
          "explanation": "내일 시험에 출제될 미래의 문제이므로 '나올'이 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'내일 먹을 음식이에요'(This is food to eat tomorrow)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "내일 먹을 음식이에요.",
            "내일 먹을 음식이에요"
          ],
          "explanation": "내일 + 먹을(먹다 + 을) + 음식이에요 = 내일 먹을 음식이에요."
        }
      ]
    }
  },
  "ko-u16-l4": {
    "id": "ko-u16-l4",
    "subject": "korean",
    "unit": 16,
    "lessonNumber": 4,
    "title": "과거 회상 및 지속 관형형 어미 ('-던' vs '-았던/었던')",
    "level": "B1",
    "objective": "과거의 미완료 반복/지속을 회상하는 '-던'과 현재와 단절된 과거의 완료된 상태를 회상하는 '-았던/었던'의 심층적인 시제·상적 차이를 마스터한다.",
    "presentation": {
      "explanation": "한국어에서 과거의 경험이나 회상을 담아 명사를 수식할 때 회상 관형사형 어미 '-던'과 '-았던/었던'을 사용합니다.\n\n1. '-던' (Past Habitual / Incomplete Action - 회상 미완료 및 지속):\n- 과거에 반복적으로 하던 습관이나 지속되던 상태, 혹은 완료되지 않고 중단된 일에 결합.\n- \"내가 자주 가던 카페\" (과거에 습관적으로 자주 다녔던 카페)\n- \"내가 읽던 책\" (다 읽지 못하고 중간에 읽다가 둔 책)\n- \"어릴 때 살던 동네\" (어린 시절 지속해서 살았던 동네)\n\n2. '-았던/었던' (Past Perfect / Disconnected from Present - 과거 완료 및 단절):\n- 과거에 완전히 완료되었거나, 현재와는 상태가 완전히 달라져 단절되었음을 회상.\n- \"어제 내가 입었던 옷\" (과거에 입었으나 지금은 벗어서 입고 있지 않은 옷)\n- \"작년에 갔던 제주도\" (작년에 다녀왔으며 지금은 제주도에 있지 않음)\n- \"예전에는 통통했던 친구\" (과거엔 통통했으나 지금은 날씬해져 상태가 달라짐)",
      "examples": [
        {
          "target": "여기가 바로 학창 시절에 방과 후마다 친구들과 자주 가던 떡볶이집입니다.",
          "reading": "Yeogi-ga baro hakchang sijeol-e bang-gwa hu-mada chin-gudeul-gwa jaju gadeon tteokbokkijip-imnida.",
          "translation": "This is the very tteokbokki restaurant that I used to go to frequently with friends after school in my school days ('-던' habitual recall)."
        },
        {
          "target": "테이블 위에 제가 아침에 마시던 커피 잔이 그대로 놓여 있습니다.",
          "reading": "Teibeul wi-e je-ga achim-e masideon keopi jan-i geudaero noyeo itseumnida.",
          "translation": "The coffee cup that I was drinking from this morning is sitting on the table just as it was ('-던' incomplete action)."
        },
        {
          "target": "어릴 때 입었던 멜빵바지를 오랜만에 옷장에서 발견했습니다.",
          "reading": "Eoril ttae ibeotdeon melppangbaji-reul oraenman-e otjang-eseo balgyeonhaetseumnida.",
          "translation": "I discovered the overalls in the wardrobe after a long time that I used to wear when I was young ('-았던/었던' past completed/disconnected)."
        },
        {
          "target": "작년에 유럽 여행을 함께 갔던 동행자를 서울에서 우연히 만났어요.",
          "reading": "Jangnyeon-e yureop yeohaeng-eul hamkke gatdeon donghaengja-reul Seoul-eseo uyeonhi mannasseoyo.",
          "translation": "I coincidentally met the travel companion in Seoul with whom I had gone on a European trip last year ('-았던/었던')."
        }
      ],
      "mnemonics": [
        "자주 하던 미완료 습관은 '-던'! 지금은 끝난 아득한 옛날 일은 '-았던/었던'!"
      ],
      "culturalNotes": [
        "'-던'과 '-았던/었던'은 화자의 감상과 추억(Nostalgia)이 서려 있는 문학적이고 감성적인 어조를 형성하여 한국 가요 가사나 문학 작품에 매우 자주 등장합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "과거에 자주 다니던 습관적인 단골 카페를 표현하는 가장 알맞은 형태는 무엇입니까?",
          "options": [
            "자주 가던 카페",
            "자주 갈 카페",
            "자주 가는 카페"
          ],
          "answerIndex": 0,
          "explanation": "과거의 반복적 습관을 회상할 때는 '-던(가던)'이 가장 자연스럽습니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "마시다 만 커피(아직 다 마시지 않은 커피)를 뜻하는 가장 정확한 관형 수식은?",
          "options": [
            "마시던 커피",
            "마신 커피",
            "마실 커피"
          ],
          "answerIndex": 0,
          "explanation": "동작이 완료되지 않고 중간에 중단된 상태를 회상할 때는 '-던(마시던 커피)'을 씁니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'어릴 때 살던 동네'와 '어릴 때 살았던 동네'의 뉘앙스 차이를 가장 올바르게 설명한 것은?",
          "options": [
            "'살던'은 과거의 지속적 거주를 회상하고, '살았던'은 지금은 그곳에 살지 않는 단절된 완료를 강조한다.",
            "'살던'은 미래의 계획이고, '살았던'은 현재의 상태이다.",
            "'살던'은 다른 사람의 이야기이고, '살았던'은 나의 이야기이다."
          ],
          "answerIndex": 0,
          "explanation": "'-던'은 과거의 지속/미완료를, '-았던/었던'은 현재와의 상태 단절 및 완료를 나타냅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'내가 자주 가던 카페예요'(This is a cafe I used to go to often)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "내가 자주 가던 카페예요.",
            "내가 자주 가던 카페예요"
          ],
          "explanation": "내가 + 자주 + 가던(가다 + 던) + 카페예요 = 내가 자주 가던 카페예요."
        }
      ]
    }
  },
  "ko-u16-l5": {
    "id": "ko-u16-l5",
    "subject": "korean",
    "unit": 16,
    "lessonNumber": 5,
    "title": "인물 소개, 취향 탐색 및 사물 묘사 실전 복합 수식 담화",
    "level": "B1",
    "objective": "동사/형용사의 현재(-는, -(으)ㄴ), 과거(-(으)ㄴ, -던, -았던/었던), 미래(-(으)ㄹ) 관형절을 복합 활용하여 정밀하고 유창한 묘사 담화를 구사한다.",
    "presentation": {
      "explanation": "실제 대화에서는 한 문장 안에 다양한 시제의 관형절이 중첩되어 인물, 취미, 물건, 추억을 입체적으로 묘사합니다.\n\n1. 실전 인물 묘사 및 취향 탐색 담화 모델:\n- A: 민수 씨, 저기 파란색 셔츠를 입고 안경을 쓴 분이 누구예요?\n- B: 아, 저분이 바로 지난달에 새로 우리 부서로 오신 박 팀장님이세요.\n- A: 인상이 참 따뜻하고 다정해 보이시네요. 어떤 업무를 담당하시는 분인가요?\n- B: 해외 마케팅을 총괄하시는 분인데, 일도 정말 꼼꼼하게 잘하시고 직원들을 늘 배려해 주시는 훌륭한 분이에요.\n- A: 그렇군요! 오늘 점심에 팀장님과 같이 식사할 기회가 있을까요?\n- B: 네, 팀장님께서 평소에 자주 가시는 단골 한식당이 있는데 오늘 거기로 같이 갈 예정이에요. 함께 가요!",
      "examples": [
        {
          "target": "A: 저기 긴 머리에 코트를 입은 사람이 누구예요? B: 제가 가르치는 학생이에요.",
          "reading": "A: Jeogi gin meori-e koteu-reul ibeun saram-i nugu-yeyo? B: Je-ga gareuchineun haksaeng-ieyo.",
          "translation": "A: Who is that person with long hair wearing a coat? B: That is a student I teach (Adj '긴' + past wearing '입은' + present '가르치는')."
        },
        {
          "target": "작년에 샀던 노트북이 고장 나서 내일 새로 살 컴퓨터를 알아보고 있습니다.",
          "reading": "Jangnyeon-e satdeon noteubuk-i gojang naseo naeil saero sal keompyuteo-reul arabogo itseumnida.",
          "translation": "The laptop I bought last year broke down, so I am looking into a computer to buy anew tomorrow ('샀던' past recall + '살' future modifier)."
        },
        {
          "target": "제가 어릴 때부터 꿈꾸던 이상적인 직업을 드디어 갖게 되었습니다.",
          "reading": "Je-ga eoril ttae-buteo kkumkkudeon isangjeogin jigeop-eul deudieo gatge doeeotseumnida.",
          "translation": "I finally came to have the ideal profession that I had been dreaming of since I was young ('꿈꾸던' + '이상적인')."
        },
        {
          "target": "오늘 저녁에 먹을 맛있는 요리를 정성껏 준비하고 있는 중입니다.",
          "reading": "Oneul jeonyeok-e meog-eul masitneun yori-reul jeongseongkkeot junbihago itneun jung-imnida.",
          "translation": "I am in the middle of preparing with care the delicious food to eat for dinner tonight ('먹을' future + '맛있는' adj + '준비하고 있는' present progressive)."
        }
      ],
      "mnemonics": [
        "어제 산(과거) 옷, 지금 입는(현재) 옷, 내일 입을(미래) 옷, 자주 입던(회상) 옷! 완벽한 시제 마스터!"
      ],
      "culturalNotes": [
        "한국어에서는 인물을 묘사할 때 [입다, 쓰다, 신다, 끼다] 등의 착용 동사에 과거 관형형 '-(으)ㄴ'을 사용하여 '현재 착용한 상태'를 묘사하는 것이 매우 독특하고 중요한 문법적 특징입니다(예: 안경을 쓴 사람, 모자를 쓴 사람)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'안경을 착용하고 있는 사람'을 관형절로 가장 올바르게 표현한 형태는?",
          "options": [
            "안경을 쓴 사람",
            "안경을 쓰는 사람",
            "안경을 쓸 사람"
          ],
          "answerIndex": 0,
          "explanation": "착용 완료 상태의 인물을 묘사할 때는 과거 관형형인 '안경을 쓴 사람'이 가장 자연스럽습니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "다음 복합 수식 문장 중 시제와 수식 관계가 모두 올바른 것은 어느 것입니까?",
          "options": [
            "어제 본 영화는 내가 내일 친구에게 추천할 감동적인 명작이다.",
            "어제 볼 영화는 내가 내일 친구에게 추천한 감동적인 명작이다.",
            "어제 보는 영화는 내가 내일 친구에게 추천했던 감동적인 명작이다."
          ],
          "answerIndex": 0,
          "explanation": "과거('본') + 미래('추천할') + 현재 형용사('감동적인')가 완벽한 시제 일치를 이룹니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 관형절 수식 구조가 문법적으로 완벽한 문장은?",
          "options": [
            "저기 모자를 쓴 친절한 분이 내가 가장 존경하는 교수님이십니다.",
            "저기 모자를 쓰을 친절는 분이 내가 가장 존경한 교수님이십니다.",
            "저기 모자를 쓰는 친절한 분이 내가 가장 존경할 교수님이십니다."
          ],
          "answerIndex": 0,
          "explanation": "'모자를 쓴(상태)' + '친절한(형용사)' + '존경하는(현재 동사)'의 수식 관계가 완벽합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'내가 가장 좋아하는 책이에요'(This is the book I like the most)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "내가 가장 좋아하는 책이에요.",
            "내가 가장 좋아하는 책이에요"
          ],
          "explanation": "내가 + 가장 + 좋아하는(좋아하다 + 는) + 책이에요 = 내가 가장 좋아하는 책이에요."
        }
      ]
    }
  },
  "ko-u17-l1": {
    "id": "ko-u17-l1",
    "subject": "korean",
    "unit": 17,
    "lessonNumber": 1,
    "title": "구어적 동작 명사화 어미 ('-는 것')",
    "level": "B2",
    "objective": "동사/형용사 구를 '-(으)ㄴ/-는/-(으)ㄹ 것'으로 명사절화하여 문장의 주어, 목적어, 보어로 활용하는 구어 명사화 구문을 마스터한다.",
    "presentation": {
      "explanation": "한국어에서 절(Clause) 전체를 명사처럼 바꾸어 문장 성분(주어, 목적어 등)으로 기능하게 만드는 가장 일반적인 구어 방식이 바로 관형형 + 의존명사 '것(thing/fact)' 결합 구문입니다.\n\n1. 형태 및 시제 결합:\n- 현재 동작 명사화: 동사 + -는 것 (한국어를 배우는 것, 운동하는 것)\n- 과거 완료 명사화: 동사 + -(으)ㄴ 것 (어제 친구를 만난 것, 지난주에 시험을 본 것)\n- 미래 예정 명사화: 동사 + -(으)ㄹ 것 (내일 회의에 참석할 것)\n- 형용사 상태 명사화: 형용사 + -(으)ㄴ 것 (마음이 편안한 것, 건강한 것)\n\n2. 격조사 결합 및 구어 축약형 (Colloquial Contractions):\n- 주격: -는 것 + 이 → **-는 게** (\"혼자 여행하는 게 재미있어요.\")\n- 목적격: -는 것 + 을 → **-는 걸** (\"음악 듣는 걸 좋아해요.\")\n- 서술격/보어: -는 것 + 이에요 → **-는 거예요** (\"제 꿈은 세계 일주를 하는 거예요.\")\n- 주제격: -는 것 + 은 → **-는 건** (\"매일 일기를 쓰는 건 쉬운 일이 아니에요.\")",
      "examples": [
        {
          "target": "외국어를 유창하게 구사하는 것은 끊임없는 매일의 연습과 노력을 필요로 합니다.",
          "reading": "Oeguk-eo-reul yuchanghage gusa-haneun geos-eun kkeunimeomneun maeil-ui yeonseup-gwa noryeok-eul piryoro hamnida.",
          "translation": "Speaking a foreign language fluently requires constant daily practice and effort (Subject clause with '-는 것은')."
        },
        {
          "target": "퇴근한 후에 공원에서 신선한 공기를 마시며 산책하는 것을 제일 좋아해요.",
          "reading": "Toegeunhan hu-e gongwon-eseo sinseonhan gonggi-reul masimyeo sanchaekhaneun geos-eul jeil joahaeyo.",
          "translation": "I like walking in the park breathing fresh air the most after leaving work (Object clause with '-는 것을')."
        },
        {
          "target": "매일 아침 일찍 일어나는 게 처음에는 힘들었지만 지금은 완전히 익숙해졌습니다.",
          "reading": "Maeil achim iljjik ireonaneun ge cheoeum-eneun himdeureotjiman jigeum-eun wanjeonhi iksukhaejyeotseumnida.",
          "translation": "Waking up early every morning was hard at first, but now I have become completely used to it (Subject contraction '-는 게')."
        },
        {
          "target": "제 주말 취미는 집에서 따뜻한 차를 마시며 고전 영화를 감상하는 거예요.",
          "reading": "Je jumal chwimi-neun jip-eseo ttatteuthan cha-reul masimyeo gojeon yeonghwa-reul gamsanghaneun geoyeyo.",
          "translation": "My weekend hobby is watching classic movies at home while drinking warm tea (Predicate contraction '-는 거예요')."
        }
      ],
      "mnemonics": [
        "구어 명사화는 '것'! 주어는 '-는 게', 목적어는 '-는 걸', 서술어는 '-는 거예요'!"
      ],
      "culturalNotes": [
        "한국어 일상 회화에서는 '-는 것이'나 '-는 것을'처럼 길게 발음하기보다 '-는 게', '-는 걸', '-는 건'으로 축약하여 말하는 것이 훨씬 자연스럽고 세련되게 들립니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'음악을 듣다(listen to music)'를 주어로 만들어 '즐겁다'와 연결할 때 가장 자연스러운 구어 표현은?",
          "options": [
            "음악을 듣는 게 즐거워요.",
            "음악을 듣는 기 즐거워요.",
            "음악을 듣음이 즐거워요."
          ],
          "answerIndex": 0,
          "explanation": "구어에서 주어 역할을 하는 명사화 축약형은 '-는 게(듣는 게)'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'한국어 공부를 하다'를 목적어('좋아하다')와 자연스럽게 연결한 구어 문장은?",
          "options": [
            "한국어 공부하는 걸 좋아해요.",
            "한국어 공부하는 게 좋아해요.",
            "한국어 공부하기를 좋아해요이지만 비구어적이에요."
          ],
          "answerIndex": 0,
          "explanation": "목적어 역할을 하는 구어 명사화 축약형은 '-는 걸(공부하는 걸)'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'제 취미는 주말마다 자전거를 _____.' 빈칸에 들어갈 알맞은 서술형 구어 명사화 형태는?",
          "options": [
            "타는 거예요",
            "타는 걸",
            "타는 게"
          ],
          "answerIndex": 0,
          "explanation": "문장의 보어/서술어 자리이므로 '-는 거예요(타는 거예요)'가 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'한국어 배우는 것이 재미있어요'(Learning Korean is fun)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "한국어 배우는 것이 재미있어요.",
            "한국어 배우는 것이 재미있어요",
            "한국어 배우는 게 재미있어요.",
            "한국어 배우는 게 재미있어요"
          ],
          "explanation": "한국어 + 배우는 것이(배우는 게) + 재미있어요 = 한국어 배우는 것이 재미있어요."
        }
      ]
    }
  },
  "ko-u17-l2": {
    "id": "ko-u17-l2",
    "subject": "korean",
    "unit": 17,
    "lessonNumber": 2,
    "title": "격식적 행위/활동 명사화 어미 ('-기')",
    "level": "B2",
    "objective": "동사/형용사 어간에 '-기'를 붙여 행위 자체를 범주화하고, 주요 문법 관용구(-기 시작하다, -기 전에, -기 위해, -기 바랍니다)를 완벽하게 구사한다.",
    "presentation": {
      "explanation": "'-기'는 동사나 형용사 어간에 직접 붙어 어떤 행위나 상태를 추상적 활동 단위(Activity / Category)로 명사화하는 전성어미입니다.\n\n1. 기본 명사화 범주:\n- 기능별 영역 명칭: 읽기 (Reading), 듣기 (Listening), 쓰기 (Writing), 말하기 (Speaking)\n- 일과 및 계획: 달리기, 장보기, 청소하기, 복습하기\n\n2. 주요 필수 관용 구문 (Essential Grammatical Formulas):\n- '-기 시작하다' (Begin to do): \"지난달부터 한국어 학원에 다니기 시작했어요.\"\n- '-기 전에' (Before doing): \"식사하기 전에 손을 깨끗이 씻으세요.\"\n- '-기 위해(서)' (In order to do): \"자격증을 취득하기 위해 열심히 공부합니다.\"\n- '-기 쉽다 / 어렵다' (Easy / Difficult to do): \"이 설명서는 초보자가 이해하기 쉬워요.\"\n- '-기 바랍니다 / 희망하다' (Please / Hope): \"정시에 도착해 주시기 바랍니다.\"",
      "examples": [
        {
          "target": "외국어 학습의 네 가지 핵심 영역은 듣기, 말하기, 읽기, 쓰기입니다.",
          "reading": "Oeguk-eo hakseup-ui ne gaji haeksim yeong-yeok-eun deutgi, malhagi, ilkgi, sseugi-imnida.",
          "translation": "The four core domains of foreign language learning are listening, speaking, reading, and writing ('-기' nominalization)."
        },
        {
          "target": "회의를 시작하기 전에 배부해 드린 유인물을 꼼꼼히 확인해 주시기 바랍니다.",
          "reading": "Hooeui-reul sijakhagi jeon-e baebuhae deurin yuinmul-eul kkomkkomhi hwaginhae jusigi baramnida.",
          "translation": "Please check thoroughly the handouts distributed before starting the meeting ('-기 전에' + '-기 바랍니다')."
        },
        {
          "target": "올해 초부터 건강을 지키기 위해 매일 아침마다 조깅을 하기 시작했습니다.",
          "reading": "Olhae cho-buteo geon-gang-eul jikigi wihae maeil achim-mada joging-eul hagi sijakhaetseumnida.",
          "translation": "Since early this year, I began jogging every morning in order to protect my health ('-기 위해' + '-기 시작하다')."
        },
        {
          "target": "이 단어는 발음이 까다로워서 외국인이 정확하게 발음하기 어렵습니다.",
          "reading": "I daneo-neun bareum-i kkadarrowoseo oeguk-in-i jeonghwakhage bareumhagi eoryeopseumnida.",
          "translation": "Because this word has tricky pronunciation, it is difficult for foreigners to pronounce accurately ('-기 어렵다')."
        }
      ],
      "mnemonics": [
        "읽기·쓰기 활동 이름엔 '-기'! 시작하고(-기 시작하다), 전에도(-기 전에), 위해도(-기 위해) '-기'!"
      ],
      "culturalNotes": [
        "한국어능력시험(TOPIK) 시험 영역이나 학교 교재 목차는 항상 '-기(듣기, 읽기, 쓰기)' 형태로 표기되며, 공식 안내 방송에서 정중한 요청을 할 때도 '-기 바랍니다'를 필수적으로 사용합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'출발하다(depart)' 앞에 '전에(before)'를 결합할 때 올바른 형태는 무엇입니까?",
          "options": [
            "출발하기 전에",
            "출발하는 전에",
            "출발함 전에"
          ],
          "answerIndex": 0,
          "explanation": "'전에' 앞에는 명사형 어미 '-기'가 결합하여 '출발하기 전에'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "공식 안내문에서 승객들에게 착석을 요청하는 가장 격식 있는 표현은?",
          "options": [
            "자리에 앉아 주시기 바랍니다.",
            "자리에 앉아 주는 것을 바랍니다.",
            "자리에 앉아 줌을 바랍니다."
          ],
          "answerIndex": 0,
          "explanation": "공식적 요청 관용구는 '-아/어 주시기 바랍니다'가 표준입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'한국 문화를 깊이 _____ 위해 한국 역사책을 읽고 있습니다.' 빈칸에 알맞은 형태는?",
          "options": [
            "이해하기",
            "이해하는",
            "이해함"
          ],
          "answerIndex": 0,
          "explanation": "목적을 나타내는 '위해' 앞에는 '-기(이해하기 위해)'가 결합합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'식사하기 전에 손을 씻어요'(I wash my hands before eating)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "식사하기 전에 손을 씻어요.",
            "식사하기 전에 손을 씻어요"
          ],
          "explanation": "식사하기 전에 + 손을 + 씻어요 = 식사하기 전에 손을 씻어요."
        }
      ]
    }
  },
  "ko-u17-l3": {
    "id": "ko-u17-l3",
    "subject": "korean",
    "unit": 17,
    "lessonNumber": 3,
    "title": "서면/공식 문서 종결 명사형 어미 ('-(으)ㅁ')",
    "level": "B2",
    "objective": "공식 공지, 서면 보고서, 시스템 메시지, 일정 메모에서 간결하고 객관적인 종결체로 사용되는 '-(으)ㅁ'의 형태론과 격식을 체득한다.",
    "presentation": {
      "explanation": "'-(으)ㅁ'은 동사나 형용사 어간 끝에 결합하여 서술어 자체를 간결한 명사형 종결체(Noun-Ended Sentence Final Form)로 완결 짓는 서면 격식 어미입니다.\n\n1. 형태 결합 규칙:\n- 모음 종결 어간 or 'ㄹ' 받침 어간 + -ㅁ:\n  - 알다 → **앎** (삶과 앎)\n  - 살다 → **삶** (행복한 삶)\n  - 보다 → **봄** (일정 확인함)\n  - 없다 → 없음 (자료 없음)\n  - 있다 → 있음 (재고 있음)\n- 'ㄹ' 제외 자음 종결 어간 + -음:\n  - 먹다 → 먹음, 믿다 → 믿음, 겪다 → 겪음\n  - 웃다 → 웃음, 울다 → 울음\n- 과거 시제 선어말어미 결합: '-았/었음'\n  - 마감하다 → 마감하였음 / 마감했음 (접수 마감되었음)\n  - 변경되다 → 변경되었음 (일정 변경되었음)\n\n2. 주요 사용 맥락 (Key Contexts):\n- 회사 업무 일지 및 서면 보고: \"금일 15시 부서 회의 완료함.\"\n- 공식 게시판 공지: \"2026년도 신입사원 공채 접수 마감됨.\"\n- 스마트폰/앱 시스템 알림: \"읽지 않은 메시지 3건 있음.\"\n- 개인적 메모 및 일정 기록: \"오후 2시 거래처 미팅 있음.\"",
      "examples": [
        {
          "target": "[공지] 시스템 서버 정기 점검으로 인해 오늘 밤 자정부터 서비스 이용이 일시 중단됨.",
          "reading": "[Gongji] Siseutem seobeo jeonggi jeomgeom-euro inhae oneul bam jajeong-buteo seobiseu iyong-i ilsi jungdandoem.",
          "translation": "[Notice] Due to regular system server maintenance, service use will be temporarily suspended starting midnight tonight ('중단됨' formal notice noun ending)."
        },
        {
          "target": "금일 오전 회의 결과 주요 안건이 전원 일치로 통과되었음을 보고드립니다.",
          "reading": "Geumil ojeon hoeui gyeolgwa juyo an-geon-i jeon-won ilchiro tonggwadoeeotseum-eul bogodeurimnida.",
          "translation": "I report that the key agenda items were passed unanimously as a result of this morning's meeting ('통과되었음' past fact noun clause)."
        },
        {
          "target": "[알림] 요청하신 파일 다운로드가 정상적으로 완료되었음.",
          "reading": "[Allim] Yocheonghasin pail daunrodeu-ga jeongsangjeog-euro wanryodoeeotseum.",
          "translation": "[Alert] The download of the requested file has been successfully completed ('완료되었음')."
        },
        {
          "target": "어려운 역경 속에서도 희망을 잃지 않는 굳은 믿음과 긍정적인 삶의 태도가 필요합니다.",
          "reading": "Eoryeoun yeokgyeong sok-eseodo huimang-eul ilchi anneun gudeun mideum-gwa geungjeongjeogin sam-ui taedo-ga piryohamnida.",
          "translation": "Firm faith not losing hope even amidst difficult adversity and a positive attitude toward life are needed ('믿음' faith, '삶' life)."
        }
      ],
      "mnemonics": [
        "공지사항, 시스템 알림, 메모 끝판왕은 '-(으)ㅁ'! 완료함, 마감됨, 있음, 없음!"
      ],
      "culturalNotes": [
        "한국의 직장 내 메모나 메신저 업무 보고, SNS 캡션, 공식 공문서에서는 문장을 길게 끝내지 않고 '-(으)ㅁ' 체를 사용하여 신속성, 객관성, 정보 압축성을 극대화합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "시스템 화면에 '재고가 없다'는 사실을 간결하게 표기할 때 가장 표준적인 명사형 종결 표기는?",
          "options": [
            "재고 없음",
            "재고 없기",
            "재고 없는 것"
          ],
          "answerIndex": 0,
          "explanation": "시스템 상태나 공식 알림의 명사형 종결은 '-(으)ㅁ'을 사용하여 '재고 없음'으로 표기합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "공식 업무 보고 메모에서 '회의를 마쳤다'를 압축하여 서면 명사형으로 종결한 올바른 문장은?",
          "options": [
            "금일 프로젝트 회의 정상 종료함.",
            "금일 프로젝트 회의 정상 종료하기.",
            "금일 프로젝트 회의 정상 종료하는 것."
          ],
          "answerIndex": 0,
          "explanation": "서면 업무 보고 명사형 종결체는 '-(으)ㅁ(종료함)'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "게시판 공지문 '[알림] 금일 세미나 장소가 301호로 _____.' 빈칸에 가장 알맞은 명사형 종결 표현은?",
          "options": [
            "변경되었음",
            "변경되었기",
            "변경되는 것"
          ],
          "answerIndex": 0,
          "explanation": "과거 완료된 공식 공지 사실의 서면 종결체는 '-었음(변경되었음)'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'읽지 않은 메시지 있음'(There are unread messages)을 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "읽지 않은 메시지 있음.",
            "읽지 않은 메시지 있음"
          ],
          "explanation": "읽지 않은 + 메시지 + 있음 = 읽지 않은 메시지 있음."
        }
      ]
    }
  },
  "ko-u17-l4": {
    "id": "ko-u17-l4",
    "subject": "korean",
    "unit": 17,
    "lessonNumber": 4,
    "title": "3대 명사형 어미('-는 것' vs '-기' vs '-(으)ㅁ')의 통사 제약 및 화용론적 기능 비교",
    "level": "B2",
    "objective": "세 가지 명사형 어미가 지닌 통사적 제약(후행 서술어 결합 제약)과 화용론적 문체(구어체 vs 관용구 vs 서면 공지)의 차이를 완벽히 구분한다.",
    "presentation": {
      "explanation": "한국어의 명사화 어미 3인방('-는 것', '-기', '-(으)ㅁ')은 겉보기에 모두 명사를 만드는 것처럼 보이지만, 결합하는 뒤쪽 서술어와 문체에 엄격한 통사적 제약이 존재합니다.\n\n1. '-는 것' [구체적 사실 / 구어적 일상 담화]:\n- 후행 서술어: 알다/모르다, 잊다, 기억하다, 당연하다 등 (사실성 강조)\n- 예: \"그가 한국을 떠난 것을 몰랐어요.\" (구체적 사건 사실)\n\n2. '-기' [추상적 활동 / 미래 지향적 희망 / 관용 구조]:\n- 후행 서술어: 시작하다, 바라다, 희망하다, 쉽다/어렵다, -기 전에, -기 위해\n- 제약: *한국을 떠난 기를 몰랐어요 (비문 X)\n\n3. '-(으)ㅁ' [완결된 객관적 사실 / 서면 공지 및 보고]:\n- 후행 서술어: 밝히다, 증명하다, 보고하다, 알리다, -에 틀림없다\n- 예: \"범인이 현장에 있었음이 명백히 증명되었습니다.\"\n- 제약: 일상 회화에서 서술어로 직접 대화할 때는 쓰이지 않고 서면/공문서에서 활약.",
      "examples": [
        {
          "target": "저는 주말에 친구들과 모여서 축구하는 것을 가장 즐깁니다.",
          "reading": "Jeo-neun jumal-e chin-gudeul-gwa moyeoseo chukguhaneun geos-eul gajang jeulgimnida.",
          "translation": "I enjoy playing soccer together with friends on the weekend the most ('-는 것' colloquial preference)."
        },
        {
          "target": "모든 탑승객께서는 비행기 착륙 시까지 좌석 벨트를 매 주시기 바랍니다.",
          "reading": "Modeun taptseunggaek-kkeseoneun bihaenggi changnyuk si-kkaji jwaseok belteu-reul mae jusigi baramnida.",
          "translation": "All passengers, please fasten your seatbelts until airplane landing ('-기 바라다' formal request constraint)."
        },
        {
          "target": "경찰 수사 결과 피의자가 사건 당일 현장에 있었음이 과학적으로 입증되었습니다.",
          "reading": "Gyeongchal susa gyeolgwa pi-uija-ga sageon dang-il hyeonjang-e isseotseum-i gwahakjeog-euro ipjeungdoeeotseumnida.",
          "translation": "As a result of the police investigation, it was scientifically proven that the suspect was at the scene on the day of the incident ('-었음이 입증되다' formal fact constraint)."
        },
        {
          "target": "약속 시간에 늦지 않기 위해서 서둘러 지하철역으로 뛰어갔습니다.",
          "reading": "Yakssok sigan-e neutji ankgi wihaeseo seodulleo jihacheol-yeog-euro ttwieogatseumnida.",
          "translation": "In order not to be late for the appointment time, I hurried and ran to the subway station ('-지 않기 위해')."
        }
      ],
      "mnemonics": [
        "구어 사실은 '-는 것', 활동·바람은 '-기', 서면·입증은 '-(으)ㅁ'! 완벽한 3분법!"
      ],
      "culturalNotes": [
        "한국어 고급 화자로 인정받기 위해서는 '내가 바라는 것'을 말할 때 '-기 바랍니다'를 쓰고, '공지 메모'를 쓸 때 '-(으)ㅁ'을 쓰는 등 상황과 격식에 맞는 정확한 명사화 어미를 가려 쓰는 능력이 필수적입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'바라다(hope/wish)' 앞에 결합할 수 있는 올바른 명사형 어미는 무엇입니까?",
          "options": [
            "-기 (행복하시기를 바랍니다)",
            "-는 것 (행복하시는 것을 바랍니다)",
            "-(으)ㅁ (행복하심을 바랍니다)"
          ],
          "answerIndex": 0,
          "explanation": "'바라다'는 희망의 동사이므로 명사형 어미 '-기'와 결합하는 강력한 통사 제약을 가집니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "다음 중 후행 서술어와의 문법적 결합이 올바른 문장은 어느 것입니까?",
          "options": [
            "진실이 밝혀졌음이 법정에서 명백히 인정되었습니다.",
            "진실이 밝혀졌기가 법정에서 명백히 인정되었습니다.",
            "진실이 밝혀졌는 걸이 법정에서 명백히 인정되었습니다."
          ],
          "answerIndex": 0,
          "explanation": "법정이나 공식 문서에서 객관적 사실 입증에는 '-(으)ㅁ(밝혀졌음이)'이 결합합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "3대 명사형 어미의 특성을 비교한 설명 중 틀린 것은?",
          "options": [
            "'-는 것'은 공식 공지문의 문장 종결체로 가장 선호된다.",
            "'-기'는 '-기 전에', '-기 위해', '-기 시작하다' 등의 관용구에 필수적으로 쓰인다.",
            "'-(으)ㅁ'은 서면 보고서나 시스템 알림에서 종결 형태로 널리 쓰인다."
          ],
          "answerIndex": 0,
          "explanation": "공식 공지문의 간결한 서면 종결체로는 '-는 것'이 아니라 '-(으)ㅁ'이 선호됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'행복하시기를 바랍니다'(I wish you happiness)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "행복하시기를 바랍니다.",
            "행복하시기를 바랍니다"
          ],
          "explanation": "행복하시기를 + 바랍니다 = 행복하시기를 바랍니다."
        }
      ]
    }
  },
  "ko-u17-l5": {
    "id": "ko-u17-l5",
    "subject": "korean",
    "unit": 17,
    "lessonNumber": 5,
    "title": "취미 소개, 메모 작성 및 공식 공지문 작성 실전 담화",
    "level": "B2",
    "objective": "구어 명사화('-는 것/게/걸'), 활동 관용구('-기'), 서면 종결체('-(으)ㅁ')를 완벽하게 배합하여 대화, 메모, 공식 공지문을 유창하게 작성한다.",
    "presentation": {
      "explanation": "실전 한국어에서는 말할 때(구어 취미 대화), 메모할 때(개인 일정 정리), 공지할 때(회사/학교 게시판) 각기 다른 명사화 양식을 능숙하게 전환해야 합니다.\n\n1. 취미 소개 및 목표 공유 실전 담화:\n- A: 지우 씨는 주말에 주로 뭐 하면서 시간 보내세요?\n- B: 저는 집에서 베이킹하는 걸 아주 좋아해요. 직접 빵을 굽는 게 스트레스 해소에 정말 좋거든요.\n- A: 와, 대단하시네요! 베이킹을 언제부터 배우기 시작하셨어요?\n- B: 작년 가을부터 문화센터에 다니기 시작했어요. 이번 연말에는 제과 기능사 자격증을 취득하기 위해 열심히 연습하고 있어요.\n\n2. 회사 게시판 공식 공지문 양식:\n- [공지] 사내 네트워크 보안 업그레이드 작업 안내\n- 일시: 2026년 9월 5일(토) 22:00 ~ 익일 06:00\n- 내용: 사내 인트라넷 접속 일시 불가함.\n- 주의사항: 작업 시작 전에 진행 중인 문서를 반드시 저장해 주시기 바람.",
      "examples": [
        {
          "target": "A: 주말에 영화 보는 걸 좋아하세요? B: 네, 영화관에서 신작 영화를 관람하는 게 제 유일한 취미예요.",
          "reading": "A: Jumal-e yeonghwa boneun geol joahaseyo? B: Ne, yeonghwagwan-eseo sinjak yeonghwa-reul gwanramhaneun ge je yuilhan chwimi-yeyo.",
          "translation": "A: Do you like watching movies on weekends? B: Yes, watching new releases at the movie theatre is my only hobby ('-는 걸' + '-는 게')."
        },
        {
          "target": "[메모] 오늘 할 일: 1. 보고서 제출하기 2. 2시 거래처 미팅 참석함 3. 퇴근 후 장보기.",
          "reading": "[Memo] Oneul hal il: 1. Bogoseo jechulhagi 2. 2-si georaecheo miting chamseokham 3. Toegeun hu jangbogi.",
          "translation": "[Memo] Today's to-do list: 1. Submit report ('-기') 2. Attend 2 PM client meeting ('-(으)ㅁ') 3. Grocery shopping ('-기')."
        },
        {
          "target": "행사장에 입장하시기 전에 체온 측정 및 손 소독을 완료해 주시기 바랍니다.",
          "reading": "Haengsajang-e ipjanghasigi jeon-e cheon cheukjeong mit son sodok-eul wanryohae jusigi baramnida.",
          "translation": "Please complete temperature measurement and hand disinfection before entering the venue ('-기 전에' + '-기 바랍니다')."
        },
        {
          "target": "[안내] 금일 도서관 정기 휴관으로 대출 및 반납 업무가 진행되지 않음을 알려 드립니다.",
          "reading": "[Annae] Geumil doseogwan jeonggi hyugwan-euro daechul mit bannap eommu-ga jinhaengdoeji anheum-eul allyeo deurimnida.",
          "translation": "[Notice] We inform you that checkout and return services will not proceed due to the library's regular closing today ('않음을 알려 드립니다')."
        }
      ],
      "mnemonics": [
        "취미 대화는 '-는 걸/게', 할 일 메모는 '-기', 공지 알림은 '-(으)ㅁ'! 상황별 완벽 변환!"
      ],
      "culturalNotes": [
        "한국의 대학교 동아리 모집 포스터나 회사의 공지글을 보면 '지원 자격: 열정 있는 사람 누구나 가능함', '지원 방법: 이메일 접수하기'처럼 '-기'와 '-(으)ㅁ'이 항목별로 정갈하게 사용됩니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동료와 대화할 때 '내 취미는 사진 찍기이다'를 가장 자연스럽고 유창하게 표현한 구어 문장은?",
          "options": [
            "제 취미는 여행 가서 사진 찍는 거예요.",
            "제 취미는 여행 가서 사진 찍음이에요.",
            "제 취미는 여행 가서 사진 찍기임이에요."
          ],
          "answerIndex": 0,
          "explanation": "구어체에서 자신의 취미를 서술할 때는 '-는 거예요(찍는 거예요)'가 가장 자연스럽습니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "다음 중 사내 공지문으로 어휘와 종결 어미가 가장 격식 있고 자연스러운 것은?",
          "options": [
            "[공지] 금일 임원 회의로 인해 4층 대회의실 사용이 제한됨을 알려 드립니다.",
            "[공지] 금일 임원 회의로 인해 4층 대회의실 사용이 제한되는 걸 알려 드립니다.",
            "[공지] 금일 임원 회의로 인해 4층 대회의실 사용이 제한되기를 알려 드립니다."
          ],
          "answerIndex": 0,
          "explanation": "공식 공지문에서는 객관적 사실을 전달하는 '제한됨을 알려 드립니다'가 완벽합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 대화의 빈칸에 들어갈 알맞은 표현은?\n\"A: 한국어 공부하면서 뭐가 제일 어려워요?\nB: 저는 원어민의 빠른 말을 _____ 제일 어려워요.\"",
          "options": [
            "알아듣는 게",
            "알아듣음이",
            "알아듣기가"
          ],
          "answerIndex": 0,
          "explanation": "구어체에서 주어 역할을 하는 '알아듣는 게'가 가장 자연스럽습니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'음악 듣는 것을 좋아해요'(I like listening to music)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "음악 듣는 것을 좋아해요.",
            "음악 듣는 것을 좋아해요",
            "음악 듣는 걸 좋아해요.",
            "음악 듣는 걸 좋아해요"
          ],
          "explanation": "음악 + 듣는 것을(듣는 걸) + 좋아해요 = 음악 듣는 것을 좋아해요."
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
