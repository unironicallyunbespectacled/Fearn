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
    "title": "देवनागरी लिपि का परिचय, स्वर-मात्राएं और बुनियादी अभिवादन",
    "level": "A1",
    "objective": "देवनागरी वर्णमाला के मूल स्वरूप, स्वरों (ह्रस्व व दीर्घ), शिरोरेखा, अंतर्निहित 'अ' ध्वनि तथा बुनियादी अभिवादनों (नमस्ते, नमस्कार, सुप्रभात) का सटीक उच्चारण और प्रयोग सीखना।",
    "presentation": {
      "explanation": "देवनागरी एक अत्यंत समृद्ध और वैज्ञानिक अक्षरात्मक (Abugida) लिपि है, जो बाएं से दाएं लिखी जाती है और प्रत्येक वर्ण के ऊपर एक क्षैतिज रेखा होती है जिसे «शिरोरेखा» कहते हैं:\n\n1. स्वर और मात्राओं की व्यवस्था:\n   - मूल स्वर: अ, आ, इ, ई, उ, ऊ, ऋ, ए, ऐ, ओ, औ, अं (अनुस्वार), अः (विसर्ग)।\n   - प्रत्येक व्यंजन में 'अ' की ध्वनि स्वाभाविक रूप से जुड़ी होती है (जैसे: क् + अ = क)। अन्य स्वरों को दर्शाने के लिए व्यंजनों के साथ मात्राएं लगाई जाती हैं: ा (आ), ि (इ), ी (ई), ु (उ), ू (ऊ), े (ए), ै (ऐ), ो (ओ), ौ (औ)।\n\n2. प्रारंभिक शिष्टाचार और अभिवादन:\n   - «नमस्ते» अथवा «नमस्कार» — दोनों हाथ जोड़कर किया जाने वाला पारंपरिक और सार्वभौमिक भारतीय अभिवादन है जो दिन के किसी भी समय प्रयोग किया जा सकता है।\n   - «सुप्रभात» — प्रातःकाल के समय मंगलकामना व्यक्त करने हेतु प्रयुक्त होता है।\n   - «शुभ संध्या» — सायंकाल के समय कुशलक्षेम और अभिवादन हेतु प्रयुक्त होता है।\n   - «शुभ रात्रि» — रात्रि के समय विदा लेते समय मंगलकामना हेतु कहा जाता है।\n\n3. वाक्य संरचना का नियम:\n   - हिंदी में सामान्य वाक्य का पदक्रम कर्ता + कर्म + क्रिया (Subject-Object-Verb) होता है, जैसे: «मेरा नाम रोहन है» (कर्ता: मेरा नाम, पूरक: रोहन, क्रिया: है)।",
      "examples": [
        {
          "target": "नमस्ते! मेरा नाम रोहन है।",
          "reading": "namaste! meraa naam rohan hai. [nəməsteː meːraː naːm roːɦən hɛː] (nuh-muhs-TAY! may-rah nahm ROH-huhn hy)",
          "translation": "Hello! My name is Rohan."
        },
        {
          "target": "सुप्रभात! आप आज कैसे हैं?",
          "reading": "suprabhaat! aap aaj kaise hain? [sʊprəbʱaːt aːp aːdʒ kɛːseː hɛ̃ː] (soo-pruh-BHAHT! ahp ahj KY-say hyn?)",
          "translation": "Good morning! How are you today?"
        },
        {
          "target": "शुभ संध्या, अध्यापक जी!",
          "reading": "shubh sandhyaa, adhyaapak jee! [ʃʊbʱ sən̪d̪ʱjaː əd̪ʱjaːpək dʒiː] (shoobh suhn-DHYAH, uh-DHYAH-puhk jee!)",
          "translation": "Good evening, respected teacher!"
        }
      ],
      "mnemonics": [
        "दोनों हाथ जोड़कर 'नमन' करें — «नमस्ते»; सुबह का शुभ सूर्य — «सुप्रभात»; रात की मीठी नींद — «शुभ रात्रि»!"
      ],
      "culturalNotes": [
        "«नमस्ते» शब्द संस्कृत के 'नमस्' (प्रणाम) और 'ते' (आपको) से बना है, जिसका अर्थ है 'मैं आपके भीतर की दिव्यता को नमन करता हूँ'।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "हिंदी में दिन के किसी भी समय आदरपूर्वक अभिवादन करने के लिए सबसे उपयुक्त और सार्वभौमिक शब्द कौन-सा है?",
          "options": [
            "नमस्ते / नमस्कार (Namaste / Namaskar - Universal respectful greeting)",
            "अलविदा",
            "माफ़ कीजिए",
            "धन्यवाद"
          ],
          "answerIndex": 0,
          "explanation": "«नमस्ते» और «नमस्कार» हिंदी में सबसे सामान्य और आदरसूचक पारंपरिक अभिवादन हैं।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "देवनागरी लिपि में अक्षरों के ऊपर खींची जाने वाली क्षैतिज रेखा को क्या कहा जाता है?",
          "options": [
            "शिरोरेखा (Shirorekha - Top horizontal hanging line in Devanagari)",
            "मात्रा",
            "हलन्त",
            "अनुस्वार"
          ],
          "answerIndex": 0,
          "explanation": "देवनागरी लिपि में वर्णों के शीर्ष पर लगाई जाने वाली रेखा को «शिरोरेखा» कहते हैं।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "प्रातःकाल मिलने पर शिष्टाचारवश किसी से क्या कहना सबसे उचित होगा?",
          "options": [
            "सुप्रभात! आप कैसे हैं? (Good morning! How are you?)",
            "शुभ रात्रि, कल मिलेंगे।",
            "अलविदा, फिर मिलेंगे।",
            "माफ़ कीजिए, मुझे जाना है।"
          ],
          "answerIndex": 0,
          "explanation": "सुबह के समय मिलने पर «सुप्रभात!» कहकर कुशलक्षेम पूछना मानक शिष्टाचार है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u1-l2": {
    "id": "hi-u1-l2",
    "subject": "hindi",
    "unit": 1,
    "lessonNumber": 2,
    "title": "व्यंजन वर्गीकरण, महाप्राण-अल्पप्राण और शिष्टाचार के शब्द",
    "level": "A1",
    "objective": "देवनागरी व्यंजनों के उच्चारण-स्थान (कण्ठ्य, तालव्य, मूर्धन्य, दन्त्य, ओष्ठ्य), अल्पप्राण/महाप्राण भेद, नुक़्ता ध्वनियों तथा शिष्टाचार सूचक शब्दों (धन्यवाद, कृपया, माफ़ कीजिए) को समझना।",
    "presentation": {
      "explanation": "हिंदी वर्णमाला का व्यंजन तंत्र पूर्णतः ध्वन्यात्मक और वैज्ञानिक नियमों पर आधारित है, जहाँ प्रत्येक वर्ण का उच्चारण स्थान निश्चित है:\n\n1. स्पर्श व्यंजन वर्ग (उच्चारण स्थान के आधार पर पांच वर्ग):\n   - क-वर्ग (कण्ठ्य ध्वनि): क, ख, ग, घ, ङ (कंठ से उच्चारित);\n   - च-वर्ग (तालव्य ध्वनि): च, छ, ज, झ, ञ (कठोर तालु से उच्चारित);\n   - ट-वर्ग (मूर्धन्य ध्वनि): ट, ठ, ड, ढ, ण (मूर्धा या तालु के ऊपरी भाग से जीभ मोड़कर);\n   - त-वर्ग (दन्त्य ध्वनि): त, थ, द, ध, न (दांतों के स्पर्श से उच्चारित);\n   - प-वर्ग (ओष्ठ्य ध्वनि): प, फ, ब, भ, म (दोनों होंठों के स्पर्श से उच्चारित)।\n\n2. अल्पप्राण और महाप्राण का ध्वन्यात्मक भेद:\n   - अल्पप्राण: जिन वर्णों के उच्चारण में कम वायु और हल्की ध्वनि निकलती है (क, ग, च, ज, ट, ड, त, द, प, ब)।\n   - महाप्राण: जिन वर्णों के उच्चारण में श्वास वायु हकार जैसी भारी ध्वनि के साथ निकलती है (ख, घ, छ, झ, ठ, ढ, थ, ध, फ, भ)। जैसे: 'कल' (बीता/आने वाला दिन) बनाम 'खल' (दुष्ट व्यक्ति)।\n\n3. नुक़्ता ध्वनियां और शिष्टाचार शब्दावली:\n   - नुक़्ता (़) लगाकर अरबी-फ़ारसी मूल की ध्वनियां लिखी जाती हैं: क़, ख़, ग़, ज़, फ़।\n   - «धन्यवाद» अथवा «शुक्रिया» — किसी के उपकार या सहायता के प्रति कृतज्ञता प्रकट करने हेतु प्रयुक्त होता है।\n   - «कृपया» — किसी से विनम्र अनुरोध अथवा याचना करने हेतु वाक्य के आरंभ में प्रयुक्त होता है।\n   - «माफ़ कीजिए» अथवा «क्षमा कीजिए» — भूल स्वीकारने या ध्यान आकर्षित करने हेतु कहा जाता है।",
      "examples": [
        {
          "target": "आपकी सहायता के लिए बहुत-बहुत धन्यवाद।",
          "reading": "aapki sahayata ke liye bahut-bahut dhanyavaad. [aːpkiː səɦaːjət̪aː keː lɪjeː bəɦʊt̪ bəɦʊt̪ d̪ʱənjəʋaːd̪] (ahp-kee suh-HAH-yuh-tah kay lee-ay buh-hoot buh-hoot dhuhn-yuh-VAHD)",
          "translation": "Thank you very much for your help."
        },
        {
          "target": "कृपया यहाँ बैठिए और पानी पीजिए।",
          "reading": "kripaya yahaan baithiye aur paani peejiye. [krɪpəjaː jəɦaː̃ bɛːʈʰɪjeː ɔːr paːniː piːdʒɪjeː] (krih-puh-YAH yuh-HAHN by-thee-yay owr PAH-nee pee-jee-yay)",
          "translation": "Please sit here and drink water."
        },
        {
          "target": "माफ़ कीजिए, क्या आप हिंदी बोलते हैं?",
          "reading": "maaf kijiye, kya aap hindi bolte hain? [maːf kiːdʒɪjeː kjaː aːp hɪn̪d̪iː boːlteː hɛ̃ː] (mahf KEE-jee-yay, kyah ahp HEEN-dee bohl-tay hyn?)",
          "translation": "Excuse me, do you speak Hindi?"
        }
      ],
      "mnemonics": [
        "अल्पप्राण = हल्की फूंक (क, त, प); महाप्राण = भारी श्वास (ख, थ, फ); आभार = धन्यवाद; विनय = कृपया; भूल = माफ़ कीजिए!"
      ],
      "culturalNotes": [
        "हिंदी में किसी व्यक्ति के नाम या पद के पीछे 'जी' लगाना (जैसे: वर्मा जी, डॉक्टर जी, पिताजी) गहरे सम्मान और आत्मीयता का प्रतीक है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "हिंदी में किसी से विनम्रतापूर्वक अनुरोध (Request) करते समय वाक्य के आरंभ में किस शिष्टाचार शब्द का प्रयोग होता है?",
          "options": [
            "कृपया (Kripaya - Please)",
            "अलविदा",
            "नहीं",
            "क्यों"
          ],
          "answerIndex": 0,
          "explanation": "विनम्र अनुरोध के लिए «कृपया» (Please) का प्रयोग किया जाता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "इनमें से कौन-सा व्यंजन युग्म 'अल्पप्राण' और 'महाप्राण' का सटीक उदाहरण है?",
          "options": [
            "क और ख (क = अल्पप्राण, ख = महाप्राण)",
            "म और न",
            "र और ल",
            "य और व"
          ],
          "answerIndex": 0,
          "explanation": "'क' अल्पप्राण (कम वायु) है और 'ख' महाप्राण (अधिक वायु) है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "यदि आपसे अनजाने में कोई त्रुटि हो जाए या किसी का ध्यान आकर्षित करना हो, तो क्या कहना सबसे उचित होगा?",
          "options": [
            "माफ़ कीजिए! (Excuse me / Forgive me!)",
            "धन्यवाद!",
            "अलविदा!",
            "सुप्रभात!"
          ],
          "answerIndex": 0,
          "explanation": "क्षमा मांगने या ध्यान आकर्षित करने के लिए «माफ़ कीजिए!» या «क्षमा कीजिए!» का प्रयोग होता है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u1-l3": {
    "id": "hi-u1-l3",
    "subject": "hindi",
    "unit": 1,
    "lessonNumber": 3,
    "title": "संयुक्त व्यंजन, हलन्त और व्यक्तिगत परिचय की मूल संरचना",
    "level": "A1",
    "objective": "हलन्त (्), संयुक्त व्यंजनों (क्ष, त्र, ज्ञ, श्र) के निर्माण तथा व्यक्तिगत परिचय के बुनियादी वाक्यों (मेरा नाम... है, मैं... से हूँ, आपसे मिलकर खुशी हुई) में महारत हासिल करना।",
    "presentation": {
      "explanation": "जब दो अथवा दो से अधिक व्यंजन बिना किसी मध्यवर्ती स्वर के परस्पर संयुक्त होते हैं, तो उन्हें 'संयुक्त व्यंजन' अथवा 'संयुक्ताक्षर' कहा जाता है:\n\n1. हलन्त (्) का व्याकरणिक नियम:\n   - जब किसी व्यंजन के नीचे तिरछी रेखा (हलन्त) लगाई जाती है, तो इसका अर्थ है कि वह वर्ण स्वर-रहित (आधा) है।\n   - जब आधा वर्ण अपने आगे वाले पूर्ण वर्ण से मिलता है तो संयुक्त रूप बनता है, जैसे: न् + य = न्य (धन्यवाद), स्र + त = स्त (नमस्ते)।\n\n2. चार प्रमुख पारम्परिक संयुक्ताक्षर:\n   - क्ष = क् + ष (उदाहरण: क्षमा, रक्षा, कक्षा);\n   - त्र = त् + र (उदाहरण: छात्र, मित्र, पत्र);\n   - ज्ञ = ज् + ञ (मानक उच्चारण 'ग्य' [ɡjə], उदाहरण: ज्ञान, ज्ञानी);\n   - श्र = श् + र (उदाहरण: श्रीमान, श्रीमती, परिश्रम)।\n\n3. व्यक्तिगत परिचय के प्रामाणिक वाक्य प्रारूप:\n   - अपना शुभ नाम बताना: «मेरा नाम [नाम] है।» (जैसे: मेरा नाम अमित है)।\n   - अपना मूल स्थान/देश बताना: «मैं [स्थान] से हूँ।» (जैसे: मैं भारत से हूँ)।\n   - भेंट पर प्रसन्नता प्रकट करना: «आपसे मिलकर बहुत खुशी हुई।» अथवा «आपसे मिलकर प्रसन्नता हुई।»\n   - अपना निवास और पेशा बताना: «मैं दिल्ली में रहता हूँ और मैं एक छात्र हूँ।» (स्त्रीलिंग में 'रहती हूँ')।",
      "examples": [
        {
          "target": "मेरा नाम अमित है और मैं भारत से हूँ।",
          "reading": "meraa naam amit hai aur main bhaarat se hoon. [meːraː naːm əmɪt̪ hɛː ɔːr mɛ̃ː bʱaːrət̪ seː hũː] (may-rah nahm UH-meet hy owr myn BHAH-ruht say hoon)",
          "translation": "My name is Amit and I am from India."
        },
        {
          "target": "आपसे मिलकर बहुत खुशी हुई, प्रिया जी।",
          "reading": "aapse milkar bahut khushi hui, priya jee. [aːpseː mɪlkər bəɦʊt̪ kʰʊʃiː hʊiː prɪjaː dʒiː] (AHP-say MEEL-kuhr buh-hoot KHOO-shee hoo-ee, PREE-yah jee)",
          "translation": "Very pleased to meet you, Priya ji."
        },
        {
          "target": "मैं नई दिल्ली में रहता हूँ और छात्र हूँ।",
          "reading": "main naee dillee mein rahta hoon aur chhaatr hoon. [mɛ̃ː nəiː d̪ɪlːiː mẽː rɛɦt̪aː hũː ɔːr tʃʰaːt̪rə hũː] (myn nuh-ee DEEL-lee mayn RUH-huh-tah hoon owr CHHAH-truh hoon)",
          "translation": "I live in New Delhi and I am a student."
        }
      ],
      "mnemonics": [
        "आधा अक्षर = हलन्त (्); क्+ष = क्ष, त्+र = त्र; परिचय: 'मेरा नाम... है' + 'आपसे मिलकर खुशी हुई'!"
      ],
      "culturalNotes": [
        "भारतीय संस्कृति में किसी नए व्यक्ति से मिलने पर हाथ जोड़कर 'आपसे मिलकर बहुत खुशी हुई' कहना अत्यंत शिष्ट और आत्मीय माना जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "हिंदी में अपना नाम बताते समय किस वाक्य-संरचना का प्रयोग किया जाता है?",
          "options": [
            "मेरा नाम [नाम] है। (Mera naam [Name] hai - My name is...)",
            "तुम नाम कौन है।",
            "आप नाम क्या हो।",
            "हमारा नाम था।"
          ],
          "answerIndex": 0,
          "explanation": "अपना नाम बताने के लिए मानक संरचना «मेरा नाम [नाम] है» है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "देवनागरी में 'क्ष' वर्ण किन दो व्यंजनों के मेल से बनता है?",
          "options": [
            "क् + ष (k + sh = ksh)",
            "त् + र",
            "श् + र",
            "ज् + ञ"
          ],
          "answerIndex": 0,
          "explanation": "'क्ष' संयुक्ताक्षर 'क्' और 'ष' के संयोग से निर्मित होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "नए परिचित से शिष्टाचारपूर्वक 'आपसे मिलकर बहुत प्रसन्नता हुई' कहने का सबसे प्रामाणिक हिंदी वाक्य कौन-सा है?",
          "options": [
            "आपसे मिलकर बहुत खुशी हुई। (Very pleased to meet you.)",
            "माफ़ कीजिए, आप कहाँ हैं?",
            "कृपया मुझे रास्ता बताइए।",
            "अलविदा, कल मिलेंगे।"
          ],
          "answerIndex": 0,
          "explanation": "«आपसे मिलकर बहुत खुशी हुई» शिष्टाचार और प्रसन्नता व्यक्त करने का मानक वाक्य है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u1-l4": {
    "id": "hi-u1-l4",
    "subject": "hindi",
    "unit": 1,
    "lessonNumber": 4,
    "title": "अनुस्वार, अनुनासिक (चन्द्रबिन्दु) और आदरसूचक सर्वनाम",
    "level": "A1",
    "objective": "अनुस्वार (ं) और अनुनासिक/चन्द्रबिन्दु (ँ) के ध्वन्यात्मक अंतर तथा संबोधन सर्वनामों (तू, तुम, आप) एवं सहायक क्रिया 'होना' (हूँ, हो, है, हैं) के समन्वय को समझना।",
    "presentation": {
      "explanation": "नासिक्य ध्वनियों का शुद्ध उच्चारण तथा सर्वनामों में आदर की कोटि हिंदी भाषा की पहचान हैं:\n\n1. अनुस्वार (ं) और अनुनासिक (ँ) का अंतर:\n   - अनुस्वार (ं): यह एक शुद्ध नासिक्य व्यंजन ध्वनि है, जो पंचम वर्णों (ङ, ञ, ण, न, म) के स्थान पर बिंदु के रूप में प्रयुक्त होती है (जैसे: गंगा, पंच, दंत, कंबल)।\n   - अनुनासिक (ँ): यह स्वर की नासिका से निकलने वाली ध्वनि है, जिसमें श्वास मुख और नासिका दोनों से एक साथ निकलती है (जैसे: आँख, चाँद, गाँव, हँसना)।\n   - अर्थ भेद का उदाहरण: 'हंस' (एक सुंदर पक्षी) बनाम 'हँस' (हँसने की क्रिया)।\n\n2. संबोधन सर्वनामों में आदर का स्तर:\n   - «तू» — अति-अनौपचारिक / घनिष्ठ (परम मित्रों, छोटे बालकों या ईश्वर के लिए प्रयुक्त; अन्यथा असभ्य माना जाता है)।\n   - «तुम» — अनौपचारिक / समवयस्क मित्रों अथवा अपनों के लिए (क्रिया रूप: 'हो')।\n   - «आप» — औपचारिक / आदरसूचक (बड़ों, गुरुजनों, अपरिचितों व सम्मानीय जनों के लिए; क्रिया रूप: बहुवचन 'हैं')।\n\n3. 'होना' सहायक क्रिया का वर्तमान काल समन्वय:\n   - मैं के साथ → हूँ (जैसे: मैं छात्र हूँ);\n   - तू के साथ → है (जैसे: तू कहाँ है);\n   - तुम के साथ → हो (जैसे: तुम अच्छे मित्र हो);\n   - वह / यह के साथ → है (जैसे: वह डॉक्टर है);\n   - आप / वे / ये / हम के साथ → हैं (जैसे: आप बहुत दयालु हैं)।",
      "examples": [
        {
          "target": "आप बहुत दयालु और समझदार हैं।",
          "reading": "aap bahut dayalu aur samajhdaar hain. [aːp bəɦʊt̪ d̪əjaːluː ɔːr səmədʒʱd̪aːr hɛ̃ː] (ahp buh-hoot duh-YAH-loo owr suh-muhzh-DAHR hyn)",
          "translation": "You are very kind and sensible."
        },
        {
          "target": "मैं एक विश्वविद्यालय का छात्र हूँ।",
          "reading": "main ek vishvavidyalay ka chhaatr hoon. [mɛ̃ː eːk ʋɪʃʋəʋɪd̪jaːləj kaː tʃʰaːt̪rə hũː] (myn ayk veesh-wuh-veed-YAH-luy kah CHHAH-truh hoon)",
          "translation": "I am a university student."
        },
        {
          "target": "तुम मेरे सबसे अच्छे और सच्चे मित्र हो।",
          "reading": "tum mere sabse achhe aur sachhe mitra ho. [t̪ʊm meːreː səbseː ətʃːʰeː ɔːr sətʃːeː mɪt̪rə hoː] (toom may-ray SUHB-say UHTCH-chhay owr SUHTCH-chhay MEET-ruh hoh)",
          "translation": "You are my best and true friend."
        }
      ],
      "mnemonics": [
        "बिंदु (ं) = ठोस नासिक्य (गंगा); चन्द्रबिन्दु (ँ) = नासिका स्वर (चाँद); सर्वनाम: मैं हूँ, तुम हो, आप हैं!"
      ],
      "culturalNotes": [
        "अपरिचितों या व्यावसायिक संवाद में हमेशा 'आप' का ही प्रयोग करना चाहिए। हिंदी में एकवचन आदरणीय व्यक्ति के लिए भी बहुवचन क्रिया 'हैं' लगाई जाती है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "आदरणीय व्यक्ति के लिए सर्वनाम 'आप' के साथ 'होना' क्रिया का कौन-सा वर्तमान रूप प्रयुक्त होता है?",
          "options": [
            "हैं (Aap hain - You are [honorific plural])",
            "हूँ",
            "हो",
            "था"
          ],
          "answerIndex": 0,
          "explanation": "सर्वनाम 'आप' के साथ आदरार्थ हमेशा बहुवचन क्रिया «हैं» (hain) आती है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "शब्द 'चाँद' और 'गाँव' में प्रयुक्त नासिक्य चिह्न को क्या कहते हैं?",
          "options": [
            "अनुनासिक / चन्द्रबिन्दु (Chandrabindu - Nasalized vowel marker)",
            "अनुस्वार",
            "विसर्ग",
            "हलन्त"
          ],
          "answerIndex": 0,
          "explanation": "अर्धचन्द्र के ऊपर बिंदु वाले चिह्न को «अनुनासिक» या «चन्द्रबिन्दु» (ँ) कहा जाता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "व्याकरण और आदर की दृष्टि से पूर्णतः शुद्ध वाक्य का चयन कीजिए:",
          "options": [
            "आप कहाँ से हैं और आप क्या करते हैं? (Where are you from and what do you do?)",
            "आप कहाँ से हो और क्या करता है?",
            "तुम कहाँ से हैं और क्या करूँ?",
            "मैं कहाँ से हो और क्या हैं?"
          ],
          "answerIndex": 0,
          "explanation": "«आप कहाँ से हैं और आप क्या करते हैं?» में 'आप' के साथ 'हैं' का व्याकरणसम्मत समन्वय है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u1-l5": {
    "id": "hi-u1-l5",
    "subject": "hindi",
    "unit": 1,
    "lessonNumber": 5,
    "title": "बुनियादी प्रश्नवाचक शब्द, हाँ/नहीं और विदाई के शिष्टाचार",
    "level": "A1",
    "objective": "क-वर्ग के मूल प्रश्नवाचक शब्दों (क्या, कौन, कहाँ, कब, क्यों, कैसे), हाँ/नहीं स्वीकारात्मक-नकारात्मक उत्तरों तथा विदाई शिष्टाचार (अलविदा, फिर मिलेंगे) में निपुणता प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में जिज्ञासा प्रकट करने, प्रश्न पूछने और विदाई लेने के प्रमुख शिष्टाचार नियम निम्नलिखित हैं:\n\n1. क-वर्ग के प्रमुख प्रश्नवाचक शब्द:\n   - «क्या» — वस्तु या बात जानने हेतु (What); वाक्य के आरंभ में आने पर हाँ/नहीं वाले प्रश्न का निर्माण करता है।\n   - «कौन» — व्यक्ति या कर्ता की पहचान जानने हेतु (Who)।\n   - «कहाँ» — स्थान अथवा दिशा की जानकारी हेतु (Where)।\n   - «कब» — समय या काल जानने हेतु (When)।\n   - «क्यों» — कारण अथवा प्रयोजन जानने हेतु (Why)।\n   - «कैसे / कैसी / कैसा» — स्थिति, ढंग अथवा प्रकार जानने हेतु (How)।\n\n2. स्वीकारात्मक और नकारात्मक उत्तर:\n   - «हाँ» अथवा आदरपूर्वक «जी हाँ» — स्वीकृति या सहमति प्रकट करने हेतु।\n   - «नहीं» अथवा आदरपूर्वक «जी नहीं» — असहमति या निषेध प्रकट करने हेतु।\n   - नियम: यदि प्रश्न के आरंभ में 'क्या' हो (जैसे: «क्या आप भारतीय हैं?»), तो उत्तर «जी हाँ, मैं भारतीय हूँ» अथवा «जी नहीं» होगा।\n\n3. विदाई और मंगलकामना के मानक वाक्यांश:\n   - «अलविदा» — औपचारिक विदाई का शब्द (Goodbye)।\n   - «फिर मिलेंगे» — पुनः भेंट की आशा व्यक्त करते हुए विदा लेना (See you again)।\n   - «अपना ख्याल रखिए» — आत्मीयता से स्वास्थ्य व सुरक्षा की कामना करना (Take care)।\n   - «शुभ यात्रा» — यात्रा पर जाने वाले व्यक्ति को मंगलकामना देना (Bon voyage)।",
      "examples": [
        {
          "target": "क्या आप चाय लेंगे? जी हाँ, धन्यवाद!",
          "reading": "kya aap chaay lenge? jee haan, dhanyavaad! [kjaː aːp tʃaːj leːŋgeː dʒiː hãː d̪ʱənjəʋaːd̪] (kyah ahp CHAH-ee LAYN-gay? jee HAHN, dhuhn-yuh-VAHD!)",
          "translation": "Would you like tea? Yes please, thank you!"
        },
        {
          "target": "आपका शुभ नाम क्या है और आप कहाँ रहते हैं?",
          "reading": "aapka shubh naam kya hai aur aap kahaan rahte hain? [aːpkaː ʃʊbʱ naːm kjaː hɛː ɔːr aːp kəɦaː̃ rɛɦt̪eː hɛ̃ː] (AHP-kah shoobh NAHM kyah hy owr ahp kuh-HAHN RUH-huh-tay hyn?)",
          "translation": "What is your good name and where do you live?"
        },
        {
          "target": "अलविदा मित्र, अपना ख्याल रखिए और फिर मिलेंगे!",
          "reading": "alvida mitra, apna khyal rakhiye aur phir milenge! [əlwɪd̪aː mɪt̪rə əpnaː kʰjaːl rəkʰɪjeː ɔːr pʰɪr mɪleːŋgeː] (uhl-vee-DAH MEET-ruh, UHP-nah khyahl RUHKH-ee-yay owr feer mee-LAYN-gay!)",
          "translation": "Goodbye friend, take care and see you again!"
        }
      ],
      "mnemonics": [
        "सवाल के 'क': क्या, कौन, कहाँ, कब, क्यों, कैसे; आदर से उत्तर: जी हाँ / जी नहीं; विदाई: 'फिर मिलेंगे' व 'अलविदा'!"
      ],
      "culturalNotes": [
        "हिंदी में किसी का नाम पूछते समय 'आपका शुभ नाम क्या है?' (What is your auspicious name?) कहना अत्यंत शिष्ट और सुरुचिपूर्ण माना जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "हिंदी में किसी से 'Where' (स्थान के बारे में) पूछने के लिए कौन-सा प्रश्नवाचक शब्द प्रयोग किया जाता है?",
          "options": [
            "कहाँ (Kahaan - Where)",
            "कब",
            "क्यों",
            "कौन"
          ],
          "answerIndex": 0,
          "explanation": "स्थान पूछने के लिए «कहाँ» (Where) का प्रयोग किया जाता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "बातचीत समाप्त होने पर 'See you again' कहने के लिए सबसे स्वाभाविक हिंदी वाक्यांश कौन-सा है?",
          "options": [
            "फिर मिलेंगे (Phir milenge - See you again)",
            "सुप्रभात",
            "माफ़ कीजिए",
            "स्वागत है"
          ],
          "answerIndex": 0,
          "explanation": "पुनः मिलने की आशा व्यक्त करते हुए विदा लेते समय «फिर मिलेंगे» कहा जाता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "यदि कोई आपसे पूछे «क्या आप छात्र हैं?», तो आदरपूर्वक स्वीकारात्मक उत्तर क्या होगा?",
          "options": [
            "जी हाँ, मैं छात्र हूँ। (Yes, I am a student.)",
            "अलविदा, मैं जाता हूँ।",
            "सुप्रभात, आप कौन हैं?",
            "माफ़ कीजिए, कहाँ है?"
          ],
          "answerIndex": 0,
          "explanation": "«जी हाँ, मैं छात्र हूँ» आदरपूर्वक और व्याकरणसम्मत स्वीकारात्मक उत्तर है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u2-l1": {
    "id": "hi-u2-l1",
    "subject": "hindi",
    "unit": 2,
    "lessonNumber": 1,
    "title": "संज्ञा और व्याकरणिक लिंग: पुल्लिंग एवं स्त्रीलिंग की पहचान",
    "level": "A1",
    "objective": "हिंदी में संज्ञा के दो व्याकरणिक लिंगों (पुल्लिंग व स्त्रीलिंग), आकारांत-ईकारांत पहचान नियमों तथा निर्जीव वस्तुओं के लिंग निर्धारण को समझना।",
    "presentation": {
      "explanation": "हिंदी व्याकरण में प्रत्येक संज्ञा शब्द का एक निश्चित लिंग होता है। हिंदी में केवल दो लिंग होते हैं — पुल्लिंग (Masculine) और स्त्रीलिंग (Feminine):\n\n1. आकारांत पुल्लिंग संज्ञाएं (-आ अंत वाली):\n   - सामान्यतः '-आ' पर समाप्त होने वाले अधिकांश शब्द पुल्लिंग होते हैं, जैसे: लड़का (Boy), कमरा (Room), दरवाजा (Door), रास्ता (Way/Path), कपड़ा (Cloth), बच्चा (Child)।\n   - अपवाद: हवा (Wind), दवा (Medicine), कृपा (Grace) स्त्रीलिंग हैं।\n\n2. ईकारांत स्त्रीलिंग संज्ञाएं (-ई अंत वाली):\n   - सामान्यतः '-ई' पर समाप्त होने वाले अधिकांश शब्द स्त्रीलिंग होते हैं, जैसे: लड़की (Girl), खिड़की (Window), कुर्सी (Chair), गाड़ी (Car), नदी (River), रोटी (Bread/Roti)।\n   - अपवाद: पानी (Water), घी (Ghee), दही (Curd), मोती (Pearl) पुल्लिंग हैं।\n\n3. निर्जीव वस्तुओं का व्याकरणिक लिंग:\n   - प्राकृतिक लिंग के अतिरिक्त सभी निर्जीव वस्तुएं भी पुल्लिंग या स्त्रीलिंग होती हैं:\n   - पुल्लिंग: अखबार (Newspaper), घर (House), शहर (City), पेड़ (Tree), सेब (Apple), दूध (Milk)।\n   - स्त्रीलिंग: किताब (Book), मेज़ (Table), भाषा (Language), रात (Night), आँख (Eye), चाय (Tea)।",
      "examples": [
        {
          "target": "यह एक बड़ा कमरा है और वह एक सुंदर खिड़की है।",
          "reading": "yah ek bada kamra hai aur vah ek sundar khidki hai. [jəh eːk bəɽaː kəmraː hɛː ɔːr ʋəh eːk sʊn̪d̪ər kʰɪɽkiː hɛː] (yuh ayk buh-DAH kuhm-rah hy owr wuh ayk SOON-duhr KHEED-kee hy)",
          "translation": "This is a big room and that is a beautiful window."
        },
        {
          "target": "लड़का मैदान में खेलता है और लड़की किताब पढ़ती है।",
          "reading": "ladka maidaan mein khelta hai aur ladki kitaab padhti hai. [ləɽkaː mɛːd̪aːn mẽː kʰeːlt̪aː hɛː ɔːr ləɽkiː kɪt̪aːb pəɽʱt̪iː hɛː] (luhd-KAH my-DAHN mayn KHAYL-tah hy owr luhd-KEE kee-TAHB PUHDH-tee hy)",
          "translation": "The boy plays in the field and the girl reads a book."
        },
        {
          "target": "यह गरम चाय है और वह ठंडा पानी है।",
          "reading": "yah garam chaay hai aur vah thanda paani hai. [jəh ɡərəm tʃaːj hɛː ɔːr ʋəh t̪ʰəɳɖaː paːniː hɛː] (yuh GUH-ruhm CHAH-ee hy owr wuh THUHN-dah PAH-nee hy)",
          "translation": "This is hot tea and that is cold water."
        }
      ],
      "mnemonics": [
        "आ-ध्वनि = प्रायः पुल्लिंग (कमरा, दरवाजा); ई-ध्वनि = प्रायः स्त्रीलिंग (खिड़की, कुर्सी); ध्यान रखें: 'पानी' पुल्लिंग है और 'चाय' स्त्रीलिंग!"
      ],
      "culturalNotes": [
        "हिंदी में किसी वस्तु का लिंग याद रखना अत्यंत आवश्यक है क्योंकि विशेषण, सर्वनाम और क्रिया सभी संज्ञा के लिंग के अनुसार रूप बदलते हैं।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "हिंदी में सामान्यतः '-ई' (ईकारांत) पर समाप्त होने वाली संज्ञाएं (जैसे: कुर्सी, खिड़की, गाड़ी) किस लिंग की होती हैं?",
          "options": [
            "स्त्रीलिंग (Feminine gender)",
            "पुल्लिंग",
            "नपुंसकलिंग",
            "उभयलिंग"
          ],
          "answerIndex": 0,
          "explanation": "'-ई' पर समाप्त होने वाले अधिकांश शब्द (कुर्सी, खिड़की, गाड़ी आदि) स्त्रीलिंग होते हैं।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "इनमें से कौन-सा शब्द अपवाद स्वरूप '-ई' पर समाप्त होने के बावजूद 'पुल्लिंग' है?",
          "options": [
            "पानी (Water - Masculine noun ending in -ee)",
            "नदी",
            "रोटी",
            "गाड़ी"
          ],
          "answerIndex": 0,
          "explanation": "«पानी» (Water) हिंदी में एक प्रमुख अपवाद है जो ईकारांत होने पर भी पुल्लिंग माना जाता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "संज्ञा और लिंग की दृष्टि से सही वाक्य का चयन कीजिए:",
          "options": [
            "यह किताब बहुत अच्छी है और यह कमरा बहुत साफ़ है। (This book is very good and this room is very clean.)",
            "यह किताब बहुत अच्छा है और कमरा साफ़ी है।",
            "यह कमरा अच्छी है और किताब बड़ा है।",
            "किताब कमरा में सोता है।"
          ],
          "answerIndex": 0,
          "explanation": "«किताब» स्त्रीलिंग है (अच्छी है) और «कमरा» पुल्लिंग है (साफ़ है)।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u2-l2": {
    "id": "hi-u2-l2",
    "subject": "hindi",
    "unit": 2,
    "lessonNumber": 2,
    "title": "पुल्लिंग संज्ञाओं के एकवचन और बहुवचन नियम",
    "level": "A1",
    "objective": "आकारांत पुल्लिंग शब्दों के '-ए' बहुवचन परिवर्तन तथा व्यंजनांत/अनाकारांत पुल्लिंग शब्दों के अपरिवर्तित रहने के नियम को सीखना।",
    "presentation": {
      "explanation": "हिंदी में पुल्लिंग संज्ञाओं के बहुवचन बनाने के दो स्पष्ट और निश्चित नियम हैं:\n\n1. आकारांत पुल्लिंग संज्ञाएं (-आ अंत वाली):\n   - जब पुल्लिंग शब्द के अंत में '-आ' स्वर होता है, तो प्रत्यक्ष बहुवचन में '-आ' बदलकर '-ए' हो जाता है:\n   - लड़का → लड़के (Boy → Boys)\n   - कमरा → कमरे (Room → Rooms)\n   - दरवाजा → दरवाजे (Door → Doors)\n   - कपड़ा → कपड़े (Cloth → Clothes)\n   - बच्चा → बच्चे (Child → Children)\n   - रास्ता → रास्ते (Path → Paths)।\n\n2. अन्य सभी पुल्लिंग संज्ञाएं (व्यंजनांत व अन्य स्वर अंत वाली):\n   - जो पुल्लिंग शब्द '-आ' पर समाप्त नहीं होते, उनका प्रत्यक्ष बहुवचन रूप एकवचन के बिल्कुल समान रहता है:\n   - एक घर → दो घर (One house → Two houses)\n   - एक पेड़ → कई पेड़ (One tree → Many trees)\n   - एक सेब → पाँच सेब (One apple → Five apples)\n   - एक शहर → तीन शहर (One city → Three cities)\n   - एक छात्र → सब छात्र (One student → All students)\n   - एक आदमी → चार आदमी (One man → Four men)।\n\n3. वाक्य में पहचान:\n   - ऐसे अपरिवर्तित शब्दों का बहुवचन होना सहायक क्रिया 'हैं' तथा संख्या शब्दों (दो, तीन, कई) से पहचाना जाता है (जैसे: 'घर सुंदर है' vs 'दो घर सुंदर हैं')।",
      "examples": [
        {
          "target": "इस होटल में दस बड़े कमरे और खुले दरवाजे हैं।",
          "reading": "is hotel mein das bade kamre aur khule darvaaje hain. [ɪs hoːʈəl mẽː d̪əs bəɽeː kəmreː ɔːr kʰʊleː d̪ərʋaːzeː hɛ̃ː] (ees hoh-TUHL mayn duhs buh-DAY kuhm-RAY owr KHOO-lay duhr-VAH-zay hyn)",
          "translation": "There are ten large rooms and open doors in this hotel."
        },
        {
          "target": "बाग में कई हरे पेड़ और सुंदर फूल हैं।",
          "reading": "baag mein kayi hare ped aur sundar phool hain. [baːɡ mẽː kəiː həreː peːɽ ɔːr sʊn̪d̪ər pʰuːl hɛ̃ː] (bahg mayn kuh-EE huh-RAY payd owr SOON-duhr phool hyn)",
          "translation": "There are many green trees and beautiful flowers in the garden."
        },
        {
          "target": "सभी लड़के समय पर अपने विद्यालय पहुँचते हैं।",
          "reading": "sabhi ladke samay par apne vidyalay pahunchte hain. [səbʱiː ləɽkeː səməj pər əpneː ʋɪd̪jaːləj pəɦʊ̃tʃt̪eː hɛ̃ː] (SUH-bhee luhd-KAY suh-MUHY puhr uhp-NAY veed-YAH-luy puh-HOONCH-tay hyn)",
          "translation": "All boys reach their school on time."
        }
      ],
      "mnemonics": [
        "आकारांत पुल्लिंग: लड़का → लड़के, कमरा → कमरे; अन्य पुल्लिंग नहीं बदलते: एक घर → दस घर, एक पेड़ → चार पेड़!"
      ],
      "culturalNotes": [
        "आदर व्यक्त करने के लिए एकवचन आदरणीय पुल्लिंग संज्ञा के साथ भी बहुवचन रूप 'हैं' और विशेषण में 'ए' (जैसे: पिताजी आए हैं) प्रयुक्त होता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "आकारांत पुल्लिंग संज्ञा 'कमरा' का प्रत्यक्ष बहुवचन (Direct Plural) रूप क्या होगा?",
          "options": [
            "कमरे (Kamre - Rooms)",
            "कमराएं",
            "कमरियां",
            "कमराओं"
          ],
          "answerIndex": 0,
          "explanation": "आकारांत पुल्लिंग संज्ञा में '-आ' बदलकर '-ए' हो जाता है, अतः 'कमरा' का बहुवचन «कमरे» होगा।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "पुल्लिंग संज्ञा 'पेड़' का बहुवचन रूप तीन की संख्या के साथ क्या होगा?",
          "options": [
            "तीन पेड़ (Three trees - Unchanged masculine plural)",
            "तीन पेड़ें",
            "तीन पेड़ों",
            "तीन पेड़े"
          ],
          "answerIndex": 0,
          "explanation": "व्यंजनांत पुल्लिंग संज्ञाएं प्रत्यक्ष बहुवचन में नहीं बदलतीं, अतः «तीन पेड़» सही रूप है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "पुल्लिंग बहुवचन के नियमों के अनुसार कौन-सा वाक्य पूर्णतः शुद्ध है?",
          "options": [
            "मैदान में कई लड़के खेल रहे हैं और रास्ते साफ़ हैं। (Many boys are playing in the field and the paths are clean.)",
            "मैदान में कई लड़काएं खेल रहे हैं और रास्ताएं साफ़ हैं।",
            "मैदान में कई लड़कियां खेलता है।",
            "मैदान में लड़के खेलती है।"
          ],
          "answerIndex": 0,
          "explanation": "«लड़के» (लड़का का बहुवचन) और «रास्ते» (रास्ता का बहुवचन) दोनों मानक पुल्लिंग बहुवचन रूप हैं।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u2-l3": {
    "id": "hi-u2-l3",
    "subject": "hindi",
    "unit": 2,
    "lessonNumber": 3,
    "title": "स्त्रीलिंग संज्ञाओं के बहुवचन नियम (-इयाँ, -एं और -याँ)",
    "level": "A1",
    "objective": "स्त्रीलिंग संज्ञाओं के बहुवचन रूपांतरण: ईकारांत में '-इयाँ' (लड़की → लड़कियाँ), व्यंजनांत में '-एं' (किताब → किताबें) तथा याकारांत में चन्द्रबिन्दु (चिड़िया → चिड़ियाँ) के नियमों में दक्षता प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में स्त्रीलिंग संज्ञाओं के बहुवचन बनाने के तीन प्रमुख और वैज्ञानिक नियम हैं:\n\n1. ईकारांत स्त्रीलिंग संज्ञाएं (-ई अंत वाली):\n   - जब स्त्रीलिंग शब्द के अंत में दीर्घ 'ई' होती है, तो वह ह्रस्व 'इ' में बदल जाती है और अंत में '-याँ' जुड़ता है:\n   - लड़की → लड़कियाँ (Girl → Girls)\n   - खिड़की → खिड़कियाँ (Window → Windows)\n   - कुर्सी → कुर्सियाँ (Chair → Chairs)\n   - गाड़ी → गाड़ियाँ (Vehicle/Car → Cars)\n   - नदी → नदियाँ (River → Rivers)\n   - रोटी → रोटियाँ (Roti → Rotis)।\n\n2. व्यंजनांत तथा अन्य स्वर अंत वाली स्त्रीलिंग संज्ञाएं:\n   - व्यंजनांत अथवा आ/उ/ऊ अंत वाले स्त्रीलिंग शब्दों में अनुनासिक '-एं' जुड़ता है:\n   - किताब → किताबें (Book → Books)\n   - मेज़ → मेज़ें (Table → Tables)\n   - बात → बातें (Matter/Talk → Talks)\n   - आँख → आँखें (Eye → Eyes)\n   - रात → रातें (Night → Nights)\n   - महिला → महिलाएं (Woman → Women)।\n\n3. याकारांत स्त्रीलिंग संज्ञाएं (-या अंत वाली):\n   - जिन स्त्रीलिंग शब्दों के अंत में 'या' होता है, उनमें केवल चन्द्रबिन्दु (ँ) लगाया जाता है:\n   - चिड़िया → चिड़ियाँ (Bird → Birds)\n   - गुड़िया → गुड़ियाँ (Doll → Dolls)\n   - डिबिया → डिबियाँ (Small box → Small boxes)।",
      "examples": [
        {
          "target": "पुस्तकालय में बहुत सारी उपयोगी किताबें और पत्रिकाएं हैं।",
          "reading": "pustakaalay mein bahut saari upyogi kitabein aur patrikaen hain. [pʊst̪əkaːləj mẽː bəɦʊt̪ saːriː ʊpjɔːɡiː kɪt̪aːbẽː ɔːr pət̪rɪkaːẽː hɛ̃ː] (poos-tuh-KAH-luy mayn buh-hoot SAH-ree oop-YOH-gee kee-TAH-bayn owr puht-ree-KAH-ayn hyn)",
          "translation": "There are many useful books and magazines in the library."
        },
        {
          "target": "कमरे की सभी खिड़कियाँ खुली हैं और कुर्सियाँ साफ़ हैं।",
          "reading": "kamre ki sabhi khidkiyaan khuli hain aur kursiyaan saaf hain. [kəmreː kiː səbʱiː kʰɪɽkɪjaː̃ kʰʊliː hɛ̃ː ɔːr kʊrsɪjaː̃ saːf hɛ̃ː] (kuhm-RAY kee SUH-bhee KHEED-kee-yahn KHOO-lee hyn owr KOOR-see-yahn SAHF hyn)",
          "translation": "All windows of the room are open and the chairs are clean."
        },
        {
          "target": "आकाश में रंग-बिरंगी चिड़ियाँ चहक रही हैं।",
          "reading": "aakaash mein rang-birangi chidiyaan chahak rahi hain. [aːkaːʃ mẽː rəŋɡ bɪrəŋɡiː tʃɪɽɪjaː̃ tʃɛɦək rəɦiː hɛ̃ː] (ah-KAHSH mayn ruhng-bee-RUHN-gee CHEED-ee-yahn chuh-HUHK ruh-HEE hyn)",
          "translation": "Colorful birds are chirping in the sky."
        }
      ],
      "mnemonics": [
        "ई वाली संज्ञा: लड़की → लड़कियाँ (ह्रस्व इ + याँ); बिना ई वाली: किताब → किताबें (एं); या वाली: चिड़िया → चिड़ियाँ (ँ)!"
      ],
      "culturalNotes": [
        "हिंदी में स्त्रीलिंग बहुवचन बनाते समय दीर्घ 'ई' को ह्रस्व 'इ' में बदलना (जैसे: दवाई → दवाइयाँ) वर्तनी की शुद्धता का अनिवार्य नियम है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ईकारांत स्त्रीलिंग संज्ञा 'कुर्सी' का शुद्ध बहुवचन रूप कौन-सा है?",
          "options": [
            "कुर्सियाँ (Kursiyaan - Chairs)",
            "कुर्सीएं",
            "कुर्सियां",
            "कुर्से"
          ],
          "answerIndex": 0,
          "explanation": "दीर्घ 'ई' ह्रस्व 'इ' में बदलकर '-याँ' जुड़ता है, अतः शुद्ध रूप «कुर्सियाँ» है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग संज्ञा 'किताब' का शुद्ध बहुवचन रूप क्या है?",
          "options": [
            "किताबें (Kitabein - Books)",
            "किताबियाँ",
            "किताबे",
            "किताबों"
          ],
          "answerIndex": 0,
          "explanation": "व्यंजनांत स्त्रीलिंग शब्द में '-एं' जुड़ता है, अतः 'किताब' का प्रत्यक्ष बहुवचन «किताबें» है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "स्त्रीलिंग बहुवचन के शुद्ध प्रयोग वाला वाक्य चुनिए:",
          "options": [
            "मेज पर नई किताबें और कुर्सियाँ रखी हैं। (New books and chairs are placed on the table.)",
            "मेज पर नया किताबे और कुर्सिए रखा है।",
            "मेज पर नई किताबियाँ और कुर्सीएं है।",
            "मेज पर किताबे रखे हैं।"
          ],
          "answerIndex": 0,
          "explanation": "«किताबें» और «कुर्सियाँ» दोनों मानक स्त्रीलिंग बहुवचन रूप हैं और क्रिया 'हैं' सही है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u2-l4": {
    "id": "hi-u2-l4",
    "subject": "hindi",
    "unit": 2,
    "lessonNumber": 4,
    "title": "विशेषण-संज्ञा अन्वय और लिंग-वचन समन्वय",
    "level": "A1",
    "objective": "विकारी विशेषणों (बड़ा/बड़े/बड़ी, अच्छा/अच्छे/अच्छी, नया/नए/नई) का संज्ञा के लिंग और वचन के अनुसार समन्वय तथा अविकारी विशेषणों (सुंदर, लाल, साफ़) की स्थिरता सीखना।",
    "presentation": {
      "explanation": "हिंदी में विशेषण अपनी विशेष्य संज्ञा के लिंग और वचन के अनुसार अपना रूप बदलते हैं:\n\n1. विकारी (परिवर्तनशील) विशेषण (-आ अंत वाले):\n   - जो विशेषण '-आ' पर समाप्त होते हैं, वे संज्ञा के अनुसार चार रूपों में बदलते हैं:\n   - पुल्लिंग एकवचन (-आ): बड़ा कमरा (Big room), अच्छा लड़का (Good boy), नया घर (New house)।\n   - पुल्लिंग बहुवचन (-ए): बड़े कमरे (Big rooms), अच्छे लड़के (Good boys), नए घर (New houses)।\n   - स्त्रीलिंग एकवचन (-ई): बड़ी खिड़की (Big window), अच्छी लड़की (Good girl), नई किताब (New book)।\n   - स्त्रीलिंग बहुवचन (-ई): बड़ी खिड़कियाँ (Big windows), अच्छी लड़कियाँ (Good girls), नई किताबें (New books)।\n   - *ध्यान दें*: स्त्रीलिंग एकवचन और बहुवचन दोनों में विकारी विशेषण का रूप '-ई' ही रहता है (जैसे: 'नई गाड़ी' और 'नई गाड़ियाँ')।\n\n2. अविकारी (अपरिवर्तनशील) विशेषण:\n   - जो विशेषण '-आ' पर समाप्त नहीं होते (व्यंजन या अन्य स्वर वाले), वे किसी भी लिंग या वचन में कभी नहीं बदलते:\n   - सुंदर (Beautiful): सुंदर लड़का, सुंदर लड़के, सुंदर लड़की, सुंदर लड़कियाँ।\n   - लाल (Red): लाल सेब, लाल किताबें, लाल गाड़ियाँ।\n   - साफ़ (Clean): साफ़ कमरा, साफ़ कमरे, साफ़ खिड़की, साफ़ खिड़कियाँ।\n   - भारी (Heavy): भारी बस्ता, भारी बस्ते, भारी मेज़, भारी मेज़ें।",
      "examples": [
        {
          "target": "यह नया कमरा बहुत बड़ा और हवादार है।",
          "reading": "yah naya kamra bahut bada aur havadaar hai. [jəh nəjaː kəmraː bəɦʊt̪ bəɽaː ɔːr həʋaːd̪aːr hɛː] (yuh nuh-YAH kuhm-RAH buh-hoot buh-DAH owr huh-wah-DAHR hy)",
          "translation": "This new room is very big and airy."
        },
        {
          "target": "वे नई किताबें बहुत अच्छी और ज्ञानवर्धक हैं।",
          "reading": "ve nayi kitabein bahut achhi aur gyanvardhak hain. [ʋeː nəiː kɪt̪aːbẽː bəɦʊt̪ ətʃːʰiː ɔːr ɡjaːnʋərd̪ʱək hɛ̃ː] (way nuh-EE kee-TAH-bayn buh-hoot UHTCH-chee owr gyahn-VUHR-dhuhk hyn)",
          "translation": "Those new books are very good and informative."
        },
        {
          "target": "मेज़ पर सुंदर लाल सेब और ताज़ा फल रखे हैं।",
          "reading": "mez par sundar laal seb aur taaza phal rakhe hain. [meːz pər sʊn̪d̪ər laːl seːb ɔːr t̪aːzaː pʰəl rəkʰeː hɛ̃ː] (mayz puhr SOON-duhr lahl sayb owr TAH-zah phuhl RUHKH-ay hyn)",
          "translation": "Beautiful red apples and fresh fruits are kept on the table."
        }
      ],
      "mnemonics": [
        "आकारांत विशेषण: बड़ा (पु.एक.), बड़े (पु.बहु.), बड़ी (स्त्री.एक./बहु.); अविकारी विशेषण: सुंदर व लाल कभी नहीं बदलते!"
      ],
      "culturalNotes": [
        "विशेषण का सही लिंग-वचन समन्वय हिंदी बोलने में स्वाभाविक प्रवाह और व्याकरणिक परिपक्वता का सबसे पहला प्रमाण माना जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग बहुवचन संज्ञा 'किताबें' के साथ विकारी विशेषण 'नया' का कौन-सा रूप प्रयुक्त होगा?",
          "options": [
            "नई (Nayi kitabein - New books [fem. plural])",
            "नए",
            "नया",
            "नयों"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग संज्ञाओं (एकवचन व बहुवचन दोनों) के साथ विकारी विशेषण का रूप «नई» (ईकारांत) रहता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "पुल्लिंग बहुवचन संज्ञा 'लड़के' के साथ विकारी विशेषण 'अच्छा' का कौन-सा रूप लगेगा?",
          "options": [
            "अच्छे (Achhe ladke - Good boys [masc. plural])",
            "अच्छा",
            "अच्छी",
            "अच्छों"
          ],
          "answerIndex": 0,
          "explanation": "पुल्लिंग बहुवचन संज्ञा के साथ आकारांत विशेषण बदलकर '-ए' (अच्छे) हो जाता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "विशेषण-संज्ञा समन्वय की दृष्टि से पूर्णतः शुद्ध वाक्य का चयन कीजिए:",
          "options": [
            "हमारे पास बड़े कमरे और अच्छी कुर्सियाँ हैं। (We have large rooms and good chairs.)",
            "हमारे पास बड़ा कमरे और अच्छा कुर्सियाँ हैं।",
            "हमारे पास बड़ी कमरे और अच्छे कुर्सियाँ हैं।",
            "कमरे बड़ी है और कुर्सियाँ बड़ा है।"
          ],
          "answerIndex": 0,
          "explanation": "«बड़े कमरे» (पुल्लिंग बहुवचन) और «अच्छी कुर्सियाँ» (स्त्रीलिंग बहुवचन) में विशेषण का सटीक समन्वय है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u2-l5": {
    "id": "hi-u2-l5",
    "subject": "hindi",
    "unit": 2,
    "lessonNumber": 5,
    "title": "निश्चयवाचक व अनिश्चयवाचक सर्वनाम: यह/ये, वह/वे और कोई/कुछ",
    "level": "A1",
    "objective": "निकटवर्ती/दूरवर्ती निश्चयवाचक सर्वनामों (यह/ये, वह/वे) तथा अनिश्चयवाचक सर्वनामों (सजीव हेतु 'कोई', निर्जीव/मात्रा हेतु 'कुछ') के प्रामाणिक प्रयोग में महारत प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में वस्तुओं व व्यक्तियों की ओर संकेत करने तथा अनिश्चितता व्यक्त करने के लिए सर्वनामों की समृद्ध व्यवस्था है:\n\n1. निश्चयवाचक सर्वनाम (Demonstrative Pronouns):\n   - निकटवर्ती (Proximate — पास की वस्तु/व्यक्ति हेतु):\n     - «यह» (Yah) — यह एकवचन है (This / He / She / It);\n     - «ये» (Ye) — ये बहुवचन है (These / They)।\n   - दूरवर्ती (Distant — दूर की वस्तु/व्यक्ति हेतु):\n     - «वह» (Vah) — वह एकवचन है (That / He / She / It);\n     - «वे» (Ve) — वे बहुवचन है (Those / They)।\n\n2. अनिश्चयवाचक सर्वनाम (Indefinite Pronouns):\n   - «कोई» (Koi) — सजीव/गणनीय प्राणियों के लिए (Someone / Anyone / Somebody):\n     - उदाहरण: दरवाजे पर कोई खड़ा है (Someone is standing at the door);\n     - उदाहरण: क्या कमरे में कोई है? (Is anyone in the room?)\n   - «कुछ» (Kuchh) — निर्जीव वस्तुओं, विचारों अथवा अनिश्चित मात्रा/संख्या के लिए (Something / Some / A few):\n     - उदाहरण: मेज़ पर कुछ फल रखे हैं (Some fruits are kept on the table);\n     - उदाहरण: मुझे कुछ कहना है (I have something to say);\n     - उदाहरण: चाय में कुछ चीनी डालिए (Put some sugar in the tea)।\n\n3. निश्चयवाचक और सार्वनामिक विशेषण में अंतर:\n   - जब 'यह/वह' सीधे संज्ञा के पहले आए (जैसे: 'यह लड़का'), तो वह सार्वनामिक विशेषण बन जाता है।",
      "examples": [
        {
          "target": "यह मेरी नई कलम है और वे तुम्हारी पुरानी पुस्तकें हैं।",
          "reading": "yah meri nayi kalam hai aur ve tumhari puraani pustakein hain. [jəh meːriː nəiː kələm hɛː ɔːr ʋeː t̪ʊmɦaːriː pʊraːniː pʊst̪əkẽː hɛ̃ː] (yuh MAY-ree nuh-EE kuh-luhm hy owr way toom-HAH-ree poo-RAH-nee poos-tuh-KAYN hyn)",
          "translation": "This is my new pen and those are your old books."
        },
        {
          "target": "दरवाजे पर कोई खड़ा है, जाकर देखिए कौन है।",
          "reading": "darvaaje par koi khada hai, jaakar dekhiye kaun hai. [d̪ərʋaːzeː pər koːiː kʰəɽaː hɛː dʒaːkər d̪eːkʰɪjeː kɔːn hɛː] (duhr-VAH-zay puhr koh-EE khuh-DAH hy, JAH-kuhr DAY-khee-yay kown hy)",
          "translation": "Someone is standing at the door, go and see who it is."
        },
        {
          "target": "रसोई में कुछ ताज़ा फल और पीने का साफ़ पानी उपलब्ध है।",
          "reading": "rasoi mein kuchh taaza phal aur peene ka saaf paani uplabdh hai. [rəsoːiː mẽː kʊtʃʰ t̪aːzaː pʰəl ɔːr piːneː kaː saːf paːniː ʊpləbd̪ʱ hɛː] (ruh-SOH-ee mayn kooch TAH-zah phuhl owr PEE-nay kah sahf PAH-nee oop-LUHBDH hy)",
          "translation": "Some fresh fruits and clean drinking water are available in the kitchen."
        }
      ],
      "mnemonics": [
        "पास = यह (एकवचन), ये (बहुवचन); दूर = वह (एकवचन), वे (बहुवचन); सजीव अनिश्चित = कोई; निर्जीव अनिश्चित = कुछ!"
      ],
      "culturalNotes": [
        "हिंदी में किसी तीसरे आदरणीय व्यक्ति की ओर संकेत करते समय एकवचन होने पर भी 'वह' के स्थान पर आदरसूचक 'वे' (वे हमारे अध्यापक हैं) का प्रयोग किया जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "किसी अनजान व्यक्ति (सजीव प्राणी) के लिए किस अनिश्चयवाचक सर्वनाम का प्रयोग किया जाता है?",
          "options": [
            "कोई (Koi - Someone / Anyone for persons)",
            "कुछ",
            "कौन",
            "क्या"
          ],
          "answerIndex": 0,
          "explanation": "सजीव प्राणियों की अनिश्चितता के लिए «कोई» का प्रयोग होता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "दूर स्थित बहुवचन वस्तुओं (जैसे: पुस्तकें) की ओर संकेत करने के लिए कौन-सा सर्वनाम उपयुक्त है?",
          "options": [
            "वे (Ve - Those / Distant plural)",
            "यह",
            "ये",
            "वह"
          ],
          "answerIndex": 0,
          "explanation": "दूर स्थित बहुवचन वस्तुओं के लिए «वे» (Those) का प्रयोग किया जाता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "सर्वनाम के सही प्रयोग वाला प्रामाणिक वाक्य चुनिए:",
          "options": [
            "ये मेरे मित्र हैं और बाहर कोई आपका इंतज़ार कर रहा है। (These are my friends and someone outside is waiting for you.)",
            "यह मेरे मित्र हैं और बाहर कुछ इंतज़ार कर रहा है।",
            "वे मेरा कलम है और कोई किताबें हैं।",
            "कुछ लोग वे है और कोई पानी पीता है।"
          ],
          "answerIndex": 0,
          "explanation": "«ये मेरे मित्र हैं» (बहुवचन निकटवर्ती) और «कोई आपका इंतज़ार कर रहा है» (सजीव अनिश्चित) व्याकरण की दृष्टि से पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u3-l1": {
    "id": "hi-u3-l1",
    "subject": "hindi",
    "unit": 3,
    "lessonNumber": 1,
    "title": "मूल स्थानिक परसर्ग: में (In/Inside), पर (On/At) और तक (Until/Up to)",
    "level": "A1",
    "objective": "हिंदी के बुनियादी स्थानिक परसर्गों (में, पर, तक) की संकल्पना, अंग्रेजी Prepositions की तुलना में Postpositions की स्थिति तथा संज्ञाओं के साथ इनके समन्वय को सीखना।",
    "presentation": {
      "explanation": "हिंदी में संबंधबोधक अव्यय संज्ञा अथवा सर्वनाम के बाद आते हैं, इसलिए इन्हें अंग्रेजी की तरह Preposition न कहकर 'परसर्ग' (Postposition) अथवा 'कारक चिह्न' कहा जाता है:\n\n1. मुख्य स्थानिक परसर्ग (Locative Postpositions):\n   - *«में»* (In / Inside / Into) — स्थान, सीमा अथवा आंतरिक स्थिति दर्शाने हेतु:\n     - उदाहरण: कमरे में (In the room), घर में (In the house), शहर में (In the city), डिब्बे में (Inside the box)।\n   - *«पर»* (On / Upon / At) — सतह, ऊपरी भाग अथवा निश्चित स्थान/समय दर्शाने हेतु:\n     - उदाहरण: मेज़ पर (On the table), छत पर (On the roof), दरवाजे पर (At the door), समय पर (On time)।\n   - *«तक»* (Until / Up to / As far as) — सीमा, गंतव्य अथवा समयावधि की अंतिम सीमा दर्शाने हेतु:\n     - उदाहरण: शाम तक (Until evening), स्टेशन तक (Up to the station), अंत तक (Until the end)।\n\n2. पदक्रम और उच्चारण नियम:\n   - परसर्ग हमेशा अपनी संज्ञा के ठीक बाद अलग शब्द के रूप में लिखे जाते हैं (जैसे: 'घर में', न कि 'घरमें')।\n   - 'में' का उच्चारण अनुनासिक स्वर [mẽː] होता है।",
      "examples": [
        {
          "target": "मेरी सभी किताबें मेज़ पर हैं और कलम बस्ते में है।",
          "reading": "meri sabhi kitabein mez par hain aur kalam baste mein hai. [meːriː səbʱiː kɪt̪aːbẽː meːz pər hɛ̃ː ɔːr kələm bəstteː mẽː hɛː] (MAY-ree SUH-bhee kee-TAH-bayn mayz puhr hyn owr KUH-luhm BUHS-tay mayn hy)",
          "translation": "All my books are on the table and the pen is in the bag."
        },
        {
          "target": "अध्यापक जी अभी अपने कार्यालय के कमरे में उपस्थित हैं।",
          "reading": "adhyaapak jee abhi apne kaaryalay ke kamre mein upasthit hain. [əd̪ʱjaːpək dʒiː əbʱiː əpneː kaːrjaːləj keː kəmreː mẽː ʊpəst̪ʰɪt̪ hɛ̃ː] (uh-DHYAH-puhk jee UH-bhee uhp-NAY kahr-YAH-luy kay kuhm-RAY mayn oop-UHS-theet hyn)",
          "translation": "The respected teacher is currently present in his office room."
        },
        {
          "target": "हम आज शाम पाँच बजे तक पुस्तकालय में अध्ययन करेंगे।",
          "reading": "hum aaj shaam paanch baje tak pustakaalay mein adhyayan karenge. [həm aːdʒ ʃaːm paː̃tʃ bədʒeː t̪ək pʊst̪əkaːləj mẽː əd̪ʱjəjən kərẽːɡeː] (hum ahj shahm PAHNCH buh-JAY tuhk poos-tuh-KAH-luy mayn uh-DHYUH-yuhn kuh-RAYN-gay)",
          "translation": "We will study in the library until five o'clock this evening."
        }
      ],
      "mnemonics": [
        "अंदर = 'में' (कमरे में); ऊपर/सतह = 'पर' (मेज़ पर); सीमा = 'तक' (शाम तक); हमेशा संज्ञा के बाद आते हैं!"
      ],
      "culturalNotes": [
        "हिंदी में परसर्गों का स्थान निश्चित होता है। संज्ञा के बाद लगने के कारण ही हिंदी को 'परसर्गीय भाषा' (Postpositional Language) कहा जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "किसी सतह के ऊपर स्थित होने का भाव (जैसे: On the table) व्यक्त करने के लिए कौन-सा परसर्ग प्रयुक्त होता है?",
          "options": [
            "पर (Par - On / Upon)",
            "में",
            "से",
            "को"
          ],
          "answerIndex": 0,
          "explanation": "सतह या ऊपर की स्थिति दर्शाने के लिए «पर» (On) का प्रयोग किया जाता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «मेरी कलम बस्ते ___ है» में सही परसर्ग भरिए:",
          "options": [
            "में (Mein - In / Inside the bag)",
            "पर",
            "तक",
            "से"
          ],
          "answerIndex": 0,
          "explanation": "बस्ते के भीतर होने का भाव व्यक्त करने हेतु «में» (In) सही परसर्ग है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "स्थानिक परसर्गों के शुद्ध प्रयोग वाला वाक्य चुनिए:",
          "options": [
            "सभी छात्र कक्षा में बैठे हैं और पुस्तकें मेज़ पर रखी हैं। (All students are sitting in the class and books are kept on the table.)",
            "सभी छात्र कक्षा पर बैठे हैं और पुस्तकें मेज़ में रखी हैं।",
            "सभी छात्र कक्षा तक बैठा है।",
            "पुस्तकें मेज़ से सोती हैं।"
          ],
          "answerIndex": 0,
          "explanation": "«कक्षा में» (In the class) और «मेज़ पर» (On the table) परसर्गों का सर्वथा उपयुक्त और प्रामाणिक प्रयोग है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u3-l2": {
    "id": "hi-u3-l2",
    "subject": "hindi",
    "unit": 3,
    "lessonNumber": 2,
    "title": "स्रोत, साधन और साहचर्य परसर्ग: से (From / By / With / Since)",
    "level": "A1",
    "objective": "परसर्ग 'से' के विविध प्रकार्यात्मक रूपों: स्रोत/अलगाव (Ablative - From), साधन/माध्यम (Instrumental - By/With), साहचर्य/संवाद (With) तथा तुलना (Comparative) में महारत प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में 'से' (Se) एक बहु-प्रकार्यात्मक और अत्यंत महत्वपूर्ण परसर्ग है, जिसके प्रमुख व्याकरणिक अर्थ निम्नलिखित हैं:\n\n1. स्रोत अथवा अलगाव (Source / Origin / Separation — From):\n   - किसी स्थान या वस्तु से अलग होने या आरंभ होने का भाव:\n   - उदाहरण: मैं भारत से हूँ (I am from India);\n   - उदाहरण: वह घर से निकलता है (He leaves from home);\n   - उदाहरण: पेड़ से पत्ता गिरता है (A leaf falls from the tree)।\n\n2. साधन अथवा माध्यम (Instrument / Means — By / With):\n   - किसी कार्य को करने का साधन या औजार:\n   - उदाहरण: कलम से लिखना (To write with a pen);\n   - उदाहरण: बस से यात्रा करना (To travel by bus);\n   - उदाहरण: चम्मच से खाना (To eat with a spoon)।\n\n3. साहचर्य अथवा संवाद (Association / Communication — With):\n   - किसी व्यक्ति से बात करने, मिलने या पूछने का भाव:\n   - उदाहरण: मित्र से बात करना (To speak with a friend);\n   - उदाहरण: अध्यापक से प्रश्न पूछना (To ask a question to/from the teacher)।\n\n4. तुलना और समयारंभ (Comparison & Point in Time):\n   - तुलना: राम, श्याम से बड़ा है (Ram is elder than Shyam);\n   - समयारंभ: सुबह से शाम तक (From morning until evening)।",
      "examples": [
        {
          "target": "रोहन रोज़ सुबह बस से दफ़्तर जाता है और शाम को घर आता है।",
          "reading": "rohan roz subah bas se daftar jaata hai aur shaam ko ghar aata hai. [roːɦən roːz sʊbəh bəs seː d̪əft̪ər dʒaːt̪aː hɛː ɔːr ʃaːm koː ɡʱər aːt̪aː hɛː] (ROH-huhn rohz SOO-buh buhs say DUHF-tuhr JAH-tah hy owr shahm koh ghuhr AH-tah hy)",
          "translation": "Rohan goes to the office by bus every morning and comes home in the evening."
        },
        {
          "target": "कृपया इस आवेदन पत्र को नीली कलम से साफ़-साफ़ लिखिए।",
          "reading": "kripaya is aavedan patr ko neeli kalam se saaf-saaf likhiye. [krɪpəjaː ɪs aːʋeːd̪ən pət̪r koː niːliː kələm seː saːf saːf lɪkʰɪjeː] (krih-puh-YAH ees ah-VAY-duhn puht-ruh koh NEE-lee KUH-luhm say SAHF-sahf LEEKH-ee-yay)",
          "translation": "Please write this application form clearly with a blue pen."
        },
        {
          "target": "मैं कल शाम अपने पुराने मित्र से मिलकर बहुत प्रसन्न हुआ।",
          "reading": "main kal shaam apne puraane mitra se milkar bahut prasann hua. [mɛ̃ː kəl ʃaːm əpneː pʊraːneː mɪt̪rə seː mɪlkər bəɦʊt̪ prəsənːə hʊaː] (myn kuhl shahm uhp-NAY poo-RAH-nay MEET-ruh say MEEL-kuhr buh-hoot pruh-SUHN-nuh HOO-ah)",
          "translation": "I was very pleased to meet my old friend yesterday evening."
        }
      ],
      "mnemonics": [
        "'से' के रूप: कहाँ से = स्रोत (घर से); किससे = साधन (कलम से); किससे मिला = साहचर्य (मित्र से)!"
      ],
      "culturalNotes": [
        "हिंदी में किसी व्यक्ति से संवाद करते समय 'से' का प्रयोग होता है (जैसे: 'उनसे कहिए', 'मुझसे पूछिए'), जो शिष्ट भाषा की पहचान है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "साधन या माध्यम (जैसे: 'बस द्वारा जाना' या 'कलम द्वारा लिखना') दर्शाने के लिए किस परसर्ग का प्रयोग होता है?",
          "options": [
            "से (Se - By / With as instrumental marker)",
            "में",
            "पर",
            "को"
          ],
          "answerIndex": 0,
          "explanation": "साधन या माध्यम व्यक्त करने के लिए «से» (Instrumental) का प्रयोग किया जाता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «मैं भारत ___ हूँ» में अपने मूल देश को बताने के लिए कौन-सा परसर्ग लगेगा?",
          "options": [
            "से (Se - From India)",
            "में",
            "पर",
            "तक"
          ],
          "answerIndex": 0,
          "explanation": "स्रोत या मूल स्थान बताने के लिए «से» (From) का प्रयोग होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "परसर्ग 'से' के सटीक और व्याकरणसम्मत प्रयोग वाला वाक्य चुनिए:",
          "options": [
            "अमित रोज़ रेलगाड़ी से यात्रा करता है और अपने गुरुजी से सीखता है। (Amit travels by train every day and learns from his teacher.)",
            "अमित रोज़ रेलगाड़ी में लिखता है और गुरुजी पर खाता है।",
            "अमित रेलगाड़ी को जाता है।",
            "अमित गुरुजी तक सोता है।"
          ],
          "answerIndex": 0,
          "explanation": "«रेलगाड़ी से यात्रा करना» (साधन) और «गुरुजी से सीखना» (स्रोत) दोनों में 'से' का सटीक प्रयोग है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u3-l3": {
    "id": "hi-u3-l3",
    "subject": "hindi",
    "unit": 3,
    "lessonNumber": 3,
    "title": "लक्ष्य, कर्म और संप्रदान परसर्ग: को (To/Object marker) एवं के लिए (For)",
    "level": "A1",
    "objective": "सकर्मक क्रियाओं में निश्चित सजीव कर्म के लिए 'को', संप्रदान कारक (Dative) तथा उद्देश्य/प्रयोजन हेतु 'के लिए' (For) के सही प्रयोग को समझना।",
    "presentation": {
      "explanation": "हिंदी में कर्म और संप्रदान (प्रयोजन) को व्यक्त करने वाले दो अत्यंत मौलिक परसर्ग 'को' और 'के लिए' हैं:\n\n1. परसर्ग 'को' (Ko) के प्रमुख प्रयोग:\n   - *निश्चित सजीव कर्म (Definite Animate Direct Object)*: जब क्रिया का कर्म कोई विशिष्ट सजीव प्राणी (व्यक्ति) हो, तो उसके साथ 'को' अनिवार्य रूप से लगता है:\n     - उदाहरण: बच्चे को बुलाओ (Call the child);\n     - उदाहरण: डॉक्टर को दिखाओ (Show to the doctor);\n     - *अपवाद*: सामान्य निर्जीव कर्म के साथ 'को' नहीं लगता (जैसे: 'किताब पढ़ो', न कि 'किताब को पढ़ो')।\n   - *अप्रत्यक्ष कर्म / संप्रदान (Indirect Object / Dative)*: किसी को कुछ देने का भाव:\n     - उदाहरण: भिखारी को भोजन दो (Give food to the beggar);\n     - उदाहरण: राहुल को पत्र भेजो (Send a letter to Rahul)।\n   - *निश्चित समय अथवा दिन*: रात को (At night), सोमवार को (On Monday)।\n\n2. परसर्ग 'के लिए' (Ke liye — For / For the sake of):\n   - किसी व्यक्ति के हित, लाभ अथवा किसी कार्य के उद्देश्य/प्रयोजन को दर्शाने हेतु:\n   - उदाहरण: आपके लिए चाय (Tea for you);\n   - उदाहरण: बच्चों के लिए खिलौने (Toys for children);\n   - उदाहरण: परीक्षा की तैयारी के लिए (For exam preparation)।",
      "examples": [
        {
          "target": "डॉक्टर साहब ने मरीज़ को समय पर दवा लेने की सलाह दी।",
          "reading": "doctor sahab ne mareez ko samay par dava lene ki salaah dee. [ɖɔːkʈər saːɦəb neː məriːz koː səməj pər d̪əʋaː leːneː kiː səlaːh d̪iː] (DAHK-tuhr SAH-huhb nay muh-REEZ koh suh-MUHY puhr duh-VAH LAY-nay kee suh-LAH dee)",
          "translation": "The doctor advised the patient to take medicine on time."
        },
        {
          "target": "यह सुंदर उपहार आपके और आपके पूरे परिवार के लिए है।",
          "reading": "yah sundar upahaar aapke aur aapke poore parivaar ke liye hai. [jəh sʊn̪d̪ər ʊpəɦaːr aːpkeː ɔːr aːpkeː puːreː pərɪʋaːr keː lɪjeː hɛː] (yuh SOON-duhr oop-HAHR AHP-kay owr AHP-kay POO-ray puh-ree-VAHR kay lee-ay hy)",
          "translation": "This beautiful gift is for you and your whole family."
        },
        {
          "target": "हम हर सोमवार को सुबह मंदिर और शाम को बाज़ार जाते हैं।",
          "reading": "hum har somvaar ko subah mandir aur shaam ko bazaar jaate hain. [həm hər soːmʋaːr koː sʊbəh mən̪d̪ɪr ɔːr ʃaːm koː bəzaːr dʒaːt̪eː hɛ̃ː] (hum huhr sohm-VAHR koh SOO-buh MUHN-deer owr shahm koh buh-ZAHR JAH-tay hyn)",
          "translation": "We go to the temple in the morning and to the market in the evening every Monday."
        }
      ],
      "mnemonics": [
        "सजीव व्यक्ति को बुलाना = 'को' (मरीज़ को); किसी के वास्ते = 'के लिए' (आपके लिए); निश्चित समय = 'रात को'!"
      ],
      "culturalNotes": [
        "हिंदी में बड़ों या सम्मानित व्यक्तियों के लिए कुछ लाते समय हमेशा 'आपके लिए' कहना अत्यंत आदरयुक्त और विनम्र माना जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "किसी व्यक्ति के हित या उद्देश्य (जैसे: For you) को दर्शाने के लिए किस संयुक्त परसर्ग का प्रयोग होता है?",
          "options": [
            "के लिए (Ke liye - For / For the sake of)",
            "के पास",
            "के ऊपर",
            "के साथ"
          ],
          "answerIndex": 0,
          "explanation": "उद्देश्य या हित दर्शाने के लिए «के लिए» (For) का प्रयोग किया जाता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "सजीव विशिष्ट कर्म वाले वाक्य «अध्यापक ने छात्र ___ बुलाया» में उपयुक्त परसर्ग क्या होगा?",
          "options": [
            "को (Ko - Direct object marker for animate nouns)",
            "में",
            "पर",
            "तक"
          ],
          "answerIndex": 0,
          "explanation": "विशिष्ट सजीव कर्म के साथ «को» परसर्ग आता है (छात्र को बुलाया)।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "परसर्ग 'को' और 'के लिए' के सटीक प्रयोग वाला शुद्ध वाक्य चुनिए:",
          "options": [
            "मैंने अपने मित्र को जन्मदिन पर बधाई दी और उसके लिए उपहार खरीदा। (I congratulated my friend on his birthday and bought a gift for him.)",
            "मैंने मित्र में बधाई दी और उसके पर उपहार खरीदा।",
            "मैंने मित्र तक उपहार दिया।",
            "उपहार मित्र से खाता है।"
          ],
          "answerIndex": 0,
          "explanation": "«मित्र को बधाई दी» और «उसके लिए उपहार खरीदा» दोनों व्याकरण और अर्थ की दृष्टि से पूर्णतः शुद्ध हैं।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u3-l4": {
    "id": "hi-u3-l4",
    "subject": "hindi",
    "unit": 3,
    "lessonNumber": 4,
    "title": "तिर्यक् रूप (Oblique Case) के नियम: संज्ञा और विशेषण का रूपांतरण",
    "level": "A1",
    "objective": "परसर्ग लगने पर संज्ञाओं और विशेषणों के तिर्यक् रूप (Oblique Case) में बदलने के अनिवार्य व्याकरणिक नियमों को समझना और उनका सही प्रयोग करना।",
    "presentation": {
      "explanation": "हिंदी व्याकरण का सबसे केंद्रीय और आधारभूत नियम 'तिर्यक् रूप' (Oblique Case) है। जब किसी संज्ञा या विशेषण के बाद कोई भी परसर्ग (में, पर, से, को, का, के लिए, तक) आता है, तो वह शब्द अपने 'प्रत्यक्ष रूप' (Direct Case) से बदलकर 'तिर्यक् रूप' (Oblique Case) में आ जाता है:\n\n1. आकारांत पुल्लिंग संज्ञाओं का तिर्यक् रूप:\n   - एकवचन: '-आ' बदलकर '-ए' हो जाता है:\n     - कमरा + में → *कमरे में* (In the room)\n     - लड़का + को → *लड़के को* (To the boy)\n     - दरवाजा + पर → *दरवाजे पर* (At the door)\n     - रास्ता + से → *रास्ते से* (By the path)।\n   - बहुवचन: '-ओं' जुड़ता है:\n     - कमरे + में → *कमरों में* (In the rooms)\n     - लड़के + को → *लड़कों को* (To the boys)।\n\n2. अन्य पुल्लिंग व स्त्रीलिंग संज्ञाओं का तिर्यक् बहुवचन:\n   - एकवचन में ये नहीं बदलते (घर में, किताब में)।\n   - बहुवचन में सभी संज्ञाएं तिर्यक् रूप में '-ओं' या '-यों' लेती हैं:\n     - घर + में → *घरों में* (In the houses)\n     - किताब + में → *किताबों में* (In the books)\n     - लड़की + को → *लड़कियों को* (To the girls)।\n\n3. विशेषण का तिर्यक् अन्वय:\n   - आकारांत विशेषण तिर्यक् संज्ञा के पहले हमेशा '-ए' रूप में बदल जाता है:\n     - बड़ा कमरा → *बड़े कमरे में* (In the big room)\n     - अच्छा लड़का → *अच्छे लड़के को* (To the good boy)\n     - बड़े कमरे → *बड़े कमरों में* (In the big rooms)।",
      "examples": [
        {
          "target": "उस बड़े कमरे में चार लोग बैठे हैं और बातें कर रहे हैं।",
          "reading": "us bade kamre mein chaar log baithe hain aur baatein kar rahe hain. [ʊs bəɽeː kəmreː mẽː tʃaːr loːɡ bɛːʈʰeː hɛ̃ː ɔːr baːtẽː kər rəɦeː hɛ̃ː] (oos buh-DAY kuhm-RAY mayn chahr lohg BY-thay hyn owr BAH-tayn kuhr ruh-HAY hyn)",
          "translation": "Four people are sitting and talking in that big room."
        },
        {
          "target": "अध्यापक जी ने सभी नए छात्रों को उपयोगी पुस्तकें दीं।",
          "reading": "adhyaapak jee ne sabhi naye chhaatron ko upyogi pustakein deen. [əd̪ʱjaːpək dʒiː neː səbʱiː nəjeː tʃʰaːt̪rõː koː ʊpjɔːɡiː pʊst̪əkẽː d̪ĩː] (uh-DHYAH-puhk jee nay SUH-bhee nuh-YAY CHHAH-trohn koh oop-YOH-gee poos-tuh-KAYN deen)",
          "translation": "The respected teacher gave useful books to all new students."
        },
        {
          "target": "इन पुरानी किताबों में भारतीय इतिहास की सुंदर कहानियां हैं।",
          "reading": "in puraani kitaabon mein bharatiya itihaas ki sundar kahaniyaan hain. [ɪn pʊraːniː kɪt̪aːbõː mẽː bʱaːrət̪iːjə ɪt̪ɪɦaːs kiː sʊn̪d̪ər kəɦaːnɪjaː̃ hɛ̃ː] (een poo-RAH-nee kee-TAH-bohn mayn BHAH-ruh-teey ee-tee-HAHS kee SOON-duhr kuh-HAH-nee-yahn hyn)",
          "translation": "There are beautiful stories of Indian history in these old books."
        }
      ],
      "mnemonics": [
        "परसर्ग आया = तिर्यक् रूप छाया! लड़का + को = लड़के को; बड़ा कमरा + में = बड़े कमरे में; बहुवचन तिर्यक् = -ओं/-यों (लड़कों को, किताबों में)!"
      ],
      "culturalNotes": [
        "तिर्यक् रूप (Oblique Case) का सही प्रयोग हिंदी व्याकरण का सबसे प्रामाणिक मापदंड है। 'कमरा में' या 'बड़ा कमरे में' बोलना अशुद्ध माना जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "आकारांत पुल्लिंग शब्द 'कमरा' के बाद परसर्ग 'में' आने पर उसका शुद्ध तिर्यक् एकवचन रूप क्या बनेगा?",
          "options": [
            "कमरे में (Kamre mein - In the room [oblique singular])",
            "कमरा में",
            "कमरी में",
            "कमरों में"
          ],
          "answerIndex": 0,
          "explanation": "परसर्ग 'में' लगने पर आकारांत संज्ञा 'कमरा' तिर्यक् रूप में बदलकर «कमरे में» हो जाती है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग संज्ञा 'किताब' का परसर्ग 'में' के साथ तिर्यक् बहुवचन (Oblique Plural) रूप क्या होगा?",
          "options": [
            "किताबों में (Kitaabon mein - In the books [oblique plural])",
            "किताबें में",
            "किताब में",
            "किताबियों में"
          ],
          "answerIndex": 0,
          "explanation": "परसर्ग के साथ बहुवचन में '-ओं' जुड़ता है, अतः शुद्ध रूप «किताबों में» है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "तिर्यक् रूप और विशेषण अन्वय की दृष्टि से पूर्णतः शुद्ध वाक्य का चयन कीजिए:",
          "options": [
            "उस बड़े कमरे में दो नए पंखे चल रहे हैं। (In that big room two new fans are running.)",
            "उस बड़ा कमरा में दो नया पंखे चल रहे हैं।",
            "उस बड़े कमरा में दो नए पंखा चलता है।",
            "कमरा में पंखे सोता है।"
          ],
          "answerIndex": 0,
          "explanation": "«उस बड़े कमरे में» में सर्वनाम, विशेषण और संज्ञा तीनों का तिर्यक् रूप पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u3-l5": {
    "id": "hi-u3-l5",
    "subject": "hindi",
    "unit": 3,
    "lessonNumber": 5,
    "title": "सर्वनामों का तिर्यक् रूप और संयुक्त सर्वनाम (मुझे, उसे, इन्हें, किन्हें)",
    "level": "A1",
    "objective": "परसर्गों के साथ सर्वनामों के तिर्यक् रूपांतरण (मुझ, तुझ, इस, उस, इन, उन, किस, किन) तथा 'को' के साथ संयुक्त रूपों (मुझे, तुझे, इसे, उसे, इन्हें, उन्हें, किसे) में महारत प्राप्त करना।",
    "presentation": {
      "explanation": "जब सर्वनामों के बाद कोई परसर्ग (में, पर, से, को, का) लगता है, तो सर्वनाम अपने विशेष तिर्यक् रूपों में बदल जाते हैं:\n\n1. मूल सर्वनामों का तिर्यक् रूप:\n   - मैं → *मुझ* (मुझ में, मुझ पर, मुझ से, मुझ तक)\n   - तू → *तुझ* (तुझ में, तुझ पर, तुझ से)\n   - तुम → *तुम* (तुम में, तुम पर, तुम से) [अपरिवर्तित]\n   - आप → *आप* (आप में, आप पर, आप से) [अपरिवर्तित]\n   - यह → *इस* (इस में, इस पर, इस से, इस के लिए)\n   - वह → *उस* (उस में, उस पर, उस से, उस के लिए)\n   - ये → *इन* (इन में, इन पर, इन से, इन के लिए)\n   - वे → *उन* (उन में, उन पर, उन से, उन के लिए)\n   - कौन → *किस* (एकवचन) / *किन* (बहुवचन)।\n\n2. 'को' परसर्ग के साथ संयुक्त संक्षिप्त रूप:\n   - मुझ + को = *मुझको* अथवा *«मुझे»* (To me / Me)\n   - तुझ + को = *तुझको* अथवा *«तुझे»* (To you)\n   - तुम + को = *तुमको* अथवा *«तुम्हें»* (To you)\n   - आप + को = *«आपको»* (To you [आदरसूचक])\n   - इस + को = *इसको* अथवा *«इसे»* (To this/him/her)\n   - उस + को = *उसको* अथवा *«उसे»* (To that/him/her)\n   - इन + को = *इनको* अथवा *«इन्हें»* (To these/them)\n   - उन + को = *उनको* अथवा *«उन्हें»* (To those/them)\n   - किस + को = *किसको* अथवा *«किसे»* (To whom [एकवचन])\n   - किन + को = *किनको* अथवा *«किन्हें»* (To whom [बहुवचन])।",
      "examples": [
        {
          "target": "मुझे आज शाम को एक बहुत ज़रूरी काम पूरा करना है।",
          "reading": "mujhe aaj shaam ko ek bahut zaroori kaam poora karna hai. [mʊdʒʱeː aːdʒ ʃaːm koː eːk bəɦʊt̪ zəruːriː kaːm puːraː kərnaː hɛː] (MOO-zhay ahj shahm koh ayk buh-hoot zuh-ROO-ree kahm POO-rah KUHR-nah hy)",
          "translation": "I have to complete a very important work this evening."
        },
        {
          "target": "अध्यापक जी ने उसे कक्षा में सबसे आगे बैठने को कहा।",
          "reading": "adhyaapak jee ne use kaksha mein sabse aage baithne ko kaha. [əd̪ʱjaːpək dʒiː neː ʊseː kəkʃaː mẽː səbseː aːɡeː bɛːʈʰneː koː kəɦaː] (uh-DHYAH-puhk jee nay OO-say KUHK-shah mayn SUHB-say AH-gay BYTH-nay koh kuh-HAH)",
          "translation": "The respected teacher told him to sit at the very front in the class."
        },
        {
          "target": "इन्हें यह नई पुस्तक दीजिए और उनसे उनका शुभ नाम पूछिए।",
          "reading": "inhein yah nayi pustak deejiye aur unse unka shubh naam poochiye. [ɪnɦẽː jəh nəiː pʊst̪ək d̪iːdʒɪjeː ɔːr ʊnseː ʊnkaː ʃʊbʱ naːm puːtʃʰɪjeː] (een-HAYN yuh nuh-EE POOS-tuhk DEE-jee-yay owr OON-say OON-kah shoobh NAHM POO-chhee-yay)",
          "translation": "Give this new book to them and ask them their auspicious name."
        }
      ],
      "mnemonics": [
        "मैं + को = मुझे; वह + को = उसे; यह + को = इसे; वे + को = उन्हें; ये + को = इन्हें; कौन + को = किसे!"
      ],
      "culturalNotes": [
        "आदरणीय व्यक्तियों के लिए 'उसे' या 'इसे' के स्थान पर हमेशा आदरसूचक बहुवचन 'उन्हें' या 'इन्हें' (जैसे: 'उन्हें अंदर बुलाइए') का प्रयोग करना चाहिए।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "सर्वनाम 'वह' के साथ परसर्ग 'को' जुड़ने पर कौन-सा संक्षिप्त संयुक्त रूप बनता है?",
          "options": [
            "उसे / उसको (Use / Usko - To him / To her / To that)",
            "इसे",
            "मुझे",
            "तुम्हें"
          ],
          "answerIndex": 0,
          "explanation": "वह + को मिलकर «उसे» या «उसको» रूप बनता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "आदरणीय या बहुवचन व्यक्तियों के लिए 'वे' + 'को' का संयुक्त रूप क्या होगा?",
          "options": [
            "उन्हें / उनको (Unhein / Unko - To them / Honorific to him/her)",
            "इन्हें",
            "उसे",
            "किसे"
          ],
          "answerIndex": 0,
          "explanation": "वे + को का संयुक्त रूप «उन्हें» अथवा «उनको» होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "तिर्यक् सर्वनाम के सही प्रयोग वाला मानक वाक्य चुनिए:",
          "options": [
            "मुझे यह बात अच्छी लगी और मैंने उन्हें धन्यवाद दिया। (I liked this thing and I thanked them.)",
            "मैं को यह बात अच्छा लगा और मैंने वह को धन्यवाद दिया।",
            "मुझ यह बात अच्छी लगी और उन धन्यवाद दिया।",
            "मुझे वह में धन्यवाद है।"
          ],
          "answerIndex": 0,
          "explanation": "«मुझे» (मैं+को) और «उन्हें» (वे+को) दोनों मानक संयुक्त सर्वनाम रूप हैं।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u4-l1": {
    "id": "hi-u4-l1",
    "subject": "hindi",
    "unit": 4,
    "lessonNumber": 1,
    "title": "सामान्य वर्तमान काल की संरचना: धातु + ता/ती/ते + होना क्रिया",
    "level": "A1",
    "objective": "सामान्य वर्तमान काल (Present Habitual Tense) के निर्माण नियम, धातु प्रत्ययों (ता/ती/ते) तथा कर्ता के लिंग-वचन के अनुसार सहायक क्रिया (हूँ/हो/है/हैं) के समन्वय को सीखना।",
    "presentation": {
      "explanation": "सामान्य वर्तमान काल (Present Habitual Tense) का प्रयोग नित्य की आदतों, दैनिक दिनचर्या, सार्वभौमिक सत्यों तथा सामान्य अवस्थाओं को व्यक्त करने के लिए किया जाता है:\n\n1. क्रिया का मूल रूप (धातु - Verb Root):\n   - सामान्य क्रिया के अंत से '-ना' हटाने पर 'धातु' बचती है:\n   - पढ़ना → *पढ़-*, लिखना → *लिख-*, बोलना → *बोल-*, खाना → *खा-*, जाना → *जा-*।\n\n2. कृदंत प्रत्यय (Habitual Participle Suffixes):\n   - पुल्लिंग एकवचन: धातु + *'-ता'* (पढ़ता, खाता, जाता)\n   - पुल्लिंग बहुवचन / आदरसूचक: धातु + *'-ते'* (पढ़ते, खाते, जाते)\n   - स्त्रीलिंग एकवचन: धातु + *'-ती'* (पढ़ती, खाती, जाती)\n   - स्त्रीलिंग बहुवचन: धातु + *'-ती'* (पढ़ती, खाती, जाती) [सहायक क्रिया अनुनासिक होती है]।\n\n3. सर्वनामों के साथ पूर्ण वाक्य संरचना:\n   - मैं: *मैं पढ़ता हूँ* (पु.) / *मैं पढ़ती हूँ* (स्त्री.) — (I study/read)\n   - तू: *तू पढ़ता है* (पु.) / *तू पढ़ती है* (स्त्री.) — (You study)\n   - तुम: *तुम पढ़ते हो* (पु.) / *तुम पढ़ती हो* (स्त्री.) — (You study)\n   - आप: *आप पढ़ते हैं* (पु.) / *आप पढ़ती हैं* (स्त्री.) — (You [आदर] study)\n   - वह/यह: *वह पढ़ता है* (पु.) / *वह पढ़ती है* (स्त्री.) — (He/She studies)\n   - वे/ये: *वे पढ़ते हैं* (पु.) / *वे पढ़ती हैं* (स्त्री.) — (They study)।",
      "examples": [
        {
          "target": "मैं रोज़ सुबह छह बजे उठता हूँ और हिंदी का अभ्यास करता हूँ।",
          "reading": "main roz subah chhah baje uthta hoon aur hindi ka abhyaas karta hoon. [mɛ̃ː roːz sʊbəh tʃʰɛː bədʒeː ʊʈʰt̪aː hũː ɔːr hɪn̪d̪iː kaː əbʱjaːs kərt̪aː hũː] (myn rohz SOO-buh chhay buh-JAY OOTH-tah hoon owr HEEN-dee kah uhb-HYAHS KUHR-tah hoon)",
          "translation": "I wake up at six in the morning every day and practice Hindi."
        },
        {
          "target": "रोहन और प्रिया हर शाम को सुंदर बगीचे में टहलते हैं।",
          "reading": "rohan aur priya har shaam ko sundar bageeche mein tahalte hain. [roːɦən ɔːr prɪjaː hər ʃaːm koː sʊn̪d̪ər bəɡiːtʃeː mẽː ʈɛɦəlt̪eː hɛ̃ː] (ROH-huhn owr PREE-yah huhr shahm koh SOON-duhr buh-GEE-chay mayn tuh-HUHL-tay hyn)",
          "translation": "Rohan and Priya stroll in the beautiful garden every evening."
        },
        {
          "target": "मेरी माताजी प्रतिदिन परिवार के लिए स्वादिष्ट भोजन बनाती हैं।",
          "reading": "meri maataaji pratidin parivaar ke liye svaadisht bhojan banaati hain. [meːriː maːt̪aːdʒiː prət̪ɪd̪ɪn pərɪʋaːr keː lɪjeː sʋaːd̪ɪʂʈ bʱoːdʒən bənaːt̪iː hɛ̃ː] (MAY-ree mah-tah-JEE pruh-tee-DEEN puh-ree-VAHR kay lee-ay SVAH-deesht BHOJ-uhn buh-NAH-tee hyn)",
          "translation": "My mother makes delicious food for the family every day."
        }
      ],
      "mnemonics": [
        "पुरुष = -ता हूँ / -ते हैं; स्त्री = -ती हूँ / -ती हैं; धातु + ता/ती/ते + हूँ/हो/है/हैं = वर्तमान आदत!"
      ],
      "culturalNotes": [
        "हिंदी में आदरणीय एकवचन कर्ता (जैसे: माताजी, पिताजी, अध्यापक) के साथ भी बहुवचन क्रिया 'बनाती हैं / पढ़ाते हैं' का प्रयोग अनिवार्य शिष्टाचार है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग कर्ता 'प्रिया' के साथ क्रिया 'पढ़ना' का सामान्य वर्तमान काल रूप क्या होगा?",
          "options": [
            "प्रिया पढ़ती है (Priya padhti hai - Priya studies [fem. sing.])",
            "प्रिया पढ़ता है",
            "प्रिया पढ़ते हैं",
            "प्रिया पढ़ती हूँ"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग एकवचन कर्ता के साथ धातु + 'ती' + 'है' (पढ़ती है) आता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "सर्वनाम 'हम' (पुल्लिंग/मिश्रित बहुवचन) के साथ 'बोलना' क्रिया का सही रूप क्या है?",
          "options": [
            "हम बोलते हैं (Hum bolte hain - We speak)",
            "हम बोलता हूँ",
            "हम बोलती हो",
            "हम बोलते हो"
          ],
          "answerIndex": 0,
          "explanation": "«हम» के साथ धातु + '-ते' + 'हैं' (बोलते हैं) का प्रयोग होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "सामान्य वर्तमान काल के सही लिंग-वचन समन्वय वाला वाक्य चुनिए:",
          "options": [
            "लड़के मैदान में फुटबॉल खेलते हैं और लड़कियाँ गीत गाती हैं। (Boys play football in the field and girls sing songs.)",
            "लड़के मैदान में फुटबॉल खेलता है और लड़कियाँ गाते हैं।",
            "लड़के खेलती हैं और लड़की खेलता है।",
            "लड़कियाँ गाता हूँ।"
          ],
          "answerIndex": 0,
          "explanation": "«लड़के खेलते हैं» (पुल्लिंग बहुवचन) और «लड़कियाँ गाती हैं» (स्त्रीलिंग बहुवचन) व्याकरणसम्मत है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u4-l2": {
    "id": "hi-u4-l2",
    "subject": "hindi",
    "unit": 4,
    "lessonNumber": 2,
    "title": "दैनिक दिनचर्या और बारंबारता क्रिया-विशेषण (Frequency Adverbs)",
    "level": "A1",
    "objective": "दैनिक क्रियाकलापों की अभिव्यक्ति तथा बारंबारता सूचक क्रिया-विशेषणों (रोज़, हमेशा, अक्सर, कभी-कभी, कभी नहीं) के स्वाभाविक प्रयोग में दक्षता प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में अपनी दैनिक दिनचर्या और आदतों की आवृत्ति बताने के लिए विभिन्न बारंबारता क्रिया-विशेषणों (Adverbs of Frequency) का प्रयोग किया जाता है:\n\n1. प्रमुख बारंबारता क्रिया-विशेषण:\n   - *«रोज़» / «प्रतिदिन»* (Daily / Every day): मैं रोज़ व्यायाम करता हूँ।\n   - *«हमेशा» / «सदा»* (Always): वह हमेशा सच बोलती है।\n   - *«अक्सर» / «प्रायः»* (Often / Usually): हम अक्सर शाम को टहलने जाते हैं।\n   - *«कभी-कभी»* (Sometimes): मैं कभी-कभी मिठाई खाता हूँ।\n   - *«कभी नहीं»* (Never): वे कभी झूठ नहीं बोलते।\n   - *«हर हफ़्ते / हर महीने»* (Every week / Every month): हम हर हफ़्ते बाज़ार जाते हैं।\n\n2. दैनिक दिनचर्या की मुख्य क्रियाएं:\n   - *उठना* (To wake up / get up) → मैं छह बजे उठता हूँ।\n   - *दाँत साफ़ करना* (To brush teeth) → दाँत साफ़ करता हूँ।\n   - *नहाना* (To bathe) → स्नान करता / नहाता हूँ।\n   - *नाश्ता करना* (To have breakfast) → आठ बजे नाश्ता करता हूँ।\n   - *काम पर जाना* (To go to work) → नौ बजे दफ़्तर जाता हूँ।\n   - *सोना* (To sleep) → दस बजे सोता हूँ।\n\n3. वाक्य में स्थान:\n   - बारंबारता क्रिया-विशेषण सामान्यतः कर्ता के तुरंत बाद या कर्म से पहले आते हैं।",
      "examples": [
        {
          "target": "हम हमेशा समय पर विद्यालय जाते हैं और कभी देर नहीं करते।",
          "reading": "hum hamesha samay par vidyalay jaate hain aur kabhi der nahin karte. [həm həmeːʃaː səməj pər ʋɪd̪jaːləj dʒaːt̪eː hɛ̃ː ɔːr kəbʱiː d̪eːr nəɦĩː kərteː] (hum huh-MAY-shah suh-MUHY puhr veed-YAH-luy JAH-tay hyn owr kuh-BHEE dayr nuh-HEEN kuhr-TAY)",
          "translation": "We always go to school on time and never make delay."
        },
        {
          "target": "वह अक्सर शाम को संगीत सुनती है और कभी-कभी चित्र बनाती है।",
          "reading": "vah aksar shaam ko sangeet sunti hai aur kabhi-kabhi chitr banaati hai. [ʋəh əksər ʃaːm koː səŋɡiːt̪ sʊnt̪iː hɛː ɔːr kəbʱiː kəbʱiː tʃɪt̪rə bənaːt̪iː hɛː] (wuh UHK-suhr shahm koh suhn-GEET SOON-tee hy owr kuh-BHEE kuh-BHEE CHEET-ruh buh-NAH-tee hy)",
          "translation": "She often listens to music in the evening and sometimes paints pictures."
        },
        {
          "target": "पिताजी रोज़ सुबह समाचार-पत्र पढ़ते हैं और गर्म चाय पीते हैं।",
          "reading": "pitaaji roz subah samachaar-patr padhte hain aur garm chaay peete hain. [pɪt̪aːdʒiː roːz sʊbəh səmətʃaːr pət̪r pəɽʱt̪eː hɛ̃ː ɔːr ɡərm tʃaːj piːt̪eː hɛ̃ː] (pee-tah-JEE rohz SOO-buh suh-mah-CHAHR puht-ruh PUHDH-tay hyn owr guhrm CHAH-ee PEE-tay hyn)",
          "translation": "Father reads the newspaper every morning and drinks hot tea."
        }
      ],
      "mnemonics": [
        "रोज़ = 100% दैनिक; हमेशा = 100% सदा; अक्सर = 70% प्रायः; कभी-कभी = 30%; कभी नहीं = 0%!"
      ],
      "culturalNotes": [
        "भारतीय समाज में सुबह की शुरुआत चाय ('सुबह की चाय') और समाचार-पत्र के साथ करना एक सर्वव्यापी दैनिक दिनचर्या है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "अंग्रेजी शब्द 'Always' (सदा) के लिए सबसे प्रामाणिक हिंदी क्रिया-विशेषण कौन-सा है?",
          "options": [
            "हमेशा / सदा (Hamesha / Sada - Always)",
            "कभी-कभी",
            "कभी नहीं",
            "अक्सर"
          ],
          "answerIndex": 0,
          "explanation": "'Always' के लिए «हमेशा» अथवा «सदा» का प्रयोग किया जाता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «वह ___ शाम को पुस्तकालय जाती है» में 'Often' के अर्थ हेतु कौन-सा शब्द उपयुक्त है?",
          "options": [
            "अक्सर (Aksar - Often / Frequently)",
            "कभी नहीं",
            "कल",
            "परसों"
          ],
          "answerIndex": 0,
          "explanation": "'Often' (प्रायः) का अर्थ व्यक्त करने के लिए «अक्सर» सही शब्द है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "दैनिक दिनचर्या और बारंबारता का शुद्ध वाक्य पहचानिए:",
          "options": [
            "मैं प्रतिदिन सुबह सात बजे नाश्ता करता हूँ और समय पर दफ़्तर पहुँचता हूँ। (I have breakfast at seven every morning and reach office on time.)",
            "मैं कभी नहीं नाश्ता खाता हूँ और रोज़ देर से पहुँचती है।",
            "पिताजी अक्सर नाश्ता करती हैं।",
            "हम हमेशा नाश्ता करता हूँ।"
          ],
          "answerIndex": 0,
          "explanation": "«प्रतिदिन सुबह सात बजे नाश्ता करता हूँ» में समय, क्रिया-विशेषण और क्रिया का पूर्ण समन्वय है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u4-l3": {
    "id": "hi-u4-l3",
    "subject": "hindi",
    "unit": 4,
    "lessonNumber": 3,
    "title": "नकारात्मक वाक्य संरचना: 'नहीं' का स्थान और सहायक क्रिया लोप",
    "level": "A1",
    "objective": "सामान्य वर्तमान काल में नकारात्मक अव्यय 'नहीं' का सटीक स्थान तथा नकारात्मक वाक्यों में सहायक क्रिया (हूँ/है/हैं/हो) के स्वाभाविक लोप के नियमों को समझना।",
    "presentation": {
      "explanation": "सामान्य वर्तमान काल में वाक्यों को नकारात्मक (Negative) बनाने के नियम अत्यंत सहज और विशिष्ट हैं:\n\n1. नकारात्मक अव्यय 'नहीं' का स्थान:\n   - 'नहीं' (Nahin) को हमेशा मुख्य कृदंत क्रिया (ता/ती/ते) के ठीक पहले रखा जाता है:\n   - सकारात्मक: मैं चाय पीता हूँ।\n   - नकारात्मक: मैं चाय *नहीं पीता (हूँ)*।\n\n2. सहायक क्रिया का लोप (Auxiliary Verb Ellipsis):\n   - नकारात्मक वर्तमान काल में सहायक क्रिया (हूँ, है, हैं, हो) का लोप (हटा दिया जाना) मानक और अत्यधिक स्वाभाविक माना जाता है:\n     - वह मांस नहीं खाता (है)। → *वह मांस नहीं खाता।* (He does not eat meat.)\n     - हम झूठ नहीं बोलते (हैं)। → *हम झूठ नहीं बोलते।* (We do not speak lies.)\n     - वे देर से नहीं आतीं (हैं)। → *वे देर से नहीं आतीं।* (They do not come late.)\n   - *ध्यान दें*: जब सहायक क्रिया 'हैं' हटती है, तो स्त्रीलिंग बहुवचन में कृदंत क्रिया पर अनुनासिक बिन्दु लग जाता है: 'वे नहीं पढ़तीं'।\n\n3. 'नहीं' बनाम 'मत':\n   - 'नहीं' का प्रयोग तथ्यात्मक कथनों में होता है (मैं नहीं खाता);\n   - 'मत' (Do not) का प्रयोग केवल आज्ञार्थक/आदेशात्मक वाक्यों में होता है (वहाँ मत जाओ)।",
      "examples": [
        {
          "target": "मैं कॉफ़ी नहीं पीता, मुझे केवल ताज़ा दूध पसंद है।",
          "reading": "main coffee nahin peeta, mujhe keval taaza doodh pasand hai. [mɛ̃ː kɔːfiː nəɦĩː piːt̪aː mʊdʒʱeː keːʋəl t̪aːzaː d̪uːd̪ʱ pəsən̪d̪ hɛː] (myn KAW-fee nuh-HEEN PEE-tah, MOO-zhay KAY-wuhl TAH-zah doodh puh-SUHND hy)",
          "translation": "I do not drink coffee, I only like fresh milk."
        },
        {
          "target": "वे भले लोग कभी किसी से कड़वी बात नहीं बोलते।",
          "reading": "ve bhale log kabhi kisi se kadvi baat nahin bolte. [ʋeː bʱəleː loːɡ kəbʱiː kɪsiː seː kəɽʋiː baːt̪ nəɦĩː boːlt̪eː] (way bhuh-LAY lohg kuh-BHEE kee-SEE say KUHD-vee baht nuh-HEEN BOHL-tay)",
          "translation": "Those good people never speak bitter words to anyone."
        },
        {
          "target": "सुनीता रात को भारी खाना नहीं खाती और जल्दी सो जाती है।",
          "reading": "suneeta raat ko bhaari khaana nahin khaati aur jaldi so jaati hai. [suniːt̪aː raːt̪ koː bʱaːriː kʰaːnaː nəɦĩː kʰaːt̪iː ɔːr dʒəld̪iː soː dʒaːt̪iː hɛː] (soo-NEE-tah baht koh BHAH-ree KHAH-nah nuh-HEEN KHAH-tee owr JUHL-dee soh JAH-tee hy)",
          "translation": "Sunita does not eat heavy food at night and goes to sleep early."
        }
      ],
      "mnemonics": [
        "मुख्य क्रिया से ठीक पहले 'नहीं' लगाओ! नकारात्मक में 'है/हैं/हूँ' हटाना सबसे स्वाभाविक हिंदी है: 'मैं नहीं जानता'!"
      ],
      "culturalNotes": [
        "हिंदी में 'मैं नहीं जानता' (I don't know) कहना 'मैं नहीं जानता हूँ' कहने की तुलना में अधिक स्वाभाविक और परिष्कृत माना जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "सकारात्मक वाक्य «वह चाय पीती है» का सबसे स्वाभाविक मानक नकारात्मक रूप क्या होगा?",
          "options": [
            "वह चाय नहीं पीती (Vah chaay nahin peeti - She does not drink tea)",
            "वह नहीं चाय पीती है",
            "वह चाय पीती नहीं है",
            "वह चाय मत पीती"
          ],
          "answerIndex": 0,
          "explanation": "'नहीं' मुख्य क्रिया से पूर्व आता है और 'है' का लोप मानक रूप से «वह चाय नहीं पीती» बनता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "नकारात्मक वाक्य में 'नहीं' का सही स्थान कहाँ होता है?",
          "options": [
            "मुख्य क्रिया (कृदंत) के ठीक पहले (Immediately before the main verb)",
            "वाक्य के सबसे अंत में",
            "कर्ता के ठीक पहले",
            "कर्म के ठीक बाद"
          ],
          "answerIndex": 0,
          "explanation": "'नहीं' हमेशा मुख्य कृदंत क्रिया (जैसे: नहीं खाता, नहीं जाता) के ठीक पहले आता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "नकारात्मक वाक्य रचना की दृष्टि से पूर्णतः शुद्ध वाक्य का चयन कीजिए:",
          "options": [
            "हम कभी किसी का दिल नहीं दुखाते और झूठ नहीं बोलते। (We never hurt anyone's heart and do not speak lies.)",
            "हम कभी किसी का दिल दुखाते नहीं हैं और झूठ मत बोलते।",
            "हम नहीं दिल दुखाते हैं।",
            "झूठ नहीं हम बोलते।"
          ],
          "answerIndex": 0,
          "explanation": "«दिल नहीं दुखाते» और «झूठ नहीं बोलते» में 'नहीं' का स्थान और क्रिया-संयोजन पूर्णतः मानक है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u4-l4": {
    "id": "hi-u4-l4",
    "subject": "hindi",
    "unit": 4,
    "lessonNumber": 4,
    "title": "हाँ/नहीं और सूचनात्मक प्रश्नवाचक वाक्य (Questions in Habitual Tense)",
    "level": "A1",
    "objective": "सामान्य वर्तमान काल में हाँ/नहीं वाले प्रश्न (क्या से आरंभ) तथा सूचनात्मक प्रश्नवाचक शब्दों (कहाँ, कब, क्यों, कैसे, क्या) के वाक्य विन्यास में महारत प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में सामान्य वर्तमान काल के अंतर्गत दो प्रकार के प्रश्न पूछे जाते हैं:\n\n1. हाँ/नहीं वाले प्रश्न (Polar / Yes-No Questions):\n   - वाक्य के आरंभ में *«क्या»* (Kya) लगाने से प्रश्न बनता है:\n     - क्या आप चाय पीते हैं? (Do you drink tea?)\n     - क्या वह यहाँ रहती है? (Does she live here?)\n   - उत्तर देने का तरीका:\n     - *स्वीकारात्मक*: जी हाँ, मैं चाय पीता हूँ। (Yes, I drink tea.)\n     - *नकारात्मक*: जी नहीं, मैं चाय नहीं पीता। (No, I don't drink tea.)\n\n2. सूचनात्मक प्रश्न (Information / Wh- Questions):\n   - जब किसी विशिष्ट जानकारी के लिए प्रश्न पूछा जाए, तो प्रश्नवाचक शब्द क्रिया के ठीक पहले आता है:\n     - *कहाँ* (Where): आप कहाँ रहते हैं? (Where do you live?)\n     - *कब* (When): वह सुबह कब उठता है? (When does he wake up in the morning?)\n     - *क्यों* (Why): तुम इतना परिश्रम क्यों करते हो? (Why do you work so hard?)\n     - *कैसे* (How): वे दफ़्तर कैसे जाते हैं? (How do they go to the office?)\n     - *क्या* (What): आप नाश्ते में क्या खाते हैं? (What do you eat in breakfast?)\n     - *कौन* (Who): वहाँ कौन रहता है? (Who lives there?)\n\n3. 'क्या' के दोहरे प्रयोग में अंतर:\n   - वाक्य के शुरू में 'क्या' = Yes/No प्रश्न (क्या आप पढ़ते हैं?);\n   - क्रिया के पहले 'क्या' = What (आप क्या पढ़ते हैं? = What do you read?)।",
      "examples": [
        {
          "target": "क्या आप हर सुबह योगासन और ध्यान करते हैं?",
          "reading": "kya aap har subah yogaasan aur dhyaan karte hain? [kjaː aːp hər sʊbəh joːɡaːsən ɔːr d̪ʱjaːn kərteː hɛ̃ː] (kyah ahp huhr SOO-buh yoh-gah-SUHN owr DHYAHN kuhr-TAY hyn)",
          "translation": "Do you do yoga postures and meditation every morning?"
        },
        {
          "target": "आप सप्ताहांत में अपने परिवार के साथ कहाँ घूमने जाते हैं?",
          "reading": "aap saptaahaant mein apne parivaar ke saath kahaan ghoomne jaate hain? [aːp səpt̪aːɦaːn̪t̪ mẽː əpneː pərɪʋaːr keː saːt̪ʰ kəɦaː̃ ɡʱuːmneː dʒaːt̪eː hɛ̃ː] (ahp suhp-tah-HAHNT mayn uhp-NAY puh-ree-VAHR kay sahth kuh-HAHN GHOOM-nay JAH-tay hyn)",
          "translation": "Where do you go to roam with your family on weekends?"
        },
        {
          "target": "रोहित प्रतिदिन शाम को अपने दफ़्तर से कितने बजे घर लौटता है?",
          "reading": "rohit pratidin shaam ko apne daftar se kitne baje ghar laut-ta hai? [roːɦɪt̪ prət̪ɪd̪ɪn ʃaːm koː əpneː d̪əft̪ər seː kɪt̪neː bədʒeː ɡʱər lɔːʈt̪aː hɛː] (ROH-heet pruh-tee-DEEN shahm koh uhp-NAY DUHF-tuhr say KEET-nay buh-JAY ghuhr LOWT-tah hy)",
          "translation": "At what time does Rohit return home from his office every evening?"
        }
      ],
      "mnemonics": [
        "शुरू में 'क्या' = हाँ/नहीं का प्रश्न; क्रिया से पहले 'क्या' = What; कहाँ/कब/क्यों हमेशा क्रिया के ठीक आगे बैठते हैं!"
      ],
      "culturalNotes": [
        "हिंदी में किसी से प्रश्न पूछते समय वाक्य की शुरुआत में 'क्षमा कीजिए' या 'कृपया बताइए' जोड़ना अत्यंत भद्र शिष्टाचार माना जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "यदि आप किसी से पूछना चाहते हैं 'Where do you live?', तो शुद्ध हिंदी वाक्य क्या होगा?",
          "options": [
            "आप कहाँ रहते हैं? (Aap kahaan rahte hain? - Where do you live?)",
            "आप क्या रहते हैं?",
            "कहाँ आप रहते हो?",
            "आप कब रहते हैं?"
          ],
          "answerIndex": 0,
          "explanation": "स्थान पूछने के लिए «कहाँ» क्रिया के पहले आता है: «आप कहाँ रहते हैं?»।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «क्या आप हिंदी बोलते हैं?» का आदरपूर्वक स्वीकारात्मक उत्तर क्या होगा?",
          "options": [
            "जी हाँ, मैं हिंदी बोलता हूँ। (Yes, I speak Hindi.)",
            "जी नहीं, आप बोलते हैं।",
            "कहाँ, मैं जाता हूँ।",
            "अलविदा, मैं बोलता हूँ।"
          ],
          "answerIndex": 0,
          "explanation": "«जी हाँ, मैं हिंदी बोलता हूँ» पूर्णतः शिष्ट और व्याकरणसम्मत उत्तर है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "प्रश्नवाचक पदक्रम की दृष्टि से सही और मानक वाक्य चुनिए:",
          "options": [
            "आप सुबह कितने बजे उठते हैं और नाश्ते में क्या लेते हैं? (At what time do you wake up in the morning and what do you take for breakfast?)",
            "आप कितने बजे सुबह उठते हैं क्या और नाश्ते में?",
            "क्या आप उठते हैं कितने बजे?",
            "नाश्ते में लेते हैं क्या आप?"
          ],
          "answerIndex": 0,
          "explanation": "«कितने बजे उठते हैं» और «क्या लेते हैं» में प्रश्नवाचक पदक्रम सर्वथा शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u4-l5": {
    "id": "hi-u4-l5",
    "subject": "hindi",
    "unit": 4,
    "lessonNumber": 5,
    "title": "अनियमित क्रियाएं और विशेष धातुएं: होना, जाना, करना, देना, लेना",
    "level": "A1",
    "objective": "विशेष धातुओं (होना → होता है, जाना → जाता है, करना → करता है, देना → देता है, लेना → लेता है) के आदतन प्रयोग तथा 'है' (अवस्था) बनाम 'होता है' (सार्वभौमिक नियम) के अंतर को समझना।",
    "presentation": {
      "explanation": "हिंदी में कुछ प्रमुख धातुओं के सामान्य वर्तमान काल रूप विशेष ध्यान देने योग्य होते हैं:\n\n1. क्रिया 'होना' के दो रूप — 'है' बनाम 'होता है':\n   - *«है / हैं»* (Stative — तात्कालिक अवस्था):\n     - चाय गरम है। (The tea is hot [right now].)\n     - कमरा साफ़ है। (The room is clean.)\n   - *«होता है / होती है / होते हैं»* (Habitual / Universal Truth — सार्वभौमिक स्वभाव या नित्य नियम):\n     - दूध सफ़ेद होता है। (Milk is [inherently] white.)\n     - चीनी मीठी होती है। (Sugar is sweet.)\n     - सर्दियों में ठंड होती है। (It gets cold in winters.)\n\n2. अन्य प्रमुख धातुओं के आदतन रूप:\n   - *जाना* (To go): जाता है / जाते हैं / जाती है / जाती हैं\n   - *करना* (To do): करता है / करते हैं / करती है / करती हैं\n   - *देना* (To give): देता है / देते हैं / देती है / देती हैं (देना → दे- + ता = देता)\n   - *लेना* (To take): लेता है / लेते हैं / लेती है / लेती हैं (लेना → ले- + ता = लेता)\n   - *पीना* (To drink): पीता है / पीते हैं / पीती है / पीती हैं\n   - *सोना* (To sleep): सोता है / सोते हैं / सोती है / सोती हैं।",
      "examples": [
        {
          "target": "हिमालय के पहाड़ों पर सर्दियों में बहुत अधिक ठंड होती है।",
          "reading": "himaalay ke pahaadon par sardiyon mein bahut adhik thand hoti hai. [hɪmaːləj keː pəɦaːɽõː pər sərd̪ɪjõː mẽː bəɦʊt̪ əd̪ʱɪk t̪ʰəɳɖ hoːt̪iː hɛː] (hee-MAH-luy kay puh-HAH-dohn puhr suhr-dee-YOHN mayn buh-hoot UH-dheek THUHND HOH-tee hy)",
          "translation": "It gets very cold in the winters on the Himalayan mountains."
        },
        {
          "target": "अध्यापक जी हमें प्रतिदिन नया पाठ पढ़ाते हैं और ज्ञानवर्धक पुस्तकें देते हैं।",
          "reading": "adhyaapak jee humein pratidin naya paath padhaate hain aur gyanvardhak pustakein dete hain. [əd̪ʱjaːpək dʒiː hʊmẽː prət̪ɪd̪ɪn nəjaː paːʈʰ pəɽʱaːt̪eː hɛ̃ː ɔːr ɡjaːnʋərd̪ʱək pʊst̪əkẽː d̪eːt̪eː hɛ̃ː] (uh-DHYAH-puhk jee hoo-MAYN pruh-tee-DEEN nuh-YAH pahth puh-DHAH-tay hyn owr gyahn-vuhr-DHUHK poos-tuh-KAYN DAY-tay hyn)",
          "translation": "The respected teacher teaches us a new lesson every day and gives informative books."
        },
        {
          "target": "हम हर सुबह घर से निकलने से पहले माता-पिता का आशीर्वाद लेते हैं।",
          "reading": "hum har subah ghar se nikalne se pehle maata-pita ka aasheervaad lete hain. [həm hər sʊbəh ɡʱər seː nɪkəlneː seː pɛɦleː maːt̪aː pɪt̪aː kaː aːʃiːrʋaːd̪ leːt̪eː hɛ̃ː] (hum huhr SOO-buh ghuhr say nee-KUHL-nay say PUH-hlay mah-tah-PEE-tah kah ah-sheer-VAHD LAY-tay hyn)",
          "translation": "We take the blessings of our parents every morning before leaving home."
        }
      ],
      "mnemonics": [
        "अभी की बात = 'है'; हमेशा का स्वभाव = 'होता है'! देना → देता है; लेना → लेता है; करना → करता है!"
      ],
      "culturalNotes": [
        "भारत में दैनिक दिनचर्या में बड़ों का चरण स्पर्श कर आशीर्वाद लेना ('आशीर्वाद लेते हैं') सम्मान और कृतज्ञता की गहरी सांस्कृतिक परंपरा है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "सार्वभौमिक स्वभाव बताने वाले वाक्य «चीनी मीठी ___» में कौन-सी क्रिया उपयुक्त होगी?",
          "options": [
            "होती है (Hoti hai - Is inherently / naturally sweet)",
            "है",
            "करता है",
            "लेता है"
          ],
          "answerIndex": 0,
          "explanation": "प्राकृतिक या सार्वभौमिक गुण बताने के लिए «होती है» (Habitual to be) का प्रयोग होता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "क्रिया 'देना' (To give) का पुल्लिंग बहुवचन आदतन रूप क्या होगा?",
          "options": [
            "देते हैं (Dete hain - They give)",
            "देता हूँ",
            "देती है",
            "देंगे"
          ],
          "answerIndex": 0,
          "explanation": "'देना' धातु (दे-) + '-ते' + 'हैं' मिलकर «देते हैं» बनता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "विशेष धातुओं के आदतन प्रयोग वाला शुद्ध वाक्य चुनिए:",
          "options": [
            "सूरज पूर्व से निकलता है और दूध सफ़ेद होता है। (The sun rises from the east and milk is white.)",
            "सूरज पूर्व से निकलती है और दूध सफ़ेद है।",
            "सूरज निकलता हूँ और दूध होती है।",
            "दूध सफ़ेद करते हैं।"
          ],
          "answerIndex": 0,
          "explanation": "«सूरज पूर्व से निकलता है» और «दूध सफ़ेद होता है» दोनों सार्वभौमिक सत्यों की शुद्ध व्याकरणिक अभिव्यक्ति हैं।"
        }
      ],
      "passThreshold": 0.8
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
