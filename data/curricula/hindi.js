// hindi curriculum
(function (global) {
  'use strict';
  var UNITS = [
  {
    "id": "hi-u1",
    "unit": 1,
    "title": "देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings)",
    "level": "A1",
    "goal": "Mastery of नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness).",
    "lessonIds": [
      "hi-u1-l1",
      "hi-u1-l2",
      "hi-u1-l3",
      "hi-u1-l4",
      "hi-u1-l5"
    ]
  },
  {
    "id": "hi-u2",
    "unit": 2,
    "title": "संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals)",
    "level": "A1",
    "goal": "Mastery of संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules).",
    "lessonIds": [
      "hi-u2-l1",
      "hi-u2-l2",
      "hi-u2-l3",
      "hi-u2-l4",
      "hi-u2-l5"
    ]
  },
  {
    "id": "hi-u3",
    "unit": 3,
    "title": "सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions)",
    "level": "A1",
    "goal": "Mastery of सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से).",
    "lessonIds": [
      "hi-u3-l1",
      "hi-u3-l2",
      "hi-u3-l3",
      "hi-u3-l4",
      "hi-u3-l5"
    ]
  },
  {
    "id": "hi-u4",
    "unit": 4,
    "title": "सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते)",
    "level": "A1",
    "goal": "Mastery of सामान्य वर्तमान काल (Present Habitual Tense).",
    "lessonIds": [
      "hi-u4-l1",
      "hi-u4-l2",
      "hi-u4-l3",
      "hi-u4-l4",
      "hi-u4-l5"
    ]
  },
  {
    "id": "hi-u5",
    "unit": 5,
    "title": "अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे)",
    "level": "A1",
    "goal": "Mastery of वर्तमान निरंतर काल (Present Continuous: रहा/रही है).",
    "lessonIds": [
      "hi-u5-l1",
      "hi-u5-l2",
      "hi-u5-l3",
      "hi-u5-l4",
      "hi-u5-l5"
    ]
  },
  {
    "id": "hi-u6",
    "unit": 6,
    "title": "सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने)",
    "level": "A2",
    "goal": "Mastery of भूतकाल और ने परसर्ग का नियम (Simple Past with ने).",
    "lessonIds": [
      "hi-u6-l1",
      "hi-u6-l2",
      "hi-u6-l3",
      "hi-u6-l4",
      "hi-u6-l5"
    ]
  },
  {
    "id": "hi-u7",
    "unit": 7,
    "title": "पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect)",
    "level": "A2",
    "goal": "Mastery of पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous).",
    "lessonIds": [
      "hi-u7-l1",
      "hi-u7-l2",
      "hi-u7-l3",
      "hi-u7-l4",
      "hi-u7-l5"
    ]
  },
  {
    "id": "hi-u8",
    "unit": 8,
    "title": "भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite)",
    "level": "A2",
    "goal": "Mastery of भविष्यत् काल और अनुरोध (Future Tense & Polite Requests).",
    "lessonIds": [
      "hi-u8-l1",
      "hi-u8-l2",
      "hi-u8-l3",
      "hi-u8-l4",
      "hi-u8-l5"
    ]
  },
  {
    "id": "hi-u9",
    "unit": 9,
    "title": "अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए)",
    "level": "A2",
    "goal": "Mastery of चाहिए का प्रयोग (Obligation with चाहिए).",
    "lessonIds": [
      "hi-u9-l1",
      "hi-u9-l2",
      "hi-u9-l3",
      "hi-u9-l4",
      "hi-u9-l5"
    ]
  },
  {
    "id": "hi-u10",
    "unit": 10,
    "title": "मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना)",
    "level": "A2",
    "goal": "Mastery of बाध्यता पड़ना और होना (Compulsion with पड़ना).",
    "lessonIds": [
      "hi-u10-l1",
      "hi-u10-l2",
      "hi-u10-l3",
      "hi-u10-l4",
      "hi-u10-l5"
    ]
  },
  {
    "id": "hi-u11",
    "unit": 11,
    "title": "अधिकार और स्वामित्व: का/के/की एवं के पास (Possession)",
    "level": "B1",
    "goal": "Mastery of स्वामित्व का/के/की और के पास (Possession Expressions).",
    "lessonIds": [
      "hi-u11-l1",
      "hi-u11-l2",
      "hi-u11-l3",
      "hi-u11-l4",
      "hi-u11-l5"
    ]
  },
  {
    "id": "hi-u12",
    "unit": 12,
    "title": "संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs)",
    "level": "B1",
    "goal": "Mastery of संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs).",
    "lessonIds": [
      "hi-u12-l1",
      "hi-u12-l2",
      "hi-u12-l3",
      "hi-u12-l4",
      "hi-u12-l5"
    ]
  },
  {
    "id": "hi-u13",
    "unit": 13,
    "title": "संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood)",
    "level": "B1",
    "goal": "Mastery of संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood).",
    "lessonIds": [
      "hi-u13-l1",
      "hi-u13-l2",
      "hi-u13-l3",
      "hi-u13-l4",
      "hi-u13-l5"
    ]
  },
  {
    "id": "hi-u14",
    "unit": 14,
    "title": "पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles)",
    "level": "B1",
    "goal": "Mastery of कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर).",
    "lessonIds": [
      "hi-u14-l1",
      "hi-u14-l2",
      "hi-u14-l3",
      "hi-u14-l4",
      "hi-u14-l5"
    ]
  },
  {
    "id": "hi-u15",
    "unit": 15,
    "title": "संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives)",
    "level": "B1",
    "goal": "Mastery of जो...वह संबंधवाचक वाक्य (Relative Correlatives).",
    "lessonIds": [
      "hi-u15-l1",
      "hi-u15-l2",
      "hi-u15-l3",
      "hi-u15-l4",
      "hi-u15-l5"
    ]
  },
  {
    "id": "hi-u16",
    "unit": 16,
    "title": "कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice)",
    "level": "B1",
    "goal": "Mastery of कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना).",
    "lessonIds": [
      "hi-u16-l1",
      "hi-u16-l2",
      "hi-u16-l3",
      "hi-u16-l4",
      "hi-u16-l5"
    ]
  },
  {
    "id": "hi-u17",
    "unit": 17,
    "title": "प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives)",
    "level": "B2",
    "goal": "Mastery of प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना).",
    "lessonIds": [
      "hi-u17-l1",
      "hi-u17-l2",
      "hi-u17-l3",
      "hi-u17-l4",
      "hi-u17-l5"
    ]
  },
  {
    "id": "hi-u18",
    "unit": 18,
    "title": "शर्तिया और हेतुहेतुमद् वाक्य (Conditionals)",
    "level": "B2",
    "goal": "Mastery of यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो).",
    "lessonIds": [
      "hi-u18-l1",
      "hi-u18-l2",
      "hi-u18-l3",
      "hi-u18-l4",
      "hi-u18-l5"
    ]
  },
  {
    "id": "hi-u19",
    "unit": 19,
    "title": "अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech)",
    "level": "B2",
    "goal": "Mastery of कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि).",
    "lessonIds": [
      "hi-u19-l1",
      "hi-u19-l2",
      "hi-u19-l3",
      "hi-u19-l4",
      "hi-u19-l5"
    ]
  },
  {
    "id": "hi-u20",
    "unit": 20,
    "title": "व्यावसायिक हिंदी और पत्राचार (Corporate Hindi)",
    "level": "B2",
    "goal": "Mastery of व्यावसायिक संवाद और पत्राचार (Corporate Hindi).",
    "lessonIds": [
      "hi-u20-l1",
      "hi-u20-l2",
      "hi-u20-l3",
      "hi-u20-l4",
      "hi-u20-l5"
    ]
  },
  {
    "id": "hi-u21",
    "unit": 21,
    "title": "स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi)",
    "level": "B2",
    "goal": "Mastery of चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi).",
    "lessonIds": [
      "hi-u21-l1",
      "hi-u21-l2",
      "hi-u21-l3",
      "hi-u21-l4",
      "hi-u21-l5"
    ]
  },
  {
    "id": "hi-u22",
    "unit": 22,
    "title": "भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality)",
    "level": "B2",
    "goal": "Mastery of भारतीय खानपान और आतिथ्य (Cuisine & Hospitality).",
    "lessonIds": [
      "hi-u22-l1",
      "hi-u22-l2",
      "hi-u22-l3",
      "hi-u22-l4",
      "hi-u22-l5"
    ]
  },
  {
    "id": "hi-u23",
    "unit": 23,
    "title": "सिनेमा, संगीत और कला समीक्षा (Cinema & Arts)",
    "level": "B2",
    "goal": "Mastery of सिनेमा और भारतीय संगीत (Cinema & Arts Criticism).",
    "lessonIds": [
      "hi-u23-l1",
      "hi-u23-l2",
      "hi-u23-l3",
      "hi-u23-l4",
      "hi-u23-l5"
    ]
  },
  {
    "id": "hi-u24",
    "unit": 24,
    "title": "बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance)",
    "level": "B2",
    "goal": "Mastery of बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance).",
    "lessonIds": [
      "hi-u24-l1",
      "hi-u24-l2",
      "hi-u24-l3",
      "hi-u24-l4",
      "hi-u24-l5"
    ]
  },
  {
    "id": "hi-u25",
    "unit": 25,
    "title": "पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture)",
    "level": "C1",
    "goal": "Mastery of कृषि, पर्यावरण और मानसून (Ecology & Agriculture).",
    "lessonIds": [
      "hi-u25-l1",
      "hi-u25-l2",
      "hi-u25-l3",
      "hi-u25-l4",
      "hi-u25-l5"
    ]
  },
  {
    "id": "hi-u26",
    "unit": 26,
    "title": "संवैधानिक शासन और विधिक शब्दावली (Constitutional Law)",
    "level": "C1",
    "goal": "Mastery of संविधान और विधिक शब्दावली (Constitutional Law).",
    "lessonIds": [
      "hi-u26-l1",
      "hi-u26-l2",
      "hi-u26-l3",
      "hi-u26-l4",
      "hi-u26-l5"
    ]
  },
  {
    "id": "hi-u27",
    "unit": 27,
    "title": "हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics)",
    "level": "C1",
    "goal": "Mastery of हिंदी साहित्य और काव्य (Hindi Literature & Poetry).",
    "lessonIds": [
      "hi-u27-l1",
      "hi-u27-l2",
      "hi-u27-l3",
      "hi-u27-l4",
      "hi-u27-l5"
    ]
  },
  {
    "id": "hi-u28",
    "unit": 28,
    "title": "पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media)",
    "level": "C1",
    "goal": "Mastery of पत्रकारिता और मीडिया विमर्श (Journalism & Editorial).",
    "lessonIds": [
      "hi-u28-l1",
      "hi-u28-l2",
      "hi-u28-l3",
      "hi-u28-l4",
      "hi-u28-l5"
    ]
  },
  {
    "id": "hi-u29",
    "unit": 29,
    "title": "दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics)",
    "level": "C1",
    "goal": "Mastery of भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics).",
    "lessonIds": [
      "hi-u29-l1",
      "hi-u29-l2",
      "hi-u29-l3",
      "hi-u29-l4",
      "hi-u29-l5"
    ]
  },
  {
    "id": "hi-u30",
    "unit": 30,
    "title": "वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse)",
    "level": "C1",
    "goal": "Mastery of वैज्ञानिक शोध और तकनीक (Scientific Research).",
    "lessonIds": [
      "hi-u30-l1",
      "hi-u30-l2",
      "hi-u30-l3",
      "hi-u30-l4",
      "hi-u30-l5"
    ]
  },
  {
    "id": "hi-u31",
    "unit": 31,
    "title": "दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics)",
    "level": "C2",
    "goal": "Mastery of भू-राजनीति और विदेश नीति (Geopolitics & Policy).",
    "lessonIds": [
      "hi-u31-l1",
      "hi-u31-l2",
      "hi-u31-l3",
      "hi-u31-l4",
      "hi-u31-l5"
    ]
  },
  {
    "id": "hi-u32",
    "unit": 32,
    "title": "राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy)",
    "level": "C2",
    "goal": "Mastery of राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties).",
    "lessonIds": [
      "hi-u32-l1",
      "hi-u32-l2",
      "hi-u32-l3",
      "hi-u32-l4",
      "hi-u32-l5"
    ]
  },
  {
    "id": "hi-u33",
    "unit": 33,
    "title": "उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms)",
    "level": "C2",
    "goal": "Mastery of मुहावरे और लोकोक्तियां (Idioms & Proverbs).",
    "lessonIds": [
      "hi-u33-l1",
      "hi-u33-l2",
      "hi-u33-l3",
      "hi-u33-l4",
      "hi-u33-l5"
    ]
  },
  {
    "id": "hi-u34",
    "unit": 34,
    "title": "शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft)",
    "level": "C2",
    "goal": "Mastery of शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft).",
    "lessonIds": [
      "hi-u34-l1",
      "hi-u34-l2",
      "hi-u34-l3",
      "hi-u34-l4",
      "hi-u34-l5"
    ]
  }
];
  var LESSONS = {
  "hi-u1-l1": {
    "id": "hi-u1-l1",
    "subject": "hindi",
    "unit": 1,
    "lessonNumber": 1,
    "title": "देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) (Part 1)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for देवनागरी लिपि और प्रारंभिक शिष्टाचार with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "नमस्ते, आप कैसे हैं?",
          "reading": "namaste, aap kaise hain? [nəməsteː, aːp kɛːseː hɛ̃ː] (NUH-muh-stay, AHP KY-say HYN)",
          "translation": "Hello, how are you?"
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 1-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"नमस्ते\":",
          "options": [
            "नमस्ते, आप कैसे हैं?",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («धन्यवाद» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कृपया» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अलविदा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"नमस्ते\":",
          "options": [
            "नमस्ते, आप कैसे हैं?",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कृपया» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अलविदा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («धन्यवाद» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"नमस्ते\": Which sentence is completely correct?",
          "options": [
            "नमस्ते, आप कैसे हैं?",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अलविदा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («धन्यवाद» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कृपया» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u1-l2": {
    "id": "hi-u1-l2",
    "subject": "hindi",
    "unit": 1,
    "lessonNumber": 2,
    "title": "देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) (Part 2)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for व्यक्तिगत परिचय और नाम पूछना with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "मेरा नाम राहुल है, आपसे मिलकर बहुत खुशी हुई।",
          "reading": "meraa naam rahul hai, aapse milkar bahut khushi hui [meːraː naːm raːɦʊl hɛː] (MAY-rah NAHM)",
          "translation": "My name is Rahul, very pleased to meet you."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 1-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"धन्यवाद\":",
          "options": [
            "मेरा नाम राहुल है, आपसे मिलकर बहुत खुशी हुई।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कृपया» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अलविदा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («माफ़ कीजिए» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"धन्यवाद\":",
          "options": [
            "मेरा नाम राहुल है, आपसे मिलकर बहुत खुशी हुई।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अलविदा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («माफ़ कीजिए» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कृपया» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"धन्यवाद\": Which sentence is completely correct?",
          "options": [
            "मेरा नाम राहुल है, आपसे मिलकर बहुत खुशी हुई।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («माफ़ कीजिए» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कृपया» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अलविदा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u1-l3": {
    "id": "hi-u1-l3",
    "subject": "hindi",
    "unit": 1,
    "lessonNumber": 3,
    "title": "देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) (Part 3)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for आभार प्रदर्शन और धन्यवाद with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "आपकी इस मदद के लिए बहुत-बहुत धन्यवाद।",
          "reading": "aapki is madad ke liye bahut-bahut dhanyavaad [aːpkiː ɪs məd̪əd̪ keː lɪjeː d̪ʱənjəʋaːd̪] (DHUN-yuh-vahd)",
          "translation": "Thank you very much for this assistance."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 1-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"कृपया\":",
          "options": [
            "आपकी इस मदद के लिए बहुत-बहुत धन्यवाद।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अलविदा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («माफ़ कीजिए» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («शुभकामनाएँ» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"कृपया\":",
          "options": [
            "आपकी इस मदद के लिए बहुत-बहुत धन्यवाद।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («माफ़ कीजिए» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («शुभकामनाएँ» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अलविदा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"कृपया\": Which sentence is completely correct?",
          "options": [
            "आपकी इस मदद के लिए बहुत-बहुत धन्यवाद।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («शुभकामनाएँ» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अलविदा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («माफ़ कीजिए» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u1-l4": {
    "id": "hi-u1-l4",
    "subject": "hindi",
    "unit": 1,
    "lessonNumber": 4,
    "title": "देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) (Part 4)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for क्षमा याचना और औपचारिक निवेदन with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "माफ़ कीजिए, क्या आप मुझे रास्ता बता सकते हैं?",
          "reading": "maaf kijiye, kya aap mujhe raasta bata sakte hain? [maːf kiːdʒɪjeː] (MAHF KEE-jee-yay)",
          "translation": "Excuse me, could you tell me the way?"
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 1-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"अलविदा\":",
          "options": [
            "माफ़ कीजिए, क्या आप मुझे रास्ता बता सकते हैं?",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («माफ़ कीजिए» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («शुभकामनाएँ» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्वागत» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"अलविदा\":",
          "options": [
            "माफ़ कीजिए, क्या आप मुझे रास्ता बता सकते हैं?",
            "लिंग-वचन समन्वय का असंगत प्रयोग («शुभकामनाएँ» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्वागत» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («माफ़ कीजिए» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"अलविदा\": Which sentence is completely correct?",
          "options": [
            "माफ़ कीजिए, क्या आप मुझे रास्ता बता सकते हैं?",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्वागत» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («माफ़ कीजिए» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («शुभकामनाएँ» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u1-l5": {
    "id": "hi-u1-l5",
    "subject": "hindi",
    "unit": 1,
    "lessonNumber": 5,
    "title": "देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) (Part 5)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for विदाई और पुनः मिलने की आशा with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "अलविदा, कल सुबह कार्यालय में मिलते हैं।",
          "reading": "alvida, kal subah kaaryalay mein milte hain [əlwɪd̪aː, kəl sʊbəh] (uhl-vee-DAH)",
          "translation": "Goodbye, see you tomorrow morning at the office."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 1-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"माफ़ कीजिए\":",
          "options": [
            "अलविदा, कल सुबह कार्यालय में मिलते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («शुभकामनाएँ» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्वागत» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नाश्ता» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"माफ़ कीजिए\":",
          "options": [
            "अलविदा, कल सुबह कार्यालय में मिलते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्वागत» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नाश्ता» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («शुभकामनाएँ» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"माफ़ कीजिए\": Which sentence is completely correct?",
          "options": [
            "अलविदा, कल सुबह कार्यालय में मिलते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नाश्ता» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («शुभकामनाएँ» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्वागत» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u2-l1": {
    "id": "hi-u2-l1",
    "subject": "hindi",
    "unit": 2,
    "lessonNumber": 1,
    "title": "संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) (Part 1)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 2.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 2.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 2."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 2-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"शुभकामनाएँ\":",
          "options": [
            "हम इस पाठ में इकाई 2.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्वागत» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नाश्ता» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दोपहर का खाना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"शुभकामनाएँ\":",
          "options": [
            "हम इस पाठ में इकाई 2.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नाश्ता» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दोपहर का खाना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्वागत» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"शुभकामनाएँ\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 2.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दोपहर का खाना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्वागत» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नाश्ता» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u2-l2": {
    "id": "hi-u2-l2",
    "subject": "hindi",
    "unit": 2,
    "lessonNumber": 2,
    "title": "संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) (Part 2)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 2.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 2.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 2."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 2-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"स्वागत\":",
          "options": [
            "हम इस पाठ में इकाई 2.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नाश्ता» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दोपहर का खाना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रात का खाना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"स्वागत\":",
          "options": [
            "हम इस पाठ में इकाई 2.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दोपहर का खाना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रात का खाना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नाश्ता» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"स्वागत\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 2.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रात का खाना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नाश्ता» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दोपहर का खाना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u2-l3": {
    "id": "hi-u2-l3",
    "subject": "hindi",
    "unit": 2,
    "lessonNumber": 3,
    "title": "संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) (Part 3)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 2.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 2.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 2."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 2-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"नाश्ता\":",
          "options": [
            "हम इस पाठ में इकाई 2.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दोपहर का खाना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रात का खाना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पानी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"नाश्ता\":",
          "options": [
            "हम इस पाठ में इकाई 2.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रात का खाना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पानी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दोपहर का खाना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"नाश्ता\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 2.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पानी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दोपहर का खाना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रात का खाना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u2-l4": {
    "id": "hi-u2-l4",
    "subject": "hindi",
    "unit": 2,
    "lessonNumber": 4,
    "title": "संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) (Part 4)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 2.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 2.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 2."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 2-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"दोपहर का खाना\":",
          "options": [
            "हम इस पाठ में इकाई 2.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रात का खाना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पानी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दूध» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"दोपहर का खाना\":",
          "options": [
            "हम इस पाठ में इकाई 2.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पानी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दूध» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रात का खाना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"दोपहर का खाना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 2.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दूध» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रात का खाना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पानी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u2-l5": {
    "id": "hi-u2-l5",
    "subject": "hindi",
    "unit": 2,
    "lessonNumber": 5,
    "title": "संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) (Part 5)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 2.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 2.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 2."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 2-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"रात का खाना\":",
          "options": [
            "हम इस पाठ में इकाई 2.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पानी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दूध» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («चाय» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"रात का खाना\":",
          "options": [
            "हम इस पाठ में इकाई 2.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दूध» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («चाय» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पानी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"रात का खाना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 2.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («चाय» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पानी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दूध» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u3-l1": {
    "id": "hi-u3-l1",
    "subject": "hindi",
    "unit": 3,
    "lessonNumber": 1,
    "title": "सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) (Part 1)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 3.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 3.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 3."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 3-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"पानी\":",
          "options": [
            "हम इस पाठ में इकाई 3.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दूध» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («चाय» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रोटी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"पानी\":",
          "options": [
            "हम इस पाठ में इकाई 3.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («चाय» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रोटी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दूध» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"पानी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 3.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रोटी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दूध» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («चाय» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u3-l2": {
    "id": "hi-u3-l2",
    "subject": "hindi",
    "unit": 3,
    "lessonNumber": 2,
    "title": "सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) (Part 2)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 3.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 3.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 3."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 3-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"दूध\":",
          "options": [
            "हम इस पाठ में इकाई 3.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («चाय» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रोटी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («चावल» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"दूध\":",
          "options": [
            "हम इस पाठ में इकाई 3.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रोटी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («चावल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («चाय» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"दूध\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 3.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («चावल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («चाय» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रोटी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u3-l3": {
    "id": "hi-u3-l3",
    "subject": "hindi",
    "unit": 3,
    "lessonNumber": 3,
    "title": "सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) (Part 3)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 3.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 3.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 3."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 3-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"चाय\":",
          "options": [
            "हम इस पाठ में इकाई 3.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रोटी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («चावल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दाल» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"चाय\":",
          "options": [
            "हम इस पाठ में इकाई 3.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («चावल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दाल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रोटी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"चाय\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 3.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दाल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रोटी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («चावल» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u3-l4": {
    "id": "hi-u3-l4",
    "subject": "hindi",
    "unit": 3,
    "lessonNumber": 4,
    "title": "सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) (Part 4)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 3.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 3.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 3."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 3-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"रोटी\":",
          "options": [
            "हम इस पाठ में इकाई 3.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («चावल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दाल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सब्ज़ी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"रोटी\":",
          "options": [
            "हम इस पाठ में इकाई 3.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दाल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सब्ज़ी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («चावल» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"रोटी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 3.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सब्ज़ी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («चावल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दाल» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u3-l5": {
    "id": "hi-u3-l5",
    "subject": "hindi",
    "unit": 3,
    "lessonNumber": 5,
    "title": "सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) (Part 5)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 3.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 3.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 3."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 3-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"चावल\":",
          "options": [
            "हम इस पाठ में इकाई 3.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दाल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सब्ज़ी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («फल» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"चावल\":",
          "options": [
            "हम इस पाठ में इकाई 3.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सब्ज़ी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («फल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दाल» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"चावल\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 3.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («फल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दाल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सब्ज़ी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u4-l1": {
    "id": "hi-u4-l1",
    "subject": "hindi",
    "unit": 4,
    "lessonNumber": 1,
    "title": "सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) (Part 1)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 4.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 4.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 4."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 4-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"दाल\":",
          "options": [
            "हम इस पाठ में इकाई 4.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सब्ज़ी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («फल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मिठाई» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"दाल\":",
          "options": [
            "हम इस पाठ में इकाई 4.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («फल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मिठाई» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सब्ज़ी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"दाल\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 4.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मिठाई» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सब्ज़ी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («फल» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u4-l2": {
    "id": "hi-u4-l2",
    "subject": "hindi",
    "unit": 4,
    "lessonNumber": 2,
    "title": "सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) (Part 2)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 4.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 4.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 4."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 4-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"सब्ज़ी\":",
          "options": [
            "हम इस पाठ में इकाई 4.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («फल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मिठाई» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मसाला» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"सब्ज़ी\":",
          "options": [
            "हम इस पाठ में इकाई 4.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मिठाई» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मसाला» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («फल» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"सब्ज़ी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 4.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मसाला» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («फल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मिठाई» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u4-l3": {
    "id": "hi-u4-l3",
    "subject": "hindi",
    "unit": 4,
    "lessonNumber": 3,
    "title": "सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) (Part 3)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 4.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 4.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 4."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 4-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"फल\":",
          "options": [
            "हम इस पाठ में इकाई 4.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मिठाई» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मसाला» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («गाड़ी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"फल\":",
          "options": [
            "हम इस पाठ में इकाई 4.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मसाला» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («गाड़ी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मिठाई» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"फल\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 4.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («गाड़ी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मिठाई» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मसाला» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u4-l4": {
    "id": "hi-u4-l4",
    "subject": "hindi",
    "unit": 4,
    "lessonNumber": 4,
    "title": "सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) (Part 4)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 4.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 4.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 4."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 4-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"मिठाई\":",
          "options": [
            "हम इस पाठ में इकाई 4.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मसाला» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («गाड़ी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बस» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"मिठाई\":",
          "options": [
            "हम इस पाठ में इकाई 4.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («गाड़ी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बस» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मसाला» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"मिठाई\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 4.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बस» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मसाला» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («गाड़ी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u4-l5": {
    "id": "hi-u4-l5",
    "subject": "hindi",
    "unit": 4,
    "lessonNumber": 5,
    "title": "सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) (Part 5)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 4.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 4.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 4."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 4-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"मसाला\":",
          "options": [
            "हम इस पाठ में इकाई 4.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («गाड़ी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बस» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («ट्रेन» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"मसाला\":",
          "options": [
            "हम इस पाठ में इकाई 4.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बस» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («ट्रेन» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («गाड़ी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"मसाला\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 4.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («ट्रेन» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («गाड़ी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बस» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u5-l1": {
    "id": "hi-u5-l1",
    "subject": "hindi",
    "unit": 5,
    "lessonNumber": 1,
    "title": "अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) (Part 1)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 5.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 5.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 5."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 5-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"गाड़ी\":",
          "options": [
            "हम इस पाठ में इकाई 5.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बस» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («ट्रेन» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हवाई जहाज़» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"गाड़ी\":",
          "options": [
            "हम इस पाठ में इकाई 5.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («ट्रेन» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हवाई जहाज़» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बस» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"गाड़ी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 5.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हवाई जहाज़» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बस» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («ट्रेन» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u5-l2": {
    "id": "hi-u5-l2",
    "subject": "hindi",
    "unit": 5,
    "lessonNumber": 2,
    "title": "अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) (Part 2)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 5.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 5.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 5."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 5-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बस\":",
          "options": [
            "हम इस पाठ में इकाई 5.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («ट्रेन» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हवाई जहाज़» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मेट्रो» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बस\":",
          "options": [
            "हम इस पाठ में इकाई 5.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हवाई जहाज़» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मेट्रो» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («ट्रेन» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बस\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 5.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मेट्रो» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («ट्रेन» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हवाई जहाज़» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u5-l3": {
    "id": "hi-u5-l3",
    "subject": "hindi",
    "unit": 5,
    "lessonNumber": 3,
    "title": "अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) (Part 3)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 5.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 5.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 5."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 5-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ट्रेन\":",
          "options": [
            "हम इस पाठ में इकाई 5.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हवाई जहाज़» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मेट्रो» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («टिकट» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ट्रेन\":",
          "options": [
            "हम इस पाठ में इकाई 5.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मेट्रो» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («टिकट» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हवाई जहाज़» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ट्रेन\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 5.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («टिकट» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हवाई जहाज़» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मेट्रो» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u5-l4": {
    "id": "hi-u5-l4",
    "subject": "hindi",
    "unit": 5,
    "lessonNumber": 4,
    "title": "अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) (Part 4)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 5.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 5.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 5."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 5-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"हवाई जहाज़\":",
          "options": [
            "हम इस पाठ में इकाई 5.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मेट्रो» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («टिकट» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्टेशन» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"हवाई जहाज़\":",
          "options": [
            "हम इस पाठ में इकाई 5.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («टिकट» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्टेशन» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मेट्रो» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"हवाई जहाज़\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 5.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्टेशन» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मेट्रो» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («टिकट» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u5-l5": {
    "id": "hi-u5-l5",
    "subject": "hindi",
    "unit": 5,
    "lessonNumber": 5,
    "title": "अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) (Part 5)",
    "level": "A1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 5.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 5.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 5."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 5-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"मेट्रो\":",
          "options": [
            "हम इस पाठ में इकाई 5.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («टिकट» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्टेशन» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हवाई अड्डा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"मेट्रो\":",
          "options": [
            "हम इस पाठ में इकाई 5.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्टेशन» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हवाई अड्डा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («टिकट» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"मेट्रो\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 5.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हवाई अड्डा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («टिकट» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्टेशन» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u6-l1": {
    "id": "hi-u6-l1",
    "subject": "hindi",
    "unit": 6,
    "lessonNumber": 1,
    "title": "सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) (Part 1)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 6.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 6.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 6."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 6-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"टिकट\":",
          "options": [
            "हम इस पाठ में इकाई 6.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्टेशन» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हवाई अड्डा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सड़क» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"टिकट\":",
          "options": [
            "हम इस पाठ में इकाई 6.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हवाई अड्डा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सड़क» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्टेशन» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"टिकट\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 6.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सड़क» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्टेशन» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हवाई अड्डा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u6-l2": {
    "id": "hi-u6-l2",
    "subject": "hindi",
    "unit": 6,
    "lessonNumber": 2,
    "title": "सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) (Part 2)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 6.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 6.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 6."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 6-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"स्टेशन\":",
          "options": [
            "हम इस पाठ में इकाई 6.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हवाई अड्डा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सड़क» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («शहर» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"स्टेशन\":",
          "options": [
            "हम इस पाठ में इकाई 6.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सड़क» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («शहर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हवाई अड्डा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"स्टेशन\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 6.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («शहर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हवाई अड्डा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सड़क» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u6-l3": {
    "id": "hi-u6-l3",
    "subject": "hindi",
    "unit": 6,
    "lessonNumber": 3,
    "title": "सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) (Part 3)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 6.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 6.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 6."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 6-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"हवाई अड्डा\":",
          "options": [
            "हम इस पाठ में इकाई 6.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सड़क» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («शहर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दुकान» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"हवाई अड्डा\":",
          "options": [
            "हम इस पाठ में इकाई 6.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («शहर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दुकान» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सड़क» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"हवाई अड्डा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 6.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दुकान» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सड़क» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («शहर» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u6-l4": {
    "id": "hi-u6-l4",
    "subject": "hindi",
    "unit": 6,
    "lessonNumber": 4,
    "title": "सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) (Part 4)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 6.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 6.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 6."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 6-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"सड़क\":",
          "options": [
            "हम इस पाठ में इकाई 6.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («शहर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दुकान» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रुपया» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"सड़क\":",
          "options": [
            "हम इस पाठ में इकाई 6.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दुकान» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रुपया» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («शहर» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"सड़क\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 6.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रुपया» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («शहर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दुकान» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u6-l5": {
    "id": "hi-u6-l5",
    "subject": "hindi",
    "unit": 6,
    "lessonNumber": 5,
    "title": "सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) (Part 5)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 6.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 6.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 6."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 6-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"शहर\":",
          "options": [
            "हम इस पाठ में इकाई 6.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दुकान» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रुपया» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पैसा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"शहर\":",
          "options": [
            "हम इस पाठ में इकाई 6.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रुपया» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पैसा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दुकान» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"शहर\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 6.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पैसा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दुकान» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रुपया» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u7-l1": {
    "id": "hi-u7-l1",
    "subject": "hindi",
    "unit": 7,
    "lessonNumber": 1,
    "title": "पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) (Part 1)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 7.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 7.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 7."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 7-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"दुकान\":",
          "options": [
            "हम इस पाठ में इकाई 7.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रुपया» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पैसा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दाम» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"दुकान\":",
          "options": [
            "हम इस पाठ में इकाई 7.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पैसा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दाम» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रुपया» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"दुकान\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 7.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दाम» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रुपया» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पैसा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u7-l2": {
    "id": "hi-u7-l2",
    "subject": "hindi",
    "unit": 7,
    "lessonNumber": 2,
    "title": "पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) (Part 2)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 7.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 7.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 7."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 7-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"रुपया\":",
          "options": [
            "हम इस पाठ में इकाई 7.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पैसा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दाम» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छूट» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"रुपया\":",
          "options": [
            "हम इस पाठ में इकाई 7.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दाम» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छूट» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पैसा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"रुपया\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 7.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छूट» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पैसा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दाम» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u7-l3": {
    "id": "hi-u7-l3",
    "subject": "hindi",
    "unit": 7,
    "lessonNumber": 3,
    "title": "पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) (Part 3)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 7.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 7.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 7."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 7-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"पैसा\":",
          "options": [
            "हम इस पाठ में इकाई 7.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दाम» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छूट» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बिल» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"पैसा\":",
          "options": [
            "हम इस पाठ में इकाई 7.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छूट» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बिल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दाम» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"पैसा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 7.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बिल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दाम» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छूट» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u7-l4": {
    "id": "hi-u7-l4",
    "subject": "hindi",
    "unit": 7,
    "lessonNumber": 4,
    "title": "पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) (Part 4)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 7.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 7.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 7."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 7-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"दाम\":",
          "options": [
            "हम इस पाठ में इकाई 7.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छूट» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बिल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बाज़ार» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"दाम\":",
          "options": [
            "हम इस पाठ में इकाई 7.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बिल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बाज़ार» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छूट» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"दाम\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 7.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बाज़ार» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छूट» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बिल» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u7-l5": {
    "id": "hi-u7-l5",
    "subject": "hindi",
    "unit": 7,
    "lessonNumber": 5,
    "title": "पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) (Part 5)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 7.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 7.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 7."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 7-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"छूट\":",
          "options": [
            "हम इस पाठ में इकाई 7.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बिल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बाज़ार» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («खरीदारी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"छूट\":",
          "options": [
            "हम इस पाठ में इकाई 7.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बाज़ार» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («खरीदारी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बिल» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"छूट\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 7.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («खरीदारी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बिल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बाज़ार» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u8-l1": {
    "id": "hi-u8-l1",
    "subject": "hindi",
    "unit": 8,
    "lessonNumber": 1,
    "title": "भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) (Part 1)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 8.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 8.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 8."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 8-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बिल\":",
          "options": [
            "हम इस पाठ में इकाई 8.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बाज़ार» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («खरीदारी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («क्रेडिट कार्ड» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बिल\":",
          "options": [
            "हम इस पाठ में इकाई 8.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («खरीदारी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («क्रेडिट कार्ड» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बाज़ार» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बिल\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 8.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («क्रेडिट कार्ड» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बाज़ार» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («खरीदारी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u8-l2": {
    "id": "hi-u8-l2",
    "subject": "hindi",
    "unit": 8,
    "lessonNumber": 2,
    "title": "भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) (Part 2)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 8.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 8.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 8."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 8-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बाज़ार\":",
          "options": [
            "हम इस पाठ में इकाई 8.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («खरीदारी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («क्रेडिट कार्ड» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नकद» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बाज़ार\":",
          "options": [
            "हम इस पाठ में इकाई 8.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («क्रेडिट कार्ड» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नकद» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («खरीदारी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बाज़ार\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 8.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नकद» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («खरीदारी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («क्रेडिट कार्ड» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u8-l3": {
    "id": "hi-u8-l3",
    "subject": "hindi",
    "unit": 8,
    "lessonNumber": 3,
    "title": "भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) (Part 3)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 8.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 8.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 8."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 8-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"खरीदारी\":",
          "options": [
            "हम इस पाठ में इकाई 8.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («क्रेडिट कार्ड» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नकद» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («घर» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"खरीदारी\":",
          "options": [
            "हम इस पाठ में इकाई 8.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नकद» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («घर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («क्रेडिट कार्ड» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"खरीदारी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 8.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («घर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («क्रेडिट कार्ड» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नकद» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u8-l4": {
    "id": "hi-u8-l4",
    "subject": "hindi",
    "unit": 8,
    "lessonNumber": 4,
    "title": "भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) (Part 4)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 8.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 8.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 8."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 8-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"क्रेडिट कार्ड\":",
          "options": [
            "हम इस पाठ में इकाई 8.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नकद» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («घर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कमरा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"क्रेडिट कार्ड\":",
          "options": [
            "हम इस पाठ में इकाई 8.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («घर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कमरा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नकद» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"क्रेडिट कार्ड\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 8.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कमरा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नकद» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («घर» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u8-l5": {
    "id": "hi-u8-l5",
    "subject": "hindi",
    "unit": 8,
    "lessonNumber": 5,
    "title": "भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) (Part 5)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 8.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 8.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 8."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 8-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"नकद\":",
          "options": [
            "हम इस पाठ में इकाई 8.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («घर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कमरा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रसोई» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"नकद\":",
          "options": [
            "हम इस पाठ में इकाई 8.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कमरा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रसोई» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («घर» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"नकद\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 8.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रसोई» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («घर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कमरा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u9-l1": {
    "id": "hi-u9-l1",
    "subject": "hindi",
    "unit": 9,
    "lessonNumber": 1,
    "title": "अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) (Part 1)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 9.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 9.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 9."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 9-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"घर\":",
          "options": [
            "हम इस पाठ में इकाई 9.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कमरा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रसोई» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («खिड़की» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"घर\":",
          "options": [
            "हम इस पाठ में इकाई 9.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रसोई» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («खिड़की» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कमरा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"घर\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 9.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («खिड़की» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कमरा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रसोई» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u9-l2": {
    "id": "hi-u9-l2",
    "subject": "hindi",
    "unit": 9,
    "lessonNumber": 2,
    "title": "अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) (Part 2)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 9.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 9.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 9."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 9-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"कमरा\":",
          "options": [
            "हम इस पाठ में इकाई 9.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रसोई» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («खिड़की» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दरवाज़ा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"कमरा\":",
          "options": [
            "हम इस पाठ में इकाई 9.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («खिड़की» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दरवाज़ा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रसोई» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"कमरा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 9.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दरवाज़ा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रसोई» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («खिड़की» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u9-l3": {
    "id": "hi-u9-l3",
    "subject": "hindi",
    "unit": 9,
    "lessonNumber": 3,
    "title": "अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) (Part 3)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 9.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 9.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 9."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 9-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"रसोई\":",
          "options": [
            "हम इस पाठ में इकाई 9.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («खिड़की» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दरवाज़ा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मेज़» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"रसोई\":",
          "options": [
            "हम इस पाठ में इकाई 9.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दरवाज़ा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मेज़» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («खिड़की» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"रसोई\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 9.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मेज़» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («खिड़की» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दरवाज़ा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u9-l4": {
    "id": "hi-u9-l4",
    "subject": "hindi",
    "unit": 9,
    "lessonNumber": 4,
    "title": "अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) (Part 4)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 9.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 9.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 9."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 9-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"खिड़की\":",
          "options": [
            "हम इस पाठ में इकाई 9.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दरवाज़ा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मेज़» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कुर्सी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"खिड़की\":",
          "options": [
            "हम इस पाठ में इकाई 9.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मेज़» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कुर्सी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दरवाज़ा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"खिड़की\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 9.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कुर्सी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दरवाज़ा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मेज़» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u9-l5": {
    "id": "hi-u9-l5",
    "subject": "hindi",
    "unit": 9,
    "lessonNumber": 5,
    "title": "अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) (Part 5)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 9.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 9.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 9."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 9-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"दरवाज़ा\":",
          "options": [
            "हम इस पाठ में इकाई 9.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मेज़» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कुर्सी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बिस्तर» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"दरवाज़ा\":",
          "options": [
            "हम इस पाठ में इकाई 9.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कुर्सी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बिस्तर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मेज़» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"दरवाज़ा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 9.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बिस्तर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मेज़» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कुर्सी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u10-l1": {
    "id": "hi-u10-l1",
    "subject": "hindi",
    "unit": 10,
    "lessonNumber": 1,
    "title": "मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) (Part 1)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 10.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 10.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 10."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 10-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"मेज़\":",
          "options": [
            "हम इस पाठ में इकाई 10.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कुर्सी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बिस्तर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दीवार» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"मेज़\":",
          "options": [
            "हम इस पाठ में इकाई 10.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बिस्तर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दीवार» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कुर्सी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"मेज़\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 10.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दीवार» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कुर्सी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बिस्तर» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u10-l2": {
    "id": "hi-u10-l2",
    "subject": "hindi",
    "unit": 10,
    "lessonNumber": 2,
    "title": "मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) (Part 2)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 10.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 10.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 10."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 10-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"कुर्सी\":",
          "options": [
            "हम इस पाठ में इकाई 10.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बिस्तर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दीवार» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छत» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"कुर्सी\":",
          "options": [
            "हम इस पाठ में इकाई 10.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दीवार» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छत» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बिस्तर» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"कुर्सी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 10.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छत» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बिस्तर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दीवार» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u10-l3": {
    "id": "hi-u10-l3",
    "subject": "hindi",
    "unit": 10,
    "lessonNumber": 3,
    "title": "मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) (Part 3)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 10.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 10.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 10."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 10-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बिस्तर\":",
          "options": [
            "हम इस पाठ में इकाई 10.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दीवार» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छत» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («काम» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बिस्तर\":",
          "options": [
            "हम इस पाठ में इकाई 10.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छत» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («काम» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दीवार» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बिस्तर\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 10.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («काम» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दीवार» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छत» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u10-l4": {
    "id": "hi-u10-l4",
    "subject": "hindi",
    "unit": 10,
    "lessonNumber": 4,
    "title": "मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) (Part 4)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 10.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 10.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 10."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 10-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"दीवार\":",
          "options": [
            "हम इस पाठ में इकाई 10.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छत» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («काम» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दफ़्तर» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"दीवार\":",
          "options": [
            "हम इस पाठ में इकाई 10.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («काम» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दफ़्तर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छत» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"दीवार\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 10.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दफ़्तर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छत» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («काम» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u10-l5": {
    "id": "hi-u10-l5",
    "subject": "hindi",
    "unit": 10,
    "lessonNumber": 5,
    "title": "मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) (Part 5)",
    "level": "A2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 10.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 10.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 10."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 10-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"छत\":",
          "options": [
            "हम इस पाठ में इकाई 10.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («काम» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दफ़्तर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सहकर्मी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"छत\":",
          "options": [
            "हम इस पाठ में इकाई 10.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दफ़्तर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सहकर्मी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («काम» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"छत\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 10.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सहकर्मी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («काम» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दफ़्तर» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u11-l1": {
    "id": "hi-u11-l1",
    "subject": "hindi",
    "unit": 11,
    "lessonNumber": 1,
    "title": "अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) (Part 1)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 11.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 11.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 11."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 11-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"काम\":",
          "options": [
            "हम इस पाठ में इकाई 11.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दफ़्तर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सहकर्मी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अधिकारी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"काम\":",
          "options": [
            "हम इस पाठ में इकाई 11.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सहकर्मी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अधिकारी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दफ़्तर» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"काम\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 11.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अधिकारी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दफ़्तर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सहकर्मी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u11-l2": {
    "id": "hi-u11-l2",
    "subject": "hindi",
    "unit": 11,
    "lessonNumber": 2,
    "title": "अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) (Part 2)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 11.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 11.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 11."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 11-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"दफ़्तर\":",
          "options": [
            "हम इस पाठ में इकाई 11.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सहकर्मी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अधिकारी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («वेतन» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"दफ़्तर\":",
          "options": [
            "हम इस पाठ में इकाई 11.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अधिकारी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («वेतन» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सहकर्मी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"दफ़्तर\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 11.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («वेतन» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सहकर्मी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अधिकारी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u11-l3": {
    "id": "hi-u11-l3",
    "subject": "hindi",
    "unit": 11,
    "lessonNumber": 3,
    "title": "अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) (Part 3)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 11.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 11.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 11."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 11-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"सहकर्मी\":",
          "options": [
            "हम इस पाठ में इकाई 11.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अधिकारी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («वेतन» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छुट्टी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"सहकर्मी\":",
          "options": [
            "हम इस पाठ में इकाई 11.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («वेतन» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छुट्टी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अधिकारी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"सहकर्मी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 11.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छुट्टी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अधिकारी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («वेतन» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u11-l4": {
    "id": "hi-u11-l4",
    "subject": "hindi",
    "unit": 11,
    "lessonNumber": 4,
    "title": "अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) (Part 4)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 11.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 11.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 11."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 11-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"अधिकारी\":",
          "options": [
            "हम इस पाठ में इकाई 11.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («वेतन» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छुट्टी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बैठक» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"अधिकारी\":",
          "options": [
            "हम इस पाठ में इकाई 11.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छुट्टी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बैठक» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («वेतन» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"अधिकारी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 11.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बैठक» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («वेतन» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छुट्टी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u11-l5": {
    "id": "hi-u11-l5",
    "subject": "hindi",
    "unit": 11,
    "lessonNumber": 5,
    "title": "अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) (Part 5)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 11.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 11.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 11."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 11-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"वेतन\":",
          "options": [
            "हम इस पाठ में इकाई 11.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छुट्टी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बैठक» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («योजना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"वेतन\":",
          "options": [
            "हम इस पाठ में इकाई 11.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बैठक» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («योजना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छुट्टी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"वेतन\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 11.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («योजना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छुट्टी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बैठक» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u12-l1": {
    "id": "hi-u12-l1",
    "subject": "hindi",
    "unit": 12,
    "lessonNumber": 1,
    "title": "संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) (Part 1)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 12.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 12.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 12."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 12-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"छुट्टी\":",
          "options": [
            "हम इस पाठ में इकाई 12.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बैठक» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («योजना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अनुबंध» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"छुट्टी\":",
          "options": [
            "हम इस पाठ में इकाई 12.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («योजना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अनुबंध» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बैठक» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"छुट्टी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 12.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अनुबंध» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बैठक» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («योजना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u12-l2": {
    "id": "hi-u12-l2",
    "subject": "hindi",
    "unit": 12,
    "lessonNumber": 2,
    "title": "संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) (Part 2)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 12.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 12.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 12."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 12-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बैठक\":",
          "options": [
            "हम इस पाठ में इकाई 12.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («योजना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अनुबंध» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («व्यवसाय» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बैठक\":",
          "options": [
            "हम इस पाठ में इकाई 12.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अनुबंध» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («व्यवसाय» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («योजना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बैठक\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 12.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («व्यवसाय» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («योजना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अनुबंध» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u12-l3": {
    "id": "hi-u12-l3",
    "subject": "hindi",
    "unit": 12,
    "lessonNumber": 3,
    "title": "संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) (Part 3)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 12.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 12.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 12."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 12-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"योजना\":",
          "options": [
            "हम इस पाठ में इकाई 12.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अनुबंध» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («व्यवसाय» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («किताब» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"योजना\":",
          "options": [
            "हम इस पाठ में इकाई 12.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («व्यवसाय» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («किताब» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अनुबंध» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"योजना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 12.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («किताब» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अनुबंध» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («व्यवसाय» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u12-l4": {
    "id": "hi-u12-l4",
    "subject": "hindi",
    "unit": 12,
    "lessonNumber": 4,
    "title": "संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) (Part 4)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 12.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 12.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 12."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 12-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"अनुबंध\":",
          "options": [
            "हम इस पाठ में इकाई 12.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («व्यवसाय» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («किताब» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («संगीत» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"अनुबंध\":",
          "options": [
            "हम इस पाठ में इकाई 12.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («किताब» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («संगीत» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («व्यवसाय» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"अनुबंध\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 12.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («संगीत» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («व्यवसाय» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («किताब» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u12-l5": {
    "id": "hi-u12-l5",
    "subject": "hindi",
    "unit": 12,
    "lessonNumber": 5,
    "title": "संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) (Part 5)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 12.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 12.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 12."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 12-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"व्यवसाय\":",
          "options": [
            "हम इस पाठ में इकाई 12.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («किताब» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («संगीत» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («फ़िल्म» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"व्यवसाय\":",
          "options": [
            "हम इस पाठ में इकाई 12.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («संगीत» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («फ़िल्म» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («किताब» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"व्यवसाय\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 12.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («फ़िल्म» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («किताब» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («संगीत» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u13-l1": {
    "id": "hi-u13-l1",
    "subject": "hindi",
    "unit": 13,
    "lessonNumber": 1,
    "title": "संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) (Part 1)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 13.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 13.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 13."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 13-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"किताब\":",
          "options": [
            "हम इस पाठ में इकाई 13.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («संगीत» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («फ़िल्म» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («खेल» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"किताब\":",
          "options": [
            "हम इस पाठ में इकाई 13.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («फ़िल्म» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («खेल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («संगीत» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"किताब\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 13.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («खेल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («संगीत» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («फ़िल्म» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u13-l2": {
    "id": "hi-u13-l2",
    "subject": "hindi",
    "unit": 13,
    "lessonNumber": 2,
    "title": "संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) (Part 2)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 13.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 13.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 13."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 13-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"संगीत\":",
          "options": [
            "हम इस पाठ में इकाई 13.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («फ़िल्म» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («खेल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («क्रिकेट» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"संगीत\":",
          "options": [
            "हम इस पाठ में इकाई 13.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («खेल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («क्रिकेट» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («फ़िल्म» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"संगीत\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 13.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («क्रिकेट» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («फ़िल्म» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («खेल» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u13-l3": {
    "id": "hi-u13-l3",
    "subject": "hindi",
    "unit": 13,
    "lessonNumber": 3,
    "title": "संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) (Part 3)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 13.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 13.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 13."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 13-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"फ़िल्म\":",
          "options": [
            "हम इस पाठ में इकाई 13.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («खेल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («क्रिकेट» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («यात्रा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"फ़िल्म\":",
          "options": [
            "हम इस पाठ में इकाई 13.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («क्रिकेट» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («यात्रा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («खेल» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"फ़िल्म\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 13.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («यात्रा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («खेल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («क्रिकेट» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u13-l4": {
    "id": "hi-u13-l4",
    "subject": "hindi",
    "unit": 13,
    "lessonNumber": 4,
    "title": "संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) (Part 4)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 13.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 13.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 13."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 13-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"खेल\":",
          "options": [
            "हम इस पाठ में इकाई 13.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («क्रिकेट» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («यात्रा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सिनेमा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"खेल\":",
          "options": [
            "हम इस पाठ में इकाई 13.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («यात्रा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सिनेमा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («क्रिकेट» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"खेल\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 13.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सिनेमा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («क्रिकेट» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («यात्रा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u13-l5": {
    "id": "hi-u13-l5",
    "subject": "hindi",
    "unit": 13,
    "lessonNumber": 5,
    "title": "संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) (Part 5)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 13.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 13.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 13."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 13-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"क्रिकेट\":",
          "options": [
            "हम इस पाठ में इकाई 13.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («यात्रा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सिनेमा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नृत्य» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"क्रिकेट\":",
          "options": [
            "हम इस पाठ में इकाई 13.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सिनेमा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नृत्य» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («यात्रा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"क्रिकेट\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 13.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नृत्य» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («यात्रा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सिनेमा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u14-l1": {
    "id": "hi-u14-l1",
    "subject": "hindi",
    "unit": 14,
    "lessonNumber": 1,
    "title": "पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) (Part 1)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 14.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 14.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 14."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 14-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"यात्रा\":",
          "options": [
            "हम इस पाठ में इकाई 14.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सिनेमा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नृत्य» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कला» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"यात्रा\":",
          "options": [
            "हम इस पाठ में इकाई 14.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नृत्य» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कला» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सिनेमा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"यात्रा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 14.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कला» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सिनेमा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नृत्य» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u14-l2": {
    "id": "hi-u14-l2",
    "subject": "hindi",
    "unit": 14,
    "lessonNumber": 2,
    "title": "पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) (Part 2)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 14.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 14.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 14."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 14-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"सिनेमा\":",
          "options": [
            "हम इस पाठ में इकाई 14.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नृत्य» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कला» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कविता» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"सिनेमा\":",
          "options": [
            "हम इस पाठ में इकाई 14.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कला» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कविता» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नृत्य» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"सिनेमा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 14.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कविता» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नृत्य» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कला» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u14-l3": {
    "id": "hi-u14-l3",
    "subject": "hindi",
    "unit": 14,
    "lessonNumber": 3,
    "title": "पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) (Part 3)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 14.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 14.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 14."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 14-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"नृत्य\":",
          "options": [
            "हम इस पाठ में इकाई 14.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कला» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कविता» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मौसम» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"नृत्य\":",
          "options": [
            "हम इस पाठ में इकाई 14.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कविता» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मौसम» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कला» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"नृत्य\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 14.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मौसम» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कला» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कविता» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u14-l4": {
    "id": "hi-u14-l4",
    "subject": "hindi",
    "unit": 14,
    "lessonNumber": 4,
    "title": "पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) (Part 4)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 14.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 14.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 14."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 14-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"कला\":",
          "options": [
            "हम इस पाठ में इकाई 14.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कविता» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मौसम» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सूरज» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"कला\":",
          "options": [
            "हम इस पाठ में इकाई 14.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मौसम» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सूरज» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कविता» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"कला\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 14.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सूरज» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कविता» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मौसम» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u14-l5": {
    "id": "hi-u14-l5",
    "subject": "hindi",
    "unit": 14,
    "lessonNumber": 5,
    "title": "पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) (Part 5)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 14.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 14.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 14."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 14-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"कविता\":",
          "options": [
            "हम इस पाठ में इकाई 14.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मौसम» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सूरज» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बारिश» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"कविता\":",
          "options": [
            "हम इस पाठ में इकाई 14.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सूरज» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बारिश» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मौसम» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"कविता\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 14.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बारिश» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मौसम» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सूरज» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u15-l1": {
    "id": "hi-u15-l1",
    "subject": "hindi",
    "unit": 15,
    "lessonNumber": 1,
    "title": "संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) (Part 1)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 15.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 15.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 15."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 15-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"मौसम\":",
          "options": [
            "हम इस पाठ में इकाई 15.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सूरज» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बारिश» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हवा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"मौसम\":",
          "options": [
            "हम इस पाठ में इकाई 15.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बारिश» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हवा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सूरज» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"मौसम\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 15.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हवा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सूरज» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बारिश» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u15-l2": {
    "id": "hi-u15-l2",
    "subject": "hindi",
    "unit": 15,
    "lessonNumber": 2,
    "title": "संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) (Part 2)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 15.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 15.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 15."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 15-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"सूरज\":",
          "options": [
            "हम इस पाठ में इकाई 15.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बारिश» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हवा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बादल» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"सूरज\":",
          "options": [
            "हम इस पाठ में इकाई 15.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हवा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बादल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बारिश» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"सूरज\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 15.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बादल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बारिश» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हवा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u15-l3": {
    "id": "hi-u15-l3",
    "subject": "hindi",
    "unit": 15,
    "lessonNumber": 3,
    "title": "संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) (Part 3)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 15.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 15.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 15."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 15-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बारिश\":",
          "options": [
            "हम इस पाठ में इकाई 15.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हवा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बादल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («गर्मी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बारिश\":",
          "options": [
            "हम इस पाठ में इकाई 15.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बादल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («गर्मी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हवा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बारिश\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 15.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («गर्मी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हवा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बादल» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u15-l4": {
    "id": "hi-u15-l4",
    "subject": "hindi",
    "unit": 15,
    "lessonNumber": 4,
    "title": "संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) (Part 4)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 15.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 15.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 15."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 15-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"हवा\":",
          "options": [
            "हम इस पाठ में इकाई 15.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बादल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («गर्मी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सर्दी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"हवा\":",
          "options": [
            "हम इस पाठ में इकाई 15.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («गर्मी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सर्दी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बादल» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"हवा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 15.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सर्दी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बादल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («गर्मी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u15-l5": {
    "id": "hi-u15-l5",
    "subject": "hindi",
    "unit": 15,
    "lessonNumber": 5,
    "title": "संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) (Part 5)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 15.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 15.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 15."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 15-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बादल\":",
          "options": [
            "हम इस पाठ में इकाई 15.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («गर्मी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सर्दी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («वसंत» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बादल\":",
          "options": [
            "हम इस पाठ में इकाई 15.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सर्दी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («वसंत» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («गर्मी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बादल\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 15.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («वसंत» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («गर्मी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सर्दी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u16-l1": {
    "id": "hi-u16-l1",
    "subject": "hindi",
    "unit": 16,
    "lessonNumber": 1,
    "title": "कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) (Part 1)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 16.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 16.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 16."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 16-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"गर्मी\":",
          "options": [
            "हम इस पाठ में इकाई 16.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सर्दी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («वसंत» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पतझड़» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"गर्मी\":",
          "options": [
            "हम इस पाठ में इकाई 16.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («वसंत» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पतझड़» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सर्दी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"गर्मी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 16.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पतझड़» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सर्दी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («वसंत» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u16-l2": {
    "id": "hi-u16-l2",
    "subject": "hindi",
    "unit": 16,
    "lessonNumber": 2,
    "title": "कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) (Part 2)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 16.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 16.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 16."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 16-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"सर्दी\":",
          "options": [
            "हम इस पाठ में इकाई 16.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («वसंत» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पतझड़» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («तापमान» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"सर्दी\":",
          "options": [
            "हम इस पाठ में इकाई 16.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पतझड़» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («तापमान» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («वसंत» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"सर्दी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 16.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («तापमान» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («वसंत» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पतझड़» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u16-l3": {
    "id": "hi-u16-l3",
    "subject": "hindi",
    "unit": 16,
    "lessonNumber": 3,
    "title": "कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) (Part 3)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 16.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 16.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 16."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 16-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"वसंत\":",
          "options": [
            "हम इस पाठ में इकाई 16.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पतझड़» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («तापमान» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («डॉक्टर» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"वसंत\":",
          "options": [
            "हम इस पाठ में इकाई 16.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («तापमान» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («डॉक्टर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पतझड़» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"वसंत\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 16.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («डॉक्टर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पतझड़» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («तापमान» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u16-l4": {
    "id": "hi-u16-l4",
    "subject": "hindi",
    "unit": 16,
    "lessonNumber": 4,
    "title": "कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) (Part 4)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 16.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 16.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 16."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 16-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"पतझड़\":",
          "options": [
            "हम इस पाठ में इकाई 16.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («तापमान» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («डॉक्टर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दवा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"पतझड़\":",
          "options": [
            "हम इस पाठ में इकाई 16.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («डॉक्टर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दवा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («तापमान» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"पतझड़\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 16.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दवा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («तापमान» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («डॉक्टर» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u16-l5": {
    "id": "hi-u16-l5",
    "subject": "hindi",
    "unit": 16,
    "lessonNumber": 5,
    "title": "कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) (Part 5)",
    "level": "B1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 16.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 16.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 16."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 16-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"तापमान\":",
          "options": [
            "हम इस पाठ में इकाई 16.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («डॉक्टर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दवा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अस्पताल» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"तापमान\":",
          "options": [
            "हम इस पाठ में इकाई 16.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दवा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अस्पताल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («डॉक्टर» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"तापमान\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 16.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अस्पताल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («डॉक्टर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दवा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u17-l1": {
    "id": "hi-u17-l1",
    "subject": "hindi",
    "unit": 17,
    "lessonNumber": 1,
    "title": "प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) (Part 1)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 17.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 17.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 17."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 17-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"डॉक्टर\":",
          "options": [
            "हम इस पाठ में इकाई 17.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दवा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अस्पताल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्वास्थ्य» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"डॉक्टर\":",
          "options": [
            "हम इस पाठ में इकाई 17.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अस्पताल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्वास्थ्य» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दवा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"डॉक्टर\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 17.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्वास्थ्य» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दवा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अस्पताल» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u17-l2": {
    "id": "hi-u17-l2",
    "subject": "hindi",
    "unit": 17,
    "lessonNumber": 2,
    "title": "प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) (Part 2)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 17.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 17.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 17."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 17-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"दवा\":",
          "options": [
            "हम इस पाठ में इकाई 17.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अस्पताल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्वास्थ्य» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («इलाज» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"दवा\":",
          "options": [
            "हम इस पाठ में इकाई 17.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्वास्थ्य» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («इलाज» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अस्पताल» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"दवा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 17.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («इलाज» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अस्पताल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्वास्थ्य» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u17-l3": {
    "id": "hi-u17-l3",
    "subject": "hindi",
    "unit": 17,
    "lessonNumber": 3,
    "title": "प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) (Part 3)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 17.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 17.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 17."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 17-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"अस्पताल\":",
          "options": [
            "हम इस पाठ में इकाई 17.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्वास्थ्य» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («इलाज» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बुखार» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"अस्पताल\":",
          "options": [
            "हम इस पाठ में इकाई 17.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («इलाज» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बुखार» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्वास्थ्य» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"अस्पताल\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 17.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बुखार» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्वास्थ्य» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («इलाज» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u17-l4": {
    "id": "hi-u17-l4",
    "subject": "hindi",
    "unit": 17,
    "lessonNumber": 4,
    "title": "प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) (Part 4)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 17.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 17.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 17."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 17-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"स्वास्थ्य\":",
          "options": [
            "हम इस पाठ में इकाई 17.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («इलाज» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बुखार» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सिरदर्द» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"स्वास्थ्य\":",
          "options": [
            "हम इस पाठ में इकाई 17.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बुखार» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सिरदर्द» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («इलाज» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"स्वास्थ्य\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 17.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सिरदर्द» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («इलाज» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बुखार» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u17-l5": {
    "id": "hi-u17-l5",
    "subject": "hindi",
    "unit": 17,
    "lessonNumber": 5,
    "title": "प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) (Part 5)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 17.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 17.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 17."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 17-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"इलाज\":",
          "options": [
            "हम इस पाठ में इकाई 17.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बुखार» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सिरदर्द» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («आँखें» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"इलाज\":",
          "options": [
            "हम इस पाठ में इकाई 17.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सिरदर्द» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («आँखें» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बुखार» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"इलाज\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 17.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («आँखें» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बुखार» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सिरदर्द» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u18-l1": {
    "id": "hi-u18-l1",
    "subject": "hindi",
    "unit": 18,
    "lessonNumber": 1,
    "title": "शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) (Part 1)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 18.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 18.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 18."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 18-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बुखार\":",
          "options": [
            "हम इस पाठ में इकाई 18.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सिरदर्द» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («आँखें» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हाथ» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बुखार\":",
          "options": [
            "हम इस पाठ में इकाई 18.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («आँखें» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हाथ» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सिरदर्द» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बुखार\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 18.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हाथ» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सिरदर्द» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («आँखें» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u18-l2": {
    "id": "hi-u18-l2",
    "subject": "hindi",
    "unit": 18,
    "lessonNumber": 2,
    "title": "शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) (Part 2)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 18.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 18.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 18."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 18-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"सिरदर्द\":",
          "options": [
            "हम इस पाठ में इकाई 18.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («आँखें» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हाथ» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दिल» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"सिरदर्द\":",
          "options": [
            "हम इस पाठ में इकाई 18.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हाथ» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दिल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («आँखें» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"सिरदर्द\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 18.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दिल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («आँखें» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हाथ» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u18-l3": {
    "id": "hi-u18-l3",
    "subject": "hindi",
    "unit": 18,
    "lessonNumber": 3,
    "title": "शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) (Part 3)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 18.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 18.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 18."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 18-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"आँखें\":",
          "options": [
            "हम इस पाठ में इकाई 18.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हाथ» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दिल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («परिवार» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"आँखें\":",
          "options": [
            "हम इस पाठ में इकाई 18.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दिल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («परिवार» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हाथ» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"आँखें\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 18.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («परिवार» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हाथ» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दिल» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u18-l4": {
    "id": "hi-u18-l4",
    "subject": "hindi",
    "unit": 18,
    "lessonNumber": 4,
    "title": "शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) (Part 4)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 18.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 18.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 18."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 18-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"हाथ\":",
          "options": [
            "हम इस पाठ में इकाई 18.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दिल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («परिवार» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पिता» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"हाथ\":",
          "options": [
            "हम इस पाठ में इकाई 18.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («परिवार» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पिता» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दिल» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"हाथ\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 18.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पिता» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दिल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («परिवार» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u18-l5": {
    "id": "hi-u18-l5",
    "subject": "hindi",
    "unit": 18,
    "lessonNumber": 5,
    "title": "शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) (Part 5)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 18.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 18.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 18."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 18-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"दिल\":",
          "options": [
            "हम इस पाठ में इकाई 18.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («परिवार» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पिता» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («माता» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"दिल\":",
          "options": [
            "हम इस पाठ में इकाई 18.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पिता» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («माता» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («परिवार» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"दिल\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 18.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («माता» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («परिवार» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पिता» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u19-l1": {
    "id": "hi-u19-l1",
    "subject": "hindi",
    "unit": 19,
    "lessonNumber": 1,
    "title": "अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) (Part 1)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 19.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 19.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 19."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 19-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"परिवार\":",
          "options": [
            "हम इस पाठ में इकाई 19.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पिता» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («माता» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («भाई» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"परिवार\":",
          "options": [
            "हम इस पाठ में इकाई 19.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («माता» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («भाई» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पिता» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"परिवार\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 19.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («भाई» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पिता» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («माता» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u19-l2": {
    "id": "hi-u19-l2",
    "subject": "hindi",
    "unit": 19,
    "lessonNumber": 2,
    "title": "अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) (Part 2)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 19.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 19.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 19."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 19-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"पिता\":",
          "options": [
            "हम इस पाठ में इकाई 19.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («माता» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («भाई» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बहन» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"पिता\":",
          "options": [
            "हम इस पाठ में इकाई 19.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («भाई» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बहन» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («माता» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"पिता\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 19.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बहन» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («माता» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («भाई» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u19-l3": {
    "id": "hi-u19-l3",
    "subject": "hindi",
    "unit": 19,
    "lessonNumber": 3,
    "title": "अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) (Part 3)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 19.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 19.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 19."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 19-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"माता\":",
          "options": [
            "हम इस पाठ में इकाई 19.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («भाई» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बहन» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दादा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"माता\":",
          "options": [
            "हम इस पाठ में इकाई 19.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बहन» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दादा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («भाई» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"माता\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 19.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दादा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («भाई» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बहन» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u19-l4": {
    "id": "hi-u19-l4",
    "subject": "hindi",
    "unit": 19,
    "lessonNumber": 4,
    "title": "अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) (Part 4)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 19.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 19.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 19."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 19-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"भाई\":",
          "options": [
            "हम इस पाठ में इकाई 19.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बहन» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दादा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दादी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"भाई\":",
          "options": [
            "हम इस पाठ में इकाई 19.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दादा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दादी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बहन» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"भाई\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 19.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दादी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बहन» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दादा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u19-l5": {
    "id": "hi-u19-l5",
    "subject": "hindi",
    "unit": 19,
    "lessonNumber": 5,
    "title": "अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) (Part 5)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 19.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 19.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 19."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 19-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बहन\":",
          "options": [
            "हम इस पाठ में इकाई 19.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दादा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दादी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बेटा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बहन\":",
          "options": [
            "हम इस पाठ में इकाई 19.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दादी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बेटा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दादा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बहन\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 19.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बेटा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दादा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दादी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u20-l1": {
    "id": "hi-u20-l1",
    "subject": "hindi",
    "unit": 20,
    "lessonNumber": 1,
    "title": "व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) (Part 1)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 20.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 20.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 20."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 20-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"दादा\":",
          "options": [
            "हम इस पाठ में इकाई 20.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दादी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बेटा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बेटी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"दादा\":",
          "options": [
            "हम इस पाठ में इकाई 20.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बेटा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बेटी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दादी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"दादा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 20.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बेटी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दादी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बेटा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u20-l2": {
    "id": "hi-u20-l2",
    "subject": "hindi",
    "unit": 20,
    "lessonNumber": 2,
    "title": "व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) (Part 2)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 20.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 20.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 20."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 20-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"दादी\":",
          "options": [
            "हम इस पाठ में इकाई 20.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बेटा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बेटी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मित्र» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"दादी\":",
          "options": [
            "हम इस पाठ में इकाई 20.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बेटी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मित्र» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बेटा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"दादी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 20.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («मित्र» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बेटा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बेटी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u20-l3": {
    "id": "hi-u20-l3",
    "subject": "hindi",
    "unit": 20,
    "lessonNumber": 3,
    "title": "व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) (Part 3)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 20.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 20.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 20."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 20-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बेटा\":",
          "options": [
            "हम इस पाठ में इकाई 20.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बेटी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मित्र» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («आज» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बेटा\":",
          "options": [
            "हम इस पाठ में इकाई 20.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मित्र» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («आज» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बेटी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बेटा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 20.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («आज» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बेटी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («मित्र» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u20-l4": {
    "id": "hi-u20-l4",
    "subject": "hindi",
    "unit": 20,
    "lessonNumber": 4,
    "title": "व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) (Part 4)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 20.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 20.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 20."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 20-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बेटी\":",
          "options": [
            "हम इस पाठ में इकाई 20.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मित्र» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («आज» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कल» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बेटी\":",
          "options": [
            "हम इस पाठ में इकाई 20.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («आज» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मित्र» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बेटी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 20.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («मित्र» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («आज» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u20-l5": {
    "id": "hi-u20-l5",
    "subject": "hindi",
    "unit": 20,
    "lessonNumber": 5,
    "title": "व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) (Part 5)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 20.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 20.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 20."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 20-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"मित्र\":",
          "options": [
            "हम इस पाठ में इकाई 20.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («आज» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («परसों» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"मित्र\":",
          "options": [
            "हम इस पाठ में इकाई 20.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («परसों» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («आज» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"मित्र\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 20.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («परसों» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («आज» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कल» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u21-l1": {
    "id": "hi-u21-l1",
    "subject": "hindi",
    "unit": 21,
    "lessonNumber": 1,
    "title": "स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) (Part 1)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 21.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 21.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 21."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 21-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"आज\":",
          "options": [
            "हम इस पाठ में इकाई 21.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («परसों» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सुबह» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"आज\":",
          "options": [
            "हम इस पाठ में इकाई 21.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («परसों» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सुबह» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कल» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"आज\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 21.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सुबह» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («परसों» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u21-l2": {
    "id": "hi-u21-l2",
    "subject": "hindi",
    "unit": 21,
    "lessonNumber": 2,
    "title": "स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) (Part 2)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 21.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 21.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 21."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 21-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"कल\":",
          "options": [
            "हम इस पाठ में इकाई 21.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («परसों» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सुबह» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दोपहर» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"कल\":",
          "options": [
            "हम इस पाठ में इकाई 21.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सुबह» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दोपहर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («परसों» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"कल\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 21.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दोपहर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («परसों» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सुबह» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u21-l3": {
    "id": "hi-u21-l3",
    "subject": "hindi",
    "unit": 21,
    "lessonNumber": 3,
    "title": "स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) (Part 3)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 21.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 21.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 21."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 21-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"परसों\":",
          "options": [
            "हम इस पाठ में इकाई 21.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सुबह» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दोपहर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («शाम» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"परसों\":",
          "options": [
            "हम इस पाठ में इकाई 21.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दोपहर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («शाम» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सुबह» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"परसों\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 21.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («शाम» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सुबह» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दोपहर» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u21-l4": {
    "id": "hi-u21-l4",
    "subject": "hindi",
    "unit": 21,
    "lessonNumber": 4,
    "title": "स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) (Part 4)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 21.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 21.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 21."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 21-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"सुबह\":",
          "options": [
            "हम इस पाठ में इकाई 21.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दोपहर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («शाम» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रात» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"सुबह\":",
          "options": [
            "हम इस पाठ में इकाई 21.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («शाम» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रात» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दोपहर» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"सुबह\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 21.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («रात» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दोपहर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («शाम» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u21-l5": {
    "id": "hi-u21-l5",
    "subject": "hindi",
    "unit": 21,
    "lessonNumber": 5,
    "title": "स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) (Part 5)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 21.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 21.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 21."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 21-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"दोपहर\":",
          "options": [
            "हम इस पाठ में इकाई 21.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («शाम» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रात» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सप्ताह» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"दोपहर\":",
          "options": [
            "हम इस पाठ में इकाई 21.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रात» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सप्ताह» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («शाम» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"दोपहर\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 21.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सप्ताह» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («शाम» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («रात» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u22-l1": {
    "id": "hi-u22-l1",
    "subject": "hindi",
    "unit": 22,
    "lessonNumber": 1,
    "title": "भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) (Part 1)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 22.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 22.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 22."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 22-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"शाम\":",
          "options": [
            "हम इस पाठ में इकाई 22.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रात» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सप्ताह» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («महीना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"शाम\":",
          "options": [
            "हम इस पाठ में इकाई 22.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सप्ताह» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («महीना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रात» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"शाम\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 22.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («महीना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («रात» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सप्ताह» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u22-l2": {
    "id": "hi-u22-l2",
    "subject": "hindi",
    "unit": 22,
    "lessonNumber": 2,
    "title": "भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) (Part 2)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 22.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 22.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 22."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 22-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"रात\":",
          "options": [
            "हम इस पाठ में इकाई 22.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सप्ताह» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («महीना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («साल» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"रात\":",
          "options": [
            "हम इस पाठ में इकाई 22.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («महीना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («साल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सप्ताह» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"रात\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 22.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («साल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सप्ताह» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («महीना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u22-l3": {
    "id": "hi-u22-l3",
    "subject": "hindi",
    "unit": 22,
    "lessonNumber": 3,
    "title": "भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) (Part 3)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 22.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 22.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 22."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 22-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"सप्ताह\":",
          "options": [
            "हम इस पाठ में इकाई 22.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («महीना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («साल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («लाल» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"सप्ताह\":",
          "options": [
            "हम इस पाठ में इकाई 22.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («साल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («लाल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («महीना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"सप्ताह\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 22.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («लाल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («महीना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («साल» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u22-l4": {
    "id": "hi-u22-l4",
    "subject": "hindi",
    "unit": 22,
    "lessonNumber": 4,
    "title": "भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) (Part 4)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 22.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 22.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 22."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 22-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"महीना\":",
          "options": [
            "हम इस पाठ में इकाई 22.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («साल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («लाल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नीला» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"महीना\":",
          "options": [
            "हम इस पाठ में इकाई 22.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («लाल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नीला» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («साल» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"महीना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 22.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नीला» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («साल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («लाल» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u22-l5": {
    "id": "hi-u22-l5",
    "subject": "hindi",
    "unit": 22,
    "lessonNumber": 5,
    "title": "भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) (Part 5)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 22.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 22.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 22."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 22-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"साल\":",
          "options": [
            "हम इस पाठ में इकाई 22.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («लाल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नीला» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पीला» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"साल\":",
          "options": [
            "हम इस पाठ में इकाई 22.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नीला» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पीला» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («लाल» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"साल\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 22.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पीला» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («लाल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नीला» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u23-l1": {
    "id": "hi-u23-l1",
    "subject": "hindi",
    "unit": 23,
    "lessonNumber": 1,
    "title": "सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) (Part 1)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 23.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 23.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 23."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 23-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"लाल\":",
          "options": [
            "हम इस पाठ में इकाई 23.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नीला» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पीला» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हरा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"लाल\":",
          "options": [
            "हम इस पाठ में इकाई 23.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पीला» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हरा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नीला» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"लाल\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 23.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हरा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नीला» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पीला» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u23-l2": {
    "id": "hi-u23-l2",
    "subject": "hindi",
    "unit": 23,
    "lessonNumber": 2,
    "title": "सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) (Part 2)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 23.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 23.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 23."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 23-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"नीला\":",
          "options": [
            "हम इस पाठ में इकाई 23.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पीला» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हरा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सफ़ेद» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"नीला\":",
          "options": [
            "हम इस पाठ में इकाई 23.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हरा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सफ़ेद» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पीला» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"नीला\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 23.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सफ़ेद» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पीला» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हरा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u23-l3": {
    "id": "hi-u23-l3",
    "subject": "hindi",
    "unit": 23,
    "lessonNumber": 3,
    "title": "सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) (Part 3)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 23.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 23.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 23."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 23-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"पीला\":",
          "options": [
            "हम इस पाठ में इकाई 23.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हरा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सफ़ेद» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («काला» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"पीला\":",
          "options": [
            "हम इस पाठ में इकाई 23.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सफ़ेद» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («काला» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हरा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"पीला\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 23.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («काला» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हरा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सफ़ेद» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u23-l4": {
    "id": "hi-u23-l4",
    "subject": "hindi",
    "unit": 23,
    "lessonNumber": 4,
    "title": "सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) (Part 4)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 23.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 23.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 23."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 23-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"हरा\":",
          "options": [
            "हम इस पाठ में इकाई 23.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सफ़ेद» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («काला» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («भूरा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"हरा\":",
          "options": [
            "हम इस पाठ में इकाई 23.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («काला» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («भूरा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सफ़ेद» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"हरा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 23.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («भूरा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सफ़ेद» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («काला» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u23-l5": {
    "id": "hi-u23-l5",
    "subject": "hindi",
    "unit": 23,
    "lessonNumber": 5,
    "title": "सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) (Part 5)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 23.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 23.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 23."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 23-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"सफ़ेद\":",
          "options": [
            "हम इस पाठ में इकाई 23.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («काला» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («भूरा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («गुलाबी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"सफ़ेद\":",
          "options": [
            "हम इस पाठ में इकाई 23.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («भूरा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («गुलाबी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («काला» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"सफ़ेद\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 23.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («गुलाबी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («काला» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («भूरा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u24-l1": {
    "id": "hi-u24-l1",
    "subject": "hindi",
    "unit": 24,
    "lessonNumber": 1,
    "title": "बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) (Part 1)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 24.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 24.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 24."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 24-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"काला\":",
          "options": [
            "हम इस पाठ में इकाई 24.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («भूरा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («गुलाबी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बैंगनी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"काला\":",
          "options": [
            "हम इस पाठ में इकाई 24.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («गुलाबी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बैंगनी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («भूरा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"काला\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 24.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बैंगनी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («भूरा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («गुलाबी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u24-l2": {
    "id": "hi-u24-l2",
    "subject": "hindi",
    "unit": 24,
    "lessonNumber": 2,
    "title": "बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) (Part 2)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 24.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 24.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 24."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 24-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"भूरा\":",
          "options": [
            "हम इस पाठ में इकाई 24.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («गुलाबी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बैंगनी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नारंगी» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"भूरा\":",
          "options": [
            "हम इस पाठ में इकाई 24.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बैंगनी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नारंगी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («गुलाबी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"भूरा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 24.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नारंगी» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («गुलाबी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बैंगनी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u24-l3": {
    "id": "hi-u24-l3",
    "subject": "hindi",
    "unit": 24,
    "lessonNumber": 3,
    "title": "बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) (Part 3)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 24.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 24.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 24."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 24-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"गुलाबी\":",
          "options": [
            "हम इस पाठ में इकाई 24.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बैंगनी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नारंगी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बड़ा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"गुलाबी\":",
          "options": [
            "हम इस पाठ में इकाई 24.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नारंगी» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बड़ा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बैंगनी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"गुलाबी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 24.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बड़ा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बैंगनी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नारंगी» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u24-l4": {
    "id": "hi-u24-l4",
    "subject": "hindi",
    "unit": 24,
    "lessonNumber": 4,
    "title": "बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) (Part 4)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 24.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 24.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 24."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 24-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बैंगनी\":",
          "options": [
            "हम इस पाठ में इकाई 24.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नारंगी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बड़ा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छोटा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बैंगनी\":",
          "options": [
            "हम इस पाठ में इकाई 24.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बड़ा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छोटा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नारंगी» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बैंगनी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 24.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छोटा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नारंगी» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बड़ा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u24-l5": {
    "id": "hi-u24-l5",
    "subject": "hindi",
    "unit": 24,
    "lessonNumber": 5,
    "title": "बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) (Part 5)",
    "level": "B2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 24.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 24.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 24."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 24-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"नारंगी\":",
          "options": [
            "हम इस पाठ में इकाई 24.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बड़ा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छोटा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («लंबा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"नारंगी\":",
          "options": [
            "हम इस पाठ में इकाई 24.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छोटा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («लंबा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बड़ा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"नारंगी\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 24.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («लंबा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बड़ा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छोटा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u25-l1": {
    "id": "hi-u25-l1",
    "subject": "hindi",
    "unit": 25,
    "lessonNumber": 1,
    "title": "पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) (Part 1)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 25.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 25.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 25."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 25-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बड़ा\":",
          "options": [
            "हम इस पाठ में इकाई 25.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छोटा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («लंबा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नाटा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बड़ा\":",
          "options": [
            "हम इस पाठ में इकाई 25.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («लंबा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नाटा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छोटा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बड़ा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 25.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नाटा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छोटा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («लंबा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u25-l2": {
    "id": "hi-u25-l2",
    "subject": "hindi",
    "unit": 25,
    "lessonNumber": 2,
    "title": "पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) (Part 2)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 25.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 25.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 25."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 25-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"छोटा\":",
          "options": [
            "हम इस पाठ में इकाई 25.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («लंबा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नाटा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («तेज़» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"छोटा\":",
          "options": [
            "हम इस पाठ में इकाई 25.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नाटा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («तेज़» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («लंबा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"छोटा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 25.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («तेज़» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («लंबा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नाटा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u25-l3": {
    "id": "hi-u25-l3",
    "subject": "hindi",
    "unit": 25,
    "lessonNumber": 3,
    "title": "पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) (Part 3)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 25.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 25.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 25."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 25-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"लंबा\":",
          "options": [
            "हम इस पाठ में इकाई 25.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नाटा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («तेज़» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («धीमा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"लंबा\":",
          "options": [
            "हम इस पाठ में इकाई 25.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («तेज़» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («धीमा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नाटा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"लंबा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 25.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («धीमा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नाटा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («तेज़» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u25-l4": {
    "id": "hi-u25-l4",
    "subject": "hindi",
    "unit": 25,
    "lessonNumber": 4,
    "title": "पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) (Part 4)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 25.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 25.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 25."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 25-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"नाटा\":",
          "options": [
            "हम इस पाठ में इकाई 25.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («तेज़» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («धीमा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नया» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"नाटा\":",
          "options": [
            "हम इस पाठ में इकाई 25.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («धीमा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नया» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («तेज़» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"नाटा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 25.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नया» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («तेज़» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («धीमा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u25-l5": {
    "id": "hi-u25-l5",
    "subject": "hindi",
    "unit": 25,
    "lessonNumber": 5,
    "title": "पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) (Part 5)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 25.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 25.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 25."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 25-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"तेज़\":",
          "options": [
            "हम इस पाठ में इकाई 25.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («धीमा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नया» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पुराना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"तेज़\":",
          "options": [
            "हम इस पाठ में इकाई 25.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नया» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पुराना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («धीमा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"तेज़\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 25.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पुराना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («धीमा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नया» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u26-l1": {
    "id": "hi-u26-l1",
    "subject": "hindi",
    "unit": 26,
    "lessonNumber": 1,
    "title": "संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) (Part 1)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 26.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 26.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 26."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 26-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"धीमा\":",
          "options": [
            "हम इस पाठ में इकाई 26.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नया» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पुराना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अच्छा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"धीमा\":",
          "options": [
            "हम इस पाठ में इकाई 26.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पुराना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अच्छा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नया» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"धीमा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 26.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अच्छा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नया» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पुराना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u26-l2": {
    "id": "hi-u26-l2",
    "subject": "hindi",
    "unit": 26,
    "lessonNumber": 2,
    "title": "संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) (Part 2)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 26.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 26.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 26."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 26-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"नया\":",
          "options": [
            "हम इस पाठ में इकाई 26.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पुराना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अच्छा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सुंदर» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"नया\":",
          "options": [
            "हम इस पाठ में इकाई 26.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अच्छा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सुंदर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पुराना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"नया\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 26.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सुंदर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पुराना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अच्छा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u26-l3": {
    "id": "hi-u26-l3",
    "subject": "hindi",
    "unit": 26,
    "lessonNumber": 3,
    "title": "संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) (Part 3)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 26.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 26.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 26."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 26-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"पुराना\":",
          "options": [
            "हम इस पाठ में इकाई 26.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अच्छा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सुंदर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («समझना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"पुराना\":",
          "options": [
            "हम इस पाठ में इकाई 26.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सुंदर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («समझना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अच्छा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"पुराना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 26.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («समझना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अच्छा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सुंदर» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u26-l4": {
    "id": "hi-u26-l4",
    "subject": "hindi",
    "unit": 26,
    "lessonNumber": 4,
    "title": "संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) (Part 4)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 26.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 26.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 26."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 26-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"अच्छा\":",
          "options": [
            "हम इस पाठ में इकाई 26.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सुंदर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («समझना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («जानना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"अच्छा\":",
          "options": [
            "हम इस पाठ में इकाई 26.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («समझना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («जानना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सुंदर» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"अच्छा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 26.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («जानना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सुंदर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («समझना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u26-l5": {
    "id": "hi-u26-l5",
    "subject": "hindi",
    "unit": 26,
    "lessonNumber": 5,
    "title": "संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) (Part 5)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 26.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 26.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 26."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 26-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"सुंदर\":",
          "options": [
            "हम इस पाठ में इकाई 26.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («समझना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («जानना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सोचना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"सुंदर\":",
          "options": [
            "हम इस पाठ में इकाई 26.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («जानना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सोचना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («समझना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"सुंदर\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 26.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सोचना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («समझना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («जानना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u27-l1": {
    "id": "hi-u27-l1",
    "subject": "hindi",
    "unit": 27,
    "lessonNumber": 1,
    "title": "हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) (Part 1)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 27.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 27.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 27."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 27-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"समझना\":",
          "options": [
            "हम इस पाठ में इकाई 27.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («जानना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सोचना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («याद रखना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"समझना\":",
          "options": [
            "हम इस पाठ में इकाई 27.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सोचना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («याद रखना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («जानना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"समझना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 27.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («याद रखना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («जानना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सोचना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u27-l2": {
    "id": "hi-u27-l2",
    "subject": "hindi",
    "unit": 27,
    "lessonNumber": 2,
    "title": "हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) (Part 2)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 27.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 27.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 27."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 27-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"जानना\":",
          "options": [
            "हम इस पाठ में इकाई 27.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सोचना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («याद रखना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बोलना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"जानना\":",
          "options": [
            "हम इस पाठ में इकाई 27.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («याद रखना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बोलना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सोचना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"जानना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 27.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बोलना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सोचना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («याद रखना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u27-l3": {
    "id": "hi-u27-l3",
    "subject": "hindi",
    "unit": 27,
    "lessonNumber": 3,
    "title": "हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) (Part 3)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 27.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 27.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 27."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 27-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"सोचना\":",
          "options": [
            "हम इस पाठ में इकाई 27.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («याद रखना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बोलना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पढ़ना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"सोचना\":",
          "options": [
            "हम इस पाठ में इकाई 27.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बोलना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पढ़ना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («याद रखना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"सोचना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 27.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पढ़ना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («याद रखना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बोलना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u27-l4": {
    "id": "hi-u27-l4",
    "subject": "hindi",
    "unit": 27,
    "lessonNumber": 4,
    "title": "हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) (Part 4)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 27.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 27.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 27."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 27-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"याद रखना\":",
          "options": [
            "हम इस पाठ में इकाई 27.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बोलना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पढ़ना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («लिखना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"याद रखना\":",
          "options": [
            "हम इस पाठ में इकाई 27.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पढ़ना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («लिखना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बोलना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"याद रखना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 27.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («लिखना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बोलना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पढ़ना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u27-l5": {
    "id": "hi-u27-l5",
    "subject": "hindi",
    "unit": 27,
    "lessonNumber": 5,
    "title": "हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) (Part 5)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 27.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 27.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 27."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 27-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बोलना\":",
          "options": [
            "हम इस पाठ में इकाई 27.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पढ़ना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («लिखना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सुनना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बोलना\":",
          "options": [
            "हम इस पाठ में इकाई 27.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («लिखना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सुनना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पढ़ना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बोलना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 27.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सुनना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पढ़ना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («लिखना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u28-l1": {
    "id": "hi-u28-l1",
    "subject": "hindi",
    "unit": 28,
    "lessonNumber": 1,
    "title": "पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) (Part 1)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 28.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 28.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 28."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 28-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"पढ़ना\":",
          "options": [
            "हम इस पाठ में इकाई 28.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («लिखना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सुनना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («देखना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"पढ़ना\":",
          "options": [
            "हम इस पाठ में इकाई 28.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सुनना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («देखना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («लिखना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"पढ़ना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 28.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («देखना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («लिखना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सुनना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u28-l2": {
    "id": "hi-u28-l2",
    "subject": "hindi",
    "unit": 28,
    "lessonNumber": 2,
    "title": "पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) (Part 2)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 28.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 28.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 28."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 28-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"लिखना\":",
          "options": [
            "हम इस पाठ में इकाई 28.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सुनना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («देखना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («चाहना» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"लिखना\":",
          "options": [
            "हम इस पाठ में इकाई 28.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («देखना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («चाहना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सुनना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"लिखना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 28.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («चाहना» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सुनना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («देखना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u28-l3": {
    "id": "hi-u28-l3",
    "subject": "hindi",
    "unit": 28,
    "lessonNumber": 3,
    "title": "पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) (Part 3)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 28.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 28.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 28."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 28-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"सुनना\":",
          "options": [
            "हम इस पाठ में इकाई 28.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («देखना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («चाहना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्कूल» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"सुनना\":",
          "options": [
            "हम इस पाठ में इकाई 28.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («चाहना» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्कूल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («देखना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"सुनना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 28.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्कूल» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («देखना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («चाहना» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u28-l4": {
    "id": "hi-u28-l4",
    "subject": "hindi",
    "unit": 28,
    "lessonNumber": 4,
    "title": "पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) (Part 4)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 28.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 28.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 28."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 28-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"देखना\":",
          "options": [
            "हम इस पाठ में इकाई 28.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («चाहना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्कूल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कॉलेज» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"देखना\":",
          "options": [
            "हम इस पाठ में इकाई 28.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्कूल» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कॉलेज» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («चाहना» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"देखना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 28.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कॉलेज» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («चाहना» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्कूल» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u28-l5": {
    "id": "hi-u28-l5",
    "subject": "hindi",
    "unit": 28,
    "lessonNumber": 5,
    "title": "पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) (Part 5)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 28.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 28.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 28."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 28-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"चाहना\":",
          "options": [
            "हम इस पाठ में इकाई 28.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्कूल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कॉलेज» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अध्यापक» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"चाहना\":",
          "options": [
            "हम इस पाठ में इकाई 28.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कॉलेज» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अध्यापक» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्कूल» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"चाहना\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 28.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अध्यापक» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्कूल» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कॉलेज» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u29-l1": {
    "id": "hi-u29-l1",
    "subject": "hindi",
    "unit": 29,
    "lessonNumber": 1,
    "title": "दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) (Part 1)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 29.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 29.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 29."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 29-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"स्कूल\":",
          "options": [
            "हम इस पाठ में इकाई 29.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कॉलेज» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अध्यापक» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छात्र» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"स्कूल\":",
          "options": [
            "हम इस पाठ में इकाई 29.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अध्यापक» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छात्र» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कॉलेज» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"स्कूल\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 29.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («छात्र» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कॉलेज» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अध्यापक» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u29-l2": {
    "id": "hi-u29-l2",
    "subject": "hindi",
    "unit": 29,
    "lessonNumber": 2,
    "title": "दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) (Part 2)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 29.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 29.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 29."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 29-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"कॉलेज\":",
          "options": [
            "हम इस पाठ में इकाई 29.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अध्यापक» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छात्र» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कक्षा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"कॉलेज\":",
          "options": [
            "हम इस पाठ में इकाई 29.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छात्र» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कक्षा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अध्यापक» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"कॉलेज\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 29.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कक्षा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अध्यापक» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («छात्र» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u29-l3": {
    "id": "hi-u29-l3",
    "subject": "hindi",
    "unit": 29,
    "lessonNumber": 3,
    "title": "दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) (Part 3)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 29.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 29.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 29."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 29-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"अध्यापक\":",
          "options": [
            "हम इस पाठ में इकाई 29.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छात्र» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कक्षा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («परीक्षा» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"अध्यापक\":",
          "options": [
            "हम इस पाठ में इकाई 29.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कक्षा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («परीक्षा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छात्र» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"अध्यापक\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 29.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («परीक्षा» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («छात्र» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कक्षा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u29-l4": {
    "id": "hi-u29-l4",
    "subject": "hindi",
    "unit": 29,
    "lessonNumber": 4,
    "title": "दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) (Part 4)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 29.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 29.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 29."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 29-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"छात्र\":",
          "options": [
            "हम इस पाठ में इकाई 29.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कक्षा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («परीक्षा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («परिणाम» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"छात्र\":",
          "options": [
            "हम इस पाठ में इकाई 29.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («परीक्षा» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («परिणाम» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कक्षा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"छात्र\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 29.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («परिणाम» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कक्षा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («परीक्षा» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u29-l5": {
    "id": "hi-u29-l5",
    "subject": "hindi",
    "unit": 29,
    "lessonNumber": 5,
    "title": "दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) (Part 5)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 29.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 29.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 29."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 29-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"कक्षा\":",
          "options": [
            "हम इस पाठ में इकाई 29.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («परीक्षा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («परिणाम» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पुस्तकालय» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"कक्षा\":",
          "options": [
            "हम इस पाठ में इकाई 29.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («परिणाम» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पुस्तकालय» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («परीक्षा» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"कक्षा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 29.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («पुस्तकालय» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («परीक्षा» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («परिणाम» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u30-l1": {
    "id": "hi-u30-l1",
    "subject": "hindi",
    "unit": 30,
    "lessonNumber": 1,
    "title": "वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) (Part 1)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 30.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 30.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 30."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 30-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"परीक्षा\":",
          "options": [
            "हम इस पाठ में इकाई 30.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («परिणाम» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पुस्तकालय» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («डिग्री» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"परीक्षा\":",
          "options": [
            "हम इस पाठ में इकाई 30.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पुस्तकालय» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («डिग्री» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («परिणाम» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"परीक्षा\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 30.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («डिग्री» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («परिणाम» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («पुस्तकालय» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u30-l2": {
    "id": "hi-u30-l2",
    "subject": "hindi",
    "unit": 30,
    "lessonNumber": 2,
    "title": "वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) (Part 2)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 30.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 30.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 30."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 30-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"परिणाम\":",
          "options": [
            "हम इस पाठ में इकाई 30.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पुस्तकालय» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («डिग्री» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कलम» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"परिणाम\":",
          "options": [
            "हम इस पाठ में इकाई 30.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («डिग्री» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कलम» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पुस्तकालय» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"परिणाम\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 30.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कलम» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («पुस्तकालय» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («डिग्री» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u30-l3": {
    "id": "hi-u30-l3",
    "subject": "hindi",
    "unit": 30,
    "lessonNumber": 3,
    "title": "वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) (Part 3)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 30.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 30.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 30."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 30-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"पुस्तकालय\":",
          "options": [
            "हम इस पाठ में इकाई 30.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («डिग्री» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कलम» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बैंक» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"पुस्तकालय\":",
          "options": [
            "हम इस पाठ में इकाई 30.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कलम» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बैंक» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («डिग्री» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"पुस्तकालय\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 30.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («बैंक» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («डिग्री» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कलम» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u30-l4": {
    "id": "hi-u30-l4",
    "subject": "hindi",
    "unit": 30,
    "lessonNumber": 4,
    "title": "वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) (Part 4)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 30.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 30.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 30."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 30-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"डिग्री\":",
          "options": [
            "हम इस पाठ में इकाई 30.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कलम» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बैंक» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («खाता» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"डिग्री\":",
          "options": [
            "हम इस पाठ में इकाई 30.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बैंक» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («खाता» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कलम» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"डिग्री\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 30.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («खाता» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कलम» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («बैंक» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u30-l5": {
    "id": "hi-u30-l5",
    "subject": "hindi",
    "unit": 30,
    "lessonNumber": 5,
    "title": "वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) (Part 5)",
    "level": "C1",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 30.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 30.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 30."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 30-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"कलम\":",
          "options": [
            "हम इस पाठ में इकाई 30.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बैंक» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («खाता» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («ऋण» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"कलम\":",
          "options": [
            "हम इस पाठ में इकाई 30.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («खाता» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («ऋण» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बैंक» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"कलम\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 30.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («ऋण» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («बैंक» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («खाता» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u31-l1": {
    "id": "hi-u31-l1",
    "subject": "hindi",
    "unit": 31,
    "lessonNumber": 1,
    "title": "दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) (Part 1)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 31.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 31.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 31."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 31-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"बैंक\":",
          "options": [
            "हम इस पाठ में इकाई 31.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («खाता» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («ऋण» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («ब्याज» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"बैंक\":",
          "options": [
            "हम इस पाठ में इकाई 31.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («ऋण» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («ब्याज» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («खाता» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"बैंक\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 31.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («ब्याज» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («खाता» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («ऋण» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u31-l2": {
    "id": "hi-u31-l2",
    "subject": "hindi",
    "unit": 31,
    "lessonNumber": 2,
    "title": "दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) (Part 2)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 31.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 31.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 31."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 31-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"खाता\":",
          "options": [
            "हम इस पाठ में इकाई 31.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («ऋण» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («ब्याज» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कर» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"खाता\":",
          "options": [
            "हम इस पाठ में इकाई 31.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («ब्याज» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («ऋण» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"खाता\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 31.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («ऋण» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («ब्याज» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u31-l3": {
    "id": "hi-u31-l3",
    "subject": "hindi",
    "unit": 31,
    "lessonNumber": 3,
    "title": "दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) (Part 3)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 31.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 31.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 31."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 31-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ऋण\":",
          "options": [
            "हम इस पाठ में इकाई 31.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («ब्याज» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («व्यापार» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ऋण\":",
          "options": [
            "हम इस पाठ में इकाई 31.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («व्यापार» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («ब्याज» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ऋण\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 31.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («व्यापार» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («ब्याज» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कर» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u31-l4": {
    "id": "hi-u31-l4",
    "subject": "hindi",
    "unit": 31,
    "lessonNumber": 4,
    "title": "दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) (Part 4)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 31.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 31.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 31."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 31-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"ब्याज\":",
          "options": [
            "हम इस पाठ में इकाई 31.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («व्यापार» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दस्तावेज़» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"ब्याज\":",
          "options": [
            "हम इस पाठ में इकाई 31.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («व्यापार» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दस्तावेज़» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कर» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"ब्याज\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 31.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («दस्तावेज़» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («व्यापार» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u31-l5": {
    "id": "hi-u31-l5",
    "subject": "hindi",
    "unit": 31,
    "lessonNumber": 5,
    "title": "दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) (Part 5)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 31.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 31.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 31."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 31-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"कर\":",
          "options": [
            "हम इस पाठ में इकाई 31.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («व्यापार» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दस्तावेज़» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हस्ताक्षर» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"कर\":",
          "options": [
            "हम इस पाठ में इकाई 31.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दस्तावेज़» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हस्ताक्षर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («व्यापार» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"कर\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 31.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («हस्ताक्षर» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («व्यापार» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («दस्तावेज़» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u32-l1": {
    "id": "hi-u32-l1",
    "subject": "hindi",
    "unit": 32,
    "lessonNumber": 1,
    "title": "राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) (Part 1)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 32.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 32.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 32."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 32-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"व्यापार\":",
          "options": [
            "हम इस पाठ में इकाई 32.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दस्तावेज़» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हस्ताक्षर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नियम» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"व्यापार\":",
          "options": [
            "हम इस पाठ में इकाई 32.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हस्ताक्षर» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नियम» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दस्तावेज़» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"व्यापार\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 32.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नियम» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («दस्तावेज़» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («हस्ताक्षर» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u32-l2": {
    "id": "hi-u32-l2",
    "subject": "hindi",
    "unit": 32,
    "lessonNumber": 2,
    "title": "राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) (Part 2)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 32.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 32.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 32."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 32-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"दस्तावेज़\":",
          "options": [
            "हम इस पाठ में इकाई 32.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हस्ताक्षर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नियम» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कानून» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"दस्तावेज़\":",
          "options": [
            "हम इस पाठ में इकाई 32.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नियम» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कानून» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हस्ताक्षर» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"दस्तावेज़\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 32.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कानून» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («हस्ताक्षर» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नियम» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u32-l3": {
    "id": "hi-u32-l3",
    "subject": "hindi",
    "unit": 32,
    "lessonNumber": 3,
    "title": "राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) (Part 3)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 32.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 32.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 32."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 32-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"हस्ताक्षर\":",
          "options": [
            "हम इस पाठ में इकाई 32.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नियम» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कानून» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अदालत» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"हस्ताक्षर\":",
          "options": [
            "हम इस पाठ में इकाई 32.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कानून» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अदालत» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नियम» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"हस्ताक्षर\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 32.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अदालत» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नियम» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («कानून» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u32-l4": {
    "id": "hi-u32-l4",
    "subject": "hindi",
    "unit": 32,
    "lessonNumber": 4,
    "title": "राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) (Part 4)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 32.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 32.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 32."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 32-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"नियम\":",
          "options": [
            "हम इस पाठ में इकाई 32.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कानून» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अदालत» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («न्यायाधीश» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"नियम\":",
          "options": [
            "हम इस पाठ में इकाई 32.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अदालत» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («न्यायाधीश» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कानून» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"नियम\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 32.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («न्यायाधीश» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («कानून» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अदालत» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u32-l5": {
    "id": "hi-u32-l5",
    "subject": "hindi",
    "unit": 32,
    "lessonNumber": 5,
    "title": "राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) (Part 5)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 32.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 32.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 32."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 32-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"कानून\":",
          "options": [
            "हम इस पाठ में इकाई 32.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अदालत» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («न्यायाधीश» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («वकील» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"कानून\":",
          "options": [
            "हम इस पाठ में इकाई 32.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («न्यायाधीश» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («वकील» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अदालत» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"कानून\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 32.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («वकील» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अदालत» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («न्यायाधीश» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u33-l1": {
    "id": "hi-u33-l1",
    "subject": "hindi",
    "unit": 33,
    "lessonNumber": 1,
    "title": "उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) (Part 1)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 33.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 33.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 33."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 33-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"अदालत\":",
          "options": [
            "हम इस पाठ में इकाई 33.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («न्यायाधीश» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («वकील» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अधिकार» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"अदालत\":",
          "options": [
            "हम इस पाठ में इकाई 33.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («वकील» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अधिकार» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («न्यायाधीश» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"अदालत\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 33.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («अधिकार» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («न्यायाधीश» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («वकील» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u33-l2": {
    "id": "hi-u33-l2",
    "subject": "hindi",
    "unit": 33,
    "lessonNumber": 2,
    "title": "उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) (Part 2)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 33.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 33.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 33."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 33-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"न्यायाधीश\":",
          "options": [
            "हम इस पाठ में इकाई 33.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («वकील» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अधिकार» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («न्याय» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"न्यायाधीश\":",
          "options": [
            "हम इस पाठ में इकाई 33.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अधिकार» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («न्याय» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («वकील» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"न्यायाधीश\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 33.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («न्याय» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («वकील» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («अधिकार» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u33-l3": {
    "id": "hi-u33-l3",
    "subject": "hindi",
    "unit": 33,
    "lessonNumber": 3,
    "title": "उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) (Part 3)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 33.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 33.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 33."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 33-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"वकील\":",
          "options": [
            "हम इस पाठ में इकाई 33.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अधिकार» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («न्याय» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («गवाह» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"वकील\":",
          "options": [
            "हम इस पाठ में इकाई 33.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («न्याय» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («गवाह» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अधिकार» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"वकील\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 33.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («गवाह» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («अधिकार» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («न्याय» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u33-l4": {
    "id": "hi-u33-l4",
    "subject": "hindi",
    "unit": 33,
    "lessonNumber": 4,
    "title": "उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) (Part 4)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 33.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 33.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 33."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 33-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"अधिकार\":",
          "options": [
            "हम इस पाठ में इकाई 33.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («न्याय» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («गवाह» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («फ़ैसला» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"अधिकार\":",
          "options": [
            "हम इस पाठ में इकाई 33.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («गवाह» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («फ़ैसला» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («न्याय» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"अधिकार\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 33.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («फ़ैसला» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («न्याय» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («गवाह» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u33-l5": {
    "id": "hi-u33-l5",
    "subject": "hindi",
    "unit": 33,
    "lessonNumber": 5,
    "title": "उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) (Part 5)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 33.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 33.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 33."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 33-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"न्याय\":",
          "options": [
            "हम इस पाठ में इकाई 33.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («गवाह» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («फ़ैसला» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («संविधान» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"न्याय\":",
          "options": [
            "हम इस पाठ में इकाई 33.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («फ़ैसला» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («संविधान» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («गवाह» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"न्याय\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 33.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («संविधान» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («गवाह» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («फ़ैसला» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u34-l1": {
    "id": "hi-u34-l1",
    "subject": "hindi",
    "unit": 34,
    "lessonNumber": 1,
    "title": "शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) (Part 1)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 34.1) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 34.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 34."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 34-1)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"गवाह\":",
          "options": [
            "हम इस पाठ में इकाई 34.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («फ़ैसला» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («संविधान» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सरकार» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"गवाह\":",
          "options": [
            "हम इस पाठ में इकाई 34.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («संविधान» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सरकार» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («फ़ैसला» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"गवाह\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 34.1 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («सरकार» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («फ़ैसला» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («संविधान» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u34-l2": {
    "id": "hi-u34-l2",
    "subject": "hindi",
    "unit": 34,
    "lessonNumber": 2,
    "title": "शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) (Part 2)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 34.2) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 34.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 34."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 34-2)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"फ़ैसला\":",
          "options": [
            "हम इस पाठ में इकाई 34.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («संविधान» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सरकार» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्वतंत्रता» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"फ़ैसला\":",
          "options": [
            "हम इस पाठ में इकाई 34.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सरकार» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्वतंत्रता» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («संविधान» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"फ़ैसला\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 34.2 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («स्वतंत्रता» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («संविधान» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («सरकार» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u34-l3": {
    "id": "hi-u34-l3",
    "subject": "hindi",
    "unit": 34,
    "lessonNumber": 3,
    "title": "शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) (Part 3)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 34.3) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 34.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 34."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 34-3)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"संविधान\":",
          "options": [
            "हम इस पाठ में इकाई 34.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सरकार» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्वतंत्रता» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नमस्ते» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"संविधान\":",
          "options": [
            "हम इस पाठ में इकाई 34.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्वतंत्रता» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नमस्ते» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सरकार» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"संविधान\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 34.3 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («नमस्ते» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («सरकार» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («स्वतंत्रता» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u34-l4": {
    "id": "hi-u34-l4",
    "subject": "hindi",
    "unit": 34,
    "lessonNumber": 4,
    "title": "शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) (Part 4)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 34.4) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 34.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 34."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 34-4)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"सरकार\":",
          "options": [
            "हम इस पाठ में इकाई 34.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्वतंत्रता» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नमस्ते» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («धन्यवाद» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"सरकार\":",
          "options": [
            "हम इस पाठ में इकाई 34.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नमस्ते» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («धन्यवाद» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्वतंत्रता» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"सरकार\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 34.4 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («धन्यवाद» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («स्वतंत्रता» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («नमस्ते» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  },
  "hi-u34-l5": {
    "id": "hi-u34-l5",
    "subject": "hindi",
    "unit": 34,
    "lessonNumber": 5,
    "title": "शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) (Part 5)",
    "level": "C2",
    "objective": "Master Hindi grammar and Devanagari syntax for हिंदी व्याकरण और वाक्य विन्यास (इकाई 34.5) with authentic linguistic precision.",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "हम इस पाठ में इकाई 34.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
          "reading": "[həm ɪs paːʈʰ mẽː əbʱjaːs kərteː hɛ̃ː] (hum is paht mayn)",
          "translation": "We practice the core grammatical rules and sentence structure of Unit 34."
        },
        {
          "target": "कृपया इस वाक्य में क्रिया और परसर्ग के सही समन्वय पर ध्यान दें (पाठ 34-5)।",
          "reading": "[krɪpəjaː ɪs vaːkjə mẽː d̪ʱjaːn d̪ẽː] (krip-yah is vahk-yuh mayn)",
          "translation": "Please pay attention to the correct coordination of verb and postposition."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"स्वतंत्रता\":",
          "options": [
            "हम इस पाठ में इकाई 34.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नमस्ते» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («धन्यवाद» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कृपया» का अनुचित स्थान)"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"स्वतंत्रता\":",
          "options": [
            "हम इस पाठ में इकाई 34.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "लिंग-वचन समन्वय का असंगत प्रयोग («धन्यवाद» से संबंधित)",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कृपया» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नमस्ते» का अशुद्ध रूप)"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"स्वतंत्रता\": Which sentence is completely correct?",
          "options": [
            "हम इस पाठ में इकाई 34.5 के प्रमुख व्याकरणिक नियमों और वाक्य संरचना का अभ्यास करते हैं।",
            "अस्वाभाविक पदक्रम वाला अमानक वाक्य («कृपया» का अनुचित स्थान)",
            "कारक व परसर्ग की त्रुटिपूर्ण रचना («नमस्ते» का अशुद्ध रूप)",
            "लिंग-वचन समन्वय का असंगत प्रयोग («धन्यवाद» से संबंधित)"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        }
      ]
    }
  }
};
  var CURRICULUM = {
    subject: 'hindi',
    units: UNITS,
    lessons: LESSONS
  };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['hindi'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
