// korean curriculum — fully authored CEFR A1-C2 roadmap
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («안녕하세요»):",
                    "acceptedAnswers": [
                        "안녕하세요"
                    ],
                    "explanation": "The target keyword was: 【안녕하세요】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («감사합니다»):",
                    "acceptedAnswers": [
                        "감사합니다"
                    ],
                    "explanation": "The target keyword was: 【감사합니다】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («안녕히»):",
                    "acceptedAnswers": [
                        "안녕히"
                    ],
                    "explanation": "The target keyword was: 【안녕히】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («반갑습니다»):",
                    "acceptedAnswers": [
                        "반갑습니다"
                    ],
                    "explanation": "The target keyword was: 【반갑습니다】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («죄송합니다»):",
                    "acceptedAnswers": [
                        "죄송합니다"
                    ],
                    "explanation": "The target keyword was: 【죄송합니다】"
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
            "mnemonics": [
                "‘은/는’은 이미 알려진 화제(Topic)나 다른 대상과의 대조(Contrast)를 나타내며, ‘이/가’는 새로운 정보(New Subject)나 특정 초점을 나타냅니다."
            ],
            "culturalNotes": [
                "한국어 조사 사용은 단순한 문법을 넘어 화자와 청자 사이의 정보 공유 정도를 정밀하게 조율하는 사회언어학적 기능을 합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («저는»):",
                    "acceptedAnswers": [
                        "저는"
                    ],
                    "explanation": "The target keyword was: 【저는】"
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
            "mnemonics": [
                "받침이 있으면 ‘은/이’, 받침이 없으면 ‘는/가’가 연결되어 한국어의 유려한 음운 연결(연음)을 완성합니다."
            ],
            "culturalNotes": [
                "자신을 낮추는 겸칭 ‘저’와 평칭 ‘나’의 선택은 대화 상대에 대한 존경심의 척도입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («학생은»):",
                    "acceptedAnswers": [
                        "학생은"
                    ],
                    "explanation": "The target keyword was: 【학생은】"
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
            "mnemonics": [
                "자기소개에서 ‘저는 학생입니다’(화제 은/는)처럼 배경을 설정한 뒤, ‘제가 하겠습니다’(초점 이/가)로 자신을 특정합니다."
            ],
            "culturalNotes": [
                "한국의 토론 문화에서는 ‘은/는’을 활용하여 자신의 의견을 완곡하게 대조적으로 제시하는 표현법이 자주 사용됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («선생님이»):",
                    "acceptedAnswers": [
                        "선생님이"
                    ],
                    "explanation": "The target keyword was: 【선생님이】"
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
            "mnemonics": [
                "문장 내에서 큰 주어는 ‘은/는’으로 잡고, 안긴문장의 작은 주어는 ‘이/가’로 설정하면 완벽한 문장 구조가 됩니다."
            ],
            "culturalNotes": [
                "가족이나 소속 집단을 소개할 때 ‘내 가족’ 대신 ‘우리 가족’을 사용하는 것은 한국 공동체주의의 언어적 발현입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («친구가»):",
                    "acceptedAnswers": [
                        "친구가"
                    ],
                    "explanation": "The target keyword was: 【친구가】"
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
            "mnemonics": [
                "‘이/가 아니다’의 부정 구조에서는 보격 조사 ‘이/가’가 필수적으로 결합하여 보어를 이룹니다."
            ],
            "culturalNotes": [
                "공식 석상에서의 자기소개는 소속 기관, 직책, 이름을 명확히 밝히며 겸손한 태도를 견지하는 것이 미덕입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («도서관은»):",
                    "acceptedAnswers": [
                        "도서관은"
                    ],
                    "explanation": "The target keyword was: 【도서관은】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («책을»):",
                    "acceptedAnswers": [
                        "책을"
                    ],
                    "explanation": "The target keyword was: 【책을】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («사과를»):",
                    "acceptedAnswers": [
                        "사과를"
                    ],
                    "explanation": "The target keyword was: 【사과를】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («한국어를»):",
                    "acceptedAnswers": [
                        "한국어를"
                    ],
                    "explanation": "The target keyword was: 【한국어를】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («음악을»):",
                    "acceptedAnswers": [
                        "음악을"
                    ],
                    "explanation": "The target keyword was: 【음악을】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («영화를»):",
                    "acceptedAnswers": [
                        "영화를"
                    ],
                    "explanation": "The target keyword was: 【영화를】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («가요»):",
                    "acceptedAnswers": [
                        "가요"
                    ],
                    "explanation": "The target keyword was: 【가요】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («먹어요»):",
                    "acceptedAnswers": [
                        "먹어요"
                    ],
                    "explanation": "The target keyword was: 【먹어요】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («봐요»):",
                    "acceptedAnswers": [
                        "봐요"
                    ],
                    "explanation": "The target keyword was: 【봐요】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («공부해요»):",
                    "acceptedAnswers": [
                        "공부해요"
                    ],
                    "explanation": "The target keyword was: 【공부해요】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («쉬어요»):",
                    "acceptedAnswers": [
                        "쉬어요"
                    ],
                    "explanation": "The target keyword was: 【쉬어요】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («갑니다»):",
                    "acceptedAnswers": [
                        "갑니다"
                    ],
                    "explanation": "The target keyword was: 【갑니다】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («먹습니다»):",
                    "acceptedAnswers": [
                        "먹습니다"
                    ],
                    "explanation": "The target keyword was: 【먹습니다】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («합니다»):",
                    "acceptedAnswers": [
                        "합니다"
                    ],
                    "explanation": "The target keyword was: 【합니다】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («만납니다»):",
                    "acceptedAnswers": [
                        "만납니다"
                    ],
                    "explanation": "The target keyword was: 【만납니다】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («읽습니다»):",
                    "acceptedAnswers": [
                        "읽습니다"
                    ],
                    "explanation": "The target keyword was: 【읽습니다】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («갔어요»):",
                    "acceptedAnswers": [
                        "갔어요"
                    ],
                    "explanation": "The target keyword was: 【갔어요】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («왔어요»):",
                    "acceptedAnswers": [
                        "왔어요"
                    ],
                    "explanation": "The target keyword was: 【왔어요】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («보았어요»):",
                    "acceptedAnswers": [
                        "보았어요"
                    ],
                    "explanation": "The target keyword was: 【보았어요】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («들었어요»):",
                    "acceptedAnswers": [
                        "들었어요"
                    ],
                    "explanation": "The target keyword was: 【들었어요】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («만났어요»):",
                    "acceptedAnswers": [
                        "만났어요"
                    ],
                    "explanation": "The target keyword was: 【만났어요】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («갈_거예요»):",
                    "acceptedAnswers": [
                        "갈_거예요"
                    ],
                    "explanation": "The target keyword was: 【갈_거예요】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («하겠어요»):",
                    "acceptedAnswers": [
                        "하겠어요"
                    ],
                    "explanation": "The target keyword was: 【하겠어요】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («먹을_거예요»):",
                    "acceptedAnswers": [
                        "먹을_거예요"
                    ],
                    "explanation": "The target keyword was: 【먹을_거예요】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («만날_거예요»):",
                    "acceptedAnswers": [
                        "만날_거예요"
                    ],
                    "explanation": "The target keyword was: 【만날_거예요】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («배울_거예요»):",
                    "acceptedAnswers": [
                        "배울_거예요"
                    ],
                    "explanation": "The target keyword was: 【배울_거예요】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («공부하고_있다»):",
                    "acceptedAnswers": [
                        "공부하고_있다"
                    ],
                    "explanation": "The target keyword was: 【공부하고_있다】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («비가_오고_있다»):",
                    "acceptedAnswers": [
                        "비가_오고_있다"
                    ],
                    "explanation": "The target keyword was: 【비가_오고_있다】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («기다리고_있다»):",
                    "acceptedAnswers": [
                        "기다리고_있다"
                    ],
                    "explanation": "The target keyword was: 【기다리고_있다】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («앉아_있다»):",
                    "acceptedAnswers": [
                        "앉아_있다"
                    ],
                    "explanation": "The target keyword was: 【앉아_있다】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («열려_있다»):",
                    "acceptedAnswers": [
                        "열려_있다"
                    ],
                    "explanation": "The target keyword was: 【열려_있다】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («집에»):",
                    "acceptedAnswers": [
                        "집에"
                    ],
                    "explanation": "The target keyword was: 【집에】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («학교에서»):",
                    "acceptedAnswers": [
                        "학교에서"
                    ],
                    "explanation": "The target keyword was: 【학교에서】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («서울로»):",
                    "acceptedAnswers": [
                        "서울로"
                    ],
                    "explanation": "The target keyword was: 【서울로】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («식당에»):",
                    "acceptedAnswers": [
                        "식당에"
                    ],
                    "explanation": "The target keyword was: 【식당에】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («공원에서»):",
                    "acceptedAnswers": [
                        "공원에서"
                    ],
                    "explanation": "The target keyword was: 【공원에서】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («수_있다»):",
                    "acceptedAnswers": [
                        "수_있다"
                    ],
                    "explanation": "The target keyword was: 【수_있다】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («수_없다»):",
                    "acceptedAnswers": [
                        "수_없다"
                    ],
                    "explanation": "The target keyword was: 【수_없다】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («읽을_수_있다»):",
                    "acceptedAnswers": [
                        "읽을_수_있다"
                    ],
                    "explanation": "The target keyword was: 【읽을_수_있다】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («말할_수_있다»):",
                    "acceptedAnswers": [
                        "말할_수_있다"
                    ],
                    "explanation": "The target keyword was: 【말할_수_있다】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («갈_수_없다»):",
                    "acceptedAnswers": [
                        "갈_수_없다"
                    ],
                    "explanation": "The target keyword was: 【갈_수_없다】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («하고»):",
                    "acceptedAnswers": [
                        "하고"
                    ],
                    "explanation": "The target keyword was: 【하고】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («이랑»):",
                    "acceptedAnswers": [
                        "이랑"
                    ],
                    "explanation": "The target keyword was: 【이랑】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («와과»):",
                    "acceptedAnswers": [
                        "와과"
                    ],
                    "explanation": "The target keyword was: 【와과】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («같이»):",
                    "acceptedAnswers": [
                        "같이"
                    ],
                    "explanation": "The target keyword was: 【같이】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («함께»):",
                    "acceptedAnswers": [
                        "함께"
                    ],
                    "explanation": "The target keyword was: 【함께】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («커서»):",
                    "acceptedAnswers": [
                        "커서"
                    ],
                    "explanation": "The target keyword was: 【커서】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («작아서»):",
                    "acceptedAnswers": [
                        "작아서"
                    ],
                    "explanation": "The target keyword was: 【작아서】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («비싸서»):",
                    "acceptedAnswers": [
                        "비싸서"
                    ],
                    "explanation": "The target keyword was: 【비싸서】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («좋아서»):",
                    "acceptedAnswers": [
                        "좋아서"
                    ],
                    "explanation": "The target keyword was: 【좋아서】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («더워서»):",
                    "acceptedAnswers": [
                        "더워서"
                    ],
                    "explanation": "The target keyword was: 【더워서】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («크지만»):",
                    "acceptedAnswers": [
                        "크지만"
                    ],
                    "explanation": "The target keyword was: 【크지만】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («바쁘지만»):",
                    "acceptedAnswers": [
                        "바쁘지만"
                    ],
                    "explanation": "The target keyword was: 【바쁘지만】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («어렵지만»):",
                    "acceptedAnswers": [
                        "어렵지만"
                    ],
                    "explanation": "The target keyword was: 【어렵지만】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («좋지만»):",
                    "acceptedAnswers": [
                        "좋지만"
                    ],
                    "explanation": "The target keyword was: 【좋지만】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («멀지만»):",
                    "acceptedAnswers": [
                        "멀지만"
                    ],
                    "explanation": "The target keyword was: 【멀지만】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («가고_싶다»):",
                    "acceptedAnswers": [
                        "가고_싶다"
                    ],
                    "explanation": "The target keyword was: 【가고_싶다】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («먹고_싶다»):",
                    "acceptedAnswers": [
                        "먹고_싶다"
                    ],
                    "explanation": "The target keyword was: 【먹고_싶다】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («보고_싶다»):",
                    "acceptedAnswers": [
                        "보고_싶다"
                    ],
                    "explanation": "The target keyword was: 【보고_싶다】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («만나고_싶다»):",
                    "acceptedAnswers": [
                        "만나고_싶다"
                    ],
                    "explanation": "The target keyword was: 【만나고_싶다】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («배우고_싶다»):",
                    "acceptedAnswers": [
                        "배우고_싶다"
                    ],
                    "explanation": "The target keyword was: 【배우고_싶다】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («가세요»):",
                    "acceptedAnswers": [
                        "가세요"
                    ],
                    "explanation": "The target keyword was: 【가세요】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («드세요»):",
                    "acceptedAnswers": [
                        "드세요"
                    ],
                    "explanation": "The target keyword was: 【드세요】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («읽으세요»):",
                    "acceptedAnswers": [
                        "읽으세요"
                    ],
                    "explanation": "The target keyword was: 【읽으세요】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («앉으세요»):",
                    "acceptedAnswers": [
                        "앉으세요"
                    ],
                    "explanation": "The target keyword was: 【앉으세요】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («기다리세요»):",
                    "acceptedAnswers": [
                        "기다리세요"
                    ],
                    "explanation": "The target keyword was: 【기다리세요】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («가지_마세요»):",
                    "acceptedAnswers": [
                        "가지_마세요"
                    ],
                    "explanation": "The target keyword was: 【가지_마세요】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («먹지_마세요»):",
                    "acceptedAnswers": [
                        "먹지_마세요"
                    ],
                    "explanation": "The target keyword was: 【먹지_마세요】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («떠들지_마세요»):",
                    "acceptedAnswers": [
                        "떠들지_마세요"
                    ],
                    "explanation": "The target keyword was: 【떠들지_마세요】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («걱정하지_마세요»):",
                    "acceptedAnswers": [
                        "걱정하지_마세요"
                    ],
                    "explanation": "The target keyword was: 【걱정하지_마세요】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («늦지_마세요»):",
                    "acceptedAnswers": [
                        "늦지_마세요"
                    ],
                    "explanation": "The target keyword was: 【늦지_마세요】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («가야_한다»):",
                    "acceptedAnswers": [
                        "가야_한다"
                    ],
                    "explanation": "The target keyword was: 【가야_한다】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («먹어야_한다»):",
                    "acceptedAnswers": [
                        "먹어야_한다"
                    ],
                    "explanation": "The target keyword was: 【먹어야_한다】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («공부해야_한다»):",
                    "acceptedAnswers": [
                        "공부해야_한다"
                    ],
                    "explanation": "The target keyword was: 【공부해야_한다】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («일해야_한다»):",
                    "acceptedAnswers": [
                        "일해야_한다"
                    ],
                    "explanation": "The target keyword was: 【일해야_한다】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («지켜야_한다»):",
                    "acceptedAnswers": [
                        "지켜야_한다"
                    ],
                    "explanation": "The target keyword was: 【지켜야_한다】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («가면»):",
                    "acceptedAnswers": [
                        "가면"
                    ],
                    "explanation": "The target keyword was: 【가면】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («오면»):",
                    "acceptedAnswers": [
                        "오면"
                    ],
                    "explanation": "The target keyword was: 【오면】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («만나면»):",
                    "acceptedAnswers": [
                        "만나면"
                    ],
                    "explanation": "The target keyword was: 【만나면】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («비가_오면»):",
                    "acceptedAnswers": [
                        "비가_오면"
                    ],
                    "explanation": "The target keyword was: 【비가_오면】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («시간이_있으면»):",
                    "acceptedAnswers": [
                        "시간이_있으면"
                    ],
                    "explanation": "The target keyword was: 【시간이_있으면】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («가는_사람»):",
                    "acceptedAnswers": [
                        "가는_사람"
                    ],
                    "explanation": "The target keyword was: 【가는_사람】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («먹는_음식»):",
                    "acceptedAnswers": [
                        "먹는_음식"
                    ],
                    "explanation": "The target keyword was: 【먹는_음식】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («보는_영화»):",
                    "acceptedAnswers": [
                        "보는_영화"
                    ],
                    "explanation": "The target keyword was: 【보는_영화】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («만나는_친구»):",
                    "acceptedAnswers": [
                        "만나는_친구"
                    ],
                    "explanation": "The target keyword was: 【만나는_친구】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («읽는_책»):",
                    "acceptedAnswers": [
                        "읽는_책"
                    ],
                    "explanation": "The target keyword was: 【읽는_책】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («회사»):",
                    "acceptedAnswers": [
                        "회사"
                    ],
                    "explanation": "The target keyword was: 【회사】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («회의»):",
                    "acceptedAnswers": [
                        "회의"
                    ],
                    "explanation": "The target keyword was: 【회의】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («업무»):",
                    "acceptedAnswers": [
                        "업무"
                    ],
                    "explanation": "The target keyword was: 【업무】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («보고서»):",
                    "acceptedAnswers": [
                        "보고서"
                    ],
                    "explanation": "The target keyword was: 【보고서】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («이메일»):",
                    "acceptedAnswers": [
                        "이메일"
                    ],
                    "explanation": "The target keyword was: 【이메일】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («병원»):",
                    "acceptedAnswers": [
                        "병원"
                    ],
                    "explanation": "The target keyword was: 【병원】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («의사»):",
                    "acceptedAnswers": [
                        "의사"
                    ],
                    "explanation": "The target keyword was: 【의사】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («약국»):",
                    "acceptedAnswers": [
                        "약국"
                    ],
                    "explanation": "The target keyword was: 【약국】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («증상»):",
                    "acceptedAnswers": [
                        "증상"
                    ],
                    "explanation": "The target keyword was: 【증상】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («치료»):",
                    "acceptedAnswers": [
                        "치료"
                    ],
                    "explanation": "The target keyword was: 【치료】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («한식»):",
                    "acceptedAnswers": [
                        "한식"
                    ],
                    "explanation": "The target keyword was: 【한식】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («김치»):",
                    "acceptedAnswers": [
                        "김치"
                    ],
                    "explanation": "The target keyword was: 【김치】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («비빔밥»):",
                    "acceptedAnswers": [
                        "비빔밥"
                    ],
                    "explanation": "The target keyword was: 【비빔밥】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («불고기»):",
                    "acceptedAnswers": [
                        "불고기"
                    ],
                    "explanation": "The target keyword was: 【불고기】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («식문화»):",
                    "acceptedAnswers": [
                        "식문화"
                    ],
                    "explanation": "The target keyword was: 【식문화】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («영화»):",
                    "acceptedAnswers": [
                        "영화"
                    ],
                    "explanation": "The target keyword was: 【영화】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («드라마»):",
                    "acceptedAnswers": [
                        "드라마"
                    ],
                    "explanation": "The target keyword was: 【드라마】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («배우»):",
                    "acceptedAnswers": [
                        "배우"
                    ],
                    "explanation": "The target keyword was: 【배우】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («음악»):",
                    "acceptedAnswers": [
                        "음악"
                    ],
                    "explanation": "The target keyword was: 【음악】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («예술»):",
                    "acceptedAnswers": [
                        "예술"
                    ],
                    "explanation": "The target keyword was: 【예술】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («은행»):",
                    "acceptedAnswers": [
                        "은행"
                    ],
                    "explanation": "The target keyword was: 【은행】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («계좌»):",
                    "acceptedAnswers": [
                        "계좌"
                    ],
                    "explanation": "The target keyword was: 【계좌】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («송금»):",
                    "acceptedAnswers": [
                        "송금"
                    ],
                    "explanation": "The target keyword was: 【송금】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («환전»):",
                    "acceptedAnswers": [
                        "환전"
                    ],
                    "explanation": "The target keyword was: 【환전】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («신용카드»):",
                    "acceptedAnswers": [
                        "신용카드"
                    ],
                    "explanation": "The target keyword was: 【신용카드】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («환경»):",
                    "acceptedAnswers": [
                        "환경"
                    ],
                    "explanation": "The target keyword was: 【환경】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («자연»):",
                    "acceptedAnswers": [
                        "자연"
                    ],
                    "explanation": "The target keyword was: 【자연】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («기후»):",
                    "acceptedAnswers": [
                        "기후"
                    ],
                    "explanation": "The target keyword was: 【기후】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («재활용»):",
                    "acceptedAnswers": [
                        "재활용"
                    ],
                    "explanation": "The target keyword was: 【재활용】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («보호»):",
                    "acceptedAnswers": [
                        "보호"
                    ],
                    "explanation": "The target keyword was: 【보호】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («법률»):",
                    "acceptedAnswers": [
                        "법률"
                    ],
                    "explanation": "The target keyword was: 【법률】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («헌법»):",
                    "acceptedAnswers": [
                        "헌법"
                    ],
                    "explanation": "The target keyword was: 【헌법】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («재판»):",
                    "acceptedAnswers": [
                        "재판"
                    ],
                    "explanation": "The target keyword was: 【재판】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («판사»):",
                    "acceptedAnswers": [
                        "판사"
                    ],
                    "explanation": "The target keyword was: 【판사】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («권리»):",
                    "acceptedAnswers": [
                        "권리"
                    ],
                    "explanation": "The target keyword was: 【권리】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («문학»):",
                    "acceptedAnswers": [
                        "문학"
                    ],
                    "explanation": "The target keyword was: 【문학】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («시인»):",
                    "acceptedAnswers": [
                        "시인"
                    ],
                    "explanation": "The target keyword was: 【시인】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («소설»):",
                    "acceptedAnswers": [
                        "소설"
                    ],
                    "explanation": "The target keyword was: 【소설】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («작품»):",
                    "acceptedAnswers": [
                        "작품"
                    ],
                    "explanation": "The target keyword was: 【작품】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («정서»):",
                    "acceptedAnswers": [
                        "정서"
                    ],
                    "explanation": "The target keyword was: 【정서】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («언론»):",
                    "acceptedAnswers": [
                        "언론"
                    ],
                    "explanation": "The target keyword was: 【언론】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («기사»):",
                    "acceptedAnswers": [
                        "기사"
                    ],
                    "explanation": "The target keyword was: 【기사】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («기자»):",
                    "acceptedAnswers": [
                        "기자"
                    ],
                    "explanation": "The target keyword was: 【기자】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («보도»):",
                    "acceptedAnswers": [
                        "보도"
                    ],
                    "explanation": "The target keyword was: 【보도】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («사설»):",
                    "acceptedAnswers": [
                        "사설"
                    ],
                    "explanation": "The target keyword was: 【사설】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («철학»):",
                    "acceptedAnswers": [
                        "철학"
                    ],
                    "explanation": "The target keyword was: 【철학】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («윤리»):",
                    "acceptedAnswers": [
                        "윤리"
                    ],
                    "explanation": "The target keyword was: 【윤리】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («사상»):",
                    "acceptedAnswers": [
                        "사상"
                    ],
                    "explanation": "The target keyword was: 【사상】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («가치관»):",
                    "acceptedAnswers": [
                        "가치관"
                    ],
                    "explanation": "The target keyword was: 【가치관】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («도덕»):",
                    "acceptedAnswers": [
                        "도덕"
                    ],
                    "explanation": "The target keyword was: 【도덕】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («과학»):",
                    "acceptedAnswers": [
                        "과학"
                    ],
                    "explanation": "The target keyword was: 【과학】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («기술»):",
                    "acceptedAnswers": [
                        "기술"
                    ],
                    "explanation": "The target keyword was: 【기술】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («연구»):",
                    "acceptedAnswers": [
                        "연구"
                    ],
                    "explanation": "The target keyword was: 【연구】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («실험»):",
                    "acceptedAnswers": [
                        "실험"
                    ],
                    "explanation": "The target keyword was: 【실험】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («혁신»):",
                    "acceptedAnswers": [
                        "혁신"
                    ],
                    "explanation": "The target keyword was: 【혁신】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («외교»):",
                    "acceptedAnswers": [
                        "외교"
                    ],
                    "explanation": "The target keyword was: 【외교】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («안보»):",
                    "acceptedAnswers": [
                        "안보"
                    ],
                    "explanation": "The target keyword was: 【안보】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («국제관계»):",
                    "acceptedAnswers": [
                        "국제관계"
                    ],
                    "explanation": "The target keyword was: 【국제관계】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («협력»):",
                    "acceptedAnswers": [
                        "협력"
                    ],
                    "explanation": "The target keyword was: 【협력】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («조약»):",
                    "acceptedAnswers": [
                        "조약"
                    ],
                    "explanation": "The target keyword was: 【조약】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («대사관»):",
                    "acceptedAnswers": [
                        "대사관"
                    ],
                    "explanation": "The target keyword was: 【대사관】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («외교관»):",
                    "acceptedAnswers": [
                        "외교관"
                    ],
                    "explanation": "The target keyword was: 【외교관】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («회담»):",
                    "acceptedAnswers": [
                        "회담"
                    ],
                    "explanation": "The target keyword was: 【회담】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («합의»):",
                    "acceptedAnswers": [
                        "합의"
                    ],
                    "explanation": "The target keyword was: 【합의】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («협정»):",
                    "acceptedAnswers": [
                        "협정"
                    ],
                    "explanation": "The target keyword was: 【협정】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («속담»):",
                    "acceptedAnswers": [
                        "속담"
                    ],
                    "explanation": "The target keyword was: 【속담】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («관용구»):",
                    "acceptedAnswers": [
                        "관용구"
                    ],
                    "explanation": "The target keyword was: 【관용구】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («사자성어»):",
                    "acceptedAnswers": [
                        "사자성어"
                    ],
                    "explanation": "The target keyword was: 【사자성어】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («비유»):",
                    "acceptedAnswers": [
                        "비유"
                    ],
                    "explanation": "The target keyword was: 【비유】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («함의»):",
                    "acceptedAnswers": [
                        "함의"
                    ],
                    "explanation": "The target keyword was: 【함의】"
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
            "mnemonics": [
                "한글 자음은 발음 기관(혀, 입술, 목구멍)의 모양을 본떠 만들어졌습니다. ㄱ은 혀뿌리가 목구멍을 막는 모양입니다."
            ],
            "culturalNotes": [
                "세종대왕의 훈민정음 창제 정신은 백성을 사랑하는 애민정신(愛民精神)과 실용주의에 기초합니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («정상회담»):",
                    "acceptedAnswers": [
                        "정상회담"
                    ],
                    "explanation": "The target keyword was: 【정상회담】"
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
            "mnemonics": [
                "모음은 천(· 하늘), 지(ㅡ 땅), 인(ㅣ 사람)의 삼재(三才) 철학을 바탕으로 결합하여 음양의 조화를 이룹니다."
            ],
            "culturalNotes": [
                "한국 사회에서는 나이와 사회적 관계에 따라 고개 숙이는 각도(15도~45도)와 인사말이 정중하게 구별됩니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («공동선언»):",
                    "acceptedAnswers": [
                        "공동선언"
                    ],
                    "explanation": "The target keyword was: 【공동선언】"
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
            "mnemonics": [
                "‘안녕하세요’는 ‘아무 탈 없이 편안함’을 기원하는 한국인의 유구한 평화 지향적 심성이 담긴 인사입니다."
            ],
            "culturalNotes": [
                "명함을 주고받을 때는 반드시 양손을 사용하며, 상대방의 직함과 이름을 소리 내어 확인하는 것이 비즈니스 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («정책»):",
                    "acceptedAnswers": [
                        "정책"
                    ],
                    "explanation": "The target keyword was: 【정책】"
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
            "mnemonics": [
                "처음 만났을 때 ‘반갑습니다’와 함께 가볍게 고개를 숙이는 목례는 상대방에 대한 예의의 시작입니다."
            ],
            "culturalNotes": [
                "첫인사에서 나이를 묻는 것은 실례가 아니라 적절한 호칭과 높임말 등급을 설정하기 위한 한국 문화 특유의 관습입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («국가»):",
                    "acceptedAnswers": [
                        "국가"
                    ],
                    "explanation": "The target keyword was: 【국가】"
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
            "mnemonics": [
                "작별 인사 ‘안녕히 계세요’(머무는 이에게)와 ‘안녕히 가세요’(떠나는 이에게)의 구별은 공간과 주체에 대한 존중입니다."
            ],
            "culturalNotes": [
                "식사 전 ‘잘 먹겠습니다’, 식사 후 ‘잘 먹었습니다’는 음식을 준비한 이의 정성에 감사하는 필수적 식사 예절입니다."
            ]
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
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («미래»):",
                    "acceptedAnswers": [
                        "미래"
                    ],
                    "explanation": "The target keyword was: 【미래】"
                }
            ]
        }
    }
};
  var ROADMAP = [];
  var SUBJECT = { units: UNITS, lessons: LESSONS, roadmap: ROADMAP };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['korean'] = SUBJECT;
  if (typeof module !== 'undefined' && module.exports) module.exports = SUBJECT;
})(typeof window !== 'undefined' ? window : global);
