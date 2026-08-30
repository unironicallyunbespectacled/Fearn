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
    "title": "한글 자모 체계와 기본 인사 (Hangul & Greetings) (Part 1)",
    "level": "A1",
    "objective": "Comprehensive mastery of 기본 인사와 자기소개 (Greetings & Self-Introduction).",
    "presentation": {
      "explanation": "본 단원에서는 « 한글 자모 체계와 기본 인사 (Hangul & Greetings) » (제1절)의 핵심 언어 요소와 기본 인사와 자기소개 (Greetings & Self-Introduction)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (1.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (1.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (1.1.3).",
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
          "prompt": "« 기본 인사와 자기소개 (Greetings & Self-Introduction) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (1.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (1.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (1.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 한글 자모 체계와 기본 인사 (Hangul & Greetings) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (1.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (1.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (1.1.3)."
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
          "prompt": "« 기본 인사와 자기소개 (Greetings & Self-Introduction) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 1-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (1.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (1.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (1.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u1-l2": {
    "id": "ko-u1-l2",
    "subject": "korean",
    "unit": 1,
    "lessonNumber": 2,
    "title": "한글 자모 체계와 기본 인사 (Hangul & Greetings) (Part 2)",
    "level": "A1",
    "objective": "Comprehensive mastery of 기본 인사와 자기소개 (Greetings & Self-Introduction).",
    "presentation": {
      "explanation": "본 단원에서는 « 한글 자모 체계와 기본 인사 (Hangul & Greetings) » (제2절)의 핵심 언어 요소와 기본 인사와 자기소개 (Greetings & Self-Introduction)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (1.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (1.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (1.2.3).",
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
          "prompt": "« 기본 인사와 자기소개 (Greetings & Self-Introduction) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (1.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (1.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (1.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 한글 자모 체계와 기본 인사 (Hangul & Greetings) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (1.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (1.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (1.2.3)."
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
          "prompt": "« 기본 인사와 자기소개 (Greetings & Self-Introduction) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 1-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (1.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (1.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (1.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u1-l3": {
    "id": "ko-u1-l3",
    "subject": "korean",
    "unit": 1,
    "lessonNumber": 3,
    "title": "한글 자모 체계와 기본 인사 (Hangul & Greetings) (Part 3)",
    "level": "A1",
    "objective": "Comprehensive mastery of 기본 인사와 자기소개 (Greetings & Self-Introduction).",
    "presentation": {
      "explanation": "본 단원에서는 « 한글 자모 체계와 기본 인사 (Hangul & Greetings) » (제3절)의 핵심 언어 요소와 기본 인사와 자기소개 (Greetings & Self-Introduction)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (1.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (1.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (1.3.3).",
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
          "prompt": "« 기본 인사와 자기소개 (Greetings & Self-Introduction) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (1.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (1.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (1.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 한글 자모 체계와 기본 인사 (Hangul & Greetings) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (1.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (1.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (1.3.3)."
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
          "prompt": "« 기본 인사와 자기소개 (Greetings & Self-Introduction) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 1-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (1.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (1.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (1.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u1-l4": {
    "id": "ko-u1-l4",
    "subject": "korean",
    "unit": 1,
    "lessonNumber": 4,
    "title": "한글 자모 체계와 기본 인사 (Hangul & Greetings) (Part 4)",
    "level": "A1",
    "objective": "Comprehensive mastery of 기본 인사와 자기소개 (Greetings & Self-Introduction).",
    "presentation": {
      "explanation": "본 단원에서는 « 한글 자모 체계와 기본 인사 (Hangul & Greetings) » (제4절)의 핵심 언어 요소와 기본 인사와 자기소개 (Greetings & Self-Introduction)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (1.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (1.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (1.4.3).",
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
          "prompt": "« 기본 인사와 자기소개 (Greetings & Self-Introduction) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (1.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (1.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (1.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 한글 자모 체계와 기본 인사 (Hangul & Greetings) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (1.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (1.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (1.4.3)."
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
          "prompt": "« 기본 인사와 자기소개 (Greetings & Self-Introduction) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 1-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (1.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (1.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (1.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u1-l5": {
    "id": "ko-u1-l5",
    "subject": "korean",
    "unit": 1,
    "lessonNumber": 5,
    "title": "한글 자모 체계와 기본 인사 (Hangul & Greetings) (Part 5)",
    "level": "A1",
    "objective": "Comprehensive mastery of 기본 인사와 자기소개 (Greetings & Self-Introduction).",
    "presentation": {
      "explanation": "본 단원에서는 « 한글 자모 체계와 기본 인사 (Hangul & Greetings) » (제5절)의 핵심 언어 요소와 기본 인사와 자기소개 (Greetings & Self-Introduction)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (1.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (1.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (1.5.3).",
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
          "prompt": "« 기본 인사와 자기소개 (Greetings & Self-Introduction) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (1.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (1.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (1.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 한글 자모 체계와 기본 인사 (Hangul & Greetings) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (1.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (1.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (1.5.3)."
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
          "prompt": "« 기본 인사와 자기소개 (Greetings & Self-Introduction) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 1-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (1.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (1.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (1.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u2-l1": {
    "id": "ko-u2-l1",
    "subject": "korean",
    "unit": 2,
    "lessonNumber": 1,
    "title": "주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) (Part 1)",
    "level": "A1",
    "objective": "Comprehensive mastery of 은/는과 이/가 조사의 차이 (Topic vs Subject Particles).",
    "presentation": {
      "explanation": "본 단원에서는 « 주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) » (제1절)의 핵심 언어 요소와 은/는과 이/가 조사의 차이 (Topic vs Subject Particles)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (2.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (2.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (2.1.3).",
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
          "prompt": "« 은/는과 이/가 조사의 차이 (Topic vs Subject Particles) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (2.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (2.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (2.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (2.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (2.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (2.1.3)."
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
          "prompt": "« 은/는과 이/가 조사의 차이 (Topic vs Subject Particles) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 2-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (2.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (2.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (2.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u2-l2": {
    "id": "ko-u2-l2",
    "subject": "korean",
    "unit": 2,
    "lessonNumber": 2,
    "title": "주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) (Part 2)",
    "level": "A1",
    "objective": "Comprehensive mastery of 은/는과 이/가 조사의 차이 (Topic vs Subject Particles).",
    "presentation": {
      "explanation": "본 단원에서는 « 주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) » (제2절)의 핵심 언어 요소와 은/는과 이/가 조사의 차이 (Topic vs Subject Particles)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (2.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (2.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (2.2.3).",
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
          "prompt": "« 은/는과 이/가 조사의 차이 (Topic vs Subject Particles) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (2.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (2.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (2.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (2.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (2.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (2.2.3)."
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
          "prompt": "« 은/는과 이/가 조사의 차이 (Topic vs Subject Particles) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 2-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (2.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (2.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (2.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u2-l3": {
    "id": "ko-u2-l3",
    "subject": "korean",
    "unit": 2,
    "lessonNumber": 3,
    "title": "주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) (Part 3)",
    "level": "A1",
    "objective": "Comprehensive mastery of 은/는과 이/가 조사의 차이 (Topic vs Subject Particles).",
    "presentation": {
      "explanation": "본 단원에서는 « 주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) » (제3절)의 핵심 언어 요소와 은/는과 이/가 조사의 차이 (Topic vs Subject Particles)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (2.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (2.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (2.3.3).",
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
          "prompt": "« 은/는과 이/가 조사의 차이 (Topic vs Subject Particles) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (2.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (2.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (2.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (2.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (2.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (2.3.3)."
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
          "prompt": "« 은/는과 이/가 조사의 차이 (Topic vs Subject Particles) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 2-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (2.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (2.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (2.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u2-l4": {
    "id": "ko-u2-l4",
    "subject": "korean",
    "unit": 2,
    "lessonNumber": 4,
    "title": "주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) (Part 4)",
    "level": "A1",
    "objective": "Comprehensive mastery of 은/는과 이/가 조사의 차이 (Topic vs Subject Particles).",
    "presentation": {
      "explanation": "본 단원에서는 « 주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) » (제4절)의 핵심 언어 요소와 은/는과 이/가 조사의 차이 (Topic vs Subject Particles)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (2.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (2.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (2.4.3).",
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
          "prompt": "« 은/는과 이/가 조사의 차이 (Topic vs Subject Particles) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (2.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (2.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (2.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (2.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (2.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (2.4.3)."
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
          "prompt": "« 은/는과 이/가 조사의 차이 (Topic vs Subject Particles) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 2-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (2.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (2.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (2.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u2-l5": {
    "id": "ko-u2-l5",
    "subject": "korean",
    "unit": 2,
    "lessonNumber": 5,
    "title": "주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) (Part 5)",
    "level": "A1",
    "objective": "Comprehensive mastery of 은/는과 이/가 조사의 차이 (Topic vs Subject Particles).",
    "presentation": {
      "explanation": "본 단원에서는 « 주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) » (제5절)의 핵심 언어 요소와 은/는과 이/가 조사의 차이 (Topic vs Subject Particles)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (2.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (2.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (2.5.3).",
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
          "prompt": "« 은/는과 이/가 조사의 차이 (Topic vs Subject Particles) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (2.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (2.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (2.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 주제격(은/는)과 주격(이/가) 조사 (Topic & Subject Particles) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (2.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (2.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (2.5.3)."
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
          "prompt": "« 은/는과 이/가 조사의 차이 (Topic vs Subject Particles) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 2-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (2.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (2.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (2.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u3-l1": {
    "id": "ko-u3-l1",
    "subject": "korean",
    "unit": 3,
    "lessonNumber": 1,
    "title": "목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) (Part 1)",
    "level": "A1",
    "objective": "Comprehensive mastery of 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV).",
    "presentation": {
      "explanation": "본 단원에서는 « 목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) » (제1절)의 핵심 언어 요소와 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (3.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (3.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (3.1.3).",
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
          "prompt": "« 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (3.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (3.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (3.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (3.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (3.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (3.1.3)."
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
          "prompt": "« 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 3-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (3.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (3.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (3.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u3-l2": {
    "id": "ko-u3-l2",
    "subject": "korean",
    "unit": 3,
    "lessonNumber": 2,
    "title": "목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) (Part 2)",
    "level": "A1",
    "objective": "Comprehensive mastery of 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV).",
    "presentation": {
      "explanation": "본 단원에서는 « 목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) » (제2절)의 핵심 언어 요소와 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (3.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (3.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (3.2.3).",
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
          "prompt": "« 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (3.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (3.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (3.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (3.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (3.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (3.2.3)."
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
          "prompt": "« 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 3-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (3.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (3.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (3.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u3-l3": {
    "id": "ko-u3-l3",
    "subject": "korean",
    "unit": 3,
    "lessonNumber": 3,
    "title": "목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) (Part 3)",
    "level": "A1",
    "objective": "Comprehensive mastery of 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV).",
    "presentation": {
      "explanation": "본 단원에서는 « 목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) » (제3절)의 핵심 언어 요소와 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (3.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (3.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (3.3.3).",
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
          "prompt": "« 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (3.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (3.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (3.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (3.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (3.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (3.3.3)."
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
          "prompt": "« 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 3-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (3.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (3.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (3.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u3-l4": {
    "id": "ko-u3-l4",
    "subject": "korean",
    "unit": 3,
    "lessonNumber": 4,
    "title": "목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) (Part 4)",
    "level": "A1",
    "objective": "Comprehensive mastery of 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV).",
    "presentation": {
      "explanation": "본 단원에서는 « 목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) » (제4절)의 핵심 언어 요소와 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (3.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (3.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (3.4.3).",
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
          "prompt": "« 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (3.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (3.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (3.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (3.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (3.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (3.4.3)."
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
          "prompt": "« 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 3-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (3.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (3.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (3.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u3-l5": {
    "id": "ko-u3-l5",
    "subject": "korean",
    "unit": 3,
    "lessonNumber": 5,
    "title": "목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) (Part 5)",
    "level": "A1",
    "objective": "Comprehensive mastery of 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV).",
    "presentation": {
      "explanation": "본 단원에서는 « 목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) » (제5절)의 핵심 언어 요소와 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (3.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (3.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (3.5.3).",
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
          "prompt": "« 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (3.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (3.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (3.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 목적격 조사(을/를)와 기본 어순 (Object Particle & SOV Order) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (3.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (3.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (3.5.3)."
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
          "prompt": "« 목적격 조사 을/를과 어순 (Object Particle 을/를 & SOV) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 3-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (3.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (3.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (3.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u4-l1": {
    "id": "ko-u4-l1",
    "subject": "korean",
    "unit": 4,
    "lessonNumber": 1,
    "title": "해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) (Part 1)",
    "level": "A1",
    "objective": "Comprehensive mastery of 해요체 어미 활용 (Polite Informal -아요/어요).",
    "presentation": {
      "explanation": "본 단원에서는 « 해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) » (제1절)의 핵심 언어 요소와 해요체 어미 활용 (Polite Informal -아요/어요)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (4.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (4.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (4.1.3).",
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
          "prompt": "« 해요체 어미 활용 (Polite Informal -아요/어요) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (4.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (4.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (4.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (4.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (4.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (4.1.3)."
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
          "prompt": "« 해요체 어미 활용 (Polite Informal -아요/어요) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 4-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (4.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (4.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (4.1.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u4-l2": {
    "id": "ko-u4-l2",
    "subject": "korean",
    "unit": 4,
    "lessonNumber": 2,
    "title": "해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) (Part 2)",
    "level": "A1",
    "objective": "Comprehensive mastery of 해요체 어미 활용 (Polite Informal -아요/어요).",
    "presentation": {
      "explanation": "본 단원에서는 « 해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) » (제2절)의 핵심 언어 요소와 해요체 어미 활용 (Polite Informal -아요/어요)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (4.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (4.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (4.2.3).",
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
          "prompt": "« 해요체 어미 활용 (Polite Informal -아요/어요) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (4.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (4.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (4.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (4.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (4.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (4.2.3)."
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
          "prompt": "« 해요체 어미 활용 (Polite Informal -아요/어요) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 4-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (4.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (4.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (4.2.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u4-l3": {
    "id": "ko-u4-l3",
    "subject": "korean",
    "unit": 4,
    "lessonNumber": 3,
    "title": "해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) (Part 3)",
    "level": "A1",
    "objective": "Comprehensive mastery of 해요체 어미 활용 (Polite Informal -아요/어요).",
    "presentation": {
      "explanation": "본 단원에서는 « 해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) » (제3절)의 핵심 언어 요소와 해요체 어미 활용 (Polite Informal -아요/어요)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (4.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (4.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (4.3.3).",
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
          "prompt": "« 해요체 어미 활용 (Polite Informal -아요/어요) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (4.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (4.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (4.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (4.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (4.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (4.3.3)."
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
          "prompt": "« 해요체 어미 활용 (Polite Informal -아요/어요) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 4-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (4.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (4.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (4.3.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u4-l4": {
    "id": "ko-u4-l4",
    "subject": "korean",
    "unit": 4,
    "lessonNumber": 4,
    "title": "해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) (Part 4)",
    "level": "A1",
    "objective": "Comprehensive mastery of 해요체 어미 활용 (Polite Informal -아요/어요).",
    "presentation": {
      "explanation": "본 단원에서는 « 해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) » (제4절)의 핵심 언어 요소와 해요체 어미 활용 (Polite Informal -아요/어요)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (4.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (4.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (4.4.3).",
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
          "prompt": "« 해요체 어미 활용 (Polite Informal -아요/어요) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (4.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (4.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (4.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (4.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (4.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (4.4.3)."
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
          "prompt": "« 해요체 어미 활용 (Polite Informal -아요/어요) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 4-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (4.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (4.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (4.4.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u4-l5": {
    "id": "ko-u4-l5",
    "subject": "korean",
    "unit": 4,
    "lessonNumber": 5,
    "title": "해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) (Part 5)",
    "level": "A1",
    "objective": "Comprehensive mastery of 해요체 어미 활용 (Polite Informal -아요/어요).",
    "presentation": {
      "explanation": "본 단원에서는 « 해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) » (제5절)의 핵심 언어 요소와 해요체 어미 활용 (Polite Informal -아요/어요)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (4.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (4.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (4.5.3).",
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
          "prompt": "« 해요체 어미 활용 (Polite Informal -아요/어요) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (4.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (4.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (4.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 해요체 종결어미와 모음조화 (Polite Informal Style -아요/어요) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (4.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (4.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (4.5.3)."
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
          "prompt": "« 해요체 어미 활용 (Polite Informal -아요/어요) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 4-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (4.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (4.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (4.5.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u5-l1": {
    "id": "ko-u5-l1",
    "subject": "korean",
    "unit": 5,
    "lessonNumber": 1,
    "title": "하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) (Part 1)",
    "level": "A1",
    "objective": "Comprehensive mastery of 격식체 하십시오체 (Formal Style -ㅂ니다/습니다).",
    "presentation": {
      "explanation": "본 단원에서는 « 하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) » (제1절)의 핵심 언어 요소와 격식체 하십시오체 (Formal Style -ㅂ니다/습니다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (5.1.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (5.1.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (5.1.3).",
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
          "prompt": "« 격식체 하십시오체 (Formal Style -ㅂ니다/습니다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 1)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (5.1.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (5.1.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (5.1.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 1):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (5.1.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (5.1.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (5.1.3)."
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
          "prompt": "« 격식체 하십시오체 (Formal Style -ㅂ니다/습니다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 5-1)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (5.1.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (5.1.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (5.1.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u5-l2": {
    "id": "ko-u5-l2",
    "subject": "korean",
    "unit": 5,
    "lessonNumber": 2,
    "title": "하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) (Part 2)",
    "level": "A1",
    "objective": "Comprehensive mastery of 격식체 하십시오체 (Formal Style -ㅂ니다/습니다).",
    "presentation": {
      "explanation": "본 단원에서는 « 하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) » (제2절)의 핵심 언어 요소와 격식체 하십시오체 (Formal Style -ㅂ니다/습니다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (5.2.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (5.2.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (5.2.3).",
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
          "prompt": "« 격식체 하십시오체 (Formal Style -ㅂ니다/습니다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 2)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (5.2.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (5.2.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (5.2.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 2):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (5.2.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (5.2.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (5.2.3)."
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
          "prompt": "« 격식체 하십시오체 (Formal Style -ㅂ니다/습니다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 5-2)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (5.2.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (5.2.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (5.2.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u5-l3": {
    "id": "ko-u5-l3",
    "subject": "korean",
    "unit": 5,
    "lessonNumber": 3,
    "title": "하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) (Part 3)",
    "level": "A1",
    "objective": "Comprehensive mastery of 격식체 하십시오체 (Formal Style -ㅂ니다/습니다).",
    "presentation": {
      "explanation": "본 단원에서는 « 하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) » (제3절)의 핵심 언어 요소와 격식체 하십시오체 (Formal Style -ㅂ니다/습니다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (5.3.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (5.3.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (5.3.3).",
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
          "prompt": "« 격식체 하십시오체 (Formal Style -ㅂ니다/습니다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 3)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (5.3.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (5.3.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (5.3.3)."
          ],
          "answerIndex": 0,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 3):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (5.3.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (5.3.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (5.3.3)."
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
          "prompt": "« 격식체 하십시오체 (Formal Style -ㅂ니다/습니다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 5-3)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (5.3.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (5.3.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (5.3.3)."
          ],
          "answerIndex": 2,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u5-l4": {
    "id": "ko-u5-l4",
    "subject": "korean",
    "unit": 5,
    "lessonNumber": 4,
    "title": "하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) (Part 4)",
    "level": "A1",
    "objective": "Comprehensive mastery of 격식체 하십시오체 (Formal Style -ㅂ니다/습니다).",
    "presentation": {
      "explanation": "본 단원에서는 « 하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) » (제4절)의 핵심 언어 요소와 격식체 하십시오체 (Formal Style -ㅂ니다/습니다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (5.4.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (5.4.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (5.4.3).",
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
          "prompt": "« 격식체 하십시오체 (Formal Style -ㅂ니다/습니다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 4)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (5.4.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (5.4.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (5.4.3)."
          ],
          "answerIndex": 1,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 4):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (5.4.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (5.4.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (5.4.3)."
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
          "prompt": "« 격식체 하십시오체 (Formal Style -ㅂ니다/습니다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 5-4)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (5.4.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (5.4.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (5.4.3)."
          ],
          "answerIndex": 0,
          "explanation": "Affirms CEFR A1 target-language standard."
        }
      ]
    }
  },
  "ko-u5-l5": {
    "id": "ko-u5-l5",
    "subject": "korean",
    "unit": 5,
    "lessonNumber": 5,
    "title": "하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) (Part 5)",
    "level": "A1",
    "objective": "Comprehensive mastery of 격식체 하십시오체 (Formal Style -ㅂ니다/습니다).",
    "presentation": {
      "explanation": "본 단원에서는 « 하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) » (제5절)의 핵심 언어 요소와 격식체 하십시오체 (Formal Style -ㅂ니다/습니다)에 대해 체계적으로 학습합니다. 한국어는 조사의 결합과 어미의 정밀한 활용을 통해 문법적 관계와 화자의 심리적 태도를 드러냅니다. 올바른 높임법 체계와 문맥에 부합하는 어휘 선택은 자연스럽고 품격 있는 의사소통의 기초가 됩니다.\n\n문법 분석 및 영어 해설 (Grammar Analysis & English Glosses):\n정확한 통사 구조와 실용 표현을 익혀 다양한 담화 상황에 능동적으로 대처할 수 있습니다.",
      "examples": [
        {
          "target": "선생님께서 교실에서 학생들에게 핵심 문법 표현을 친절하고 상세하게 가르쳐 주십니다 (5.5.1).",
          "reading": "Seonsaengnim-kkeseo gyosil-eseo haksaengdeul-ege haeksim munbeop pyohyeon-eul chinjeolhago sangsehage gareuchyeo jusimnida.",
          "translation": "The teacher kindly and thoroughly teaches key grammatical expressions to students in the classroom."
        },
        {
          "target": "우리는 매일 아침 도서관에 가서 전공 서적을 읽으며 학문 연구에 성실하게 매진합니다 (5.5.2).",
          "reading": "Uri-neun maeil achim doseogwan-e gaseo jeongong seojeog-eul ilgeomyeo hangmun yeongu-e seongsilhage maejinhamnida.",
          "translation": "We go to the library every morning, reading major textbooks and dedicating ourselves to academic research."
        },
        {
          "target": "서울 중심가에는 유서 깊은 전통 문화유적과 현대적인 초고층 건물들이 조화를 이룹니다 (5.5.3).",
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
          "prompt": "« 격식체 하십시오체 (Formal Style -ㅂ니다/습니다) »의 기준에 부합하는 가장 자연스러운 한국어 문장은 무엇입니까 (문항 5)?",
          "options": [
            "동생이 아침 일찍 일어나서 온 가족을 위해 맛있는 토스트와 신선한 주스를 만들었습니다 (5.5.1).",
            "어제 오후에 중앙도서관에서 많은 대학생들이 조용히 전공 서적을 탐독하고 있었습니다 (5.5.2).",
            "이 전통 식당은 신선한 제철 식재료로 정갈하게 차려낸 한정식 요리로 인기가 많습니다 (5.5.3)."
          ],
          "answerIndex": 2,
          "explanation": "Demonstrates correct morphological and syntactic command."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "« 하십시오체와 격식체 어미 (Formal Polite Style -ㅂ니다/습니다) »의 올바른 통사 구조와 문맥적 일치를 보여주는 문장을 고르십시오 (과제 5):",
          "options": [
            "민수 씨는 퇴근 후에 동료들과 함께 시내 대형 서점에 들러 새로 출간된 베스트셀러 소설을 샀습니다 (5.5.1).",
            "내일 아침 여덟 시 정각에 모든 연수 참가자가 역 광장 앞에 모여서 버스로 출발할 예정입니다 (5.5.2).",
            "공원에 만개한 화사한 봄꽃들이 완연한 봄 날씨의 정취를 시민들에게 한껏 느끼게 해 줍니다 (5.5.3)."
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
          "prompt": "« 격식체 하십시오체 (Formal Style -ㅂ니다/습니다) »의 문법적 쓰임새에 엄격히 부합하는 완성형 표현은 어느 것입니까 (평가 5-5)?",
          "options": [
            "연구팀이 새로운 인공지능 알고리즘 개발 및 성능 검증 결과를 국제 학술지에 성공적으로 게재했습니다 (5.5.1).",
            "새로운 광역 지하철 노선이 조기 개통되어 도심으로의 출퇴근 이동이 한층 더 편리하고 신속해졌습니다 (5.5.2).",
            "국제 학술 심포지엄에 참가한 세계 각국의 연구원들이 최신 기술 동향에 대해 열띤 토론을 진행했습니다 (5.5.3)."
          ],
          "answerIndex": 1,
          "explanation": "Affirms CEFR A1 target-language standard."
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
