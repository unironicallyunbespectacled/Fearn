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
    "title": "अपूर्ण वर्तमान काल की संरचना: धातु + रहा/रही/रहे + सहायक क्रिया",
    "level": "A1",
    "objective": "अपूर्ण वर्तमान काल (Present Continuous Tense) के निर्माण नियम, निरंतरता प्रत्ययों (रहा/रही/रहे) तथा कर्ता के लिंग-वचन अनुसार सहायक क्रिया (हूँ/हो/है/हैं) के सटीक समन्वय को सीखना।",
    "presentation": {
      "explanation": "अपूर्ण वर्तमान काल (Present Continuous Tense) का प्रयोग उन क्रियाओं के लिए किया जाता है जो बोलते समय वर्तमान में निरंतर घटित हो रही हैं:\n\n1. निर्माण का मूल सूत्र (Formula):\n   - **कर्ता + कर्म + [धातु + रहा/रही/रहे] + [हूँ/हो/है/हैं]**\n\n2. निरंतरता प्रत्यय (Continuous Aspect Suffixes):\n   - पुल्लिंग एकवचन: धातु + *'रहा'* (जैसे: पढ़ रहा, खा रहा, जा रहा)\n   - पुल्लिंग बहुवचन / आदरसूचक: धातु + *'रहे'* (जैसे: पढ़ रहे, खा रहे, जा रहे)\n   - स्त्रीलिंग एकवचन: धातु + *'रही'* (जैसे: पढ़ रही, खा रही, जा रही)\n   - स्त्रीलिंग बहुवचन: धातु + *'रही'* + अनुनासिक 'हैं' (जैसे: पढ़ रही हैं, खा रही हैं)।\n\n3. सर्वनामों के साथ पूर्ण रूपांतरण तालिका:\n   - मैं: *मैं लिख रहा हूँ* (पु.) / *मैं लिख रही हूँ* (स्त्री.) — (I am writing)\n   - तू: *तू देख रहा है* (पु.) / *तू देख रही है* (स्त्री.) — (You are watching)\n   - तुम: *तुम क्या कर रहे हो?* (पु.) / *तुम क्या कर रही हो?* (स्त्री.) — (What are you doing?)\n   - आप: *आप बोल रहे हैं* (पु.) / *आप बोल रही हैं* (स्त्री.) — (You are speaking [आदर])\n   - वह/यह: *वह जा रहा है* (पु.) / *वह जा रही है* (स्त्री.) — (He/She is going)\n   - वे/ये: *वे खेल रहे हैं* (पु.) / *वे खेल रही हैं* (स्त्री.) — (They are playing)।",
      "examples": [
        {
          "target": "मैं इस समय हिंदी व्याकरण का एक नया पाठ पढ़ रहा हूँ।",
          "reading": "main is samay hindi vyaakaran ka ek naya paath padh raha hoon. [mɛ̃ː ɪs səməj hɪn̪d̪iː ʋjaːkərəɳ kaː eːk nəjaː paːʈʰ pəɽʱ rəɦaː hũː] (myn ees suh-MUHY HEEN-dee vyah-kuh-RUHN kah ayk nuh-YAH pahth PUHDH ruh-HAH hoon)",
          "translation": "I am reading a new lesson of Hindi grammar at this moment."
        },
        {
          "target": "सभी बच्चे बाहर हरे मैदान में फुटबॉल खेल रहे हैं।",
          "reading": "sabhi bachhe baahar hare maidaan mein football khel rahe hain. [səbʱiː bətʃːʰeː baːɦər həreː mɛːd̪aːn mẽː fʊʈbɔːl kʰeːl rəɦeː hɛ̃ː] (SUH-bhee BUHTCH-chay BAH-huhr huh-RAY my-DAHN mayn FOOT-bawl KHAYL ruh-HAY hyn)",
          "translation": "All the children are playing football outside in the green field."
        },
        {
          "target": "मेरी बहन रसोईघर में हम सबके लिए चाय बना रही है।",
          "reading": "meri bahan rasoighar mein hum sabke liye chaay bana rahi hai. [meːriː bəɦən rəsoːiːɡʱər mẽː həm səbkeː lɪjeː tʃaːj bənaː rəɦiː hɛː] (MAY-ree BUH-huhn ruh-soy-GHUHR mayn hum SUHB-kay lee-ay CHAH-ee buh-NAH ruh-HEE hy)",
          "translation": "My sister is making tea for all of us in the kitchen."
        }
      ],
      "mnemonics": [
        "काम चल रहा है = 'रहा/रहे/रही'! पुरुष एक. = पढ़ रहा है; पुरुष बहु. = पढ़ रहे हैं; स्त्री = पढ़ रही है/हैं!"
      ],
      "culturalNotes": [
        "हिंदी में किसी से फोन पर बात करते समय 'आप क्या कर रहे हैं?' पूछना हाल-चाल जानने का सबसे सामान्य और विनम्र तरीका है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग बहुवचन कर्ता 'लड़कियाँ' के साथ 'गीत गाना' का अपूर्ण वर्तमान काल रूप क्या होगा?",
          "options": [
            "लड़कियाँ गीत गा रही हैं (Girls are singing songs [fem. plural continuous])",
            "लड़कियाँ गीत गा रहे हैं",
            "लड़कियाँ गीत गाता है",
            "लड़कियाँ गीत गा रही हो"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग बहुवचन के साथ 'गा रही हैं' (रही + अनुनासिक सहायक क्रिया हैं) आता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "सर्वनाम 'आप' (आदरसूचक पुल्लिंग) के साथ 'जाना' क्रिया का सही अपूर्ण वर्तमान रूप क्या है?",
          "options": [
            "आप जा रहे हैं (Aap ja rahe hain - You are going)",
            "आप जा रहा है",
            "आप जा रही हो",
            "आप जाते हो"
          ],
          "answerIndex": 0,
          "explanation": "आदरसूचक 'आप' के साथ 'धातु + रहे + हैं' (जा रहे हैं) प्रयुक्त होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "अपूर्ण वर्तमान काल के सही समन्वय वाला वाक्य चुनिए:",
          "options": [
            "पिताजी समाचार देख रहे हैं और माताजी भोजन परोस रही हैं। (Father is watching news and mother is serving food.)",
            "पिताजी समाचार देख रहा है और माताजी परोस रहे हैं।",
            "माताजी भोजन परोसता है।",
            "पिताजी देख रही हैं।"
          ],
          "answerIndex": 0,
          "explanation": "«पिताजी देख रहे हैं» (आदरसूचक पुल्लिंग) और «माताजी परोस रही हैं» (आदरसूचक स्त्रीलिंग) दोनों का व्याकरणिक समन्वय पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u5-l2": {
    "id": "hi-u5-l2",
    "subject": "hindi",
    "unit": 5,
    "lessonNumber": 2,
    "title": "तात्कालिक क्रियाएं और काल-वाचक अव्यय (अभी, इस समय, आजकल)",
    "level": "A1",
    "objective": "तात्कालिक समय सूचक क्रिया-विशेषणों (अभी, इस समय, आजकल, फिलहाल) का अपूर्ण वर्तमान काल में स्वाभाविक प्रयोग तथा नित्य आदत बनाम तात्कालिक स्थिति के अंतर को समझना।",
    "presentation": {
      "explanation": "वर्तमान में घटित हो रही घटनाओं की तात्कालिकता को स्पष्ट करने के लिए विशिष्ट काल-वाचक अव्ययों का प्रयोग किया जाता है:\n\n1. मुख्य तात्कालिक काल-वाचक अव्यय:\n   - *«अभी»* (Right now / Just now): मैं अभी दफ़्तर से निकल रहा हूँ।\n   - *«इस समय»* (At this moment / Currently): इस समय आकाश में बादल गरज रहे हैं।\n   - *«आजकल»* (Nowadays / Currently in progress): आजकल वह एक नई पुस्तक लिख रहा है।\n   - *«फिलहाल»* (For the time being / Presently): फिलहाल हम घर पर विश्राम कर रहे हैं।\n\n2. सामान्य वर्तमान (आदत) बनाम अपूर्ण वर्तमान (तात्कालिक):\n   - *सामान्य आदत*: मैं रोज़ सुबह चाय पीता हूँ। (I drink tea every morning.)\n   - *तात्कालिक क्रिया*: मैं अभी कॉफ़ी पी रहा हूँ। (I am drinking coffee right now.)\n   - *अस्थायी स्थिति*: आम तौर पर वह बस से जाती है, लेकिन आज वह पैदल चल रही है। (Usually she goes by bus, but today she is walking.)",
      "examples": [
        {
          "target": "बाहर बहुत तेज़ बारिश हो रही है और ठंडी हवा चल रही है।",
          "reading": "baahar bahut tez baarish ho rahi hai aur thandi hava chal rahi hai. [baːɦər bəɦʊt̪ t̪eːz baːrɪʃ hoː rəɦiː hɛː ɔːr t̪ʰəɳɖiː həʋaː tʃəl rəɦiː hɛː] (BAH-huhr buh-hoot tayz BAH-reesh hoh ruh-HEE hy owr THUHN-dee huh-VAH chuhl ruh-HEE hy)",
          "translation": "It is raining very heavily outside and cold wind is blowing."
        },
        {
          "target": "हम इस समय परीक्षा की तैयारी के लिए महत्वपूर्ण नोट्स बना रहे हैं।",
          "reading": "hum is samay pareeksha ki taiyaari ke liye mahatvapoorna notes bana rahe hain. [həm ɪs səməj pəriːkʃaː kiː t̪ɛːjaːriː keː lɪjeː məɦət̪ʋəpuːrɳə noːʈs bənaː rəɦeː hɛ̃ː] (hum ees suh-MUHY puh-REEK-shah kee ty-YAH-ree kay lee-ay muh-huht-vuh-POOR-nuh nohts buh-NAH ruh-HAY hyn)",
          "translation": "We are making important notes for exam preparation at this moment."
        },
        {
          "target": "आजकल वे अपने नए घर की सजावट में व्यस्त रह रहे हैं।",
          "reading": "aajkal ve apne naye ghar ki sajaavat mein vyast rah rahe hain. [aːdʒkəl ʋeː əpneː nəjeː ɡʱər kiː sədʒaːʋəʈ mẽː ʋjəst̪ rəɦ rəɦeː hɛ̃ː] (AHJ-kuhl way uhp-NAY nuh-YAY ghuhr kee suh-JAH-vuht mayn vyuhst ruh ruh-HAY hyn)",
          "translation": "Nowadays they are staying busy with decorating their new house."
        }
      ],
      "mnemonics": [
        "अभी / इस समय = Right now (अपूर्ण वर्तमान); रोज़ / हमेशा = Habit (सामान्य वर्तमान - ता/ती/ते)!"
      ],
      "culturalNotes": [
        "हिंदी में 'बारिश हो रही है' (It is raining) और 'हवा चल रही है' (Wind is blowing) दोनों प्राकृतिक क्रियाओं में स्त्रीलिंग अन्वय होता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "वर्तमान में ठीक इसी क्षण हो रही क्रिया (Right now) दर्शाने के लिए कौन-सा काल-वाचक अव्यय सबसे उपयुक्त है?",
          "options": [
            "अभी / इस समय (Abhi / Is samay - Right now / At this moment)",
            "कल",
            "परसों",
            "रोज़"
          ],
          "answerIndex": 0,
          "explanation": "ठीक वर्तमान क्षण दर्शाने के लिए «अभी» अथवा «इस समय» का प्रयोग किया जाता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «बाहर तेज़ हवा ___ रही है» में उचित क्रिया-रूप भरिए:",
          "options": [
            "चल (Chal rahi hai - Wind is blowing [fem.])",
            "दौड़",
            "उड़",
            "सो"
          ],
          "answerIndex": 0,
          "explanation": "हवा के बहने के लिए हिंदी में मानक मुहावरेदार क्रिया «चलना» (हवा चल रही है) प्रयुक्त होती है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "तात्कालिक क्रिया और समय-अव्यय का शुद्ध वाक्य चुनिए:",
          "options": [
            "हम अभी दफ़्तर पहुँच रहे हैं और बैठक शुरू हो रही है। (We are reaching the office right now and the meeting is starting.)",
            "हम अभी दफ़्तर पहुँचता है और बैठक शुरू होती है।",
            "बैठक शुरू हो रहा है अभी।",
            "हम रोज़ अभी पहुँच रहे हैं।"
          ],
          "answerIndex": 0,
          "explanation": "«हम अभी दफ़्तर पहुँच रहे हैं और बैठक शुरू हो रही है» तात्कालिक वर्तमान का पूर्णतः मानक वाक्य है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u5-l3": {
    "id": "hi-u5-l3",
    "subject": "hindi",
    "unit": 5,
    "lessonNumber": 3,
    "title": "अपूर्ण वर्तमान काल में नकारात्मक वाक्य और 'नहीं' का संयोजन",
    "level": "A1",
    "objective": "अपूर्ण वर्तमान काल में 'नहीं' के सही स्थान तथा नकारात्मक वाक्यों में सहायक क्रिया (हूँ/है/हैं/हो) के अनिवार्य प्रयोग को समझना।",
    "presentation": {
      "explanation": "अपूर्ण वर्तमान काल में नकारात्मक वाक्य बनाने के नियम अत्यंत स्पष्ट हैं:\n\n1. 'नहीं' का मानक स्थान:\n   - 'नहीं' (Nahin) को हमेशा निरंतरता क्रिया-पद (रहा/रही/रहे) से पहले, धातु के ठीक आगे या धातु से पहले रखा जाता है:\n   - मानक पदक्रम: **कर्ता + [नहीं] + [धातु + रहा/रही/रहे] + [सहायक क्रिया]**\n   - उदाहरण: मैं नहीं जा रहा हूँ। (I am not going.)\n   - उदाहरण: वह खाना नहीं खा रहा है। (He is not eating food.)\n\n2. सहायक क्रिया का अनिवार्य रूप से बने रहना:\n   - सामान्य वर्तमान काल (ता/ती/ते) के विपरीत, अपूर्ण वर्तमान काल (रहा/रही/रहे) में नकारात्मक वाक्यों में सहायक क्रिया (हूँ, है, हैं, हो) सामान्यतः **नहीं हटती**:\n     - *शुद्ध*: हम काम नहीं कर रहे हैं। (We are not working.)\n     - *अशुद्ध/अपूर्ण*: हम काम नहीं कर रहे। (कम प्रचलित)\n\n3. 'नहीं' का प्रभाव:\n   - नकारात्मक वाक्य में क्रिया का लिंग और वचन कर्ता के अनुसार ही निर्धारित रहता है (जैसे: 'वह नहीं सो रही है')।",
      "examples": [
        {
          "target": "हम आज शाम को सिनेमा देखने नहीं जा रहे हैं।",
          "reading": "hum aaj shaam ko cinema dekhne nahin ja rahe hain. [həm aːdʒ ʃaːm koː sɪneːmaː d̪eːkʰneː nəɦĩː dʒaː rəɦeː hɛ̃ː] (hum ahj shahm koh SEE-nay-mah DAYKH-nay nuh-HEEN JAH ruh-HAY hyn)",
          "translation": "We are not going to watch a movie this evening."
        },
        {
          "target": "वह अभी अपना गृहकार्य नहीं कर रहा है, बल्कि टीवी देख रहा है।",
          "reading": "vah abhi apna grihkaary nahin kar raha hai, balki tv dekh raha hai. [ʋəh əbʱiː əpnaː ɡrɪɦkaːrjə nəɦĩː kər rəɦaː hɛː bəlkɪ ʈiːʋiː d̪eːkʰ rəɦaː hɛː] (wuh UH-bhee uhp-NAH greeh-KAHR-yuh nuh-HEEN KUHR ruh-HAH hy, BUHL-kee tee-vee DAYKH ruh-HAH hy)",
          "translation": "He is not doing his homework right now, but rather watching TV."
        },
        {
          "target": "रीता आज बाज़ार नहीं जा रही है क्योंकि उसकी तबीयत ठीक नहीं है।",
          "reading": "reeta aaj bazaar nahin ja rahi hai kyonki uski tabiyat theek nahin hai. [riːt̪aː aːdʒ bəzaːr nəɦĩː dʒaː rəɦiː hɛː kjoː̃kɪ ʊskiː t̪əbiːjət̪ tʰiːk nəɦĩː hɛː] (REE-tah ahj buh-ZAHR nuh-HEEN JAH ruh-HEE hy KYOHN-kee OOS-kee tuh-BEE-yuht THEEK nuh-HEEN hy)",
          "translation": "Reeta is not going to the market today because her health is not well."
        }
      ],
      "mnemonics": [
        "रहा/रही/रहे से पहले 'नहीं' लगाओ और अंत में 'है/हैं/हूँ' ज़रूर लगाओ: 'मैं नहीं जा रहा हूँ'!"
      ],
      "culturalNotes": [
        "अस्वस्थ होने पर 'मेरी तबीयत ठीक नहीं है' (My health is not well) कहना हिंदी में अनुपस्थिति या असमर्थता व्यक्त करने का सबसे विनम्र सामाजिक वाक्य है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "वाक्य «वह नहीं पढ़ रहा ___» में अपूर्ण वर्तमान काल की पूर्णता हेतु कौन-सी सहायक क्रिया आएगी?",
          "options": [
            "है (Vah nahin padh raha hai - He is not studying)",
            "था",
            "हूँ",
            "होगा"
          ],
          "answerIndex": 0,
          "explanation": "एकवचन अन्य पुरुष कर्ता 'वह' के साथ वर्तमान सहायक क्रिया «है» आती है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "सकारात्मक वाक्य «वे खेल रहे हैं» का शुद्ध नकारात्मक रूप क्या होगा?",
          "options": [
            "वे नहीं खेल रहे हैं (Ve nahin khel rahe hain - They are not playing)",
            "वे खेल नहीं हैं रहे",
            "वे मत खेल रहे हैं",
            "वे नहीं खेलते हैं"
          ],
          "answerIndex": 0,
          "explanation": "मानक नकारात्मक रूप «वे नहीं खेल रहे हैं» है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "अपूर्ण वर्तमान नकारात्मक की दृष्टि से पूर्णतः शुद्ध वाक्य चुनिए:",
          "options": [
            "छात्र शोर नहीं मचा रहे हैं और शांतिपूर्वक अपना काम कर रहे हैं। (Students are not making noise and are peacefully doing their work.)",
            "छात्र शोर मचा नहीं रहे हैं मत।",
            "छात्र शोर नहीं मचाता हैं।",
            "छात्र नहीं मचा रहा है शोर।"
          ],
          "answerIndex": 0,
          "explanation": "«शोर नहीं मचा रहे हैं» में 'नहीं' का स्थान और बहुवचन क्रिया का प्रयोग पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u5-l4": {
    "id": "hi-u5-l4",
    "subject": "hindi",
    "unit": 5,
    "lessonNumber": 4,
    "title": "अपूर्ण वर्तमान में प्रश्नवाचक संरचनाएं (आप क्या कर रहे हैं?)",
    "level": "A1",
    "objective": "अपूर्ण वर्तमान काल में सूचनात्मक प्रश्न (क्या कर रहे हैं, कहाँ जा रहे हैं, क्यों हँस रहे हैं) तथा हाँ/नहीं वाले प्रश्नों के सटीक पदक्रम में प्रवीणता प्राप्त करना।",
    "presentation": {
      "explanation": "दैनिक जीवन में वर्तमान गतिविधियों के विषय में प्रश्न पूछने के लिए अपूर्ण वर्तमान काल की प्रश्नवाचक संरचनाओं का प्रयोग होता है:\n\n1. सूचनात्मक प्रश्न (Information Questions — Wh-words):\n   - प्रश्नवाचक शब्द (क्या, कहाँ, कब, क्यों, कैसे, किससे) हमेशा मुख्य क्रिया (धातु + रहा) के ठीक पहले आता है:\n     - *क्या* (What): आप इस समय **क्या कर रहे हैं**? (What are you doing?)\n     - *कहाँ* (Where): तुम कहाँ जा रहे हो? (Where are you going?)\n     - *क्यों* (Why): वह क्यों रो रही है? (Why is she crying?)\n     - *किससे* (With whom): वे किससे बात कर रहे हैं? (Whom are they talking to?)\n     - *कैसे* (How): आप यह काम कैसे कर रहे हैं? (How are you doing this work?)\n\n2. हाँ/नहीं वाले प्रश्न (Polar / Yes-No Questions):\n   - वाक्य के आरंभ में 'क्या' लगाकर प्रश्न पूछा जाता है:\n     - क्या आप मेरी आवाज़ सुन रहे हैं? (Are you listening to my voice?)\n     - उत्तर: जी हाँ, मैं आपकी बात सुन रहा हूँ। (Yes, I am listening to you.)\n     - उत्तर: जी नहीं, मुझे आवाज़ नहीं आ रही है। (No, I am not getting the voice.)",
      "examples": [
        {
          "target": "क्षमा कीजिए, आप इस समय किस विषय पर चर्चा कर रहे हैं?",
          "reading": "kshama keejiye, aap is samay kis vishay par charcha kar rahe hain? [kʃəmaː kiːdʒɪjeː aːp ɪs səməj kɪs ʋɪʂəj pər tʃərtʃaː kər rəɦeː hɛ̃ː] (kshu-MAH KEE-jee-yay, ahp ees suh-MUHY kees vee-SHUY puhr chuhr-CHAH KUHR ruh-HAY hyn)",
          "translation": "Excuse me, on which subject are you discussing at this moment?"
        },
        {
          "target": "क्या आप सब लोग आज शाम के संगीत समारोह में आ रहे हैं?",
          "reading": "kya aap sab log aaj shaam ke sangeet samaaroh mein aa rahe hain? [kjaː aːp səb loːɡ aːdʒ ʃaːm keː səŋɡiːt̪ səmaːroːɦ mẽː aː rəɦeː hɛ̃ː] (kyah ahp suhb lohg ahj shahm kay suhn-GEET suh-mah-ROH mayn AH ruh-HAY hyn)",
          "translation": "Are all of you coming to this evening's music concert?"
        },
        {
          "target": "रोहन और अमित बाहर इतनी ज़ोर-ज़ोर से क्यों हँस रहे हैं?",
          "reading": "rohan aur amit baahar itni zor-zor se kyon hans rahe hain? [roːɦən ɔːr əmɪt̪ baːɦər ɪt̪niː zoːr zoːr seː kjoː̃ həs rəɦeː hɛ̃ː] (ROH-huhn owr UH-meet BAH-huhr eet-NEE zohr-zohr say KYOHN HUHNS ruh-HAY hyn)",
          "translation": "Why are Rohan and Amit laughing so loudly outside?"
        }
      ],
      "mnemonics": [
        "क्या कर रहे हैं? = What are you doing? कहाँ जा रहे हैं? = Where are you going? प्रश्नवाचक शब्द क्रिया से ठीक पहले!"
      ],
      "culturalNotes": [
        "हिंदी में किसी परिचित से मिलते ही 'कहाँ जा रहे हैं?' पूछना औपचारिकता नहीं बल्कि स्नेह और आत्मीयता प्रकट करने का अनौपचारिक अभिवादन है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "दैनिक बातचीत में 'What are you doing?' पूछने के लिए सबसे मानक और शिष्ट हिंदी वाक्य कौन-सा है?",
          "options": [
            "आप क्या कर रहे हैं? (Aap kya kar rahe hain? - What are you doing?)",
            "आप कहाँ जाते हो?",
            "क्या आप करते हैं?",
            "आप क्यों कर रहे हैं?"
          ],
          "answerIndex": 0,
          "explanation": "'What are you doing?' के लिए मानक वाक्य «आप क्या कर रहे हैं?» है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «तुम इतनी तेज़ क्यों दौड़ ___ हो?» में रिक्त स्थान भरिए:",
          "options": [
            "रहे (Tum itni tez kyon daud rahe ho? - Why are you running so fast?)",
            "रहा",
            "रही",
            "हैं"
          ],
          "answerIndex": 0,
          "explanation": "सर्वनाम 'तुम' (पुल्लिंग) के साथ 'रहे हो' का प्रयोग होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "अपूर्ण वर्तमान प्रश्नवाचक वाक्य का सर्वथा शुद्ध रूप चुनिए:",
          "options": [
            "आप आज रात को कहाँ ठहर रहे हैं और कल कब निकल रहे हैं? (Where are you staying tonight and when are you leaving tomorrow?)",
            "आप कहाँ ठहरता है और कब निकलती है?",
            "कहाँ आप ठहर रहे हैं क्या?",
            "निकल रहे हैं कब आप?"
          ],
          "answerIndex": 0,
          "explanation": "«कहाँ ठहर रहे हैं» और «कब निकल रहे हैं» में प्रश्नवाचक पदक्रम और निरंतरता का समन्वय सटीक है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u5-l5": {
    "id": "hi-u5-l5",
    "subject": "hindi",
    "unit": 5,
    "lessonNumber": 5,
    "title": "स्थैतिक अवस्था बनाम गतिशील क्रिया: बैठना (बैठा है), खड़ा होना, लेटना और पहनना",
    "level": "A1",
    "objective": "हिंदी की स्थैतिक अवस्था सूचक क्रियाओं (बैठा है, खड़ा है, लेटा है, पहने हुए है) और गतिशील निरंतरता (बैठ रहा है, खड़ा हो रहा है) के मौलिक अंतर को समझना और शुद्ध प्रयोग करना।",
    "presentation": {
      "explanation": "हिंदी और अंग्रेजी व्याकरण के बीच एक अत्यंत महत्वपूर्ण संरचनात्मक अंतर 'अवस्था सूचक' (Stative) बनाम 'गतिशील' (Action) क्रियाओं में पाया जाता है:\n\n1. अवस्था (State) बनाम क्रिया की गति (Motion):\n   - *अंग्रेजी में*: 'He is sitting' और 'He is sitting down' दोनों में Continuous रूप का प्रयोग होता है।\n   - *हिंदी में अंतर*:\n     - गति/प्रक्रिया (Process of sitting): 'वह बैठ रहा है' (He is in the process of sitting down right now);\n     - अवस्था (Already seated): *«वह बैठा है»* (He is [already] seated / sitting on the chair)।\n\n2. प्रमुख स्थैतिक अवस्था सूचक क्रियाएं:\n   - *बैठना* (To sit): वह कुर्सी पर **बैठा है** (पु.एक.) / वह **बैठी है** (स्त्री.एक.) / वे **बैठे हैं** (बहु.)।\n   - *खड़ा होना* (To stand): दरवाजे पर कोई **खड़ा है** (पु.) / वह **खड़ी है** (स्त्री.) / लोग **खड़े हैं** (बहु.)।\n   - *लेटना* (To lie down): मरीज़ बिस्तर पर **लेटा है** (पु.) / वह **लेटी है** (स्त्री.)।\n   - *पहनना* (To wear): उसने नया कुरता **पहना है** अथवा वह कुरता **पहने हुए है** (Wearing clothes)।",
      "examples": [
        {
          "target": "कक्षा में अध्यापक जी कुर्सी पर बैठे हैं और सभी छात्र खड़े हैं।",
          "reading": "kaksha mein adhyaapak jee kursi par baithe hain aur sabhi chhaatr khade hain. [kəkʃaː mẽː əd̪ʱjaːpək dʒiː kʊrsiː pər bɛːʈʰeː hɛ̃ː ɔːr səbʱiː tʃʰaːt̪r kʰəɽeː hɛ̃ː] (KUHK-shah mayn uh-DHYAH-puhk jee KOOR-see puhr BY-thay hyn owr SUH-bhee CHHAH-truh KHUH-day hyn)",
          "translation": "In the classroom, the respected teacher is seated on the chair and all students are standing."
        },
        {
          "target": "वह सुंदर सफ़ेद कमीज़ और नीली पतलून पहने हुए है।",
          "reading": "vah sundar safed kameez aur neeli patloon pahne hue hai. [ʋəh sʊn̪d̪ər səfeːd̪ kəmiːz ɔːr niːliː pət̪luːn pɛɦneː hʊeː hɛː] (wuh SOON-duhr suh-FAYD kuh-MEEZ owr NEE-lee puht-LOON PUH-hnay HOO-ay hy)",
          "translation": "He is wearing a beautiful white shirt and blue trousers."
        },
        {
          "target": "मरीज़ आराम से बिस्तर पर लेटा है और डॉक्टर दवा दे रहे हैं।",
          "reading": "mareez aaraam se bistar par leta hai aur doctor dava de rahe hain. [məriːz aːraːm seː bɪst̪ər pər leːʈaː hɛː ɔːr ɖɔːkʈər d̪əʋaː d̪eː rəɦeː hɛ̃ː] (muh-REEZ ah-RAHM say BEES-tuhr puhr LAY-tah hy owr DAHK-tuhr duh-VAH DAY ruh-HAY hyn)",
          "translation": "The patient is lying comfortably on the bed and the doctor is giving medicine."
        }
      ],
      "mnemonics": [
        "पहले से बैठा है = 'बैठा है' (Stative); अभी नीचे बैठ रहा है = 'बैठ रहा है' (Action)! खड़ा है, लेटा है, पहने है = स्थिति!"
      ],
      "culturalNotes": [
        "भारतीय शिष्टाचार में जब कोई बड़ा या अतिथि कमरे में प्रवेश करता है, तो बैठे हुए लोग सम्मानपूर्वक 'खड़े हो जाते हैं' (stand up)।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "यदि कोई व्यक्ति पहले से कुर्सी पर विराजमान (Seated) है, तो उसके लिए शुद्ध हिंदी अभिव्यक्ति क्या होगी?",
          "options": [
            "वह कुर्सी पर बैठा है (Vah kursi par baitha hai - He is seated/sitting on the chair)",
            "वह कुर्सी पर बैठ रहा है",
            "वह कुर्सी पर बैठता हूँ",
            "वह कुर्सी पर बैठेगा"
          ],
          "answerIndex": 0,
          "explanation": "बैठने की निरंतर अवस्था (Stative posture) के लिए «बैठा है» का प्रयोग किया जाता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग कर्ता 'सीमा' के पहले से खड़े होने की स्थिति को बताने वाला वाक्य कौन-सा है?",
          "options": [
            "सीमा दरवाजे पर खड़ी है (Seema darvaaje par khadi hai - Seema is standing at the door)",
            "सीमा दरवाजे पर खड़ा है",
            "सीमा दरवाजे पर खड़े हैं",
            "सीमा दरवाजे पर खड़ी हो रही है"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग एकवचन की स्थैतिक अवस्था के लिए «खड़ी है» का प्रयोग होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "स्थैतिक अवस्था और पहनावे के सही व्याकरणिक प्रयोग वाला वाक्य चुनिए:",
          "options": [
            "वह लाल कुरता पहने हुए मंच पर खड़ा है और लोग सामने बैठे हैं। (He is standing on the stage wearing a red kurta and people are seated in front.)",
            "वह लाल कुरता पहन रहा है मंच पर खड़ा रहा है और लोग बैठ रहे हैं।",
            "लोग खड़ा है और वह बैठी है।",
            "मंच पर लेटा हुआ गाता है।"
          ],
          "answerIndex": 0,
          "explanation": "«पहने हुए» (पहनावा), «खड़ा है» (खड़े होने की अवस्था) और «बैठे हैं» (बैठने की अवस्था) तीनों का प्रयोग पूर्णतः प्रामाणिक है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u6-l1": {
    "id": "hi-u6-l1",
    "subject": "hindi",
    "unit": 6,
    "lessonNumber": 1,
    "title": "अकर्मक क्रियाओं का सामान्य भूतकाल (आया, गया, सोया, हँसा)",
    "level": "A2",
    "objective": "अकर्मक क्रियाओं (Intransitive Verbs) के सामान्य भूतकाल रूप, लिंग-वचन प्रत्ययों (-आ, -ए, -ई, -ईं) तथा इनमें 'ने' परसर्ग न लगने के मौलिक नियम को समझना।",
    "presentation": {
      "explanation": "हिंदी में भूतकाल की रचना इस बात पर निर्भर करती है कि क्रिया 'अकर्मक' (Intransitive) है या 'सकर्मक' (Transitive):\n\n1. अकर्मक क्रियाओं की विशेषता:\n   - जिन क्रियाओं का कोई प्रत्यक्ष कर्म (Object) नहीं होता (जैसे: आना, जाना, सोना, हँसना, बैठना, चलना, दौड़ना, गिरना), उनमें कर्ता के साथ कभी भी **'ने' परसर्ग नहीं लगता**।\n   - क्रिया का लिंग और वचन सीधे **कर्ता** के अनुसार बदलता है।\n\n2. भूतकालिक कृदंत प्रत्यय (Past Participle Suffixes):\n   - पुल्लिंग एकवचन: धातु + *'-आ'* (आया, गया, सोया, हँसा, बैठा)\n   - पुल्लिंग बहुवचन / आदर: धातु + *'-ए'* (आए, गए, सोए, हँसे, बैठे)\n   - स्त्रीलिंग एकवचन: धातु + *'-ई'* (आई, गई, सोई, हँसी, बैठी)\n   - स्त्रीलिंग बहुवचन: धातु + *'-ईं'* [अनुनासिक] (आईं, गईं, सोईं, हँसीं, बैठीं)।\n\n3. अनियमित अकर्मक धातु 'जाना':\n   - 'जाना' का भूतकाल रूप 'जाया' न होकर अनियमित रूप से **गया / गए / गई / गईं** बनता है।",
      "examples": [
        {
          "target": "रोहन कल सुबह अपनी लंबी यात्रा पूरी करके घर लौटा।",
          "reading": "rohan kal subah apni lambi yaatra poori karke ghar lauta. [roːɦən kəl sʊbəh əpniː ləmbiː jaːt̪raː puːriː kərkeː ɡʱər lɔːʈaː] (ROH-huhn kuhl SOO-buh uhp-NEE LUHM-bee YAH-trah POO-ree kuhr-KAY ghuhr LOW-tah)",
          "translation": "Rohan returned home yesterday morning after completing his long journey."
        },
        {
          "target": "सभी सम्मानित अतिथि समय पर सभागार में आए और बहुत प्रसन्न हुए।",
          "reading": "sabhi sammaanit atithi samay par sabhaagaar mein aaye aur bahut prasann hue. [səbʱiː səmːaːnɪt̪ ət̪ɪt̪ʰɪ səməj pər səbʱaːɡaːr mẽː aːeː ɔːr bəɦʊt̪ prəsənːə hʊeː] (SUH-bhee suhm-MAH-neet uh-TEE-thee suh-MUHY puhr suh-bhah-GAHR mayn AH-yay owr buh-hoot pruh-SUHN-nuh HOO-ay)",
          "translation": "All respected guests came to the auditorium on time and were very pleased."
        },
        {
          "target": "कल रात को नगर में बहुत तेज़ बारिश हुई और ठंडी हवा चली।",
          "reading": "kal raat ko nagar mein bahut tez baarish hui aur thandi hava chali. [kəl raːt̪ koː nəɡər mẽː bəɦʊt̪ t̪eːz baːrɪʃ hʊiː ɔːr t̪ʰəɳɖiː həʋaː tʃəliː] (kuhl baht koh NUH-guhr mayn buh-hoot tayz BAH-reesh HOO-ee owr THUHN-dee huh-VAH chuh-LEE)",
          "translation": "It rained very heavily in the city last night and cold wind blew."
        }
      ],
      "mnemonics": [
        "अकर्मक क्रिया (आना, जाना, सोना) = NO 'ने'! कर्ता पुरुष = आया/गए; कर्ता स्त्री = आई/गईं; जाना → गया!"
      ],
      "culturalNotes": [
        "अतिथियों के आगमन पर 'आप कब आए?' (When did you arrive?) पूछना भारतीय घरों में आत्मीय स्वागत का पहला शिष्टाचार वाक्य है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग कर्ता 'सीता' के साथ अकर्मक क्रिया 'जाना' का शुद्ध सामान्य भूतकाल रूप क्या होगा?",
          "options": [
            "सीता घर गई (Seeta ghar gayi - Sita went home)",
            "सीता ने घर गया",
            "सीता घर जाया",
            "सीता ने घर गई"
          ],
          "answerIndex": 0,
          "explanation": "अकर्मक क्रिया में 'ने' नहीं लगता और 'जाना' स्त्रीलिंग में «गई» बनता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "पुल्लिंग बहुवचन कर्ता 'लड़के' के साथ 'आना' क्रिया का सही भूतकाल रूप क्या है?",
          "options": [
            "लड़के समय पर आए (Boys came on time)",
            "लड़कों ने आया",
            "लड़के आई",
            "लड़के आया"
          ],
          "answerIndex": 0,
          "explanation": "पुल्लिंग बहुवचन में अकर्मक क्रिया का रूप «आए» (धातु + -ए) होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "अकर्मक भूतकाल की दृष्टि से व्याकरणसम्मत शुद्ध वाक्य चुनिए:",
          "options": [
            "कल सभी छात्राएं समय पर विद्यालय पहुँचीं और प्रार्थना में बैठीं। (All girl students reached school on time yesterday and sat in prayer.)",
            "कल सभी छात्राओं ने विद्यालय पहुँचा।",
            "छात्राएं पहुँचे और बैठा।",
            "छात्राओं ने बैठीं।"
          ],
          "answerIndex": 0,
          "explanation": "«पहुँचीं» और «बैठीं» दोनों स्त्रीलिंग बहुवचन अकर्मक क्रियाएं हैं और इनमें 'ने' का प्रयोग नहीं हुआ है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u6-l2": {
    "id": "hi-u6-l2",
    "subject": "hindi",
    "unit": 6,
    "lessonNumber": 2,
    "title": "सकर्मक क्रियाएं और कर्ता कारक परसर्ग 'ने' का प्रयोग",
    "level": "A2",
    "objective": "सकर्मक क्रियाओं (Transitive Verbs) के भूतकाल में कर्ता के साथ परसर्ग 'ने' (Ergative Case) के अनिवार्य प्रयोग तथा सर्वनामों के रूपांतरण (मैंने, उसने, उन्होंने) में दक्षता प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी व्याकरण की सबसे प्रमुख और अद्वितीय विशेषता 'ने' परसर्ग (Ergative Construction) का नियम है:\n\n1. 'ने' परसर्ग का नियम (The Ergative Rule):\n   - जब भूतकाल में क्रिया **सकर्मक** (Transitive — कर्म लेने वाली, जैसे: पढ़ना, लिखना, खाना, देखना, सुनना, खरीदना, कहना) हो, तो कर्ता के साथ अनिवार्य रूप से **'ने'** जुड़ता है।\n   - 'ने' लगने पर कर्ता अपने **तिर्यक् रूप** (Oblique Case) में आ जाता है।\n\n2. संज्ञाओं के साथ 'ने':\n   - राम ने, सीता ने, अध्यापक ने, लड़के ने (एकवचन);\n   - लड़कों ने, महिलाओं ने, छात्रों ने (बहुवचन)।\n\n3. सर्वनामों के साथ 'ने' के संयुक्त रूप:\n   - मैं + ने = **मैंने** (I)\n   - तू + ने = **तूने** (You)\n   - तुम + ने = **तुमने** (You)\n   - आप + ने = **आपने** (You [आदर])\n   - हम + ने = **हमने** (We)\n   - यह + ने = **इसने** (This/He/She)\n   - वह + ने = **उसने** (That/He/She)\n   - ये + ने = **इन्होंने** (These/They)\n   - वे + ने = **उन्होंने** (Those/They)\n   - कौन + ने = **किसने** (एकवचन) / **किन्होंने** (बहुवचन)।",
      "examples": [
        {
          "target": "मैंने कल पुस्तकालय में बैठकर एक बहुत ज्ञानवर्धक पुस्तक पढ़ी।",
          "reading": "maine kal pustakaalay mein baithkar ek bahut gyanvardhak pustak padhi. [mɛ̃ːneː kəl pʊst̪əkaːləj mẽː bɛːʈʰkər eːk bəɦʊt̪ ɡjaːnʋərd̪ʱək pʊst̪ək pəɽʱiː] (MY-nay kuhl poos-tuh-KAH-luy mayn BYTH-kuhr ayk buh-hoot gyahn-vuhr-DHUHK poos-tuhk PUHDH-ee)",
          "translation": "I read a very informative book yesterday sitting in the library."
        },
        {
          "target": "उसने बाज़ार जाकर अपने छोटे भाई के लिए नए कपड़े खरीदे।",
          "reading": "usne bazaar jaakar apne chhote bhaai ke liye naye kapde khareede. [ʊsneː bəzaːr dʒaːkər əpneː tʃʰoːʈeː bʱaːiː keː lɪjeː nəjeː kəpɽeː kʰəriːd̪eː] (OOS-nay buh-ZAHR JAH-kuhr uhp-NAY CHHOH-tay bhah-EE kay lee-ay nuh-YAY kuhp-DAY khuh-REE-day)",
          "translation": "He went to the market and bought new clothes for his younger brother."
        },
        {
          "target": "उन्होंने अपने सभी पुराने मित्रों को स्नेहपूर्वक भोजन पर आमंत्रित किया।",
          "reading": "unhonne apne sabhi puraane mitron ko snehpoorvak bhojan par aamantrit kiya. [ʊnɦõːneː əpneː səbʱiː pʊraːneː mɪt̪rõː koː sneːɦpuːrʋək bʱoːdʒən pər aːmən̪t̪rɪt̪ kɪjaː] (oon-HOHN-nay uhp-NAY SUH-bhee poo-RAH-nay MEET-rohn koh snayh-POOR-vuhk BHOJ-uhn puhr ah-muhn-TREET kee-YAH)",
          "translation": "They affectionately invited all their old friends to dinner."
        }
      ],
      "mnemonics": [
        "सकर्मक भूतकाल = कर्ता + 'ने'! मैं + ने = मैंने; वह + ने = उसने; वे + ने = उन्होंने; कौन + ने = किसने!"
      ],
      "culturalNotes": [
        "हिंदी में किसी बड़े या सम्मानीय व्यक्ति का उल्लेख करते समय 'उन्होंने कहा' (They said) कहना आदर का अनिवार्य नियम है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "सर्वनाम 'वह' के साथ भूतकाल में सकर्मक क्रिया के लिए कौन-सा कर्ता रूप बनेगा?",
          "options": [
            "उसने (Usne - He/She in ergative past)",
            "वह ने",
            "उसको",
            "उससे"
          ],
          "answerIndex": 0,
          "explanation": "वह + ने का मानक संयुक्त रूप «उसने» बनता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "सर्वनाम 'वे' (आदरसूचक/बहुवचन) के साथ 'ने' का शुद्ध रूप क्या है?",
          "options": [
            "उन्होंने (Unhonne - They in ergative past)",
            "वे ने",
            "उनने",
            "इनने"
          ],
          "answerIndex": 0,
          "explanation": "वे + ने का प्रामाणिक मानक रूप «उन्होंने» है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "कर्ता कारक 'ने' के सही रूप वाला मानक वाक्य चुनिए:",
          "options": [
            "मैंने अपना काम समाप्त किया और उन्होंने मेरी प्रशंसा की। (I finished my work and they praised me.)",
            "मैं ने काम समाप्त किया और वे ने प्रशंसा किया।",
            "मुझने काम किया और उनने देखा।",
            "मैंने काम सो गया।"
          ],
          "answerIndex": 0,
          "explanation": "«मैंने» और «उन्होंने» दोनों मानक 'ने'-युक्त सर्वनाम रूप हैं।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u6-l3": {
    "id": "hi-u6-l3",
    "subject": "hindi",
    "unit": 6,
    "lessonNumber": 3,
    "title": "कर्म-अन्वय नियम (Object-Verb Agreement in Past Tense)",
    "level": "A2",
    "objective": "सकर्मक भूतकाल में क्रिया का कर्ता से स्वतंत्र होकर कर्म (Object) के लिंग और वचन के अनुसार बदलने के कर्म-अन्वय (Karma-Anwaya) नियम में महारत प्राप्त करना।",
    "presentation": {
      "explanation": "जब कर्ता के साथ 'ने' लग जाता है, तो क्रिया का कर्ता से संबंध टूट जाता है और क्रिया **कर्म के लिंग और वचन** के अनुसार बदलती है:\n\n1. कर्म-अन्वय के चार निश्चित नियम:\n   - **पुल्लिंग एकवचन कर्म**: क्रिया अंत में *'-आ'* लेगी (चाहे कर्ता स्त्री हो या पुरुष):\n     - राम ने **सेब खाया**। (सेब = पु.एक.)\n     - सीता ने **सेब खाया**। (क्रिया 'खाया' सेब के अनुसार है!)\n   - **पुल्लिंग बहुवचन कर्म**: क्रिया अंत में *'-ए'* लेगी:\n     - राम ने दो **सेब खाए**।\n     - सीता ने दो **सेब खाए**।\n   - **स्त्रीलिंग एकवचन कर्म**: क्रिया अंत में *'-ई'* लेगी:\n     - राम ने **रोटी खाई**। (रोटी = स्त्री.एक.)\n     - लड़कों ने **किताब पढ़ी**।\n   - **स्त्रीलिंग बहुवचन कर्म**: क्रिया अंत में *'-ईं'* [अनुनासिक] लेगी:\n     - राम ने दो **रोटियाँ खाईं**।\n     - लड़कों ने कई **किताबें पढ़ीं**।\n\n2. महत्वपूर्ण निष्कर्ष:\n   - 'ने' वाले वाक्य में क्रिया कभी कर्ता को नहीं देखती, केवल कर्म के लिंग-वचन का अनुसरण करती है।",
      "examples": [
        {
          "target": "अमित ने एक नया मकान खरीदा और रीता ने दो नई गाड़ियाँ खरीदीं।",
          "reading": "amit ne ek naya makaan khareeda aur reeta ne do nayi gaadiyaan khareedeen. [əmɪt̪ neː eːk nəjaː məkaːn kʰəriːd̪aː ɔːr riːt̪aː neː d̪oː nəiː ɡaːɽɪjaː̃ kʰəriːd̪ĩː] (UH-meet nay ayk nuh-YAH muh-KAHN khuh-REE-dah owr REE-tah nay doh nuh-EE GAH-dee-yahn khuh-REE-deen)",
          "translation": "Amit bought a new house and Reeta bought two new cars."
        },
        {
          "target": "सभी छात्रों ने मिलकर गणित के कठिन प्रश्न हल किए।",
          "reading": "sabhi chhaatron ne milkar ganit ke kathin prashn hal kiye. [səbʱiː tʃʰaːt̪rõː neː mɪlkər ɡəɳɪt̪ keː kəʈʰɪn prəʃnə həl kɪjeː] (SUH-bhee CHHAH-trohn nay MEEL-kuhr GUH-neet kay KUH-theen pruhsh-nuh huhl kee-YAY)",
          "translation": "All the students together solved the difficult questions of mathematics."
        },
        {
          "target": "मेरी माताजी ने सुबह स्वादिष्ट रोटियाँ और सब्ज़ियाँ बनाईं।",
          "reading": "meri maataaji ne subah svaadisht rotiyaan aur sabziyaan banayeen. [meːriː maːt̪aːdʒiː neː sʊbəh sʋaːd̪ɪʂʈ roːʈɪjaː̃ ɔːr səbzɪjaː̃ bənaːĩː] (MAY-ree mah-tah-JEE nay SOO-buh SVAH-deesht roh-TEE-yahn owr suhb-ZEE-yahn buh-nah-EEN)",
          "translation": "My mother made delicious rotis and vegetables in the morning."
        }
      ],
      "mnemonics": [
        "कर्ता पर 'ने' लगा = क्रिया ने कर्म को देखा! सेब (पु.) = खाया/खाए; किताब (स्त्री.) = पढ़ी/पढ़ीं!"
      ],
      "culturalNotes": [
        "हिंदी की इस कर्म-अन्वय व्यवस्था को समझना विदेशी शिक्षार्थियों के लिए सबसे क्रांतिकारी कदम माना जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "वाक्य «राहुल ने दो किताबें ___» में कर्म 'किताबें' (स्त्रीलिंग बहुवचन) के अनुसार कौन-सी क्रिया आएगी?",
          "options": [
            "पढ़ीं (Padheen - Read [fem. plural agreement])",
            "पढ़ा",
            "पढ़े",
            "पढ़ी"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग बहुवचन कर्म 'किताबें' के अनुसार क्रिया अनुनासिक रूप «पढ़ीं» होगी।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «सीता ने एक बड़ा मकान ___» में कर्म 'मकान' (पुल्लिंग एकवचन) के अनुसार सही क्रिया चुनिए:",
          "options": [
            "देखा (Dekha - Saw [masc. singular agreement])",
            "देखी",
            "देखे",
            "देखीं"
          ],
          "answerIndex": 0,
          "explanation": "कर्म 'मकान' पुल्लिंग एकवचन है, अतः कर्ता स्त्रीलिंग होने पर भी क्रिया «देखा» होगी।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "कर्म-अन्वय के नियमों के अनुसार सर्वथा शुद्ध वाक्य का चयन कीजिए:",
          "options": [
            "लड़कों ने चाय पी और लड़कियों ने फल खाए। (Boys drank tea and girls ate fruits.)",
            "लड़कों ने चाय पिया और लड़कियों ने फल खाई।",
            "लड़कों ने चाय पिए।",
            "लड़कियों ने फल खाया।"
          ],
          "answerIndex": 0,
          "explanation": "«चाय पी» (चाय स्त्रीलिंग है) और «फल खाए» (फल बहुवचन पुल्लिंग है) में कर्म-अन्वय पूर्णतः सटीक है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u6-l4": {
    "id": "hi-u6-l4",
    "subject": "hindi",
    "unit": 6,
    "lessonNumber": 4,
    "title": "तटस्थ अन्वय / भावे प्रयोग: जब कर्म के साथ 'को' लगा हो",
    "level": "A2",
    "objective": "जब कर्ता के साथ 'ने' और कर्म के साथ 'को' दोनों परसर्ग उपस्थित हों, तो क्रिया के तटस्थ रूप (तटस्थ अन्वय / भावे प्रयोग — पुल्लिंग एकवचन -आ) के नियम को समझना।",
    "presentation": {
      "explanation": "हिंदी व्याकरण का एक अत्यंत महत्वपूर्ण और अचूक नियम 'तटस्थ अन्वय' (Neutral Agreement / भावे प्रयोग) कहलाता है:\n\n1. नियम की स्थिति:\n   - जब कर्ता के साथ **'ने'** लगा हो और निश्चित सजीव कर्म के साथ **'को'** लगा हो;\n   - ऐसी स्थिति में क्रिया न तो कर्ता के अनुसार बदल सकती है (क्योंकि कर्ता पर 'ने' है) और न ही कर्म के अनुसार बदल सकती है (क्योंकि कर्म पर 'को' है)।\n\n2. तटस्थ रूप (Default Masculine Singular):\n   - जब कर्ता और कर्म दोनों परसर्गों से बंधे हों, तो क्रिया हमेशा **पुल्लिंग एकवचन (-आ)** के स्थायी तटस्थ रूप में रहती है:\n     - राम ने सीता को **देखा**। (न कि 'देखी', क्योंकि सीता के साथ 'को' है)\n     - सीता ने राम को **देखा**।\n     - अध्यापक ने लड़कियों को **बुलाया**। (न कि 'बुलाईं')\n     - पुलिस ने चोरों को **पकड़ा**।\n     - मैंने अपनी बहनों को **समझाया**।",
      "examples": [
        {
          "target": "डॉक्टर साहब ने सभी बीमार बच्चों को बहुत ध्यान से देखा।",
          "reading": "doctor sahab ne sabhi beemaar bachhon ko bahut dhyan se dekha. [ɖɔːkʈər saːɦəb neː səbʱiː biːmaːr bətʃːʰõː koː bəɦʊt̪ d̪ʱjaːn seː d̪eːkʰaː] (DAHK-tuhr SAH-huhb nay SUH-bhee bee-MAHR BUHTCH-chohn koh buh-hoot DHYAHN say DAY-khah)",
          "translation": "The doctor examined all the sick children very attentively."
        },
        {
          "target": "अध्यापिका जी ने उस मेधावी नई छात्रा को मंच पर बुलाया।",
          "reading": "adhyaapika jee ne us medhaavi nayi chhaatra ko manch par bulaya. [əd̪ʱjaːpɪkaː dʒiː neː ʊs meːd̪ʱaːʋiː nəiː tʃʰaːt̪raː koː mənntʃ pər bʊlaːjaː] (uh-DHYAH-pee-kah jee nay oos may-DHAH-vee nuh-EE CHHAH-trah koh MUHNCH puhr boo-LAH-yah)",
          "translation": "The respected female teacher called that brilliant new female student onto the stage."
        },
        {
          "target": "माता-पिता ने अपने दोनों बेटों और बेटियों को अच्छी शिक्षा दी।",
          "reading": "maata-pita ne apne dono beton aur betiyon ko achhi shiksha di. [maːt̪aː pɪt̪aː neː əpneː d̪oːnõː beːʈõː ɔːr beːʈɪjõː koː ətʃːʰiː ʃɪkʃaː d̪iː] (mah-tah-PEE-tah nay uhp-NAY doh-NOHN BAY-tohn owr bay-TEE-yohn koh UHTCH-chee SHEEK-shah dee)",
          "translation": "The parents gave good education to both their sons and daughters."
        }
      ],
      "mnemonics": [
        "कर्ता पर 'ने' + कर्म पर 'को' = क्रिया हमेशा 'आ' (पुल्लिंग एकवचन)! राम ने सीता को देखा; सीता ने राम को देखा!"
      ],
      "culturalNotes": [
        "बोलचाल में कई लोग 'सीता को देखी' जैसी अशुद्धियाँ करते हैं, किंतु मानक साहित्यिक हिंदी में 'सीता को देखा' ही एकमात्र शुद्ध रूप है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "वाक्य «अध्यापक ने छात्राओं को ___» में शुद्ध क्रिया रूप क्या होगा?",
          "options": [
            "बुलाया (Bulaya - Neutral masculine singular default)",
            "बुलाईं",
            "बुलाई",
            "बुलाए"
          ],
          "answerIndex": 0,
          "explanation": "कर्म 'छात्राओं' के साथ 'को' लगा है, अतः तटस्थ अन्वय के नियमानुसार क्रिया पुल्लिंग एकवचन «बुलाया» होगी।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «पुलिस ने उस महिला को ___» में सही क्रिया रूप भरिए:",
          "options": [
            "बचाया (Bachaya - Saved [neutral default])",
            "बचाई",
            "बचाए",
            "बचाईं"
          ],
          "answerIndex": 0,
          "explanation": "'महिला को' में 'को' परसर्ग के कारण क्रिया तटस्थ रूप «बचाया» में रहेगी।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "तटस्थ अन्वय (भावे प्रयोग) का पूर्णतः शुद्ध वाक्य पहचानिए:",
          "options": [
            "माताजी ने अपनी बेटियों को प्यार से समझाया। (Mother affectionately explained to her daughters.)",
            "माताजी ने अपनी बेटियों को समझाईं।",
            "माताजी ने बेटियों को समझाई।",
            "माताजी बेटियों समझाई।"
          ],
          "answerIndex": 0,
          "explanation": "«बेटियों को समझाया» में 'को' के कारण क्रिया का तटस्थ रूप 'समझाया' व्याकरणसम्मत है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u6-l5": {
    "id": "hi-u6-l5",
    "subject": "hindi",
    "unit": 6,
    "lessonNumber": 5,
    "title": "'ने' के अपवाद और अनियमित भूतकालिक कृदंत (किया, दिया, लिया, लाया)",
    "level": "A2",
    "objective": "अनियमित भूतकालिक कृदंतों (करना → किया, देना → दिया, लेना → लिया, पीना → पिया) तथा सकर्मक होने के बावजूद 'ने' न लेने वाली अपवाद धातुओं (लाना, भूलना, बोलना) को सीखना।",
    "presentation": {
      "explanation": "हिंदी भूतकाल में कुछ प्रमुख अनियमित कृदंत और 'ने' के महत्वपूर्ण अपवाद हैं:\n\n1. प्रमुख अनियमित भूतकालिक कृदंत (Irregular Past Participles):\n   - *करना* (To do) → किया, किए, की, कीं\n   - *देना* (To give) → दिया, दिए, दी, दीं\n   - *लेना* (To take) → लिया, लिए, ली, लीं\n   - *पीना* (To drink) → पिया, पिए, पी, पीं\n   - *होना* (To be/happen) → हुआ, हुए, हुई, हुईं\n   - *जाना* (To go) → गया, गए, गई, गईं।\n\n2. 'ने' के प्रमुख अपवाद (Verbs that do NOT take 'ने'):\n   - *«लाना»* (To bring): यद्यपि यह सकर्मक है, किंतु इसके साथ कभी 'ने' नहीं लगता:\n     - *शुद्ध*: मैं किताब लाया। (न कि 'मैंने लाया')\n     - *शुद्ध*: वह फल लाई।\n   - *«भूलना»* (To forget): सामान्यतः 'ने' नहीं लेता:\n     - वह रास्ता भूल गया।\n   - *«बोलना»* (To speak): सामान्यतः 'ने' नहीं लेता:\n     - वह सच बोला।",
      "examples": [
        {
          "target": "रोहन बाज़ार से ताज़ा दूध, फल और नई पुस्तकें लाया।",
          "reading": "rohan bazaar se taaza doodh, phal aur nayi pustakein laaya. [roːɦən bəzaːr seː t̪aːzaː d̪uːd̪ʱ pʰəl ɔːr nəiː pʊst̪əkẽː laːjaː] (ROH-huhn buh-ZAHR say TAH-zah doodh, phuhl owr nuh-EE POOS-tuh-kayn LAH-yah)",
          "translation": "Rohan brought fresh milk, fruits and new books from the market."
        },
        {
          "target": "अमित हड़बड़ी में अपना ज़रूरी पहचान-पत्र घर पर ही भूल गया।",
          "reading": "amit hadbadi mein apna zaroori pahchaan-patr ghar par hi bhool gaya. [əmɪt̪ ɦəɽbəɽiː mẽː əpnaː zəruːriː pɛɦtʃaːn pət̪r ɡʱər pər ɦiː bʱuːl ɡəjaː] (UH-meet huhd-buh-DEE mayn uhp-NAH zuh-ROO-ree puh-h-chahn PUHT-ruh ghuhr puhr hee BHOOL guh-YAH)",
          "translation": "Amit forgot his important identity card at home in a hurry."
        },
        {
          "target": "हमने आज सुबह ही अपना सारा गृहकार्य समय पर पूरा कर लिया।",
          "reading": "humne aaj subah hi apna saara grihkaary samay par poora kar liya. [həmneː aːdʒ sʊbəh ɦiː əpnaː saːraː ɡrɪɦkaːrjə səməj pər puːraː kər lɪjaː] (HUM-nay ahj SOO-buh hee uhp-NAH SAH-rah greeh-KAHR-yuh suh-MUHY puhr POO-rah kuhr LEE-yah)",
          "translation": "We completed all our homework on time this morning itself."
        }
      ],
      "mnemonics": [
        "'लाना' सकर्मक है पर 'ने' नहीं लेता: मैं लाया (not मैंने लाया)! करना → किया, देना → दिया, लेना → लिया!"
      ],
      "culturalNotes": [
        "हिंदी में 'लाना' (ले + आना) का मूल स्वभाव 'आना' जैसा होने के कारण यह व्याकरणिक रूप से 'ने' रहित रहता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "सकर्मक क्रिया 'लाना' (To bring) के भूतकाल का शुद्ध प्रयोग कौन-सा है?",
          "options": [
            "रोहन फल लाया (Rohan brought fruits [No 'ने'])",
            "रोहन ने फल लाया",
            "रोहन ने फल लाई",
            "रोहन ने लाया फल"
          ],
          "answerIndex": 0,
          "explanation": "'लाना' क्रिया अपवाद स्वरूप 'ने' नहीं लेती, अतः «रोहन फल लाया» शुद्ध है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "क्रिया 'देना' का स्त्रीलिंग एकवचन भूतकालिक रूप क्या है?",
          "options": [
            "दी (Dee - Gave [fem. singular])",
            "दिया",
            "दिए",
            "दीं"
          ],
          "answerIndex": 0,
          "explanation": "'देना' का स्त्रीलिंग एकवचन भूतकालिक रूप «दी» होता है (जैसे: पुस्तक दी)।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "अनियमित कृदंत और 'ने' के अपवादों की दृष्टि से पूर्णतः शुद्ध वाक्य चुनिए:",
          "options": [
            "सीता बाज़ार से मिठाई लाई और हमने चाय पी। (Sita brought sweets from the market and we drank tea.)",
            "सीता ने मिठाई लाई और हमने चाय पिया।",
            "सीता ने मिठाई लाया।",
            "हम चाय पी।"
          ],
          "answerIndex": 0,
          "explanation": "«सीता मिठाई लाई» ('लाना' में 'ने' नहीं) और «हमने चाय पी» ('पीना' में कर्म-अन्वय) पूर्णतः शुद्ध हैं।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u7-l1": {
    "id": "hi-u7-l1",
    "subject": "hindi",
    "unit": 7,
    "lessonNumber": 1,
    "title": "पूर्ण भूतकाल की संरचना: सामान्य भूतकालिक कृदंत + था/थे/थी/थीं",
    "level": "A2",
    "objective": "पूर्ण भूतकाल (Past Perfect Tense) के निर्माण सूत्र, अकर्मक व सकर्मक संरचनाओं में सहायक क्रिया (था/थे/थी/थीं) के समन्वय तथा सुदूर भूतकाल की घटनाओं के शुद्ध संप्रेषण को सीखना।",
    "presentation": {
      "explanation": "पूर्ण भूतकाल (Past Perfect Tense) का प्रयोग उन घटनाओं के लिए होता है जो भूतकाल में बहुत पहले या किसी अन्य भूतकालिक घटना से पूर्व पूर्णतः समाप्त हो चुकी थीं:\n\n1. निर्माण का मूल सूत्र:\n   - **अकर्मक क्रिया**: [कर्ता] + [धातु + आ/ए/ई/ईं] + [था/थे/थी/थीं]\n     - वह गया था (पु.एक.) / वे गए थे (पु.बहु.) / वह गई थी (स्त्री.एक.) / वे गई थीं (स्त्री.बहु.)।\n   - **सकर्मक क्रिया**: [कर्ता + ने] + [कर्म] + [धातु + आ/ए/ई/ईं] + [था/थे/थी/थीं]\n     - मैंने एक पत्र **लिखा था** (पत्र = पु.एक. → लिखा था);\n     - उसने दो पुस्तकें **पढ़ी थीं** (पुस्तकें = स्त्री.बहु. → पढ़ी थीं);\n     - हमने चाय **पी थी** (चाय = स्त्री.एक. → पी थी)।\n\n2. सहायक क्रिया के लिंग-वचन रूप:\n   - पुल्लिंग एकवचन: *था*\n   - पुल्लिंग बहुवचन / आदर: *थे*\n   - स्त्रीलिंग एकवचन: *थी*\n   - स्त्रीलिंग बहुवचन: *थीं* (अनुनासिक युक्त)।",
      "examples": [
        {
          "target": "हम पिछले वर्ष गर्मियों की छुट्टियों में परिवार सहित कश्मीर गए थे।",
          "reading": "hum pichhle varsh garmiyon ki chhuttiyon mein parivaar sahit Kashmir gaye the. [həm pɪtʃʰleː ʋərʂ ɡərmɪjõː kiː tʃʰʊʈːɪjõː mẽː pərɪʋaːr səɦɪt̪ kəʃmiːr ɡəeː t̪ʰeː] (hum PEECHH-lay vuhrsh guhr-MEE-yohn kee CHHOOT-tee-yohn mayn puh-ree-VAHR suh-HEET kuhsh-MEER GUH-yay thay)",
          "translation": "We had gone to Kashmir along with family during the summer vacations last year."
        },
        {
          "target": "रोहन ने कल शाम को ही अपना पूरा गृहकार्य समाप्त कर लिया था।",
          "reading": "rohan ne kal shaam ko hi apna poora grihkaary samaapt kar liya tha. [roːɦən neː kəl ʃaːm koː ɦiː əpnaː puːraː ɡrɪɦkaːrjə səmaːpt̪ kər lɪjaː t̪ʰaː] (ROH-huhn nay kuhl shahm koh hee uhp-NAH POO-rah greeh-KAHR-yuh suh-MAHPT kuhr LEE-yah thah)",
          "translation": "Rohan had completed all his homework yesterday evening itself."
        },
        {
          "target": "मेरी दादी जी ने बचपन में मुझे कई पौराणिक और ऐतिहासिक कहानियाँ सुनाई थीं।",
          "reading": "meri daadi jee ne bachpan mein mujhe kai pauraanik aur aitihasik kahaaniyaan sunayeen theen. [meːriː d̪aːd̪iː dʒiː neː bətʃpən mẽː mʊdʒʱeː kəiː pɔːraːɳɪk ɔːr ɛːt̪ɪhaːsɪk kəɦaːnɪjaː̃ sʊnaːĩː t̪ʰĩː] (MAY-ree dah-DEE jee nay BUHTCH-puhn mayn MOO-jhay kye pow-RAH-neek owr ay-tee-HAH-seek kuh-hah-NEE-yahn soo-nah-EEN theen)",
          "translation": "My grandmother had narrated many mythological and historical stories to me in childhood."
        }
      ],
      "mnemonics": [
        "पूर्ण भूतकाल = भूत कृदंत + था/थे/थी/थीं! सकर्मक में कर्म को देखो: 'पुस्तक पढ़ी थी', 'सेब खाए थे'!"
      ],
      "culturalNotes": [
        "भारतीय परिवारों में दादी-नानी द्वारा सुनाई गई कहानियों ('कहानियाँ सुनाई थीं') का बचपन की स्मृतियों में गहरा सांस्कृतिक महत्व है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग बहुवचन कर्म 'चिट्ठियाँ' के साथ सकर्मक पूर्ण भूतकाल का कौन-सा रूप शुद्ध होगा?",
          "options": [
            "लिखी थीं (Likhi theen - Had written [fem. plural agreement])",
            "लिखा था",
            "लिखे थे",
            "लिखी थी"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग बहुवचन कर्म 'चिट्ठियाँ' के साथ 'लिखी थीं' (कृदंत व सहायक क्रिया दोनों अनुनासिक) आएगा।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "अकर्मक कर्ता 'वे' (पुल्लिंग बहुवचन) के साथ 'आना' का पूर्ण भूतकाल क्या होगा?",
          "options": [
            "आए थे (Aaye the - Had come [masc. plural])",
            "आया था",
            "आई थी",
            "आए हैं"
          ],
          "answerIndex": 0,
          "explanation": "पुल्लिंग बहुवचन अकर्मक पूर्ण भूतकाल में «आए थे» बनता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "पूर्ण भूतकाल के नियमों के अनुसार पूर्णतः शुद्ध वाक्य चुनिए:",
          "options": [
            "अमित ने नया मकान खरीदा था और हम सब वहाँ गए थे। (Amit had bought a new house and we all had gone there.)",
            "अमित ने नया मकान खरीदी थी और हम गया था।",
            "अमित नया मकान खरीदा था।",
            "हम सब वहाँ गई थीं।"
          ],
          "answerIndex": 0,
          "explanation": "«मकान खरीदा था» (सकर्मक पु.एक.) और «हम सब गए थे» (अकर्मक पु.बहु.) दोनों पूर्णतः शुद्ध हैं।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u7-l2": {
    "id": "hi-u7-l2",
    "subject": "hindi",
    "unit": 7,
    "lessonNumber": 2,
    "title": "आसन्न भूतकाल (Present Perfect: आया है, देखा है, खरीदी हैं)",
    "level": "A2",
    "objective": "आसन्न भूतकाल (Present Perfect / Immediate Past) की रचना, हाल ही में समाप्त क्रियाओं के वर्तमान संदर्भ तथा सहायक क्रिया (हूँ/है/हैं/हो) के संयोजन को समझना।",
    "presentation": {
      "explanation": "आसन्न भूतकाल (Immediate Past / Present Perfect) उन क्रियाओं को व्यक्त करता है जो अभी-अभी या हाल ही में घटित हुई हैं और जिनका प्रभाव वर्तमान में विद्यमान है:\n\n1. निर्माण का सूत्र:\n   - **अकर्मक**: [कर्ता] + [धातु + आ/ए/ई/ईं] + [हूँ/हो/है/हैं]\n     - वह अभी आया है (पु.एक.) / वे पहुँचे हैं (पु.बहु.) / वह आई है (स्त्री.एक.)।\n   - **सकर्मक**: [कर्ता + ने] + [कर्म] + [धातु + आ/ए/ई/ईं] + [हूँ/हो/है/हैं]\n     - मैंने भोजन **कर लिया है** (भोजन = पु.एक. → कर लिया है);\n     - उसने दो पुस्तकें **खरीदी हैं** (पुस्तकें = स्त्री.बहु. → खरीदी हैं);\n     - हमने चाय **पी है** (चाय = स्त्री.एक. → पी है)।\n\n2. 'पूर्ण भूत' (था) बनाम 'आसन्न भूत' (है) का अंतर:\n   - *आसन्न भूत*: डाकिया पत्र लाया है। (पत्र अभी आया है और सामने मौजूद है)\n   - *पूर्ण भूत*: डाकिया पत्र लाया था। (पत्र बहुत पहले लाया था, अब वह बात बीत चुकी है)।",
      "examples": [
        {
          "target": "डाकिया अभी-अभी हमारे घर एक ज़रूरी सरकारी पत्र लेकर आया है।",
          "reading": "daakiya abhi-abhi hamaare ghar ek zaroori sarkaari patr lekar aaya hai. [ɖaːkɪjaː əbʱiː əbʱiː həmaːreː ɡʱər eːk zəruːriː sərkaːriː pət̪r leːkər aːjaː hɛː] (dah-KEE-yah UH-bhee-UH-bhee huh-MAH-ray ghuhr ayk zuh-ROO-ree suhr-KAH-ree PUHT-ruh LAY-kuhr AH-yah hy)",
          "translation": "The postman has just now arrived at our house carrying an important government letter."
        },
        {
          "target": "हमने आज सुबह ही बाज़ार से ताज़े फल और हरी सब्ज़ियाँ खरीदी हैं।",
          "reading": "humne aaj subah hi bazaar se taaze phal aur hari sabziyaan khareedi hain. [həmneː aːdʒ sʊbəh ɦiː bəzaːr seː t̪aːzeː pʰəl ɔːr həriː səbzɪjaː̃ kʰəriːd̪iː hɛ̃ː] (HUM-nay ahj SOO-buh hee buh-ZAHR say TAH-zay phuhl owr HUH-ree suhb-ZEE-yahn khuh-REE-dee hyn)",
          "translation": "We have bought fresh fruits and green vegetables from the market this morning itself."
        },
        {
          "target": "क्या आपने आज का ताज़ा राष्ट्रीय समाचार पत्र पढ़ लिया है?",
          "reading": "kya aapne aaj ka taaza raashtreey samachaar patr padh liya hai? [kjaː aːpneː aːdʒ kaː t̪aːzaː raːʂʈriːjə səmaːtʃaːr pət̪r pəɽʱ lɪjaː hɛː] (kyah ahp-NAY ahj kah TAH-zah rahsh-TREE-yuh suh-mah-CHAHR PUHT-ruh PUHDH lee-yah hy)",
          "translation": "Have you read today's fresh national newspaper?"
        }
      ],
      "mnemonics": [
        "काम अभी हुआ है = भूत कृदंत + है/हैं/हूँ! 'आया है' (Just arrived), 'खरीदी हैं' (Have bought)!"
      ],
      "culturalNotes": [
        "भोजन के उपरांत शिष्टाचार स्वरूप पूछा जाता है: 'क्या आपने खाना खा लिया है?' (Have you eaten food?)."
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "सकर्मक वाक्य «मैंने अपना काम पूरा कर ___» में आसन्न भूतकाल (Present Perfect) की पूर्ति कीजिए:",
          "options": [
            "लिया है (Liya hai - Have completed [immediate past])",
            "लिया था",
            "लिया होगा",
            "लेता हूँ"
          ],
          "answerIndex": 0,
          "explanation": "आसन्न भूतकाल में भूतकालिक कृदंत के साथ 'है' का प्रयोग होकर «कर लिया है» बनता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग बहुवचन कर्म 'मिठाइयाँ' के साथ आसन्न भूतकाल की सही क्रिया क्या होगी?",
          "options": [
            "बनाई हैं (Banayee hain - Have made [fem. plural])",
            "बनाया है",
            "बनाए हैं",
            "बनाई थी"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग बहुवचन कर्म के साथ 'बनाई हैं' (अनुनासिक 'हैं') प्रयुक्त होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "आसन्न भूतकाल (Present Perfect) का सर्वथा शुद्ध वाक्य चुनिए:",
          "options": [
            "गाड़ी स्टेशन पर पहुँच गई है और सभी यात्री उतर रहे हैं। (The train has arrived at the station and all passengers are getting down.)",
            "गाड़ी स्टेशन पर पहुँच गई थी और उतर रहे हैं।",
            "गाड़ी पहुँची है और उतरता है।",
            "यात्री ने उतरा है।"
          ],
          "answerIndex": 0,
          "explanation": "«पहुँच गई है» हाल ही में पूरी हुई क्रिया है जिसका वर्तमान स्थिति से सीधा संबंध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u7-l3": {
    "id": "hi-u7-l3",
    "subject": "hindi",
    "unit": 7,
    "lessonNumber": 3,
    "title": "अपूर्ण भूतकाल (Past Continuous: रहा था, रहे थे, रही थी, रही थीं)",
    "level": "A2",
    "objective": "अपूर्ण भूतकाल (Past Continuous / Imperfect) की संरचना, 'ने' परसर्ग के पूर्ण अभाव तथा भूतकाल में जारी क्रियाओं के धाराप्रवाह वर्णन में दक्षता प्राप्त करना।",
    "presentation": {
      "explanation": "अपूर्ण भूतकाल (Past Continuous Tense) का प्रयोग भूतकाल के किसी निश्चित क्षण में चल रही निरंतर क्रियाओं को व्यक्त करने के लिए होता है:\n\n1. निर्माण का सूत्र:\n   - **कर्ता + कर्म + [धातु + रहा/रहे/रही] + [था/थे/थी/थीं]**\n\n2. 'ने' परसर्ग का पूर्ण निषेध (NO 'ने' Rule):\n   - चाहे क्रिया अकर्मक हो या सकर्मक, अपूर्ण भूतकाल (रहा था) में **कभी भी 'ने' नहीं लगता**।\n   - क्रिया हमेशा सीधे **कर्ता के लिंग और वचन** के अनुसार बदलती है:\n     - *पुल्लिंग एकवचन*: मैं पढ़ रहा था / वह जा रहा था।\n     - *पुल्लिंग बहुवचन*: हम खेल रहे थे / वे जा रहे थे।\n     - *स्त्रीलिंग एकवचन*: रीता गा रही थी / वह लिख रही थी।\n     - *स्त्रीलिंग बहुवचन*: लड़कियाँ पढ़ रही थीं (रही + अनुनासिक 'थीं')।",
      "examples": [
        {
          "target": "जब मैं घर से निकला, तब बाहर बहुत तेज़ बारिश हो रही थी।",
          "reading": "jab main ghar se nikla, tab baahar bahut tez baarish ho rahi thi. [dʒəb mɛ̃ː ɡʱər seː nɪklaː t̪əb baːɦər bəɦʊt̪ t̪eːz baːrɪʃ hoː rəɦiː t̪ʰiː] (juhb myn ghuhr say NEEK-lah, tuhb BAH-huhr buh-hoot tayz BAH-reesh hoh ruh-HEE thee)",
          "translation": "When I left home, it was raining very heavily outside at that time."
        },
        {
          "target": "कल शाम को सभी बच्चे बगीचे में गेंद के साथ मजे से खेल रहे थे।",
          "reading": "kal shaam ko sabhi bachhe bageeche mein gend ke saath maje se khel rahe the. [kəl ʃaːm koː səbʱiː bətʃːʰeː bəɡiːtʃeː mẽː ɡɛ̃ːd̪ keː saːt̪ʰ mədʒeː seː kʰeːl rəɦeː t̪ʰeː] (kuhl shahm koh SUH-bhee BUHTCH-chay buh-GEE-chay mayn gaynd kay sahth muh-JAY say KHAYL ruh-HAY thay)",
          "translation": "All the children were joyfully playing with a ball in the garden yesterday evening."
        },
        {
          "target": "वह रात भर जागकर अपनी अंतिम वार्षिक परीक्षा की तैयारी कर रही थी।",
          "reading": "vah raat bhar jaagkar apni antim vaarshik pareeksha ki taiyaari kar rahi thi. [ʋəh raːt̪ bʱər dʒaːɡkər əpniː ənt̪ɪm ʋaːrʂɪk pəriːkʃaː kiː t̪ɛːjaːriː kər rəɦiː t̪ʰiː] (wuh baht bhuhr JAHG-kuhr uhp-NEE UHN-teem VAHR-sheek puh-REEK-shah kee ty-YAH-ree KUHR ruh-HEE thee)",
          "translation": "She was preparing for her final annual examination by staying awake all night."
        }
      ],
      "mnemonics": [
        "भूतकाल में काम जारी था = रहा था / रहे थे / रही थी / रही थीं! इसमें कभी 'ने' नहीं लगता!"
      ],
      "culturalNotes": [
        "कहानियाँ और संस्मरण सुनाते समय पृष्ठभूमि की घटनाओं का वर्णन करने के लिए अपूर्ण भूतकाल सर्वाधिक प्रयुक्त होता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग बहुवचन कर्ता 'महिलाएं' के साथ 'बातचीत करना' का अपूर्ण भूतकाल रूप क्या होगा?",
          "options": [
            "बातचीत कर रही थीं (Were conversing [fem. plural continuous past])",
            "बातचीत कर रही थी",
            "बातचीत कर रहे थे",
            "बातचीत करी थीं"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग बहुवचन कर्ता के साथ 'रही थीं' (अनुनासिक 'थीं') आता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «हम कल शाम को टीवी ___» में सही क्रिया रूप भरिए:",
          "options": [
            "देख रहे थे (Dekh rahe the - We were watching TV)",
            "देख रहा था",
            "देखे थे",
            "देख रही थी"
          ],
          "answerIndex": 0,
          "explanation": "सर्वनाम 'हम' (पुल्लिंग बहुवचन) के साथ अपूर्ण भूतकाल में «देख रहे थे» प्रयुक्त होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "अपूर्ण भूतकाल की दृष्टि से व्याकरणसम्मत शुद्ध वाक्य चुनिए:",
          "options": [
            "जब बिजली गई, तब पिताजी समाचार पढ़ रहे थे और माताजी खाना बना रही थीं। (When power went off, father was reading news and mother was cooking food.)",
            "पिताजी समाचार पढ़ रहा था और माताजी बना रहे थे।",
            "पिताजी ने समाचार पढ़ रहे थे।",
            "माताजी ने खाना बना रही थीं।"
          ],
          "answerIndex": 0,
          "explanation": "«पिताजी पढ़ रहे थे» (पु.आदर) और «माताजी बना रही थीं» (स्त्री.आदर) दोनों में बिना 'ने' के सही अन्वय है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u7-l4": {
    "id": "hi-u7-l4",
    "subject": "hindi",
    "unit": 7,
    "lessonNumber": 4,
    "title": "भूतकालिक अभ्यस्त काल / भूतकालिक आदतन (Past Habitual: करता था, जाता था)",
    "level": "A2",
    "objective": "भूतकालिक आदतों, नित्य क्रियाकलापों तथा अतीत के स्वभाव को व्यक्त करने वाले अभ्यस्त भूतकाल (Past Habitual — ता/ती/ते था/थे/थी) के प्रयोग में महारत हासिल करना।",
    "presentation": {
      "explanation": "भूतकाल की पुरानी आदतों (Used to do / Would do) को व्यक्त करने के लिए 'भूतकालिक आदतन / अभ्यस्त काल' (Past Habitual) का प्रयोग किया जाता है:\n\n1. निर्माण का सूत्र:\n   - **कर्ता + [धातु + ता/ती/ते] + [था/थे/थी/थीं]**\n   - पुल्लिंग एकवचन: *जाता था, खेलता था, पढ़ता था*\n   - पुल्लिंग बहुवचन / आदर: *जाते थे, खेलते थे, पढ़ते थे*\n   - स्त्रीलिंग एकवचन: *जाती थी, खेलती थी, पढ़ती थी*\n   - स्त्रीलिंग बहुवचन: *जाती थीं, खेलती थीं, पढ़ती थीं* (अनुनासिक 'थीं')।\n\n2. 'ने' परसर्ग का निषेध:\n   - अभ्यस्त भूतकाल (Habitual) में भी **'ने' कभी नहीं लगता** (जैसे: 'वह रोज पुस्तक पढ़ता था', न कि 'उसने पढ़ता था')।\n\n3. आदतन भूत (ता था) बनाम अपूर्ण भूत (रहा था):\n   - *अभ्यस्त*: वह रोज़ व्यायाम करता था। (He used to exercise daily - आदत)\n   - *अपूर्ण*: वह व्यायाम कर रहा था। (He was exercising at that moment - निरंतर क्रिया)।",
      "examples": [
        {
          "target": "मेरे दादाजी प्रतिदिन सुबह जल्दी उठकर नदी के किनारे टहलने जाया करते थे।",
          "reading": "mere daadaji pratidin subah jaldi uthkar nadi ke kinaare tahalne jaaya karte the. [meːreː d̪aːd̪aːdʒiː prət̪ɪd̪ɪn sʊbəh dʒəld̪iː ʊʈʰkər nəd̪iː keː kɪnaːreː ʈɛɦəlneː dʒaːjaː kərteː t̪ʰeː] (MAY-ray dah-dah-JEE pruh-tee-DEEN SOO-buh JUHL-dee OOTTH-kuhr NUH-dee kay kee-NAH-ray tuh-HUHL-nay JAH-yah KUHR-tay thay)",
          "translation": "My respected grandfather used to wake up early every morning and go for a walk along the river bank."
        },
        {
          "target": "हम अपने पुराने गाँव में विशाल बरगद के पेड़ की छांव में बैठकर कहानियाँ सुनते थे।",
          "reading": "hum apne puraane gaanv mein vishaal bargad ke ped ki chhaanv mein baithkar kahaaniyaan sunte the. [həm əpneː pʊraːneː ɡaː̃ʋ mẽː ʋɪʃaːl bərɡəd̪ keː peːɽ kiː tʃʰaː̃ʋ mẽː bɛːʈʰkər kəɦaːnɪjaː̃ sʊn̪teː t̪ʰeː] (hum uhp-NAY poo-RAH-nay GAHN-v mayn vee-SHAHL buhr-GUHD kay payd kee CHHAHN-v mayn BYTH-kuhr kuh-hah-NEE-yahn SOON-tay thay)",
          "translation": "We used to sit in the shade of the huge banyan tree in our old village and listen to stories."
        },
        {
          "target": "जब वह छोटी थी, तब वह भारतीय शास्त्रीय संगीत का नियमित रियाज़ करती थी।",
          "reading": "jab vah chhoti thi, tab vah bhaartiy shaastreey sangeet ka niyamit riyaaz karti thi. [dʒəb ʋəh tʃʰoːʈiː t̪ʰiː t̪əb ʋəh bʱaːrt̪iːjə ʃaːst̪riːjə səŋɡiːt̪ kaː nɪjəmɪt̪ rɪjaːz kərt̪iː t̪ʰiː] (juhb wuh CHHOH-tee thee, tuhb wuh bhahr-TEE-yuh shahsh-TREE-yuh suhn-GEET kah NEE-yuh-meet ree-YAHZ KUHR-tee thee)",
          "translation": "When she was young, she used to do regular practice of Indian classical music."
        }
      ],
      "mnemonics": [
        "पुरानी आदत = ता था / ती थी / ते थे! 'खेलते थे' (Used to play), 'जाती थी' (Used to go)!"
      ],
      "culturalNotes": [
        "शास्त्रीय संगीत और नृत्य के दैनिक अभ्यास को हिंदी/उर्दू में विशेष रूप से 'रियाज़' (Riyaaz) कहा जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "अतीत की नियमित आदत बताने वाले वाक्य «हम बचपन में रोज़ फुटबॉल ___» में कौन-सा क्रिया रूप आएगा?",
          "options": [
            "खेलते थे (Khelte the - Used to play [past habitual])",
            "खेला था",
            "खेल रहे थे",
            "खेलेंगे"
          ],
          "answerIndex": 0,
          "explanation": "अतीत की नियमित आदत (Used to play) के लिए «खेलते थे» का प्रयोग होता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग एकवचन कर्ता के साथ 'गाना गाना' का भूतकालिक अभ्यस्त रूप क्या होगा?",
          "options": [
            "गाती थी (Gaati thi - Used to sing [fem. singular])",
            "गाता था",
            "गाते थे",
            "गाया था"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग एकवचन में अभ्यस्त क्रिया रूप «गाती थी» बनता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "भूतकालिक आदत (Past Habitual) को व्यक्त करने वाला शुद्ध वाक्य चुनिए:",
          "options": [
            "वह रोज़ सुबह पुस्तकालय जाती थी और कई घंटे पढ़ती थी। (She used to go to the library every morning and study for many hours.)",
            "उसने रोज़ पुस्तकालय जाती थी और पढ़ती थी।",
            "वह पुस्तकालय गई थी रोज़।",
            "पुस्तकालय जा रही थी रोज़ पढ़ती थी।"
          ],
          "answerIndex": 0,
          "explanation": "«जाती थी» और «पढ़ती थी» दोनों भूतकाल की नियमित दिनचर्या का शुद्ध प्रतिनिधित्व करते हैं।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u7-l5": {
    "id": "hi-u7-l5",
    "subject": "hindi",
    "unit": 7,
    "lessonNumber": 5,
    "title": "भूतकाल के सभी रूपों का समेकन व तुलनात्मक विश्लेषण",
    "level": "A2",
    "objective": "हिंदी के सभी भूतकालिक रूपों (सामान्य भूत, आसन्न भूत, पूर्ण भूत, अपूर्ण भूत और अभ्यस्त भूत) के अर्थगत अंतर, 'ने' के प्रयोग-अभाव तथा वाक्य संरचना का समग्र विश्लेषण करना।",
    "presentation": {
      "explanation": "हिंदी में भूतकाल के पाँच प्रमुख रूप होते हैं, जिनका तुलनात्मक सार निम्नलिखित है:\n\n1. भूतकाल महा-तालिका (Master Comparative Chart):\n   - **1. सामान्य भूत (Simple Past)**: उसने पत्र *लिखा* (He wrote a letter — निश्चित बिंदु पर समाप्त क्रिया)।\n   - **2. आसन्न भूत (Present Perfect)**: उसने पत्र *लिखा है* (He has written a letter — हाल ही में समाप्त, वर्तमान से जुड़ा)।\n   - **3. पूर्ण भूत (Past Perfect)**: उसने पत्र *लिखा था* (He had written a letter — सुदूर भूतकाल में समाप्त)।\n   - **4. अपूर्ण भूत (Past Continuous)**: वह पत्र *लिख रहा था* (He was writing a letter — उस समय जारी थी)।\n   - **5. अभ्यस्त भूत (Past Habitual)**: वह पत्र *लिखता था* (He used to write letters — पुरानी आदत)।\n\n2. 'ने' परसर्ग का निर्णायक नियम:\n   - 'ने' केवल **सकर्मक धातुओं के पूर्णतासूचक रूपों** (सामान्य, आसन्न, पूर्ण भूत) में लगता है।\n   - अपूर्ण भूत (रहा था) और अभ्यस्त भूत (ता था) में **कभी 'ने' नहीं लगता**।",
      "examples": [
        {
          "target": "मैंने कल रात यह ज्ञानवर्धक पुस्तक पूरी तरह पढ़ ली थी और आज सुबह पुस्तकालय में लौटा दी है।",
          "reading": "maine kal raat yah gyanvardhak pustak poori tarah padh li thi aur aaj subah pustakaalay mein lauta di hai. [mɛ̃ːneː kəl raːt̪ jəh ɡjaːnʋərd̪ʱək pʊst̪ək puːriː t̪ərəh pəɽʱ liː t̪ʰiː ɔːr aːdʒ sʊbəh pʊst̪əkaːləj mẽː lɔːʈaː d̪iː hɛː] (MY-nay kuhl baht yuh gyahn-vuhr-DHUHK poos-tuhk POO-ree tuh-RUH PUHDH lee thee owr ahj SOO-buh poos-tuh-KAH-luy mayn low-TAH dee hy)",
          "translation": "I had completely read this informative book last night and have returned it to the library this morning."
        },
        {
          "target": "जब रोहन घर पहुँचा, तब हम सब मिलकर मेज़ पर रात का स्वादिष्ट भोजन कर रहे थे।",
          "reading": "jab rohan ghar pahuncha, tab hum sab milkar mez par raat ka svaadisht bhojan kar rahe the. [dʒəb roːɦən ɡʱər pəɦʊntʃaː t̪əb həm səb mɪlkər meːz pər raːt̪ kaː sʋaːd̪ɪʂʈ bʱoːdʒən kər rəɦeː t̪ʰeː] (juhb ROH-huhn ghuhr puh-HOON-chah, tuhb hum suhb MEEL-kuhr mayz puhr baht kah SVAH-deesht BHOJ-uhn KUHR ruh-HAY thay)",
          "translation": "When Rohan reached home, all of us together were having delicious dinner at the table."
        },
        {
          "target": "वे पहले इस पुराने शांत मोहल्ले में रहते थे, परंतु अब वे नए आधुनिक शहर में बस गए हैं।",
          "reading": "ve pahle is puraane shaant mohalle mein rahte the, parantu ab ve naye aadhunik shahar mein bas gaye hain. [ʋeː pɛɦleː ɪs pʊraːneː ʃaːn̪t̪ moːɦəlːeː mẽː rəɦt̪eː t̪ʰeː pərən̪t̪ʊ əb ʋeː nəjeː aːd̪ʱʊnɪk ʃəɦər mẽː bəs ɡəeː hɛ̃ː] (way PUH-h-lay ees poo-RAH-nay shahnt moh-HUHL-lay mayn RUH-h-tay thay, puh-RUHN-too uhb way nuh-YAY ah-DHOO-neek SHUH-huhr mayn buhs GUH-yay hyn)",
          "translation": "They used to live in this quiet old neighborhood earlier, but now they have settled in the new modern city."
        }
      ],
      "mnemonics": [
        "लिखा (Simple) → लिखा है (Recent) → लिखा था (Pluperfect) → लिख रहा था (Continuous) → लिखता था (Habitual)!"
      ],
      "culturalNotes": [
        "हिंदी गद्य और उपन्यास साहित्य में इन पाँचों भूतकालिक रूपों के विविध सम्मिश्रण से समय का सूक्ष्म चित्रण किया जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "सकर्मक क्रिया में 'ने' परसर्ग का प्रयोग इनमें से किस काल में कभी नहीं होता?",
          "options": [
            "अपूर्ण भूतकाल (Past Continuous - रहा था) और अभ्यस्त भूतकाल (ता था)",
            "सामान्य भूतकाल (Simple Past)",
            "पूर्ण भूतकाल (Past Perfect)",
            "आसन्न भूतकाल (Present Perfect)"
          ],
          "answerIndex": 0,
          "explanation": "अपूर्ण भूतकाल (रहा था) और अभ्यस्त भूतकाल (ता था) में कर्ता के साथ 'ने' कभी नहीं लगता।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «वह गाना गा रहा था» किस भूतकालिक रूप का उदाहरण है?",
          "options": [
            "अपूर्ण भूतकाल (Past Continuous)",
            "सामान्य भूतकाल",
            "पूर्ण भूतकाल",
            "आसन्न भूतकाल"
          ],
          "answerIndex": 0,
          "explanation": "'रहा था' भूतकाल में क्रिया के जारी रहने (अपूर्ण भूतकाल) को दर्शाता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "भूतकाल के विभिन्न रूपों के समन्वय वाला पूर्णतः शुद्ध और सुसंगत वाक्य चुनिए:",
          "options": [
            "कल जब मैं बाज़ार गया था, तब उसने मुझे देखा और हमने साथ में चाय पी। (Yesterday when I had gone to the market, he saw me and we drank tea together.)",
            "कल जब मैंने गया था तब उसने मुझे देखा था और हम चाय पी।",
            "जब मैं गया था उसने चाय पिया।",
            "हम चाय पीते थे अभी।"
          ],
          "answerIndex": 0,
          "explanation": "«मैं गया था» (अकर्मक पूर्ण भूत), «उसने मुझे देखा» (तटस्थ अन्वय), और «हमने चाय पी» (कर्म-अन्वय) तीनों का व्याकरणिक संयोजन उत्कृष्ट है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u8-l1": {
    "id": "hi-u8-l1",
    "subject": "hindi",
    "unit": 8,
    "lessonNumber": 1,
    "title": "सामान्य भविष्यत् काल के प्रत्यय (-ऊँगा/-ऊँगी, -एगा/-एगी, -एंगे/-एंगी, -ओगे/-ओगी)",
    "level": "A2",
    "objective": "सामान्य भविष्यत् काल (Simple Future Tense) के पुरुष, लिंग और वचन के अनुसार प्रत्यय नियमों तथा क्रिया अन्वय में प्रवीणता प्राप्त करना।",
    "presentation": {
      "explanation": "सामान्य भविष्यत् काल (Simple Future Tense) भविष्य में होने वाली निश्चित या सामान्य क्रियाओं को दर्शाता है:\n\n1. निर्माण का सूत्र (Formula):\n   - **धातु + भविष्यत् प्रत्यय** (भविष्यत् काल में 'ने' कभी नहीं लगता! क्रिया हमेशा कर्ता के लिंग-वचन का अनुसरण करती है):\n\n2. सर्वनामों के अनुसार पूर्ण प्रत्यय तालिका:\n   - **मैं** (1st Sing): धातु + *-ऊँगा* (पु.) / *-ऊँगी* (स्त्री.) → मैं पढ़ूँगा / मैं पढ़ूँगी (I will read)\n   - **तू** (2nd Intimate): धातु + *-एगा* (पु.) / *-एगी* (स्त्री.) → तू जाएगा / तू जाएगी (You will go)\n   - **तुम** (2nd Fam): धातु + *-ओगे* (पु.) / *-ओगी* (स्त्री.) → तुम खेलोगे / तुम खेलोगी (You will play)\n   - **वह / यह** (3rd Sing): धातु + *-एगा* (पु.) / *-एगी* (स्त्री.) → वह लिखेगा / वह लिखेगी (He/She will write)\n   - **हम** (1st Plur): धातु + *-एंगे* (पु.) / *-एंगी* (स्त्री.) → हम देखेंगे / हम देखेंगी (We will see)\n   - **आप** (2nd Polite): धातु + *-एंगे* (पु.) / *-एंगी* (स्त्री.) → आप बोलेंगे / आप बोलेंगी (You will speak)\n   - **वे / ये** (3rd Plur): धातु + *-एंगे* (पु.) / *-एंगी* (स्त्री.) → वे आएँगे / वे आएँगी (They will come)।",
      "examples": [
        {
          "target": "मैं कल शाम को अपने सभी पुराने मित्रों के साथ नई फ़िल्म देखने जाऊँगा।",
          "reading": "main kal shaam ko apne sabhi puraane mitron ke saath nayi film dekhne jaoonga. [mɛ̃ː kəl ʃaːm koː əpneː səbʱiː pʊraːneː mɪt̪rõː keː saːt̪ʰ nəiː fɪlm d̪eːkʰneː dʒaːuː̃ɡaː] (myn kuhl shahm koh uhp-NAY SUH-bhee poo-RAH-nay MEET-rohn kay sahth nuh-EE feelm DAYKH-nay jah-OON-gah)",
          "translation": "I will go to watch a new movie with all my old friends tomorrow evening."
        },
        {
          "target": "क्या आप कल सुबह की विशेष और महत्वपूर्ण बैठक में भाग लेंगे?",
          "reading": "kya aap kal subah ki vishesh aur mahatvapoorna baithak mein bhaag lenge? [kjaː aːp kəl sʊbəh kiː ʋɪʃeːʂ ɔːr məɦət̪ʋəpuːrɳə bɛːʈʰək mẽː bʱaːɡ leːŋɡeː] (kyah ahp kuhl SOO-buh kee vee-SHAYSH owr muh-huht-vuh-POOR-nuh BY-thuhk mayn bhahg LENG-gay)",
          "translation": "Will you participate in tomorrow morning's special and important meeting?"
        },
        {
          "target": "हम अगले सप्ताह अपनी अंतिम परीक्षा समाप्त होने के बाद शिमला जाएँगे।",
          "reading": "hum agle saptaah apni antim pareeksha samaapt hone ke baad Shimla jaayenge. [həm əɡleː səptaːɦ əpniː ənt̪ɪm pəriːkʃaː səmaːpt̪ hoːneː keː baːd̪ ʃɪmlaː dʒaːẽːɡeː] (hum uhg-LAY suhp-TAH uhp-NEE UHN-teem puh-REEK-shah suh-MAHPT hoh-NAY kay bahd SHEEM-lah jah-ENG-gay)",
          "translation": "We will go to Shimla next week after our final exams are over."
        }
      ],
      "mnemonics": [
        "मैं = -ऊँगा/-ऊँगी; तुम = -ओगे/-ओगी; वह = -एगा/-एगी; हम/आप/वे = -एंगे/-एंगी! भविष्य में NO 'ने'!"
      ],
      "culturalNotes": [
        "आदरणीय व्यक्तियों से बात करते समय हमेशा बहुवचन भविष्यत् रूप '-एंगे' (जैसे: 'आप कब आएँगे?') का प्रयोग करना अनिवार्य शिष्टाचार है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "सर्वनाम 'मैं' (स्त्रीलिंग) के साथ 'लिखना' क्रिया का सामान्य भविष्यत् काल क्या होगा?",
          "options": [
            "लिखूँगी (Likhoongi - I will write [fem. singular])",
            "लिखूँगा",
            "लिखेगी",
            "लिखोगी"
          ],
          "answerIndex": 0,
          "explanation": "प्रथम पुरुष स्त्रीलिंग एकवचन 'मैं' के साथ 'धातु + -ऊँगी' (लिखूँगी) प्रयुक्त होता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "सर्वनाम 'तुम' (पुल्लिंग) के साथ 'गाना गाना' का सही भविष्यत् रूप क्या है?",
          "options": [
            "गाओगे (Gaaoge - You will sing [fam. masc.])",
            "गाएगा",
            "गाएँगे",
            "गाऊँगा"
          ],
          "answerIndex": 0,
          "explanation": "'तुम' पुल्लिंग के साथ 'धातु + -ओगे' (गाओगे) आता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "सामान्य भविष्यत् काल के लिंग-वचन समन्वय वाला पूर्णतः शुद्ध वाक्य चुनिए:",
          "options": [
            "कल सभी छात्राएं पुरस्कार वितरण समारोह में भाग लेंगी और गीत गाएँगी। (All girl students will participate in the prize distribution ceremony and sing songs tomorrow.)",
            "कल सभी छात्राएं भाग लेंगे और गाएगा।",
            "छात्राओं ने भाग लेंगी।",
            "छात्राएं भाग लेगा।"
          ],
          "answerIndex": 0,
          "explanation": "«भाग लेंगी» और «गाएँगी» दोनों स्त्रीलिंग बहुवचन भविष्यत् रूप हैं और कर्ता के साथ पूर्णतः संगत हैं।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u8-l2": {
    "id": "hi-u8-l2",
    "subject": "hindi",
    "unit": 8,
    "lessonNumber": 2,
    "title": "अनियमित भविष्यत् धातुएं: होना, लेना, देना और करना",
    "level": "A2",
    "objective": "अनियमित भविष्यत् धातु रूपों (होना → होगा/होगी/होंगे, लेना → लूँगा/लेंगे, देना → दूँगा/देंगे, करना → करूँगा/करेंगे) की संरचना और शुद्ध उच्चारण को समझना।",
    "presentation": {
      "explanation": "कुछ अत्यंत महत्वपूर्ण और दैनिक व्यवहार की धातुओं के भविष्यत् रूप थोड़े संकुचित और अनियमित होते हैं:\n\n1. 'होना' (To be / happen):\n   - मैं: *होऊँगा / होऊँगी*\n   - वह: *होगा / होगी* (It/He/She will be)\n   - हम/आप/वे: *होंगे / होंगी* (They will be)\n   - तुम: *होगे / होगी*।\n\n2. 'लेना' (To take):\n   - मैं: *लूँगा / लूँगी*\n   - वह: *लेगा / लेगी*\n   - हम/आप/वे: *लेंगे / लेंगी*\n   - तुम: *लोगो / लोगी*।\n\n3. 'देना' (To give):\n   - मैं: *दूँगा / दूँगी*\n   - वह: *देगा / देगी*\n   - हम/आप/वे: *देंगे / देंगी*\n   - तुम: *दोगे / दोगी*।\n\n4. 'करना' (To do):\n   - मैं: *करूँगा / करूँगी*\n   - वह: *करेगा / करेगी*\n   - हम/आप/वे: *करेंगे / करेंगी*\n   - तुम: *करोगे / करोगी*।",
      "examples": [
        {
          "target": "मैं आपको इस पुरानी पुस्तक के बदले में अपना नया रोचक उपन्यास दूँगा।",
          "reading": "main aapko is puraani pustak ke badle mein apna naya rochak upanyaas doonga. [mɛ̃ː aːpkoː ɪs pʊraːniː pʊst̪ək keː bəd̪leː mẽː əpnaː nəjaː roːtʃək ʊpənjaːs d̪uː̃ɡaː] (myn ahp-KOH ees poo-RAH-nee POOS-tuhk kay BUHD-lay mayn uhp-NAH nuh-YAH ROH-chuhk oop-uhn-YAHS DOON-gah)",
          "translation": "I will give you my new interesting novel in exchange for this old book."
        },
        {
          "target": "कल दोपहर तक पहाड़ी क्षेत्र में मौसम बहुत सुहावना और ठंडा होगा।",
          "reading": "kal dopahar tak pahaadi kshetra mein mausam bahut suhaavana aur thanda hoga. [kəl d̪oːpɛɦər t̪ək pəɦaːɽiː kʃeːt̪rə mẽː mɔːsəm bəɦʊt̪ sʊɦaːʋnaː ɔːr t̪ʰəɳɖaː hoːɡaː] (kuhl doh-PUH-huhr tuhk puh-HAH-dee KSHAY-truh mayn MOW-suhm buh-hoot soo-HAH-vuh-nah owr THUHN-dah HOH-gah)",
          "translation": "By tomorrow afternoon the weather in the hilly region will be very pleasant and cold."
        },
        {
          "target": "हम सब मिलकर कल शाम को इस गंभीर विषय पर एक महत्वपूर्ण निर्णय लेंगे।",
          "reading": "hum sab milkar kal shaam ko is gambheer vishay par ek mahatvapoorna nirnay lenge. [həm səb mɪlkər kəl ʃaːm koː ɪs ɡəmbiːr ʋɪʂəj pər eːk məɦət̪ʋəpuːrɳə nɪrɳəj leːŋɡeː] (hum suhb MEEL-kuhr kuhl shahm koh ees guhm-BHEER vee-SHUY puhr ayk muh-huht-vuh-POOR-nuh NEER-nuy LENG-gay)",
          "translation": "All of us together will take an important decision on this serious subject tomorrow evening."
        }
      ],
      "mnemonics": [
        "लेना → लूँगा/लेंगे; देना → दूँगा/देंगे; करना → करूँगा/करेंगे; होना → होगा/होंगे!"
      ],
      "culturalNotes": [
        "लेन-देन के व्यवहार में 'मैं आपको कल रुपये दे दूँगा' (I will give you money tomorrow) में संयुक्त क्रिया 'दे देना' का बहुत प्रयोग होता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "सर्वनाम 'हम' के साथ 'करना' क्रिया का शुद्ध भविष्यत् रूप क्या है?",
          "options": [
            "करेंगे (Karenge - We will do [masc. plural])",
            "करूँगा",
            "करेगा",
            "करोगे"
          ],
          "answerIndex": 0,
          "explanation": "'हम' (पुल्लिंग बहुवचन) के साथ 'करना' का रूप «करेंगे» बनता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «मैं कल आपको उत्तर ___» में 'देना' (पुल्लिंग एकवचन) का सही रूप भरिए:",
          "options": [
            "दूँगा (Doonga - I will give [masc. singular])",
            "देंगे",
            "देगा",
            "दोगे"
          ],
          "answerIndex": 0,
          "explanation": "'मैं' के साथ 'देना' का पुल्लिंग एकवचन रूप «दूँगा» होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "अनियमित भविष्यत् धातुओं का शुद्ध वाक्य पहचानिए:",
          "options": [
            "हम आपकी पूरी सहायता करेंगे और आपको सही मार्गदर्शन देंगे। (We will do all your help and will give you right guidance.)",
            "हम सहायता करूँगा और दूँगा।",
            "हम ने सहायता करेंगे।",
            "सहायता करोगे हम।"
          ],
          "answerIndex": 0,
          "explanation": "«सहायता करेंगे» और «मार्गदर्शन देंगे» दोनों 'हम' के साथ पूर्णतः शुद्ध अनियमित भविष्यत् रूप हैं।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u8-l3": {
    "id": "hi-u8-l3",
    "subject": "hindi",
    "unit": 8,
    "lessonNumber": 3,
    "title": "संभाव्य भविष्यत् काल / उपशामक क्रिया (Subjunctive Mood: शायद वह आए, क्या हम चलें?)",
    "level": "A2",
    "objective": "संभावना, संदेह, इच्छा, विनम्र प्रस्ताव और अनुमति व्यक्त करने वाले संभाव्य भविष्यत् / उपशामक रूप (Subjunctive Mood) की संरचना व प्रयोग को समझना।",
    "presentation": {
      "explanation": "संभाव्य वर्तमान/भविष्यत् (Subjunctive Mood) का प्रयोग उन क्रियाओं के लिए होता है जो निश्चित नहीं हैं, बल्कि संभावना (Possibility), इच्छा (Wish), संदेह (Doubt) अथवा विनम्र अनुमति (Permission) हैं:\n\n1. निर्माण का सरल नियम:\n   - सामान्य भविष्यत् काल के रूपों में से अंतिम **'-गा / -गे / -गी' हटा देने पर** संभाव्य (Subjunctive) रूप प्राप्त होता है:\n     - मैं: धातु + *-ऊँ* → मैं जाऊँ? (May I go?)\n     - तू: धातु + *-ए* → तू पढ़े\n     - तुम: धातु + *-ओ* → तुम सुनो\n     - वह/यह: धातु + *-ए* → वह आए (He may come)\n     - हम/आप/वे/ये: धातु + *-एं* → हम चलें? (Shall we leave?) / आप देखें (May you see) / वे आएँ (They may come)।\n\n2. प्रमुख संभाव्य सूचक शब्द (Triggers):\n   - *शायद* (Perhaps): शायद आज रात बारिश **हो**।\n   - *हो सकता है कि* (It is possible that): हो सकता है कि वह समय पर **पहुँचे**।\n   - *काश* (I wish): काश मैं उड़ **सकूँ**!\n   - *अनुमति / प्रस्ताव*: क्या अब हम **चलें**? (Shall we go now?)।",
      "examples": [
        {
          "target": "शायद आज शाम को बहुत तेज़ वर्षा हो और मौसम सुहावना हो जाए।",
          "reading": "shaayad aaj shaam ko bahut tez varsha ho aur mausam suhaavana ho jaaye. [ʃaːjəd̪ aːdʒ ʃaːm koː bəɦʊt̪ t̪eːz ʋərʂaː hoː ɔːr mɔːsəm sʊɦaːʋnaː hoː dʒaːeː] (SHAH-yuhd ahj shahm koh buh-hoot tayz VUHR-shah hoh owr MOW-suhm soo-HAH-vuh-nah hoh JAH-ay)",
          "translation": "Perhaps it may rain very heavily this evening and the weather may become pleasant."
        },
        {
          "target": "यदि आपकी अनुमति हो, तो क्या अब हम सब भोजन करने के लिए बैठें?",
          "reading": "yadi aapki anumati ho, to kya ab hum sab bhojan karne ke liye baithein? [jəd̪ɪ aːpkiː ənʊmət̪ɪ hoː t̪oː kjaː əb həm səb bʱoːdʒən kərneː keː lɪjeː bɛːʈʰẽː] (YUH-dee ahp-KEE uh-NOO-muh-tee hoh, toh kyah uhb hum suhb BHOJ-uhn KUHR-nay kay lee-ay BY-thayn)",
          "translation": "If you permit, shall all of us sit down to have food now?"
        },
        {
          "target": "हो सकता है कि हमारे मुख्य अतिथि कल सुबह की पहली उड़ान से दिल्ली पहुँचें।",
          "reading": "ho sakta hai ki hamaare mukhya atithi kal subah ki pehli udaan se Dilli pahunchein. [hoː səktaː hɛː kɪ həmaːreː mʊkʰjə ət̪ɪt̪ʰɪ kəl sʊbəh kiː pɛɦliː ʊɽaːn seː d̪ɪlːiː pəɦʊntʃẽː] (hoh SUHK-tah hy kee huh-MAH-ray MOOKH-yuh uh-TEE-thee kuhl SOO-buh kee PUH-h-lee oo-DAHN say DEEL-lee puh-HOON-chayn)",
          "translation": "It is possible that our chief guest may reach Delhi by the first flight tomorrow morning."
        }
      ],
      "mnemonics": [
        "Future से 'गा/गे/गी' हटाओ = Subjunctive पाओ! मैं जाऊँ? (Shall I go?), हम चलें? (Shall we leave?), शायद आए (May come)!"
      ],
      "culturalNotes": [
        "बैठक या बातचीत समाप्त करते समय 'अच्छा, अब हम चलें?' (Alright, shall we take leave now?) कहना अत्यंत शिष्ट विदाई वाक्य है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "किसी से विनम्रतापूर्वक विदा माँगते समय 'Shall we leave now?' के लिए कौन-सा वाक्य प्रयुक्त होता है?",
          "options": [
            "क्या अब हम चलें? (Kya ab hum chalein? - Shall we leave now? [subjunctive proposal])",
            "हम चलेंगे क्या?",
            "हम चले थे क्या?",
            "हम जा रहे हैं क्या?"
          ],
          "answerIndex": 0,
          "explanation": "विनम्र प्रस्ताव या अनुमति के लिए उपशामक रूप «क्या अब हम चलें?» का प्रयोग होता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «शायद वह आज न ___» में संभाव्य क्रिया रूप भरिए:",
          "options": [
            "आए (Aaye - May come [subjunctive 3rd sing])",
            "आएगा",
            "आया",
            "आता है"
          ],
          "answerIndex": 0,
          "explanation": "'शायद' के साथ संभावना दर्शाने के लिए उपशामक रूप «आए» प्रयुक्त होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "संभाव्य रूप (Subjunctive Mood) का शुद्ध वाक्य चुनिए:",
          "options": [
            "हो सकता है कि कल बर्फ़बारी हो और रास्ते बंद हो जाएँ। (It is possible that snowfall may occur tomorrow and roads may get blocked.)",
            "हो सकता है कि कल बर्फ़बारी होगा और बंद होंगे।",
            "हो सकता है बर्फ़बारी हुई थी।",
            "शायद बर्फ़बारी होती है।"
          ],
          "answerIndex": 0,
          "explanation": "«हो» और «हो जाएँ» दोनों 'हो सकता है कि' के साथ शुद्ध उपशामक रूप हैं।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u8-l4": {
    "id": "hi-u8-l4",
    "subject": "hindi",
    "unit": 8,
    "lessonNumber": 4,
    "title": "आज्ञार्थक और विनम्र अनुरोध के स्तर: तू (जा), तुम (जाओ), आप (आइए) और अति-विनम्र (आइएगा)",
    "level": "A2",
    "objective": "हिंदी में सामाजिक संबंधों, आदर और औपचारिकता के चार आज्ञार्थक स्तरों (तू, तुम, आप, आइएगा) तथा निषेधात्मक 'मत' और 'न' के सटीक प्रयोग में महारत हासिल करना।",
    "presentation": {
      "explanation": "हिंदी में आज्ञा, निर्देश और अनुरोध के चार सामाजिक स्तर होते हैं:\n\n1. आज्ञार्थक के चार स्तर (Four Imperative Tiers):\n   - **1. 'तू' (घनिष्ठ/निम्न)**: धातु का मूल रूप → तू पढ़! तू जा! तू खा! (अत्यंत निकट मित्र या छोटे बच्चों के लिए)\n   - **2. 'तुम' (अनौपचारिक/समान)**: धातु + *-ओ* → तुम पढ़ो! तुम जाओ! तुम खाओ! (अनियमित: करो, लो, दो, पियो)\n   - **3. 'आप' (मानक शिष्ट/आदर)**: धातु + *-इए* → आप पढ़िए, आप जाइए, आप बैठिए (अनियमित: कीजिए, लीजिए, दीजिए, पीजिए)\n   - **4. 'अति-विनम्र / भावी अनुरोध' (Super-Polite / Future Request)**: धातु + *-इएगा* → आप कल ज़रूर **आइएगा**, कृपया चाय **पीजिएगा**, इसे ध्यान से **रखिएगा**।\n\n2. निषेधात्मक शब्द ('मत' बनाम 'न'):\n   - आदेश में 'नहीं' का प्रयोग अमानक माना जाता है;\n   - दृढ निषेध: **'मत'** (जैसे: शोर मत करो! झूठ मत बोलो!)\n   - विनम्र निषेध: **'न'** (जैसे: कृपया वहाँ न जाएँ, चिंता न कीजिए)।",
      "examples": [
        {
          "target": "कृपया यहाँ आरामकुर्सी पर बैठिए और गरमा-गरम अदरक वाली चाय पीजिए।",
          "reading": "kripaya yahaan aaraamkursi par baithiye aur garma-garam adrak vaali chaay peejiye. [krɪpəjaː jəɦaː̃ aːraːmkʊrsiː pər bɛːʈʰɪjeː ɔːr ɡərmaː ɡərəm əd̪rək ʋaːliː tʃaːj piːdʒɪjeː] (krip-YAH yuh-HAHN ah-rahm-KOOR-see puhr BY-thee-yay owr guhr-mah-GUH-ruhm UHD-ruhk vah-lee CHAH-ee PEE-jee-yay)",
          "translation": "Please sit on the armchair here and have piping hot ginger tea."
        },
        {
          "target": "कल शाम के हमारे पारिवारिक सांस्कृतिक समारोह में आप सपरिवार अवश्य आइएगा।",
          "reading": "kal shaam ke hamaare paarivaarik saamskritik samaaroh mein aap saparivaar avashya aayiyega. [kəl ʃaːm keː həmaːreː paːrɪʋaːrɪk saː̃skrɪt̪ɪk səmaːroːɦ mẽː aːp səpərɪʋaːr əʋəʃjə aːjɪjeːɡaː] (kuhl shahm kay huh-MAH-ray pah-ree-VAH-reek sahn-SKREE-teek suh-mah-ROH mayn ahp suh-puh-ree-VAHR uh-VUHSH-yuh ah-YEE-yay-gah)",
          "translation": "Please do come along with your entire family to our family cultural gathering tomorrow evening."
        },
        {
          "target": "कक्षा में बिल्कुल शोर मत करो और ध्यानपूर्वक अपनी पाठ्यपुस्तक पढ़ो।",
          "reading": "kaksha mein bilkul shor mat karo aur dhyaanpoorvak apni paathyapustak padho. [kəkʃaː mẽː bɪlkʊl ʃoːr mət̪ kəroː ɔːr d̪ʱjaːnpuːrʋək əpniː paːʈʰjəpʊst̪ək pəɽʱoː] (KUHK-shah mayn BEEL-kool shohr muht KUH-roh owr DHYAHN-poor-vuhk uhp-NEE pahtth-yuh-POOS-tuhk PUHDH-oh)",
          "translation": "Do not make noise at all in the classroom and read your textbook attentively."
        }
      ],
      "mnemonics": [
        "तुम = -ओ (जाओ); आप = -इए (जाइए); अति-विनम्र/भविष्य = -इएगा (आइएगा)! आदेश में 'मत' लगाओ, 'नहीं' नहीं!"
      ],
      "culturalNotes": [
        "निमंत्रण पत्रिकाओं और औपचारिक निमंत्रणों में 'सपरिवार पधारिएगा' (Kindly grace the occasion with family) लिखना भारतीय आतिथ्य की सर्वोच्च विनम्रता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "अति-विनम्रतापूर्वक भविष्य के लिए निमंत्रण देने हेतु कौन-सा क्रिया रूप सबसे उपयुक्त है?",
          "options": [
            "आइएगा (Aayiyega - Super-polite future request)",
            "आओ",
            "आ",
            "आएगा"
          ],
          "answerIndex": 0,
          "explanation": "भविष्य के आदरयुक्त एवं स्नेहपूर्ण निमंत्रण हेतु «आइएगा» (धातु + -इएगा) सर्वश्रेष्ठ रूप है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «यहाँ शोर ___ करो» में मानक निषेधात्मक शब्द भरिए:",
          "options": [
            "मत (Mat - Prohibitive marker for imperatives)",
            "नहीं",
            "नाहीं",
            "बिना"
          ],
          "answerIndex": 0,
          "explanation": "आज्ञार्थक वाक्यों में निषेध के लिए मानक शब्द «मत» प्रयुक्त होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "आदरसूचक और शिष्ट अनुरोध का सर्वथा शुद्ध वाक्य चुनिए:",
          "options": [
            "कृपया यह महत्वपूर्ण प्रपत्र भर दीजिए और हस्ताक्षर कर दीजिएगा। (Please fill this important form and kindly sign it.)",
            "यह प्रपत्र भरो और हस्ताक्षर करो तुम।",
            "कृपया नहीं शोर कीजिए।",
            "प्रपत्र भरिए नहीं।"
          ],
          "answerIndex": 0,
          "explanation": "«भर दीजिए» और «कर दीजिएगा» शिष्ट और अति-विनम्र अनुरोध के सटीक रूप हैं।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u8-l5": {
    "id": "hi-u8-l5",
    "subject": "hindi",
    "unit": 8,
    "lessonNumber": 5,
    "title": "भविष्यत् काल में शर्त-वाक्य (Conditional Future: अगर... तो... / जब... तब...)",
    "level": "A2",
    "objective": "शर्त-सूचक अव्ययों (अगर/यदि... तो..., जब... तब...) के साथ भविष्यत् काल की मिश्रित वाक्य संरचनाओं और कार्य-कारण संबंधों के निर्माण में प्रवीणता प्राप्त करना।",
    "presentation": {
      "explanation": "भविष्य की शर्तों और उनके परिणामों को व्यक्त करने के लिए 'शर्त-वाक्य' (Conditional Sentences) का प्रयोग होता है:\n\n1. मुख्य संरचनात्मक सूत्र (Formulas):\n   - **संरचना 1**: अगर / यदि + [भविष्यत् काल], तो + [भविष्यत् काल]\n     - अगर तुम मेहनत **करोगे**, तो अवश्य सफल **होगे**। (If you work hard, you will succeed.)\n   - **संरचना 2**: अगर / यदि + [संभाव्य रूप], तो + [भविष्यत् काल]\n     - यदि मौसम साफ़ **हो**, तो हम सैर पर **जाएँगे**। (If weather is clear, we will go for a walk.)\n   - **संरचना 3**: जब + [भविष्यत् काल], तब + [भविष्यत् काल]\n     - जब तुम दिल्ली **आओगे**, तब हम लाल किला देखने **चलेंगे**। (When you come to Delhi, then we will go to see the Red Fort.)\n\n2. नित्य-संबंधी युग्म (Correlative Pairs):\n   - अगर / यदि ... तो (If ... then)\n   - जब ... तब (When ... then)\n   - जहाँ ... वहाँ (Where ... there)\n   - जैसा ... वैसा (As ... so)।",
      "examples": [
        {
          "target": "यदि आप प्रतिदिन नियमपूर्वक अभ्यास करेंगे, तो बहुत जल्दी धाराप्रवाह हिंदी बोलेंगे।",
          "reading": "yadi aap pratidin niyampoorvak abhyaas karenge, to bahut jaldi dhaarapravaah hindi bolenge. [jəd̪ɪ aːp prət̪ɪd̪ɪn nɪjəmpuːrʋək əbʱjaːs kərẽːɡeː t̪oː bəɦʊt̪ dʒəldiː d̪ʱaːraːprəʋaːɦ hɪn̪d̪iː boːlẽːɡeː] (YUH-dee ahp pruh-tee-DEEN NEE-yuhm-poor-vuhk uhb-HYAHS KUH-reng-gay, toh buh-hoot JUHL-dee dhah-rah-pruh-VAH HEEN-dee BOH-leng-gay)",
          "translation": "If you practice regularly every day, you will speak fluent Hindi very soon."
        },
        {
          "target": "अगर कल सुबह मौसम बिल्कुल साफ़ रहेगा, तो हम सब सवेरे ही नौका-विहार के लिए चलेंगे।",
          "reading": "agar kal subah mausam bilkul saaf rahega, to hum sab savere hi nauka-vihaar ke liye chalenge. [əɡər kəl sʊbəh mɔːsəm bɪlkʊl saːf rəɦeːɡaː t̪oː həm səb səʋeːreː ɦiː nɔːkaː ʋɪɦaːr keː lɪjeː tʃəlẽːɡeː] (UH-guhr kuhl SOO-buh MOW-suhm BEEL-kool sahf ruh-HAY-gah, toh hum suhb suh-VAY-ray hee NOW-kah vee-HAHR kay lee-ay CHUH-leng-gay)",
          "translation": "If the weather remains completely clear tomorrow morning, then all of us will leave early for boating."
        },
        {
          "target": "जब आप मुख्य रेलवे स्टेशन पर पहुँचेंगे, तब मैं आपको लेने के लिए बाहर गाड़ी लेकर आऊँगा।",
          "reading": "jab aap mukhya railway station par pahunchenge, tab main aapko lene ke liye baahar gaadi lekar aaoonga. [dʒəb aːp mʊkʰjə reːlʋeː sʈeːʃən pər pəɦʊntʃẽːɡeː t̪əb mɛ̃ː aːpkoː leːneː keː lɪjeː baːɦər ɡaːɽiː leːkər aːuː̃ɡaː] (juhb ahp MOOKH-yuh RAYL-way STAY-shuhn puhr puh-HOON-cheng-gay, tuhb myn ahp-KOH LAY-nay kay lee-ay BAH-huhr GAH-dee LAY-kuhr ah-OON-gah)",
          "translation": "When you arrive at the main railway station, then I will come outside with a car to receive you."
        }
      ],
      "mnemonics": [
        "अगर करोगे → तो होगे; जब आओगे → तब चलेंगे! 'अगर... तो...' और 'जब... तब...' का नित्य संबंध!"
      ],
      "culturalNotes": [
        "अतिथियों के स्वागत में 'जब भी आप आएँगे, हम हाज़िर रहेंगे' (Whenever you come, we will be at your service) कहना भारतीय परंपरा की आतिथ्य भावना को दर्शाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "शर्त-वाक्य «अगर आप परिश्रम करेंगे, ___ अवश्य सफल होंगे» में उचित नित्य-संबंधी योजक क्या होगा?",
          "options": [
            "तो (To - Then [correlative to agar/yadi])",
            "तब",
            "परंतु",
            "क्योंकि"
          ],
          "answerIndex": 0,
          "explanation": "'अगर / यदि' के साथ परिणाम उपवाक्य में नित्य-संबंधी योजक «तो» आता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «जब घंटी बजेगी, तब सभी छात्र कक्षा में ___» में उचित भविष्यत् क्रिया भरिए:",
          "options": [
            "जाएँगे (Jaayenge - Will go [masc. plural])",
            "जाएगा",
            "गए थे",
            "जाता है"
          ],
          "answerIndex": 0,
          "explanation": "छात्र (पुल्लिंग बहुवचन) के साथ भविष्यत् काल में «जाएँगे» आता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "शर्त-सूचक भविष्यत् वाक्य का सर्वथा शुद्ध और सुसंगत रूप चुनिए:",
          "options": [
            "अगर आप समय पर स्टेशन पहुँचेंगे, तो आपको गाड़ी मिल जाएगी। (If you reach the station on time, you will get the train.)",
            "अगर आप पहुँचेंगे तब गाड़ी मिली थी।",
            "जब आप पहुँचेंगे तो गाड़ी मिल जाएगी।",
            "अगर आप पहुँचा तो गाड़ी मिलेगी।"
          ],
          "answerIndex": 0,
          "explanation": "«अगर... पहुँचेंगे, तो... मिल जाएगी» में शर्त और परिणाम का व्याकरणिक संबंध पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u9-l1": {
    "id": "hi-u9-l1",
    "subject": "hindi",
    "unit": 9,
    "lessonNumber": 1,
    "title": "संज्ञा के साथ 'चाहिए' की मूल संरचना (कर्ता + को + संज्ञा + चाहिए: Want / Need)",
    "level": "A2",
    "objective": "इच्छा या आवश्यकता (Want / Need) व्यक्त करने हेतु संप्रदान कर्ता (Dative Subject — कर्ता + को) के साथ 'चाहिए' की वाक्य रचना और सर्वनाम रूपांतरणों में प्रवीणता प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में 'मुझे यह वस्तु चाहिए' (I want / I need X) व्यक्त करने के लिए कर्ता के साथ अनिवार्य रूप से **'को'** परसर्ग लगता है:\n\n1. निर्माण का मूल सूत्र:\n   - **[कर्ता + को] + [आवश्यक वस्तु / संज्ञा] + चाहिए**\n\n2. संप्रदान सर्वनामों के रूप:\n   - मैं + को = **मुझे** (I need / want)\n   - तू + को = **तुझे** (You need / want)\n   - तुम + को = **तुम्हें** (You need / want)\n   - आप + को = **आपको** (You need / want [आदर])\n   - हम + को = **हमें** (We need / want)\n   - वह + को = **उसे** (He/She needs / wants)\n   - यह + को = **इसे** (This person needs / wants)\n   - वे + को = **उन्हें** (They need / want)\n   - ये + को = **इन्हें** (These people need / want)\n   - कौन + को = **किसे** (Who needs / wants)।\n\n3. संज्ञाओं के साथ 'को':\n   - राम को, बच्चों को, छात्रों को, मेहमानों को।",
      "examples": [
        {
          "target": "मुझे इस समय आगामी वार्षिक परीक्षा की तैयारी के लिए एक शांत कमरा चाहिए।",
          "reading": "mujhe is samay aagaami vaarshik pareeksha ki taiyaari ke liye ek shaant kamra chaahiye. [mʊdʒʱeː ɪs səməj aːɡaːmiː ʋaːrʂɪk pəriːkʃaː kiː t̪ɛːjaːriː keː lɪjeː eːk ʃaːn̪t̪ kəmraː tʃaːɦɪjeː] (MOO-jhay ees suh-MUHY ah-gah-MEE VAHR-sheek puh-REEK-shah kee ty-YAH-ree kay lee-ay ayk shahnt KUHM-rah CHAH-hee-yay)",
          "translation": "I need a quiet room at this time for preparation of the upcoming annual examination."
        },
        {
          "target": "क्या आपको दफ़्तर के इस महत्वपूर्ण और जटिल काम को पूरा करने के लिए अतिरिक्त समय चाहिए?",
          "reading": "kya aapko daftar ke is mahatvapoorna aur jatil kaam ko poora karne ke liye atirikt samay chaahiye? [kjaː aːpkoː d̪əft̪ər keː ɪs məɦət̪ʋəpuːrɳə ɔːr dʒəʈɪl kaːm koː puːraː kərneː keː lɪjeː ət̪ɪrɪkt̪ səməj tʃaːɦɪjeː] (kyah ahp-KOH DUHF-tuhr kay ees muh-huht-vuh-POOR-nuh owr JUH-teel kahm koh POO-rah KUHR-nay kay lee-ay uh-tee-REEKT suh-MUHY CHAH-hee-yay)",
          "translation": "Do you need additional time to complete this important and complex office work?"
        },
        {
          "target": "अस्पताल में भर्ती बीमार मरीज़ को तुरंत ताज़ा पौष्टिक भोजन और आवश्यक दवाइयाँ चाहिए।",
          "reading": "aspataal mein bharti beemaar mareez ko turant taaza paushtik bhojan aur aavashyak davaaiyaan chaahiye. [əspət̪aːl mẽː bʱərt̪iː biːmaːr məriːz koː t̪ʊrən̪t̪ t̪aːzaː pɔːʂʈɪk bʱoːdʒən ɔːr aːʋəʃjək d̪əʋaːɪjaː̃ tʃaːɦɪjeː] (uhs-puh-TAHL mayn bhuhr-TEE bee-MAHR muh-REEZ koh TOO-ruhnt TAH-zah powsh-TEEK BHOJ-uhn owr ah-vuhsh-YUHK duh-vah-EE-yahn CHAH-hee-yay)",
          "translation": "The sick patient admitted in the hospital immediately needs fresh nutritious food and essential medicines."
        }
      ],
      "mnemonics": [
        "Want/Need = कर्ता + 'को' + चाहिए! मैं चाहता हूँ = मुझे चाहिए; आप चाहते हैं = आपको चाहिए!"
      ],
      "culturalNotes": [
        "दुकान पर सामान माँगते समय 'मुझे दो किलो सेब चाहिए' कहना अत्यंत स्वाभाविक और मानक शिष्टाचार है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "वाक्य «I need a pen» के लिए शुद्ध व्याकरणिक हिंदी अनुवाद क्या होगा?",
          "options": [
            "मुझे एक कलम चाहिए (Mujhe ek kalam chaahiye - I need a pen)",
            "मैं एक कलम चाहिए",
            "मुझको कलम चाहती हूँ",
            "मेरा एक कलम चाहिए"
          ],
          "answerIndex": 0,
          "explanation": "'I need' के लिए संप्रदान कारक «मुझे» और क्रिया «चाहिए» का प्रयोग होता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "सर्वनाम 'हम' के साथ 'चाहिए' का सही कर्ता रूप क्या है?",
          "options": [
            "हमें (Humein - We in dative)",
            "हम",
            "हमारा",
            "हमको ने"
          ],
          "answerIndex": 0,
          "explanation": "'हम + को' का मानक संप्रदान रूप «हमें» होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "संज्ञा के साथ 'चाहिए' की सही संरचना वाला वाक्य पहचानिए:",
          "options": [
            "पुस्तकालय से सभी छात्रों को अध्ययन के लिए नई पुस्तकें चाहिए। (All students need new books for study from the library.)",
            "सभी छात्र नई पुस्तकें चाहिए।",
            "छात्रों ने पुस्तकें चाहिए।",
            "छात्रों का पुस्तकें चाहिए।"
          ],
          "answerIndex": 0,
          "explanation": "«छात्रों को नई पुस्तकें चाहिए» में कर्ता के साथ 'को' और आवश्यक वस्तु के साथ 'चाहिए' का समन्वय शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u9-l2": {
    "id": "hi-u9-l2",
    "subject": "hindi",
    "unit": 9,
    "lessonNumber": 2,
    "title": "क्रियार्थक संज्ञा के साथ 'चाहिए' (कर्ता + को + क्रिया-ना + चाहिए: Should / Ought to)",
    "level": "A2",
    "objective": "कर्तव्य, सलाह और नैतिक दायित्व (Should / Ought to) को व्यक्त करने हेतु 'कर्ता + को + क्रिया-ना + चाहिए' की संरचना तथा कर्म के लिंग-वचन अनुसार क्रियार्थक संज्ञा (-ना/-नी/-ने) के समन्वय को सीखना।",
    "presentation": {
      "explanation": "किसी को कोई कार्य करने की सलाह (Advice), कर्तव्य (Duty) या नैतिक दायित्व (Ought to) बताने के लिए 'चाहिए' का प्रयोग क्रियार्थक संज्ञा (Infinitive) के साथ होता है:\n\n1. निर्माण का सूत्र:\n   - **[कर्ता + को] + [कर्म] + [क्रिया-ना / -नी / -ने] + चाहिए**\n\n2. क्रियार्थक संज्ञा का कर्म-अन्वय (Infinitive-Object Agreement):\n   - **पुल्लिंग कर्म**: क्रिया अंत में *'-ना'* लेगी:\n     - आपको रोज़ व्यायाम **करना चाहिए** (व्यायाम = पु. → करना चाहिए)।\n   - **स्त्रीलिंग कर्म**: क्रिया अंत में *'-नी'* लेगी:\n     - हमें हिंदी **सीखनी चाहिए** (हिंदी = स्त्री. → सीखनी चाहिए);\n     - छात्रों को अच्छी पुस्तकें **पढ़नी चाहिए** (पुस्तकें = स्त्री. → पढ़नी चाहिए)।\n   - **पुल्लिंग बहुवचन कर्म**: क्रिया अंत में *'-ने'* लेगी:\n     - उसे नए कपड़े **खरीदने चाहिए**।\n   - **अकर्मक क्रिया (कर्म रहित)**: क्रिया तटस्थ रूप *'-ना'* में रहेगी:\n     - आपको समय पर **सोना चाहिए**।",
      "examples": [
        {
          "target": "हमें प्रतिदिन अपने स्वास्थ्य को उत्तम बनाए रखने के लिए शुद्ध और ताज़ा पानी पीना चाहिए।",
          "reading": "humein pratidin apne svaasthya ko uttam banaye rakhne ke liye shuddh aur taaza paani peena chaahiye. [ɦəmẽː prət̪ɪd̪ɪn əpneː sʋaːst̪ʰjə koː ʊt̪ːəm bənaːeː rəkʰneː keː lɪjeː ʃʊd̪ːʱ ɔːr t̪aːzaː paːniː piːnaː tʃaːɦɪjeː] (hoo-MAYN pruh-tee-DEEN uhp-NAY SVAHS-thyuh koh OOT-tuhm buh-nah-AY RUHKH-nay kay lee-ay SHOOD-dh owr TAH-zah PAH-nee PEE-nah CHAH-hee-yay)",
          "translation": "We should drink pure and fresh water daily to maintain our health in excellent condition."
        },
        {
          "target": "सभी सजग नागरिकों को अपने देश के संविधान और यातायात के नियमों का सम्मानपूर्वक पालन करना चाहिए।",
          "reading": "sabhi sajag naagrikon ko apne desh ke samvidhaan aur yaataayaat ke niyamon ka sammaanpoorvak paalan karna chaahiye. [səbʱiː sədʒəɡ naːɡrɪkõː koː əpneː d̪eːʃ keː səmʋɪd̪ʱaːn ɔːr jaːt̪aːjaːt̪ keː nɪjəmõː kaː səmːaːnpuːrʋək paːlən kərnaː tʃaːɦɪjeː] (SUH-bhee suh-JAHG nahg-ree-KOHN koh uhp-NAY daysh kay suhm-vee-DHAHN owr yah-tah-YAHT kay NEE-yuh-mohn kah suhm-mahn-POOR-vuhk PAH-luhn KUHR-nah CHAH-hee-yay)",
          "translation": "All conscious citizens should respectfully obey the constitution of their country and traffic rules."
        },
        {
          "target": "ज्ञान और भाषा कौशल बढ़ाने के लिए छात्रों को पुस्तकालय से अच्छी पुस्तकें पढ़नी चाहिए।",
          "reading": "gyan aur bhasha kaushal badhaane ke liye chhaatron ko pustakaalay se achhi pustakein padhni chaahiye. [ɡjaːn ɔːr bʱaːʂaː kɔːʃəl bəɽʱaːneː keː lɪjeː tʃʰaːt̪rõː koː pʊst̪əkaːləj seː ətʃːʰiː pʊst̪əkẽː pəɽʱniː tʃaːɦɪjeː] (gyahn owr BHAH-shah KOW-shuhl buh-dhah-NAY kay lee-ay CHHAH-trohn koh poos-tuh-KAH-luy say UHTCH-chee POOS-tuh-kayn PUHDH-nee CHAH-hee-yay)",
          "translation": "To enhance knowledge and language skills, students should read good books from the library."
        }
      ],
      "mnemonics": [
        "Should do = कर्ता + 'को' + क्रिया-ना + चाहिए! कर्म स्त्री है तो क्रिया-नी (पुस्तक पढ़नी चाहिए)!"
      ],
      "culturalNotes": [
        "बड़ों का आदर करना चाहिए ('बड़ों का सम्मान करना चाहिए') भारतीय संस्कारों का मूलभूत नैतिक उपदेश है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग कर्म 'भाषा' के साथ 'सीखना चाहिए' का शुद्ध व्याकरणिक रूप क्या होगा?",
          "options": [
            "भाषा सीखनी चाहिए (Bhasha seekhni chaahiye - Should learn the language)",
            "भाषा सीखना चाहिए",
            "भाषा सीखने चाहिए",
            "भाषा सीखता चाहिए"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग कर्म 'भाषा' के साथ क्रियार्थक संज्ञा का रूप «सीखनी चाहिए» बनता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «आपको समय पर घर ___ चाहिए» में उचित अकर्मक क्रिया भरिए:",
          "options": [
            "पहुँचना (Pahunchna chaahiye - You should reach home on time)",
            "पहुँचनी",
            "पहुँचने",
            "पहुँचता"
          ],
          "answerIndex": 0,
          "explanation": "अकर्मक क्रिया में क्रियार्थक संज्ञा का मानक रूप «पहुँचना चाहिए» (तटस्थ पुल्लिंग एकवचन) होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "क्रियार्थक संज्ञा के सही अन्वय वाला नैतिक सलाह का वाक्य चुनिए:",
          "options": [
            "हमें सदैव सच बोलना चाहिए और सबकी सहायता करनी चाहिए। (We should always speak the truth and help everyone.)",
            "हमको सच बोलनी चाहिए और सहायता करना चाहिए।",
            "हम सच बोलना चाहिए।",
            "हमें सच बोलता चाहिए।"
          ],
          "answerIndex": 0,
          "explanation": "«सच बोलना चाहिए» (सच पु.) और «सहायता करनी चाहिए» (सहायता स्त्री.) दोनों का अन्वय पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u9-l3": {
    "id": "hi-u9-l3",
    "subject": "hindi",
    "unit": 9,
    "lessonNumber": 3,
    "title": "अतीत में कर्तव्य / पछतावा (चाहिए था / चाहिए थे / चाहिए थी / चाहिए थीं: Should have)",
    "level": "A2",
    "objective": "भूतकालिक कर्तव्य, अनुचित चूक अथवा पछतावे (Should have done) को व्यक्त करने वाले 'चाहिए था / थे / थी / थीं' के अन्वय नियमों में दक्षता प्राप्त करना।",
    "presentation": {
      "explanation": "अतीत में जो कार्य किया जाना चाहिए था किंतु नहीं किया गया (पछतावा / कर्तव्य — Should have done), उसे व्यक्त करने के लिए 'चाहिए था' संरचना का प्रयोग होता है:\n\n1. निर्माण का सूत्र:\n   - **[कर्ता + को] + [कर्म] + [क्रिया-ना/-नी/-ने] + [चाहिए था / थे / थी / थीं]**\n\n2. सहायक क्रिया और कर्म का लिंग-वचन समन्वय:\n   - **पुल्लिंग एकवचन कर्म**: *चाहिए था*\n     - आपको यह पत्र **भेजना चाहिए था** (पत्र = पु.एक. → भेजना चाहिए था)।\n   - **पुल्लिंग बहुवचन कर्म**: *चाहिए थे*\n     - उसे सभी कागज़ात **लाने चाहिए थे** (कागज़ात = पु.बहु. → लाने चाहिए थे)।\n   - **स्त्रीलिंग एकवचन कर्म**: *चाहिए थी*\n     - हमें यह बात पहले **समझनी चाहिए थी** (बात = स्त्री.एक. → समझनी चाहिए थी)।\n   - **स्त्रीलिंग बहुवचन कर्म**: *चाहिए थीं* [अनुनासिक]:\n     - मरीज़ को सब दवाइयाँ **लेनी चाहिए थीं** (दवाइयाँ = स्त्री.बहु. → लेनी चाहिए थीं)।",
      "examples": [
        {
          "target": "आपको कल शाम की उस अत्यंत महत्वपूर्ण और ऐतिहासिक बैठक में अवश्य उपस्थित होना चाहिए था।",
          "reading": "aapko kal shaam ki us atyant mahatvapoorna aur aitihasik baithak mein avashya upasthit hona chaahiye tha. [aːpkoː kəl ʃaːm kiː ʊs ət̪jən̪t̪ məɦət̪ʋəpuːrɳə ɔːr ɛːt̪ɪhaːsɪk bɛːʈʰək mẽː əʋəʃjə ʊpəst̪ʰɪt̪ hoːnaː tʃaːɦɪjeː t̪ʰaː] (ahp-KOH kuhl shahm kee oos uht-YUHNT muh-huht-vuh-POOR-nuh owr ay-tee-HAH-seek BY-thuhk mayn uh-VUHSH-yuh oo-puhs-THEET hoh-NAH CHAH-hee-yay thah)",
          "translation": "You should definitely have been present in that extremely important and historic meeting yesterday evening."
        },
        {
          "target": "रोहन को कठिन परीक्षा शुरू होने से पहले अपने सभी पुराने पाठों का पुनरावलोकन करना चाहिए था।",
          "reading": "rohan ko kathin pareeksha shuroo hone se pehle apne sabhi puraane paathon ka punaraavlokan karna chaahiye tha. [roːɦən koː kəʈʰɪn pəriːkʃaː ʃʊruː hoːneː seː pɛɦleː əpneː səbʱiː pʊraːneː paːʈʰõː kaː pʊnəraːʋloːkən kərnaː tʃaːɦɪjeː t̪ʰaː] (ROH-huhn koh KUH-theen puh-REEK-shah shoo-ROO hoh-NAY say PUH-h-lay uhp-NAY SUH-bhee poo-RAH-nay pah-THOHN kah poo-nuh-rahv-LOH-kuhn KUHR-nah CHAH-hee-yay thah)",
          "translation": "Rohan should have reviewed all his old lessons before the difficult examination started."
        },
        {
          "target": "समस्या बढ़ने से पहले ही हमें किसी अनुभवी विशेषज्ञ डॉक्टर से उचित सलाह लेनी चाहिए थी।",
          "reading": "samasya badhne se pehle hi humein kisi anubhavi visheshagya doctor se uchit salaah leni chaahiye thi. [səməsjaː bəɽʱneː seː pɛɦleː ɦiː ɦəmẽː kɪsiː ənʊbʱəʋiː ʋɪʃeːʂəɡjə ɖɔːkʈər seː ʊtʃɪt̪ səlaːh leːniː tʃaːɦɪjeː t̪ʰiː] (suh-muhs-YAH buhdh-NAY say PUH-h-lay hee hoo-MAYN kee-SEE uh-noo-bhuh-VEE vee-shay-SHUHG-yuh DAHK-tuhr say OO-cheet suh-LAH LAY-nee CHAH-hee-yay thee)",
          "translation": "Before the problem escalated, we should have taken proper advice from an experienced specialist doctor."
        }
      ],
      "mnemonics": [
        "Should have done = चाहिए था/थे/थी/थीं! सलाह (स्त्री.) = लेनी चाहिए थी; कागज़ (पु.बहु.) = लाने चाहिए थे!"
      ],
      "culturalNotes": [
        "गलती या चूक होने पर शिष्टाचारपूर्वक कहना 'मुझे पहले ही बता देना चाहिए था' (I should have informed earlier) विनम्रता और जिम्मेदारी का परिचायक है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग बहुवचन कर्म 'चिट्ठियाँ' के साथ भूतकालिक पछतावे का कौन-सा रूप शुद्ध होगा?",
          "options": [
            "भेजनी चाहिए थीं (Bhejni chaahiye theen - Should have sent [fem. plural])",
            "भेजना चाहिए था",
            "भेजने चाहिए थे",
            "भेजनी चाहिए थी"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग बहुवचन कर्म 'चिट्ठियाँ' के साथ «भेजनी चाहिए थीं» (अनुनासिक 'थीं') आता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «उसे यह बात पहले ही ___ चाहिए थी» में सही क्रियार्थक संज्ञा भरिए:",
          "options": [
            "बतानी (Bataani chaahiye thi - Should have told [fem. singular agreement with baat])",
            "बताना",
            "बताने",
            "बताता"
          ],
          "answerIndex": 0,
          "explanation": "कर्म 'बात' स्त्रीलिंग एकवचन है, अतः «बतानी चाहिए थी» रूप होगा।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "भूतकालिक कर्तव्य (Should have done) का पूर्णतः शुद्ध वाक्य पहचानिए:",
          "options": [
            "आपको स्टेशन समय पर पहुँचना चाहिए था ताकि गाड़ी न छूटती। (You should have reached the station on time so that the train was not missed.)",
            "आप स्टेशन पहुँचना चाहिए था।",
            "आपको पहुँचना चाहिए थी।",
            "आपको पहुँचे चाहिए थे।"
          ],
          "answerIndex": 0,
          "explanation": "«आपको पहुँचना चाहिए था» में संप्रदान कर्ता और अकर्मक क्रिया का तटस्थ भूतकालिक अन्वय पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u9-l4": {
    "id": "hi-u9-l4",
    "subject": "hindi",
    "unit": 9,
    "lessonNumber": 4,
    "title": "नकारात्मक अनिवार्यता और निषेध (नहीं चाहिए vs नहीं करना चाहिए)",
    "level": "A2",
    "objective": "अस्वीकृति (Don't want) और निषेध/अनुचित कार्य (Should not do) को व्यक्त करने वाले नकारात्मक वाक्यों ('नहीं चाहिए' और 'नहीं करना चाहिए') के सटीक प्रयोग को समझना।",
    "presentation": {
      "explanation": "'चाहिए' के साथ नकारात्मक वाक्य दो भिन्न अर्थों में प्रयुक्त होते हैं:\n\n1. वस्तु की अस्वीकृति (Don't want / Don't need):\n   - **[कर्ता + को] + संज्ञा + नहीं चाहिए**\n     - मुझे और चाय **नहीं चाहिए** (I do not want more tea).\n     - धन्यवाद, हमें अतिरिक्त कागज़ **नहीं चाहिए**।\n\n2. नकारात्मक सलाह / नैतिक निषेध (Should NOT do):\n   - **[कर्ता + को] + [कर्म] + [नहीं + क्रिया-ना] + चाहिए** (अथवा क्रिया-ना + नहीं चाहिए)\n     - बच्चों को झूठ **नहीं बोलना चाहिए** (Children should not tell lies);\n     - हमें किसी का अपमान **नहीं करना चाहिए** (We should not insult anyone);\n     - आपको अधिक मीठा **नहीं खाना चाहिए** (You should not eat too much sugar)।\n\n3. 'मत' का प्रयोग निषेध में नहीं:\n   - 'चाहिए' वाले वाक्यों में 'मत' का प्रयोग नहीं होता; हमेशा **'नहीं'** का प्रयोग होता है (जैसे: 'नहीं जाना चाहिए', न कि 'मत जाना चाहिए')।",
      "examples": [
        {
          "target": "किसी भी समझदार व्यक्ति को दूसरों की भावनाओं और आत्मसम्मान को ठेस नहीं पहुँचानी चाहिए।",
          "reading": "kisi bhi samajhdaar vyakti ko doosron ki bhaavanaon aur aatmasammaan ko thes nahin pahunchaani chaahiye. [kɪsiː bʱiː səmədʒʱd̪aːr ʋjəkt̪ɪ koː d̪uːsrõː kiː bʱaːʋnaːõː ɔːr aːt̪məsəmːaːn koː t̪ʰeːs nəɦĩː pəɦʊntʃaːniː tʃaːɦɪjeː] (kee-SEE bhee suh-muhj-DAHR vyuhk-TEE koh DOOS-rohn kee bhahv-NAH-ohn owr aht-muh-suhm-MAHN koh thays nuh-HEEN puh-hoon-CHAH-nee CHAH-hee-yay)",
          "translation": "No sensible person should hurt the feelings and self-respect of others."
        },
        {
          "target": "आपका बहुत-बहुत धन्यवाद, मेरा पेट पूरी तरह भर गया है और मुझे अब और भोजन नहीं चाहिए।",
          "reading": "aapka bahut-bahut dhanyavaad, mera pet poori tarah bhar gaya hai aur mujhe ab aur bhojan nahin chaahiye. [aːpkaː bəɦʊt̪ bəɦʊt̪ d̪ʱənjeːʋaːd̪ meːraː peːʈ puːriː t̪ərəh bʱər ɡəjaː hɛː ɔːr mʊdʒʱeː əb ɔːr bʱoːdʒən nəɦĩː tʃaːɦɪjeː] (ahp-KAH buh-hoot-buh-hoot dhuhn-yuh-VAHD, MAY-rah payt POO-ree tuh-RUH bhuhr GUH-yah hy owr MOO-jhay uhb owr BHOJ-uhn nuh-HEEN CHAH-hee-yay)",
          "translation": "Thank you very much, my stomach is completely full and I do not need any more food now."
        },
        {
          "target": "व्यस्त सड़क पार करते समय किसी को भी मोबाइल फोन का असावधानीपूर्वक प्रयोग नहीं करना चाहिए।",
          "reading": "vyast sadak paar karte samay kisi ko bhi mobile phone ka asaavdhaanipoorvak prayog nahin karna chaahiye. [ʋjəst̪ səɽək paːr kərteː səməj kɪsiː koː bʱiː moːbaːɪl foːn kaː əsaːʋd̪ʱaːniːpuːrʋək prəjoːɡ nəɦĩː kərnaː tʃaːɦɪjeː] (vyuhst SUH-duhk pahr KUHR-tay suh-MUHY kee-SEE koh bhee MOH-bah-eel fohn kah uh-sahv-dhah-nee-POOR-vuhk pruh-YOHG nuh-HEEN KUHR-nah CHAH-hee-yay)",
          "translation": "While crossing a busy road, no one should carelessly use a mobile phone."
        }
      ],
      "mnemonics": [
        "Should not = नहीं + क्रिया-ना + चाहिए! Don't want = नहीं चाहिए! इसमें 'मत' कभी नहीं आता!"
      ],
      "culturalNotes": [
        "भारतीय भोजन में अतिरिक्त परोसने (आग्रह) पर विनम्रतापूर्वक 'धन्यवाद, अब और नहीं चाहिए' कहना आतिथ्य स्वीकारने और मना करने का शिष्ट ढंग है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "नकारात्मक नैतिक सलाह «झूठ नहीं बोलना चाहिए» में 'नहीं' का स्थान कहाँ होना चाहिए?",
          "options": [
            "क्रियार्थक संज्ञा से ठीक पहले (झूठ नहीं बोलना चाहिए - Should not tell lies)",
            "वाक्य के सबसे अंत में",
            "कर्ता से पहले",
            "चाहिए के बाद"
          ],
          "answerIndex": 0,
          "explanation": "मानक हिंदी में 'नहीं' क्रियार्थक संज्ञा के ठीक पहले («झूठ नहीं बोलना चाहिए») आता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «I do not want this book» का शुद्ध अनुवाद चुनिए:",
          "options": [
            "मुझे यह पुस्तक नहीं चाहिए (Mujhe yah pustak nahin chaahiye)",
            "मैं यह पुस्तक नहीं चाहता चाहिए",
            "मुझको पुस्तक मत चाहिए",
            "मेरी पुस्तक नहीं चाहिए"
          ],
          "answerIndex": 0,
          "explanation": "वस्तु की अस्वीकृति हेतु «मुझे यह पुस्तक नहीं चाहिए» शुद्ध रूप है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "नकारात्मक अनिवार्यता और निषेध का पूर्णतः शुद्ध वाक्य पहचानिए:",
          "options": [
            "किसी को भी किसी असहाय व्यक्ति का मज़ाक नहीं उड़ाना चाहिए। (No one should make fun of any helpless person.)",
            "किसी को भी मज़ाक मत उड़ाना चाहिए।",
            "किसी को मज़ाक नहीं उड़ानी चाहिए था।",
            "कोई मज़ाक नहीं उड़ाना चाहिए।"
          ],
          "answerIndex": 0,
          "explanation": "«किसी को भी... मज़ाक नहीं उड़ाना चाहिए» में संप्रदान कारक और निषेध का प्रयोग व्याकरणसम्मत है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u9-l5": {
    "id": "hi-u9-l5",
    "subject": "hindi",
    "unit": 9,
    "lessonNumber": 5,
    "title": "आवश्यकता और अनिवार्यता के विविध रूप: ज़रूरत है, आवश्यकता है बनाम चाहिए",
    "level": "A2",
    "objective": "अनिवार्यता और आवश्यकता की विभिन्न अभिव्यक्तियों (चाहिए, की ज़रूरत है, की आवश्यकता है) के औपचारिक और अनौपचारिक स्तरों तथा सूक्ष्म अर्थ-भेदों में प्रवीणता प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में आवश्यकता और कर्तव्य को व्यक्त करने के लिए 'चाहिए' के अतिरिक्त अन्य औपचारिक और मुहावरेदार संरचनाएं भी प्रयुक्त होती हैं:\n\n1. आवश्यकता के तीन मुख्य स्तर:\n   - **1. 'चाहिए' (मानक सामान्य व बहुउद्देश्यीय)**:\n     - मुझे कलम चाहिए / आपको पढ़ना चाहिए (दैनिक बातचीत और सामान्य सलाह)।\n   - **2. 'की ज़रूरत है' (तात्कालिक व व्यावहारिक आवश्यकता — Urgent/Tangible Need)**:\n     - [कर्ता + को] + [संज्ञा/क्रिया] + की ज़रूरत है:\n     - मुझे इस समय पैसों **की ज़रूरत है** (I am in need of money);\n     - आपको आराम करने **की ज़रूरत है**।\n   - **3. 'की आवश्यकता है' (औपचारिक / प्रशासनिक आवश्यकता — Formal/Official Necessity)**:\n     - इस पद के लिए अनुभवी शिक्षक **की आवश्यकता है** (Wanted: experienced teacher);\n     - देश को अनुशासित युवाओं **की आवश्यकता है**।\n\n2. 'चाहिए' (Should: नैतिक दायित्व) बनाम 'करना है' (Have to: व्यक्तिगत योजना):\n   - मुझे पढ़ना चाहिए (I should study — सलाह/कर्तव्य);\n   - मुझे पढ़ना है (I have to study — मेरी योजना/कार्यसूची)।",
      "examples": [
        {
          "target": "इस कठिन और महत्वपूर्ण शोध कार्य को सफलतापूर्वक पूरा करने के लिए हमें गहन अध्ययन की आवश्यकता है।",
          "reading": "is kathin aur mahatvapoorna shodh kaary ko safaltaapoorvak poora karne ke liye humein gahan adhyayan ki aavashyakta hai. [ɪs kəʈʰɪn ɔːr məɦət̪ʋəpuːrɳə ʃoːd̪ʱ kaːrjə koː səfəltaːpuːrʋək puːraː kərneː keː lɪjeː ɦəmẽː ɡəɦən əd̪ʱjəjən kiː aːʋəʃjəktaː hɛː] (ees KUH-theen owr muh-huht-vuh-POOR-nuh shohdh KAHR-yuh koh suh-fuhl-tah-POOR-vuhk POO-rah KUHR-nay kay lee-ay hoo-MAYN GUH-huhn uhdh-YUH-yuhn kee ah-vuhsh-YUHk-tah hy)",
          "translation": "We need in-depth study to successfully complete this difficult and important research work."
        },
        {
          "target": "यदि आपको किसी भी प्रकार की सहायता या मार्गदर्शन की ज़रूरत हो, तो बेझिझक बताइएगा।",
          "reading": "yadi aapko kisi bhi prakaar ki sahaayata ya maargadarshan ki zaroorat ho, to bejheejhak bataayiyega. [jəd̪ɪ aːpkoː kɪsiː bʱiː prəkaːr kiː səɦaːjət̪aː jaː maːrɡəd̪ərʃən kiː zəruːrət̪ hoː t̪oː beːdʒʱiːdʒʱək bət̪aːjɪjeːɡaː] (YUH-dee ahp-KOH kee-SEE bhee pruh-KAHR kee suh-hah-YUH-tah yah mahrg-DUHR-shuhn kee zuh-ROO-ruht hoh, toh bay-JHEE-jhuhk buh-tah-YEE-yay-gah)",
          "translation": "If you need any kind of help or guidance, please let me know without hesitation."
        },
        {
          "target": "हर जागरूक नागरिक को समाज और राष्ट्र के सर्वांगीण विकास में अपना सकारात्मक योगदान देना चाहिए।",
          "reading": "har jaagrook naagrik ko samaaj aur raashtr ke sarvaangeen vikaas mein apna sakaaraatmak yogdaan dena chaahiye. [ɦər dʒaːɡruːk naːɡrɪk koː səmaːdʒ ɔːr raːʂʈr keː sərʋaːŋɡiːɳ ʋɪkaːs mẽː əpnaː səkaːraːt̪mək joːɡd̪aːn d̪eːnaː tʃaːɦɪjeː] (huhr jahg-ROOK nahg-REEK koh suh-MAHJ owr RAHSH-truh kay suhr-vahn-GEEN vee-KAHS mayn uhp-NAH suh-kah-RAHT-muhk yohg-DAHN DAY-nah CHAH-hee-yay)",
          "translation": "Every aware citizen should make their positive contribution to the all-round development of society and nation."
        }
      ],
      "mnemonics": [
        "सलाह = चाहिए (Should); ज़रूरत = की ज़रूरत है (Need); औपचारिक = की आवश्यकता है (Required)!"
      ],
      "culturalNotes": [
        "समाचार-पत्रों के विज्ञापनों में 'आवश्यकता है' (Required/Wanted) शीर्षक का प्रयोग कर्मचारियों या अध्यापकों की भर्ती हेतु मानक है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "औपचारिक विज्ञापनों में 'Wanted / Required' के लिए सबसे मानक हिंदी पद कौन-सा है?",
          "options": [
            "आवश्यकता है (Aavashyakta hai - Formally required / wanted)",
            "चाहिए",
            "ज़रूरत है",
            "माँग है"
          ],
          "answerIndex": 0,
          "explanation": "औपचारिक और प्रशासनिक संदर्भ में «आवश्यकता है» सबसे प्रामाणिक शब्द है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «मुझे इस समय आपकी सहायता ___ ज़रूरत है» में सही परसर्ग भरिए:",
          "options": [
            "की (Ki zaroorat hai - Need of [fem. noun zaroorat])",
            "का",
            "के",
            "को"
          ],
          "answerIndex": 0,
          "explanation": "'ज़रूरत' स्त्रीलिंग संज्ञा है, अतः इसके साथ संबंध परसर्ग «की» (की ज़रूरत है) आता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "आवश्यकता और सलाह के विविध रूपों वाला पूर्णतः शुद्ध वाक्य चुनिए:",
          "options": [
            "यदि आपको समय की ज़रूरत हो तो बताइएगा, परंतु काम समय पर समाप्त होना चाहिए। (If you need time please let me know, but the work should be finished on time.)",
            "यदि आपको समय का ज़रूरत हो तो बताइएगा।",
            "काम समाप्त होना चाहिए था अभी।",
            "समय की आवश्यकता है तुमको।"
          ],
          "answerIndex": 0,
          "explanation": "«समय की ज़रूरत हो» (सटीक संबंध परसर्ग) और «समाप्त होना चाहिए» (सटीक अनिवार्यता) दोनों का समन्वय पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u10-l1": {
    "id": "hi-u10-l1",
    "subject": "hindi",
    "unit": 10,
    "lessonNumber": 1,
    "title": "सामान्य बाध्यता / आंतरिक दायित्व: Infinitive + होना (मुझे जाना है / काम करना है)",
    "level": "A2",
    "objective": "व्यक्तिगत योजना, पूर्व-निर्धारित कार्यक्रम अथवा स्वाभाविक आंतरिक दायित्व (Have to / Am to) को व्यक्त करने वाले 'कर्ता + को + क्रिया-ना + होना' संरचना के अन्वय नियमों में प्रवीणता प्राप्त करना।",
    "presentation": {
      "explanation": "जब किसी कार्य को करने की व्यक्तिगत योजना (Plan), कार्यक्रम (Schedule) या स्वाभाविक दायित्व (Obligation) हो, तब 'कर्ता + को + क्रियार्थक संज्ञा + होना' का प्रयोग किया जाता है:\n\n1. निर्माण का सूत्र:\n   - **[कर्ता + को] + [कर्म] + [क्रिया-ना / -नी / -ने] + [है / हैं / था / थे / थी / थीं]**\n\n2. कर्म और क्रिया का अन्वय (Object-Verb Agreement):\n   - **पुल्लिंग एकवचन कर्म**: *मुझे एक पत्र लिखना है* (पत्र = पु. → लिखना है);\n   - **स्त्रीलिंग एकवचन कर्म**: *मुझे चाय बनानी है* (चाय = स्त्री. → बनानी है);\n   - **पुल्लिंग बहुवचन कर्म**: *हमें कई काम करने हैं* (काम = पु.बहु. → करने हैं);\n   - **स्त्रीलिंग बहुवचन कर्म**: *उसे रोटियाँ सेकनी हैं* (रोटियाँ = स्त्री.बहु. → सेकनी हैं);\n   - **अकर्मक क्रिया (कर्म रहित)**: *मुझे कल दिल्ली जाना है* (तटस्थ रूप)।\n\n3. अर्थ-भेद ('चाहिए' बनाम 'होना'):\n   - मुझे पढ़ना चाहिए = I should study (नैतिक सलाह/कर्तव्य);\n   - मुझे पढ़ना है = I have to study / I plan to study (निश्चित कार्यसूची)।",
      "examples": [
        {
          "target": "मुझे कल सुबह की पहली ट्रेन पकड़ने के लिए स्टेशन जल्दी पहुँचना है।",
          "reading": "mujhe kal subah ki pehli train pakadne ke liye station jaldi pahunchna hai. [mʊdʒʱeː kəl sʊbəh kiː pɛɦliː ʈreːn pəkəɽneː keː lɪjeː sʈeːʃən dʒəldiː pəɦʊntʃnaː hɛː] (MOO-jhay kuhl SOO-buh kee PUH-h-lee trayn puh-KUHD-nay kay lee-ay STAY-shuhn JUHL-dee puh-HOONCH-nah hy)",
          "translation": "I have to reach the station early tomorrow morning to catch the first train."
        },
        {
          "target": "क्या आपको आज शाम तक कार्यालय की यह महत्वपूर्ण और गोपनीय परियोजना पूरी करनी है?",
          "reading": "kya aapko aaj shaam tak kaaryaalay ki yah mahatvapoorna aur gopaneey pariyojana poori karni hai? [kjaː aːpkoː aːdʒ ʃaːm t̪ək kaːrjaːləj kiː jəɦ məɦət̪ʋəpuːrɳə ɔːr ɡoːpniːj pərɪjoːdʒnaː puːriː kərniː hɛː] (kyah ahp-KOH ahj shahm tuhk kahr-YAH-luy kee yuh muh-huht-vuh-POOR-nuh owr gohp-NEE-yuh puh-ree-YOHJ-nah POO-ree KUHR-nee hy)",
          "translation": "Do you have to complete this important and confidential office project by this evening?"
        },
        {
          "target": "हम सभी विद्यार्थियों को कल अंतिम तिथि से पहले अपने आवेदन पत्र जमा करने हैं।",
          "reading": "hum sabhi vidyaarthiyon ko kal antim tithi se pehle apne aavedan patr jama karne hain. [həm səbʱiː ʋɪd̪jaːrt̪ʰɪjõː koː kəl ənt̪ɪm t̪ɪt̪ʰɪ seː pɛɦleː əpneː aːʋeːd̪ən pət̪r dʒəmaː kərneː hɛ̃ː] (hum SUH-bhee veed-YAHR-thee-yohn koh kuhl UHN-teem TEE-thee say PUH-h-lay uhp-NAY ah-VAY-duhn puhtr JUH-mah KUHR-nay hy-n)",
          "translation": "All of us students have to submit our application forms tomorrow before the deadline."
        }
      ],
      "mnemonics": [
        "Plan/Schedule = कर्ता + 'को' + क्रिया-ना + है! चाय बनानी है (स्त्री.), पत्र लिखना है (पु.), काम करने हैं (बहु.)!"
      ],
      "culturalNotes": [
        "दैनिक बातचीत में 'मुझे निकलना है' (I have to leave) कहना विदा लेने का अत्यंत सामान्य और स्वाभाविक तरीका है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग कर्म 'बात' के साथ 'कहना है' का शुद्ध व्याकरणिक रूप क्या होगा?",
          "options": [
            "मुझे आपसे एक बात कहनी है (Mujhe aapse ek baat kahni hai - I have to tell you something [fem. agreement])",
            "मुझे बात कहना है",
            "मैं बात कहनी है",
            "मुझे बात कहने हैं"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग कर्म 'बात' के अनुसार क्रियार्थक संज्ञा «कहनी है» बनेगी।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «हमें आज शाम कई कपड़े ___ हैं» में उचित क्रियार्थक संज्ञा भरिए:",
          "options": [
            "धोने (Dhone hain - Have to wash [masc. plural agreement with kapde])",
            "धोना",
            "धोनी",
            "धोता"
          ],
          "answerIndex": 0,
          "explanation": "पुल्लिंग बहुवचन कर्म 'कपड़े' के साथ क्रियार्थक संज्ञा का रूप «धोने हैं» होगा।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "योजना/कार्यक्रम (Have to do) की दृष्टि से पूर्णतः शुद्ध वाक्य चुनिए:",
          "options": [
            "आज दोपहर मुझे बैंक जाकर ज़रूरी दस्तावेज़ जमा करने हैं। (Today afternoon I have to go to the bank and submit important documents.)",
            "आज दोपहर मैं बैंक जाना है।",
            "मुझे दस्तावेज़ जमा करना हैं।",
            "मुझको दस्तावेज़ जमा करनी है।"
          ],
          "answerIndex": 0,
          "explanation": "«मुझे... दस्तावेज़ जमा करने हैं» में संप्रदान कर्ता और पुल्लिंग बहुवचन कर्म का अन्वय शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u10-l2": {
    "id": "hi-u10-l2",
    "subject": "hindi",
    "unit": 10,
    "lessonNumber": 2,
    "title": "बाह्य मजबूरी और विवशता: Infinitive + पड़ना (वर्तमान: पड़ता है / पड़ती है / पड़ते हैं)",
    "level": "A2",
    "objective": "बाह्य परिस्थितियों, मजबूरी अथवा अनिच्छा (Compulsion / Forced duty) को व्यक्त करने वाले 'पड़ता है / पड़ती है / पड़ते हैं' की संरचना और क्रिया समन्वय में प्रवीणता प्राप्त करना।",
    "presentation": {
      "explanation": "जब कोई कार्य अपनी इच्छा से नहीं, बल्कि किसी बाह्य विवशता, मजबूरी या परिस्थिति के दबाव में करना पड़े, तब 'पड़ना' क्रिया का प्रयोग होता है:\n\n1. निर्माण का सूत्र:\n   - **[कर्ता + को] + [कर्म] + [क्रिया-ना / -नी / -ने] + [पड़ता है / पड़ती है / पड़ते हैं]**\n\n2. अन्वय नियम (Agreement Rules):\n   - **स्त्रीलिंग कर्म**: क्रिया व 'पड़ना' दोनों स्त्रीलिंग होंगे:\n     - उसे रोज़ाना रोटी **बनानी पड़ती है** (रोटी = स्त्री. → बनानी पड़ती है);\n     - हमें फीस **भरनी पड़ती है**।\n   - **पुल्लिंग एकवचन कर्म**: *मुझे भारी किराया **देना पड़ता है** (किराया = पु. → देना पड़ता है)।\n   - **पुल्लिंग बहुवचन कर्म**: *उसे कई चक्कर **काटने पड़ते हैं**।\n   - **अकर्मक क्रिया (कर्म रहित)**: *मुझे पैदल **चलना पड़ता है** (तटस्थ रूप)।\n\n3. 'होना' बनाम 'पड़ना' का अंतर:\n   - मुझे जाना है = I have to go (मेरी योजना);\n   - मुझे जाना पड़ता है = I am forced / compelled to go (मेरी मजबूरी)।",
      "examples": [
        {
          "target": "बस न मिलने के कारण मुझे प्रतिदिन दफ़्तर जाने के लिए पाँच किलोमीटर पैदल चलना पड़ता है।",
          "reading": "bus na milne ke kaaran mujhe pratidin daftar jaane ke liye paanch kilometer paidal chalna padta hai. [bəs nə mɪlneː keː kaːrəɳ mʊdʒʱeː prət̪ɪd̪ɪn d̪əft̪ər dʒaːneː keː lɪjeː paːntʃ kɪloːmiːʈər pɛːd̪əl tʃəlnaː pəɽt̪aː hɛː] (buhs nuh MEEL-nay kay KAH-ruhn MOO-jhay pruh-tee-DEEN DUHF-tuhr jah-NAY kay lee-ay pahnch kee-loh-MEE-tuhr py-DUHL CHUHL-nah PUHD-tah hy)",
          "translation": "Due to not getting a bus, I have to walk five kilometers on foot daily to go to the office."
        },
        {
          "target": "घर से दूर छात्रावास में रहने वाले विद्यार्थियों को रोज़ाना खुद ही भोजन की व्यवस्था करनी पड़ती है।",
          "reading": "ghar se door chhaatravaas mein rahne vaale vidyaarthiyon ko rozaana khud hi bhojan ki vyavastha karni padti hai. [ɡʱər seː d̪uːr tʃʰaːt̪raːʋaːs mẽː rəɦneː ʋaːleː ʋɪd̪jaːrt̪ʰɪjõː koː roːzaːnaː kʰʊd̪ ɦiː bʱoːdʒən kiː ʋjəʋəst̪ʰaː kərniː pəɽt̪iː hɛː] (ghuhr say door chhah-trah-VAHS mayn RUH-h-nay vah-LAY veed-YAHR-thee-yohn koh roh-ZAH-nah khood hee BHOJ-uhn kee vyuh-vuhs-THAH KUHR-nee PUHD-tee hy)",
          "translation": "Students living in hostels far from home have to make arrangements for food themselves every day."
        },
        {
          "target": "महँगाई के इस कठिन दौर में गरीब परिवारों को बहुत सोच-समझकर सीमित धन खर्च करना पड़ता है।",
          "reading": "mehengaai ke is kathin daur mein gareeb parivaaron ko bahut soch-samajhkar seemit dhan kharch karna padta hai. [mɛɦəŋɡaːiː keː ɪs kəʈʰɪn d̪ɔːr mẽː ɡəriːb pərɪʋaːrõː koː bəɦʊt̪ soːtʃ səmədʒʱkər siːmɪt̪ d̪ʱən kʰərtʃ kərnaː pəɽt̪aː hɛː] (meh-uhng-GAH-ee kay ees KUH-theen dowr mayn guh-REEB puh-ree-VAH-rohn koh buh-hoot sohch-suh-muhj-KUHR SEE-meet dhuhn khuhrch KUHR-nah PUHD-tah hy)",
          "translation": "In this difficult period of inflation, poor families have to spend limited money very thoughtfully."
        }
      ],
      "mnemonics": [
        "Compulsion = कर्ता + 'को' + क्रिया-ना + पड़ता है! मजबूरी में 'पड़ता है' लगाओ!"
      ],
      "culturalNotes": [
        "भारतीय समाज में परिवार की जिम्मेदारियों को निभाते हुए अक्सर लोग कहते हैं 'परिवार के लिए करना पड़ता है' (One has to do it for the family)।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग कर्म 'मेहनत' के साथ मजबूरी का वर्तमान रूप क्या होगा?",
          "options": [
            "मेहनत करनी पड़ती है (Mehnat karni padti hai - Has to work hard [fem. agreement])",
            "मेहनत करना पड़ता है",
            "मेहनत करने पड़ते हैं",
            "मेहनत करती पड़ती है"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग कर्म 'मेहनत' के अनुसार «करनी पड़ती है» रूप प्रयुक्त होगा।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «उसे हर महीने भारी टैक्स ___» में सही मजबूरी रूप भरिए:",
          "options": [
            "देना पड़ता है (Dena padta hai - Has to pay [masc. tax])",
            "देनी पड़ती है",
            "देने पड़ते हैं",
            "देना पड़ते हैं"
          ],
          "answerIndex": 0,
          "explanation": "टैक्स (पुल्लिंग एकवचन) के साथ «देना पड़ता है» आएगा।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "वर्तमान मजबूरी (Habitual Compulsion) का पूर्णतः शुद्ध वाक्य चुनिए:",
          "options": [
            "समय की कमी के कारण हमें रात में देर तक जागना पड़ता है। (Due to lack of time we have to stay awake late at night.)",
            "हम रात में जागना पड़ता है।",
            "हमें जागनी पड़ती है था।",
            "हमको रात में जागते पड़ता है।"
          ],
          "answerIndex": 0,
          "explanation": "«हमें... जागना पड़ता है» में संप्रदान कर्ता और अकर्मक मजबूरी का वर्तमान अन्वय पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u10-l3": {
    "id": "hi-u10-l3",
    "subject": "hindi",
    "unit": 10,
    "lessonNumber": 3,
    "title": "भूतकालिक मजबूरी: पड़ा / पड़ी / पड़े / पड़ीं (Past Compulsion: Had to / Was forced to)",
    "level": "A2",
    "objective": "अतीत में किसी विशेष परिस्थिति के कारण उत्पन्न विवशता (Had to / Was forced to) को व्यक्त करने वाले 'पड़ा / पड़ी / पड़े / पड़ीं' के अन्वय नियमों में दक्षता प्राप्त करना।",
    "presentation": {
      "explanation": "भूतकाल में किसी एक विशिष्ट अवसर पर मजबूरीवश किए गए कार्य (Had to do) को व्यक्त करने के लिए 'पड़ा' संरचना का प्रयोग होता है:\n\n1. निर्माण का सूत्र:\n   - **[कर्ता + को] + [कर्म] + [क्रिया-ना / -नी / -ने] + [पड़ा / पड़ी / पड़े / पड़ीं]**\n   - (सावधान: कर्ता के साथ 'को' ही लगेगा, भूतकाल होने पर भी 'ने' कभी नहीं लगता!)\n\n2. कर्म के अनुसार लिंग-वचन समन्वय:\n   - **पुल्लिंग एकवचन कर्म**: *मुझे नया टिकट **खरीदना पड़ा** (टिकट = पु.एक. → खरीदना पड़ा);\n   - **स्त्रीलिंग एकवचन कर्म**: *उसे सारी बात **बतानी पड़ी** (बात = स्त्री.एक. → बतानी पड़ी);\n   - **पुल्लिंग बहुवचन कर्म**: *हमें कई घंटे इंतज़ार **करने पड़े** (इंतज़ार के घंटे = पु.बहु. → करने पड़े);\n   - **स्त्रीलिंग बहुवचन कर्म**: *मरीज़ को कड़वी दवाइयाँ **खानी पड़ीं** (दवाइयाँ = स्त्री.बहु. → खानी पड़ीं [अनुनासिक]);\n   - **अकर्मक क्रिया**: *हमें पैदल **जाना पड़ा**।",
      "examples": [
        {
          "target": "अचानक तेज़ तूफ़ानी बारिश शुरू होने के कारण हमें रास्ते में ही एक पुरानी दुकान के नीचे रुकना पड़ा।",
          "reading": "achanak tez toofaani baarish shuroo hone ke kaaran humein raaste mein hi ek puraani dukaan ke neeche rukna pada. [ətʃaːnək t̪eːz t̪uːfaːniː baːrɪʃ ʃʊruː hoːneː keː kaːrəɳ ɦəmẽː raːst̪eː mẽː ɦiː eːk pʊraːniː d̪ʊkaːn keː niːtʃeː rʊknaː pəɽaː] (uh-CHAH-nuhk tayz too-FAH-nee BAH-reesh shoo-ROO hoh-NAY kay KAH-ruhn hoo-MAYN RAHS-tay mayn hee ayk poo-RAH-nee doo-KAHN kay NEE-chay ROOK-nah PUH-dah)",
          "translation": "Due to sudden onset of heavy stormy rain, we had to stop under an old shop on the way."
        },
        {
          "target": "पास की दवा की दुकान बंद होने की वजह से मुझे आधी रात में बहुत दूर के अस्पताल जाना पड़ा।",
          "reading": "paas ki dava ki dukaan band hone ki vajah se mujhe aadhi raat mein bahut door ke aspataal jaana pada. [paːs kiː d̪əʋaː kiː d̪ʊkaːn bən̪d̪ hoːneː kiː ʋədʒəh seː mʊdʒʱeː aːd̪ʱiː raːt̪ mẽː bəɦʊt̪ d̪uːr keː əspət̪aːl dʒaːnaː pəɽaː] (pahs kee duh-VAH kee doo-KAHN buhnd hoh-NAY kee VUJ-uh say MOO-jhay AH-dhee raht mayn buh-hoot door kay uhs-puh-TAHL jah-NAH PUH-dah)",
          "translation": "Because the nearby pharmacy was closed, I had to go to a very distant hospital in the middle of the night."
        },
        {
          "target": "कार बीच रास्ते में खराब हो जाने पर हमें स्टेशन पहुँचने के लिए अपना भारी सामान खुद उठाना पड़ा।",
          "reading": "car beech raaste mein kharaab ho jaane par humein station pahunchne ke liye apna bhaari saamaan khud uthaana pada. [kaːr biːtʃ raːst̪eː mẽː kʰəraːb hoː dʒaːneː pər ɦəmẽː sʈeːʃən pəɦʊntʃneː keː lɪjeː əpnaː bʱaːriː saːmaːn kʰʊd̪ ʊt̪ʰaːnaː pəɽaː] (kahr beech RAHS-tay mayn khuh-RAHB hoh jah-NAY puhr hoo-MAYN STAY-shuhn puh-HOONCH-nay kay lee-ay uhp-NAH bhah-REE sah-MAHN khood oo-THAH-nah PUH-dah)",
          "translation": "When the car broke down halfway, we had to lift our heavy luggage ourselves to reach the station."
        }
      ],
      "mnemonics": [
        "Past Had to = कर्ता + 'को' + क्रिया-ना + पड़ा! 'ने' कभी नहीं, 'को' हमेशा!"
      ],
      "culturalNotes": [
        "यात्रा या विपत्ति में किसी अवांछित परिस्थिति का वर्णन करते समय 'मजबूरी में रुकना पड़ा' कहना बहुत स्वाभाविक है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "वाक्य «I had to buy a ticket» का शुद्ध हिंदी अनुवाद क्या होगा?",
          "options": [
            "मुझे टिकट खरीदना पड़ा (Mujhe ticket khareedna pada - I had to buy a ticket)",
            "मैंने टिकट खरीदा पड़ा",
            "मुझको टिकट खरीदनी पड़ी",
            "मैं टिकट खरीदना पड़ा"
          ],
          "answerIndex": 0,
          "explanation": "भूतकालिक मजबूरी में कर्ता के साथ 'को' («मुझे») और क्रिया «खरीदना पड़ा» (टिकट पु.) आता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग कर्म 'माफ़ी' के साथ भूतकालिक मजबूरी का रूप क्या होगा?",
          "options": [
            "माँगनी पड़ी (Maangni padi - Had to apologize [fem. agreement])",
            "माँगना पड़ा",
            "माँगने पड़े",
            "माँगती पड़ी"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग कर्म 'माफ़ी' के अनुसार रूप «माँगनी पड़ी» बनेगा।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "भूतकालिक मजबूरी (Had to do) का सर्वथा शुद्ध वाक्य पहचानिए:",
          "options": [
            "विमान निरस्त होने के कारण यात्रियों को पूरी रात हवाई अड्डे पर ही रुकना पड़ा। (Due to flight cancellation, passengers had to stay at the airport all night.)",
            "यात्रियों ने हवाई अड्डे पर रुकना पड़ा।",
            "यात्री हवाई अड्डे रुकना पड़ा था।",
            "यात्रियों को रुकनी पड़ी।"
          ],
          "answerIndex": 0,
          "explanation": "«यात्रियों को... रुकना पड़ा» में संप्रदान कारक और अकर्मक क्रिया का भूतकालिक मजबूरी अन्वय पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u10-l4": {
    "id": "hi-u10-l4",
    "subject": "hindi",
    "unit": 10,
    "lessonNumber": 4,
    "title": "भविष्यकालिक मजबूरी: पड़ेगा / पड़ेगी / पड़ेंगे / पड़ेंगी (Future Compulsion: Will have to)",
    "level": "A2",
    "objective": "भविष्य की अनिवार्य बाध्यता अथवा कानूनी/परिस्थितिजन्य दबाव (Will have to do) को व्यक्त करने वाले 'पड़ेगा / पड़ेगी / पड़ेंगे / पड़ेंगी' के शुद्ध प्रयोग में निपुणता प्राप्त करना।",
    "presentation": {
      "explanation": "भविष्य में किसी नियम, शर्त या परिस्थिति के कारण जो कार्य अनिवार्य रूप से करना ही होगा (Will have to do), उसे 'पड़ेगा' से व्यक्त किया जाता है:\n\n1. निर्माण का सूत्र:\n   - **[कर्ता + को] + [कर्म] + [क्रिया-ना / -नी / -ने] + [पड़ेगा / पड़ेगी / पड़ेंगे / पड़ेंगी]**\n\n2. लिंग-वचन समन्वय (Gender-Number Agreement):\n   - **पुल्लिंग एकवचन कर्म**: *आपको जुर्माना **भरना पड़ेगा** (जुर्माना = पु.एक. → भरना पड़ेगा);\n   - **स्त्रीलिंग एकवचन कर्म**: *उसे कड़ी मेहनत **करनी पड़ेगी** (मेहनत = स्त्री.एक. → करनी पड़ेगी);\n   - **पुल्लिंग बहुवचन कर्म**: *हमें अतिरिक्त रुपये **देने पड़ेंगे** (रुपये = पु.बहु. → देने पड़ेंगे);\n   - **स्त्रीलिंग बहुवचन कर्म**: *उन्हें सभी शर्तें **माननी पड़ेंगी** (शर्तें = स्त्री.बहु. → माननी पड़ेंगी [अनुनासिक]);\n   - **अकर्मक क्रिया**: *आपको वहाँ स्वयं **जाना पड़ेगा**।",
      "examples": [
        {
          "target": "यदि आप यातायात के नियमों का जानबूझकर उल्लंघन करेंगे, तो आपको भारी जुर्माना भरना पड़ेगा।",
          "reading": "yadi aap yaataayaat ke niyamon ka jaanboojhkar ullanghan karenge, to aapko bhaari jurmaana bharna padega. [jəd̪ɪ aːp jaːt̪aːjaːt̪ keː nɪjəmõː kaː dʒaːnbuːdʒʱkər ʊlːəŋɡʱən kərẽːɡeː t̪oː aːpkoː bʱaːriː dʒʊrmaːnaː bʱərnaː pəɽeːɡaː] (YUH-dee ahp yah-tah-YAHT kay NEE-yuh-mohn kah jahn-BOOJH-kuhr ool-LUNG-ghuhn KUH-reng-gay, toh ahp-KOH bhah-REE joor-MAH-nah BHUHR-nah puh-DAY-gah)",
          "translation": "If you deliberately violate traffic rules, you will have to pay a heavy fine."
        },
        {
          "target": "इस कठिन और प्रतिस्पर्धी परीक्षा में सफल होने के लिए सभी विद्यार्थियों को दिन-रात कड़ी मेहनत करनी पड़ेगी।",
          "reading": "is kathin aur pratispardhi pareeksha mein safal hone ke liye sabhi vidyaarthiyon ko din-raat kadi mehnat karni padegi. [ɪs kəʈʰɪn ɔːr prət̪ɪspərd̪ʱiː pəriːkʃaː mẽː səfəl hoːneː keː lɪjeː səbʱiː ʋɪd̪jaːrt̪ʰɪjõː koː d̪ɪn raːt̪ kəɽiː mɛɦnət̪ kərniː pəɽeːɡiː] (ees KUH-theen owr pruh-tee-SPUHR-dhee puh-REEK-shah mayn suh-FUHL hoh-NAY kay lee-ay SUH-bhee veed-YAHR-thee-yohn koh deen-raht kuh-DEE MEH-huht KUHR-nee puh-DAY-gee)",
          "translation": "To succeed in this difficult and competitive examination, all students will have to work hard day and night."
        },
        {
          "target": "नियत समय पर बिजली का बिल जमा न करने की स्थिति में उपभोक्ताओं को अतिरिक्त विलंब शुल्क देना पड़ेगा।",
          "reading": "niyat samay par bijli ka bill jama na karne ki sthiti mein upbhoktaon ko atirikt vilamb shulk dena padega. [nɪjət̪ səməj pər bɪdʒliː kaː bɪl dʒəmaː nə kərneː kiː st̪ʰɪt̪ɪ mẽː ʊpbʱoːkt̪aːõː koː ət̪ɪrɪkt̪ ʋɪləmb ʃʊlk d̪eːnaː pəɽeːɡaː] (NEE-yuht suh-MUHY puhr beej-LEE kah beel JUH-mah nuh KUHR-nay kee STHEE-tee mayn oop-bhohk-TAH-ohn koh uh-tee-REEKT vee-LUHMB shoolk DAY-nah puh-DAY-gah)",
          "translation": "In case of not depositing the electricity bill on scheduled time, consumers will have to pay additional late fee."
        }
      ],
      "mnemonics": [
        "Will have to = कर्ता + 'को' + क्रिया-ना + पड़ेगा/पड़ेगी/पड़ेंगे/पड़ेंगी!"
      ],
      "culturalNotes": [
        "नियमों और वैधानिक चेतावनियों में 'पड़ेगा' का प्रयोग भविष्य की निश्चित बाध्यता दर्शाने के लिए मानक है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग बहुवचन कर्म 'दवाइयाँ' के साथ भविष्यकालिक मजबूरी का सही रूप क्या होगा?",
          "options": [
            "लेनी पड़ेंगी (Leni padengi - Will have to take [fem. plural])",
            "लेना पड़ेगा",
            "लेने पड़ेंगे",
            "लेनी पड़ेगी"
          ],
          "answerIndex": 0,
          "explanation": "स्त्रीलिंग बहुवचन कर्म 'दवाइयाँ' के साथ अनुनासिक युक्त «लेनी पड़ेंगी» आएगा।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «कल आपको इस मामले पर निर्णय ___» में सही भविष्यत् मजबूरी भरिए:",
          "options": [
            "लेना पड़ेगा (Lena padega - Will have to take [masc. decision])",
            "लेनी पड़ेगी",
            "लेने पड़ेंगे",
            "लेता पड़ेगा"
          ],
          "answerIndex": 0,
          "explanation": "निर्णय (पुल्लिंग एकवचन) के साथ «लेना पड़ेगा» प्रयुक्त होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "भविष्यकालिक मजबूरी (Will have to do) का व्याकरणसम्मत शुद्ध वाक्य चुनिए:",
          "options": [
            "यदि आप देर से आएँगे, तो आपको बाहर ही प्रतीक्षा करनी पड़ेगी। (If you come late, you will have to wait outside.)",
            "आपको बाहर प्रतीक्षा करना पड़ेगा।",
            "आप बाहर प्रतीक्षा करनी पड़ेगी।",
            "आपको बाहर प्रतीक्षा करेंगे पड़ेगा।"
          ],
          "answerIndex": 0,
          "explanation": "प्रतीक्षा (स्त्री.) के अनुसार «प्रतीक्षा करनी पड़ेगी» और संप्रदान कर्ता «आपको» पूर्णतः शुद्ध हैं।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u10-l5": {
    "id": "hi-u10-l5",
    "subject": "hindi",
    "unit": 10,
    "lessonNumber": 5,
    "title": "बाध्यता और अनिवार्यता का समग्र तुलनात्मक विश्लेषण (चाहिए vs होना vs पड़ना)",
    "level": "A2",
    "objective": "हिंदी की तीनों प्रमुख बाध्यता संरचनाओं ('चाहिए' = नैतिक सलाह, 'होना' = व्यक्तिगत योजना, 'पड़ना' = बाह्य मजबूरी) के अर्थगत भेदों, काल रूपों और व्यावहारिक प्रयोग में पूर्ण महारत प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में बाध्यता और अनिवार्यता व्यक्त करने के तीन मुख्य व्याकरणिक प्रारूप हैं, जिनके अर्थ में सूक्ष्म व स्पष्ट भेद है:\n\n1. तुलनात्मक विश्लेषण तालिका:\n   - **1. 'चाहिए' (Should / Ought to — नैतिक कर्तव्य / सलाह)**:\n     - *मुझे पढ़ना चाहिए* = I should study (यह अच्छा है, नैतिक दायित्व है)।\n   - **2. 'होना' (Have to / Scheduled Plan — व्यक्तिगत योजना / आंतरिक दायित्व)**:\n     - *मुझे पढ़ना है* = I have to study (यह मेरी आज की कार्यसूची/योजना है)।\n   - **3. 'पड़ना' (Forced to / External Compulsion — बाह्य मजबूरी / अनिच्छा)**:\n     - *मुझे पढ़ना पड़ता है* = I am forced to study (मेरी अनिच्छा या मजबूरी है)।\n\n2. काल के अनुसार 'पड़ना' के रूप:\n   - वर्तमान: पड़ता है / पड़ती है / पड़ते हैं\n   - भूतकाल: पड़ा / पड़ी / पड़े / पड़ीं\n   - भविष्यत्: पड़ेगा / पड़ेगी / पड़ेंगे / पड़ेंगी\n   - अपूर्ण भूतकाल: पड़ रहा था / पड़ रही थी।",
      "examples": [
        {
          "target": "स्वास्थ्य के लिए मुझे प्रतिदिन प्रातःकाल योग करना चाहिए, किंतु अत्यधिक व्यस्तता के कारण मुझे देर रात तक काम करना पड़ता है।",
          "reading": "svaasthya ke liye mujhe pratidin praatahkaal yog karna chaahiye, kintu atyadhik vyastata ke kaaran mujhe der raat tak kaam karna padta hai. [sʋaːst̪ʰjə keː lɪjeː mʊdʒʱeː prət̪ɪd̪ɪn praːt̪əɦkaːl joːɡ kərnaː tʃaːɦɪjeː kɪnt̪ʊ ət̪jəd̪ʱɪk ʋjəst̪ət̪aː keː kaːrəɳ mʊdʒʱeː d̪eːr raːt̪ t̪ək kaːm kərnaː pəɽt̪aː hɛː] (SVAHS-thyuh kay lee-ay MOO-jhay pruh-tee-DEEN prah-tuh-KAHL yohg KUHR-nah CHAH-hee-yay, KEEN-too uht-yudh-HEEK vyuhs-tuh-TAH kay KAH-ruhn MOO-jhay dayr raht tuhk kahm KUHR-nah PUHD-tah hy)",
          "translation": "For health I should do yoga every morning, but due to excessive busyness I have to work late at night."
        },
        {
          "target": "आज दोपहर मुझे कई ज़रूरी दस्तावेज़ तैयार करने हैं, इसलिए मुझे समय पर दफ़्तर पहुँचना पड़ेगा।",
          "reading": "aaj dopahar mujhe kayi zaroori dastaavez taiyaar karne hain, isliye mujhe samay par daftar pahunchna padega. [aːdʒ d̪oːpɛɦər mʊdʒʱeː kəiː zəruːriː d̪əst̪aːʋeːz t̪ɛːjaːr kərneː hɛ̃ː ɪslɪjeː mʊdʒʱeː səməj pər d̪əft̪ər pəɦʊntʃnaː pəɽeːɡaː] (ahj doh-PUH-huhr MOO-jhay kuh-EE zuh-ROO-ree duhs-tah-VAYZ ty-YAHR KUHR-nay hy-n, ees-lee-AY MOO-jhay suh-MUHY puhr DUHF-tuhr puh-HOONCH-nah puh-DAY-gah)",
          "translation": "Today afternoon I have to prepare several important documents, therefore I will have to reach the office on time."
        },
        {
          "target": "इच्छा न होने पर भी सामाजिक शिष्टाचार बनाए रखने के लिए हमें कभी-कभी अनिच्छा से समारोह में जाना पड़ता है।",
          "reading": "ichha na hone par bhi saamaajik shishtaachaar banaye rakhne ke liye humein kabhi-kabhi anichha se samaaroh mein jaana padta hai. [ɪtʃːʰaː nə hoːneː pər bʱiː saːmaːdʒɪk ʃɪʂʈaːtʃaːr bənaːeː rəkʰneː keː lɪjeː ɦəmẽː kəbʱiː kəbʱiː ənɪtʃːʰaː seː səmaːroːɦ mẽː dʒaːnaː pəɽt̪aː hɛː] (EETCH-chah nuh hoh-NAY puhr bhee sah-mah-JEEK sheesh-tah-CHAHR buh-nah-AY RUHKH-nay kay lee-ay hoo-MAYN KUH-bhee-KUH-bhee uh-NEETCH-chah say suh-mah-ROH mayn jah-NAH PUHD-tah hy)",
          "translation": "Even without wanting, to maintain social etiquette we sometimes have to go to gatherings reluctantly."
        }
      ],
      "mnemonics": [
        "चाहिए = Should (नैतिक सलाह); होना = Have to (योजना/कार्यक्रम); पड़ना = Forced to (मजबूरी/दबाव)!"
      ],
      "culturalNotes": [
        "हिंदी साहित्य और चलचित्रों में कर्तव्य और मजबूरी के इस द्वंद्व ('करना चाहिए बनाम करना पड़ता है') को बहुत प्रभावशाली ढंग से प्रस्तुत किया जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "व्यक्तिगत योजना/कार्यसूची (Scheduled Plan) व्यक्त करने हेतु कौन-सा वाक्य उपयुक्त है?",
          "options": [
            "मुझे आज बाज़ार जाना है (Mujhe aaj baazaar jaana hai - I have to go to the market today [plan])",
            "मुझे बाज़ार जाना पड़ता है",
            "मुझे बाज़ार जाना चाहिए था",
            "मैं बाज़ार जाना पड़ा"
          ],
          "answerIndex": 0,
          "explanation": "व्यक्तिगत योजना या कार्यक्रम हेतु «मुझे जाना है» (Infinitive + होना) का प्रयोग होता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "बाह्य दबाव या मजबूरी (External Compulsion) व्यक्त करने वाला वाक्य पहचानिए:",
          "options": [
            "मुझे अनिच्छा से यह काम करना पड़ता है (Mujhe anichha se yah kaam karna padta hai - I am forced to do this work reluctantly)",
            "मुझे यह काम करना है",
            "मुझे यह काम करना चाहिए",
            "मैं यह काम करूँगा"
          ],
          "answerIndex": 0,
          "explanation": "बाह्य दबाव और मजबूरी के लिए «करना पड़ता है» का प्रयोग होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "बाध्यता और मजबूरी के तीनों रूपों के सही समन्वय वाला वाक्य चुनिए:",
          "options": [
            "हमें सच बोलना चाहिए, पर कभी-कभी परिस्थितियों के कारण चुप रहना पड़ता है। (We should speak truth, but sometimes due to circumstances we have to remain silent.)",
            "हम सच बोलना चाहिए पर चुप रहना पड़ता है।",
            "हमें सच बोलना है पर चुप रहना पड़ा था अभी।",
            "हमें सच बोलना पड़ता है और चुप रहना चाहिए।"
          ],
          "answerIndex": 0,
          "explanation": "«सच बोलना चाहिए» (नैतिक सलाह) और «चुप रहना पड़ता है» (परिस्थितिजन्य मजबूरी) का समन्वय अर्थ और व्याकरण दोनों से पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u11-l1": {
    "id": "hi-u11-l1",
    "subject": "hindi",
    "unit": 11,
    "lessonNumber": 1,
    "title": "मूर्त एवं चल संपत्तियों का स्वामित्व: के पास (Alienably possessed physical objects: X ke paas Y hai)",
    "level": "B1",
    "objective": "भौतिक, चल एवं हस्तांतरणीय वस्तुओं के अधिकार व स्वामित्व (Physical Possession) को व्यक्त करने वाले 'कर्ता (तिर्यक) + के पास + वस्तु + होना' के सटीक प्रयोग में प्रवीणता प्राप्त करना।",
    "presentation": {
      "explanation": "जब किसी व्यक्ति के पास कोई भौतिक (Physical), मूर्त (Tangible) या चल संपत्ति/वस्तु हो जिसे वह खरीद, बेच या दे सकता है, तब हिंदी में **'के पास'** परसर्ग का प्रयोग होता है:\n\n1. निर्माण का सूत्र:\n   - **[कर्ता (तिर्यक रूप) + के पास] + [मूर्त वस्तु/संज्ञा] + [है / हैं / था / थे / थी / थीं / होगा]**\n\n2. सर्वनामों के साथ 'के पास':\n   - मैं → **मेरे पास** (I have / In my possession)\n   - तू → **तेरे पास** (You have)\n   - तुम → **तुम्हारे पास** (You have)\n   - आप → **आपके पास** (You have [आदर])\n   - हम → **हमारे पास** (We have)\n   - वह → **उसके पास** (He/She has)\n   - यह → **इसके पास** (This person has)\n   - वे → **उनके पास** (They have)\n   - ये → **इनके पास** (These people have)\n   - कौन → **किसके पास** (Who has?)।\n\n3. संज्ञाओं के साथ 'के पास':\n   - रोहन के पास, अध्यापक के पास, छात्रों के पास।",
      "examples": [
        {
          "target": "मेरे पास इस प्राचीन और ऐतिहासिक विषय से संबंधित कई अत्यंत दुर्लभ और मूल्यवान पुस्तकें हैं।",
          "reading": "mere paas is praacheen aur aitihasik vishay se sambandhit kayi atyant durlabh aur moolyavaan pustakein hain. [meːreː paːs ɪs praːtʃiːn ɔːr ɛːt̪ɪhaːsɪk ʋɪʂəj seː səmbiːnd̪ʱɪt̪ kəiː ət̪jən̪t̪ d̪ʊrləbʱ ɔːr muːljəʋaːn pʊst̪əkẽː hɛ̃ː] (MAY-ray pahs ees prah-CHEEN owr ay-tee-HAH-seek vee-SHUY say suhm-BUHN-dheet kuh-EE uht-YUHNT door-LUHBH owr mool-yuh-VAHN POOS-tuh-kayn hy-n)",
          "translation": "I have several extremely rare and valuable books related to this ancient and historic subject."
        },
        {
          "target": "क्या आपके पास इस नई आधुनिक इमारत का विस्तृत स्थापत्य मानचित्र और मुख्य प्रवेश द्वार की चाबियाँ हैं?",
          "reading": "kya aapke paas is nayi aadhunik imaarat ka vistrit sthaapatya maanchitr aur mukhya pravesh dvaar ki chaabiyaan hain? [kjaː aːpkeː paːs ɪs nəiː aːd̪ʱʊnɪk ɪmaːrət̪ kaː ʋɪstrɪt̪ st̪ʰaːpət̪jə maːntʃɪt̪r ɔːr mʊkʰjə prəʋeːʃ d̪ʋaːr kiː tʃaːbɪjaː̃ hɛ̃ː] (kyah ahp-KAY pahs ees nuh-EE ah-dhoo-NEEK ee-MAH-ruht kah vees-TREE-t sthah-PUHT-yuh mahn-CHEE-truh owr MOOKH-yuh pruh-VAYSH dvahr kee chah-bee-YAHN hy-n)",
          "translation": "Do you have the detailed architectural blueprint of this new modern building and the keys to the main entrance?"
        },
        {
          "target": "हमारे पास पर्वतीय यात्रा के दौरान किसी भी आपातकालीन स्थिति से निपटने के लिए पर्याप्त धन और सुरक्षा उपकरण हैं।",
          "reading": "hamaare paas parvateey yaatra ke dauraan kisi bhi aapaatkaaleen sthiti se nipatne ke liye paryaapt dhan aur suraksha upkaran hain. [ɦəmaːreː paːs pərʋət̪iːj jaːt̪raː keː d̪ɔːraːn kɪsiː bʱiː aːpaːt̪kaːliːn st̪ʰɪt̪ɪ seː nɪpəʈneː keː lɪjeː pərjaːpt̪ d̪ʱən ɔːr sʊrəkʃaː ʊpkərəɳ hɛ̃ː] (huh-MAH-ray pahs puhr-vuh-TEE-yuh YAH-trah kay dow-RAHN kee-SEE bhee ah-paht-kah-LEEN STHEE-tee say NEE-puht-nay kay lee-ay puhr-YAHPT dhuhn owr soo-RUHK-shah oop-KUH-ruhn hy-n)",
          "translation": "We have sufficient money and safety equipment to deal with any emergency situation during the mountain journey."
        }
      ],
      "mnemonics": [
        "Physical things = कर्ता + 'के पास' + वस्तु + है! मेरे पास कार है, उसके पास कलम है!"
      ],
      "culturalNotes": [
        "लेन-देन या दुकान पर पूछने के लिए 'क्या आपके पास छुट्टे रुपये हैं?' (Do you have change?) अत्यंत सामान्य व्यावहारिक वाक्य है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "भौतिक वस्तु 'कंप्यूटर' के स्वामित्व के लिए कौन-सा वाक्य पूर्णतः शुद्ध है?",
          "options": [
            "मेरे पास एक नया कंप्यूटर है (Mere paas ek naya computer hai - I have a new computer)",
            "मेरा एक नया कंप्यूटर है (अस्वाभाविक स्वामित्व)",
            "मुझको एक नया कंप्यूटर है (रोग/अनुभूति का अशुद्ध परसर्ग)",
            "मुझमें एक नया कंप्यूटर है (आंतरिक गुण का अनुपयुक्त प्रयोग)"
          ],
          "answerIndex": 0,
          "explanation": "भौतिक और चल वस्तु के स्वामित्व हेतु «मेरे पास» का प्रयोग शुद्ध है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «क्या ___ पास इस प्रश्न का उत्तर है?» में सही सर्वनाम रूप भरिए:",
          "options": [
            "आपके (Aapke paas - Do you have [oblique with ke paas])",
            "आपको (Dative experiencer - incorrect for physical item)",
            "आपका (Genitive pronoun - missing ke paas)",
            "आपमें (Locative quality marker - unsuitable for physical possession)"
          ],
          "answerIndex": 0,
          "explanation": "'के पास' परसर्ग के साथ सर्वनाम का तिर्यक संबंध रूप «आपके» आता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "मूर्त वस्तु के स्वामित्व (Physical Possession) का सर्वथा शुद्ध वाक्य पहचानिए:",
          "options": [
            "रोहन के पास परीक्षा की तैयारी के लिए सभी आवश्यक पुस्तकें और नोट्स हैं। (Rohan has all necessary books and notes for exam preparation.)",
            "रोहन का परीक्षा की पुस्तकें हैं।",
            "रोहन को पुस्तकें हैं।",
            "रोहन में पुस्तकें हैं।"
          ],
          "answerIndex": 0,
          "explanation": "«रोहन के पास... पुस्तकें और नोट्स हैं» में मूर्त स्वामित्व की संरचना पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u11-l2": {
    "id": "hi-u11-l2",
    "subject": "hindi",
    "unit": 11,
    "lessonNumber": 2,
    "title": "पारिवारिक संबंध एवं मित्र: का / के / की (Inalienable Kinship Relations: X ka/ke/ki Y hai)",
    "level": "B1",
    "objective": "पारिवारिक रिश्तों (माता, पिता, भाई, बहन, संतान) और मित्रों को व्यक्त करने हेतु 'का / के / की' के लिंग-वचन समन्वय और 'के पास' के निषेध नियम को समझना।",
    "presentation": {
      "explanation": "हिंदी में माता-पिता, भाई-बहन, संतान अथवा मित्रों जैसे अटूट मानवीय संबंधों (Inalienable Kinship) के लिए **'के पास' का प्रयोग कभी नहीं होता**। इनके लिए संबंध कारक **'का / के / की'** का प्रयोग किया जाता है:\n\n1. निर्माण का सूत्र:\n   - **[कर्ता] + [का / के / की] + [संबंधी] + [है / हैं]**\n\n2. 'का / के / की' का लिंग-वचन समन्वय:\n   - **पुल्लिंग एकवचन संबंधी**: *उसका एक भाई है* (भाई = पु.एक. → उसका भाई);\n   - **पुल्लिंग बहुवचन संबंधी**: *मेरे दो भाई हैं* (भाई = पु.बहु. → मेरे भाई) — (सावधान: 'मेरे पास दो भाई हैं' सर्वथा अशुद्ध है!);\n   - **स्त्रीलिंग संबंधी**: *मेरी एक छोटी बहन है* (बहन = स्त्री. → मेरी बहन);\n   - **आदरणीय संबंधी**: *अमित के पिता जी डॉक्टर हैं* (आदर बहुवचन → के पिता जी)।\n\n3. पक्के मित्र और रिश्तेदार:\n   - हमारे कई रिश्तेदार दिल्ली में रहते हैं;\n   - रोहन के तीन पक्के मित्र हैं।",
      "examples": [
        {
          "target": "मेरे बड़े भाई भारतीय प्रशासनिक सेवा में एक अत्यंत कर्मठ, ईमानदार और कर्तव्यनिष्ठ अधिकारी हैं।",
          "reading": "mere bade bhai bhaarateey prashaasnik seva mein ek atyant karmath, eemaandaar aur kartavyanishth adhikaari hain. [meːreː bəɽeː bʱaːiː bʱaːrt̪iːj prəʃaːsnɪk seːʋaː mẽː eːk ət̪jən̪t̪ kərməʈʰ iːmaːnd̪aːr ɔːr kərt̪əʋjənɪʂʈʰ əd̪ʱɪkaːriː hɛ̃ː] (MAY-ray BUH-day bhah-EE bhahr-TEE-yuh pruh-SHAH-sneek SAY-vah mayn ayk uht-YUHNT KUHR-muhth, ee-mahn-DAHR owr kuhr-tuhv-yuh-NEESH-th uh-dhee-KAH-ree hy-n)",
          "translation": "My elder brother is an extremely hardworking, honest, and dutiful officer in the Indian Administrative Service."
        },
        {
          "target": "क्या आपकी कोई छोटी बहन या चचेरा भाई भी इसी प्रसिद्ध और प्रतिष्ठित विश्वविद्यालय में अध्ययनरत है?",
          "reading": "kya aapki koyi chhoti bahan ya chachera bhai bhi isi prasiddh aur pratishthit vishvavidyaalay mein adhyayanrat hai? [kjaː aːpkiː koːiː tʃʰoːʈiː bəɦən jaː tʃətʃeːraː bʱaːiː bʱiː ɪsiː prəsɪd̪ːʱ ɔːr prət̪ɪʂʈʰɪt̪ ʋɪʃʋəʋɪd̪jaːləj mẽː əd̪ʱjəjənrət̪ hɛː] (kyah ahp-KEE koh-EE CHHOH-tee BUH-huhn yah chuh-CHAY-rah bhah-EE bhee ees-EE pruh-SEETH-dh owr pruh-teesh-THEET veesh-vuh-veed-YAH-luy mayn uhdh-yuh-yuhn-RUHT hy)",
          "translation": "Is any younger sister or cousin of yours also studying in this renowned and prestigious university?"
        },
        {
          "target": "रोहन के दो अत्यंत बुद्धिमान पुत्र और एक होनहार पुत्री विदेश में उच्च शिक्षा प्राप्त कर रहे हैं।",
          "reading": "Rohan ke do atyant buddhimaan putr aur ek honhaar putri videsh mein uchh shiksha praapt kar rahe hain. [roːɦən keː d̪oː ət̪jən̪t̪ bʊd̪ːʱɪmaːn pʊt̪r ɔːr eːk hoːnɦaːr pʊt̪riː ʋɪd̪eːʃ mẽː ʊtʃːʰ ʃɪkʃaː praːpt̪ kər rəɦeː hɛ̃ː] (ROH-huhn kay doh uht-YUHNT bood-dhee-MAHN pootr owr ayk hohn-HAHR POO-tree vee-DAYSH mayn ootch SHEEK-shah PRAHPT kuhr ruh-HAY hy-n)",
          "translation": "Rohan's two extremely intelligent sons and one promising daughter are pursuing higher education abroad."
        }
      ],
      "mnemonics": [
        "Family & Friends = का/के/की (मेरे दो भाई हैं)! परिवार में 'के पास' NO NEVER!"
      ],
      "culturalNotes": [
        "भारतीय पारिवारिक व्यवस्था में रिश्तों के विशिष्ट नाम होते हैं जैसे: चाचा (Father's younger brother), मामा (Mother's brother), मौसी (Mother's sister), बुआ (Father's sister)।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "वाक्य «I have two sisters» का प्रामाणिक व्याकरणिक हिंदी अनुवाद क्या होगा?",
          "options": [
            "मेरी दो बहनें हैं (Meri do bahnein hain - I have two sisters)",
            "मेरे पास दो बहनें हैं (पारिवारिक रिश्ते में 'के पास' का अमानक प्रयोग)",
            "मुझको दो बहनें हैं (अनुभूति सूचक परसर्ग की अशुद्धि)",
            "मेरे में दो बहनें हैं (स्थान/गुण सूचक परसर्ग का गलत रूप)"
          ],
          "answerIndex": 0,
          "explanation": "पारिवारिक रिश्तों के लिए 'के पास' नहीं बल्कि संबंध कारक «मेरी दो बहनें हैं» आता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «अमित ___ दो बेटे हैं» में सही संबंध कारक भरिए:",
          "options": [
            "के (Amit ke do bete hain - Amit has two sons [masc. plural])",
            "का (Masculine singular - number mismatch with bete)",
            "की (Feminine marker - gender mismatch with bete)",
            "के पास (Physical possession marker - forbidden for family relations)"
          ],
          "answerIndex": 0,
          "explanation": "पुल्लिंग बहुवचन संबंधी 'बेटे' के साथ संबंध कारक «के» प्रयुक्त होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "पारिवारिक संबंधों के अन्वय वाला सर्वथा शुद्ध वाक्य चुनिए:",
          "options": [
            "मेरे चाचा जी के तीन बच्चे हैं जो सब डॉक्टर हैं। (My uncle has three children who are all doctors.)",
            "मेरे चाचा जी के पास तीन बच्चे हैं।",
            "मेरे चाचा जी को तीन बच्चे हैं।",
            "चाचा जी में तीन बच्चे हैं।"
          ],
          "answerIndex": 0,
          "explanation": "«चाचा जी के तीन बच्चे हैं» में पारिवारिक संबंध का मानक अन्वय पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u11-l3": {
    "id": "hi-u11-l3",
    "subject": "hindi",
    "unit": 11,
    "lessonNumber": 3,
    "title": "शारीरिक अंग एवं अमूर्त विशेषताएं: का / के / की एवं में (Body Parts & Abstract Qualities)",
    "level": "B1",
    "objective": "प्राणियों के शारीरिक अंगों (Inalienable Body Parts) और व्यक्तियों के आंतरिक सद्गुणों/अमूर्त विशेषताओं (Abstract Virtues with में) की वाक्य संरचना में निपुणता प्राप्त करना।",
    "presentation": {
      "explanation": "शारीरिक अंग और आंतरिक अमूर्त गुण भी किसी व्यक्ति के अभिन्न अंग होते हैं, अतः इनमें विशेष परसर्ग प्रयुक्त होते हैं:\n\n1. शारीरिक अंग (Body Parts — Inalienable Whole-Part Relation):\n   - शारीरिक अंगों के लिए **'का / के / की'** का प्रयोग होता है (के पास नहीं!):\n     - *हाथी की लंबी सूँड होती है* (An elephant has a long trunk);\n     - *गाय के चार पैर और दो सींग होते हैं* (A cow has four legs and two horns);\n     - *मेरी आँखें दुख रही हैं* (My eyes are aching)।\n\n2. आंतरिक अमूर्त गुण / प्रतिभा / स्वभाव (Abstract Qualities with 'में'):\n   - किसी व्यक्ति के सद्गुण, साहस, प्रतिभा या स्वभाव के लिए **'में' (In)** परसर्ग प्रयुक्त होता है:\n     - *उसमें बहुत साहस और धैर्य है* (He has immense courage and patience);\n     - *आपमें गजब की प्रतिभा है* (You have remarkable talent);\n     - *रोहन में नेतृत्व के बेहतरीन गुण हैं* (Rohan has excellent leadership qualities)।",
      "examples": [
        {
          "target": "विशालकाय हाथी के दो लंबे चमकीले दाँत और एक अत्यंत शक्तिशाली एवं लचीली सूँड होती है।",
          "reading": "vishaalakaay haathi ke do lambe chamkeele daant aur ek atyant shaktishaali evam lacheeli soond hoti hai. [ʋɪʃaːləkaːj ɦaːt̪ʰiː keː d̪oː ləmbeː tʃəmkiːleː d̪aːn̪t̪ ɔːr eːk ət̪jən̪t̪ ʃəkt̪ɪʃaːliː eːʋəm lətʃiːliː suː̃ɖ hoːt̪iː hɛː] (vee-shah-luh-KAH-ee HAH-thee kay doh LUHM-bay chuhm-KEE-lay dahnt owr ayk uht-YUHNT shuhk-tee-SHAH-lee AY-vuhm luh-CHEE-lee SOOND hoh-TEE hy)",
          "translation": "A gigantic elephant has two long shiny tusks and an extremely powerful and flexible trunk."
        },
        {
          "target": "उस युवा होनहार वैज्ञानिक में सबसे कठिन वैज्ञानिक चुनौतियों का सामना करने का असीम धैर्य और साहस है।",
          "reading": "us yuva honhaar vaigyaanik mein sabse kathin vaigyaanik chunautiyon ka saamna karne ka aseem dhairy aur saahas hai. [ʊs jʊʋaː hoːnɦaːr ʋɛːɡjaːnɪk mẽː səbseː kəʈʰɪn ʋɛːɡjaːnɪk tʃʊnɔːt̪ɪjõː kaː saːmnaː kərneː kaː əsiːm d̪ʱɛːrjə ɔːr saːɦəs hɛː] (oos YOO-vah hohn-HAHR vyg-YAH-neek mayn SUHB-say KUH-theen vyg-YAH-neek choo-now-TEE-yohn kah sahm-NAH KUHR-nay kah uh-SEEM DHY-ryuh owr SAH-huhs hy)",
          "translation": "That promising young scientist has boundless patience and courage to face the most difficult scientific challenges."
        },
        {
          "target": "इस प्राचीन और विशाल बरगद के पेड़ की विशाल शाखाएं और गहरी जड़ें धरती में बहुत दूर तक फैली हुई हैं।",
          "reading": "is praacheen aur vishaal bargad ke ped ki vishaal shaakhaayein aur gehri jadein dharti mein bahut door tak phaili huyi hain. [ɪs praːtʃiːn ɔːr ʋɪʃaːl bərɡəd̪ keː peːɽ kiː ʋɪʃaːl ʃaːkʰaːẽː ɔːr ɡɛɦriː dʒəɽẽː d̪ʱərt̪iː mẽː bəɦʊt̪ d̪uːr t̪ək pʰɛːliː hʊiː hɛ̃ː] (ees prah-CHEEN owr vee-SHAHL BUHR-guhd kay payd kee vee-SHAHL shah-KHAH-ayn owr GUH-h-ree JUH-dayn dhuhr-TEE mayn buh-hoot door tuhk FY-lee HOO-yee hy-n)",
          "translation": "The massive branches and deep roots of this ancient and giant banyan tree are spread very far into the earth."
        }
      ],
      "mnemonics": [
        "Body parts = का/के/की (हाथी की सूँड); Virtues/Talent = में (उसमें साहस है)!"
      ],
      "culturalNotes": [
        "हिंदी मुहावरों में शारीरिक अंगों और आंतरिक गुणों का गहरा संबंध है, जैसे: 'सीने में हिम्मत होना', 'आँखों में चमक होना'।",
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "अमूर्त गुण 'प्रतिभा' के संदर्भ में कौन-सा वाक्य शुद्ध है?",
          "options": [
            "आपमें बहुत प्रतिभा है (Aapmein bahut pratibha hai - You have immense talent [internal quality])",
            "आपके पास बहुत प्रतिभा है (आंतरिक गुण में 'के पास' का अनुचित रूप)",
            "आपका बहुत प्रतिभा है (लिंग-कारक की असंगत रचना)",
            "आपको बहुत प्रतिभा है (अनुभूति कारक का अनुपयुक्त प्रयोग)"
          ],
          "answerIndex": 0,
          "explanation": "आंतरिक सद्गुणों और प्रतिभा के लिए «आपमें» (में परसर्ग) का प्रयोग मानक है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «हिरन ___ चार पतले पैर और दो सुंदर आँखें होती हैं» में सही परसर्ग भरिए:",
          "options": [
            "के (Hiran ke chaar patle pair - Deer has four slender legs [body parts])",
            "के पास (Alienable possession - incorrect for permanent body parts)",
            "में (In - incorrect locative for external body features)",
            "को (Dative - incorrect experiencer case for organic limbs)"
          ],
          "answerIndex": 0,
          "explanation": "शारीरिक अंगों के लिए संबंध कारक «के» आता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "शारीरिक अंग व आंतरिक गुणों के सही समन्वय वाला वाक्य चुनिए:",
          "options": [
            "मोर के पंख बहुत सुंदर होते हैं और उस पक्षी में अद्भुत आकर्षण होता है। (Peacock has very beautiful feathers and that bird has wonderful charm.)",
            "मोर के पास पंख बहुत सुंदर होते हैं।",
            "मोर को पंख होते हैं।",
            "मोर में पंख सुंदर होते हैं।"
          ],
          "answerIndex": 0,
          "explanation": "«मोर के पंख» (शारीरिक अंग) और «पक्षी में आकर्षण» (आंतरिक गुण) दोनों का प्रयोग व्याकरणिक रूप से उत्कृष्ट है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u11-l4": {
    "id": "hi-u11-l4",
    "subject": "hindi",
    "unit": 11,
    "lessonNumber": 4,
    "title": "बीमारियाँ, अनुभूतियाँ और संवेदनाएं: को (Physical Ailments, Sensations & Feelings with को)",
    "level": "B1",
    "objective": "शारीरिक रोगों (बुखार, सिरदर्द, जुकाम) और तात्कालिक संवेदनाओं (भूख, प्यास, ठंड, नींद, क्रोध) को व्यक्त करने वाले संप्रदान कर्ता (Dative Experiencer — कर्ता + को) की संरचना में निपुणता प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में बीमारियाँ (Illnesses), शारीरिक अवस्थाएं (Physical states) और तात्कालिक संवेदनाएं (Sensations) किसी व्यक्ति के स्वामित्व में नहीं होतीं, बल्कि वह उनका अनुभव (Experience) करता है। अतः कर्ता के साथ **'को'** लगता है:\n\n1. निर्माण का सूत्र:\n   - **[कर्ता + को] + [रोग / संवेदना] + [है / था / लगा है / आ रहा है]**\n\n2. प्रमुख संवेदनात्मक अभिव्यक्तियाँ:\n   - **रोग / कष्ट**: मुझे बुखार है (I have a fever); उसे सिरदर्द है (He has a headache);\n   - **भूख / प्यास**: बच्चों को भूख लगी है (Children are hungry); हमें प्यास लगी है (We are thirsty);\n   - **तापमान / ठंड**: मुझे ठंड लग रही है (I am feeling cold); उसे गर्मी लग रही है;\n   - **नींद / आलस्य**: रोहन को नींद आ रही है (Rohan is feeling sleepy);\n   - **क्रोध / दया**: पिताजी को क्रोध आया (Father felt angry); मुझे उस पर दया आई।\n\n3. अशुद्ध प्रयोग से बचें:\n   - 'मेरे पास बुखार है' या 'मेरा बुखार है' सर्वथा अशुद्ध हैं; हमेशा **'मुझे बुखार है'** ही शुद्ध है।",
      "examples": [
        {
          "target": "मौसम में अचानक परिवर्तन और ठंडी हवाओं के कारण मुझे कल रात से बहुत तेज़ बुखार और सिरदर्द है।",
          "reading": "mausam mein achanak parivartan aur thandi havaaon ke kaaran mujhe kal raat se bahut tez bukhaar aur sirdard hai. [mɔːsəm mẽː ətʃaːnək pərɪʋərt̪ən ɔːr t̪ʰəɳɖiː ɦəʋaːõː keː kaːrəɳ mʊdʒʱeː kəl raːt̪ seː bəɦʊt̪ t̪eːz bʊkʰaːr ɔːr sɪrd̪ərd̪ hɛː] (MOW-suhm mayn uh-CHAH-nuhk puh-ree-VUHR-tuhn owr THUHN-dee huh-VAH-ohn kay KAH-ruhn MOO-jhay kuhl raht say buh-hoot tayz boo-KHAHR owr seer-DUHRD hy)",
          "translation": "Due to sudden change in weather and cold winds, I have a very high fever and headache since last night."
        },
        {
          "target": "दिनभर की लंबी और थकाऊ पैदल यात्रा के बाद सभी छोटे बच्चों को बहुत ज़ोर की भूख और प्यास लगी है।",
          "reading": "dinbhar ki lambi aur thakaaoo paidal yaatra ke baad sabhi chhote bachon ko bahut zor ki bhookh aur pyaas lagi hai. [d̪ɪnbʱər kiː ləmbiː ɔːr t̪ʰəkaːuː pɛːd̪əl jaːt̪raː keː baːd̪ səbʱiː tʃʰoːʈeː bətʃːõː koː bəɦʊt̪ zoːr kiː bʱuːkʰ ɔːr pjaːs ləɡiː hɛː] (DEEN-bhuhr kee LUHM-bee owr thuh-KAH-oo py-DUHL YAH-trah kay bahd SUH-bhee CHHOH-tay BUHTCH-chohn koh buh-hoot zohr kee BHOOKH owr PYAHS LUH-gee hy)",
          "translation": "After the daylong long and exhausting walking journey, all the little children are feeling very hungry and thirsty."
        },
        {
          "target": "अत्यधिक मानसिक तनाव और चिंता के कारण रोहन को पिछले कई दिनों से रात में ठीक से नींद नहीं आ रही है।",
          "reading": "atyadhik maanasik tanaav aur chinta ke kaaran Rohan ko pichhle kayi dinon se raat mein theek se neend nahin aa rahi hai. [ət̪jəd̪ʱɪk maːnsɪk t̪ənaːʋ ɔːr tʃɪn̪t̪aː keː kaːrəɳ roːɦən koː pɪtʃʰleː kəiː d̪ɪnõː seː raːt̪ mẽː t̪ʰiːk seː niːn̪d̪ nəɦĩː aː rəɦiː hɛː] (uht-yudh-HEEK MAHN-seek tuh-NAHV owr CHEEN-tah kay KAH-ruhn ROH-huhn koh PEECHH-lay kuh-EE DEE-nohn say raht mayn theek say NEEND nuh-HEEN ah ruh-HEE hy)",
          "translation": "Due to excessive mental stress and anxiety, Rohan has not been getting proper sleep at night for the past several days."
        }
      ],
      "mnemonics": [
        "Illness & Sensations = कर्ता + 'को' + बुखार/भूख/नींद है! 'मेरे पास बुखार है' कभी मत कहो!"
      ],
      "culturalNotes": [
        "हालचाल पूछते समय 'आपको क्या तकलीफ है?' (What ailment/trouble do you have?) कहना अत्यंत शिष्ट और सहानुभूतिपूर्ण प्रश्न है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "वाक्य «I have a headache» का शुद्ध व्याकरणिक अनुवाद क्या है?",
          "options": [
            "मुझे सिरदर्द है (Mujhe sirdard hai - I have a headache [dative experiencer])",
            "मेरे पास सिरदर्द है (शारीरिक कष्ट में 'के पास' का अमानक प्रयोग)",
            "मेरा सिरदर्द है (स्वामित्व परसर्ग का असंगत रूप)",
            "मुझमें सिरदर्द है (गुण सूचक परसर्ग की अशुद्धि)"
          ],
          "answerIndex": 0,
          "explanation": "शारीरिक पीड़ा और रोग के लिए संप्रदान कर्ता «मुझे सिरदर्द है» का प्रयोग होता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «यात्रियों ___ बहुत प्यास लगी थी» में सही परसर्ग भरिए:",
          "options": [
            "को (Yaatriyon ko pyaas lagi thi - Passengers felt thirsty [experiencer marker])",
            "के पास (Physical marker - cannot possess thirst as an object)",
            "का (Genitive marker - cannot link subject directly to sensation)",
            "में (Locative marker - incorrect container case for feeling thirst)"
          ],
          "answerIndex": 0,
          "explanation": "प्यास की अनुभूति के लिए कारक «को» आता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "संवेदना और रोग की दृष्टि से पूर्णतः शुद्ध वाक्य पहचानिए:",
          "options": [
            "मरीज़ को कल रात से तेज़ जुकाम और खाँसी है। (The patient has severe cold and cough since last night.)",
            "मरीज़ के पास तेज़ जुकाम और खाँसी है।",
            "मरीज़ का तेज़ जुकाम है।",
            "मरीज़ में जुकाम है।"
          ],
          "answerIndex": 0,
          "explanation": "«मरीज़ को... जुकाम और खाँसी है» में रोग के अनुभविता कर्ता की संरचना पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u11-l5": {
    "id": "hi-u11-l5",
    "subject": "hindi",
    "unit": 11,
    "lessonNumber": 5,
    "title": "स्वामित्व और अधिकार के सभी रूपों का समेकन व तुलनात्मक अभ्यास (के पास vs का/की vs में vs को)",
    "level": "B1",
    "objective": "अधिकार, संबंध, शारीरिक अंग, सद्गुण एवं अनुभूतियों की पाँचों श्रेणियों ('के पास', 'का/के/की', 'में', 'को') के सटीक विभेद और संश्लिष्ट वाक्य निर्माण में संपूर्ण महारत हासिल करना।",
    "presentation": {
      "explanation": "स्वामित्व, संबंध और विशेषताओं के पाँचों व्याकरणिक प्रतिमानों की समग्र तुलनात्मक तालिका:\n\n1. पाँचों श्रेणियों का वर्गीकरण:\n   - **1. मूर्त/चल वस्तु (Physical Object)**: *के पास*\n     - मेरे पास गाड़ी है, उसके पास पैसे हैं।\n   - **2. पारिवारिक संबंध (Kinship & Friends)**: *का / के / की*\n     - मेरी दो बहनें हैं, उसके तीन मित्र हैं।\n   - **3. शारीरिक अंग (Body Parts)**: *का / के / की*\n     - हाथी की सूँड होती है, मेरी आँखें नीली हैं।\n   - **4. आंतरिक सद्गुण व अमूर्त गुण (Abstract Qualities)**: *में*\n     - उसमें ईमानदारी है, आपमें धैर्य है।\n   - **5. रोग, संवेदना व मानसिक अवस्था (Illnesses/Sensations)**: *को*\n     - मुझे बुखार है, बच्चों को भूख लगी है।",
      "examples": [
        {
          "target": "मेरे पास अध्ययन के लिए सभी महत्वपूर्ण पुस्तकें हैं, मेरे दो भाई दिल्ली में हैं, और मुझे इस शोध कार्य में बहुत गहरी रुचि है।",
          "reading": "mere paas adhyayan ke liye sabhi mahatvapoorna pustakein hain, mere do bhai Dilli mein hain, aur mujhe is shodh kaary mein bahut gehri ruchi hai. [meːreː paːs əd̪ʱjəjən keː lɪjeː səbʱiː məɦət̪ʋəpuːrɳə pʊst̪əkẽː hɛ̃ː meːreː d̪oː bʱaːiː d̪ɪlːiː mẽː hɛ̃ː ɔːr mʊdʒʱeː ɪs ʃoːd̪ʱ kaːrjə mẽː bəɦʊt̪ ɡɛɦriː rʊtʃɪ hɛː] (MAY-ray pahs uhdh-YUH-yuhn kay lee-ay SUH-bhee muh-huht-vuh-POOR-nuh POOS-tuh-kayn hy-n, MAY-ray doh bhah-EE DEEL-lee mayn hy-n, owr MOO-jhay ees shohdh KAHR-yuh mayn buh-hoot GUH-h-ree ROO-chee hy)",
          "translation": "I have all important books for study, I have two brothers in Delhi, and I have very deep interest in this research work."
        },
        {
          "target": "यद्यपि उस व्यापारी के पास अपार धन-दौलत है, फिर भी उसके मन में तनिक भी अहंकार या घमंड नहीं है।",
          "reading": "yadyapi us vyaapaari ke paas apaar dhan-daulat hai, phir bhi uske man mein tanik bhi ahankaar ya ghamand nahin hai. [jəd̪jəpɪ ʊs ʋjaːpaːriː keː paːs əpaːr d̪ʱən d̪ɔːlət̪ hɛː pʰɪr bʱiː ʊskeː mən mẽː t̪ənɪk bʱiː əɦəŋkaːr jaː ɡʱəməɳɖ nəɦĩː hɛː] (YUD-yuh-pee oos vyah-PAH-ree kay pahs uh-PAHR dhuhn-DOW-luht hy, feer bhee oos-KAY muhn mayn TUH-neek bhee uh-huhng-KAHR yah ghuh-MUHND nuh-HEEN hy)",
          "translation": "Although that merchant has boundless wealth, still there is not the slightest arrogance or pride in his heart."
        },
        {
          "target": "जब मरीज़ को अचानक तेज़ बुखार हुआ, तब डॉक्टर ने कहा कि उसके पास तुरंत अस्पताल में भर्ती होने के अतिरिक्त कोई विकल्प नहीं था।",
          "reading": "jab mareez ko achanak tez bukhaar hua, tab doctor ne kaha ki uske paas turant aspataal mein bharti hone ke atirikt koyi vikalp nahin tha. [dʒəb məriːz koː ətʃaːnək t̪eːz bʊkʰaːr hʊaː t̪əb ɖɔːkʈər neː kəɦaː kɪ ʊskeː paːs t̪ʊrən̪t̪ əspət̪aːl mẽː bʱərt̪iː hoːneː keː ət̪ɪrɪkt̪ koːiː ʋɪkəlp nəɦĩː t̪ʰaː] (juhb muh-REEZ koh uh-CHAH-nuhk tayz boo-KHAHR HOO-ah, tuhb DAHK-tuhr nay KUH-hah kee oos-KAY pahs TOO-ruhnt uhs-puh-TAHL mayn bhuhr-TEE hoh-NAY kay uh-tee-REEKT koh-EE vee-KUHLP nuh-HEEN thah)",
          "translation": "When the patient suddenly got high fever, then the doctor said that he had no option other than getting admitted to the hospital immediately."
        }
      ],
      "mnemonics": [
        "कार = के पास; भाई = का/के/की; सूँड = का/के/की; साहस = में; बुखार = को! पाँचों का भेद याद रखो!"
      ],
      "culturalNotes": [
        "हिंदी की यह पाँच-स्तरीय अधिकार व्यवस्था भारतीय भाषा-चिंतन में व्यक्ति, वस्तु, संबंध और चेतना के सूक्ष्म दार्शनिक अंतर को दर्शाती है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "पाँचों स्वामित्व संरचनाओं में से 'भाई-बहन' के लिए कौन-सा प्रारूप प्रयुक्त होता है?",
          "options": [
            "का / के / की (जैसे: मेरे दो भाई हैं - Kinship relation)",
            "के पास (Reserved only for alienable physical goods like car, book)",
            "में (Reserved for internal virtues and talents like courage, patience)",
            "को (Reserved for sensations, diseases, and hunger/thirst)"
          ],
          "answerIndex": 0,
          "explanation": "पारिवारिक रिश्तों के लिए संबंध कारक «का / के / की» प्रयुक्त होता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «उस बालक ___ बहुत प्रतिभा है, किंतु आज उसे बुखार है» में रिक्त स्थान का सही परसर्ग क्या है?",
          "options": [
            "में (Us baalak mein - In that boy [talent/virtue])",
            "के पास (Physical possession - talent is not a portable tool)",
            "का (Genitive relation - fails to denote internal attribute)",
            "को (Experiencer marker - talent is not an illness)"
          ],
          "answerIndex": 0,
          "explanation": "प्रतिभा (आंतरिक गुण) के लिए «में» परसर्ग आता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "स्वामित्व और अधिकार के सभी पाँचों रूपों के शुद्ध प्रयोग वाला वाक्य चुनिए:",
          "options": [
            "मेरे पास पर्याप्त साधन हैं, मेरी एक बहन है, मुझमें आत्मविश्वास है और मुझे कोई बीमारी नहीं है। (I have sufficient means, I have a sister, I have self-confidence, and I have no illness.)",
            "मेरे पास एक बहन है और मेरे पास आत्मविश्वास है।",
            "मुझको साधन हैं और मेरी बीमारी है।",
            "मुझमें साधन हैं और मेरे पास बीमारी है।"
          ],
          "answerIndex": 0,
          "explanation": "«मेरे पास साधन हैं» (मूर्त), «मेरी बहन है» (रिश्ता), «मुझमें आत्मविश्वास है» (गुण), और «मुझे बीमारी नहीं है» (अनुभूति) चारों का समन्वय शत-प्रतिशत शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u12-l1": {
    "id": "hi-u12-l1",
    "subject": "hindi",
    "unit": 12,
    "lessonNumber": 1,
    "title": "समाप्ति और निश्चितता: 'जाना' रंजक क्रिया (Completion & Irreversibility with जाना)",
    "level": "B1",
    "objective": "मुख्य धातु के साथ 'जाना' रंजक क्रिया जोड़कर कार्य की संपूर्ण समाप्ति (Completion) व अपरिवर्तनीयता व्यक्त करना और भूतकाल में 'ने' के विलोप नियम को सिद्ध करना।",
    "presentation": {
      "explanation": "हिंदी में **संयुक्त क्रिया** (Compound Verb) का निर्माण **'मुख्य क्रिया की मूल धातु + सहायक/रंजक क्रिया'** से होता है।\n\n1. 'जाना' रंजक क्रिया (Vector Verb 'जाना'):\n   - जब किसी कार्य के पूर्णतः समाप्त होने, स्थिति में अचानक व अपरिवर्तनीय बदलाव (Irreversible change) या प्रभाव के पूर्ण क्षय को दर्शाना हो, तब 'जाना' का प्रयोग होता है:\n     - **खा जाना** (to eat up / devour completely)\n     - **पी जाना** (to drink up)\n     - **सो जाना** (to fall asleep)\n     - **बैठ जाना** (to sit down)\n     - **टूट जाना** (to break down completely)\n     - **भूल जाना** (to forget completely)\n     - **मर जाना** (to pass away)।\n\n2. 'ने' परसर्ग का अत्यंत महत्वपूर्ण नियम (Zero Ergative 'ने' Rule):\n   - संयुक्त क्रिया की सकर्मकता/अकर्मकता का निर्धारण **रंजक (दूसरी) क्रिया** करती है। चूँकि 'जाना' अकर्मक है, अतः 'जाना' से बनी संयुक्त क्रियाओं के भूतकाल में **'ने' कभी नहीं लगता**:\n     - *रोहन सारा खाना खा गया* (Rohan ate up all the food) — ('रोहन ने खा गया' सर्वथा अशुद्ध है!)\n     - *मैं उसका नाम भूल गया* (I forgot his name)।",
      "examples": [
        {
          "target": "भूखा नन्हा बालक मेज़ पर रखी हुई सभी ताज़ी गर्म रोटियाँ और स्वादिष्ट सब्ज़ी कुछ ही मिनटों में खा गया।",
          "reading": "bhookha nanha baalak mez par rakhi huyi sabhi taazi garm rotiyaan aur svaadisht sabzi kuchh hi minton mein kha gaya. [bʱuːkʰaː nənɦaː baːlək meːz pər rəkʰiː hʊiː səbʱiː t̪aːziː ɡərm roːʈɪjaː̃ ɔːr sʋaːd̪ɪʂʈ səbziː kʊtʃʰ ɦiː mɪnʈõː mẽː kʰaː ɡəjaː] (BHOOKH-hah NUHN-hah BAH-luhk mayz puhr RUHKH-ee HOO-yee SUH-bhee TAH-zee guhrm roh-tee-YAHN owr svah-DEESHT SUHB-zee koochh hee MEEN-tohn mayn khah GUH-yah)",
          "translation": "The hungry little boy ate up all the fresh hot rotis and delicious curry kept on the table in just a few minutes."
        },
        {
          "target": "दिनभर की कठिन और थकाऊ यात्रा के बाद वह सोफे पर बैठते ही अत्यंत गहरी और सुखद नींद में सो गया।",
          "reading": "dinbhar ki kathin aur thakaaoo yaatra ke baad vah sofa par baithte hi atyant gehri aur sukhad neend mein so gaya. [d̪ɪnbʱər kiː kəʈʰɪn ɔːr t̪ʰəkaːuː jaːt̪raː keː baːd̪ ʋəɦ soːfaː pər bɛːʈʰt̪eː ɦiː ət̪jən̪t̪ ɡɛɦriː ɔːr sʊkʰəd̪ niːn̪d̪ mẽː soː ɡəjaː] (DEEN-bhuhr kee KUH-theen owr thuh-KAH-oo YAH-trah kay bahd vuh SOH-fah puhr BYTH-tay hee uht-YUHNT GUH-h-ree owr SOO-khuhd NEEND mayn soh GUH-yah)",
          "translation": "After the difficult and exhausting journey of the entire day, as soon as he sat on the sofa he fell into an extremely deep and restful sleep."
        },
        {
          "target": "पुराने शीशे की बहुत नाज़ुक खिड़की तेज़ आँधी और चक्रवाती तूफ़ान के तीव्र झोंके से अचानक टूट गई।",
          "reading": "puraane sheeshe ki bahut naazuk khidki tez aandhi aur chakravaati toofaan ke teevr jhonke se achanak toot gayi. [pʊraːneː ʃiːʃeː kiː bəɦʊt̪ naːzʊk kʰɪɽkiː t̪eːz aː̃d̪ʱiː ɔːr tʃəkrəʋaːt̪iː t̪uːfaːn keː t̪iːʋr dʒʱõːkeː seː ətʃaːnək ʈuːʈ ɡəiː] (poo-RAH-nay SHEE-shay kee buh-hoot NAH-zook KHEED-kee tayz AHN-dhee owr chuhk-ruh-VAH-tee too-FAHN kay TEE-vruh JHOHN-kay say uh-CHAH-nuhk toot GUH-yee)",
          "translation": "The very delicate window of old glass broke completely suddenly from the fierce gust of the severe storm and cyclone."
        }
      ],
      "mnemonics": [
        "जाना रंजक क्रिया = पूर्ण समाप्ति! 'खा गया' में 'ने' नहीं आता (वह खा गया, उसने खा गया नहीं)!"
      ],
      "culturalNotes": [
        "बोलचाल में 'बात समझ में आ गई' (The point became understood) और 'वह चला गया' में 'जाना' का प्रयोग स्वाभाविक पूर्णता लाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "वाक्य «वह सारा दूध ___» में 'पीना + जाना' का शुद्ध भूतकालिक रूप क्या है?",
          "options": [
            "पी गया (Pee gaya - Drank up completely [no 'ne' with jaana])",
            "ने पी लिया (Unnecessary 'ne' for simple intake)",
            "पी दिया (Outward direction error)",
            "पी पड़ा (Suddenness mismatch)"
          ],
          "answerIndex": 0,
          "explanation": "जाना रंजक क्रिया के साथ अकर्मक अन्वय में «पी गया» आता है (कर्ता बिना 'ने' के)।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "सकर्मक धातु 'खाना' और रंजक 'जाना' के भूतकाल का शुद्ध रूप पहचानिए:",
          "options": [
            "अमित सारा सेब खा गया (Amit saara seb kha gaya - Amit ate up the whole apple)",
            "अमित ने सारा सेब खा गया (अशुद्ध 'ने' का प्रयोग)",
            "अमित सेब को खा दिया (अनुचित रंजक धातु)",
            "अमित सेब खा बैठा था (अनुचित पछतावा भाव)"
          ],
          "answerIndex": 0,
          "explanation": "'जाना' रंजक क्रिया लगने से भूतकाल में 'ने' का प्रयोग वर्जित है, अतः «अमित सारा सेब खा गया» शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'जाना' रंजक क्रिया (Completion) के सटीक प्रयोग वाला शुद्ध वाक्य चुनिए:",
          "options": [
            "दवा की कड़वी गोली पानी के साथ निगलते ही मरीज़ तुरंत सो गया। (As soon as he swallowed the bitter medicine pill with water, the patient fell asleep immediately.)",
            "दवा निगलते ही मरीज़ ने तुरंत सो गया।",
            "मरीज़ सो दिया दवा खाकर।",
            "मरीज़ नींद में सो बैठा।"
          ],
          "answerIndex": 0,
          "explanation": "«मरीज़ तुरंत सो गया» में 'सो जाना' का मानक प्रयोग है जहाँ 'ने' का सर्वथा अभाव है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u12-l2": {
    "id": "hi-u12-l2",
    "subject": "hindi",
    "unit": 12,
    "lessonNumber": 2,
    "title": "स्व-लाभ और अंतर्मुखी क्रिया: 'लेना' रंजक क्रिया (Self-Benefaction & Internal Action with लेना)",
    "level": "B1",
    "objective": "मुख्य धातु के साथ 'लेना' रंजक क्रिया जोड़कर कार्य का लाभ कर्ता को मिलने (Self-benefaction) और सकर्मक भूतकाल में 'ने' के अनिवार्य प्रयोग में निपुण होना।",
    "presentation": {
      "explanation": "जब कोई कार्य कर्ता अपने स्वयं के लाभ (Self-benefit), आंतरिक समझ (Internalization) अथवा अपनी ओर निर्देशित करके करता है, तब **'लेना'** रंजक क्रिया का प्रयोग होता है:\n\n1. 'लेना' रंजक क्रिया के विशिष्ट अर्थ:\n   - **पढ़ लेना** (to read to oneself / for own understanding)\n   - **सीख लेना** (to learn / master for oneself)\n   - **समझ लेना** (to grasp / understand)\n   - **रख लेना** (to keep for oneself)\n   - **सोच लेना** (to think over / ponder carefully)\n   - **बना लेना** (to prepare for oneself)।\n\n2. 'ने' परसर्ग का नियम (Transitive 'ने' Rule with लेना):\n   - 'लेना' सकर्मक धातु है, अतः भूतकाल में कर्ता के साथ **'ने' अनिवार्य रूप से लगेगा** और क्रिया कर्म के अनुसार बदलेगी:\n     - *मैंने पुस्तक पढ़ ली* (I read the book [fem. sing. agreement]);\n     - *रोहन ने सभी प्रश्न हल कर लिए* (Rohan solved all questions [masc. plur. agreement])।",
      "examples": [
        {
          "target": "रोहन ने आगामी कठिन वार्षिक परीक्षा से पहले सभी जटिल व्याकरणिक नियमों को एकाग्रता से पढ़ लिया और भली-भाँति समझ लिया।",
          "reading": "Rohan ne aagaami kathin vaarshik pareeksha se pehle sabhi jatil vyaakaranik niyamon ko ekaagrata se padh liya aur bhali-bhaanti samajh liya. [roːɦən neː aːɡaːmiː kəʈʰɪn ʋaːrʂɪk pəriːkʃaː seː pɛɦleː səbʱiː dʒəʈɪl ʋjaːkərəɳɪk nɪjəmõː koː eːkaːɡrət̪aː seː pəɽʱ lɪjaː ɔːr bʱəliː bʱaː̃t̪ɪ səmədʒʱ lɪjaː] (ROH-huhn nay ah-GAH-mee KUH-theen VAHR-sheek puh-REEK-shah say PEH-lay SUH-bhee JUH-teel vyah-kuh-RUH-neek NEE-yuh-mohn koh ay-KAHG-ruh-tah say pudh LEE-yah owr bhuh-LEE-BHAHN-tee suh-MUHJH LEE-yah)",
          "translation": "Rohan read with concentration and understood thoroughly all the complex grammatical rules before the upcoming difficult annual exam."
        },
        {
          "target": "हमने नए देश की यात्रा पर जाने से पूर्व वहाँ के समाज में प्रयुक्त होने वाले बुनियादी व्यावहारिक वाक्य सीख लिए हैं।",
          "reading": "humne naye desh ki yaatra par jaane se poorv vahaan ke samaaj mein prayukt hone vaale buniyaadi vyaavahaarik vaakya seekh liye hain. [ɦəmneː nəjeː d̪eːʃ kiː jaːt̪raː pər dʒaːneː seː puːrʋ ʋəɦaː̃ keː səmaːdʒ mẽː prəjʊkt̪ hoːneː ʋaːleː bʊnɪjaːd̪iː ʋjaːʋəɦaːrɪk ʋaːkjə siːkʰ lɪjeː hɛ̃ː] (huhm-NAY nuh-YAY daysh kee YAH-trah puhr JAH-nay say poorv vuh-HAHN kay suh-MAHJ mayn pruh-YOOKT hoh-NAY VAH-lay boo-nee-YAH-dee vyah-vuh-HAH-reek VAHK-yuh seekh LEE-yay hy-n)",
          "translation": "Before going on a journey to a new country, we have learned the basic practical sentences used in that society."
        },
        {
          "target": "आप किसी भी अंतिम और महत्वपूर्ण निर्णय पर पहुँचने से पहले सभी व्यावहारिक पक्षों के बारे में अच्छी तरह सोच लीजिए।",
          "reading": "aap kisi bhi antim aur mahatvapoorna nirnay par pahunchne se pehle sabhi vyaavahaarik pakshon ke baare mein achhi tarah soch leejiye. [aːp kɪsiː bʱiː ən̪t̪ɪm ɔːr məɦət̪ʋəpuːrɳə nɪrɳəj pər pəɦʊntʃneː seː pɛɦleː səbʱiː ʋjaːʋəɦaːrɪk pəkʃõː keː baːreː mẽː ətʃːʰiː t̪ərəɦ soːtʃ liːdʒɪjeː] (ahp kee-SEE bhee UHN-teem owr muh-huht-vuh-POOR-nuh NEER-nuy puhr puh-HOONCH-nay say PEH-lay SUH-bhee vyah-vuh-HAH-reek PUHK-shohn kay BAH-ray mayn UHTCH-hee TUH-ruh sohch LEE-jee-yay)",
          "translation": "Please think over thoroughly about all practical aspects before reaching any final and important decision."
        }
      ],
      "mnemonics": [
        "लेना = अपने लिए (मैंने सीख लिया)! Transitive vector verb → 'ने' लगेगा!"
      ],
      "culturalNotes": [
        "भोजन के लिए शिष्टता से पूछने पर 'क्या आपने चाय पी ली?' या 'खाना खा लीजिए' में 'लेना' आत्म-संतुष्टि का भाव देता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "स्व-लाभ (Internal understanding) के लिए 'पढ़ना + लेना' का शुद्ध भूतकालिक वाक्य चुनिए:",
          "options": [
            "छात्र ने सारा पाठ पढ़ लिया (Chhaatr ne saara paath padh liya - The student read the whole lesson for himself)",
            "छात्र सारा पाठ पढ़ गया (अकर्मक भाव विहीन)",
            "छात्र ने पाठ पढ़ दिया (पर-लाभ का गलत प्रयोग)",
            "छात्र पाठ पढ़ बैठा (अनुचित पश्चाताप)"
          ],
          "answerIndex": 0,
          "explanation": "आत्म-लाभ और सकर्मक भूतकाल हेतु «छात्र ने... पढ़ लिया» पूर्णतः शुद्ध है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «मैंने सभी आवश्यक निर्देश ध्यान से ___» में शुद्ध क्रिया रूप भरिए:",
          "options": [
            "सुन लिए हैं (Sun liye hain - Have listened carefully for oneself)",
            "सुन दिया है (Outward direction error)",
            "सुन गया हूँ (Intransitive vector mismatch with 'maine')",
            "सुन पड़ा हूँ (Suddenness mismatch)"
          ],
          "answerIndex": 0,
          "explanation": "कर्ता 'मैंने' और कर्म 'निर्देश' (पुल्लिंग बहुवचन) के साथ «सुन लिए हैं» शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'लेना' रंजक क्रिया (Self-Benefaction) के शुद्ध प्रयोग वाला वाक्य कौन-सा है?",
          "options": [
            "वकील ने मुवक्किल के सभी महत्वपूर्ण कागज़ात अपने पास रख लिए। (The lawyer kept all important documents of the client with himself.)",
            "वकील कागज़ात रख गया था।",
            "वकील ने कागज़ात रख दिया अपने पास।",
            "वकील कागज़ात रख बैठा।"
          ],
          "answerIndex": 0,
          "explanation": "«वकील ने... रख लिए» में स्व-हित में कार्य संपन्न करने का सटीक प्रयोग है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u12-l3": {
    "id": "hi-u12-l3",
    "subject": "hindi",
    "unit": 12,
    "lessonNumber": 3,
    "title": "पर-लाभ और बहिर्मुखी क्रिया: 'देना' रंजक क्रिया (Other-Benefaction & Outward Action with देना)",
    "level": "B1",
    "objective": "मुख्य धातु के साथ 'देना' रंजक क्रिया जोड़कर कार्य का प्रभाव या लाभ दूसरों तक पहुँचाने (Other-benefaction) और 'लेना' बनाम 'देना' के विपरीतार्थक अंतर को स्पष्ट करना।",
    "presentation": {
      "explanation": "जब किसी कार्य की दिशा बाहर की ओर (Outward) हो, अर्थात् कार्य किसी अन्य व्यक्ति के लाभ (Other-benefaction) या विसर्जन हेतु किया जाए, तब **'देना'** रंजक क्रिया का प्रयोग होता है:\n\n1. 'देना' रंजक क्रिया के प्रमुख रूप:\n   - **बता देना** (to tell someone / disclose)\n   - **समझा देना** (to explain to someone else)\n   - **भेज देना** (to send out)\n   - **लौटा देना** (to return / give back)\n   - **छोड़ देना** (to drop off / release)\n   - **सुना देना** (to narrate to others)।\n\n2. 'लेना' (Inward) बनाम 'देना' (Outward) का अंतर:\n   - *उसने किताब पढ़ ली* (He read the book for himself);\n   - *उसने सबको किताब पढ़कर सुना दी* (He read out the book to everyone);\n   - *मैंने रुपये रख लिए* (I kept the money) vs *मैंने रुपये लौटा दिए* (I returned the money)।\n\n3. भूतकाल में 'ने' का प्रयोग: 'देना' सकर्मक है, अतः कर्ता के साथ **'ने'** अवश्य आता है।",
      "examples": [
        {
          "target": "अनुभवी अध्यापक ने सभी जिज्ञासु विद्यार्थियों को आगामी कठिन परीक्षा की पूरी रूपरेखा विस्तार से समझा दी।",
          "reading": "anubhavi adhyaapak ne sabhi jigyaasu vidyaarthiyon ko aagaami kathin pareeksha ki poori rooprekha vistaar se samjha di. [ənʊbʱəʋiː əd̪ʱjaːpək neː səbʱiː dʒɪɡjaːsʊ ʋɪd̪jaːrt̪ʰɪjõː koː aːɡaːmiː kəʈʰɪn pəriːkʃaː kiː puːriː ruːpreːkʰaː ʋɪst̪aːr seː səmədʒʱaː d̪iː] (uh-noobh-HUH-vee uhdh-YAH-puhk nay SUH-bhee jeeg-YAH-soo veed-YAHR-thee-yohn koh ah-GAH-mee KUH-theen puh-REEK-shah kee POO-ree ROOP-ray-khah vees-TAHR say suh-MUHJH-ah dee)",
          "translation": "The experienced teacher explained in detail the complete blueprint of the upcoming difficult examination to all curious students."
        },
        {
          "target": "मैंने अपने विदेशी मित्र को ईमेल द्वारा सभी आवश्यक आधिकारिक दस्तावेज़ और पारिवारिक तस्वीरें तुरंत भेज दी हैं।",
          "reading": "maine apne videshi mitr ko email dvaara sabhi aavashyak aadhikaarik dastaavez aur paarivaarik tasveerein turant bhej di hain. [mɛːnneː əpneː ʋɪd̪eːʃiː mɪt̪r koː iːmeːl d̪ʋaːraː səbʱiː aːʋəʃjək aːd̪ʱɪkaːrɪk d̪əst̪aːʋeːz ɔːr paːrɪʋaːrɪk t̪əsʋiːrẽː t̪ʊrən̪t̪ bʱeːdʒ d̪iː hɛ̃ː] (MY-nay uhp-NAY vee-DAY-shee MEEN-truh koh EE-mayl dvah-RAH SUH-bhee ah-vush-YAHK ah-dhee-KAH-reek duhs-tah-VAYZ owr pah-ree-VAH-reek tuhs-vee-RAYN TOO-ruhnt bhayj dee hy-n)",
          "translation": "I have sent immediately all necessary official documents and family photographs to my foreign friend via email."
        },
        {
          "target": "कृपया आज शाम की महत्वपूर्ण बैठक से पूर्व मुझे अपनी नई व्यावसायिक परियोजना की पूरी जानकारी स्पष्ट रूप से बता दीजिए।",
          "reading": "kripya aaj shaam ki mahatvapoorna baithak se poorv mujhe apni nayi vyaavasaayik pariyojana ki poori jaankaari spasht roop se bata deejiye. [krɪpəjaː aːdʒ ʃaːm kiː məɦət̪ʋəpuːrɳə bɛːʈʰək seː puːrʋ mʊdʒʱeː əpniː nəiː ʋjaːʋəsaːjɪk pərɪjoːdʒnaː kiː puːriː dʒaːnkaːriː spəʂʈ ruːp seː bət̪aː d̪iːdʒɪjeː] (KREEP-yah ahj shahm kee muh-huht-vuh-POOR-nuh BY-thuhk say poorv MOO-jhay uhp-NEE nuh-EE vyah-vuh-SAH-yeek puh-ree-YOHJ-nah kee POO-ree jahn-KAH-ree spuhsht ROOP say buh-TAH DEE-jee-yay)",
          "translation": "Please tell me clearly the complete information about your new commercial project before this evening's important meeting."
        }
      ],
      "mnemonics": [
        "देना = दूसरों के लिए (उसने बता दिया)! लेना (Inward) vs देना (Outward)!"
      ],
      "culturalNotes": [
        "भारतीय शिष्टाचार में किसी का काम पूरा करके 'मैंने आपका पत्र पहुँचा दिया है' कहना परोपकार व निष्ठा का प्रतीक है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "दूसरों को सूचित करने (Other-directed action) हेतु कौन-सा वाक्य व्याकरणिक रूप से सही है?",
          "options": [
            "मैंने सबको सूचना दे दी (Maine sabko soochna de di - I gave/conveyed the information to all)",
            "मैंने सबको सूचना ले ली (अर्थ का अनर्थ: खुद सूचना ले ली)",
            "मैं सबको सूचना दे गया (अस्वाभाविक प्रयोग)",
            "मैंने सबको सूचना दे पड़ा (असंगत आकस्मिकता)"
          ],
          "answerIndex": 0,
          "explanation": "दूसरों को सूचना देने के लिए 'देना' रंजक क्रिया «दे दी» प्रयुक्त होती है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «माँ ने बच्चे को सुंदर कहानी ___» में सही संयुक्त क्रिया रूप भरिए:",
          "options": [
            "सुना दी (Suna di - Narrated outward to the child)",
            "सुना ली (Internalization error)",
            "सुना गई (Intransitive vector error)",
            "सुना बैठी (Foolish action error)"
          ],
          "answerIndex": 0,
          "explanation": "बच्चे को कहानी सुनाने का बहिर्मुखी प्रभाव होने से «सुना दी» शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'देना' रंजक क्रिया (Other-Benefaction) के सटीक अन्वय वाला वाक्य पहचानिए:",
          "options": [
            "अधिकारी ने क्लर्क को सभी पत्राचार तुरंत डाक से भेजने का आदेश दे दिया। (The officer gave the order to the clerk to send all correspondence by post immediately.)",
            "अधिकारी ने आदेश ले लिया क्लर्क को।",
            "अधिकारी आदेश दे गया क्लर्क को।",
            "अधिकारी आदेश दे बैठा क्लर्क को।"
          ],
          "answerIndex": 0,
          "explanation": "«अधिकारी ने... आदेश दे दिया» में बहिर्मुखी निर्देशन का शुद्ध प्रयोग है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u12-l4": {
    "id": "hi-u12-l4",
    "subject": "hindi",
    "unit": 12,
    "lessonNumber": 4,
    "title": "आकस्मिकता और भावोद्रेक: 'पड़ना', 'उठना', 'बैठना' (Suddenness, Eruption & Rash Actions with पड़ना, उठना, बैठना)",
    "level": "B1",
    "objective": "अचानक घटने वाली घटनाओं (पड़ना), तीव्र भावनात्मक विस्फोट (उठना) और बिना सोचे-समझे किए गए अविवेकपूर्ण कार्यों (बैठना) के रंजक प्रयोग में निपुणता प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में विशेष मनोवैज्ञानिक और आवेगात्मक स्थितियों को व्यक्त करने हेतु तीन विशिष्ट रंजक क्रियाएं प्रयुक्त होती हैं:\n\n1. **'पड़ना' (Suddenness / Involuntary Occurrence)**:\n   - अचानक अनपेक्षित रूप से कोई क्रिया घटित होना:\n     - *हँस पड़ना* (to burst into laughter);\n     - *रो पड़ना* (to burst into tears);\n     - *गिर पड़ना* (to fall down suddenly);\n     - *चमक पड़ना* (to shine suddenly)।\n     - (नियम: पड़ना अकर्मक है, अतः भूतकाल में 'ने' नहीं लगता: *बच्चा रो पड़ा*)।\n\n2. **'उठना' (Sudden Emotional Eruption / Surge)**:\n   - भय, क्रोध या आश्चर्य से अचानक कोई तीव्र प्रतिक्रिया होना:\n     - *काँप उठना* (to shudder / tremble with fear);\n     - *चीख उठना* (to scream out);\n     - *चौंक उठना* (to be startled);\n     - *जाग उठना* (to awaken suddenly)।\n     - (नियम: अकर्मक, भूतकाल में 'ने' नहीं लगता: *वह डर से काँप उठा*)।\n\n3. **'बैठना' (Rash / Regrettable / Foolish Mistake)**:\n   - बिना विचारे, मूर्खतापूर्ण या पश्चातापकारी कार्य करना:\n     - *कर बैठना* (to do something rashly);\n     - *कह बैठना* (to blurt out regrettably);\n     - *लड़ बैठना* (to pick a fight foolishly)।",
      "examples": [
        {
          "target": "विदूषक का अत्यंत हास्यप्रद और विचित्र अभिनय देखकर विशाल सभागार में उपस्थित सभी दर्शक अचानक ज़ोर-ज़ोर से हँस पड़े।",
          "reading": "vidooshak ka atyant haasyaprad aur vichitr abhinay dekhkar vishaal sabhaagaar mein upasthit sabhi darshak achanak zor-zor se hans pade. [ʋɪd̪uːʂək kaː ət̪jən̪t̪ ɦaːsjəprəd̪ ɔːr ʋɪtʃɪt̪r əbʱɪnəj d̪eːkʰkər ʋɪʃaːl səbʱaːɡaːr mẽː ʊpəst̪ʰɪt̪ səbʱiː d̪ərʃək ətʃaːnək zoːr zoːr seː ɦə̃s pəɽeː] (vee-DOO-shuhk kah uht-YUHNT hahs-yuh-PRUHD owr vee-CHEE-truh uhbh-ee-NUHY daykh-kuhr vee-SHAHL suh-bhah-GAHR mayn oo-puhs-THEET SUH-bhee DUHR-shuhk uh-CHAH-nuhk zohr zohr say huhns PUH-day)",
          "translation": "Seeing the extremely comical and peculiar performance of the clown, all spectators present in the huge auditorium suddenly burst into loud laughter."
        },
        {
          "target": "रात के घने सन्नाटे और अँधेरे में अचानक एक भयानक आवाज़ सुनकर वह छोटा बालक भय से काँप उठा और चीख पड़ा।",
          "reading": "raat ke ghane sannaate aur andhere mein achanak ek bhayanak aavaaz sunkar vah chhota baalak bhay se kaamp utha aur cheekh pada. [raːt̪ keː ɡʱəneː sənːaːʈeː ɔːr ə̃d̪ʱeːreː mẽː ətʃaːnək eːk bʱəjaːnək aːʋaːz sʊnkər ʋəɦ tʃʰoːʈaː baːlək bʱəj seː kaː̃p ʊtʰaː ɔːr tʃiːkʰ pəɽaː] (raht kay ghuh-NAY suhn-NAH-tay owr uhn-DHAY-ray mayn uh-CHAH-nuhk ayk bhuh-YAH-nuhk ah-VAHZ soon-kuhr vuh CHHOH-tah BAH-luhk bhuy say KAHMP OO-thah owr cheekh PUH-dah)",
          "translation": "Hearing a terrifying sound suddenly in the dense silence and darkness of the night, that little boy shuddered with fear and screamed out."
        },
        {
          "target": "अत्यधिक उत्तेजना, क्रोध और आवेश में आकर वह अकारण ही अपने सबसे पुराने और सच्चे मित्र से बुरी तरह लड़ बैठा।",
          "reading": "atyadhik uttejana, krodh aur aavesh mein aakar vah akaaran hi apne sabse puraane aur sachhe mitr se buri tarah lad baitha. [ət̪jəd̪ʱɪk ʊt̪ːeːdʒnaː kroːd̪ʱ ɔːr aːʋeːʃ mẽː aːkər ʋəɦ əkaːrəɳ ɦiː əpneː səbseː pʊraːneː ɔːr sətʃːeː mɪt̪r seː bʊriː t̪ərəɦ ləɽ bɛːʈʰaː] (uht-yudh-HEEK oot-tayj-NAH, krohdh owr ah-VAYSH mayn ah-kuhr vuh uh-KAH-ruhn hee uhp-NAY SUHB-say poo-RAH-nay owr SUHTCH-chay MEEN-truh say BOO-ree TUH-ruh luhd BY-thah)",
          "translation": "Coming under excessive agitation, anger, and passion, he rashly picked a severe fight without any cause with his oldest and truest friend."
        }
      ],
      "mnemonics": [
        "पड़ना = अचानक (हँस पड़ा); उठना = डर/आवेग (काँप उठा); बैठना = मूर्खता (लड़ बैठा)!"
      ],
      "culturalNotes": [
        "हिंदी कथा-साहित्य में मानवीय भावनाओं के अचानक विस्फोट को जीवंत बनाने के लिए 'रो पड़ी', 'काँप उठा' जैसे रंजक अत्यंत लोकप्रिय हैं।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "भय से अचानक काँपने (Sudden emotional eruption) के लिए शुद्ध संयुक्त क्रिया क्या है?",
          "options": [
            "काँप उठा (Kaamp utha - Shuddered/trembled with sudden fear)",
            "काँप लिया (Self-benefit mismatch)",
            "काँप दिया (Outward benefaction mismatch)",
            "काँप बैठा (Foolish deliberate action mismatch)"
          ],
          "answerIndex": 0,
          "explanation": "भय या आश्चर्य के अचानक भावोद्रेक के लिए 'उठना' रंजक क्रिया «काँप उठा» प्रयुक्त होती है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "क्रोध में बिना सोचे-समझे किए गए अविवेकपूर्ण कार्य (Rash/Regrettable act) वाला वाक्य पहचानिए:",
          "options": [
            "वह आवेश में आकर कड़वी बात कह बैठा (Vah aavesh mein aakar katu baat kah baitha - In anger, he rashly blurted out a bitter remark)",
            "वह कड़वी बात कह दिया (सामान्य कथन)",
            "वह कड़वी बात कह लिया (आत्म-लाभ का अशुद्ध रूप)",
            "वह कड़वी बात कह गया (तटस्थ रूप)"
          ],
          "answerIndex": 0,
          "explanation": "अविवेकपूर्ण या पछतावे वाले कार्य के लिए 'बैठना' रंजक धातु «कह बैठा» प्रयुक्त होती है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "आकस्मिकता और अविवेक के रंजक रूपों वाला पूर्णतः शुद्ध वाक्य चुनिए:",
          "options": [
            "दुखद समाचार सुनते ही वह अचानक रो पड़ी और अपने भाग्य को कोस बैठी। (Upon hearing the sad news she suddenly burst into tears and rashly blamed her fate.)",
            "दुखद समाचार सुनकर वह रो दी और कोस ली।",
            "समाचार सुनकर उसने रो पड़ी।",
            "समाचार सुनकर वह रो गया।"
          ],
          "answerIndex": 0,
          "explanation": "«रो पड़ी» (आकस्मिक रोना) और «कोस बैठी» (अविवेकपूर्ण कृत्य) दोनों का समन्वय व्याकरणिक और संवेदनात्मक दृष्टि से पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u12-l5": {
    "id": "hi-u12-l5",
    "subject": "hindi",
    "unit": 12,
    "lessonNumber": 5,
    "title": "संयुक्त क्रियाओं का समेकन व रंजक क्रियाओं का चयन नियम (Compound Verbs Synthesis & Semantic Matrix)",
    "level": "B1",
    "objective": "पाँचों रंजक क्रियाओं (जाना, लेना, देना, पड़ना, उठना/बैठना) के सूक्ष्म अर्थ-भेदों का संश्लेषण करना और नकारात्मक वाक्यों में संयुक्त क्रियाओं के निषेध नियम में पूर्ण दक्षता पाना।",
    "presentation": {
      "explanation": "संयुक्त क्रियाओं (Compound Verbs) की समग्र वर्गीकरण तालिका और प्रयोग के सार्वभौमिक नियम:\n\n1. पाँच प्रमुख रंजक क्रियाओं का सार-संक्षेप:\n   - **1. जाना**: पूर्ण समाप्ति / अपरिवर्तनीयता / अकर्मक (खा जाना, सो जाना, टूट जाना — 'ने' रहित);\n   - **2. लेना**: स्व-लाभ / अंतर्मुखी / सकर्मक (पढ़ लेना, सीख लेना, समझ लेना — 'ने' सहित);\n   - **3. देना**: पर-लाभ / बहिर्मुखी / सकर्मक (समझा देना, भेज देना, बता देना — 'ने' सहित);\n   - **4. पड़ना / उठना**: आकस्मिकता / भावोद्रेक / अकर्मक (हँस पड़ना, काँप उठना — 'ने' रहित);\n   - **5. बैठना**: अविवेक / मूर्खता / पश्चाताप (कह बैठना, लड़ बैठना, कर बैठना)।\n\n2. नकारात्मक वाक्यों में रंजक क्रिया का निषेध (Prohibition in Negatives):\n   - हिंदी में सामान्य निषेध (Simple Negative) वाक्यों में रंजक क्रिया हट जाती है:\n     - *सकारात्मक*: मैंने पुस्तक पढ़ ली (I read the book);\n     - *नकारात्मक*: मैंने पुस्तक नहीं पढ़ी (I didn't read the book) — ('मैंने पुस्तक नहीं पढ़ ली' अमानक है)।",
      "examples": [
        {
          "target": "जब उसने मुझे पूरी सच्चाई विस्तार से बता दी, तब मैंने मन ही मन सब कुछ समझ लिया और शांति से अपनी कुर्सी पर बैठ गया।",
          "reading": "jab usne mujhe poori sachhaai vistaar se bata di, tab maine man hi man sab kuchh samajh liya aur shaanti se apni kursi par baith gaya. [dʒəb ʊsneː mʊdʒʱeː puːriː sətʃːʰaːiː ʋɪst̪aːr seː bət̪aː d̪iː t̪əb mɛːnneː mən ɦiː mən səb kʊtʃʰ səmədʒʱ lɪjaː ɔːr ʃaːn̪t̪iː seː əpniː kʊrsiː pər bɛːʈʰ ɡəjaː] (juhb oos-NAY MOO-jhay POO-ree suhtch-CHAH-ee vees-TAHR say buh-TAH dee, tuhb MY-nay muhn hee muhn suhb koochh suh-MUHJH LEE-yah owr SHAHN-tee say uhp-NEE KOOR-see puhr BYTH GUH-yah)",
          "translation": "When he explained the whole truth to me in detail, then I understood everything in my mind and sat down peacefully on my chair."
        },
        {
          "target": "वह बिना विचारे अत्यधिक क्रोध में ऐसी कटु बात कह बैठा जिसे सुनकर उसका संवेदनशील छोटा भाई अचानक रो पड़ा।",
          "reading": "vah bina vichaare atyadhik krodh mein aisi katu baat kah baitha jise sunkar uska samvedansheel chhota bhai achanak ro pada. [ʋəɦ bɪnaː ʋɪtʃaːreː ət̪jəd̪ʱɪk kroːd̪ʱ mẽː ɛːsiː kəʈʊ baːt̪ kəɦ bɛːʈʰaː dʒɪseː sʊnkər ʊskaː səmʋeːd̪ənʃiːl tʃʰoːʈaː bʱaːiː ətʃaːnək roː pəɽaː] (vuh BEE-nah vee-CHAH-ray uht-yudh-HEEK krohdh mayn EYE-see KUH-too baht kuh BY-thah jee-SAY soon-kuhr oos-KAH suhm-vay-duhn-SHEEL CHHOH-tah bhah-EE uh-CHAH-nuhk roh PUH-dah)",
          "translation": "Without thinking in extreme anger, he rashly blurted out such a bitter word upon hearing which his sensitive younger brother suddenly burst into tears."
        },
        {
          "target": "मानक हिंदी में सकारात्मक रूप 'मैंने अपना काम कर लिया है' होता है, किंतु नकारात्मक रूप में प्रायः 'मैंने काम नहीं किया' कहा जाता है।",
          "reading": "maanak hindi mein sakaaraatmak roop 'maine apna kaam kar liya hai' hota hai, kintu nakaaraatmak roop mein praayah 'maine kaam nahin kiya' kaha jaata hai. [maːnək ɦɪn̪d̪iː mẽː səkaːraːt̪mək ruːp mɛːnneː əpnaː kaːm kər lɪjaː hɛː hoːt̪aː hɛː kɪn̪t̪ʊ nəkaːraːt̪mək ruːp mẽː praːjəɦ mɛːnneː kaːm nəɦĩː kɪjaː kəɦaː dʒaːt̪aː hɛː] (MAH-nuhk HEEN-dee mayn suh-kah-RAHT-muhk roop 'MY-nay uhp-NAH kahm kuhr LEE-yah hy' hoh-TAH hy, KEEN-too nuh-kah-RAHT-muhk roop mayn PRAH-yuh 'MY-nay kahm nuh-HEEN kee-YAH' KUH-hah jah-TAH hy)",
          "translation": "In standard Hindi, the positive form is 'I have completed my work', but in the negative form usually 'I did not do the work' is spoken."
        }
      ],
      "mnemonics": [
        "जाना (पूर्ण), लेना (स्व), देना (पर), पड़ना (अचानक), बैठना (भूल)! नकारात्मक में रंजक क्रिया प्रायः हट जाती है!"
      ],
      "culturalNotes": [
        "संयुक्त क्रियाओं का सही चयन हिंदी भाषा में वक्ता के मनोभाव, उद्देश्य और संवेदनशीलता को सबसे जीवंत अभिव्यक्ति प्रदान करता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "सकारात्मक वाक्य «उसने खाना खा लिया» का मानक नकारात्मक रूप क्या होगा?",
          "options": [
            "उसने खाना नहीं खाया (Usne khaana nahin khaaya - Standard negative drops the vector verb)",
            "उसने खाना नहीं खा लिया (अमानक नकारात्मक रचना)",
            "उसने खाना नहीं खा दिया (अनुचित रंजक धातु)",
            "उसने खाना नहीं खा गया (अकर्मक दोष)"
          ],
          "answerIndex": 0,
          "explanation": "मानक हिंदी में नकारात्मक वाक्यों में रंजक क्रिया हटकर मुख्य क्रिया का सामान्य भूतकाल «उसने खाना नहीं खाया» बनता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "रंजक क्रियाओं के सही मिलान वाला वाक्य पहचानिए:",
          "options": [
            "मैंने पत्र लिख लिया और डाकिया को दे दिया (Maine patr likh liya aur daakiya ko de diya - I wrote the letter for myself and gave it to the postman)",
            "मैंने पत्र लिख दिया खुद के लिए (स्व-लाभ में 'देना' का गलत प्रयोग)",
            "मैंने डाकिया को पत्र ले लिया (बहिर्मुखी में 'लेना' का गलत प्रयोग)",
            "मैं पत्र लिख बैठा शांति से (शांतिपूर्ण कार्य में 'बैठना' का अनुपयुक्त प्रयोग)"
          ],
          "answerIndex": 0,
          "explanation": "खुद लिखने के लिए «लिख लिया» (स्व-लाभ) और डाकिया को देने के लिए «दे दिया» (पर-लाभ) का समन्वय पूर्णतः शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "संयुक्त क्रियाओं की संपूर्ण संरचना का प्रामाणिक वाक्य चुनिए:",
          "options": [
            "अध्यापक ने पाठ समझा दिया, छात्रों ने उसे समझ लिया, और घंटी बजते ही सब बाहर चले गए। (Teacher explained the lesson, students understood it, and as bell rang all went outside.)",
            "अध्यापक ने पाठ समझा लिया छात्रों को।",
            "छात्रों ने पाठ समझ दिया अपने लिए।",
            "घंटी बजते ही सब बाहर चल दिए बिना कारण।"
          ],
          "answerIndex": 0,
          "explanation": "«समझा दिया» (पर-लाभ), «समझ लिया» (स्व-लाभ), और «चले गए» (पूर्णता) तीनों का समन्वय व्याकरणिक रूप से आदर्श है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u13-l1": {
    "id": "hi-u13-l1",
    "subject": "hindi",
    "unit": 13,
    "lessonNumber": 1,
    "title": "प्रथम एवं द्वितीय प्रेरणार्थक क्रियाएं: निर्माण नियम (Direct & Indirect Causative Verbs: -आना / -वाना)",
    "level": "B1",
    "objective": "मूल धातु से प्रथम प्रेरणार्थक (-आना: प्रत्यक्ष प्रेरणा) और द्वितीय प्रेरणार्थक (-वाना: मध्यस्थ द्वारा अप्रत्यक्ष कार्य संपादन) के धातु-परिवर्तन नियमों में पूर्ण दक्षता प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में क्रिया के तीन स्तर होते हैं: **मूल क्रिया (Base Verb)**, **प्रथम प्रेरणार्थक (Direct Causative)** और **द्वितीय प्रेरणार्थक (Indirect Causative)**:\n\n1. निर्माण का सामान्य नियम:\n   - **मूल धातु + आना** = प्रथम प्रेरणार्थक (कर्ता स्वयं प्रत्यक्ष रूप से कार्य करवाता/कराता है);\n   - **मूल धातु + वाना** = द्वितीय प्रेरणार्थक (कर्ता किसी तीसरे मध्यस्थ व्यक्ति के माध्यम से कार्य करवाता है)।\n\n2. प्रमुख क्रियाओं का रूपांतरण तालिका:\n   - करना (to do) → **कराना** (to make do) → **करवाना** (to have done by someone);\n   - पढ़ना (to read) → **पढ़ाना** (to teach) → **पढ़वाना** (to have taught/read by someone);\n   - लिखना (to write) → **लिखाना** (to dictate) → **लिखवाना** (to have written by someone);\n   - खाना (to eat) → **खिलाना** (to feed) → **खिलवाना** (to have fed by someone);\n   - पीना (to drink) → **पिलाना** (to serve drink) → **पिलवाना** (to cause to serve drink);\n   - बनाना (to make) → **बनाना** → **बनवाना** (to have built/constructed);\n   - धोना (to wash) → **धुलाना** → **धुलवाना** (to have washed by laundry)।\n\n3. स्वर-ह्रस्वीकरण नियम (Vowel Shortening):\n   - मूल धातु का दीर्घ स्वर प्रेरणार्थक में ह्रस्व हो जाता है (जैसे: पीना → पिलाना, धोना → धुलाना, सीखना → सिखाना)।",
      "examples": [
        {
          "target": "अध्यापक ने कक्षा के सभी नन्हें बच्चों से कठिन हिंदी निबंध सुंदर और सुपाठ्य अक्षरों में लिखवाया।",
          "reading": "adhyaapak ne kaksha ke sabhi nanhein bachon se kathin hindi nibandh sundar aur supaathya aksharon mein likhvaaya. [əd̪ʱjaːpək neː kəkʃaː keː səbʱiː nənɦẽː bətʃːõː seː kəʈʰɪn ɦɪn̪d̪iː nɪbən̪d̪ʱ sʊn̪d̪ər ɔːr sʊpaːʈʰjə əkʃərə̃õː mẽː lɪkʰʋaːjaː] (uhdh-YAH-puhk nay KUHK-shah kay SUH-bhee NUHN-hayn BUHTCH-chohn say KUH-theen HEEN-dee NEE-buhndh SOON-duhr owr soo-PAHTH-yuh uhk-SHUH-rohn mayn leekh-VAH-yah)",
          "translation": "The teacher had the difficult Hindi essay written in beautiful and legible handwriting by all the little children in the class."
        },
        {
          "target": "स्नेहमयी माता जी ने अपने छोटे बालक को कटोरी से स्वादिष्ट मीठी खीर और गर्म ताज़ा दूध खिलाया और पिलाया।",
          "reading": "snehamayi maata ji ne apne chhote baalak ko katori se svaadisht meethi kheer aur garm taaza doodh khilaaya aur pilaaya. [sneːɦməjiː maːt̪aː dʒiː neː əpneː tʃʰoːʈeː baːlək koː kəʈoːriː seː sʋaːd̪ɪʂʈ miːtʰiː kʰiːr ɔːr ɡərm t̪aːzaː d̪uːd̪ʱ kʰɪlaːjaː ɔːr pɪlaːjaː] (snay-huh-muh-YEE MAH-tah jee nay uhp-NAY CHHOH-tay BAH-luhk koh kuh-TOH-ree say svah-DEESHT MEE-thee KHEER owr guhrm TAH-zah DOODH khee-LAH-yah owr pee-LAH-yah)",
          "translation": "The affectionate mother fed the delicious sweet rice pudding and hot fresh milk from a bowl to her little boy."
        },
        {
          "target": "हमने शहर के एक अत्यंत कुशल और प्रसिद्ध वास्तुकार से अपना नया और आधुनिक सुंदर मकान बनवाया है।",
          "reading": "humne shahar ke ek atyant kushal aur prasiddh vaastukaar se apna naya aur aadhunik sundar makaan banvaaya hai. [ɦəmneː ʃəɦər keː eːk ət̪jən̪t̪ kʊʃəl ɔːr prəsɪd̪ːʱ ʋaːst̪ʊkaːr seː əpnaː nəjaː ɔːr aːd̪ʱʊnɪk sʊn̪d̪ər məkaːn bənʋaːjaː hɛː] (huhm-NAY SHUH-huhr kay ayk uht-YUHNT KOO-shuhl owr pruh-SEETH-dh vahs-too-KAHR say uhp-NAH nuh-YAH owr ah-dhoo-NEEK SOON-duhr muh-KAHN buhn-VAH-yah hy)",
          "translation": "We have had our new and modern beautiful house constructed by an extremely skilled and renowned architect of the city."
        }
      ],
      "mnemonics": [
        "लिखना (Base) → लिखाना (1st Causative: Dictate) → लिखवाना (2nd Causative: Have written through someone)!"
      ],
      "culturalNotes": [
        "भारतीय समाज में कारीगरों, राजमिस्त्रियों और दर्ज़ियों से कार्य करवाने के लिए द्वितीय प्रेरणार्थक क्रियाओं ('सिलवाना', 'बनवाना') का दैनिक जीवन में सर्वाधिक प्रयोग होता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "धातु 'पढ़ना' (to read) का द्वितीय प्रेरणार्थक रूप (to have taught/read by someone) क्या होगा?",
          "options": [
            "पढ़वाना (Padhvaana - Second causative: to cause to be read/taught via intermediary)",
            "पढ़ानाक (Typo error)",
            "पढ़ना ही (Infinitive error)",
            "पढ़ जाना (Compound verb error)"
          ],
          "answerIndex": 0,
          "explanation": "'-वाना' प्रत्यय जोड़कर द्वितीय प्रेरणार्थक रूप «पढ़वाना» बनता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «रोहन ने धोबी से अपने सभी गर्म कपड़े ___» में शुद्ध प्रेरणार्थक रूप भरिए:",
          "options": [
            "धुलवाए (Dhulvaaye - Had washed by the washerman [2nd causative past masc. plur.])",
            "धोया (Base verb error without agent marker)",
            "धुलाया खुद (Self-action confusion)",
            "धुल गया (Passive involuntary error)"
          ],
          "answerIndex": 0,
          "explanation": "धोबी (मध्यस्थ) से कपड़े साफ करवाने हेतु द्वितीय प्रेरणार्थक «धुलवाए» सही है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "प्रथम और द्वितीय प्रेरणार्थक क्रियाओं के शुद्ध प्रयोग वाला वाक्य पहचानिए:",
          "options": [
            "माता जी बच्चे को खाना खिलाती हैं और नौकर से बर्तन साफ़ करवाती हैं। (Mother feeds food to the child and gets utensils cleaned by the servant.)",
            "माता जी नौकर से खाना खिलाती हैं बच्चे को।",
            "माता जी बच्चे को बर्तन साफ़ करवाती हैं।",
            "माता जी नौकर से खाना खाती हैं।"
          ],
          "answerIndex": 0,
          "explanation": "«खिलाती हैं» (प्रथम प्रेरणार्थक: प्रत्यक्ष) और «करवाती हैं» (द्वितीय प्रेरणार्थक: मध्यस्थ द्वारा) दोनों का प्रयोग व्याकरणिक रूप से आदर्श है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u13-l2": {
    "id": "hi-u13-l2",
    "subject": "hindi",
    "unit": 13,
    "lessonNumber": 2,
    "title": "प्रेरणार्थक वाक्यों में मध्यस्थ कारक: 'से' और 'को' (Intermediary Agent Postpositions with से and को)",
    "level": "B1",
    "objective": "प्रेरणार्थक वाक्यों में कार्य संपादन करने वाले मध्यस्थ कर्ता (Causee) के साथ 'से' (Instrumental/Intermediary) और अनुभविता के साथ 'को' (Dative/Patient) के सटीक प्रयोग का नियम समझना।",
    "presentation": {
      "explanation": "प्रेरणार्थक वाक्यों में मध्यस्थ व्यक्ति (Causee / Agent) के साथ परसर्ग लगाने के दो सार्वभौमिक नियम हैं:\n\n1. **मध्यस्थ कर्ता के साथ 'से' (Intermediary with 'से')**:\n   - द्वितीय प्रेरणार्थक वाक्यों में जिस व्यक्ति के *माध्यम से* या *द्वारा* कार्य कराया जाता है, उसके साथ **'से'** लगता है:\n     - *मैंने दर्ज़ी से कपड़े सिलवाए* (I got clothes stitched by the tailor);\n     - *अमित ने मैकेनिक से गाड़ी बनवाई* (Amit got car repaired by the mechanic);\n     - *मालिक ने मज़दूर से बोरी उठवाई* (Owner had the sack lifted by the laborer)।\n\n2. **अनुभविता/प्राप्तकर्ता के साथ 'को' (Recipient/Experiencer with 'को')**:\n   - प्रथम प्रेरणार्थक क्रियाओं में जब किसी को ज्ञान, भोजन, दृश्य या कौशल प्रत्यक्ष कराया जाता है (दिखाना, सिखाना, पढ़ाना, खिलाना), तब उस व्यक्ति के साथ **'को'** लगता है:\n     - *अध्यापक ने छात्रों को नया पाठ सिखाया* (Teacher taught new lesson to students);\n     - *मैंने मित्र को नया चित्र दिखाया* (I showed new painting to friend)।",
      "examples": [
        {
          "target": "मैंने शहर के सबसे अनुभवी और कुशल दर्ज़ी से अपने विवाह समारोह के लिए एक बहुत सुंदर रेशमी शेरवानी सिलवाई।",
          "reading": "maine shahar ke sabse anubhavi aur kushal darzi se apne vivaah samaaroh ke liye ek bahut sundar reshmi sherwaani silvaayi. [mɛːnneː ʃəɦər keː səbseː ənʊbʱəʋiː ɔːr kʊʃəl d̪ərziː seː əpneː ʋɪʋaːɦ səmaːroːɦ keː lɪjeː eːk bəɦʊt̪ sʊn̪d̪ər reːʃmiː ʃeːrʋaːniː sɪlʋaːiː] (MY-nay SHUH-huhr kay SUHB-say uh-noobh-HUH-vee owr KOO-shuhl DUHR-zee say uhp-NAY vee-VAH suh-mah-ROH kay lee-ay ayk buh-hoot SOON-duhr RAYSH-mee shayr-VAH-nee seel-VAH-yee)",
          "translation": "I had a very beautiful silk sherwani stitched by the most experienced and skilled tailor of the city for my wedding ceremony."
        },
        {
          "target": "अमित ने अपने क्षेत्र के कुशल ऑटोमोबाइल मैकेनिक से अपनी पुरानी कार का पूरा इंजन और ब्रेक ठीक करवाए।",
          "reading": "Amit ne apne kshetr ke kushal automobile mechanic se apni puraani car ka poora engine aur brake theek karvaaye. [əmɪt̪ neː əpneː kʃeːt̪r keː kʊʃəl ɔːʈoːmoːbaːiːl mɛːkɛːnɪk seː əpniː pʊraːniː kaːr kaː puːraː ɪndʒən ɔːr breːk t̪ʰiːk kərʋaːjeː] (uh-MEET nay uhp-NAY KSHAY-truh kay KOO-shuhl aw-toh-moh-BEEL muh-KAY-neek say uhp-NEE poo-RAH-nee kahr kah POO-rah EEN-juhn owr brayk theek kuhr-VAH-yay)",
          "translation": "Amit got the entire engine and brakes of his old car repaired by a skilled automobile mechanic in his area."
        },
        {
          "target": "वरिष्ठ अध्यापक ने सभी नए जिज्ञासु विद्यार्थियों को ऐतिहासिक पुस्तकालय की सभी दुर्लभ और मूल्यवान पांडुलिपियाँ दिखाईं।",
          "reading": "varishth adhyaapak ne sabhi naye jigyaasu vidyaarthiyon ko aitihasik pustakaalay ki sabhi durlabh aur moolyavaan paandulipiyaan dikhaayein. [ʋərɪʂʈʰ əd̪ʱjaːpək neː səbʱiː nəjeː dʒɪɡjaːsʊ ʋɪd̪jaːrt̪ʰɪjõː koː ɛːt̪ɪhaːsɪk pʊst̪əkaːləj kiː səbʱiː d̪ʊrləbʱ ɔːr muːljəʋaːn paːɳɖʊlɪpɪjaː̃ d̪ɪkʰaːĩː] (vuh-REESH-th uhdh-YAH-puhk nay SUH-bhee nuh-YAY jeeg-YAH-soo veed-YAHR-thee-yohn koh ay-tee-HAH-seek poos-tuh-KAH-luy kee SUH-bhee door-LUHBH owr mool-yuh-VAHN pahn-doo-LEE-pee-yahn deekh-AH-yeen)",
          "translation": "The senior teacher showed all rare and valuable manuscripts of the historic library to all the new curious students."
        }
      ],
      "mnemonics": [
        "मध्यस्थ कारीगर = 'से' (दर्ज़ी से सिलवाया); प्रत्यक्ष सीखने/देखने वाला = 'को' (छात्रों को सिखाया)!"
      ],
      "culturalNotes": [
        "हिंदी में पेशेवर सेवाओं के लिए 'से करवाना' का प्रयोग शिष्टता और श्रम के सम्मान को प्रकट करता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "वाक्य «मैंने बढ़ई ___ सुंदर मेज़ बनवाई» में मध्यस्थ कारीगर के साथ कौन-सा परसर्ग आएगा?",
          "options": [
            "से (Barhai se banvaayi - Had made by the carpenter [intermediary agent])",
            "को (Dative error for intermediary)",
            "का (Genitive error)",
            "में (Locative error)"
          ],
          "answerIndex": 0,
          "explanation": "जिस मध्यस्थ से काम करवाया जाता है, उसके साथ «से» परसर्ग आता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «दीदी ने छोटे भाई ___ गणित का कठिन पाठ सिखाया» में सही परसर्ग भरिए:",
          "options": [
            "को (Chhote bhai ko sikhaya - Taught the difficult lesson to younger brother)",
            "से (Intermediary confusion)",
            "का (Genitive error)",
            "पर (Locative error)"
          ],
          "answerIndex": 0,
          "explanation": "प्रथम प्रेरणार्थक 'सिखाना' में सीखने वाले अनुभविता के साथ «को» आता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'से' (मध्यस्थ) और 'को' (अनुभविता) के सही समन्वय वाला वाक्य चुनिए:",
          "options": [
            "अधिकारी ने टाइपिस्ट से पत्र लिखवाया और मंत्री जी को दिखाया। (The officer got the letter typed by the typist and showed it to the minister.)",
            "अधिकारी ने टाइपिस्ट को पत्र लिखवाया और मंत्री जी से दिखाया।",
            "अधिकारी ने टाइपिस्ट में पत्र लिखवाया।",
            "अधिकारी ने टाइपिस्ट का पत्र दिखाया।"
          ],
          "answerIndex": 0,
          "explanation": "«टाइपिस्ट से लिखवाया» (मध्यस्थ) और «मंत्री जी को दिखाया» (अनुभविता) दोनों का कारक-विधान शत-प्रतिशत शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u13-l3": {
    "id": "hi-u13-l3",
    "subject": "hindi",
    "unit": 13,
    "lessonNumber": 3,
    "title": "संभावनार्थ क्रिया और मनोभाव: 'शायद', 'हो सकता है कि' (Subjunctive Mood with Expressions of Possibility)",
    "level": "B1",
    "objective": "अनिश्चितता, संभावना (Possibility), संदेह और परिकल्पना को व्यक्त करने वाले संभावनार्थ रूप (Subjunctive Mood) के प्रत्ययों और प्रेरक वाक्यांशों में निपुण होना।",
    "presentation": {
      "explanation": "हिंदी में जब कोई कार्य निश्चित तथ्य न होकर केवल संभावना (Possibility), संदेह (Doubt) या परिकल्पना हो, तब **संभावनार्थ क्रिया (Subjunctive Mood)** का प्रयोग होता है:\n\n1. संभावनार्थ क्रिया के प्रत्यय:\n   - मैं → **-ऊँ** (मैं चलूँ / खाऊँ / करूँ);\n   - तू → **-ए** (तू चले / खाए / करे);\n   - तुम → **-ओ** (तुम चलो / खाओ / करो);\n   - आप → **-एं** (आप चलें / खाएं / करें);\n   - वह / यह → **-ए** (वह चले / खाए / करे);\n   - हम / वे / ये → **-एं** (हम चलें / वे खाएं / ये करें)।\n\n2. संभावनार्थ के प्रेरक अव्यय (Triggers):\n   - **शायद (Perhaps)**: *शायद आज बारिश हो* (Perhaps it may rain today);\n   - **हो सकता है कि (It is possible that)**: *हो सकता है कि वह कल आए*;\n   - **ज़रूरी है कि (It is necessary that)**: *ज़रूरी है कि हम समय पर पहुँचें*;\n   - **मेरी इच्छा है कि (My wish is that)**: *मेरी इच्छा है कि आप सफल हों*।",
      "examples": [
        {
          "target": "शायद आज देर शाम तक अचानक मौसम बदल जाए और सूखे पर्वतीय क्षेत्र में भारी और मूसलाधार वर्षा हो।",
          "reading": "shaayad aaj der shaam tak achanak mausam badal jaaye aur sookhe parvateey kshetr mein bhaari aur mooslaadhaar varsha ho. [ʃaːjəd̪ aːdʒ d̪eːr ʃaːm t̪ək ətʃaːnək mɔːsəm bəd̪əl dʒaːjeː ɔːr suːkʰeː pərʋət̪iːj kʃeːt̪r mẽː bʱaːriː ɔːr muːslaːd̪ʱaːr ʋərʂaː hoː] (SHAH-yuhd ahj dayr shahm tuhk uh-CHAH-nuhk MOW-suhm BUH-duhl JAH-yay owr SOO-khay puhr-vuh-TEE-yuh KSHAY-truh mayn BHAH-ree owr moos-lah-DHAHR VUHR-shah hoh)",
          "translation": "Perhaps by late this evening the weather may suddenly change and heavy and torrential rain may occur in the dry mountainous region."
        },
        {
          "target": "हो सकता है कि वह इस अत्यंत महत्वपूर्ण और संवेदनशील विषय पर अपने सभी वरिष्ठ अधिकारियों से विस्तारपूर्वक परामर्श करे।",
          "reading": "ho sakta hai ki vah is atyant mahatvapoorna aur samvedansheel vishay par apne sabhi varishth adhikaariyon se vistaarpoorvak paraamarsh kare. [hoː səkjaː hɛː kɪ ʋəɦ ɪs ət̪jən̪t̪ məɦət̪ʋəpuːrɳə ɔːr səmʋeːd̪ənʃiːl ʋɪʂəj pər əpneː səbʱiː ʋərɪʂʈʰ əd̪ʱɪkaːrɪjõː seː ʋɪst̪aːrpuːrʋək pəraːmərʃ kəreː] (hoh SUHK-tah hy kee vuh ees uht-YUHNT muh-huht-vuh-POOR-nuh owr suhm-vay-duhn-SHEEL vee-SHUY puhr uhp-NAY SUH-bhee vuh-REESH-th uh-dhee-KAH-ree-yohn say vees-tahr-POOR-vuhk puh-RAH-muhrsh KUH-ray)",
          "translation": "It is possible that he might consult extensively with all his senior officers on this extremely important and sensitive matter."
        },
        {
          "target": "पर्यावरण संरक्षण के लिए यह नितांत आवश्यक है कि हम सभी अपने आसपास के वातावरण को पूर्णतः स्वच्छ और हरा-भरा रखें।",
          "reading": "paryaavaran sanrakshan ke liye yah nitaant aavashyak hai ki hum sabhi apne aaspaas ke vaataavaran ko poornatah swachh aur hara-bhara rakhein. [pərjaːʋərəɳ sən̪rəkʃəɳ keː lɪjeː jəɦ nɪt̪aːn̪t̪ aːʋəʃjək hɛː kɪ ɦəm səbʱiː əpneː aːspaːs keː ʋaːt̪aːʋərəɳ koː puːrɳət̪əɦ sʋətʃːʰ ɔːr ɦəraː bʱəraː rəkʰẽː] (puhr-yah-vuh-RUHN suhn-RUHK-shuhn kay lee-ay yuh nee-TAHNT ah-vush-YAHK hy kee huhm SUH-bhee uhp-NAY ahs-PAHS kay vah-tah-vuh-RUHN koh POOR-nuh-tuhk SVAHTCHH owr HUH-rah BHUH-rah ruh-KHAYN)",
          "translation": "For environmental conservation, it is absolutely essential that all of us keep our surrounding atmosphere completely clean and green."
        }
      ],
      "mnemonics": [
        "संभावना = शायद + verb stem + ए/एं/ऊँ (शायद वह आए, शायद हम चलें)!"
      ],
      "culturalNotes": [
        "विनम्रता और गैर-हठधर्मिता प्रकट करने के लिए 'हो सकता है कि मेरी बात ग़लत हो' जैसे संभावनार्थ वाक्य भारतीय संवाद में अत्यंत सम्मानित माने जाते हैं।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "वाक्य «शायद रोहन आज हमारे घर ___» में संभावनार्थ क्रिया का शुद्ध रूप क्या होगा?",
          "options": [
            "आए (Aaye - May come [subjunctive 3rd person singular])",
            "आएगा (Definite future error)",
            "आया था (Past tense error)",
            "आ रहा है (Continuous fact error)"
          ],
          "answerIndex": 0,
          "explanation": "'शायद' के साथ अन्य पुरुष एकवचन में संभावनार्थ रूप «आए» प्रयुक्त होता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «ज़रूरी है कि हम सब मिलकर यह कठिन कार्य ___» में सही क्रिया रूप भरिए:",
          "options": [
            "करें (Karein - Should/may do [subjunctive 1st person plural])",
            "करेंगे (Definite future error)",
            "किया था (Past error)",
            "करते (Habitual error)"
          ],
          "answerIndex": 0,
          "explanation": "«ज़रूरी है कि हम... करें» में 'हम' के अनुसार बहुवचन संभावनार्थ «करें» शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "संभावना और इच्छा (Subjunctive Mood) का सर्वथा शुद्ध वाक्य पहचानिए:",
          "options": [
            "मेरी दिली इच्छा है कि आप अपने जीवन के प्रत्येक लक्ष्य में अवश्य सफल हों। (It is my heartfelt wish that you certainly become successful in every goal of your life.)",
            "मेरी इच्छा है कि आप सफल होंगे कल।",
            "मेरी इच्छा है कि आप सफल हुए थे।",
            "मेरी इच्छा है कि आप सफल होते हैं।"
          ],
          "answerIndex": 0,
          "explanation": "«मेरी इच्छा है कि आप... सफल हों» में संभावनार्थ क्रिया का आदर्श शिष्ट प्रयोग है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u13-l4": {
    "id": "hi-u13-l4",
    "subject": "hindi",
    "unit": 13,
    "lessonNumber": 4,
    "title": "आशीर्वाद, अभिलाषा और शिष्ट अनुमति: संभावनार्थ का व्यावहारिक प्रयोग (Wishes, Blessings & Polite Permissions)",
    "level": "B1",
    "objective": "संभावनार्थ क्रिया का प्रयोग करके मंगलकामनाएं, पारंपरिक आशीर्वाद देना तथा शिष्टतापूर्वक अनुमति (Polite Permission) माँगने के वाक्य-विन्यास में निपुण होना।",
    "presentation": {
      "explanation": "संभावनार्थ काल केवल संदेह व्यक्त करने के लिए ही नहीं, बल्कि भारतीय संस्कृति में **आशीर्वाद, शुभकामना और शिष्ट अनुमति** के लिए अनिवार्य रूप से प्रयुक्त होता है:\n\n1. **आशीर्वाद एवं मंगलकामनाएं (Blessings & Well-Wishes)**:\n   - *ईश्वर आपका कल्याण करे!* (May God bless you!)\n   - *आप दीर्घायु हों!* (May you live long!)\n   - *आपकी यात्रा मंगलमय हो!* (May your journey be auspicious!)\n   - *सदा सुखी रहो!* (May you stay always happy!)\n   - *सत्य की विजय हो!* (May truth triumph!)\n\n2. **शिष्ट अनुमति व विचार-विमर्श (Polite Permission & Deliberation)**:\n   - जब किसी से अनुमति या सहमति लेनी हो:\n     - *क्या मैं अंदर आऊँ?* (May I come in? — 'क्या मैं अंदर आऊँगा' नहीं);\n     - *क्या अब हम प्रस्थान करें?* (Shall we depart now?);\n     - *मैं आपके लिए क्या लाऊँ?* (What may I bring for you?);\n     - *क्या हम इस प्रस्ताव पर विचार करें?* (Shall we consider this proposal?)।",
      "examples": [
        {
          "target": "सर्वशक्तिमान ईश्वर आपको इस नए और पुनीत कार्य में अपार सफलता, उत्तम स्वास्थ्य और दीर्घायु प्रदान करे!",
          "reading": "sarvashaktimaan ishwar aapko is naye aur puneet kaary mein apaar safalta, uttam svaasthya aur deerghaayu pradaan kare! [sərʋəʃəkt̪ɪmaːn iːʃʋər aːpkoː ɪs nəjeː ɔːr pʊniːt̪ kaːrjə mẽː əpaːr səfəlt̪aː ʊt̪ːəm sʋaːst̪ʰjə ɔːr d̪iːrɡʱaːjʊ prəd̪aːn kəreː] (suhr-vuh-shuhk-tee-MAHN EESH-vuhr ahp-KOH ees nuh-YAY owr poo-NEET KAHR-yuh mayn uh-PAHR suh-fuhl-TAH, oot-TUHM svahs-THYUH owr deer-ghah-YOO pruh-DAHN KUH-ray)",
          "translation": "May Almighty God grant you immense success, excellent health, and long life in this new and noble endeavor!"
        },
        {
          "target": "क्या अब हम इस लंबी और गंभीर औपचारिक चर्चा को यहीं समाप्त करके दोपहर के सुरुचिपूर्ण भोजन के लिए चलें?",
          "reading": "kya ab hum is lambi aur gambheer aupchaarik charcha ko yahin samaapt karke dopahar ke suruchipoorna bhojan ke liye chalein? [kjaː əb ɦəm ɪs ləmbiː ɔːr ɡəmbiːr ɔːptʃaːrɪk tʃərtʃaː koː jəɦĩː səmaːpt̪ kərkeː d̪oːpɛɦər keː sʊrʊtʃɪpuːrɳə bʱoːdʒən keː lɪjeː tʃəlẽː] (kyah uhb huhm ees LUHM-bee owr guhm-BHEER owp-chah-REEK chuhr-CHAH koh yuh-HEEN suh-MAHPT kuhr-kay doh-puh-huhr kay soo-roo-chee-POOR-nuh bhoy-JUHN kay lee-ay chuh-LAYN)",
          "translation": "Shall we now conclude this long and serious formal discussion right here and proceed for the elegant afternoon lunch?"
        },
        {
          "target": "आपके आगामी लंबे और कठिन विदेश प्रवास के सभी दिन अत्यंत सुखद, सुरक्षित और मंगलमय हों!",
          "reading": "aapke aagaami lambe aur kathin videsh pravaas ke sabhi din atyant sukhad, surakshit aur mangalmay hon! [aːpkeː aːɡaːmiː ləmbeː ɔːr kəʈʰɪn ʋɪd̪eːʃ prəʋaːs keː səbʱiː d̪ɪn ət̪jən̪t̪ sʊkʰəd̪ sʊrəkʃɪt̪ ɔːr məŋɡəlməj hõː] (ahp-KAY ah-GAH-mee LUHM-bay owr KUH-theen vee-DAYSH pruh-VAHS kay SUH-bhee deen uht-YUHNT SOO-khuhd, soo-ruhk-SHEET owr muhng-guhl-MUHY hohn)",
          "translation": "May all days of your upcoming long and challenging stay abroad be extremely pleasant, safe, and auspicious!"
        }
      ],
      "mnemonics": [
        "आशीर्वाद = ईश्वर कल्याण करे! अनुमति = क्या मैं आऊँ? दोनों में संभावनार्थ रूप!"
      ],
      "culturalNotes": [
        "बड़ों का चरण स्पर्श करने पर 'दीर्घायु भव' या 'सदा सुखी रहो' और विदाई के समय 'यात्रा मंगलमय हो' भारतीय संस्कृति के स्थायी शिष्टाचार हैं।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "शिष्टतापूर्वक अनुमति माँगने (Polite permission: May I come in?) के लिए शुद्ध वाक्य कौन-सा है?",
          "options": [
            "क्या मैं अंदर आऊँ? (Kya main andar aaoon? - May I come in? [polite subjunctive])",
            "क्या मैं अंदर आऊँगा? (Definite future fact error)",
            "मैं अंदर आया हूँ (Present perfect statement error)",
            "मैं अंदर आ रहा था (Past continuous narrative error)"
          ],
          "answerIndex": 0,
          "explanation": "अनुमति माँगने के लिए उत्तम पुरुष एकवचन संभावनार्थ «क्या मैं अंदर आऊँ?» शुद्ध है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "पारंपरिक मंगलकामना «भगवान आपकी हर मनोकामना पूर्ण ___» में सही क्रिया रूप भरिए:",
          "options": [
            "करे (Kare - May God fulfill [subjunctive blessing])",
            "करेगा (Future assertion error)",
            "किया था (Past error)",
            "कर रहा है (Continuous state error)"
          ],
          "answerIndex": 0,
          "explanation": "आशीर्वाद और शुभकामना के लिए संभावनार्थ «करे» का प्रयोग होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "आशीर्वाद और शिष्ट अनुमति दोनों के शुद्ध संभावनार्थ समन्वय वाला वाक्य पहचानिए:",
          "options": [
            "ईश्वर आपका मार्ग प्रशस्त करे, क्या अब हम सब प्रस्थान करें? (May God make your path clear, shall we all depart now?)",
            "ईश्वर आपका मार्ग प्रशस्त करेगा क्या हम प्रस्थान करेंगे?",
            "ईश्वर ने मार्ग प्रशस्त किया था क्या हम चलें?",
            "ईश्वर मार्ग प्रशस्त करता है हम चलते हैं।"
          ],
          "answerIndex": 0,
          "explanation": "«प्रशस्त करे» (आशीर्वाद) और «प्रस्थान करें» (शिष्ट अनुमति) दोनों संभावनार्थ रूप व्याकरणिक दृष्टि से सर्वथा शुद्ध हैं।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u13-l5": {
    "id": "hi-u13-l5",
    "subject": "hindi",
    "unit": 13,
    "lessonNumber": 5,
    "title": "प्रेरणार्थक एवं संभावनार्थ संरचनाओं का समेकन व संश्लेषण (Synthesis of Causatives & Subjunctive Mood)",
    "level": "B1",
    "objective": "प्रेरणार्थक क्रियाओं (कराना/करवाना) और संभावनार्थ मनोभावों (ताकि, जिससे कि, यदि... तो) के संश्लिष्ट संयोजनों में उच्च स्तरीय वाक्य निर्माण क्षमता विकसित करना।",
    "presentation": {
      "explanation": "जब प्रेरणार्थक क्रियाओं (Causatives) और संभावनार्थ रूपों (Subjunctive Mood) का एक साथ प्रयोग किया जाता है, तब उद्देश्यपरक (Purpose Clauses: ताकि / जिससे कि) और शर्तपरक (Conditionals) जटिल वाक्य बनते हैं:\n\n1. उद्देश्यपरक संरचनाएँ (Purpose Clauses with 'ताकि / जिससे कि'):\n   - सूत्र: **[मुख्य उपवाक्य (प्रेरणार्थक)] + ताकि / जिससे कि + [आश्रित उपवाक्य (संभावनार्थ)]**\n   - उदाहरण:\n     - *हम मैकेनिक से गाड़ी ठीक करवाएँ ताकि यात्रा में कोई बाधा न आए*;\n     - *अध्यापक छात्रों से अभ्यास करवाते हैं जिससे कि वे परीक्षा में सफल हों*।\n\n2. विनम्र प्रस्ताव एवं सशर्त अनुमति (Polite Proposals & Conditionals):\n   - *यदि आप कहें, तो मैं दर्ज़ी से आपकी पोशाक सिलवा दूँ* (If you say, I may have your dress stitched by the tailor);\n   - *हम चाहते हैं कि आप किसी विशेषज्ञ से यह काम करवाएँ* (We want that you get this work done by an expert)।",
      "examples": [
        {
          "target": "हम चाहते हैं कि आप समय रहते किसी अनुभवी वास्तुकार से इस विशाल भवन का विस्तृत नक्शा बनवा लें ताकि निर्माण कार्य निर्बाध गति से चले।",
          "reading": "hum chaahte hain ki aap samay rahte kisi anubhavi vaastukaar se is vishaal bhavan ka vistrit naksha banva lein taaki nirmaan kaary nirbaadh gati se chale. [ɦəm tʃaːɦt̪eː hɛ̃ː kɪ aːp səməj rəɦt̪eː kɪsiː ənʊbʱəʋiː ʋaːst̪ʊkaːr seː ɪs ʋɪʃaːl bʱəʋən kaː ʋɪst̪rɪt̪ nəkʃaː bənʋaː lẽː t̪aːkɪ nɪrmaːɳ kaːrjə nɪrbaːd̪ʱ ɡət̪ɪ seː tʃəleː] (huhm CHAHH-tay hy-n kee ahp SUH-muy RUH-h-tay kee-SEE uh-noobh-HUH-vee vahs-too-KAHR say ees vee-SHAHL BHUH-vuhn kah vees-TREE-t NUHK-shah buhn-VAH layn TAH-kee neer-MAHN KAHR-yuh neer-BAHDH GUH-tee say CHUH-lay)",
          "translation": "We want that you get the detailed blueprint of this massive building prepared in time by an experienced architect so that the construction work may proceed without impediment."
        },
        {
          "target": "यदि आपकी कृपापूर्ण अनुमति हो, तो मैं आज ही कार्यालय के वरिष्ठ सहायक से सभी महत्वपूर्ण दस्तावेज़ विधिवत तैयार करवा दूँ।",
          "reading": "yadi aapki kripaapoorna anumati ho, to main aaj hi kaaryaalay ke varishth sahaayak se sabhi mahatvapoorna dastaavez vidhivat taiyaar karva doon. [jəd̪ɪ aːpkiː krɪpaːpuːrɳə ənʊmət̪ɪ hoː t̪oː mɛː̃ aːdʒ ɦiː kaːrjaːləj keː ʋərɪʂʈʰ səɦaːjək seː səbʱiː məɦət̪ʋəpuːrɳə d̪əst̪aːʋeːz ʋɪd̪ʱɪʋət̪ t̪ɛːjaːr kərʋaː d̪uː̃] (YUD-ee ahp-KEE kree-pah-POOR-nuh uh-noo-MUH-tee hoh, toh my ahj hee kahr-YAH-luy kay vuh-REESH-th suh-HAH-yuhk say SUH-bhee muh-huht-vuh-POOR-nuh duhs-tah-VAYZ vee-dhee-VUHT ty-YAHR kuhr-VAH doon)",
          "translation": "If there be your gracious permission, then I may have all important documents duly prepared today itself through the senior assistant of the office."
        },
        {
          "target": "माता-पिता की हार्दिक अभिलाषा है कि उनका होनहार पुत्र जीवन के हर क्षेत्र में खूब परिश्रम करे और कुल का नाम रोशन करे।",
          "reading": "maata-pita ki haardik abhilaasha hai ki unka honhaar putr jeevan ke har kshetr mein khoob parishram kare aur kul ka naam roshan kare. [maːt̪aː pɪt̪aː kiː ɦaːrd̪ɪk əbʱɪlaːʃaː hɛː kɪ ʊnkaː hoːnɦaːr pʊt̪r dʒiːʋən keː ɦər kʃeːt̪r mẽː kʰuːb pərɪʃrəm kəreː ɔːr kʊl kaː naːm roːʃən kəreː] (MAH-tah pee-TAH kee HAHR-deek uh-bhee-LAH-shah hy kee OON-kah hohn-HAHR pootr JEE-vuhn kay huhr KSHAY-truh mayn khoob puh-REESH-ruhm KUH-ray owr kool kah nahm ROH-shuhn KUH-ray)",
          "translation": "It is the heartfelt aspiration of the parents that their promising son may work very hard in every sphere of life and bring honor to the family name."
        }
      ],
      "mnemonics": [
        "करवाना (Causative) + ताकि ... चले (Subjunctive)! उद्देश्य व प्रेरणा का आदर्श संगम!"
      ],
      "culturalNotes": [
        "पारिवारिक और संस्थागत निर्णयों में 'हम चाहते हैं कि आप करवा लें ताकि...' की भाषा सम्मान, परामर्श और सहयोग का उच्च मानदंड मानी जाती है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "उद्देश्यपरक वाक्य «मैं दर्ज़ी से कपड़े सिलवाऊँगा ताकि समय पर ___» में सही संभावनार्थ रूप क्या है?",
          "options": [
            "मिल जाएँ (Mil jaayein - May be received [subjunctive plural for clothes])",
            "मिलेंगे (Definite future assertion)",
            "मिले थे (Past error)",
            "मिलते हैं (Habitual error)"
          ],
          "answerIndex": 0,
          "explanation": "'ताकि' (so that) के बाद उद्देश्य उपवाक्य में संभावनार्थ «मिल जाएँ» आता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «यदि आप चाहें, तो मैं माली से बगीचे की सफ़ाई ___» में शुद्ध क्रिया रूप भरिए:",
          "options": [
            "करवा दूँ (Karva doon - May have done through the gardener [causative subjunctive])",
            "करूँगा निश्चित (Definite future error)",
            "करवाया था (Past error)",
            "करता हूँ (Present simple error)"
          ],
          "answerIndex": 0,
          "explanation": "सशर्त प्रस्ताव में मध्यस्थ 'माली' के साथ द्वितीय प्रेरणार्थक संभावनार्थ «करवा दूँ» शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "प्रेरणार्थक और संभावनार्थ के संश्लिष्ट समन्वय वाला सर्वथा शुद्ध वाक्य चुनिए:",
          "options": [
            "हम प्रबंधक से नई व्यवस्था लागू करवाएँ ताकि सभी कर्मचारियों को सुविधा हो। (Let us have the new system implemented by the manager so that all employees may have convenience.)",
            "हम प्रबंधक को नई व्यवस्था लागू करेंगे ताकि कर्मचारियों को सुविधा होगी।",
            "हम प्रबंधक से व्यवस्था लागू किया था सुविधा हुई थी।",
            "हम प्रबंधक में व्यवस्था लागू करवाते हैं सुविधा होती है।"
          ],
          "answerIndex": 0,
          "explanation": "«प्रबंधक से लागू करवाएँ» (मध्यस्थ प्रेरणार्थक संभावनार्थ) और «ताकि... सुविधा हो» (उद्देश्य संभावनार्थ) का संश्लेषण व्याकरणिक दृष्टि से उत्कृष्ट है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u14-l1": {
    "id": "hi-u14-l1",
    "subject": "hindi",
    "unit": 14,
    "lessonNumber": 1,
    "title": "पूर्वकालिक क्रिया का आधारभूत निर्माण: धातु + कर / करके (Basic Conjunctive Participle: Dhaatu + kar / karke)",
    "level": "B1",
    "objective": "एक ही कर्ता द्वारा क्रमिक रूप से किए जाने वाले दो कार्यों में पहले कार्य को 'धातु + कर / करके' (Conjunctive Participle) में बदलने और अंतिम मुख्य क्रिया के आधार पर 'ने' का सटीक निर्धारण करने में दक्षता प्राप्त करना।",
    "presentation": {
      "explanation": "जब एक ही कर्ता दो क्रियाएं एक के बाद एक (Sequentially) करता है, तब पहली क्रिया को **पूर्वकालिक क्रिया (Conjunctive Participle)** कहते हैं। इसका निर्माण मुख्य धातु में **'कर'** या **'करके'** जोड़कर किया जाता है:\n\n1. निर्माण का सूत्र:\n   - **मूल धातु + कर / करके**\n   - पढ़ + कर = **पढ़कर / पढ़ करके** (having read / after reading);\n   - खा + कर = **खाकर** (having eaten);\n   - जा + कर = **जाकर** (having gone);\n   - आ + कर = **आकर** (having come);\n   - देख + कर = **देखकर** (having seen);\n   - सो + कर = **सोकर** (having slept)।\n   - (अपवाद: 'करना' धातु के साथ 'करके' का प्रयोग मानक है: *काम करके*, 'करकर' नहीं)।\n\n2. 'ने' परसर्ग का नियम (Final Verb Dominance Rule):\n   - वाक्य में 'ने' लगेगा या नहीं, इसका निर्धारण पूर्वकालिक क्रिया नहीं बल्कि **वाक्य की अंतिम मुख्य क्रिया** करती है:\n     - *रोहन खाना खाकर सो गया* ('सो जाना' अकर्मक है → 'ने' नहीं लगेगा);\n     - *रोहन ने खाना खाकर चाय पी* ('पीना' सकर्मक है → 'रोहन ने' लगेगा)।",
      "examples": [
        {
          "target": "वह सुबह बहुत जल्दी उठकर ताज़ी शीतल हवा में सैर करता है और फिर स्नान करके पौष्टिक नाश्ता करता है।",
          "reading": "vah subah bahut jaldi uthkar taazi sheetal hava mein sair karta hai aur phir snaan karke paushtik naashta karta hai. [ʋəɦ sʊbəɦ bəɦʊt̪ dʒəldiː ʊʈʰkər t̪aːziː ʃiːt̪əl ɦəʋaː mẽː sɛːr kərt̪aː hɛː ɔːr pʰɪr snaːn kərkeː pɔːʂʈɪk naːʃt̪aː kərt̪aː hɛː] (vuh SOO-buh buh-hoot JUHL-dee OOTH-kuhr TAH-zee SHEE-tuhl huh-VAH mayn syr KUHR-tah hy owr feer snahn KUHR-kay powsh-TEEK nahsh-TAH KUHR-tah hy)",
          "translation": "He wakes up very early in the morning, goes for a walk in the fresh cool air, and then after bathing takes a nutritious breakfast."
        },
        {
          "target": "अमित ने विश्वविद्यालय के केंद्रीय पुस्तकालय से कई महत्वपूर्ण संदर्भ ग्रंथ लेकर पूरी रात एकाग्रता से गहन अध्ययन किया।",
          "reading": "Amit ne vishvavidyaalay ke kendreey pustakaalay se kayi mahatvapoorna sandarbh granth lekar poori raat ekaagrata se gahan adhyayan kiya. [əmɪt̪ neː ʋɪʃʋəʋɪd̪jaːləj keː keːn̪d̪riːj pʊst̪əkaːləj seː kəiː məɦət̪ʋəpuːrɳə sən̪d̪ərbʱ ɡrən̪t̪ʰ leːkər puːriː raːt̪ eːkaːɡrət̪aː seː ɡɛɦən əd̪ʱjəjən kɪjaː] (uh-MEET nay veesh-vuh-veed-YAH-luy kay kayn-DREE-yuh poos-tuh-KAH-luy say kuh-EE muh-huht-vuh-POOR-nuh suhn-DUHRBH gruhnth LAY-kuhr POO-ree raht ay-KAHG-ruh-tah say GUH-huhn uhdh-YUH-yuhn kee-YAH)",
          "translation": "Amit took several important reference volumes from the university's central library and studied deeply with concentration the entire night."
        },
        {
          "target": "दिनभर की लंबी और कठिन पर्वतीय यात्रा समाप्त करके सभी थके हुए विदेशी यात्री विश्राम गृह में जाकर चैन से सो गए।",
          "reading": "dinbhar ki lambi aur kathin parvateey yaatra samaapt karke sabhi thake huye videshi yaatri vishraam grih mein jaakar chain se so gaye. [d̪ɪnbʱər kiː ləmbiː ɔːr kəʈʰɪn pərʋət̪iːj jaːt̪raː səmaːpt̪ kərkeː səbʱiː t̪ʰəkeː hʊjeː ʋɪd̪eːʃiː jaːt̪riː ʋɪʃraːm ɡrɪɦ mẽː dʒaːkər tʃɛːn seː soː ɡəjeː] (DEEN-bhuhr kee LUHM-bee owr KUH-theen puhr-vuh-TEE-yuh YAH-trah suh-MAHPT KUHR-kay SUH-bhee thuh-KAY HOO-yay vee-DAY-shee YAH-tree veesh-RAHM greeh mayn JAH-kuhr chyn say soh GUH-yay)",
          "translation": "After completing the daylong long and difficult mountain trek, all the tired foreign tourists went to the rest house and fell peacefully asleep."
        }
      ],
      "mnemonics": [
        "First action = Verb Stem + कर (खाकर, जाकर)! 'ने' का फैसला अंतिम क्रिया करेगी!"
      ],
      "culturalNotes": [
        "हिंदी की कथा शैली और औपचारिक वार्तालाप में वाक्यों को छोटा, सुगठित और प्रवाहमयी बनाने के लिए पूर्वकालिक क्रिया 'कर' सबसे सशक्त व्याकरणिक साधन है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "दो क्रियाओं «रोहन ने खाना खाया» और «रोहन सो गया» को पूर्वकालिक क्रिया से जोड़ने वाला शुद्ध वाक्य कौन-सा है?",
          "options": [
            "रोहन खाना खाकर सो गया (Rohan khaana khaakar so gaya - Having eaten, Rohan fell asleep [no 'ne' with so gaya])",
            "रोहन ने खाना खाकर सो गया (अंतिम अकर्मक क्रिया में अशुद्ध 'ने')",
            "रोहन खाना खाया और सो दिया (अमानक संयोजक)",
            "रोहन खाकर ने सो गया (पदक्रम दोष)"
          ],
          "answerIndex": 0,
          "explanation": "चूँकि अंतिम क्रिया 'सो जाना' अकर्मक है, अतः पूरे वाक्य में कर्ता बिना 'ने' के «रोहन खाना खाकर सो गया» रहेगा।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «छात्र ने गृहकार्य पूरा ___ अध्यापक को दिखाया» में सही पूर्वकालिक रूप भरिए:",
          "options": [
            "करके (Karke - Having done / completed the homework)",
            "करता हुआ (Continuous participle error)",
            "किया था (Past tense conjunction error)",
            "करने पर भी (Concessive error)"
          ],
          "answerIndex": 0,
          "explanation": "धातु 'करना' का मानक पूर्वकालिक रूप «करके» है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "पूर्वकालिक क्रिया और अंतिम क्रिया के 'ने' समन्वय वाला पूर्णतः शुद्ध वाक्य चुनिए:",
          "options": [
            "अमित ने बाज़ार जाकर फल खरीदे और घर आकर सबको खिलाए। (Amit went to the market and bought fruits, and having come home fed them to all.)",
            "अमित बाज़ार जाकर फल खरीदा और खिला दिया।",
            "अमित ने घर जाकर ने सो गया।",
            "अमित जाकर फल खरीद लिया था।"
          ],
          "answerIndex": 0,
          "explanation": "«अमित ने बाज़ार जाकर... फल खरीदे और घर आकर... खिलाए» में 'खरीदना' और 'खिलाना' सकर्मक क्रियाओं के अनुसार 'ने' का प्रयोग शत-प्रतिशत शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u14-l2": {
    "id": "hi-u14-l2",
    "subject": "hindi",
    "unit": 14,
    "lessonNumber": 2,
    "title": "कारण, साधन और रीति का बोध: 'कर' के विशिष्ट अर्थ (Kar as Manner, Cause & Means: हँसकर, चलकर, सोच-समझकर)",
    "level": "B1",
    "objective": "पूर्वकालिक प्रत्यय 'कर' का प्रयोग केवल समय-क्रम में ही नहीं, बल्कि क्रिया-विशेषण (Manner), कारण (Cause) और साधन (Means) के रूप में करने की विधा में निपुण होना।",
    "presentation": {
      "explanation": "हिंदी में **'कर'** प्रत्यय केवल समय-क्रम (Sequence) ही नहीं दर्शाता, बल्कि क्रिया-विशेषण के तीन प्रमुख अर्थ भी व्यक्त करता है:\n\n1. **रीतिवाचक क्रिया-विशेषण (Manner / How an action is done)**:\n   - *हँसकर बोला* (spoke smilingly / with a smile);\n   - *मुस्कुराकर देखा* (looked smilingly);\n   - *दौड़कर आया* (came running);\n   - *सोच-समझकर कदम उठाया* (took a step thoughtfully);\n   - *संभलकर चलो* (walk carefully)।\n\n2. **कारणवाचक (Cause / Reason — 'On account of / Hearing/Seeing X')**:\n   - *यह दुखद समाचार सुनकर वह रो पड़ा* (Hearing this sad news he burst into tears);\n   - *बिजली की कड़क देखकर बच्चा डर गया* (Seeing the lightning flash the child got scared)।\n\n3. **साधन / माध्यम (Means / Instrument — 'By doing X')**:\n   - *कठिन परिश्रम करके उसने परीक्षा में शीर्ष स्थान प्राप्त किया* (By working hard he attained top rank)।",
      "examples": [
        {
          "target": "उसने बहुत सोच-समझकर और सभी व्यावहारिक पक्षों पर गहराई से विचार करके यह अत्यंत महत्वपूर्ण और साहसिक निर्णय लिया।",
          "reading": "usne bahut soch-samajhkar aur sabhi vyaavahaarik pakshon par gehraai se vichaar karke yah atyant mahatvapoorna aur saahasik nirnay liya. [ʊsneː bəɦʊt̪ soːtʃ səmədʒʱkər ɔːr səbʱiː ʋjaːʋəɦaːrɪk pəkʃõː pər ɡɛɦraːiː seː ʋɪtʃaːr kərkeː jəɦ ət̪jən̪t̪ məɦət̪ʋəpuːrɳə ɔːr saːɦsiːk nɪrɳəj lɪjaː] (oos-NAY buh-hoot SOHCH-suh-muhjh-kuhr owr SUH-bhee vyah-vuh-HAH-reek PUHK-shohn puhr GUH-h-rah-ee say vee-CHAHR KUHR-kay yuh uht-YUHNT muh-huht-vuh-POOR-nuh owr sah-huh-SEEK NEER-nuy LEE-yah)",
          "translation": "He took this extremely important and courageous decision after thinking very carefully and contemplating deeply on all practical aspects."
        },
        {
          "target": "वरिष्ठ अध्यापक की अत्यंत प्रेरणादायक और उत्साहवर्धक बातें सुनकर सभी निराश विद्यार्थियों के उदास चेहरों पर चमक आ गई।",
          "reading": "varishth adhyaapak ki atyant prernadaayak aur utsaahvardhak baatein sunkar sabhi niraash vidyaarthiyon ke udaas chehron par chamak aa gayi. [ʋərɪʂʈʰ əd̪ʱjaːpək kiː ət̪jən̪t̪ preːrɳəd̪aːjək ɔːr ʊt̪saːɦʋərd̪ʱək baːt̪ẽː sʊnkər səbʱiː nɪraːʃ ʋɪd̪jaːrt̪ʰɪjõː keː ʊd̪aːs tʃeːɦrõː pər tʃəmək aː ɡəiː] (vuh-REESH-th uhdh-YAH-puhk kee uht-YUHNT prayr-nuh-DAH-yuhk owr oot-sah-huhr-DHUHK bah-TAYN SOON-kuhr SUH-bhee nee-RAHSH veed-YAHR-thee-yohn kay oo-DAHS CHAY-h-rohn puhr CHUH-muhk ah GUH-yee)",
          "translation": "Hearing the senior teacher's extremely inspiring and encouraging words, a glow returned to the gloomy faces of all disappointed students."
        },
        {
          "target": "उस होनहार और लगनशील ग्रामीण युवक ने दिन-रात अनवरत कठिन परिश्रम करके अपनी प्रतिष्ठित राष्ट्रीय प्रशासनिक परीक्षा उत्तीर्ण की।",
          "reading": "us honhaar aur lagansheel graameen yuvak ne din-raat anavarat kathin parishram karke apni pratishthit raashtreey prashaasnik pareeksha utteerna ki. [ʊs hoːnɦaːr ɔːr ləɡənʃiːl ɡraːmiːɳ jʊʋək neː d̪ɪn raːt̪ ənəʋrət̪ kəʈʰɪn pərɪʃrəm kərkeː əpniː prət̪ɪʂʈʰɪt̪ raːʂʈriːj prəʃaːsnɪk pəriːkʃaː ʊt̪ːiːrɳə kiː] (oos hohn-HAHR owr luh-guhn-SHEEL grah-MEEN YOO-vuhk nay DEEN-raht uh-nuh-vuh-RUHT KUH-theen puh-REESH-ruhm KUHR-kay uhp-NEE pruh-teesh-THEET rahsh-TREE-yuh pruh-SHAH-sneek puh-REEK-shah oot-TEER-nuh kee)",
          "translation": "By working incessantly hard day and night, that promising and dedicated rural young man passed his prestigious national administrative examination."
        }
      ],
      "mnemonics": [
        "रीति = सोच-समझकर; कारण = सुनकर रो पड़ा; साधन = परिश्रम करके सफलता पाई!"
      ],
      "culturalNotes": [
        "हिंदी में 'हँसमुख' स्वभाव को दर्शाने के लिए 'हँसकर मिलना' (to meet with a smile) भारतीय आतिथ्य की सर्वोपरि पहचान है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "रीतिवाचक क्रिया-विशेषण (Manner: to speak with a smile) व्यक्त करने वाला वाक्य कौन-सा है?",
          "options": [
            "उसने मुस्कुराकर मेरा स्वागत किया (Usne muskuraakar mera svaagat kiya - He welcomed me smilingly)",
            "उसने मुस्कुराया और स्वागत हुआ (असंगत वाक्य रचना)",
            "वह मुस्कुराते स्वागत करता है (अमानक रूप)",
            "मुस्कुराना से स्वागत किया (विभक्ति दोष)"
          ],
          "answerIndex": 0,
          "explanation": "रीति (ढंग) दर्शाने हेतु 'मुस्कुराना' में 'कर' जोड़कर «मुस्कुराकर स्वागत किया» शुद्ध है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "कारण (Cause) व्यक्त करने वाला वाक्य पहचानिए:",
          "options": [
            "अचानक शेर की दहाड़ सुनकर शिकारी चौंक उठा (Hearing the lion's roar suddenly, the hunter was startled)",
            "शिकारी शेर को देखा और दौड़ा (साधारण संयुक्त वाक्य)",
            "शिकारी दौड़ता हुआ गया (कृदंत रूप)",
            "शिकारी ने शेर से डर गया (कारक अशुद्धि)"
          ],
          "answerIndex": 0,
          "explanation": "«शेर की दहाड़ सुनकर» क्रिया के कारण (Reason) का सटीक बोध कराती है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'साधन' (Means: by doing hard work) के अर्थ में 'कर' का शुद्ध प्रयोग चुनिए:",
          "options": [
            "सच्ची लगन से अभ्यास करके ही किसी भी कला में प्रवीणता पाई जा सकती है। (Only by practicing with true dedication can proficiency be attained in any art.)",
            "अभ्यास करते ही कला पाई जाती है।",
            "अभ्यास करने के बिना कला आती है।",
            "अभ्यास किया तो कला खो गई।"
          ],
          "answerIndex": 0,
          "explanation": "«अभ्यास करके ही... प्रवीणता पाई जा सकती है» में 'करके' साधन (Means) का सर्वथा मानक रूप प्रस्तुत करता है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u14-l3": {
    "id": "hi-u14-l3",
    "subject": "hindi",
    "unit": 14,
    "lessonNumber": 3,
    "title": "समान कर्ता नियम और कर्ता-अन्वय (Same Subject Constraint with कर)",
    "level": "B1",
    "objective": "पूर्वकालिक क्रिया 'कर' के सबसे महत्वपूर्ण नियम — दोनों क्रियाओं का कर्ता एक ही होना (Same Subject Constraint) — को समझना और असंबद्ध कृदंत दोष (Dangling Participle) से बचना।",
    "presentation": {
      "explanation": "हिंदी व्याकरण का अकाट्य नियम है कि **'कर / करके' का कर्ता और मुख्य क्रिया का कर्ता अनिवार्य रूप से एक ही व्यक्ति/संज्ञा होना चाहिए**:\n\n1. शुद्ध समन्वय (Same Subject):\n   - *अमित ने घर पहुँचकर चाय पी* (अमित ही पहुँचा, अमित ने ही चाय पी → शुद्ध);\n   - *विद्यार्थी ने कक्षा में बैठकर निबंध लिखा* (विद्यार्थी ही बैठा, उसी ने लिखा → शुद्ध)।\n\n2. असंबद्ध कृदंत का व्याकरणिक दोष (Dangling Participle Error):\n   - यदि दोनों क्रियाओं के कर्ता अलग-अलग हों, तो 'कर' का प्रयोग **अशुद्ध** हो जाता है:\n     - अशुद्ध: *घर पहुँचकर ज़ोरदार बारिश शुरू हो गई* (यहाँ 'बारिश' घर नहीं पहुँची! बारिश पहुँची जैसा हास्यास्पद अर्थ निकलता है);\n     - शुद्ध: *मेरे घर पहुँचते ही बारिश शुरू हो गई* (तत्कालिक कृदंत) अथवा *जब मैं घर पहुँचा, तब बारिश शुरू हो गई*।",
      "examples": [
        {
          "target": "जाँच अधिकारी ने सभी गोपनीय संचिकाओं की गहराई से छानबीन करके अपनी अंतिम आधिकारिक रिपोर्ट सक्षम प्राधिकारी को प्रस्तुत की।",
          "reading": "jaanch adhikaari ne sabhi gopaneey sanchikaaon ki gehraai se chhaanbeen karke apni antim aadhikaarik report saksham praadhikaari ko prastut ki. [dʒaːntʃ əd̪ʱɪkaːriː neː səbʱiː ɡoːpniːj səntʃɪkaːõː kiː ɡɛɦraːiː seː tʃʰaːnbiːn kərkeː əpniː ən̪t̪ɪm aːd̪ʱɪkaːrɪk rɪpoːrʈ səkʃəm praːd̪ʱɪkaːriː koː prəst̪ʊt̪ kiː] (JAHNCH uh-dhee-KAH-ree nay SUH-bhee gohp-NEE-yuh suhn-chee-KAH-ohn kee GUH-h-rah-ee say chhhahn-BEEN KUHR-kay uhp-NEE UHN-teem ah-dhee-KAH-reek ree-POHRT SUHK-shuhm prah-dhee-KAH-ree koh pruhs-TOOT kee)",
          "translation": "The investigating officer submitted his final official report to the competent authority after examining deeply all confidential files."
        },
        {
          "target": "जब दोनों क्रियाओं का कर्ता एक ही व्यक्ति हो, तब 'रोहन ने पत्र लिखकर डाकपेटी में डाल दिया' कहना व्याकरण की दृष्टि से पूर्णतः शुद्ध है।",
          "reading": "jab donon kriyaaon ka karta ek hi vyakti ho, tab 'Rohan ne patr likhkar daakpeti mein daal diya' kahna vyaakaran ki drishti se poornatah shuddh hai. [dʒəb d̪oːnõː krɪjaːõː kaː kərtaː eːk ɦiː ʋjəkt̪ɪ hoː t̪əb roːɦən neː pət̪r lɪkʰkər ddaːkpeːʈiː mẽː ddaːl d̪ɪjaː kəɦnaː ʋjaːkərəɳ kiː drɪʂʈɪ seː puːrɳət̪əɦ ʃʊd̪ːʱ hɛː] (juhb DOH-nohn kree-YAH-ohn kah KUHR-tah ayk hee VYUHNK-tee hoh, tuhb 'ROH-huhn nay PUH-truh LEEKH-kuhr DAHK-pay-tee mayn dahl DEE-yah' KUH-h-nah vyah-kuh-RUHN kee DREESH-tee say POOR-nuh-tuhk SHOODH-dh hy)",
          "translation": "When the subject of both actions is the same person, then saying 'Rohan, having written the letter, dropped it into the postbox' is completely correct grammatically."
        },
        {
          "target": "वह विदेशी भाषा के कठिन शब्दों का मानक उच्चारण ध्यानपूर्वक सुनकर अपनी वाणी में उनका बार-बार अभ्यास करता है।",
          "reading": "vah videshi bhaasha ke kathin shabdon ka maanak uchhaaran dhyaanpoorvak sunkar apni vaani mein unka baar-baar abhyaas karta hai. [ʋəɦ ʋɪd̪eːʃiː bʱaːʂaː keː kəʈʰɪn ʃəbd̪õː kaː maːnək ʊtʃːʰaːrəɳ d̪ʱjaːnpuːrʋək sʊnkər əpniː ʋaːɳiː mẽː ʊnkaː baːr baːr əbʱjaːs kərt̪aː hɛː] (vuh vee-DAY-shee BHAH-shah kay KUH-theen SHUHB-dohn kah MAH-nuhk ootch-CHAH-ruhn dhyahn-POOR-vuhk SOON-kuhr uhp-NEE VAH-nee mayn OON-kah bahr-bahr uhbh-YAH-sah KUHR-tah hy)",
          "translation": "Having listened carefully to the standard pronunciation of difficult foreign words, he practices them repeatedly in his speech."
        }
      ],
      "mnemonics": [
        "कर का नियम: कर्ता एक ही होना चाहिए! 'घर पहुँचकर बारिश हुई' गलत है, 'मेरे पहुँचते ही बारिश हुई' सही है!"
      ],
      "culturalNotes": [
        "प्रतियोगी परीक्षाओं (UPSC, राज्य लोक सेवा आयोग) की हिंदी व्याकरण परीक्षा में 'समान कर्ता नियम' से संबंधित शुद्धि-अशुद्धि का प्रश्न अनिवार्य रूप से पूछा जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "समान कर्ता नियम (Same Subject Constraint) के आधार पर व्याकरणिक रूप से शुद्ध वाक्य पहचानिए:",
          "options": [
            "मैंने स्टेशन पहुँचकर टिकट खरीदी (Maine station pahunchkar ticket khareedi - Reaching station I bought ticket [same subject 'I'])",
            "स्टेशन पहुँचकर ट्रेन छूट गई (अशुद्ध: ट्रेन स्टेशन नहीं पहुँची)",
            "दवा खाकर बुखार कम हो गया (अशुद्ध: बुखार ने दवा नहीं खाई)",
            "पत्र लिखकर डाकिया ले गया (अशुद्ध: डाकिया ने पत्र नहीं लिखा)"
          ],
          "answerIndex": 0,
          "explanation": "«मैंने स्टेशन पहुँचकर टिकट खरीदी» में दोनों क्रियाओं (पहुँचना और खरीदना) का कर्ता एक ही ('मैं') होने से वाक्य शुद्ध है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "अशुद्ध वाक्य «घंटी बजकर कक्षा समाप्त हो गई» का मानक शुद्ध रूपांतरण क्या होगा?",
          "options": [
            "घंटी बजते ही कक्षा समाप्त हो गई (Ghanti bajte hi kaksha samaapt ho gayi - As soon as bell rang, class ended)",
            "घंटी ने बजकर कक्षा समाप्त की (अस्वाभाविक कर्ता)",
            "कक्षा घंटी बजाकर समाप्त हुई (विपरीत अर्थ)",
            "घंटी बजा तो कक्षा हो गई (अमानक संरचना)"
          ],
          "answerIndex": 0,
          "explanation": "अलग-अलग कर्ता (घंटी और कक्षा) होने पर पूर्वकालिक 'कर' के स्थान पर तत्कालिक कृदंत «घंटी बजते ही» का प्रयोग शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "समान कर्ता नियम का पूर्ण पालन करने वाला मानक वाक्य चुनिए:",
          "options": [
            "वैज्ञानिक ने प्रयोगशाला में प्रवेश करके नए उपकरण चालू किए। (The scientist entered the lab and turned on the new instruments.)",
            "प्रयोगशाला में प्रवेश करके उपकरण चालू हो गए।",
            "दरवाज़ा खोलकर हवा अंदर आई।",
            "किताब पढ़कर पृष्ठ फट गया।"
          ],
          "answerIndex": 0,
          "explanation": "«वैज्ञानिक ने... प्रवेश करके... उपकरण चालू किए» में प्रवेश करने और चालू करने वाला कर्ता एक ही ('वैज्ञानिक') है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u14-l4": {
    "id": "hi-u14-l4",
    "subject": "hindi",
    "unit": 14,
    "lessonNumber": 4,
    "title": "'कर' बनाम 'ते ही' (तत्कालिकता) एवं 'के बाद' (Participle vs Immediate Participle vs ke baad)",
    "level": "B1",
    "objective": "सामान्य पूर्वकालिक क्रिया ('कर'), तत्कालिक क्रिया ('धातु + ते ही') और समय-अंतराल सूचक ('के बाद') के सूक्ष्म अर्थ-भेदों और वाक्य-संरचना में भेद स्पष्ट करना।",
    "presentation": {
      "explanation": "क्रमिक घटनाओं को व्यक्त करने के लिए हिंदी में तीन अलग-अलग व्याकरणिक प्रतिमान हैं:\n\n1. **सामान्य पूर्वकालिक क्रिया (धातु + कर)**:\n   - सामान्य क्रम दर्शाता है (समान कर्ता आवश्यक):\n     - *वह चाय पीकर दफ़्तर गया* (Having drunk tea, he went to office).\n\n2. **तत्कालिक कृदंत (धातु + ते ही — 'As soon as')**:\n   - शून्य समय-अंतराल (Instant action / Immediate sequence) दर्शाता है (कर्ता समान या भिन्न हो सकते हैं):\n     - *स्टेशन पहुँचते ही ट्रेन चल पड़ी* (As soon as I reached the station, the train departed);\n     - *दवा लेते ही दर्द बंद हो गया* (As soon as medicine was taken, pain stopped).\n\n3. **समय-अंतराल सूचक (क्रिया-ना + के बाद — 'After doing X')**:\n   - समय का स्पष्ट अंतराल या पूर्णता दर्शाता है:\n     - *भोजन करने के बाद हम टहलने गए* (After taking food we went for a walk);\n     - *अध्यापक के जाने के बाद छात्रों ने बात की*।",
      "examples": [
        {
          "target": "स्कूल की अंतिम घंटी बजते ही सभी छोटे बच्चे उत्साहपूर्वक कक्षा से बाहर भागे, किंतु अध्यापक ने सभी कॉपियाँ समेटने के बाद ही कक्ष छोड़ा।",
          "reading": "school ki antim ghanti bajte hi sabhi chhote bachche utsaahpoorvak kaksha se baahar bhaage, kintu adhyaapak ne sabhi copy-aan sametne ke baad hi kaksh chhoda. [skuːl kiː ən̪t̪ɪm ɡʱəɳʈiː bədʒt̪eː ɦiː səbʱiː tʃʰoːʈeː bətʃːeː ʊt̪saːɦpuːrʋək kəkʃaː seː baːɦər bʱaːɡeː kɪn̪t̪ʊ əd̪ʱjaːpək neː səbʱiː kɔːpɪjaː̃ səmeːʈneː keː baːd̪ ɦiː kəkʃ tʃʰoːɽaː] (skool kee UHN-teem GHUHN-tee BUHJ-tay hee SUH-bhee CHHOH-tay BUHTCH-chay oot-sah-POOR-vuhk KUHK-shah say BAH-huhr BHAH-gay, KEEN-too uhdh-YAH-puhk nay SUH-bhee KAH-pee-yahn suh-MAYT-nay kay bahd hee kuhksh CHHOH-dah)",
          "translation": "As soon as the final school bell rang, all the little children ran outside the classroom enthusiastically, but the teacher left the room only after gathering all notebooks."
        },
        {
          "target": "डॉक्टर द्वारा सुझाई गई दवा की पहली खुराक लेते ही मरीज़ का असहनीय सिरदर्द तुरंत कम हो गया और वह गहरी नींद में सो गया।",
          "reading": "doctor dvaara sujhaaee gayi dawa ki pehli khuraak lete hi mareez ka asahaneey sirdard turant kam ho gaya aur vah gehri neend mein so gaya. [ɖɔːkʈər d̪ʋaːraː sʊdʒʱaːiː ɡəiː d̪əʋaː kiː pɛɦliː kʰʊraːk leːt̪eː ɦiː məriːz kaː əsəɦniːj sɪrd̪ərd̪ t̪ʊrən̪t̪ kəm hoː ɡəjaː ɔːr ʋəɦ ɡɛɦriː niːn̪d̪ mẽː soː ɡəjaː] (DAHK-tuhr dvah-RAH soojh-AH-ee GUH-yee duh-VAH kee PEH-lee khoo-RAHK LAY-tay hee muh-REEZ kah uh-suh-h-NEE-yuh seer-DUHRD TOO-ruhnt kuhm hoh GUH-yah owr vuh GUH-h-ree NEEND mayn soh GUH-yah)",
          "translation": "As soon as he took the first dose of medicine recommended by the doctor, the patient's unbearable headache subsided immediately and he fell into a deep sleep."
        },
        {
          "target": "होटल में स्वादिष्ट सुबह का नाश्ता करने के बाद हम सभी इस ऐतिहासिक महानगर के प्राचीन किलों और संग्रहालयों का भ्रमण करने के लिए निकल पड़े।",
          "reading": "hotel mein svaadisht subah ka naashta karne ke baad hum sabhi is aitihasik mahaanagar ke praacheen kilon aur sangrahaalayon ka bhraman karne ke liye nikal pade. [ɦoːʈəl mẽː sʋaːd̪ɪʂʈ sʊbəɦ kaː naːʃt̪aː kərneː keː baːd̪ ɦəm səbʱiː ɪs ɛːt̪ɪhaːsɪk məɦaːnəɡər keː praːtʃiːn kɪlõː ɔːr sənɡrəɦaːləjõː kaː bʱrəməɳ kərneː keː lɪjeː nɪkəl pəɽeː] (hoh-TUHL mayn svah-DEESHT SOO-buh kah nahsh-TAH KUHR-nay kay bahd huhm SUH-bhee ees ay-tee-HAH-seek muh-hah-NUH-guhr kay prah-CHEEN KEE-lohn owr suhn-gruh-HAH-luh-yohn kah bhruh-MUHN KUHR-nay kay lee-ay NEE-kuhl PUH-day)",
          "translation": "After having delicious morning breakfast at the hotel, all of us set out to tour the ancient forts and museums of this historic metropolis."
        }
      ],
      "mnemonics": [
        "कर = सामान्य क्रम (खाकर गया); ते ही = तत्कालिक (पहुँचते ही ट्रेन चली); के बाद = समय अंतराल (नाश्ता करने के बाद)!"
      ],
      "culturalNotes": [
        "यात्रा वृत्तांतों और दैनिक दिनचर्या के विवरण में इन तीनों का संतुलित प्रयोग शैली को अत्यंत समृद्ध और स्वाभाविक बनाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "शून्य समय-अंतराल (Instant action: As soon as the lightning flashed...) व्यक्त करने वाला शुद्ध वाक्य कौन-सा है?",
          "options": [
            "बिजली चमकते ही मूसलाधार बारिश शुरू हो गई (Bijli chamakte hi mooslaadhaar varsha shuru ho gayi - As soon as lightning flashed, torrential rain began)",
            "बिजली चमककर बारिश शुरू हुई (दोषपूर्ण कर्ता अन्वय)",
            "बिजली चमकने के बाद ही बारिश थी (विलंब भाव)",
            "बिजली चमकी और बारिश हो गई (साधारण वाक्य)"
          ],
          "answerIndex": 0,
          "explanation": "तत्कालिकता और भिन्न कर्ता (बिजली और बारिश) हेतु «चमकते ही» का प्रयोग शत-प्रतिशत शुद्ध है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «व्यायाम पूरा करने ___ उसने आधा घंटा विश्राम किया» में सही अव्यय भरिए:",
          "options": [
            "के बाद (Ke baad - After completing exercise)",
            "ते ही (Instant clash error)",
            "करके (Double participle error)",
            "बिना (Negative contradiction)"
          ],
          "answerIndex": 0,
          "explanation": "समय-अंतराल दर्शाने हेतु «व्यायाम पूरा करने के बाद» सही है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "तीनों समयावधियों ('कर', 'ते ही', 'के बाद') के सटीक प्रयोग वाला वाक्य पहचानिए:",
          "options": [
            "वह पत्र लिखकर, लिफाफा बंद करने के बाद डाकघर गया और वहाँ पहुँचते ही पत्र पोस्ट कर दिया। (Having written letter, after sealing envelope he went to post office and as soon as he reached there posted it.)",
            "वह पत्र लिखते ही लिफाफा करके डाकघर के बाद गया।",
            "वह पत्र लिखकर डाकघर पहुँचने के बाद पोस्ट करते ही गया।",
            "पत्र के बाद लिफाफा पहुँचते ही लिखा।"
          ],
          "answerIndex": 0,
          "explanation": "«लिखकर» (पूर्वकालिक), «करने के बाद» (समय अंतराल), और «पहुँचते ही» (तत्कालिकता) तीनों का समन्वय व्याकरणिक रूप से आदर्श है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u14-l5": {
    "id": "hi-u14-l5",
    "subject": "hindi",
    "unit": 14,
    "lessonNumber": 5,
    "title": "पूर्वकालिक और कृदंत संरचनाओं का समग्र समेकन व संश्लेषण (Synthesis of Conjunctive & Participial Structures)",
    "level": "B1",
    "objective": "पूर्वकालिक ('कर'), तत्कालिक ('ते ही') और कालिक ('के बाद') कृदंतों का संश्लिष्ट वृत्तांतों और निबंधात्मक अनुच्छेदों में धाराप्रवाह प्रयोग करने की क्षमता सिद्ध करना।",
    "presentation": {
      "explanation": "पूर्वकालिक और कृदंत संरचनाओं का संश्लिष्ट भाषा में संयोजन:\n\n1. कृदंत त्रिवेणी का तुलनात्मक विश्लेषण:\n   - **1. धातु + कर/करके**: क्रमिक क्रियाएं, समान कर्ता (उठकर, पढ़कर, देखकर);\n   - **2. धातु + ते ही**: तत्कालिकता, शून्य समय-अंतराल, समान या भिन्न कर्ता (आते ही, देखते ही, बजते ही);\n   - **3. क्रिया-ना + के बाद**: समय का अंतराल, पूर्ण कार्य (खाने के बाद, पहुँचने के बाद)।\n\n2. जटिल वृत्तांतों का निर्माण:\n   - एक परिच्छेद में इनका क्रमिक प्रवाह:\n     *सुबह उठकर, योगाभ्यास करके, स्नान करने के बाद, वह स्टेशन पहुँचते ही ट्रेन में बैठ गया।*",
      "examples": [
        {
          "target": "वह सुबह बहुत जल्दी उठकर, नियमित योगाभ्यास करके और पौष्टिक नाश्ता करने के बाद ठीक समय पर अपने कार्यालय पहुँच गया।",
          "reading": "vah subah bahut jaldi uthkar, niyamit yogabhyaas karke aur paushtik naashta karne ke baad theek samay par apne kaaryaalay pahunch gaya. [ʋəɦ sʊbəɦ bəɦʊt̪ dʒəldiː ʊʈʰkər nɪjəmɪt̪ joːɡaːbʱjaːs kərkeː ɔːr pɔːʂʈɪk naːʃt̪aː kərneː keː baːd̪ t̪ʰiːk səməj pər əpneː kaːrjaːləj pəɦʊntʃ ɡəjaː] (vuh SOO-buh buh-hoot JUHL-dee OOTH-kuhr, nee-yuh-MEET yoh-gahbh-YAH-suh KUHR-kay owr powsh-TEEK nahsh-TAH KUHR-nay kay bahd theek SUH-muy puhr uhp-NAY kahr-YAH-luy puh-HOONCH GUH-yah)",
          "translation": "Having woken up very early in the morning, having performed regular yoga practice, and after having a nutritious breakfast, he arrived at his office right on time."
        },
        {
          "target": "मुख्य वैज्ञानिक ने प्रयोगशाला में नए उपकरण की कार्यक्षमता का भली-भाँति परीक्षण करके सभी प्राप्त आँकड़ों का अत्यंत सावधानीपूर्वक विश्लेषण किया।",
          "reading": "mukhya vaigyaanik ne prayogshaala mein naye upkaran ki kaaryakshamta ka bhali-bhaanti pareekshan karke sabhi praapt aankadon ka atyant saavadhaanipoorvak vishleshan kiya. [mʊkʰjə ʋɛːɡjaːnɪk neː prəjoːɡʃaːlaː mẽː nəjeː ʊpkərəɳ kiː kaːrjəkʃəmt̪aː kaː bʱəliː bʱaː̃t̪ɪ pəriːkʃəɳ kərkeː səbʱiː praːpt̪ aː̃kɽõː kaː ət̪jən̪t̪ saːʋd̪ʱaːniːpuːrʋək ʋɪʃleːʂəɳ kɪjaː] (MOOKH-yuh vyg-YAH-neek nay pruh-yohg-SHAH-lah mayn nuh-YAY oop-KUH-ruhn kee kahr-yuh-KSHUHM-tah kah bhuh-LEE-BHAHN-tee puh-REEK-shuhn KUHR-kay SUH-bhee PRAHPT ahn-KUH-dohn kah uht-YUHNT sahv-dhah-nee-POOR-vuhk veesh-LAY-shuhn kee-YAH)",
          "translation": "The chief scientist, having tested thoroughly the efficiency of the new instrument in the laboratory, analyzed all obtained data extremely carefully."
        },
        {
          "target": "विद्वान वक्ता ने सभागार में उपस्थित श्रोताओं के सभी जटिल प्रश्नों का बहुत शांत भाव से उत्तर देकर पूरी सभा को मंत्रमुग्ध और आनंदित कर दिया।",
          "reading": "vidvaan vakta ne sabhaagaar mein upasthit shrotaaon ke sabhi jatil prashnon ka bahut shaant bhaav se uttar dekar poori sabha ko mantramugdh aur aanandit kar diya. [ʋɪd̪ʋaːn ʋəkt̪aː neː səbʱaːɡaːr mẽː ʊpəst̪ʰɪt̪ ʃroːt̪aːõː keː səbʱiː dʒəʈɪl prəʃnõː kaː bəɦʊt̪ ʃaːn̪t̪ bʱaːʋ seː ʊt̪ːər d̪eːkər puːriː səbʱaː koː mən̪t̪rəmʊɡd̪ʱ ɔːr aːnən̪d̪ɪt̪ kər d̪ɪjaː] (veed-VAHN VUHK-tah nay suh-bhah-GAHR mayn oo-puhs-THEET shroh-tah-OHN kay SUH-bhee JUH-teel PRUSH-nohn kah buh-hoot SHAHNT bhahv say OOT-tuhr DAY-kuhr POO-ree SUH-bhah koh muhn-truh-MOOGDH owr ah-nuhn-DEET kuhr DEE-yah)",
          "translation": "The learned speaker, having answered all complex questions of the audience present in the auditorium with a very calm demeanor, charmed and delighted the whole assembly."
        }
      ],
      "mnemonics": [
        "उठकर (कर), योगा करके (करके), नाश्ते के बाद (के बाद), पहुँचते ही (ते ही)! कृदंतों का संपूर्ण प्रवाह!"
      ],
      "culturalNotes": [
        "संस्कृत और हिंदी साहित्य की समृद्ध परंपरा में पूर्वकालिक और तत्कालिक कृदंतों का यह बहुस्तरीय संयोजन महाकाव्यात्मक शैली की मुख्य विशेषता रहा है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "कृदंतों के संश्लिष्ट संयोजन वाला व्याकरणिक रूप से आदर्श वाक्य चुनिए:",
          "options": [
            "रोहन ने समाचार सुनकर, मित्रों से विचार-विमर्श करके उचित कदम उठाया (Rohan, hearing news and consulting friends, took appropriate step)",
            "रोहन समाचार सुनते ही मित्रों से विचार के बाद कदम उठा लिया (अव्यवस्थित संयोजन)",
            "रोहन ने समाचार सुन लिया और मित्रों को विचार दिया (सामान्य शिथिल वाक्य)",
            "रोहन समाचार सुनकर मित्रों से विचार करके ने कदम उठाया (पदक्रम दोष)"
          ],
          "answerIndex": 0,
          "explanation": "«समाचार सुनकर» और «विचार-विमर्श करके» का पूर्वकालिक संयोजन वाक्य को सुगठित और मानक बनाता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «अतिथि का सत्कार ___ भोजन परोसकर हमने उन्हें संतुष्ट किया» में रिक्त स्थान का सही रूप क्या है?",
          "options": [
            "करके (Karke - Having welcomed the guest and served food)",
            "करते ही (Immediate mismatch)",
            "किया था (Tense conflict)",
            "करने पर (Conditional mismatch)"
          ],
          "answerIndex": 0,
          "explanation": "क्रमिक सम्मानजनक कार्यों के संयोजन में «सत्कार करके भोजन परोसकर» शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "कृदंत एवं पूर्वकालिक संरचनाओं का समग्र रूप से शुद्ध वाक्य पहचानिए:",
          "options": [
            "यात्री ने टिकट खरीदकर, सामान जाँच करवाने के बाद गाड़ी में प्रवेश किया और बैठते ही खिड़की खोल दी। (The passenger, having bought ticket and after getting luggage checked, entered the train and as soon as he sat opened the window.)",
            "यात्री टिकट खरीदते ही सामान करके गाड़ी के बाद खिड़की खोल दिया।",
            "यात्री ने टिकट के बाद सामान खरीदते ही खिड़की खोलकर गया।",
            "यात्री टिकट खरीदा और सामान के बाद खिड़की खोल दी।"
          ],
          "answerIndex": 0,
          "explanation": "«खरीदकर» (पूर्वकालिक), «जाँच करवाने के बाद» (समय अंतराल), और «बैठते ही» (तत्कालिकता) का समन्वय शत-प्रतिशत त्रुटिहीन है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u15-l1": {
    "id": "hi-u15-l1",
    "subject": "hindi",
    "unit": 15,
    "lessonNumber": 1,
    "title": "संज्ञा और सर्वनाम का संबंधवाचक युग्म: जो...वह (Relative-Correlative Pronouns: jo...vah)",
    "level": "B1",
    "objective": "संबंधवाचक सर्वनाम 'जो' (Relative) और नित्यसंबंधी सर्वनाम 'वह / सो' (Correlative) के प्रत्यक्ष व तिर्यक् (Oblique/Ergative/Dative) युग्मों (जिसने...उसने, जिसे...उसे, जिसका...उसका) में पूर्ण दक्षता प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में संबंधवाचक वाक्य (Relative Clauses) युग्मों (Pairs) पर आधारित होते हैं, जिनमें संबंधवाचक उपवाक्य पहले और नित्यसंबंधी मुख्य उपवाक्य बाद में आता है:\n\n1. प्रत्यक्ष रूप (Direct Pair):\n   - **जो...वह / वही** (The one who / which...that / the same one):\n     - *जो परिश्रम करता है, वह सफल होता है*;\n     - *जो पुस्तक मेज़ पर रखी है, वह मेरी है*।\n\n2. तिर्यक् व कारक रूप (Oblique & Case-marked Pairs):\n   - **जिसने...उसने** (Ergative 'ने'): *जिसने मेहनत की, उसने फल पाया*;\n   - **जिसे / जिसको...उसे / उसको** (Dative 'को'): *जिसे भूख लगी है, उसे खाना दो*;\n   - **जिसका / जिसके / जिसकी...उसका / उसके / उसकी** (Genitive 'का'): *जिसकी लाठी, उसकी भैंस* (लोकप्रिय लोकोक्ति);\n   - **जिसमें...उसमें** (Locative 'में'): *जिसमें साहस है, वही आगे बढ़ता है*।\n\n3. बहुवचन रूप:\n   - **जो...वे** / **जिन्होंने...उन्होंने** / **जिनको...उनको**।",
      "examples": [
        {
          "target": "जिस लगनशील छात्र ने सालभर नियमित और अत्यंत कठिन परिश्रम किया, उसी ने वार्षिक बोर्ड परीक्षा में सर्वोच्च स्थान प्राप्त किया।",
          "reading": "jis lagansheel chhaatr ne saalbhar niyamit aur atyant kathin parishram kiya, usi ne vaarshik board pareeksha mein sarvochch sthaan praapt kiya. [dʒɪs ləɡənʃiːl tʃʰaːt̪r neː saːlbʱər nɪjəmɪt̪ ɔːr ət̪jən̪t̪ kəʈʰɪn pərɪʃrəm kɪjaː ʊsiː neː ʋaːrʂɪk boːrɖ pəriːkʃaː mẽː sərʋoːtʃː st̪ʰaːn praːpt̪ kɪjaː] (jees luh-guhn-SHEEL CHHAH-truh nay SAHL-bhuhr nee-yuh-MEET owr uht-YUHNT KUH-theen puh-REESH-ruhm kee-YAH, OO-see nay VAHR-sheek bohrd puh-REEK-shah mayn suhr-VOHTCH sthahn PRAHPT kee-YAH)",
          "translation": "The dedicated student who worked regularly and extremely hard throughout the year, that very one secured the top position in the annual board examination."
        },
        {
          "target": "जिस विद्वान चिकित्सक ने उस असाध्य रोग का सफल उपचार किया, उसे संपूर्ण समाज में सर्वोच्च सम्मान और नागरिक पुरस्कार प्रदान किया गया।",
          "reading": "jis vidvaan chikitsak ne us asaadhya rog ka safal upchaar kiya, use sampoorna samaaj mein sarvochch sammaan aur naagrik puraskaar pradaan kiya gaya. [dʒɪs ʋɪd̪ʋaːn tʃɪkɪt̪sək neː ʊs əsaːd̪ʱjə roːɡ kaː səfəl ʊptʃaːr kɪjaː ʊseː səmbuːrɳə səmaːdʒ mẽː sərʋoːtʃː səmːaːn ɔːr naːɡrɪk pʊrəskaːr prəd̪aːn kɪjaː ɡəjaː] (jees veed-VAHN chee-KEET-suhk nay oos uh-SAHDH-yuh rohg kah SUH-fuhl oop-CHAHR kee-YAH, oo-SAY suhm-POOR-nuh suh-MAHJ mayn suhr-VOHTCH suhm-MAHN owr NAHG-reek poor-uhs-KAHR pruh-DAHN kee-YAH GUH-yah)",
          "translation": "The learned doctor who successfully treated that incurable disease, to him was granted the highest honor and civic award in the entire society."
        },
        {
          "target": "जो व्यक्ति कठिन संकट के समय अपने मित्रों की निःस्वार्थ सहायता करता है, वही वास्तव में सच्चा और विश्वसनीय मित्र कहलाता है।",
          "reading": "jo vyakti kathin sankat ke samay apne mitron ki nihsvaarth sahaayata karta hai, vahi vaastav mein sachcha aur vishvasaneey mitr kahlaata hai. [dʒoː ʋjəkt̪ɪ kəʈʰɪn səŋkəʈ keː səməj əpneː mɪt̪rõː kiː nɪɦsʋaːrt̪ʰ səɦaːjət̪aː kərt̪aː hɛː ʋəɦiː ʋaːst̪əʋ mẽː sətʃːaː ɔːr ʋɪʃʋəsniːj mɪt̪r kəɦlaːt̪aː hɛː] (joh VYUHNK-tee KUH-theen SUHN-kuht kay SUH-muy uhp-NAY MEET-rohn kee neeh-SVAHRTH suh-hah-YUH-tah KUHR-tah hy, vuh-HEE VAHS-tuhv mayn SUHTCH-chah owr veesh-vuh-suh-NEE-yuh MEET-ruh kuh-h-LAH-tah hy)",
          "translation": "The person who selflessly helps his friends during times of severe crisis, he alone is truly called a true and reliable friend."
        }
      ],
      "mnemonics": [
        "Relative Clause = जो (य-वर्ग) पहले; Main Clause = वह/उसने (त/व-वर्ग) बाद में!"
      ],
      "culturalNotes": [
        "भारतीय नीतिशास्त्र और सूक्तियों (सुभाषितानि) में 'जो...सो/वह' संरचना का प्रयोग जीवन मूल्यों, मित्रता और धर्म के शाश्वत सिद्धांतों को व्यक्त करने के लिए सदियों से होता आया है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "वाक्य «जिसने चोरी की, ___ दंड मिलना चाहिए» में सही नित्यसंबंधी सर्वनाम क्या होगा?",
          "options": [
            "उसे (Use - To him [dative correlative matching jisne])",
            "उसने (Ergative mismatch for passive dative obligation)",
            "वह (Direct pronoun mismatch)",
            "उसका (Genitive mismatch)"
          ],
          "answerIndex": 0,
          "explanation": "«दंड मिलना चाहिए» के लिए संप्रदान कारक (Dative) के रूप में «उसे» शुद्ध है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "प्रसिद्ध लोकोक्ति «___ लाठी, उसकी भैंस» में सही संबंधवाचक शब्द भरिए:",
          "options": [
            "जिसकी (Jiski - Whose [feminine genitive matching lathi])",
            "जिसका (Masculine error for lathi)",
            "जो (Direct pronoun error)",
            "जिसने (Ergative error)"
          ],
          "answerIndex": 0,
          "explanation": "'लाठी' स्त्रीलिंग संज्ञा होने के कारण संबंध कारक रूप «जिसकी» सही है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "संबंधवाचक और नित्यसंबंधी सर्वनाम के शुद्ध समन्वय वाला वाक्य पहचानिए:",
          "options": [
            "जिन्होंने कठिन परिस्थितियों में देश की रक्षा की, उन वीर सैनिकों को राष्ट्र नमन करता है। (Those brave soldiers who defended the country in harsh conditions, the nation bows to them.)",
            "जिन्होंने देश की रक्षा की वे सैनिकों को नमन करता है।",
            "जो देश की रक्षा की उसने नमन करता है।",
            "जिसने रक्षा किया उनको नमन है।"
          ],
          "answerIndex": 0,
          "explanation": "«जिन्होंने... रक्षा की» (बहुवचन संबंधवाचक) और «उन वीर सैनिकों को...» (बहुवचन नित्यसंबंधी कर्म) का अन्वय पूर्णतः शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u15-l2": {
    "id": "hi-u15-l2",
    "subject": "hindi",
    "unit": 15,
    "lessonNumber": 2,
    "title": "स्थान और दिशा के संबंधवाचक युग्म: जहाँ...वहाँ एवं जिधर...उधर (Locative & Directional Correlatives)",
    "level": "B1",
    "objective": "स्थानवाचक (जहाँ...वहाँ / जहाँ कहीं भी...वहाँ) और दिशावाचक (जिधर...उधर) संबंधवाचक युग्मों के शुद्ध वाक्य-विन्यास में पारंगत होना।",
    "presentation": {
      "explanation": "स्थान और दिशा को सूचित करने वाले संबंधवाचक-नित्यसंबंधी युग्म:\n\n1. **स्थानवाचक युग्म (Locative: जहाँ...वहाँ — 'Where...there')**:\n   - *जहाँ स्वच्छता होती है, वहाँ स्वास्थ्य रहता है* (Where there is cleanliness, there health abides);\n   - *जहाँ कहीं भी (Wherever)*: *जहाँ कहीं भी तुम जाओगे, वहाँ तुम्हें अपनापन मिलेगा*;\n   - *जहाँ तक (As far as)*: *जहाँ तक मुझे ज्ञात है, वह आज नहीं आएगा*।\n\n2. **दिशावाचक युग्म (Directional: जिधर...उधर — 'In whichever direction...in that direction')**:\n   - *जिधर देखो, उधर हरियाली ही हरियाली है* (Whichever way you look, there is only greenery);\n   - *जिधर हवा चलती है, उधर ही पत्ते उड़ते हैं*।",
      "examples": [
        {
          "target": "जहाँ चारों ओर शांत वातावरण और प्राकृतिक हरियाली होती है, वहाँ मानव का मन स्वतः ही प्रफुल्लित, तनावमुक्त और एकाग्र हो जाता है।",
          "reading": "jahaan chaaron aur shaant vaataavaran aur praakritik hariyaali hoti hai, vahaan maanav ka man svatah hi praphullit, tanaavmukt aur ekaagr ho jaata hai. [dʒəɦaː̃ tʃaːrõː ɔːr ʃaːn̪t̪ ʋaːt̪aːʋərəɳ ɔːr praːkrɪt̪ɪk ɦərɪjaːliː hoːt̪iː hɛː ʋəɦaː̃ maːnəʋ kaː mən sʋət̪əɦ ɦiː prəpʰʊlːɪt̪ t̪ənaːʋmʊkt̪ ɔːr eːkaːɡr hoː dʒaːt̪aː hɛː] (juh-HAHN CHAH-rohn owr SHAHNT vah-tah-vuh-RUHN owr prah-KREE-teek huh-ree-YAH-lee hoh-TEE hy, vuh-HAHN MAH-nuhv kah muhn SVAH-tuhk hee pruh-PHOOL-leet, tuh-nahv-MOOKT owr ay-KAHG-ruh hoh JAH-tah hy)",
          "translation": "Where there is a peaceful environment and natural greenery all around, there the human mind automatically becomes cheerful, stress-free, and concentrated."
        },
        {
          "target": "जिधर उस प्रतापी और वीर राजा की विशाल सेना आगे बढ़ती थी, उधर ही शत्रु भयभीत होकर अपने हथियार छोड़कर पीछे हट जाते थे।",
          "reading": "jidhar us prataapi aur veer raaja ki vishaal sena aage badhti thi, udhar hi shatru bhaybheet hokar apne hathiyaar chhodkar peechhe hat jaate the. [dʒɪd̪ʱər ʊs prət̪aːpiː ɔːr ʋiːr raːdʒaː kiː ʋɪʃaːl seːnaː aːɡeː bəɽʱt̪iː t̪ʰiː ʊd̪ʱər ɦiː ʃət̪ru bʱəjbʱiːt̪ hoːkər əpneː ɦət̪ʰɪjaːr tʃʰoːɽkər piːtʃʰeː ɦəʈ dʒaːt̪eː t̪ʰeː] (jee-DHUHR oos pruh-tah-PEE owr VEER RAH-jah kee vee-SHAHL SAY-nah AH-gay BUH-dh-tee thee, oo-DHUHR hee SHUH-troo bhuy-BHEET hoh-kuhr uhp-NAY huhth-YAH-ruh CHHOHD-kuhr PEE-chhay huht JAH-tay thay)",
          "translation": "In whichever direction the vast army of that glorious and brave king advanced, in that very direction the terrified enemies retreated leaving behind their weapons."
        },
        {
          "target": "जहाँ कहीं भी महान विद्वानों, वैज्ञानिकों और कलाकारों का यथोचित सत्कार होता है, वहाँ ज्ञान, विज्ञान और कला का अभूतपूर्व विकास होता है।",
          "reading": "jahaan kaheen bhi mahaan vidvaanon, vaigyaanikon aur kalaakaaron ka yathochit satkaar hota hai, vahaan gyaan, vigyaan aur kala ka abhootpoorva vikaas hota hai. [dʒəɦaː̃ kəɦĩː bʱiː məɦaːn ʋɪd̪ʋaːnõː ʋɛːɡjaːnɪkõː ɔːr kəlaːkaːrõː kaː jət̪ʰoːtʃɪt̪ sət̪kaːr hoːt̪aː hɛː ʋəɦaː̃ ɡjaːn ʋɪɡjaːn ɔːr kəlaː kaː əbʱuːt̪puːrʋə ʋɪkaːs hoːt̪aː hɛː] (juh-HAHN kuh-HEEN bhee muh-HAHN veed-VAH-nohn, vyg-YAH-nee-kohn owr kuh-lah-KAH-rohn kah yuh-thoh-CHEET suht-KAHR hoh-TAH hy, vuh-HAHN GYAHN, veeg-YAHN owr KUH-lah kah uh-bhoot-POOR-vuh vee-KAHS hoh-TAH hy)",
          "translation": "Wherever great scholars, scientists, and artists receive due honor, there unprecedented development of knowledge, science, and art takes place."
        }
      ],
      "mnemonics": [
        "स्थान = जहाँ...वहाँ (Where...there); दिशा = जिधर...उधर (Whither...thither)!"
      ],
      "culturalNotes": [
        "'यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः' (जहाँ नारियों की पूजा होती है, वहाँ देवता निवास करते हैं) जैसी सूक्तियाँ भारतीय चिंतन में 'जहाँ...वहाँ' संरचना की शास्त्रीय नींव हैं।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "स्थानवाचक वाक्य «___ फूल खिलते हैं, वहाँ भौंरे मँडराते हैं» में सही संबंधवाचक शब्द क्या है?",
          "options": [
            "जहाँ (Jahaan - Where [locative relative])",
            "जिधर (Directional error)",
            "जैसा (Manner error)",
            "जब (Time error)"
          ],
          "answerIndex": 0,
          "explanation": "स्थान का बोध कराने के लिए नित्यसंबंधी 'वहाँ' के साथ संबंधवाचक «जहाँ» आता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "दिशावाचक वाक्य «जिधर रास्ता जाता है, ___ चलो» में सही नित्यसंबंधी शब्द भरिए:",
          "options": [
            "उधर (Udhar - In that direction [directional correlative])",
            "वहाँ (Static locative error)",
            "तब (Time error)",
            "वैसा (Manner error)"
          ],
          "answerIndex": 0,
          "explanation": "'जिधर' (in which direction) के साथ नित्यसंबंधी दिशावाचक «उधर» आता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "स्थान और दिशा के संबंधवाचक युग्मों का शुद्ध प्रयोग वाला वाक्य पहचानिए:",
          "options": [
            "जहाँ सत्य और अहिंसा का वास होता है, वहाँ शांति स्वतः स्थापित होती है। (Where truth and non-violence reside, there peace is established automatically.)",
            "जहाँ सत्य होता है उधर शांति होती है।",
            "जिधर स्वच्छता है वहाँ रोग नहीं होता।",
            "जहाँ तक चलो त्यों ही शांति मिलेगी।"
          ],
          "answerIndex": 0,
          "explanation": "«जहाँ...वहाँ» का स्थानवाचक युग्म पूर्णतः संगत और त्रुटिहीन है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u15-l3": {
    "id": "hi-u15-l3",
    "subject": "hindi",
    "unit": 15,
    "lessonNumber": 3,
    "title": "रीति और परिमाण के संबंधवाचक युग्म: जैसा...वैसा एवं जितना...उतना (Manner & Quantity Correlatives)",
    "level": "B1",
    "objective": "रीतिवाचक (जैसा...वैसा — As...so) और परिमाणवाचक (जितना...उतना — As much...that much) युग्मों में लिंग-वचन के अनुसार विशेषणीय रूपांतरण (Adjectival Inflection) के नियमों को आत्मसात करना।",
    "presentation": {
      "explanation": "रीति (Manner) और परिमाण (Quantity) के संबंधवाचक युग्म विशेषण के समान लिंग और वचन के अनुसार बदलते हैं:\n\n1. **रीतिवाचक युग्म (Manner: जैसा...वैसा — 'As...so / Such as...that sort')**:\n   - पुं. एकवचन: **जैसा...वैसा** (*जैसा करोगे, वैसा भरोगे*);\n   - स्त्री. एकवचन/बहुवचन: **जैसी...वैसी** (*जैसी संगति, वैसी मति* / *जैसी करनी, वैसी भरनी*);\n   - पुं. बहुवचन: **जैसे...वैसे** (*जैसे कर्म, वैसे फल*)।\n\n2. **परिमाणवाचक युग्म (Quantity: जितना...उतना — 'As much...that much / The more...the more')**:\n   - पुं. एकवचन: **जितना...उतना** (*जितना गुड़ डालोगे, उतना मीठा होगा*);\n   - स्त्री. एकवचन/बहुवचन: **जितनी...उतनी** (*जितनी मेहनत, उतनी सफलता* / *जितनी चादर, उतने पैर*);\n   - पुं. बहुवचन: **जितने...उतने** (*जितने लोग, उतने विचार*)।",
      "examples": [
        {
          "target": "आप अपने जीवन में जैसा सकारात्मक, निष्कपट और उदार दृष्टिकोण रखेंगे, आपके साथ समाज का व्यवहार भी वैसा ही सौहार्दपूर्ण और आदरणीय होगा।",
          "reading": "aap apne jeevan mein jaisa sakaaraatmak, nishkapat aur udaar drishtikon rakhenge, aapke saath samaaj ka vyavahaar bhi vaisa hi sauhaardapoorna aur aadaraNeey hoga. [aːp əpneː dʒiːʋən mẽː dʒɛːsaː səkaːraːt̪mək nɪʂkəpəʈ ɔːr ʊd̪aːr drɪʂʈɪkoːɳ rəkʰẽːɡeː aːpkeː saːt̪ʰ səmaːdʒ kaː ʋjəʋəɦaːr bʱiː ʋɛːsaː ɦiː sɔːɦaːrd̪əpuːrɳə ɔːr aːd̪ərɳiːj hoːɡaː] (ahp uhp-NAY JEE-vuhn mayn JY-sah suh-kah-RAHT-muhk, neesh-KUH-puht owr oo-DAHR DREESH-tee-kohn ruh-KHAYN-gay, ahp-KAY sahth suh-MAHJ kah vyuh-vuh-HAHR bhee VY-sah hee sow-hahr-duh-POOR-nuh owr ah-duh-ruh-NEE-yuh hoh-GAH)",
          "translation": "Such positive, sincere, and generous outlook as you maintain in your life, the conduct of society with you will also be equally harmonious and respectful."
        },
        {
          "target": "आप प्रतिदिन जितना अधिक एकाग्रचित्त होकर नई भाषा का अभ्यास करेंगे, उतना ही आपकी अभिव्यक्ति में स्वाभाविक प्रवाह और आत्मविश्वास बढ़ेगा।",
          "reading": "aap pratidin jitna adhik ekaagrachitt hokar nayi bhaasha ka abhyaas karenge, utna hi aapki abhivyakti mein svaabhaavik pravaah aur aatmavishvaas badhega. [aːp prət̪ɪd̪ɪn dʒɪt̪naː əd̪ʱɪk eːkaːɡrətʃɪt̪ː hoːkər nəjiː bʱaːʂaː kaː əbʱjaːs kərẽːɡeː ʊt̪naː ɦiː aːpkiː əbʱɪʋjəkt̪ɪ mẽː sʋaːbʱaːʋɪk prəʋaːɦ ɔːr aːt̪məʋɪʃʋaːs bəɽʱeːɡaː] (ahp pruh-tee-DEEN JEET-nah uh-DHEEK ay-KAHG-ruh-cheet hoh-kuhr nuh-YEE BHAH-shah kah uhbh-YAH-suh kuhr-AYN-gay, OOT-nah hee ahp-KEE uh-bheev-YUHNK-tee mayn svah-bhah-VEEK pruh-VAH owr aht-muh-veesh-VAHS buh-DHAY-gah)",
          "translation": "The more concentratedly you practice the new language each day, that much more will natural fluency and self-confidence grow in your expression."
        },
        {
          "target": "जैसी उत्कृष्ट संगति और उत्तम संस्कार व्यक्ति को बाल्यावस्था में मिलते हैं, वैसा ही उसका भावी चरित्र, आचरण और संपूर्ण व्यक्तित्व निर्मित होता है।",
          "reading": "jaisi utkrisht sangati aur uttam sanskaar vyakti ko baalyavastha mein milte hain, vaisa hi uska bhaavi charitr, aacharan aur sampoorna vyaktitva nirmit hota hai. [dʒɛːsiː ʊt̪krɪʂʈ sənɡət̪ɪ ɔːr ʊt̪ːəm sən̪skaːr ʋjəkt̪ɪ koː baːljəʋəst̪ʰaː mẽː mɪlt̪eː hɛ̃ː ʋɛːsaː ɦiː ʊskaː bʱaːʋiː tʃərɪt̪r aːtʃərəɳ ɔːr səmbuːrɳə ʋjəkt̪ɪt̪ʋə nɪrmɪt̪ hoːt̪aː hɛː] (JY-see oot-KREESH-th suhn-GUH-tee owr oot-TUHM suhn-SKAHR VYUHNK-tee koh bahl-yuh-VUHS-thah mayn MEEL-tay hy-n, VY-sah hee OOS-kah BHAH-vee chuh-REE-truh, ah-chuh-RUHN owr suhm-POOR-nuh vyuhk-TEET-vuh neer-MEET hoh-TAH hy)",
          "translation": "Such excellent company and noble values as a person receives in childhood, such is his future character, conduct, and entire personality formed."
        }
      ],
      "mnemonics": [
        "रीति = जैसा...वैसा (दृष्टिकोण); परिमाण = जितना...उतना (अभ्यास); दोनों संज्ञा के लिंग से बदलते हैं!"
      ],
      "culturalNotes": [
        "भारतीय लोकोक्तियों में 'जैसा अन्न, वैसा मन' (You are what you eat) और 'जैसी दृष्टि, वैसी सृष्टि' (As your perception is, so is your world) का दार्शनिक महत्व है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "स्त्रीलिंग संज्ञा 'करनी' (actions) के अनुसार सही संबंधवाचक-नित्यसंबंधी युग्म क्या होगा?",
          "options": [
            "जैसी करनी, वैसी भरनी (Jaisi karni, vaisi bharni - As the deed, so the consequence [fem. sing. agreement])",
            "जैसा करनी, वैसा भरनी (पुंलिंग दोष)",
            "जैसे करनी, वैसे भरनी (बहुवचन दोष)",
            "जितना करनी, उतना भरनी (परिमाण दोष)"
          ],
          "answerIndex": 0,
          "explanation": "'करनी' और 'भरनी' दोनों स्त्रीलिंग होने से «जैसी...वैसी» का रूप शुद्ध है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "परिमाणवाचक वाक्य «___ अधिक गुड़ डालोगे, उतना ही मीठा होगा» में सही शब्द भरिए:",
          "options": [
            "जितना (Jitna - As much as [masc. sing. matching gud])",
            "जितनी (Fem. mismatch)",
            "जैसा (Manner mismatch)",
            "जब (Time mismatch)"
          ],
          "answerIndex": 0,
          "explanation": "'गुड़' पुंलिंग एकवचन परिमाणवाचक संज्ञा के साथ «जितना» शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "रीति और परिमाण के सही लिंग-वचन समन्वय वाला वाक्य चुनिए:",
          "options": [
            "जितनी अधिक पुस्तकें तुम पढ़ोगे, उतना ही अधिक तुम्हारा ज्ञान समृद्ध होगा। (The more books you read, that much more your knowledge will be enriched.)",
            "जितना पुस्तकें तुम पढ़ोगे वैसा ज्ञान होगा।",
            "जैसे पुस्तकें पढ़ोगे उतनी ज्ञान होगा।",
            "जितने पुस्तक पढ़ोगे उतना ही ज्ञान होगा।"
          ],
          "answerIndex": 0,
          "explanation": "«जितनी अधिक पुस्तकें...» (स्त्रीलिंग बहुवचन कर्म) और «उतना ही अधिक तुम्हारा ज्ञान...» (पुंलिंग एकवचन भाव) का समन्वय शत-प्रतिशत त्रुटिहीन है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u15-l4": {
    "id": "hi-u15-l4",
    "subject": "hindi",
    "unit": 15,
    "lessonNumber": 4,
    "title": "समय के संबंधवाचक युग्म: जब...तब एवं ज्यों ही...त्यों ही (Temporal Correlatives: jab...tab, jyon hi...tyon hi)",
    "level": "B1",
    "objective": "समयवाचक संबंधवाचक युग्मों (जब...तब — When...then) और तत्कालिक समकालिक युग्मों (ज्यों ही...त्यों ही — No sooner...than / As soon as) के व्यावहारिक प्रयोग में निपुण होना।",
    "presentation": {
      "explanation": "समय को व्यक्त करने वाले संबंधवाचक-नित्यसंबंधी युग्म:\n\n1. **सामान्य समयवाचक (जब...तब — 'When...then')**:\n   - *जब वर्षा होती है, तब मोर नाचते हैं* (When it rains, then peacocks dance);\n   - *जब कभी भी (Whenever)*: *जब कभी तुम आओगे, तब हम मिलेंगे*;\n   - *जब तक...तब तक (As long as / Until)*: *जब तक साँस, तब तक आस*।\n\n2. **तत्कालिक समकालिक युग्म (ज्यों ही...त्यों ही — 'As soon as / No sooner...than')**:\n   - शून्य समय-अंतराल में दो घटनाओं के एक साथ होने का बोध कराता है:\n     - *ज्यों ही घंटी बजी, त्यों ही बच्चे बाहर भागे*;\n     - *ज्यों ही सूर्योदय हुआ, त्यों ही अंधकार मिट गया*।",
      "examples": [
        {
          "target": "जब वसंत ऋतु में प्रकृति नवीन और सुगंधित पुष्पों से खिल उठती है, तब शांत वनों में रंग-बिरंगे पक्षियों का मधुर कलरव गूँजने लगता है।",
          "reading": "jab vasant ritu mein prakriti naveen aur sugandhit pushpon se khil uthti hai, tab shaant vanon mein rang-birange pakshiyon ka madhur kalrav goonjne lagta hai. [dʒəb ʋəsən̪t̪ rɪt̪ʊ mẽː praːkrɪt̪ɪ nəʋiːn ɔːr sʊɡən̪d̪ʱɪt̪ pʊʂpõː seː kʰɪl ʊʈʰt̪iː hɛː t̪əb ʃaːn̪t̪ ʋənõː mẽː rəŋɡbɪrənɡeː pəkʃɪjõː kaː məd̪ʱʊr kəlrəʋ ɡuːndʒneː ləɡt̪aː hɛː] (juhb vuh-SUHNT REE-too mayn prah-KREE-tee nuh-VEEN owr soo-guhn-DHEET POOSH-pohn say kheel OOTH-tee hy, tuhb SHAHNT VUH-nohn mayn ruhng-bee-RUHN-gay puhk-shee-YOHN kah muh-DHOOR kuhl-RUHV GOONJ-nay LUHG-tah hy)",
          "translation": "When in spring season nature blossoms with fresh and fragrant flowers, then in the peaceful forests the sweet chirping of colorful birds begins to echo."
        },
        {
          "target": "ज्यों ही मुख्य अतिथि ने विशाल सभागार में प्रवेश किया, त्यों ही सभी उपस्थित गणमान्य व्यक्तियों ने खड़े होकर तालियों से उनका भव्य स्वागत किया।",
          "reading": "jyon hi mukhya atithi ne vishaal sabhaagaar mein pravesh kiya, tyon hi sabhi upasthit ganmaanya vyaktiyon ne khade hokar taaliyon se unka bhavya svaagat kiya. [dʒjõː ɦiː mʊkʰjə ət̪ɪt̪ʰɪ neː ʋɪʃaːl səbʱaːɡaːr mẽː prəʋeːʃ kɪjaː t̪jõː ɦiː səbʱiː ʊpəst̪ʰɪt̪ ɡəɳmaːnjə ʋjəkt̪ɪjõː neː kʰəɽeː hoːkər t̪aːlɪjõː seː ʊnkaː bʱəʋjə sʋaːɡət̪ kɪjaː] (jyohn hee MOOKH-yuh uh-TEE-thee nay vee-SHAHL suh-bhah-GAHR mayn pruh-VAYSH kee-YAH, tyohn hee SUH-bhee oo-puhs-THEET guhn-MAHN-yuh vyuhk-tee-YOHN nay KHUH-day hoh-kuhr tah-lee-YOHN say OON-kah BHUHV-yuh svah-GAHT kee-YAH)",
          "translation": "As soon as the chief guest entered the huge auditorium, immediately all present dignitaries stood up and welcomed him grandly with applause."
        },
        {
          "target": "जब कभी भी मातृभूमि पर कोई गंभीर बाह्य संकट उपस्थित होता है, तब देश के सभी नागरिक अपने आपसी मतभेद भुलाकर पूरी तरह एकजुट हो जाते हैं।",
          "reading": "jab kabhi bhi maatribhoomi par koi gambheer baahya sankat upasthit hota hai, tab desh ke sabhi naagrik apne aapsi matbhed bhulaakar poori tarah ekjut ho jaate hain. [dʒəb kəbʱiː bʱiː maːt̪rɪbʱuːmiː pər koːiː ɡəmbiːr baːɦjə səŋkəʈ ʊpəst̪ʰɪt̪ hoːt̪aː hɛː t̪əb d̪eːʃ keː səbʱiː naːɡrɪk əpneː aːpsiː mət̪bʱeːd̪ bʱʊlaːkər puːriː t̪ərəɦ eːkdʒʊt̪ hoː dʒaːt̪eː hɛ̃ː] (juhb kuh-BHEE bhee mah-tree-BHOO-mee puhr koh-EE guhm-BHEER BAHH-yuh SUHN-kuht oo-puhs-THEET hoh-TAH hy, tuhb daysh kay SUH-bhee NAHG-reek uhp-NAY ahp-SEE muht-BHAYD bhoo-lah-KUHR POO-ree TUH-ruh ayk-JOOT hoh JAH-tay hy-n)",
          "translation": "Whenever any serious external crisis confronts the motherland, then all citizens of the country forget their mutual differences and become completely united."
        }
      ],
      "mnemonics": [
        "सामान्य समय = जब...तब (When...then); तत्कालिक = ज्यों ही...त्यों ही (As soon as)!"
      ],
      "culturalNotes": [
        "'जब तक सूरज चाँद रहेगा' जैसे कालिक संकल्प भारतीय राष्ट्रगीतों और जनसंवेदना में अमरता और निष्ठा के प्रतीक हैं।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "तत्कालिक समय (As soon as the bell rang...) के लिए सही संबंधवाचक युग्म कौन-सा है?",
          "options": [
            "ज्यों ही घंटी बजी, त्यों ही छात्र आए (Jyon hi ghanti baji, tyon hi chhaatr aaye - As soon as bell rang, students arrived)",
            "जब घंटी बजी वैसा छात्र आए (असंगत युग्म)",
            "जहाँ घंटी बजी वहाँ छात्र आए (स्थान दोष)",
            "जितनी घंटी बजी उतना छात्र आए (परिमाण दोष)"
          ],
          "answerIndex": 0,
          "explanation": "तत्कालिकता के लिए «ज्यों ही...त्यों ही» का समकालिक युग्म आदर्श है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "समयवाचक वाक्य «जब सूर्य उदय होता है, ___ कमल खिलते हैं» में सही नित्यसंबंधी शब्द भरिए:",
          "options": [
            "तब (Tab - Then [temporal correlative])",
            "वहाँ (Place error)",
            "उधर (Direction error)",
            "वैसा (Manner error)"
          ],
          "answerIndex": 0,
          "explanation": "'जब' (when) के साथ कालवाचक नित्यसंबंधी «तब» आता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "कालिक संबंधवाचक युग्म (जब...तब) का शुद्ध वाक्य चुनिए:",
          "options": [
            "जब तक व्यक्ति स्वयं प्रयास नहीं करता, तब तक उसे सफलता नहीं मिल सकती। (As long as a person does not make effort himself, until then he cannot get success.)",
            "जब तक व्यक्ति प्रयास करता है जहाँ तक सफलता मिलती है।",
            "ज्यों ही प्रयास करता है वैसा फल मिलता है।",
            "जब व्यक्ति प्रयास किया था त्यों ही सफल हुआ था।"
          ],
          "answerIndex": 0,
          "explanation": "«जब तक...तब तक» (सीमा/अवधि बोधक) का प्रयोग व्याकरणिक दृष्टि से सर्वथा शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u15-l5": {
    "id": "hi-u15-l5",
    "subject": "hindi",
    "unit": 15,
    "lessonNumber": 5,
    "title": "संबंधवाचक-नित्यसंबंधी संरचनाओं का समग्र समेकन व वाक्य रूपांतरण (Synthesis of Correlative Paradigms)",
    "level": "B1",
    "objective": "हिंदी के सभी संबंधवाचक युग्मों (संज्ञा, स्थान, दिशा, रीति, परिमाण, समय) का संश्लिष्ट अनुच्छेदों में समन्वय और सरल वाक्यों से मिश्र वाक्यों में रूपांतरण की दक्षता सिद्ध करना।",
    "presentation": {
      "explanation": "संबंधवाचक-नित्यसंबंधी संरचनाओं का समग्र वर्गीकरण तालिका:\n\n1. **समग्र संबंधवाचक आव्यूह (Correlative Matrix)**:\n   - **संज्ञा/सर्वनाम**: *जो...वह* (जिसने...उसने, जिसे...उसे, जिसका...उसका);\n   - **स्थान**: *जहाँ...वहाँ* (जहाँ कहीं भी...वहाँ);\n   - **दिशा**: *जिधर...उधर*;\n   - **रीति**: *जैसा...वैसा* (जैसी...वैसी, जैसे...वैसे);\n   - **परिमाण**: *जितना...उतना* (जितनी...उतनी, जितने...उतने);\n   - **समय**: *जब...तब* / *ज्यों ही...त्यों ही* / *जब तक...तब तक*।\n\n2. **वाक्य रूपांतरण नियम (Sentence Transformation)**:\n   - सरल वाक्य: *परिश्रमी व्यक्ति सफल होता है।*\n   - मिश्र वाक्य (जो...वह): *जो व्यक्ति परिश्रमी होता है, वह सफल होता है।*\n   - सरल वाक्य: *सूर्योदय होने पर पक्षी चहचहाने लगे।*\n   - मिश्र वाक्य (जब...तब): *जब सूर्योदय हुआ, तब पक्षी चहचहाने लगे।*",
      "examples": [
        {
          "target": "जो राष्ट्र ज्ञान और विज्ञान के क्षेत्र में अग्रणी होता है और जहाँ के नागरिक पूर्णतः अनुशासित होते हैं, वही विश्व में सर्वोपरि सम्मान और गौरव पाता है।",
          "reading": "jo raashtr gyaan aur vigyaan ke kshetr mein agrani hota hai aur jahaan ke naagrik poornatah anushaasit hote hain, vahi vishva mein sarvopari sammaan aur gaurav paata hai. [dʒoː raːʂʈr ɡjaːn ɔːr ʋɪɡjaːn keː kʃeːt̪r mẽː əɡrəɳiː hoːt̪aː hɛː ɔːr dʒəɦaː̃ keː naːɡrɪk puːrɳət̪əɦ ənʊʃaːsɪt̪ hoːt̪eː hɛ̃ː ʋəɦiː ʋɪʃʋə mẽː sərʋoːpəriː səmːaːn ɔːr ɡɔːrəʋ paːt̪aː hɛː] (joh RAHSH-truh GYAHN owr veeg-YAHN kay KSHAY-truh mayn uhg-ruh-NEE hoh-TAH hy owr juh-HAHN kay NAHG-reek POOR-nuh-tuhk uh-noo-shah-SEET hoh-TAY hy-n, vuh-HEE VEESH-vuh mayn suhr-voh-PUH-ree suhm-MAHN owr GOW-ruhv PAH-tah hy)",
          "translation": "The nation which is foremost in the field of knowledge and science and where citizens are completely disciplined, that very nation attains supreme honor and glory in the world."
        },
        {
          "target": "जैसा महान और त्यागमयी आदर्श हमारे पूर्वजों ने स्थापित किया था, वैसा ही निष्ठावान और कर्तव्यपरायण आचरण करना हमारा राष्ट्रीय और नैतिक कर्तव्य है।",
          "reading": "jaisa mahaan aur tyaagamayi aadarsh hamaare poorvajon ne sthaapit kiya tha, vaisa hi nishthaavaan aur kartavyaparaayan aacharan karna hamaara raashtreey aur naitik kartavya hai. [dʒɛːsaː məɦaːn ɔːr t̪jaːɡməjiː aːd̪ərʃ ɦəmaːreː puːrʋədʒõː neː st̪ʰaːpɪt̪ kɪjaː t̪ʰaː ʋɛːsaː ɦiː nɪʂʈʰaːʋaːn ɔːr kərt̪əʋjəpəraːjəɳ aːtʃərəɳ kərnaː ɦəmaːraː raːʂʈriːj ɔːr nɛːt̪ɪk kərt̪əʋjə hɛː] (JY-sah muh-HAHN owr tyah-guh-muh-YEE ah-DUHRSH huh-MAH-ray poor-vuh-JOHN nay sthah-PEET kee-YAH thah, VY-sah hee neesh-thah-VAHN owr kuhr-tuhv-yuh-puh-RAH-yuhn ah-chuh-RUHN KUHR-nah huh-MAH-rah rahsh-TREE-yuh owr NY-teek kuhr-TUHV-yuh hy)",
          "translation": "Such noble and selfless ideal as our ancestors had established, to practice such faithful and dutiful conduct is our national and moral obligation."
        },
        {
          "target": "जितना अधिक हम अपनी समृद्ध मातृभाषा और सांस्कृतिक विरासत का हृदय से आदर करेंगे, उतना ही हमारा बौद्धिक और आत्मिक विकास सुदृढ़ होगा।",
          "reading": "jitna adhik hum apni samriddh maatr-bhaasha aur saanskritik viraasat ka hriday se aadar karenge, utna hi hamaara bauddhikk aur aatmik vikaas sudridh hoga. [dʒɪt̪naː əd̪ʱɪk ɦəm əpniː səmbrɪd̪ːʱ maːt̪rbʱaːʂaː ɔːr saːnskrɪt̪ɪk ʋɪraːsət̪ kaː hrɪd̪əj seː aːd̪ər kərẽːɡeː ʊt̪naː ɦiː ɦəmaːraː bɔːd̪ːʱɪk ɔːr aːt̪mɪk ʋɪkaːs sʊdrɪɽʱ hoːɡaː] (JEET-nah uh-DHEEK huhm uhp-NEE suhm-REEDH-dh MAH-tree-BHAH-shah owr sahn-skree-TEEK vee-RAH-suht kah HREE-duhy say AH-duhr kuhr-AYN-gay, OOT-nah hee huh-MAH-rah bowdh-DHEEK owr AHT-meek vee-KAHS soo-DREEDH hoh-GAH)",
          "translation": "The more we respect our rich mother tongue and cultural heritage from the heart, that much more solid will our intellectual and spiritual development become."
        }
      ],
      "mnemonics": [
        "संज्ञा (जो...वह), स्थान (जहाँ...वहाँ), रीति (जैसा...वैसा), परिमाण (जितना...उतना), समय (जब...तब)! संबंधवाचक षट्कोण!"
      ],
      "culturalNotes": [
        "भारतीय संविधान और उच्च न्यायालयों के हिंदी प्रारूपों में विधिक सटीकता (Legal Precision) के लिए संबंधवाचक-नित्यसंबंधी वाक्यों का ही प्रमुखता से प्रयोग किया जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "सरल वाक्य «सच्चे देशभक्त राष्ट्र के लिए बलिदान देते हैं» का मानक मिश्र वाक्य रूपांतरण क्या होगा?",
          "options": [
            "जो सच्चे देशभक्त होते हैं, वे राष्ट्र के लिए बलिदान देते हैं (Jo sachche deshbhakt hote hain, ve rashtr ke liye balidaan dete hain - Complex correlative transformation)",
            "सच्चे देशभक्त जहाँ होते हैं वहाँ बलिदान देते हैं (स्थान दोष)",
            "सच्चे देशभक्त जितना होते हैं उतना बलिदान देते हैं (परिमाण दोष)",
            "सच्चे देशभक्त जब बलिदान देते हैं तब देशभक्त होते हैं (कालिक विपर्यय)"
          ],
          "answerIndex": 0,
          "explanation": "सरल विशेषण 'सच्चे देशभक्त' को संबंधवाचक उपवाक्य «जो सच्चे देशभक्त होते हैं, वे...» में बदलना मानक रूपांतरण है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "मिश्र वाक्य «जैसा बीज बोओगे, वैसा फल पाओगे» में रेखांकित युग्म किस कोटि का है?",
          "options": [
            "रीतिवाचक संबंध-नित्यसंबंधी (Manner correlative: jaisa...vaisa)",
            "स्थानवाचक (Locative mismatch)",
            "कालवाचक (Temporal mismatch)",
            "परिमाणवाचक (Quantity mismatch)"
          ],
          "answerIndex": 0,
          "explanation": "«जैसा...वैसा» कार्य के प्रकार या रीति (Manner) का बोध कराने वाला संबंधवाचक युग्म है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "संबंधवाचक और नित्यसंबंधी उपवाक्यों का समग्र रूप से शुद्ध व सुगठित वाक्य पहचानिए:",
          "options": [
            "जो व्यक्ति जितना अधिक शांत और धैर्यवान रहता है, वह जीवन की हर कठिन चुनौती को उतनी ही सुगमता से पार कर लेता है। (The person who remains that much more calm and patient, he overcomes every tough challenge of life with equal ease.)",
            "जो व्यक्ति जहाँ शांत रहता है वह जब चुनौती पार करता है।",
            "जैसा व्यक्ति शांत रहता है उतना ही चुनौती पार करता है।",
            "जिसने शांत रहा उसने सुगमता से पार किया था।"
          ],
          "answerIndex": 0,
          "explanation": "«जो व्यक्ति जितना अधिक शांत... वह... उतनी ही सुगमता से...» में सर्वनाम (जो...वह) और परिमाण (जितना...उतनी) दोनों का संश्लेषण व्याकरणिक रूप से परिपूर्ण है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u16-l1": {
    "id": "hi-u16-l1",
    "subject": "hindi",
    "unit": 16,
    "lessonNumber": 1,
    "title": "कर्मवाच्य का आधारभूत निर्माण: सामान्य भूतकालिक कृदंत + 'जाना' (Basic Passive Formation: Past Participle + jaana)",
    "level": "B1",
    "objective": "सकर्मक क्रियाओं से कर्मवाच्य (Passive Voice) बनाने का नियम — [मुख्य क्रिया का सामान्य भूतकाल] + [सहायक क्रिया 'जाना' का काल-रूप] — तथा कर्म के लिंग-वचन के अनुसार क्रिया समन्वय (Object Agreement) में पूर्ण दक्षता प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में कर्मवाच्य (Passive Voice) का निर्माण तब किया जाता है जब वाक्य में कर्ता के बजाय **कर्म (Object)** मुख्य केंद्रबिंदु हो:\n\n1. निर्माण का सार्वभौमिक सूत्र:\n   - **[सकर्मक मुख्य क्रिया का सामान्य भूतकालिक रूप] + [सहायक धातु 'जाना' का काल-रूप]**\n   - लिखना → **लिखा जाना** (to be written);\n     - वर्तमान काल: *पत्र लिखा जाता है* (Letter is written [masc. sing.]);\n     - वर्तमान काल: *चिट्ठियाँ लिखी जाती हैं* (Letters are written [fem. plur.]);\n     - भूतकाल: *निबंध लिखा गया* (Essay was written);\n     - भविष्य काल: *पुस्तकें लिखी जाएँगी* (Books will be written [fem. plur.]);\n   - बनाना → **बनाया जाना** (*मकान बनाए जाते हैं*);\n   - पढ़ना → **पढ़ा जाना** (*अख़बार पढ़ा गया*);\n   - देखना → **देखा जाना** (*फ़िल्में देखी गईं*)।\n\n2. कर्म-प्रधान अन्वय (Grammatical Agreement with Object):\n   - कर्मवाच्य में क्रिया का लिंग और वचन पूर्णतः **कर्म** के लिंग और वचन के अनुसार बदलता है (कर्ता के अनुसार नहीं)।",
      "examples": [
        {
          "target": "इस आधुनिक कारखाने में प्रतिदिन हज़ारों उच्च गुणवत्ता वाले इलेक्ट्रॉनिक उपकरण और मोबाइल फोन बनाए जाते हैं।",
          "reading": "is aadhunik kaarkhaane mein pratidin hazaaron uchch gunvatta vaale electronic upkaran aur mobile phone banaaye jaate hain. [ɪs aːd̪ʱʊnɪk kaːrkʰaːneː mẽː prət̪ɪd̪ɪn ɦəzaːrõː ʊtʃː ɡʊɳʋət̪ːaː ʋaːleː eːlɛktroːnɪk ʊpkərəɳ ɔːr moːbaːiːl foːn bənaːjeː dʒaːt̪eː hɛ̃ː] (ees ah-dhoo-NEEK kahr-KHAH-nay mayn pruh-tee-DEEN huh-ZAH-rohn ootch goon-VUHT-tah VAH-lay ay-lehk-TRAH-neek oop-KUH-ruhn owr MOH-byle fohn buh-NAH-yay JAH-tay hy-n)",
          "translation": "In this modern factory, thousands of high quality electronic instruments and mobile phones are manufactured every day."
        },
        {
          "target": "कल देर रात सभी प्रमुख राष्ट्रीय समाचार चैनलों और दैनिक समाचार पत्रों द्वारा यह अत्यंत महत्वपूर्ण आधिकारिक समाचार प्रसारित किया गया।",
          "reading": "kal der raat sabhi pramukh raashtreey samaachaar channelon aur dainik samaachaar patron dvaara yah atyant mahatvapoorna aadhikaarik samaachaar prasaarit kiya gaya. [kəl d̪eːr raːt̪ səbʱiː prəmʊkʰ raːʂʈriːj səmaːtʃaːr tʃɛːnəlõː ɔːr d̪ɛːnɪk səmaːtʃaːr pət̪rõː d̪ʋaːraː jəɦ ət̪jən̪t̪ məɦət̪ʋəpuːrɳə aːd̪ʱɪkaːrɪk səmaːtʃaːr prəsaːrɪt̪ kɪjaː ɡəjaː] (kuhl dayr raht SUH-bhee pruh-MOOKH rahsh-TREE-yuh suh-mah-CHAHR CHAY-nuh-lohn owr DY-neek suh-mah-CHAHR PUH-trohn dvah-RAH yuh uht-YUHNT muh-huht-vuh-POOR-nuh ah-dhee-KAH-reek suh-mah-CHAHR pruh-sah-REET kee-YAH GUH-yah)",
          "translation": "Late last night, this extremely important official news was broadcast by all major national news channels and daily newspapers."
        },
        {
          "target": "विश्वविद्यालय के भव्य दीक्षांत समारोह में सभी मेधावी और उत्कृष्ट छात्र-छात्राओं को स्वर्ण पदक और मानद उपाधियाँ प्रदान की गईं।",
          "reading": "vishvavidyaalay ke bhavya deekshaant samaaroh mein sabhi medhaavi aur utkrisht chhaatr-chhaatraaon ko svarn padak aur maaniad upaadhiyaan pradaan ki gayin. [ʋɪʃʋəʋɪd̪jaːləj keː bʱəʋjə d̪iːkʃaːn̪t̪ səmaːroːɦ mẽː səbʱiː meːd̪ʱaːʋiː ɔːr ʊt̪krɪʂʈ tʃʰaːt̪r tʃʰaːt̪raːõː koː sʋərɳ pəd̪ək ɔːr maːnəd̪ ʊpaːd̪ʱɪjaː̃ prəd̪aːn kiː ɡəĩː] (veesh-vuh-veed-YAH-luy kay BHUHV-yuh deek-SHAHNT suh-mah-ROH mayn SUH-bhee may-DHAH-vee owr oot-KREESH-th CHHAH-truh-CHHAH-trah-ohn koh svuhrn PUH-duhk owr MAH-nuhd oo-pah-DHEE-yahn pruh-DAHN kee GUH-yeen)",
          "translation": "In the grand convocation ceremony of the university, gold medals and honorary degrees were conferred upon all meritorious and outstanding students."
        }
      ],
      "mnemonics": [
        "कर्मवाच्य = Past Participle + जाना! (पुस्तक पढ़ी गई, पत्र लिखा गया)!"
      ],
      "culturalNotes": [
        "हिंदी के समाचार पत्रों, दूरदर्शन के समाचार बुलेटिनों और प्रशासनिक विज्ञप्तियों में निष्पक्षता और वस्तुनिष्ठता (Objectivity) बनाए रखने के लिए कर्मवाच्य का सर्वाधिक उपयोग होता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "सकर्मक वाक्य «अध्यापक ने कॉपियाँ जाँचीं» का मानक कर्मवाच्य रूप क्या होगा?",
          "options": [
            "अध्यापक द्वारा कॉपियाँ जाँची गईं (Adhyaapak dvaara copy-aan jaanchi gayin - Notebooks were checked by the teacher [fem. plur. agreement])",
            "अध्यापक द्वारा कॉपियाँ जाँचा गया (पुंलिंग एकवचन दोष)",
            "अध्यापक से कॉपियाँ जाँचना था (असमर्थता भ्रम)",
            "कॉपियाँ अध्यापक को जाँची गईं (कारक दोष)"
          ],
          "answerIndex": 0,
          "explanation": "'कॉपियाँ' स्त्रीलिंग बहुवचन होने के कारण क्रिया का कर्मवाच्य रूप «जाँची गईं» शुद्ध है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «भारत में कई सुंदर त्यौहार ___» में कर्मवाच्य का सही वर्तमान काल रूप भरिए:",
          "options": [
            "मनाए जाते हैं (Manaaye jaate hain - Are celebrated [masc. plur. agreement with tyauhaar])",
            "मनाया जाता है (एकवचन त्रुटि)",
            "मनाते हैं लोग (कर्तृवाच्य रूप)",
            "मनाया गया था (भूतकाल भ्रम)"
          ],
          "answerIndex": 0,
          "explanation": "'त्यौहार' पुंलिंग बहुवचन कर्म होने से वर्तमान काल कर्मवाच्य «मनाए जाते हैं» शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "कर्मवाच्य (Passive Voice) का लिंग-वचन समन्वय वाला पूर्णतः शुद्ध वाक्य चुनिए:",
          "options": [
            "पुस्तकालय में विद्यार्थियों द्वारा अनेक दुर्लभ पुस्तकें पढ़ी जाती हैं। (In the library many rare books are read by students.)",
            "पुस्तकालय में विद्यार्थियों द्वारा अनेक पुस्तकें पढ़ा जाता है।",
            "पुस्तकालय में पुस्तकें पढ़ी जाता हैं।",
            "पुस्तकालय में पुस्तकें पढ़े जाते हैं।"
          ],
          "answerIndex": 0,
          "explanation": "«पुस्तकें» स्त्रीलिंग बहुवचन कर्म के साथ कर्मवाच्य क्रिया «पढ़ी जाती हैं» का अन्वय शत-प्रतिशत शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u16-l2": {
    "id": "hi-u16-l2",
    "subject": "hindi",
    "unit": 16,
    "lessonNumber": 2,
    "title": "कर्मवाच्य में कर्ता-परसर्ग: 'के द्वारा' और 'से' (Agent Markers in Passive: ke dvaara & se)",
    "level": "B1",
    "objective": "कर्मवाच्य में कर्ता के साथ प्रयुक्त होने वाले परसर्गों — औपचारिक/संस्थागत संदर्भ में 'के द्वारा / द्वारा' तथा व्यक्तिगत संदर्भ में 'से' — के विशिष्ट प्रयोग नियमों में निपुण होना।",
    "presentation": {
      "explanation": "कर्मवाच्य वाक्यों में जब कर्ता (Logical Subject / Agent) को वाक्य में व्यक्त किया जाता है, तब उसके साथ दो प्रमुख परसर्ग लगते हैं:\n\n1. **'के द्वारा' अथवा 'द्वारा' (By / Through — Formal / Institutional)**:\n   - सरकारी, विधिक, संस्थागत, वैज्ञानिक या औपचारिक संदर्भों में कर्ता के साथ **'द्वारा / के द्वारा'** अथवा **'की ओर से'** लगाया जाता है:\n     - *सरकार द्वारा नई योजना शुरू की गई* (New scheme was launched by the government);\n     - *न्यायालय के द्वारा फैसला सुनाया गया* (Verdict was delivered by the court);\n     - *पुलिस द्वारा अपराधी पकड़ा गया* (Criminal was caught by the police)।\n\n2. **'से' (By / Instrumental — Personal / Human Agent)**:\n   - सामान्य मानवीय कर्ता के साथ 'से' का प्रयोग भी प्रचलित है:\n     - *मुझसे यह काम पूरा किया गया*;\n     - *बच्चों से सुंदर चित्र बनाए गए*।",
      "examples": [
        {
          "target": "केंद्रीय पर्यावरण मंत्रालय के द्वारा देश के सभी प्रमुख वन्यजीव अभयारण्यों और राष्ट्रीय उद्यानों में नए सुरक्षा नियम कड़ाई से लागू किए गए हैं।",
          "reading": "kendreey paryaavaran mantraalay ke dvaara desh ke sabhi pramukh vanyajeev abhayaaranyon aur raashtreey udyaanon mein naye suraksha niyam kadaai se laagu kiye gaye hain. [keːn̪d̪riːj pərjaːʋərəɳ mən̪t̪raːləj keː d̪ʋaːraː d̪eːʃ keː səbʱiː prəmʊkʰ ʋənjədʒiːʋ əbʱəjaːrəɳjõː ɔːr raːʂʈriːj ʊdjaːnõː mẽː nəjeː sʊrəkʃaː nɪjəm kəɽaːiː seː laːɡuː kɪjeː ɡəjeː hɛ̃ː] (kayn-DREE-yuh puhr-yah-vuh-RUHN muhn-trah-LUY kay dvah-RAH daysh kay SUH-bhee pruh-MOOKH vuhn-yuh-JEEV uh-bhuy-AH-ruhn-yohn owr rahsh-TREE-yuh ood-YAH-nohn mayn nuh-YAY soo-ruhk-SHAH NEE-yuhm kuh-DAH-ee say LAH-goo kee-YAY GUH-yay hy-n)",
          "translation": "New safety regulations have been strictly enforced across all major wildlife sanctuaries and national parks of the country by the Union Ministry of Environment."
        },
        {
          "target": "अनुभवी वैज्ञानिकों के दल द्वारा इस सुदूर और दुर्गम पर्वतीय क्षेत्र में एक अत्यंत दुर्लभ और औषधीय वनस्पति प्रजाति की खोज की गई।",
          "reading": "anubhavi vaigyaanikon ke dal dvaara is sudoor aur durgam parvateey kshetr mein ek atyant durlabh aur aushadheey vanaspati prajaati ki khoj ki gayi. [ənʊbʱəʋiː ʋɛːɡjaːnɪkõː keː d̪əl d̪ʋaːraː ɪs sʊd̪uːr ɔːr d̪ʊrɡəm pərʋət̪iːj kʃeːt̪r mẽː eːk ət̪jən̪t̪ d̪ʊrləbʱ ɔːr ɔːʂəd̪ʱiːj ʋənəspət̪ɪ prədʒaːt̪ɪ kiː kʰoːdʒ kiː ɡəiː] (uh-noobh-HUH-vee vyg-YAH-nee-kohn kay duhl dvah-RAH ees soo-DOOR owr door-GUHM puhr-vuh-TEE-yuh KSHAY-truh mayn ayk uht-YUHNT door-LUHBH owr ow-shuh-DHEE-yuh vuh-nuhs-PUH-tee pruh-JAH-tee kee khohj kee GUH-yee)",
          "translation": "An extremely rare and medicinal botanical species was discovered in this remote and inaccessible mountainous region by the team of experienced scientists."
        },
        {
          "target": "जिला प्रशासन की ओर से बाढ़ प्रभावित सभी ग्रामीण क्षेत्रों में तुरंत आवश्यक राहत सामग्री, स्वच्छ पेयजल और औषधियाँ वितरित की गईं।",
          "reading": "jila prashaasan ki or se baadh prabhaavit sabhi graameen kshetron mein turant aavashyak raahat saamagree, swachh peyajal aur aushadhiyaan vitarit ki gayin. [dʒɪlaː prəʃaːsən kiː oːr seː baːɽʱ prəbʱaːʋɪt̪ səbʱiː ɡraːmiːɳ kʃeːt̪rõː mẽː t̪ʊrən̪t̪ aːʋəʃjək raːɦət̪ saːməɡriː sʋətʃːʰ peːjədʒəl ɔːr ɔːʂəd̪ʱɪjaː̃ ʋɪt̪rɪt̪ kiː ɡəĩː] (jee-LAH pruh-SHAH-suhn kee ohr say bahdh pruh-bhah-VEET SUH-bhee grah-MEEN KSHAY-trohn mayn TOO-ruhnt ah-vush-YAHK RAH-huht sah-muhg-REE, SVAHTCHH pay-yuh-JUHL owr ow-shuh-DHEE-yahn vee-tuh-REET kee GUH-yeen)",
          "translation": "Essential relief material, clean drinking water, and medicines were immediately distributed in all flood-affected rural areas on behalf of the district administration."
        }
      ],
      "mnemonics": [
        "संस्था/प्रशासन = 'द्वारा / के द्वारा'; निजी कर्ता = 'से' (सरकार द्वारा लागू किया गया)!"
      ],
      "culturalNotes": [
        "सरकारी आदेशों में 'राज्यपाल/राष्ट्रपति के आदेश द्वारा' (By order of Governor/President) संवैधानिक वैधता और प्राधिकार का प्रतीक होता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "औपचारिक वाक्य «सर्वोच्च न्यायालय ___ ऐतिहासिक निर्णय सुनाया गया» में उचित कर्ता-परसर्ग क्या होगा?",
          "options": [
            "द्वारा (Dvaara - By the Supreme Court [formal agent marker])",
            "को (Dative error for agent)",
            "पर (Locative error)",
            "में (In error)"
          ],
          "answerIndex": 0,
          "explanation": "औपचारिक और न्यायिक कर्ता के साथ कर्मवाच्य में «द्वारा» या 'के द्वारा' का प्रयोग मानक है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «प्रसिद्ध चित्रकार ___ यह सुंदर कलाकृति बनाई गई» में सही परसर्ग भरिए:",
          "options": [
            "के द्वारा (Ke dvaara - By the famous painter)",
            "का (Genitive mismatch)",
            "में (Locative error)",
            "तक (Limit error)"
          ],
          "answerIndex": 0,
          "explanation": "कर्मवाच्य में कर्ता 'चित्रकार' के साथ «के द्वारा» सही है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'के द्वारा' परसर्ग के साथ कर्मवाच्य का शुद्ध वाक्य चुनिए:",
          "options": [
            "प्रधानमंत्री द्वारा नए अंतरराष्ट्रीय हवाई अड्डे का विधिवत उद्घाटन किया गया। (The new international airport was formally inaugurated by the Prime Minister.)",
            "प्रधानमंत्री को हवाई अड्डे का उद्घाटन किया गया।",
            "प्रधानमंत्री में हवाई अड्डा का उद्घाटन हुआ था।",
            "प्रधानमंत्री से हवाई अड्डा खोला गया था।"
          ],
          "answerIndex": 0,
          "explanation": "«प्रधानमंत्री द्वारा... उद्घाटन किया गया» कर्मवाच्य का सर्वथा शुद्ध और मानक आधिकारिक रूप है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u16-l3": {
    "id": "hi-u16-l3",
    "subject": "hindi",
    "unit": 16,
    "lessonNumber": 3,
    "title": "असमर्थता और विवशता का कर्मवाच्य: 'मुझसे नहीं खाया जाता' (Incapacity Passive: Negative Inability with से)",
    "level": "B1",
    "objective": "नकारात्मक कर्मवाच्य और भाववाच्य में कर्ता + 'से' + 'नहीं' + [जाना] संरचना द्वारा शारीरिक, मानसिक या परिस्थितिजन्य असमर्थता (Incapacity / Inability) को सटीक रूप से व्यक्त करने में प्रवीण होना।",
    "presentation": {
      "explanation": "हिंदी में जब कर्मवाच्य या भाववाच्य का प्रयोग **नकारात्मक (नहीं)** के साथ किया जाता है, तब वह सामान्य निषेध नहीं बल्कि **शारीरिक या मानसिक असमर्थता (Inability / Incapacity)** प्रकट करता है:\n\n1. असमर्थता कर्मवाच्य का सूत्र:\n   - **[कर्ता + से] + [कर्म] + नहीं + [मुख्य क्रिया कृदंत + जाना का रूप]**\n   - *मुझसे यह भारी संदूक नहीं उठाया जाता* (I am physically unable to lift this heavy box);\n   - *रोगी से कड़वी दवा नहीं खाई जाती* (The patient cannot bring himself to take bitter medicine);\n   - *मुझसे उसकी गरीबी देखी नहीं गई* (I could not bear to witness his poverty [past inability])।\n\n2. अकर्मक क्रियाओं में भाववाच्य असमर्थता (Impersonal Incapacity with Intransitive Verbs):\n   - अकर्मक क्रियाओं में कर्म नहीं होता, अतः क्रिया सदैव **पुंलिंग एकवचन** रहती है:\n     - *दादी जी से अब चला नहीं जाता* (Grandmother is unable to walk now);\n     - *मुझसे इतनी रात तक बैठा नहीं जाएगा* (I won't be able to sit awake till so late)।",
      "examples": [
        {
          "target": "लंबी और गंभीर बीमारी के बाद अत्यधिक शारीरिक दुर्बलता के कारण वृद्ध दादा जी से अब बिना सहारे अधिक देर तक चला भी नहीं जाता।",
          "reading": "lambi aur gambheer beemaari ke baad atyadhik shaareerik durbalta ke kaaran vriddh daada ji se ab bina sahaare adhik der tak chala bhi nahin jaata. [ləmbiː ɔːr ɡəmbiːr biːmaːriː keː baːd̪ ət̪jəd̪ʱɪk ʃaːriːrɪk d̪ʊrbəlt̪aː keː kaːrəɳ ʋrɪd̪ːʱ d̪aːd̪aː dʒiː seː əb bɪnaː səɦaːreː əd̪ʱɪk d̪eːr t̪ək tʃəlaː bʱiː nəɦĩː dʒaːt̪aː] (LUHM-bee owr guhm-BHEER bee-MAH-ree kay bahd uht-yuh-DHEEK shah-ree-REEK door-buhl-TAH kay KAH-ruhn VREEDH-dh DAH-dah jee say uhb BEE-nah suh-HAH-ray uh-DHEEK dayr tuhk CHUH-lah bhee nuh-HEEN JAH-tah)",
          "translation": "Due to extreme physical weakness after a long and serious illness, the elderly grandfather is now unable to even walk for long without support."
        },
        {
          "target": "भीषण गर्मी में दिनभर कठिन शारीरिक परिश्रम करने के बाद अत्यधिक थके हुए मज़दूर से शाम को और अधिक भारी काम नहीं किया गया।",
          "reading": "bheeshan garmi mein dinbhar kathin shaareerik parishram karne ke baad atyadhik thake huye mazdoor se shaam ko aur adhik bhaari kaam nahin kiya gaya. [bʱiːʂəɳ ɡərmiː mẽː d̪ɪnbʱər kəʈʰɪn ʃaːriːrɪk pərɪʃrəm kərneː keː baːd̪ ət̪jəd̪ʱɪk t̪ʰəkeː hʊjeː məzduːr seː ʃaːm koː ɔːr əd̪ʱɪk bʱaːriː kaːm nəɦĩː kɪjaː ɡəjaː] (bhee-SHUHN GUHR-mee mayn DEEN-bhuhr KUH-theen shah-ree-REEK puh-REESH-ruhm KUHR-nay kay bahd uht-yuh-DHEEK thuh-KAY HOO-yay muhz-DOOR say shahm koh owr uh-DHEEK BHAH-ree kahm nuh-HEEN kee-YAH GUH-yah)",
          "translation": "After doing hard manual labor all day in the intense heat, the extremely exhausted laborer was unable to do any more heavy work in the evening."
        },
        {
          "target": "उस निर्दोष और असहाय अनाथ बालक की दारुण व्यथा और विवशता देखकर वहाँ उपस्थित किसी भी सहृदय व्यक्ति से उसकी उपेक्षा नहीं की गई।",
          "reading": "us nirdosh aur asahaay anaath baalak ki daarun vyatha aur vivashata dekhkar vahaan upasthit kisi bhi sahriday vyakti se uski upeksha nahin ki gayi. [ʊs nɪrdoːʂ ɔːr əsəɦaːj ənaːt̪ʰ baːlək kiː d̪aːrʊɳ ʋjət̪ʰaː ɔːr ʋɪʋəʃt̪aː d̪eːkʰkər ʋəɦaː̃ ʊpəst̪ʰɪt̪ kɪsiː bʱiː səɦrɪd̪əj ʋjəkt̪ɪ seː ʊskiː ʊpeːkʃaː nəɦĩː kiː ɡəiː] (oos neer-DOHSH owr uh-suh-HAHY uh-NAHTH BAH-luhk kee DAH-roon vyuh-THAH owr vee-vush-TAH DAYKH-kuhr vuh-HAHN oo-puhs-THEET kee-SEE bhee suh-HREE-duhy VYUHNK-tee say OOS-kee oo-PAYK-shah nuh-HEEN kee GUH-yee)",
          "translation": "Seeing the poignant misery and helplessness of that innocent and helpless orphan boy, no kind-hearted person present there could bear to ignore him."
        }
      ],
      "mnemonics": [
        "असमर्थता = कर्ता + 'से' + नहीं + verb + जाना (मुझसे नहीं खाया जाता, रोगी से नहीं चला जाता)!"
      ],
      "culturalNotes": [
        "हिंदी में किसी प्रस्ताव को सीधे 'मैं नहीं करूँगा' कहने के स्थान पर 'मुझसे यह नहीं हो पाएगा' कहना अत्यधिक विनम्र, शिष्ट और निर्दोष माना जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "शारीरिक असमर्थता (Inability: I cannot walk anymore) को व्यक्त करने वाला शुद्ध भाववाच्य वाक्य कौन-सा है?",
          "options": [
            "मुझसे अब और नहीं चला जाता (Mujhse ab aur nahin chala jaata - I am unable to walk any further [impersonal incapacity])",
            "मैं अब और नहीं चलूँगा (दृढ़ संकल्प/इनकार)",
            "मुझको चलना नहीं चाहिए (कर्तव्य का निषेध)",
            "मेरे से चलना बंद हुआ (अमानक हिंदी)"
          ],
          "answerIndex": 0,
          "explanation": "शारीरिक असमर्थता दर्शाने के लिए कर्ता 'मुझसे' + 'नहीं चला जाता' का भाववाच्य रूप सर्वथा मानक है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «इतनी तेज़ धूप में उससे बाहर ___» में सही असमर्थता सूचक रूप भरिए:",
          "options": [
            "नहीं निकला जाता (Nahin nikla jaata - Is unable to go out in such sun)",
            "नहीं निकलता है (Present habitual fact error)",
            "नहीं निकलेगा (Future refusal error)",
            "नहीं निकलना था (Past obligation error)"
          ],
          "answerIndex": 0,
          "explanation": "धूप के कारण विवशता/असमर्थता दर्शाने हेतु «नहीं निकला जाता» शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "असमर्थता और विवशता (Incapacity Passive) का पूर्णतः शुद्ध वाक्य पहचानिए:",
          "options": [
            "गले में तीव्र संक्रमण के कारण रोगी से कुछ भी ठोस भोजन नहीं खाया जा रहा है। (Due to severe throat infection the patient is unable to eat any solid food.)",
            "रोगी ठोस भोजन नहीं खाता है गले के कारण।",
            "रोगी को भोजन नहीं खाया जाता है।",
            "रोगी में भोजन नहीं खाना हुआ।"
          ],
          "answerIndex": 0,
          "explanation": "«रोगी से... भोजन नहीं खाया जा रहा है» में शारीरिक असमर्थता का कर्मवाच्य प्रयोग व्याकरण की दृष्टि से आदर्श है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u16-l4": {
    "id": "hi-u16-l4",
    "subject": "hindi",
    "unit": 16,
    "lessonNumber": 4,
    "title": "अज्ञात कर्ता और औपचारिक/शासकीय सूचनाएं: कर्तृहीन कर्मवाच्य (Agentless Administrative Passive)",
    "level": "B1",
    "objective": "जहाँ कर्ता अज्ञात हो, अप्रासंगिक हो या शासकीय/विधिक औपचारिकता में कर्ता का लोप अनिवार्य हो, वहाँ कर्तृहीन कर्मवाच्य (Agentless Passive) के प्रयोग में पूर्ण दक्षता प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में जब कार्य महत्वपूर्ण हो और कर्ता अज्ञात, सामान्य या अप्रासंगिक हो, तब **कर्तृहीन कर्मवाच्य (Agentless Passive)** का प्रयोग किया जाता है:\n\n1. **शासकीय एवं आधिकारिक सूचनाएं (Official Notices & Decrees)**:\n   - *एतद्द्वारा सूचित किया जाता है कि...* (It is hereby informed that...);\n   - *सार्वजनिक स्थलों पर धूम्रपान वर्जित किया जाता है* (Smoking is prohibited in public places);\n   - *दोषी को पाँच वर्ष का कारावास दिया गया* (The culprit was given five years imprisonment)।\n\n2. **व्यावसायिक व सामान्य निर्देश (Business & General Notices)**:\n   - *यहाँ शुद्ध शाकाहारी भोजन परोसा जाता है* (Pure vegetarian food is served here);\n   - *यहाँ हिंदी और संस्कृत पढ़ाई जाती है* (Hindi and Sanskrit are taught here);\n   - *दुकान रविवार को बंद रखी जाती है* (Shop is kept closed on Sunday)।",
      "examples": [
        {
          "target": "सर्वसाधारण को एतद्द्वारा सूचित किया जाता है कि आगामी राष्ट्रीय पर्व के पावन उपलक्ष्य में शहर के सभी शासकीय कार्यालय पूर्णतः बंद रखे जाएँगे।",
          "reading": "sarvasaadhaaran ko etaddvaara soochit kiya jaata hai ki aagaami raashtreey parv ke paavan uplakshya mein shahar ke sabhi shaaskeey kaaryaalay poornatah band rakhe jaayenge. [sərʋəsaːd̪ʱaːrəɳ koː eːt̪əd̪d̪ʋaːraː suːtʃɪt̪ kɪjaː dʒaːt̪aː hɛː kɪ aːɡaːmiː raːʂʈriːj pərʋ keː paːʋən ʊpləkʃjə mẽː ʃəɦər keː səbʱiː ʃaːskiːj kaːrjaːləj puːrɳət̪əɦ bən̪d̪ rəkʰeː dʒaːẽːɡeː] (suhr-vuh-sah-DHAH-ruhn koh ay-tuhd-dvah-RAH SOO-cheet kee-YAH JAH-tah hy kee ah-GAH-mee rahsh-TREE-yuh PUHRV kay PAH-vuhn oop-LUHKSH-yuh mayn SHUH-huhr kay SUH-bhee shah-SKEE-yuh kahr-YAH-luy POOR-nuh-tuhk buhnd RUH-khay jah-AYN-gay)",
          "translation": "The general public is hereby informed that on the auspicious occasion of the upcoming national festival, all government offices of the city will be kept completely closed."
        },
        {
          "target": "इस प्रतिष्ठित धर्मार्थ अस्पताल में सभी प्रकार के असाध्य और जटिल रोगों का अत्याधुनिक चिकित्सा उपकरणों द्वारा पूर्णतः निःशुल्क उपचार किया जाता है।",
          "reading": "is pratishthit dharmaarth aspataal mein sabhi prakaar ke asaadhya aur jatil rogon ka atyaadhunik chikitsa upkaranon dvaara poornatah nihshulk upchaar kiya jaata hai. [ɪs prət̪ɪʂʈʰɪt̪ d̪ʱərmaːrt̪ʰ əspət̪aːl mẽː səbʱiː prəkaːr keː əsaːd̪ʱjə ɔːr dʒəʈɪl roːɡõː kaː ət̪jaːd̪ʱʊnɪk tʃɪkɪt̪saː ʊpkərəɳõː d̪ʋaːraː puːrɳət̪əɦ nɪɦʃʊlk ʊptʃaːr kɪjaː dʒaːt̪aː hɛː] (ees pruh-teesh-THEET dhuhr-MAHRTH uhs-puh-TAHL mayn SUH-bhee pruh-KAHR kay uh-SAHDH-yuh owr JUH-teel ROH-gohn kah uht-yah-dhoo-NEEK chee-KEET-sah oop-KUH-ruh-nohn dvah-RAH POOR-nuh-tuhk neeh-SHOOLK oop-CHAHR kee-YAH JAH-tah hy)",
          "translation": "In this prestigious charitable hospital, completely free treatment is provided for all types of incurable and complex ailments using state-of-the-art medical instruments."
        },
        {
          "target": "शहर के सभी ऐतिहासिक स्मारकों के संरक्षित परिसर में किसी भी प्रकार का कचरा फैलाना विधि द्वारा दंडनीय अपराध घोषित किया गया है।",
          "reading": "shahar ke sabhi aitihasik smaarakon ke sanrakshit parisar mein kisi bhi prakaar ka kachra phailaana vidhi dvaara dandaneey apraadh ghoshit kiya gaya hai. [ʃəɦər keː səbʱiː ɛːt̪ɪhaːsɪk smaːrkõː keː sən̪rəkʃɪt̪ pərɪsər mẽː kɪsiː bʱiː prəkaːr kaː kətʃraː pʰɛːlaːnaː ʋɪd̪ʱɪ d̪ʋaːraː ddaɳɖniːj əpraːd̪ʱ ɡʱoːʂɪt̪ kɪjaː ɡəjaː hɛː] (SHUH-huhr kay SUH-bhee ay-tee-HAH-seek SMAH-ruh-kohn kay suhn-ruhk-SHEET puh-REE-suhr mayn kee-SEE bhee pruh-KAHR kah KUHTCH-rah fuy-LAH-nah VEE-dhee dvah-RAH duhn-duh-NEE-yuh uhp-RAHDH GHOH-sheet kee-YAH GUH-yah hy)",
          "translation": "Littering any kind of trash in the protected premises of all historic monuments of the city has been declared a punishable offense by law."
        }
      ],
      "mnemonics": [
        "शासकीय सूचना = सूचित किया जाता है! नियम = घोषित किया गया है! कर्ता-रहित कर्मवाच्य!"
      ],
      "culturalNotes": [
        "भारतीय रेल, डाकघरों और प्रशासनिक भवनों के सूचना-पट्टों (Notice Boards) पर कर्तृहीन कर्मवाच्य की भाषा सार्वभौमिक प्रामाणिक मानक है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "सार्वजनिक सूचना (Public Notice: English is taught here) का शुद्ध कर्तृहीन कर्मवाच्य वाक्य कौन-सा है?",
          "options": [
            "यहाँ अंग्रेज़ी सिखाई जाती है (Yahaan angrezi sikhaayi jaati hai - English is taught here [agentless passive])",
            "यहाँ अंग्रेज़ी सीखता है कोई (अनिश्चित कर्ता त्रुटि)",
            "यहाँ अंग्रेज़ी को सिखाते हैं (अशुद्ध कारक)",
            "यहाँ अंग्रेज़ी सिखाया जाता है (लिंग असंगति)"
          ],
          "answerIndex": 0,
          "explanation": "'अंग्रेज़ी' स्त्रीलिंग होने से कर्तृहीन कर्मवाच्य रूप «सिखाई जाती है» सर्वथा शुद्ध है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "आधिकारिक विज्ञप्ति «एतद्द्वारा सभी नागरिकों को सूचित ___» में सही क्रिया रूप भरिए:",
          "options": [
            "किया जाता है (Kiya jaata hai - Is hereby informed)",
            "करता हूँ (Personal mismatch)",
            "करते हैं लोग (Informal mismatch)",
            "किया जाए शायद (Subjunctive doubt error)"
          ],
          "answerIndex": 0,
          "explanation": "आधिकारिक सूचनाओं में मानक कर्मवाच्य सूत्र «सूचित किया जाता है» प्रयुक्त होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "कर्तृहीन शासकीय कर्मवाच्य का पूर्णतः मानक वाक्य पहचानिए:",
          "options": [
            "नियमों का उल्लंघन करने वाले वाहनों का चालान काटा जाएगा। (Vehicles violating rules will be challaned/fined.)",
            "नियमों का उल्लंघन करने वाले वाहनों का चालान काटेंगे कोई।",
            "नियम उल्लंघन वाहनों को चालान काट दिया।",
            "चालान वाहनों में काटा जाता होगा।"
          ],
          "answerIndex": 0,
          "explanation": "«वाहनों का चालान काटा जाएगा» भविष्यत् काल का आदर्श कर्तृहीन कर्मवाच्य वाक्य है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u16-l5": {
    "id": "hi-u16-l5",
    "subject": "hindi",
    "unit": 16,
    "lessonNumber": 5,
    "title": "कर्तृवाच्य, कर्मवाच्य एवं भाववाच्य का समेकन व वाच्य-रूपांतरण (Voice Synthesis: Active, Passive & Impersonal)",
    "level": "B1",
    "objective": "हिंदी के तीनों वाच्यों — कर्तृवाच्य (Active), कर्मवाच्य (Passive) और भाववाच्य (Impersonal) — के परस्पर रूपांतरण और संश्लिष्ट अनुच्छेदों में उनके सटीक प्रयोग की क्षमता सिद्ध करना।",
    "presentation": {
      "explanation": "हिंदी वाच्य व्यवस्था (Voice System) का संपूर्ण त्रिविध ढाँचा:\n\n1. **कर्तृवाच्य (Active Voice — Focus on Subject)**:\n   - कर्ता प्रधान होता है; क्रिया कर्ता के अनुसार बदलती है:\n     - *अमित पुस्तक पढ़ता है*;\n     - *श्रमिकों ने सड़क बनाई*।\n\n2. **कर्मवाच्य (Passive Voice — Focus on Object)**:\n   - केवल सकर्मक क्रियाओं का बनता है; क्रिया कर्म के अनुसार बदलती है:\n     - *अमित द्वारा पुस्तक पढ़ी जाती है*;\n     - *श्रमिकों द्वारा सड़क बनाई गई*।\n\n3. **भाववाच्य (Impersonal Voice — Focus on Action / Inability)**:\n   - केवल अकर्मक क्रियाओं का बनता है; क्रिया सदैव **पुंलिंग एकवचन** अन्य पुरुष में रहती है:\n     - *अमित से पढ़ा नहीं जाता*;\n     - *चलो, अब सोया जाए* (प्रस्ताव/इच्छा)।\n\n4. **वाच्य रूपांतरण तालिका**:\n   - कर्तृवाच्य: *बच्चे पतंग उड़ाते हैं।*\n   - कर्मवाच्य: *बच्चों द्वारा पतंग उड़ाई जाती है।*\n   - कर्तृवाच्य: *मरीज़ चल नहीं सकता।*\n   - भाववाच्य: *मरीज़ से चला नहीं जाता।*",
      "examples": [
        {
          "target": "नगर निगम प्रशासन द्वारा शहर की सभी प्रमुख क्षतिग्रस्त सड़कों की मरम्मत का कार्य पूर्ण कर लिया गया है और शीघ्र ही यातायात सुचारु रूप से चालू कर दिया जाएगा।",
          "reading": "nagar nigam prashaasan dvaara shahar ki sabhi pramukh kshatigrast sadakon ki marammat ka kaary poorn kar liya gaya hai aur sheeghr hi yaataayaat suchaaru roop se chaaloo kar diya jaayega. [nəɡər nɪɡəm prəʃaːsən d̪ʋaːraː ʃəɦər kiː səbʱiː prəmʊkʰ kʃət̪ɪɡrəst̪ səɽkõː kiː mərəmːət̪ kaː kaːrjə puːrɳ kər lɪjaː ɡəjaː hɛː ɔːr ʃiːɡʱr ɦiː jaːt̪aːjaːt̪ sʊtʃaːrʊ ruːp seː tʃaːluː kər d̪ɪjaː dʒaːjeːɡaː] (NUH-guhr NEE-guhm pruh-SHAH-suhn dvah-RAH SHUH-huhr kee SUH-bhee pruh-MOOKH kshuh-tee-GRUHST suh-duh-KOHN kee muh-ruhm-MUHT kah KAHR-yuh POOR-nuh kuhr LEE-yah GUH-yah hy owr SHEEGH-ruh hee yah-tah-YAHT soo-CHAH-roo roop say CHAH-loo kuhr DEE-yah jah-AY-gah)",
          "translation": "The repair work of all major damaged roads of the city has been completed by the municipal administration and traffic will soon be restored smoothly."
        },
        {
          "target": "जब गंभीर रूप से बीमार वृद्ध रोगी से स्वयं अपने पैरों पर खड़ा भी नहीं हुआ गया, तब डॉक्टर के निर्देश पर परिचारकों द्वारा उसे व्हीलचेयर पर बैठाकर वार्ड में पहुँचाया गया।",
          "reading": "jab gambheer roop se beemaar vriddh rogi se svayam apne pairon par khada bhi nahin hua gaya, tab doctor ke nirdesh par parichaarakon dvaara use wheelchair par baithaakar ward mein pahunchaaya gaya. [dʒəb ɡəmbiːr ruːp seː biːmaːr ʋrɪd̪ːʱ roːɡiː seː sʋəjəm əpneː pɛːrõː pər kʰəɽaː bʱiː nəɦĩː hʊaː ɡəjaː t̪əb ɖɔːkʈər keː nɪrd̪eːʃ pər pərɪtʃaːrkõː d̪ʋaːraː ʊseː ʋʱiːltʃeːjər pər bɛːʈʰaːkər ʋaːrɖ mẽː pəɦʊntʃaːjaː ɡəjaː] (juhb guhm-BHEER roop say bee-MAHR VREEDH-dh ROH-gee say SVAH-yuhm uhp-NAY py-ROHN puhr KHUH-dah bhee nuh-HEEN HOO-ah GUH-yah, tuhb DAHK-tuhr kay neer-DAYSH puhr puh-ree-CHAH-ruh-kohn dvah-RAH oo-SAY wheel-CHAY-uhr puhr by-THAH-kuhr wahrd mayn puh-hoon-CHAH-yah GUH-yah)",
          "translation": "When the seriously ill elderly patient was unable to even stand on his own feet, then upon the doctor's instruction he was seated on a wheelchair by the attendants and brought to the ward."
        },
        {
          "target": "आइए, अब बहुत रात हो चुकी है और हम सब अत्यधिक थक चुके हैं, इसलिए अब कुछ समय के लिए शांतिपूर्वक विश्राम किया जाए।",
          "reading": "aaiye, ab bahut raat ho chuki hai aur hum sab atyadhik thak chuke hain, isliye ab kuchh samay ke liye shaantipoorvak vishraam kiya jaaye. [aːɪjeː əb bəɦʊt̪ raːt̪ hoː tʃʊkiː hɛː ɔːr ɦəm səb ət̪jəd̪ʱɪk t̪ʰək tʃʊkeː hɛ̃ː ɪslɪjeː əb kʊtʃʰ səməj keː lɪjeː ʃaːn̪t̪ɪpuːrʋək ʋɪʃraːm kɪjaː dʒaːjeː] (ah-EE-yay, uhb buh-hoot RAHT hoh CHOO-kee hy owr huhm suhb uht-yuh-DHEEK thuhk CHOO-kay hy-n, ees-LEE-ay uhb koochh SUH-muy kay lee-ay shahn-tee-POOR-vuhk veesh-RAHM kee-YAH JAH-yay)",
          "translation": "Come, now it is very late at night and all of us are extremely tired, therefore let us now rest peacefully for some time."
        }
      ],
      "mnemonics": [
        "कर्तृवाच्य (राम पढ़ता है) → कर्मवाच्य (राम द्वारा पढ़ी जाती है) → भाववाच्य (राम से पढ़ा नहीं जाता / चला जाए)!"
      ],
      "culturalNotes": [
        "सामूहिक निर्णयों में आज्ञा देने के स्थान पर 'चलो, अब भोजन किया जाए' जैसे भाववाच्य वाक्य भारतीय शिष्टाचार में समरसता और सौम्यता के परिचायक हैं।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "कर्तृवाच्य वाक्य «माली पौधों को पानी देता है» का शुद्ध कर्मवाच्य रूपांतरण क्या होगा?",
          "options": [
            "माली द्वारा पौधों को पानी दिया जाता है (Maali dvaara paudhon ko paani diya jaata hai - Plants are watered by the gardener)",
            "माली से पौधों को पानी देना था (असमर्थता भ्रम)",
            "माली पानी देता हुआ पौधों को गया (कृदंत भ्रम)",
            "पौधों ने माली से पानी पाया (कर्तृवाच्य रूपांतरण)"
          ],
          "answerIndex": 0,
          "explanation": "«माली द्वारा... पानी दिया जाता है» कर्मवाच्य का सटीक रूपांतरण है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "सामूहिक इच्छा/प्रस्ताव (Let us rest now) व्यक्त करने वाला भाववाच्य वाक्य कौन-सा है?",
          "options": [
            "अब विश्राम किया जाए (Ab vishraam kiya jaaye - Let rest be taken now [impersonal subjunctive])",
            "हम विश्राम करेंगे (निश्चयात्मक भविष्य)",
            "हमको विश्राम करना है (अनिवार्यता)",
            "विश्राम कर दिया था हमने (सामान्य भूत)"
          ],
          "answerIndex": 0,
          "explanation": "शिष्ट प्रस्ताव और इच्छा हेतु भाववाच्य रूप «अब विश्राम किया जाए» प्रयुक्त होता है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "तीनों वाच्यों (कर्तृवाच्य, कर्मवाच्य, भाववाच्य) के नियमों का संपूर्ण पालन करने वाला शुद्ध वाक्य पहचानिए:",
          "options": [
            "जब घायल सिपाही से और आगे नहीं चला गया, तब साथी सैनिकों द्वारा उसे सुरक्षित शिविर में पहुँचाया गया। (When the injured soldier was unable to walk any further, he was transported to the safe camp by fellow soldiers.)",
            "जब घायल सिपाही को नहीं चला गया सैनिकों ने शिविर पहुँचाया गया।",
            "घायल सिपाही से नहीं चला सैनिकों द्वारा शिविर में पहुँचाया।",
            "सिपाही नहीं चला गया साथी सैनिकों में पहुँचाया था।"
          ],
          "answerIndex": 0,
          "explanation": "«सिपाही से... नहीं चला गया» (असमर्थता भाववाच्य) और «सैनिकों द्वारा... पहुँचाया गया» (सकर्मक कर्मवाच्य) दोनों का संश्लेषण व्याकरणिक दृष्टि से उत्कृष्ट है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u17-l1": {
    "id": "hi-u17-l1",
    "subject": "hindi",
    "unit": 17,
    "lessonNumber": 1,
    "title": "अप्रत्यक्ष कथन का बुनियादी नियम: 'कि' योजक और सर्वनाम परिवर्तन (Indirect Discourse & Pronoun Shift with कि)",
    "level": "B2",
    "objective": "प्रत्यक्ष कथन (Direct Speech) को योजक 'कि' और वक्ता के अनुसार सर्वनाम/संकेतवाचक पदों (Pronoun & Deictic Shift) का रूपांतरण करके अप्रत्यक्ष कथन (Indirect Speech) में बदलने की क्षमता में निपुण होना।",
    "presentation": {
      "explanation": "हिंदी में किसी के कहे हुए शब्दों को अपने शब्दों में प्रस्तुत करने को **अप्रत्यक्ष कथन (Indirect Speech)** कहते हैं:\n\n1. मुख्य संरचना का सूत्र:\n   - **[वक्ता + ने + कहा/बताया/पूछा] + कि + [रूपांतरित उपवाक्य]**\n   - प्रत्यक्ष: *राम ने कहा, \"मैं कल दिल्ली जाऊँगा।\"*\n   - अप्रत्यक्ष: *राम ने कहा कि वह कल दिल्ली जाएगा।*\n\n2. सर्वनाम और संकेतवाचक परिवर्तन के नियम (Deictic Shifts):\n   - मूल वक्ता का 'मैं/मेरा/मुझे' → **वह/उसका/उसे** में बदल जाता है;\n   - 'हम/हमारा' → **वे/उनका** में बदल जाता है;\n   - निकटतावाची 'यह' प्रायः **'वह'** में परिवर्तित होता है;\n   - आज्ञा व अनुरोध में क्रिया संभावनार्थ में बदल जाती है:\n     - प्रत्यक्ष: *पिताजी ने कहा, \"तुम तुरंत पढ़ो।\"*\n     - अप्रत्यक्ष: *पिताजी ने कहा कि वह तुरंत पढ़े।*",
      "examples": [
        {
          "target": "वरिष्ठ अध्यापक ने कक्षा के सभी नए और पुराने विद्यार्थियों से स्पष्ट कहा कि वे कल ठीक समय पर अपना गृहकार्य पूरा करके कक्षा में लाएँ।",
          "reading": "varishth adhyaapak ne kaksha ke sabhi naye aur puraane vidyaarthiyon se spasht kaha ki ve kal theek samay par apna grihkaary poora karke kaksha mein laayein. [ʋərɪʂʈʰ əd̪ʱjaːpək neː kəkʃaː keː səbʱiː nəjeː ɔːr pʊraːneː ʋɪd̪jaːrt̪ʰɪjõː seː spəʂʈ kəɦaː kɪ ʋeː kəl t̪ʰiːk səməj pər əpnaː ɡrɪɦkaːrjə puːraː kərkeː kəkʃaː mẽː laːẽː] (vuh-REESH-th uhdh-YAH-puhk nay KUHK-shah kay SUH-bhee nuh-YAY owr poo-RAH-nay veed-YAHR-thee-yohn say SPUHSHT KUH-hah kee vay kuhl theek SUH-muy puhr uhp-NAH greeh-KAHR-yuh POO-rah KUHR-kay KUHK-shah mayn LAH-yayn)",
          "translation": "The senior teacher clearly told all new and old students of the class that they should bring their homework completely finished to the class on time tomorrow."
        },
        {
          "target": "रोहन ने अपने माता-पिता को अत्यंत विनम्रता से बताया कि वह उच्च वैज्ञानिक अनुसंधान के लिए विदेश जाने की गंभीर योजना बना रहा है।",
          "reading": "Rohan ne apne maata-pita ko atyant vinamrata se bataaya ki vah uchch vaigyaanik anusandhaan ke liye videsh jaane ki gambheer yojana bana raha hai. [roːɦən neː əpneː maːt̪aː pɪt̪aː koː ət̪jən̪t̪ ʋɪnəmrət̪aː seː bət̪aːjaː kɪ ʋəɦ ʊtʃː ʋɛːɡjaːnɪk ənʊsən̪d̪ʱaːn keː lɪjeː ʋɪd̪eːʃ dʒaːneː kiː ɡəmbiːr joːdʒnaː bənaː rəɦaː hɛː] (ROH-huhn nay uhp-NAY MAH-tah pee-TAH koh uht-YUHNT vee-nuhm-ruh-TAH say buh-TAH-yah kee vuh ootch vyg-YAH-neek uh-noo-suhn-DHAHN kay lee-ay vee-DAYSH JAH-nay kee guhm-BHEER yohj-NAH buh-NAH ruh-HAH hy)",
          "translation": "Rohan informed his parents with utmost modesty that he is making serious plans to go abroad for advanced scientific research."
        },
        {
          "target": "विदेशी यात्री ने रेलवे पूछताछ केंद्र पर शिष्टतापूर्वक पूछा कि आगामी राजधानी सुपरफास्ट एक्सप्रेस गाड़ी किस प्लेटफार्म पर आएगी।",
          "reading": "videshi yaatri ne railway poochhtaachh kendr par shishtataapoorvak poochha ki aagaami Raajdhaani superfast express gaadi kis platform par aayegi. [ʋɪd̪eːʃiː jaːt̪riː neː reːlʋeː puːtʃʰt̪aːtʃʰ keːn̪d̪r pər ʃɪʂʈət̪aːpuːrʋək puːtʃʰaː kɪ aːɡaːmiː raːdʒd̪ʱaːniː sʊpərfaːsʈ eːksprɛs ɡaːɽiː kɪs plɛːʈfɔːrm pər aːjeːɡiː] (vee-DAY-shee YAH-tree nay RAYL-vay poochh-TAHCHH kayn-druh puhr sheesh-tuh-tah-POOR-vuhk POO-chhah kee ah-GAH-mee rahj-DHAH-nee SOO-puhr-fahst ayks-PREHS GAH-dee kees playt-FAHRM puhr ah-YAY-gee)",
          "translation": "The foreign passenger politely inquired at the railway inquiry counter as to which platform the upcoming Rajdhani Superfast Express train would arrive on."
        }
      ],
      "mnemonics": [
        "Direct: उसने कहा \"मैं जाऊँगा\" → Indirect: उसने कहा कि वह जाएगा (कि + 3rd person pronoun)!"
      ],
      "culturalNotes": [
        "भारतीय वार्तालाप में शिष्टता के लिए 'उन्होंने कृपा करके बताया कि...' जैसे आदरसूचक परोक्ष कथनों का प्रयोग किया जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "प्रत्यक्ष कथन «अमित ने कहा, \"मेरी पुस्तक खो गई है।\"» का मानक अप्रत्यक्ष रूपांतरण क्या होगा?",
          "options": [
            "अमित ने कहा कि उसकी पुस्तक खो गई है (Amit ne kaha ki uski pustak kho gayi hai - Amit said that his book has been lost [pronoun shift to 3rd person])",
            "अमित ने कहा कि मेरी पुस्तक खो गई है (सर्वनाम अपरिवर्तित दोष)",
            "अमित ने कहा मैं पुस्तक खो दिया हूँ (अमानक रचना)",
            "अमित कहा पुस्तक उसकी खो गई (परसर्ग लोप दोष)"
          ],
          "answerIndex": 0,
          "explanation": "अप्रत्यक्ष कथन में वक्ता के सर्वनाम 'मेरी' का रूपांतरण तृतीय पुरुष «उसकी» में होना व्याकरण का अनिवार्य नियम है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «डॉक्टर ने रोगी को सलाह दी ___ वह नियमित रूप से दवा ले» में सही योजक भरिए:",
          "options": [
            "कि (Ki - That [indirect speech declarative complementizer])",
            "की (Feminine genitive error)",
            "क्योंकि (Causal mismatch)",
            "इसलिए (Resultative mismatch)"
          ],
          "answerIndex": 0,
          "explanation": "कथन को जोड़ने वाले योजक (that) के रूप में ह्रस्व इ-कार वाला «कि» शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "अप्रत्यक्ष कथन (Indirect Speech) का सर्वथा शुद्ध वाक्य पहचानिए:",
          "options": [
            "मंत्री जी ने अधिकारियों को निर्देश दिया कि वे जनहित के सभी कार्य प्राथमिकता के आधार पर पूर्ण करें। (The minister instructed the officers that they should complete all public welfare works on a priority basis.)",
            "मंत्री जी ने कहा कि तुम सब काम करो।",
            "मंत्री जी ने निर्देश दिया की वे काम करेंगे।",
            "मंत्री जी बोले कि हम काम पूरा कर रहे हैं।"
          ],
          "answerIndex": 0,
          "explanation": "«निर्देश दिया कि वे... पूर्ण करें» में योजक 'कि', सर्वनाम 'वे' और संभावनार्थ क्रिया 'करें' का समन्वय शत-प्रतिशत शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u17-l2": {
    "id": "hi-u17-l2",
    "subject": "hindi",
    "unit": 17,
    "lessonNumber": 2,
    "title": "कारण और परिणाम योजक: 'क्योंकि...इसलिए' एवं 'चूँकि...अतः' (Causal & Resultative Conjunctions)",
    "level": "B2",
    "objective": "कारणसूचक (क्योंकि, चूँकि) और परिणामसूचक (इसलिए, अतः, अतएव, फलस्वरूप) योजकों के सटीक संयोजन द्वारा जटिल तार्किक वाक्यों के निर्माण में निपुण होना।",
    "presentation": {
      "explanation": "हिंदी में कारण और परिणाम को जोड़ने वाले दो मुख्य वाक्य-प्रतिमान हैं:\n\n1. **कारण बाद में (Forward Causal with 'क्योंकि')**:\n   - सूत्र: **[परिणाम उपवाक्य] + क्योंकि + [कारण उपवाक्य]**\n   - *वह विद्यालय नहीं आया क्योंकि वह अस्वस्थ था*;\n   - *हम मैच हार गए क्योंकि हमारे प्रमुख खिलाड़ी चोटिल थे*।\n\n2. **कारण पहले (Pre-positioned Causal with 'चूँकि...इसलिए / अतः')**:\n   - सूत्र: **चूँकि [कारण उपवाक्य], इसलिए / अतः / अतएव [परिणाम उपवाक्य]**\n   - *चूँकि भारी बारिश हो रही थी, इसलिए सभी उड़ानें स्थगित कर दी गईं*;\n   - *चूँकि बजट सीमित है, अतः हमें सोच-समझकर व्यय करना होगा*।\n\n3. **परिणामवाची अव्यय (Resultative Markers)**:\n   - **फलस्वरूप / परिणामस्वरूप (As a result / Consequently)**: *उसने कठिन परिश्रम किया, फलस्वरूप प्रथम श्रेणी में उत्तीर्ण हुआ*।",
      "examples": [
        {
          "target": "चूँकि पर्वतीय क्षेत्र में भारी हिमपात और भूस्खलन हुआ था, इसलिए स्थानीय प्रशासन ने सभी वाहनों का आवागमन तुरंत प्रभाव से रोक दिया।",
          "reading": "choonki parvateey kshetr mein bhaari himpaat aur bhooskhalan hua tha, isliye sthaaneey prashaasan ne sabhi vaahanon ka aavaagaman turant prabhaav se rok diya. [tʃuː̃kɪ pərʋət̪iːj kʃeːt̪r mẽː bʱaːriː ɦɪmpaːt̪ ɔːr bʱuːskʰələn hʊaː t̪ʰaː ɪslɪjeː st̪ʰaːniːj prəʃaːsən neː səbʱiː ʋaːɦnõː kaː aːʋaːɡəmən t̪ʊrən̪t̪ prəbʱaːʋ seː roːk d̪ɪjaː] (CHOON-kee puhr-vuh-TEE-yuh KSHAY-truh mayn BHAH-ree heem-PAHT owr bhoos-KHUH-luhn HOO-ah thah, ees-LEE-ay sthah-NEE-yuh pruh-SHAH-suhn nay SUH-bhee VAH-huh-nohn kah ah-vah-GUH-muhn TOO-ruhnt pruh-BHAHV say rohk DEE-yah)",
          "translation": "Since there had been heavy snowfall and landslides in the mountainous region, therefore the local administration halted the movement of all vehicles with immediate effect."
        },
        {
          "target": "वह आज की अत्यंत महत्वपूर्ण और निर्णायक संगठनात्मक बैठक में उपस्थित नहीं हो सका क्योंकि अचानक उसकी माता जी की तबीयत बहुत बिगड़ गई थी।",
          "reading": "vah aaj ki atyant mahatvapoorna aur nirnaayak sangathanaatmak baithak mein upasthit nahin ho saka kyonki achanak uski maata ji ki tabeeyat bahut bigad gayi thi. [ʋəɦ aːdʒ kiː ət̪jən̪t̪ məɦət̪ʋəpuːrɳə ɔːr nɪrɳaːjək sənɡəʈʰnaːt̪mək bɛːʈʰək mẽː ʊpəst̪ʰɪt̪ nəɦĩː hoː səkaː kjõːkɪ ətʃaːnək ʊskiː maːt̪aː dʒiː kiː t̪əbiːjət̪ bəɦʊt̪ bɪɡəɽ ɡəiː t̪ʰiː] (vuh ahj kee uht-YUHNT muh-huht-vuh-POOR-nuh owr neer-NAH-yuhk suhn-guh-thuh-NAHT-muhk BY-thuhk mayn oo-puhs-THEET nuh-HEEN hoh SUH-kah KYOHN-kee uh-CHAH-nuhk OOS-kee MAH-tah jee kee tuh-BEE-yuht buh-hoot BEE-guhd GUH-yee thee)",
          "translation": "He could not be present in today's extremely important and decisive organizational meeting because suddenly his mother's health deteriorated significantly."
        },
        {
          "target": "वैज्ञानिकों के दल ने दिन-रात निरंतर समर्पित अनुसंधान किया, जिसके फलस्वरूप उन्होंने इस गंभीर संक्रामक रोग का नया प्रभावी टीका विकसित करने में सफलता पाई।",
          "reading": "vaigyaanikon ke dal ne din-raat nirantar samarpit anusandhaan kiya, jiske phalasvaroop unhone is gambheer sankraamak rog ka naya prabhaavi teeka vikasit karne mein safalta paayi. [ʋɛːɡjaːnɪkõː keː d̪əl neː d̪ɪn raːt̪ nɪrən̪t̪ər səmərpɪt̪ ənʊsən̪d̪ʱaːn kɪjaː dʒɪskeː pʰələsʋəruːp ʊnɦõːneː ɪs ɡəmbiːr səŋkraːmək roːɡ kaː nəjaː prəbʱaːʋiː ʈiːkaː ʋɪksɪt̪ kərneː mẽː səfəlt̪aː paːiː] (vyg-YAH-nee-kohn kay duhl nay DEEN-raht nee-RUHN-tuhr suh-muhr-PEET uh-noo-suhn-DHAHN kee-YAH, jees-KAY phuhl-svuh-ROOP oon-HOHN-nay ees guhm-BHEER suhn-KRAH-muhk rohg kah nuh-YAH pruh-bhah-VEE TEE-kah veek-SEET KUHR-nay mayn suh-fuhl-TAH PAH-yee)",
          "translation": "The team of scientists conducted dedicated research day and night continuously, as a result of which they achieved success in developing a new effective vaccine for this serious infectious disease."
        }
      ],
      "mnemonics": [
        "कारण पहले = चूँकि...इसलिए; कारण बाद में = क्योंकि; परिणाम = फलस्वरूप!"
      ],
      "culturalNotes": [
        "तर्कशास्त्र और गंभीर निबंधों में 'चूँकि...अतएव' की शैली लेखक के बौद्धिक संतुलन और तार्किक स्पष्टता को दर्शाती है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "कारणसूचक वाक्य «चूँकि आज अवकाश है, ___ सभी दुकानें बंद हैं» में सही परिणामवाची योजक क्या है?",
          "options": [
            "इसलिए (Isliye - Therefore [correlative resultative to choonki])",
            "क्योंकि (Causal repetition error)",
            "ताकि (Purposive mismatch)",
            "यद्यपि (Concessive mismatch)"
          ],
          "answerIndex": 0,
          "explanation": "'चूँकि' के साथ परिणाम उपवाक्य में नित्यसंबंधी «इसलिए» या 'अतः' आता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «वह समय पर स्टेशन नहीं पहुँच सका ___ रास्ते में भारी जाम लगा था» में सही योजक भरिए:",
          "options": [
            "क्योंकि (Kyonki - Because [causal explanation])",
            "इसलिए (Resultative error)",
            "ताकि (Purposive error)",
            "तथापि (Concessive error)"
          ],
          "answerIndex": 0,
          "explanation": "विलंब का कारण बताने के लिए उपवाक्य के बीच में «क्योंकि» शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "कारण और परिणाम के पूर्णतः शुद्ध समन्वय वाला वाक्य पहचानिए:",
          "options": [
            "चूँकि उसने परीक्षा के लिए निष्ठापूर्वक तैयारी की थी, इसलिए उसे उत्कृष्ट सफलता प्राप्त हुई। (Since he had prepared faithfully for the exam, therefore he achieved excellent success.)",
            "चूँकि उसने तैयारी की क्योंकि सफलता मिली।",
            "उसने तैयारी की ताकि सफलता मिली थी।",
            "चूँकि तैयारी किया इसलिए सफल हो गया था वह।"
          ],
          "answerIndex": 0,
          "explanation": "«चूँकि... इसलिए» का कारण-परिणाम संबंध व्याकरणिक दृष्टि से सर्वथा त्रुटिहीन है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u17-l3": {
    "id": "hi-u17-l3",
    "subject": "hindi",
    "unit": 17,
    "lessonNumber": 3,
    "title": "उद्देश्य और परिणाम योजक: 'ताकि', 'जिससे कि', 'इतना...कि' (Purposive & Resultative Clauses)",
    "level": "B2",
    "objective": "उद्देश्यसूचक (ताकि, जिससे कि + संभावनार्थ काल) और परिणामसूचक तीव्रता (इतना/इतनी/इतने...कि) के वाक्य-विन्यास में पूर्ण दक्षता प्राप्त करना।",
    "presentation": {
      "explanation": "उद्देश्य (Purpose) और परिणाम की तीव्रता (Degree of Result) व्यक्त करने वाले योजक:\n\n1. **उद्देश्यसूचक योजक (ताकि / जिससे कि — 'So that / In order that')**:\n   - सूत्र: **[मुख्य उपवाक्य] + ताकि / जिससे कि + [संभावनार्थ उपवाक्य]**\n   - *कठिन परिश्रम करो ताकि तुम सफल हो सको*;\n   - *खिड़की बंद करो जिससे कि धूल अंदर न आए*;\n   - (नियम: 'ताकि' के बाद क्रिया प्रायः संभावनार्थ काल में होती है)।\n\n2. **परिणामसूचक तीव्रता (इतना / इतनी / इतने...कि — 'So...that')**:\n   - सूत्र: **[इतना/इतनी विशेषण] + कि + [निश्चयात्मक परिणाम उपवाक्य]**\n   - *वह इतना कमज़ोर था कि खड़ा भी नहीं हो सका*;\n   - *चाय इतनी गर्म थी कि पी नहीं जा सकी*;\n   - *इतने सारे लोग आए कि सभागार छोटा पड़ गया*।",
      "examples": [
        {
          "target": "चिकित्सक ने मरीज़ को पौष्टिक और संतुलित आहार लेने का परामर्श दिया ताकि उसके शरीर की रोग-प्रतिरोधक क्षमता तीव्र गति से बढ़ सके।",
          "reading": "chikitsak ne mareez ko paushtik aur santulit aahaar lene ka paraamarsh diya taaki uske shareer ki rog-pratirodhak kshamta teevr gati se badh sake. [tʃɪkɪt̪sək neː məriːz koː pɔːʂʈɪk ɔːr sən̪t̪ʊlɪt̪ aːɦaːr leːneː kaː pəraːmərʃ d̪ɪjaː t̪aːkɪ ʊskeː ʃəriːr kiː roːɡ prət̪ɪroːd̪ʱək kʃəmt̪aː t̪iːʋr ɡət̪ɪ seː bəɽʱ səkeː] (chee-KEET-suhk nay muh-REEZ koh powsh-TEEK owr suhn-too-LEET ah-HAHR LAY-nay kah puh-RAH-muhrsh DEE-yah TAH-kee OOS-kay shuh-REER kee rohg-pruh-tee-roh-DHUHK kshuhm-TAH TEEV-ruh GUH-tee say buhdh SUH-kay)",
          "translation": "The doctor advised the patient to take nutritious and balanced food so that his body's immune capacity could increase rapidly."
        },
        {
          "target": "विशाल जनसभा में इतनी भारी और अप्रत्याशित भीड़ जमा हो गई थी कि सुरक्षाकर्मियों और प्रशासन के लिए व्यवस्था संभालना अत्यंत कठिन हो गया।",
          "reading": "vishaal jansabha mein itni bhaari aur apratyaashit bheed jama ho gayi thi ki surakshaakarmiyon aur prashaasan ke liye vyavastha sambhaalna atyant kathin ho gaya. [ʋɪʃaːl dʒənsəbʱaː mẽː ɪt̪niː bʱaːriː ɔːr əprət̪jaːʃɪt̪ bʱiːɽ dʒəmaː hoː ɡəiː t̪ʰiː kɪ sʊrəkʃaːkərmɪjõː ɔːr prəʃaːsən keː lɪjeː ʋjəʋəst̪ʰaː səmbʱaːlnaː ət̪jən̪t̪ kəʈʰɪn hoː ɡəjaː] (vee-SHAHL juhn-SUH-bhah mayn EET-nee BHAH-ree owr uh-pruht-yah-SHEET BHEED JUH-mah hoh GUH-yee thee kee soo-ruhk-shah-KUHR-mee-yohn owr pruh-SHAH-suhn kay lee-ay vyuh-VUHS-thah suhm-BHAHL-nah uht-YUHNT KUH-theen hoh GUH-yah)",
          "translation": "Such a massive and unanticipated crowd had gathered in the large public rally that it became extremely difficult for security personnel and administration to manage the situation."
        },
        {
          "target": "कृपया सभी खिड़कियाँ और दरवाज़े कसकर बंद कर दीजिए जिससे कि बाहर का भारी वायु प्रदूषण और उड़ती हुई धूल कमरे के अंदर न आ सके।",
          "reading": "kripaya sabhi khidkiyaan aur darvaaze kaskar band kar deejiye jisse ki baahar ka bhaari vaayu pradooshan aur udti hui dhool kamre ke andar na aa sake. [krɪpəjaː səbʱiː kʰɪɽkɪjaː̃ ɔːr d̪ərʋaːzeː kəskər bən̪d̪ kər d̪iːdʒɪjeː dʒɪsseː kɪ baːɦər kaː bʱaːriː ʋaːjʊ prəd̪uːʂəɳ ɔːr ʊɽt̪iː hʊiː d̪ʱuːl kəmreː keː ən̪d̪ər nə aː səkeː] (kree-puh-YAH SUH-bhee kheed-kee-YAHN owr duhr-VAH-zay KUHS-kuhr buhnd kuhr DEE-jee-yay JEES-say kee BAH-huhr kah BHAH-ree VAH-yoo pruh-doo-SHUHN owr OOD-tee HOO-ee DHOOL KUHM-ray kay UHN-duhr nuh ah SUH-kay)",
          "translation": "Please close all windows and doors tightly so that heavy outdoor air pollution and blowing dust may not enter inside the room."
        }
      ],
      "mnemonics": [
        "उद्देश्य = ताकि / जिससे कि (+ Subjunctive); परिणाम = इतना...कि (+ Fact)!"
      ],
      "culturalNotes": [
        "सार्वजनिक भाषणों में 'हम यह कार्य कर रहे हैं ताकि आने वाली पीढ़ी को गौरव मिले' उद्देश्यपरक योजकों का सबसे प्रेरक उपयोग है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "उद्देश्य (Purpose: so that you may succeed) व्यक्त करने वाला शुद्ध वाक्य कौन-सा है?",
          "options": [
            "नियमित अभ्यास करो ताकि तुम परीक्षा में सफल हो सको (Niyamit abhyaas karo taaki tum pareeksha mein safal ho sako - Practice regularly so that you may succeed)",
            "नियमित अभ्यास करो क्योंकि सफल हो गए (कारण विपर्यय)",
            "नियमित अभ्यास करो इसलिए सफल हुए (परिणाम दोष)",
            "नियमित अभ्यास करो तथापि सफल हो (वैषम्य दोष)"
          ],
          "answerIndex": 0,
          "explanation": "उद्देश्य दर्शाने के लिए «ताकि... सफल हो सको» का प्रयोग व्याकरणिक दृष्टि से शुद्ध है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "परिणाम की तीव्रता «वह इतना थक गया था ___ तुरंत सो गया» में सही योजक क्या है?",
          "options": [
            "कि (Ki - That [resultative connector with itna])",
            "की (Feminine genitive typo)",
            "ताकि (Purposive error)",
            "क्योंकि (Causal error)"
          ],
          "answerIndex": 0,
          "explanation": "'इतना' के साथ परिणाम उपवाक्य को जोड़ने वाला योजक «कि» है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "उद्देश्य (ताकि) और परिणाम की तीव्रता (इतना...कि) का शुद्ध प्रयोग वाला वाक्य चुनिए:",
          "options": [
            "वक्ता ने इतनी मधुर वाणी में समझाया कि सभी श्रोता मंत्रमुग्ध हो गए और शांति बनाए रखी ताकि कोई व्यवधान न हो। (The speaker explained in so sweet a voice that all listeners were enchanted and maintained silence so that there was no disruption.)",
            "वक्ता ने ताकि समझाया कि श्रोता इतने हो गए।",
            "वक्ता इतना समझाया क्योंकि व्यवधान न हो।",
            "वक्ता ने समझाया इसलिए ताकि शांति हो गई थी।"
          ],
          "answerIndex": 0,
          "explanation": "«इतनी मधुर वाणी में... कि सभी मंत्रमुग्ध हो गए» (तीव्रता) और «ताकि कोई व्यवधान न हो» (उद्देश्य) दोनों का समन्वय सर्वथा मानक है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u17-l4": {
    "id": "hi-u17-l4",
    "subject": "hindi",
    "unit": 17,
    "lessonNumber": 4,
    "title": "वैषम्य और रियायत योजक: 'यद्यपि...तथापि', 'हालाँकि...फिर भी' (Concessive & Adversative Conjunctions)",
    "level": "B2",
    "objective": "विरोधाभास, वैषम्य (Adversative) और रियायत (Concession) व्यक्त करने वाले उच्च स्तरीय योजकों — यद्यपि...तथापि, हालाँकि...फिर भी, किंतु, परंतु, लेकिन, बल्कि, अपितु — के शुद्ध प्रयोग में निपुण होना।",
    "presentation": {
      "explanation": "परस्पर विरोधी या अप्रत्याशित विचारों को जोड़ने वाले योजक:\n\n1. **रियायत / छूट योजक (Concessive: 'यद्यपि...तथापि' / 'हालाँकि...फिर भी')**:\n   - तत्सम/साहित्यिक: **यद्यपि...तथापि** (*यद्यपि वह निर्धन है, तथापि अत्यंत स्वाभिमानी है*);\n   - मानक बोलचाल: **हालाँकि...फिर भी / तो भी** (*हालाँकि बारिश तेज़ थी, फिर भी हम पहुँचे*)।\n\n2. **विरोधवाची योजक (Adversative: किंतु, परंतु, लेकिन)**:\n   - *उसने प्रयास बहुत किया, किंतु सफलता नहीं मिली*।\n\n3. **संशोधनवाची / प्रतिषेधात्मक योजक (Corrective: 'बल्कि' / 'अपितु' — 'Not only/not X, but rather Y')**:\n   - *वह केवल गायक ही नहीं है, बल्कि कुशल संगीतकार भी है*;\n   - *हमें क्रोध नहीं करना चाहिए, बल्कि समस्या का समाधान खोजना चाहिए*।",
      "examples": [
        {
          "target": "यद्यपि पर्वतारोहण का मार्ग अत्यंत दुर्गम, पथरीला और बीहड़ था, तथापि सभी साहसी पर्वतारोहियों ने अदम्य उत्साह से सर्वोच्च शिखर पर तिरंगा फहराया।",
          "reading": "yadyapi parvataarohan ka maarg atyant durgam, pathreela aur beehad tha, tathaapi sabhi saahasi parvataarohiyon ne adamya utsaah se sarvochch shikhar par tiranga phahraaya. [jəd̪jəpɪ pərʋət̪aːroːɦəɳ kaː maːrɡ ət̪jən̪t̪ d̪ʊrɡəm pət̪ʰriːlaː ɔːr biːɦəɽ t̪ʰaː t̪ət̪ʰaːpɪ səbʱiː saːɦsiː pərʋət̪aːroːɦɪjõː neː əd̪əmjə ʊt̪saːɦ seː sərʋoːtʃː ʃɪkʰər pər t̪ɪrənɡaː pʰɛɦraːjaː] (yud-YUH-pee puhr-vuh-tah-ROH-huhn kah MAHRG uht-YUHNT door-GUHM, puht-REE-lah owr BEE-huhd thah, tuh-THAH-pee SUH-bhee sah-huh-SEE puhr-vuh-tah-roh-HEE-yohn nay uh-DUHM-yuh oot-SAH say suhr-VOHTCH SHEE-khuhr puhr tee-RUHN-gah fuh-h-RAH-yah)",
          "translation": "Although the mountaineering route was extremely difficult, rocky, and rugged, nevertheless all brave mountaineers unfurled the tricolor on the highest summit with indomitable enthusiasm."
        },
        {
          "target": "हालाँकि इस प्रतिष्ठित राष्ट्रीय प्रतियोगिता में देश-विदेश के अत्यंत प्रतिभाशाली प्रतिभागी आए थे, फिर भी हमारे स्थानीय ग्रामीण विद्यालय के छात्र ने प्रथम पुरस्कार जीता।",
          "reading": "haalaanki is pratishthit raashtreey pratiyogita mein desh-videsh ke atyant pratibhaashaali pratibhaagi aaye the, phir bhi hamaare sthaaneey graameen vidyaalay ke chhaatr ne pratham puraskaar jeeta. [ɦaːlaː̃kɪ ɪs prət̪ɪʂʈʰɪt̪ raːʂʈriːj prət̪ɪjoːɡɪt̪aː mẽː d̪eːʃ ʋɪd̪eːʃ keː ət̪jən̪t̪ prət̪ɪbʱaːʃaːliː prət̪ɪbʱaːɡiː aːjeː t̪ʰeː pʰɪr bʱiː ɦəmaːreː st̪ʰaːniːj ɡraːmiːɳ ʋɪd̪jaːləj keː tʃʰaːt̪r neː prət̪ʰəm pʊrəskaːr dʒiːt̪aː] (hah-LAHN-kee ees pruh-teesh-THEET rahsh-TREE-yuh pruh-tee-yoh-GEE-tah mayn daysh-vee-DAYSH kay uht-YUHNT pruh-tee-bhah-SHAH-lee pruh-tee-bhah-GEE AH-yay thay, feer bhee huh-MAH-ray sthah-NEE-yuh grah-MEEN veed-YAH-luy kay CHHAH-truh nay PRUH-thuhm poor-uhs-KAHR JEE-tah)",
          "translation": "Although extremely talented participants from across the country and abroad had come to this prestigious national competition, still the student of our local rural school won the first prize."
        },
        {
          "target": "सच्चा निष्ठावान देशप्रेमी केवल खोखले भाषण देने में विश्वास नहीं रखता, बल्कि देश के सर्वांगीण उत्थान के लिए ठोस और रचनात्मक कार्य करता है।",
          "reading": "sachcha nishthaavaan deshpremi keval khokhale bhaashan dene mein vishvaas nahin rakhta, balki desh ke sarvaangeen utthaan ke liye thos aur rachnaatmak kaary karta hai. [sətʃːaː nɪʂʈʰaːʋaːn d̪eːʃpreːmiː keːʋəl kʰoːkʰleː bʱaːʂəɳ d̪eːneː mẽː ʋɪʃʋaːs nəɦĩː rəkʰt̪aː bəlkiː d̪eːʃ keː sərʋaːŋɡiːɳ ʊt̪ːʰaːn keː lɪjeː t̪ʰoːs ɔːr rətʃnaːt̪mək kaːrjə kərt̪aː hɛː] (SUHTCH-chah neesh-thah-VAHN daysh-PRAY-mee KAY-vuhl KHOH-khuh-lay bhah-SHUHN DAY-nay mayn veesh-VAHS nuh-HEEN RUHKH-tah, BUHL-kee daysh kay suhr-vahn-GEEN oot-THAHN kay lee-ay thohs owr ruhch-nah-TMUHK KAHR-yuh KUHR-tah hy)",
          "translation": "A true dedicated patriot does not believe merely in giving hollow speeches, but rather does solid and constructive work for the all-round upliftment of the country."
        }
      ],
      "mnemonics": [
        "रियायत = यद्यपि...तथापि / हालाँकि...फिर भी; संशोधन = नहीं...बल्कि (Not X, but Y)!"
      ],
      "culturalNotes": [
        "गांधीवादी दर्शन और स्वतंत्रता संग्राम के साहित्यों में 'यद्यपि विपत्तियाँ अपार थीं, तथापि हम अडिग रहे' जैसी भाषा आत्मबल और नैतिक शक्ति का उद्घोष रही है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "साहित्यिक रियायत योजक «यद्यपि वह बीमार था, ___ उसने परीक्षा दी» में सही नित्यसंबंधी शब्द क्या होगा?",
          "options": [
            "तथापि (Tathaapi - Nevertheless / Even so [correlative to yadyapi])",
            "क्योंकि (Causal error)",
            "इसलिए (Resultative error)",
            "ताकि (Purposive error)"
          ],
          "answerIndex": 0,
          "explanation": "'यद्यपि' (although) के साथ नित्यसंबंधी के रूप में तत्सम अव्यय «तथापि» आता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "संशोधनवाची वाक्य «वह मूर्ख नहीं है, ___ अत्यंत चतुर है» में सही योजक भरिए:",
          "options": [
            "बल्कि (Balki - But rather / On the contrary)",
            "क्योंकि (Causal error)",
            "इसलिए (Resultative error)",
            "यद्यपि (Concessive error)"
          ],
          "answerIndex": 0,
          "explanation": "पूर्व कथन का खंडन कर नवीन तथ्य स्थापित करने हेतु «बल्कि» (but rather) शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "वैषम्य और रियायत योजकों (यद्यपि...तथापि एवं बल्कि) का शुद्ध प्रयोग वाला वाक्य पहचानिए:",
          "options": [
            "यद्यपि परिस्थितियाँ अत्यंत प्रतिकूल थीं, तथापि उसने धैर्य नहीं खोया, बल्कि दुगुने उत्साह से कार्य में जुट गया। (Although circumstances were extremely adverse, nevertheless he did not lose patience, but rather immersed in work with redoubled zeal.)",
            "यद्यपि परिस्थितियाँ प्रतिकूल थीं इसलिए धैर्य खो दिया।",
            "हालाँकि परिस्थितियाँ थीं ताकि उत्साह बढ़ गया।",
            "परिस्थितियाँ प्रतिकूल थीं तथापि क्योंकि उसने काम किया।"
          ],
          "answerIndex": 0,
          "explanation": "«यद्यपि... तथापि» (रियायत) और «बल्कि» (संशोधन) का संश्लिष्ट प्रयोग व्याकरणिक दृष्टि से सर्वथा आदर्श है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u17-l5": {
    "id": "hi-u17-l5",
    "subject": "hindi",
    "unit": 17,
    "lessonNumber": 5,
    "title": "जटिल मिश्रित वाक्यों का समेकन व वाक्य विश्लेषण (Synthesis of Complex Sentence Connectors)",
    "level": "B2",
    "objective": "हिंदी के सभी पाँचों योजक वर्गों (कथन, कारण, उद्देश्य, परिणाम, वैषम्य) का उच्च स्तरीय गद्य अनुच्छेदों में समेकन तथा जटिल वाक्यों के पद-विश्लेषण (Syntactic Analysis) में पूर्ण अधिकार प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी योजक व्यवस्था (Conjunction System) का संपूर्ण पंचवर्गीय संश्लेषण:\n\n1. **पाँचों प्रमुख योजक वर्ग**:\n   - **1. कथन योजक (Declarative)**: *कि* (उसने कहा कि...);\n   - **2. कारण योजक (Causal)**: *क्योंकि*, *चूँकि...इसलिए/अतः*;\n   - **3. उद्देश्य योजक (Purposive)**: *ताकि*, *जिससे कि* (+ Subjunctive);\n   - **4. परिणाम योजक (Resultative)**: *इतना...कि*, *फलस्वरूप*;\n   - **5. वैषम्य/रियायत योजक (Concessive/Adversative)**: *यद्यपि...तथापि*, *हालाँकि...फिर भी*, *किंतु/परंतु*, *बल्कि/अपितु*।\n\n2. **मिश्रित व संयुक्त वाक्यों का विश्लेषण (Syntax Parsing)**:\n   - एक ही अनुच्छेद में विभिन्न उपवाक्यों की तार्किक शृंखला:\n     *वैज्ञानिकों ने बताया कि यद्यपि चुनौती कठिन थी, तथापि हमने निरंतर प्रयास किया ताकि देश आत्मनिर्भर बने।*",
      "examples": [
        {
          "target": "प्रधान वैज्ञानिक ने आधिकारिक संवाददाता सम्मेलन में घोषणा की कि यद्यपि यह अंतरिक्ष परीक्षण अत्यंत चुनौतीपूर्ण था, तथापि उनकी टीम ने पूरी निष्ठा से इसे सफल बनाया ताकि देश विज्ञान में आत्मनिर्भर हो सके।",
          "reading": "pradhaan vaigyaanik ne aadhikaarik samvaadaata sammelan mein ghoshna ki ki yadyapi yah antariksh pareekshan atyant chunautipoorna tha, tathaapi unki team ne poori nishtha se ise safal banaaya taaki desh vigyaan mein aatmanirbhar ho sake. [prəd̪ʱaːn ʋɛːɡjaːnɪk neː aːd̪ʱɪkaːrɪk səmʋaːd̪aːt̪aː səmːeːlən mẽː ɡʱoːʂɳaː kiː kɪ jəd̪jəpɪ jəɦ ən̪t̪rɪkʃ pəriːkʃəɳ ət̪jən̪t̪ tʃʊnɔːt̪iːpuːrɳə t̪ʰaː t̪ət̪ʰaːpɪ ʊnkiː ʈiːm neː puːriː nɪʂʈʰaː seː ɪseː səfəl bənaːjaː t̪aːkɪ d̪eːʃ ʋɪɡjaːn mẽː aːt̪mənɪrbʱər hoː səkeː] (pruh-DHAHN vyg-YAH-neek nay ah-dhee-KAH-reek suhm-vah-DAH-tah suhm-MAY-luhn mayn GHOHSH-nah kee kee yud-YUH-pee yuh uhn-tuh-REEKSH puh-REEK-shuhn uht-YUHNT choo-now-tee-POOR-nuh thah, tuh-THAH-pee OON-kee teem nay POO-ree NEESH-thah say ee-SAY SUH-fuhl buh-NAH-yah TAH-kee daysh veeg-YAHN mayn aht-muh-neer-BHUHR hoh SUH-kay)",
          "translation": "The chief scientist announced in the official press conference that although this space test was extremely challenging, nevertheless his team made it successful with total dedication so that the nation could become self-reliant in science."
        },
        {
          "target": "चूँकि वार्षिक परीक्षा की तिथियाँ बहुत निकट आ गई थीं, इसलिए सभी गंभीर विद्यार्थियों ने प्रतिदिन कई घंटे अतिरिक्त अध्ययन किया जिससे कि वे परीक्षा में उत्कृष्ट अंक प्राप्त कर सकें।",
          "reading": "choonki vaarshik pareeksha ki tithiyaan bahut nikat aa gayi theen, isliye sabhi gambheer vidyaarthiyon ne pratidin kayi ghante atirikt adhyayan kiya jisse ki ve pareeksha mein utkrisht ank praapt kar sakein. [tʃuː̃kɪ ʋaːrʂɪk pəriːkʃaː kiː t̪ɪt̪ʰɪjaː̃ bəɦʊt̪ nɪkəʈ aː ɡəiː t̪ʰĩː ɪslɪjeː səbʱiː ɡəmbiːr ʋɪd̪jaːrt̪ʰɪjõː neː prət̪ɪd̪ɪn kəiː ɡʱəɳʈeː ət̪ɪrɪkt̪ əd̪ʱjəjən kɪjaː dʒɪsseː kɪ ʋeː pəriːkʃaː mẽː ʊt̪krɪʂʈ əŋk praːpt̪ kər səkẽː] (CHOON-kee VAHR-sheek puh-REEK-shah kee tee-THEE-yahn buh-hoot NEE-kuht ah GUH-yee theen, ees-LEE-ay SUH-bhee guhm-BHEER veed-YAHR-thee-yohn nay pruh-tee-DEEN kuh-EE GHUHN-tay uh-tee-REEKT uhdh-YUH-yuhn kee-YAH JEES-say kee vay puh-REEK-shah mayn oot-KREESH-th uhnk PRAHPT kuhr suh-KAYN)",
          "translation": "Since the dates of the annual examination had come very close, therefore all serious students studied several hours extra each day so that they could obtain excellent marks in the examination."
        },
        {
          "target": "उस महान और त्यागी समाज सुधारक ने सदैव यह संदेश दिया कि सच्चा धर्म केवल बाहरी आडंबरों में नहीं है, बल्कि समाज के अंतिम पीड़ित व्यक्ति की निःस्वार्थ सेवा करने में निहित है।",
          "reading": "us mahaan aur tyaagi samaaj sudhaarak ne sadaiv yah sandesh diya ki sachcha dharm keval baahari aadambaron mein nahin hai, balki samaaj ke antim peedit vyakti ki nihsvaarth seva karne mein nihit hai. [ʊs məɦaːn ɔːr t̪jaːɡiː səmaːdʒ sʊd̪ʱaːrək neː səd̪ɛːʋ jəɦ sən̪d̪eːʃ d̪ɪjaː kɪ sətʃːaː d̪ʱərm keːʋəl baːɦriː aːɖəmbərõː mẽː nəɦĩː hɛː bəlkiː səmaːdʒ keː ən̪t̪ɪm piːɽɪt̪ ʋjəkt̪ɪ kiː nɪɦsʋaːrt̪ʰ seːʋaː kərneː mẽː nɪɦɪt̪ hɛː] (oos muh-HAHN owr tyah-GEE suh-MAHJ soo-DHAH-ruhk nay suh-DYV yuh suhn-DAYSH DEE-yah kee SUHTCH-chah DHUHRM KAY-vuhl bah-huh-REE ah-duhm-buh-ROHN mayn nuh-HEEN hy, BUHL-kee suh-MAHJ kay UHN-teem PEE-deet VYUHNK-tee kee neeh-SVAHRTH SAY-vah KUHR-nay mayn nee-HEET hy)",
          "translation": "That great and selfless social reformer always gave the message that true religion does not lie merely in external pretenses, but rather is inherent in selflessly serving the last afflicted person of society."
        }
      ],
      "mnemonics": [
        "कि (कथन) + चूँकि...इसलिए (कारण) + ताकि (उद्देश्य) + इतना...कि (परिणाम) + यद्यपि...तथापि (वैषम्य)! वाक्य रचना का पंचतत्व!"
      ],
      "culturalNotes": [
        "समकालीन हिंदी के उत्कृष्ट संपादकीय (Editorials) और साहित्यिक आलोचनाओं में इन पंचवर्गीय योजकों का संश्लिष्ट प्रयोग शैलीगत परिपक्वता का सर्वोच्च प्रमाण माना जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "योजकों के संश्लिष्ट संयोजन वाला व्याकरणिक रूप से आदर्श वाक्य चुनिए:",
          "options": [
            "उसने बताया कि यद्यपि कार्य कठिन था, तथापि उसने पूरा किया ताकि सभी को लाभ मिले (He told that although work was tough, still he completed it so that all may benefit)",
            "उसने बताया क्योंकि कार्य कठिन था तथापि ताकि पूरा हुआ (अव्यवस्थित योजक दोष)",
            "उसने कहा इसलिए यद्यपि कार्य था ताकि पूरा हुआ (असंगत संयोजन)",
            "उसने बताया कि कार्य कठिन था क्योंकि पूरा किया (तार्किक विपर्यय)"
          ],
          "answerIndex": 0,
          "explanation": "«कि» (कथन), «यद्यपि... तथापि» (रियायत), और «ताकि» (उद्देश्य) का संयोजन वाक्य को सुगठित और प्रामाणिक बनाता है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «चूँकि वह ज्ञानी है, ___ अहंकारी नहीं ___ अत्यंत विनम्र है» में सही योजक युग्म भरिए:",
          "options": [
            "इसलिए...बल्कि (Isliye...balki - Therefore...but rather)",
            "क्योंकि...ताकि (Mismatch)",
            "यद्यपि...तथापि (Double concessive clash)",
            "कि...की (Punctuation mismatch)"
          ],
          "answerIndex": 0,
          "explanation": "कारण-परिणाम हेतु «इसलिए» और संशोधन/विरोधाभास हेतु «बल्कि» का युग्म शत-प्रतिशत शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "पाँचों योजक वर्गों का समग्र रूप से शुद्ध व तार्किक वाक्य पहचानिए:",
          "options": [
            "शिक्षक ने समझाया कि चूँकि समय अमूल्य है, इसलिए हमें व्यर्थ समय नहीं गँवाना चाहिए, बल्कि निरंतर परिश्रम करना चाहिए ताकि भविष्य उज्ज्वल हो। (The teacher explained that since time is invaluable, therefore we should not waste time, but rather work hard continuously so that future may be bright.)",
            "शिक्षक ने समझाया की समय अमूल्य है क्योंकि व्यर्थ गँवाते हैं ताकि भविष्य हो।",
            "शिक्षक ने कहा इसलिए समय अमूल्य है यद्यपि परिश्रम करें।",
            "समय अमूल्य है ताकि शिक्षक ने समझाया इसलिए भविष्य हो गया था।"
          ],
          "answerIndex": 0,
          "explanation": "«कि» (कथन) + «चूँकि... इसलिए» (कारण) + «बल्कि» (संशोधन) + «ताकि» (उद्देश्य) का यह संश्लेषण हिंदी वाक्य रचना का शिखर मानक है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u18-l1": {
    "id": "hi-u18-l1",
    "subject": "hindi",
    "unit": 18,
    "lessonNumber": 1,
    "title": "वास्तविक व भविष्योन्मुख शर्त: अगर/यदि + सामान्य भविष्यत्/वर्तमान (Open & Future Conditionals)",
    "level": "B2",
    "objective": "वास्तविक और भविष्योन्मुख शर्तों (Real & Open Future Conditionals) के निर्माण — 'अगर/यदि + [वर्तमान/भविष्यत् काल] + तो + [भविष्यत्/आदेश काल]' — में पूर्ण व्याकरणिक दक्षता प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में वास्तविक और भविष्योन्मुख शर्तों (Open / Real Conditionals) का निर्माण दो मुख्य रूपों में होता है:\n\n1. **भविष्यत् काल शर्त (Future Conditional: If X happens, Y will happen)**:\n   - सूत्र: **अगर / यदि + [भविष्यत् क्रिया] + तो + [भविष्यत् क्रिया]**\n   - *अगर तुम परिश्रम करोगे, तो अवश्य सफल होगे*;\n   - *यदि कल वर्षा होगी, तो हम घर पर ही रहेंगे*।\n\n2. **वर्तमान काल शर्त (Present Condition with Future/Imperative Result)**:\n   - सूत्र: **अगर / यदि + [सामान्य वर्तमान] + तो + [भविष्यत् / आज्ञा]**\n   - *अगर तुम्हें कोई समस्या है, तो मुझे बताओ*;\n   - *यदि वह आता है, तो हम तुरंत चलेंगे*।\n\n3. **योजक युग्म नियम (Correlative Rule)**:\n   - शर्त उपवाक्य 'अगर' अथवा 'यदि' से शुरू होता है और परिणाम उपवाक्य सदैव **'तो'** से आरंभ होता है ('तब' का प्रयोग अमानक है)।",
      "examples": [
        {
          "target": "यदि आप इस आवश्यक आधिकारिक दस्तावेज पर अपने हस्ताक्षर कर देंगे, तो आपका नया बैंक खाता आज ही तुरंत खोल दिया जाएगा।",
          "reading": "yadi aap is aavashyak aadhikaarik dastaavez par apne hastaakshar kar denge, to aapka naya bank khaata aaj hi turant khol diya jaayega. [jəd̪ɪ aːp ɪs aːʋəʃjək aːd̪ʱɪkaːrɪk d̪əst̪aːʋeːz pər əpneː ɦəst̪aːkʃər kər d̪eːŋɡeː t̪oː aːpkaː nəjaː bɛːŋk kʰaːt̪aː aːdʒ ɦiː t̪ʊrən̪t̪ kʰoːl d̪ɪjaː dʒaːjeːɡaː] (yud-DEE ahp ees ah-vush-YAHK ah-dhee-KAH-reek duhs-tah-VAYZ puhr uhp-NAY huhs-TAHK-shuhr kuhr DAYN-gay, toh AHP-kah nuh-YAH bynk KHAH-tah ahj hee TOO-ruhnt khohl DEE-yah jah-AY-gah)",
          "translation": "If you put your signature on this essential official document, your new bank account will be opened immediately today itself."
        },
        {
          "target": "अगर कल सुबह मौसम बिल्कुल साफ और सुहावना रहा, तो हम सभी सहपाठी मिलकर शहर के ऐतिहासिक लाल किले और संग्रहालय का विस्तृत भ्रमण करेंगे।",
          "reading": "agar kal subah mausam bilkul saaf aur suhaavna raha, to hum sabhi sahpaathi milkar shahar ke aitihasik Laal Qile aur sangraahaalay ka vistrit bhraman karenge. [əɡər kəl sʊbəɦ mɔːsəm bɪlkʊl saːf ɔːr sʊɦaːʋnaː rəɦaː t̪oː ɦəm səbʱiː səɦpaːʈʰiː mɪlkər ʃəɦər keː ɛːt̪ɪhaːsɪk laːl qɪleː ɔːr sənɡraːɦaːləj kaː ʋɪst̪rɪt̪ bʱrəməɳ kərẽːɡeː] (uh-GUHR kuhl SOO-buh mow-SUHM beel-KOOL sahf owr soo-HAHV-nah ruh-HAH, toh huhm SUH-bhee suh-PAH-thee MEEL-kuhr SHUH-huhr kay ay-tee-HAH-seek lahl KEE-lay owr suhn-grah-HAH-luy kah vees-TREE-th bhruh-MUHN KUH-rayn-gay)",
          "translation": "If tomorrow morning the weather remains completely clear and pleasant, all of us classmates together will make an extensive tour of the city's historic Red Fort and museum."
        },
        {
          "target": "यदि आपको इस अत्यंत जटिल वैज्ञानिक सिद्धांत को समझने में कोई भी संशय या कठिनाई हो, तो आप बिना किसी संकोच के तुरंत प्रश्न पूछ सकते हैं।",
          "reading": "yadi aapko is atyant jatil vaigyaanik siddhaant ko samajhne mein koi bhi sanshay ya kathinaayi ho, to aap bina kisi sankoch ke turant prashn poochh sakte hain. [jəd̪ɪ aːpkoː ɪs ət̪jən̪t̪ dʒəʈɪl ʋɛːɡjaːnɪk sɪd̪ːʱaːn̪t̪ koː səmədʒʱneː mẽː koːiː bʱiː sənʃəj jaː kəʈʰɪnaːiː hoː t̪oː aːp bɪnaː kɪsiː sənkoːtʃ keː t̪ʊrən̪t̪ prəʃn puːtʃʰ səkteː hɛ̃ː] (yud-DEE AHP-koh ees uht-YUHNT JUH-teel vyg-YAH-neek seedh-DHAHNT koh suh-MUHJ-nay mayn KOH-ee bhee SUHN-shuy yah kuh-thee-NAH-ee hoh, toh ahp BEE-nah kee-SEE suhn-KOHCH kay TOO-ruhnt pruhshn POOCHH SUHK-tay hy-n)",
          "translation": "If you have any doubt or difficulty in understanding this extremely complex scientific principle, you can immediately ask questions without any hesitation."
        }
      ],
      "mnemonics": [
        "शर्त = अगर / यदि... परिणाम = तो (अगर पढ़ोगे तो पास होगे)!"
      ],
      "culturalNotes": [
        "हिंदी में भविष्य की प्रतिज्ञाओं में 'ईश्वर ने चाहा तो...' (God willing) या 'यदि सब कुशल रहा तो...' जोड़ना विनम्रता और लोक-आस्था की परंपरा है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "भविष्योन्मुख शर्त (Future Conditional: If you call me, I will come) का मानक वाक्य कौन-सा है?",
          "options": [
            "अगर तुम मुझे बुलाओगे, तो मैं अवश्य आऊँगा (Agar tum mujhe bulaaoge, to main avashya aaoonga - If you call me, I will surely come)",
            "अगर तुम मुझे बुलाओगे तब मैं आऊँगा ('तब' का अमानक प्रयोग)",
            "यदि तुम बुलाए तो मैं आया (भूतकाल असंगति)",
            "बुलाओगे अगर तो मैं आता था (अव्यवस्थित पदक्रम)"
          ],
          "answerIndex": 0,
          "explanation": "शर्त में «अगर... तो» का भविष्यत् कालीन समन्वय व्याकरणिक दृष्टि से सर्वथा मानक है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "शर्तपरक वाक्य «यदि आप कठिन परिश्रम करेंगे, ___ सफलता आपके कदम चूमेगी» में सही परिणाम योजक भरिए:",
          "options": [
            "तो (To - Then [mandatory conditional correlative to yadi])",
            "तब (Temporal mismatch for condition)",
            "इसलिए (Causal mismatch)",
            "ताकि (Purposive mismatch)"
          ],
          "answerIndex": 0,
          "explanation": "'यदि' के साथ परिणाम उपवाक्य को जोड़ने वाला शुद्ध नित्यसंबंधी अव्यय «तो» है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "वास्तविक भविष्योन्मुख शर्त (Real Future Conditional) का पूर्णतः शुद्ध वाक्य चुनिए:",
          "options": [
            "यदि समय रहते उचित उपचार मिल जाएगा, तो रोगी शीघ्र ही पूर्ण स्वस्थ हो जाएगा। (If proper treatment is received in time, the patient will recover fully very soon.)",
            "यदि उचित उपचार मिला तब रोगी स्वस्थ होता था।",
            "अगर उपचार मिलेगा इसलिए स्वस्थ होगा।",
            "उपचार मिलता है ताकि स्वस्थ हो जाएगा।"
          ],
          "answerIndex": 0,
          "explanation": "«यदि... मिल जाएगा, तो... स्वस्थ हो जाएगा» भविष्योन्मुख शर्त का शत-प्रतिशत शुद्ध और मानक रूप है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u18-l2": {
    "id": "hi-u18-l2",
    "subject": "hindi",
    "unit": 18,
    "lessonNumber": 2,
    "title": "संभाव्य शर्त: अगर + संभाव्य काल (Hypothetical & Potential Conditionals: agar + Subjunctive)",
    "level": "B2",
    "objective": "संभाव्य और काल्पनिक शर्तों (Potential / Hypothetical Conditionals) के निर्माण — 'अगर/यदि + [संभावनार्थ धातु (जाए/आए/मिले)] + तो + [भविष्यत्/चाहिए]' — में पारंगत होना।",
    "presentation": {
      "explanation": "जब शर्त निश्चित न होकर केवल एक संभावना (Potential / Hypothesis) हो, तब शर्त उपवाक्य में **संभावनार्थ काल (Subjunctive Mood)** का प्रयोग किया जाता है:\n\n1. संभावनार्थ शर्त का सूत्र:\n   - **अगर / यदि + [संभाव्य क्रिया (आए / मिले / हो)] + तो + [भविष्यत् / चाहिए / आज्ञा]**\n   - *अगर वह आए, तो उसे यह पत्र दे देना* (If he should come, give him this letter);\n   - *यदि वर्षा हो, तो फसल अच्छी होगी* (Were it to rain, harvest will be good);\n   - *अगर कोई कठिनाई आए, तो तुरंत संपर्क करें* (Should any difficulty arise, contact immediately)।\n\n2. भविष्यत् शर्त बनाम संभाव्य शर्त का अंतर:\n   - *अगर वह आएगा (निश्चित संभावना)* vs *अगर वह आए (अनिश्चित / विनम्र संभावना)*।",
      "examples": [
        {
          "target": "यदि कोई भी अपरिचित व्यक्ति आपसे आपके बैंक खाते का गोपनीय पासवर्ड या ओटीपी माँगे, तो उसे कदापि कोई भी व्यक्तिगत जानकारी न दें।",
          "reading": "yadi koi bhi aparichit vyakti aapse aapke bank khaate ka gopaneey password ya OTP maange, to use kadaapi koi bhi vyaktigat jaankaari na dein. [jəd̪ɪ koːiː bʱiː əpərɪtʃɪt̪ ʋjəkt̪ɪ aːpseː aːpkeː bɛːŋk kʰaːt̪eː kaː ɡoːpniːj paːsʋərɖ jaː oːʈiːpiː maː̃ɡeː t̪oː ʊseː kəd̪aːpɪ koːiː bʱiː ʋjəkt̪ɪɡət̪ dʒaːnkaːriː nə d̪ẽː] (yud-DEE KOH-ee bhee uh-puh-ree-CHEET VYUHNK-tee AHP-say AHP-kay bynk KHAH-tay kah gohp-NEE-yuh PASS-wurd yah oh-tee-PEE MAHN-gay, toh oo-SAY kuh-DAH-pee KOH-ee bhee vyuhk-tee-GUHT jahn-KAH-ree nuh DAYN)",
          "translation": "If any unknown person should ask you for your bank account's confidential password or OTP, never give him any personal information under any circumstances."
        },
        {
          "target": "अगर आगामी अंतरराष्ट्रीय व्यापार मेले में हमें नया स्टॉल लगाने की आधिकारिक अनुमति मिल जाए, तो हमारे हस्तशिल्प व्यवसाय को बहुत बड़ा आर्थिक लाभ होगा।",
          "reading": "agar aagaami antarraashtreey vyaapaar mele mein humein naya stall lagaane ki aadhikaarik anumati mil jaaye, to hamaare hastashilp vyavsaay ko bahut bada aarthik laabh hoga. [əɡər aːɡaːmiː ən̪t̪ərraːʂʈriːj ʋjaːpaːr meːleː mẽː ɦəmẽː nəjaː sʈɔːl ləɡaːneː kiː aːd̪ʱɪkaːrɪk ənʊmət̪ɪ mɪl dʒaːjeː t̪oː ɦəmaːreː ɦəst̪əʃɪlp ʋjəʋsaːj koː bəɦʊt̪ bəɽaː aːrt̪ʰɪk laːbʱ hoːɡaː] (uh-GUHR ah-GAH-mee uhn-tuhr-rahsh-TREE-yuh vyah-PAHR MAY-lay mayn huh-MAYN nuh-YAH stall luh-gah-NAY kee ah-dhee-KAH-reek uh-noo-MUH-tee meel JAH-yay, toh huh-MAH-ray huhs-tuh-SHEELP vyuhv-SAHY koh buh-hoot BUH-dah AHR-theek LAHBH hoh-GAH)",
          "translation": "If we should receive official permission to set up a new stall in the upcoming international trade fair, our handicraft business will gain immense financial profit."
        },
        {
          "target": "यदि इस दुर्गम पर्वतीय मार्ग पर यात्रा के दौरान अचानक मूसलाधार वर्षा होने लगे, तो सभी वाहन चालक किसी सुरक्षित स्थान पर तुरंत शरण लें।",
          "reading": "yadi is durgam parvateey maarg par yaatra ke dauraan achanak mooslaadhaar varsha hone lage, to sabhi vaahan chaalak kisi surakshit sthaan par turant sharan lein. [jəd̪ɪ ɪs d̪ʊrɡəm pərʋət̪iːj maːrɡ pər jaːt̪raː keː dɔːraːn ətʃaːnək muːslaːd̪ʱaːr ʋərʂaː hoːneː ləɡeː t̪oː səbʱiː ʋaːɦən tʃaːlək kɪsiː sʊrəkʃɪt̪ st̪ʰaːn pər t̪ʊrən̪t̪ ʃərəɳ lẽː] (yud-DEE ees door-GUHM puhr-vuh-TEE-yuh MAHRG puhr YAH-trah kay dow-RAHN uh-CHAH-nuhk moos-lah-DHAHR vuhr-SHAH HOH-nay LUH-gay, toh SUH-bhee VAH-huhn CHAH-luhk kee-SEE soo-ruhk-SHEET sthahn puhr TOO-ruhnt SHUH-ruhn LAYN)",
          "translation": "If torrential rain should suddenly begin during travel on this difficult mountainous route, all vehicle drivers should immediately take shelter at a safe location."
        }
      ],
      "mnemonics": [
        "संभाव्य शर्त = अगर + धातु-ए/एं + तो (अगर वह आए तो कहना)!"
      ],
      "culturalNotes": [
        "औपचारिक चेतावनियों और परामर्शों में कठोर आज्ञा से बचने के लिए 'यदि कोई समस्या हो' जैसी संभाव्य शर्तों का प्रयोग सर्वाधिक शिष्ट माना जाता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "संभाव्य शर्त (Hypothetical: If he should ask, tell him the truth) का शुद्ध वाक्य पहचानिए:",
          "options": [
            "यदि वह पूछे, तो उसे सच बता देना (Yadi vah poochhe, to use sach bata dena - If he should ask, tell him the truth [subjunctive condition + imperative])",
            "यदि वह पूछेगा तब सच बता देना ('तब' दोष)",
            "अगर वह पूछता इसलिए सच बताया (काल असंगति)",
            "वह पूछे यदि ताकि सच बोलो (अव्यवस्थित पदक्रम)"
          ],
          "answerIndex": 0,
          "explanation": "संभाव्य क्रिया «पूछे» के साथ परिणाम उपवाक्य «तो उसे सच बता देना» व्याकरणिक रूप से आदर्श है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «अगर अवसर ___ तो हमें अपनी प्रतिभा अवश्य दिखानी चाहिए» में सही संभाव्य क्रिया भरिए:",
          "options": [
            "मिले (Mile - Should opportunity be received [subjunctive])",
            "मिलेगा (Definite future error for polite hypothesis)",
            "मिला था (Past error)",
            "मिलता रहा (Continuous error)"
          ],
          "answerIndex": 0,
          "explanation": "'चाहिए' के साथ संभाव्य शर्त के लिए संभावनार्थ रूप «मिले» शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "संभाव्य शर्त (Subjunctive Conditional) का सर्वथा मानक वाक्य चुनिए:",
          "options": [
            "यदि कोई संकट उत्पन्न हो, तो घबराने के बजाय धैर्यपूर्वक उपाय खोजना चाहिए। (If any crisis should arise, one should patiently seek solutions rather than panicking.)",
            "यदि संकट उत्पन्न होगा इसलिए घबराएँ।",
            "अगर संकट हुआ था तो उपाय खोजते।",
            "संकट उत्पन्न हो ताकि घबराना चाहिए।"
          ],
          "answerIndex": 0,
          "explanation": "«यदि... उत्पन्न हो, तो... खोजना चाहिए» में संभाव्य शर्त और उपदेशात्मक परिणाम का अन्वय सर्वथा शुद्ध है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u18-l3": {
    "id": "hi-u18-l3",
    "subject": "hindi",
    "unit": 18,
    "lessonNumber": 3,
    "title": "हेतुहेतुमद् भूतकाल: अवास्तविक भूतकालिक शर्त (Past Counterfactuals: Imperfective Participle)",
    "level": "B2",
    "objective": "अवास्तविक भूतकालिक शर्त (Past Counterfactual / Irrealis) — 'अगर/यदि + [अपूर्ण कृदंत (करता/करती/करते)] + तो + [अपूर्ण कृदंत (होता/होती/होते)]' — की संरचना में पूर्ण निपुणता प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी में भूतकाल की ऐसी शर्त जो पूरी नहीं हो सकी और जिसका परिणाम भी घटित नहीं हुआ (Past Counterfactual / Unfulfilled Condition), उसे **हेतुहेतुमद् भूतकाल** कहते हैं:\n\n1. हेतुहेतुमद् भूतकाल का सार्वभौमिक सूत्र:\n   - **अगर / यदि + [कर्ता + अपूर्ण कृदंत (-ता/-ती/-ते)] + तो + [अपूर्ण कृदंत (-ता/-ती/-ते)]**\n   - (नियम: दोनों उपवाक्यों में क्रिया केवल **अपूर्ण कृदंत** रहती है; 'था/थी/थे' या 'है' का प्रयोग नहीं होता!)\n   - *अगर तुम समय पर आते, तो गाड़ी न छूटती* (If you had come on time, the train wouldn't have been missed);\n   - *यदि वह पढ़ता, तो परीक्षा में अवश्य उत्तीर्ण होता* (Had he studied, he would have passed);\n   - *अगर बारिश होती, तो फसल अच्छी होती* (Had it rained, the crop would have been good)।",
      "examples": [
        {
          "target": "यदि अनुभवी मुख्य शल्य-चिकित्सक ठीक समय पर अस्पताल पहुँच जाते, तो उस गंभीर रूप से घायल दुर्घटना पीड़ित की अमूल्य जान बच जाती।",
          "reading": "yadi anubhavi mukhya shalya-chikitsak theek samay par aspataal pahunch jaate, to us gambheer roop se ghaayal durghatna peedit ki amoolya jaan bach jaati. [jəd̪ɪ ənʊbʱəʋiː mʊkʰjə ʃəljə tʃɪkɪt̪sək t̪ʰiːk səməj pər əspət̪aːl pəɦʊntʃ dʒaːt̪eː t̪oː ʊs ɡəmbiːr ruːp seː ɡʱaːjəl d̪ʊrɡʱəʈnaː piːɽɪt̪ kiː əmuːljə dʒaːn bətʃ dʒaːt̪iː] (yud-DEE uh-noobh-HUH-vee MOOKH-yuh SHUHL-yuh chee-KEET-suhk theek SUH-muy puhr uhs-puh-TAHL puh-HOONCH JAH-tay, toh oos guhm-BHEER roop say GHAH-yuhl door-ghuht-NAH PEE-deet kee uh-MOOL-yuh jahn buhtch JAH-tee)",
          "translation": "If the experienced chief surgeon had reached the hospital right on time, the invaluable life of that critically injured accident victim would have been saved."
        },
        {
          "target": "अगर तुमने पिछले महीने समय रहते अपनी आगामी परीक्षा की योजनाबद्ध और गंभीर तैयारी की होती, तो आज तुम्हें इस प्रकार निराश और व्यथित न होना पड़ता।",
          "reading": "agar tumne pichhle maheene samay rahte apni aagaami pareeksha ki yojanabaddh aur gambheer taiyaari ki hoti, to aaj tumhein is prakaar niraash aur vyathit na hona padta. [əɡər t̪ʊmneː pɪtʃʰleː məɦiːneː səməj rəɦt̪eː əpniː aːɡaːmiː pəriːkʃaː kiː joːdʒnəbəd̪ːʱ ɔːr ɡəmbiːr t̪ɛːjaːriː kiː hoːt̪iː t̪oː aːdʒ t̪ʊmɦẽː ɪs prəkaːr nɪraːʃ ɔːr ʋjət̪ʰɪt̪ nə hoːnaː pəɽt̪aː] (uh-GUHR TOOM-nay PEECHH-lay muh-HEE-nay SUH-muy RUH-tay uhp-NEE ah-GAH-mee puh-REEK-shah kee yohj-nuh-BUHDH owr guhm-BHEER ty-YAH-ree kee HOH-tee, toh ahj toom-HAYN ees pruh-KAHR nee-RAHSH owr vyuh-THEET nuh HOH-nah PUHD-tah)",
          "translation": "If you had done planned and serious preparation for your upcoming exam in time last month, you would not have had to be so disappointed and distressed today."
        },
        {
          "target": "यदि समय पर अग्निशमन दल के वाहन घटनास्थल पर पहुँच जाते, तो इस ऐतिहासिक बहुमंजिला इमारत को भीषण अग्निकांड से पूरी तरह बचाया जा सकता।",
          "reading": "yadi samay par agnishaman dal ke vaahan ghatnasthal par pahunch jaate, to is aitihasik bahumanjila imaarat ko bheeshan agnikaand se poori tarah bachaaya ja sakta. [jəd̪ɪ səməj pər əɡnɪʃəmən d̪əl keː ʋaːɦən ɡʱəʈnaːst̪ʰəl pər pəɦʊntʃ dʒaːt̪eː t̪oː ɪs ɛːt̪ɪhaːsɪk bəɦʊməndʒɪlaː ɪmaːrət̪ koː bʱiːʂəɳ əɡnɪkaːɳɖ seː puːriː t̪ərəɦ bətʃaːjaː dʒaː səktaː] (yud-DEE SUH-muy puhr uhg-nee-SHUH-muhn duhl kay VAH-huhn ghuht-nah-STHUHL puhr puh-HOONCH JAH-tay, toh ees ay-tee-HAH-seek buh-hoo-muhn-JEE-lah ee-MAH-ruht koh bhee-SHUHN uhg-nee-KAHN-duh say POO-ree TUH-ruh buh-CHAH-yah jah SUHK-tah)",
          "translation": "If the vehicles of the fire brigade had reached the incident site on time, this historic multi-storey building could have been completely saved from the terrible inferno."
        }
      ],
      "mnemonics": [
        "हेतुहेतुमद् भूतकाल = अगर + -ता/ती/ते... तो + -ता/ती/ते (अगर पढ़ते तो पास होते, 'था' कभी नहीं आता)!"
      ],
      "culturalNotes": [
        "हिंदी साहित्य और महाकाव्यों में नियति और पश्चाताप के प्रसंगों में हेतुहेतुमद् भूतकाल का प्रयोग अत्यधिक कारुणिक और प्रभावशाली प्रभाव उत्पन्न करता है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "अवास्तविक भूतकालिक शर्त (Past Counterfactual: Had he run fast, he would have won) का शुद्ध रूप क्या है?",
          "options": [
            "यदि वह तेज़ दौड़ता, तो प्रतियोगिता जीत जाता (Yadi vah tez daudta, to pratiyogita jeet jaata - Had he run fast, he would have won the competition)",
            "यदि वह तेज़ दौड़ता था तो जीत गया था (अशुद्ध 'था' का प्रयोग)",
            "अगर वह तेज़ दौड़ेगा तो जीत जाता (काल संकर दोष)",
            "वह तेज़ दौड़ता ताकि जीत जाता था (उद्देश्य दोष)"
          ],
          "answerIndex": 0,
          "explanation": "हेतुहेतुमद् भूतकाल में दोनों ओर केवल अपूर्ण कृदंत «दौड़ता... जीत जाता» का प्रयोग शुद्ध है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "वाक्य «अगर तुम समय पर स्टेशन पहुँचते, तो ट्रेन न ___» में सही क्रिया रूप भरिए:",
          "options": [
            "छूटती (Chhoot-ti - Would not have been missed [fem. agreement with train])",
            "छूटेगी (Future mismatch for past counterfactual)",
            "छूट गई थी (Past indicative mismatch)",
            "छूटती है (Habitual error)"
          ],
          "answerIndex": 0,
          "explanation": "हेतुहेतुमद् भूतकाल में 'ट्रेन' स्त्रीलिंग एकवचन के साथ अपूर्ण कृदंत «छूटती» शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "हेतुहेतुमद् भूतकाल (Past Counterfactual) का शत-प्रतिशत मानक वाक्य पहचानिए:",
          "options": [
            "यदि किसान समय पर खाद और पानी देते, तो इस वर्ष खेतों में रिकॉर्ड फसल पैदा होती। (Had the farmers given fertilizer and water on time, a record crop would have been produced in the fields this year.)",
            "यदि किसान खाद देते थे तो फसल पैदा होती थी।",
            "अगर किसान खाद देंगे तो फसल पैदा होती।",
            "किसान खाद देते ताकि फसल पैदा हुई थी।"
          ],
          "answerIndex": 0,
          "explanation": "«यदि... देते, तो... पैदा होती» हेतुहेतुमद् भूतकाल का व्याकरणिक नियमों के अनुसार पूर्णतः त्रुटिहीन रूप है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u18-l4": {
    "id": "hi-u18-l4",
    "subject": "hindi",
    "unit": 18,
    "lessonNumber": 4,
    "title": "इच्छा, काश और असंभव कामनाएं: 'काश ऐसा होता!' (Wishes, Regrets & Optatives: kaash)",
    "level": "B2",
    "objective": "असंभव कामनाओं, पश्चाताप और तीव्र इच्छाओं को व्यक्त करने वाले अव्यय 'काश' तथा मिश्रित शर्तपरक संरचनाओं (Mixed Conditionals) के सटीक प्रयोग में निपुण होना।",
    "presentation": {
      "explanation": "असंभव इच्छाओं और अपूर्ण कामनाओं (Unfulfilled Wishes & Optatives) को व्यक्त करने के नियम:\n\n1. **'काश' (Kaash / Would that / If only) की संरचना**:\n   - सूत्र: **काश + [कर्ता] + [अपूर्ण कृदंत क्रिया (-ता/-ती/-ते)] !**\n   - *काश मैं एक पक्षी होता!* (Would that I were a bird! [वर्तमान असंभव कल्पना]);\n   - *काश उसने मेरी बात सुनी होती!* (If only he had listened to me! [भूतकालिक पश्चाताप]);\n   - *काश हम उस समय वहाँ उपस्थित होते!* (Wish we were present there at that time!)।\n\n2. **मिश्रित शर्तपरक वाक्य (Mixed Conditionals: Past Condition → Present Result)**:\n   - सूत्र: **अगर + [भूतकालिक अपूर्ण कृदंत] + तो + [वर्तमान काल प्रभाव]**\n   - *अगर तुमने उस समय सही निर्णय लिया होता, तो आज हम यहाँ न भटक रहे होते* (Had you made the right decision then, we wouldn't be wandering here today)।",
      "examples": [
        {
          "target": "काश उस भीषण राष्ट्रीय संकट की घड़ी में हम सभी देशवासी आपसी मतभेद भुलाकर एकजुट खड़े होते, तो आज राष्ट्र को इस विपत्ति का सामना न करना पड़ता।",
          "reading": "kaash us bheeshan raashtreey sankat ki ghadi mein hum sabhi deshvaasi aapsi matbhed bhulaakar ekjut khade hote, to aaj rashtr ko is vipatti ka saamna na karna padta. [kaːʃ ʊs bʱiːʂəɳ raːʂʈriːj sənkəʈ kiː ɡʱəɽiː mẽː ɦəm səbʱiː d̪eːʃʋaːsiː aːpsiː mət̪bʱeːd̪ bʱʊlaːkər eːkdʒʊʈ kʰəɽeː hoːt̪eː t̪oː aːdʒ raːʂʈr koː ɪs ʋɪpət̪ːɪ kaː saːmnaː nə kərnaː pəɽt̪aː] (KAHSH oos bhee-SHUHN rahsh-TREE-yuh suhn-KUHT kee ghuh-DEE mayn huhm SUH-bhee daysh-VAH-see AHP-see muht-BHAYD bhoo-LAH-kuhr ayk-JOOT KHUH-day HOH-tay, toh ahj RAHSH-truh koh ees vee-PUHT-tee kah SAHM-nah nuh KUHR-nah PUHD-tah)",
          "translation": "Would that in that hour of severe national crisis all of us countrymen had stood united forgetting mutual differences, the nation would not have had to face this catastrophe today."
        },
        {
          "target": "काश बचपन में मुझे भी भारतीय शास्त्रीय संगीत और साहित्य की विधिवत शिक्षा प्राप्त करने का स्वर्णिम सुअवसर मिला होता, तो आज मेरा जीवन कुछ और ही होता।",
          "reading": "kaash bachpan mein mujhe bhi bhaarateey shaastreey sangeet aur saahitya ki vidhivat shiksha praapt karne ka svarnim su-avsar mila hota, to aaj mera jeevan kuchh aur hi hota. [kaːʃ bətʃpən mẽː mʊdʒʱeː bʱiː bʱaːrt̪iːj ʃaːst̪riːj sənɡiːt̪ ɔːr saːɦɪt̪jə kiː ʋɪd̪ʱɪʋət̪ ʃɪkʃaː praːpt̪ kərneː kaː sʋərɳɪm sʊəʋsər mɪlaː hoːt̪aː t̪oː aːdʒ meːraː dʒiːʋən kʊtʃʰ ɔːr ɦiː hoːt̪aː] (KAHSH buhtch-PUHN mayn MOOJ-hay bhee bhahr-TEE-yuh shah-STREE-yuh suhn-GEET owr sah-HEET-yuh kee vee-dhee-VUHT sheek-SHAH PRAHPT KUHR-nay kah svuhr-NEEM soo-uhv-SUHR MEE-lah HOH-tah, toh ahj MAY-rah JEE-vuhn koochh owr hee HOH-tah)",
          "translation": "If only in childhood I too had received the golden opportunity to get formal education in Indian classical music and literature, today my life would have been something entirely different."
        },
        {
          "target": "अगर युवावस्था में तुमने अपने पूज्य गुरुजनों और माता-पिता के अमूल्य उपदेशों का निष्ठापूर्वक पालन किया होता, तो आज तुम समाज में एक अत्यंत प्रतिष्ठित पद पर आसीन होते।",
          "reading": "agar yuvaavastha mein tumne apne poojya gurujanon aur maata-pita ke amoolya updeshon ka nishthaapoorvak paalan kiya hota, to aaj tum samaaj mein ek atyant pratishthit pad par aaseen hote. [əɡər jʊʋaːʋəst̪ʰaː mẽː t̪ʊmneː əpneː puːdʒjə ɡʊrʊdʒnõː ɔːr maːt̪aː pɪt̪aː keː əmuːljə ʊpd̪eːʃõː kaː nɪʂʈʰaːpuːrʋək paːlən kɪjaː hoːt̪aː t̪oː aːdʒ t̪ʊm səmaːdʒ mẽː eːk ət̪jən̪t̪ prət̪ɪʂʈʰɪt̪ pəd̪ pər aːsiːn hoːt̪eː] (uh-GUHR yoo-vah-VUHS-thah mayn TOOM-nay uhp-NAY POOJ-yuh goo-roo-JUH-nohn owr MAH-tah pee-TAH kay uh-MOOL-yuh oop-DAY-shohn kah neesh-thah-POOR-vuhk PAH-luhn kee-YAH HOH-tah, toh ahj toom suh-MAHJ mayn ayk uht-YUHNT pruh-teesh-THEET puhd puhr ah-SEEN HOH-tay)",
          "translation": "If in youth you had faithfully followed the invaluable teachings of your revered teachers and parents, today you would be seated on an extremely prestigious post in society."
        }
      ],
      "mnemonics": [
        "काश + मैं होता! काश + उसने किया होता! तीव्र इच्छा व पश्चाताप!"
      ],
      "culturalNotes": [
        "हिंदी की प्रसिद्ध कविता 'काश मैं चिड़िया बन जाती' और छायावादी साहित्यों में 'काश' का प्रयोग मानवीय आकांक्षाओं की गहराई का प्रतीक रहा है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "असंभव इच्छा (Wish: Would that I were rich!) को व्यक्त करने वाला शुद्ध वाक्य कौन-सा है?",
          "options": [
            "काश मैं धनी होता! (Kaash main dhani hota! - Would that I were wealthy! [optative with kaash + imperfective])",
            "काश मैं धनी हूँ! (वर्तमान सत्य दोष)",
            "काश मैं धनी होऊंगा! (भविष्यत् काल दोष)",
            "काश मैं धनी हो गया था! (अशुद्ध भूतकाल)"
          ],
          "answerIndex": 0,
          "explanation": "'काश' के साथ असंभव कामना व्यक्त करने हेतु अपूर्ण कृदंत «होता» शुद्ध है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "मिश्रित शर्त «अगर तुमने मेहनत की होती, तो आज तुम पछता ___» में सही रूप भरिए:",
          "options": [
            "न रहे होते (Na rahe hote - Would not be regretting [mixed conditional present result])",
            "न रहे होंगे (Future error)",
            "न रहे (Simple prohibitive error)",
            "न रहे थे (Past error)"
          ],
          "answerIndex": 0,
          "explanation": "भूतकालिक शर्त का वर्तमान में जारी प्रभाव दर्शाने हेतु «न रहे होते» शुद्ध है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "'काश' और मिश्रित शर्तपरक वाक्य का पूर्णतः शुद्ध उदाहरण चुनिए:",
          "options": [
            "काश हमने समय रहते पर्यावरण संरक्षण पर ध्यान दिया होता, तो आज हमें इस गंभीर जलवायु संकट का सामना न करना पड़ता। (If only we had paid attention to environment conservation in time, today we wouldn't have had to face this severe climate crisis.)",
            "काश हम ध्यान देते थे इसलिए संकट न होता।",
            "काश हम ध्यान देंगे ताकि संकट नहीं हो।",
            "हम ध्यान दिए होते काश तो संकट था।"
          ],
          "answerIndex": 0,
          "explanation": "«काश... ध्यान दिया होता, तो आज... न करना पड़ता» में पश्चाताप और वर्तमान परिणाम का संश्लेषण सर्वथा निर्दोष है।"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hi-u18-l5": {
    "id": "hi-u18-l5",
    "subject": "hindi",
    "unit": 18,
    "lessonNumber": 5,
    "title": "शर्तपरक संरचनाओं का समग्र समेकन व संवाद विश्लेषण (Comprehensive Synthesis of Conditional Systems)",
    "level": "B2",
    "objective": "हिंदी के सभी चारों शर्त वर्गों (सार्वभौमिक सत्य, भविष्योन्मुख खुली शर्त, संभाव्य शर्त, हेतुहेतुमद् अवास्तविक शर्त) का उच्च स्तरीय गद्य और जटिल संवादों में समेकन करने में पूर्ण अधिकार प्राप्त करना।",
    "presentation": {
      "explanation": "हिंदी शर्तपरक वाक्य व्यवस्था (Conditional System) का संपूर्ण चतुष्कोणीय ढाँचा:\n\n1. **चारों प्रमुख शर्त वर्ग**:\n   - **प्रकार 0 (सार्वभौमिक सत्य / Habitual)**: *अगर पानी १००°C पर उबलता है, तो भाप बनता है।*\n   - **प्रकार 1 (भविष्योन्मुख वास्तविक / Real Future)**: *अगर तुम आओगे, तो मैं चलूँगा।*\n   - **प्रकार 2 (संभाव्य / Potential Subjunctive)**: *अगर वह आए, तो उसे समझा देना।*\n   - **प्रकार 3 (हेतुहेतुमद् अवास्तविक / Counterfactual Past)**: *अगर तुम आते, तो काम बन जाता।*\n\n2. **जटिल तार्किक संरचनाएं (Complex Dialectics)**:\n   - संवादों में शर्तों की शृंखला:\n     *यदि हम आज संकल्प लें, तो कल सफल होंगे; किंतु यदि हम चूके, तो पश्चाताप के सिवा कुछ न मिलेगा।*",
      "examples": [
        {
          "target": "यदि राष्ट्र का प्रत्येक नागरिक अपने संवैधानिक कर्तव्यों का पूरी ईमानदारी और निष्ठा से निर्वहन करे, तो हमारा प्यारा देश निसंदेह विश्व के सबसे समृद्ध और शक्तिशाली देशों में अग्रणी बन जाएगा।",
          "reading": "yadi rashtr ka pratyek naagrik apne samvaidhaanik kartavyon ka poori eemaandaari aur nishtha se nirvahan kare, to hamaara pyaara desh nisandeh vishv ke sabse samriddh aur shaktishaali deshon mein agrani ban jaayega. [jəd̪ɪ raːʂʈr kaː prət̪jeːk naːɡrɪk əpneː səmʋɛːd̪ʱaːnɪk kərt̪əʋjõː kaː puːriː iːmaːnd̪aːriː ɔːr nɪʂʈʰaː seː nɪrʋəɦən kəreː t̪oː ɦəmaːraː pjaːraː d̪eːʃ nɪsən̪d̪eːɦ ʋɪʃʋ keː səbseː səmərɪd̪ːʱ ɔːr ʃəkt̪ɪʃaːliː d̪eːʃõː mẽː əɡrəɳiː bən dʒaːjeːɡaː] (yud-DEE RAHSH-truh kah pruht-YAYK NAHG-reek uhp-NAY suhm-vy-DHAH-neek kuhr-tuhv-YOHN kah POO-ree ee-mahn-DAH-ree owr NEESH-thah say neer-vuh-HUHN KUH-ray, toh huh-MAH-rah PYAH-rah daysh nee-suhn-DAYH VEESH-vuh kay SUHB-say suhm-REEDH-dh owr shuhk-tee-SHAH-lee daysh-OHN mayn uhg-ruh-NEE buhn jah-AY-gah)",
          "translation": "If every citizen of the nation should discharge his constitutional duties with complete honesty and dedication, our beloved country will undoubtedly become foremost among the richest and most powerful nations of the world."
        },
        {
          "target": "यदि उस समय सरकार द्वारा त्वरित, साहसिक और प्रभावी आर्थिक सुधार लागू न किए जाते, तो आज देश में गंभीर मुद्रास्फीति और बेरोज़गारी की समस्या अत्यंत विकराल रूप धारण कर लेती।",
          "reading": "yadi us samay sarkaar dvaara tvarit, saahasik aur prabhaavi aarthik sudhaar laagu na kiye jaate, to aaj desh mein gambheer mudraasfeeti aur berozgaari ki samasya atyant vikraal roop dhaaran kar leti. [jəd̪ɪ ʊs səməj sərkaːr d̪ʋaːraː t̪ʋərɪt̪ saːɦsiːk ɔːr prəbʱaːʋiː aːrt̪ʰɪk sʊd̪ʱaːr laːɡuː nə kɪjeː dʒaːt̪eː t̪oː aːdʒ d̪eːʃ mẽː ɡəmbiːr mʊd̪raːsfiːt̪ɪ ɔːr beːroːzɡaːriː kiː səməsjaː ət̪jən̪t̪ ʋɪkraːl ruːp d̪ʱaːrəɳ kər leːt̪iː] (yud-DEE oos SUH-muy suhr-KAHR dvah-RAH tvuh-REET, sah-huh-SEEK owr pruh-bhah-VEE AHR-theek soo-DHAHR LAH-goo nuh kee-YAY JAH-tay, toh ahj daysh mayn guhm-BHEER mood-rahs-FEE-tee owr bay-rohz-GAH-ree kee suh-MUHS-yah uht-YUHNT veek-RAHL roop dhah-RUHN kuhr LAY-tee)",
          "translation": "If prompt, bold, and effective economic reforms had not been implemented by the government at that time, today the problem of severe inflation and unemployment in the country would have assumed an extremely dreadful form."
        },
        {
          "target": "काश हम सभी समय के प्रत्येक बहुमूल्य क्षण का सदुपयोग करना सीख लें, क्योंकि यदि आज हम समय को व्यर्थ गँवाएँगे, तो कल हमें पश्चाताप के अतिरिक्त कुछ भी प्राप्त नहीं होगा।",
          "reading": "kaash hum sabhi samay ke pratyek bahumoolya kshan ka sadupyog karna seekh lein, kyonki yadi aaj hum samay ko vyarth ganvaayenge, to kal humein pashchaataap ke atirikt kuchh bhi praapt nahin hoga. [kaːʃ ɦəm səbʱiː səməj keː prət̪jeːk bəɦʊmuːljə kʃəɳ kaː səd̪ʊpjoːɡ kərnaː siːkʰ lẽː kjõːkɪ jəd̪ɪ aːdʒ ɦəm səməj koː ʋjərt̪ʰ ɡə̃ʋaːẽːɡeː t̪oː kəl ɦəmẽː pəʃtʃaːt̪aːp keː ət̪ɪrɪkt̪ kʊtʃʰ bʱiː praːpt̪ nəɦĩː hoːɡaː] (KAHSH huhm SUH-bhee SUH-muy kay pruht-YAYK buh-hoo-MOOL-yuh kshuhn kah suhd-oop-YOHG KUHR-nah seekh LAYN, KYOHN-kee yud-DEE ahj huhm SUH-muy koh VYURTH guhn-vah-AYN-gay, toh kuhl huh-MAYN puhsh-chah-TAHP kay uh-tee-REEKT koochh bhee PRAHPT nuh-HEEN hoh-GAH)",
          "translation": "Would that all of us learn to make good use of every precious moment of time, because if we waste time today, tomorrow we will obtain nothing other than remorse."
        }
      ],
      "mnemonics": [
        "Type 0 (सत्य), Type 1 (भविष्य अगर...तो), Type 2 (संभाव्य अगर आए तो), Type 3 (हेतुहेतुमद् अगर आते तो)! शर्त प्रणाली का संपूर्ण शिखर!"
      ],
      "culturalNotes": [
        "भारतीय नीतिशास्त्र (चाणक्य नीति, भर्तृहरि नीतिशतक) के अनुवादों में शर्तपरक वाक्यों का उपयोग जीवन-मूल्यों और नीतिगत निर्णयों के परिणामों को स्पष्ट करने के लिए सदियों से होता आया है।"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "शर्तपरक संरचनाओं के सभी नियमों का पालन करने वाला सुगठित वाक्य पहचानिए:",
          "options": [
            "यदि हम आज संयम और अनुशासन का पालन करेंगे, तो कल हमारा भविष्य सुरक्षित और समृद्ध होगा (If we observe restraint and discipline today, tomorrow our future will be secure and prosperous)",
            "यदि हम आज अनुशासन पालन करते तब कल भविष्य होगा (असंगत काल)",
            "अगर अनुशासन पालन करेंगे इसलिए भविष्य समृद्ध था (तार्किक दोष)",
            "अनुशासन पालन करें ताकि अगर भविष्य होगा (अव्यवस्थित संयोजन)"
          ],
          "answerIndex": 0,
          "explanation": "«यदि... करेंगे, तो... होगा» भविष्योन्मुख शर्त का परिपूर्ण और सुगठित वाक्य है।"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "संवाद «यदि आप अनुमति दें, ___ हम अभी प्रस्थान करें» में सही नित्यसंबंधी भरिए:",
          "options": [
            "तो (To - Then [conditional apodosis marker])",
            "तब (Temporal error)",
            "ताकि (Purposive error)",
            "क्योंकि (Causal error)"
          ],
          "answerIndex": 0,
          "explanation": "संभाव्य शर्त 'यदि आप अनुमति दें' के साथ परिणाम हेतु «तो» ही मानक है।"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "शर्तपरक वाक्यों (Conditionals) के चारों प्रकारों का संपूर्ण तार्किक समन्वय वाला वाक्य पहचानिए:",
          "options": [
            "यदि समाज का प्रत्येक वर्ग एकजुट होकर प्रयास करे, तो कोई भी लक्ष्य असंभव नहीं है; किंतु अगर हमने आलस्य किया, तो हमें भारी मूल्य चुकाना पड़ेगा। (If every section of society strives together, no goal is impossible; but if we act lazy, we will have to pay a heavy price.)",
            "यदि समाज प्रयास करता है तब कोई लक्ष्य असंभव था।",
            "अगर समाज प्रयास करेगा ताकि मूल्य चुकाया था।",
            "समाज प्रयास करे इसलिए अगर लक्ष्य असंभव होगा।"
          ],
          "answerIndex": 0,
          "explanation": "«यदि... करे, तो... असंभव नहीं है» (संभाव्य) तथा «अगर... किया, तो... चुकाना पड़ेगा» (वास्तविक परिणाम) का संश्लेषण व्याकरणिक और तार्किक दृष्टि से अप्रतिम है।"
        }
      ],
      "passThreshold": 0.8
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
