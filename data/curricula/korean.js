// FEARN Curriculum Data — Korean
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
    "title": "한글 창제 원리와 기본 자모 (Hangul Vowels & First Consonants)",
    "level": "A1",
    "objective": "Master the 6 fundamental vowels (ㅏ, ㅓ, ㅗ, ㅜ, ㅡ, ㅣ), 10 basic consonants (ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅅ, ㅇ, ㅈ, ㅎ), and construct/read 2-character syllable blocks.",
    "presentation": {
      "explanation": "Welcome to Korean! The Korean writing system is called **Hangul (한글)**. It was scientifically created in 1443 by King Sejong the Great to replace complex Chinese characters with an accessible, phonetic alphabet so that all people could read and write.\n\n### 1. The 6 Basic Vowels (모음)\nHangul vowels were designed using three philosophical elements: Heaven/Sun (·), Earth (ㅡ), and Human (ㅣ).\n- **ㅏ** [a] — pronounced like \"ah\" in \"father\"\n- **ㅓ** [eo / ʌ] — pronounced like \"uh\" in \"cup\" or \"sun\"\n- **ㅗ** [o] — pronounced like \"oh\" in \"go\" (lips rounded)\n- **ㅜ** [u] — pronounced like \"oo\" in \"moon\"\n- **ㅡ** [eu / ɯ] — unrounded \"oo\" (smile with teeth closed, say \"oo\")\n- **ㅣ** [i] — pronounced like \"ee\" in \"see\"\n\n### 2. The 10 Basic Consonants (자음)\nHangul consonants mimic the physical shape of the mouth, tongue, and throat when producing the sound:\n- **ㄱ** [g/k] — Velar stop (tongue root blocks throat): sounds like \"g\" initially, softer \"k\" at word end.\n- **ㄴ** [n] — Alveolar nasal (tongue tip touches upper teeth ridge): \"n\" as in \"nose\".\n- **ㄷ** [d/t] — Alveolar stop: \"d\" initially, \"t\" finally.\n- **ㄹ** [r/l] — Alveolar flap: light \"r/l\" flap between vowels.\n- **ㅁ** [m] — Bilabial nasal (square shape of closed lips): \"m\" as in \"mouth\".\n- **ㅂ** [b/p] — Bilabial stop: \"b\" initially, \"p\" finally.\n- **ㅅ** [s] — Dental sibilant (shape of tooth): \"s\" as in \"sun\".\n- **ㅇ** [silent initial / ng final] — Circle: completely silent when placed at the start of a syllable; pronounced \"ng\" at the end.\n- **ㅈ** [j/ch] — Affricate: \"j\" as in \"jump\".\n- **ㅎ** [h] — Glottal fricative (shape of throat with hat): \"h\" as in \"hat\".\n\n### 3. Syllable Block Assembly (초성 + 중성)\nHangul letters are assembled into compact square syllable blocks consisting of at least one Initial Consonant + one Medial Vowel:\n- **Vertical Vowels (ㅏ, ㅓ, ㅣ)** sit to the RIGHT of the consonant: **가** (ga), **나** (na), **다** (da), **마** (ma), **바** (ba), **사** (sa), **아** (a), **자** (ja), **하** (ha).\n- **Horizontal Vowels (ㅗ, ㅜ, ㅡ)** sit UNDER the consonant: **고** (go), **노** (no), **도** (do), **모** (mo), **보** (bo), **소** (so), **오** (o), **조** (jo), **호** (ho), **구** (gu), **두** (du), **무** (mu), **부** (bu), **수** (su), **우** (u).\n\n### 4. First Real Words (Built Exclusively from Taught Letters)\n- **나무** [namu] = ㄴ(n) + ㅏ(a) + ㅁ(m) + ㅜ(u) → **tree**\n- **바다** [bada] = ㅂ(b) + ㅏ(a) + ㄷ(d) + ㅏ(a) → **sea / ocean**\n- **가구** [gagu] = ㄱ(g) + ㅏ(a) + ㄱ(g) + ㅜ(u) → **furniture**\n- **오이** [oi] = ㅇ(silent) + ㅗ(o) + ㅇ(silent) + ㅣ(i) → **cucumber**\n- **아이** [ai] = ㅇ(silent) + ㅏ(a) + ㅇ(silent) + ㅣ(i) → **child / kid**\n- **모자** [moja] = ㅁ(m) + ㅗ(o) + ㅈ(j) + ㅏ(a) → **hat / cap**\n- **다리** [dari] = ㄷ(d) + ㅏ(a) + ㄹ(r) + ㅣ(i) → **leg / bridge**\n- **사자** [saja] = ㅅ(s) + ㅏ(a) + ㅈ(j) + ㅏ(a) → **lion**",
      "examples": [
        {
          "target": "나무",
          "reading": "namu",
          "translation": "tree (ㄴ+ㅏ = 나, ㅁ+ㅜ = 무)"
        },
        {
          "target": "바다",
          "reading": "bada",
          "translation": "sea (ㅂ+ㅏ = 바, ㄷ+ㅏ = 다)"
        },
        {
          "target": "오이",
          "reading": "oi",
          "translation": "cucumber (ㅇ+ㅗ = 오, ㅇ+ㅣ = 이)"
        },
        {
          "target": "모자",
          "reading": "moja",
          "translation": "hat (ㅁ+ㅗ = 모, ㅈ+ㅏ = 자)"
        }
      ],
      "mnemonics": [
        "Vertical vowels (ㅏ, ㅓ, ㅣ) stand tall to the RIGHT of consonants. Horizontal vowels (ㅗ, ㅜ, ㅡ) lie flat UNDERNEATH consonants. When a syllable starts with a vowel sound, ㅇ acts as a silent placeholder!"
      ],
      "culturalNotes": [
        "King Sejong created Hangul in 1443 with the scholarly hall Jiphyeonjeon (Hall of Worthies). Korea celebrates Hangul Day on October 9th as a national holiday honoring this scientific script."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Which Hangul syllable is formed by combining the initial consonant 'ㄴ' [n] with the vertical vowel 'ㅏ' [a]?",
          "options": [
            "나 (na) [ㄴ + ㅏ]",
            "노 (no) [ㄴ + ㅗ]",
            "니 (ni) [ㄴ + ㅣ]"
          ],
          "answerIndex": 0,
          "explanation": "The consonant 'ㄴ' [n] placed next to the vertical vowel 'ㅏ' [a] forms the syllable block '나' [na]. '노' is n+o, and '니' is n+i."
        },
        {
          "prompt": "Identify the Hangul word meaning \"tree\" assembled from 'ㄴ + ㅏ' and 'ㅁ + ㅜ':",
          "options": [
            "나무",
            "바다",
            "가구"
          ],
          "answerIndex": 0,
          "explanation": "'ㄴ[n] + ㅏ[a] = 나' and 'ㅁ[m] + ㅜ[u] = 무', forming '나무' [namu] (tree). '바다' is sea and '가구' is furniture."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "When a Korean syllable begins with a vowel sound like '오' [o] or '이' [i], which silent initial consonant letter must occupy the top/left position?",
          "options": [
            "ㅇ",
            "ㄱ",
            "ㅁ"
          ],
          "answerIndex": 0,
          "explanation": "The circular consonant 'ㅇ' is silent when used in the initial position (초성), serving as a necessary graphic placeholder for vowels like in '오이' [oi] (cucumber)."
        },
        {
          "prompt": "Select the Hangul word meaning \"hat/cap\" composed of 'ㅁ + ㅗ' [mo] and 'ㅈ + ㅏ' [ja]:",
          "options": [
            "모자",
            "사자",
            "아이"
          ],
          "answerIndex": 0,
          "explanation": "'ㅁ + ㅗ = 모' [mo] and 'ㅈ + ㅏ = 자' [ja] combine to form '모자' [moja] (hat/cap)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Which basic Hangul consonant shape represents the tongue root blocking the throat (Velar stop)?",
          "options": [
            "ㄱ",
            "ㄴ",
            "ㅁ"
          ],
          "answerIndex": 0,
          "explanation": "'ㄱ' was drawn to depict the physical shape of the tongue root retracting to block the pharynx/throat."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the Korean Hangul word for \"sea/ocean\" (formed from ㅂ+ㅏ and ㄷ+ㅏ):",
          "acceptedAnswers": [
            "바다"
          ],
          "explanation": "'ㅂ + ㅏ = 바' [ba], 'ㄷ + ㅏ = 다' [da] → '바다' [bada] (sea)."
        }
      ]
    }
  },
  "ko-u1-l2": {
    "id": "ko-u1-l2",
    "subject": "korean",
    "unit": 1,
    "lessonNumber": 2,
    "title": "복합 모음·격음·경음과 7대 대표 받침 (Complex Vowels, Batchim & Syllable Closure)",
    "level": "A1",
    "objective": "Master compound vowels (ㅐ, ㅔ, ㅘ, ㅝ), aspirated consonants (ㅋ, ㅌ, ㅍ, ㅊ), tense consonants (ㄲ, ㄸ, ㅃ, ㅆ, ㅉ), and the 7 representative Batchim final consonant neutralizations ([ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ]).",
    "presentation": {
      "explanation": "Now that you know the 10 basic consonants and 6 core vowels, we expand Hangul with compound vowels, strong/tense consonants, and the crucial final consonant system: **Batchim (받침)**.\n\n### 1. Compound Vowels (복합 모음)\n- **ㅐ** [ae] — pronounced \"eh\" (like \"cat\" / \"bed\"): ㅏ + ㅣ = ㅐ (e.g. 배 = bae / boat, pear)\n- **ㅔ** [e] — pronounced \"eh\" (like \"bed\"): ㅓ + ㅣ = ㅔ (e.g. 네 = ne / yes)\n- **ㅘ** [wa] — ㅗ + ㅏ (e.g. 와 = wa / wow, come)\n- **ㅝ** [wo] — ㅜ + ㅓ (e.g. 뭐 = mwo / what)\n- **ㅟ** [wi] — ㅜ + ㅣ (e.g. 귀 = gwi / ear)\n- **ㅢ** [ui / yi] — ㅡ + ㅣ (e.g. 의사 = uisa / doctor)\n\n### 2. Aspirated & Tense Consonants (격음과 경음)\n- **Aspirated (strong puff of air)**: **ㅋ** [kʰ], **ㅌ** [tʰ], **ㅍ** [pʰ], **ㅊ** [chʰ] (e.g. 커피 = keopi / coffee, 코 = ko / nose, 차 = cha / tea).\n- **Tense/Glottalized (tight vocal cords)**: **ㄲ** [kk], **ㄸ** [tt], **ㅃ** [pp], **ㅆ** [ss], **ㅉ** [jj] (e.g. 빵 = ppang / bread, 꽃 = kkot / flower, 딸기 = ttalgi / strawberry).\n\n### 3. The 7 Representative Batchim Sounds (받침 중화)\nBatchim refers to the final consonant placed at the BOTTOM of a syllable block (e.g. 밥 = ㅂ+ㅏ+ㅂ, 강 = ㄱ+ㅏ+ㅇ). Regardless of which consonant appears in the final position, when spoken alone, they neutralize into exactly **7 representative sounds**:\n1. **[ㄱ]** — written as ㄱ, ㅋ, ㄲ (e.g. **책** [chaek] = book, **부엌** [bueok] = kitchen, **밖** [bak] = outside)\n2. **[ㄴ]** — written as ㄴ (e.g. **문** [mun] = door, **손** [son] = hand)\n3. **[ㄷ]** — written as ㄷ, ㅌ, ㅅ, ㅆ, ㅈ, ㅊ, ㅎ (e.g. **옷** [ot] = clothes, **꽃** [kkot] = flower, **끝** [kkeut] = end, **낮** [nat] = daytime)\n4. **[ㄹ]** — written as ㄹ (e.g. **달** [dal] = moon, **물** [mul] = water, **발** [bal] = foot)\n5. **[ㅁ]** — written as ㅁ (e.g. **밤** [bam] = night/chestnut, **봄** [bom] = spring)\n6. **[ㅂ]** — written as ㅂ, ㅍ (e.g. **밥** [bap] = cooked rice/meal, **집** [jip] = house, **잎** [ip] = leaf)\n7. **[ㅇ]** — written as ㅇ (pronounced \"ng\"): (e.g. **강** [gang] = river, **방** [bang] = room)",
      "examples": [
        {
          "target": "밥",
          "reading": "bap",
          "translation": "cooked rice / meal (Batchim [ㅂ])"
        },
        {
          "target": "책",
          "reading": "chaek",
          "translation": "book (Compound vowel ㅐ + Batchim [ㄱ])"
        },
        {
          "target": "옷",
          "reading": "ot",
          "translation": "clothes (Batchim ㅅ neutralizes to [ㄷ])"
        },
        {
          "target": "꽃",
          "reading": "kkot",
          "translation": "flower (Tense ㄲ + Batchim ㅊ neutralizes to [ㄷ])"
        },
        {
          "target": "물",
          "reading": "mul",
          "translation": "water (ㅁ + ㅜ + ㄹ [ㄹ])"
        }
      ],
      "mnemonics": [
        "Remember the 7 Batchim rule: \"가느다란 물방울\" (ㄱ, ㄴ, ㄷ, ㄹ, ㅁ, ㅂ, ㅇ). Even though clothes (옷) ends in 'ㅅ' and flower (꽃) ends in 'ㅊ', both are pronounced with final stop [ㄷ]!"
      ],
      "culturalNotes": [
        "In Korean culture, \"밥\" (Bap - cooked rice/meal) represents nourishment and hospitality. Asking \"밥 먹었어요?\" (Have you eaten?) is a common, warm daily greeting."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "In the word '옷' (clothes), the final consonant is written as 'ㅅ'. When pronounced in isolation, which of the 7 representative Batchim sounds does it neutralize to?",
          "options": [
            "[ㄷ]",
            "[ㅂ]",
            "[ㄱ]"
          ],
          "answerIndex": 0,
          "explanation": "The consonants 'ㅅ, ㅆ, ㅈ, ㅊ, ㄷ, ㅌ, ㅎ' all neutralize to the representative unreleased stop sound [ㄷ] when in the final Batchim position. Thus '옷' is pronounced [ot / 옫]."
        },
        {
          "prompt": "Which Hangul word means \"cooked rice / meal\" featuring the initial 'ㅂ', vowel 'ㅏ', and final Batchim 'ㅂ'?",
          "options": [
            "밥",
            "방",
            "발"
          ],
          "answerIndex": 0,
          "explanation": "'ㅂ + ㅏ + ㅂ = 밥' [bap] (cooked rice/meal). '방' ends with nasal [ㅇ] (room) and '발' ends with [ㄹ] (foot)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the word meaning \"river\" formed by initial 'ㄱ' [g], vowel 'ㅏ' [a], and final nasal Batchim 'ㅇ' [ng]:",
          "options": [
            "강",
            "간",
            "갈"
          ],
          "answerIndex": 0,
          "explanation": "'ㄱ + ㅏ + ㅇ = 강' [gang] (river). '간' ends with [n] and '갈' ends with [l]."
        },
        {
          "prompt": "Which of the following words contains the compound vowel 'ㅐ' [ae] and final Batchim 'ㄱ' [k] meaning \"book\"?",
          "options": [
            "책",
            "차",
            "친구"
          ],
          "answerIndex": 0,
          "explanation": "'ㅊ + ㅐ + ㄱ = 책' [chaek] (book)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Which pair of words both neutralize to the representative Batchim sound [ㄷ] at the end of the syllable?",
          "options": [
            "옷 (ot - clothes) and 꽃",
            "밥 (bap - rice) and 강",
            "책 (chaek - book) and 달"
          ],
          "answerIndex": 0,
          "explanation": "Both '옷' (ending in ㅅ) and '꽃' (ending in ㅊ) neutralize to [ㄷ] in isolation."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the 1-syllable Korean Hangul word for \"cooked rice / meal\" (ㅂ+ㅏ+ㅂ):",
          "acceptedAnswers": [
            "밥"
          ],
          "explanation": "'ㅂ + ㅏ + ㅂ = 밥' [bap] (cooked rice / meal)."
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
    "objective": "Master standard Korean polite greetings (안녕하세요), clear farewell distinctions (안녕히 가세요 vs 안녕히 계세요), gratitude (감사합니다), and apologies (죄송합니다).",
    "presentation": {
      "explanation": "Korean interpersonal communication is built on politeness registers (존댓말 - Jondaetmal). Greetings adapt depending on the social setting and whether someone is staying or leaving.\n\n### 1. Meeting Greetings\n- **안녕하세요?** [An-nyeong-ha-se-yo?] — **\"Hello / How are you?\"**: The universal polite greeting used at any time of day (morning, afternoon, or evening). Derived from '안녕' (安寧 - peace/wellness).\n- **만나서 반갑습니다** [Man-na-seo ban-gap-seum-ni-da] — **\"Nice to meet you\"**: Polite/formal greeting upon meeting someone for the first time.\n\n### 2. The Crucial Farewell Distinction\nKorean has two distinct ways to say goodbye depending on who is moving:\n- **안녕히 가세요** [An-nyeong-hi ga-se-yo] — **\"Goodbye\" (literally: 'Go in peace')**: Said by the person *staying* to the person who is *leaving* (from 가다 = to go).\n- **안녕히 계세요** [An-nyeong-hi gye-se-yo] — **\"Goodbye\" (literally: 'Stay in peace')**: Said by the person *leaving* to the person who is *staying* (from 계시다 = honorific to stay/remain).\n*(If both people are parting and leaving, both say '안녕히 가세요' to each other!)*\n\n### 3. Gratitude and Apologies\n- **감사합니다** [Gam-sa-ham-ni-da] — **\"Thank you\"** (Formal polite gratitude, from 感謝).\n- **고맙습니다** [Go-map-seum-ni-da] — **\"Thank you\"** (Native Korean formal gratitude).\n- **죄송합니다** [Joe-song-ham-ni-da] — **\"I am sorry / Excuse me\"** (Formal polite apology for an inconvenience or mistake).\n- **미안합니다** [Mi-an-ham-ni-da] — **\"I am sorry\"** (Polite apology between peers or to someone younger).",
      "examples": [
        {
          "target": "안녕하세요? 반갑습니다.",
          "reading": "Annyeonghaseyo? Bangapseumnida.",
          "translation": "Hello! Nice to meet you."
        },
        {
          "target": "안녕히 가세요.",
          "reading": "Annyeonghi gaseyo.",
          "translation": "Goodbye (said to someone leaving: 'Go in peace')."
        },
        {
          "target": "안녕히 계세요.",
          "reading": "Annyeonghi gyeseyo.",
          "translation": "Goodbye (said to someone staying: 'Stay in peace')."
        },
        {
          "target": "대단히 감사합니다.",
          "reading": "Daedanhi gamsahamnida.",
          "translation": "Thank you very much."
        }
      ],
      "mnemonics": [
        "Memory trick for goodbyes: '가세요' comes from '가다' (GA = GO, for someone leaving). '계세요' comes from '계시다' (GYE = STAY, for someone staying behind)!"
      ],
      "culturalNotes": [
        "In Korea, greetings are accompanied by a respectful bow. A slight 15° to 30° bow is standard for daily greetings, while a deeper 45° bow expresses formal gratitude or sincere apologies."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "You are leaving a coffee shop or classroom while the barista or your classmate stays inside. Which farewell should you say as you exit?",
          "options": [
            "안녕히 계세요",
            "안녕히 가세요",
            "죄송합니다"
          ],
          "answerIndex": 0,
          "explanation": "When you are leaving and the other person is staying behind, say '안녕히 계세요' ('Stay in peace'). '안녕히 가세요' is said to the person who is walking away."
        },
        {
          "prompt": "Which expression is the universal polite daytime/evening greeting meaning \"Hello / How are you?\" in Korean?",
          "options": [
            "안녕하세요?",
            "안녕히 가세요",
            "감사합니다"
          ],
          "answerIndex": 0,
          "explanation": "'안녕하세요?' [Annyeonghaseyo?] is the standard polite meeting greeting used across all hours of the day in Korea."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "A colleague helped you carry heavy boxes to your office. Which polite expression should you use to express sincere thanks?",
          "options": [
            "감사합니다",
            "죄송합니다",
            "안녕히 계세요"
          ],
          "answerIndex": 0,
          "explanation": "'감사합니다' [Gamsahamnida] is the standard formal polite phrase for expressing gratitude."
        },
        {
          "prompt": "You accidentally bumped into someone on the Seoul subway. Which polite phrase should you immediately say to apologize?",
          "options": [
            "죄송합니다",
            "반갑습니다",
            "안녕하세요"
          ],
          "answerIndex": 0,
          "explanation": "'죄송합니다' [Joesonghamnida] is the standard formal apology for mistakes, accidental bumps, or courtesies."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "If your Korean host is waving goodbye to you as YOU depart their home, what will the host say to YOU as you walk away?",
          "options": [
            "안녕히 가세요",
            "안녕히 계세요",
            "반갑습니다"
          ],
          "answerIndex": 0,
          "explanation": "Because you are the one leaving, the host who remains will say '안녕히 가세요' ('Go in peace')."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the standard polite Korean word for \"Hello\" in Hangul (안녕하세요):",
          "acceptedAnswers": [
            "안녕하세요",
            "안녕하세요?"
          ],
          "explanation": "'안 + 녕 + 하 + 세 + 요 = 안녕하세요' [An-nyeong-ha-se-yo] (Hello)."
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
    "objective": "Master the formal polite copula -입니다 (am/is/are) and question ending -입니까? (is it?) to state and ask about names, nationalities, and occupations.",
    "presentation": {
      "explanation": "In Korean, the verb meaning \"to be\" (am, is, are) attached directly to nouns is the copula **이다**. In formal polite style (하십시오체 - Hasipsio-che), it takes two forms:\n\n### 1. The Declarative Form: [Noun] + 입니다 (im-ni-da)\n- Attached directly to any noun without a space, regardless of whether the noun ends in a vowel or a consonant:\n  - **학생** (student) + **입니다** → **학생입니다** [hak-saeng-im-ni-da] = *(I am / is) a student.*\n  - **의사** (doctor) + **입니다** → **의사입니다** [ui-sa-im-ni-da] = *(I am / is) a doctor.*\n  - **선생님** (teacher) + **입니다** → **선생님입니다** [seon-saeng-nim-im-ni-da] = *(I am / is) a teacher.*\n\n### 2. The Interrogative (Question) Form: [Noun] + 입니까? (im-ni-kka?)\n- To ask \"Are you [Noun]?\" or \"Is it [Noun]?\", replace -입니다 with **-입니까?**:\n  - **학생입니까?** [Hak-saeng-im-ni-kka?] = *Are you a student?*\n  - **어느 나라 사람입니까?** [Eo-neu na-ra sa-ram-im-ni-kka?] = *Which country's person (nationality) are you?*\n\n### 3. Polite First-Person Pronoun: 저는 (Jeo-neun)\n- When introducing yourself politely, use the humble pronoun **저** (I/me) combined with the topic particle **는** (as for):\n  - **저는 김민수입니다.** [Jeo-neun Kim Min-su-im-ni-da.] = *I am Minsu Kim.*\n  - **저는 한국 사람입니다.** [Jeo-neun Han-guk sa-ram-im-ni-da.] = *I am Korean.*\n  - **저는 미국 사람입니다.** [Jeo-neun Mi-guk sa-ram-im-ni-da.] = *I am American.*",
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
          "translation": "I am Korean (literally: Korea person)."
        },
        {
          "target": "저는 학생입니다.",
          "reading": "Jeo-neun haksaeng-imnida.",
          "translation": "I am a student."
        }
      ],
      "mnemonics": [
        "Statement ends in '다' (-입니다 = period / statement). Question ends in '까?' (-입니까? = question mark / inquiry)!"
      ],
      "culturalNotes": [
        "Korean names place the Family Name (성 - Seong) first, followed by the Given Name (이름 - Ireum), written without a space (e.g. 김민수 = Kim Minsu, 이지은 = Lee Jieun). The most common family names in Korea are Kim (김), Lee (이), and Park (박)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "How do you form the polite formal question asking someone: \"Are you a teacher?\" (선생님 = teacher):",
          "options": [
            "선생님입니까?",
            "선생님입니다",
            "선생님가요?"
          ],
          "answerIndex": 0,
          "explanation": "To ask a formal question with a noun, attach '-입니까?' [im-ni-kka?] to the noun: '선생님입니까?' (Are you a teacher?)."
        },
        {
          "prompt": "Select the correct Korean sentence stating: \"I am a student\" (저 = I, 학생 = student):",
          "options": [
            "저는 학생입니다",
            "저는 학생입니까",
            "저는 학생사람"
          ],
          "answerIndex": 0,
          "explanation": "'저 + 는' (As for me) + '학생' (student) + '입니다' (am) forms '저는 학생입니다'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "In the self-introduction \"저는 미국 사람입니다\" (I am American), which word specifically means \"person / nationality\"?",
          "options": [
            "사람",
            "미국",
            "입니다"
          ],
          "answerIndex": 0,
          "explanation": "'사람' [saram] means person. Placing it after a country name (e.g. 미국 사람, 한국 사람) expresses nationality."
        },
        {
          "prompt": "Which ending converts the noun '의사' (doctor) into the statement \"I am a doctor\"?",
          "options": [
            "의사입니다",
            "의사입니까",
            "의사안녕"
          ],
          "answerIndex": 0,
          "explanation": "Attaching the formal copula '-입니다' creates the declarative statement '의사입니다' (I am a doctor)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Complete the dialogue: A asks \"어느 나라 사람입니까?\" (Which nationality are you?). B responds: \"저는 _____ 사람입니다.\"",
          "options": [
            "한국",
            "학생",
            "의사"
          ],
          "answerIndex": 0,
          "explanation": "The question asks for nationality/country, so the country name '한국' (Korea) correctly fills the blank to say '저는 한국 사람입니다' (I am Korean)."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the formal Korean sentence for \"I am a student\" in Hangul (저는 학생입니다):",
          "acceptedAnswers": [
            "저는 학생입니다.",
            "저는 학생입니다"
          ],
          "explanation": "'저(I) + 는(topic) + 학생(student) + 입니다(am) = 저는 학생입니다.'."
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
    "objective": "Answer questions using Yes (네) and No (아니요), and state negative noun identities using the structure [Noun] + 이/가 아닙니다 (is not [Noun]).",
    "presentation": {
      "explanation": "Now you learn how to answer yes/no questions and express that someone or something is **not** a particular noun.\n\n### 1. Basic Yes and No in Korean\n- **네** [Ne] (or formal **예** [Ye]) — **\"Yes\"**: Expresses agreement or affirmative confirmation.\n- **아니요** [A-ni-yo] — **\"No\"**: Expresses polite disagreement or negation.\n\n### 2. Negative Identity Copula: [Noun] + 이/가 아닙니다 (is not [Noun])\nThe negative counterpart of -입니다 is formed using the adjective **아니다** (to not be), combined with the Subject Particle **이/가**:\n- **If Noun ends with a Batchim consonant** → attach **이 아닙니다** [i a-nim-ni-da]:\n  - **학생** (ends with ㅇ) + **이 아닙니다** → **학생이 아닙니다** [hak-saeng-i a-nim-ni-da] = *(I am) not a student.*\n  - **선생님** (ends with ㅁ) + **이 아닙니다** → **선생님이 아닙니다** [seon-saeng-nim-i a-nim-ni-da] = *(I am) not a teacher.*\n  - **한국 사람** (ends with ㅁ) + **이 아닙니다** → **한국 사람이 아닙니다** [Han-guk sa-ram-i a-nim-ni-da] = *(I am) not Korean.*\n\n- **If Noun ends with a Vowel (no Batchim)** → attach **가 아닙니다** [ga a-nim-ni-da]:\n  - **의사** (ends with ㅏ) + **가 아닙니다** → **의사가 아닙니다** [ui-sa-ga a-nim-ni-da] = *(I am) not a doctor.*\n  - **가수** (ends with ㅜ) + **가 아닙니다** → **가수가 아닙니다** [ga-su-ga a-nim-ni-da] = *(I am) not a singer.*\n\n### 3. Sample Conversational Question & Answer Patterns\n- Q: **한국 사람입니까?** (Are you Korean?)\n  - Affirmative: **네, 한국 사람입니다.** (Yes, I am Korean.)\n  - Negative: **아니요, 한국 사람이 아닙니다. 미국 사람입니다.** (No, I am not Korean. I am American.)\n- Q: **의사입니까?** (Are you a doctor?)\n  - Negative: **아니요, 의사가 아닙니다. 학생입니다.** (No, I am not a doctor. I am a student.)",
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
        "Particle rule: Batchim consonant gets '이' (학생이 아닙니다). Vowel ending gets '가' (의사가 아닙니다)!"
      ],
      "culturalNotes": [
        "In conversational Korean, saying '네' with a slight nod is also used for active listening (backchanneling / 맞장구), showing the speaker that you are engaged and following along."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "The noun '선생님' (teacher) ends in a final Batchim consonant ('ㅁ'). Which negative ending correctly forms \"I am not a teacher\"?",
          "options": [
            "선생님이 아닙니다",
            "선생님가 아닙니다",
            "선생님은 아닙니다"
          ],
          "answerIndex": 0,
          "explanation": "Because '선생님' ends in a consonant (ㅁ), it takes the subject particle '이', creating '선생님이 아닙니다'."
        },
        {
          "prompt": "The noun '의사' (doctor) ends in a vowel ('ㅏ', no Batchim). Which negative form correctly says \"I am not a doctor\"?",
          "options": [
            "의사가 아닙니다",
            "의사이 아닙니다",
            "의사를 아닙니다"
          ],
          "answerIndex": 0,
          "explanation": "Because '의사' ends in a vowel, it takes the particle '가', creating '의사가 아닙니다'."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "How do you say \"No, I am not Korean\" in polite Korean? (한국 사람 = Korean person):",
          "options": [
            "아니요, 한국 사람이 아닙니다",
            "네, 한국 사람입니다",
            "아니요, 한국 사람입니다"
          ],
          "answerIndex": 0,
          "explanation": "'아니요' (No) + '한국 사람이 아닙니다' (I am not Korean) correctly conveys the negative response."
        },
        {
          "prompt": "Which particle correctly completes the sentence: \"가방__ 아닙니다. 책입니다.\" (It is not a bag [가방 ends in ㅇ]. It is a book.)?",
          "options": [
            "이",
            "가",
            "를"
          ],
          "answerIndex": 0,
          "explanation": "'가방' ends with the Batchim nasal consonant 'ㅇ', so it takes '이', forming '가방이 아닙니다'."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Which of the following sentences is grammatically correct for \"I am not a doctor\"?",
          "options": [
            "의사가 아닙니다.",
            "의사이 아닙니다.",
            "의사를 아닙니다."
          ],
          "answerIndex": 0,
          "explanation": "'의사' ends in a vowel, so the correct particle is '가', giving '의사가 아닙니다.'."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the Korean sentence for \"I am not a doctor\" in Hangul (의사가 아닙니다):",
          "acceptedAnswers": [
            "의사가 아닙니다.",
            "의사가 아닙니다"
          ],
          "explanation": "'의사(doctor) + 가(particle) + 아닙니다(is not) = 의사가 아닙니다.'."
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
            "제가) (누가(Who)라는 의문사 초점 질문에 답변할 때는 주격 조사 결합형인 제가",
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
            "은 (한국어는과 대조를 이루며, 수학은 받침 ㄱ이 있으므로 대조의 보조사 은이 결합하여 수학은이 됩니다.)",
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
            "은, 은) (형(받침 ㅇ 있음)은과 동생(받침 ㅇ 있음)은으로 대조 보조사 은이 양쪽에 결합해",
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
            "는, 가) (전체 대주제 코끼리(받침 없음) 뒤에는 는, 부분 소주어 코(받침 없음) 뒤에는",
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
            "이 (마음은 받침 ㅁ이 있으므로 소주어격 조사 이가 결합하여 마음이 착합니다가 됩니다.)",
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
            "지은 씨는 눈이 예쁩니다. ([대주제]은/는 [소주어]이/가 [형용사] 구조에 완벽히 부합하는 문장은 지은 씨는 눈이 예쁩니다입니다.)",
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
            "이 (책은 받침 ㄱ이 있으므로 존재 주격 조사 이가 결합하여 책이 있습니다가 됩니다.)",
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
            "있습니다 (장소에 사람이 존재함을 나타내는 격식체 서술어는 있습니다입니다.)",
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
            "없습니다 (물건의 소유가 없음을 나타낼 때는 없습니다를 씁니다. 아닙니다는 신분/동일성을 부인할 때 씁니다.)",
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
            "커피를 (커피는 받침이 없는 모음 종결 명사이므로 목적격 조사 를이 결합하여 커피를이 됩니다.)",
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
            "을 (음악은 받침 ㄱ이 있으므로 목적격 조사 을이 결합하여 연음 발음 [으마글]이 됩니다.)",
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
            "학생이 한국어를 공부합니다. (한국어는 받침이 없으므로 를과 결합하여 한국어를 공부합니다가 올바릅니다.)",
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
            "민수 씨가 책을 읽습니다.) (주어(민수 씨가) + 목적어(책을) + 동사(읽습니다) 순서의 SOV 구조가 가장",
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
            "지은 씨는 커피를 마십니다. (한국어는 서술어(마십니다)가 반드시 문장 끝에 와야 하므로 지은 씨는 커피를 마십니다가 바른 어순입니다.)",
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
            "저는 영화를 봅니다. (주어(저는) + 목적어(영화를) + 동사(봅니다)의 SOV 어순입니다.",
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
            "선생님께 (존경과 예의를 갖추어야 하는 대상인 선생님 뒤에는 높임 여격 조사 께를 쓰는 것이 가장 올바릅니다.)",
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
            "에게 (선물을 받는 사람 대상이므로 여격 조사 에게가 결합하여 친구에게가 됩니다.)",
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
            "지은이가 친구에게 편지를 보냅니다. (받는 사람(친구에게) + 물건(편지를) + 동사(보냅니다) 구조가 정확합니다.)",
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
            "문과 일상 생략",
            "말과 일상 생략"
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
            "이걸 (이것을의 축약형은 이걸입니다. 이건은 이것은, 이게는 이것이의 축약형입니다.) (대명사 목적어 축약(날, 널, 뭘, 이걸)과 일상 생략",
            "이건과 일상 생략",
            "이게과 일상 생략"
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
            "뭘 (무엇을 합니까?의 축약 표현인 뭘 합니까?가 질문으로 정확합니다.) (대명사 목적어 축약(날, 널, 뭘, 이걸)과 일상 생략",
            "날과 일상 생략",
            "널과 일상 생략"
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
            "지하철을 탑니다. (교통수단에는 동사 타다가 결합하여 지하철을 탑니다가 자연스럽습니다.)",
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
            "카페에서 친구를 만납니다. (친구는 받침이 없으므로 를과 결합하여 친구를 만납니다가 됩니다.)",
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
            "공원에서 운동을 합니다. (운동(exercise)은 하다 동사와 결합하여 운동을 합니다가 올바른 연어입니다.",
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
            "읽어요 [일거요] (읽다는 음성모음(ㅣ) 어간이므로 -어요와 결합하여 읽어요가 되며 연음되어 [일거요]로 발음됩니다.",
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
            "마셔요 (마시 + 어요는 ㅣ와 ㅓ가 합쳐져 마셔요로 축약됩니다.) (어간에 받침이 없는 모음 종결 용언이 '-아요/어요'와 만날 때 일어나는 동음 탈락과 모음 축약(Diphthongization)을 정확히 산출한다.",
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
            "한국어를 배워요. (배우 + 어요는 배워요로 축약됩니다.) (어간에 받침이 없는 모음 종결 용언이 '-아요/어요'와 만날 때 일어나는 동음 탈락과 모음 축약(Diphthongization)을 정확히 산출한다.",
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
            "부드럽고 평탄하게 이끄는 억양 (청유문은 상대방에게 부드럽게 권유하는 평탄하고 친근한 억양(➡)으로 발화합니다.)",
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
            "말끝을 차분하게 내리는 평서 억양(↘) (자신의 행동을 진술하는 평서문은 말끝을 자연스럽게 내립니다(↘).)",
            "말끝을 의문문처럼 올리는 억양",
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
            "함께 식사하자고 권유하는 청유문 (같이(together)와 결합한 해요는 상대방에게 행동을 제안하는 청유문(Suggestion)입니다.",
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
            "참석해 주셔서 대단히 감사합니다. (공식 감사 표현으로는 대단히 감사합니다가 가장 표준적이고 정중합니다.) (공식 행사, 뉴스 보도, 비즈니스 프레젠테이션, 자기소개 면접 등 공적 담화(Public Discourse) 상황에서 하십시오체를 품격 있게 구사한다.",
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
            "안녕하십니까? 기획팀 지원자 박지은입니다. (취업 면접과 같은 최고 격식 자리에서는 하십시오체인 안녕하십니까? ... 지원자 박지은입니다가 표준입니다.) (공식 행사, 뉴스 보도, 비즈니스 프레젠테이션, 자기소개 면접 등 공적 담화(Public Discourse) 상황에서 하십시오체를 품격 있게 구사한다.",
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
            "경청해 주셔서 대단히 감사합니다. (발표의 공적인 마무리는 경청해 주셔서 대단히 감사합니다가 가장 예의 바릅니다.)",
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
            "안녕하십니까? (공식적인 오프닝 인사로는 안녕하십니까?가 표준입니다.)",
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
            "공적인 예의와 청중과의 친근한 유대감을 조화롭게 유지하기 위해 (공적 신뢰성(하십시오체)과 친밀한 소통(해요체)을 조화롭게 구사하기 위한 전략적 선택입니다.)",
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
            "먹었어요 (먹다의 어간 모음 ㅓ는 음성모음이므로 -었-과 결합하여 먹었어요가 됩니다.) (어간 끝 모음의 음운적 성질(양성모음 vs 음성모음 vs 하다)에 따라 과거 시제 선어말어미 '-았-', '-었-', '-였-'을 정확히 선택 결합한다.",
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
            "봤습니다 (보다는 양성모음이므로 -았-과 축약 결합하여 봤습니다[봣씀니다]가 됩니다.) (어간 끝 모음의 음운적 성질(양성모음 vs 음성모음 vs 하다)에 따라 과거 시제 선어말어미 '-았-', '-었-', '-였-'을 정확히 선택 결합한다.",
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
            "운동했어요 (운동하다는 하다 동사이므로 과거형 운동했어요가 올바릅니다.) (어간 끝 모음의 음운적 성질(양성모음 vs 음성모음 vs 하다)에 따라 과거 시제 선어말어미 '-았-', '-었-', '-였-'을 정확히 선택 결합한다.",
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
            "책을 읽고 숙제를 했어요. (읽고(비시제 연결) + 했어요(종결 과거 시제)의 구조가 표준적입니다.",
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
            "가을 거예요ㄹ 거예요",
            "가ㄹ 거예요ㄹ 거예요"
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
            "먹ㄹ 거예요ㄹ 거예요",
            "먹예요ㄹ 거예요"
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
            "만들을 거예요ㄹ 거예요",
            "만들ㄹ 거예요ㄹ 거예요"
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
            "오늘 커피는 제가 살 거예요.ㄹ게요'와 일반 예정 '-",
            "오늘 커피는 제가 샀어요.ㄹ게요'와 일반 예정 '-"
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
            "제가 내일 아침 일찍 연락할게요. (-(으)ㄹ게요는 1인칭 주어 평서문에서만 사용 가능하므로 제가 ... 연락할게요가 유일하게 올바릅니다.",
            "선생님, 내일 학교에 올게요?ㄹ게요'와 일반 예정 '-",
            "민수 씨가 내일 영화를 볼게요.ㄹ게요'와 일반 예정 '-"
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
            "도와드릴 거예요ㄹ게요'와 일반 예정 '-",
            "도와드렸어요ㄹ게요'와 일반 예정 '-"
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
            "공원에 예쁜 꽃이 피어 있어요.) (-아/어 있다는 타동사(밥을 먹다, 책을 읽다)와 결합할 수 없으며, 자동사인 피",
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
            "쓰다 (안경을 쓰다) (얼굴이나 머리에 착용하는 것은 동사 쓰다를 사용하므로 안경을 쓰다가 올바릅니다.) (신체 착용 동사(입다, 쓰다, 신다)의 이중적 상(Aspect)과 '-고 있다'",
            "입다 (안경을 입다)의 이중적 상",
            "신다 (안경을 신다)의 이중적 상"
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
            "새 운동화를 신고 있어요. (발에 착용하는 신발류는 신다를 쓰므로 신고 있어요가 정확합니다.) (신체 착용 동사(입다, 쓰다, 신다)의 이중적 상(Aspect)과 '-고 있다'",
            "새 운동화를 쓰고 있어요.의 이중적 상",
            "새 운동화를 끼고 있어요.의 이중적 상"
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
            "끼고 있어요 (손이나 손가락에 끼우는 장신구/보호구는 끼다를 쓰므로 끼고 있어요가 올바릅니다.) (신체 착용 동사(입다, 쓰다, 신다)의 이중적 상(Aspect)과 '-고 있다'",
            "입고 있어요의 이중적 상",
            "신고 있어요의 이중적 상"
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
            "책이 놓여 있어요. (놓이다(to be placed)의 상태 지속형인 놓여 있어요가 정확합니다.",
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
            "소파에 앉아 있는 사람이 커피를 마시고 있어요. (착석 상태(앉아 있는)와 음료 섭취 동작(마시고 있어요)이 완벽하게 결합되었습니다.",
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
            "도서관에서 책을 읽어요. (책을 읽는 구체적인 동작이 일어나는 장소이므로 -에서가 올바릅니다.) (구체적인 역동적 행위가 일어나는 발생 장소(Action Location)와 이동의 출발점/출처(Origin from)를 나타내는 격조사 '-에서'의 용법을 체득한다.",
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
            "식당에서 점심을 먹었어요. (식사라는 역동적 행위가 일어나는 공간이므로 -에서를 사용합니다.) (구체적인 역동적 행위가 일어나는 발생 장소(Action Location)와 이동의 출발점/출처(Origin from)를 나타내는 격조사 '-에서'의 용법을 체득한다.",
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
            "에서 (출신지나 출발 기점을 나타내는 조사는 -에서입니다.) (구체적인 역동적 행위가 일어나는 발생 장소(Action Location)와 이동의 출발점/출처(Origin from)를 나타내는 격조사 '-에서'의 용법을 체득한다.",
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
            "식당에서 맛있는 비빔밥을 먹었어요. (먹다는 구체적 행위 동사이므로 장소 조사 -에서가 결합해야 올바릅니다.) (동일한 장소 명사 뒤에서 서술어의 성격(정적 존재/도착점 vs 역동적 동작 수행)에 따라 '-에'와 '-에서'를 정밀하게 구별하여 사용한다.",
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
            "에, 에서 (첫 문장은 이동 도착점(시장에 가요), 두 번째 문장은 구매 행동 장소(시장에서 살 거예요)입니다.) (동일한 장소 명사 뒤에서 서술어의 성격(정적 존재/도착점 vs 역동적 동작 수행)에 따라 '-에'와 '-에서'를 정밀하게 구별하여 사용한다.",
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
            "주말에 공원에 가서 공원에서 자전거를 탔어요.) (시간(-에), 이동 도착점(공원에 가서), 동작 수행 장소 (동일한 장소 명사 뒤에서 서술어의 성격(정적 존재/도착점 vs 역동적 동작 수행)에 따라 ...",
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
            "오른쪽으로 (오른쪽은 ㄱ 받침(ㄹ 제외 자음)으로 끝나므로 -으로가 결합하여 오른쪽으로가 됩니다.",
            "오른쪽로로",
            "오른쪽에로로"
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
            "서울으로로",
            "서울에게로"
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
            "앞으로 가세요. (앞은 ㅍ 받침(자음)이 있으므로 -으로가 결합하여 앞으로가 됩니다.",
            "앞로 가세요.로",
            "앞에서 가세요.로"
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
            "가을 수 있어요ㄹ 수 있다",
            "가 수 있어요ㄹ 수 있다"
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
            "읽ㄹ 수 있어요ㄹ 수 있다",
            "읽 수 있어요ㄹ 수 있다"
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
            "만들을 수 있어요ㄹ 수 있다",
            "만들ㄹ 수 있어요ㄹ 수 있다"
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
            "가을 수 없어요ㄹ 수 없다",
            "가 수 없어요ㄹ 수 없다"
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
            "회의 중이라서 전화를 받ㄹ 수 없어요.ㄹ 수 없다",
            "회의 중이라서 전화를 받아 수 없어요.ㄹ 수 없다"
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
            "죄송하지만 내일은 일정이 있어서 갈 수 없습니다. (사과 표현(죄송하지만)과 이유(일정이 있어서), 정중한 불가능 서술(갈 수 없습니다)이 완벽합니다.",
            "죄송하지만 내일은 일정이 있어서 갈 수 있습니다.ㄹ 수 없다",
            "죄송하지만 내일은 일정이 있어서 가지 수 없어요.ㄹ 수 없다"
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
            "못 운전해요.ㄹ 수 없다",
            "운전이 못해요.ㄹ 수 없다"
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
            "오늘 날씨가 못 추워요. (못은 형용사(춥다)와 결합할 수 없으며 단순 부정 부사인 안을 써야 합니다 (안 추워요).",
            "오늘 학교에 못 가요.ㄹ 수 없다",
            "김치를 매워서 못 먹어요.ㄹ 수 없다"
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
            "안 먹었어요ㄹ 수 없다",
            "못 춥었어요ㄹ 수 없다"
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
            "피아노를 칠 줄 알아요. (치다는 모음 종결 어간이므로 -ㄹ 줄 알다가 결합하여 칠 줄 알아요가 됩니다.) (어떤 기술, 기예, 스포츠 등의 실행 방법(know-how)을 배워서 알고 있는지의 여부를 나타내는 '-(으)ㄹ 줄 알다/모르다'의 문법을 마스터한다.",
            "피아노를 치을 줄 알아요.ㄹ 줄 알다 / 모르다",
            "피아노를 쳐 줄 알아요.ㄹ 줄 알다 / 모르다"
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
            "스키를 탈 줄 몰라요. (방법을 모를 때는 모르다를 결합하여 탈 줄 몰라요가 올바릅니다.) (어떤 기술, 기예, 스포츠 등의 실행 방법(know-how)을 배워서 알고 있는지의 여부를 나타내는 '-(으)ㄹ 줄 알다/모르다'의 문법을 마스터한다.",
            "스키를 타을 줄 몰라요.ㄹ 줄 알다 / 모르다",
            "스키를 탈 줄 알아요.ㄹ 줄 알다 / 모르다"
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
            "만들 줄 알아요 (네로 긍정 답변을 했으며 만들다는 ㄹ 받침이므로 만들 줄 알아요가 정확합니다.) (어떤 기술, 기예, 스포츠 등의 실행 방법(know-how)을 배워서 알고 있는지의 여부를 나타내는 '-(으)ㄹ 줄 알다/모르다'의 문법을 마스터한다.",
            "만들을 줄 알아요ㄹ 줄 알다 / 모르다",
            "만들 줄 몰라요ㄹ 줄 알다 / 모르다"
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
            "네, 창문을 여셔도 됩니다. (허가를 승인할 때는 네와 함께 -아/어도 되다(존칭: -으셔도 되다)를 씁니다.",
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
            "내일 일찍 일어나지 않아도 돼요. (의무의 면제/불필요는 -지 않아도 되다를 사용하므로 일어나지 않아도 돼요가 정확합니다.) (의무를 면제해주어 '그렇게 할 필요가 없다(No need to / Don't have to)'를 나타내는 '-지 않아도 되다'의 통사 구조를 체득한다.",
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
            "돈을 안 내도 돼요. (안 -아/어도 되다는 불필요 표현이므로 돈을 안 내도 돼요가 올바릅니다.) (의무를 면제해주어 '그렇게 할 필요가 없다(No need to / Don't have to)'를 나타내는 '-지 않아도 되다'의 통사 구조를 체득한다.",
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
            "금지: 가면 안 돼요 / 불필요: 가지 않아도 돼요 (-면 안 되다는 금지, -지 않아도 되다는 불필요를 나타냅니다.) (의무를 면제해주어 '그렇게 할 필요가 없다(No need to / Don't have to)'를 나타내는 '-지 않아도 되다'의 통사 구조를 체득한다.",
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
            "가으세요시-)의 형태 체계",
            "가셔요시-)의 형태 체계"
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
            "만들으셨어요시-)의 형태 체계",
            "만들셨어요시-)의 형태 체계"
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
            "읽십니다시-)의 형태 체계",
            "읽으세요시-)의 형태 체계"
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
            "께서 (주체 높임 대상 뒤에는 존칭 주격 조사 께서가 결합합니다.) (주어 명사 뒤에 결합하여 주어를 극존칭으로 대우하는 주격 조사 '께서'와 대조/주제 보조사 '께서는'의 통사적 일치(Syntactic Agreement)를 체득한다.",
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
            "아버지께서 아침 일찍 산책을 하십니다. (아버지께서(존칭 주어) + 하십니다(주체 높임 서술어)의 호응이 완벽합니다.) (주어 명사 뒤에 결합하여 주어를 극존칭으로 대우하는 주격 조사 '께서'와 대조/주제 보조사 '께서는'의 통사적 일치(Syntactic Agreement)를 체득한다.",
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
            "께서 (행동의 주체인 교수님을 높이는 주격 조사는 께서입니다.) (주어 명사 뒤에 결합하여 주어를 극존칭으로 대우하는 주격 조사 '께서'와 대조/주제 보조사 '께서는'의 통사적 일치(Syntactic Agreement)를 체득한다.",
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
            "주무시다 (자다의 주체 높임 특수 동사는 주무시다입니다 (*자시다 X).",
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
            "할머니께서 집에 계십니다. (인물 자체의 존재를 직접 높일 때는 특수 동사 계시다를 씁니다.) ('-(으)시-'를 붙이지 않고 어휘 자체가 교체되는 보충법적(Suppletive) 주체 높임 특수 동사 및 형용사의 목록을 완벽히 암기하고 구별한다.",
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
            "드셨어요 (잡수셨어요) (먹다의 주체 높임형은 드시다/잡수시다이므로 과거형 드셨어요/잡수셨어요가 올바릅니다.) ('-(으)시-'를 붙이지 않고 어휘 자체가 교체되는 보충법적(Suppletive) 주체 높임 특수 동사 및 형용사의 목록을 완벽히 암기하고 구별한다.",
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
            "성함 (이름의 높임 명사는 성함입니다.) (높임 대상과 관련된 사물/개념을 가리키는 특수 명사 어휘와 신체/소유물을 높이는 간접 높임(Indirect Honorifics)의 규칙을 체득한다.",
            "연세 및 간접 높임",
            "진지 및 간접 높임"
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
            "교수님께서는 키가 크십니다. (주체의 신체(키)를 간접 높임할 때는 특수 어휘가 아닌 크시다(크다 + 시)를 씁니다.) (높임 대상과 관련된 사물/개념을 가리키는 특수 명사 어휘와 신체/소유물을 높이는 간접 높임(Indirect Honorifics)의 규칙을 체득한다.",
            "교수님께서는 키가 크계십니다. 및 간접 높임",
            "교수님께서는 키가 큽니다. 및 간접 높임"
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
            "시간 있으세요? (소유물이나 시간은 간접 높임이므로 계시다가 아닌 있으시다(있으세요)를 써야 합니다.) (높임 대상과 관련된 사물/개념을 가리키는 특수 명사 어휘와 신체/소유물을 높이는 간접 높임(Indirect Honorifics)의 규칙을 체득한다.",
            "시간 계세요? 및 간접 높임",
            "시간 있어요? 및 간접 높임"
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
            "할머니, 진지 잡수셨어요? (진지(높임 명사)와 잡수셨어요(특수 동사 잡수시다의 과거형)가 호응하는 첫 번째 문장이 가장 공손합니다.",
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
            "처음 뵙겠습니다. (첫 만남의 정중한 인사말은 처음 뵙겠습니다입니다.) (웃어른을 만나거나 찾아뵐 때 '만나다/보다' 대신 사용하는 '뵙다 / 뵈다'의 형태 구분(뵙겠습니다 vs 봬요)과 공손한 인사법을 익힌다.",
            "처음 만나겠습니다.의 객체 높임 특수 동사 '뵙다 / 뵈다'",
            "처음 보겠습니다.의 객체 높임 특수 동사 '뵙다 / 뵈다'"
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
            "다음 주에 봬요. (뵈다에 -어요가 결합하여 축약된 올바른 표기는 봬요입니다.) (웃어른을 만나거나 찾아뵐 때 '만나다/보다' 대신 사용하는 '뵙다 / 뵈다'의 형태 구분(뵙겠습니다 vs 봬요)과 공손한 인사법을 익힌다.",
            "다음 주에 뵈요.의 객체 높임 특수 동사 '뵙다 / 뵈다'",
            "다음 주에 뵙어요.의 객체 높임 특수 동사 '뵙다 / 뵈다'"
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
            "뵈러 (목적 연결어미 -(으)러 앞에서는 어간 뵈- 뒤에 러가 붙어 뵈러가 됩니다.) (웃어른을 만나거나 찾아뵐 때 '만나다/보다' 대신 사용하는 '뵙다 / 뵈다'의 형태 구분(뵙겠습니다 vs 봬요)과 공손한 인사법을 익힌다.",
            "뵙으러의 객체 높임 특수 동사 '뵙다 / 뵈다'",
            "봬러의 객체 높임 특수 동사 '뵙다 / 뵈다'"
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
            "선생님께 질문을 여쭤보았습니다. (웃어른께 질문할 때는 특수 겸양 동사인 여쭤보다(여쭙다)를 씁니다.",
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
            "바쁘신 중에 귀한 시간 내어 주셔서 감사드리며, 다음 주에 다시 뵙겠습니다. (감사 인사(감사드리며)와 다음 약속 인사(다시 뵙겠습니다)가 완벽한 격식을 갖추었습니다.",
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
            "날씨가 좋아서 산책하러 갑시다. (-아/어서는 청유문(-갑시다)의 이유로 쓰일 수 없습니다 (청유문에는 날씨가 좋으니까 사용).",
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
            "늦어서 (사과 표현(죄송합니다) 앞의 이유에는 관용적으로 -아/어서(늦어서)를 써야 자연스럽습니다.",
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
            "시간이 없으니까 (명령문의 전제 이유로는 -아/어서가 아닌 -(으)니까를 사용하므로 시간이 없으니까가 정확합니다.",
            "시간이 없어서니까",
            "시간이 없으면니까"
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
            "날씨가 화창하니까 한강 공원으로 소풍을 갑시다. (청유문(-갑시다) 앞에는 반드시 -(으)니까가 호응합니다.",
            "날씨가 화창해서 한강 공원으로 소풍을 갑시다.니까",
            "날씨가 화창하지만 한강 공원으로 소풍을 갑시다.니까"
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
            "먹었어서니까",
            "먹었기니까"
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
            "배가 부르니까 (청유문(-합시다) 앞에는 오직 -(으)니까(배가 부르니까)만 결합할 수 있습니다.) (3대 이유 어미(-아/어서 vs -(으)니까 vs -기 때문에) 비교 및 문법 제약",
            "배가 불러서니까 vs -기 때문에",
            "배가 부르기 때문에니까 vs -기 때문에"
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
            "시간이 늦었으니 어서 집으로 돌아가세요.) (명령문(-돌아가세요) 앞에는 -(으)니까(축약형: -(으)니)가 결합한 첫 번째",
            "시간이 늦어서 어서 집으로 돌아가세요.니까 vs -기 때문에",
            "시간이 늦기 때문에 어서 집으로 돌아가세요.니까 vs -기 때문에"
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
            "1. 와 주셔서 감사합니다 (O) / 2. 추우니까 코트 입으세요 (O) / 3. 비가 와서 우산 쓰세요",
            "1. 와 주셔서 감사합니다 (X) / 2. 추우니까 코트 입으세요 (O) / 3. 비가 와서 우산 쓰세요",
            "1. 와 주니까 감사합니다 (O) / 2. 추워서 코트 입으세요 (O) / 3. 비가 오기 때문에 우산 쓰세요"
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
            "사정을 이해해 주셔서 정말 감사합니다. (감사 인사 앞에는 오직 -아/어서(이해해 주셔서)가 호응합니다.",
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
            "예쁜데 (형용사 모음 종결 어간 뒤에는 -(으)ㄴ데가 붙어 예쁜데가 됩니다.",
            "예쁘는데ㄴ/는데",
            "예쁜는데ㄴ/는데"
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
            "먹는데 - 있는데 (동사는 -는데(먹는데), 있다/없다도 항상 -는데(있는데)가 결합합니다.",
            "먹은데 - 있은데ㄴ/는데",
            "먹는데 - 있은데ㄴ/는데"
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
            "있은데ㄴ/는데",
            "있는지ㄴ/는데"
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
            "같이 가고 싶은데 오늘 다른 약속이 있어요. (화자의 마음을 완곡하게 밝히며 거절할 때는 가고 싶은데가 가장 자연스럽고 부드럽습니다.) (화용론적 대조·반전의 '-(으)ㄴ/는데' vs '-지만' 뉘앙스 대비",
            "같이 가고 싶지만 오늘 다른 약속이 있습니다.ㄴ/는데' vs '-지만' 뉘앙스",
            "같이 가고 싶으니까 안 갈 거예요.ㄴ/는데' vs '-지만' 뉘앙스"
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
            "열심히 찾아봤는데 지갑이 어디에도 없어요. (일상 구어에서 기대와 어긋난 반전적 아쉬움을 완곡히 전할 때는 -았/었는데가 으뜸입니다.) (화용론적 대조·반전의 '-(으)ㄴ/는데' vs '-지만' 뉘앙스 대비",
            "열심히 찾아봤지만 지갑이 어디에도 없습니다.ㄴ/는데' vs '-지만' 뉘앙스",
            "열심히 찾아보니까 지갑이 어디에도 없습니다.ㄴ/는데' vs '-지만' 뉘앙스"
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
            "갔는데 (과거 행동 뒤에 기대와 다른 상황(표 매진)을 맞닥뜨린 반전 배경이므로 갔는데가 정확합니다.) (화용론적 대조·반전의 '-(으)ㄴ/는데' vs '-지만' 뉘앙스 대비",
            "가서ㄴ/는데' vs '-지만' 뉘앙스",
            "가니까요ㄴ/는데' vs '-지만' 뉘앙스"
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
            "제가 민수지만요.ㄴ/는데요'",
            "제가 민수니까요.ㄴ/는데요'"
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
            "생각했던 것보다 훨씬 더 맛있지만요!ㄴ/는데요'",
            "생각했던 것보다 훨씬 더 맛있어서요!ㄴ/는데요'"
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
            "마셨지만요ㄴ/는데요'",
            "마시니까요ㄴ/는데요'"
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
            "어제 산 바지인데, 사이즈가 안 맞아서 교환하고 싶어요. (배경 제시(바지인데)와 원인(안 맞아서)이 완벽한 논리 구조를 이룹니다.",
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
          "prompt": "다음 매장 담화 중 빈칸에 들어갈 가장 자연스러운 요청 종결형은? \"직원: 무엇을 도와드릴까요? 손님: 어제 구입한 가방 환불을 좀 _____.\"",
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
            "좋은 날씨 (형용사의 현재 관형형은 -(으)ㄴ이므로 좋은 날씨가 정확합니다 (*좋는은 비문).) (동사의 과거 관형형 ('-(으)ㄴ') vs 형용사의 현재 관형형 ('-(으)ㄴ'",
            "좋는 날씨ㄴ') vs 형용사의 현재 관형형",
            "좋은는 날씨ㄴ') vs 형용사의 현재 관형형"
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
            "어제 읽은 책 (동사의 과거 관형형은 -(으)ㄴ이므로 자음 받침 뒤에 -은이 붙은 어제 읽은 책이 맞습니다.) (동사의 과거 관형형 ('-(으)ㄴ') vs 형용사의 현재 관형형 ('-(으)ㄴ'",
            "어제 읽는 책ㄴ') vs 형용사의 현재 관형형",
            "어제 읽을 책ㄴ') vs 형용사의 현재 관형형"
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
            "만난 / 만나는 (어제 만난(과거 동사 -(으)ㄴ) + 오늘 만나는(현재 동사 -는)의 대조가 완벽합니다.) (동사의 과거 관형형 ('-(으)ㄴ') vs 형용사의 현재 관형형 ('-(으)ㄴ'",
            "만나는 / 만난ㄴ') vs 형용사의 현재 관형형",
            "만날 / 만난ㄴ') vs 형용사의 현재 관형형"
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
            "내일 먹을 음식 (미래 시제 관형형 어미는 -(으)ㄹ이므로 먹을 음식이 정확합니다.",
            "내일 먹는 음식ㄹ'",
            "내일 먹은 음식ㄹ'"
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
            "주말에 가는 곳ㄹ'",
            "주말에 간 곳ㄹ'"
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
            "나오는ㄹ'",
            "나온ㄹ'"
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
            "자주 가던 카페 (과거의 반복적 습관을 회상할 때는 -던(가던)이 가장 자연스럽습니다.)",
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
            "마시던 커피 (동작이 완료되지 않고 중간에 중단된 상태를 회상할 때는 -던(마시던 커피)을 씁니다.)",
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
            "'살던'은 과거의 지속적 거주를 회상하고, '살았던'은 지금은 그곳에 살지 않는 단절된 완료를 강조한다. (-던은 과거의 지속/미완료를, -았던/었던은 현재와의 상태 단절 및 완료를 나타냅니다.)",
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
            "어제 본 영화는 내가 내일 친구에게 추천할 감동적인 명작이다. (과거(본) + 미래(추천할) + 현재 형용사(감동적인)가 완벽한 시제 일치를 이룹니다.",
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
            "저기 모자를 쓴 친절한 분이 내가 가장 존경하는 교수님이십니다. (모자를 쓴(상태) + 친절한(형용사) + 존경하는(현재 동사)의 수식 관계가 완벽합니다.",
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
            "음악을 듣는 게 즐거워요. (구어에서 주어 역할을 하는 명사화 축약형은 -는 게(듣는 게)입니다.",
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
            "한국어 공부하는 걸 좋아해요. (목적어 역할을 하는 구어 명사화 축약형은 -는 걸(공부하는 걸)입니다.",
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
            "타는 거예요 (문장의 보어/서술어 자리이므로 -는 거예요(타는 거예요)가 정확합니다.",
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
            "이해하기 (목적을 나타내는 위해 앞에는 -기(이해하기 위해)가 결합합니다.",
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
            "재고 없음 (시스템 상태나 공식 알림의 명사형 종결은 -(으)ㅁ을 사용하여 재고 없음으로 표기합니다.",
            "재고 없기ㅁ'",
            "재고 없는 것ㅁ'"
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
            "금일 프로젝트 회의 정상 종료함. (서면 업무 보고 명사형 종결체는 -(으)ㅁ(종료함)입니다.",
            "금일 프로젝트 회의 정상 종료하기.ㅁ'",
            "금일 프로젝트 회의 정상 종료하는 것.ㅁ'"
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
            "변경되었음 (과거 완료된 공식 공지 사실의 서면 종결체는 -었음(변경되었음)입니다.",
            "변경되었기ㅁ'",
            "변경되는 것ㅁ'"
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
            "-기 (행복하시기를 바랍니다) (바라다는 희망의 동사이므로 명사형 어미 -기와 결합하는 강력한 통사 제약을 가집니다.) (3대 명사형 어미('-는 것' vs '-기' vs '-(으)ㅁ')의 통사 제약 및 화용론적 기능 비교",
            "-는 것 (행복하시는 것을 바랍니다)ㅁ'",
            "-(으)ㅁ (행복하심을 바랍니다)ㅁ'"
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
            "진실이 밝혀졌음이 법정에서 명백히 인정되었습니다. (법정이나 공식 문서에서 객관적 사실 입증에는 -(으)ㅁ(밝혀졌음이)이 결합합니다.) (3대 명사형 어미('-는 것' vs '-기' vs '-(으)ㅁ')의 통사 제약 및 화용론적 기능 비교",
            "진실이 밝혀졌기가 법정에서 명백히 인정되었습니다.ㅁ'",
            "진실이 밝혀졌는 걸이 법정에서 명백히 인정되었습니다.ㅁ'"
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
            "'-는 것'은 공식 공지문의 문장 종결체로 가장 선호된다. (공식 공지문의 간결한 서면 종결체로는 -는 것이 아니라 -(으)ㅁ이 선호됩니다.) (3대 명사형 어미('-는 것' vs '-기' vs '-(으)ㅁ')의 통사 제약 및 화용론적 기능 비교",
            "'-기'는 '-기 전에', '-기 위해', '-기 시작하다' 등의 관용구에 필수적으로 쓰인다.ㅁ'",
            "'-(으)ㅁ'은 서면 보고서나 시스템 알림에서 종결 형태로 널리 쓰인다.ㅁ'"
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
            "제 취미는 여행 가서 사진 찍는 거예요. (구어체에서 자신의 취미를 서술할 때는 -는 거예요(찍는 거예요)가 가장 자연스럽습니다.",
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
          "prompt": "다음 대화의 빈칸에 들어갈 알맞은 표현은? \"A: 한국어 공부하면서 뭐가 제일 어려워요? B: 저는 원어민의 빠른 말을 _____ 제일 어려워요.\"",
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
    "title": "평서문 간접화법 ('-다고 하다')",
    "level": "B2",
    "objective": "다른 사람의 진술이나 평서문 발언을 전달할 때 품사와 시제에 맞추어 '-다고 하다'를 정확하게 활용한다.",
    "presentation": {
      "explanation": "간접화법(Indirect Reported Speech)은 다른 사람이 말한 내용을 자신의 말로 바꾸어 제3자에게 전달하는 문법입니다. 평서문을 인용할 때는 어간과 품사, 시제에 따라 다음과 같이 결합합니다.\n\n1. 현재 시제 결합 규칙:\n- 동사 (Verb): 받침 없음 → **-ㄴ다고 하다**, 받침 있음 → **-는다고 하다**\n  - 가다 → 간다고 하다 (\"민수 씨가 집에 간다고 해요.\")\n  - 먹다 → 먹는다고 하다 (\"친구가 지금 밥을 먹는다고 해요.\")\n  - 살다 → 산다고 하다 ('ㄹ' 탈락 규칙)\n- 형용사 (Adjective): 받침 유무 불문 어간 + **-다고 하다**\n  - 바쁘다 → 바쁘다고 하다 (\"팀장님이 요즘 바쁘다고 하셨어요.\")\n  - 좋다 → 좋다고 하다 (\"날씨가 정말 좋다고 해요.\")\n- 명사 + 이다 (Copula): 받침 없음 → **-라고 하다**, 받침 있음 → **-이라고 하다**\n  - 학생 → 학생이라고 하다, 의사 → 의사라고 하다\n\n2. 과거 및 미래 시제 결합 규칙:\n- 과거: 동사/형용사/명사 모두 **-았/었다고 하다** (갔다고 하다, 먹었다고 하다, 예뻤다고 하다, 학생이었다고 하다)\n- 미래: 동사/형용사 **-(으)ㄹ 거라고 하다** or **-겠다고 하다** (갈 거라고 하다, 먹을 거라고 하다, 참석하겠다고 하다)",
      "examples": [
        {
          "target": "일기예보에서 오늘 오후부터 전국에 강한 비가 내린다고 합니다.",
          "reading": "Ilgiyebo-eseo oneul ohu-buteo jeonguk-e ganghan bi-ga naerindago hamnida.",
          "translation": "The weather forecast says that heavy rain will fall nationwide starting this afternoon (Verb present '-ㄴ다고 하다')."
        },
        {
          "target": "선생님께서 이번 학기 중간시험 난이도가 상당히 높다고 말씀하셨습니다.",
          "reading": "Seonsaengnim-kkeseo ibeon hakgi junggansiheom nanido-ga sangdanghi nopdago malsseumhasyeotseumnida.",
          "translation": "The teacher said that the difficulty level of this semester's midterm exam is considerably high (Adj '-다고 하다' with honorific '말씀하시다')."
        },
        {
          "target": "저기 새로 오신 분이 이번 프로젝트를 총괄할 수석 디자이너라고 들었습니다.",
          "reading": "Jeogi saero osin bun-i ibeon peurojekteu-reul chong-gwalhal suseok dijaineo-rago deureotseumnida.",
          "translation": "I heard that the newly arrived person over there is the head designer who will oversee this project (Noun '-라고 듣다')."
        },
        {
          "target": "민우 씨가 지난 주말에 제주도로 혼자 가족 여행을 다녀왔다고 했어요.",
          "reading": "Minu ssi-ga jinan jumal-e Jeju-do-ro honja gajok yeohaeng-eul danyeowatdago haesseoyo.",
          "translation": "Minwoo said that he went on a family trip alone to Jeju Island last weekend (Past '-았다고 하다')."
        }
      ],
      "mnemonics": [
        "동사는 '-ㄴ/는다고', 형용사는 그대로 '-다고', 명사는 '-(이)라고'! 시제별 완벽 인용!"
      ],
      "culturalNotes": [
        "한국어에서 윗사람의 말씀을 전달할 때는 인용 동사 '하다' 대신 높임말인 '말씀하시다(선생님께서 오신다고 말씀하셨습니다)'를 사용하여 화자의 공손함을 유지합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'바쁘다(busy)'를 인용하여 '친구가 바쁘다고 한다'를 만들 때 올바른 형태는?",
          "options": [
            "친구가 바쁘다고 해요.",
            "친구가 바쁜다고 해요.",
            "친구가 바쁘라고 해요."
          ],
          "answerIndex": 0,
          "explanation": "'바쁘다'는 형용사이므로 어간 뒤에 바로 '-다고 하다'가 붙어 '바쁘다고 해요'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'내일 서울에 가다'라는 민수의 말을 간접화법으로 정확히 옮긴 문장은?",
          "options": [
            "민수 씨가 내일 서울에 간다고 했어요. (동사 가다의 현재 인용은 받침이 없으므로 -ㄴ다고(간다고)가 결합합니다.",
            "민수 씨가 내일 서울에 가다고 했어요.",
            "민수 씨가 내일 서울에 가라고 했어요."
          ],
          "answerIndex": 0,
          "explanation": "동사 '가다'의 현재 인용은 받침이 없으므로 '-ㄴ다고(간다고)'가 결합합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 간접화법 형태 결합이 어법에 완벽하게 맞는 문장은?",
          "options": [
            "영수가 지금 도서관에서 책을 읽는다고 말했습니다. (동사 읽다는 받침이 있는 동사이므로 현재형 간접화법은 -는다고(읽는다고)가 맞습니다.",
            "영수가 지금 도서관에서 책을 읽다고 말했습니다.",
            "영수가 지금 도서관에서 책을 읽은다고 말했습니다."
          ],
          "answerIndex": 0,
          "explanation": "동사 '읽다'는 받침이 있는 동사이므로 현재형 간접화법은 '-는다고(읽는다고)'가 맞습니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'친구가 한국에 온다고 했어요'(A friend said that they are coming to Korea)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "친구가 한국에 온다고 했어요.",
            "친구가 한국에 온다고 했어요"
          ],
          "explanation": "친구가 + 한국에 + 온다고(오다 + ㄴ다고) + 했어요 = 친구가 한국에 온다고 했어요."
        }
      ]
    }
  },
  "ko-u18-l2": {
    "id": "ko-u18-l2",
    "subject": "korean",
    "unit": 18,
    "lessonNumber": 2,
    "title": "의문문 간접화법 ('-(으)냐고 하다') 및 제안문 간접화법 ('-자고 하다')",
    "level": "B2",
    "objective": "질문 전달('-(으)냐고/냐고 묻다/하다')과 청유·제안 전달('-자고 하다/제안하다')의 형태 규칙과 인용 동사 결합을 익힌다.",
    "presentation": {
      "explanation": "질문(의문문)을 전달할 때는 '-(으)냐고 하다/묻다'를, 권유나 제안(청유문)을 전달할 때는 '-자고 하다'를 사용합니다.\n\n1. 의문문 간접화법 ('-(으)냐고 하다 / 묻다' - Indirect Question):\n- 동사 (Verb): 어간 + **-(으)냐고 하다 / 묻다** (구어에서는 주로 '-냐고 하다')\n  - 가다 → 가냐고 묻다, 먹다 → 먹냐고/먹으냐고 묻다\n- 형용사 (Adjective): 받침 없음 → **-냐고 하다**, 받침 있음 → **-(으)냐고 하다**\n  - 크다 → 크냐고 하다, 작다 → 작으냐고/작냐고 묻다\n- 명사 + 이다: **-(이)냐고 묻다** (의사냐고 묻다, 학생이냐고 묻다)\n- 과거 시제: **-았/었냐고 묻다** (\"어제 왜 안 왔냐고 물어봤어요.\")\n\n2. 제안문/청유문 간접화법 ('-자고 하다' - Indirect Proposal/Suggestion):\n- 동사 어간 + **-자고 하다** (받침 유무 상관없이 무조건 '-자고 하다')\n  - 가다 → 가자고 하다 (\"주말에 미술관에 같이 가자고 했어요.\")\n  - 먹다 → 먹자고 하다 (\"점심에 비빔밥을 먹자고 제안했어요.\")\n  - 쉬다 → 쉬자고 하다 (\"잠깐 커피 마시며 쉬자고 했어요.\")",
      "examples": [
        {
          "target": "수진 씨가 이번 주 금요일 저녁에 시간이 있냐고 물어보았습니다.",
          "reading": "Sujin ssi-ga ibeon ju geumyoil jeonyeok-e sigan-i innyago mureoboatseumnida.",
          "translation": "Sujin asked if I have time this Friday evening (Question indirect '-냐고 물어보다')."
        },
        {
          "target": "팀장님께서 오늘 점심에 다 같이 시원한 냉면을 먹으러 가자고 하셨습니다.",
          "reading": "Timjangnim-kkeseo oneul jeomsim-e da gachi siwonhan naengmyeon-eul meog-eureo gajago hasyeotseumnida.",
          "translation": "The team manager suggested that we all go to eat refreshing naengmyeon together for lunch ('-자고 하다')."
        },
        {
          "target": "어머니께서 어제 저녁에 시험공부를 몇 시까지 했냐고 다정하게 물으셨어요.",
          "reading": "Eomeoni-kkeseo eoje jeonyeok-e siheom-gongbu-reul myeot si-kkaji haennyago dajeonghage mureusyeosseoyo.",
          "translation": "Mother warmly asked until what time I had studied for the exam last night (Past question '-았/었냐고 묻다')."
        },
        {
          "target": "친구가 이번 주말에 교외로 드라이브를 가자고 약속을 청했습니다.",
          "reading": "Chin-gu-ga ibeon jumal-e gyooe-ro deuraibeu-reul gajago yaksok-eul cheonghaetseumnida.",
          "translation": "A friend asked for a rendezvous proposing that we go for a drive to the suburbs this weekend ('가자고')."
        }
      ],
      "mnemonics": [
        "질문 인용은 물어보니까 '-냐고 묻다'! 함께하자는 제안은 사이좋게 '-자고 하다'!"
      ],
      "culturalNotes": [
        "한국어 회화에서 질문을 인용할 때는 '하다'보다 '물어보다', '질문하다', '여쭤보다(높임)'와 결합하는 것이 화맥상 훨씬 자연스럽습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "\"같이 점심 먹어요!\"라는 제안을 간접화법으로 바르게 전달한 문장은?",
          "options": [
            "친구가 같이 점심을 먹자고 했어요. (함께하자는 청유문 인용은 -자고 하다(먹자고 했어요)를 씁니다.",
            "친구가 같이 점심을 먹는다고 했어요.냐고 하다') 및 제안문 간접화법",
            "친구가 같이 점심을 먹으라고 했어요.냐고 하다') 및 제안문 간접화법"
          ],
          "answerIndex": 0,
          "explanation": "함께하자는 청유문 인용은 '-자고 하다(먹자고 했어요)'를 씁니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "\"어디에 살아요?\"라는 질문을 제3자에게 전달할 때 올바른 간접화법은?",
          "options": [
            "어디에 사냐고 물어봤어요. (질문 인용은 -(으)냐고 묻다이며, 살다의 ㄹ이 탈락하여 사냐고 물어봤어요가 됩니다.",
            "어디에 살자고 물어봤어요.냐고 하다') 및 제안문 간접화법",
            "어디에 사라고 물어봤어요.냐고 하다') 및 제안문 간접화법"
          ],
          "answerIndex": 0,
          "explanation": "질문 인용은 '-(으)냐고 묻다'이며, '살다'의 'ㄹ'이 탈락하여 '사냐고 물어봤어요'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 의문문 간접화법과 제안문 간접화법의 결합이 모두 완벽한 것은?",
          "options": [
            "지우가 오늘 영화를 보냐고 물어보며 주말에 같이 보자고 했어요.",
            "지우가 오늘 영화를 보라고 물어보며 주말에 같이 보다고 했어요.냐고 하다') 및 제안문 간접화법",
            "지우가 오늘 영화를 보다고 물어보며 주말에 같이 보냐고 했어요.냐고 하다') 및 제안문 간접화법"
          ],
          "answerIndex": 0,
          "explanation": "의문 인용 '보냐고 물어보다' + 제안 인용 '보자고 하다'의 배합이 완벽합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'친구가 같이 밥 먹자고 했어요'(A friend asked to eat together)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "친구가 같이 밥 먹자고 했어요.",
            "친구가 같이 밥 먹자고 했어요"
          ],
          "explanation": "친구가 + 같이 + 밥 + 먹자고(먹다 + 자고) + 했어요 = 친구가 같이 밥 먹자고 했어요."
        }
      ]
    }
  },
  "ko-u18-l3": {
    "id": "ko-u18-l3",
    "subject": "korean",
    "unit": 18,
    "lessonNumber": 3,
    "title": "명령문/요청문 간접화법 ('-(으)라고 하다' vs '-아/어 달라고/주라고 하다')",
    "level": "B2",
    "objective": "명령 전달('-(으)라고 하다')과 수혜자 관계에 따른 요청 인용('-아/어 달라고 하다' vs '-아/어 주라고 하다')의 고난도 문법 규칙을 마스터한다.",
    "presentation": {
      "explanation": "명령문이나 부탁·요청문을 간접화법으로 전달할 때는 명령 어미 '-(으)라고 하다'와, 수혜자가 누구냐에 따라 분화되는 '달라고/주라고' 규칙을 엄격히 구별해야 합니다.\n\n1. 일반 명령문 간접화법 ('-(으)라고 하다' - Indirect Imperative):\n- 동사 받침 없음 or 'ㄹ' 받침 → **-라고 하다** (가라고 하다, 만들라고 하다)\n- 동사 'ㄹ' 제외 받침 있음 → **-으라고 하다** (앉으라고 하다, 읽으라고 하다, 먹으라고 하다)\n- 부정 명령문: **-지 말라고 하다** (\"늦지 말라고 하셨어요.\")\n\n2. 결정적 요청 화법: '-아/어 달라고 하다' vs '-아/어 주라고 하다' (Crucial Distinction):\n- 화자 본인을 위한 요청일 때 → **-아/어 달라고 하다** (Request for Speaker):\n  - 민수: \"(나에게) 물 좀 주세요.\" → 민수가 (자기에게) 물을 좀 **달라고** 했어요.\n- 제3자를 위한 요청일 때 → **-아/어 주라고 하다** (Request for Third Party):\n  - 선생님: \"영수에게 책을 전해 주세요.\" → 선생님께서 영수에게 책을 **전해 주라고** 하셨어요.",
      "examples": [
        {
          "target": "의사 선생님께서 하루에 물을 2리터 이상 충분히 마시라고 권고하셨습니다.",
          "reading": "Uisa seonsaengnim-kkeseo haru-e mul-eul 2-riteo isang chungbunhi masirago gwon-gohasyeotseumnida.",
          "translation": "The doctor recommended that I drink more than 2 liters of water a day sufficiently (Imperative indirect '-라고')."
        },
        {
          "target": "선생님께서 수업 시간에 옆 사람과 잡담하지 말라고 주의를 주셨습니다.",
          "reading": "Seonsaengnim-kkeseo sueop sigan-e yeop saram-gwa japdamhaji mallago juui-reul jusyeotseumnida.",
          "translation": "The teacher gave a warning not to chat with the person next to us during class time ('-지 말라고 하다')."
        },
        {
          "target": "손님이 직원에게 차가운 생수 한 병을 가져다 달라고 정중히 부탁했습니다.",
          "reading": "Sonnim-i jigwon-ege chagaun saengsu han byeong-eul gajyeoda dallago jeongjunghi butakhaetseumnida.",
          "translation": "The customer politely requested the staff to bring a bottle of cold water for themselves ('-아/어 달라고 하다' request for speaker)."
        },
        {
          "target": "부장님께서 인턴사원에게 도움이 필요하면 선배들이 적극적으로 도와주라고 당부하셨습니다.",
          "reading": "Bujangnim-kkeseo inteonsawon-ege doum-i piryohamyeon seonbaedeul-i jeokgeukjeog-euro dowajurago dangbuhasyeotseumnida.",
          "translation": "The department manager requested that seniors actively help the intern employee if help is needed ('-아/어 주라고 하다' request for 3rd party)."
        }
      ],
      "mnemonics": [
        "명령은 '-(으)라고', 나를 위한 부탁은 '달라고', 남을 위한 부탁은 '주라고'!"
      ],
      "culturalNotes": [
        "'-아/어 달라고 하다'와 '-아/어 주라고 하다'의 구분은 한국어 모국어 화자들의 직관에 깊이 뿌리박힌 핵심 문법으로, 한국어능력시험(TOPIK II) 단골 최고 배점 문항입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "민수가 지우에게 \"나에게 펜을 빌려줘\"라고 한 말을 전달할 때 올바른 형태는?",
          "options": [
            "민수가 지우에게 펜을 빌려 달라고 했어요. (말하는 사람 자신(민수)에게 해 달라는 요청이므로 -아/어 달라고 하다가 정확합니다.",
            "민수가 지우에게 펜을 빌려 주라고 했어요.라고 하다' vs '-아/어",
            "민수가 지우에게 펜을 빌리자고 했어요.라고 하다' vs '-아/어"
          ],
          "answerIndex": 0,
          "explanation": "말하는 사람 자신(민수)에게 해 달라는 요청이므로 '-아/어 달라고 하다'가 정확합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "어머니께서 나에게 \"동생에게 사탕을 나누어 줘라\"라고 하신 말을 간접화법으로 바르게 표현한 것은?",
          "options": [
            "어머니께서 동생에게 사탕을 나누어 주라고 하셨어요. (제3자(동생)를 위해 행동하라는 명령이므로 -아/어 주라고 하다가 맞습니다.",
            "어머니께서 동생에게 사탕을 나누어 달라고 하셨어요.라고 하다' vs '-아/어",
            "어머니께서 동생에게 사탕을 나누자고 하셨어요.라고 하다' vs '-아/어"
          ],
          "answerIndex": 0,
          "explanation": "제3자(동생)를 위해 행동하라는 명령이므로 '-아/어 주라고 하다'가 맞습니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "부정 명령(\"회의에 늦지 마세요\")을 간접화법으로 옮긴 가장 올바른 형태는?",
          "options": [
            "회의에 늦지 말라고 하셨어요.",
            "회의에 늦지 마라고 하셨어요.라고 하다' vs '-아/어",
            "회의에 늦지 않는다고 하셨어요.라고 하다' vs '-아/어"
          ],
          "answerIndex": 0,
          "explanation": "부정 명령 간접화법의 표준형은 '-지 말라고 하다'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'선생님이 일찍 오라고 하셨어요'(The teacher told me to come early)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "선생님이 일찍 오라고 하셨어요.",
            "선생님이 일찍 오라고 하셨어요"
          ],
          "explanation": "선생님이 + 일찍 + 오라고(오다 + 라고) + 하셨어요 = 선생님이 일찍 오라고 하셨어요."
        }
      ]
    }
  },
  "ko-u18-l4": {
    "id": "ko-u18-l4",
    "subject": "korean",
    "unit": 18,
    "lessonNumber": 4,
    "title": "일상 회화 속 간접화법 축약형 ('-대요', '-재요', '-래요', '-냬요')",
    "level": "B2",
    "objective": "실제 한국어 일상 구어체에서 매우 빈번하게 사용되는 4대 간접화법 축약 종결형을 능수능란하게 구사한다.",
    "presentation": {
      "explanation": "한국 사람들은 일상 대화에서 긴 간접화법 어미를 신속하고 자연스럽게 축약하여 사용합니다. 이 축약형은 일상 회화의 필수 표현입니다.\n\n1. 4대 구어 축약 공식 (Colloquial Contraction Rules):\n- 평서문 축약: **-는대요 / -ㄴ대요 / -대요 / -(이)래요**\n  - -는다고 해요 → **-는대요** (먹는대요, 읽는대요)\n  - -ㄴ다고 해요 → **-ㄴ대요** (간대요, 온대요)\n  - 형용사 -다고 해요 → **-대요** (예쁘대요, 바쁘대요)\n  - 명사 -(이)라고 해요 → **-(이)래요** (선생님이래요, 의사래요)\n- 제안문 축약: -자고 해요 → **-재요**\n  - 가자고 해요 → **가재요**, 먹자고 해요 → **먹재요**\n- 명령문 축약: -(으)라고 해요 → **-(으)래요**\n  - 오라고 해요 → **오래요**, 기다리라고 해요 → **기다리래요**\n- 의문문 축약: -(으)냐고 해요 → **-(으)냬요**\n  - 가냐고 해요 → **가냬요**, 어디 있냐고 해요 → **어디 있냬요**",
      "examples": [
        {
          "target": "A: 지우 씨 오늘 왜 안 왔어요? B: 감기에 심하게 걸려서 병원에 갔대요.",
          "reading": "A: Ji-u ssi oneul wae an wasseoyo? B: Gamgi-e simhage geollyeoseo byeong-won-e gatdaeyo.",
          "translation": "A: Why didn't Jiu come today? B: She said she went to the hospital because she caught a bad cold (Past flat contraction '-았대요')."
        },
        {
          "target": "민수 씨가 퇴근 후에 다 같이 시원한 맥주 한잔하재요.",
          "reading": "Minsu ssi-ga toegeun hu-e da gachi siwonhan maekju hanjan-hajaeyo.",
          "translation": "Minsu suggests that we all have a cold beer together after work (Proposal contraction '-재요')."
        },
        {
          "target": "부장님께서 서류 검토 다 끝났으니까 지금 회의실로 들어오래요.",
          "reading": "Bujangnim-kkeseo seoryu geomto da kkeutnasseunikka jigeum hoeuisil-ro deureo-oraeyo.",
          "translation": "The director says to come into the conference room right now as the document review is finished (Imperative contraction '-래요')."
        },
        {
          "target": "친구들이 저한테 이번 주말에 약속이 있냬요.",
          "reading": "Chin-gudeul-i jeo-hante ibeon jumal-e yaksok-i innyaeyo.",
          "translation": "Friends are asking me if I have plans this weekend (Question contraction '-냬요')."
        }
      ],
      "mnemonics": [
        "전달할 땐 '-대요', 함께할 땐 '-재요', 시킬 땐 '-래요', 물어볼 땐 '-냬요'! 4대 구어 마스터!"
      ],
      "culturalNotes": [
        "한국 드라마나 예능, 일상 사적인 대화에서 90% 이상은 축약형('-대요, -재요, -래요, -냬요')으로 소통하므로, 이를 귀로 듣고 입으로 바로 뱉는 훈련이 청취 및 유창성 확립의 관건입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "\"민수가 지금 밥을 먹는다고 해요\"를 자연스러운 일상 구어 축약형으로 바꾼 것은?",
          "options": [
            "민수가 지금 밥을 먹는대요. (-는다고 해요의 축약형은 -는대요(먹는대요)입니다.",
            "민수가 지금 밥을 먹재요.",
            "민수가 지금 밥을 먹으래요."
          ],
          "answerIndex": 0,
          "explanation": "'-는다고 해요'의 축약형은 '-는대요(먹는대요)'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "\"영수가 같이 영화를 보자고 해요\"를 올바른 구어 축약형으로 나타낸 문장은?",
          "options": [
            "영수가 같이 영화를 보재요. (제안의 축약형은 -재요(보재요)입니다.",
            "영수가 같이 영화를 보래요.",
            "영수가 같이 영화를 보냬요."
          ],
          "answerIndex": 0,
          "explanation": "제안의 축약형은 '-재요(보재요)'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 축약형 연결 중 짝지음이 잘못된 것은?",
          "options": [
            "가라고 해요 → 가대요 (가라고 해요(명령)의 축약형은 가래요이며, 가대요는 간다고 해요의 잘못된 축약입니다.",
            "가자고 해요 → 가재요",
            "가냐고 해요 → 가냬요"
          ],
          "answerIndex": 0,
          "explanation": "'가라고 해요(명령)'의 축약형은 '가래요'이며, '가대요'는 '간다고 해요'의 잘못된 축약입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'오늘 날씨가 정말 덥대요'(They say the weather is really hot today)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "오늘 날씨가 정말 덥대요.",
            "오늘 날씨가 정말 덥대요"
          ],
          "explanation": "오늘 + 날씨가 + 정말 + 덥대요(덥다고 해요) = 오늘 날씨가 정말 덥대요."
        }
      ]
    }
  },
  "ko-u18-l5": {
    "id": "ko-u18-l5",
    "subject": "korean",
    "unit": 18,
    "lessonNumber": 5,
    "title": "소문 전달, 전언 메모 및 회의 전달 보고 실전 간접화법 담화",
    "level": "B2",
    "objective": "평서·의문·명령·제안의 정식 및 축약 간접화법을 총동원하여 직장 전언 메모, 뉴스 소식 교환 실전 담화를 완성한다.",
    "presentation": {
      "explanation": "직장이나 일상생활에서는 전화 메시지 전달, 상사 지시 사항 전파, 친구들 사이의 소식 교환 상황에서 간접화법이 핵심 의사소통 도구로 기능합니다.\n\n1. 사무실 전화 전언 및 메시지 전달 실전 담화 모델:\n- A: 나래 씨, 방금 거래처 김 과장님한테서 전화 왔었어요.\n- B: 아, 그래요? 무슨 용건이라고 하셨나요?\n- A: 내일 오전 회의 시작 시간이 10시에서 11시로 한 시간 연기되었다고 전해 달래요.\n- B: 알겠습니다. 혹시 다른 전달 사항은 없었나요?\n- A: 회의 전까지 수정된 견적서 초안을 이메일로 미리 보내 줄 수 있냐고 물어보셨어요.\n- B: 네, 지금 바로 수정해서 보내겠다고 회신해 둘게요. 메모 남겨 주셔서 감사해요!\n- A: 별말씀을요. 그리고 과장님께서 도착하시면 꼭 전화 한 통 달라고 하셨어요.",
      "examples": [
        {
          "target": "A: 뉴스에서 오늘 밤에 첫눈이 내린대요. B: 와, 정말요? 주말에 설경 보러 산에 가재요.",
          "reading": "A: Nyuseu-eseo oneul bam-e cheotnun-i naerindaeyo. B: Wa, jeongmalyo? Jumal-e seolgyeong boreo san-e gajaeyo.",
          "translation": "A: The news says that the first snow will fall tonight ('내린대요'). B: Wow, really? Let's go to the mountains to see the snowy landscape on the weekend ('가재요')."
        },
        {
          "target": "[전언 메모] 14:30 박 부장님 전화: 오늘 4시 기획 회의 준비 철저히 하라고 하심.",
          "reading": "[Jeoneon memo] 14:30 Park bujangnim jeonhwa: Oneul 4-si gihoek hoeui junbi cheoljeohi harago hasim.",
          "translation": "[Relay Memo] 14:30 Call from Director Park: Told us to prepare thoroughly for today's 4 PM planning meeting ('하라고 하심')."
        },
        {
          "target": "민우 씨가 어제 산 새 차가 승차감도 좋고 연비도 아주 뛰어나다고 자랑했어요.",
          "reading": "Minu ssi-ga eoje san sae cha-ga seungchagam-do jotgo yeonbi-do aju ttwieonadago jaranghaesseoyo.",
          "translation": "Minwoo bragged that the new car he bought yesterday has great ride comfort and excellent fuel efficiency ('뛰어나다고 자랑하다')."
        },
        {
          "target": "친구가 다음 주 생일 파티에 올 수 있냐고 물어보길래 꼭 참석하겠다고 대답했습니다.",
          "reading": "Chin-gu-ga daeum ju saeng-il pati-e ol su innyago mureobogillae kkok chamseokhagetdago daedaphaetseumnida.",
          "translation": "Since my friend asked if I could come to their birthday party next week ('있냐고'), I answered that I would definitely attend ('참석하겠다고')."
        }
      ],
      "mnemonics": [
        "전화 메모는 '연기되었다고 전해 달래요', 질문엔 '있냐고 물어보셨어요'! 전언의 달인!"
      ],
      "culturalNotes": [
        "한국의 직장에서는 전화 메모를 작성할 때 '김 부장님께서 확인 후 전화 달라고 하심'처럼 간접화법 어미 뒤에 존칭 명사화 형태인 '하심'을 붙여 격식과 예의를 동시에 표합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "상사의 지시 사항(\"보고서를 3시까지 제출하세요\")을 동료에게 전달하는 가장 자연스러운 구어 표현은?",
          "options": [
            "팀장님께서 보고서를 3시까지 제출하래요. (명령/지시 축약형은 -래요(제출하래요)입니다.",
            "팀장님께서 보고서를 3시까지 제출하재요.",
            "팀장님께서 보고서를 3시까지 제출한대요."
          ],
          "answerIndex": 0,
          "explanation": "명령/지시 축약형은 '-래요(제출하래요)'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "전화 전언 메모 중 간접화법과 높임법이 가장 완벽하게 조화된 문장은?",
          "options": [
            "거래처 대표님께서 회의 자료를 미리 검토해 보시라고 전해 달라고 하셨습니다. (존칭 명령(보시라고) + 부탁 전달(전해 달라고 하셨습니다)의 조합이 가장 품격 있습니다.",
            "거래처 대표님께서 회의 자료를 미리 검토해 보라고 전해 달라고 하였습니다.",
            "거래처 대표님께서 회의 자료를 미리 검토해 보자고 전해 주라고 하셨습니다."
          ],
          "answerIndex": 0,
          "explanation": "존칭 명령('보시라고') + 부탁 전달('전해 달라고 하셨습니다')의 조합이 가장 품격 있습니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 대화의 빈칸에 들어갈 알맞은 전달 표현은? \"A: 민수 씨가 왜 안 와요? B: 지금 길이 너무 _____ 조금만 기다려 달래요.\"",
          "options": [
            "막힌다고",
            "막히자고",
            "막히라고"
          ],
          "answerIndex": 0,
          "explanation": "길이 막힌다는 평서문 사실 전달이므로 '막힌다고'가 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'주말에 같이 영화 보러 가재요'(They suggest going to see a movie together on the weekend)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "주말에 같이 영화 보러 가재요.",
            "주말에 같이 영화 보러 가재요"
          ],
          "explanation": "주말에 + 같이 + 영화 보러 + 가재요(가자고 해요) = 주말에 같이 영화 보러 가재요."
        }
      ]
    }
  },
  "ko-u19-l1": {
    "id": "ko-u19-l1",
    "subject": "korean",
    "unit": 19,
    "lessonNumber": 1,
    "title": "단형 피동 접미사 ('-이/히/리/기-')",
    "level": "B2",
    "objective": "타동사 어간에 결합하여 '남의 힘에 의해 동작을 당하거나 자연스레 일어나게 됨'을 나타내는 4대 단형 피동 접미사의 형태 결합 규칙을 마스터한다.",
    "presentation": {
      "explanation": "한국어에서 주어가 동작을 직접 수행하는 것이 아니라, 다른 주체에 의해 어떤 동작을 당하거나 저절로 실현되는 것을 피동(Passive Voice)이라고 합니다. 타동사 어간에 파생 접미사 '-이/히/리/기-'를 결합하여 단형 피동사를 만듭니다.\n\n1. 4대 피동 접미사 분류 및 규칙:\n- **-이-** (모음 종결 어간 or 받침 ㄱ/ㅂ/ㄷ 일부):\n  - 보다 → **보이다** (\"저 멀리 산이 보여요.\")\n  - 쓰다 → **쓰이다** (\"이 단어는 자주 쓰입니다.\")\n  - 놓다 → **놓이다** (\"책상 위에 꽃병이 놓여 있어요.\")\n  - 쌓다 → **쌓이다** (\"마당에 눈이 하얗게 쌓였어요.\")\n- **-히-** (받침 ㄱ/ㄷ/ㅂ/ㅈ):\n  - 닫다 → **닫히다** [다치다] (\"바람에 창문이 닫혔어요.\")\n  - 먹다 → **먹히다** [머키다] (\"모기에게 물리고 먹히다\")\n  - 잡다 → **잡히다** [자피다] (\"경찰에게 범인이 잡혔습니다.\")\n  - 꽂다 → **꽂히다** [꼬치다] (\"책꽂이에 책이 꽂혀 있어요.\")\n- **-리-** (받침 ㄹ or ㄷ 불규칙):\n  - 듣다 → **들리다** (\"밖에서 빗소리가 들려요.\")\n  - 열다 → **열리다** (\"드디어 문이 열렸습니다.\")\n  - 팔다 → **팔리다** (\"신제품이 날개 돋친 듯 팔립니다.\")\n  - 풀다 → **풀리다** (\"어려웠던 문제가 풀렸어요.\")\n- **-기-** (받침 ㄴ/ㅁ/ㅅ/ㅊ/ㄶ):\n  - 끊다 → **끊기다** [끈키다] (\"전화 연결이 갑자기 끊겼어요.\")\n  - 안다 → **안기다** (\"아기가 엄마 품에 안겼습니다.\")\n  - 쫓다 → **쫓기다** [쪼키다] (\"시간에 쫓기며 일하다.\")\n  - 찢다 → **찢기다** (\"종이가 찢겼어요.\")",
      "examples": [
        {
          "target": "창밖으로 아름다운 한강의 야경과 남산타워가 한눈에 똑똑히 보입니다.",
          "reading": "Changbak-euro areumdaun Han-gang-ui yagyeong-gwa Namsantaweo-ga hannun-e ttokttokhi boimnida.",
          "translation": "The beautiful night view of the Han River and Namsan Tower are clearly visible at a glance out the window ('보다' → '보이다' passive)."
        },
        {
          "target": "갑자기 거세게 불어닥친 돌풍 때문에 열려 있던 베란다 창문이 쾅 닫혔습니다.",
          "reading": "Gapjagi geose-ge bureodakchin dolpung ttaemun-e yeollyeo itdeon beranda changmun-i kwang dachyeotseumnida.",
          "translation": "Because of the sudden strong gust of wind, the open veranda window slammed shut ('닫다' → '닫히다')."
        },
        {
          "target": "조용한 숲속 오솔길을 걷는 동안 맑은 산새 소리와 시냇물 소리가 청아하게 들렸어요.",
          "reading": "Joyonghan supsok osolgil-eul geotneun dong-an malgeun sansae sori-wa sinaenmul sori-ga cheong-ahage deullyeosseoyo.",
          "translation": "While walking on the quiet forest path, the clear sounds of mountain birds and stream water were serenely audible ('듣다' → '들리다')."
        },
        {
          "target": "터널 안으로 진입하자마자 스마트폰 통화 연결이 갑자기 뚝 끊겼습니다.",
          "reading": "Teoneol an-euro jinip-hajamaja seumateupon tonghwa yeon-gyeol-i gapjagi ttuk kkeunkyeotseumnida.",
          "translation": "As soon as we entered the tunnel, the smartphone phone call connection suddenly got cut off ('끊다' → '끊기다')."
        }
      ],
      "mnemonics": [
        "눈에 보이고(이), 문이 닫히고(히), 귀에 들리고(리), 전화 끊기네(기)! 이·히·리·기 피동!"
      ],
      "culturalNotes": [
        "한국어 피동사는 단순한 수동적 피동뿐 아니라, 화자의 의도와 상관없이 감각 기관에 자연스럽게 지각되는 자발(Spontaneous Perception)을 표현할 때 핵심적으로 쓰입니다(예: 보이다, 들리다)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'듣다(hear)'의 올바른 단형 피동사 형태는 무엇입니까?",
          "options": [
            "들리다",
            "듣히다",
            "듣기다"
          ],
          "answerIndex": 0,
          "explanation": "'듣다'의 피동사는 'ㄷ'이 'ㄹ'로 바뀌고 '-리-'가 붙어 '들리다'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'경찰이 도둑을 잡았다(능동)'를 피동문으로 바르게 전환한 문장은?",
          "options": [
            "도둑이 경찰에게 잡혔다. (주어 도둑이, 행위자 경찰에게, 피동사 잡히다(잡혔다)의 구조가 완벽합니다.",
            "도둑이 경찰에게 잡았다.",
            "도둑이 경찰에게 잡렸다."
          ],
          "answerIndex": 0,
          "explanation": "주어 '도둑이', 행위자 '경찰에게', 피동사 '잡히다(잡혔다)'의 구조가 완벽합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'문이 바람에 저절로 _____.' 빈칸에 알맞은 피동사 형태는?",
          "options": [
            "닫혔어요 (닫다의 피동사는 -히-가 결합하여 닫히다(닫혔어요)가 됩니다.",
            "닫았어요",
            "닫겼어요"
          ],
          "answerIndex": 0,
          "explanation": "'닫다'의 피동사는 '-히-'가 결합하여 '닫히다(닫혔어요)'가 됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'밖에서 빗소리가 들려요'(The sound of rain is heard outside)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "밖에서 빗소리가 들려요.",
            "밖에서 빗소리가 들려요"
          ],
          "explanation": "밖에서 + 빗소리가 + 들려요(들리다 + 어요) = 밖에서 빗소리가 들려요."
        }
      ]
    }
  },
  "ko-u19-l2": {
    "id": "ko-u19-l2",
    "subject": "korean",
    "unit": 19,
    "lessonNumber": 2,
    "title": "장형 통사적 피동 어미 ('-아/어지다')",
    "level": "B2",
    "objective": "단형 피동 접미사가 붙지 않는 3음절 이상 동사나 '-하다' 동사에 결합하여 피동 및 상태 변화를 나타내는 '-아/어지다' 구문을 체득한다.",
    "presentation": {
      "explanation": "한국어의 모든 타동사가 '-이/히/리/기-' 접미사를 가질 수 있는 것은 아닙니다. 접미사 피동형이 없는 대부분의 동사나 복합 동사는 보조 용언적 피동 어미 '-아/어지다'를 결합하여 통사적 장형 피동을 구성합니다.\n\n1. 결합 규칙:\n- 양성 모음 (ㅏ, ㅗ) → **-아지다**\n  - 좋아하다 → **좋아지다**, 흩다 → **흩어지다**\n- 음성 모음 (ㅓ, ㅜ, ㅡ, ㅣ 등) → **-어지다**\n  - 만들다 → **만들어지다** (\"장인의 손에서 만들어진 명품\")\n  - 쓰다 → **써지다** (단, 접미사 피동은 '쓰이다')\n  - 이루다 → **이루어지다** (\"소원이 이루어졌어요.\")\n  - 믿다 → **믿어지다** (\"꿈처럼 믿어지지 않아요.\")\n- 하다 동사 → **-해지다 / -하여지다**\n  - 전하다 → **전해지다** (\"전설이 전해져 내려옵니다.\")\n  - 정하다 → **정해지다** (\"회의 날짜가 정해졌습니다.\")\n\n2. 피동 vs 상태 변화 (Passive vs Change of State):\n- 동사 + -아/어지다 = 피동 (Action Passive): 만들어지다, 전해지다\n- 형용사 + -아/어지다 = 점진적 상태 변화 (Becoming): 따뜻해지다, 예뻐지다, 밝아지다",
      "examples": [
        {
          "target": "오랜 세월 동안 사람들의 입에서 입으로 흥미진진한 전설이 전해져 내려왔습니다.",
          "reading": "Oraen sewol dong-an saramdeul-ui ip-eseo ip-euro heungmijinjinhan jeonseol-i jeonhaejyeo naeryeowatseumnida.",
          "translation": "Over long periods of time, fascinating legends have been transmitted from mouth to mouth ('전하다' → '전해지다')."
        },
        {
          "target": "수많은 연구진의 끈질긴 헌신과 노력 끝에 획기적인 신약이 드디어 만들어졌습니다.",
          "reading": "Sumanheun yeon-gujin-ui kkeunjilgin heonsin-gwa noryeok kkeut-e hoekgijeogin sinyak-i deudieo mandeureojyeotseumnida.",
          "translation": "At the end of persistent dedication and effort of numerous researchers, an epoch-making new drug was finally created ('만들다' → '만들어지다')."
        },
        {
          "target": "다음 달에 개최될 국제 학술 심포지엄의 구체적인 세부 일정이 최종 정해졌습니다.",
          "reading": "Daeum dal-e gaechoedoel gukje hakssul simpojieom-ui guchejeogin sebu iljeong-i choejong jeonghaejyeotseumnida.",
          "translation": "The concrete detailed schedule of the international academic symposium to be held next month has been finally determined ('정하다' → '정해지다')."
        },
        {
          "target": "시험에 만점을 받았다는 기쁜 합격 소식이 도무지 꿈만 같아서 믿어지지 않아요.",
          "reading": "Siheom-e manjeom-eul badatdaneun gippeun hapgyeok sosik-i domuji kkumman gat-aseo mideojiji anhayo.",
          "translation": "The joyful passing news that I got a perfect score on the exam feels just like a dream, so it cannot be believed ('믿다' → '믿어지다')."
        }
      ],
      "mnemonics": [
        "전해지고, 만들어지고, 정해지는 건 '-아/어지다'! 세상 모든 결과의 통사적 피동!"
      ],
      "culturalNotes": [
        "한국어에서 '소원이 이루어지다', '꿈이 실현되다'처럼 인간의 의지 너머에 있는 거대한 결과는 능동문보다 피동 표현('-아/어지다')으로 완결 짓는 것이 전통적 사고방식에 더욱 부합합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'만들다(make)'의 올바른 장형 피동 형태는 무엇입니까?",
          "options": [
            "만들어지다",
            "만들이다",
            "만들히다"
          ],
          "answerIndex": 0,
          "explanation": "'만들다'는 3음절 이상 용언으로 접미사가 붙지 않고 '-어지다'가 붙어 '만들어지다'가 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'회의 날짜를 정했다'를 피동문으로 전환하여 일정이 결정되었음을 나타낸 올바른 문장은?",
          "options": [
            "회의 날짜가 정해졌습니다. (정하다에 -아/어지다가 결합하여 정해지다(정해졌습니다)가 됩니다.",
            "회의 날짜가 정했습니다.",
            "회의 날짜가 정히였습니다."
          ],
          "answerIndex": 0,
          "explanation": "'정하다'에 '-아/어지다'가 결합하여 '정해지다(정해졌습니다)'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 '-아/어지다' 피동 표현의 결합이 어법상 가장 자연스러운 것은?",
          "options": [
            "도저히 꿈같아서 사실이라고 믿어지지 않아요.",
            "도저히 꿈같아서 사실이라고 믿히지 않아요.",
            "도저히 꿈같아서 사실이라고 믿리지 않아요."
          ],
          "answerIndex": 0,
          "explanation": "'믿다'의 자연스러운 피동 표현은 '믿어지다'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'소원이 이루어졌어요'(My wish came true)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "소원이 이루어졌어요.",
            "소원이 이루어졌어요"
          ],
          "explanation": "소원이 + 이루어졌어요(이루어지다 + 었 + 어요) = 소원이 이루어졌어요."
        }
      ]
    }
  },
  "ko-u19-l3": {
    "id": "ko-u19-l3",
    "subject": "korean",
    "unit": 19,
    "lessonNumber": 3,
    "title": "상황적·결과적 피동 ('-게 되다')",
    "level": "B2",
    "objective": "자신의 직접적인 의도보다는 외부 상황, 제도, 인연에 의해 어떤 새로운 국면이나 지위에 이르게 됨을 나타내는 '-게 되다' 구문을 습득한다.",
    "presentation": {
      "explanation": "'-게 되다'는 주어의 직접적인 의지나 통제를 벗어나 외부의 객관적 상황, 규칙, 결정, 인연 등의 작용으로 어떤 결과나 상태에 도달하게 됨(Resultative / Circumstantial Passive)을 나타내는 매우 유용한 문법입니다.\n\n1. 핵심 뉘앙스 (Core Nuances):\n- 외부 환경이나 지시로 인한 변화: \"다음 달부터 본사 기획팀에서 일하게 되었습니다.\"\n- 우연한 기회나 인연: \"우연히 길에서 옛 친구를 만나게 되었어요.\"\n- 자연스러운 인식의 발전: \"수업을 들으면서 한국 문화의 매력을 점차 알게 되었습니다.\"\n\n2. '-게 하다'(사동) vs '-게 되다'(피동/결과):\n- 사동: 선생님이 학생을 공부하게 했다. (Make someone do)\n- 피동: 장학금을 받아서 한국으로 유학을 가게 되었다. (Come to be in a situation to do)",
      "examples": [
        {
          "target": "회사 인사 이동 발령에 따라 다음 달부터 해외 지사에서 근무하게 되었습니다.",
          "reading": "Hoesa insa idong ballyeong-e ttara daeum dal-buteo haeoe jisa-eseo geunmuhage doeeotseumnida.",
          "translation": "In accordance with the company personnel transfer announcement, I have come to work at an overseas branch starting next month ('-게 되었습니다')."
        },
        {
          "target": "한국인 룸메이트와 일 년 동안 함께 생활하면서 한국 요리를 자연스럽게 배우게 되었어요.",
          "reading": "Hangukin rummeiteu-wa il nyeon dong-an hamkke saenghwalhamyeonseo hanguk yori-reul jayeonseureopge baeuge doeeosseoyo.",
          "translation": "While living together with a Korean roommate for one year, I came to learn Korean cooking naturally."
        },
        {
          "target": "갑작스러운 폭설로 인해 오늘 출발 예정이던 모든 항공편이 결항되게 되었습니다.",
          "reading": "Gapjakeuseureoun pokseol-ro inhae oneul chulbal yejeong-ideon modeun hang-gongpyeon-i gyeolhangdoege doeeotseumnida.",
          "translation": "Due to sudden heavy snowfall, all flights scheduled to depart today have ended up being canceled ('결항되게 되었습니다')."
        },
        {
          "target": "처음에는 낯설었지만 자주 왕래하면서 동네 이웃들과 친한 사이로 발전하게 되었어요.",
          "reading": "Cheoeum-eneun natseoreotjiman jaju wangraehamyeonseo dongne iutdeul-gwa chinhan sai-ro baljeonhage doeeosseoyo.",
          "translation": "Although it was unfamiliar at first, coming and going frequently led us to develop into close relations with village neighbors."
        }
      ],
      "mnemonics": [
        "상황이 그렇게 만들었을 땐 '-게 되다'! 인사 발령, 새로운 인연, 저절로 알게 됨!"
      ],
      "culturalNotes": [
        "한국인들은 자신의 성취나 진로를 겸손하게 표현할 때 \"제가 노력해서 합격했습니다\"보다 \"운 좋게 좋은 결과를 얻게 되었습니다\"처럼 '-게 되다'를 사용하여 겸양의 미덕을 표합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "외부 인사 발령으로 인해 부산으로 전근 가게 되었음을 표현한 가장 알맞은 문장은?",
          "options": [
            "다음 달부터 부산에서 근무하게 되었습니다. (외부 결정이나 상황에 의한 상태 변화는 -게 되다(근무하게 되었습니다)를 씁니다.",
            "다음 달부터 부산에서 근무하게 했습니다.",
            "다음 달부터 부산에서 근무하게 보았습니다."
          ],
          "answerIndex": 0,
          "explanation": "외부 결정이나 상황에 의한 상태 변화는 '-게 되다(근무하게 되었습니다)'를 씁니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'한국 문화를 깊이 알다'를 점진적 인식 변화 구문으로 나타낸 가장 자연스러운 표현은?",
          "options": [
            "한국 문화를 점차 깊이 알게 되었습니다.",
            "한국 문화를 점차 깊이 알게 시켰습니다.",
            "한국 문화를 점차 깊이 알아지게 되었습니다."
          ],
          "answerIndex": 0,
          "explanation": "동사 '알다'와 '-게 되다'가 결합하여 '알게 되었습니다'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 '-게 되다'의 화용론적 쓰임새로 가장 알맞은 설명은?",
          "options": [
            "개인의 독단적 고집보다는 외부 환경, 결정, 자연스러운 과정의 결과를 겸손히 드러낸다.",
            "다른 사람에게 강제로 행동을 지시할 때 쓴다.",
            "과거에 완료하지 못한 일을 후회할 때 쓴다."
          ],
          "answerIndex": 0,
          "explanation": "'-게 되다'는 외부 상황의 귀결이나 자연스러운 변화 국면을 나타냅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'한국에서 일하게 되었어요'(I have come to work in Korea)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "한국에서 일하게 되었어요.",
            "한국에서 일하게 되었어요"
          ],
          "explanation": "한국에서 + 일하게 되었어요(일하다 + 게 되다 + 었어요) = 한국에서 일하게 되었어요."
        }
      ]
    }
  },
  "ko-u19-l4": {
    "id": "ko-u19-l4",
    "subject": "korean",
    "unit": 19,
    "lessonNumber": 4,
    "title": "피동태의 격 표지 전환 및 이중 피동 오류 교정",
    "level": "B2",
    "objective": "능동문에서 피동문으로 바뀔 때의 격조사(이/가, 에게/에 의해, 으로) 전환 원리를 이해하고, 흔히 범하는 이중 피동 비문 오류를 철저히 교정한다.",
    "presentation": {
      "explanation": "피동문을 정확히 구사하기 위해서는 주어와 목적어의 격 표지(Case Marker) 전환 원리를 숙지하고, 접미사 피동과 '-아/어지다'가 불필요하게 겹친 이중 피동(Double Passive) 오류를 교정해야 합니다.\n\n1. 능동문 ↔ 피동문 격 표지 전환 공식:\n- 능동문: [주어 -이/가] + [목적어 -을/를] + [타동사]\n  - 예: \"사냥꾼이(주어) 호랑이를(목적어) 잡았다.\"\n- 피동문: [원래 목적어 -이/가] + [원래 주어 -에게 / -에 의해] + [피동사]\n  - 예: \"호랑이가(새 주어) 사냥꾼에게(유정물 행위자) 잡혔다.\"\n  - 무정물 원인: \"돌풍에(무정물) 창문이 닫혔다.\"\n\n2. 절대 금기: 이중 피동 오류 교정 (Correcting Double Passive Errors):\n- 피동 접미사(-이/히/리/기-)가 이미 붙은 단어에 '-아/어지다'를 또 붙이면 비문(Ungrammatical)!\n- ❌ 잊혀지다 (잊- + -히- + -어지다) → ⭕ **잊히다** or **잊어지다**\n- ❌ 불려지다 (부르- + -리- + -어지다) → ⭕ **불리다**\n- ❌ 쓰여지다 (쓰- + -이- + -어지다) → ⭕ **쓰이다** or **써지다**\n- ❌ 닫혀지다 (닫- + -히- + -어지다) → ⭕ **닫히다**\n- ❌ 끊겨지다 (끊- + -기- + -어지다) → ⭕ **끊기다**",
      "examples": [
        {
          "target": "사람들의 기억 속에서 영원히 잊히지 않을 감동적인 영웅의 희생이었습니다.",
          "reading": "Saramdeul-ui gieok sok-eseo yeong-wonhi itchiji anheul gamdongjeogin yeong-ung-ui huisaeng-ieotseumnida.",
          "translation": "It was a moving hero's sacrifice that will never be forgotten in people's memory (Correct single passive '잊히다', NOT *'잊혀지다')."
        },
        {
          "target": "이 아름다운 호수는 사계절 내내 청량한 빛을 띠어 '푸른 보석'이라 불립니다.",
          "reading": "I areumdaun hosu-neun sagyejeol naenae cheongryanghan bit-eul ttieo 'pureun boseok'-ira bullimnida.",
          "translation": "This beautiful lake takes on a refreshing hue throughout all four seasons and is called the 'Blue Jewel' (Correct '불리다', NOT *'불려지다')."
        },
        {
          "target": "한글은 전 세계 언어학자들에게 대단히 과학적이고 독창적인 문자로 쓰이고 있습니다.",
          "reading": "Hangeul-eun jeon segye eon-eohakjadeul-ege daedanhi gwahakjeog-igo dokchangjeogin munja-ro ssu-igo itseumnida.",
          "translation": "Hangul is being used as a remarkably scientific and original script among linguists worldwide ('쓰이다', NOT *'쓰여지다')."
        },
        {
          "target": "경찰의 신속한 출동에 의해 연쇄 절도 용의자가 현장에서 전원 잡혔습니다.",
          "reading": "Gyeongchal-ui sinsokhan chuldong-e uihae yeonswae jeoldo yong-uija-ga hyeonjang-eseo jeon-won japhyeotseumnida.",
          "translation": "By the rapid dispatch of the police, all serial theft suspects were caught at the scene ('~에 의해' + '잡히다')."
        }
      ],
      "mnemonics": [
        "'잊혀지다'는 틀림! '잊히다'가 정답! '불려지다'도 틀림! '불리다'가 바른말! 이중 피동 타파!"
      ],
      "culturalNotes": [
        "방송이나 언론 기사에서도 무분별한 번역투로 인해 *'잊혀진 계절', *'생각되어집니다' 같은 이중 피동 오류가 자주 노출되지만, 올바른 표준 국어 문법은 단일 피동('잊힌', '생각됩니다')만을 표준어로 인정합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'부르다(call)'의 올바른 단일 피동 표준어 형태는 무엇입니까?",
          "options": [
            "불리다",
            "불려지다",
            "부르어지다"
          ],
          "answerIndex": 0,
          "explanation": "'부르다'의 올바른 피동사는 '불리다'이며, '불려지다'는 이중 피동 오류입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "다음 중 이중 피동 오류가 없는 문법적으로 완벽한 문장은 어느 것입니까?",
          "options": [
            "세월이 흘러도 그의 이름은 영원히 잊히지 않을 것입니다. (잊히다는 단일 피동형으로 어법에 완벽하게 부합합니다 (*잊혀지다는 비문).",
            "세월이 흘러도 그의 이름은 영원히 잊혀지지 않을 것입니다.",
            "세월이 흘러도 그의 이름은 영원히 잊히어지지 않을 것입니다."
          ],
          "answerIndex": 0,
          "explanation": "'잊히다'는 단일 피동형으로 어법에 완벽하게 부합합니다 (*'잊혀지다'는 비문)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 올바른 피동형 짝지음이 아닌 것은?",
          "options": [
            "닫다 → 닫혀지다",
            "닫다 → 닫히다",
            "쓰다 → 쓰이다"
          ],
          "answerIndex": 0,
          "explanation": "'닫다'의 피동사는 '닫히다'이며, '닫혀지다'는 이중 피동 오류입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'영원히 잊히지 않을 추억이에요'(This is a memory that will never be forgotten)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "영원히 잊히지 않을 추억이에요.",
            "영원히 잊히지 않을 추억이에요"
          ],
          "explanation": "영원히 + 잊히지 않을(잊히다 + 지 않다 + 을) + 추억이에요 = 영원히 잊히지 않을 추억이에요."
        }
      ]
    }
  },
  "ko-u19-l5": {
    "id": "ko-u19-l5",
    "subject": "korean",
    "unit": 19,
    "lessonNumber": 5,
    "title": "사고 뉴스, 분실물 신고 및 날씨/환경 변화 묘사 실전 피동 담화",
    "level": "B2",
    "objective": "단형 피동, 장형 피동, 결과 피동('-게 되다')을 종합하여 뉴스 브리핑, 분실물 신고, 환경 묘사 실전 담화를 완성한다.",
    "presentation": {
      "explanation": "피동 표현은 뉴스 보도(사건/사고 객관적 전달), 경찰서/분실물 센터(지갑/가방 분실 신고), 기상 및 풍경 묘사에서 결정적인 역할을 수행합니다.\n\n1. 지하철 유실물 센터 분실물 신고 실전 담화 모델:\n- 손님: 저기요, 제가 2호선 지하철에 가방을 두고 내린 것 같아서 문의드리러 왔는데요.\n- 직원: 네, 어떤 가방인지 상세히 말씀해 주시겠어요?\n- 손님: 검은색 가죽 백팩인데, 가방 지퍼가 반쯤 열려 있고 앞주머니에 파란색 필통이 꽂혀 있어요.\n- 직원: 안에 귀중품이나 신분증이 들어 있었나요?\n- 손님: 네, 지갑과 학생증이 들어 있어요. 혹시 습득되어 접수된 물건이 있나요?\n- 직원: 잠시만요, 방금 역무실로 유실물 하나가 전달되어 들어왔는데요. 본인 확인 후 바로 찾아 드리겠습니다.\n- 손님: 정말 다행이네요! 친절하게 찾아 주셔서 감사합니다.",
      "examples": [
        {
          "target": "[뉴스 속보] 오늘 새벽 서해안 고속도로에서 짙은 안개로 인해 차량 5중 추돌 사고가 발생하여 도로가 전면 통제되었습니다.",
          "reading": "[Nyuseu sokbo] Oneul saebyeok Seohaean gosokdoro-eseo jiteun angae-ro inhae charyang o-jung chudol sageo-ga balsaenghayeo doro-ga jeonmyeon tongjedoeeotseumnida.",
          "translation": "[News Flash] Due to dense fog on the West Coast Expressway early this morning, a 5-vehicle chain collision occurred and the road was completely blocked ('통제되었습니다')."
        },
        {
          "target": "비행기 창가 좌석에 앉으니 솜사탕처럼 하얗게 흩어지는 구름이 시원하게 내려다보입니다.",
          "reading": "Bihaenggi chang-ga jwaseok-e anjeuni somsatang-cheoreom hayake heuteojineun gureum-i siwonhage naeryeodaboimnida.",
          "translation": "Sitting at the airplane window seat, the clouds scattering white like cotton candy are refreshingly looked down upon ('흩어지다' + '내려다보이다')."
        },
        {
          "target": "갑작스러운 정전 사태로 인해 엘리베이터 안에 승객 세 명이 30분간 갇히게 되었습니다.",
          "reading": "Gapjakeuseureoun jeongjeon satae-ro inhae ellibeiteo an-e seunggaek se myeong-i 30-bun-gan gathige doeeotseumnida.",
          "translation": "Due to a sudden blackout situation, three passengers ended up trapped inside the elevator for 30 minutes ('갇히다' + '-게 되었습니다')."
        },
        {
          "target": "잃어버렸던 소중한 지갑이 선량한 시민의 따뜻한 신고 덕분에 주인 품으로 무사히 되돌아오게 되었습니다.",
          "reading": "Ilheobeoryeotdeon sojunghan jigap-i seonlyanghan simin-ui ttatteuthan sin-go deokbun-e juin pum-euro musahi doedora-oge doeeotseumnida.",
          "translation": "The lost precious wallet ended up safely returning to its owner's arms thanks to a warm report by a good-hearted citizen."
        }
      ],
      "mnemonics": [
        "사고 소식엔 '통제되었습니다', 분실물엔 '꽂혀 있고 전달되었습니다'! 실전 피동 완벽 구사!"
      ],
      "culturalNotes": [
        "한국의 언론 보도문에서는 사건 사고의 원인과 책임을 주관적으로 단정 짓지 않고 객관적 사실만을 신속히 알리기 위해 '도로가 통제되다', '용의자가 검거되다', '피해가 발생하다' 등 피동 구문을 전면 배치합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "분실물 센터에서 가방의 상태를 설명할 때 '필통이 가방에 끼워져 있다'를 나타내는 가장 올바른 표현은?",
          "options": [
            "앞주머니에 파란 필통이 꽂혀 있어요.",
            "앞주머니에 파란 필통이 꽂아 있어요.",
            "앞주머니에 파란 필통이 꽂혀져 있어요."
          ],
          "answerIndex": 0,
          "explanation": "'꽂다'의 단일 피동사 '꽂히다'에 완료 상태 '-어 있다'가 붙어 '꽂혀 있어요'가 정확합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "뉴스 보도문 중 피동과 원인 격조사가 가장 정확하게 쓰인 문장은 어느 것입니까?",
          "options": [
            "강한 태풍으로 인해 해안가 도로가 침수되었습니다. (원인(태풍으로 인해) + 피동 주어(도로가) + 피동 서술어(침수되었습니다)의 구성이 완벽합니다.",
            "강한 태풍으로 인해 해안가 도로를 침수되었습니다.",
            "강한 태풍으로 인해 해안가 도로가 침수하게 되었습니다."
          ],
          "answerIndex": 0,
          "explanation": "원인('태풍으로 인해') + 피동 주어('도로가') + 피동 서술어('침수되었습니다')의 구성이 완벽합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 문맥과 피동 표현이 가장 자연스러운 문장은?",
          "options": [
            "창문을 여니 멀리 산봉우리가 한눈에 보이고 맑은 바람이 느껴집니다. (보이다(단형 피동) + 느껴지다(장형 피동)의 배합이 완벽합니다.",
            "창문을 여니 멀리 산봉우리가 한눈에 보아지고 맑은 바람이 느끼어집니다.",
            "창문을 여니 멀리 산봉우리가 한눈에 보여지고 맑은 바람이 느껴지게 합니다."
          ],
          "answerIndex": 0,
          "explanation": "'보이다(단형 피동)' + '느껴지다(장형 피동)'의 배합이 완벽합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'저 멀리 산이 보여요'(The mountain is visible far over there)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "저 멀리 산이 보여요.",
            "저 멀리 산이 보여요"
          ],
          "explanation": "저 멀리 + 산이 + 보여요(보이다 + 어요) = 저 멀리 산이 보여요."
        }
      ]
    }
  },
  "ko-u20-l1": {
    "id": "ko-u20-l1",
    "subject": "korean",
    "unit": 20,
    "lessonNumber": 1,
    "title": "단형 사동 접미사 ('-이/히/리/기/우/추-')",
    "level": "B2",
    "objective": "동사나 형용사 어간에 결합하여 '남으로 하여금 어떤 동작이나 상태를 유발하게 함'을 나타내는 6대 사동 접미사의 결합 형태와 문장 구성을 마스터한다.",
    "presentation": {
      "explanation": "주어가 직접 동작을 하지 않고 남에게 그 동작을 하도록 시키거나 유발하는 것을 사동(Causative Voice)이라고 합니다. 타동사나 자동사, 형용사 어간에 파생 접미사 '-이/히/리/기/우/추-'를 붙여 단형 사동사를 생성합니다.\n\n1. 6대 사동 접미사 분류 및 규칙:\n- **-이-** (어간 끝모음 or 받침 ㄱ/ㅈ):\n  - 먹다 → **먹이다** (\"아기에게 이유식을 먹이다\")\n  - 보다 → **보이다** (\"친구에게 사진을 보여 주다\")\n  - 죽다 → **죽이다** (\"해충을 죽이다\")\n  - 줄다 → **줄이다** (\"지출을 줄이다\")\n- **-히-** (받침 ㄱ/ㄷ/ㅂ/ㅈ):\n  - 입다 → **입히다** [이피다] (\"아이에게 따뜻한 옷을 입히다\")\n  - 앉다 → **앉히다** [안치다] (\"손님을 소파에 앉히다\")\n  - 읽다 → **읽히다** [일키다] (\"어린이에게 동화책을 읽히다\")\n  - 눕다 → **눕히다** [누피다] (\"환자를 침대에 눕히다\")\n- **-리-** (받침 ㄹ or ㄷ 불규칙):\n  - 알다 → **알리다** (\"비상 연락망으로 소식을 알리다\")\n  - 살다 → **살리다** (\"희망의 불씨를 살리다\")\n  - 울다 → **울리다** (\"관객을 감동으로 울리다\")\n  - 듣다 → **들리다** (\"좋은 노래를 들려주다\")\n- **-기-** (받침 ㄴ/ㅁ/ㅅ/ㅈ/ㅊ):\n  - 웃다 → **웃기다** (\"개그맨이 관객을 크게 웃기다\")\n  - 맡다 → **맡기다** (\"짐을 보관소에 맡기다\")\n  - 신다 → **신기다** (\"아이에게 새 신발을 신기다\")\n  - 벗다 → **벗기다** (\"젖은 옷을 벗기다\")\n- **-우-** (모음 종결 어간):\n  - 자다 → **재우다** (자+이+우다), 깨다 → **깨우다**, 타다 → **태우다**, 서다 → **세우다** (서+이+우다)\n- **-추-**:\n  - 늦다 → **늦추다** (\"출발 일정을 늦추다\"), 맞다 → **맞추다** (\"시계를 맞추다\")",
      "examples": [
        {
          "target": "어머니께서는 매일 아침 일찍 일어나셔서 정성껏 만든 따뜻한 아침밥을 아이들에게 먹이십니다.",
          "reading": "Eomeoni-kkeseo-neun maeil achim iljjik ireonasyeoseo jeongseongkkeot mandeun ttatteuthan achimbap-eul aideul-ege meogisimnida.",
          "translation": "Mother gets up early every morning and feeds warm breakfast made with whole heart to the children ('먹다' → '먹이다' causative)."
        },
        {
          "target": "선생님께서는 학생들에게 다양한 인문학 고전 명작을 꾸준히 읽히며 사고력을 길러 주셨습니다.",
          "reading": "Seonsaengnim-kkeseo-neun haksaengdeul-ege dayanghan inmunhak gojeon myeongjak-eul kkujunhi ilkhimyeo sagoryeok-eul gilleo jusyeotseumnida.",
          "translation": "The teacher made the students read various classic humanities masterpieces continuously and cultivated their thinking skills ('읽다' → '읽히다')."
        },
        {
          "target": "아침 7시 정각이 되자마자 시끄럽게 울리는 자명종 알람 소리가 온 가족을 번쩍 깨웠습니다.",
          "reading": "Achim 7-si jeong-gag-i doejamaja sikkeureopge ullineun jamyeongjong allam sori-ga on gajok-eul beonjjeok kkaewotseumnida.",
          "translation": "As soon as 7 AM sharp arrived, the loudly ringing alarm clock sound woke up the entire family awake ('울리다' + '깨우다')."
        },
        {
          "target": "중요한 공지 사항과 변동된 회의 장소를 사내 메신저를 통해 전 직원에게 신속히 알렸습니다.",
          "reading": "Jung-yohan gongji sahang-gwa byeondongdoen hoeui jangso-reul sanae mesinjeo-reul tonghae jeon jigwon-ege sinsokhi allyeotseumnida.",
          "translation": "We promptly informed all employees of important announcements and the changed meeting venue via the corporate messenger ('알다' → '알리다')."
        }
      ],
      "mnemonics": [
        "먹이고(이), 입히고(히), 알리고(리), 웃기고(기), 깨우고(우), 늦추는(추) 6대 사동사!"
      ],
      "culturalNotes": [
        "한국어에서 사동사는 자녀 양육(밥을 먹이다, 옷을 입히다, 신을 신기다, 아이를 재우다)에서 부모의 직접적인 돌봄 행위를 나타낼 때 가장 빈번하고 자연스럽게 사용됩니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'자다(sleep)'의 올바른 사동사 형태(put to sleep)는 무엇입니까?",
          "options": [
            "재우다",
            "자이다",
            "자기다"
          ],
          "answerIndex": 0,
          "explanation": "'자다'의 사동사는 '-이우-'가 결합하여 축약된 '재우다'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'출발 시간을 뒤로 미루다'의 의미로 '늦다'의 사동사를 알맞게 활용한 문장은?",
          "options": [
            "회의 시작 일정을 한 시간 늦췄습니다. (늦다에 사동 접미사 -추-가 결합하여 늦추다(늦췄습니다)가 됩니다.",
            "회의 시작 일정을 한 시간 늦였습니다.",
            "회의 시작 일정을 한 시간 늦렸습니다."
          ],
          "answerIndex": 0,
          "explanation": "'늦다'에 사동 접미사 '-추-'가 결합하여 '늦추다(늦췄습니다)'가 됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 사동 접미사의 결합이 올바르게 짝지어진 것은?",
          "options": [
            "웃다 → 웃기다",
            "웃다 → 웃히다",
            "웃다 → 웃리다"
          ],
          "answerIndex": 0,
          "explanation": "'웃다'의 사동사는 '-기-'가 붙어 '웃기다'가 됩니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'아이에게 따뜻한 옷을 입혔어요'(I dressed the child in warm clothes)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "아이에게 따뜻한 옷을 입혔어요.",
            "아이에게 따뜻한 옷을 입혔어요"
          ],
          "explanation": "아이에게 + 따뜻한 옷을 + 입혔어요(입히다 + 었 + 어요) = 아이에게 따뜻한 옷을 입혔어요."
        }
      ]
    }
  },
  "ko-u20-l2": {
    "id": "ko-u20-l2",
    "subject": "korean",
    "unit": 20,
    "lessonNumber": 2,
    "title": "장형 통사적 사동 어미 ('-게 하다')",
    "level": "B2",
    "objective": "모든 용언에 자유롭게 결합하여 '대상에게 명령, 설득, 유도하여 행동이나 상태를 일으키게 함'을 나타내는 통사적 사동 구문 '-게 하다'를 체득한다.",
    "presentation": {
      "explanation": "'-게 하다'는 보조 용언 구성을 통해 장형 통사적 사동(Syntactic Causative)을 만듭니다. 단형 사동 접미사가 붙지 않는 대부분의 동사/형용사는 물론, 일반 동사에도 보편적으로 결합합니다.\n\n1. 결합 규칙:\n- 동사/형용사 어간 + **-게 하다**\n  - 기다리다 → **기다리게 하다** (\"오래 기다리게 해서 미안해요.\")\n  - 공부하다 → **공부하게 하다** (\"학생들을 도서관에서 자습하게 하다\")\n  - 화나다 → **화나게 하다** (\"상대방을 화나게 만들지 마세요.\")\n  - 편하다 → **편하게 하다** (\"손님이 편하게 쉴 수 있도록 배려하다\")\n\n2. 주어와 피사동자 격 표지 규칙:\n- 자동사문 사동: [사동주 -이/가/께서] + [피사동자 -을/를 or -에게] + [자동사-게 하다]\n  - 예: \"선생님께서 학생들을 자리에 앉게 하셨다.\"\n- 타동사문 사동: [사동주 -이/가] + [피사동자 -에게/한테] + [목적어 -을/를] + [타동사-게 하다]\n  - 예: \"선생님께서 학생들에게 영어 원서를 읽게 하셨다.\"",
      "examples": [
        {
          "target": "약속 시간에 늦어서 추운 밖에서 오래 기다리게 해 드려 정말 죄송합니다.",
          "reading": "Yaksok sigan-e neujeoseo chuun bak-eseo orae gidarige hae deuryeo jeongmal joesonghamnida.",
          "translation": "I am truly sorry for being late for the appointment and making you wait long in the cold outside ('기다리게 하다')."
        },
        {
          "target": "연구 소장님께서는 팀원들이 창의적인 아이디어를 자유롭게 제안하게 하셨습니다.",
          "reading": "Yeon-gu sojangnim-kkeseo-neun tim-wondeul-i chang-uijeogin aidieo-reul jayuroepge je-anhage hasyeotseumnida.",
          "translation": "The research director allowed and encouraged team members to freely propose creative ideas ('제안하게 하셨습니다')."
        },
        {
          "target": "부모님께서는 주말마다 자녀들이 스마트폰 대신 책을 가까이하게 하십니다.",
          "reading": "Bumonim-kkeseo-neun jumalmada janyeodeul-i seumateupon daesin chaek-eul gakkai-hage hasimnida.",
          "translation": "Every weekend, parents make their children stay close to books instead of smartphones ('가까이하게 하다')."
        },
        {
          "target": "철저한 위생 관리와 철저한 방역 지침 준수로 고객들이 안심하고 매장을 이용하게 했습니다.",
          "reading": "Cheoljeohan wisaeng gwanri-wa cheoljeohan bang-yeok jichim junsu-ro gogaekdeul-i ansimhago maejang-eul iyonghage haetseumnida.",
          "translation": "Through thorough hygiene management and strict quarantine guideline compliance, we enabled customers to use the store with peace of mind."
        }
      ],
      "mnemonics": [
        "기다리게 하고, 공부하게 하고, 편하게 하는 건 '-게 하다'! 모든 동사에 붙는 만능 사동!"
      ],
      "culturalNotes": [
        "사과할 때 \"오래 기다리게 해서 죄송합니다\"(Sorry for keeping you waiting)는 직장 비즈니스와 일상 모임에서 가장 품격 있게 사용하는 필수 정중 사동 표현입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "상대방을 밖에서 기다리게 한 것에 대해 정중히 사과하는 가장 알맞은 표현은?",
          "options": [
            "오래 기다리게 해서 죄송합니다.",
            "오래 기다려지게 해서 죄송합니다.",
            "오래 기다리게 돼서 죄송합니다."
          ],
          "answerIndex": 0,
          "explanation": "내가 상대방을 기다리도록 유발한 사동 상황이므로 '기다리게 해서 죄송합니다'가 올바릅니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'팀장님이 직원들에게 보고서를 다시 쓰도록 지시했다'를 '-게 하다' 구문으로 바르게 나타낸 문장은?",
          "options": [
            "팀장님께서 직원들에게 보고서를 다시 쓰게 하셨습니다.",
            "팀장님께서 직원들에게 보고서를 다시 써지게 하셨습니다.",
            "팀장님께서 직원들에게 보고서를 다시 쓰이게 되었습니다."
          ],
          "answerIndex": 0,
          "explanation": "사동주 '팀장님께서', 피사동자 '직원들에게', 사동 어미 '쓰게 하셨습니다'의 구조가 완벽합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 '-게 하다'의 문법적 설명으로 틀린 것은?",
          "options": [
            "오직 1음절 자동사에만 제한적으로 결합할 수 있다.",
            "동사와 형용사 어간에 결합하여 장형 사동을 구성한다.",
            "피사동자에게 동작을 하도록 지시, 허용, 유도하는 의미를 지닌다."
          ],
          "answerIndex": 0,
          "explanation": "'-게 하다'는 모든 동사와 형용사에 제약 없이 폭넓게 결합할 수 있는 통사적 사동 어미입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'오래 기다리게 해서 미안해요'(I'm sorry for making you wait long)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "오래 기다리게 해서 미안해요.",
            "오래 기다리게 해서 미안해요"
          ],
          "explanation": "오래 + 기다리게 해서(기다리다 + 게 하다 + 아서) + 미안해요 = 오래 기다리게 해서 미안해요."
        }
      ]
    }
  },
  "ko-u20-l3": {
    "id": "ko-u20-l3",
    "subject": "korean",
    "unit": 20,
    "lessonNumber": 3,
    "title": "한자어 사동 접미사 ('-시키다')와 오용 방지",
    "level": "B2",
    "objective": "한자어 동작 명사에 결합하여 사동 의미를 더하는 '-시키다'의 올바른 쓰임새를 익히고, 능동문에 불필요하게 남용되는 '-시키다' 오용을 교정한다.",
    "presentation": {
      "explanation": "'-시키다'는 일부 한자어 명사 뒤에 붙어 '남으로 하여금 그 행동을 하게 유발하다'라는 사동사를 만드는 파생 접미사입니다.\n\n1. 정당한 사동 접미사 '-시키다' (Legitimate Causative Usage):\n- 주어가 제3자에게 행동이나 변화를 유발할 때 결합:\n  - 이해(理解) → **이해시키다** (\"어려운 개념을 학생들에게 이해시키다\")\n  - 훈련(訓練) → **훈련시키다** (\"신입 사원을 강도 높게 훈련시키다\")\n  - 발전(發展) → **발전시키다** (\"기술력을 세계 최고 수준으로 발전시키다\")\n  - 진정(鎭靜) → **진정시키다** (\"흥분한 관중을 진정시키다\")\n  - 만족(滿足) → **만족시키다** (\"고객을 100% 만족시키다\")\n\n2. 중요: 불필요한 '-시키다' 남용 오류 교정 (Overuse Warning):\n- 주어가 스스로 행하는 일반 능동 동작에 습관적으로 '-시키다'를 붙이는 것은 번역투 오용(Ungrammatical Overuse)!\n- ❌ 제가 소개시켜 드릴게요 → ⭕ **제가 소개해 드릴게요**\n- ❌ 교육청에 등록시켰어요 → ⭕ **교육청에 등록했어요**\n- ❌ 물건을 주문시켰습니다 → ⭕ **물건을 주문했습니다**\n- ❌ 자동차를 주차시켰다 → ⭕ **자동차를 주차했다**",
      "examples": [
        {
          "target": "발표자는 복잡한 경제 통계 데이터를 시각화 자료를 활용하여 청중에게 알기 쉽게 이해시켰습니다.",
          "reading": "Balpyoja-neun bokjaphan gyeongje tonggye deiteo-reul sigakhwa jaryo-reul hwalyonghayeo cheongjung-ege algi swipge ihaesikyeotseumnida.",
          "translation": "The presenter made the complex economic statistical data easily understood by the audience using visualization materials ('이해시키다' causative)."
        },
        {
          "target": "기업은 혁신적인 기술 개발과 품질 혁신을 통해 국가 경쟁력을 크게 발전시켰습니다.",
          "reading": "Gieop-eun hyeoksinjeogin gisul gaebal-gwa pumjil hyeoksin-eul tonghae gukga gyeongjaengryeok-eul keuge baljeonsikyeotseumnida.",
          "translation": "Through innovative technology development and quality innovation, the enterprise significantly developed national competitiveness ('발전시키다')."
        },
        {
          "target": "새로 오신 외국인 교수님께 유능한 한국인 조교를 정중히 소개해 드렸습니다.",
          "reading": "Saero osin oeguk-in gyosunim-kke yuneung-han hanguk-in jogyo-reul jeongjung-hi sogaehae deuryeotseumnida.",
          "translation": "I politely introduced a competent Korean assistant to the newly arrived foreign professor (Correct '소개해 드리다', NOT *'소개시켜 드리다')."
        },
        {
          "target": "갑작스러운 사고 소식에 패닉에 빠진 승객들을 차분한 목소리로 신속하게 진정시켰습니다.",
          "reading": "Gapjakeuseureoun sageo sosik-e paenik-e ppajin seunggaekdeul-eul chabunhan moksori-ro sinsokhage jinjeongsikyeotseumnida.",
          "translation": "With a calm voice, we promptly calmed down the passengers who fell into panic at the sudden accident news ('진정시키다')."
        }
      ],
      "mnemonics": [
        "남을 이해시키고 발전시키는 건 '-시키다'! 내가 직접 소개할 땐 '소개하다'!"
      ],
      "culturalNotes": [
        "한국어 표준 화법에서는 '소개시켜 줄게', '입원시켰어' 같은 불필요한 사동 접미사('-시키다') 남용을 순화 대상 1호로 지정하여 바른말('소개해 줄게', '입원했어/입원하게 했어') 쓰기를 권장합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "친구에게 새로운 동료를 인사시킬 때 가장 바른 표준어 표현은 무엇입니까?",
          "options": [
            "제 친구를 소개해 드릴게요.",
            "제 친구를 소개시켜 드릴게요.와 오용 방지",
            "제 친구를 소개시키어 드릴게요.와 오용 방지"
          ],
          "answerIndex": 0,
          "explanation": "주어가 직접 대상을 소개하는 능동 동작이므로 '소개해 드릴게요'가 바른 표준어입니다 (*'소개시켜'는 남용 오류)."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "사동 접미사 '-시키다'가 문맥상 가장 정확하고 바르게 사용된 문장은 어느 것입니까?",
          "options": [
            "교수님께서 명쾌한 논리로 학생들을 깊이 이해시키셨습니다. (이해시키다는 남으로 하여금 이해하게 만드는 타당한 사동사입니다 (주문하다/주차하다는 능동이 바른말).",
            "제가 점심 메뉴로 맛있는 비빔밥을 주문시켰습니다.와 오용 방지",
            "퇴근길에 아파트 지하 주차장에 차를 안전하게 주차시켰습니다.와 오용 방지"
          ],
          "answerIndex": 0,
          "explanation": "'이해시키다'는 남으로 하여금 이해하게 만드는 타당한 사동사입니다 (주문하다/주차하다는 능동이 바른말)."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 '-시키다'의 불필요한 오용이 없는 완벽한 문장은?",
          "options": [
            "새 학기를 맞아 전공 과목 수강 신청을 마쳤습니다.",
            "새 학기를 맞아 전공 과목 수강 신청을 접수시켰습니다.와 오용 방지",
            "새 학기를 맞아 전공 과목 수강 신청을 완료시켰습니다.와 오용 방지"
          ],
          "answerIndex": 0,
          "explanation": "자신이 직접 행한 동작이므로 '수강 신청을 마쳤습니다/신청했습니다'가 가장 바른 표현입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'흥분한 사람들을 진정시켰어요'(I calmed down the excited people)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "흥분한 사람들을 진정시켰어요.",
            "흥분한 사람들을 진정시켰어요"
          ],
          "explanation": "흥분한 사람들을 + 진정시켰어요(진정시키다 + 었 + 어요) = 흥분한 사람들을 진정시켰어요."
        }
      ]
    }
  },
  "ko-u20-l4": {
    "id": "ko-u20-l4",
    "subject": "korean",
    "unit": 20,
    "lessonNumber": 4,
    "title": "직접 사동 vs 간접 사동 및 피동/사동 동형어 구별",
    "level": "B2",
    "objective": "단형 접미사 사동(직접 참여)과 장형 '-게 하다'(간접 지시)의 미묘한 의미 차이를 분별하고, 형태가 동일한 피동/사동 동음이의어(보이다, 들리다, 안기다)를 완벽히 식별한다.",
    "presentation": {
      "explanation": "사동문은 표현 방식에 따라 주어의 직접적 개입 여부가 달라지며, 피동사와 사동사의 형태가 같은 동음이의어(Homonyms)를 문맥과 격조사를 통해 판별해야 합니다.\n\n1. 직접 사동(Direct) vs 간접 사동(Indirect):\n- **단형 접미사 사동 (직접 사동)**: 주어가 신체적으로 직접 참여하여 동작을 유발함\n  - \"어머니가 아기에게 옷을 입혔다.\" (직접 손으로 아기 옷을 입혀 줌)\n- **장형 '-게 하다' 사동 (간접 사동)**: 주어가 말이나 지시로 동작을 유도함\n  - \"어머니가 아이에게 옷을 입게 했다.\" (아이 스스로 옷을 입도록 타이르거나 시킴)\n\n2. 피동 vs 사동 동형어 구별 공식 (Disambiguating Homonyms):\n- **보이다**:\n  - 피동 (주어+이/가): \"저 멀리 바다가 **보인다**.\" (Sea is visible)\n  - 사동 (목적어+을/를): \"친구에게 내 여권을 **보였다**.\" (Show passport to friend)\n- **들리다**:\n  - 피동: \"밖에서 음악 소리가 **들린다**.\" (Sound is heard)\n  - 사동: \"아이에게 무거운 짐을 **들렸다**.\" (Make child hold baggage / 들다+리+다)\n- **안기다**:\n  - 피동: \"아기가 엄마 품에 **안겼다**.\" (Baby was embraced in mother's arms)\n  - 사동: \"어머니가 아기에게 인형을 **안겼다**.\" (Mother placed doll in baby's hands)",
      "examples": [
        {
          "target": "어머니께서 손수 아기에게 따뜻한 외투를 입히셨습니다. (직접 사동)",
          "reading": "Eomeoni-kkeseo sonsu agi-ege ttatteuthan oetu-reul iphisyeotseumnida.",
          "translation": "Mother personally dressed the baby in a warm coat (Direct causative: physically dressing the baby by hand)."
        },
        {
          "target": "선생님께서는 학생 스스로 교복을 단정하게 입게 하셨습니다. (간접 사동)",
          "reading": "Seonsaengnim-kkeseo-neun haksaeng seuseuro gyobok-eul danjeonghage ipge hasyeotseumnida.",
          "translation": "The teacher had the students dress tidily in their uniforms themselves (Indirect causative: instructing/allowing)."
        },
        {
          "target": "공항 출입국 심사대에서 심사관에게 여권과 항공권을 보여 주었습니다. (사동)",
          "reading": "Gonghang churipguk simsadai-eseo simsagwan-ege yeogwon-gwa hang-gonggwon-eul boyeo jueotseumnida.",
          "translation": "I showed my passport and flight ticket to the inspector at the airport immigration counter (Causative: object '여권과 항공권을')."
        },
        {
          "target": "맑은 가을 하늘 아래로 북한산 백운대 봉우리가 시원스레 보입니다. (피동)",
          "reading": "Malgeun gaeul haneul arae-ro Bukhansan Baegundae bong-uri-ga siwonseure boimnida.",
          "translation": "Under the clear autumn sky, Bukhansan Baegundae peak is refreshingly visible (Passive: subject '봉우리가')."
        }
      ],
      "mnemonics": [
        "직접 손으로 입히면 '입히다', 스스로 입게 시키면 '입게 하다'! 목적어가 있으면 사동 '보여주다'!"
      ],
      "culturalNotes": [
        "자녀 교육에서 자립심을 강조할 때는 '숙제를 시키다/먹이다' 같은 직접 사동보다는 '스스로 공부하게 하다/정리하게 하다'처럼 간접 사동('-게 하다') 표현을 권장합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "다음 중 '보이다'가 사동사(to show)로 쓰인 문장은 어느 것입니까?",
          "options": [
            "친구에게 어제 찍은 가족사진을 보여 주었습니다. (목적어(가족사진을)를 취하고 남에게 보게 만드는 사동 의미이므로 보여 주었습니다가 사동사입니다.",
            "맑은 날에는 창밖으로 남산타워가 똑똑히 보입니다.",
            "먼 바다 위로 수평선이 아련하게 보입니다."
          ],
          "answerIndex": 0,
          "explanation": "목적어('가족사진을')를 취하고 남에게 보게 만드는 사동 의미이므로 '보여 주었습니다'가 사동사입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'아버지가 아이에게 신발을 스스로 신도록 유도했다'를 나타내는 간접 사동 표현은?",
          "options": [
            "아버지가 아이에게 신발을 스스로 신게 하셨다. (스스로 신도록 지시/유도하는 간접 사동은 -게 하다(신게 하셨다)입니다.",
            "아버지가 아이에게 신발을 직접 신기셨다.",
            "아버지가 아이에게 신발이 신겨졌다."
          ],
          "answerIndex": 0,
          "explanation": "스스로 신도록 지시/유도하는 간접 사동은 '-게 하다(신게 하셨다)'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 직접 신체적으로 아기에게 음식을 떠먹이는 직접 사동 문장은?",
          "options": [
            "어머니가 아기에게 이유식을 먹이셨다.",
            "어머니가 아기에게 이유식을 먹게 하셨다.",
            "어머니가 아기에게 이유식을 먹도록 지시하셨다."
          ],
          "answerIndex": 0,
          "explanation": "단형 사동 접미사 '먹이다'가 직접 음식을 입에 넣어 주는 직접 사동을 나타냅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'친구에게 사진을 보여 주었어요'(I showed the photo to my friend)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "친구에게 사진을 보여 주었어요.",
            "친구에게 사진을 보여 주었어요"
          ],
          "explanation": "친구에게 + 사진을 + 보여 주었어요(보이다 + 어 주다 + 었어요) = 친구에게 사진을 보여 주었어요."
        }
      ]
    }
  },
  "ko-u20-l5": {
    "id": "ko-u20-l5",
    "subject": "korean",
    "unit": 20,
    "lessonNumber": 5,
    "title": "자녀 양육, 업무 지시 및 교육 훈련 실전 사동 담화",
    "level": "B2",
    "objective": "단형 사동, 장형 사동('-게 하다'), 한자어 사동('-시키다')을 총망라하여 직장 업무 분장, 자녀 돌봄, 교육 훈련 실전 담화를 능숙하게 구사한다.",
    "presentation": {
      "explanation": "사동 표현은 직장에서 상사가 부하 직원에게 업무를 지시하고 교육할 때, 가정에서 부모가 아이를 돌보고 좋은 습관을 기르게 할 때 핵심 어법으로 사용됩니다.\n\n1. 직장 신입 사원 직무 교육 및 업무 분장 실전 담화 모델:\n- 팀장: 지훈 씨, 이번 신규 프로젝트 기획안 검토는 민우 씨에게 먼저 맡겨 보세요.\n- 선임: 네, 팀장님. 제가 민우 씨에게 시장 조사 데이터를 먼저 분석하게 하겠습니다.\n- 팀장: 좋아요. 그리고 다음 주 프레젠테이션 발표 연습도 실전처럼 강도 높게 훈련시키세요.\n- 선임: 알겠습니다. 발표 자료의 핵심 메시지를 청중에게 명확히 이해시키도록 철저히 지도하겠습니다.\n- 팀장: 기대가 크네요. 필요한 참고 자료가 있으면 민우 씨가 언제든 열람할 수 있게 조치해 주세요.\n- 선임: 네, 사내 공유 폴더 접근 권한을 오늘 바로 승인받게 하겠습니다.",
      "examples": [
        {
          "target": "퇴근 후 집에 돌아와서 아이를 따뜻한 물로 씻기고, 맛있는 저녁을 먹인 후 포근한 침대에 눕혀 재웠습니다.",
          "reading": "Toegeun hu jip-e dorawaseo ai-reul ttatteuthan mul-ro ssitgigo, masitneun jeonyeok-eul meogin hu pogeunhan chimdae-e nuphyeo jaewotseumnida.",
          "translation": "After returning home from work, I washed the child with warm water, fed them delicious dinner, and put them to bed to sleep ('씻기다' + '먹이다' + '눕히다' + '재우다')."
        },
        {
          "target": "신임 감독관은 모든 훈련생들에게 안전 수칙을 완벽히 숙지하게 하고 강도 높은 훈련을 실시했습니다.",
          "reading": "Sin-im gamdokgwan-eun modeun hullyeonsaengdeul-ege anjeon suchik-eul wanbyeokhi sukjihage hago gangdo nopeun hullyeon-eul silssihaetseumnida.",
          "translation": "The new supervisor had all trainees master the safety rules perfectly and conducted high-intensity training ('숙지하게 하다')."
        },
        {
          "target": "새로운 마케팅 전략은 까다로운 현대 소비자들의 다양한 기호와 눈높이를 충분히 만족시켰습니다.",
          "reading": "Saeroun maketing jeonlyak-eun kkadareoun hyeondae sobijadeul-ui dayanghan giho-wa nunnop-i-reul chungbunhi manjoksikyeotseumnida.",
          "translation": "The new marketing strategy sufficiently satisfied the diverse tastes and high standards of discerning modern consumers ('만족시키다')."
        },
        {
          "target": "중요한 비즈니스 미팅 전에는 휴대전화 벨소리를 무음으로 바꾸어 회의 진행을 방해하지 않게 해야 합니다.",
          "reading": "Jung-yohan bijeuniseu miting jeon-eneun hyudaejeonhwa belsori-reul mueum-euro bakkwo hoeui jinhaeng-eul banghaehaji anhge haeya hamnida.",
          "translation": "Before an important business meeting, one must change the mobile phone ringtone to silent mode so as not to disrupt the meeting proceeding ('방해하지 않게 하다')."
        }
      ],
      "mnemonics": [
        "씻기고 먹이고 재우는 부모의 손길, 훈련시키고 숙지하게 하는 상사의 지시! 사동 담화 완성!"
      ],
      "culturalNotes": [
        "한국의 직장 문화에서는 업무를 지시할 때 일방적인 강제 명령보다는 \"~씨가 한번 맡아보게 해 주세요\", \"검토하게 하겠습니다\"처럼 완곡하고 세련된 사동 표현을 사용하여 상호 존중을 나타냅니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "신입 사원에게 보고서 초안 작성을 맡기겠다고 상사에게 보고하는 가장 세련된 표현은?",
          "options": [
            "제가 신입 사원에게 초안을 먼저 작성하게 하겠습니다.",
            "제가 신입 사원에게 초안을 먼저 작성되게 하겠습니다.",
            "제가 신입 사원에게 초안을 먼저 작성시켜지게 하겠습니다."
          ],
          "answerIndex": 0,
          "explanation": "신입 사원으로 하여금 작성하도록 유도/지시하는 것이므로 '작성하게 하겠습니다'가 가장 자연스럽고 품격 있습니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "자녀 돌봄 사동사(씻기다, 먹이다, 재우다)가 모두 바르게 활용된 문장은 어느 것입니까?",
          "options": [
            "아이를 깨끗이 씻기고 밥을 먹인 후 포근하게 재웠습니다.",
            "아이를 깨끗이 씻어지고 밥을 먹게 된 후 포근하게 자였습니다.",
            "아이를 깨끗이 씻게 되고 밥을 먹히게 한 후 포근하게 재워졌습니다."
          ],
          "answerIndex": 0,
          "explanation": "'씻기다', '먹이다', '재우다'의 단형 직접 사동사들이 완벽하게 어우러진 문장입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 대화의 빈칸에 들어갈 가장 알맞은 사동 표현은? \"A: 민수 씨에게 그 일을 맡기셨나요? B: 네, 민수 씨가 내일까지 기획안을 _____ 했습니다.\"",
          "options": [
            "마무리하게 (민수 씨가 직접 마무리하도록 지시한 것이므로 마무리하게(하다)가 정확합니다.",
            "마무리되게",
            "마무리시키어지게"
          ],
          "answerIndex": 0,
          "explanation": "민수 씨가 직접 마무리하도록 지시한 것이므로 '마무리하게(하다)'가 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'아이를 침대에 눕혀 재웠어요'(I laid the child on the bed and put them to sleep)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "아이를 침대에 눕혀 재웠어요.",
            "아이를 침대에 눕혀 재웠어요"
          ],
          "explanation": "아이를 + 침대에 + 눕혀(눕히다 + 어) + 재웠어요(재우다 + 었 + 어요) = 아이를 침대에 눕혀 재웠어요."
        }
      ]
    }
  },
  "ko-u21-l1": {
    "id": "ko-u21-l1",
    "subject": "korean",
    "unit": 21,
    "lessonNumber": 1,
    "title": "기본 조건 ('-(으)면')과 완료 전제 ('-(았/었)으면')",
    "level": "B2",
    "objective": "일반적 가설 및 반복적 법칙을 나타내는 '-(으)면'과 앞선 행위의 완료나 화자의 간절한 희망을 전제하는 '-(았/었)으면 (좋겠다)'의 결합 규칙을 완성한다.",
    "presentation": {
      "explanation": "'-(으)면'은 어떤 사실이나 상황을 조건으로 설정할 때 사용하는 가장 기초적이면서도 핵심적인 연결어미입니다.\n\n1. 결합 규칙:\n- 모음 or 받침 ㄹ 종결 → **-면** (가다 → **가면**, 살다 → **살면**, 만들다 → **만들면**)\n- ㄹ 제외 자음 받침 종결 → **-으면** (먹다 → **먹으면**, 닫다 → **닫으면**, 찾다 → **찾으면**)\n- ㄷ 불규칙: 듣다 → **들으면**, ㅂ 불규칙: 돕다 → **도우면** / 춥다 → **추우면**\n\n2. '-(으)면' vs '-(았/었)으면'의 화용적 차이:\n- 단순 조건 (General / Future Conditional): \"비가 오면 우산을 쓰세요.\" / \"봄이 오면 따뜻해집니다.\"\n- 과거 완료 전제 (Completed Precondition): \"숙제를 다 끝냈으면 이제 나가서 놀아라.\"\n- 간절한 소망/희망 (Optative Desire): \"이번 주말에는 날씨가 맑았으면 좋겠어요.\" (\"I wish the weather were clear this weekend.\")",
      "examples": [
        {
          "target": "아침에 일찍 일어나서 가벼운 스트레칭을 꾸준히 하면 하루 종일 몸과 마음이 상쾌합니다.",
          "reading": "Achim-e iljjik ireonaseo gabyeoun seuteureching-eul kkujunhi hamyeon haru jong-il mom-gwa ma-eum-i sangkwaehamnida.",
          "translation": "If you wake up early in the morning and do light stretching continuously ('하면'), your body and mind feel refreshed all day."
        },
        {
          "target": "오늘 회의에 필요한 발표 자료 준비가 모두 끝났으면 3층 대회의실로 이동합시다.",
          "reading": "Oneul hoeui-e piryohan balpyo jaryo junbi-ga modu kkeutnatssumeon 3-cheung daehoeuisil-ro idonghapssida.",
          "translation": "If the preparation of presentation materials needed for today's meeting is completely finished ('끝났으면'), let's move to the 3rd floor main conference room."
        },
        {
          "target": "다가오는 이번 여름휴가에는 가족들과 함께 푸른 동해 바다로 여행을 갈 수 있었으면 좋겠습니다.",
          "reading": "Dagaoneun ibeon yeoreumhyuga-eneun gajokdeul-gwa hamkke pureun Donghae bada-ro yeohaeng-eul gal su isseotseumeon joketseumnida.",
          "translation": "I hope/wish we could go on a trip to the blue East Sea with family during this upcoming summer vacation ('갈 수 있었으면 좋겠습니다')."
        },
        {
          "target": "모르는 한국어 어휘나 문법이 있으면 언제든지 선생님께 주저하지 말고 질문하세요.",
          "reading": "Moreuneun hanguk-eo eohwi-na munbeop-i isseumyeon eonjedeunji seonsaengnim-kke jujeohaji malgo jilmunhaseyo.",
          "translation": "If there are Korean vocabulary words or grammar points you do not know ('있으면'), ask the teacher anytime without hesitating."
        }
      ],
      "mnemonics": [
        "조건은 '-(으)면', 이미 끝났으면 '-(았/었)으면', 간절한 소망엔 '-(았/었)으면 좋겠다'!"
      ],
      "culturalNotes": [
        "한국인들은 자신의 바람을 직설적으로 요구하지 않고 \"내일 비가 안 왔으면 좋겠어요\", \"일찍 끝났으면 좋겠네요\"처럼 가정 소망형 어미를 통해 완곡하고 부드럽게 표현합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'듣다(listen)'의 올바른 조건형 결합 형태는 무엇입니까?",
          "options": [
            "들으면",
            "듣으면면')과 완료 전제 ('-(았/었)으면'",
            "듣면면')과 완료 전제 ('-(았/었)으면'"
          ],
          "answerIndex": 0,
          "explanation": "'듣다'는 'ㄷ 불규칙' 동사이므로 모음 앞 'ㄹ'로 바뀌어 '들으면'이 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'주말에 푹 쉴 수 있기를 간절히 바란다'를 가장 자연스러운 소망 문장으로 완성한 것은?",
          "options": [
            "이번 주말에는 푹 쉴 수 있었으면 좋겠습니다. (화자의 간절한 희망을 나타내는 완곡한 표현은 -(았/었)으면 좋겠습니다입니다.",
            "이번 주말에는 푹 쉴 수 있으면 싫겠습니다.면')과 완료 전제 ('-(았/었)으면'",
            "이번 주말에는 푹 쉴 수 있어지면 되겠습니다.면')과 완료 전제 ('-(았/었)으면'"
          ],
          "answerIndex": 0,
          "explanation": "화자의 간절한 희망을 나타내는 완곡한 표현은 '-(았/었)으면 좋겠습니다'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 과거 완료 전제 조건으로 가장 자연스러운 문장은?",
          "options": [
            "점심 식사를 다 마쳤으면 커피 한잔하러 갈까요?",
            "점심 식사를 다 마치면 커피 한잔하러 갔었어요?면')과 완료 전제 ('-(았/었)으면'",
            "점심 식사를 다 마칠수록 커피 한잔하러 가요?면')과 완료 전제 ('-(았/었)으면'"
          ],
          "answerIndex": 0,
          "explanation": "식사가 완료되었음을 전제로 다음 행동을 제안하는 문장이므로 '마쳤으면'이 적절합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'궁금한 점이 있으면 물어보세요'(If you have questions, please ask)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "궁금한 점이 있으면 물어보세요.",
            "궁금한 점이 있으면 물어보세요"
          ],
          "explanation": "궁금한 점이 + 있으면(있다 + 으면) + 물어보세요 = 궁금한 점이 있으면 물어보세요."
        }
      ]
    }
  },
  "ko-u21-l2": {
    "id": "ko-u21-l2",
    "subject": "korean",
    "unit": 21,
    "lessonNumber": 2,
    "title": "과거 사실의 반대 가정 및 후회 ('-(았/었)더라면')",
    "level": "B2",
    "objective": "과거에 이미 일어난 사실과 반대되는 가상의 상황을 전제하여 후회, 탄식, 또는 천만다행의 안도감을 표현하는 '-(았/었)더라면' 구문을 마스터한다.",
    "presentation": {
      "explanation": "'-(았/었)더라면'은 과거에 실현되지 않은 일을 반대로 가정(Counterfactual Past Hypothesis)할 때 사용하며, 뒷절에는 주로 후회, 아쉬움, 혹은 다행스러움을 나타내는 '-(으)ㄹ 텐데', '-(으)ㄹ 뻔했다', '-(았/었)을 것이다'가 호응합니다.\n\n1. 결합 규칙:\n- 양성 모음 (ㅏ, ㅗ) → **-았더라면** (가다 → **갔더라면**, 보다 → **봤더라면**, 알다 → **알았더라면**)\n- 음성 모음 (ㅓ, ㅜ, ㅡ, ㅣ 등) → **-었더라면** (먹다 → **먹었더라면**, 서두르다 → **서둘렀더라면**)\n- 하다 동사 → **-했더라면** (공부하다 → **공부했더라면**, 준비하다 → **준비했더라면**)\n\n2. 주요 호응 패턴과 심리적 태도:\n- 후회 및 아쉬움: \"그때 그 아파트를 샀더라면 지금 큰 부자가 되었을 텐데...\"\n- 아찔한 위기 모면 (안도감): \"안전벨트를 매지 않았더라면 크게 다칠 뻔했어요.\"\n- 인과적 반대 결과: \"비가 오지 않았더라면 야외 소풍을 취소하지 않았을 것입니다.\"",
      "examples": [
        {
          "target": "학창 시절에 외국어 공부를 조금만 더 열심히 했더라면 지금 훨씬 더 유창하게 말할 수 있었을 텐데요.",
          "reading": "Hakchang sijeol-e oeguk-eo gongbu-reul jogeumman deo yeolsimhi haetdeoramyeon jigeum hwolssin deo yuchanghage malhal su isseosseul tende-yo.",
          "translation": "If I had studied foreign languages just a little harder during my school days ('공부했더라면'), I could have spoken much more fluently now ('있었을 텐데요')."
        },
        {
          "target": "골든타임 안에 구급차가 신속히 도착하지 않았더라면 위급한 환자의 생명이 위험했을 것입니다.",
          "reading": "Goldeuntaim an-e gugeupcha-ga sinsokhi dochakhaji anatdeoramyeon wigeubhan hwanja-ui saengmyeong-i wiheomhaesseul geosimnida.",
          "translation": "If the ambulance had not arrived promptly within the golden time, the critical patient's life would have been in danger."
        },
        {
          "target": "서둘러 우산을 챙겨 나오지 않았더라면 갑작스러운 소나기에 옷을 흠뻑 다 젖을 뻔했습니다.",
          "reading": "Seodulleo usan-eul chaeng-gyeo na-oji anatdeoramyeon gapjakeuseureoun sonagi-e os-eul heumpbeok da jeojeul ppeonhaetseumnida.",
          "translation": "If I had not hurried to bring an umbrella ('챙겨 나오지 않았더라면'), my clothes almost got completely soaked in the sudden rain shower."
        },
        {
          "target": "그 당시 친구의 진심 어린 충고를 귀담아들었더라면 그런 어처구니없는 실수는 범하지 않았을 텐데.",
          "reading": "Geu dangsi chin-gu-ui jinsim eorin chung-go-reul gwidamadureotdeoramyeon geureon eocheogunieopneun silsu-neun beomhaji anhasseul tende.",
          "translation": "If I had listened carefully to my friend's heartfelt advice at that time, I would not have committed such an absurd mistake."
        }
      ],
      "mnemonics": [
        "과거 반대 가정엔 '-(았/었)더라면', 후회할 땐 '-(으)ㄹ 텐데', 안도할 땐 '-(으)ㄹ 뻔했다'!"
      ],
      "culturalNotes": [
        "한국인들은 지나간 기회에 대한 아쉬움을 회고할 때 '-(았/었)더라면'을 자주 쓰며, 반대로 큰 사고를 피했을 때는 '조상님이 도우셨다', '정말 다행이다'라며 가슴을 쓸어내립니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'그때 표를 미리 예매했더라면' 뒤에 가장 자연스럽게 어울리는 후회의 호응 구문은?",
          "options": [
            "매진되어 헛걸음하지 않았을 텐데요. (-(았/었)더라면 과거 반대 가정 뒤에는 과거 추측/후회 -(았/었)을 텐데요가 자연스럽게 호응합니다.",
            "매진되어 헛걸음하게 되었습니다.더라면'",
            "매진되어 헛걸음할 수밖에 없습니다.더라면'"
          ],
          "answerIndex": 0,
          "explanation": "'-(았/었)더라면' 과거 반대 가정 뒤에는 과거 추측/후회 '-(았/었)을 텐데요'가 자연스럽게 호응합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'안전모를 쓰지 않았다면 큰 부상을 입었을 것이다'를 가장 실감 나게 표현한 문장은?",
          "options": [
            "안전모를 쓰지 않았더라면 머리를 크게 다칠 뻔했습니다. (과거 반대 가정 않았더라면 + 아찔한 모면 -(으)ㄹ 뻔했다의 조합이 완벽합니다.",
            "안전모를 쓰지 않더라도 머리를 크게 다치게 되었습니다.더라면'",
            "안전모를 쓰지 않는 한 머리를 크게 다쳤을 것입니다.더라면'"
          ],
          "answerIndex": 0,
          "explanation": "과거 반대 가정 '않았더라면' + 아찔한 모면 '-(으)ㄹ 뻔했다'의 조합이 완벽합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 '-(았/었)더라면'의 쓰임새가 문법적으로 가장 알맞은 것은?",
          "options": [
            "조금만 일찍 출발했더라면 기차를 놓치지 않았을 텐데 아쉽습니다.",
            "조금만 일찍 출발하더라면 기차를 놓치지 않을 텐데 아쉽습니다.더라면'",
            "조금만 일찍 출발했더면 기차를 놓치지 않았을 텐데 아쉽습니다.더라면'"
          ],
          "answerIndex": 0,
          "explanation": "과거 사실의 반대 가정은 '출발했더라면' + '놓치지 않았을 텐데'가 정확합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'열심히 공부했더라면 합격했을 텐데요'(If I had studied hard, I would have passed)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "열심히 공부했더라면 합격했을 텐데요.",
            "열심히 공부했더라면 합격했을 텐데요"
          ],
          "explanation": "열심히 + 공부했더라면 + 합격했을 텐데요(합격하다 + 었 + 을 텐데요) = 열심히 공부했더라면 합격했을 텐데요."
        }
      ]
    }
  },
  "ko-u21-l3": {
    "id": "ko-u21-l3",
    "subject": "korean",
    "unit": 21,
    "lessonNumber": 3,
    "title": "조건의 한계 ('-(으)ㄴ/는 한')과 조건 전제 ('-거든')",
    "level": "B2",
    "objective": "'어떤 조건이 유지되는 한도 내에서만'을 규정하는 '-(으)ㄴ/는 한'과 명령·청유문과 주로 어울려 '만약 ~하거든'을 나타내는 '-거든'을 습득한다.",
    "presentation": {
      "explanation": "1. '-(으)ㄴ/는 한' (As long as / Unless):\n- 앞 절의 상태나 조건이 유효하게 지속되는 한도 내에서 뒤 절의 내용이 성립함을 나타냅니다.\n- 결합: 동사 현재 → **-는 한**, 형용사 → **-(으)ㄴ 한**, 과거 → **-(으)ㄴ 한**\n  - \"내가 살아 숨 쉬는 한(동사) 결코 꿈을 포기하지 않겠습니다.\"\n  - \"건강이 허락하는 한(동사) 봉사 활동을 계속할 생각입니다.\"\n  - \"특별한 사정이 없는 한(형용사 없다) 정시에 시작합니다.\"\n\n2. '-거든' (If indeed / Once... then do):\n- 구어체에서 조건이나 가정을 나타내며, 특히 뒤 절에 **명령(-(으)세요, -(으)십시오)**, **청유(-(으)ㅂ시다, -자)**, **약속(-(으)ㄹ게)** 문장이 필연적으로 호응합니다.\n- ⚠️ 주의: 뒤 절에 단순 평서문 과거형(*-았어요)은 올 수 없음!\n  - ⭕ \"서울에 도착하거든 꼭 전화해라.\"\n  - ⭕ \"시간이 남거든 차나 한잔하자.\"\n  - ❌ *서울에 도착하거든 전화를 걸었습니다.",
      "examples": [
        {
          "target": "천재지변이나 특별한 긴급 사정이 발생하지 않는 한, 이번 행사는 예정대로 진행됩니다.",
          "reading": "Cheonjaejibyeon-ina teukbyeolhan gin-geup sajeong-i balsaenghaji anhneun han, ibeon haengsa-neun yejeongdaero jinhaengdoemnida.",
          "translation": "Unless natural disasters or special emergency circumstances occur ('발생하지 않는 한'), this event will proceed as scheduled."
        },
        {
          "target": "퇴근길에 마트에 들르거든 내일 아침에 마실 우유와 신선한 계란 좀 사다 주세요.",
          "reading": "Toegeungil-e mateu-e deulleugeodeun naeil achim-e masil uyu-wa sinseonhan gyeran jom sada juseyo.",
          "translation": "If you happen to drop by the supermarket on your way home from work ('들르거든'), please buy some milk and fresh eggs for tomorrow morning."
        },
        {
          "target": "양측이 서로 양보하고 대화로 해결하려는 의지를 가지는 한 평화적 합의는 가능합니다.",
          "reading": "Yangcheuk-i seoro yangbo-hago daehwa-ro haegyeolharyeoneun uiji-reul gajineun han pyeonghwajeok hab-ui-neun ganeunghamnida.",
          "translation": "As long as both sides have the willingness to concede to each other and resolve through dialogue ('가지는 한'), a peaceful agreement is possible."
        },
        {
          "target": "혹시 회의 중에 이해가 잘 안 가거나 의문점이 생기거든 주저 없이 손을 들고 질문하세요.",
          "reading": "Hoksi hoeui jung-e ihaega jal an gageona uimunjeom-i saeng-gigeodeun jujeo eop-si son-eul deulgo jilmunhaseyo.",
          "translation": "If by chance something is not understood or a question arises during the meeting ('생기거든'), raise your hand and ask without hesitation."
        }
      ],
      "mnemonics": [
        "조건의 한계는 '~는 한(As long as)', 명령·청유 부르는 조건은 '~거든(If... do)'!"
      ],
      "culturalNotes": [
        "한국어에서 '-거든'은 조건문뿐만 아니라 문장 끝에서 이유를 덧붙이는 종결어미(\"나 지금 바쁘거든!\")로도 쓰이므로 문맥상 어미의 위치를 잘 파악해야 합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'-거든' 뒤에 올 수 있는 가장 자연스러운 문장 유형은 무엇입니까?",
          "options": [
            "집에 도착하거든 바로 연락해 주세요. (명령/요청)",
            "집에 도착하거든 바로 연락을 했습니다. (과거 서술)ㄴ/는 한')과 조건 전제 ('-거든'",
            "집에 도착하거든 어제 비가 내렸습니다. (과거 사실)ㄴ/는 한')과 조건 전제 ('-거든'"
          ],
          "answerIndex": 0,
          "explanation": "'-거든' 조건 뒤에는 명령, 요청, 청유문이 호응하는 것이 문법적 규칙입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'별다른 문제가 없다면 원래 계획대로 추진한다'를 '-(으)ㄴ/는 한'으로 가장 정확하게 표현한 문장은?",
          "options": [
            "특별한 문제가 없는 한, 원래 계획대로 추진할 것입니다.",
            "특별한 문제가 없는 한, 원래 계획대로 추진해 주세요.ㄴ/는 한')과 조건 전제 ('-거든'",
            "특별한 문제가 없었던 한, 원래 계획대로 추진했거든.ㄴ/는 한')과 조건 전제 ('-거든'"
          ],
          "answerIndex": 0,
          "explanation": "조건의 범위를 규정하는 '없는 한' + 평서문 의지 '추진할 것입니다'의 결합이 가장 적합합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 '-거든'의 문법적 제약에 맞지 않는 비문(틀린 문장)은?",
          "options": [
            "친구가 오거든 함께 맛있는 점심을 먹었습니다. (-거든 뒤에는 과거 완료 평서문(먹었습니다)이 올 수 없습니다.",
            "친구가 오거든 함께 맛있는 점심을 먹으러 가자.ㄴ/는 한')과 조건 전제 ('-거든'",
            "친구가 오거든 문을 열어 주십시오.ㄴ/는 한')과 조건 전제 ('-거든'"
          ],
          "answerIndex": 0,
          "explanation": "'-거든' 뒤에는 과거 완료 평서문('먹었습니다')이 올 수 없습니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'집에 도착하거든 전화해 주세요'(When you arrive home, please call me)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "집에 도착하거든 전화해 주세요.",
            "집에 도착하거든 전화해 주세요"
          ],
          "explanation": "집에 + 도착하거든(도착하다 + 거든) + 전화해 주세요 = 집에 도착하거든 전화해 주세요."
        }
      ]
    }
  },
  "ko-u21-l4": {
    "id": "ko-u21-l4",
    "subject": "korean",
    "unit": 21,
    "lessonNumber": 4,
    "title": "부정적 결과 경고 ('-다가는')와 양보 가정 ('-(으)ㄹ지라도')",
    "level": "B2",
    "objective": "어떤 행동이 계속될 경우 불행한 결과를 초래할 것임을 경고하는 '-다가는'과 극단적인 가정을 양보로 수용하는 '-(으)ㄹ지라도'를 구사한다.",
    "presentation": {
      "explanation": "1. 경고의 조건 어미 '-다가는' (Warning of Negative Consequence):\n- 앞 절의 부정적이거나 위험한 행동이 지속될 경우, 필연적으로 나쁜 결과나 재앙에 이를 것임을 강력하게 경고할 때 사용합니다.\n- 뒷절에는 부정적 예측('-(으)ㄹ지도 모른다', '-기 십상이다', '큰코다친다')이 결합합니다.\n  - \"그렇게 매일 밤을 새우다가는 건강을 크게 해칠 거예요.\"\n  - \"과속 운전을 계속하다가는 큰 교통사고가 날 수 있습니다.\"\n\n2. 양보 가정 '-(으)ㄹ지라도' / '-아/어도' (Even if / Even though):\n- 앞 절의 상황을 극단적인 한계까지 가상으로 인정하더라도, 뒤 절의 결심이나 사실에는 아무런 영향을 주지 못함을 나타냅니다.\n  - \"비바람이 몰아칠지라도 우리는 결코 행진을 멈추지 않을 것입니다.\"\n  - \"아무리 힘들지라도 끝까지 포기하지 않고 해내겠습니다.\"",
      "examples": [
        {
          "target": "스마트폰을 보면서 길을 걷다가는 지나가는 차량이나 장애물에 부딪혀 크게 다치기 십상입니다.",
          "reading": "Seumateupon-eul bomyeonseo gil-eul geotdaganeun jinaganeun charyang-ina jang-aemul-e budichyeo keuge dachigi sipsang-imnida.",
          "translation": "If you keep walking while looking at your smartphone ('걷다가는'), you are prone to bump into passing vehicles or obstacles and get badly hurt."
        },
        {
          "target": "비록 앞길에 수많은 난관과 시련이 가로막을지라도 우리는 결코 굴복하지 않고 전진할 것입니다.",
          "reading": "Birok apgil-e sumanheun nangwan-gwa siryeon-i garomageuljilado uri-neun gyeolko gulbokhaji anhgo jeonjinhal geosimnida.",
          "translation": "Even if numerous hardships and trials block the road ahead ('가로막을지라도'), we will never yield and will march forward."
        },
        {
          "target": "일을 차일피일 미루다가는 마감 기한을 맞추지 못해 클라이언트의 신뢰를 잃게 됩니다.",
          "reading": "Il-eul chairpiil mirudaganeun magam gihan-eul matchuji mothae keullaieonteu-ui sinroe-reul ilhge doemnida.",
          "translation": "If you keep putting off work day after day ('미루다가는'), you won't meet the deadline and will lose the client's trust."
        },
        {
          "target": "아무리 세상이 험난할지라도 따뜻한 온정을 나누는 진실한 이웃들이 곁에 있습니다.",
          "reading": "Amuri sesang-i heomnanhajilado ttatteuthan onjeong-eul nanuneun jinsilhan iutdeul-i gyeot-e itseumnida.",
          "translation": "No matter how harsh the world may be ('험난할지라도'), there are sincere neighbors who share warm compassion beside us."
        }
      ],
      "mnemonics": [
        "계속 그러다간 큰일 난다는 경고는 '-다가는', 아무리 힘들어도 하겠다는 양보는 '-(으)ㄹ지라도'!"
      ],
      "culturalNotes": [
        "한국의 부모님이나 선생님들이 훈계할 때 \"너 그렇게 게으름 피우다가는 나중에 후회한다!\"처럼 '-다가는'은 생활 속에서 가장 생생하게 쓰이는 경고 표현입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "음주 운전의 위험성을 경고하는 문장으로 가장 적절한 연결어미는?",
          "options": [
            "술을 마시고 운전대를 잡다가는 패가망신할 수 있습니다. (부정적 행동의 지속으로 인한 비극적 결과를 경고하므로 -다가는(잡다가는)이 정확합니다.",
            "술을 마시고 운전대를 잡는 한 패가망신할 수 있습니다.와 양보 가정 ('-(으)ㄹ지라",
            "술을 마시고 운전대를 잡았더라면 패가망신할 수 있습니다.와 양보 가정 ('-(으)ㄹ지라"
          ],
          "answerIndex": 0,
          "explanation": "부정적 행동의 지속으로 인한 비극적 결과를 경고하므로 '-다가는(잡다가는)'이 정확합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'아무리 실패가 반복되더라도 굴하지 않겠다'를 가장 비장하고 격조 높게 표현한 문장은?",
          "options": [
            "수없이 실패할지라도 끝까지 도전하겠습니다. (극단적 시련을 양보로 수용하는 -(으)ㄹ지라도(실패할지라도)가 가장 적합합니다.",
            "수없이 실패하다가는 끝까지 도전하겠습니다.와 양보 가정 ('-(으)ㄹ지라",
            "수없이 실패하거든 끝까지 도전하겠습니다.와 양보 가정 ('-(으)ㄹ지라"
          ],
          "answerIndex": 0,
          "explanation": "극단적 시련을 양보로 수용하는 '-(으)ㄹ지라도(실패할지라도)'가 가장 적합합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 빈칸에 들어갈 가장 자연스러운 어미는? \"자극적인 음식을 너무 자주 _____ 위장병에 걸릴 위험이 큽니다.\"",
          "options": [
            "먹다가는",
            "먹었더라면와 양보 가정 ('-(으)ㄹ지라",
            "먹는 한편와 양보 가정 ('-(으)ㄹ지라"
          ],
          "answerIndex": 0,
          "explanation": "위험한 습관의 반복에 따른 건강 악화 경고이므로 '먹다가는'이 들어갑니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'계속 놀다가는 후회하게 돼요'(If you keep playing like that, you'll end up regretting it)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "계속 놀다가는 후회하게 돼요.",
            "계속 놀다가는 후회하게 돼요"
          ],
          "explanation": "계속 + 놀다가는(놀다 + 다가는) + 후회하게 돼요 = 계속 놀다가는 후회하게 돼요."
        }
      ]
    }
  },
  "ko-u21-l5": {
    "id": "ko-u21-l5",
    "subject": "korean",
    "unit": 21,
    "lessonNumber": 5,
    "title": "재테크 투자 자문, 진로 상담 및 비상 대책 실전 조건/가정 담화",
    "level": "B2",
    "objective": "'-(으)면', '-(았/었)더라면', '-(으)ㄴ/는 한', '-다가는', '-(으)ㄹ지라도'를 총망라하여 금융 투자 자문, 진로 멘토링, 위기 대책 실전 담화를 완성한다.",
    "presentation": {
      "explanation": "조건과 가정 어미는 리스크 관리(금융/투자 포트폴리오), 진로 설계(미래 선택 시나리오), 비상 대응 매뉴얼(위기 상황 대처)에서 핵심적인 논리 도구로 기능합니다.\n\n1. 금융 PB 센터 자산 관리 및 투자 포트폴리오 자문 실전 담화 모델:\n- 고객: 전문가님, 요즘 주식 시장 변동성이 너무 큰데 제 투자 비중을 어떻게 조정하면 좋을까요?\n- PB: 고객님, 한 특정 종목에만 올인 투자하시다가는 급락장에서 회복 불가능한 손실을 입으실 수 있습니다.\n- 고객: 맞아요. 작년에 분산 투자를 미리 해 두었더라면 마음고생을 덜 했을 텐데요.\n- PB: 지나간 일은 잊으시고요. 안정적인 배당 수익과 안전 자산 비율을 50% 이상 유지하는 한, 단기 조정이 올지라도 장기적으로는 반드시 안정적 자산 증식이 가능합니다.\n- 고객: 그렇군요. 혹시 추가 여유 자금이 생기거든 채권형 ETF에 나누어 분할 매수해야겠네요.\n- PB: 아주 훌륭한 판단이십니다. 리스크 관리 원칙만 철저히 지키시면 시장이 흔들려도 흔들리지 않습니다.",
      "examples": [
        {
          "target": "시장 변동성이 극심할지라도 장기 가치 투자 원칙을 일관되게 고수하는 한 실패 확률을 대폭 낮출 수 있습니다.",
          "reading": "Sijang byeondongseong-i geuksimhaljilado janggi gachi tuja wonchik-eul ilgwandoege gosu-haneun han silpae hwakryul-eul daepok natchul su itseumnida.",
          "translation": "Even if market volatility is extreme ('극심할지라도'), as long as you adhere to long-term value investing principles consistently ('고수하는 한'), you can drastically lower failure probability."
        },
        {
          "target": "리스크 분산 없이 단기 테마주에 무리하게 대출받아 투자했다가는 파산 위기에 직면할 수 있습니다.",
          "reading": "Liseukeu bunsan eop-si dan-gi temaju-e murihage daechulbada tujahaetdaganeun pasan wigi-e jigmyeonhal su itseumnida.",
          "translation": "If you invest by taking excessive loans into short-term theme stocks without risk diversification ('투자했다가는'), you could face bankruptcy crisis."
        },
        {
          "target": "그때 무리한 사업 확장을 조금만 늦추었더라면 자금 유동성 위기를 지혜롭게 극복했을 텐데 아쉽습니다.",
          "reading": "Geu ttae murihan sa-eop hwakjang-eul jogeumman neutchueotdeoramyeon jageum yudongseong wigi-reul jihyereopge geukbokhaesseul tende aswipssumnida.",
          "translation": "If we had slowed down excessive business expansion just a little at that time ('늦추었더라면'), we would have wisely overcome the fund liquidity crisis."
        },
        {
          "target": "해외 거래처로부터 긴급 수정 견적서가 도착하거든 담당자에게 즉시 전달하고 보고해 주시기 바랍니다.",
          "reading": "Haeoe georaecheo-robuteo gin-geup sujeong gyeonjeokseo-ga dochakhageodeun damdangja-ege jeukssi jeondalhago bogohae jusigi baramnida.",
          "translation": "Once the urgent revised quotation arrives from the overseas client ('도착하거든'), please immediately relay it to the person in charge and report."
        }
      ],
      "mnemonics": [
        "무리하다간 큰코다치고(-다가는), 과거 반성엔 -었더라면, 원칙 지키는 한(-는 한) 성공한다!"
      ],
      "culturalNotes": [
        "한국의 금융 상담 및 비즈니스 협상에서는 위험을 경고할 때 '-다가는', 협상의 전제를 걸 때 '-는 한', 행동 개시를 지시할 때 '-거든'을 적재적소에 배합하는 것이 프로페셔널한 소통의 표준입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "투자 자문가가 고객에게 위험한 집중 투자를 경고할 때 가장 어울리는 문장은?",
          "options": [
            "무리하게 한 종목에만 몰아서 투자하다가는 큰 손실을 볼 수 있습니다. (부정적 결과에 대한 경고는 -다가는(투자하다가는)이 가장 정확합니다.",
            "무리하게 한 종목에만 몰아서 투자했더라면 큰 손실을 볼 수 있습니다.",
            "무리하게 한 종목에만 몰아서 투자하거든 큰 손실을 볼 수 있습니다."
          ],
          "answerIndex": 0,
          "explanation": "부정적 결과에 대한 경고는 '-다가는(투자하다가는)'이 가장 정확합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "진로 상담 중 '시련이 있더라도 열정이 유지되는 한 성공할 것'을 가장 훌륭히 표현한 문장은?",
          "options": [
            "어려움이 따를지라도 꿈을 향한 열정을 잃지 않는 한 반드시 성취할 것입니다. (양보 가정(따를지라도) + 조건의 한계 지속(잃지 않는 한)의 결합이 완벽합니다.",
            "어려움이 따를지라도 꿈을 향한 열정을 잃지 않다가는 반드시 성취할 것입니다.",
            "어려움이 따랐더라면 꿈을 향한 열정을 잃지 않거든 반드시 성취할 것입니다."
          ],
          "answerIndex": 0,
          "explanation": "양보 가정('따를지라도') + 조건의 한계 지속('잃지 않는 한')의 결합이 완벽합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 대화의 빈칸에 들어갈 가장 알맞은 표현은? \"A: 변동성 장세에서 어떻게 대응할까요? B: 원칙을 _____ 단기 등락에 불안해할 필요가 없습니다.\"",
          "options": [
            "지키는 한",
            "지키다가는",
            "지켰더라면"
          ],
          "answerIndex": 0,
          "explanation": "조건이 유효하게 유지되는 한도를 나타내므로 '지키는 한'이 알맞습니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'꿈을 포기하지 않는 한 희망은 있어요'(As long as you don't give up on your dream, there is hope)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "꿈을 포기하지 않는 한 희망은 있어요.",
            "꿈을 포기하지 않는 한 희망은 있어요"
          ],
          "explanation": "꿈을 + 포기하지 않는 한(포기하지 않다 + 는 한) + 희망은 있어요 = 꿈을 포기하지 않는 한 희망은 있어요."
        }
      ]
    }
  },
  "ko-u22-l1": {
    "id": "ko-u22-l1",
    "subject": "korean",
    "unit": 22,
    "lessonNumber": 1,
    "title": "가정적 양보 연결어미 ('-더라도')",
    "level": "B2",
    "objective": "앞 절의 사실이나 가상의 조건을 인정하면서도 뒤 절의 결심, 당위, 사태에 영향이 없음을 나타내는 양보 어미 '-더라도'를 완벽히 구사한다.",
    "presentation": {
      "explanation": "'-더라도'는 '설령 앞 절과 같은 상황이 벌어질지라도'라는 가정적 양보(Concessive Conditional)를 나타냅니다.\n\n1. 결합 규칙:\n- 동사/형용사 어간 + **-더라도** (받침 유무 상관없이 직결)\n  - 바쁘다 → **바쁘더라도** (\"아무리 바쁘더라도 밥은 꼭 챙겨 먹어라.\")\n  - 힘들다 → **힘들더라도** (\"지금 조금 힘들더라도 조금만 참자.\")\n  - 실패하다 → **실패하더라도** (\"설령 이번에 실패하더라도 좌절하지 마라.\")\n  - 과거형: 비가 **왔더라도** / 모임에 **갔더라도**\n- 명사 + **(이)더라도** (학생이더라도, 비상시더라도)\n\n2. '-아/어도' vs '-더라도' 비교 분석:\n- **-아/어도**: 일반적 사실과 가상의 양보에 두루 쓰임 (\"비가 와도 갑니다.\")\n- **-더라도**: 가상의 극단적 전제나 화자의 강력한 의지/당부와 함께 쓰여 어감이 훨씬 강하고 문어체적 품격이 높음 (\"비가 억수같이 쏟아지더라도 기필코 약속을 지키겠습니다.\")",
      "examples": [
        {
          "target": "아무리 바쁜 업무 일정에 쫓기더라도 규칙적인 식사와 충분한 수면은 반드시 챙겨야 합니다.",
          "reading": "Amuri bappeun eommu iljeong-e jjotgideorado gyuchikjeogin siksa-wa chungbunhan sumyeon-eun bandeusi chaeng-gyeoya hamnida.",
          "translation": "No matter how much you are chased by a busy work schedule ('쫓기더라도'), regular meals and sufficient sleep must be maintained."
        },
        {
          "target": "설령 이번 공모전에서 기대만큼 좋은 성과를 거두지 못하더라도 귀중한 도전의 경험으로 남을 것입니다.",
          "reading": "Seollyeong ibeon gongmojeon-eseo gidaemankeum joeun seonggwa-reul geoduji mothaderado gwijunghan dojeon-ui gyeongheom-euro nameul geosimnida.",
          "translation": "Even if we fail to achieve good results as expected in this open contest ('못하더라도'), it will remain as a valuable experience of challenge."
        },
        {
          "target": "몸은 비록 멀리 떨어져 있더라도 우리의 따뜻한 우정과 신뢰는 언제까지나 변치 않을 것입니다.",
          "reading": "Mom-eun birok meolli tteoreojyeo itdeorado uri-ui ttatteuthan ujeong-gwa sinroe-neun eonjekkajina byeonchi anheul geosimnida.",
          "translation": "Even though our bodies are physically far apart ('있더라도'), our warm friendship and trust will never change."
        },
        {
          "target": "초기 투자 비용이 다소 많이 들더라도 친환경 고효율 설비를 도입하는 것이 장기적으로 훨씬 유리합니다.",
          "reading": "Chogi tuja biyong-i daso manhi deuldeorado chin-hwangyeong gohyoyul seolbi-reul doiphaneun geos-i janggijeog-euro hwolssin yurihamnida.",
          "translation": "Even if initial investment cost is somewhat high ('들더라도'), introducing eco-friendly high-efficiency equipment is far more advantageous in the long run."
        }
      ],
      "mnemonics": [
        "설령 그러할지라도 포기 못 해! 강한 의지의 양보 어미 '-더라도'!"
      ],
      "culturalNotes": [
        "한국인들은 타인을 격려하고 위로할 때 \"힘들더라도 힘내세요\", \"실패하더라도 괜찮아요\"처럼 '-더라도'를 사용하여 상황의 어려움을 공감하면서도 용기를 북돋아 줍니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "아무리 힘들어도 끝까지 포기하지 말라고 당부하는 가장 자연스러운 문장은?",
          "options": [
            "과정이 힘들더라도 끝까지 포기하지 마세요.",
            "과정이 힘들수록 끝까지 포기하지 마세요.",
            "과정이 힘든 한편 끝까지 포기하지 마세요."
          ],
          "answerIndex": 0,
          "explanation": "가정적 양보와 권유/당부를 연결하므로 '힘들더라도'가 가장 적합합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'설령 비가 내릴지라도 행사를 강행하겠다'를 '-더라도'로 격조 높게 표현한 문장은?",
          "options": [
            "내일 비가 내리더라도 야외 행사는 예정대로 진행하겠습니다.",
            "내일 비가 내릴수록 야외 행사는 예정대로 진행하겠습니다.",
            "내일 비가 내리기는커녕 야외 행사는 예정대로 진행하겠습니다."
          ],
          "answerIndex": 0,
          "explanation": "양보 어미 '내리더라도' + 단호한 진행 의지의 결합이 완벽합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 '-더라도'의 문법적 특성으로 알맞은 것은?",
          "options": [
            "가상이나 현실의 조건을 양보하면서 뒤 절의 단호한 의지나 권유를 나타낸다.",
            "앞 절의 동작이 원인이 되어 뒤 절의 결과가 발생함을 나타낸다.",
            "앞 절의 사실과 정반대되는 과거를 후회할 때만 쓴다."
          ],
          "answerIndex": 0,
          "explanation": "'-더라도'는 가정적 양보와 화자의 흔들림 없는 결심을 나타냅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'아무리 바쁘더라도 밥은 꼭 챙겨 드세요'(No matter how busy you are, make sure to eat)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "아무리 바쁘더라도 밥은 꼭 챙겨 드세요.",
            "아무리 바쁘더라도 밥은 꼭 챙겨 드세요"
          ],
          "explanation": "아무리 + 바쁘더라도(바쁘다 + 더라도) + 밥은 꼭 챙겨 드세요 = 아무리 바쁘더라도 밥은 꼭 챙겨 드세요."
        }
      ]
    }
  },
  "ko-u22-l2": {
    "id": "ko-u22-l2",
    "subject": "korean",
    "unit": 22,
    "lessonNumber": 2,
    "title": "비례 및 점진적 심화 연결어미 ('-(으)ㄹ수록')",
    "level": "B2",
    "objective": "어떤 상태나 동작의 정도가 심화됨에 비례하여 다른 현상도 심화됨을 나타내는 '-(으)ㄹ수록' 및 속담 관용구를 체득한다.",
    "presentation": {
      "explanation": "'-(으)ㄹ수록'은 'The more... the more...'에 해당하는 비례적 점진 심화(Proportional Intensification) 어미입니다.\n\n1. 결합 규칙:\n- 모음 or 받침 ㄹ 종결 → **-ㄹ수록** (가다 → **갈수록**, 살다 → **살수록**, 보다 → **볼수록**)\n- ㄹ 제외 자음 받침 종결 → **-을수록** (먹다 → **먹을수록**, 읽다 → **읽을수록**, 높다 → **높을수록**)\n\n2. 주요 관용 표현과 활용 패턴:\n- 반복 강조형 (A-면 A-ㄹ수록): \"알면 알수록 더 신기해요.\" / \"연습을 많이 하면 할수록 실력이 늘어요.\"\n- 독립 관용구: **갈수록 태산** (Things get harder and harder) / **볼수록 매력 있다 (볼매)** (The more you see, the more charming)\n- 형용사 비례: \"산은 높을수록 공기가 희박해집니다.\" / \"물건은 품질이 좋을수록 값이 비싸기 마련입니다.\"",
      "examples": [
        {
          "target": "한국어는 문법과 어휘를 깊이 배우면 배울수록 그 풍부한 표현력에 감탄하게 됩니다.",
          "reading": "Hanguk-eo-neun munbeop-gwa eohwi-reul gipi baeumyeon baeulssurok geu pungbuhan pyohyeonryeok-e gamtanhage doemnida.",
          "translation": "The more deeply you learn Korean grammar and vocabulary ('배우면 배울수록'), the more you come to admire its rich expressive power."
        },
        {
          "target": "현대 사회는 정보 기술이 눈부시게 고도화될수록 개인정보 보안의 중요성이 더욱 커집니다.",
          "reading": "Hyeondae sahoe-neun jeongbo gisul-i nunbusige godohwadoelssurok gaeinjeongbo boan-ui jung-yoseong-i deouk keojimnida.",
          "translation": "In modern society, the more dazzlingly information technology becomes advanced ('고도화될수록'), the greater the importance of personal data security becomes."
        },
        {
          "target": "처음에는 어려웠던 문제였지만 차근차근 집중해서 풀수록 점차 자신감이 생겼습니다.",
          "reading": "Cheoeum-eneun eoryeowotdeon munjeyeotjiman chageunchageun jipjunghaeseo pulssurok jeomcha jasingam-i saeng-gyeotseumnida.",
          "translation": "Although it was a difficult problem at first, the more I focused and solved it step by step ('풀수록'), the more confidence gradually emerged."
        },
        {
          "target": "사람은 나이를 먹을수록 자신의 언행에 대해 더욱 무거운 책임감을 지녀야 합니다.",
          "reading": "Saram-eun nai-reul meogeulssurok jasin-ui eonhaeng-e daehae deouk mugeoun chaek-imgam-eul jinyeoya hamnida.",
          "translation": "The older a person grows ('나이를 먹을수록'), the heavier sense of responsibility one must bear for one's words and actions."
        }
      ],
      "mnemonics": [
        "배울수록 신기하고, 갈수록 매력 있는 비례 공식 '-(으)ㄹ수록'!"
      ],
      "culturalNotes": [
        "한국의 신조어 중 '볼매'는 '볼수록 매력 있다'(The more you see them, the more attractive they are)의 줄임말로, 은근한 진국인 사람을 칭찬할 때 일상에서 애용됩니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'익다(ripen)'에 '-(으)ㄹ수록'을 결합한 유명한 한국 속담(\"벼는 익을수록 고개를 숙인다\")의 형태는?",
          "options": [
            "익을수록",
            "익수록ㄹ수록'",
            "익을수록에ㄹ수록'"
          ],
          "answerIndex": 0,
          "explanation": "'익다'는 받침 'ㄱ'이 있으므로 '-을수록'이 결합하여 '익을수록'이 됩니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'시간이 지날수록 상황이 점점 더 나아지고 있다'를 바르게 표현한 문장은?",
          "options": [
            "시간이 갈수록 환자의 건강 상태가 뚜렷하게 호전되고 있습니다.",
            "시간이 가더라도 환자의 건강 상태가 뚜렷하게 호전되고 있습니다.ㄹ수록'",
            "시간이 가는 한 환자의 건강 상태가 뚜렷하게 호전되고 있습니다.ㄹ수록'"
          ],
          "answerIndex": 0,
          "explanation": "시간의 경과에 비례하는 긍정적 호전을 나타내므로 '갈수록'이 정확합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 빈칸에 들어갈 가장 자연스러운 연결어미는? \"한국 음식은 자주 _____ 그 깊은 감칠맛에 중독됩니다.\"",
          "options": [
            "먹을수록",
            "먹더라도ㄹ수록'",
            "먹는 한편ㄹ수록'"
          ],
          "answerIndex": 0,
          "explanation": "빈도 증가에 비례하여 맛을 알게 되는 문맥이므로 '먹을수록'이 알맞습니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'연습을 많이 할수록 실력이 늘어요'(The more you practice, the more your skills improve)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "연습을 많이 할수록 실력이 늘어요.",
            "연습을 많이 할수록 실력이 늘어요"
          ],
          "explanation": "연습을 많이 + 할수록(하다 + ㄹ수록) + 실력이 늘어요 = 연습을 많이 할수록 실력이 늘어요."
        }
      ]
    }
  },
  "ko-u22-l3": {
    "id": "ko-u22-l3",
    "subject": "korean",
    "unit": 22,
    "lessonNumber": 3,
    "title": "양면성과 동시 병행 연결어미 ('-는 한편')",
    "level": "B2",
    "objective": "어떤 행동이나 사실이 진행되는 동시에 다른 측면의 대조적 사실이 병행됨을 나타내는 고급 문어체 연결어미 '-는 한편'을 마스터한다.",
    "presentation": {
      "explanation": "'-는 한편'은 한 사건이나 정책이 추진되는 동안 **동시에 다른 동작이 진행됨(Simultaneous Parallelism)**을 나타내거나, 하나의 대상이 지닌 **서로 다른 두 가지 양면적 속성(Dual Aspects / Meanwhile)**을 서술할 때 사용하는 고급 연결어미입니다.\n\n1. 결합 규칙:\n- 동사 현재 시제 → **-는 한편** (추진하는 한편, 육성하는 한편)\n- 동사 과거 시제 → **-(으)ㄴ 한편** (합의한 한편)\n- 형용사 / 서술격조사 → **-(으)ㄴ 한편** (아름다운 한편, 문제인 한편)\n\n2. 주요 화용적 기능:\n- 정책/사회 현상의 병행 추진: \"정부는 신재생 에너지를 집중 육성하는 한편, 기존 원전의 안전 점검을 강화했습니다.\"\n- 긍정과 부정의 양면성 공존: \"대도시 생활은 문화적 혜택이 풍부한 한편, 치솟는 주거비 부담이 큰 편입니다.\"",
      "examples": [
        {
          "target": "정부는 첨단 신산업 분야의 R&D 투자를 대폭 확대하는 한편, 청년 스타트업 창업 지원을 적극 강화했습니다.",
          "reading": "Jeongbu-neun cheomdan sinsan-eop bun-ya-ui R&D tuja-reul daepok hwakdaehaneun hanpyeon, cheongnyeon seutateueop changeop jiwon-eul jeokgeuk ganghwahaetseumnida.",
          "translation": "The government drastically expanded R&D investment in cutting-edge new industries on one hand, while actively strengthening support for youth startups ('확대하는 한편')."
        },
        {
          "target": "인공지능 기술의 발전은 인간의 일상을 획기적으로 편리하게 만드는 한편, 일자리 감소에 대한 불안감을 낳고 있습니다.",
          "reading": "In-gongjineung gisul-ui baljeon-eun in-gan-ui ilsang-eul hoekgijeog-euro pyeonrihage mandeuneun hanpyeon, iljari gamso-e daehan burangam-eul nahgo itseumnida.",
          "translation": "The advancement of AI technology makes human daily life epoch-makingly convenient on one hand, while giving rise to anxiety over job reduction on the other."
        },
        {
          "target": "주인공은 가족을 부양하기 위해 밤낮없이 일하는 한편, 못다 이룬 배움의 꿈을 위해 야간 대학에 다녔습니다.",
          "reading": "Juin-gong-eun gajok-eul buyanghagi wihae bamnat-eop-si ilhaneun hanpyeon, motda irun baeum-ui kkum-eul wihae yagan daehak-e danyeotseumnida.",
          "translation": "The protagonist worked day and night to support the family on one hand, while attending night university for unfulfilled dreams of learning."
        },
        {
          "target": "이 관광지는 천혜의 빼어난 자연경관을 자랑하는 한편, 유서 깊은 전통 역사 유적지로서의 가치도 대단히 높습니다.",
          "reading": "I gwangwangji-neun cheonhye-ui bpaeeonan jayeongyeong-gwan-eul jaranghaneun hanpyeon, yuseo gipeun jeontong yeoksa yujeokji-roseo-ui gachi-do daedanhi nopsumnida.",
          "translation": "This tourist destination boasts blessed exquisite natural scenery on one hand, while its value as a historic traditional heritage site is also immensely high."
        }
      ],
      "mnemonics": [
        "두 가지 일이 동시에, 양면이 공존할 땐 문어체의 꽃 '-는 한편(Meanwhile/On the other hand)'!"
      ],
      "culturalNotes": [
        "한국의 언론 사설, 학술 논문, 방송 뉴스 리포트에서는 정책의 종합성이나 현상의 복합적 양면성을 객관적으로 설명할 때 '-는 한편'을 가장 대표적인 논리 연결어로 활용합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "수출을 촉진함과 동시에 내수 시장도 살리는 정부 정책의 병행을 가장 잘 나타낸 표현은?",
          "options": [
            "수출을 적극 장려하는 한편, 내수 진작을 위한 정책을 병행했다. (두 가지 정책적 조치의 동시 추진을 나타내므로 -는 한편(장려하는 한편)이 완벽합니다.",
            "수출을 적극 장려하더라도, 내수 진작을 위한 정책을 병행했다.",
            "수출을 적극 장려할수록, 내수 진작을 위한 정책을 병행했다."
          ],
          "answerIndex": 0,
          "explanation": "두 가지 정책적 조치의 동시 추진을 나타내므로 '-는 한편(장려하는 한편)'이 완벽합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "현대 문명의 편리함과 환경 파괴라는 양면성을 서술한 가장 논리적인 문장은 어느 것입니까?",
          "options": [
            "산업화는 물질적 풍요를 가져다준 한편, 심각한 환경 오염 문제를 야기했습니다.",
            "산업화는 물질적 풍요를 가져다주더라도, 심각한 환경 오염 문제를 야기했습니다.",
            "산업화는 물질적 풍요를 가져다주기는커녕, 심각한 환경 오염 문제를 야기했습니다."
          ],
          "answerIndex": 0,
          "explanation": "과거 사실의 양면적 공존을 객관적으로 진술하므로 '가져다준 한편'이 정확합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 '-는 한편'이 쓰이기에 가장 적합한 문맥은?",
          "options": [
            "두 가지 대조적이거나 상호 보완적인 현상이 동시에 병행될 때",
            "과거의 잘못을 후회하고 탄식할 때",
            "명령이나 청유를 상대방에게 직접 지시할 때"
          ],
          "answerIndex": 0,
          "explanation": "'-는 한편'은 두 가지 현상의 동시 진행 및 양면성 병렬에 특화된 어미입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'수출을 늘리는 한편 내수를 활성화했어요'(We increased exports while revitalizing domestic demand)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "수출을 늘리는 한편 내수를 활성화했어요.",
            "수출을 늘리는 한편 내수를 활성화했어요"
          ],
          "explanation": "수출을 늘리는 한편(늘리다 + 는 한편) + 내수를 활성화했어요 = 수출을 늘리는 한편 내수를 활성화했어요."
        }
      ]
    }
  },
  "ko-u22-l4": {
    "id": "ko-u22-l4",
    "subject": "korean",
    "unit": 22,
    "lessonNumber": 4,
    "title": "극단적 부정 대비 ('-기는커녕')과 대체/보상 ('-(으)ㄴ/는 대신에')",
    "level": "B2",
    "objective": "최소한의 기대조차 충족되지 않는 극단적 부정 대비 '-기는커녕/-은/는커녕'과 다른 대상으로의 대체 및 보상을 나타내는 '-(으)ㄴ/는 대신에'를 체득한다.",
    "presentation": {
      "explanation": "1. '-기는커녕' / '-은/는커녕' (Far from / Let alone):\n- 앞 절의 내용은커녕 그보다 훨씬 덜하거나 반대되는 부정적 상황이 발생했음을 강조하는 극단적 대비 표현입니다.\n- 결합: 동사/형용사 → **-기는커녕** (쉬기는커녕, 칭찬받기는커녕) / 명사 → **-은/는커녕** (밥은커녕, 물은커녕)\n  - \"칭찬을 받기는커녕 오히려 호된 꾸중만 들었습니다.\"\n  - \"돈을 벌기는커녕 원금마저 모두 날렸어요.\"\n  - \"밥은커녕 물 한 모금도 마시지 못했습니다.\"\n\n2. '-(으)ㄴ/는 대신에' (Instead of / In compensation for):\n- 앞 절의 행위를 하지 않고 다른 행동으로 대체(Alternative)하거나, 앞 절의 단점에 대한 반대급부로 보상(Compensation)을 받을 때 쓰입니다.\n  - 대체: \"극장에 가는 대신에 집에서 편하게 OTT 영화를 보았습니다.\"\n  - 보상/상쇄: \"이 스마트폰은 가격이 다소 비싼 대신에 성능과 카메라 화질이 압도적입니다.\"",
      "examples": [
        {
          "target": "휴일에 집에서 푹 쉬기는커녕 밀린 업무를 처리하느라 하루 종일 컴퓨터 앞에 앉아 있었습니다.",
          "reading": "Hyuil-e jip-eseo puk swigineunkeonyeong millin eommu-reul cheorihaneura haru jong-il keompyuteo ap-e anja isseotseumnida.",
          "translation": "Far from resting comfortably at home on the holiday ('쉬기는커녕'), I was sitting in front of the computer all day processing backlogged work."
        },
        {
          "target": "이번 달에는 외식을 자주 하는 대신에 마트에서 신선한 식재료를 사다가 집밥을 해 먹기로 결심했습니다.",
          "reading": "Ibeon dal-eneun oesik-eul jaju haneun daesin-e mateu-eseo sinseonhan sikjaeryo-reul sadata jipbap-eul hae meogkkiro gyeolsimhaetseumnida.",
          "translation": "Instead of eating out frequently this month ('하는 대신에'), I resolved to buy fresh ingredients at the market and cook homemade meals."
        },
        {
          "target": "도움을 받기는커녕 도리어 그 사람의 무책임한 태도 때문에 모든 손해를 우리가 떠안게 되었습니다.",
          "reading": "Doum-eul batgineunkeonyeong dorieo geu saram-ui muchaek-imhan taedo ttaemun-e modeun sonhae-reul uri-ga tteo-ange doeeotseumnida.",
          "translation": "Far from receiving help ('받기는커녕'), rather because of that person's irresponsible attitude, we ended up shouldering all damages."
        },
        {
          "target": "이 오피스텔은 면적이 다소 좁은 대신에 지하철역과 바로 연결되어 출퇴근 교통이 대단히 편리합니다.",
          "reading": "I opiseutel-eun myeonjeok-i daso jobeun daesin-e jihacheol-yeok-gwa baro yeon-gyeoldoeeo chultoegeun gyotong-i daedanhi pyeonrihamnida.",
          "translation": "While this studio apartment is somewhat narrow on one hand, in compensation ('좁은 대신에'), it is directly connected to the subway station, making commuting transportation extremely convenient."
        }
      ],
      "mnemonics": [
        "기대는커녕 반대일 땐 '-기는커녕', 다른 걸로 대체·보상할 땐 '-(으)ㄴ/는 대신에'!"
      ],
      "culturalNotes": [
        "한국어에서 '감사는커녕', '축하는커녕'처럼 명사 뒤에 바로 붙는 '-은/는커녕'은 은혜를 원수로 갚거나 상식적인 예의조차 지키지 않는 부당한 상황을 비판할 때 매우 강력한 어조로 쓰입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "명사 '밥(rice/meal)' 뒤에 붙어 '식사는 고사하고 물도 못 마셨다'를 나타내는 올바른 조사는?",
          "options": [
            "밥은커녕",
            "밥기는커녕과 대체/보상 ('-(으)ㄴ/",
            "밥은 대신에과 대체/보상 ('-(으)ㄴ/"
          ],
          "answerIndex": 0,
          "explanation": "명사 뒤에는 바로 '-은/는커녕'이 붙으므로 '밥은커녕'이 정확합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'집값이 비싼 대신에 주변 학군과 편의시설이 훌륭하다'의 보상/상쇄 관계를 바르게 나타낸 문장은?",
          "options": [
            "이 동네는 집값이 비싼 대신에 생활 인프라와 교육 환경이 대단히 뛰어납니다.",
            "이 동네는 집값이 비싸기는커녕 생활 인프라와 교육 환경이 대단히 뛰어납니다.과 대체/보상 ('-(으)ㄴ/",
            "이 동네는 집값이 비싸더라도 생활 인프라와 교육 환경이 대단히 뛰어납니다.과 대체/보상 ('-(으)ㄴ/"
          ],
          "answerIndex": 0,
          "explanation": "높은 가격이라는 단점을 뛰어난 환경이라는 장점으로 상쇄·보상하므로 '비싼 대신에'가 가장 적절합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 빈칸에 들어갈 가장 자연스러운 표현은? \"열심히 도왔는데 고맙다는 인사를 _____ 오히려 원망만 들었어요.\"",
          "options": [
            "받기는커녕",
            "받는 대신에과 대체/보상 ('-(으)ㄴ/",
            "받는 한편과 대체/보상 ('-(으)ㄴ/"
          ],
          "answerIndex": 0,
          "explanation": "최소한의 감사는커녕 오히려 원망을 들은 극단적 부정 대비이므로 '받기는커녕'이 정답입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'칭찬은커녕 꾸중만 들었어요'(Far from being praised, I only got scolded)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "칭찬은커녕 꾸중만 들었어요.",
            "칭찬은커녕 꾸중만 들었어요"
          ],
          "explanation": "칭찬은커녕 + 꾸중만 + 들었어요 = 칭찬은커녕 꾸중만 들었어요."
        }
      ]
    }
  },
  "ko-u22-l5": {
    "id": "ko-u22-l5",
    "subject": "korean",
    "unit": 22,
    "lessonNumber": 5,
    "title": "시사 칼럼, 학술 비평 및 사회 현상 분석 실전 심화 연결어미 담화",
    "level": "B2",
    "objective": "'-더라도', '-(으)ㄹ수록', '-는 한편', '-기는커녕', '-(으)ㄴ/는 대신에'를 총동원하여 고차원 시사 논평, 학술 비평 실전 담화를 완성한다.",
    "presentation": {
      "explanation": "고급 한국어 논설문, 시사 칼럼, 토론 방송에서는 복합적인 사회 현상을 다각도로 조명하기 위해 심화 연결어미군을 정교하게 교차 배치합니다.\n\n1. 시사 대담 프로그램 전문가 패널 토론 실전 담화 모델:\n- 사회자: 교수님, 최근 급증하는 1인 가구 증가 현상과 배달 경제의 급성장을 어떻게 진단하십니까?\n- 패널: 네, 1인 가구 증가는 개인의 독립성과 편의성을 높이는 한편, 사회적 고립과 일회용품 쓰레기 급증이라는 심각한 부작용을 낳고 있습니다.\n- 사회자: 맞습니다. 규제를 강화하자는 목소리도 높은데요.\n- 패널: 하지만 영세 소상공인들에게 무조건적인 친환경 용기 규제를 강제하다가는 생계 자체를 위협할 수 있습니다. 당장 완벽한 무공해 포장재를 쓰기는커녕 기존 단가 맞추기도 벅찬 상황이거든요.\n- 사회자: 그렇다면 어떤 정책적 대안이 필요할까요?\n- 패널: 초기 비용이 다소 들더라도 정부가 다회용기 인프라 구축을 전폭 지원하는 대신에, 소비자에게는 용기 반납 인센티브를 제공하는 비례적 보상 체계를 구축해야 합니다. 참여율이 높아질수록 환경 정화 비용은 획기적으로 줄어들 것입니다.",
      "examples": [
        {
          "target": "새로운 정책은 청년 취업률을 단기적으로 끌어올리는 한편, 비정규직 비율 증가라는 구조적 한계를 동시에 드러냈습니다.",
          "reading": "Saeroun jeongchaek-eun cheongnyeon chwieopryul-eul dangijeog-euro kkeureoollineun hanpyeon, bijeong-gyujik biyeol jeung-ga-raneun gujojeok hangye-reul dongsi-e deureonaetseumnida.",
          "translation": "The new policy boosted the youth employment rate in the short term on one hand, while simultaneously revealing structural limits of increased non-regular workers ('끌어올리는 한편')."
        },
        {
          "target": "원자재 가격이 폭등하자 기업들은 이윤을 남기기는커녕 적자를 면하기 위해 공장 가동률을 대폭 축소하고 있습니다.",
          "reading": "Wonjajae gagyeok-i pokdeunghaja gieopdeul-eun iyun-eul namgigineunkeonyeong jeokja-reul myeonhagi wihae gongjang gadongryul-eul daepok chuksohago itseumnida.",
          "translation": "As raw material prices surged, enterprises, far from making profits ('남기기는커녕'), are drastically reducing factory operating rates to avoid deficits."
        },
        {
          "target": "대중교통 요금을 인상하는 대신에, 심야 취약 시간대 배차 간격을 촘촘히 좁혀 승객들의 실질적 이동 편의를 극대화했습니다.",
          "reading": "Daejung-gyotong yogeum-eul insanghaneun daesin-e, sim-ya chwiyak sigandae baecha gan-gyeok-eul chomchomhi jobhyeo seunggaekdeul-ui siljiljeok idong pyeon-ui-reul geukdaehwahaetseumnida.",
          "translation": "In compensation for raising public transport fares ('인상하는 대신에'), we closely narrowed dispatch intervals during late-night vulnerable hours to maximize passengers' practical transit convenience."
        },
        {
          "target": "기후 변화 위기에 대한 국제적 공조와 실천적 대응은 늦어지면 늦어질수록 감당해야 할 재난 복구 비용이 기하급수적으로 증가합니다.",
          "reading": "Gihu byeonhwa wigi-e daehan gukjejeok gongjo-wa silcheonjeok daeeung-eun neojeojimyeon neojeojilssurok gamdanghaeya hal jaenan bokgu biyong-i gihageubsujeog-euro jeung-gahamnida.",
          "translation": "As for international cooperation and practical response to the climate change crisis, the more delayed it gets ('늦어질수록'), the disaster recovery cost that must be borne increases exponentially."
        }
      ],
      "mnemonics": [
        "한쪽에선 추진하는 한편, 반대는커녕 꿈도 못 꾸고, 늦어질수록 비용만 늘어나는 심화 연결 담화!"
      ],
      "culturalNotes": [
        "한국의 대입 논술이나 공기업 NCS 논술 시험에서는 단문 나열을 지양하고, '-는 한편', '-(으)ㄴ 대신에', '-(으)ㄹ수록'을 유기적으로 엮어 논증하는 능력을 최상위 평가 척도로 삼습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "시사 평론 중 두 가지 정책의 명암을 균형 있게 짚은 가장 훌륭한 문장은?",
          "options": [
            "도시 재생 사업은 구도심 상권을 부활시킨 한편, 젠트리피케이션으로 원주민이 밀려나는 그늘을 낳았다. (성과와 부작용의 양면적 공존을 객관적으로 분석하므로 -는 한편(부활시킨 한편)이 가장 탁월합니다.",
            "도시 재생 사업은 구도심 상권을 부활시키더라도, 젠트리피케이션으로 원주민이 밀려나는 그늘을 낳았다.",
            "도시 재생 사업은 구도심 상권을 부활시키기는커녕, 젠트리피케이션으로 원주민이 밀려나는 그늘을 낳았다."
          ],
          "answerIndex": 0,
          "explanation": "성과와 부작용의 양면적 공존을 객관적으로 분석하므로 '-는 한편(부활시킨 한편)'이 가장 탁월합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "경제 칼럼 중 비례적 심화와 대안 제시가 가장 매끄럽게 연결된 문장은?",
          "options": [
            "금리가 인상될수록 가계 부채 부담이 가중되는 대신에 저축 유인은 증대됩니다. (비례 심화(인상될수록) + 보상/상쇄(가중되는 대신에)의 결합이 논리적으로 완벽합니다.",
            "금리가 인상되더라도 가계 부채 부담이 가중되기는커녕 저축 유인은 증대됩니다.",
            "금리가 인상되는 한 가계 부채 부담이 가중되었더라면 저축 유인은 증대됩니다."
          ],
          "answerIndex": 0,
          "explanation": "비례 심화('인상될수록') + 보상/상쇄('가중되는 대신에')의 결합이 논리적으로 완벽합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 문맥에 부합하는 고급 연결어미가 가장 바르게 사용된 것은?",
          "options": [
            "시간이 흐를수록 문제의 심각성이 더욱 또렷해졌습니다.",
            "시간이 흐르는 한편 문제의 심각성이 더욱 또렷해지기는커녕.",
            "시간이 흐르더라도 문제의 심각성이 더욱 또렷해지는 대신에."
          ],
          "answerIndex": 0,
          "explanation": "시간 경과에 비례하여 심각성이 가중되므로 '흐를수록'이 가장 완벽합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'갈수록 태산이라는 말이 실감 나요'(I really feel the saying that things get harder and harder)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "갈수록 태산이라는 말이 실감 나요.",
            "갈수록 태산이라는 말이 실감 나요"
          ],
          "explanation": "갈수록 태산이라는 말이 + 실감 나요 = 갈수록 태산이라는 말이 실감 나요."
        }
      ]
    }
  },
  "ko-u23-l1": {
    "id": "ko-u23-l1",
    "subject": "korean",
    "unit": 23,
    "lessonNumber": 1,
    "title": "비즈니스 이메일 격식과 서한 프로토콜 (Email Etiquette)",
    "level": "B2",
    "objective": "한국 비즈니스 이메일의 수신자 지정, 정중한 서두 인사, 본론 전환구('다름이 아니오라'), 첨부 파일 안내('송부') 및 결미 서명 격식을 완벽히 구사한다.",
    "presentation": {
      "explanation": "한국의 비즈니스 전자우편(Email)은 엄격한 상호 예의와 정중한 격식체를 준수합니다.\n\n1. 이메일 구조별 정형 표현 체계:\n- **수신자 지정**: `[회사명/부서명] [이름] [직급]님께` (예: 한국전자 마케팅팀 김민수 팀장님께)\n- **서두 인사**: \n  - \"안녕하십니까. [회사/부서명]의 [이름] [직급]입니다.\"\n  - \"늘 노고가 많으십니다.\" / \"귀사의 무궁한 발전을 기원합니다.\"\n- **본론 전환구**: \n  - \"**다름이 아니오라**, 다음 주 예정된 3분기 제휴 회의 일정 조율 건으로 연락드렸습니다.\"\n  - \"**-에 다름 아니라**, 지난주 요청하신 견적서 송부의 건입니다.\"\n- **자료 첨부 및 확인 요청**: \n  - \"요청하신 최종 제안서 파일을 **첨부하여 송부해 드립니다**.\"\n  - \"검토 후 회신해 주시면 대단히 감사하겠습니다.\"\n- **결미 서명**: \n  - \"감사합니다. [이름] **드림 / 올림 / 배상(拜上)**\"",
      "examples": [
        {
          "target": "안녕하십니까, ABC상사 전략기획팀 박지훈 팀장님. 평소 귀사의 아낌없는 협조에 깊은 감사를 드립니다.",
          "reading": "Annyeonghasimnikka, ABCsangsa jeollyakgihoektim Bak Ji-hun timjangnim. Pyeongso gwisa-ui akkim-eomneun hyeopjo-e gipeun gamsa-reul deurimnida.",
          "translation": "Hello, Team Leader Ji-hoon Park of ABC Corp Strategic Planning Team. We express deep gratitude for your esteemed company's generous cooperation ('귀사의')."
        },
        {
          "target": "다름이 아니오라, 지난 실무 미팅에서 논의된 수정 견적서 및 세부 납품 일정표를 첨부하여 송부해 드립니다.",
          "reading": "Dareum-i aniora, jinan silmu miting-eseo nonuidoen sujeong gyeonjeokseo mit sebu nap-pum iljeongpyo-reul cheombuhayeo songbuhae deurimnida.",
          "translation": "To get straight to the matter ('다름이 아니오라'), I am attaching and transmitting the revised quotation and detailed delivery schedule discussed in the last working meeting."
        },
        {
          "target": "첨부 파일을 면밀히 검토해 주시고, 수정이나 보완 사항이 있으시면 편하신 시간에 회신 부탁드립니다.",
          "reading": "Cheombu pail-eul myeonmilhi geomtohae jusigo, sujeong-ina bowan sahang-i isseusimyeon pyeonhasin sigan-e hoesin butakdeurimnida.",
          "translation": "Please review the attached file closely, and if there are any revisions or supplementary points, please reply at your convenience."
        },
        {
          "target": "갑작스러운 일정 변경 요청으로 업무에 불편을 드려 대단히 송구하며, 너른 양해를 부탁드립니다.",
          "reading": "Gapjakseureoun iljeong byeon-gyeong yocheong-euro eommu-e bulpyeon-eul deuryeo daedanhi songguhamyeo, neoreun yanghae-reul butakdeurimnida.",
          "translation": "We are extremely apologetic for causing inconvenience to your work due to an abrupt schedule change request, and ask for your generous understanding."
        }
      ],
      "mnemonics": [
        "인사는 '노고가 많으십니다', 용건은 '다름이 아니오라', 자료는 '송부해 드립니다', 끝은 '드림/배상'!"
      ],
      "culturalNotes": [
        "한국 비즈니스에서 거래처 상대를 부를 때는 '귀사(貴社, your esteemed company)', 자사를 낮출 때는 '당사(當社, our company)' 또는 '저희 회사'라고 칭합니다. 결미의 '배상(拜上)'은 절하며 올린다는 뜻의 최고 격식 서명입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "비즈니스 이메일에서 본론을 정중하게 시작할 때 사용하는 가장 관용적인 전환 표현은?",
          "options": [
            "다름이 아니오라 (다름이 아니오라는 격식 있는 서한과 이메일에서 용건으로 들어갈 때 쓰는 최고 수준의 정형 표현입니다.)",
            "딴 게 아니라",
            "별일은 아니고"
          ],
          "answerIndex": 0,
          "explanation": "'다름이 아니오라'는 격식 있는 서한과 이메일에서 용건으로 들어갈 때 쓰는 최고 수준의 정형 표현입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "거래처 담당자에게 자료를 첨부하여 정중하게 발송함을 알리는 가장 격식 있는 문장은?",
          "options": [
            "요청하신 3분기 사업 실적 보고서를 첨부하여 송부해 드립니다. (비즈니스 문서 발송에는 송부(送付)하여 드립니다라는 정중한 한자어 표현이 표준입니다.)",
            "요청하신 3분기 사업 실적 보고서를 첨부해서 던져 드립니다.",
            "요청하신 3분기 사업 실적 보고서를 첨부하더라도 보냅니다."
          ],
          "answerIndex": 0,
          "explanation": "비즈니스 문서 발송에는 '송부(送付)하여 드립니다'라는 정중한 한자어 표현이 표준입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 비즈니스 이메일 서명 결미어로 가장 알맞은 것은?",
          "options": [
            "홍길동 배상 (拜上) ([이름] 배상 또는 [이름] 드림/올림이 비즈니스 이메일의 정중한 결미 서명입니다.)",
            "홍길동 형아",
            "홍길동 씀"
          ],
          "answerIndex": 0,
          "explanation": "'[이름] 배상' 또는 '[이름] 드림/올림'이 비즈니스 이메일의 정중한 결미 서명입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'검토 후 회신 부탁드립니다'(Please reply after review)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "검토 후 회신 부탁드립니다.",
            "검토 후 회신 부탁드립니다"
          ],
          "explanation": "검토 후 + 회신 부탁드립니다 = 검토 후 회신 부탁드립니다."
        }
      ]
    }
  },
  "ko-u23-l2": {
    "id": "ko-u23-l2",
    "subject": "korean",
    "unit": 23,
    "lessonNumber": 2,
    "title": "직장 내 직급 호칭 체계와 현대 실무 화법",
    "level": "B2",
    "objective": "사원에서 대표이사까지 이어지는 한국 기업의 직급 체계와 직장 내 상하 및 동료 간의 정밀한 호칭과 화법 규칙을 체득한다.",
    "presentation": {
      "explanation": "한국의 기업 문화에서는 직급과 직책에 기반한 호칭(Hierarchical Titles)이 조직 질서와 상호 존중의 근간을 이룹니다.\n\n1. 대표적인 기업 직급 체계 (승진 순):\n- **사원(Staff)** → **대리(Assistant Manager)** → **과장(Manager)** → **차장(Senior Manager)** → **부장(General Manager / Director)** → **임원(Executive: 이사, 상무, 전무, 부사장, 사장/대표이사)**\n\n2. 직장 내 호칭 원칙:\n- **상급자 부를 때**: `[성/이름] + [직급] + 님` (예: \"김 과장님\", \"이 부장님\", \"대표이사님\")\n- **동급자/후배 부를 때**: \n  - 직급이 있을 때: `[이름] + [직급]님` (예: \"민수 대리님\", \"지훈 씨\")\n  - 완전 동기/사원끼리: `[이름] 씨` 또는 상호 존댓말 유지\n- **사내 제3자 지칭 (현대 직장 어법)**: \n  - 전통적 엄격한 압존법과 달리, 현대 직장에서는 상사 앞이라도 다른 상급자를 낮추지 않고 \"김 과장님께서 지금 회의 중이십니다\"처럼 주체 높임을 사용하는 것이 국립국어원 표준 언어 예절로 정착되었습니다.",
      "examples": [
        {
          "target": "부장님, 김 과장님께서 요청하신 2분기 예산 결산안 작성을 모두 완료하여 상신드렸습니다.",
          "reading": "Bujangnim, Kim gwajangnim-kkeseo yocheonghasin ibun-gi yesan gyeolsanan jakseong-eul modu wanryohayeo sangsindeuryeotseumnida.",
          "translation": "Director, I have completed and submitted for approval the Q2 budget settlement draft requested by Manager Kim ('상신드렸습니다')."
        },
        {
          "target": "이 대리님, 오늘 오후 3시에 대회의실에서 신입 사원 직무 교육 오리엔테이션이 예정되어 있습니다.",
          "reading": "I daerinim, oneul ohu sesi-e daehoeuisil-eseo sin-ip sawon jikmu gyoyuk orientteisyeon-i yejeongdoeeo itseumnida.",
          "translation": "Assistant Manager Lee, the job training orientation for new employees is scheduled in the main conference room at 3 PM today."
        },
        {
          "target": "대표이사님께 이번 신규 프로젝트의 중간 추진 경과를 내일 오전 주간 회의 때 직접 보고드리겠습니다.",
          "reading": "Daepyoisanim-kke ibeon sin-gyu peurojekteu-ui junggan chujin gyeong-gwa-reul naeil ojeon jugan hoeui ttae jikjeop bogodeurigesseumnida.",
          "translation": "I will report the interim implementation progress of this new project directly to the CEO at tomorrow morning's weekly meeting ('보고드리겠습니다')."
        },
        {
          "target": "박 차장님께서는 현재 해외 지사 출장 중이시므로 급한 용건은 저에게 메모로 남겨 주십시오.",
          "reading": "Bak chajangnim-kkeseoneun hyeonjae haeoe jisa chuljang jung-isimuro geubhan yonggeon-eun jeo-ege memo-ro nam-gyeo jusipsio.",
          "translation": "Since Senior Manager Park is currently on a business trip to the overseas branch ('출장 중이시므로'), please leave urgent business with me as a memo."
        }
      ],
      "mnemonics": [
        "사원-대리-과장-차장-부장-임원! 윗사람 부를 땐 무조건 '직급+님'!"
      ],
      "culturalNotes": [
        "최근 IT 스타트업과 대기업을 중심으로 '님' 문화(예: '민수 님')나 영어 닉네임을 도입하여 수평적 소통을 장려하는 추세이지만, 전통적인 직급 호칭 체계는 여전히 한국 비즈니스의 표준 골격입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "직속 상사인 '김 부장'에게 보고서를 결재 올릴 때 가장 격식 있는 표현은?",
          "options": [
            "부장님, 이번 주 기획안을 결재 상신하였습니다. (상사에 대한 존칭 부장님과 결재를 올림을 뜻하는 격식어 상신(上申)하였습니다가 완벽합니다.",
            "부장아, 이번 주 기획안 결재해라.",
            "김 씨, 이번 주 기획안을 결재해 줬다."
          ],
          "answerIndex": 0,
          "explanation": "상사에 대한 존칭 '부장님'과 결재를 올림을 뜻하는 격식어 '상신(上申)하였습니다'가 완벽합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "현대 한국 직장에서 부장님에게 다른 상사인 '이 과장'의 부재를 정중히 알리는 올바른 표준 문장은?",
          "options": [
            "부장님, 이 과장님께서 지금 외근 중이십니다.) (현대 비즈니스 실무에서는 제3자인 상급자(이 과장님)에 대해서도 께서 -시- 높임",
            "부장님, 이 과장 놈이 지금 놀러 갔습니다.",
            "부장님, 이 과장이 외근 중이다."
          ],
          "answerIndex": 0,
          "explanation": "현대 비즈니스 실무에서는 제3자인 상급자(이 과장님)에 대해서도 '께서 -시-' 높임을 유지하는 것이 표준 예절입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "한국 기업의 일반적인 승진 직급 순서가 올바르게 나열된 것은?",
          "options": [
            "사원 → 대리 → 과장 → 차장 → 부장",
            "부장 → 차장 → 과장 → 대리 → 사원",
            "사원 → 부장 → 대리 → 차장 → 과장"
          ],
          "answerIndex": 0,
          "explanation": "일반적 기업 직급은 사원-대리-과장-차장-부장 순으로 올라갑니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'부장님께 결재를 올렸습니다'(I submitted the document for approval to the general manager)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "부장님께 결재를 올렸습니다.",
            "부장님께 결재를 올렸습니다"
          ],
          "explanation": "부장님께 + 결재를 + 올렸습니다 = 부장님께 결재를 올렸습니다."
        }
      ]
    }
  },
  "ko-u23-l3": {
    "id": "ko-u23-l3",
    "subject": "korean",
    "unit": 23,
    "lessonNumber": 3,
    "title": "업무 협조 요청과 완곡한 거절 및 수정 제안 기법",
    "level": "B2",
    "objective": "타 부서 및 거래처에 정중히 업무 협조를 요청하고, 곤란한 제안을 완곡하게 거절하거나 수정 대안을 제시하는 고급 비즈니스 화법을 습득한다.",
    "presentation": {
      "explanation": "직장 내 협업과 외부 파트너십에서는 직설적 요구/거절을 피하고 정중한 완곡 어법(Euphemism & Softening Strategies)을 사용해야 신뢰와 원만한 관계를 유지할 수 있습니다.\n\n1. 정중한 업무 협조 요청 패턴:\n- **-아/어 주시면 감사하겠습니다**: \"금일 퇴근 전까지 취합표를 전달해 주시면 감사하겠습니다.\"\n- **-아/어 주실 수 있으신지요**: \"혹시 내일 오전 중으로 회의실 예약이 가능하신지요?\"\n- **협조를 부탁드립니다**: \"프로젝트의 성공적인 론칭을 위해 유관 부서의 적극적인 협조를 부탁드립니다.\"\n\n2. 완곡한 거절 및 수정 제안 (Cushion Words):\n- **쿠션어**: \"죄송합니다만...\" / \"안타깝게도...\" / \"너른 양해를 부탁드립니다.\"\n- **완곡한 거절**: \"현재 내부 리소스가 부족하여 이번 분기 내 착수는 **다소 어려울 것으로 사료됩니다**.\"\n- **수정 대안 제시**: \"제안해 주신 원안대로 진행하기보다는 일정이나 단가를 다음과 같이 **조정해 보는 것은 어떠실지요?**\"",
      "examples": [
        {
          "target": "번거로우시겠지만 요청드린 관련 통계 데이터를 이번 주 목요일까지 회신해 주시면 대단히 감사하겠습니다.",
          "reading": "Beongeorousigettjiman yocheongdeurin gwanryeon tonggye deiteo-reul ibeon ju mogyoil-kkaji hoesinhae jusimyeon daedanhi gamsahagessseumnida.",
          "translation": "Although it may be troublesome ('번거로우시겠지만'), we would be immensely grateful if you could reply with the requested relevant statistics data by this Thursday."
        },
        {
          "target": "보내 주신 제안서는 매우 혁신적이나, 현재 당사의 예산 상황상 원안 그대로 수용하기는 다소 어려운 점 양해 바랍니다.",
          "reading": "Bonae jusin jeanseo-neun maeu hyeoksinjeog-ina, hyeonjae dangsa-ui yesan sanghwangsang won-an geudaero suyonghagi-neun daso eoryeoun jeom yanghae baramnida.",
          "translation": "The proposal you sent is very innovative, but we ask for your understanding that accommodating it as originally drafted is somewhat difficult given our current budget situation."
        },
        {
          "target": "일정을 무리하게 앞당기기보다는 안전성 테스트 기간을 1주일 연장하는 방향으로 재검토해 주실 수 있는지요?",
          "reading": "Iljeong-eul murihage apdang-gigibodaneun anjeonseong teseuteu gigan-eul ilju-il yeonjanghaneun banghyang-euro jaegeomtohae jusil su inneunjiyo?",
          "translation": "Rather than pulling the schedule forward excessively, could you please re-examine the direction of extending the safety test period by one week?"
        },
        {
          "target": "타 부서와의 원활한 협업을 위해 사전에 관련 부서장님들의 사전 합의를 먼저 구해 주시기를 당부드립니다.",
          "reading": "Ta buseo-wa-ui wonhwalhan hyeop-eop-eul wihae sajeon-e gwanryeon buseojangnimdeul-ui sajeon hab-ui-reul meonjeo guhae jusigi-reul dangbudeurimnida.",
          "translation": "For smooth collaboration with other departments, we request that you obtain the advance agreement of relevant department heads first."
        }
      ],
      "mnemonics": [
        "요청할 땐 '-해 주시면 감사하겠습니다', 거절할 땐 '다소 어려울 것으로 사료됩니다'!"
      ],
      "culturalNotes": [
        "한국 비즈니스에서 '다소 어렵습니다', '검토해 보겠습니다'는 거의 90% 이상 정중한 거절(No)의 완곡한 표현입니다. 직설적으로 \"안 됩니다\"라고 말하는 것은 결례로 여겨집니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "상대방에게 부담을 줄이며 정중히 자료를 요청할 때 앞에 붙이는 가장 적절한 쿠션어는?",
          "options": [
            "번거로우시겠지만) (번거로우시겠지만(Although it is an inconvenience)은 업무",
            "귀찮더라도 억지로",
            "당장 급하니까"
          ],
          "answerIndex": 0,
          "explanation": "'번거로우시겠지만(Although it is an inconvenience)'은 업무 협조를 구할 때 배려를 담는 최고의 쿠션어입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "거래처의 무리한 납기 단축 요청을 정중하고 완곡하게 거절하는 가장 훌륭한 비즈니스 문장은?",
          "options": [
            "품질 보증을 위해 현재 일정보다 납기를 단축하는 것은 다소 무리가 있을 것으로 사료됩니다.",
            "절대 안 됩니다. 말도 안 되는 소리 하지 마세요.",
            "납기를 줄여 주기는커녕 공장을 멈추겠습니다."
          ],
          "answerIndex": 0,
          "explanation": "'다소 무리가 있을 것으로 사료됩니다(It is thought to be somewhat unreasonable)'는 격조 높은 비즈니스 거절 어법입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "한국 비즈니스 대화에서 '내부적으로 신중히 검토해 보겠습니다'가 지닌 실제 화용적 의미는?",
          "options": [
            "즉각적인 수락이 어려워 완곡하고 정중하게 거절하거나 보류함을 뜻한다.",
            "100% 무조건 내일 당장 계약하겠다는 뜻이다.",
            "상대방에게 화를 내며 계약을 파기하겠다는 뜻이다."
          ],
          "answerIndex": 0,
          "explanation": "비즈니스 화법에서 '검토해 보겠다'는 체면을 살려주며 완곡히 보류/거절하는 대표적 표현입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'재검토를 부탁드립니다'(We ask for your re-examination)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "재검토를 부탁드립니다.",
            "재검토를 부탁드립니다"
          ],
          "explanation": "재검토를 + 부탁드립니다 = 재검토를 부탁드립니다."
        }
      ]
    }
  },
  "ko-u23-l4": {
    "id": "ko-u23-l4",
    "subject": "korean",
    "unit": 23,
    "lessonNumber": 4,
    "title": "비즈니스 전화 응대, 미팅 일정 조율 및 명함 교환 예절",
    "level": "B2",
    "objective": "회사 전화 수발신 표준 프로토콜, 부재중 메모 전달, 대면 비즈니스 미팅에서의 양손 명함 교환 예절을 체화한다.",
    "presentation": {
      "explanation": "전화 통화와 명함 교환은 기업의 첫인상을 결정짓는 대단히 중요한 비즈니스 의전(Protocol)입니다.\n\n1. 전화 수신 및 발신 프로토콜:\n- **전화 받을 때**: \"감사합니다. [회사명] [부서명] [이름] [직급]입니다. 무엇을 도와드릴까요?\"\n- **상대방 확인할 때**: \"실례지만 어디 누구시라고 전해 드릴까요?\"\n- **담당자 부재 시**: \"김 과장님께서 지금 자리를 비우셨는데, 메모를 남겨 드릴까요? 아니면 들어오시는 대로 전화 드리도록 전해 드릴까요?\"\n- **전화 걸 때**: \"안녕하십니까. [회사]의 [이름]입니다. 통화 잠시 괜찮으신가요?\"\n\n2. 명함 교환(Business Card Etiquette) 예절:\n- 명함을 건넬 때: 반드시 **양손**으로 명함의 글자가 상대방을 향하도록 잡고, 소속과 이름을 또박또박 밝힙니다 (\"반갑습니다. 한국무역 해외영업팀 이지은 대리입니다.\")\n- 명함을 받을 때: 양손으로 공손히 받으며 \"감사합니다. 이 과장님, 반갑습니다.\"라고 화답합니다.\n- 미팅 중 명함 배치: 받은 명함을 바로 주머니에 넣지 않고 테이블 위의 상대방 착석 순서에 맞추어 정갈하게 올려놓습니다.",
      "examples": [
        {
          "target": "감사합니다. 미래솔루션 경영지원팀 최유진 대리입니다. 무엇을 도와드릴까요?",
          "reading": "Gamsahamnida. Miraesollusyeon gyeong-yeongjiwontim Choe Yu-jin daerimnida. Mueos-eul dowadeurilkkayo?",
          "translation": "Thank you. This is Assistant Manager Yujin Choi of Mirae Solution Management Support Team. How may I help you?"
        },
        {
          "target": "박 부장님께서는 지금 외부 미팅 중이신데, 복귀하시는 대로 바로 전화 드리도록 전달할까요?",
          "reading": "Bak bujangnim-kkeseoneun jigeum oebu miting jung-isinde, bokgwihasineun daero baro jeonhwa deuridorok jeondalhalkkayo?",
          "translation": "Director Park is currently in an outside meeting; shall I convey that he should call you right as soon as he returns?"
        },
        {
          "target": "처음 뵙겠습니다. 대한통상 글로벌마케팅본부에서 신흥 시장 개척을 담당하고 있는 정우성 팀장입니다.",
          "reading": "Cheoeum boepgetseumnida. Daehantongsang geullobeolmaketingbonbu-eseo sinheung sijang gaecheog-eul damdanghago inneun Jeong U-seong timjangnim-ida.",
          "translation": "Pleasure to meet you for the first time ('처음 뵙겠습니다'). I am Team Leader Woo-sung Jung in charge of pioneering emerging markets at Daehan Commerce Global Marketing HQ."
        },
        {
          "target": "다음 주 화요일 오후 2시에 귀사 본사 회의실로 직접 찾아뵙고 세부 협력 방안을 논의드리고자 합니다.",
          "reading": "Daeum ju hwayoil ohu dusi-e gwisa bonsa hoeuisil-ro jikjeop chajaboepgo sebu hyeomnyeok bang-an-eul nonuideurigoja hamnida.",
          "translation": "I would like to visit your headquarters conference room directly at 2 PM next Tuesday to discuss detailed cooperation plans ('찾아뵙고')."
        }
      ],
      "mnemonics": [
        "전화는 소속 밝히며 상냥하게, 명함은 양손으로 글자 보이게 건네기!"
      ],
      "culturalNotes": [
        "한국에서는 상대방이 건넨 명함에 메모를 하거나 구기거나 바로 지갑에 집어넣는 행위를 대단히 무례하게 여깁니다. 미팅이 끝날 때까지 명함 지갑 위에 올려놓는 것이 표준 의전입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "회사 전화를 받았을 때 가장 표준적인 첫인사는?",
          "options": [
            "감사합니다. 디자인팀 박민수 대리입니다. 무엇을 도와드릴까요?",
            "여보세요? 누구세요? 왜 전화했나요?",
            "전화 주셔서 감사한데 바쁘니까 나중에 하세요."
          ],
          "answerIndex": 0,
          "explanation": "회사명/부서/이름/직급을 밝히고 지원 의사를 묻는 것이 표준적인 비즈니스 전화 수신 예절입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "담당자가 자리를 비웠을 때 고객에게 정중하게 대안을 안내하는 올바른 문장은?",
          "options": [
            "담당자께서 잠시 자리를 비우셨는데, 메모를 남겨 드릴까요?",
            "담당자 없으니까 그냥 이따가 다시 거세요.",
            "담당자가 자리를 비우더라도 내가 알 바 아닙니다."
          ],
          "answerIndex": 0,
          "explanation": "부재 사유 안내와 메모 수합 제안을 정중히 묻는 '메모를 남겨 드릴까요?'가 표준입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "한국 비즈니스 미팅에서 명함을 교환할 때 올바른 태도는?",
          "options": [
            "양손으로 잡고 상대방이 이름을 읽을 수 있는 방향으로 건넨다.",
            "한 손으로 던지듯이 건네고 즉시 뒷주머니에 쑤셔 넣는다.",
            "받은 명함 위에 볼펜으로 낙서를 한다."
          ],
          "answerIndex": 0,
          "explanation": "명함은 반드시 양손으로 정중히 건네고 받는 것이 기본 비즈니스 매너입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'메모를 남겨 드릴까요'(Shall I take a memo for you)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "메모를 남겨 드릴까요?",
            "메모를 남겨 드릴까요"
          ],
          "explanation": "메모를 + 남겨 드릴까요? = 메모를 남겨 드릴까요?"
        }
      ]
    }
  },
  "ko-u23-l5": {
    "id": "ko-u23-l5",
    "subject": "korean",
    "unit": 23,
    "lessonNumber": 5,
    "title": "전략 제휴 협약 체결 및 임원 결재 브리핑 실전 비즈니스 종합 담화",
    "level": "B2",
    "objective": "비즈니스 이메일 서한, 직급별 보고 화법, 완곡한 협상 어휘, 명함 및 전화 응대를 총망라하여 기업 간 제휴 및 이사회 브리핑 실전 담화를 완성한다.",
    "presentation": {
      "explanation": "B2 최고급 비즈니스 한국어는 기업 간 전략적 제휴(Strategic Partnership), 이사회 임원 결재 보고(Executive Briefing), 바이어 협상 테이블에서 유감없이 발휘됩니다.\n\n1. 전략 제휴 협약식 및 바이어 미팅 실전 담화 모델:\n- 최 과장: 안녕하십니까, 글로벌인베스트의 마이클 리 부사장님. 먼 길 오시느라 노고가 많으셨습니다. 저는 사업개발팀 최민석 과장이라고 합니다. (양손으로 명함을 건네며)\n- 리 부사장: 반갑습니다, 최 과장님. 지난번 보내 주신 이메일 제안서와 시장 분석 보고서를 아주 인상 깊게 검토했습니다.\n- 최 과장: 좋게 평가해 주셔서 대단히 감사드립니다. 다름이 아니오라, 본 회의에 앞서 김진우 대표이사님께서 직접 리 부사장님을 접견하시어 환영 인사를 나누고자 하십니다.\n- (접견실 이동 후 대표이사 보고)\n- 대표이사: 리 부사장님, 귀사와의 기술 협력은 당사로서도 미래 핵심 동력을 확보하는 매우 중차대한 기회입니다. 초도 계약 물량과 납품 단가에 대해 양사가 윈윈할 수 있는 합의점을 도출해 주시면 감사하겠습니다.\n- 리 부사장: 당사 역시 전폭적인 지원을 아끼지 않을 것입니다. 세부 계약 조항은 실무진에서 검토 후 최종 서명하도록 하겠습니다.",
      "examples": [
        {
          "target": "양사의 상호 이익과 지속 가능한 성장을 위해 전략적 업무 제휴 협약서(MOU)를 공식 체결하게 되어 대단히 영광입니다.",
          "reading": "Yangsa-ui sangho iik-gwa jisok ganeunghan seongjang-eul wihae jeollyakjeok eommu jehyu hyeopyakseo-reul gongsik chegyeolhage doeeo daedanhi yeonggwang-imnida.",
          "translation": "It is an immense honor to officially sign this Strategic Memorandum of Understanding (MOU) for the mutual benefit and sustainable growth of both companies ('양사의')."
        },
        {
          "target": "대표이사님, 이번 글로벌 신제품 론칭에 따른 마케팅 집행 예산 승인 건을 결재 상신하오니 재가하여 주시기 바랍니다.",
          "reading": "Daepyoisanim, ibeon geullobeol sinjeepum ronching-e ttareun maketing jiphaeng yesan seung-in geon-eul gyeoljae sangsinhani jaegahayeo jusigi baramnida.",
          "translation": "CEO, I submit for approval the marketing execution budget approval item following this global new product launch, so please grant authorization ('재가하여 주시기 바랍니다')."
        },
        {
          "target": "금일 체결된 협약에 따라 다음 달 초순부터 양사 공동 태스크포스(TF) 팀을 신속히 가동할 예정입니다.",
          "reading": "Geum-il chegyeoldoen hyeopyak-e ttara daeum dal chosun-buteo yangsa gongdong taeseukeuposeu tim-eul sinsokhi gadonghal yejeong-imnida.",
          "translation": "Pursuant to the agreement signed today, we plan to promptly activate a joint task force (TF) team between both companies starting early next month."
        },
        {
          "target": "바쁘신 와중에도 귀한 시간을 내어 당사를 방문해 주신 바이어 대표단 여러분께 진심으로 감사의 말씀을 전합니다.",
          "reading": "Bappeusin wajung-edo gwihan sigan-eul naeeo dangsa-reul bangmunhae jusin baieo daepyodan yeoreobun-kke jinsim-euro gamsa-ui malsseum-eul jeonhamnida.",
          "translation": "We convey words of heartfelt gratitude to all delegates of the buyer delegation who took precious time despite busy schedules to visit our company ('당사를')."
        }
      ],
      "mnemonics": [
        "귀사와 당사의 윈윈 협력, 결재는 정중히 상신하고, 협약은 영광스럽게 체결한다!"
      ],
      "culturalNotes": [
        "한국 비즈니스에서 최고 경영진의 결재를 받는 것을 '재가(裁可)를 받다', 기안을 올리는 것을 '상신(上申)하다'라고 하며, 이러한 한자 기반 전문 행정 용어를 정확히 사용하는 것이 전문성의 지표입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "MOU 체결식에서 양사를 대표하여 사회자가 환영사를 시작할 때 가장 품격 있는 문장은?",
          "options": [
            "양사의 공동 발전을 위한 전략적 업무 협약 체결식에 참석해 주신 내외 귀빈 여러분을 진심으로 환영합니다.",
            "우리 둘이 대충 계약이나 맺으려고 모였으니 박수나 치세요.",
            "협약을 체결하더라도 나중에 마음에 안 들면 취소할 것입니다."
          ],
          "answerIndex": 0,
          "explanation": "'양사의 공동 발전'과 '내외 귀빈 여러분 환영'을 담은 격식 있는 축하 문장이 완벽합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "임원에게 기안서 결재 승인을 정중하게 요청하는 최고급 비즈니스 서면 보고 문장은?",
          "options": [
            "신규 해외 지사 설립 계획안을 결재 상신하오니 검토 후 재가하여 주시기 바랍니다.) (결재 상신하오니(I submit for approval) + 재가하여 주시기 바랍",
            "신규 해외 지사 설립 계획안을 올릴 테니 얼른 도장이나 찍으세요.",
            "신규 해외 지사 설립 계획안을 올리기는커녕 파기하겠습니다."
          ],
          "answerIndex": 0,
          "explanation": "'결재 상신하오니(I submit for approval)' + '재가하여 주시기 바랍니다(please grant authorization)'의 정중한 조합이 완벽합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 비즈니스 한자 어휘의 상대적 짝이 올바르게 맺어진 것은?",
          "options": [
            "귀사(상대 회사 존칭) - 당사(자사 겸칭) (귀사(貴社)는 상대 회사 높임말, 당사(當社)는 자신의 회사를 가리키는 겸칭입니다.",
            "귀사(자사 겸칭) - 당사",
            "배상(부하 직원 명령) - 재가"
          ],
          "answerIndex": 0,
          "explanation": "귀사(貴社)는 상대 회사 높임말, 당사(當社)는 자신의 회사를 가리키는 겸칭입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'귀사의 무궁한 발전을 기원합니다'(We pray for the eternal development of your company)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "귀사의 무궁한 발전을 기원합니다.",
            "귀사의 무궁한 발전을 기원합니다"
          ],
          "explanation": "귀사의 + 무궁한 발전을 + 기원합니다 = 귀사의 무궁한 발전을 기원합니다."
        }
      ]
    }
  },
  "ko-u24-l1": {
    "id": "ko-u24-l1",
    "subject": "korean",
    "unit": 24,
    "lessonNumber": 1,
    "title": "K-Pop 팬덤 문화와 글로벌 음악 산업 전문 어휘",
    "level": "B2",
    "objective": "글로벌 K-Pop 산업의 독창적 생태계(팬덤, 세계관, 음원 차트 역주행, 칼군무, 자체 제작 콘텐츠)를 설명하는 전문 어휘와 담화 구조를 습득한다.",
    "presentation": {
      "explanation": "K-Pop은 단순한 대중음악을 넘어 정교한 스토리텔링과 글로벌 팬덤이 상호작용하는 복합 문화 산업입니다.\n\n1. K-Pop 산업 및 무대 핵심 전문 어휘:\n- **팬덤(Fandom) & 팬덤 문화**: 아티스트와 정서적 유대를 형성하며 스트리밍, 음반 공동구매, 콘서트 응원(응원봉 문화)을 주도하는 글로벌 팬 커뮤니티\n- **세계관(Cinematic Universe / Lore)**: 앨범, 뮤직비디오, 웹툰을 관통하는 거대하고 유기적인 가상 서사\n- **칼군무(Knife-like Synchronized Choreography)**: 멤버 전원의 각도와 박자가 한 치의 오차도 없이 일치하는 완벽한 군무\n- **음원 차트 올킬(All-Kill) & 역주행(Chart Reversal / Sleeper Hit)**: 발매 직후 주요 음원 차트 1위를 석권하거나, 입소문과 숏폼 챌린지를 통해 과거 곡이 차트 상위권으로 재진입하는 현상\n- **자체 제작 콘텐츠(자컨, In-house Content)**: 기획사에서 직접 기획·제작하여 유튜브 등 플랫폼에 무료 공급하는 리얼리티 예능",
      "examples": [
        {
          "target": "해당 아이돌 그룹은 데뷔 초의 무명 시절을 딛고 팬들의 직캠 영상이 화제를 모으며 음원 차트 역주행 신화를 썼습니다.",
          "reading": "Haedang aidol geurup-eun debwi cho-ui mumyeong sijeol-eul ditgo paendeul-ui jikkaem yeongsang-i hwaje-reul mo-eumyeo eumwon chateu yeokjuhaeng sinhwa-reul sseotseumnida.",
          "translation": "Overcoming unknown days of their early debut, that idol group wrote a legend of chart reversal ('역주행') as fans' fan-cam video drew explosive attention."
        },
        {
          "target": "새 앨범의 타이틀곡은 발매 1시간 만에 국내외 주요 실시간 음원 차트를 올킬하며 글로벌 위상을 입증했습니다.",
          "reading": "Sae aelbeom-ui taiteulgok-eun balmae han sigan man-e gungnaeoe juyo silsigan eumwon chateu-reul olkilhamyeo geullobeol wisang-eul ipjeunghaetseumnida.",
          "translation": "The new album's title track proved its global standing by achieving an all-kill on major domestic and overseas real-time music charts ('차트를 올킬하며') within an hour of release."
        },
        {
          "target": "한 치의 오차도 없는 자로 잰 듯한 칼군무와 탄탄한 라이브 가창력은 전 세계 팬들을 매료시키기에 충분했습니다.",
          "reading": "Han chi-ui ochado eomneun jaro jaen deuthan kalgunmu-wa tantanhan raibeu gachangryeok-eun jeon segye paendeul-eul maeryosikigi-e chungbunhaetseumnida.",
          "translation": "Their knife-like synchronized dance without the slightest error ('칼군무') and solid live vocal skills were more than enough to captivate fans worldwide."
        },
        {
          "target": "단순한 음악 소비를 넘어 아티스트의 앨범 속 방대한 세계관을 팬들이 주도적으로 해석하고 2차 창작물로 확장하고 있습니다.",
          "reading": "Dansunhan eum-ak sobi-reul neomeo atiseuteu-ui aelbeom sok bangdaehan segyegwan-eul paendeul-i judojeog-euro haeseokhago icha changjakmul-ro hwakjanghago itseumnida.",
          "translation": "Beyond mere music consumption, fans proactively interpret the vast lore in the artist's album ('방대한 세계관') and expand it into derivative works."
        }
      ],
      "mnemonics": [
        "칼군무로 무대 찢고, 세계관으로 과몰입, 입소문 나면 차트 역주행!"
      ],
      "culturalNotes": [
        "한국의 K-Pop 팬덤은 생일 카페, 지하철 광고, 숲 조성 및 자선 기부 등 아티스트의 이름으로 선한 영향력을 실천하는 성숙한 팬덤 문화를 선도하고 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "오래전에 발표된 곡이 숏폼 챌린지나 직캠 영상으로 인해 차트 상위권으로 다시 치고 올라오는 현상을 일컫는 말은?",
          "options": [
            "역주행",
            "정주행",
            "올킬"
          ],
          "answerIndex": 0,
          "explanation": "발매 후 시간이 지난 곡이 다시 폭발적 인기를 얻어 차트에 진입하는 것을 '역주행'이라고 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'한 치의 오차도 없이 완벽하게 합을 맞추어 추는 군무'를 가장 정확하게 묘사한 표현은?",
          "options": [
            "자로 잰 듯 완벽한 일체감을 자랑하는 칼군무",
            "아무렇게나 마음대로 추는 막춤",
            "동작이 제각각인 불협화음 댄스"
          ],
          "answerIndex": 0,
          "explanation": "완벽한 싱크로율의 군무는 '칼군무'라고 부릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "K-Pop 앨범 전체를 유기적으로 연결하는 거대한 스토리와 가상 설정을 일컫는 용어는?",
          "options": [
            "세계관",
            "지구관",
            "입체관"
          ],
          "answerIndex": 0,
          "explanation": "K-Pop 음악과 뮤직비디오를 엮는 서사 구조를 '세계관(世界觀)'이라고 합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'음원 차트 역주행 신화를 썼어요'(They wrote a myth of chart reversal)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "음원 차트 역주행 신화를 썼어요.",
            "음원 차트 역주행 신화를 썼어요"
          ],
          "explanation": "음원 차트 + 역주행 신화를 + 썼어요 = 음원 차트 역주행 신화를 썼어요."
        }
      ]
    }
  },
  "ko-u24-l2": {
    "id": "ko-u24-l2",
    "subject": "korean",
    "unit": 24,
    "lessonNumber": 2,
    "title": "K-Drama 서사 구조와 클리셰 비평 어휘",
    "level": "B2",
    "objective": "한국 드라마(K-Drama)의 극적 구성(복선, 반전, 클리셰 전복, 입체적 인물, 사이다/고구마 전개)을 분석하는 전문 비평 어휘를 마스터한다.",
    "presentation": {
      "explanation": "K-Drama는 속도감 있는 전개, 치밀한 복선 회수, 매력적인 입체적 캐릭터 구축으로 전 세계 시청자를 사로잡고 있습니다.\n\n1. 드라마 서사 분석 전문 비평 용어:\n- **복선(Foreshadowing)과 회수**: 작가가 후반부 사건을 암시하기 위해 미리 깔아둔 장치와 이를 논리적으로 풀어내는 결말\n- **클리셰(Cliché)와 클리셰 전복**: '재벌 2세와 캔디형 여주인공' 같은 진부한 정형적 설정을 비틀어 신선한 충격을 주는 기법\n- **입체적 캐릭터(Multi-dimensional Character)**: 선과 악의 이분법을 넘어 인간적인 고뇌와 결핍을 지닌 복합적 인물\n- **개연성(Plausibility & Narrative Consistency)**: 사건 전개가 현실적 논리와 인과관계에 부합하는 정도\n- **사이다 전개 vs 고구마 전개**: 악인을 통쾌하게 응징하는 통쾌한 전개(사이다) vs 답답하고 억울한 상황이 지속되는 전개(고구마)",
      "examples": [
        {
          "target": "이 드라마는 뻔한 신데렐라 클리셰를 영리하게 전복하여 주체적인 여성 서사를 설득력 있게 구축했습니다.",
          "reading": "I deurama-neun ppeonhan sindereulla keullisye-reul yeongrihage jeonbokhayeo juchejeogin yeoseong seosa-reul seoldeungnyeok itge guchukhaetseumnida.",
          "translation": "This drama cleverly overturned typical Cinderella clichés ('클리셰를 영리하게 전복하여') to convincingly build an independent female narrative."
        },
        {
          "target": "초반부에 무심코 지나쳤던 사소한 소품 하나가 최종회에서 결정적인 반전 복선으로 완벽히 회수되었습니다.",
          "reading": "Chobanbu-e musimko jinachyeotdeon sasohan sopum hana-ga choejonghoe-eseo gyeoljeongjeogin banjeon bokseon-euro wanbyeokhi hoesudoeeotseumnida.",
          "translation": "A minor prop passed over casually in early episodes was perfectly recovered as a decisive twist foreshadowing in the finale ('복선으로 완벽히 회수되었습니다')."
        },
        {
          "target": "절대 악인으로만 보였던 악역에게도 처절한 서사와 결핍을 부여함으로써 한층 더 입체적이고 매력적인 캐릭터로 완성했습니다.",
          "reading": "Jeoldae agin-euro-man boyeotdeon agyeog-ege-do cheojeolhan seosa-wa gyeolpip-eul buyeoham-eurosseo hancheung deok ipchejeog-igo maeryeokjeogin kaerikteo-ro wanseonghaetseumnida.",
          "translation": "By granting tragic backstory and deficiency even to the villain who seemed purely evil, they completed a much more multi-dimensional and compelling character ('입체적이고 매력적인 캐릭터')."
        },
        {
          "target": "답답한 고구마 전개를 단숨에 날려버리는 주인공의 통쾌한 사이다 응징에 시청자들의 열광적인 호평이 쏟아졌습니다.",
          "reading": "Dapdaphan goguma jeon-gae-reul dansum-e nallyeobeorineun juin-gong-ui tonggwaehan saida eungjing-e sicheongjadeul-ui yeol-gwangjeogin hopyeong-i ssodajyeotseumnida.",
          "translation": "Viewers' enthusiastic acclaim poured in for the protagonist's exhilarating refreshing retribution ('사이다 응징') that blew away suffocating slow-paced plot in an instant."
        }
      ],
      "mnemonics": [
        "복선은 치밀하게 회수하고, 클리셰는 통쾌하게 전복하여 사이다 전개 완성!"
      ],
      "culturalNotes": [
        "한국 대중문화에서 '고구마(Sweet potato)'는 목이 메듯 답답한 상황을, '사이다(Cider/Soda)'는 탄산음료를 마신 듯 속이 뻥 뚫리고 통쾌한 순간을 가리키는 대표적인 현대 은유 표현입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "드라마에서 답답한 상황이 속 시원하게 해결되는 통쾌한 전개를 일컫는 한국어 신조어는?",
          "options": [
            "사이다 전개",
            "고구마 전개",
            "양파 전개"
          ],
          "answerIndex": 0,
          "explanation": "속이 뻥 뚫리듯 시원하고 통쾌한 전개를 '사이다 전개'라고 부릅니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "드라마 평론 중 '진부한 설정을 깨뜨리고 주체적 인물을 창조했다'를 가장 격조 높게 비평한 문장은?",
          "options": [
            "기존의 상투적인 클리셰를 과감히 탈피하여 생동감 넘치는 입체적 인물을 구현했다.",
            "기존의 상투적인 클리셰를 탈피하기는커녕 그대로 베껴서 졸작을 만들었다.",
            "기존의 상투적인 클리셰를 탈피하더라도 아무도 관심이 없을 것이다."
          ],
          "answerIndex": 0,
          "explanation": "'상투적인 클리셰를 과감히 탈피하여' + '입체적 인물을 구현했다'의 비평 문장이 완벽합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "소설이나 드라마에서 훗날 일어날 사건을 미리 은근히 암시해 두는 문학적 장치를 뜻하는 한자어는?",
          "options": [
            "복선",
            "곡선",
            "직선"
          ],
          "answerIndex": 0,
          "explanation": "사건의 결말이나 반전을 위해 미리 깔아두는 암시장치는 '복선'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'통쾌한 사이다 전개가 돋보여요'(The refreshing, exhilarating plot development stands out)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "통쾌한 사이다 전개가 돋보여요.",
            "통쾌한 사이다 전개가 돋보여요"
          ],
          "explanation": "통쾌한 사이다 전개가 + 돋보여요 = 통쾌한 사이다 전개가 돋보여요."
        }
      ]
    }
  },
  "ko-u24-l3": {
    "id": "ko-u24-l3",
    "subject": "korean",
    "unit": 24,
    "lessonNumber": 3,
    "title": "영화 비평 문법과 미장센 연출 분석 ('-(으)ㄴ/는 바 있다')",
    "level": "B2",
    "objective": "공식 비평문 문법 어미 '-(으)ㄴ/는 바 있다'와 영화 미학 전문 용어(미장센, 영상미, 주제 의식, 몰입감)를 결합하여 수준 높은 영화 평론을 작성한다.",
    "presentation": {
      "explanation": "1. 영화 비평 공식 문법 어미 **'-(으)ㄴ/는 바 있다'**:\n- 격식 있는 비평문, 논평, 기사에서 '과거에 특정한 경험이나 선례, 공식적 사실이 존재함'을 품격 있게 서술할 때 사용합니다.\n- 결합: 동사 과거 → **-(으)ㄴ 바 있다** (감독이 인터뷰에서 **밝힌 바 있다** / 칸 영화제에서 황금종려상을 **수상한 바 있다**)\n\n2. 영화 연출 및 미학 비평 어휘:\n- **미장센(Mise-en-scène)**: 화면 속 모든 시각적 요소(조명, 인물 배치, 카메라 앵글, 색채 구도)를 총체적으로 연출하는 미학\n- **영상미(Visual Aesthetics)**: 관객의 시선을 압도하는 감각적이고 수려한 시각적 연출미\n- **주제 의식(Thematic Consciousness)**: 작품 전체를 관통하며 인간과 사회의 본질을 파헤치는 감독의 철학적 메시지\n- **몰입감(Immersiveness)**: 관객을 스크린 속 세계로 순식간에 빨아들이는 흡인력",
      "examples": [
        {
          "target": "봉준호 감독은 전작 『기생충』을 통해 자본주의 계급 사회의 모순을 날카롭게 고발한 바 있습니다.",
          "reading": "Bong Jun-ho gamdok-eun jeonjak Gisaengchung-eul tonghae jabonjuui gyegeup sahoe-ui mosun-eul nalkaropge gobalhan ba itseumnida.",
          "translation": "Director Bong Joon-ho has sharply indicted the contradictions of capitalist class society through his previous work Parasite ('고발한 바 있습니다')."
        },
        {
          "target": "정교하게 계산된 조명과 공간 배치가 돋보이는 미장센은 인물의 불안한 내면 심리를 탁월하게 시각화했습니다.",
          "reading": "Jeonggyohage gyesandoen jomyeong-gwa gonggan baechi-ga dotboineun mijangsaen-eun inmul-ui buranhan naemyeon simri-reul tagwolhage sigakhwahaetseumnida.",
          "translation": "The mise-en-scène featuring elaborately calculated lighting and spatial arrangement superbly visualized the character's anxious internal psychology."
        },
        {
          "target": "압도적인 영상미와 웅장한 오케스트라 사운드트랙이 결합하여 관객들에게 극도의 몰입감을 선사했습니다.",
          "reading": "Apdodoegin yeongsangmi-wa ungjanghan okeseuteura saundeuteuraek-i gyeolhaphayeo gwan-gaekdeul-ege geukdo-ui moripgam-eul seonsahaetseumnida.",
          "translation": "Overwhelming visual aesthetics combined with a magnificent orchestral soundtrack to gift audiences extreme immersiveness ('극도의 몰입감을 선사했습니다')."
        },
        {
          "target": "심사위원단은 이 작품이 독창적인 장르적 재미를 확보했을 뿐만 아니라 묵직한 시대적 주제 의식을 담아냈다고 높이 평가한 바 있습니다.",
          "reading": "Simsawiwondan-eun i jakpum-i dokchangjeogin jangreojeok jaemi-reul hwakbohaesseul ppunman anira mukjikhan sidaejeok juje uisik-eul damanaetdago nopi pyeonggahan ba itseumnida.",
          "translation": "The jury panel has highly evaluated that this work not only secured original genre fun but also captured a weighty thematic consciousness of the era ('평가한 바 있습니다')."
        }
      ],
      "mnemonics": [
        "역사적 사실·선례 서술엔 '-(으)ㄴ 바 있다', 화면 연출의 정수는 '미장센'!"
      ],
      "culturalNotes": [
        "한국의 영화 평론가들은 '왓챠피디아'나 영화 전문지 『씨네21』의 한 줄 평에서 '-(으)ㄴ 바 있다', '미장센', '영상미' 등의 정제된 미학 어휘를 즐겨 사용하여 작품의 예술적 성취를 압축합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'감독이 인터뷰에서 그 사실을 이미 말한 적이 있다'를 품격 높은 비평문으로 전환한 표현은?",
          "options": [
            "감독이 공식 인터뷰에서 직접 밝힌 바 있습니다.",
            "감독이 공식 인터뷰에서 직접 밝히더라도 있습니다.ㄴ/는 바 있다'",
            "감독이 공식 인터뷰에서 직접 밝히기는커녕 있습니다.ㄴ/는 바 있다'"
          ],
          "answerIndex": 0,
          "explanation": "공식 선례나 과거 사실을 격조 높게 서술하므로 '밝힌 바 있습니다'가 가장 적합합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "영화의 시각적 구도 연출을 전문적으로 칭찬하는 가장 탁월한 비평 문장은?",
          "options": [
            "어둠과 빛의 강렬한 대비를 활용한 미장센이 인물의 고독감을 극대화했다.",
            "어둠과 빛의 강렬한 대비를 활용할수록 카메라가 고장 났다.ㄴ/는 바 있다'",
            "어둠과 빛의 강렬한 대비를 활용하는 대신에 영화를 상영하지 않았다.ㄴ/는 바 있다'"
          ],
          "answerIndex": 0,
          "explanation": "화면 내 시각 요소 배치를 뜻하는 '미장센이 인물의 고독감을 극대화했다'가 완벽합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 '-(으)ㄴ 바 있다'의 문법적 기능으로 알맞은 것은?",
          "options": [
            "과거의 특정한 경험, 선례, 역사적 사실을 격식 있게 진술한다. (-(으)ㄴ 바 있다는 공식 문어체에서 과거의 선례나 사실을 진술할 때 쓰입니다.",
            "미래에 일어날 사태를 추측하며 의문을 제기한다.ㄴ/는 바 있다'",
            "명령이나 청유형으로 상대방의 행동을 촉구한다.ㄴ/는 바 있다'"
          ],
          "answerIndex": 0,
          "explanation": "'-(으)ㄴ 바 있다'는 공식 문어체에서 과거의 선례나 사실을 진술할 때 쓰입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'국제 영화제에서 수상한 바 있어요'(It has won awards at international film festivals)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "국제 영화제에서 수상한 바 있어요.",
            "국제 영화제에서 수상한 바 있어요"
          ],
          "explanation": "국제 영화제에서 + 수상한 바 있어요 = 국제 영화제에서 수상한 바 있어요."
        }
      ]
    }
  },
  "ko-u24-l4": {
    "id": "ko-u24-l4",
    "subject": "korean",
    "unit": 24,
    "lessonNumber": 4,
    "title": "웹툰 원작 영상화(OSMU)와 K-콘텐츠 글로벌 확산 분석",
    "level": "B2",
    "objective": "K-웹툰의 지식재산권(IP) 확장, 원작과의 싱크로율 분석, 글로벌 OTT 스트리밍 플랫폼을 통한 한류 신드롬을 진단하는 비평 어휘를 익힌다.",
    "presentation": {
      "explanation": "한국의 디지털 만화인 웹툰(Webtoon)은 독창적인 스토리텔링의 보고로서 전 세계 드라마·영화·게임으로 확장되는 OSMU(One Source Multi Use)의 중심축입니다.\n\n1. 웹툰 원작 영상화 및 글로벌 미디어 전문 어휘:\n- **지식재산권(IP, Intellectual Property)**: 웹툰, 웹소설 등 다양한 포맷으로 무한 확장 가능한 원천 창작물 자산\n- **싱크로율(Synchronization Rate)**: 웹툰 원작 캐릭터의 외모, 성격, 분위기가 실사 드라마 배우와 일치하는 정도 (\"캐스팅 싱크로율 100%\")\n- **원작 초월(Exceeding the Original)**: 원작의 재미와 완성도를 뛰어넘는 연출과 각색을 보여준 웰메이드 영상화 작품\n- **글로벌 OTT 플랫폼(Over-the-top)**: 넷플릭스, 디즈니+ 등 전 세계 동시 스트리밍을 통해 K-콘텐츠의 시공간적 접근성을 혁신한 매체\n- **신드롬(Syndrome)**: 특정 작품이 전 세계적 대유행을 일으켜 패션, 대사, 관광지까지 사회적 열풍으로 번지는 현상",
      "examples": [
        {
          "target": "인기 웹툰을 원작으로 한 이 드라마는 원작 캐릭터와의 완벽한 싱크로율을 자랑하며 방영 첫 주부터 폭발적인 반응을 얻었습니다.",
          "reading": "Inki weptun-eul wonjak-euro han i deurama-neun wonjak kaerikteo-wa-ui wanbyeokhan singkeuroyul-eul jaranghamyeo bang-yeong cheot ju-buteo pokbaljeogin baneung-eul eotseumnida.",
          "translation": "This drama based on a popular webtoon boasted a perfect synchronization rate with original characters ('완벽한 싱크로율을 자랑하며') and gained explosive response from the first week of broadcast."
        },
        {
          "target": "성공적인 K-웹툰 원작의 영상화는 강력한 원천 IP의 글로벌 확장을 증명하는 대표적인 OSMU 성공 사례로 꼽힙니다.",
          "reading": "Seong-gongjeogin K-weptun wonjak-ui yeongsanghwa-neun gangnyeokhan woncheon IP-ui geullobeol hwakjang-eul jeungmyeonghaneun daepyojeogin OSMU seong-gong sarye-ro kkophimnida.",
          "translation": "Successful screen adaptation of K-webtoons is cited as a representative OSMU success case proving global expansion of powerful source IP ('강력한 원천 IP')."
        },
        {
          "target": "글로벌 OTT 스트리밍 서비스를 통해 전 세계 190개국에 동시 공개되면서 비영어권 드라마 부문 시청 순위 1위를 기록했습니다.",
          "reading": "Geullobeol OTT seuteuriming seobiseu-reul tonghae jeon segye baekgusipgaeguk-e dongsi gonggaedoemyeonseo bi-yeongeo-gwon deurama bumun sicheong sunwi irwi-reul girokhaetseumnida.",
          "translation": "As it was released simultaneously across 190 countries worldwide via global OTT streaming services, it recorded 1st place in viewership rankings for non-English dramas."
        },
        {
          "target": "치밀한 각색과 몰입감 높은 연출력 덕분에 원작 팬들 사이에서도 '원작 초월의 명작'이라는 찬사를 받았습니다.",
          "reading": "Chimilhan gakseok-gwa moripgam nopeun yeonchullyeok deokbun-e wonjak paendeul saieseo-do 'wonjak chowol-ui myeongjak'-iraneun chansa-reul batatseumnida.",
          "translation": "Thanks to meticulous adaptation and highly immersive directing, it received praise even among original fans as a 'masterpiece exceeding the original ('원작 초월의 명작').'"
        }
      ],
      "mnemonics": [
        "탄탄한 웹툰 IP, 100% 캐스팅 싱크로율, 글로벌 OTT로 세계 제패!"
      ],
      "culturalNotes": [
        "『이태원 클라쓰』, 『지금 우리 학교는』, 『무빙』 등 K-웹툰 기반 드라마들이 전 세계적인 메가 히트를 기록하면서 한국은 글로벌 콘텐츠 지식재산권(IP)의 핵심 허브로 도약했습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "웹툰 캐릭터와 실사 드라마 배우의 외모와 이미지 일치도를 뜻하는 대중문화 용어는?",
          "options": [
            "싱크로율",
            "일치율",
            "비율"
          ],
          "answerIndex": 0,
          "explanation": "가상 캐릭터와 실존 인물 간의 이미지 일치 정도는 '싱크로율'이라고 표현합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "하나의 원작 소설이나 웹툰을 영화, 드라마, 뮤지컬, 게임 등 다양한 장르로 재생산하는 비즈니스 모델은?",
          "options": [
            "OSMU",
            "ASMR",
            "B2B"
          ],
          "answerIndex": 0,
          "explanation": "하나의 원천 지식재산권을 다각도로 활용하는 미디어 전략은 OSMU(원 소스 멀티 유즈)입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "원작의 한계를 뛰어넘어 영상화 작품이 훨씬 더 뛰어난 완성도를 보여주었을 때 보내는 찬사는?",
          "options": [
            "원작 초월",
            "원작 파괴",
            "원작 모방"
          ],
          "answerIndex": 0,
          "explanation": "원작보다 더 훌륭하게 각색·연출된 작품을 '원작 초월'의 명작이라고 부릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'캐스팅 싱크로율이 정말 완벽해요'(The casting synchronization rate is truly perfect)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "캐스팅 싱크로율이 정말 완벽해요.",
            "캐스팅 싱크로율이 정말 완벽해요"
          ],
          "explanation": "캐스팅 싱크로율이 + 정말 완벽해요 = 캐스팅 싱크로율이 정말 완벽해요."
        }
      ]
    }
  },
  "ko-u24-l5": {
    "id": "ko-u24-l5",
    "subject": "korean",
    "unit": 24,
    "lessonNumber": 5,
    "title": "국제 영화제 심사위원 총평 및 대중문화 팟캐스트 실전 비평 담화",
    "level": "B2",
    "objective": "팬덤 생태계, 서사 클리셰 전복, 미장센 연출, 웹툰 IP 확장, '-(으)ㄴ/는 바 있다'를 융합하여 국제 영화제 총평 및 심층 평론 팟캐스트 실전 담화를 완성한다.",
    "presentation": {
      "explanation": "대중문화 평론가, 영화제 심사위원, 문화부 기자의 심층 비평 담화는 감각적인 수사와 논리적인 문법 구조를 완벽하게 결합합니다.\n\n1. 부산국제영화제(BIFF) 영화 평론 팟캐스트 실전 비평 담화 모델:\n- 진행자: 청취자 여러분 안녕하십니까. 오늘 영화 비평 코너에서는 이번 국제영화제에서 심사위원 대상을 수상한 화제작 『새벽의 경계』를 집중 분석해 보겠습니다. 평론가님, 이 작품의 가장 큰 성취는 무엇일까요?\n- 평론가: 네, 이 작품은 인기 웹툰을 원작으로 삼았음에도 단순한 실사 재현에 그치지 않고, 원작의 서사를 과감히 전복하여 묵직한 사회적 주제 의식을 담아낸 바 있습니다.\n- 진행자: 맞습니다. 특히 후반부의 반전 복선 회수가 대단히 압도적이었습니다.\n- 평론가: 그렇습니다. 통상적인 스릴러 장르의 클리셰를 영리하게 비틀었을 뿐만 아니라, 차가운 푸른빛과 붉은 조명을 극적으로 대비시킨 미장센은 인물의 파멸과 구원을 시각적으로 완벽히 구현했습니다. 글로벌 OTT를 통해 전 세계 관객과 만나더라도 K-콘텐츠의 저력을 유감없이 증명할 명작입니다.",
      "examples": [
        {
          "target": "본 심사위원단은 이 영화가 보여준 독창적인 미학적 성취와 인간 실존에 대한 깊이 있는 탐구에 만장일치로 대상을 수여한 바 있습니다.",
          "reading": "Bon simsawiwondan-eun i yeonghwa-ga boyeojun dokchangjeogin miakjeok seongchwi-wa in-gan siljon-e daehan gipi inneun tamgu-e manjang-ilchiro daesang-eul suyeohan ba itseumnida.",
          "translation": "This jury panel has unanimously awarded the Grand Prize to the original aesthetic achievement and in-depth inquiry into human existence demonstrated by this film ('수여한 바 있습니다')."
        },
        {
          "target": "대중적인 장르적 쾌감을 극대화하는 한편, 날카로운 사회 비판적 시선을 결코 놓치지 않은 연출력이 실로 경이롭습니다.",
          "reading": "Daejungjeogin jangreojeok gwaegam-eul geukdaehwahaneun hanpyeon, nalkaroun sahoe bipanjeok siseon-eul gyeolko notchiji aneun yeonchullyeog-i silro gyeong-iropssumnida.",
          "translation": "The directing power that maximized popular genre pleasure on one hand while never losing a sharp socially critical gaze is truly marvelous ('극대화하는 한편')."
        },
        {
          "target": "원작 웹툰 팬덤의 뜨거운 기대를 뛰어넘는 파격적인 각색과 배우들의 신들린 열연이 환상적인 시너지를 창출했습니다.",
          "reading": "Wonjak weptun paendeom-ui tteugeoun gidae-reul tti-eoneomneun pagyeokjeogin gakseok-gwa baeudeul-ui sindeullin yeol-yeon-i hwansangjeogin sineoji-reul changchulhaetseumnida.",
          "translation": "Unconventional adaptation exceeding the fervent expectations of the original webtoon fandom and the actors' possessed passionate acting created fantastic synergy."
        },
        {
          "target": "치밀하게 배치된 미장센과 긴장감 넘치는 사운드 디자인은 러닝타임 내내 관객을 스크린 속으로 몰입시키기에 충분했습니다.",
          "reading": "Chimilhage baechidoen mijangsaen-gwa ginjanggam neomchineun saundeu dijain-eun reoningtaim naenae gwan-gaek-eul seukeurin sog-euro moripsikigi-e chungbunhaetseumnida.",
          "translation": "Meticulously arranged mise-en-scène and suspenseful sound design were more than sufficient to immerse audiences into the screen throughout the running time."
        }
      ],
      "mnemonics": [
        "비평할 땐 '-(으)ㄴ 바 있다', 미학엔 '미장센', 서사엔 '클리셰 전복'과 '원작 초월'!"
      ],
      "culturalNotes": [
        "부산국제영화제(BIFF), 부천국제판타스틱영화제(BIFAN), 전주국제영화제(JIFF)는 아시아를 대표하는 3대 영화 축제로서 K-무비의 세계적 담론 형성과 신진 감독 발굴을 주도합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "영화 평론가가 심사위원 총평에서 만장일치 대상 수여 사실을 공식적으로 밝힐 때 가장 알맞은 문장은?",
          "options": [
            "심사위원단은 이 작품의 뛰어난 미학적 성취를 인정하여 만장일치로 대상을 수여한 바 있습니다. (공식 심사 총평의 격조 높은 진술에는 수여한 바 있습니다가 가장 적합합니다.) (팬덤 생태계, 서사 클리셰 전복, 미장센 연출, 웹툰 IP 확장, '-(으)ㄴ/는 바 있다'를 융합하여 국제 영화제 총평 및 심층 평론 팟캐스트 실전 담화를 완성한다.",
            "심사위원단은 대상을 수여하기는커녕 모두 영화관을 뛰쳐나갔습니다.",
            "심사위원단은 대상을 수여하더라도 상금을 주지 않았습니다."
          ],
          "answerIndex": 0,
          "explanation": "공식 심사 총평의 격조 높은 진술에는 '수여한 바 있습니다'가 가장 적합합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "영화 평론 팟캐스트 중 장르적 재미와 사회 비판의 양면을 균형 있게 칭찬한 문장은?",
          "options": [
            "통쾌한 장르적 쾌감을 선사하는 한편, 현대 사회의 부조리를 날카롭게 통찰했습니다. (재미와 사회 비판의 조화로운 공존을 서술하므로 -는 한편(선사하는 한편)이 가장 탁월합니다.) (팬덤 생태계, 서사 클리셰 전복, 미장센 연출, 웹툰 IP 확장, '-(으)ㄴ/는 바 있다'를 융합하여 국제 영화제 총평 및 심층 평론 팟캐스트 실전 담화를 완성한다.",
            "통쾌한 장르적 쾌감을 선사할수록 현대 사회의 부조리가 심해졌습니다.",
            "통쾌한 장르적 쾌감을 선사하더라도 재미가 전혀 없었습니다."
          ],
          "answerIndex": 0,
          "explanation": "재미와 사회 비판의 조화로운 공존을 서술하므로 '-는 한편(선사하는 한편)'이 가장 탁월합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 K-콘텐츠 및 영화 비평 전문 용어가 가장 올바르게 쓰인 것은?",
          "options": [
            "감독은 정교한 미장센을 통해 계급 갈등의 주제 의식을 훌륭히 형상화했습니다. (미장센과 주제 의식의 형상화는 영화 비평의 정통 전문 어휘입니다.) (팬덤 생태계, 서사 클리셰 전복, 미장센 연출, 웹툰 IP 확장, '-(으)ㄴ/는 바 있다'를 융합하여 국제 영화제 총평 및 심층 평론 팟캐스트 실전 담화를 완성한다.",
            "감독은 칼군무를 추면서 영화 필름을 가위로 잘랐습니다.",
            "배우는 사이다 전개 대신에 콜라 전개를 요구했습니다."
          ],
          "answerIndex": 0,
          "explanation": "'미장센'과 '주제 의식의 형상화'는 영화 비평의 정통 전문 어휘입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'원작을 뛰어넘는 명작으로 평가받았어요'(It was evaluated as a masterpiece exceeding the original)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "원작을 뛰어넘는 명작으로 평가받았어요.",
            "원작을 뛰어넘는 명작으로 평가받았어요"
          ],
          "explanation": "원작을 뛰어넘는 + 명작으로 + 평가받았어요 = 원작을 뛰어넘는 명작으로 평가받았어요."
        }
      ]
    }
  },
  "ko-u25-l1": {
    "id": "ko-u25-l1",
    "subject": "korean",
    "unit": 25,
    "lessonNumber": 1,
    "title": "발효의 미학과 전통 장류 문화 (Fermentation Arts)",
    "level": "C1",
    "objective": "한식의 근간을 이루는 발효 과학(메주, 된장, 간장, 고추장, 옹기 숨쉬기)과 숙성에 따른 깊은 풍미를 서술하는 최고급 어휘를 체화한다.",
    "presentation": {
      "explanation": "한식(Hansik)은 '기다림과 시간의 예술'이라 불리는 **발효(Fermentation)** 문화에 뿌리를 두고 있습니다.\n\n1. 전통 장류(Fermented Sauces) 및 발효 어휘 체계:\n- **메주(Fermented Soybean Block)**: 삶은 콩을 찧어 네모나게 빚은 후 볏짚에 매달아 자연 미생물로 발효시킨 장류의 원천\n- **삼대 전통 장류**: \n  - **간장(Soy Sauce)**: 메주를 소금물에 담가 우려낸 뒤 달여 만든 맑고 깊은 짠맛의 액체 장\n  - **된장(Soybean Paste)**: 간장을 뜨고 남은 메주 건더기를 치대어 항아리에 숙성시킨 구수한 장\n  - **고추장(Red Pepper Paste)**: 찹쌀가루, 엿기름, 메줏가루, 고춧가루를 섞어 칼칼하면서도 은은한 단맛을 내는 복합 발효장\n- **숨 쉬는 옹기(Breathing Onggi / Earthenware)**: 미세한 기공을 통해 외부 공기와 통기하며 내부 발효 미생물을 건강하게 활성화하는 전통 용기\n- **감칠맛(Umami)과 곰삭다(Mellowly Aged)**: 세월의 숙성을 거쳐 잡내 없이 깊고 그윽하게 우러나온 풍미",
      "examples": [
        {
          "target": "전통 한옥의 장독대에 정갈하게 늘어선 숨 쉬는 옹기 속에서 장류가 사계절의 비바람과 햇살을 받으며 깊게 곰삭아 갑니다.",
          "reading": "Jeontong hanok-ui jangdokdae-e jeonggalhage neureoseon sum swineun onggi sok-eseo jangryu-ga sagyejeol-ui bibaram-gwa haessal-eul badeumyeo gipge gomsak-a gamnida.",
          "translation": "Inside breathing earthenware neatly lined up on the platform of a traditional Hanok ('장독대'), the fermented sauces mellowly age ('깊게 곰삭아 갑니다') through four seasons of rain, wind, and sunlight."
        },
        {
          "target": "잘 띄운 메주로 담근 3년 묵은 된장찌개는 인공 조미료가 결코 흉내 낼 수 없는 그윽하고 깊은 감칠맛을 자아냅니다.",
          "reading": "Jal ttiun meju-ro damgeun samnyeon mugeun doenjangjjigae-neun in-gong jomiryo-ga gyeolko hyungnae nael su eomneun geueukhago gipeun gamchilmmat-eul jaanaemnida.",
          "translation": "Three-year-aged soybean paste stew brewed with well-fermented meju evokes a profound and deep umami ('깊은 감칠맛') that artificial seasoning can never replicate."
        },
        {
          "target": "한국의 김치와 장류는 단순한 염장이 아니라 유익한 유산균이 살아 숨 쉬는 세계적인 발효 과학의 결정체입니다.",
          "reading": "Hanguk-ui gimchi-wa jangryu-neun dansunhan yeomjang-i anira yuikhan yusangyun-i sara swineun segyejeogin balhyo gwahak-ui gyeoljeongche-imnida.",
          "translation": "Korean kimchi and fermented sauces are not mere salting, but the crystallization of world-class fermentation science ('발효 과학의 결정체') where beneficial lactic acid bacteria live and breathe."
        },
        {
          "target": "종갓집 씨간장은 대를 이어 수백 년 동안 덧간장을 부어가며 유지해 온 가문의 귀중한 미식 유산입니다.",
          "reading": "Jonggatjip ssiganjang-eun dae-reul ieo subaek nyeon dong-an deotganjang-eul bueogamyeo yujihae on gamun-ui gwijunghan misik yusan-imnida.",
          "translation": "The master seed soy sauce of the head family is a precious gastronomic heritage of the clan, maintained for hundreds of years across generations by continually adding newly brewed soy sauce."
        }
      ],
      "mnemonics": [
        "볏짚에 띄운 메주로 간장·된장 가르고, 옹기 속에서 곰삭아 깊은 감칠맛 완성!"
      ],
      "culturalNotes": [
        "한국의 '장 담그기 문화'는 유네스코 인류무형문화유산 등재가 추진될 만큼 민족의 정체성과 공동체 결속을 상징하는 대표적 식문화 유산입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "삶은 콩을 찧어 볏짚으로 묶어 자연 발효시킨 한국 전통 장류의 원형 블록은?",
          "options": [
            "메주",
            "두부",
            "청국장"
          ],
          "answerIndex": 0,
          "explanation": "간장과 된장을 만드는 기본 발효 콩 덩어리를 '메주'라고 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "오랜 시간 자연 발효되어 깊고 부드러운 감칠맛을 내는 상태를 가장 아름답게 표현한 한국어 동사는?",
          "options": [
            "곰삭다",
            "상하다",
            "태우다"
          ],
          "answerIndex": 0,
          "explanation": "젓갈이나 장류가 오랜 세월 푹 삭아서 맛이 깊어지는 것을 '곰삭다'라고 합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "미세한 숨구멍을 통해 발효 미생물의 활동을 돕는 한국의 전통 도자기는?",
          "options": [
            "옹기 / 항아리",
            "유리병",
            "플라스틱 통"
          ],
          "answerIndex": 0,
          "explanation": "흙으로 빚어 숨을 쉬는 전통 도기를 '옹기(甕器)' 또는 '항아리'라고 합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'발효의 미학과 깊은 감칠맛이 살아있어요'(The aesthetics of fermentation and deep umami are alive)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "발효의 미학과 깊은 감칠맛이 살아있어요.",
            "발효의 미학과 깊은 감칠맛이 살아있어요"
          ],
          "explanation": "발효의 미학과 + 깊은 감칠맛이 + 살아있어요 = 발효의 미학과 깊은 감칠맛이 살아있어요."
        }
      ]
    }
  },
  "ko-u25-l2": {
    "id": "ko-u25-l2",
    "subject": "korean",
    "unit": 25,
    "lessonNumber": 2,
    "title": "음양오행과 오방색의 한식 철학 및 궁중 수라상",
    "level": "C1",
    "objective": "우주 자연의 섭리를 식탁에 담아낸 음양오행(陰陽五行), 오방색(五方色), 약식동원(藥食同源) 사상과 조선 왕실 궁중음식의 품격을 이해한다.",
    "presentation": {
      "explanation": "한식은 단순한 영양 섭취를 넘어 우주의 질서와 인체의 균형을 조화롭게 다스리는 심오한 철학적 배경을 지니고 있습니다.\n\n1. 한식의 3대 핵심 철학:\n- **약식동원(藥食同源, Food as Medicine)**: '음식과 약은 그 근원이 같다'는 뜻으로, 제철 바른 먹거리가 최고의 보약이라는 사상\n- **음양오행설(Yin-Yang and Five Elements)**: 목(木), 화(火), 토(土), 금(金), 수(水)의 오행 원리가 인체의 오장육부와 음식의 맛(오미: 산, 고, 감, 신, 함)에 상응함\n- **오방색(五方色, Five Cardinal Colors)**: \n  - **청(靑, Green/Blue)**: 간(肝)을 보호하며 봄과 생명을 상징 (미나리, 오이, 시금치)\n  - **적(赤, Red)**: 심장(心)을 보호하며 여름과 열정을 상징 (고추, 당근, 대추)\n  - **황(黃, Yellow)**: 비위(脾)를 편안히 하며 대지를 상징 (달걀지단, 호박, 도라지)\n  - **백(白, White)**: 폐(肺)를 다스리며 순수와 가을을 상징 (무, 밥, 백김치, 배)\n  - **흑(黑, Black)**: 신장(腎)을 보양하며 겨울과 지혜를 상징 (목이버섯, 검은깨, 김)\n\n2. 조선 왕실 궁중 수라상(Royal Court Cuisine):\n- 국왕에게 아침·저녁으로 올리던 12첩 반상으로, 전국 팔도에서 올라온 최고급 진상품으로 차려져 백성들의 농사 형편과 민심을 살피는 통치 의전이었습니다.",
      "examples": [
        {
          "target": "전통 비빔밥과 구절판은 청, 적, 황, 백, 흑의 오방색 고명이 완벽한 시각적·영양학적 균형을 이루는 한식의 백미입니다.",
          "reading": "Jeontong bibimbap-gwa gujeolpan-eun cheong, jeok, hwang, baek, heuk-ui obangsaek gomyeong-i wanbyeokhan sigakjeok·yeongyanghakjeok gyunhyeong-eul iruneun hansik-ui baengmi-imnida.",
          "translation": "Traditional bibimbap and Gujeolpan (platter of nine delicacies) are the pinnacle of Hansik where the five cardinal color garnishes ('오방색 고명') achieve perfect visual and nutritional balance."
        },
        {
          "target": "'음식이 곧 최고의 명약'이라는 약식동원 사상에 따라 조상들은 계절마다 몸을 보양하는 제철 식재료를 엄선했습니다.",
          "reading": "'Eumsig-i got choego-ui myeong-yak'-iraneun yaksikdong-won sasang-e ttara josangdeul-eun gyejeolmada mom-eul boyanghaneun jecheol sikjaeryo-reul eomseonhaetseumnida.",
          "translation": "In accordance with the Food as Medicine philosophy ('약식동원 사상'), ancestors rigorously selected seasonal ingredients that invigorated the body in each season."
        },
        {
          "target": "조선 왕실의 수라상은 단순한 호화로운 식사를 넘어 전국 각지의 작황과 팔도 백성의 삶을 헤아리던 정치적 의전이었습니다.",
          "reading": "Joseon wangsil-ui surasang-eun dansunhan hohwaroun siksa-reul neomeo jeon-guk gakji-ui jakhwang-gwa paldo baekseong-ui salm-eul he-arideon jeongchijeok uijeon-ieotseumnida.",
          "translation": "The Royal Table ('수라상') of the Joseon dynasty went beyond a mere luxurious meal to be a political protocol considering harvest conditions across the country and the lives of people in the eight provinces."
        },
        {
          "target": "궁중 궁녀들의 정성 어린 손길로 빚어낸 신선로는 은은한 화로 열기 속에서 온갖 귀한 산해진미가 어우러집니다.",
          "reading": "Gungjung gungnyeo-deul-ui jeongseong eorin son-gil-ro bijeonaen sinseonro-neun euneunhan hwaro yeolgi sog-eseo on-gat gwihan sanhaejinmi-ga eoureojimnida.",
          "translation": "Sinseonro (Royal hot pot) crafted by court ladies' devoted touch harmonizes all sorts of precious delicacies of land and sea amid the gentle warmth of the brazier."
        }
      ],
      "mnemonics": [
        "밥이 곧 보약인 약식동원, 청·적·황·백·흑 오방색으로 수라상 완성!"
      ],
      "culturalNotes": [
        "구절판(九折坂)은 아홉 칸으로 나뉜 찬합에 오방색 재료를 정갈하게 담아 밀전병에 싸 먹는 대표적 궁중 연회 요리로, 완전함과 화합을 상징합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "'음식과 약은 그 근원이 같아 바른 식습관이 병을 다스린다'는 한식의 대표적 건강 철학은?",
          "options": [
            "약식동원",
            "작심삼일",
            "동상이몽"
          ],
          "answerIndex": 0,
          "explanation": "'약식동원(Food and medicine share the same origin)'은 한식 영양 철학의 근간입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "한식의 오방색(Five cardinal colors)에 해당하는 색깔의 올바른 조합은?",
          "options": [
            "청(Green/Blue), 적(Red), 황(Yellow), 백(White), 흑",
            "보라, 주황, 분홍, 갈색, 회색",
            "금색, 은색, 동색, 청동색, 백금색"
          ],
          "answerIndex": 0,
          "explanation": "전통 오방색은 청, 적, 황, 백, 흑 다섯 가지 색상입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "조선 시대 왕에게 바치던 가장 격조 높은 진지를 뜻하는 궁중 높임말은?",
          "options": [
            "수라 (水剌 / 수라상) (임금에게 올리는 밥상을 수라상(水剌床)이라고 부릅니다.",
            "밥",
            "진지"
          ],
          "answerIndex": 0,
          "explanation": "임금에게 올리는 밥상을 '수라상(水剌床)'이라고 부릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'오방색의 조화와 약식동원 철학'(Harmony of five colors and food-as-medicine philosophy)을 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "오방색의 조화와 약식동원 철학",
            "오방색의 조화와 약식동원 철학."
          ],
          "explanation": "오방색의 조화와 + 약식동원 철학 = 오방색의 조화와 약식동원 철학."
        }
      ]
    }
  },
  "ko-u25-l3": {
    "id": "ko-u25-l3",
    "subject": "korean",
    "unit": 25,
    "lessonNumber": 3,
    "title": "반상 차림과 전통 식사 예절 (Table Protocol & Etiquette)",
    "level": "C1",
    "objective": "첩수(3첩, 5첩, 7첩, 9첩, 12첩)에 따른 반상 차림 구성과 어른에 대한 공경을 담은 정통 한국 식사 예절을 마스터한다.",
    "presentation": {
      "explanation": "한국의 전통 식사는 밥과 국을 기본으로 찬(반찬)의 가짓수에 따라 위계와 품격을 갖추는 **반상(飯床)** 문화를 발달시켰습니다.\n\n1. 반상 차림 첩수(Cheop / Number of Side Dishes) 규범:\n- **기본 구성(첩수에 미포함)**: 밥, 국, 김치, 장류, 찌개, 찜은 기본 제공\n- **3첩 반상**: 서민들의 소박한 일상 상차림 (나물, 구이, 조림 등 3가지 찬)\n- **5첩 / 7첩 반상**: 여유 있는 양반가의 평상식 및 손님 접대상\n- **9첩 반상**: 사대부가의 최고 귀빈 접대상 (민간에서 허용된 최대 첩수)\n- **12첩 반상**: 오직 국왕(임금)의 수라상에만 올릴 수 있었던 절대적 궁중 상차림\n\n2. 한국의 엄격한 전통 식사 예절(Dining Etiquette):\n- **식사 시작**: 동석한 어른이 먼저 숟가락을 드신 후에 아랫사람이 수저를 듭니다.\n- **수저 사용 원칙**: 숟가락과 젓가락을 한 손에 동시에 쥐지 않으며, 밥과 국은 숟가락으로, 반찬은 젓가락으로 먹습니다.\n- **그릇 파지 금지**: 밥그릇이나 국그릇을 손으로 들고 먹지 않고(개처럼 먹는다는 금기), 바닥에 놓은 채 수저로 떠먹습니다.\n- **소리와 속도**: 음식을 씹을 때 쩝쩝 소리를 내지 않으며, 어른의 식사 속도에 맞추어 너무 빠르거나 늦지 않게 마칩니다.",
      "examples": [
        {
          "target": "한국 식문화에서는 어른께서 먼저 수저를 드실 때까지 기다렸다가 식사를 시작하는 것이 가장 기본적인 공경의 도리입니다.",
          "reading": "Hanguk sikmunhwa-eseoneun eoreun-kkeseo meonjeo sujeo-reul deusil ttae-kkaji gidaryeotdaga siksa-reul sijakhaneun geos-i gajang gibonjeogin gong-gyeong-ui dori-imnida.",
          "translation": "In Korean food culture, waiting until the elder picks up the spoon and chopsticks first ('어른께서 먼저 수저를 드실 때까지') before starting to eat is the most fundamental duty of respect."
        },
        {
          "target": "사대부 종가에서는 귀한 손님이 방문하셨을 때 정갈한 9첩 반상을 정성껏 차려 극진히 대접했습니다.",
          "reading": "Sadaebu jongga-eseoneun gwihan sonnim-i bangmunhasyeosseul ttae jeonggalhan guchop bansang-eul jeongseongkkeot charyeo geukjinhi daejeophaetseumnida.",
          "translation": "In aristocratic head families, when precious guests visited, they devotedly set a neat 9-dish table ('9첩 반상') to treat them with utmost hospitality."
        },
        {
          "target": "식사 중에는 밥그릇이나 국그릇을 손으로 들고 마시지 않으며, 숟가락과 젓가락을 한 손에 나란히 쥐지 않는 것이 바른 예절입니다.",
          "reading": "Siksa jung-eneun bapgeureut-ina gukgeureut-eul son-euro deulgo masiji aneumyeo, sutgarak-gwa jeotgarak-eul han son-e naranhi jwiji anneun geos-i bareun yejeol-imnida.",
          "translation": "During meals, not holding the rice or soup bowl with one's hands ('손으로 들고 마시지 않으며') and not grasping spoon and chopsticks simultaneously in one hand is proper etiquette."
        },
        {
          "target": "어른과의 술자리에서는 고개를 옆으로 돌리고 입을 가린 채 술을 마시는 것이 예의에 부합합니다.",
          "reading": "Eoreun-gwa-ui suljari-eseoneun gogae-reul yeop-euro dolligo ip-eul garin chae sul-eul masineun geos-i yeui-e buahaphamnida.",
          "translation": "In a drinking setting with elders, turning one's head to the side and covering one's mouth while drinking conforms to etiquette ('고개를 옆으로 돌리고')."
        }
      ],
      "mnemonics": [
        "어른이 먼저 수저 들고, 밥그릇은 상 위에 두고, 술 마실 땐 고개 돌리기!"
      ],
      "culturalNotes": [
        "이웃나라인 일본이나 중국과 달리 한국에서는 밥그릇을 손에 들고 먹는 행위를 복을 털어낸다거나 품격이 없다고 여겨 엄격히 금기시해 왔습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "한국 전통 식사 자리에서 식사를 시작하는 올바른 순서는?",
          "options": [
            "자리에서 가장 나이가 많은 어른이 먼저 수저를 드신 후 식사를 시작한다. (어른이 먼저 수저를 드신 후에 아랫사람이 식사를 시작하는 것이 한국의 기본 식사 예절입니다.)",
            "음식이 나오는 즉시 배고픈 사람이 먼저 허겁지겁 먹는다.",
            "막내가 먼저 숟가락을 들고 맛을 평가한 뒤 시작한다."
          ],
          "answerIndex": 0,
          "explanation": "어른이 먼저 수저를 드신 후에 아랫사람이 식사를 시작하는 것이 한국의 기본 식사 예절입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "한국 식사 예절에서 금기시되는 잘못된 행동은?",
          "options": [
            "밥그릇이나 국그릇을 손으로 들고 입에 대고 마시는 행동 (한국에서는 밥그릇이나 국그릇을 손으로 들고 먹지 않는 것이 전통 규범입니다.)",
            "숟가락으로 국을 떠먹고 젓가락으로 나물을 집어먹는 행동",
            "어른의 식사 속도에 맞추어 식사를 마치는 행동"
          ],
          "answerIndex": 0,
          "explanation": "한국에서는 밥그릇이나 국그릇을 손으로 들고 먹지 않는 것이 전통 규범입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "조선 시대 오직 임금의 수라상에만 차릴 수 있었던 최고 첩수의 반상은?",
          "options": [
            "12첩 반상 (12첩 반상은 국왕의 수라상에만 허용된 최고 격식의 반상 차림입니다.)",
            "9첩 반상",
            "7첩 반상"
          ],
          "answerIndex": 0,
          "explanation": "12첩 반상은 국왕의 수라상에만 허용된 최고 격식의 반상 차림입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'어른이 먼저 수저를 드신 후에 식사해요'(We eat after the elder picks up the spoon first)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "어른이 먼저 수저를 드신 후에 식사해요.",
            "어른이 먼저 수저를 드신 후에 식사해요"
          ],
          "explanation": "어른이 먼저 수저를 드신 후에 + 식사해요 = 어른이 먼저 수저를 드신 후에 식사해요."
        }
      ]
    }
  },
  "ko-u25-l4": {
    "id": "ko-u25-l4",
    "subject": "korean",
    "unit": 25,
    "lessonNumber": 4,
    "title": "향토 음식, 사찰음식 및 현대 K-푸드 파인다이닝",
    "level": "C1",
    "objective": "지역별 향토 음식의 특색, 오신채를 쓰지 않는 사찰음식의 정갈함, 미슐랭 한식 파인다이닝의 글로벌 미식 담론을 분석한다.",
    "presentation": {
      "explanation": "현대 한식은 유구한 지역 향토 미식과 불교 사찰음식의 생명 존중 정신을 계승하여 세계적인 모던 파인다이닝(Fine Dining)으로 진화하고 있습니다.\n\n1. 한식의 미식 스펙트럼과 전문 용어:\n- **향토 음식(Regional Cuisine)**: 남도의 풍성한 해산물 한정식, 강원도의 메밀과 감자 구황 요리, 평안도/함경도의 담백한 메밀 냉면 등 지리적 환경에 맞춤 발전한 요리\n- **사찰음식(Temple Food)**: 불교의 불살생 계율에 따라 육류와 생선을 배제하고, 수행자의 정신을 맑게 하기 위해 **오신채(五辛菜: 마늘, 파, 부추, 달래, 흥거)**를 쓰지 않는 비건 웰빙 음식\n- **모던 코리안 파인다이닝(Modern Korean Fine Dining)**: 전통 발효 장류와 제철 식재료를 서양의 분자 요리학 및 현대적 플레이팅 기술과 접목하여 미슐랭(Michelin Guide) 별점을 획득한 최고급 한식 레스토랑\n- **페어링(Pairing)**: 전통주(막걸리, 약주, 증류식 소주)와 코스 요리의 풍미를 극대화하는 미식 조합",
      "examples": [
        {
          "target": "오신채를 배제하고 자연 채소 본연의 순수한 맛을 살려낸 사찰음식은 세계적인 셰프들에게도 신선한 미학적 영감을 주었습니다.",
          "reading": "Osinchae-reul baejehhago jayeon chaeso bon-yeon-ui sunsuhan mas-eul sallyeonaen sachareumsig-eun segyejeogin syepeudeul-ege-do sinseonhan miakjeok yeong-gam-eul jueotseumnida.",
          "translation": "Temple food that excluded the five pungent roots ('오신채를 배제하고') and brought alive the pure intrinsic taste of natural vegetables gave fresh aesthetic inspiration even to world-renowned chefs."
        },
        {
          "target": "남도 한정식은 산과 바다, 들에서 갓 채취한 풍성한 제철 해산물과 깊은 묵은지가 상다리가 휘어지도록 한 상 가득 차려집니다.",
          "reading": "Namdo hanjeongsik-eun san-gwa bada, deul-eseo gat chaechwihan pungseonghan jecheol haesanmul-gwa gipeun mugeunji-ga sangdari-ga hwieojidorok han sang gadeuk charyeojimnida.",
          "translation": "Namdo Full-course Korean dinner is set with an abundance of seasonal seafood and deep aged kimchi freshly harvested from mountains, sea, and fields so that the table legs bend ('상다리가 휘어지도록')."
        },
        {
          "target": "이 모던 한식 레스토랑은 20년 숙성 씨간장을 현대적인 디저트 소스로 재해석하여 미슐랭 3스타를 획득했습니다.",
          "reading": "I modeon hansik reseutorang-eun isipnyeon sukseong ssiganjang-eul hyeondaejeogin dijeoteu soseu-ro jaehaeseokhayeo misyullaeng samseuta-reul hoedeukhaetseumnida.",
          "translation": "This modern Korean restaurant earned three Michelin stars by reinterpreting 20-year aged master soy sauce into a modern dessert sauce."
        },
        {
          "target": "전통 누룩으로 빚은 프리미엄 증류주와 한우 채끝살 구이의 완벽한 페어링은 한식 미식의 새로운 지평을 열었습니다.",
          "reading": "Jeontong nuruk-euro bijeun peurimieom jeungryuju-wa hanu chaekkeutsal gui-ui wanbyeokhan peeoring-eun hansik misik-ui saeroun jipyeong-eul yeoreotseumnida.",
          "translation": "The perfect pairing of premium distilled liquor brewed with traditional nuruk yeast and grilled Korean beef sirloin opened a new horizon in Hansik gastronomy."
        }
      ],
      "mnemonics": [
        "오신채 없는 사찰음식, 상다리 휘는 남도 한정식, 미슐랭 파인다이닝의 페어링!"
      ],
      "culturalNotes": [
        "백양사 정관 스님의 사찰음식은 넷플릭스 다큐멘터리 『셰프의 테이블』을 통해 전 세계에 소개되며 자연과의 공존을 추구하는 철학적 미식으로 극찬받았습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "한국 불교 사찰음식에서 마음을 산란하게 하여 배제하는 마늘, 파 등 다섯 가지 자극적인 채소를 일컫는 말은?",
          "options": [
            "오신채 (五辛菜) (사찰음식에서 금하는 5가지 매운맛 채소(마늘, 파, 부추, 달래, 흥거)는 오신채입니다.",
            "오방색",
            "오곡밥"
          ],
          "answerIndex": 0,
          "explanation": "사찰음식에서 금하는 5가지 매운맛 채소(마늘, 파, 부추, 달래, 흥거)는 '오신채'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "음식이 너무 푸짐하고 찬의 가짓수가 많을 때 쓰는 가장 대표적인 한국어 관용 표현은?",
          "options": [
            "상다리가 부러질(휘어질) 정도로 푸짐하다",
            "손가락이 아플 정도로 적다",
            "접시가 날아갈 정도로 가볍다"
          ],
          "answerIndex": 0,
          "explanation": "한 상 가득 음식이 차려진 모습을 '상다리가 부러질/휘어질 정도'라고 비유합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "전통 음식과 술의 풍미가 서로를 돋보이게 조화를 이루는 미식 조합을 뜻하는 현대 용어는?",
          "options": [
            "페어링",
            "카운셀링",
            "리사이클링"
          ],
          "answerIndex": 0,
          "explanation": "음식과 술의 최적 조합을 미식 분야에서 '페어링'이라고 합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'자연의 맛을 살린 사찰음식의 정갈함'(Neatness of temple food bringing alive natural taste)을 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "자연의 맛을 살린 사찰음식의 정갈함",
            "자연의 맛을 살린 사찰음식의 정갈함."
          ],
          "explanation": "자연의 맛을 살린 + 사찰음식의 + 정갈함 = 자연의 맛을 살린 사찰음식의 정갈함."
        }
      ]
    }
  },
  "ko-u25-l5": {
    "id": "ko-u25-l5",
    "subject": "korean",
    "unit": 25,
    "lessonNumber": 5,
    "title": "궁중음식 무형문화재 명장 인터뷰 및 미식 다큐멘터리 실전 종합 담화",
    "level": "C1",
    "objective": "발효 미학, 음양오행 및 오방색, 12첩 수라상, 사찰음식과 모던 파인다이닝을 융합하여 C1 최고급 미식 다큐멘터리 인터뷰 담화를 완성한다.",
    "presentation": {
      "explanation": "C1 최고급 한식 문화 담화는 조리 기술을 넘어 민족의 철학, 역사적 의전, 생명 존중 사상을 유려하고 학술적인 한국어로 서술하는 능력을 요구합니다.\n\n1. 미식 다큐멘터리 궁중음식 국가무형문화재 보유자 심층 인터뷰 실전 모델:\n- 다큐 PD: 명장님, 한식이 전 세계 미식가들에게 이토록 깊은 울림을 주는 근본적인 원동력은 어디에 있다고 보십니까?\n- 명장: 한식의 본질은 인간의 조급함을 내려놓고 자연의 시간에 순응하는 '발효의 미학'과 '약식동원'에 있습니다. 숨 쉬는 옹기 속에서 수년간 곰삭은 간장과 된장은 단순한 조미료가 아니라 자연과 세월이 빚어낸 생명의 정수입니다.\n- 다큐 PD: 특히 조선 왕실 수라상과 사찰음식은 정반대의 성격을 띠면서도 일맥상통하는 면이 있어 보입니다.\n- 명장: 정확한 통찰이십니다. 12첩 수라상이 팔도 백성들의 삶과 농경 상태를 살피는 왕의 엄중한 통치 의전이었다면, 오신채를 비우고 자연과 일체를 이루는 사찰음식은 탐욕을 버리는 비움의 미학입니다. 이 두 전통이 음양오행과 오방색의 조화를 통해 현대 미슐랭 파인다이닝으로 꽃피우고 있는 것입니다.",
      "examples": [
        {
          "target": "수백 년 세월 동안 씨간장 항아리를 지켜온 종부의 손끝에서 한국 음식의 가장 깊고 그윽한 영혼이 피어납니다.",
          "reading": "Subaek nyeon sewol dong-an ssiganjang hang-ari-reul jikyeoon jongbu-ui sonkkeut-eseo hanguk eumsik-ui gajang gipgo geueukhan yeonghon-i pieonamnida.",
          "translation": "From the fingertips of the head family matriarch ('종부의 손끝에서') who protected the seed soy sauce jar for hundreds of years, the deepest and most profound soul of Korean food blossoms."
        },
        {
          "target": "선조들의 지혜가 담긴 발효 과학과 오방색의 조화는 단순한 식문화를 넘어 인류가 본받아야 할 지속 가능한 미래 먹거리의 대안입니다.",
          "reading": "Seonjodeul-ui jihye-ga damgin balhyo gwahak-gwa obangsaek-ui johwa-neun dansunhan sikmunhwa-reul neomeo inryu-ga bonbadaya hal jisok ganeunghan mirae meokgeori-ui daean-imnida.",
          "translation": "The fermentation science and harmony of five cardinal colors containing the wisdom of ancestors are beyond a mere food culture, serving as an alternative sustainable future food source that humanity must emulate."
        },
        {
          "target": "정성을 다해 차려낸 12첩 수라상에는 백성의 노고를 잊지 않으려는 국왕의 숭고한 애민 정신이 깃들어 있습니다.",
          "reading": "Jeongseong-eul dahae charyeonaen sib-ichop surasang-eneun baekseong-ui nogo-reul itji anheuryeoneun gugwang-ui sunggohan aemin jeongsin-i gitdeoreo itseumnida.",
          "translation": "Imbued in the devotedly set 12-dish Royal Table ('12첩 수라상') is the king's noble spirit of loving the people ('애민 정신') to not forget the toil of the people."
        },
        {
          "target": "자연에서 얻은 소박한 식재료를 통해 마음의 평안과 생명 존중을 실천하는 사찰음식은 현대인의 지친 영혼을 치유합니다.",
          "reading": "Jayeon-eseo eodeun sobakhan sikjaeryo-reul tonghae ma-eum-ui pyeong-an-gwa saengmyeong jonjung-eul silcheonhaneun sachareumsig-eun hyeondaein-ui jichin yeonghon-eul chiyuhamnida.",
          "translation": "Temple food that practices peace of mind and respect for life through simple ingredients obtained from nature heals the weary souls of modern people."
        }
      ],
      "mnemonics": [
        "자연에 순응하는 발효의 미학, 백성을 살피는 수라상, 영혼을 치유하는 사찰음식!"
      ],
      "culturalNotes": [
        "한국의 종가(宗家) 문화에서 며느리에게 종택의 열쇠와 씨간장 독을 물려주는 것은 가문의 가치와 음식 철학의 정통성을 공식 계승함을 의미합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "미식 다큐멘터리에서 한식의 본질을 '시간과 자연에 순응하는 지혜'로 가장 격조 높게 설명한 문장은?",
          "options": [
            "한식의 정수는 기다림의 미학인 발효 과학과 자연과의 조화를 추구하는 약식동원 사상에 집약되어 있습니다.",
            "한식은 그냥 맵고 짠 음식이니까 빨리빨리 먹으면 그만입니다.",
            "한식은 패스트푸드처럼 인공 감미료를 많이 넣을수록 맛있습니다."
          ],
          "answerIndex": 0,
          "explanation": "'발효 과학'과 '약식동원 사상'을 결합한 학술적·철학적 설명이 C1 수준에 완벽히 부합합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "궁중 수라상의 역사적 가치를 가장 올바르게 해설한 문장은?",
          "options": [
            "수라상은 팔도에서 진상된 제철 식재료를 통해 전국 백성의 농경 형편을 살피던 애민 의전이었다.",
            "수라상은 왕 혼자서 욕심부려 배 터지게 먹으려고 만든 사치스러운 밥상이었다.",
            "수라상은 신하들을 벌주기 위해 맛없는 풀만 올려놓은 상이었다."
          ],
          "answerIndex": 0,
          "explanation": "조선 왕실의 수라상은 왕이 백성들의 삶과 작황을 살피는 통치 의전이자 애민 정신의 발로였습니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 전통 한식의 철학과 가장 거리가 먼 것은?",
          "options": [
            "자연의 생태를 파괴하고 오직 자극적인 인공 단맛만을 추구한다.",
            "음식과 약의 근원이 같다는 약식동원(藥食同源) 사상",
            "청, 적, 황, 백, 흑 오방색의 음양오행적 영양 균형"
          ],
          "answerIndex": 0,
          "explanation": "한식은 자연과의 조화와 약식동원을 추구하며, 인공 감미료를 통한 자극적 단맛 추구와는 거리가 멉니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'자연과 세월이 빚어낸 발효의 미학'(Aesthetics of fermentation crafted by nature and time)을 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "자연과 세월이 빚어낸 발효의 미학",
            "자연과 세월이 빚어낸 발효의 미학."
          ],
          "explanation": "자연과 세월이 빚어낸 + 발효의 미학 = 자연과 세월이 빚어낸 발효의 미학."
        }
      ]
    }
  },
  "ko-u26-l1": {
    "id": "ko-u26-l1",
    "subject": "korean",
    "unit": 26,
    "lessonNumber": 1,
    "title": "임상 증상 호소와 초진 문진 어휘 (Clinical Symptoms & Intake)",
    "level": "C1",
    "objective": "통증의 양상(욱신거리다, 따끔거리다, 찌릿하다, 뻐근하다, 쥐어짜다)과 소화기·신경계 이상 증상을 문진표 및 의사 면담에서 정밀하게 표현한다.",
    "presentation": {
      "explanation": "한국의 병원 진료에서는 신체 통증의 미세한 감각과 발현 양상을 나타내는 다채로운 의성어·의태어 및 전문 의학 어휘가 문진에 사용됩니다.\n\n1. 통증 양상(Pain Descriptors) 전문 묘사 어휘:\n- **욱신거리다 / 쑤시다(Throbbing / Aching)**: 심장이 뛰듯 주기적으로 묵직하고 깊게 아픈 양상 (염증, 치통, 관절염)\n- **따끔거리다 / 화끈거리다(Stinging / Burning)**: 바늘로 찌르듯 뾰족하게 아프거나 열감이 느껴지는 피부·점막 통증\n- **찌릿하다 / 저리다(Tingling / Numb)**: 전기가 통하듯 신경이 당기거나 혈액순환이 안 되어 감각이 둔해지는 증상 (디스크, 신경통)\n- **뻐근하다 / 결리다(Stiff / Sore)**: 근육이 뭉쳐서 유연하게 움직이지 않고 굳어 있는 상태 (목·어깨 담)\n- **쥐어짜는 듯하다(Squeezing / Colicky)**: 위장이나 심장 주변이 비틀리듯 극심하게 조여오는 통증\n\n2. 전신 및 소화기 증상:\n- **더부룩하다(Bloated)**: 소화가 안 되어 명치끝이 가득 차고 답답한 상태\n- **메스껍다 / 구역감(Nauseous)**: 속이 울렁거려 토할 것 같은 느낌\n- **오한과 미열/고열(Chills, Mild/High Fever)**: 춥고 떨리면서 체온이 상승하는 증상",
      "examples": [
        {
          "target": "어젯밤부터 명치끝이 쥐어짜듯이 아프고 속이 몹시 더부룩하며 구역감이 지속되고 있습니다.",
          "reading": "Eojetbam-buteo myeongchikkeut-i jwieojjadeusi apheugo sog-i mop-si deoburuhhamyeo guyeokgam-i jisokdoego itseumnida.",
          "translation": "Since last night, the pit of my stomach aches as if being squeezed ('쥐어짜듯이 아프고'), my stomach feels very bloated ('더부룩하며'), and nausea is persisting."
        },
        {
          "target": "허리를 숙일 때마다 오른쪽 다리 뒤쪽으로 전기가 통하듯 찌릿하고 저린 증상이 발끝까지 뻗칩니다.",
          "reading": "Heori-reul sugil ttaemada oreunjjok dari dwijjog-euro jeon-gi-ga tonghadeut jjiritago jeorin jeungsang-i balkkeut-kkaji ppeotchimnida.",
          "translation": "Whenever I bend my waist, an electric tingling and numbness ('찌릿하고 저린 증상') radiates down the back of my right leg to the toes."
        },
        {
          "target": "어금니 잇몸 부위가 심장 박동에 맞춰 욱신거리고 쑤셔서 잠을 제대로 잘 수 없었습니다.",
          "reading": "Eogeumni itmom buwi-ga simjang bakdong-e matchwo uksingeorigo ssusyeoseo jam-eul jedaero jal su eopseotseumnida.",
          "translation": "The molar gum area throbbed and ached ('욱신거리고 쑤셔서') in sync with heartbeat, making it impossible to sleep properly."
        },
        {
          "target": "환자분께서는 초진 문진표에 과거 병력과 약물 알레르기 유무를 상세히 기재해 주시기 바랍니다.",
          "reading": "Hwanjabun-kkeseoneun chojin munjinpyo-e gwageo byeongnyeok-gwa yangmul allereugi yumu-reul sangsehi gijaehae jusigi baramnida.",
          "translation": "Patient, please record past medical history and presence of drug allergies in detail on the initial intake form ('초진 문진표')."
        }
      ],
      "mnemonics": [
        "염증엔 욱신욱신, 신경엔 찌릿찌릿, 소화 불량엔 더부룩, 근육엔 뻐근!"
      ],
      "culturalNotes": [
        "한국 병원 초진 접수 시에는 '문진표(Medical questionnaire)'를 작성하며 기저질환(고혈압, 당뇨) 및 복용 중인 약물을 정확히 알리는 것이 진료의 첫 단계입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "소화가 잘되지 않아 배 속에 가스가 차고 답답한 상태를 나타내는 가장 알맞은 형용사는?",
          "options": [
            "더부룩하다",
            "따끔거리다",
            "뻐근하다"
          ],
          "answerIndex": 0,
          "explanation": "소화불량으로 위장이 꽉 차고 답답한 느낌은 '더부룩하다'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "디스크로 인해 신경이 눌려 다리가 전기가 오듯 저리는 증상을 의사에게 설명할 때 가장 정확한 표현은?",
          "options": [
            "다리 뒤쪽이 전기가 통하듯 찌릿찌릿하고 저려요. (신경 압박으로 인한 방사통은 찌릿찌릿하고 저리다로 표현합니다.)",
            "다리가 얼음처럼 차갑고 간지러워요.",
            "다리에 화상을 입은 것처럼 따끔거려요."
          ],
          "answerIndex": 0,
          "explanation": "신경 압박으로 인한 방사통은 '찌릿찌릿하고 저리다'로 표현합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "병원에서 처음 진료받을 때 작성하는 건강 상태 및 병력 기록 양식은?",
          "options": [
            "문진표",
            "영수증",
            "계약서"
          ],
          "answerIndex": 0,
          "explanation": "환자의 증상과 병력을 파악하는 설문 서식을 '문진표(問診票)'라고 합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'속이 더부룩하고 명치가 욱신거려요'(My stomach feels bloated and the pit thumps)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "속이 더부룩하고 명치가 욱신거려요.",
            "속이 더부룩하고 명치가 욱신거려요"
          ],
          "explanation": "속이 더부룩하고 + 명치가 + 욱신거려요 = 속이 더부룩하고 명치가 욱신거려요."
        }
      ]
    }
  },
  "ko-u26-l2": {
    "id": "ko-u26-l2",
    "subject": "korean",
    "unit": 26,
    "lessonNumber": 2,
    "title": "정밀 영상 검사와 임상 진단 소견 (Diagnostic Imaging & Clinical Findings)",
    "level": "C1",
    "objective": "초음파, 내시경, CT, MRI 등 첨단 의료 영상 검사 결과와 의사의 전문 진단 소견(음성/양성, 이상 소견, 추적 관찰)을 정확히 해독한다.",
    "presentation": {
      "explanation": "정확한 병인 규명을 위해 시행되는 첨단 진단 검사와 검사 결과 보고서의 전문 임상 어휘입니다.\n\n1. 정밀 영상 검사(Medical Imaging Tests):\n- **초음파 검사(Ultrasonography)**: 복부, 갑상선, 심장 등의 연부 조직을 실시간 음파로 확인\n- **내시경 검사(Endoscopy / Colonoscopy)**: 위·대장 내부 점막을 카메라로 직접 관찰하고 조직 검사를 병행\n- **CT(컴퓨터 단층촬영) vs MRI(자기공명영상)**: 방사선 단면 촬영(CT, 뼈·혈관·폐) vs 자기장 3차원 정밀 영상(MRI, 뇌·척추·관절·연골)\n\n2. 진단 결과 판독 및 임상 소견 어휘:\n- **소견(Clinical Findings / Opinion)**: 검사 결과를 바탕으로 전문의가 내린 의학적 판단 (\"특이 소견 없음\")\n- **음성(Negative) vs 양성(Positive)**: 질환이나 바이러스 반응이 없음(음성, 정상) vs 특정 반응이나 병변이 발견됨(양성)\n- **양성 종양(Benign) vs 악성 종양(Malignant / Cancer)**: 단순 물혹이나 양호한 혹(양성) vs 주위 조직을 침범하는 암(악성)\n- **추적 관찰(Follow-up Monitoring)**: 즉각적인 수술 대신 일정 기간 후 재검사를 통해 병변의 변화를 지켜보는 조치",
      "examples": [
        {
          "target": "위내시경 검사 결과 가벼운 만성 표재성 위염 외에는 암을 의심할 만한 특이 소견은 관찰되지 않았습니다.",
          "reading": "Winaesigyeong geomsa gyeolgwa gabyeoun manseong pyojaeseong wiyeom oe-eneun am-eul uisimhal manhan teugi sogyeon-eun gwanchaldoeji anatseumnida.",
          "translation": "As a result of gastroscopy, other than mild chronic superficial gastritis, no specific findings ('특이 소견은 관찰되지 않았습니다') suspected of cancer were observed."
        },
        {
          "target": "복부 초음파에서 간에 1cm 미만의 결절이 발견되었으나 양성 혈관종으로 판단되므로 6개월 후 추적 관찰을 권고합니다.",
          "reading": "Bokbu cho-eumpa-eseo gan-e il-sentimiteo miman-ui gyeoljeol-i balgyeondoeeotseuna yangseong hyeol-gwanjong-euro pandandoemuro yukgae-wol hu chujeok gwanchal-eul gwongohamnida.",
          "translation": "A nodule under 1cm was found on the liver in abdominal ultrasound, but as it is judged a benign hemangioma, follow-up monitoring ('추적 관찰') in 6 months is recommended."
        },
        {
          "target": "조직 검사 결과 악성 종양이 아닌 단순 양성 병변으로 최종 확진 판정이 내려졌습니다.",
          "reading": "Jojik geomsa gyeolgwa akseong jong-yang-i anin dansun yangseong byeongbyeon-euro choejong hwakjin panjeong-i naeryeojyeotseumnida.",
          "translation": "As a result of the biopsy, a final confirmed diagnosis was made that it is a simple benign lesion ('양성 병변'), not a malignant tumor."
        },
        {
          "target": "요추 MRI 촬영을 통해 제4-5번 추간판 탈출증으로 인한 신경근 압박 소견이 명확히 확인되었습니다.",
          "reading": "Yochu MRI chwaryeong-eul tonghae je-sa-obeon chuganpan talchuljeung-euro inan sin-gyeonggeun apbak sogyeon-i myeonghwakhi hwagindoeeotseumnida.",
          "translation": "Through lumbar spine MRI scanning, findings of nerve root compression ('신경근 압박 소견') due to L4-L5 herniated intervertebral disc were clearly confirmed."
        }
      ],
      "mnemonics": [
        "검사 결과 병 없으면 '음성', 이상 판단은 '소견', 지켜볼 땐 '추적 관찰'!"
      ],
      "culturalNotes": [
        "한국은 국가건강검진 제도가 매우 발달하여 만 40세 이상 국민에게 2년마다 위내시경, 간초음파, 유방촬영 등 주요 암 검진을 무료 또는 10% 본인부담으로 제공합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "검사 결과에서 검사 대상 바이러스나 질병 반응이 나타나지 않아 정상임을 뜻하는 용어는?",
          "options": [
            "음성",
            "양성",
            "악성"
          ],
          "answerIndex": 0,
          "explanation": "의학 검사에서 질병 반응이 없음을 나타내는 용어는 '음성(Negative)'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "발견된 혹이 즉시 수술할 위험이 없어 몇 달 뒤 다시 검사하여 변화를 지켜보자는 의사의 조치를 무엇이라 하는가?",
          "options": [
            "추적 관찰",
            "응급 수술",
            "강제 퇴원"
          ],
          "answerIndex": 0,
          "explanation": "일정 주기를 두고 병변 경과를 지켜보는 것을 '추적 관찰'이라고 합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "의사가 정밀 검사 결과를 바탕으로 진단하여 작성한 전문적 소견을 뜻하는 단어는?",
          "options": [
            "소견",
            "추견",
            "편견"
          ],
          "answerIndex": 0,
          "explanation": "의학적 판단 의견이나 관찰 결과를 '소견(所見)'이라고 합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'정밀 검사 결과 특이 소견이 없어요'(There are no specific findings in precision tests)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "정밀 검사 결과 특이 소견이 없어요.",
            "정밀 검사 결과 특이 소견이 없어요"
          ],
          "explanation": "정밀 검사 결과 + 특이 소견이 + 없어요 = 정밀 검사 결과 특이 소견이 없어요."
        }
      ]
    }
  },
  "ko-u26-l3": {
    "id": "ko-u26-l3",
    "subject": "korean",
    "unit": 26,
    "lessonNumber": 3,
    "title": "처방전 해독과 약국 복약 지도 (Prescription & Pharmacy Guidance)",
    "level": "C1",
    "objective": "처방전 복용법(식전/식후 30분, 취침 전), 약물 부작용 주의사항(졸음, 위장 장애, 음주 금지), 항생제 복약 완료 원칙을 전문 약사 지도 수준으로 이해한다.",
    "presentation": {
      "explanation": "의사의 처방전에 따른 약사의 전문 **복약 지도(Medication Counseling)**를 이해하고 환자 안전을 지키는 필수 임상 지침입니다.\n\n1. 복용 시점 및 투여 경로 전문 용어:\n- **식후 30분(30 min after meals)**: 위장 점막을 보호하고 일정한 혈중 농도를 유지하기 위한 가장 일반적인 복용법\n- **식전 30분 / 공복(Before meals / Empty stomach)**: 음식물과의 흡수 간섭을 피하고 약효를 신속히 흡수시키기 위한 복용법 (위장약, 갑상선 호르몬제)\n- **취침 전(Before bedtime)**: 야간 통증 조절이나 졸림을 유발하는 약물 (수면진정제, 항히스타민제)\n- **경구 투여(Oral)** vs **외용제(Topical)** vs **좌약(Suppository)**\n\n2. 복약 주의사항 및 부작용(Side Effects):\n- **졸음 및 집중력 저하**: 운전이나 기계 조작 금지 알림 (감기약, 알레르기 비염약)\n- **위장 장애(Gastrointestinal upset)**: 속쓰림, 메스꺼움 유발 시 식사 직후 복용 권고\n- **항생제 복약 준수**: 증상이 호전되더라도 내성균 발생을 방지하기 위해 처방된 일수만큼 끝까지 완복해야 함\n- **금주(Alcohol prohibition)**: 약물 간독성 및 급성 부작용 예방",
      "examples": [
        {
          "target": "이 약은 졸음을 유발할 수 있으므로 복용 후 장거리 운전이나 위험한 기계 조작을 절대 삼가시기 바랍니다.",
          "reading": "I yag-eun joreum-eul yubalhal su isseumuro bokyong hu janggeori unjeon-ina wiheomhan gigye jojak-eul jeoldae samgasigi baramnida.",
          "translation": "As this medication may induce drowsiness ('졸음을 유발할 수 있으므로'), please strictly refrain from long-distance driving or operating dangerous machinery after taking it."
        },
        {
          "target": "처방된 항생제는 증상이 나아지더라도 중간에 임의로 끊지 마시고 반드시 처방 일수를 채워 끝까지 복용하십시오.",
          "reading": "Cheobangdoen hangsaengje-neun jeungsang-i naajideorado junggan-e imui-ro kkeunji masigo bandeusi cheobang ilsu-reul chaewo kkeutkkaji bokyonghasipsio.",
          "translation": "Even if symptoms improve, do not arbitrarily discontinue the prescribed antibiotics halfway, but be sure to finish taking them ('끝까지 복용하십시오') for the full prescribed days."
        },
        {
          "target": "위장 장애를 최소화하기 위해 소염진통제와 위벽 보호제는 반드시 식후 30분 이내에 충분한 물과 함께 드셔야 합니다.",
          "reading": "Wijang jang-ae-reul choesohwahagi wihae soyeomjintongje-wa wibyeok bohoje-neun bandeusi sikhu samsipbun inaee chungbunhan mul-gwa hamkke deusyeoya hamnida.",
          "translation": "To minimize gastrointestinal disorders, anti-inflammatory analgesics and gastric mucosal protectants must be taken within 30 minutes after meals with plenty of water."
        },
        {
          "target": "약 복용 기간 중 음주를 하실 경우 간 손상 및 혈압 급상승 등의 치명적인 부작용이 발생할 위험이 큽니다.",
          "reading": "Yak bokyong gigan jung eumju-reul hasil gyeong-u gan sonsang mit hyeorap geupsangseung deung-ui chimyeongjeogin bujagyong-i balsaenghal wiheom-i keumnida.",
          "translation": "If you drink alcohol during the medication period, there is a great danger that fatal side effects ('치명적인 부작용') such as liver damage and acute blood pressure surge may occur."
        }
      ],
      "mnemonics": [
        "졸리면 운전 금지, 항생제는 끝까지 완복, 진통제는 식후 30분 물 한 컵!"
      ],
      "culturalNotes": [
        "한국의 '의약분업' 제도에 따라 병의원에서 진료 후 교부받은 처방전(Prescription)을 약국에 제출해야 전문의약품을 조제받을 수 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "처방된 항생제를 복용할 때 가장 올바른 복약 수칙은?",
          "options": [
            "증상이 호전되더라도 내성균을 막기 위해 처방 일수 동안 끝까지 모두 복용한다. (항생제는 내성균 예방을 위해 증상이 나아져도 처방 일수를 끝까지 복용해야 합니다.)",
            "열이 내리면 즉시 약 복용을 중단하고 서랍에 보관한다.",
            "더 빨리 낫기 위해 한 번에 3회 분량을 몰아서 복용한다."
          ],
          "answerIndex": 0,
          "explanation": "항생제는 내성균 예방을 위해 증상이 나아져도 처방 일수를 끝까지 복용해야 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "항히스타민제나 비염 감기약을 복용한 환자가 반드시 주의해야 할 행동은?",
          "options": [
            "졸림 현상이 나타날 수 있으므로 운전 및 정밀 기계 조작을 피한다. (졸음을 유발하는 감기약이나 항히스타민제 복용 후에는 운전을 삼가야 합니다.)",
            "약효를 높이기 위해 소주와 함께 삼킨다.",
            "약을 씹어서 가루로 만들어 코로 마신다."
          ],
          "answerIndex": 0,
          "explanation": "졸음을 유발하는 감기약이나 항히스타민제 복용 후에는 운전을 삼가야 합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "약사가 환자에게 약의 효능, 복용 시간, 주의사항 등을 상세히 설명해 주는 것을 무엇이라 하는가?",
          "options": [
            "복약 지도",
            "도로 지도",
            "인사 지도"
          ],
          "answerIndex": 0,
          "explanation": "약 복용 방법과 주의점을 환자에게 안내하는 전문 행위를 '복약 지도(服藥指導)'라고 합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'처방된 약을 식후 삼십 분에 복용하세요'(Please take the prescribed medication 30 minutes after meals)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "처방된 약을 식후 삼십 분에 복용하세요.",
            "처방된 약을 식후 삼십 분에 복용하세요",
            "처방된 약을 식후 30분에 복용하세요.",
            "처방된 약을 식후 30분에 복용하세요"
          ],
          "explanation": "처방된 약을 + 식후 삼십 분에 + 복용하세요 = 처방된 약을 식후 삼십 분에 복용하세요."
        }
      ]
    }
  },
  "ko-u26-l4": {
    "id": "ko-u26-l4",
    "subject": "korean",
    "unit": 26,
    "lessonNumber": 4,
    "title": "국민건강보험(NHIS)과 3단계 의료 전달 체계",
    "level": "C1",
    "objective": "한국의 국민건강보험 제도(급여/비급여, 본인부담금, 건보공단)와 1·2·3차 의료기관 간 진료의뢰서 시스템을 완벽히 이해한다.",
    "presentation": {
      "explanation": "한국의 의료보장 시스템은 세계 최고 수준의 **국민건강보험(National Health Insurance)**과 체계적인 의료 전달 체계로 구성되어 있습니다.\n\n1. 국민건강보험 재정 및 수가 전문 어휘:\n- **국민건강보험공단(NHIS)**: 전 국민의 자격을 관리하고 보험료를 부과·징수하며 보험급여를 지급하는 공공기관\n- **급여(Covered Items)**: 건강보험이 적용되어 공단이 진료비의 대부분을 부담하는 필수 의료 항목\n- **비급여(Non-covered Items)**: 건강보험이 적용되지 않아 환자가 전액 부담하는 선택 항목 (도수치료, 일부 비급여 MRI, 영양주사 등)\n- **본인부담금(Co-payment / Out-of-pocket)**: 총 진료비 중 환자 개인이 직접 수납하는 법정 분담 비용\n\n2. 3단계 의료 전달 체계(Healthcare Delivery System):\n- **1차 의료기관(Primary Clinic)**: 동네 의원, 보건소 (경증 질환, 1차 진료)\n- **2차 의료기관(Secondary Hospital)**: 병원, 종합병원 (입원실과 수술실을 갖춘 전문 진료)\n- **3차 의료기관(Tertiary Hospital / 상급종합병원)**: 대학병원 등 최고 난도 중증 질환 전문 병원\n- **진료의뢰서(Medical Referral Form)**: 1·2차 병원의 소견서 없이 3차 상급종합병원으로 직행할 경우 건강보험 혜택을 받을 수 없도록 통제하는 필수 의뢰서",
      "examples": [
        {
          "target": "상급종합병원에서 건강보험 급여 혜택을 적용받으시려면 1차 또는 2차 병원에서 발급받은 진료의뢰서를 반드시 지참하셔야 합니다.",
          "reading": "Sang-geupjonghapbyeongwon-eseo geon-gangboheom geub-yeo haetaek-eul jeok-yongbadeusiryeomyeon ilcha ttoneun icha byeongwon-eseo balgeupbadeun jinryouiroeseo-reul bandeusi jichamhasyeoya hamnida.",
          "translation": "To receive health insurance covered benefits at a tertiary hospital, you must bring a medical referral form ('진료의뢰서') issued by a primary or secondary hospital."
        },
        {
          "target": "해당 정밀 검사는 비급여 항목으로 분류되어 국민건강보험이 적용되지 않으므로 환자 본인부담금이 발생합니다.",
          "reading": "Haedang jeongmil geomsa-neun bigeub-yeo hangmog-euro bullyudoeeo gungmingeon-gangboheom-i jeok-yongdoeji aneumuro hwanja bon-inbudamgam-i balsaenghamnida.",
          "translation": "As that precision test is classified as a non-covered item ('비급여 항목'), national health insurance is not applied, resulting in patient co-payment."
        },
        {
          "target": "한국의 단일 국민건강보험 체계는 의료 접근성을 획기적으로 높이고 국민의 의료비 부담을 크게 경감시켰습니다.",
          "reading": "Hanguk-ui dan-il gungmingeon-gangboheom chegye-neun uiryo jeopgeunseong-eul hoekgijeog-euro nop-igo gungmin-ui uiryobi budam-eul keuge gyeong-gamsikyeotseumnida.",
          "translation": "Korea's single national health insurance system drastically raised medical accessibility and greatly reduced the public's medical cost burden."
        },
        {
          "target": "중증 환자 산정특례 제도가 적용되어 암 치료비의 본인부담률이 5%로 대폭 낮아졌습니다.",
          "reading": "Jungjeung hwanja sanjeongteungnye jedo-ga jeok-yongdoeeo am chiryobi-ui bon-inbudamryul-i o-peosenteu-ro daepok naja-jyeotseumnida.",
          "translation": "With the critical illness calculation exception system applied, the co-payment rate for cancer treatment costs was significantly lowered to 5%."
        }
      ],
      "mnemonics": [
        "1·2차 거쳐 진료의뢰서 들고 3차 병원, 급여는 건보 적용, 비급여는 본인 부담!"
      ],
      "culturalNotes": [
        "한국에 체류하는 외국인 등록증 소지자도 입국 후 일정 요건을 충족하면 국민건강보험에 의무 가입되어 내국인과 동일한 수준의 의료 보장 혜택을 누립니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동네 의원(1차 병원)을 거치지 않고 대학병원(3차 상급종합병원)에 진료를 받으러 갈 때 건강보험 적용을 위해 반드시 필요한 서류는?",
          "options": [
            "진료의뢰서",
            "졸업증명서",
            "부동산 계약서"
          ],
          "answerIndex": 0,
          "explanation": "상급종합병원 진료 시 보험 적용을 받기 위해서는 1·2차 의료기관의 '진료의뢰서(소견서)'가 필수입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "국민건강보험 혜택이 적용되지 않아 환자가 전액 비용을 지불해야 하는 의료 항목을 일컫는 말은?",
          "options": [
            "비급여 항목",
            "급여 항목",
            "산정특례 항목"
          ],
          "answerIndex": 0,
          "explanation": "건강보험공단에서 진료비를 분담하지 않는 항목은 '비급여(非給與)' 항목입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "전체 병원 진료비 중 환자가 병원 창구에서 직접 결제하는 자신의 몫을 뜻하는 용어는?",
          "options": [
            "본인부담금",
            "공단부담금",
            "전액무료금"
          ],
          "answerIndex": 0,
          "explanation": "환자 자신이 직접 지불하는 의료비 금액을 '본인부담금'이라고 부릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'진료의뢰서가 있어야 보험 급여가 적용돼요'(You need a medical referral for insurance coverage to apply)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "진료의뢰서가 있어야 보험 급여가 적용돼요.",
            "진료의뢰서가 있어야 보험 급여가 적용돼요"
          ],
          "explanation": "진료의뢰서가 있어야 + 보험 급여가 + 적용돼요 = 진료의뢰서가 있어야 보험 급여가 적용돼요."
        }
      ]
    }
  },
  "ko-u26-l5": {
    "id": "ko-u26-l5",
    "subject": "korean",
    "unit": 26,
    "lessonNumber": 5,
    "title": "종합병원 전문의 진료 상담 및 약국 복약 지도 실전 임상 종합 담화",
    "level": "C1",
    "objective": "통증 호소, 영상 판독 소견, 처방전 복약 수칙, 건강보험 급여/비급여 상담을 유기적으로 통합하여 실전 C1 의료 담화를 완성한다.",
    "presentation": {
      "explanation": "병원 진료실과 약국 조제 창구에서 이루어지는 의사·환자·약사 간의 실전 전문 임상 대화 모델입니다.\n\n1. 대학병원 소화기내과 전문의 진료 및 약국 복약 지도 실전 모델:\n- 의사: 환자분, 가져오신 1차 병원 진료의뢰서와 문진표를 확인했습니다. 명치 부위 통증이 정확히 어떤 양상으로 나타납니까?\n- 환자: 네, 2주 전부터 식사 후 속이 몹시 더부룩하고 쥐어짜듯이 욱신거리며 통증이 등 쪽으로 뻗치는 느낌입니다.\n- 의사: 위내시경과 복부 CT 촬영을 진행해 보겠습니다. 혈액 검사 수치와 영상 소견을 종합해 본 결과, 다행히 악성 종양 의심 소견은 없으며 급성 담낭염 및 위궤양으로 확인되었습니다. 염증 수치가 다소 높으므로 항생제와 위산분비억제제를 처방해 드리겠습니다.\n- 약사(원외 약국): 환자분, 처방전 조제 완료되었습니다. 이 약은 소염진통제와 항생제 복합 처방입니다. 식후 30분에 드셔야 위장 장애를 예방할 수 있으며, 복용 중 졸음이 유발될 수 있으니 운전을 피하십시오. 증상이 호전되더라도 내성균 발생 방지를 위해 5일 치 처방약을 반드시 끝까지 복용하셔야 합니다.",
      "examples": [
        {
          "target": "전문의 선생님의 친절하고 명확한 진단 소견과 약사님의 꼼꼼한 복약 지도 덕분에 환자는 큰 불안감을 덜 수 있었습니다.",
          "reading": "Jeonmun-ui seonsaengnim-ui chinjeolhago myeonghwakhan jindan sogyeon-gwa yaksanim-ui kkomkkomhan bokyak jido deokbun-e hwanja-neun keun buran-gam-eul deol su iseotseumnida.",
          "translation": "Thanks to the specialist's kind and clear diagnostic opinion ('진단 소견') and the pharmacist's meticulous medication guidance ('복약 지도'), the patient was able to relieve great anxiety."
        },
        {
          "target": "정기적인 건강검진을 통한 조기 발견과 정확한 치료 계획 수립은 만성 질환 관리의 핵심 열쇠입니다.",
          "reading": "Jeonggijeogin geon-ganggeomjin-eul tonghan jogi balgyeon-gwa jeonghwakhan chiryo gyehoek surip-eun manseong jilhwan gwanri-ui haeksim yeolsoe-imnida.",
          "translation": "Early detection through regular health screenings and establishing an accurate treatment plan are key to managing chronic diseases."
        },
        {
          "target": "의료진과의 신뢰를 바탕으로 한 솔직한 문진 상담은 오진을 방지하고 치료 효과를 극대화합니다.",
          "reading": "Uiryojin-gwa-ui sinroe-reul batangg-euro han soljikhan munjin sangdam-eun ojin-eul bangjihago chiryo hyogwa-reul geukdaehwahamnida.",
          "translation": "Frank clinical consultation based on trust with medical staff prevents misdiagnosis and maximizes treatment efficacy."
        },
        {
          "target": "건강보험 급여 항목과 본인부담금 내역이 명시된 진료비 세부내역서를 발급받아 실손의료보험을 청구했습니다.",
          "reading": "Geon-gangboheom geub-yeo hangmok-gwa bon-inbudamgeum naeyeog-i myeongsidoen jinryobi sebu-naeyeokseo-reul balgeupbada silson-uiryoboheom-eul cheong-guhaetseumnida.",
          "translation": "I received an itemized medical bill showing health insurance covered items and out-of-pocket payments ('본인부담금 내역') and claimed private indemnity medical insurance."
        }
      ],
      "mnemonics": [
        "문진으로 증상 설명, 검사 소견 듣고, 처방약 복약 지도 철저 준수!"
      ],
      "culturalNotes": [
        "한국에서는 진료비 세부내역서, 영수증, 처방전 등을 스마트폰 병원 앱을 통해 전자 문서로 발급받고 실손보험을 터치 한 번으로 청구하는 디지털 헬스케어 인프라가 대중화되어 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "의료 상담 및 복약 과정의 올바른 절차를 바르게 나열한 것은?",
          "options": [
            "증상 문진 접수 → 정밀 검사 및 소견 확인 → 처방전 발급 → 약국 복약 지도 및 완복",
            "약국에서 약 먼저 사기 → 수술실 들어가기 → 의사에게 화내기",
            "CT 먼저 찍기 → 1차 병원 가기 → 처방전 버리기"
          ],
          "answerIndex": 0,
          "explanation": "문진 → 정밀 검사/소견 → 처방전 발급 → 약국 복약 지도의 순서가 표준 의료 프로세스입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "약사가 환자에게 항생제 복용에 대해 지도할 때 가장 중요한 지침 문장은?",
          "options": [
            "증상이 호전되더라도 내성균 방지를 위해 처방 일수 동안 끝까지 약을 다 드셔야 합니다.",
            "속이 쓰리면 즉시 약을 버리고 커피를 마시세요.",
            "약을 반으로 쪼개서 친구와 나누어 드세요."
          ],
          "answerIndex": 0,
          "explanation": "항생제는 내성균 발생 예방을 위해 처방된 일수만큼 완복하도록 지도해야 합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 한국의 병원 및 약국 의료 임상 대화로서 가장 적합한 것은?",
          "options": [
            "환자분, 위내시경 검사 결과 특이 소견은 없으며 처방약은 식후 30분에 복용하십시오.",
            "환자분, 오늘 수술은 식전에 하시고 붕대는 집에서 가위로 자르세요.",
            "환자분, 약이 졸리면 운전하면서 커피를 세 잔 드세요."
          ],
          "answerIndex": 0,
          "explanation": "'특이 소견 없음'과 '식후 30분 복용'은 표준적인 의료 및 복약 지도 표현입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'정밀 검사 소견과 복약 지도를 확인했어요'(I checked the precision test findings and medication guidance)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "정밀 검사 소견과 복약 지도를 확인했어요.",
            "정밀 검사 소견과 복약 지도를 확인했어요"
          ],
          "explanation": "정밀 검사 소견과 + 복약 지도를 + 확인했어요 = 정밀 검사 소견과 복약 지도를 확인했어요."
        }
      ]
    }
  },
  "ko-u27-l1": {
    "id": "ko-u27-l1",
    "subject": "korean",
    "unit": 27,
    "lessonNumber": 1,
    "title": "은행 금융 상품과 투자 자산 운용 전문 어휘 (Banking & Investments)",
    "level": "C1",
    "objective": "예금·적금의 이자 계산 방식, 대출 상환 구조(원리금 균등상환), 투자 상품의 위험 등급 및 예금자 보호법 체계를 이해하고 활용한다.",
    "presentation": {
      "explanation": "금융 자산 관리 및 은행 창구 거래에서 사용되는 전문 금융 공학 및 자산 운용 어휘입니다.\n\n1. 수신(Deposit) 및 여신(Loan) 금융 어휘:\n- **정기예금(Time Deposit) vs 정기적금(Installment Savings)**: 목돈을 일정 기간 묶어두고 만기 이자를 받는 예금 vs 매월 일정액을 적립하여 목돈을 만드는 적금\n- **고정금리(Fixed Rate) vs 변동금리(Variable / Floating Rate)**: 만기까지 금리가 유지되는 방식 vs 시장 기준금리에 연동되어 주기적으로 변동하는 금리\n- **원리금 균등상환(Equal Principal & Interest Repayment)**: 대출 기간 동안 매월 원금과 이자의 합계액을 일정하게 분할 납부하는 방식\n- **원금 균등상환 vs 만기 일시상환**: 원금만 균등하게 나누어 갚는 방식 vs 만기 전까지 이자만 내다가 만기에 원금을 일시에 상환하는 방식\n\n2. 투자 상품 및 금융소비자 보호:\n- **원금 손실 위험(Risk of Principal Loss)**: 주식형 펀드, ELS 등 파생결합증권 가입 시 고지되는 필수 투자 위험\n- **수익률(Rate of Return / Yield)**: 투자 원금 대비 발생한 순이익의 백분율\n- **예금자 보호법(Depositor Protection Act)**: 금융회사 파산 시 예금보험공사가 1인당 원금과 이자를 합산하여 최고 5천만 원까지 보호하는 제도",
      "examples": [
        {
          "target": "금리 인상기에는 대출 이자 부담을 줄이기 위해 변동금리에서 고정금리 상품으로 갈아타는 대환대출 수요가 급증합니다.",
          "reading": "Geumri insanggi-eneun daechul ija budam-eul jurigi wihae byeondonggeumri-eseo gojeonggeumri sangpum-euro garataneun daehwandaechul suyo-ga geupjeunghamnida.",
          "translation": "During interest rate hike periods, refinancing demand to switch from floating rate to fixed rate products ('변동금리에서 고정금리 상품으로') surges to reduce loan interest burdens."
        },
        {
          "target": "본 펀드 상품은 고수익을 기대할 수 있는 반면, 시장 상황에 따라 원금 손실 위험이 발생할 수 있음을 사전 설명드렸습니다.",
          "reading": "Bon peondeu sangpum-eun gosuyik-eul gidaehal su inneun banmyeon, sijang sanghwang-e ttara won-geum sonsil wiheom-i balsaenghal su isseum-eul sajeon seolmyeongdeuryeotseumnida.",
          "translation": "While this fund product can expect high yields, I explained in advance that a risk of principal loss ('원금 손실 위험') may occur depending on market conditions."
        },
        {
          "target": "해당 정기적금은 예금자 보호법에 따라 1인당 원금과 소정의 이자를 합하여 최고 5천만 원까지 안전하게 보호됩니다.",
          "reading": "Haedang jeong-gijeokgeum-eun yogeumja bohopeop-e ttara irindang won-geum-gwa sojeong-ui ija-reul haphayeo choego ocheonman won-kkaji anjeonhage bohodoemnida.",
          "translation": "That installment savings is safely protected up to a maximum of 50 million KRW per person including principal and prescribed interest according to the Depositor Protection Act."
        },
        {
          "target": "주택담보대출의 상환 방식을 원리금 균등분할상환으로 설정하여 매달 일정한 자금 지출 계획을 수립했습니다.",
          "reading": "Jutaekdambodaechul-ui sanghwan bangsik-eul wonrigeum gyundeungbunhalsanghwan-euro seoljeonghayeo maedal iljeonghan jageum jichul gyehoek-eul suriphaetseumnida.",
          "translation": "By setting the mortgage loan repayment method to equal principal and interest installment repayment ('원리금 균등분할상환'), I established a steady monthly expenditure plan."
        }
      ],
      "mnemonics": [
        "목돈 굴릴 땐 예금, 모을 땐 적금, 대출엔 원리금 균등상환, 보호 한도는 5천만 원!"
      ],
      "culturalNotes": [
        "한국의 '금융소비자보호법(금소법)' 시행으로 은행과 증권사는 투자 상품 판매 시 원금 손실 위험과 수수료 구조를 6대 판매 규제 원칙에 따라 철저히 설명해야 합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "대출 기간 동안 매월 납부하는 원금과 이자의 합계액이 매달 동일하도록 설계된 상환 방식은?",
          "options": [
            "원리금 균등상환",
            "만기 일시상환",
            "원금 유예상환"
          ],
          "answerIndex": 0,
          "explanation": "원금과 이자를 합쳐 매달 같은 금액을 납부하는 방식은 '원리금 균등상환'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "한국의 예금보험공사가 일반 금융기관 파산 시 법적으로 보장하는 1인당 최고 보호 금액은?",
          "options": [
            "원금과 소정의 이자를 합하여 1인당 최고 5천만 원까지 (현행 예금자 보호법상 1인당 금융기관별 최고 보호 한도는 원금과 이자를 합쳐 5천만 원입니다.)",
            "원금 전액 무제한 보호",
            "보호 금액 한도 없음"
          ],
          "answerIndex": 0,
          "explanation": "현행 예금자 보호법상 1인당 금융기관별 최고 보호 한도는 원금과 이자를 합쳐 5천만 원입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "투자 원금보다 손실이 발생하여 원금을 까먹을 수 있는 가능성을 뜻하는 금융 용어는?",
          "options": [
            "원금 손실 위험",
            "원금 보장 확약",
            "무위험 수익"
          ],
          "answerIndex": 0,
          "explanation": "투자로 인해 원금을 잃을 수 있는 위험을 '원금 손실 위험'이라고 합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'고정금리와 원리금 균등상환으로 대출받았어요'(I took a loan with fixed rate and equal principal-interest repayment)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "고정금리와 원리금 균등상환으로 대출받았어요.",
            "고정금리와 원리금 균등상환으로 대출받았어요"
          ],
          "explanation": "고정금리와 + 원리금 균등상환으로 + 대출받았어요 = 고정금리와 원리금 균등상환으로 대출받았어요."
        }
      ]
    }
  },
  "ko-u27-l2": {
    "id": "ko-u27-l2",
    "subject": "korean",
    "unit": 27,
    "lessonNumber": 2,
    "title": "한국 고유의 부동산 임대차 계약과 권리 분석 (Jeonse & Real Estate)",
    "level": "C1",
    "objective": "한국 고유의 전세·월세 임대차 제도, 등기부등본 권리 분석(근저당권), 확정일자·전입신고를 통한 대항력 확보 절차를 마스터한다.",
    "presentation": {
      "explanation": "한국의 부동산 시장은 매월 세를 내지 않고 거액의 보증금을 맡겼다가 계약 만료 시 전액 돌려받는 독특한 **전세(Jeonse / Lump-sum Deposit Lease)** 제도가 발달해 있습니다.\n\n1. 임대차(Lease) 유형 및 핵심 계약 용어:\n- **전세(Jeonse)**: 매입가의 60~80%에 달하는 거액의 보증금을 맡기고 월세 없이 거주하는 임대차 형태\n- **월세(Monthly Rent) & 반전세(보증부 월세)**: 보증금을 낮추고 매월 차임을 지급하는 방식\n- **임대인(Lessor / 집주인) vs 임차인(Lessee / 세입자)**\n- **공인중개사(Licensed Real Estate Agent) & 중개보수(Brokerage Fee / 복비)**\n\n2. 보증금 보호와 권리 분석 필수 절차:\n- **등기부등본(Certified Real Estate Register)**: 부동산의 소유권(갑구)과 저당권·근저당권 등 부채 권리관계(을구)를 공시하는 장부\n- **근저당권(Collateral Mortgage)**: 집주인이 집을 담보로 은행에서 빌린 대출 채권\n- **대항력(Opposability)**: 주택 인도(이사) + **전입신고(Moving-in Report)** 완료 시 다음 날 0시부터 발생하는 법적 권리\n- **확정일자(Fixed Date)**: 주민센터나 법원에서 계약서에 날짜 도장을 받아 후순위 권리자보다 보증금을 먼저 배당받는 **우선변제권(Right of Preferential Payment)** 취득",
      "examples": [
        {
          "target": "전세 계약 전 반드시 등기부등본 을구를 열람하여 과도한 선순위 근저당권이 설정되어 있는지 꼼꼼히 확인해야 합니다.",
          "reading": "Jeonse gyeyak jeon bandeusi deunggibudeungbon eulgu-reul yeollamhayeo gwadohan seonsunwi geunjeodang-gwon-i seoljeongdoeeo inneunji kkomkkomhi hwaginhaeya hamnida.",
          "translation": "Before a Jeonse contract, you must inspect section Eul of the certified register to carefully check if excessive prior collateral mortgages ('선순위 근저당권') are established."
        },
        {
          "target": "이사 당일에 관할 주민센터를 방문하여 전입신고를 마치고 계약서에 확정일자를 받아야 소중한 보증금을 지킬 수 있습니다.",
          "reading": "Isa dang-il-e gwanhal juminsenteo-reul bangmunhayeo jeonipsingo-reul machigo gyeyakseo-e hwakjeong-ilja-reul badaya sojunghan bojeunggeum-eul jikil su itseumnida.",
          "translation": "On moving day, visiting the local community center to complete moving-in report ('전입신고') and receive a fixed date on the contract ('확정일자') is required to protect your precious deposit."
        },
        {
          "target": "임차인은 주택의 인도와 전입신고를 통해 제3자에게 임대차 관계를 주장할 수 있는 법적 대항력을 확보하게 됩니다.",
          "reading": "Imchain-eun jutaek-ui indo-wa jeonipsingo-reul tonghae jesamja-ege imdaecha gwan-gye-reul jujanghal su inneun beopjeok daehangryeok-eul hwakbohaneun geos-imnida.",
          "translation": "The tenant secures legal opposability ('법적 대항력') to assert the lease relationship against third parties through house handover and moving-in report."
        },
        {
          "target": "공인중개사는 중개 대상물의 권리관계를 명확히 설명하고 법정 중개보수 요율을 준수하여 계약을 체결했습니다.",
          "reading": "Gong-injunggaesa-neun junggae daesangmul-ui gwonrigwan-gye-reul myeonghwakhi seolmyeonghago beopjeong junggaebosu yoyul-eul junsuhayeo gyeyak-eul chegyeolhaetseumnida.",
          "translation": "The licensed real estate agent clearly explained the rights relations of the property and concluded the contract complying with statutory brokerage fee rates."
        }
      ],
      "mnemonics": [
        "을구에서 근저당권 확인, 이삿날 전입신고와 확정일자로 보증금 완벽 사수!"
      ],
      "culturalNotes": [
        "전세금 미반환 사고(전세 사기)를 방지하기 위해 주택도시보증공사(HUG)나 SGI서울보증의 '전세보증금 반환보증보험' 가입이 청년과 신혼부부 사이에서 필수가 되었습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "세입자가 집주인의 빚으로 집이 경매에 넘어갔을 때 보증금을 후순위 채권자보다 먼저 돌려받기 위해 계약서에 받아두는 관공서 도장은?",
          "options": [
            "확정일자",
            "출국일자",
            "생년월일"
          ],
          "answerIndex": 0,
          "explanation": "주민센터에서 계약서에 받는 날짜 공증 도장을 '확정일자'라고 하며, 우선변제권을 부여합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "부동산 등기부등본에서 집주인이 은행에 진 빚(담보 대출)이나 가압류 내역을 확인할 수 있는 항목은?",
          "options": [
            "을구 (소유권 이외의 권리 - 근저당권, 전세권 등) (담보 대출, 근저당권 등 소유권 이외의 부채 권리관계는 을구에 기재됩니다.)",
            "갑구",
            "표제부"
          ],
          "answerIndex": 0,
          "explanation": "담보 대출, 근저당권 등 소유권 이외의 부채 권리관계는 '을구'에 기재됩니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "월세 없이 목돈의 보증금을 맡겨두고 계약 기간 거주한 뒤 원금을 전액 돌려받는 한국 고유의 임대차 제도는?",
          "options": [
            "전세",
            "사글세",
            "일세"
          ],
          "answerIndex": 0,
          "explanation": "거액의 보증금을 예치하고 월세를 내지 않는 한국 전통 임대차 방식은 '전세'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'전입신고를 하고 확정일자를 받았어요'(I submitted moving-in report and received a fixed date)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "전입신고를 하고 확정일자를 받았어요.",
            "전입신고를 하고 확정일자를 받았어요"
          ],
          "explanation": "전입신고를 하고 + 확정일자를 + 받았어요 = 전입신고를 하고 확정일자를 받았어요."
        }
      ]
    }
  },
  "ko-u27-l3": {
    "id": "ko-u27-l3",
    "subject": "korean",
    "unit": 27,
    "lessonNumber": 3,
    "title": "거시경제 지표와 금융 통화 정책 분석 (Macroeconomics & Monetary Policy)",
    "level": "C1",
    "objective": "한국은행 금융통화위원회의 기준금리 결정, 소비자물가지수(CPI), 원/달러 환율 및 경상수지 변동이 실물경제에 미치는 영향을 분석한다.",
    "presentation": {
      "explanation": "한국 경제의 거시경제 지표(Macroeconomic Indicators)와 중앙은행의 통화 정책 담론을 정밀하게 분석하는 전문 고급 어휘입니다.\n\n1. 통화 정책 및 금리 어휘:\n- **한국은행(BOK) & 금융통화위원회(금통위)**: 국가의 통화신용정책을 수립하고 **기준금리(Base Interest Rate)**를 결정하는 최고 의사결정 기구\n- **베이비스텝(0.25%p 인상/인하) vs 빅스텝(0.50%p 인상)**\n- **양적완화(Quantitative Easing) vs 긴축(Tightening / Quantitative Tightening)**\n\n2. 물가, 환율, 무역 지표:\n- **소비자물가지수(CPI) & 인플레이션(Inflation)**: 가계가 소비하는 상품·서비스의 가격 변동률\n- **원/달러 환율(KRW/USD Exchange Rate)**: 환율 상승(원화 가치 하락/고환율) 시 수출 기업 가격 경쟁력 개선 vs 수입 원자재 가격 상승으로 물가 압력 가중\n- **경상수지(Current Account Balance)**: 상품수지, 서비스수지, 본원소득수지를 합산한 대외 거래 최종 성적표 (흑자 vs 적자)\n- **경기 연착륙(Soft Landing) vs 경착륙(Hard Landing)**",
      "examples": [
        {
          "target": "한국은행 금융통화위원회는 물가 안정과 가계부채 억제를 위해 기준금리를 연 3.5%로 동결하기로 결정했습니다.",
          "reading": "Hanguk-eunhaeng geumyungtonghwawiwonhoe-neun mulga anjeong-gwa gagye-buchae eokje-reul wihae gijungeumri-reul yeon sam-jeom-o-peosenteu-ro donggyeolhagiro gyeoljeonghaetseumnida.",
          "translation": "The Bank of Korea's Monetary Policy Board decided to freeze the base interest rate ('기준금리를 동결하기로') at 3.5% per annum to stabilize inflation and curb household debt."
        },
        {
          "target": "원/달러 환율이 급등함에 따라 수입 원자재 가격이 상승하여 국내 소비자물가 상승 압력이 한층 거세지고 있습니다.",
          "reading": "Won/dalleo hwanryul-i geupdeungham-e ttara suyip wonjajae gagyeog-i sangseunghayeo gungnae sobijamulga sangseung apryeog-i hancheung geoseojigo itseumnida.",
          "translation": "As the KRW/USD exchange rate surges ('환율이 급등함에 따라'), import raw material prices rise, making domestic consumer inflation pressure much more intense."
        },
        {
          "target": "반도체 수출 호조에 힘입어 지난달 경상수지가 100억 달러가 넘는 대규모 흑자를 기록했습니다.",
          "reading": "Bandoche suchul hojo-e him-ibeo jinandal gyeongsangsuji-ga baek-eok dalleo-ga neomneun daegyumo heukja-reul girokhaetseumnida.",
          "translation": "Buoyed by buoyant semiconductor exports, last month's current account balance ('경상수지가') recorded a massive surplus exceeding 10 billion dollars."
        },
        {
          "target": "중앙은행은 급격한 경기 침체를 방지하고 시장의 연착륙을 유도하기 위해 점진적인 금리 인하 경로를 시사했습니다.",
          "reading": "Jung-ang-eunhaeng-eun geupgyeokhan gyeonggi chimche-reul bangjihago sijang-ui yeonchakryuk-eul yudohagi wihae jeomjinjeogin geumri inha gyeongno-reul sisahaetseumnida.",
          "translation": "The central bank hinted at a gradual rate cut path to prevent abrupt economic recession and induce a market soft landing ('시장의 연착륙을 유도하기 위해')."
        }
      ],
      "mnemonics": [
        "금통위가 기준금리 결정, 환율 오르면 수입물가 상승, 반도체 수출로 경상수지 흑자!"
      ],
      "culturalNotes": [
        "대외 무역 의존도가 높은 한국 경제의 특성상 미국 연방준비제도(Fed)의 금리 결정과 원/달러 환율 변동은 국내 증시(KOSPI)와 부동산 시장에 즉각적인 파급 효과를 미칩니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "한국의 중앙은행으로서 국가 통화 정책을 총괄하고 기준금리를 결정하는 기관은?",
          "options": [
            "한국은행 금융통화위원회 (국내 통화신용정책 및 기준금리를 결정하는 기구는 한국은행 금융통화위원회입니다.)",
            "국민건강보험공단",
            "한국관광공사"
          ],
          "answerIndex": 0,
          "explanation": "국내 통화신용정책 및 기준금리를 결정하는 기구는 한국은행 금융통화위원회입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "국제 수지 중 상품 및 서비스의 수출입, 배당과 이자 소득을 종합한 국가 대외 거래 지표는?",
          "options": [
            "경상수지",
            "재정수지",
            "가계부채"
          ],
          "answerIndex": 0,
          "explanation": "국가의 종합적인 대외 경상 거래 실적을 나타내는 지표는 '경상수지'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "경기가 급격한 불황에 빠지지 않고 완만하게 안정세를 되찾는 현상을 비유한 경제 용어는?",
          "options": [
            "연착륙",
            "경착륙",
            "불시착"
          ],
          "answerIndex": 0,
          "explanation": "경기 과열을 완만하게 진정시켜 부드럽게 안정시키는 것을 '연착륙(Soft Landing)'이라고 합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'기준금리 동결과 경상수지 흑자 달성'(Freezing the base rate and achieving current account surplus)을 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "기준금리 동결과 경상수지 흑자 달성",
            "기준금리 동결과 경상수지 흑자 달성."
          ],
          "explanation": "기준금리 동결과 + 경상수지 흑자 달성 = 기준금리 동결과 경상수지 흑자 달성."
        }
      ]
    }
  },
  "ko-u27-l4": {
    "id": "ko-u27-l4",
    "subject": "korean",
    "unit": 27,
    "lessonNumber": 4,
    "title": "핀테크, 간편결제 및 디지털 가상자산 규제 (Fintech & Digital Assets)",
    "level": "C1",
    "objective": "한국의 선진 핀테크 인프라(마이데이터, 오픈뱅킹, 간편송금)와 가상자산 이용자 보호법 체계를 이해하고 전문 경제 IT 담화를 구사한다.",
    "presentation": {
      "explanation": "IT 강국 한국은 세계 최고 수준의 디지털 금융 및 **핀테크(Fintech)** 생태계와 가상자산 법제화를 선도하고 있습니다.\n\n1. 핀테크 및 전자금융 혁신 어휘:\n- **마이데이터(MyData)**: 분산된 개인의 금융·소비 정보를 한곳에 모아 맞춤형 자산관리 서비스를 제공하는 데이터 주권 플랫폼\n- **오픈뱅킹(Open Banking)**: 하나의 은행 앱에서 모든 금융기관의 계좌를 조회하고 송금할 수 있는 표준 공동 인프라\n- **간편결제 / 간편송금(Easy Pay / Easy Wire)**: 공인인증서 없이 생체 인식(지문, 안면)이나 6자리 비밀번호만으로 초고속 송금·결제\n\n2. 블록체인 및 가상자산(Digital Assets / Cryptocurrency) 규제:\n- **가상자산 이용자 보호법**: 미공개 중요정보 이용 금지, 시세조종 등 불공정 거래 행위를 처벌하고 예치금을 보호하는 법률\n- **실명확인 입출금계정(Real-name Account)**: 자금세탁 방지(AML)를 위해 은행과 1:1 제휴를 맺은 실명 계좌로만 원화 거래 허용\n- **토큰 증권(ST / Security Token)**: 부동산, 미술품 등 실물 자산을 블록체인 기반 토큰으로 쪼개어 소액 투자할 수 있는 조각 투자 증권",
      "examples": [
        {
          "target": "마이데이터 서비스가 본격화되면서 여러 금융기관에 흩어져 있던 은행 계좌와 주식, 보험 내역을 통합 조회할 수 있게 되었습니다.",
          "reading": "Maideiteo seobiseu-ga bongyeokhwa-doemyeonseo yeoreo geumyung-gigwan-e heuteojyeo itdeon eunhaeng gyejwa-wa jusik, boheom naeyeok-eul tonghap johoehal su itge doe-eotseumnida.",
          "translation": "As MyData service became fully active, it became possible to integrally view bank accounts, stocks, and insurance histories scattered across multiple financial institutions ('통합 조회할 수 있게 되었습니다')."
        },
        {
          "target": "새로 시행된 가상자산 이용자 보호법에 따라 거래소는 이용자의 원화 예치금을 공신력 있는 은행에 안전하게 신탁해야 합니다.",
          "reading": "Saero sihaengdoen gasangjasan yongja bohopeop-e ttara georaeso-neun yongja-ui wonhwa yechigeum-eul gongsinryeok inneun eunhaeng-e anjeonhage sintakhaeya hamnida.",
          "translation": "According to the newly enforced Virtual Asset User Protection Act, exchanges must safely trust users' KRW deposits to credible banks."
        },
        {
          "target": "부동산과 미술품 등의 고가 자산을 토큰 증권(ST) 형태로 유동화하여 소액 투자자들의 진입 장벽을 대폭 낮췄습니다.",
          "reading": "Budongsan-gwa misulpum deung-ui goga jasan-eul tokeun jeung-gwon hyeongtae-ro yudonghwahayeo so-aek tujajadeul-ui jin-ip jangbyeok-eul daepok nachwotseumnida.",
          "translation": "By securitizing high-priced assets such as real estate and art into security tokens (ST), they drastically lowered the entry barrier for retail micro-investors."
        },
        {
          "target": "간편결제 플랫폼의 확산은 카드나 현금 없는 사회로의 디지털 전환을 급격하게 가속화하고 있습니다.",
          "reading": "Ganpyeongyeolje peullaetpom-ui hwaksan-eun kadeu-na hyeon-geum eomneun sahoe-ro-ui dijiteol jeonhwan-eul geupgyeokhage gasokhwahago itseumnida.",
          "translation": "The proliferation of easy payment platforms is rapidly accelerating the digital transition to a cardless and cashless society."
        }
      ],
      "mnemonics": [
        "마이데이터로 자산 통합, 간편결제로 원클릭, 가상자산은 실명계좌로 투명하게!"
      ],
      "culturalNotes": [
        "한국은 '토스(Toss)', '카카오페이(KakaoPay)', '네이버페이(NaverPay)' 등 빅테크 기반의 핀테크 플랫폼이 국민 대다수의 일상 금융을 대체하며 현금 사용률이 세계 최저 수준입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "여러 은행, 카드사, 증권사에 흩어진 개인 금융 정보를 한곳에 모아 관리해 주는 공공 데이터 금융 서비스를 일컫는 말은?",
          "options": [
            "마이데이터",
            "빅데이터",
            "스몰데이터"
          ],
          "answerIndex": 0,
          "explanation": "개인 금융 정보를 통합 조회·관리하는 표준 플랫폼은 '마이데이터(MyData)'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "한국에서 가상자산(암호화폐)을 원화로 거래하기 위해 금융 당국이 의무화한 계좌 인증 시스템은?",
          "options": [
            "은행 실명확인 입출금계정 (한국의 가상자산 거래소 원화 입출금은 은행 실명확인 입출금계정을 통해서만 가능합니다.)",
            "가명 익명 거래 계좌",
            "해외 페이퍼컴퍼니 계좌"
          ],
          "answerIndex": 0,
          "explanation": "한국의 가상자산 거래소 원화 입출금은 '은행 실명확인 입출금계정'을 통해서만 가능합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "부동산, 미술품 등의 실물 자산을 블록체인 기술을 활용해 디지털 증권으로 발행하는 것을 무엇이라 하는가?",
          "options": [
            "토큰 증권",
            "종이 증권",
            "기프티콘"
          ],
          "answerIndex": 0,
          "explanation": "실물 자산을 블록체인 기반의 디지털 증권으로 발행한 것을 '토큰 증권(Security Token)'이라 합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'마이데이터와 간편결제로 자산을 관리해요'(I manage assets with MyData and simple pay)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "마이데이터와 간편결제로 자산을 관리해요.",
            "마이데이터와 간편결제로 자산을 관리해요"
          ],
          "explanation": "마이데이터와 + 간편결제로 + 자산을 + 관리해요 = 마이데이터와 간편결제로 자산을 관리해요."
        }
      ]
    }
  },
  "ko-u27-l5": {
    "id": "ko-u27-l5",
    "subject": "korean",
    "unit": 27,
    "lessonNumber": 5,
    "title": "자산관리 PB 포트폴리오 상담 및 부동산 전세계약 실전 경제 담화",
    "level": "C1",
    "objective": "은행 자산관리(PB) 포트폴리오 설계, 부동산 전세계약 권리 분석 및 특약 조항 작성을 총망라한 C1 실전 금융 경제 담화를 완성한다.",
    "presentation": {
      "explanation": "고급 자산관리 PB(Private Banker) 센터 및 공인중개사 사무소에서 이루어지는 최고급 실전 금융·부동산 대화 모델입니다.\n\n1. 은행 PB 센터 자산 포트폴리오 및 부동산 전세계약 실전 모델:\n- PB 상담사: 고객님, 최근 한국은행의 기준금리 동결 기조와 글로벌 시장 변동성을 감안하여 자산 포트폴리오 리밸런싱을 제안해 드립니다. 안전 자산인 5천만 원 예금자 보호 한도 내 정기예금과 원리금 균등상환 대출 상환을 병행하시고, 여유 자금은 마이데이터 분석을 통해 배당주 펀드와 토큰 증권으로 분산 투자하시는 것이 바람직합니다.\n- 고객: 네, 그리고 이번에 새로 이사할 아파트 전세계약도 앞두고 있는데 어떤 점을 주의해야 할까요?\n- 공인중개사: 네, 제가 발급해 드린 등기부등본 을구를 보시면 선순위 근저당권 채권최고액이 매매 시세의 20% 미만으로 매우 안전합니다. 계약서 특약 사항에 '잔금 지급일 익일까지 임대인은 추가 담보대출을 설정하지 아니하며, 위반 시 계약은 무효로 하고 계약금 전액을 반환한다'는 조항을 명시했습니다. 이사 당일 전입신고와 확정일자를 즉시 부여받으시면 완벽한 대항력과 우선변제권을 확보하실 수 있습니다.",
      "examples": [
        {
          "target": "철저한 권리 분석과 안전한 특약 조항 덕분에 임차인은 전세보증금 반환에 대한 법적 안전장치를 완벽히 마련했습니다.",
          "reading": "Cheoljeohan gwonri bunseok-gwa anjeonhan teug-yak johang deokbun-e imchain-eun jeonsebojeunggeum banhwan-e daehan beopjeok anjeonjangchi-reul wanbyeokhi maryeonhaetseumnida.",
          "translation": "Thanks to thorough rights analysis and secure special terms ('안전한 특약 조항'), the tenant completely arranged legal safeguards for Jeonse deposit return."
        },
        {
          "target": "시장 금리 변동에 유연하게 대처하기 위해 정기예금과 국채, 배당형 ETF를 적절히 배분한 자산 포트폴리오를 구성했습니다.",
          "reading": "Sijang geumri byeondong-e yuyeonhage daecheohagi wihae jeong-giyegeum-gwa gukchae, baedanghyeong ETF-reul jeokjeolhi baebunhan jasan poteupolrio-reul guseonghaetseumnida.",
          "translation": "To flexibly cope with market rate fluctuations, I constructed an asset portfolio appropriately allocating time deposits, treasury bonds, and dividend ETFs."
        },
        {
          "target": "공인중개사의 전문적이고 투명한 중개 설명서는 부동산 거래 사고를 예방하는 가장 확실한 길잡이가 됩니다.",
          "reading": "Gong-injunggaesa-ui jeonmunjeog-igo tumyeonghan junggae seolmyeongseo-neun budongsan georae sago-reul yebanghaneun gajang hwaksilhan giljabi-ga doemnida.",
          "translation": "The licensed real estate agent's professional and transparent property explanation report is the surest guide to preventing real estate transaction accidents."
        },
        {
          "target": "금융 시장의 흐름을 정확히 읽고 리스크를 분산하는 지혜로운 자산 관리가 미래의 경제적 안정을 보장합니다.",
          "reading": "Geumyung sijang-ui heureum-eul jeonghwakhi ilkgo riseukeu-reul bunsanhaneun jihyeroun jasan gwanri-ga mirae-ui gyeongjejeok anjeong-eul bojanghamnida.",
          "translation": "Wise asset management that accurately reads financial market trends and diversifies risks guarantees future economic stability."
        }
      ],
      "mnemonics": [
        "포트폴리오로 리스크 분산, 등기부등본 확인과 특약 조항으로 전세금 사수!"
      ],
      "culturalNotes": [
        "한국의 부동산 계약에서는 구두 약속이 아닌 '계약서 특약 사항(Special Contract Terms)'에 명시된 문구만이 법적 분쟁 시 효력을 발휘하므로 문구 하나하나를 정밀하게 검토해야 합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "전세 계약 시 집주인이 잔금 지급 당일 몰래 은행 대출을 받는 것을 막기 위해 계약서에 넣는 가장 중요한 안전장치는?",
          "options": [
            "잔금 지급 익일까지 추가 담보대출을 설정하지 않는다는 계약서 특약 조항 (대항력 발생(익일 0시) 전 선순위 대출 방지를 위해 특약 조항을 반드시 명시해야 합니다.",
            "집주인에게 구두로 잘 부탁한다고 인사하기",
            "계약서를 작성하지 않고 현금으로 직접 건네기"
          ],
          "answerIndex": 0,
          "explanation": "대항력 발생(익일 0시) 전 선순위 대출 방지를 위해 '특약 조항'을 반드시 명시해야 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "PB 자산관리 상담 중 시장 변동성에 대비하는 가장 이상적인 투자 태도로 서술된 것은?",
          "options": [
            "예금자 보호가 되는 안전 자산과 분산 투자 포트폴리오를 균형 있게 구성한다.",
            "한 가지 위험 종목에 모든 전 재산을 몰빵하여 올인한다.",
            "은행 대출을 최대로 받아 가상자산에 빚내서 투자한다."
          ],
          "answerIndex": 0,
          "explanation": "원금 보장 안전 자산과 분산 투자를 통한 리스크 관리가 정석적인 자산관리입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 한국의 부동산 및 금융 실전 상담 대화로 가장 올바른 것은?",
          "options": [
            "등기부등본을 확인하고 전입신고와 확정일자를 마쳐 보증금 대항력을 확보했습니다.",
            "전세계약을 맺었으니 등기부등본은 찢어서 버리셔도 됩니다.",
            "원금 손실 위험이 100% 보장되는 펀드에 전 재산을 맡기세요."
          ],
          "answerIndex": 0,
          "explanation": "'등기부등본 확인', '전입신고', '확정일자', '대항력 확보'는 완벽한 부동산 경제 실전 표현입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'등기부등본 확인과 특약 조항으로 보증금을 지켜요'(We protect the deposit with register check and special terms)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "등기부등본 확인과 특약 조항으로 보증금을 지켜요.",
            "등기부등본 확인과 특약 조항으로 보증금을 지켜요"
          ],
          "explanation": "등기부등본 확인과 + 특약 조항으로 + 보증금을 + 지켜요 = 등기부등본 확인과 특약 조항으로 보증금을 지켜요."
        }
      ]
    }
  },
  "ko-u28-l1": {
    "id": "ko-u28-l1",
    "subject": "korean",
    "unit": 28,
    "lessonNumber": 1,
    "title": "인생의 변화와 운명을 통찰하는 사자성어 (Life Philosophy & Fate)",
    "level": "C1",
    "objective": "새옹지마, 고진감래, 전화위복, 화무십일홍, 격세지감의 유래와 함의를 이해하고 고급 담화에서 운명과 세월의 무상함을 논평한다.",
    "presentation": {
      "explanation": "한국어 고급 담화 및 신문 사설, 문학 평론에서 인간 만사의 변화무쌍함과 세월의 흐름을 비유하는 핵심 사자성어입니다.\n\n1. 운명과 변화의 통찰:\n- **새옹지마(塞翁之馬 - 변방 새, 늙은이 옹, 갈 지, 말 마)**: 변방 노인의 말처럼 인생의 길흉화복은 변화가 무쌍하여 예측하기 어렵다는 뜻\n- **고진감래(苦盡甘來 - 쓸 고, 다할 진, 달 감, 올 래)**: 쓴 것이 다하면 단 것이 온다는 뜻으로, 고생 끝에 반드시 낙과 보람이 찾아옴을 이르는 말\n- **전화위복(轉禍爲福 - 구를 전, 재앙 화, 될 위, 복 복)**: 재앙이 바뀌어 오히려 복이 됨\n\n2. 세월과 무상감의 통찰:\n- **화무십일홍(花無十日紅 - 꽃 화, 없을 무, 열 십, 날 일, 붉을 홍)**: 열흘 붉은 꽃이 없다는 뜻으로, 한번 번성한 권세나 부귀영화도 언젠가는 쇠퇴함을 비유\n- **격세지감(隔世之感 - 사이 뜰 격, 인간 세, 갈 지, 느낄 감)**: 딴 세대처럼 몰라보게 달라진 세상의 변화를 보며 느끼는 깊은 감회",
      "examples": [
        {
          "target": "사업 실패로 큰 시련을 겪었으나 포기하지 않고 재도전하여 대성공을 거두었으니 이야말로 전화위복이자 고진감래입니다.",
          "reading": "Sa-eop silpae-ro keun siryeon-eul gyeok-eosseuna pogihaji anko jaedobjeonhayeo daeseonggong-eul geodu-eosseuni iyammallo jeonhwawibok-ija gojin-gamrae-imnida.",
          "translation": "Though suffering great trials from business failure, challenging again without giving up brought huge success, so this is truly turning misfortune into a blessing ('전화위복') and sweet coming after bitter ('고진감래')."
        },
        {
          "target": "인생만사는 새옹지마라 하였으니, 오늘의 작은 실패에 너무 좌절하거나 일희일비할 필요가 전혀 없습니다.",
          "reading": "Insaengmansa-neun sae-ongjima-ra hayeosseuni, oneul-ui jageun silpae-e neomu jwajeolhageona ilhwi-ilbi-hal piryo-ga jeonhyeo eopseumnida.",
          "translation": "Since all human affairs are like the old man's horse ('새옹지마'), there is no need at all to be overly frustrated or alternate between joy and grief over today's small setback."
        },
        {
          "target": "폐허가 되었던 한강변이 최첨단 스마트 도시로 눈부시게 변모한 모습을 바라보며 참으로 격세지감을 느꼈습니다.",
          "reading": "Pyeheo-ga doe-eotdeon Hangangbyeon-i choecheomdan seumateu dosi-ro nunbusige byeonmohan moseub-eul barabomyeo cham-euro gyeokse-jigam-eul neukkyeotseumnida.",
          "translation": "Looking at how the Hangang riverside that used to be ruins transformed dazzlingly into a state-of-the-art smart city, I truly felt a sense of a whole new world ('격세지감')."
        },
        {
          "target": "권력의 영원함을 믿고 오만방자하게 행동하던 독재자도 결국 화무십일홍의 섭리 앞에 비참하게 몰락하고 말았습니다.",
          "reading": "Gwonryeok-ui yeong-wonham-eul mitgo omanbangjahage haengdonghadeon dokjaeja-do gyeolguk hwamusip-ilhong-ui seobri ap-e bichamhage mollakhago maratseumnida.",
          "translation": "Even the dictator who acted arrogantly believing in the eternity of power ended up falling miserably before the providence that no flower stays red for ten days ('화무십일홍')."
        }
      ],
      "mnemonics": [
        "새옹지마로 일희일비 금지, 고진감래로 인내, 전화위복으로 위기 탈출, 격세지감으로 발전 실감!"
      ],
      "culturalNotes": [
        "한국인들은 수능 시험, 취업 준비, 창업 등 인생의 중대한 고비마다 '고진감래'와 '새옹지마'를 좌우명으로 삼아 마음을 다잡고 겸손과 끈기를 유지합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "고생과 어려움을 꿋꿋이 이겨내고 나면 반드시 달콤한 행복과 결실이 찾아온다는 뜻의 사자성어는?",
          "options": [
            "고진감래 (苦盡甘來) (쓴 것이 다하면 단 것이 온다는 뜻으로 고생 끝의 보람을 나타내는 고사성어는 고진감래입니다.)",
            "양두구육",
            "주마간산"
          ],
          "answerIndex": 0,
          "explanation": "'쓴 것이 다하면 단 것이 온다'는 뜻으로 고생 끝의 보람을 나타내는 고사성어는 '고진감래'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "과거와 비교하여 세상이 놀랍고 몰라보게 달라져 다른 세상에 온 것 같은 깊은 감회를 뜻하는 사자성어는?",
          "options": [
            "격세지감 (隔世之感) (세월이 흘러 세상의 변화가 극심하여 세대 차이를 실감할 때 느끼는 감정은 격세지감입니다.)",
            "탁상공론",
            "화무십일홍"
          ],
          "answerIndex": 0,
          "explanation": "세월이 흘러 세상의 변화가 극심하여 세대 차이를 실감할 때 느끼는 감정은 '격세지감'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "재앙이나 위기가 오히려 좋은 기회나 복으로 바뀐 상황을 가장 잘 나타낸 고사성어는?",
          "options": [
            "전화위복 (轉禍爲福) (재앙(禍)이 굴러 복(福)이 된다는 뜻의 사자성어는 전화위복입니다.)",
            "새옹지마",
            "백절불굴"
          ],
          "answerIndex": 0,
          "explanation": "재앙(禍)이 굴러 복(福)이 된다는 뜻의 사자성어는 '전화위복'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'고진감래와 전화위복을 믿어요'(I believe in sweet after bitter and turning misfortune into blessing)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "고진감래와 전화위복을 믿어요.",
            "고진감래와 전화위복을 믿어요"
          ],
          "explanation": "고진감래와 + 전화위복을 + 믿어요 = 고진감래와 전화위복을 믿어요."
        }
      ]
    }
  },
  "ko-u28-l2": {
    "id": "ko-u28-l2",
    "subject": "korean",
    "unit": 28,
    "lessonNumber": 2,
    "title": "인간관계, 우정과 학문적 배움의 사자성어 (Friendship & Lifelong Learning)",
    "level": "C1",
    "objective": "관포지교, 수어지교, 청출어람, 온고지신, 타산지석의 의미를 통달하고 인간적 신의와 학문 탐구의 태도를 고급 한국어로 표현한다.",
    "presentation": {
      "explanation": "진정한 우정, 군신 간의 두터운 신뢰, 그리고 학문과 인격 수양의 기본자세를 압축적으로 보여주는 사자성어입니다.\n\n1. 참된 우정과 군신의 신의:\n- **관포지교(管鮑之交)**: 관중과 포숙아의 사귐처럼 친구의 결점과 처지를 깊이 이해하고 끝까지 믿어주는 변치 않는 진실한 우정\n- **수어지교(水魚之交)**: 물과 물고기의 관계처럼 서로 떨어질 수 없는 극히 친밀하고 두터운 교분 (유비와 제갈량의 관계에서 유래)\n\n2. 배움과 인격 도야:\n- **청출어람(靑出於藍)**: 쪽에서 뽑아낸 푸른 물감이 쪽풀보다 더 푸르다는 뜻으로, 제자가 스승보다 더 뛰어남을 비유\n- **온고지신(溫故知新)**: 옛것을 익히고 그것을 미루어 새로운 지식과 이치를 깨달음\n- **타산지석(他山之石)**: 다른 산의 거친 돌이라도 내 옥을 가는 숫돌로 쓸 수 있다는 뜻으로, 다른 사람의 하찮은 언행이나 실패조차도 자신의 인격과 역량을 닦는 교훈으로 삼음",
      "examples": [
        {
          "target": "스승님의 가르침을 성실히 이어받아 세계적인 석학으로 성장했으니 진정한 청출어람의 표본이라 할 수 있습니다.",
          "reading": "Seuseungnim-ui gareuchim-eul seongsilhi i-eobada segyejeogin seokhag-euro seongjanghaesseuni jinjeonghan cheongchul-eoram-ui pyobon-ira hal su itseumnida.",
          "translation": "Faithfully carrying on the master's teachings and growing into a world-class scholar, he can be called a true model of the pupil outshining the master ('청출어람')."
        },
        {
          "target": "타사의 이번 실패 사례를 타산지석으로 삼아 우리 프로젝트의 안전 관리 시스템을 원점에서 전면 재검토해야 합니다.",
          "reading": "Tasa-ui ibeon silpae sarye-reul tasan-jiseog-euro sama uri peurojekteu-ui anjeon gwanri siseutem-eul wonjeom-eseo jeonmyeon jaegeomtohaeya hamnida.",
          "translation": "Taking the other company's recent failure case as a stone from another mountain to polish our jade ('타산지석으로 삼아'), we must re-examine our project's safety management system from scratch."
        },
        {
          "target": "창업 초기부터 온갖 풍파를 함께 겪으며 쌓아 올린 두 공동 창업자의 신뢰는 그야말로 관포지교이자 수어지교였습니다.",
          "reading": "Changeop chogi-buteo on-gat pungpa-reul hamkke gyeok-eumyeo ssaha ollin du gongdong changeopja-ui sinroe-neun geuyammallo gwanpo-jigyo-ija su-eo-jigyo-yeotseumnida.",
          "translation": "The trust between the two co-founders built up while weathering all kinds of hardships together from early startup days was truly friendship like Guan and Bao ('관포지교') and relationship like fish and water ('수어지교')."
        },
        {
          "target": "전통문화의 본질적 가치를 계승하면서 현대적 감각을 접목하는 온고지신의 정신이야말로 K-컬처 혁신의 원동력입니다.",
          "reading": "Jeontongmunhwa-ui bonjiljeok gachi-reul gyeseunghamyeonseo hyeondaejeok gamgag-eul jeopmokhaneun on-go-jisin-ui jeongsin-iyammallo Kei-keolcheo hyeoksin-ui wondongryeog-imnida.",
          "translation": "The spirit of reviewing the old to learn the new ('온고지신'), inheriting traditional culture's essential values while blending modern sensibilities, is the driving force of K-culture innovation."
        }
      ],
      "mnemonics": [
        "스승 넘어서면 청출어람, 옛것 익혀 새것 알면 온고지신, 남의 실수는 타산지석, 절친은 관포지교!"
      ],
      "culturalNotes": [
        "한국의 교육 현장과 기업 조직에서는 스승이 제자의 성장을 격려할 때 '청출어람'을 최고의 찬사로 여기며, 타사의 위기를 비난하기보다 '타산지석'으로 삼아 자성하는 겸손을 높이 평가합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "남의 잘못이나 하찮은 실수라도 자신의 인격과 교훈을 닦는 거울로 삼는다는 뜻의 사자성어는?",
          "options": [
            "타산지석 (他山之石) (다른 산의 돌로 내 옥을 간다는 뜻으로 남의 허물을 교훈 삼는 사자성어는 타산지석입니다.)",
            "양두구육",
            "화무십일홍"
          ],
          "answerIndex": 0,
          "explanation": "'다른 산의 돌로 내 옥을 간다'는 뜻으로 남의 허물을 교훈 삼는 사자성어는 '타산지석'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "옛것을 연구하여 거기서 새로운 지식과 지혜를 터득한다는 뜻의 공자 학문 철학 사자성어는?",
          "options": [
            "온고지신 (溫故知新) (옛것을 온(익히고) 새것을 지(알다)는 뜻의 배움의 철학은 온고지신입니다.)",
            "주마간산",
            "적반하장"
          ],
          "answerIndex": 0,
          "explanation": "'옛것을 온(익히고) 새것을 지(알다)'는 뜻의 배움의 철학은 '온고지신'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "제자가 스승의 가르침을 바탕으로 더욱 정진하여 스승보다 뛰어난 학문적 성취를 거두었을 때 쓰는 성어는?",
          "options": [
            "청출어람 (靑出於藍) (쪽에서 난 푸른 물감이 쪽보다 더 푸르다는 뜻으로 제자의 뛰어남을 찬양하는 성어는 청출어람입니다.)",
            "새옹지마",
            "관포지교"
          ],
          "answerIndex": 0,
          "explanation": "'쪽에서 난 푸른 물감이 쪽보다 더 푸르다'는 뜻으로 제자의 뛰어남을 찬양하는 성어는 '청출어람'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'온고지신과 타산지석의 자세로 배워요'(I learn with the attitude of reviewing the old to know the new and learning from others' flaws)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "온고지신과 타산지석의 자세로 배워요.",
            "온고지신과 타산지석의 자세로 배워요"
          ],
          "explanation": "온고지신과 + 타산지석의 + 자세로 + 배워요 = 온고지신과 타산지석의 자세로 배워요."
        }
      ]
    }
  },
  "ko-u28-l3": {
    "id": "ko-u28-l3",
    "subject": "korean",
    "unit": 28,
    "lessonNumber": 3,
    "title": "불굴의 의지, 유비무환과 도덕적 결단 (Perseverance & Ethical Resolve)",
    "level": "C1",
    "objective": "와신상담, 백절불굴, 견리사의, 역지사지, 유비무환의 깊은 뜻을 익히고 위기 대처와 리더십 결단의 담론을 구성한다.",
    "presentation": {
      "explanation": "인생의 역경에 맞서는 불굴의 투지와 도덕적 결단력, 위기관리의 선제적 지혜를 담은 사자성어입니다.\n\n1. 불굴의 투지와 인내:\n- **와신상담(臥薪嘗膽 - 누울 와, 섶나무 신, 맛볼 상, 쓸개 담)**: 섶나무 위에서 잠을 자고 쓰디쓴 곰의 쓸개를 핥으며 원수를 갚거나 목표를 이루기 위해 온갖 고초를 참고 견딤\n- **백절불굴(百折不屈 - 일백 백, 꺾을 절, 아닐 불, 굽힐 굴)**: 백 번 꺾여도 결코 굽히지 않는다는 뜻으로, 수많은 좌절 앞에서도 뜻을 굽히지 않고 나아가는 강인한 의지\n\n2. 도덕적 의리와 위기 대비:\n- **견리사의(見利思義 - 볼 견, 이로울 리, 생각할 사, 옳을 의)**: 눈앞의 사사로운 이익을 보았을 때 그것이 의리에 맞고 정당한지를 먼저 생각함\n- **역지사지(易地思之 - 바꿀 역, 땅 지, 생각할 사, 갈 지)**: 처지를 바꾸어 다른 사람의 입장에서 생각해 봄\n- **유비무환(有備無患 - 있을 유, 갖출 비, 없을 무, 근심 환)**: 평소에 미리 철저히 준비해 두면 어떤 우환이나 재난도 닥치지 않음",
      "examples": [
        {
          "target": "국가대표 선수들은 지난 올림픽의 패배를 설욕하기 위해 4년 동안 와신상담하며 피땀 흘려 훈련에 매진했습니다.",
          "reading": "Gukgadaepyo seonsudeul-eun jinan ollimpik-ui paebae-reul seoryokhagi wihae sa-nyeon dong-an wasinsangdamhamyeo pit-ttam heullyeo hunryeon-e maejinhaetseumnida.",
          "translation": "To avenge the defeat of the last Olympics, the national team athletes devoted themselves to training sweating blood while enduring bitter hardships ('와신상담하며') for four years."
        },
        {
          "target": "어떠한 거센 압력과 난관에도 굴하지 않고 백절불굴의 투지로 연구 개발에 매진하여 독자 기술을 완성했습니다.",
          "reading": "Eotteohan geosen amnyeok-gwa nangwan-edo gulhaji anko baekjeolbulgul-ui tuji-ro yeon-gu gaebal-e maejinhayeo dokja gisul-eul wanseonghaetseumnida.",
          "translation": "Without yielding to any fierce pressure or difficulties, they completed proprietary technology dedicating themselves to R&D with indomitable fighting spirit ('백절불굴의 투지로')."
        },
        {
          "target": "공직자는 눈앞의 사리사욕에 흔들리지 말고 견리사의의 마음가짐으로 오직 국가와 국민의 공익을 우선해야 합니다.",
          "reading": "Gongjikja-neun nun-ap-ui sari-sayok-e heundeulliji malgo gyeonrisa-ui-ui ma-eumgajim-euro ojik gukga-wa gungmin-ui gong-ik-eul useonhaeya hamnida.",
          "translation": "Public officials must not be swayed by personal self-interest in front of their eyes, but prioritize public interest with an attitude of considering righteousness before profit ('견리사의의 마음가짐으로')."
        },
        {
          "target": "자연재해는 예측하기 어려우므로 평소 유비무환의 자세로 방재 설비와 대피 매뉴얼을 철저히 점검해야 합니다.",
          "reading": "Jayeonjaehae-neun yecheukhagi eoryeoumeuro pyeongso yubimuhwan-ui jase-ro bangjae seolbi-wa daepi maenyueol-eul cheoljeohi jeomgeomhaeya hamnida.",
          "translation": "Since natural disasters are hard to predict, we must thoroughly inspect disaster prevention facilities and evacuation manuals in the posture of preparedness preventing calamity ('유비무환의 자세로')."
        }
      ],
      "mnemonics": [
        "목표 위해 와신상담, 꺾이지 않는 백절불굴, 이익 앞엔 견리사의, 상대 입장엔 역지사지, 준비하면 유비무환!"
      ],
      "culturalNotes": [
        "안중근 의사가 여순 감옥에서 순국 직전 남긴 명필 유묵 '견리사의 견위수명(見利思義 見危授命: 이익을 보거든 의를 생각하고, 위태로움을 보거든 목숨을 바쳐라)'은 한국인의 가장 숭고한 선비 정신의 귀감입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "평소에 빈틈없이 준비해 두면 뜻밖의 재앙이나 걱정거리가 생기지 않는다는 뜻의 사자성어는?",
          "options": [
            "유비무환 (有備無患) (준비가 있으면 우환이 없다는 뜻의 위기관리 사자성어는 유비무환입니다.)",
            "탁상공론",
            "침소봉대"
          ],
          "answerIndex": 0,
          "explanation": "'준비가 있으면 우환이 없다'는 뜻의 위기관리 사자성어는 '유비무환'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "갈등 해결과 원활한 소통을 위해 서로의 입장을 바꾸어 상대방의 처지에서 헤아려 보는 지혜를 일컫는 사자성어는?",
          "options": [
            "역지사지 (易地思之) (땅(입장)을 바꾸어 그것을 생각한다는 공감과 역지사지의 태도는 역지사지입니다.)",
            "적반하장",
            "와신상담"
          ],
          "answerIndex": 0,
          "explanation": "'땅(입장)을 바꾸어 그것을 생각한다'는 공감과 역지사지의 태도는 '역지사지'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "어떠한 시련과 난관 앞에서도 백 번 꺾일지언정 결코 굽히지 않는 굳센 절개를 이르는 말은?",
          "options": [
            "백절불굴 (百折不屈) (백 번 꺾여도 굽히지 않는 불굴의 투지를 나타내는 성어는 백절불굴입니다.)",
            "고진감래",
            "화무십일홍"
          ],
          "answerIndex": 0,
          "explanation": "백 번 꺾여도 굽히지 않는 불굴의 투지를 나타내는 성어는 '백절불굴'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'백절불굴의 의지와 유비무환의 자세'(Indomitable will and posture of preparedness)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "백절불굴의 의지와 유비무환의 자세",
            "백절불굴의 의지와 유비무환의 자세."
          ],
          "explanation": "백절불굴의 의지와 + 유비무환의 자세 = 백절불굴의 의지와 유비무환의 자세."
        }
      ]
    }
  },
  "ko-u28-l4": {
    "id": "ko-u28-l4",
    "subject": "korean",
    "unit": 28,
    "lessonNumber": 4,
    "title": "현실 비판과 모순 경계의 풍자 사자성어 (Critical Satire & Flaws)",
    "level": "C1",
    "objective": "주마간산, 침소봉대, 양두구육, 적반하장, 탁상공론을 적재적소에 활용하여 사회적 모순과 왜곡된 행태를 논리적으로 비판한다.",
    "presentation": {
      "explanation": "사회의 부조리, 허위 과장 광고, 탁상행정, 뻔뻔한 가해자의 태도를 날카롭게 꼬집고 비판할 때 쓰이는 풍자 사자성어입니다.\n\n1. 피상적 관찰과 과장·왜곡:\n- **주마간산(走馬看山 - 달릴 주, 말 마, 볼 간, 뫼 산)**: 말을 타고 달리며 산을 바라보듯 사물의 본질을 깊이 파악하지 못하고 겉핥기로 훑어봄\n- **침소봉대(針小棒大 - 바늘 침, 작을 소, 몽둥이 봉, 큰 대)**: 바늘처럼 아주 작은 일을 몽둥이처럼 크게 과장하여 떠벌림\n\n2. 겉과 속의 불일치와 파렴치한 행태:\n- **양두구육(羊頭狗肉 - 양 양, 머리 두, 개 구, 고기 육)**: 양의 머리를 걸어놓고 실제로는 개고기를 판다는 뜻으로, 겉은 그럴듯하게 번지르르하지만 속은 형편없거나 속임수를 씀\n- **적반하장(賊反荷杖 - 도둑 적, 도리어 반, 멜 하, 지팡이 장)**: 도둑이 도리어 몽둥이를 든다는 뜻으로, 잘못한 자가 오히려 성을 내며 피해자를 나무라는 뻔뻔스러운 태도\n- **탁상공론(卓上空論 - 탁자 탁, 위 상, 빌 공, 논할 론)**: 책상 위에서 펼치는 헛된 논의라는 뜻으로, 현실성이나 실현 가능성이 전혀 없는 공허한 이론",
      "examples": [
        {
          "target": "현장 실태 조사도 없이 탁상공론으로 수립된 정책은 예산만 낭비한 채 시민들에게 외면받고 말았습니다.",
          "reading": "Hyeonjang siltae josa-do eopsi taksang-gongnon-euro suripdoen jeongchaek-eun yesan-man nangbihan chae simindeul-ege oemyeonbatgo maratseumnida.",
          "translation": "Policies established through armchair theories ('탁상공론으로') without on-site field surveys ended up being shunned by citizens while only wasting budgets."
        },
        {
          "target": "명품 친환경 소재라고 대대적으로 홍보해 놓고 유해 물질을 사용한 것은 소비자를 기만한 전형적인 양두구육입니다.",
          "reading": "Myeongpum chin-hwangyeong sojae-rago daedaejeog-euro hongbohae noko yuhae muljil-eul sayonghan geos-eun sobija-reul gimanhan jeonhyeongjeogin yangduguyuk-imnida.",
          "translation": "Extensively advertising as premium eco-friendly materials while using hazardous substances is a typical selling dog meat under sheep's head ('양두구육') deceiving consumers."
        },
        {
          "target": "가해자가 도리어 피해자에게 화를 내며 책임을 전가하는 적반하장식 태도에 국민적 공분이 일어났습니다.",
          "reading": "Gahaeja-ga dori-eo pihaeja-ege hwa-reul naemyeo chaegim-eul jeongahaneun jeokbanhajangsik taedo-e gungminjeok gongbun-i ireonatseumnida.",
          "translation": "Public outrage erupted over the burglar-carrying-the-club ('적반하장식') attitude where the perpetrator 오히려 got angry at the victim shifting responsibility."
        },
        {
          "target": "단순한 일회성 해프닝을 침소봉대하여 악의적인 가짜 뉴스를 퍼뜨리는 황색 언론의 행태를 강력히 규탄해야 합니다.",
          "reading": "Dansunhan ilhoeseong haepeuning-eul chimsobongdaehayeo ag-uijeogin gajja nyuseu-reul peotteurineun hwangsaek eonron-ui haengtae-reul gangryeokhi gyutanhaeya hamnida.",
          "translation": "We must strongly condemn yellow journalism's practice of blowing a simple one-off happening out of proportion ('침소봉대하여') to spread malicious fake news."
        }
      ],
      "mnemonics": [
        "겉핥기는 주마간산, 과장은 침소봉대, 사기는 양두구육, 뻔뻔하면 적반하장, 헛소리는 탁상공론!"
      ],
      "culturalNotes": [
        "한국의 국회 청문회나 시사 토론 방송에서는 공직자의 부실한 답변이나 정책의 허구성을 지적할 때 '탁상공론', '적반하장', '양두구육' 등의 성어가 강력한 비판 수사로 상용됩니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "잘못을 저지른 사람이 도리어 큰소리를 치며 피해자에게 성을 내는 파렴치한 상황을 일컫는 사자성어는?",
          "options": [
            "적반하장 (賊反荷杖) (도둑이 도리어 몽둥이를 든다는 뜻으로 가해자의 뻔뻔함을 꼬집는 성어는 적반하장입니다.)",
            "온고지신",
            "타산지석"
          ],
          "answerIndex": 0,
          "explanation": "'도둑이 도리어 몽둥이를 든다'는 뜻으로 가해자의 뻔뻔함을 꼬집는 성어는 '적반하장'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "겉으로는 훌륭한 명분을 내세우지만 속으로는 전혀 딴판인 질 낮은 것을 속여 파는 행태를 뜻하는 사자성어는?",
          "options": [
            "양두구육 (羊頭狗肉) (양의 머리를 걸고 개고기를 판다는 표리부동과 기만의 사자성어는 양두구육입니다.)",
            "유비무환",
            "백절불굴"
          ],
          "answerIndex": 0,
          "explanation": "'양의 머리를 걸고 개고기를 판다'는 표리부동과 기만의 사자성어는 '양두구육'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "현실적인 실행 가능성이나 현장의 목소리를 전혀 반영하지 않은 채 책상 위에서만 맴도는 헛된 논의는?",
          "options": [
            "탁상공론 (卓上空論) (현실과 동떨어진 헛된 책상머리 논의를 탁상공론이라 합니다.)",
            "청출어람",
            "전화위복"
          ],
          "answerIndex": 0,
          "explanation": "현실과 동떨어진 헛된 책상머리 논의를 '탁상공론'이라 합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'탁상공론과 적반하장을 경계해야 해요'(We must guard against armchair theories and thief-turning-the-club)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "탁상공론과 적반하장을 경계해야 해요.",
            "탁상공론과 적반하장을 경계해야 해요"
          ],
          "explanation": "탁상공론과 + 적반하장을 + 경계해야 해요 = 탁상공론과 적반하장을 경계해야 해요."
        }
      ]
    }
  },
  "ko-u28-l5": {
    "id": "ko-u28-l5",
    "subject": "korean",
    "unit": 28,
    "lessonNumber": 5,
    "title": "사설 칼럼과 리더십 연설의 고급 사자성어 수사 실전 종합 담화",
    "level": "C1",
    "objective": "신문 사설, CEO 신년사, 학술 포럼 기조연설에서 사자성어를 적재적소에 구사하여 설득력과 품격을 극대화한 최고급 C1 한국어 담화를 완성한다.",
    "presentation": {
      "explanation": "언론사 메인 사설 칼럼 및 기업 최고경영자(CEO) 신년사에서 사자성어를 절묘하게 활용하여 메시지를 전달하는 실전 최고급 연설 모델입니다.\n\n1. 신년 CEO 기조연설 및 언론 사설 실전 모델:\n- CEO 신년사: 임직원 여러분, 지난 한 해는 유례없는 글로벌 경기 침체로 인해 참으로 험난했습니다. 그러나 인생만사는 **새옹지마(塞翁之馬)**요, 고생 끝에 낙이 온다는 **고진감래(苦盡甘來)**의 진리를 우리는 증명해 냈습니다. 경쟁사의 과오를 **타산지석(他山之石)**으로 삼고, 어떠한 파고에도 흔들리지 않는 **백절불굴(百折不屈)**의 투지로 R&D에 매진한 결과, 우리는 위기를 기회로 바꾸는 **전화위복(轉禍爲福)**의 결실을 맺었습니다. 새해에도 우리는 탁상머리 **탁상공론(卓上空論)**을 단호히 배격하고, 철저한 **유비무환(有備無患)**의 대비 태세와 옛것을 익혀 새것을 창조하는 **온고지신(溫故知新)**의 정신으로 세계 시장을 선도해 나갑시다.",
      "examples": [
        {
          "target": "사자성어를 적절히 활용한 품격 있는 연설은 청중에게 깊은 감동과 명확한 비전을 제시합니다.",
          "reading": "Sajaseong-eo-reul jeokjeolhi hwalyonghan pumgyeok inneun yeonseol-eun cheongjung-ege gipeun gamdong-gwa myeonghwakhan bijeon-eul jesihamnida.",
          "translation": "An elegant speech utilizing four-character idioms appropriately presents deep inspiration and a clear vision to the audience."
        },
        {
          "target": "위기 앞에서는 유비무환으로 대비하고, 실패 앞에서는 백절불굴의 투지로 다시 일어서야 합니다.",
          "reading": "Wigi ap-eseoneun yubimuhwan-euro daebihago, silpae ap-eseoneun baekjeolbulgul-ui tuji-ro dasi ireoseoya hamnida.",
          "translation": "Before a crisis, one must prepare with preparedness ('유비무환'), and before failure, one must rise again with indomitable fighting spirit ('백절불굴')."
        },
        {
          "target": "타인의 결점이나 실패를 타산지석으로 삼아 스스로를 겸허히 돌아보는 자세가 참된 리더의 덕목입니다.",
          "reading": "Tain-ui gyeoljeom-ina silpae-reul tasan-jiseog-euro sama seuseuro-reul gyeomheohi doraboneun jase-ga chamdoen rideo-ui deongmog-imnida.",
          "translation": "Taking others' flaws or failures as a stone from another mountain ('타산지석') to humbly reflect on oneself is a true leader's virtue."
        },
        {
          "target": "말만 번지르르한 탁상공론을 버리고 현장의 목소리에 귀 기울이는 역지사지의 소통이 절실합니다.",
          "reading": "Mal-man beonjireureuhan taksang-gongnon-eul beorigo hyeonjang-ui moksori-e gwi giurineun yeokjisaji-ui sotong-i jeolsilhamnida.",
          "translation": "Empathetic communication ('역지사지의 소통') discarding slick armchair theories ('탁상공론') and listening closely to voices in the field is desperately needed."
        }
      ],
      "mnemonics": [
        "연설의 핵심: 사자성어로 뜻을 압축하고, 논리를 벼려 청중을 감화시키자!"
      ],
      "culturalNotes": [
        "한국의 역대 대통령 취임사, 대학 총장 입학 축사, 대기업 신년사에는 당대의 시대정신과 나아갈 방향을 제시하기 위해 사자성어가 핵심 화두(Leading Keyword)로 반드시 채택됩니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "연설문에서 '옛 지혜를 바탕으로 혁신을 이루고, 철저한 사전 준비로 위험을 막자'는 취지를 표현할 때 가장 적합한 사자성어 쌍은?",
          "options": [
            "온고지신(溫故知新)과 유비무환(有備無患)",
            "양두구육(羊頭狗肉)과 적반하장",
            "주마간산(走馬看山)과 탁상공론"
          ],
          "answerIndex": 0,
          "explanation": "옛것을 익혀 새것을 아는 '온고지신'과 준비가 있으면 근심이 없다는 '유비무환'의 결합이 완벽합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "위기 극복 연설에서 '우리는 숱한 좌절에도 꺾이지 않고 피땀 흘려 노력해 마침내 위기를 기회로 바꾸었다'를 표현하는 사자성어 조합은?",
          "options": [
            "백절불굴(百折不屈), 와신상담(臥薪嘗膽), 전화위복(轉禍爲福) (백절불굴(꺾이지 않음), 와신상담(고초를 견딤), 전화위복(위기를 복으로 바꿈)이 완벽한 논리 조합입니다.",
            "침소봉대(針小棒大), 탁상공론(卓上空論), 화무십일홍",
            "양두구육(羊頭狗肉), 주마간산(走馬看山), 적반하장"
          ],
          "answerIndex": 0,
          "explanation": "백절불굴(꺾이지 않음), 와신상담(고초를 견딤), 전화위복(위기를 복으로 바꿈)이 완벽한 논리 조합입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 한국의 신년사 또는 칼럼 수사로서 가장 자연스럽고 모범적인 문장은?",
          "options": [
            "타산지석과 온고지신의 지혜로 백절불굴의 도전을 이어갑시다.",
            "탁상공론과 양두구육의 정신으로 새해 사업을 망쳐봅시다.",
            "적반하장과 침소봉대로 고객을 속이는 기업이 됩시다."
          ],
          "answerIndex": 0,
          "explanation": "'타산지석', '온고지신', '백절불굴'은 최고급 수사로서 완벽한 품격을 자랑합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'백절불굴의 도전과 전화위복의 결실'(Indomitable challenge and fruit of turning misfortune into blessing)을 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "백절불굴의 도전과 전화위복의 결실",
            "백절불굴의 도전과 전화위복의 결실."
          ],
          "explanation": "백절불굴의 도전과 + 전화위복의 결실 = 백절불굴의 도전과 전화위복의 결실."
        }
      ]
    }
  },
  "ko-u29-l1": {
    "id": "ko-u29-l1",
    "subject": "korean",
    "unit": 29,
    "lessonNumber": 1,
    "title": "연구 가설 설정과 학술 연구 방법론 전문 어휘 (Research Methodology)",
    "level": "C1",
    "objective": "가설 설정, 독립·종속 변수 통제, 양적·질적 연구 설계, 표본 추출 및 통계적 유의성(p-value) 검증 전문 학술 어휘를 마스터한다.",
    "presentation": {
      "explanation": "대학원 학위 논문 및 학술 연구 프로젝트 설계 단계에서 사용되는 연구 방법론(Research Methodology) 핵심 전문 어휘입니다.\n\n1. 가설 및 변수 통제:\n- **가설 설정(Hypothesis Formulation)**: 연구 문제에 대해 잠정적으로 내리는 참된 진술 (귀무가설 $H_0$ vs 대립가설 $H_1$)\n- **독립변수(Independent Variable)**: 다른 변수에 영향을 주는 원인 변수\n- **종속변수(Dependent Variable)**: 독립변수의 영향으로 변화가 측정되는 결과 변수\n- **통제변수(Control Variable)**: 실험의 왜곡을 막기 위해 일정하게 유지하는 외생 변수\n\n2. 연구 설계 및 통계 검증:\n- **양적 연구(Quantitative Research) vs 질적 연구(Qualitative Research)**: 수치 데이터와 통계 모델 분석 vs 심층 면담, 참여 관찰, 사례 연구를 통한 질적 텍스트 분석\n- **표본 추출(Sampling)**: 모집단(Population)에서 표본(Sample)을 무작위 추출(Random Sampling)\n- **신뢰도(Reliability) & 타당도(Validity)**: 측정 도구의 일관성 vs 측정하고자 하는 개념을 정확히 측정했는가의 정도\n- **통계적 유의성(Statistical Significance) & 유의확률(p-value)**: 관측된 결과가 단순한 우연이 아닐 확률 (일반적으로 $p < .05$ 기준)",
      "examples": [
        {
          "target": "본 연구는 독립변수가 종속변수에 미치는 인과관계를 실증적으로 규명하기 위해 다중회귀분석을 실시하였습니다.",
          "reading": "Bon yeon-gu-neun dongnipbyeonsu-ga jongsongbyeonsu-e michineun ingwagwan-gye-reul siljeungjeog-euro gyumyeonghagi wihae dajeunghoegwibunseok-eul silshihayeotseumnida.",
          "translation": "This study conducted multiple regression analysis to empirically clarify the causal relationship of the independent variable on the dependent variable ('인과관계를 실증적으로 규명하기 위해')."
        },
        {
          "target": "설문 문항의 신뢰도와 타당도를 확보하기 위해 탐색적 요인분석과 크론바흐 알파 계수를 산출하여 검증했습니다.",
          "reading": "Seolmun munhang-ui sinroedo-wa tadangdo-reul hwakbohaneun wihae tamsaekjeok yoinbunseok-gwa Keuronbaheu alpa gyesu-reul sanchulhayeo geomjeonghaetseumnida.",
          "translation": "To secure the reliability and validity ('신뢰도와 타당도를 확보하기 위해') of questionnaire items, we calculated and verified exploratory factor analysis and Cronbach's alpha coefficient."
        },
        {
          "target": "실험군과 대조군 간의 학습 성취도 차이는 유의확률 0.01 미만 수준에서 통계적으로 유의미한 것으로 나타났습니다.",
          "reading": "Silheomgun-gwa daejogun gan-ui hakseup seongchwido chai-neun yuyihwangnyul yeong-jeom-yeong-il miman sujun-eseo tonggyejeog-euro yu-uimihan geos-euro natanatseumnida.",
          "translation": "The difference in learning achievement between the experimental group and the control group was shown to be statistically significant ('통계적으로 유의미한 것으로') at a p-value below 0.01 level."
        },
        {
          "target": "단순한 수치화를 넘어 연구 참여자의 심층적인 주관적 경험을 포착하기 위해 질적 사례 연구 방법을 병행하였습니다.",
          "reading": "Dansunhan suchihwa-reul neomeo yeon-gu cham-yeoja-ui simcheungjeogin jugwanjeok gyeongheom-eul pochakhagi wihae jiljeok sarye yeon-gu bangbeop-eul byeonghaenghayeotseumnida.",
          "translation": "Beyond simple quantification, we concurrently used a qualitative case study method ('질적 사례 연구 방법을 병행하였습니다') to capture in-depth subjective experiences of research participants."
        }
      ],
      "mnemonics": [
        "원인은 독립변수, 결과는 종속변수, 신뢰도와 타당도 거쳐 p값으로 유의성 입증!"
      ],
      "culturalNotes": [
        "한국의 대학원 과정(석·박사 학위 논문)에서는 KCI(한국학술지인용색인) 및 SCI급 국제 저널 투고를 위해 엄격한 연구윤리 및 실증적 방법론 검증을 필수로 요구합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "실험 연구에서 다른 변수에 영향을 주어 원인이 되는 변수를 일컫는 학술 용어는?",
          "options": [
            "독립변수",
            "종속변수",
            "매개변수"
          ],
          "answerIndex": 0,
          "explanation": "결과에 원인으로서 작용하는 변수를 '독립변수(Independent Variable)'라고 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "연구 측정 도구가 측정하고자 하는 본래의 학술적 개념을 얼마나 정확하게 측정하고 있는지를 나타내는 척도는?",
          "options": [
            "타당도",
            "표본오차",
            "자유도"
          ],
          "answerIndex": 0,
          "explanation": "측정하려는 대상을 정확하게 측정했는가의 정도를 나타내는 개념은 '타당도(Validity)'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "통계 분석에서 분석 결과가 우연에 의해 나타났을 가능성을 나타내는 수치 지표는?",
          "options": [
            "유의확률",
            "중앙값",
            "최빈값"
          ],
          "answerIndex": 0,
          "explanation": "가설 검증 시 우연에 의한 발생 확률을 나타내는 지표는 '유의확률(p-value)'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'독립변수와 종속변수의 상관관계를 분석했어요'(I analyzed the correlation between independent and dependent variables)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "독립변수와 종속변수의 상관관계를 분석했어요.",
            "독립변수와 종속변수의 상관관계를 분석했어요"
          ],
          "explanation": "독립변수와 + 종속변수의 + 상관관계를 + 분석했어요 = 독립변수와 종속변수의 상관관계를 분석했어요."
        }
      ]
    }
  },
  "ko-u29-l2": {
    "id": "ko-u29-l2",
    "subject": "korean",
    "unit": 29,
    "lessonNumber": 2,
    "title": "선행 연구 고찰, 인용 표기 및 연구 윤리 (Literature Review & Citation Ethics)",
    "level": "C1",
    "objective": "선행 연구 고찰, 직접 인용·간접 인용, 출처 표기(각주/참고문헌), 표절 방지 및 학술지 등재 절차를 마스터한다.",
    "presentation": {
      "explanation": "학술 논문의 신뢰성을 담보하는 선행 연구 고찰(Literature Review)과 연구 윤리(Research Ethics) 필수 규범입니다.\n\n1. 문헌 검토 및 인용 방법:\n- **선행 연구 고찰(Literature Review)**: 기존 학계의 연구 성과와 쟁점을 비판적으로 종합 검토하여 본 연구의 독창적 연구 공백(Research Gap)을 도출하는 과정\n- **직접 인용(Direct Quotation)**: 원문의 문장을 토씨 하나 바꾸지 않고 따옴표(\" \")로 묶어 인용\n- **간접 인용(Indirect Quotation / Paraphrasing)**: 원문의 취지를 자신의 언어로 바꾸어 서술하되 출처를 반드시 병기\n- **재인용(Secondary Citation)**: 원전을 직접 확인하지 못하고 다른 2차 문헌에 인용된 것을 다시 인용할 때 출처에 '재인용'을 명시\n\n2. 연구 윤리와 학술지 투고:\n- **표절(Plagiarism) & 자기표절(Self-plagiarism / 중복 게재)**: 타인 또는 자신의 이전 저작물을 적절한 출처 표시 없이 무단 사용하는 연구 부정행위\n- **KCI(한국학술지인용색인) & SCI/SSCI(국제학술지)**: 엄격한 동료 심사(Peer Review / 블라인드 심사)를 거쳐 논문이 등재되는 학술지 체계",
      "examples": [
        {
          "target": "선행 연구들의 한계점을 면밀히 고찰한 결과, 기존 연구가 간과했던 다문화 청소년의 이중언어 발달 요인을 본 연구의 핵심 쟁점으로 도출했습니다.",
          "reading": "Seonhaeng yeon-gu-deul-ui hangyejeom-eul myeonmilhi gochalhan gyeolgwa, gijon yeon-gu-ga gwangwahayeotdeon damunhwa cheongsonyeon-ui ijung-eon-eo baldal yoin-eul bon yeon-gu-ui haeksim jaengjeom-euro dochulhaetseumnida.",
          "translation": "As a result of closely reviewing the limitations of preceding studies ('선행 연구들의 한계점을 면밀히 고찰한 결과'), we derived bilingual development factors of multicultural adolescents, which existing studies had overlooked, as this study's core issue."
        },
        {
          "target": "학술 논문 작성 시 타인의 독창적인 아이디어나 데이터를 차용할 때는 학술 양식에 맞추어 반드시 각주와 참고문헌에 출처를 명확히 밝혀야 합니다.",
          "reading": "Haksul nonmun jakseong si tain-ui dokchangjeogin aidieo-na deiteo-reul chayonghal ttae-neun haksul yangsig-e matchwo bandeusi gakju-wa chamgomunheon-e chulcheo-reul myeonghwakhi balkhyeoya hamnida.",
          "translation": "When borrowing others' original ideas or data while writing an academic dissertation, you must clearly state the sources in footnotes and references ('각주와 참고문헌에 출처를 명확히 밝혀야') conforming to academic formatting."
        },
        {
          "target": "본 투고 논문은 엄격한 익명 동료 심사(더블 블라인드 리뷰)를 거쳐 한국연구재단 KCI 우수등재학술지에 최종 게재 승인을 받았습니다.",
          "reading": "Bon tugo nonmun-eun eomgyeokhan ikmyeong dongnyo simsa (deobeul beullaindeu ribyu)-reul geochyeo Hanguk-yeon-gu-jaedan KCI usu-deungjae-haksulji-e choejong gaejae seung-in-eul badatseumnida.",
          "translation": "This submitted paper received final publication approval in a National Research Foundation of Korea KCI excellent registered journal after undergoing rigorous double-blind peer review."
        },
        {
          "target": "학술 생태계의 건전성을 수호하기 위해 표절 검사 프로그램을 활용한 유사도 검사를 의무적으로 시행하고 있습니다.",
          "reading": "Haksul saengtae-gye-ui geonjeonseong-eul suhohagi wihae pyojeol geomsa peurogeuraem-eul hwalyonghan yusado geomsa-reul uimujeog-euro sihaenghago itseumnida.",
          "translation": "To protect the integrity of the academic ecosystem, similarity checks using plagiarism inspection programs are mandatorily implemented."
        }
      ],
      "mnemonics": [
        "선행 연구로 갭 찾고, 인용엔 각주 필수, 표절 검사로 연구 윤리 준수!"
      ],
      "culturalNotes": [
        "한국의 대학교에서는 '카피킬러(CopyKiller)' 등 공인 표절 검사기를 활용하여 표절률 10% 미만을 충족해야만 학위 논문 심사 자격이 부여됩니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "원 저작자의 문장을 직접 인용하지 않고 자신의 문장으로 요약·재구성하여 인용하는 학술 방식을 무엇이라 하는가?",
          "options": [
            "간접 인용",
            "무단 전재",
            "재가공 유포"
          ],
          "answerIndex": 0,
          "explanation": "원문의 내용을 자신의 언어로 바꾸어 출처를 밝히고 서술하는 방식을 '간접 인용'이라 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "연구자가 과거 자신이 발표한 연구 논문의 텍스트나 데이터를 출처 표기 없이 그대로 재사용하는 부정행위는?",
          "options": [
            "자기표절",
            "정당한 인용",
            "공동 연구"
          ],
          "answerIndex": 0,
          "explanation": "자신의 과거 저작물이라도 출처 표기 없이 재사용하는 것은 '자기표절'에 해당합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "한국연구재단에서 국내 우수 학술지를 평가하고 관리하는 국가 학술지 색인 시스템은?",
          "options": [
            "KCI",
            "KOSPI",
            "KTX"
          ],
          "answerIndex": 0,
          "explanation": "국내 학술지 관리 및 인용 지수 체계는 KCI(Korea Citation Index)입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'선행 연구 고찰과 출처 표기를 철저히 했어요'(I thoroughly reviewed literature and marked citations)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "선행 연구 고찰과 출처 표기를 철저히 했어요.",
            "선행 연구 고찰과 출처 표기를 철저히 했어요"
          ],
          "explanation": "선행 연구 고찰과 + 출처 표기를 + 철저히 했어요 = 선행 연구 고찰과 출처 표기를 철저히 했어요."
        }
      ]
    }
  },
  "ko-u29-l3": {
    "id": "ko-u29-l3",
    "subject": "korean",
    "unit": 29,
    "lessonNumber": 3,
    "title": "학술 논문 격식체 문체와 논증 표현 (Academic Argumentative Syntax)",
    "level": "C1",
    "objective": "-(으)ㅁ에 주목할 필요가 있다, -는 점에서 의의를 지닌다, -(으)로 사료된다, -에 기인하는 것으로 해석된다 등 학술 전문 논증 문형을 구사한다.",
    "presentation": {
      "explanation": "학술 논문의 서론, 결과 분석, 결론 및 제언에서 필자의 객관적이고 절제된 주장을 전개하는 전문 학술 문체입니다.\n\n1. 학술 논증의 핵심 통사 문형:\n- **~에 주목할 필요가 있다 / ~에 주목해야 한다**: 중요한 학술적 발견이나 특이점을 강조할 때\n- **~(이)라는 점에서 학술적/실천적 의의를 지닌다 / 갖는다**: 연구 결과의 독창적 가치와 학문적 기여도를 평가할 때\n- **~에 기인하는 것으로 해석된다 / 판단된다**: 결과의 원인과 메커니즘을 객관적으로 분석할 때 ('~때문이다'의 고급 학술 대체형)\n- **~(으)로 사료된다 / 추정된다**: 연구자의 견해를 정중하고 학술적인 겸양의 어조로 조심스럽게 피력할 때 (I consider / It is deemed that)\n- **~임을 시사한다 / 시사하는 바가 크다**: 데이터가 암시하는 정책적·이론적 함의를 도출할 때",
      "examples": [
        {
          "target": "본 연구의 분석 결과는 청소년기 자기효능감이 학업 성취도 향상에 결정적인 매개 효과를 발휘함을 시사합니다.",
          "reading": "Bon yeon-gu-ui bunseok gyeolgwa-neun cheongsonyeongi jagi-hyoneunggam-i hag-eop seongchwido hyangsang-e gyeoljeongjeogin maegae hyogwa-reul balhwiham-eul sisahamnida.",
          "translation": "The analysis results of this study suggest that adolescent self-efficacy exerts a decisive mediating effect ('결정적인 매개 효과를 발휘함을 시사합니다') on improving academic achievement."
        },
        {
          "target": "이러한 현상은 디지털 플랫폼의 급격한 확산과 소비자의 능동적 미디어 참여 욕구에 기인하는 것으로 해석됩니다.",
          "reading": "Ireohan hyeonsang-eun dijiteol peullaetpom-ui geupgyeokhan hwaksan-gwa sobija-ui neungdongjeok midieo cham-yeo yokgu-e gi-inhaneun geos-euro haeseokdoemnida.",
          "translation": "This phenomenon is interpreted as being attributable to ('기인하는 것으로 해석됩니다') the rapid proliferation of digital platforms and consumers' active desire for media participation."
        },
        {
          "target": "기존의 서구 중심 이론 틀에서 벗어나 한국적 맥락의 고유한 특성을 실증적으로 규명했다는 점에서 본 연구는 높은 학술적 의의를 지닙니다.",
          "reading": "Gijon-ui seogu jungsim iron teul-eseo beoseona hangukjeok maekrak-ui goyuhan teukseong-eul siljeungjeog-euro gyumyeonghaetdaneun jeom-eseo bon yeon-gu-neun nopeun haksuljeok uiyi-reul jinimnida.",
          "translation": "In that it empirically clarified unique characteristics of the Korean context departing from existing Western-centric theoretical frameworks, this study possesses high academic significance ('높은 학술적 의의를 지닙니다')."
        },
        {
          "target": "향후 인공지능 윤리 가이드라인 수립 시 알고리즘의 투명성과 설명 가능성을 제도적으로 보장하는 방안이 심도 있게 논의되어야 할 것으로 사료됩니다.",
          "reading": "Hyanghu in-gongjineung yunri gaideurain surip si algorijeum-ui tumyeongseong-gwa seolmyeong ganeungseong-eul jedojeog-euro bojanghaneun bang-an-i simdo itge non-uidoeeoya hal geos-euro saryodoemnida.",
          "translation": "When establishing AI ethical guidelines henceforth, it is deemed that measures systematically ensuring algorithm transparency and explainability should be discussed in depth ('논의되어야 할 것으로 사료됩니다')."
        }
      ],
      "mnemonics": [
        "의의를 지닌다, 기인하는 것으로 해석된다, ~으로 사료된다, ~을 시사한다!"
      ],
      "culturalNotes": [
        "한국어 학술 논문에서는 '내가 생각하기에는'과 같은 1인칭 주관적 표현을 철저히 배제하고, 피동형과 객관적 논증 종결형('~으로 사료된다', '~을 시사한다')을 사용하는 것이 학술적 격식의 기본입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "학술 논문에서 연구 결과가 나타난 원인을 학술적이고 객관적으로 서술할 때 가장 적절한 표현은?",
          "options": [
            "~에 기인하는 것으로 해석된다",
            "~ 때문이라서 내가 기분이 좋다",
            "~ 인 것 같아서 그냥 그렇게 썼다"
          ],
          "answerIndex": 0,
          "explanation": "'~에 기인하는 것으로 해석된다'는 원인 귀속을 객관적으로 서술하는 표준 학술 문형입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "논문의 결론부에서 연구자가 조심스럽고 품격 있게 제언이나 견해를 밝힐 때 쓰는 고급 학술 어미는?",
          "options": [
            "~할 필요가 있을 것으로 사료된다",
            "~하니까 너희들이 알아서 해라",
            "~하고 싶다고 솔직히 말하겠다"
          ],
          "answerIndex": 0,
          "explanation": "'~으로 사료된다'는 학술 연구자의 정중하고 신중한 판단을 드러내는 최상급 학술 어휘입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "연구의 가치와 학문적 기여도를 평가할 때 가장 적절한 학술적 문장 표현은?",
          "options": [
            "새로운 방법론을 제시했다는 점에서 중요한 학술적 의의를 지닌다. (~는 점에서 중요한 학술적 의의를 지닌다는 표준적인 학술 논문 의의 서술 표현입니다.)",
            "내가 열심히 썼기 때문에 이 논문은 아주 훌륭하다.",
            "아무도 안 읽을 것 같아서 별로 의미가 없다."
          ],
          "answerIndex": 0,
          "explanation": "'~는 점에서 중요한 학술적 의의를 지닌다'는 표준적인 학술 논문 의의 서술 표현입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'학술적 의의를 지니며 많은 시사점을 던져줘요'(It has academic significance and throws many implications)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "학술적 의의를 지니며 많은 시사점을 던져줘요.",
            "학술적 의의를 지니며 많은 시사점을 던져줘요"
          ],
          "explanation": "학술적 의의를 지니며 + 많은 시사점을 + 던져줘요 = 학술적 의의를 지니며 많은 시사점을 던져줘요."
        }
      ]
    }
  },
  "ko-u29-l4": {
    "id": "ko-u29-l4",
    "subject": "korean",
    "unit": 29,
    "lessonNumber": 4,
    "title": "학술 심포지엄 토론, 질의응답 및 반론 제기 (Symposium Debate & Defense)",
    "level": "C1",
    "objective": "학술 심포지엄의 발제자, 지정 토론자, 좌장의 담화 역할을 이해하고 품격 있는 질의, 반론 및 방어 논리를 전개한다.",
    "presentation": {
      "explanation": "국내외 학술대회(Symposium / Conference) 및 학위 논문 심사장에서 이루어지는 구두 토론과 질의응답 담화 프로토콜입니다.\n\n1. 학술대회 주요 역할:\n- **좌장(Chairperson / 사회자)**: 세션의 개회 선언, 발표 시간 통제, 질의응답 순서 조율 및 종합 정리\n- **발제자(Presenter / 발표자)**: 연구 주제의 배경, 방법론, 분석 결과 및 시사점을 제한 시간 내에 구두 발표\n- **지정 토론자(Discussant)**: 발표 논문을 사전 검토한 후 장점과 한계점, 논리적 허점을 짚어 질문과 코멘트를 제공하는 전문가\n\n2. 품격 있는 질의 및 반론 에티켓:\n- **존중과 감사의 서두**: '훌륭한 발제 감사히 잘 들었습니다. 발제자분의 견해에 전적으로 공감하면서도 한 가지 보완적 의문이 듭니다.'\n- **정중한 반론 제기**: '~라는 점에 대해 연구자가 통제하지 못한 외생 변수의 영향 가능성은 어떻게 보시는지요?'\n- **방어 및 후속 연구 수용**: '지적해 주신 부분은 본 연구의 표본 한계로 인정하며, 향후 종단적 후속 연구를 통해 심도 있게 보완하도록 하겠습니다.'",
      "examples": [
        {
          "target": "좌장님의 진행에 감사드리며, 토론자 교수님께서 지적해 주신 표본 추출의 대표성 한계에 대해 소명 답변을 드리겠습니다.",
          "reading": "Jwajangnim-ui jinhaeng-e gamsadeurimyeo, toronja gyosunim-kkeseo jijeokhae jusin pyobon chuchul-ui daepyoseong hangye-e daehae somyeong dapbyeon-eul deurigetseumnida.",
          "translation": "Thanking the session chair for moderation, I would like to offer an explanatory response ('소명 답변을 드리겠습니다') regarding the representativeness limitation of sampling pointed out by the discussant professor."
        },
        {
          "target": "발제자께서 제시하신 통계 모델은 매우 혁신적이나, 질적 심층 면담 자료와의 상호 교차 검증이 다소 미흡했던 것으로 판단됩니다.",
          "reading": "Baljeja-kkeseo jesihasin tonggye modeul-eun maeu hyeoksinjeog-ina, jiljeok simcheung myeondam jaryo-wa-ui sangho gyocha geomjeong-i daso miheubhaetdeon geos-euro pandandoemnida.",
          "translation": "While the statistical model presented by the speaker is very innovative, cross-validation with qualitative in-depth interview data is judged to have been somewhat insufficient ('상호 교차 검증이 다소 미흡했던 것으로')."
        },
        {
          "target": "매우 날카롭고 유익한 코멘트에 깊이 감사드리며, 해당 지적 사항은 학위 논문 최종본 수정 시 적극 반영하도록 하겠습니다.",
          "reading": "Maeu nalkaropgo yuikhan komenteu-e gipi gamsadeurimyeo, haedang jijeok sahang-eun hagwi nonmun choejongbon sujeong si jeokgeuk banyeonghadorok hagetseumnida.",
          "translation": "I deeply appreciate the very sharp and insightful comments, and I will actively reflect those pointed matters ('적극 반영하도록 하겠습니다') when revising the final dissertation."
        },
        {
          "target": "본 연구의 이론적 모델이 실제 임상 현장에서 얼마만큼의 실효성을 가질 수 있는지 추가 설명 부탁드립니다.",
          "reading": "Bon yeon-gu-ui ironjeok modeul-i siljae imsang hyeonjang-eseo eolmamankeum-ui silhyoseong-eul gajil su inneunji chuga seolmyeong butakdeurimnida.",
          "translation": "Please provide an additional explanation on how much practical efficacy this study's theoretical model can possess in actual clinical settings."
        }
      ],
      "mnemonics": [
        "좌장의 조율, 발제자의 발표, 토론자의 날카로운 질의, 겸허한 소명과 수용!"
      ],
      "culturalNotes": [
        "한국의 학술 토론 문화에서는 상대방의 학문적 권위와 노고를 먼저 칭찬한 후('좋은 발표 잘 들었습니다'), 비판적 논점을 정중하고 세련된 어법으로 지적하는 학술적 예의(Academic Courtesy)가 중시됩니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "학술 심포지엄에서 발표된 논문을 사전에 면밀히 검토하고 발표 내용의 타당성과 한계에 대해 전문적인 논평을 제공하는 사람은?",
          "options": [
            "지정 토론자",
            "방청객",
            "행사 진행 도우미"
          ],
          "answerIndex": 0,
          "explanation": "발표 논문에 대해 전문적 비평과 질의를 담당하는 패널은 '지정 토론자(Discussant)'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "학술 발표 질의응답 시 청중이나 토론자의 비판적 지적을 수용하며 답변할 때 가장 모범적인 태도는?",
          "options": [
            "유익한 지적에 감사하며 향후 후속 연구에서 보완하겠다고 정중히 답변한다. (학술 토론에서는 지적 사항을 겸허히 수용하고 후속 연구 과제로 삼는 태도가 가장 바람직합니다.)",
            "화를 내며 내 논문은 완벽하니 질문하지 말라고 소리친다.",
            "모르는 질문에는 답변을 거부하고 무시한다."
          ],
          "answerIndex": 0,
          "explanation": "학술 토론에서는 지적 사항을 겸허히 수용하고 후속 연구 과제로 삼는 태도가 가장 바람직합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "학술대회 세션 전체를 총괄하고 발표 및 토론 시간을 관리하며 질의응답을 진행하는 사회자는?",
          "options": [
            "좌장",
            "서기",
            "경호원"
          ],
          "answerIndex": 0,
          "explanation": "학술 세션의 진행을 총괄하는 사회자를 '좌장(Chairperson)'이라고 부릅니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'토론자의 질의에 성실히 소명 답변을 드렸어요'(I faithfully gave an explanatory response to the discussant's question)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "토론자의 질의에 성실히 소명 답변을 드렸어요.",
            "토론자의 질의에 성실히 소명 답변을 드렸어요"
          ],
          "explanation": "토론자의 질의에 + 성실히 + 소명 답변을 + 드렸어요 = 토론자의 질의에 성실히 소명 답변을 드렸어요."
        }
      ]
    }
  },
  "ko-u29-l5": {
    "id": "ko-u29-l5",
    "subject": "korean",
    "unit": 29,
    "lessonNumber": 5,
    "title": "국제 학술 심포지엄 및 박사학위 논문 구술 심사 실전 학술 종합 담화",
    "level": "C1",
    "objective": "연구 가설, 연구 방법론, 실증 분석 결과, 학술적 의의 및 구술 심사 질의 소명을 종합하여 C1 최고급 학술 담화를 완성한다.",
    "presentation": {
      "explanation": "박사학위 논문 최종 구술 심사(Dissertation Defense) 및 국제 학술 심포지엄 메인 세션에서 구사하는 최고 수준의 실전 학술 담화 모델입니다.\n\n1. 박사학위 논문 최종 구술 심사 실전 모델:\n- 심사위원장: 심사 대상자께서는 학위 청구 논문의 핵심 요지와 선행 연구 대비 학술적 차별성을 10분간 요약 발표해 주시기 바랍니다.\n- 연구자: 네, 심사위원 교수님들께 감사드립니다. 본 논문은 인공지능 기반 언어 모델이 한국어 텍스트의 맥락적 담화 구조를 이해하는 데 미치는 영향을 **실증적으로 규명(Empirical Clarification)**하고자 하였습니다. 독립변수로 프롬프트 설계 기법을, 종속변수로 문맥 조응성 점수를 설정하여 **통계적 유의성(p < .001)**을 검증하였습니다. 본 연구는 한국어 특유의 높임법과 존칭 조응 현상을 체계화했다는 점에서 높은 **학술적 의의를 지니는 것으로 사료됩니다**.\n- 심사위원: 훌륭한 연구입니다. 다만 표본이 특정 도메인 코퍼스에 편중된 감이 있는데, 이에 대한 일반화 가능성은 어떻게 소명하시겠습니까?\n- 연구자: 지적해 주신 바와 같이 특정 장르의 한계가 존재함을 인정하며, 이는 차후 공공 행정 및 문학 텍스트를 포괄하는 **후속 연구 과제**로 삼아 외적 타당도를 보완하도록 하겠습니다.",
      "examples": [
        {
          "target": "철저한 가설 검증과 엄격한 실증 분석을 통해 박사학위 논문 구술 심사를 성공적으로 통과하였습니다.",
          "reading": "Cheoljeohan gaseol geomjeong-gwa eomgyeokhan siljeung bunseog-eul tonghae baksahagwi nonmun gusul simsa-reul seonggongjeog-euro tonggwahayeotseumnida.",
          "translation": "Through thorough hypothesis testing and rigorous empirical analysis, I successfully passed the doctoral dissertation oral defense ('박사학위 논문 구술 심사를 성공적으로 통과하였습니다')."
        },
        {
          "target": "선행 연구의 한계를 극복하고 새로운 이론적 틀을 제시함으로써 학계에 의미 있는 족적을 남겼습니다.",
          "reading": "Seonhaeng yeon-gu-ui hangye-reul geukbokhago saeroun ironjeok teul-eul jesiham-euroseo hakgye-e uimi inneun jokjeog-eul namgyeotseumnida.",
          "translation": "By overcoming the limitations of previous studies and presenting a new theoretical framework, it left a meaningful footprint in academia."
        },
        {
          "target": "심사위원들의 날카로운 비판과 조언은 연구의 학술적 완성도를 한 단계 끌어올리는 귀중한 밑거름이 되었습니다.",
          "reading": "Simsawiwon-deul-ui nalkaroun bipan-gwa jo-eon-eun yeon-gu-ui haksuljeok wanseongdo-reul han dangye kkeureo-ollineun gwijunghan mitgeoleum-i doe-eotseumnida.",
          "translation": "The judges' sharp criticism and advice became valuable foundation elevating the research's academic completeness to the next level."
        },
        {
          "target": "학술 연구의 궁극적 목표는 엄밀한 진리 탐구를 통해 인류 사회의 지적 지평을 넓히는 데 있습니다.",
          "reading": "Haksul yeon-gu-ui gung-geukjeok mokpyo-neun eommilhan jinri tamgu-reul tonghae inryu sahoe-ui jieok jipyeong-eul neolpineun de itseumnida.",
          "translation": "The ultimate goal of academic research lies in broadening the intellectual horizons of human society through rigorous truth inquiry."
        }
      ],
      "mnemonics": [
        "학위 심사: 명확한 논리, 정직한 연구 윤리, 당당하고 겸허한 소명 태도!"
      ],
      "culturalNotes": [
        "한국의 대학원 박사학위 심사는 통상 5인의 심사위원(지도교수 및 외래 심사위원) 앞에서 최소 3차에 걸친 엄격한 구술 심사(디펜스)를 통과해야 비로소 학위가 수여됩니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "박사학위 구술 심사(디펜스)에서 연구자가 심사위원들의 질문에 답변하고 연구의 정당성을 증명하는 행위를 뜻하는 용어는?",
          "options": [
            "소명",
            "변명",
            "회피"
          ],
          "answerIndex": 0,
          "explanation": "심사위원의 학술적 의문에 대해 근거를 대어 밝히는 것을 '소명(Clarification/Defense)'이라고 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "학위 논문 발표 마무리에서 연구가 지닌 가치를 학술적으로 천명하는 가장 적합한 문장은?",
          "options": [
            "본 연구는 한국어 담화 연구의 지평을 넓혔다는 점에서 학술적 의의를 지닙니다.",
            "이 논문은 페이지 수가 많으므로 무조건 훌륭합니다.",
            "시간이 없어서 대충 썼으니 그냥 통과시켜 주십시오."
          ],
          "answerIndex": 0,
          "explanation": "연구의 가치와 학문적 기여도를 당당하고 품격 있게 제시하는 표현이 모범적입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 한국의 학술 심포지엄 및 학위 논문 심사 담화로서 가장 올바르고 품격 있는 것은?",
          "options": [
            "선행 연구를 고찰하고 실증 분석을 통해 가설을 검증하였으며 학술적 의의를 지닙니다.",
            "심사위원님들의 질문은 귀찮으니 서면으로만 제출해 주시기 바랍니다.",
            "통계 분석 결과는 비밀이므로 공개할 수 없습니다."
          ],
          "answerIndex": 0,
          "explanation": "'선행 연구 고찰', '실증 분석', '가설 검증', '학술적 의의'는 완벽한 최고급 학술 담화 표현입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'실증 분석으로 가설을 검증하고 학위를 받았어요'(I tested hypotheses with empirical analysis and received a degree)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "실증 분석으로 가설을 검증하고 학위를 받았어요.",
            "실증 분석으로 가설을 검증하고 학위를 받았어요"
          ],
          "explanation": "실증 분석으로 + 가설을 + 검증하고 + 학위를 + 받았어요 = 실증 분석으로 가설을 검증하고 학위를 받았어요."
        }
      ]
    }
  },
  "ko-u30-l1": {
    "id": "ko-u30-l1",
    "subject": "korean",
    "unit": 30,
    "lessonNumber": 1,
    "title": "헌법재판소 5대 심판 권한과 기본권 보장 (Constitutional Adjudication)",
    "level": "C1",
    "objective": "위헌법률심판, 헌법소원심판, 탄핵심판, 정당해산심판, 권한쟁의심판 및 과잉금지의 원칙을 이해하고 헌법적 가치를 논증한다.",
    "presentation": {
      "explanation": "대한민국 최고 헌법 수호 기관인 헌법재판소의 5대 관장 심판과 국민의 기본권 보장 체계입니다.\n\n1. 헌법재판소의 5대 관장 심판:\n- **위헌법률심판(Review of Constitutionality of Statutes)**: 법률이 헌법에 위반되는지 여부를 심판하여 효력을 상실시킴 (법원의 제청 필요)\n- **헌법소원심판(Constitutional Complaint)**: 공권력의 행사 또는 불행사로 인해 헌법상 보장된 기본권을 침해받은 국민이 직접 구제를 청구하는 심판\n- **탄핵심판(Impeachment Trial)**: 대통령, 국무총리, 법관 등 고위 공직자가 직무 집행에 있어 헌법이나 법률을 위배했을 때 파면 여부를 결정\n- **정당해산심판(Dissolution of Political Party)**: 정당의 목적이나 활동이 민주적 기본질서에 위배될 때 정부의 청구로 해산 결정\n- **권한쟁의심판(Competence Dispute)**: 국가기관 상호 간 또는 지방자치단체 간의 권한 범위에 관한 다툼을 심판\n\n2. 기본권 제한의 한계 원리:\n- **과잉금지의 원칙(Principle of Proportionality / 과잉금지원칙)**: 국민의 기본권을 법률로 제한할 때 지켜야 할 4대 요건인 목적의 정당성, 수단의 적합성, 침해의 최소성, 법익의 균형성",
      "examples": [
        {
          "target": "헌법재판소는 해당 법률 조항이 과잉금지원칙을 위반하여 국민의 집회 및 결사의 자유를 과도하게 침해한다고 판단하여 위헌 결정을 내렸습니다.",
          "reading": "Heonbeopjaepanso-neun haedang beomryul johang-i gwa-ing-geumji-wonchik-eul wiban-hayeo gungmin-ui jiphoe mit gyeolsa-ui jayu-reul gwadohage chimhaehandago pandanhayeo wiheon gyeoljeong-eul naeryeotseumnida.",
          "translation": "The Constitutional Court judged that the statutory provision in question violated the principle of proportionality ('과잉금지원칙을 위반하여') and excessively infringed citizens' freedom of assembly and association, handing down an unconstitutional decision."
        },
        {
          "target": "행정청의 위법한 공권력 행사로 인해 신체의 자유를 침해당한 청구인은 정당한 법적 절차에 따라 헌법소원심판을 청구했습니다.",
          "reading": "Haengjeongcheong-ui wibeophan gonggwonryeok haengsa-ro inhae sinche-ui jayu-reul chimhaedanghan cheong-guin-eun jeongdanghan beopjeok jeolcha-e ttara heonbeopsowonsimpan-eul cheong-guhaetseumnida.",
          "translation": "The petitioner, whose physical freedom was infringed by the administrative agency's unlawful exercise of public power, filed a constitutional complaint trial ('헌법소원심판을 청구했습니다') according to due process of law."
        },
        {
          "target": "국가기관과 지방자치단체 간의 행정 사무 관할권을 둘러싼 첨예한 대립은 권한쟁의심판 청구를 통해 사법적으로 해결되었습니다.",
          "reading": "Gukgagigwan-gwa jibangjachidanche gan-ui haengjeong samu gwanhalgwon-eul dulleossan cheom-yehan daerip-eun gwonhanjaeng-uisimpan cheong-gu-reul tonghae sabeopjeog-euro haegyeoldoeeotseumnida.",
          "translation": "The sharp conflict surrounding administrative affairs jurisdiction between a state agency and a local government was judicially resolved through filing a competence dispute trial ('권한쟁의심판 청구를 통해')."
        },
        {
          "target": "헌법상 기본권 제한은 오직 국가안전보장, 질서유지 또는 공공복리를 위하여 필요한 경우에 한하여 법률로써만 가능합니다.",
          "reading": "Heonbeopsang gibon-gwon jehan-eun ojik gukga-anjeonbojang, jilseo-yuji ttoneun gonggongbokri-reul wihayeo piryohan gyeong-u-e hanhayeo beomryul-rosseoman ganeunghamnida.",
          "translation": "Restriction of basic rights under the Constitution is permissible only by statute in cases necessary for national security, maintenance of law and order, or public welfare."
        }
      ],
      "mnemonics": [
        "헌재의 5대 심판: 위헌법률, 헌법소원, 탄핵, 정당해산, 권한쟁의! 기본권엔 과잉금지!"
      ],
      "culturalNotes": [
        "대한민국 헌법재판소(헌재)는 9인의 재판관으로 구성되며, 위헌 결정이나 탄핵 인용, 정당해산 결정을 위해서는 재판관 6인 이상의 찬성이 필요한 엄격한 가중정족수 제도를 채택하고 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "공권력의 행사 또는 불행사로 인해 헌법상 보장된 기본권을 침해받은 국민이 헌법재판소에 직접 권리 구제를 청구하는 심판은?",
          "options": [
            "헌법소원심판",
            "민사소송",
            "가압류신청"
          ],
          "answerIndex": 0,
          "explanation": "국민이 공권력에 의한 기본권 침해 구제를 청구하는 헌법 재판은 '헌법소원심판'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "국민의 기본권을 제한할 때 목적의 정당성, 수단의 적합성, 침해의 최소성, 법익의 균형성을 지켜야 한다는 헌법 원리는?",
          "options": [
            "과잉금지의 원칙",
            "선착순의 원칙",
            "무죄추정 배제의 원칙"
          ],
          "answerIndex": 0,
          "explanation": "기본권 제한의 한계를 규정한 4대 헌법 심사 기준은 '과잉금지의 원칙(비례의 원칙)'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "법원에서 재판 중인 사건에 적용될 법률이 헌법에 위반되는지 여부를 헌법재판소에 심판해 줄 것을 제청하는 제도는?",
          "options": [
            "위헌법률심판",
            "정당해산심판",
            "탄핵심판"
          ],
          "answerIndex": 0,
          "explanation": "재판의 전제가 되는 법률의 위헌 여부를 가리는 재판은 '위헌법률심판'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'기본권 침해에 대해 헌법소원심판을 청구했어요'(I filed a constitutional complaint for basic rights infringement)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "기본권 침해에 대해 헌법소원심판을 청구했어요.",
            "기본권 침해에 대해 헌법소원심판을 청구했어요"
          ],
          "explanation": "기본권 침해에 대해 + 헌법소원심판을 + 청구했어요 = 기본권 침해에 대해 헌법소원심판을 청구했어요."
        }
      ]
    }
  },
  "ko-u30-l2": {
    "id": "ko-u30-l2",
    "subject": "korean",
    "unit": 30,
    "lessonNumber": 2,
    "title": "형사 소송과 민사 소송의 사법 절차 (Criminal & Civil Litigation)",
    "level": "C1",
    "objective": "고소·고발, 기소/불기소, 구속영장 실질심사, 국민참여재판, 민사 소장 접수 및 가압류·가처분 절차를 마스터한다.",
    "presentation": {
      "explanation": "사법부 법원에서 진행되는 형사 소송(Criminal Procedure) 및 민사 소송(Civil Procedure)의 전 과정 전문 법률 절차입니다.\n\n1. 형사 소송 절차 (수사-기소-재판):\n- **고소(Complaint / 피해자) vs 고발(Accusation / 제3자)**\n- **영장실질심사(구속 전 피의자 심문)**: 판사가 구속영장 발부 전 피의자를 대면 심문하여 증거 인멸 및 도주 우려를 심사하는 절차\n- **공소 제기(기소 / Indictment) vs 불기소 처분(기소유예/혐의없음)**: 검사가 법원에 재판을 청구하는 행위\n- **국민참여재판(Jury Trial in Korea)**: 일반 시민이 배심원으로 참여하여 유·무죄 평결과 양형 의견을 제시하는 형사 재판\n\n2. 민사 소송 절차 (권리 구제):\n- **원고(Plaintiff) vs 피고(Defendant)**: 소송을 제기한 사람 vs 소송을 당한 상대방\n- **소장(Complaint) 접수 & 변론기일(Pleading Date)**: 양측 당사자가 법정에 출석하여 주장과 증거를 공방\n- **보전처분(가압류 / 가처분)**: 판결 확정 전 피고가 재산을 은닉하거나 처분하지 못하도록 동결하는 법적 조치",
      "examples": [
        {
          "target": "법원은 피의자의 주거가 일정하고 증거 인멸 및 도주의 우려가 없다고 판단하여 구속영장 청구를 기각했습니다.",
          "reading": "Beobwon-eun pi-uija-ui jugeo-ga iljeonghago jeung-geo inmyeol mit doju-ui uryeo-ga eopdago pandanhayeo gusong-yeongjang cheong-gu-reul gigakhaetseumnida.",
          "translation": "The court dismissed the arrest warrant request ('구속영장 청구를 기각했습니다'), judging that the suspect's residence was fixed and there was no risk of evidence destruction or flight."
        },
        {
          "target": "피고인은 시민 배심원단의 평결을 통해 객관적 판단을 받고자 국민참여재판을 신청하였습니다.",
          "reading": "Pigoin-eun simin baesimwondan-ui pyeong-gyeol-eul tonghae gaekgwanjeok pandan-eul batgoja gungmin-cham-yeo-jaepan-eul sincheonghayeotseumnida.",
          "translation": "The defendant applied for a citizen participation trial ('국민참여재판을 신청하였습니다') to receive an objective judgment through the citizen jury's verdict."
        },
        {
          "target": "원고는 본안 소송 승소 후 강제집행을 원활히 진행하기 위해 피고의 부동산에 가압류를 신청하여 결정을 받았습니다.",
          "reading": "Won-go-neun bon-an sosong seungso hu gangjejiphaeng-eul wonhwalhi jinhaenghagi wihae pigo-ui budongsan-e ga-amryu-reul sincheonghayeo gyeoljeong-eul badatseumnida.",
          "translation": "To smoothly proceed with compulsory execution after winning the main lawsuit, the plaintiff applied for provisional seizure ('가압류를 신청하여') on the defendant's real estate and received an order."
        },
        {
          "target": "검찰은 피의자의 범죄 혐의가 충분히 입증되었다고 판단하여 형사 재판부에 정식 기소 처분을 내렸습니다.",
          "reading": "Geomchal-eun pi-uija-ui beomjoe hyeomi-ga chungbunhi ipjeungdoe-eotdago pandanhayeo hyeongsa jaepanbu-e jeongsik giso cheobun-eul naeryeotseumnida.",
          "translation": "The prosecution formally indicted ('정식 기소 처분을 내렸습니다') the case to the criminal bench, judging that the suspect's criminal charges were sufficiently proven."
        }
      ],
      "mnemonics": [
        "영장실질심사로 구속 여부 결정, 기소되면 국민참여재판, 민사엔 가압류와 변론기일!"
      ],
      "culturalNotes": [
        "한국의 '국민참여재판'은 미국의 배심원제와 달리 배심원의 평결이 판사에게 법적 기속력을 갖지 않는 '권고적 효력'을 지니지만, 판사는 배심원 평결을 매우 존중하여 판결에 적극 반영합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "판사가 검사의 구속영장 청구를 받아들여 피의자를 구속하기 전, 법정에서 직접 피의자를 심문하는 제도는?",
          "options": [
            "영장실질심사 (구속 전 피의자 심문) (구속영장 발부 전 판사가 피의자를 대면 심문하는 절차는 영장실질심사입니다.)",
            "약식명령",
            "즉결심판"
          ],
          "answerIndex": 0,
          "explanation": "구속영장 발부 전 판사가 피의자를 대면 심문하는 절차는 '영장실질심사'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "민사 소송에서 승소 판결 후 돈을 돌려받지 못할 것에 대비하여 피고의 예금이나 부동산을 미리 묶어두는 신청은?",
          "options": [
            "가압류",
            "공탁",
            "항소"
          ],
          "answerIndex": 0,
          "explanation": "금전 채권의 집행을 보전하기 위해 재산을 동결하는 조치는 '가압류'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "일반 국민이 배심원으로 참여하여 형사 재판의 유무죄 평결과 양형에 의견을 내는 재판은?",
          "options": [
            "국민참여재판",
            "행정심판",
            "가사재판"
          ],
          "answerIndex": 0,
          "explanation": "시민 배심원이 참여하는 한국형 배심 재판은 '국민참여재판'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'영장실질심사와 국민참여재판을 진행했어요'(They conducted warrant hearing and citizen jury trial)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "영장실질심사와 국민참여재판을 진행했어요.",
            "영장실질심사와 국민참여재판을 진행했어요"
          ],
          "explanation": "영장실질심사와 + 국민참여재판을 + 진행했어요 = 영장실질심사와 국민참여재판을 진행했어요."
        }
      ]
    }
  },
  "ko-u30-l3": {
    "id": "ko-u30-l3",
    "subject": "korean",
    "unit": 30,
    "lessonNumber": 3,
    "title": "민사 불법행위, 채무불이행 및 분쟁 조정 (Torts & Dispute Resolution)",
    "level": "C1",
    "objective": "손해배상 청구, 채무불이행, 부당이득 반환, 소멸시효 완성 및 소송 외 분쟁 해결(조정/중재/합의)을 이해하고 법률 상담을 구사한다.",
    "presentation": {
      "explanation": "사인 간의 권리 침해와 재산상 손해를 사법적으로 해결하는 민사 불법행위(Torts) 및 분쟁 해결 기제입니다.\n\n1. 민사 책임 및 청구권:\n- **불법행위(Tort)로 인한 손해배상 청구**: 고의 또는 과실로 타인에게 위법하게 가한 재산상·정신적 손해(위자료)의 배상을 청구\n- **채무불이행(Default / Non-performance)**: 계약상의 이행기까지 정당한 사유 없이 빚이나 의무를 갚지 않는 행위 (이행지체, 이행불능, 불완전이행)\n- **부당이득 반환 청구(Claim for Unjust Enrichment)**: 법률상 원인 없이 타인의 재산으로 이익을 얻고 타인에게 손해를 가한 경우 반환을 청구\n- **소멸시효(Statute of Limitations)**: 권리자가 권리를 행사할 수 있음에도 일정 기간 행사하지 않으면 권리가 소멸하는 제도 (일반 채권 10년, 상사 채권 5년)\n\n2. 대체적 분쟁 해결 제도(ADR):\n- **합의(Settlement) vs 민사조정(Mediation) vs 중재(Arbitration)**: 당사자 간 자율적 타협 vs 법원 조정위원회의 중재안 합의 vs 중재인의 최종 판정에 승복",
      "examples": [
        {
          "target": "제조물 책임법상 결함으로 인해 피해를 입은 소비자는 제조업자를 상대로 징벌적 손해배상 청구 소송을 제기했습니다.",
          "reading": "Jejomul chaegimbeopsang gyeolham-euro inhae pihae-reul ibeun sobija-neun jejoeopja-reul sangdae-ro jingbeoljeok sonhaebaesang cheong-gu sosong-eul jegihaetseumnida.",
          "translation": "Consumers who suffered damages due to defects under the Product Liability Act filed a punitive damages lawsuit ('손해배상 청구 소송을 제기했습니다') against the manufacturer."
        },
        {
          "target": "채무자가 약정 기일까지 대금을 지급하지 않아 채무불이행에 따른 지연손해금과 계약 해제를 통보하였습니다.",
          "reading": "Chaemuja-ga yakjeong gi-il-kkaji daegeum-eul jigeubhaji ana chaemubur-ihaeng-e ttareun jiyeonsonhaegeum-gwa gyeyak haeje-reul tongbohayotseumnida.",
          "translation": "Since the debtor did not pay the amount by the agreed due date, we notified delayed damages and contract termination due to default ('채무불이행에 따른')."
        },
        {
          "target": "장기간의 소송 비용과 시간 낭비를 줄이기 위해 당사자 간 법원 민사조정 절차를 거쳐 원만하게 합의에 도달했습니다.",
          "reading": "Jang-gigan-ui sosong biyong-gwa sigan nangbi-reul jurigi wihae dangsaja gan beobwon minsajojeong jeolcha-reul geochyeo wonmanhage hab-ui-e dodalhaetseumnida.",
          "translation": "To reduce long-term lawsuit costs and time waste, the parties reached an amicable agreement through court civil mediation procedures ('법원 민사조정 절차를 거쳐')."
        },
        {
          "target": "해당 채권은 권리 불행사로 인해 10년의 소멸시효가 완성되었으므로 법적으로 청구권이 소멸하였습니다.",
          "reading": "Haedang chaegwon-eun gwonri bulhaengsa-ro inhae simnyeon-ui somyeolsihyo-ga wanseongdoe-eosseumeuro beopjeog-euro cheong-gugwon-i somyeolhayeotseumnida.",
          "translation": "Since the 10-year statute of limitations expired ('소멸시효가 완성되었으므로') due to non-exercise of rights, the claim right legally vanished."
        }
      ],
      "mnemonics": [
        "피해엔 손해배상, 빚 안 갚으면 채무불이행, 시간 지나면 소멸시효, 법원 조정으로 원만 합의!"
      ],
      "culturalNotes": [
        "한국 법원은 복잡한 민사 분쟁 시 소송 판결로 가기 전 판사와 조정위원이 참여하는 '조정 회부'를 적극 권장하여 당사자 간의 상생적 합의를 유도합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "고의 또는 과실로 인한 위법행위로 타인에게 가한 재산상·정신적 손해를 금전으로 보상하도록 청구하는 권리는?",
          "options": [
            "손해배상 청구권",
            "소유권 이전 청구권",
            "지급명령 이의신청"
          ],
          "answerIndex": 0,
          "explanation": "불법행위나 채무불이행으로 인한 피해를 보상받는 권리는 '손해배상 청구권'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "권리를 행사하지 않고 방치한 채 일정 기간(일반 채권 10년 등)이 지나면 권리 자체가 소멸하는 법 제도는?",
          "options": [
            "소멸시효",
            "취득시효",
            "공소시효"
          ],
          "answerIndex": 0,
          "explanation": "민사상 권리를 행사하지 않아 권리가 소멸하는 제도는 '소멸시효'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "법률상 원인 없이 타인의 재산이나 노무로 이익을 얻고 타인에게 손해를 입혔을 때 돌려주어야 하는 것은?",
          "options": [
            "부당이득 반환",
            "증여세 납부",
            "위약금 몰수"
          ],
          "answerIndex": 0,
          "explanation": "원인 없는 부당한 이득을 반환하는 제도는 '부당이득 반환'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'손해배상 청구와 민사조정으로 합의했어요'(We settled through damages claim and civil mediation)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "손해배상 청구와 민사조정으로 합의했어요.",
            "손해배상 청구와 민사조정으로 합의했어요"
          ],
          "explanation": "손해배상 청구와 + 민사조정으로 + 합의했어요 = 손해배상 청구와 민사조정으로 합의했어요."
        }
      ]
    }
  },
  "ko-u30-l4": {
    "id": "ko-u30-l4",
    "subject": "korean",
    "unit": 30,
    "lessonNumber": 4,
    "title": "법원 판결문 및 헌재 결정문 전문 어미와 수사 (Judicial Verdict Syntax)",
    "level": "C1",
    "objective": "-에 처한다, -을 각하/기각/인용한다, -의 청구는 이유 없으므로, 헌법불합치 결정을 선고한다 등 사법 판결문 문체를 마스터한다.",
    "presentation": {
      "explanation": "대법원 및 각급 법원의 판결문(Court Verdict), 헌법재판소 결정문(Decision of Constitutional Court)에서 사용되는 엄격한 법정 종결형과 법리 수사입니다.\n\n1. 법원 판결 주문(Main Sentence)의 핵심 종결형:\n- **~에 처한다**: 형사 유죄 판결 시 형량을 선고하는 주문 문형 (예: '피고인을 징역 3년에 처한다. 다만 5년간 위 형의 집행을 유예한다.')\n- **원고의 청구를 기각한다 (Dismissal on Merits)**: 본안 심리 결과 원고의 주장에 법적 이유가 없다고 판단할 때\n- **소송을 각하한다 (Dismissal without Prejudice)**: 소송 요건(당사자 적격, 제소 기간 등)을 갖추지 못해 본안 심리 없이 문전박대하여 종결할 때\n- **소송비용은 피고가 부담한다**: 패소자 부담 원칙에 따른 소송 비용 분담 주문\n\n2. 헌법재판소 결정의 유형별 선고 문구:\n- **위헌(Unconstitutional) vs 합헌(Constitutional)**: 법률 조항이 헌법에 위배됨 vs 위배되지 않음\n- **헌법불합치(Non-conformity with Constitution)**: 위헌이지만 즉각 무효화 시 법적 공백과 사회적 혼란이 우려되어 입법부의 개정 시한까지 잠정 적용하는 변형 결정\n- **인용(Upholding) vs 기각(Rejection) vs 각하(Dismissal)**",
      "examples": [
        {
          "target": "주문: 피고인을 징역 2년에 처한다. 압수된 증 제1호를 피고인으로부터 몰수한다.",
          "reading": "Jumun: Pigoin-eul jing-yeok i-nyeon-e cheohanda. Apsudoen jeung je-il-ho-reul pigoin-eurobuteo molsuhanda.",
          "translation": "Ruling ('주문'): The defendant is sentenced to 2 years in prison ('징역 2년에 처한다'). Seized exhibit No. 1 is confiscated from the defendant."
        },
        {
          "target": "원고의 주장은 이유 없으므로 이를 모두 기각하며, 소송비용은 패소자인 원고가 부담한다.",
          "reading": "Won-go-ui jujang-eun iyu eopseumeuro ireul modu gigakhayeo, sosongbiyong-eun paesojain won-go-ga budamhanda.",
          "translation": "Since the plaintiff's claims are without merit ('이유 없으므로'), they are all dismissed on the merits ('모두 기각하며'), and lawsuit costs shall be borne by the losing plaintiff."
        },
        {
          "target": "본 헌법소원 청구는 청구 기간을 도과하여 부적법하므로 이를 각하하기로 결정한다.",
          "reading": "Bon heonbeopsowon cheong-gu-neun cheong-gu gigan-eul dogwahayeo bujeokbeobhaneuro ireul gakhahagiro gyeoljeonghanda.",
          "translation": "This constitutional complaint request is unlawful due to expiration of the filing period, so we decide to dismiss it without hearing on the merits ('이를 각하하기로 결정한다')."
        },
        {
          "target": "해당 형법 조항에 대하여 헌법불합치 결정을 선고하며, 국회는 정해진 시한까지 개정 법률안을 마련해야 합니다.",
          "reading": "Haedang hyeongbeop johang-e daehayeo heonbeopbulhapchi gyeoljeong-eul seongohamyeo, gukhoe-neun jeonghaejin sihan-kkaji gaejeong beomryulan-eul maryeonhaeya hamnida.",
          "translation": "We pronounce a decision of non-conformity with the Constitution ('헌법불합치 결정을 선고하며') on the penal code article in question, and the National Assembly must prepare an amended bill by the designated deadline."
        }
      ],
      "mnemonics": [
        "징역형엔 ~에 처한다, 요건 미비는 각하, 이유 없으면 기각, 법적 공백 막을 땐 헌법불합치!"
      ],
      "culturalNotes": [
        "한국 법원의 판결문은 '주문(Main Text)', '이유(Reasons)', '판단(Judgment)'의 3단 논법 구조로 작성되며, 판결 주문 선고 시 판사는 엄숙한 어조로 판결문을 낭독합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "형사 판결문에서 피고인에 대한 형벌과 징역 기간을 확정하여 선고할 때 쓰는 표준 법정 종결형은?",
          "options": [
            "피고인을 징역 O년에 처한다",
            "피고인을 감옥에 보내기로 생각한다",
            "피고인이 죄를 지어서 벌을 주겠다"
          ],
          "answerIndex": 0,
          "explanation": "형사 판결 주문의 표준 문형은 '~에 처한다'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "헌법재판소가 법률 조항의 위헌성을 인정하면서도 즉각 무효화에 따른 법적 혼란을 막기 위해 입법 개정 시한을 두는 결정은?",
          "options": [
            "헌법불합치",
            "단순합헌",
            "청구인용"
          ],
          "answerIndex": 0,
          "explanation": "위헌이지만 법적 공백을 막기 위해 잠정 적용하는 변형 위헌 결정을 '헌법불합치'라고 합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "소송 요건을 갖추지 못하여 법원에서 본안 심리를 하지 않고 소송을 배척하여 끝내는 판결 주문은?",
          "options": [
            "소송을 각하한다",
            "청구를 기각한다",
            "승소를 인용한다"
          ],
          "answerIndex": 0,
          "explanation": "소송 요건 불비로 본안 판단 없이 문전박대하는 판결을 '각하'라고 합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'판결 주문에서 청구 기각 판결을 선고했어요'(In the ruling, they pronounced dismissal of the claim)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "판결 주문에서 청구 기각 판결을 선고했어요.",
            "판결 주문에서 청구 기각 판결을 선고했어요"
          ],
          "explanation": "판결 주문에서 + 청구 기각 + 판결을 + 선고했어요 = 판결 주문에서 청구 기각 판결을 선고했어요."
        }
      ]
    }
  },
  "ko-u30-l5": {
    "id": "ko-u30-l5",
    "subject": "korean",
    "unit": 30,
    "lessonNumber": 5,
    "title": "헌법재판소 대심판정 공개변론 및 법정 재판 실전 사법 종합 담화",
    "level": "C1",
    "objective": "헌법재판소 대심판정 구두 변론, 증거 조사, 최후 변론 및 판결 선고를 총망라한 최고급 C1 사법 재판 담화를 완성한다.",
    "presentation": {
      "explanation": "헌법재판소 대심판정 공개변론(Public Oral Argument) 및 대법원 대법정에서 펼쳐지는 대한민국 최고 수준의 사법 재판 실전 모델입니다.\n\n1. 헌법재판소 대심판정 공개변론 실전 모델:\n- 헌법재판소장: 지금부터 2026헌마OOO 기본권 침해 관련 헌법소원 사건에 대한 대심판정 공개변론을 개정하겠습니다. 청구인 대리인께서는 변론 요지를 진술해 주시기 바랍니다.\n- 청구인 대리인(변호사): 존경하는 헌법재판관 여러분, 피청구인 행정청의 처분은 헌법 제37조 제2항의 **과잉금지원칙(침해의 최소성 및 법익의 균형성)**을 중대하게 위반하여 청구인의 직업의 자유와 행복추구권을 본질적으로 침해하였습니다. 따라서 해당 조항에 대한 **위헌 확인 결정**을 간곡히 청구하는 바입니다.\n- 피청구인 대리인(정부 법무관): 피청구인의 조치는 공공복리와 국민 보건 증진이라는 중대한 공익 목적을 달성하기 위한 불가피한 최소한의 규제로서 목적의 정당성과 수단의 적합성을 온전히 구비하고 있습니다. 따라서 청구인의 심판 청구는 **이유 없으므로 기각**되어야 마땅합니다.\n- 헌법재판소장: 양측의 구두 변론과 참고인 진술을 충실히 청취하였습니다. 평의를 거쳐 추후 선고 기일을 지정하여 통지하겠습니다. 폐정을 선언합니다.",
      "examples": [
        {
          "target": "헌법재판소 대심판정에서 펼쳐진 치열한 공개변론은 헌법적 정의와 기본권 보장의 소중함을 일깨워 준 역사적 순간이었습니다.",
          "reading": "Heonbeopjaepanso daesimpanjeong-eseo pyeolchyeojin chi-yeolhan gong-gae-byeonron-eun heonbeopjeok jeong-ui-wa gibon-gwon bojang-ui sojungham-eul ilkkaewo jun yeoksajeok sungan-i-eotseumnida.",
          "translation": "The fierce public oral argument unfolded in the Constitutional Court Grand Courtroom was a historic moment awakening the value of constitutional justice and basic rights protection."
        },
        {
          "target": "변호인의 논리정연한 변론과 명백한 증거 제시 덕분에 피고인은 무죄 판결을 선고받았습니다.",
          "reading": "Byeonhoin-ui nonrijeong-yeonhan byeonron-gwa myeongbaekhan jeung-geo jesi deokbun-e pigoin-eun mujoe pan-gyeol-eul seong-gobadatseumnida.",
          "translation": "Thanks to the defense attorney's logical pleading and presentation of clear evidence, the defendant was pronounced not guilty ('무죄 판결을 선고받았습니다')."
        },
        {
          "target": "사법권의 독립과 적법절차의 원칙 준수는 민주 법치주의 국가를 지탱하는 가장 견고한 주춧돌입니다.",
          "reading": "Sabeopgwon-ui dongnip-gwa jeokbeopjeolcha-ui wonchik junsu-neun minju beopchiju-ui gukga-reul jitaenghaneun gajang gyeon-gohan juchutdol-imnida.",
          "translation": "The independence of judicial power and adherence to due process of law is the firmest cornerstone sustaining a democratic constitutional state governed by rule of law."
        },
        {
          "target": "법원은 법률과 양심에 따라 공정무사하게 판결을 내림으로써 국민의 사법 신뢰를 회복해야 합니다.",
          "reading": "Beobwon-eun beomryul-gwa yangsim-e ttara gongjeongmusahage pan-gyeol-eul naerim-euroseo gungmin-ui sabeop sinroe-reul hoebokhaeya hamnida.",
          "translation": "The court must restore the public's judicial trust by rendering fair and impartial judgments according to law and conscience."
        }
      ],
      "mnemonics": [
        "대심판정의 공방: 헌법적 가치, 과잉금지원칙, 법치주의와 기본권 수호!"
      ],
      "culturalNotes": [
        "한국의 헌법재판소 공개변론은 인터넷을 통해 전 국민에게 실시간 생중계되며, 중대한 국가적 헌법 쟁점을 공론장에서 투명하게 논의하는 민주주의의 산교육장 역할을 합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "헌법재판소 대심판정에서 청구인과 피청구인 대리인이 재판관들 앞에서 구두로 주장을 펼치는 절차는?",
          "options": [
            "공개변론",
            "서면독서",
            "비공개조사"
          ],
          "answerIndex": 0,
          "explanation": "헌법재판소 대심판정에서 공개적으로 진행되는 구두 변론 절차는 '공개변론'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "법정 변론에서 청구인이 국가의 기본권 침해 처분에 맞서 위헌성을 주장할 때 가장 결정적인 헌법적 논거는?",
          "options": [
            "해당 처분이 과잉금지원칙을 위반하여 기본권의 본질적 내용을 침해했다는 법리",
            "청구인의 기분이 매우 불쾌하다는 감정적 호소",
            "외국 법률과 상관없이 그냥 법을 없애달라는 요구"
          ],
          "answerIndex": 0,
          "explanation": "기본권 침해의 위헌성을 입증하는 핵심 법리는 '과잉금지원칙 위반'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 한국의 법원 및 헌법재판소 법정 담화로서 가장 올바르고 품격 있는 것은?",
          "options": [
            "과잉금지원칙 위배 여부를 심리하여 헌법에 합치하는 공정한 판결을 선고합니다.",
            "재판은 귀찮으니 동전을 던져서 유죄와 무죄를 정하겠습니다.",
            "판결문 작성 대신 당사자들끼리 법정에서 싸우십시오."
          ],
          "answerIndex": 0,
          "explanation": "'과잉금지원칙 위배 여부 심리', '헌법 합치', '공정한 판결 선고'는 완벽한 최고급 사법 법정 담화 표현입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'공개변론에서 과잉금지원칙 위반을 주장했어요'(In the oral argument, they argued violation of proportionality principle)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "공개변론에서 과잉금지원칙 위반을 주장했어요.",
            "공개변론에서 과잉금지원칙 위반을 주장했어요"
          ],
          "explanation": "공개변론에서 + 과잉금지원칙 + 위반을 + 주장했어요 = 공개변론에서 과잉금지원칙 위반을 주장했어요."
        }
      ]
    }
  },
  "ko-u31-l1": {
    "id": "ko-u31-l1",
    "subject": "korean",
    "unit": 31,
    "lessonNumber": 1,
    "title": "저출생·초고령사회 인구 절벽과 지방 소멸 위기 (Demographic Cliff & Depopulation)",
    "level": "C2",
    "objective": "합계출산율, 초고령사회 진입, 생산가능인구 급감, 지방 소멸 위험 지수 등 대한민국 인구 구조 변화 핵심 전문 시사 담화를 마스터한다.",
    "presentation": {
      "explanation": "21세기 대한민국이 직면한 가장 엄중한 국가적 위기인 인구 구조 변화(Demographic Transformation)와 지방 소멸(Regional Depopulation) 관련 최고급 시사 어휘입니다.\n\n1. 인구 지표 및 통계 용어:\n- **합계출산율(Total Fertility Rate, TFR)**: 가임기 여성 1명이 평생 낳을 것으로 예상되는 평균 출생아 수 (한국은 0.7명대 안팎으로 세계 최저 수준)\n- **초고령사회(Super-aged Society)**: 전체 인구 중 65세 이상 고령 인구 비율이 20%를 초과하는 사회 (고령화사회 7% -> 고령사회 14% -> 초고령사회 20%)\n- **인구 절벽(Demographic Cliff)**: 생산가능인구(15~64세)가 급격히 줄어들어 소비와 생산이 급감하는 경제적 위기 국면\n- **유소년 부양비 vs 노년 부양비**: 생산가능인구 100명당 부양해야 할 0~14세 유소년 및 65세 이상 노인 인구의 비율\n\n2. 지역 격차와 지방 소멸:\n- **지방 소멸 위험 지수(Regional Extinction Risk Index)**: 한 지역의 20~39세 가임 여성 인구수를 65세 이상 고령 인구수로 나눈 값 (0.5 미만 시 소멸 위험 단계 진입)\n- **수도권 과밀화(Metropolitan Overcrowding)**: 일자리와 교육 인프라가 서울 및 수도권에 집중되어 지방 청년들이 대거 유출되는 현상",
      "examples": [
        {
          "target": "합계출산율이 역대 최저치인 0.7명대로 추락함에 따라 생산가능인구 급감과 잠재성장률 둔화가 현실화되고 있습니다.",
          "reading": "Hapgye-chulsanryul-i yeokdae choejeochi-in yeong-jeom-chil-myeong-dae-ro churakham-e ttara saengsan-ganeung-in-gu geupgam-gwa jamjae-seongjangryul dunhwa-ga hyeonsilhwa-doego itseumnida.",
          "translation": "As the total fertility rate crashed to an all-time low in the 0.7 range ('합계출산율이 역대 최저치인 0.7명대로 추락함에 따라'), a sharp decline in working-age population and deceleration of potential growth rate are materializing."
        },
        {
          "target": "대한민국은 65세 이상 고령 인구 비중이 20%를 넘어서며 유례없이 빠른 속도로 초고령사회에 공식 진입하였습니다.",
          "reading": "Daehanminguk-eun yuksibo-se isang goryeong in-gu bijung-i isip-peosenteu-reul neomeoseomyeo yurye-eopsi ppareun sokdo-ro chogoryeong-sahoe-e gongsik jinibhayeotseumnida.",
          "translation": "The Republic of Korea officially entered a super-aged society ('초고령사회에 공식 진입하였습니다') at an unprecedented speed as the proportion of senior citizens aged 65 and older surpassed 20%."
        },
        {
          "target": "청년 인구의 수도권 쏠림 현상으로 인해 지방 중소 도시의 절반 이상이 지방 소멸 위험 단계에 직면해 있습니다.",
          "reading": "Cheongnyeon in-gu-ui sudogwon ssolrim hyeonsang-euro inhae jibang jungso dosi-ui jeolban isang-i jibang somyeol wiheom dangye-e jikmyeonhae itseumnida.",
          "translation": "Due to the youth population overcrowding phenomenon toward the capital area, more than half of regional small-to-medium cities are facing the regional extinction risk stage ('지방 소멸 위험 단계에')."
        },
        {
          "target": "인구 절벽의 충격을 완화하기 위해서는 파격적인 주거 지원과 일·가정 양립 문화 정착이 시급합니다.",
          "reading": "In-gu jeolbyeok-ui chung-gyeok-eul wanhwahagi wihaeseo pagyeokjeogin jugeo jiwon-gwa il-gajeong yangrip munhwa jeongchak-i sigeubhamnida.",
          "translation": "To mitigate the shock of the demographic cliff, unprecedented housing support and the establishment of a work-life balance culture are urgent."
        }
      ],
      "mnemonics": [
        "합계출산율 0.7, 65세 이상 20% 초고령사회, 청년 유출로 지방 소멸 위험!"
      ],
      "culturalNotes": [
        "한국 정부는 저출생 극복을 위해 부모급여 도입, 신혼부부 특례 대출, 육아휴직 기간 확대 등 국가적 역량을 총동원하여 '국가비상사태' 수준의 대책을 추진하고 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "한 사회의 전체 인구 중 65세 이상 고령 인구의 비율이 20% 이상인 사회를 일컫는 인구학적 공식 용어는?",
          "options": [
            "초고령사회",
            "고령사회",
            "고령화사회"
          ],
          "answerIndex": 0,
          "explanation": "65세 이상 고령 인구 비율이 20%를 초과하는 사회를 '초고령사회(Super-aged Society)'라고 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "가임기(15~49세) 여성 한 명이 평생 낳을 것으로 예상되는 평균 출생아 수를 뜻하는 통계 지표는?",
          "options": [
            "합계출산율",
            "조출생률",
            "유아사망률"
          ],
          "answerIndex": 0,
          "explanation": "여성 1인당 평생 예상 출생아 수를 나타내는 핵심 인구 지표는 '합계출산율(TFR)'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "지방 도시에서 20~39세 가임 여성 인구가 65세 이상 노인 인구의 절반 미만으로 떨어져 인구 감소로 사라질 위기에 처한 상태를 나타내는 지수는?",
          "options": [
            "지방 소멸 위험 지수",
            "행복 지수",
            "물가 상승 지수"
          ],
          "answerIndex": 0,
          "explanation": "지방의 존립 위험도를 측정하는 인구 지표는 '지방 소멸 위험 지수'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'저출생과 초고령화로 지방 소멸 위기에 직면했어요'(We faced regional extinction crisis due to low birthrate and super-aging)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "저출생과 초고령화로 지방 소멸 위기에 직면했어요.",
            "저출생과 초고령화로 지방 소멸 위기에 직면했어요"
          ],
          "explanation": "저출생과 + 초고령화로 + 지방 소멸 + 위기에 + 직면했어요 = 저출생과 초고령화로 지방 소멸 위기에 직면했어요."
        }
      ]
    }
  },
  "ko-u31-l2": {
    "id": "ko-u31-l2",
    "subject": "korean",
    "unit": 31,
    "lessonNumber": 2,
    "title": "4대 사회보험과 대한민국 사회안전망 체계 (Four Social Insurances & Safety Net)",
    "level": "C2",
    "objective": "국민건강보험, 국민연금, 고용보험, 산업재해보상보험 및 국민기초생활보장제도의 구조와 복지 쟁점을 마스터한다.",
    "presentation": {
      "explanation": "대한민국 국민의 생애 주기별 사회적 위험을 분담하고 기본적 생계를 보장하는 4대 사회보험과 사회안전망(Social Safety Net) 체계입니다.\n\n1. 4대 사회보험(Four Major Social Insurances):\n- **국민건강보험(National Health Insurance)**: 질병과 부상에 대한 예방·진단·치료 및 재활 급여를 제공하는 보편적 의료보장 제도\n- **국민연금(National Pension)**: 노령, 장애, 사망 시 연금을 지급하여 생활 안정을 도모 (보험료율 인상, 소득대체율 조정 및 기금 고갈 방지 개혁이 최대 현안)\n- **고용보험(Employment Insurance)**: 실직 시 구직급여(실업급여)를 지급하고 재취업 직업훈련 및 육아휴직급여를 지원\n- **산업재해보상보험(산재보험 / Workers' Compensation)**: 업무상 재해, 질병 또는 사망 시 치료비와 보상금을 지급 (중대재해처벌법 연계)\n\n2. 공공부조 및 사회보장:\n- **국민기초생활보장제도(National Basic Living Security)**: 기준 중위소득에 따라 생계급여, 의료급여, 주거급여, 교육급여를 맞춤형으로 지급하여 극빈층 보호",
      "examples": [
        {
          "target": "정부는 저출생·고령화에 따른 국민연금 기금 조기 고갈 우려를 불식시키기 위해 연금 개혁안을 국회에 제출했습니다.",
          "reading": "Jeongbu-neun jeochulsaeng-goryeonghwa-e ttareun gungmin-yeon-geum gigeum jogi gogal uryeo-reul bulsiksigigi wihae yeon-geum gaehyeokan-eul gukhoe-e jechulhaetseumnida.",
          "translation": "The government submitted a pension reform bill ('연금 개혁안을 국회에 제출했습니다') to the National Assembly to dispel concerns over early exhaustion of the National Pension Fund due to low birthrate and aging."
        },
        {
          "target": "근로자가 업무 중 불의의 사고로 부상을 입었을 경우 산업재해보상보험 처리를 통해 치료비와 휴업급여를 전액 지원받을 수 있습니다.",
          "reading": "Geunroja-ga eommu jung buri-ui sago-ro busang-eul ibeosseul gyeong-u saneopjaehaebosangboheom cheori-reul tonghae chiryobi-wa hyueopgeub-yeo-reul jeonaek jiwonbadeul su itseumnida.",
          "translation": "If a worker suffers injury from an unforeseen accident during duty, they can receive full support for medical expenses and temporary disability benefits through Industrial Accident Compensation Insurance ('산업재해보상보험 처리를 통해')."
        },
        {
          "target": "복지 사각지대에 놓인 취약계층을 발굴하여 국민기초생활보장 생계급여를 긴급 지원함으로써 사회안전망을 촘촘히 보강하였습니다.",
          "reading": "Bokji sagakjidae-e noin chwiyak-gyecheung-eul balgulhayeo gungmin-gichosaenghwalbojang saeng-gye-geub-yeo-reul gin-geup jiwonham-euroseo sahoe-anjeonmang-eul chomchomhi boganghayeotseumnida.",
          "translation": "By discovering vulnerable brackets situated in welfare blind spots and urgently providing National Basic Living livelihood benefits, we tightly reinforced the social safety net ('사회안전망을 촘촘히 보강하였습니다')."
        },
        {
          "target": "고용보험의 육아휴직급여 상한액이 대폭 인상되어 맞벌이 부부의 양육 부담이 한결 완화되었습니다.",
          "reading": "Goyongboheom-ui yuga-hyujikgeub-yeo sanghan-aeg-i daepok insangdoe-eo matbeori bubu-ui yang-yuk budam-i han-gyeol wanhwadoe-eotseumnida.",
          "translation": "The upper limit of parental leave benefits under employment insurance was significantly raised, considerably relieving the parenting burden of dual-income couples."
        }
      ],
      "mnemonics": [
        "4대 보험: 건강보험, 국민연금, 고용보험, 산재보험! 기초생활보장으로 사회안전망 완성!"
      ],
      "culturalNotes": [
        "한국의 '국민연금 개혁'은 보험료율(현행 9%) 인상 폭과 소득대체율(은퇴 전 평균 소득 대비 연금 수령액 비율)을 둘러싸고 미래 청년 세대와 기성세대 간의 사회적 합의가 핵심 쟁점입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "대한민국의 4대 사회보험에 포함되지 않는 것은?",
          "options": [
            "자동차 종합보험",
            "국민건강보험",
            "고용보험"
          ],
          "answerIndex": 0,
          "explanation": "4대 사회보험은 국민건강보험, 국민연금, 고용보험, 산재보험이며 자동차보험은 사보험입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "근로자가 실직했을 때 재취업 활동 기간 동안 생활 안정을 돕기 위해 지급되는 고용보험 급여는?",
          "options": [
            "구직급여",
            "퇴직금",
            "보너스"
          ],
          "answerIndex": 0,
          "explanation": "실직자의 재취업을 지원하는 고용보험 핵심 급여는 '구직급여(실업급여)'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "생활이 어려운 저소득 취약계층에게 국가가 최저 생활을 보장하고 자립을 지원하는 제도는?",
          "options": [
            "국민기초생활보장제도",
            "상속세 공제제도",
            "주식양도소득세 제도"
          ],
          "answerIndex": 0,
          "explanation": "극빈층의 인간다운 생활을 보장하는 공공부조 제도는 '국민기초생활보장제도'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'국민연금 개혁과 사회안전망 강화를 논의했어요'(We discussed pension reform and strengthening the social safety net)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "국민연금 개혁과 사회안전망 강화를 논의했어요.",
            "국민연금 개혁과 사회안전망 강화를 논의했어요"
          ],
          "explanation": "국민연금 개혁과 + 사회안전망 + 강화를 + 논의했어요 = 국민연금 개혁과 사회안전망 강화를 논의했어요."
        }
      ]
    }
  },
  "ko-u31-l3": {
    "id": "ko-u31-l3",
    "subject": "korean",
    "unit": 31,
    "lessonNumber": 3,
    "title": "노동 시장 구조 개혁과 세대 갈등 (Labor Market Reform & Generational Issues)",
    "level": "C2",
    "objective": "정년 연장 vs 청년 일자리, 비정규직의 정규직화, 포괄임금제 폐지, 주 52시간 유연근무제 등 노동·세대 갈등 쟁점을 논증한다.",
    "presentation": {
      "explanation": "초고령화 시대 한국 사회의 핵심 노동 정책 과제와 세대 간 이해관계 갈등 쟁점입니다.\n\n1. 노동 시장의 주요 개혁 쟁점:\n- **법정 정년 연장(Retirement Age Extension, 60세 -> 65세)**: 고령자 계속 고용을 통한 소득 공백 메우기 vs 대기업·공공기관의 청년 신규 채용 위축 우려\n- **이중 구조 개선(Dual Labor Market Structure)**: 대기업·정규직 vs 중소기업·비정규직 간의 임금 및 복지 격차 해소, '동일노동 동일임금' 원칙과 직무급제(Job-based Pay System) 도입 논쟁\n- **근로시간 개편**: 주 52시간 근로제의 엄격 적용 vs 업종별 유연근무제(탄력근로제 / 선택근로제) 확대 요구\n- **포괄임금제(Blanket Wage System) 개선**: 실제 초과 근무 시간과 무관하게 고정 수당을 지급하여 '공짜 야근'을 유발한다는 비판에 대한 규제",
      "examples": [
        {
          "target": "정년 65세 연장은 고령층의 노후 빈곤을 완화하는 순기능이 있으나, 자칫 청년층의 진입 장벽을 높일 수 있어 세대 간 상생 방안이 필요합니다.",
          "reading": "Jeongnyeon yuksibo-se yeonjang-eun goryeongcheung-ui nohu bingon-eul wanhwahaneun sungineung-i isseuna, jachit cheongnyeoncheung-ui jin-ip jangbyeok-eul nopil su isseo sedae gan sangsaeng bang-an-i piryohamnida.",
          "translation": "While extending retirement age to 65 has a net function of alleviating senior poverty, it might raise barriers to entry for youth, necessitating generational coexistence measures ('세대 간 상생 방안이 필요합니다')."
        },
        {
          "target": "노동 시장의 이중 구조를 타파하고 청년과 비정규직의 권익을 보호하기 위해 연공서열 중심 호봉제를 직무·성과급제로 개편해야 합니다.",
          "reading": "Nodong sijang-ui ijung gujo-reul tapahago cheongnyeon-gwa bijeonggyujik-ui gwon-ig-eul bohohagi wihae yeongongseoyeol jungsim hobongje-reul jikmu·seong-gwageupje-ro gaepyeonhaeya hamnida.",
          "translation": "To break the dual structure of the labor market and protect rights of youth and non-regular workers, seniority-based pay systems must be reformed into job/performance-based pay systems ('직무·성과급제로 개편해야')."
        },
        {
          "target": "공짜 야근을 근절하고 정당한 노동의 대가를 보장하기 위해 포괄임금제 오남용에 대한 강력한 근로감독이 시행되고 있습니다.",
          "reading": "Gongjja yageun-eul geunjeolhago jeongdanghan nodong-ui daega-reul bojanghagi wihae pogwal-imgeumje onamyong-e daehan gangryeokhan geunrogamdok-i sihaengdoego itseumnida.",
          "translation": "To eradicate unpaid overtime and guarantee fair compensation for labor, strict labor inspections against abuse of the blanket wage system are being implemented."
        },
        {
          "target": "급변하는 산업 환경에 발맞추어 주 52시간제의 기본 틀을 유지하되 업종별 유연성을 제고하는 균형 잡힌 정책이 요구됩니다.",
          "reading": "Geupbyeonhaneun saneop hwangyeong-e balmatchwo ju osip-i-siganje-ui gibon teul-eul yujihadae eopjongbyeol yuyeonseong-eul jego-haneun gyunhyeong jab-in jeongchaek-i yogudoemnida.",
          "translation": "In step with the rapidly changing industrial environment, a balanced policy enhancing flexibility by industry while maintaining the basic framework of the 52-hour workweek is demanded."
        }
      ],
      "mnemonics": [
        "정년 연장과 청년 고용 상생, 호봉제에서 직무급제로, 공짜 야근 없는 포괄임금제 개편!"
      ],
      "culturalNotes": [
        "한국의 대기업들은 과거 근속연수에 따라 임금이 자동 상승하는 '호봉제'에서 개인의 직무 난이도와 성과에 따라 차등 보상하는 '직무성과급제'로 급속히 전환하고 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "실제 초과 근무 시간과 상관없이 연장·야간 근로 수당을 급여에 미리 포함하여 지급하는 방식으로 '공짜 야근' 논란을 빚은 임금 제도는?",
          "options": [
            "포괄임금제",
            "시급제",
            "성과배분제"
          ],
          "answerIndex": 0,
          "explanation": "초과수당을 정액으로 묶어 고정 지급하는 제도를 '포괄임금제'라고 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "근속연수에 따라 임금이 자동으로 올라가는 연공서열 중심의 급여 체계를 뜻하는 한국어 용어는?",
          "options": [
            "호봉제",
            "직무급제",
            "스톡옵션"
          ],
          "answerIndex": 0,
          "explanation": "근속 연수와 호봉에 따라 급여가 오르는 제도는 '호봉제'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "고령화에 따라 근로자의 법정 퇴직 나이를 60세에서 65세 등으로 늦추는 노동 정책을 뜻하는 용어는?",
          "options": [
            "정년 연장",
            "조기 은퇴",
            "명예퇴직"
          ],
          "answerIndex": 0,
          "explanation": "법정 퇴직 나이를 상향하는 제도는 '정년 연장'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'정년 연장과 청년 일자리의 상생 방안을 모색했어요'(We sought coexistence measures between retirement extension and youth jobs)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "정년 연장과 청년 일자리의 상생 방안을 모색했어요.",
            "정년 연장과 청년 일자리의 상생 방안을 모색했어요"
          ],
          "explanation": "정년 연장과 + 청년 일자리의 + 상생 방안을 + 모색했어요 = 정년 연장과 청년 일자리의 상생 방안을 모색했어요."
        }
      ]
    }
  },
  "ko-u31-l4": {
    "id": "ko-u31-l4",
    "subject": "korean",
    "unit": 31,
    "lessonNumber": 4,
    "title": "정책 토론 및 시사 평론 고급 담화 표지와 수사 (Policy Discourse Markers & Rhetoric)",
    "level": "C2",
    "objective": "-에 직면한 현시점에서, -(으)로 귀결될 공산이 크다, -의 당위성을 역설하다, 사회적 합의 도출 등 C2 시사 담화 표지를 자유자재로 구사한다.",
    "presentation": {
      "explanation": "TV 시사 토론 프로그램, 신문 사설(Editorial), 국회 공청회에서 정책 대안을 제시하고 상대를 설득하는 최상급 C2 담화 표지입니다.\n\n1. 문제 제기 및 상황 진단 표현:\n- **~에 직면한(봉착한) 현시점에서**: 위기 상황의 시급성을 부각할 때 (At this present juncture facing...)\n- **골든타임(Golden Time)을 놓쳐서는 안 된다 / 실기(失期)해서는 안 된다**: 정책 추진의 결정적 시한을 강조할 때\n\n2. 인과 추론 및 경고 논증 표지:\n- **~로 귀결될 공산이 크다 / 귀결될 위험이 농후하다**: 부정적인 결과로 이어질 확률이 매우 높음을 경고할 때 (There is a high probability of culminating in...)\n- **~라는 비판을 면하기 어렵다 (Cannot avoid criticism)**: 상대 주장의 논리적 허점을 객관적으로 비판할 때\n\n3. 정책 결단 및 제언 수사:\n- **~의 당위성을 역설하다 / 주창하다 (Emphasize the imperativeness of)**: 정책 도입의 정당성과 필연성을 강력히 주장할 때\n- **사회적 대타협 / 공론화 과정이 선행되어야 한다**: 이해당사자 간의 민주적 합의 절차를 촉구할 때",
      "examples": [
        {
          "target": "인구 구조의 격변에 직면한 현시점에서, 구조 개혁의 골든타임을 실기한다면 국가 경쟁력의 영구적 추락으로 귀결될 공산이 큽니다.",
          "reading": "In-gu gujo-ui gyeokbyeon-e jikmyeonhan hyeonsijeom-eseo, gujo gaehyeok-ui goldeuntaim-eul silgihandamyeon gukga gyeongjaengryeok-ui yeong-gujeok churak-euro gwigyeoldoel gongsan-i keumnida.",
          "translation": "At this present juncture facing drastic changes in demographic structure ('직면한 현시점에서'), if we miss the golden time for structural reform, there is a high probability of culminating in ('귀결될 공산이 큽니다') permanent decline of national competitiveness."
        },
        {
          "target": "전문가들은 연금 재정의 지속 가능성을 담보하기 위해 사회적 대타협을 통한 모수 개혁의 당위성을 강력히 역설하고 있습니다.",
          "reading": "Jeonmungadeul-eun yeon-geum jaejeong-ui jisok ganeungseong-eul dambohagi wihae sahoejeok daetahyeop-eul tonghan mosu gaehyeok-ui dangwiseong-eul gangryeokhi yeokseolhago itseumnida.",
          "translation": "Experts are strongly emphasizing the imperativeness of ('당위성을 강력히 역설하고 있습니다') parametric reform through grand social compromise to guarantee the sustainability of pension finances."
        },
        {
          "target": "단기적인 땜질식 처방만으로는 근본적인 청년 일자리 문제를 해결할 수 없다는 비판을 면하기 어렵습니다.",
          "reading": "Dan-gijeogin ttaemjilsik cheobang-man-euro-neun geunbonjeogin cheongnyeon iljari munje-reul haegyeolhal su eopdaneun bipan-eul myeonhagi eoryeopseumnida.",
          "translation": "It is difficult to avoid criticism ('비판을 면하기 어렵습니다') that fundamental youth job problems cannot be solved with short-term makeshift remedies alone."
        },
        {
          "target": "이해관계가 첨예하게 대립하는 사안일수록 숙의 민주주의에 기반한 공론화 과정이 반드시 선행되어야 합니다.",
          "reading": "Ihae-gwan-gye-ga cheom-yehage daeriphaneun sa-an-ilsurok sug-ui minjuju-ui-e gibanhan gongronhwa jeolcha-ga bandeusi seonhaengdoe-eoya hamnida.",
          "translation": "The more an issue involves sharply conflicting interests, the more a public deliberation process based on deliberative democracy must precede."
        }
      ],
      "mnemonics": [
        "직면한 현시점, 골든타임 사수, ~로 귀결될 공산, 당위성 역설, 사회적 대타협 선행!"
      ],
      "culturalNotes": [
        "한국의 공론화 위원회(Deliberation Committee)는 대형 국책 사업이나 첨예한 사회적 쟁점(원전, 대입 제도, 연금 개혁 등)에서 일반 시민 패널의 숙의 토론을 통해 사회적 합의를 도출하는 대표적 숙의 민주주의 모델입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "시사 논증에서 어떤 사태가 부정적인 최종 결과로 끝날 확률이 매우 높음을 경고할 때 쓰는 고급 관용 문형은?",
          "options": [
            "~로 귀결될 공산이 크다",
            "~로 끝나면 내가 밥을 사겠다",
            "~로 될지 안 될지 아무도 모른다"
          ],
          "answerIndex": 0,
          "explanation": "'~로 귀결될 공산이 크다'는 결과의 인과적 귀결 가능성을 격조 높게 예측하는 표현입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "정책의 마땅한 이치나 반드시 실행해야 하는 필요성을 강력하게 주장하며 강조할 때 쓰는 표현은?",
          "options": [
            "당위성을 역설하다",
            "그냥 해보자고 건의하다",
            "남의 말을 흉내 내다"
          ],
          "answerIndex": 0,
          "explanation": "마땅히 해야 할 도리나 필요성을 힘주어 말할 때 '당위성을 역설하다'를 사용합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "국가적 위기 상황에서 결단의 시기를 놓치지 말아야 함을 강조하는 시사 표현은?",
          "options": [
            "개혁의 골든타임을 실기해서는 안 된다. (골든타임을 실기해서는 안 된다는 정책 추진의 결정적 시기를 강조하는 표현입니다.)",
            "시간이 많으니 천천히 나중에 생각하자.",
            "어차피 안 될 일이니 포기하는 게 낫다."
          ],
          "answerIndex": 0,
          "explanation": "'골든타임을 실기해서는 안 된다'는 정책 추진의 결정적 시기를 강조하는 표현입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'사회적 대타협의 당위성을 강력히 역설했어요'(They strongly emphasized the imperativeness of grand social compromise)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "사회적 대타협의 당위성을 강력히 역설했어요.",
            "사회적 대타협의 당위성을 강력히 역설했어요"
          ],
          "explanation": "사회적 대타협의 + 당위성을 + 강력히 + 역설했어요 = 사회적 대타협의 당위성을 강력히 역설했어요."
        }
      ]
    }
  },
  "ko-u31-l5": {
    "id": "ko-u31-l5",
    "subject": "korean",
    "unit": 31,
    "lessonNumber": 5,
    "title": "대통령 직속 저출산고령사회위원회 및 사회적 대타협 실전 종합 담화",
    "level": "C2",
    "objective": "저출생 극복, 연금 개혁, 노동 시장 개편 및 세대 간 사회적 대타협을 총망라한 최고급 C2 정책 토론 담화를 완성한다.",
    "presentation": {
      "explanation": "대통령 직속 위원회 및 노사정 사회적 대화 기구(경제사회노동위원회)에서 진행되는 대한민국 최고 수준의 정책 공론화 실전 담화 모델입니다.\n\n1. 사회적 대타협 국민 대토론회 실전 모델:\n- 사회자: 지금부터 인구 절벽 위기 극복과 세대 상생을 위한 노사정 대타협 대토론회를 시작하겠습니다. 정부 측 기조 발제를 청해 듣겠습니다.\n- 정부 대표(장관): **초고령사회 진입과 인구 절벽에 직면한 현시점에서** 연금 개혁과 노동 시장 유연화는 국가 생존의 필수 과제입니다. 개혁의 **골든타임을 실기한다면** 미래 세대의 감당할 수 없는 부담으로 **귀결될 공산이 큽니다**. 이에 정부는 세대 간 형평성을 고려한 사회적 연대 모델을 제안합니다.\n- 노동계 대표: 정년 연장과 청년 일자리 보장이 상호 충돌하지 않도록 직무급제 전환에 대한 단계적 도입과 비정규직 차별 철폐가 **선행되어야 함을 역설하는 바입니다**.\n- 경영계 대표: 기업의 지속 가능한 지불 능력을 고려하여 유연근무제 확대와 과도한 규제 혁파가 병행될 때 진정한 **사회적 대타협**이 완성될 수 있습니다.\n- 사회자: 각계의 고뇌와 혜안이 담긴 제언에 감사드리며, 상호 양보와 연대의 정신으로 합의안을 도출해 나가겠습니다.",
      "examples": [
        {
          "target": "노사정 대표들이 한자리에 모여 세대 간 상생과 국가 미래를 위한 역사적인 사회적 대타협 선언문을 채택하였습니다.",
          "reading": "Nosajeong daepyodeul-i hanjari-e moyeo sedae gan sangsaeng-gwa gukga mirae-reul wihan yeoksajeogin sahoejeok daetahyeop seoneonmun-eul chaetaekhayeotseumnida.",
          "translation": "Labor, management, and government representatives gathered in one place and adopted a historic grand social compromise declaration for intergenerational coexistence and national future."
        },
        {
          "target": "갈등을 넘어 연대와 포용으로 나아가는 성숙한 숙의 민주주의가 한국 사회의 새로운 희망을 제시하고 있습니다.",
          "reading": "Galdeung-eul neomeo yeondae-wa poyong-euro na-aganeun seongsukhan sug-ui minjuju-ui-ga hanguk sahoe-ui saeroun huimang-eul jesihago itseumnida.",
          "translation": "Mature deliberative democracy moving beyond conflict toward solidarity and inclusion is presenting new hope for Korean society."
        },
        {
          "target": "사회적 약자를 보듬는 든든한 사회안전망 구축이야말로 진정한 선진 복지 국가로 도약하는 지름길입니다.",
          "reading": "Sahoejeok yakja-reul bodeumneun deundeunhan sahoe-anjeonmang guchuk-iyamallo jinjeonghan seonjin bokji gukga-ro do-yakhaneun jireumgil-imnida.",
          "translation": "Building a solid social safety net embracing the socially vulnerable is indeed the shortcut to leaping into a truly advanced welfare state."
        },
        {
          "target": "미래 세대에게 희망찬 공동체를 물려주기 위해 오늘 우리 사회는 책임 있는 대결단을 내려야 합니다.",
          "reading": "Mirae sedae-ege huimangchan gongdongche-reul mulryeojugi wihae oneul uri sahoe-neun chaegim inneun daegyeoldan-eul naeryeoya hamnida.",
          "translation": "To hand down a hopeful community to future generations, our society today must make a responsible grand decision."
        }
      ],
      "mnemonics": [
        "노사정 대화: 갈등 극복, 미래 세대 연대, 상생의 사회적 대타협!"
      ],
      "culturalNotes": [
        "한국의 '노사정위원회(현 경제사회노동위원회)'는 노동계(노조), 경영계(사용자), 정부가 모여 노동 조건과 복지 정책을 협의하는 대통령 직속 사회적 대화 기구입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "노동자, 사용자(기업), 정부의 대표가 모여 노동 정책과 사회 복지 개혁안을 합의하는 3자 협의 기구 모델은?",
          "options": [
            "노사정 사회적 대타협",
            "일방적 행정명령",
            "무제한 필리버스터"
          ],
          "answerIndex": 0,
          "explanation": "노동계, 경영계, 정부가 3자 합의를 도출하는 기제를 '노사정 사회적 대타협'이라고 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "국가적 대토론회 기조 발제에서 사회적 위기 극복을 촉구할 때 가장 모범적인 C2 담화 종결 표현은?",
          "options": [
            "미래 세대를 위해 개혁의 골든타임을 놓치지 말고 사회적 대타협을 이루어야 합니다.",
            "서로 싸우다가 망하든 말든 상관하지 않겠습니다.",
            "복잡한 문제는 다음 대통령이 알아서 할 일입니다."
          ],
          "answerIndex": 0,
          "explanation": "미래 세대를 위한 책임 있는 개혁과 사회적 대타협을 촉구하는 표현이 가장 품격 있습니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 한국의 인구·복지·노동 정책 최고급 시사 담화로서 가장 완벽한 것은?",
          "options": [
            "인구 절벽에 직면한 현시점에서 사회적 대타협을 통해 연금 개혁과 상생의 노동 시장을 구축해야 합니다.",
            "인구가 줄어들면 학교를 다 없애고 아무것도 안 하면 됩니다.",
            "외국인들을 전부 쫓아내면 모든 문제가 해결됩니다."
          ],
          "answerIndex": 0,
          "explanation": "'인구 절벽에 직면한 현시점', '사회적 대타협', '연금 개혁과 상생의 노동 시장'은 완벽한 C2 시사 담화입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'골든타임을 놓치지 않고 사회적 대타협을 달성했어요'(We achieved grand social compromise without missing the golden time)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "골든타임을 놓치지 않고 사회적 대타협을 달성했어요.",
            "골든타임을 놓치지 않고 사회적 대타협을 달성했어요"
          ],
          "explanation": "골든타임을 + 놓치지 않고 + 사회적 대타협을 + 달성했어요 = 골든타임을 놓치지 않고 사회적 대타협을 달성했어요."
        }
      ]
    }
  },
  "ko-u32-l1": {
    "id": "ko-u32-l1",
    "subject": "korean",
    "unit": 32,
    "lessonNumber": 1,
    "title": "한국 근현대 소설의 리얼리즘과 분단 문학 (Realism & Division Literature)",
    "level": "C2",
    "objective": "식민지 지식인의 고뇌, 한국전쟁과 분단 트라우마, 산업화 시대의 소외, 토속적 해학 등 한국 근현대 소설의 정수를 분석한다.",
    "presentation": {
      "explanation": "20세기 격동의 한국 근현대사를 투영한 소설 문학의 주요 조류와 비평 담화입니다.\n\n1. 시대별 한국 소설의 지형도:\n- **식민지 지식인의 내면적 고뇌**: 일제강점기 자아 분열과 모더니즘 실험 (이상의 «날개»), 비참한 식민지 하층민의 삶과 반어적 비극 (현진건의 «운수 좋은 날»)\n- **한국전쟁과 분단 트라우마(Division Trauma)**: 이데올로기 대립 속 남과 북 사이 제3국을 선택한 지식인의 비극 (최인훈의 «광장»), 분단과 한국 현대사의 비극적 서사시 (조정래의 «태백산맥»)\n- **산업화와 소외된 도시 빈민**: 1970년대 고도성장기 철거민의 비극과 계급 불평등을 동화적 환상과 리얼리즘으로 포착 (조세희의 «난장이가 쏘아올린 작은 공»)\n- **토속적 해학과 샤머니즘적 운명론**: 농촌의 순박한 사랑과 해학미 (김유정의 «동백꽃», «봄·봄»), 전통 무속과 외래 기독교의 문명 충돌 (김동리의 «무녀도»)",
      "examples": [
        {
          "target": "최인훈의 소설 «광장»은 이데올로기의 광풍 속에서 진정한 자유를 갈망하던 분단 시대 지식인의 실존적 번민을 날카롭게 해부하였습니다.",
          "reading": "Choe In-hun-ui soseol «Gwangjang»-eun ide-ollogi-ui gwangpung sog-eseo jinjeonghan jayu-reul galmanghadeon bundan sedae jisik-in-ui siljonjeok beonmin-eul nalkaropge haebuhayeotseumnida.",
          "translation": "Choe In-hun's novel 'The Square' sharply dissected the existential anguish ('실존적 번민을 날카롭게 해부하였습니다') of a division-era intellectual yearning for true freedom amidst the fierce gale of ideology."
        },
        {
          "target": "조세희 작가는 «난장이가 쏘아올린 작은 공»에서 압축적 고도성장의 그늘에 가려진 도시 빈민의 처절한 현실을 시적 문체로 형상화했습니다.",
          "reading": "Jo Se-hui jakga-neun «Nanjang-i-ga Ssoa-ollin Jageun Gong»-eseo apchukjeok godo-seongjang-ui geuneul-e garyeojin dosi binmin-ui cheojeolhan hyeonsil-eul sijeok munche-ro hyeongsanghwahaetseumnida.",
          "translation": "Writer Jo Se-hui concretized the desperate reality of urban poor people overshadowed by compressed rapid economic growth in poetic style in 'A Dwarf Launches a Little Ball' ('처절한 현실을 시적 문체로 형상화했습니다')."
        },
        {
          "target": "현진건의 «운수 좋은 날»은 아내의 죽음이라는 비극과 대조되는 반어적 플롯을 통해 일제강점기 민중의 참상을 극대화하여 보여줍니다.",
          "reading": "Hyeon Jin-geon-ui «Unsu Joeun Nal»-eun anae-ui jugeum-iraneun bigeuk-gwa daejodoeneun ban-eojeok peullot-eul tonghae iljegangjeomgi minjung-ui chamsang-eul geukdaehwahayeo boyeojumnida.",
          "translation": "Hyeon Jin-geon's 'A Lucky Day' maximizes the tragedy of the common people during the Japanese colonial rule through an ironic plot contrasting with the tragedy of the wife's death."
        },
        {
          "target": "김유정 문학의 백미는 가난과 계급적 억압 속에서도 웃음을 잃지 않는 민중 특유의 토속적 해학에 있습니다.",
          "reading": "Kim Yu-jeong munhak-ui baengmi-neun ganan-gwa gyegeupjeok eog-ap sog-eseodo useum-eul ilchi anneun minjung teuk-yu-ui tosokjeok haehaeg-e itseumnida.",
          "translation": "The highlight of Kim Yu-jeong's literature lies in the indigenous humor unique to the masses who do not lose laughter even amidst poverty and class oppression."
        }
      ],
      "mnemonics": [
        "이상의 자아 분열, 최인훈의 분단 광장, 조세희의 난장이, 김유정의 해학!"
      ],
      "culturalNotes": [
        "한국의 분단 문학은 단순한 반공 이데올로기를 넘어, 전쟁이 남긴 이산가족의 한(恨)과 인간성 회복을 다루는 한국 특유의 세계 문학적 유산으로 평가받습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "한국전쟁 직후 이데올로기 대립 속에서 남북한 모두의 허상을 비판하고 중립국을 택한 주인공 이명준의 비극을 그린 최인훈의 대표작은?",
          "options": [
            "광장",
            "토지",
            "태백산맥"
          ],
          "answerIndex": 0,
          "explanation": "이데올로기 갈등과 실존적 고뇌를 다룬 분단 문학의 걸작은 최인훈의 «광장»입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "1970년대 한국의 급격한 산업화와 도시 재개발 이면에 숨겨진 철거민 가족의 비극을 연작 형태로 다룬 조세희의 소설은?",
          "options": [
            "난장이가 쏘아올린 작은 공 (도시 빈민과 산업화 소외를 서정적이고 강렬한 문체로 형상화한 작품은 «난장이가 쏘아올린 작은 공»입니다.)",
            "동백꽃",
            "운수 좋은 날"
          ],
          "answerIndex": 0,
          "explanation": "도시 빈민과 산업화 소외를 서정적이고 강렬한 문체로 형상화한 작품은 «난장이가 쏘아올린 작은 공»입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "일제강점기 인력거꾼 김 첨지의 하루를 통해 결말의 비극을 극적으로 증폭시키는 문학적 기법은?",
          "options": [
            "반어법",
            "직유법",
            "의성어 나열"
          ],
          "answerIndex": 0,
          "explanation": "«운수 좋은 날»이라는 제목과 결말의 참담한 비극이 이루는 대비는 '반어법(Irony)'의 정수입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'분단 트라우마와 시대적 비극을 소설로 형상화했어요'(They concretized division trauma and historical tragedy into novels)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "분단 트라우마와 시대적 비극을 소설로 형상화했어요.",
            "분단 트라우마와 시대적 비극을 소설로 형상화했어요"
          ],
          "explanation": "분단 트라우마와 + 시대적 비극을 + 소설로 + 형상화했어요 = 분단 트라우마와 시대적 비극을 소설로 형상화했어요."
        }
      ]
    }
  },
  "ko-u32-l2": {
    "id": "ko-u32-l2",
    "subject": "korean",
    "unit": 32,
    "lessonNumber": 2,
    "title": "한국 현대 시문학의 서정과 저항 정신 (Korean Modern Poetics & Resistance)",
    "level": "C2",
    "objective": "윤동주의 부끄러움의 미학, 이육사의 초인의지, 김소월의 민요조 율격, 백석의 향토적 시어, 정지용의 이미지즘을 마스터한다.",
    "presentation": {
      "explanation": "한국 현대 시문학(Modern Poetics)을 수놓은 거장들의 시적 화자와 미학적 세계관입니다.\n\n1. 저항과 자아 성찰의 시학:\n- **윤동주의 부끄러움의 미학(Aesthetics of Shame)**: «서시», «자화상», «별 헤는 밤»에서 어두운 식민지 현실 속 순수한 도덕적 양심과 끊임없는 자아 성찰을 노래\n- **이육사의 절정과 초인의지(Will of Superhuman)**: «절정», «광야», «청포도»에서 가혹한 일제의 탄압에 맞선 결연한 저항 의지와 조국 광복을 향한 웅혼한 남성적 어조\n\n2. 민족 정서와 모더니즘 미학:\n- **김소월의 민요조 율격(7·5조 3음보)**: «진달래꽃», «산유화»에서 이별의 슬픔(이별의 정한)을 전통 민요 가락과 여성적 어조로 승화\n- **백석의 향토적 서정과 토속 방언**: «여승», «남신의주 유동 박시봉방»에서 평안도 토속 방언과 향토적 음식·풍물을 통해 민족 공동체의 따스한 원형을 복원\n- **정지용의 감각적 이미지즘(Imagism)**: «향수», «유리창»에서 절제된 언어와 선명한 시각적·감각적 이미지로 현대시의 미학적 지평을 개척",
      "examples": [
        {
          "target": "윤동주 시인은 '죽는 날까지 하늘을 우러러 한 점 부끄럼이 없기를' 갈망하며 숭고한 도덕적 순결성을 시로써 구현하였습니다.",
          "reading": "Yun Dong-ju siin-eun 'jungneun nal-kkaji haneul-eul ureoreo han jeom bukkeurom-i eopgireul' galmanghamyeo sunggohan dodeokjeok sungyeolseong-eul si-rosseo guhyeonhayeotseumnida.",
          "translation": "Poet Yun Dong-ju embodied sublime moral purity through poetry ('숭고한 도덕적 순결성을 시로써 구현하였습니다'), longing that 'until the day I die, looking up at the sky, there may not be a single speck of shame'."
        },
        {
          "target": "이육사의 시 «광야»는 암흑기 식민지 현실 속에서도 백마 타고 오는 초인을 기다리는 불굴의 역사주의적 저항 의지를 웅장하게 노래합니다.",
          "reading": "I Yuk-sa-ui si «Gwang-ya»-neun amheukgi sikminji hyeonsil sog-eseodo baengma tago oneun choin-eul gidarineun bulgul-ui yeoksaju-uijeok jeohang uiji-reul ungjanghage noraehamnida.",
          "translation": "Yi Yuk-sa's poem 'The Wilderness' magnificently sings of an indomitable historicist resistance will ('불굴의 역사주의적 저항 의지를 웅장하게 노래합니다') awaiting a superhuman arriving on a white horse even amidst dark colonial reality."
        },
        {
          "target": "김소월은 7·5조 3음보의 전통 민요 율격을 현대 자유시 속에 성공적으로 용해시켜 민족 고유의 한의 정서를 노래했습니다.",
          "reading": "Kim So-wol-eun chil-o-jo sam-eumbo-ui jeontong min-yo yulgyeok-eul hyeondae jayusi sog-e seonggongjeog-euro yonghaesikyeo minjok goyu-ui han-ui jeongseo-reul noraehaetseumnida.",
          "translation": "Kim So-wol successfully melted the traditional folk song rhythm of 7-5 syllables in 3 poetic feet into modern free verse, singing the nation's unique emotion of Han ('한의 정서를 노래했습니다')."
        },
        {
          "target": "백석 시인은 구수한 평안도 방언과 향토적 사물들을 유려하게 직조하여 잃어버린 고향 공동체의 따스함을 되살려냈습니다.",
          "reading": "Baek Seok siin-eun gusuhan Pyeong-ando bang-eon-gwa hyangtojeok samuldeul-eul yuryeohage jikjohayeo ilheobeorin gohyang gongdongche-ui ttaseuham-eul doesallyeonaetseumnida.",
          "translation": "Poet Baek Seok fluently wove rich Pyongan dialect and local artifacts, reviving the warmth of the lost hometown community."
        }
      ],
      "mnemonics": [
        "윤동주의 부끄러움, 이육사의 절정 초인, 김소월의 7·5조 진달래, 백석의 평안도 방언!"
      ],
      "culturalNotes": [
        "한국의 모든 교과서와 수능 언어 영역에서 윤동주와 이육사는 일제강점기 암흑기를 양심과 지조로 지켜낸 대표적인 '민족 저항 시인'의 쌍벽으로 다루어집니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "식민지 치하에서 '하늘과 바람과 별과 시'를 노래하며 치열한 자기반성과 순결한 양심을 표현한 시인은?",
          "options": [
            "윤동주",
            "김유정",
            "현진건"
          ],
          "answerIndex": 0,
          "explanation": "부끄러움의 미학과 자아 성찰을 대표하는 저항 시인은 윤동주입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "한국 전통 민요의 가락인 7·5조 3음보 율격을 바탕으로 '진달래꽃'과 '산유화'를 지은 대표 서정 시인은?",
          "options": [
            "김소월",
            "이상",
            "조세희"
          ],
          "answerIndex": 0,
          "explanation": "전통 민요 율격과 한(恨)의 정서를 노래한 시인은 김소월입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'매운 계절의 채찍에 갈겨 마침내 북방으로 휩쓸려 오다'로 시작하며 극한의 시련 속 초인적 저항 의지를 노래한 이육사의 시는?",
          "options": [
            "절정",
            "서시",
            "향수"
          ],
          "answerIndex": 0,
          "explanation": "가혹한 일제 탄압에 맞선 절체절명의 저항 의지를 노래한 시는 이육사의 «절정»입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'저항 정신과 서정적 율격을 시로 구현했어요'(They embodied resistance spirit and lyrical rhythm in poetry)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "저항 정신과 서정적 율격을 시로 구현했어요.",
            "저항 정신과 서정적 율격을 시로 구현했어요"
          ],
          "explanation": "저항 정신과 + 서정적 율격을 + 시로 + 구현했어요 = 저항 정신과 서정적 율격을 시로 구현했어요."
        }
      ]
    }
  },
  "ko-u32-l3": {
    "id": "ko-u32-l3",
    "subject": "korean",
    "unit": 32,
    "lessonNumber": 3,
    "title": "문학 및 예술 비평 전문 분석 어휘와 수사 (Literary & Arts Criticism)",
    "level": "C2",
    "objective": "미학적 거리두기, 다층적 플롯, 알레고리와 은유의 층위, 비극미와 카타르시스 등 최고급 문학 평론 어휘를 구사한다.",
    "presentation": {
      "explanation": "한국의 주요 문예지(«창작과비평», «문학동네», «현대문학») 및 학술 비평에서 사용되는 전문 문학·예술 비평 이론 어휘입니다.\n\n1. 서사 구조 및 미학적 장치 비평 어휘:\n- **미학적 거리두기(Aesthetic Distance)**: 독자나 관객이 작품 속 인물에 과도하게 감정 이입하지 않고 비판적 성찰을 유지하게 만드는 서사적 기법\n- **서사의 다층적 플롯(Multilayered Plot)과 복선(Foreshadowing)**: 표면적 사건 아래 심층적인 심리적·사회적 갈등이 얽혀 있는 구조\n- **알레고리(Allegory)와 은유(Metaphor)의 층위**: 작품 속 특정 사물이나 인물이 역사적 사건이나 보편적 인간 조건을 상징하는 다중 의미 체계\n\n2. 미적 범주 및 효과:\n- **비극미(Tragic Beauty)와 카타르시스(Catharsis)**: 고난과 파멸 속에서도 꺾이지 않는 인간 존엄성을 통해 관객의 감정을 정화\n- **골계미(Comical Beauty)와 풍자·해학**: 웃음을 통해 부조리한 현실을 폭로하고 극복하는 미적 원리\n- **비평 전용 서술 어미**: '~로 승화시키다', '~을 유려하게 형상화하다', '~의 지평을 확장하다'",
      "examples": [
        {
          "target": "작가는 일상의 미시적인 에피소드 뒤에 현대 자본주의의 소외 구조를 은폐하는 알레고리의 중층적 층위를 치밀하게 구축하였습니다.",
          "reading": "Jakga-neun ilsang-ui misijeogin episodeu dwi-e hyeondae jabonju-ui-ui so-oe gujo-reul eunpyehaneun allegori-ui jungcheungjeok cheungwi-reul chimilhage guchukhayeotseumnida.",
          "translation": "Behind everyday micro-episodes, the author elaborately constructed a multilayered stratum of allegory ('알레고리의 중층적 층위를 치밀하게 구축하였습니다') concealing the alienation structure of modern capitalism."
        },
        {
          "target": "비극적 결말을 통해 주인공의 좌절된 욕망은 보편적 인간 실존의 비극미로 승화되며 독자에게 깊은 카타르시스를 선사합니다.",
          "reading": "Bigeukjeok gyeolmal-eul tonghae juin-gong-ui jwajeoldoen yokmang-eun bobyeonjeok in-gan siljon-ui bigeukmi-ro seunghwadoemyeo dokja-ege gipeun katareusiseu-reul seonsahamnida.",
          "translation": "Through the tragic ending, the protagonist's frustrated desire is sublimated into the tragic beauty ('비극미로 승화되며') of universal human existence, presenting deep catharsis to readers."
        },
        {
          "target": "감상적 감정 과잉을 철저히 배제하고 미학적 거리두기를 유지함으로써 작품의 냉철한 리얼리즘을 한층 강화하였습니다.",
          "reading": "Gamsangjeok gamjeong gwa-ing-eul cheoljeohi baejehhago mihakjeok georidugi-reul yujiham-euroseo jakpum-ui naengcheolhan rieolrijeum-eul hancheung ganghwahayeotseumnida.",
          "translation": "By thoroughly excluding sentimental emotional excess and maintaining aesthetic distance ('미학적 거리두기를 유지함으로써'), the author further reinforced the work's cold realism."
        },
        {
          "target": "전통적인 선형적 시간성을 해체하고 다층적 플롯을 교차 배치함으로써 현대인의 파편화된 내면의식을 탁월하게 형상화했습니다.",
          "reading": "Jeontongjeogin seonhyeongjeok siganseong-eul haechehago dacheungjeok peullot-eul gyocha baechiham-euroseo hyeondaein-ui papyeonhwadoen naemyeon-uisig-eul tagwolhage hyeongsanghwahaetseumnida.",
          "translation": "By deconstructing traditional linear temporality and intersecting multilayered plots, it superbly concretized modern humans' fragmented inner consciousness."
        }
      ],
      "mnemonics": [
        "알레고리의 층위, 미학적 거리두기, 다층적 플롯, 비극미와 카타르시스로 승화!"
      ],
      "culturalNotes": [
        "한국의 문학 비평은 역사적 현실과 사회적 실천성을 중시하는 '리얼리즘 비평'과 언어의 형식적 아름다움과 내면을 탐구하는 '미학주의/모더니즘 비평'이 상호 견제하며 발전해 왔습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "문학이나 연극에서 관객이나 독자가 인물에게 너무 빠져들지 않고 이성적이고 비판적인 시각을 유지하도록 거리를 두는 미학 원리는?",
          "options": [
            "미학적 거리두기",
            "무조건적 몰입",
            "감정 폭발"
          ],
          "answerIndex": 0,
          "explanation": "작품과 수용자 사이에 객관적 비판 거리를 확보하는 기법은 '미학적 거리두기'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "비극 작품을 보며 느끼는 연민과 공포를 통해 마음에 억압된 감정을 배출하고 정신적 정화를 얻는 효과는?",
          "options": [
            "카타르시스",
            "파토스",
            "아노미"
          ],
          "answerIndex": 0,
          "explanation": "비극적 체험을 통한 감정의 순화와 정화 작용을 '카타르시스'라고 합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "단순한 일차적 의미를 넘어 추상적인 개념이나 역사적 진실을 다른 구체적 대상에 빗대어 다층적으로 암시하는 비평 용어는?",
          "options": [
            "알레고리",
            "단순 묘사",
            "말장난"
          ],
          "answerIndex": 0,
          "explanation": "다중적 은유와 상징 체계를 통해 깊은 의미를 드러내는 기법은 '알레고리'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'미학적 거리두기와 다층적 플롯을 정밀하게 분석했어요'(I precisely analyzed aesthetic distancing and multilayered plot)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "미학적 거리두기와 다층적 플롯을 정밀하게 분석했어요.",
            "미학적 거리두기와 다층적 플롯을 정밀하게 분석했어요"
          ],
          "explanation": "미학적 거리두기와 + 다층적 플롯을 + 정밀하게 + 분석했어요 = 미학적 거리두기와 다층적 플롯을 정밀하게 분석했어요."
        }
      ]
    }
  },
  "ko-u32-l4": {
    "id": "ko-u32-l4",
    "subject": "korean",
    "unit": 32,
    "lessonNumber": 4,
    "title": "한국 전통 공연 예술과 현대 무대 미학 (Traditional Performing Arts & Stage Aesthetics)",
    "level": "C2",
    "objective": "판소리의 추임새와 이면, 마당극과 탈춤의 골계미·계급 풍자, 현대 실험극의 '제4의 벽 허물기' 공연 예술 담론을 마스터한다.",
    "presentation": {
      "explanation": "한국의 독창적인 종합 공연 예술인 판소리, 탈춤, 마당극의 전통 미학과 현대 극예술의 무대 문법입니다.\n\n1. 판소리(Pansori)의 미학 체계:\n- **소리꾼(Singer)과 고수(Drummer)**: 1인의 소리꾼이 창(소리), 아니리(말), 너름새(발림/몸짓)로 서사를 이끌고, 고수는 북 장단과 함께 '얼씨구!', '좋다!', '잘한다!' 등 **추임새(Chuhimsae)**로 흥을 돋움\n- **이면(裏面)을 그리다**: 사설의 극적 상황과 인물의 희로애락 심리를 소리의 음색과 조(계면조, 우조, 평조)에 정확히 일치시켜 구현하는 최고 경지의 판소리 미학\n\n2. 민중 극예술과 마당 미학:\n- **탈춤(Mask Dance)과 골계미**: 양반의 허위의식과 타락한 계급을 풍자하는 말뚝이의 날카로운 독설과 익살\n- **마당극과 제4의 벽(Fourth Wall) 허물기**: 무대와 객석의 경계를 허물고 관객이 극의 참여자이자 주체가 되는 열린 축제성",
      "examples": [
        {
          "target": "명창은 극적인 비장미가 극에 달하는 대목에서 처절한 계면조 성음으로 소리의 이면을 완벽하게 그려내어 청중의 심금을 울렸습니다.",
          "reading": "Myeongchang-eun geukjeogin bijangmi-ga geug-e dalhaneun daemog-eseo cheojeolhan gyemyeonjo seong-eum-euro sori-ui imyeon-eul wanbyeokhage geuryeonaeeo cheongjung-ui simgeum-eul ullyeotseumnida.",
          "translation": "At the passage where dramatic tragic beauty reaches its peak, the master singer perfectly rendered the inner truth of the sound ('소리의 이면을 완벽하게 그려내어') with a sorrowful Gyemyeonjo vocal tone, touching the hearts of the audience."
        },
        {
          "target": "고수의 절묘한 북 장단과 적재적소의 추임새는 소리꾼의 호흡을 살리고 객석의 자발적 참여를 유도하는 판소리의 백미입니다.",
          "reading": "Gosu-ui jeolmyohan buk jangdan-gwa jeokjaejeokso-ui chuimsae-neun sorikkun-ui hoheup-eul salligo gaekseok-ui jabaljeok cham-yeo-reul yudohaneun pansori-ui baengmi-imnida.",
          "translation": "The drummer's exquisite drum rhythm and well-timed exclamations ('적재적소의 추임새는') are the highlight of pansori, enlivening the singer's breathing and inducing voluntary audience participation."
        },
        {
          "target": "봉산탈춤에서 말뚝이의 대사는 신랄한 해학과 골계미를 통해 지배 계급의 위선과 권위를 거침없이 해체합니다.",
          "reading": "Bongsantalchum-eseo Malttugi-ui daesa-neun sinralhan haehaek-gwa golgyemi-reul tonghae jibae gyegeup-ui wiseon-gwa gwon-wi-reul geochimeopsi haechehamnida.",
          "translation": "In Bongsan Mask Dance, Malttugi's dialogue unhesitatingly deconstructs the ruling class's hypocrisy and authority through scathing humor and comical beauty ('신랄한 해학과 골계미를 통해')."
        },
        {
          "target": "현대 마당극은 무대와 객석을 가로막는 제4의 벽을 과감히 허물고 관객과 호흡하는 열린 연극의 새로운 지평을 열었습니다.",
          "reading": "Hyeondae madanggeuk-eun mudae-wa gaekseog-eul garomangneun je-sa-ui byeok-eul gwagamhi heomulgo gwan-gaek-gwa hoheuphaneun yeollin yeon-geuk-ui saeroun jipyeong-eul yeoreotseumnida.",
          "translation": "Modern Madanggeuk boldly tore down the fourth wall ('제4의 벽을 과감히 허물고') separating the stage and audience seats, opening a new horizon of open theatre breathing together with spectators."
        }
      ],
      "mnemonics": [
        "소리꾼의 창과 고수의 추임새, 소리의 이면, 탈춤의 골계미, 제4의 벽 허물기!"
      ],
      "culturalNotes": [
        "판소리는 2003년 유네스코 인류무형문화유산으로 등재되었으며, '추임새'는 관객이 단순 관람자를 넘어 공연의 공동 창작자로 참여하게 하는 한국 전통 예술의 핵심 원리입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "판소리 공연에서 고수나 관객이 소리꾼의 창 도중에 '얼씨구!', '좋다!' 하고 흥을 돋우는 감탄사를 무엇이라 하는가?",
          "options": [
            "추임새",
            "아니리",
            "너름새"
          ],
          "answerIndex": 0,
          "explanation": "판소리에서 흥을 돋우고 호흡을 맞추는 감탄사를 '추임새'라고 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "전통 탈춤이나 마당극에서 양반의 권위와 위선을 통렬하게 꼬집어 웃음을 자아내는 미적 범주는?",
          "options": [
            "골계미",
            "숭고미",
            "우아미"
          ],
          "answerIndex": 0,
          "explanation": "부조리한 지배층을 풍자와 익살로 비틀어 웃음을 주는 미적 범주를 '골계미'라고 합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "판소리에서 사설의 극적 내용과 인물의 정서적 상황을 정확한 음색과 가락으로 일치시켜 구현하는 최고 경지의 예술성을 뜻하는 용어는?",
          "options": [
            "이면",
            "겉면",
            "막간"
          ],
          "answerIndex": 0,
          "explanation": "사설의 참뜻과 인물의 희로애락을 소리로 완벽히 형상화하는 것을 '이면을 그리다'라고 합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'고수의 추임새와 소리의 이면을 훌륭히 살렸어요'(They superbly brought alive the drummer's exclamation and the sound's inner truth)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "고수의 추임새와 소리의 이면을 훌륭히 살렸어요.",
            "고수의 추임새와 소리의 이면을 훌륭히 살렸어요"
          ],
          "explanation": "고수의 추임새와 + 소리의 이면을 + 훌륭히 + 살렸어요 = 고수의 추임새와 소리의 이면을 훌륭히 살렸어요."
        }
      ]
    }
  },
  "ko-u32-l5": {
    "id": "ko-u32-l5",
    "subject": "korean",
    "unit": 32,
    "lessonNumber": 5,
    "title": "대한민국예술원 심포지엄 및 이상문학상 수상 작가 평론 실전 종합 담화",
    "level": "C2",
    "objective": "근현대 소설, 현대 시학, 예술 비평 및 공연 미학을 총망라하여 대한민국 최고 권위의 문학상 심사평과 학술 담화를 완성한다.",
    "presentation": {
      "explanation": "대한민국예술원 학술 심포지엄 및 이상문학상(Yi Sang Literary Award) 대상 수상작 심사평에서 펼쳐지는 최고 수준의 실전 문학·예술 비평 담화 모델입니다.\n\n1. 최고 권위 문학상 심사평 및 수상 인터뷰 실전 모델:\n- 심사위원장(원로 평론가): 이번 수상작은 식민지와 분단의 역사적 상흔을 **알레고리의 다층적 층위**로 구축하고, 파편화된 현대인의 실존적 불안을 **유려한 시적 문체로 형상화**한 탁월한 걸작입니다. 감상적 감정 과잉을 경계하며 **미학적 거리두기**를 견지한 서사적 긴장감은 한국 소설의 지평을 한 단계 확장하였습니다.\n- 수상 작가: 과분한 영예에 머리 숙여 감사드립니다. 저는 우리 민족의 전통적 **한(恨)과 비극미**를 오늘의 현실 속에서 어떻게 **카타르시스로 승화시킬 것인가**를 끊임없이 자문해 왔습니다. 판소리의 고수가 소리꾼에게 건네는 **추임새**처럼, 제 글이 고단한 삶을 살아가는 이웃들의 가슴에 따스한 위로로 가닿기를 소망합니다.\n- 심사위원: 작가의 문학적 진정성과 치열한 작가 정신에 아낌없는 찬사를 보내며, 한국 문학이 세계 문학의 중심 무대로 힘차게 도약하기를 기대합니다.",
      "examples": [
        {
          "target": "심사위원회는 본 작품이 현대 한국 문학의 미학적 지평을 넓히고 인간 실존의 비극미를 완벽히 형상화했다고 만장일치로 평정하였습니다.",
          "reading": "Simsawiwonhoe-neun bon jakpum-i hyeondae hanguk munhak-ui mihakjeok jipyeong-eul neolpigo in-gan siljon-ui bigeukmi-reul wanbyeokhi hyeongsanghwahaetdago manjang-ilchi-ro pyeongjeonghayeotseumnida.",
          "translation": "The judging committee unanimously evaluated that this work broadened the aesthetic horizons of modern Korean literature and perfectly concretized the tragic beauty of human existence."
        },
        {
          "target": "한국 문학의 깊은 서정성과 날카로운 역사의식은 세계인들의 가슴속에 깊은 울림과 감동을 선사하고 있습니다.",
          "reading": "Hanguk munhak-ui gipeun seojeongseong-gwa nalkaroun yeoksauisik-eun segyein-deul-ui gaseumsog-e gipeun ullim-gwa gamdong-eul seonsahago itseumnida.",
          "translation": "The deep lyricism and sharp historical consciousness of Korean literature are presenting deep resonance and emotion in the hearts of global citizens."
        },
        {
          "target": "전통의 창조적 계승과 현대적 변용이야말로 독창적인 예술 세계를 구축하는 불멸의 원동력입니다.",
          "reading": "Jeontong-ui changjojeok gyeseung-gwa hyeondaejeok byeonyong-iyamallo dokchangjeogin yesul segye-reul guchukhaneun bulmyeol-ui wondongryeok-imnida.",
          "translation": "Creative inheritance and modern transformation of tradition is indeed the immortal driving force establishing an original artistic world."
        },
        {
          "target": "문학은 고통받는 자들의 목소리를 대변하고 시대의 어둠을 밝히는 꺼지지 않는 양심의 등불입니다.",
          "reading": "Munhak-eun gotongbanneun jadeul-ui moksori-reul daebyeonhago sidae-ui eodum-eul balkhineun kkeojiji anneun yangsim-ui deungbul-imnida.",
          "translation": "Literature is an unquenchable beacon of conscience speaking for the voices of suffering souls and illuminating the darkness of the era."
        }
      ],
      "mnemonics": [
        "문학상 심사: 알레고리의 층위, 비극미 승화, 추임새 같은 연대와 위로!"
      ],
      "culturalNotes": [
        "한국의 '이상문학상'은 소설가 이상의 예술적 업적을 기리기 위해 제정된 대한민국 최고 권위의 중·단편 문학상으로, 한강, 이문열, 신경숙 등 수많은 거장들이 거쳐 간 한국 순문학의 요람입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "문학상 심사평에서 작품의 예술적 완성도와 수준을 가장 품격 있게 칭찬하는 표현은?",
          "options": [
            "인간 실존의 비극미를 유려하게 형상화하여 한국 문학의 지평을 넓혔다.",
            "글자가 아주 예쁘게 인쇄되어 있어서 만점을 주었다.",
            "작가가 유명한 사람이니까 무조건 상을 주기로 했다."
          ],
          "answerIndex": 0,
          "explanation": "'비극미를 유려하게 형상화하여 지평을 넓혔다'는 최고급 문학 비평 수사입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "문학상 수상 소감에서 독자와 이웃에 대한 문학적 헌신과 위로의 마음을 전할 때 가장 감동적인 C2 표현은?",
          "options": [
            "판소리의 추임새처럼 제 글이 이웃들의 고단한 삶에 따스한 위로로 가닿기를 소망합니다.",
            "상금을 많이 받았으니 이제 글을 그만 쓰겠습니다.",
            "나 혼자 잘나서 상을 받은 것이니 감사할 필요가 없습니다."
          ],
          "answerIndex": 0,
          "explanation": "전통 예술의 '추임새'를 비유로 들어 삶의 위로와 연대를 표현하는 소감이 가장 격조 높습니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 한국 문학 및 예술 비평 최고급 C2 담화로서 가장 완벽한 것은?",
          "options": [
            "역사적 상흔을 알레고리로 승화시키고 미학적 거리두기를 통해 인간 실존의 비극미를 유려하게 형상화하였습니다.",
            "소설이 너무 길어서 읽기 힘들었으니 줄거리를 요약해서 다시 제출하십시오.",
            "시는 재미가 없으니 앞으로는 만화책만 출판하는 것이 좋습니다."
          ],
          "answerIndex": 0,
          "explanation": "'역사적 상흔의 알레고리 승화', '미학적 거리두기', '비극미의 유려한 형상화'는 완벽한 최고급 C2 문학 비평입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'비극미를 유려하게 형상화하여 문학상을 받았어요'(They concretized tragic beauty fluently and received a literary award)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "비극미를 유려하게 형상화하여 문학상을 받았어요.",
            "비극미를 유려하게 형상화하여 문학상을 받았어요"
          ],
          "explanation": "비극미를 + 유려하게 + 형상화하여 + 문학상을 + 받았어요 = 비극미를 유려하게 형상화하여 문학상을 받았어요."
        }
      ]
    }
  },
  "ko-u33-l1": {
    "id": "ko-u33-l1",
    "subject": "korean",
    "unit": 33,
    "lessonNumber": 1,
    "title": "첨단 반도체 제조 공정과 소부장 생태계 (Semiconductor Tech & Ecosystem)",
    "level": "C2",
    "objective": "메모리·시스템 반도체, EUV 초미세 노광, HBM 고대역폭 메모리, 소부장 생태계 및 반도체 메가 클러스터 전문 기술 어휘를 마스터한다.",
    "presentation": {
      "explanation": "대한민국 경제와 수출의 핵심 엔진인 첨단 반도체(Advanced Semiconductor) 산업 전문 기술 및 생태계 담화입니다.\n\n1. 반도체 분류 및 제조 공정:\n- **메모리 반도체(Memory Semiconductor)**: D램(DRAM), 낸드플래시(NAND Flash) 등 정보 저장용 반도체 (한국의 절대적 세계 1위 분야)\n- **시스템 반도체(System LSI)**: 팹리스(Fabless / 설계 전문)와 파운드리(Foundry / 위탁 생산 전문)\n- **EUV(극자외선, Extreme Ultraviolet) 초미세 노광 공정**: 2~3나노미터(nm) 이하 미세 회로를 웨이퍼에 새기는 최첨단 핵심 공정\n- **HBM(고대역폭 메모리, High Bandwidth Memory)**: 여러 개의 D램을 수직으로 적층(TSV 공정)하여 인공지능(AI) 연산 속도를 획기적으로 높인 차세대 AI 반도체 필수 부품\n\n2. 산업 생태계와 클러스터:\n- **소부장(소재·부품·장비 / Materials, Parts, Equipment)**: 반도체 제조에 필요한 감광액, 불화수소, 정밀 증착 장비 등 공급망 자립화의 핵심 축\n- **반도체 메가 클러스터(Semiconductor Mega Cluster)**: 생산 팹과 R&D 센터, 협력사를 집적한 초대형 국가 첨단 산업 기지",
      "examples": [
        {
          "target": "한국 반도체 기업들은 인공지능 가속기에 필수적인 5세대 고대역폭 메모리(HBM3E) 양산에 성공하여 글로벌 초격차 우위를 굳건히 지켜냈습니다.",
          "reading": "Hanguk bandoche gieopdeul-eun in-gongjineung gasokgi-e pilsujeogin o-sedae godaeyeokpok memori (HBM3E) yangsan-e seonggonghayeo geullobeol chogyeokcha uwi-reul gutgeonhi jikyeonaetseumnida.",
          "translation": "Korean semiconductor enterprises succeeded in mass-producing 5th-generation High Bandwidth Memory (HBM3E) essential for AI accelerators, firmly maintaining a global super-gap advantage ('초격차 우위를 굳건히 지켜냈습니다')."
        },
        {
          "target": "2나노미터 초미세 공정 경쟁에서 승기를 잡기 위해 최첨단 극자외선(EUV) 노광 장비 도입과 패키징 기술 혁신에 천문학적인 투자를 단행하고 있습니다.",
          "reading": "I-nanomiteo chomise gongjeong gyeongjaeng-eseo seunggi-reul jabgi wihae choecheomdan geukja-oe-seon (EUV) nogwang jangbi do-ip-gwa paekijig gisul hyeoksin-e cheonmunhakjeogin tuja-reul danhaenghago itseumnida.",
          "translation": "To seize victory in the 2nm ultrafine process competition, they are making astronomical investments in adopting state-of-the-art EUV lithography equipment and packaging technology innovation ('천문학적인 투자를 단행하고 있습니다')."
        },
        {
          "target": "글로벌 공급망 불확실성에 선제적으로 대응하기 위해 반도체 소재·부품·장비(소부장) 기업들의 국산화 기술 개발을 전폭 지원하고 있습니다.",
          "reading": "Geullobeol gong-geubmang bulhwaksilseong-e seonjejeog-euro dae-eunghagi wihae bandoche sojae·bupum·jangbi (sobujang) gieopdeul-ui guksanhwa gisul gaebal-eul jeonpok jiwonhago itseumnida.",
          "translation": "To preemptively respond to global supply chain uncertainty, they are comprehensively supporting domestic localization technology development of semiconductor materials, parts, and equipment (Sobujang) enterprises ('국산화 기술 개발을 전폭 지원하고')."
        },
        {
          "target": "용인과 평택을 잇는 세계 최대 규모의 반도체 메가 클러스터 조성을 통해 미래 전략 자산의 초격차 생산 기지를 구축합니다.",
          "reading": "Yong-in-gwa Pyeongtaek-eul inneun segye choedae gyumo-ui bandoche mega keulleoseuteo joseong-eul tonghae mirae jeonryak jasan-ui chogyeokcha saengsan giji-reul guchukhamnida.",
          "translation": "By creating the world's largest semiconductor mega cluster connecting Yongin and Pyeongtaek, we build a super-gap production base for future strategic assets."
        }
      ],
      "mnemonics": [
        "D램·낸드 메모리, 팹리스·파운드리 시스템, EUV 노광, HBM 적층, 소부장 생태계!"
      ],
      "culturalNotes": [
        "한국에서 반도체는 '산업의 쌀'이자 '국가 안보 전략 자산'으로 불리며, K-칩스법(조세특례제한법) 등 국가적 세제 혜택과 인프라 지원이 집중되는 핵심 산업입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "인공지능(AI) 칩셋의 초고속 연산을 위해 D램을 여러 층으로 수직 적층하여 데이터 처리 대역폭을 극대화한 차세대 메모리 반도체는?",
          "options": [
            "HBM",
            "플로피 디스크",
            "카세트 테이프"
          ],
          "answerIndex": 0,
          "explanation": "AI 연산 가속기에 필수적인 고성능 적층 D램은 'HBM(고대역폭 메모리)'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "반도체 완제품 제조에 투입되는 '소재, 부품, 장비' 분야를 줄여 부르는 한국 산업계 전문 약칭은?",
          "options": [
            "소부장",
            "노사정",
            "식음료"
          ],
          "answerIndex": 0,
          "explanation": "반도체·디스플레이의 소재, 부품, 장비 생태계를 '소부장'이라고 부릅니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "반도체 칩을 직접 제조하는 생산 설비(Fab) 없이 설계만을 전문으로 하는 기업을 뜻하는 용어는?",
          "options": [
            "팹리스",
            "파운드리",
            "패키징"
          ],
          "answerIndex": 0,
          "explanation": "공장 없이 칩 설계만을 전문으로 하는 기업을 '팹리스(Fabless)'라고 합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'HBM 고대역폭 메모리로 초격차 기술 우위를 확보했어요'(We secured super-gap technology advantage with HBM memory)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "HBM 고대역폭 메모리로 초격차 기술 우위를 확보했어요.",
            "HBM 고대역폭 메모리로 초격차 기술 우위를 확보했어요"
          ],
          "explanation": "HBM 고대역폭 메모리로 + 초격차 기술 우위를 + 확보했어요 = HBM 고대역폭 메모리로 초격차 기술 우위를 확보했어요."
        }
      ]
    }
  },
  "ko-u33-l2": {
    "id": "ko-u33-l2",
    "subject": "korean",
    "unit": 33,
    "lessonNumber": 2,
    "title": "차세대 이차전지, 친환경 모빌리티 및 에너지 전환 (Secondary Batteries & Green Energy)",
    "level": "C2",
    "objective": "삼원계(NCM) vs LFP 배터리, 전고체 배터리, 수소환원제철, CCUS, RE100 및 탄소국경조정제도(CBAM)를 마스터한다.",
    "presentation": {
      "explanation": "글로벌 탄소중립(Carbon Neutrality) 및 친환경 에너지 대전환을 견인하는 차세대 이차전지와 청정 기술 담화입니다.\n\n1. 이차전지(Secondary Battery) 기술 경쟁:\n- **삼원계 배터리(NCM/NCMA)**: 니켈, 코발트, 망간(알루미늄)을 사용하여 에너지 밀도가 높고 주행 거리가 긴 고성능 프리미엄 배터리 (한국 3사 주력)\n- **LFP(리튬인산철) 배터리**: 에너지 밀도는 낮으나 가격이 저렴하고 화재 안정성이 높은 보급형 배터리\n- **전고체 배터리(Solid-state Battery)**: 액체 전해질을 불연성 고체 전해질로 대체하여 화재 위험을 원천 차단하고 에너지 밀도를 획기적으로 높인 '꿈의 배터리'\n\n2. 청정에너지와 무역 규범:\n- **수소환원제철(Hydrogen Reduction Steelmaking)**: 석탄 대신 수소를 환원제로 사용하여 이산화탄소 배출을 획기적으로 줄이는 차세대 친환경 제철 기술\n- **CCUS(탄소 포집·활용·저장, Carbon Capture, Utilization and Storage)**\n- **RE100 & CBAM(탄소국경조정제도)**: 100% 재생에너지 사용 서약 및 탄소 배출량에 따른 무역 관세 부과 제도",
      "examples": [
        {
          "target": "배터리 3사는 화재 위험을 원천 차단하고 주행 거리를 획기적으로 늘릴 수 있는 꿈의 전고체 배터리 양산 로드맵을 발표했습니다.",
          "reading": "Baeteori sam-sa-neun hwajae wiheom-eul woncheon chadanhago juhaeng geori-reul hoekgijeog-euro neullil su inneun kkum-ui jeongoche baeteori yangsan rodeumaep-eul balpyohaetseumnida.",
          "translation": "The three battery makers announced a mass-production roadmap for the dream solid-state battery ('전고체 배터리 양산 로드맵을 발표했습니다') capable of fundamentally blocking fire risks and drastically increasing driving range."
        },
        {
          "target": "철강업계는 탄소 배출 규제에 선제적으로 대응하기 위해 화석연료 대신 수소를 활용하는 수소환원제철 실증 플랜트를 가동하였습니다.",
          "reading": "Cheolgang-eopgye-neun tanso baechul gyuje-e seonjejeog-euro dae-eunghagi wihae hwaseong-yeollyo daesin suso-reul hwalyonghaneun susohwan-wonjecheol siljeung peullaenteu-reul gadonghayeotseumnida.",
          "translation": "To preemptively respond to carbon emission regulations, the steel industry operated a hydrogen reduction steelmaking demonstration plant ('수소환원제철 실증 플랜트를 가동하였습니다') utilizing hydrogen instead of fossil fuels."
        },
        {
          "target": "유럽연합의 탄소국경조정제도(CBAM) 본격 시행에 발맞추어 수출 기업들의 RE100 달성과 탄소 포집 기술(CCUS) 도입이 시급한 당면 과제로 부상했습니다.",
          "reading": "Yureob-yeonhap-ui tansogukgyeongjojeongjedo (CBAM) bongyeok sihaeng-e balmatchwo suchul gieopdeul-ui RE100 dalseong-gwa tanso pojip gisul (CCUS) do-ip-i sigeubhan dangmyeon gwaje-ro busanghaetseumnida.",
          "translation": "In step with full implementation of the European Union's Carbon Border Adjustment Mechanism (CBAM), exporting companies' RE100 achievement and adoption of carbon capture technology (CCUS) emerged as urgent immediate tasks."
        },
        {
          "target": "고성능 하이니켈 삼원계 배터리와 가격 경쟁력을 갖춘 LFP 배터리를 아우르는 투트랙 포트폴리오 전략을 구사하고 있습니다.",
          "reading": "Goseongneung hai-nikel sam-won-gye baeteori-wa gagyeok gyeongjaengryeog-eul gatchun LFP baeteori-reul aureuneun tu-teuraek poteupolrio jeonryak-eul gusahago itseumnida.",
          "translation": "They are using a two-track portfolio strategy encompassing high-performance high-nickel ternary batteries and cost-competitive LFP batteries."
        }
      ],
      "mnemonics": [
        "삼원계와 LFP, 꿈의 전고체 배터리, 수소환원제철, RE100과 CBAM 탄소 무역!"
      ],
      "culturalNotes": [
        "한국의 K-배터리는 LG에너지솔루션, 삼성SDI, SK온을 중심으로 글로벌 전기차 완성차 업체들과의 대규모 합작 법인(JV)을 통해 북미 및 유럽 시장 점유율을 주도하고 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "액체 전해질 대신 불연성 고체 전해질을 사용하여 화재 안전성을 극대화하고 에너지 밀도를 높인 차세대 이차전지는?",
          "options": [
            "전고체 배터리",
            "납축전지",
            "알칼리 건전지"
          ],
          "answerIndex": 0,
          "explanation": "고체 전해질을 사용하는 차세대 꿈의 배터리는 '전고체 배터리'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "철광석 제련 시 석탄 대신 수소를 사용하여 이산화탄소 배출 없이 쇳물을 생산하는 친환경 제철 공법은?",
          "options": [
            "수소환원제철",
            "고로 제철",
            "수동 단조"
          ],
          "answerIndex": 0,
          "explanation": "석탄 대신 수소를 투입하여 탄소 배출을 없애는 제철 공법은 '수소환원제철'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "기업이 사용하는 전력의 100%를 풍력, 태양광 등 재생에너지로만 충당하겠다는 글로벌 자발적 친환경 캠페인은?",
          "options": [
            "RE100",
            "G20",
            "OECD"
          ],
          "answerIndex": 0,
          "explanation": "재생에너지 100% 사용 서약 글로벌 이니셔티브는 'RE100'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'전고체 배터리와 수소환원제철 기술을 개발했어요'(We developed solid-state battery and hydrogen reduction steelmaking tech)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "전고체 배터리와 수소환원제철 기술을 개발했어요.",
            "전고체 배터리와 수소환원제철 기술을 개발했어요"
          ],
          "explanation": "전고체 배터리와 + 수소환원제철 + 기술을 + 개발했어요 = 전고체 배터리와 수소환원제철 기술을 개발했어요."
        }
      ]
    }
  },
  "ko-u33-l3": {
    "id": "ko-u33-l3",
    "subject": "korean",
    "unit": 33,
    "lessonNumber": 3,
    "title": "생성형 인공지능, 초거대 파운데이션 모델 및 양자 기술 (Generative AI & Quantum Computing)",
    "level": "C2",
    "objective": "LLM 거대언어모델, 온디바이스 AI, 파운데이션 모델, 양자 컴퓨팅(큐비트/얽힘), AI 윤리 및 저작권 쟁점을 마스터한다.",
    "presentation": {
      "explanation": "인공지능 혁명과 미래 컴퓨터 아키텍처의 패러다임을 바꾸는 생성형 AI(Generative AI) 및 양자 정보 기술(Quantum Tech) 담화입니다.\n\n1. 인공지능 프론티어 기술:\n- **거대언어모델(LLM, Large Language Model)**: 수천억 개 매개변수(Parameters)를 학습하여 인간 수준의 언어 이해와 생성을 수행하는 모델\n- **소버린 AI(Sovereign AI)**: 자국의 언어, 역사, 문화적 가치관을 온전히 반영하고 데이터 주권을 지키는 국가 자체 파운데이션 모델\n- **온디바이스 AI(On-device AI)**: 클라우드 서버 연결 없이 스마트폰이나 PC 기기 자체 NPU에서 실시간 AI 연산을 처리하는 저지연·보안 기술\n\n2. 양자 컴퓨팅과 인공지능 윤리:\n- **양자 컴퓨팅(Quantum Computing)**: 0과 1의 중첩(Superposition)과 얽힘(Entanglement)을 이용하는 큐비트(Qubit) 기반의 초고속 양자 연산 기술\n- **인공지능 윤리 가이드라인(AI Ethics Guidelines)**: 환각 현상(Hallucination), 편향성 방지, 저작권 침해 방지 및 딥페이크(Deepfake) 규제",
      "examples": [
        {
          "target": "한국어 특화 데이터셋을 기반으로 구축된 자체 소버린 AI 모델은 문화적 맥락을 완벽히 이해하는 독보적인 언어 생성 능력을 자랑합니다.",
          "reading": "Hanguk-eo teukhwa deiteoset-eul giban-euro guchukdoen jache sobeorin AI modeul-eun munhwajeok maekrak-eul wanbyeokhi ihae-haneun dokbojeogin eon-eo saengseong neungryeog-eul jaranghamnida.",
          "translation": "The proprietary Sovereign AI model built on Korean-specialized datasets boasts unmatched language generation capabilities perfectly understanding cultural contexts ('소버린 AI 모델은')."
        },
        {
          "target": "네트워크 연결 없이 기기 내부에서 초고속으로 실시간 통역과 요약을 처리하는 온디바이스 AI 칩셋이 스마트폰에 본격 탑재되었습니다.",
          "reading": "Neteuwokeu yeon-gyeol eopsi gigi naebu-eseo chogosog-euro sil-sigan tong-yeok-gwa yoyag-eul cheorihaneun on-dibaisu AI chipses-i seumateupon-e bongyeok tapjaedoe-eotseumnida.",
          "translation": "On-device AI chipsets processing real-time interpretation and summarization at high speed inside the device without network connection were fully installed in smartphones ('온디바이스 AI 칩셋이')."
        },
        {
          "target": "양자 얽힘과 중첩 현상을 활용한 양자 컴퓨팅은 기존 슈퍼컴퓨터가 수만 년 걸릴 복잡한 암호 해독과 신약 분자 설계를 단 몇 초 만에 해결할 잠재력을 지닙니다.",
          "reading": "Yangja eolkim-gwa jungcheop hyeonsang-eul hwalyonghan yangja keompyuting-eun gijon syupeokeompyuteo-ga suman nyeon geollil bokjabhan amho haedok-gwa sin-yak bunja seolgye-reul dan myeot cho man-e haegyeolhal jamjaeryeog-eul jinimnida.",
          "translation": "Quantum computing utilizing quantum entanglement and superposition possesses the potential to resolve complex cryptography decoding and new drug molecule designs in mere seconds, which would take existing supercomputers tens of thousands of years."
        },
        {
          "target": "생성형 인공지능이 야기할 수 있는 가짜 뉴스 확산과 저작권 침해를 방지하기 위해 법제화된 인공지능 윤리 기준을 엄격히 적용해야 합니다.",
          "reading": "Saengseonghyeong in-gongjineung-i yagihal su inneun gajja nyuseu hwaksan-gwa jeojakkwon chimhae-reul bangjihagi wihae beobjehyeodoen in-gongjineung yunri gijun-eul eomgyeokhi jeog-yonghaeya hamnida.",
          "translation": "To prevent the spread of fake news and copyright infringement that generative AI could cause, codified AI ethical standards must be strictly applied."
        }
      ],
      "mnemonics": [
        "소버린 AI 데이터 주권, 온디바이스 AI 저지연, 큐비트 양자 컴퓨팅, AI 윤리 가이드라인!"
      ],
      "culturalNotes": [
        "한국은 전 세계에서 자체 거대언어모델(LLM) 파운데이션 기술을 보유한 극소수 국가 중 하나로서, 네이버 하이퍼클로바X, LG 엑사원 등 '소버린 AI' 생태계를 선도하고 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "외부 클라우드 서버와의 통신 없이 스마트폰이나 노트북 기기 자체의 프로세서에서 AI 연산을 직접 수행하는 기술은?",
          "options": [
            "온디바이스 AI",
            "클라우드 웹메일",
            "원격 제어"
          ],
          "answerIndex": 0,
          "explanation": "기기 자체에서 독립적으로 작동하는 AI 기술은 '온디바이스 AI'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "빅테크 기업에 데이터와 인공지능 주권을 종속당하지 않고 자국의 문화와 언어 주권을 지키는 국가 자체 AI 모델을 뜻하는 개념은?",
          "options": [
            "소버린 AI",
            "오픈소스 프리웨어",
            "불법 복제 소프트웨어"
          ],
          "answerIndex": 0,
          "explanation": "국가의 데이터 주권과 문화적 정체성을 수호하는 독립적 AI 모델을 '소버린 AI'라고 합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "양자역학의 중첩과 얽힘 원리를 이용하여 기존 이진 비트(0과 1) 대신 큐비트 단위로 정보를 병렬 연산하는 초고속 컴퓨팅은?",
          "options": [
            "양자 컴퓨팅",
            "아날로그 라디오",
            "주판 계산"
          ],
          "answerIndex": 0,
          "explanation": "양자역학적 원리로 기하급수적 연산 속도를 내는 시스템은 '양자 컴퓨팅'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'소버린 AI 모델과 온디바이스 기술을 구축했어요'(We built Sovereign AI model and on-device technology)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "소버린 AI 모델과 온디바이스 기술을 구축했어요.",
            "소버린 AI 모델과 온디바이스 기술을 구축했어요"
          ],
          "explanation": "소버린 AI + 모델과 + 온디바이스 + 기술을 + 구축했어요 = 소버린 AI 모델과 온디바이스 기술을 구축했어요."
        }
      ]
    }
  },
  "ko-u33-l4": {
    "id": "ko-u33-l4",
    "subject": "korean",
    "unit": 33,
    "lessonNumber": 4,
    "title": "기술 패권 경쟁과 공급망 안보 고급 경제·외교 담화 (Tech Sovereignty & Supply Chains)",
    "level": "C2",
    "objective": "기술 주권 확보, 글로벌 공급망(GVC) 재편, 초격차 우위 선점, 원천 기술 사수 등 최고급 기술 안보 수사를 자유자재로 구사한다.",
    "presentation": {
      "explanation": "미·중 기술 패권 경쟁(Tech Hegemony)과 지정학적 공급망 블록화 속에서 국가 생존을 결의하는 최고급 C2 경제·외교 담화 표지입니다.\n\n1. 기술 안보 및 패권 대응 담화 표지:\n- **기술 주권(Tech Sovereignty)을 확보하다 / 기술 안보를 수호하다**: 첨단 기술이 국가의 안보와 직결됨을 천명할 때\n- **초격차(Super Gap) 기술 우위를 선점하다 / 유지하다**: 후발 주자가 따라올 수 없을 만큼 압도적인 기술 격차를 유지할 때\n- **원천 기술 확보가 국가의 사활(死活)을 가른다 (Matters of life and death)**: 미래 기술 자립의 절박성을 역설할 때\n\n2. 공급망 전략 수사:\n- **글로벌 공급망(GVC) 재편에 기민하게 대처하다**: 프렌드쇼어링, 온쇼어링 등 공급망 분절화에 전략적으로 대응할 때\n- **특정국에 대한 공급망 과의존도를 탈피하여 다변화를 꾀하다**: 핵심 광물 및 원자재 공급선 다변화 전략을 서술할 때",
      "examples": [
        {
          "target": "글로벌 기술 패권 경쟁이 격화되는 가운데, 반도체와 배터리 등 핵심 전략 자산의 초격차 우위 선점은 국가 경제 안보의 사활을 가르는 중차대한 과제입니다.",
          "reading": "Geullobeol gisul paegwon gyeongjaeng-i gyeokhwa-doeneun gaunde, bandoche-wa baeteori deung haeksim jeonryak jasan-ui chogyeokcha uwi seonjeom-eun gukga gyeongje anbo-ui sahwal-eul gareuneun jungchadaehan gwaje-imnida.",
          "translation": "Amidst intensifying global tech hegemony competition, preempting super-gap advantages in core strategic assets like semiconductors and batteries is a momentous task determining the life and death of national economic security ('사활을 가르는 중차대한 과제입니다')."
        },
        {
          "target": "핵심 원자재의 특정국 과의존 리스크를 불식시키기 위해 글로벌 공급망 다변화와 전략적 비축을 기민하게 추진하고 있습니다.",
          "reading": "Haeksim wonjajae-ui teukjeongguk gwa-uijon riseukeu-reul bulsiksigigi wihae geullobeol gong-geubmang dabyeonhwa-wa jeonryakjeok bichuk-eul gaminhage chujinhago itseumnida.",
          "translation": "To dispel the risk of overdependence on specific countries for core raw materials, we are nimbly pushing forward global supply chain diversification and strategic stockpiling ('공급망 다변화와 전략적 비축을 기민하게 추진하고')."
        },
        {
          "target": "차세대 양자 기술과 인공지능 원천 기술을 독자적으로 확보하지 못한다면 기술 종속국으로 전락할 위험이 농후합니다.",
          "reading": "Chasedae yangja gisul-gwa in-gongjineung woncheon gisul-eul dokjadeog-euro hwakbohai mothandamyeon gisul jongsongguk-euro jeonrakhal wiheom-i nonghuhamnida.",
          "translation": "If we fail to independently secure next-generation quantum technology and AI core source technologies, there is a strong risk of degrading into a technology-dependent state."
        },
        {
          "target": "과감한 R&D 세제 지원과 파격적인 규제 혁파를 통해 초격차 혁신 생태계를 완성해야 합니다.",
          "reading": "Gwagamhan R&D seje jiwon-gwa pagyeokjeogin gyuje hyeokpa-reul tonghae chogyeokcha hyeoksin saengtaegye-reul wanseonghaeya hamnida.",
          "translation": "Through bold R&D tax support and unprecedented regulatory reform, we must complete a super-gap innovation ecosystem."
        }
      ],
      "mnemonics": [
        "기술 주권 확보, 초격차 우위 선점, 공급망 다변화, R&D 원천 기술 사수!"
      ],
      "culturalNotes": [
        "한국 정부는 반도체, 디스플레이, 이차전지, 바이오, 인공지능, 양자 등 12대 분야를 '국가전략기술'로 지정하여 국가적 차원의 특별법과 예산을 전폭 투입하고 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "경쟁국이나 후발 기업이 감히 따라올 수 없을 정도로 압도적인 기술적 격차를 벌리는 전략을 뜻하는 경제 용어는?",
          "options": [
            "초격차 전략",
            "모방 전략",
            "가격 덤핑"
          ],
          "answerIndex": 0,
          "explanation": "압도적인 기술력 우위로 경쟁자를 따돌리는 전략을 '초격차(Super-gap)'라고 부릅니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "국제 정세의 변화로 인해 핵심 부품이나 광물의 수출입이 차단되는 위험을 막기 위해 공급선을 여러 나라로 나누는 전략은?",
          "options": [
            "공급망 다변화",
            "독점 계약",
            "전량 수입 중단"
          ],
          "answerIndex": 0,
          "explanation": "특정국 의존 위험을 분산하는 전략을 '공급망 다변화'라고 합니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "첨단 기술 확보가 국가의 존립과 번영에 직결되어 있음을 강조하는 가장 강력한 사자성어적 관용구는?",
          "options": [
            "국가의 사활(死活)을 가른다",
            "가화만사성이다",
            "동문서답을 일삼는다"
          ],
          "answerIndex": 0,
          "explanation": "죽느냐 사느냐의 중대한 갈림길을 뜻하는 표현은 '사활을 가른다'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'초격차 기술 우위와 공급망 다변화를 달성했어요'(We achieved super-gap technology advantage and supply chain diversification)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "초격차 기술 우위와 공급망 다변화를 달성했어요.",
            "초격차 기술 우위와 공급망 다변화를 달성했어요"
          ],
          "explanation": "초격차 기술 우위와 + 공급망 + 다변화를 + 달성했어요 = 초격차 기술 우위와 공급망 다변화를 달성했어요."
        }
      ]
    }
  },
  "ko-u33-l5": {
    "id": "ko-u33-l5",
    "subject": "korean",
    "unit": 33,
    "lessonNumber": 5,
    "title": "국가첨단전략산업위원회 및 글로벌 테크 서밋 실전 종합 담화",
    "level": "C2",
    "objective": "반도체, 배터리, 인공지능, 기술 안보 및 미래 신산업 육성을 총망라한 최고급 C2 과학 기술 전략 담화를 완성한다.",
    "presentation": {
      "explanation": "대통령 주재 국가첨단전략산업위원회 및 글로벌 테크 서밋(Global Tech Summit) 기조연설에서 펼쳐지는 대한민국 최고 수준의 과학기술 전략 담화 모델입니다.\n\n1. 국가첨단전략산업위원회 기조연설 실전 모델:\n- 대통령(의장): 오늘 대한민국은 미래 100년의 번영을 좌우할 첨단 과학기술 대도약의 출발점에 섰습니다. 반도체, 이차전지, 인공지능, 양자 기술은 단순한 산업을 넘어 대한민국의 **기술 주권**이자 국가 안보의 핵심 보루입니다.\n- 산업통상자원부 장관: 정부는 **반도체 메가 클러스터** 조성을 가속화하고, **HBM 및 전고체 배터리** 등 미래 핵심 기술의 **초격차 우위를 선점**할 수 있도록 파격적인 R&D 투자와 **소부장 생태계 자립화**를 완수하겠습니다. 아울러 **글로벌 공급망 다변화**를 통해 어떠한 지정학적 위기에도 흔들리지 않는 공급망 안보를 구축하겠습니다.\n- 테크 기업 CEO: 기업은 과감한 혁신과 인재 양성으로 **소버린 AI**와 온디바이스 기술의 세계 표준을 선도하며, 국가 경제 발전에 헌신할 것을 약속드립니다.\n- 의장: 민관이 원팀이 되어 미래 기술 패권 경쟁의 파고를 슬기롭게 넘고, 대한민국을 글로벌 과학기술 3대 강국(G3)으로 도약시킵시다.",
      "examples": [
        {
          "target": "대한민국은 반도체와 인공지능의 융합을 통해 글로벌 과학기술 G3 강국으로 도약하는 거대한 대항해를 시작하였습니다.",
          "reading": "Daehanminguk-eun bandoche-wa in-gongjineung-ui yunghap-eul tonghae geullobeol gwahakgisul G3 gangguk-euro do-yakhaneun geodaehan daehanghae-reul sijakhayeotseumnida.",
          "translation": "The Republic of Korea has embarked on a colossal grand voyage leaping into a global science and technology G3 powerhouse through the convergence of semiconductors and artificial intelligence."
        },
        {
          "target": "초격차 원천 기술 확보와 튼튼한 공급망 안보야말로 거센 기술 패권 경쟁의 파고를 돌파하는 최강의 방패이자 창입니다.",
          "reading": "Chogyeokcha woncheon gisul hwakbo-wa teunteunhan gong-geubmang anbo-yamallo geosen gisul paegwon gyeongjaeng-ui pago-reul dolpahaneun choegang-ui bangpae-ija chang-imnida.",
          "translation": "Securing super-gap source technologies and robust supply chain security is indeed the strongest shield and spear breaking through the fierce waves of technology hegemony competition."
        },
        {
          "target": "과학기술 인재를 존중하고 도전적 혁신을 장려하는 국가적 풍토가 미래 성장의 영원한 마르지 않는 샘물입니다.",
          "reading": "Gwahakgisul injae-reul jonjunghago dojeonjeok hyeoksin-eul jangryeohaneun gukgajeok pungto-ga mirae seongjang-ui yeong-wonhan mareuji anneun saemmul-imnida.",
          "translation": "A national climate respecting science and technology talent and encouraging challenging innovation is the eternal inexhaustible spring of future growth."
        },
        {
          "target": "민간의 창의적 역량과 정부의 전폭적 지원이 결합할 때 대한민국 기술의 기적은 계속될 것입니다.",
          "reading": "Min-gan-ui chang-uijeok yeongryang-gwa jeongbu-ui jeonpokjeok jiwon-i gyeolhabhal ttae Daehanminguk gisul-ui gijeok-eun gyesokdoel geos-imnida.",
          "translation": "When private creative capabilities and comprehensive government support combine, the miracle of Korean technology will continue."
        }
      ],
      "mnemonics": [
        "과학기술 서밋: 기술 주권, 초격차 선점, 공급망 안보, G3 강국 도약!"
      ],
      "culturalNotes": [
        "한국은 GDP 대비 R&D 투자 비중이 세계 최상위권(약 5% 안팎)을 기록하는 대표적인 과학기술 중심 혁신 국가입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "국가 테크 서밋에서 반도체, 배터리, AI 등의 중요성을 강조할 때 가장 품격 있는 정책 표현은?",
          "options": [
            "초격차 원천 기술을 확보하여 국가의 기술 주권과 공급망 안보를 굳건히 수호해야 합니다.",
            "기술 개발은 돈이 많이 드니 외국에서 모두 사다 쓰는 것이 좋습니다.",
            "컴퓨터 연구는 쓸모없으니 공장 문을 닫겠습니다."
          ],
          "answerIndex": 0,
          "explanation": "'초격차 원천 기술 확보', '기술 주권과 공급망 안보 수호'는 최고급 과학기술 정책 담화입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "글로벌 기술 경쟁에서 민관 협력의 중요성을 강조할 때 가장 적합한 담화 어구는?",
          "options": [
            "민관이 원팀이 되어 미래 기술 패권 경쟁의 파고를 돌파해 나갑시다.",
            "정부는 기업을 방해하고 기업은 세금을 안 내면 됩니다.",
            "연구원들에게 월급을 주지 말고 알아서 일하라고 합시다."
          ],
          "answerIndex": 0,
          "explanation": "'민관이 원팀이 되어 기술 패권 경쟁의 파고를 돌파하자'는 모범적인 비전 제시 표현입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "다음 중 한국의 첨단 미래 과학기술 전략 최고급 C2 담화로서 가장 완벽한 것은?",
          "options": [
            "반도체와 이차전지, 인공지능의 초격차 우위를 선점하여 기술 주권을 확립하고 글로벌 G3 강국으로 도약합시다.",
            "스마트폰은 고장 나면 버리고 새로 사면 끝납니다.",
            "기술 개발 대신 외국의 기계를 구경만 하는 것이 안전합니다."
          ],
          "answerIndex": 0,
          "explanation": "'초격차 우위 선점', '기술 주권 확립', '글로벌 G3 강국 도약'은 완벽한 최고급 C2 과학기술 담화입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'기술 주권을 확립하고 글로벌 G3 강국으로 도약해요'(Let us establish tech sovereignty and leap into a global G3 powerhouse)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "기술 주권을 확립하고 글로벌 G3 강국으로 도약해요.",
            "기술 주권을 확립하고 글로벌 G3 강국으로 도약해요"
          ],
          "explanation": "기술 주권을 + 확립하고 + 글로벌 G3 + 강국으로 + 도약해요 = 기술 주권을 확립하고 글로벌 G3 강국으로 도약해요."
        }
      ]
    }
  },
  "ko-u34-l1": {
    "id": "ko-u34-l1",
    "subject": "korean",
    "unit": 34,
    "lessonNumber": 1,
    "title": "정상회담 의전, 양자·다자 공동선언문 및 조약 체결 (Summit Diplomacy & Treaties)",
    "level": "C2",
    "objective": "단독·확대 정상회담, 공동성명(공동선언문), 비준동의안, 상호호혜 원칙 등 최고위 외교 조약 담화를 마스터한다.",
    "presentation": {
      "explanation": "국가 원수 및 정부 수반 간의 최고위 외교 회담(Summit Meeting)과 조약 체결 담화입니다.\n\n1. 정상회담 진행 구조와 의전:\n- **단독 정상회담(In-camera / Tête-à-tête Summit)**: 통역관과 핵심 배석자만 참석하여 양국 정상 간 최고 수준의 전략적 신뢰를 구축하는 비공개 회담\n- **확대 정상회담(Plenary / Expanded Summit)**: 외교·국방·산업 각료들이 배석하여 구체적인 조약 및 협정 이행 방안을 논의\n- **공동 기자회견 및 공동선언문(Joint Statement / Communiqué)**: 합의된 공동 합의안을 전 세계 언론에 공표\n\n2. 조약 체결 및 비준 절차 어휘:\n- **상호호혜(Mutual Reciprocity)와 주권 존중의 원칙**: 국가 간 대등한 주권 평등에 기초한 외교 관계 수립\n- **양해각서(MOU) vs 정식 조약(Treaty)**: 법적 구속력을 지닌 조약은 국회의 **비준동의(Ratification Consent)**를 거쳐 공포\n- **불가역적(Irreversible) 합의 도출**: 정권 교체나 정세 변화에도 되돌릴 수 없는 영구적 합의 문서화",
      "examples": [
        {
          "target": "양국 정상은 단독 및 확대 정상회담을 잇달아 개최하고 미래지향적 전략적 동반자 관계를 심화·발전시키는 역사적인 공동선언문을 채택하였습니다.",
          "reading": "Yang-guk jeongsang-eun dandok mit hwakdae jeongsanghoedam-eul itdal-a gaechoehago miraejihyangjeok jeonryakjeok dongbanja gwangye-reul simhwa·baljeonsikineun yeoksajeogin gongdongseoneonmun-eul chaetaekhayeotseumnida.",
          "translation": "The heads of state of both nations held in-camera and plenary summits in succession and adopted a historic joint declaration deepening and developing a future-oriented strategic partnership ('공동선언문을 채택하였습니다')."
        },
        {
          "target": "이번에 체결된 자유무역협정(FTA) 개정 조약은 국회의 비준동의 절차를 거쳐 양국 국민과 기업에 실질적인 번영의 혜택을 제공할 것입니다.",
          "reading": "Ibeon-e chegyeoldoen jayumuyeokhyeopjeong (FTA) gaejeong joyak-eun gukhoe-ui bijundong-ui jeolcha-reul geochyeo yang-guk gungmin-gwa gieop-e siljiljeogin beon-yeong-ui haetaek-eul jegonghal geos-imnida.",
          "translation": "The Free Trade Agreement (FTA) revision treaty signed this time will provide tangible prosperity benefits to citizens and businesses of both nations upon undergoing the National Assembly's ratification consent procedure ('국회의 비준동의 절차를 거쳐')."
        },
        {
          "target": "상호호혜와 호혜평등의 외교적 대원칙에 입각하여 글로벌 공급망 안정과 안보 협력을 공고히 하기로 합의하였습니다.",
          "reading": "Sanghohohye-wa hohye-pyeongdeung-ui oegyojoek daewonchik-e ibgakhayeo geullobeol gong-geubmang anjeong-gwa anbo hyeopryeog-eul gong-gohi hagiro hab-uihayeotseumnida.",
          "translation": "Based on the cardinal diplomatic principle of mutual reciprocity and reciprocal equality, they agreed to solidify global supply chain stability and security cooperation ('상호호혜와 호혜평등의 외교적 대원칙에 입각하여')."
        },
        {
          "target": "양국은 이견을 좁히고 항구적 평화 구축을 위한 불가역적이고 구속력 있는 합의안을 도출하는 데 성공했습니다.",
          "reading": "Yang-guk-eun igyeon-eul jobhigo hang-gujeok pyeonghwa guchuk-eul wihan bulgayeokjeog-igo gusongnyeok inneun hab-uian-eul dochulhaneun de seonggonghaetseumnida.",
          "translation": "Both countries succeeded in narrowing differences and deriving an irreversible and binding agreement for building permanent peace."
        }
      ],
      "mnemonics": [
        "단독·확대 정상회담, 공동선언문 채택, 국회 비준동의, 상호호혜 원칙!"
      ],
      "culturalNotes": [
        "대한민국 헌법 제60조 제1항에 따라 상호원조 또는 안전보장에 관한 조약, 중요한 국제조직에 관한 조약, 평화통일조약 등은 국회의 비준동의권을 거쳐야만 대통령이 비준할 수 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "양국 정상회담 후 합의된 주요 외교적 결과와 공동 비전을 문서화하여 대외에 공식 발표하는 문건은?",
          "options": [
            "공동선언문 / 공동성명",
            "개인 일기장",
            "간이 영수증"
          ],
          "answerIndex": 0,
          "explanation": "정상 간의 공식 합의 문서는 '공동선언문(Joint Declaration)' 또는 '공동성명'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "대통령이 외국의 원수와 체결한 국가 간 조약이 국내법적 효력을 갖기 위해 헌법에 따라 거쳐야 하는 의회의 절차는?",
          "options": [
            "국회 비준동의",
            "지방의회 결의",
            "동사무소 신고"
          ],
          "answerIndex": 0,
          "explanation": "조약의 국내법적 발효를 위해 필수적인 헌법상 절차는 '국회의 비준동의'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "외교 관계에서 상대방에게 베푼 혜택만큼 자신도 대등한 혜택을 돌려받는 호혜적 상호 교류 원칙을 뜻하는 용어는?",
          "options": [
            "상호호혜의 원칙",
            "일방적 굴종",
            "무조건적 양보"
          ],
          "answerIndex": 0,
          "explanation": "대등한 국가 간 대우와 상호 이익을 중시하는 원칙은 '상호호혜의 원칙'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'정상회담에서 공동선언문을 채택하고 비준동의를 마쳤어요'(We adopted a joint declaration at the summit and completed ratification consent)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "정상회담에서 공동선언문을 채택하고 비준동의를 마쳤어요.",
            "정상회담에서 공동선언문을 채택하고 비준동의를 마쳤어요"
          ],
          "explanation": "정상회담에서 + 공동선언문을 + 채택하고 + 비준동의를 + 마쳤어요 = 정상회담에서 공동선언문을 채택하고 비준동의를 마쳤어요."
        }
      ]
    }
  },
  "ko-u34-l2": {
    "id": "ko-u34-l2",
    "subject": "korean",
    "unit": 34,
    "lessonNumber": 2,
    "title": "한반도 평화 프로세스와 비핵화 및 다자 안보 협력 (Peninsula Peace & Denuclearization)",
    "level": "C2",
    "objective": "비핵·평화·번영의 한반도, CVID 비핵화 원칙, 확장억제(Extended Deterrence), 동북아 다자 안보 및 평화협정을 마스터한다.",
    "presentation": {
      "explanation": "한반도 안보 지형과 동북아 및 글로벌 비확산 체제(Non-proliferation)를 둘러싼 최고급 통일·안보 외교 담화입니다.\n\n1. 비핵화 및 안보 전략 담론:\n- **완전하고 검증 가능하며 불가역적인 비핵화(CVID)**: Complete, Verifiable, and Irreversible Denuclearization의 외교적 합의 기준\n- **확장억제(Extended Deterrence / 핵우산)**: 동맹국의 핵 전력 및 재래식 전력을 총동원하여 적대국의 도발을 원천 봉쇄하는 압도적 억제력\n- **3축 체계(Kill Chain, KAMD, KMPR)**: 한국형 킬체인, 한국형 미사일방어, 대량응징보복으로 구성된 자위적 방위력\n\n2. 평화체제와 다자 안보 협의체:\n- **정전협정(Armistice Agreement)에서 평화협정(Peace Treaty)으로의 전환**: 1953년 휴전 체제를 종식하고 항구적 평화체제를 정착시키는 국제법적 로드맵\n- **동북아 다자 안보 대화(Multilateral Security Dialogue)**: 역내 신뢰 구축 조치(CBM)와 군비 통제",
      "examples": [
        {
          "target": "정부는 굳건한 한미동맹의 연합 방위 태세와 압도적인 확장억제력을 바탕으로 한반도의 비핵·평화·번영을 흔들림 없이 구현해 나갈 것입니다.",
          "reading": "Jeongbu-neun gutgeonhan Han-Mi dongmaeng-ui yeonhap bang-wi taese-wa apdojeogin hwakjang-eokjeryeog-eul batangg-euro Hanbando-ui bihaek·pyeonghwa·beon-yeong-eul heundeullim eopsi guhyeonhae nagal geos-imnida.",
          "translation": "The government will steadfastly realize the denuclearization, peace, and prosperity of the Korean Peninsula based on the solid ROK-US alliance's combined defense posture and overwhelming extended deterrence ('비핵·평화·번영을 흔들림 없이 구현해 나갈 것입니다')."
        },
        {
          "target": "국제사회와 긴밀히 공조하여 완전하고 검증 가능하며 불가역적인 비핵화(CVID)를 추진하고 북핵 위협의 근원적 해결을 위해 총력을 기울이고 있습니다.",
          "reading": "Gukjesahoe-wa ginmilhi gongjohayeo wanjeonhago geomjeung ganeunghamyeo bulgayeokjeogin bihaekhwa (CVID)-reul chujinhago bukhaek wiheop-ui geunwonjeok haegyeol-eul wihae chongryeog-eul gi-urigo itseumnida.",
          "translation": "In close cooperation with the international community, they are pushing forward complete, verifiable, and irreversible denuclearization (CVID) and devoting all efforts to the fundamental resolution of the North Korean nuclear threat."
        },
        {
          "target": "불안정한 정전 체제를 영구적인 평화체제로 전환하기 위한 단계적 군사적 신뢰 구축과 다자 안보 대화가 절실히 요구됩니다.",
          "reading": "Buranjeonghan jeongjeon cheje-reul yeong-gujeogin pyeonghwacheje-ro jeonhwanhagi wihan dangyejeok gunsajeok sinroe guchuk-gwa daja anbo daehwa-ga jeolsilhi yogudoemnida.",
          "translation": "Step-by-step military confidence building and multilateral security dialogue are desperately needed to transition the unstable armistice regime into a permanent peace regime ('평화체제로 전환하기 위한')."
        },
        {
          "target": "한국형 3축 체계의 고도화를 통해 어떠한 무력 도발에도 즉각적이고 단호하게 응징할 수 있는 강력한 자주국방 역량을 완비하였습니다.",
          "reading": "Hangukhyeong sam-chuk chegye-ui godohwa-reul tonghae eotteohan muryeok dobal-eedo jeukgakjeog-igo danhohage eungjinghal su inneun gangnyeokhan jajugukbang yeongryang-eul wanbihayeotseumnida.",
          "translation": "Through advancing the Korean 3-axis system, we completely equipped a strong self-reliant national defense capability capable of immediately and resolutely retaliating against any armed provocation."
        }
      ],
      "mnemonics": [
        "비핵·평화·번영, CVID 원칙, 확장억제 안보, 정전체제에서 평화협정으로!"
      ],
      "culturalNotes": [
        "한반도는 전 세계 유일의 분단국가이자 정전(Armistice) 상태에 놓여 있어, 한미 상호방위조약과 유엔군사령부(UNC)의 정전 관리 체제가 평화 유지의 핵심 기둥으로 작동합니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "동맹국이 핵 공격 위협을 받을 때 자국의 본토와 동일한 수준의 핵 전력과 재래식 전력으로 적을 억제해 주는 안보 공약은?",
          "options": [
            "확장억제",
            "무장해제",
            "고립주의"
          ],
          "answerIndex": 0,
          "explanation": "동맹국에 대한 핵우산 및 압도적 방위력 제공 공약을 '확장억제'라고 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "국제사회가 북핵 및 대량살상무기 폐기의 기준으로 제시하는 '완전하고 검증 가능하며 불가역적인 비핵화'의 영문 약칭은?",
          "options": [
            "CVID",
            "COVID",
            "OECD"
          ],
          "answerIndex": 0,
          "explanation": "완전하고 검증 가능하며 불가역적인 비핵화는 'CVID'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "1953년 체결된 임시 교전 중단 상태인 '정전협정'을 영구적으로 종식시키고 법적 평화를 완성하는 조약은?",
          "options": [
            "평화협정",
            "임대차계약서",
            "비밀유지협약"
          ],
          "answerIndex": 0,
          "explanation": "전쟁을 공식 종결하고 평화를 법적으로 완성하는 문건은 '평화협정'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'확장억제력을 강화하고 한반도 평화체제를 구축했어요'(We strengthened extended deterrence and built a Korean Peninsula peace regime)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "확장억제력을 강화하고 한반도 평화체제를 구축했어요.",
            "확장억제력을 강화하고 한반도 평화체제를 구축했어요"
          ],
          "explanation": "확장억제력을 + 강화하고 + 한반도 + 평화체제를 + 구축했어요 = 확장억제력을 강화하고 한반도 평화체제를 구축했어요."
        }
      ]
    }
  },
  "ko-u34-l3": {
    "id": "ko-u34-l3",
    "subject": "korean",
    "unit": 34,
    "lessonNumber": 3,
    "title": "글로벌 중추국가(GPS) 비전과 국제기구 다자 외교 담론 (Global Pivotal State & Multilateralism)",
    "level": "C2",
    "objective": "글로벌 중추국가(GPS), 유엔 안보리 이사국 외교, ODA 공여국 위상, 녹색 사다리 이니셔티브, 국제 규범 수호를 마스터한다.",
    "presentation": {
      "explanation": "원조를 받던 수혜국에서 원조를 주는 공여국으로 거듭난 대한민국이 국제사회에서 자유, 평화, 번영에 기여하는 '글로벌 중추국가(Global Pivotal State, GPS)' 다자 외교 담화입니다.\n\n1. 글로벌 리더십과 국제기구 활동:\n- **글로벌 중추국가(GPS, Global Pivotal State)**: 한반도를 넘어 인도·태평양과 전 세계의 자유 민주주의, 인권, 법치 등 보편적 가치를 수호하고 기여하는 국가 비전\n- **유엔 안전보장이사회(UNSC) 비상임이사국 수임**: 국제 평화와 안보 유지의 최고 의사결정 기구에서 주도적 발언권 행사\n- **공적개발원조(ODA, Official Development Assistance)**: 개도국 대상 보건, 교육, 디지털 전환 지원 확대\n\n2. 글로벌 연대와 기후 외교:\n- **녹색 사다리(Green Ladder) 이니셔티브**: 기후 취약국에 한국의 녹색 기술과 재정을 전수하여 기후 격차를 해소\n- **규범 기반 국제 질서(Rules-based International Order) 수호**: 힘에 의한 현상 변경에 반대하고 국제법적 규범을 확립",
      "examples": [
        {
          "target": "대한민국은 자유, 평화, 번영에 기여하는 글로벌 중추국가(GPS)로서 규범 기반 국제 질서를 수호하는 데 선도적 책임을 다할 것입니다.",
          "reading": "Daehanminguk-eun jayu, pyeonghwa, beon-yeong-e giyeohaneun geullobeol jungchugukga (GPS)-rosseo gyubeom giban gukje jilseo-reul suhohaneun de seondojeok chaegim-eul dahal geos-imnida.",
          "translation": "The Republic of Korea, as a Global Pivotal State (GPS) contributing to freedom, peace, and prosperity, will fulfill its leading responsibility in upholding the rules-based international order ('글로벌 중추국가로서 선도적 책임을 다할 것입니다')."
        },
        {
          "target": "유엔 안보리 비상임이사국으로서 분쟁 예방과 평화 구축, 그리고 사이버 안보 등 신흥 안보 위협 대응에 주도적인 역할을 수행하고 있습니다.",
          "reading": "Yuen anbori bisang-im-isaguk-euroseo bunjaeng yebang-gwa pyeonghwa guchuk, geurigo saibeo anbo deung sinheung anbo wiheop dae-eung-e judojeogin yeokhwal-eul suhaenghago itseumnida.",
          "translation": "As a non-permanent member of the UN Security Council, we are playing a leading role in conflict prevention, peacebuilding, and responding to emerging security threats such as cyber security."
        },
        {
          "target": "원조를 받던 나라에서 원조를 주는 공여국으로 성장한 경험을 살려 공적개발원조(ODA) 규모를 대폭 확대하고 개발도상국의 자립을 돕고 있습니다.",
          "reading": "Wonjo-reul batdeon nara-eseo wonjo-reul juneun gong-yeoguk-euro seongjanghan gyeongheom-eul sallyeo gongjeokgaebalwonjo (ODA) gyumo-reul daepok hwakdaehago gaebaldosangguk-ui jarib-eul dopgo itseumnida.",
          "translation": "Drawing upon our experience growing from an aid recipient into an aid donor country, we are substantially expanding the scale of Official Development Assistance (ODA) and aiding developing nations' self-reliance ('공적개발원조 규모를 대폭 확대하고')."
        },
        {
          "target": "녹색 사다리 이니셔티브를 통해 기후 취약국들에게 친환경 에너지 인프라와 재정적 지원을 제공함으로써 기후 격차를 해소해 나갑니다.",
          "reading": "Noksaek sadari inisyeotibeu-reul tonghae gihu chwiyakguk-deul-ege chinhoangyeong eneoji inpeura-wa jaejeongjeok jiwon-eul jegongham-euroseo gihu gyeokcha-reul haesohae nagamnida.",
          "translation": "Through the Green Ladder Initiative, we resolve climate gaps by providing eco-friendly energy infrastructure and financial support to climate-vulnerable countries."
        }
      ],
      "mnemonics": [
        "글로벌 중추국가(GPS), 규범 기반 국제 질서, ODA 공여국, 녹색 사다리 기후 연대!"
      ],
      "culturalNotes": [
        "한국은 2009년 OECD 개발원조위원회(DAC)에 가입하며 제2차 세계대전 이후 원조 수혜국에서 공식 공여국으로 지위가 전환된 세계 최초이자 유일한 국가입니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "자유, 평화, 번영의 보편적 가치를 바탕으로 국제사회에 적극 기여하는 대한민국의 21세기 외교 비전 명칭은?",
          "options": [
            "글로벌 중추국가",
            "쇄국정책",
            "일방주의"
          ],
          "answerIndex": 0,
          "explanation": "국제사회의 자유와 번영에 능동적으로 기여하는 외교 비전은 '글로벌 중추국가(GPS)'입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "정부나 공공기관이 개발도상국의 경제 발전과 사회 복지 증진을 위해 무상 또는 유상으로 제공하는 자금 원조는?",
          "options": [
            "공적개발원조",
            "외환보유액",
            "법인세"
          ],
          "answerIndex": 0,
          "explanation": "개도국을 위한 정부 차원의 대외 원조는 '공적개발원조(ODA)'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "기후 위기에 취약한 개도국들에게 대한민국의 녹색 기술과 재정을 지원하여 기후 격차를 완화하는 외교 구상은?",
          "options": [
            "녹색 사다리 이니셔티브",
            "화석연료 보조금 비전과 국제기구 다자 외교 담론",
            "삼림 벌채 계획 비전과 국제기구 다자 외교 담론"
          ],
          "answerIndex": 0,
          "explanation": "기후 취약국 지원을 위한 한국의 글로벌 기후 연대 구상은 '녹색 사다리 이니셔티브'입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'글로벌 중추국가로서 규범 기반 국제 질서를 수호해요'(As a Global Pivotal State, let us defend the rules-based international order)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "글로벌 중추국가로서 규범 기반 국제 질서를 수호해요.",
            "글로벌 중추국가로서 규범 기반 국제 질서를 수호해요"
          ],
          "explanation": "글로벌 중추국가로서 + 규범 기반 + 국제 질서를 + 수호해요 = 글로벌 중추국가로서 규범 기반 국제 질서를 수호해요."
        }
      ]
    }
  },
  "ko-u34-l4": {
    "id": "ko-u34-l4",
    "subject": "korean",
    "unit": 34,
    "lessonNumber": 4,
    "title": "국가 수반의 최고급 통치 수사와 대국민 연설 문형 (Executive Statecraft Rhetoric)",
    "level": "C2",
    "objective": "국운을 융성하게 하다, 명운을 걸다, 역사의 엄중한 심판, 헌정 질서 수호 등 국가 최고 지도자 통치 수사를 완성한다.",
    "presentation": {
      "explanation": "대통령 취임사, 광복절 경축사, 3·1절 기념사, 국회 예산안 시정연설에서 쓰이는 대한민국 국가 지도자의 장엄하고 격조 높은 통치 수사(Executive Rhetoric)입니다.\n\n1. 국가적 소명과 역사성 표지:\n- **국운(國運)을 융성(隆盛)하게 하다**: 나라의 운명과 번영을 크게 일으켜 세우다\n- **국가의 명운(命運)을 걸다**: 국가의 사활이 걸린 일에 모든 역량을 결집하다\n- **역사의 엄중한 심판대 앞에 서다**: 역사와 국민에 대한 무한 책임을 엄숙히 표명할 때\n- **헌정 질서를 굳건히 수호하다**: 헌법에 기초한 법치주의와 자유민주주의 헌법 질서를 수호할 때\n\n2. 비전 선포 및 대국민 헌신 문형:\n- **자유와 번영의 새 시대를 활짝 열어젖히다**: 획기적인 국가 도약의 새 시대를 시작할 때\n- **삼가 국민 여러분께 엎드려 아뢰옵니다 / 분골쇄신(粉骨碎身)하여 헌신하겠습니다**: 국민을 주인으로 섬기는 극존칭의 헌신 다짐",
      "examples": [
        {
          "target": "저는 헌법을 준수하고 국가를 보위하며 조국의 평화적 통일과 국민의 자유와 복리의 증진을 위해 대통령으로서의 직책을 성실히 수행할 것을 엄숙히 선서합니다.",
          "reading": "Jeo-neun heonbeop-eul junsuhago gukga-reul bowihamyeo joguk-ui pyeonghwajeok tong-il-gwa gungmin-ui jayu-wa bongni-ui jeungjin-eul wihae daetongryeong-euroseo-ui jikchaek-eul seongsilhi suhaenghal geos-eul eomsukhi seonseohamnida.",
          "translation": "I solemnly swear that I will faithfully perform the duties of the President by observing the Constitution, defending the State, pursuing the peaceful unification of the fatherland, and promoting the freedom and welfare of the people ('대통령 취임 선서문')."
        },
        {
          "target": "오늘 우리는 위대한 국민과 함께 담대한 용기로 불굴의 도전을 시작하여 국운을 융성하게 하고 자유와 번영의 새 시대를 활짝 열어젖힐 것입니다.",
          "reading": "Oneul uri-neun widaehan gungmin-gwa hamkke damdaehan yonggi-ro bulgul-ui dojeon-eul sijakhayeo gukun-eul yungseonghage hago jayu-wa beon-yeong-ui sae sidae-reul hwaljjak yeoreojeochil geos-imnida.",
          "translation": "Today, together with our great people, we will embark upon an indomitable challenge with bold courage, making the nation's fortunes flourish ('국운을 융성하게 하고') and throwing wide open a new era of freedom and prosperity ('새 시대를 활짝 열어젖힐 것입니다')."
        },
        {
          "target": "역사의 엄중한 심판대 앞에서 오직 국민만을 바라보며 국가 미래 100년의 초석을 놓는 개혁에 정권의 명운을 걸고 매진하겠습니다.",
          "reading": "Yeoksa-ui eomjunghan simpandae ap-eseo ojik gungminman-eul barabomyeo gukga mirae baek-nyeon-ui choseog-eul noneun gaehyeog-e jeonggwon-ui myeong-un-eul geolgo maejinhagessseumnida.",
          "translation": "Before the solemn judgment seat of history, looking solely toward the people, I will dedicate myself, staking the administration's destiny ('정권의 명운을 걸고') on reforms laying the cornerstone for the nation's next 100 years."
        },
        {
          "target": "선열들의 숭고한 희생으로 지켜낸 자유민주주의 헌정 질서를 굳건히 수호하고 미래 세대에게 정의롭고 찬란한 조국을 물려줍시다.",
          "reading": "Seonyeoldeul-ui sunggohan huisaeng-euro jikyeonaen jayuminjuju-ui heonjeong jilseo-reul gutgeonhi suhohago mirae sedae-ege jeong-uiropgo challanhan joguk-eul mulryeojubpsida.",
          "translation": "Let us firmly defend the liberal democratic constitutional order preserved by the patriots' sublime sacrifices and hand down a just and brilliant fatherland to future generations."
        }
      ],
      "mnemonics": [
        "취임 선서: 헌법 준수, 국운 융성, 명운을 건 개혁, 자유와 번영의 새 시대!"
      ],
      "culturalNotes": [
        "대한민국 헌법 제69조는 대통령 취임 선서문을 규정하고 있으며, 대통령의 공식 연설문은 국정 철학과 시대정신을 담아내는 한국 최고 수준의 문장론으로 다루어집니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "국가의 운명과 번영을 크게 일으키고 번창하게 함을 뜻하는 장엄한 한자어 통치 표현은?",
          "options": [
            "국운을 융성(隆盛)하게 하다 (국가의 운명을 크게 떨쳐 일으킴을 국운을 융성하게 하다라고 합니다.)",
            "동문서답하다",
            "임시방편을 쓰다"
          ],
          "answerIndex": 0,
          "explanation": "국가의 운명을 크게 떨쳐 일으킴을 '국운을 융성하게 하다'라고 합니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "국가 지도자가 중대한 개혁 과제를 추진할 때 모든 것을 걸고 임하겠다는 결연한 의지를 나타내는 사자성어적 표현은?",
          "options": [
            "명운(命運)을 걸다 / 사활을 걸다 (목숨이나 운명을 걸고 결단하는 태도는 명운을 걸다입니다.)",
            "작심삼일로 끝내다",
            "탁상공론을 일삼다"
          ],
          "answerIndex": 0,
          "explanation": "목숨이나 운명을 걸고 결단하는 태도는 '명운을 걸다'입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "대한민국 헌법 제69조에 따른 대통령 취임 선서의 시작 문구는?",
          "options": [
            "나는 헌법을 준수하고 국가를 보위하며... (대통령 취임 선서는 나는 헌법을 준수하고 국가를 보위하며...로 시작합니다.)",
            "나는 오늘부터 일을 쉬고 놀러 가며...",
            "나는 친구들과 함께 파티를 즐기며..."
          ],
          "answerIndex": 0,
          "explanation": "대통령 취임 선서는 '나는 헌법을 준수하고 국가를 보위하며...'로 시작합니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'국운을 융성하게 하고 자유와 번영의 새 시대를 열었어요'(We made national fortunes flourish and opened a new era of freedom and prosperity)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "국운을 융성하게 하고 자유와 번영의 새 시대를 열었어요.",
            "국운을 융성하게 하고 자유와 번영의 새 시대를 열었어요"
          ],
          "explanation": "국운을 융성하게 하고 + 자유와 번영의 + 새 시대를 + 열었어요 = 국운을 융성하게 하고 자유와 번영의 새 시대를 열었어요."
        }
      ]
    }
  },
  "ko-u34-l5": {
    "id": "ko-u34-l5",
    "subject": "korean",
    "unit": 34,
    "lessonNumber": 5,
    "title": "대통령 취임사 및 유엔 총회 기조연설 C2 최종 졸업 캡스톤 종합 실전 담화",
    "level": "C2",
    "objective": "한국어 전 교육과정(170과)의 정수를 총집대성하여 대한민국 국가 수반의 최고 통치 철학과 인류 보편 연대 C2 완결 담화를 완성한다.",
    "presentation": {
      "explanation": "대한민국 제21대 대통령 취임식 및 유엔 총회(UN General Assembly) 일반토의 기조연설에서 전 세계 인류를 향해 천명하는 한국어 최고 경지(C2 Capstone Mastery)의 완결 실전 담화 모델입니다.\n\n1. C2 캡스톤 최종 기조연설 실전 모델:\n- 국가 원수(대통령): 존경하는 국민 여러분, 750만 재외동포, 그리고 세계 각국의 정상과 귀빈 여러분. 오늘 대한민국은 **국운을 융성하게 하고**, **자유와 평화, 번영의 새 시대를 활짝 열어젖히기 위해** 이 자리에 섰습니다.\n우리는 식민지의 어둠과 전쟁의 참화를 딛고 일어나, 반도체와 인공지능이 꽃피는 **초격차 혁신 강국**이자 세계인이 함께 열광하는 문화 강국을 일구어냈습니다.\n이제 대한민국은 **글로벌 중추국가(GPS)**로서 **규범 기반 국제 질서를 수호**하고, **녹색 사다리 이니셔티브와 ODA 확대**를 통해 인류가 직면한 복합 위기를 극복하는 데 앞장설 것입니다.\n**한반도의 비핵·평화·번영**을 굳건히 다지고, **역사의 엄중한 심판대 앞**에서 오직 인류의 더 나은 내일을 위해 **모든 명운을 걸고** 전진하겠습니다.\n국민과 함께, 세계 시민과 함께 위대한 도약의 미래를 향해 힘차게 나아갑시다. 대단히 감사합니다.",
      "examples": [
        {
          "target": "대한민국은 인류의 자유와 연대를 확장하는 글로벌 중추국가로서 세계 평화와 번영의 위대한 여정을 끝까지 함께할 것입니다.",
          "reading": "Daehanminguk-eun inryu-ui jayu-wa yeondae-reul hwakdaehaneun geullobeol jungchugukga-rosseo segye pyeonghwa-wa beon-yeong-ui widaehan yeojeong-eul kkeutkkaji hamkkehal geos-imnida.",
          "translation": "The Republic of Korea, as a Global Pivotal State expanding human freedom and solidarity, will accompany the grand journey of world peace and prosperity to the end."
        },
        {
          "target": "자유와 인권, 법치라는 보편적 가치에 기반한 국제사회의 굳건한 연대야말로 평화와 번영을 지키는 가장 강력한 보루입니다.",
          "reading": "Jayu-wa in-gwon, beobchi-raneun bobyeonjeok gachi-e gibanhan gukjesahoe-ui gutgeonhan yeondae-yamallo pyeonghwa-wa beon-yeong-eul jikineun gajang gangnyeokhan boru-imnida.",
          "translation": "Solid solidarity of the international community based on universal values of freedom, human rights, and the rule of law is indeed the strongest bulwark preserving peace and prosperity."
        },
        {
          "target": "우리가 오늘 내리는 담대한 결단과 헌신은 미래 세대에게 영원히 빛나는 희망의 등불이 될 것입니다.",
          "reading": "Uri-ga oneul naerineun damdaehan gyeoldan-gwa heonsin-eun mirae sedae-ege yeong-wonhi binnaneun huimang-ui deungbul-i doel geos-imnida.",
          "translation": "The bold decisions and devotion we make today will become an eternally shining beacon of hope for future generations."
        },
        {
          "target": "위대한 국민 여러분과 전 세계 시민 여러분의 지혜와 용기에 진심으로 경의를 표하며 감사드립니다.",
          "reading": "Widaehan gungmin yeoreobun-gwa jeon segye simin yeoreobun-ui jihye-wa yonggi-e jinsim-euro gyeong-ui-reul pyohamyeo gamsadeurimnida.",
          "translation": "I express my sincere respect and deepest gratitude to the wisdom and courage of our great people and all global citizens."
        }
      ],
      "mnemonics": [
        "C2 한국어 완결: 국운 융성, 글로벌 중추국가, 자유와 연대, 영원한 번영!"
      ],
      "culturalNotes": [
        "한글 창제(세종대왕)부터 시작하여 21세기 글로벌 중추국가와 한류 문화, 첨단 테크 강국에 이르는 대한민국 5천 년 역사의 정수가 한국어 34개 단원 170개 교과 과정에 완벽히 담겨 있습니다."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "유엔 총회나 국제 정상 연설에서 한국어 최고 수준(C2 Capstone)의 비전을 가장 격조 높게 천명하는 문장은?",
          "options": [
            "자유와 평화, 번영에 기여하는 글로벌 중추국가로서 규범 기반 국제 질서를 확립하는 데 앞장서겠습니다.",
            "연설이 끝났으니 밥 먹으러 가겠습니다.",
            "외국 친구들과 사진을 찍고 기념품을 사러 가겠습니다."
          ],
          "answerIndex": 0,
          "explanation": "'글로벌 중추국가로서 규범 기반 국제 질서 확립에 앞장서겠다'는 최고 수준의 국가 수반 외교 비전 선언입니다."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "대통령 취임사에서 국민과 역사를 향한 무한한 책임과 도전을 결의할 때 가장 장엄한 C2 종결 어구는?",
          "options": [
            "역사의 엄중한 심판대 앞에서 국운을 융성하게 하고 자유와 번영의 새 시대를 활짝 열어젖히겠습니다.",
            "임기 동안 적당히 쉬다가 물러나겠습니다.",
            "남들이 하라는 대로 대충 하겠습니다."
          ],
          "answerIndex": 0,
          "explanation": "'역사의 엄중한 심판대 앞', '국운 융성', '자유와 번영의 새 시대'는 완벽한 최고위 통치 연설 문형입니다."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "한국어 170과정 전 교육을 완결하며, 대한민국 국가 지도자의 C2 최종 마스터리 선언으로 가장 완벽한 것은?",
          "options": [
            "위대한 국민과 함께 국운을 융성하게 하고 글로벌 중추국가로서 세계 평화와 번영에 영원히 기여합시다.",
            "한국어 공부가 끝났으니 이제 책을 다 버리겠습니다.",
            "글자를 모두 잊어버려도 상관없습니다."
          ],
          "answerIndex": 0,
          "explanation": "'국운 융성', '글로벌 중추국가', '세계 평화와 번영 기여'는 한국어 C2 최종 캡스톤의 완벽한 결실입니다."
        },
        {
          "type": "typed-recall",
          "prompt": "'글로벌 중추국가로서 자유와 번영의 새 시대를 완성했어요'(As a Global Pivotal State, we completed a new era of freedom and prosperity)를 한글로 정확히 입력하십시오.",
          "acceptedAnswers": [
            "글로벌 중추국가로서 자유와 번영의 새 시대를 완성했어요.",
            "글로벌 중추국가로서 자유와 번영의 새 시대를 완성했어요"
          ],
          "explanation": "글로벌 중추국가로서 + 자유와 번영의 + 새 시대를 + 완성했어요 = 글로벌 중추국가로서 자유와 번영의 새 시대를 완성했어요."
        }
      ]
    }
  }
};
  var CURRICULUM = { id: 'korean', name: "Korean", units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['korean'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
