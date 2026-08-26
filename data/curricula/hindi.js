// Hindi curriculum — full CEFR A1–C2 roadmap (34 units, 170 lessons)
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
        "objective": "Comprehensive mastery of नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness).",
        "presentation": {
            "explanation": "इस पाठ में हम « देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) » (भाग 1) और नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (1.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (1.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (1.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (1.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (1.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (1.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (1.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (1.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (1.1.3)।"
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
                    "prompt": "कौन सा वाक्य « नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 1-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (1.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (1.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (1.1.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («नमस्ते_1_1»):",
                    "acceptedAnswers": [
                        "नमस्ते_1_1"
                    ],
                    "explanation": "The target keyword was: 【नमस्ते_1_1】"
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
        "objective": "Comprehensive mastery of नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness).",
        "presentation": {
            "explanation": "इस पाठ में हम « देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) » (भाग 2) और नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (1.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (1.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (1.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (1.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (1.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (1.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (1.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (1.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (1.2.3)।"
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
                    "prompt": "कौन सा वाक्य « नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 1-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (1.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (1.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (1.2.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («नमस्ते_1_2»):",
                    "acceptedAnswers": [
                        "नमस्ते_1_2"
                    ],
                    "explanation": "The target keyword was: 【नमस्ते_1_2】"
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
        "objective": "Comprehensive mastery of नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness).",
        "presentation": {
            "explanation": "इस पाठ में हम « देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) » (भाग 3) और नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (1.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (1.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (1.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (1.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (1.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (1.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (1.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (1.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (1.3.3)।"
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
                    "prompt": "कौन सा वाक्य « नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 1-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (1.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (1.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (1.3.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («नमस्ते_1_3»):",
                    "acceptedAnswers": [
                        "नमस्ते_1_3"
                    ],
                    "explanation": "The target keyword was: 【नमस्ते_1_3】"
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
        "objective": "Comprehensive mastery of नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness).",
        "presentation": {
            "explanation": "इस पाठ में हम « देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) » (भाग 4) और नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (1.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (1.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (1.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (1.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (1.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (1.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (1.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (1.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (1.4.3)।"
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
                    "prompt": "कौन सा वाक्य « नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 1-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (1.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (1.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (1.4.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («नमस्ते_1_4»):",
                    "acceptedAnswers": [
                        "नमस्ते_1_4"
                    ],
                    "explanation": "The target keyword was: 【नमस्ते_1_4】"
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
        "objective": "Comprehensive mastery of नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness).",
        "presentation": {
            "explanation": "इस पाठ में हम « देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) » (भाग 5) और नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (1.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (1.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (1.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (1.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (1.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (1.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« देवनागरी लिपि और बुनियादी अभिवादन (Script & Greetings) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (1.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (1.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (1.5.3)।"
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
                    "prompt": "कौन सा वाक्य « नमस्ते और सामान्य शिष्टाचार (Greetings & Politeness) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 1-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (1.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (1.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (1.5.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («नमस्ते_1_5»):",
                    "acceptedAnswers": [
                        "नमस्ते_1_5"
                    ],
                    "explanation": "The target keyword was: 【नमस्ते_1_5】"
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
        "objective": "Comprehensive mastery of संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules).",
        "presentation": {
            "explanation": "इस पाठ में हम « संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) » (भाग 1) और संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (2.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (2.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (2.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (2.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (2.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (2.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (2.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (2.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (2.1.3)।"
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
                    "prompt": "कौन सा वाक्य « संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 2-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (2.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (2.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (2.1.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («लड़का_2_1»):",
                    "acceptedAnswers": [
                        "लड़का_2_1"
                    ],
                    "explanation": "The target keyword was: 【लड़का_2_1】"
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
        "objective": "Comprehensive mastery of संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules).",
        "presentation": {
            "explanation": "इस पाठ में हम « संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) » (भाग 2) और संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (2.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (2.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (2.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (2.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (2.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (2.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (2.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (2.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (2.2.3)।"
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
                    "prompt": "कौन सा वाक्य « संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 2-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (2.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (2.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (2.2.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («लड़का_2_2»):",
                    "acceptedAnswers": [
                        "लड़का_2_2"
                    ],
                    "explanation": "The target keyword was: 【लड़का_2_2】"
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
        "objective": "Comprehensive mastery of संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules).",
        "presentation": {
            "explanation": "इस पाठ में हम « संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) » (भाग 3) और संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (2.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (2.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (2.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (2.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (2.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (2.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (2.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (2.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (2.3.3)।"
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
                    "prompt": "कौन सा वाक्य « संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 2-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (2.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (2.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (2.3.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («लड़का_2_3»):",
                    "acceptedAnswers": [
                        "लड़का_2_3"
                    ],
                    "explanation": "The target keyword was: 【लड़का_2_3】"
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
        "objective": "Comprehensive mastery of संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules).",
        "presentation": {
            "explanation": "इस पाठ में हम « संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) » (भाग 4) और संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (2.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (2.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (2.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (2.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (2.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (2.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (2.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (2.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (2.4.3)।"
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
                    "prompt": "कौन सा वाक्य « संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 2-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (2.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (2.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (2.4.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («लड़का_2_4»):",
                    "acceptedAnswers": [
                        "लड़का_2_4"
                    ],
                    "explanation": "The target keyword was: 【लड़का_2_4】"
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
        "objective": "Comprehensive mastery of संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules).",
        "presentation": {
            "explanation": "इस पाठ में हम « संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) » (भाग 5) और संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (2.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (2.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (2.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (2.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (2.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (2.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संज्ञा, लिंग और वचन नियम (Nouns, Gender & Plurals) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (2.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (2.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (2.5.3)।"
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
                    "prompt": "कौन सा वाक्य « संज्ञा के लिंग और बहुवचन (Noun Gender & Plural Rules) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 2-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (2.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (2.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (2.5.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («लड़का_2_5»):",
                    "acceptedAnswers": [
                        "लड़का_2_5"
                    ],
                    "explanation": "The target keyword was: 【लड़का_2_5】"
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
        "objective": "Comprehensive mastery of सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से).",
        "presentation": {
            "explanation": "इस पाठ में हम « सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) » (भाग 1) और सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (3.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (3.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (3.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (3.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (3.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (3.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (3.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (3.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (3.1.3)।"
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
                    "prompt": "कौन सा वाक्य « सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 3-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (3.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (3.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (3.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («मेरा_3_1»):",
                    "acceptedAnswers": [
                        "मेरा_3_1"
                    ],
                    "explanation": "The target keyword was: 【मेरा_3_1】"
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
        "objective": "Comprehensive mastery of सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से).",
        "presentation": {
            "explanation": "इस पाठ में हम « सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) » (भाग 2) और सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (3.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (3.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (3.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (3.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (3.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (3.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (3.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (3.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (3.2.3)।"
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
                    "prompt": "कौन सा वाक्य « सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 3-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (3.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (3.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (3.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («मेरा_3_2»):",
                    "acceptedAnswers": [
                        "मेरा_3_2"
                    ],
                    "explanation": "The target keyword was: 【मेरा_3_2】"
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
        "objective": "Comprehensive mastery of सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से).",
        "presentation": {
            "explanation": "इस पाठ में हम « सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) » (भाग 3) और सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (3.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (3.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (3.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (3.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (3.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (3.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (3.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (3.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (3.3.3)।"
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
                    "prompt": "कौन सा वाक्य « सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 3-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (3.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (3.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (3.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («मेरा_3_3»):",
                    "acceptedAnswers": [
                        "मेरा_3_3"
                    ],
                    "explanation": "The target keyword was: 【मेरा_3_3】"
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
        "objective": "Comprehensive mastery of सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से).",
        "presentation": {
            "explanation": "इस पाठ में हम « सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) » (भाग 4) और सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (3.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (3.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (3.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (3.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (3.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (3.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (3.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (3.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (3.4.3)।"
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
                    "prompt": "कौन सा वाक्य « सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 3-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (3.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (3.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (3.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («मेरा_3_4»):",
                    "acceptedAnswers": [
                        "मेरा_3_4"
                    ],
                    "explanation": "The target keyword was: 【मेरा_3_4】"
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
        "objective": "Comprehensive mastery of सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से).",
        "presentation": {
            "explanation": "इस पाठ में हम « सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) » (भाग 5) और सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (3.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (3.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (3.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (3.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (3.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (3.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सर्वनाम और संबंधबोधक परसर्ग (Pronouns & Postpositions) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (3.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (3.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (3.5.3)।"
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
                    "prompt": "कौन सा वाक्य « सर्वनाम और परसर्ग (Pronouns & Postpositions: में/पर/से) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 3-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (3.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (3.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (3.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («मेरा_3_5»):",
                    "acceptedAnswers": [
                        "मेरा_3_5"
                    ],
                    "explanation": "The target keyword was: 【मेरा_3_5】"
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
        "objective": "Comprehensive mastery of सामान्य वर्तमान काल (Present Habitual Tense).",
        "presentation": {
            "explanation": "इस पाठ में हम « सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) » (भाग 1) और सामान्य वर्तमान काल (Present Habitual Tense) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (4.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (4.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (4.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सामान्य वर्तमान काल (Present Habitual Tense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सामान्य वर्तमान काल (Present Habitual Tense) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (4.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (4.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (4.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (4.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (4.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (4.1.3)।"
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
                    "prompt": "कौन सा वाक्य « सामान्य वर्तमान काल (Present Habitual Tense) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 4-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (4.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (4.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (4.1.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पढ़ता_है_4_1»):",
                    "acceptedAnswers": [
                        "पढ़ता_है_4_1"
                    ],
                    "explanation": "The target keyword was: 【पढ़ता_है_4_1】"
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
        "objective": "Comprehensive mastery of सामान्य वर्तमान काल (Present Habitual Tense).",
        "presentation": {
            "explanation": "इस पाठ में हम « सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) » (भाग 2) और सामान्य वर्तमान काल (Present Habitual Tense) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (4.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (4.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (4.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सामान्य वर्तमान काल (Present Habitual Tense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सामान्य वर्तमान काल (Present Habitual Tense) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (4.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (4.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (4.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (4.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (4.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (4.2.3)।"
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
                    "prompt": "कौन सा वाक्य « सामान्य वर्तमान काल (Present Habitual Tense) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 4-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (4.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (4.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (4.2.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पढ़ता_है_4_2»):",
                    "acceptedAnswers": [
                        "पढ़ता_है_4_2"
                    ],
                    "explanation": "The target keyword was: 【पढ़ता_है_4_2】"
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
        "objective": "Comprehensive mastery of सामान्य वर्तमान काल (Present Habitual Tense).",
        "presentation": {
            "explanation": "इस पाठ में हम « सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) » (भाग 3) और सामान्य वर्तमान काल (Present Habitual Tense) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (4.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (4.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (4.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सामान्य वर्तमान काल (Present Habitual Tense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सामान्य वर्तमान काल (Present Habitual Tense) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (4.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (4.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (4.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (4.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (4.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (4.3.3)।"
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
                    "prompt": "कौन सा वाक्य « सामान्य वर्तमान काल (Present Habitual Tense) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 4-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (4.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (4.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (4.3.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पढ़ता_है_4_3»):",
                    "acceptedAnswers": [
                        "पढ़ता_है_4_3"
                    ],
                    "explanation": "The target keyword was: 【पढ़ता_है_4_3】"
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
        "objective": "Comprehensive mastery of सामान्य वर्तमान काल (Present Habitual Tense).",
        "presentation": {
            "explanation": "इस पाठ में हम « सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) » (भाग 4) और सामान्य वर्तमान काल (Present Habitual Tense) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (4.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (4.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (4.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सामान्य वर्तमान काल (Present Habitual Tense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सामान्य वर्तमान काल (Present Habitual Tense) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (4.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (4.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (4.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (4.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (4.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (4.4.3)।"
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
                    "prompt": "कौन सा वाक्य « सामान्य वर्तमान काल (Present Habitual Tense) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 4-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (4.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (4.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (4.4.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पढ़ता_है_4_4»):",
                    "acceptedAnswers": [
                        "पढ़ता_है_4_4"
                    ],
                    "explanation": "The target keyword was: 【पढ़ता_है_4_4】"
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
        "objective": "Comprehensive mastery of सामान्य वर्तमान काल (Present Habitual Tense).",
        "presentation": {
            "explanation": "इस पाठ में हम « सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) » (भाग 5) और सामान्य वर्तमान काल (Present Habitual Tense) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (4.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (4.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (4.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सामान्य वर्तमान काल (Present Habitual Tense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सामान्य वर्तमान काल (Present Habitual Tense) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (4.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (4.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (4.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सामान्य वर्तमान काल (Present Habitual Tense - ता/ती/ते) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (4.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (4.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (4.5.3)।"
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
                    "prompt": "कौन सा वाक्य « सामान्य वर्तमान काल (Present Habitual Tense) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 4-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (4.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (4.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (4.5.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पढ़ता_है_4_5»):",
                    "acceptedAnswers": [
                        "पढ़ता_है_4_5"
                    ],
                    "explanation": "The target keyword was: 【पढ़ता_है_4_5】"
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
        "objective": "Comprehensive mastery of वर्तमान निरंतर काल (Present Continuous: रहा/रही है).",
        "presentation": {
            "explanation": "इस पाठ में हम « अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) » (भाग 1) और वर्तमान निरंतर काल (Present Continuous: रहा/रही है) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (5.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (5.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (5.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for वर्तमान निरंतर काल (Present Continuous: रहा/रही है)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« वर्तमान निरंतर काल (Present Continuous: रहा/रही है) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (5.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (5.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (5.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (5.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (5.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (5.1.3)।"
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
                    "prompt": "कौन सा वाक्य « वर्तमान निरंतर काल (Present Continuous: रहा/रही है) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 5-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (5.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (5.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (5.1.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पढ़_रहा_है_5_1»):",
                    "acceptedAnswers": [
                        "पढ़_रहा_है_5_1"
                    ],
                    "explanation": "The target keyword was: 【पढ़_रहा_है_5_1】"
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
        "objective": "Comprehensive mastery of वर्तमान निरंतर काल (Present Continuous: रहा/रही है).",
        "presentation": {
            "explanation": "इस पाठ में हम « अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) » (भाग 2) और वर्तमान निरंतर काल (Present Continuous: रहा/रही है) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (5.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (5.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (5.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for वर्तमान निरंतर काल (Present Continuous: रहा/रही है)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« वर्तमान निरंतर काल (Present Continuous: रहा/रही है) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (5.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (5.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (5.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (5.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (5.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (5.2.3)।"
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
                    "prompt": "कौन सा वाक्य « वर्तमान निरंतर काल (Present Continuous: रहा/रही है) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 5-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (5.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (5.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (5.2.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पढ़_रहा_है_5_2»):",
                    "acceptedAnswers": [
                        "पढ़_रहा_है_5_2"
                    ],
                    "explanation": "The target keyword was: 【पढ़_रहा_है_5_2】"
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
        "objective": "Comprehensive mastery of वर्तमान निरंतर काल (Present Continuous: रहा/रही है).",
        "presentation": {
            "explanation": "इस पाठ में हम « अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) » (भाग 3) और वर्तमान निरंतर काल (Present Continuous: रहा/रही है) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (5.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (5.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (5.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for वर्तमान निरंतर काल (Present Continuous: रहा/रही है)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« वर्तमान निरंतर काल (Present Continuous: रहा/रही है) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (5.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (5.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (5.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (5.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (5.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (5.3.3)।"
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
                    "prompt": "कौन सा वाक्य « वर्तमान निरंतर काल (Present Continuous: रहा/रही है) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 5-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (5.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (5.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (5.3.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पढ़_रहा_है_5_3»):",
                    "acceptedAnswers": [
                        "पढ़_रहा_है_5_3"
                    ],
                    "explanation": "The target keyword was: 【पढ़_रहा_है_5_3】"
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
        "objective": "Comprehensive mastery of वर्तमान निरंतर काल (Present Continuous: रहा/रही है).",
        "presentation": {
            "explanation": "इस पाठ में हम « अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) » (भाग 4) और वर्तमान निरंतर काल (Present Continuous: रहा/रही है) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (5.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (5.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (5.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for वर्तमान निरंतर काल (Present Continuous: रहा/रही है)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« वर्तमान निरंतर काल (Present Continuous: रहा/रही है) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (5.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (5.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (5.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (5.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (5.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (5.4.3)।"
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
                    "prompt": "कौन सा वाक्य « वर्तमान निरंतर काल (Present Continuous: रहा/रही है) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 5-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (5.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (5.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (5.4.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पढ़_रहा_है_5_4»):",
                    "acceptedAnswers": [
                        "पढ़_रहा_है_5_4"
                    ],
                    "explanation": "The target keyword was: 【पढ़_रहा_है_5_4】"
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
        "objective": "Comprehensive mastery of वर्तमान निरंतर काल (Present Continuous: रहा/रही है).",
        "presentation": {
            "explanation": "इस पाठ में हम « अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) » (भाग 5) और वर्तमान निरंतर काल (Present Continuous: रहा/रही है) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (5.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (5.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (5.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for वर्तमान निरंतर काल (Present Continuous: रहा/रही है)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« वर्तमान निरंतर काल (Present Continuous: रहा/रही है) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (5.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (5.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (5.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अपूर्ण वर्तमान काल (Present Continuous Tense - रहा/रही/रहे) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (5.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (5.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (5.5.3)।"
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
                    "prompt": "कौन सा वाक्य « वर्तमान निरंतर काल (Present Continuous: रहा/रही है) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 5-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (5.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (5.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (5.5.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पढ़_रहा_है_5_5»):",
                    "acceptedAnswers": [
                        "पढ़_रहा_है_5_5"
                    ],
                    "explanation": "The target keyword was: 【पढ़_रहा_है_5_5】"
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
        "objective": "Comprehensive mastery of भूतकाल और ने परसर्ग का नियम (Simple Past with ने).",
        "presentation": {
            "explanation": "इस पाठ में हम « सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) » (भाग 1) और भूतकाल और ने परसर्ग का नियम (Simple Past with ने) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (6.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (6.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (6.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भूतकाल और ने परसर्ग का नियम (Simple Past with ने)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भूतकाल और ने परसर्ग का नियम (Simple Past with ने) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (6.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (6.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (6.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (6.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (6.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (6.1.3)।"
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
                    "prompt": "कौन सा वाक्य « भूतकाल और ने परसर्ग का नियम (Simple Past with ने) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 6-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (6.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (6.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (6.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («देखा_6_1»):",
                    "acceptedAnswers": [
                        "देखा_6_1"
                    ],
                    "explanation": "The target keyword was: 【देखा_6_1】"
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
        "objective": "Comprehensive mastery of भूतकाल और ने परसर्ग का नियम (Simple Past with ने).",
        "presentation": {
            "explanation": "इस पाठ में हम « सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) » (भाग 2) और भूतकाल और ने परसर्ग का नियम (Simple Past with ने) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (6.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (6.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (6.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भूतकाल और ने परसर्ग का नियम (Simple Past with ने)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भूतकाल और ने परसर्ग का नियम (Simple Past with ने) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (6.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (6.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (6.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (6.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (6.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (6.2.3)।"
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
                    "prompt": "कौन सा वाक्य « भूतकाल और ने परसर्ग का नियम (Simple Past with ने) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 6-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (6.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (6.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (6.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («देखा_6_2»):",
                    "acceptedAnswers": [
                        "देखा_6_2"
                    ],
                    "explanation": "The target keyword was: 【देखा_6_2】"
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
        "objective": "Comprehensive mastery of भूतकाल और ने परसर्ग का नियम (Simple Past with ने).",
        "presentation": {
            "explanation": "इस पाठ में हम « सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) » (भाग 3) और भूतकाल और ने परसर्ग का नियम (Simple Past with ने) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (6.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (6.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (6.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भूतकाल और ने परसर्ग का नियम (Simple Past with ने)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भूतकाल और ने परसर्ग का नियम (Simple Past with ने) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (6.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (6.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (6.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (6.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (6.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (6.3.3)।"
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
                    "prompt": "कौन सा वाक्य « भूतकाल और ने परसर्ग का नियम (Simple Past with ने) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 6-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (6.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (6.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (6.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («देखा_6_3»):",
                    "acceptedAnswers": [
                        "देखा_6_3"
                    ],
                    "explanation": "The target keyword was: 【देखा_6_3】"
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
        "objective": "Comprehensive mastery of भूतकाल और ने परसर्ग का नियम (Simple Past with ने).",
        "presentation": {
            "explanation": "इस पाठ में हम « सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) » (भाग 4) और भूतकाल और ने परसर्ग का नियम (Simple Past with ने) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (6.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (6.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (6.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भूतकाल और ने परसर्ग का नियम (Simple Past with ने)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भूतकाल और ने परसर्ग का नियम (Simple Past with ने) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (6.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (6.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (6.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (6.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (6.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (6.4.3)।"
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
                    "prompt": "कौन सा वाक्य « भूतकाल और ने परसर्ग का नियम (Simple Past with ने) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 6-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (6.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (6.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (6.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («देखा_6_4»):",
                    "acceptedAnswers": [
                        "देखा_6_4"
                    ],
                    "explanation": "The target keyword was: 【देखा_6_4】"
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
        "objective": "Comprehensive mastery of भूतकाल और ने परसर्ग का नियम (Simple Past with ने).",
        "presentation": {
            "explanation": "इस पाठ में हम « सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) » (भाग 5) और भूतकाल और ने परसर्ग का नियम (Simple Past with ने) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (6.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (6.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (6.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भूतकाल और ने परसर्ग का नियम (Simple Past with ने)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भूतकाल और ने परसर्ग का नियम (Simple Past with ने) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (6.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (6.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (6.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सामान्य भूतकाल और ने-नियम (Simple Past & Ergative ने) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (6.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (6.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (6.5.3)।"
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
                    "prompt": "कौन सा वाक्य « भूतकाल और ने परसर्ग का नियम (Simple Past with ने) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 6-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (6.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (6.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (6.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («देखा_6_5»):",
                    "acceptedAnswers": [
                        "देखा_6_5"
                    ],
                    "explanation": "The target keyword was: 【देखा_6_5】"
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
        "objective": "Comprehensive mastery of पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous).",
        "presentation": {
            "explanation": "इस पाठ में हम « पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) » (भाग 1) और पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (7.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (7.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (7.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (7.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (7.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (7.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (7.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (7.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (7.1.3)।"
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
                    "prompt": "कौन सा वाक्य « पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 7-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (7.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (7.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (7.1.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («गया_था_7_1»):",
                    "acceptedAnswers": [
                        "गया_था_7_1"
                    ],
                    "explanation": "The target keyword was: 【गया_था_7_1】"
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
        "objective": "Comprehensive mastery of पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous).",
        "presentation": {
            "explanation": "इस पाठ में हम « पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) » (भाग 2) और पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (7.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (7.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (7.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (7.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (7.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (7.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (7.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (7.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (7.2.3)।"
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
                    "prompt": "कौन सा वाक्य « पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 7-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (7.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (7.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (7.2.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («गया_था_7_2»):",
                    "acceptedAnswers": [
                        "गया_था_7_2"
                    ],
                    "explanation": "The target keyword was: 【गया_था_7_2】"
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
        "objective": "Comprehensive mastery of पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous).",
        "presentation": {
            "explanation": "इस पाठ में हम « पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) » (भाग 3) और पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (7.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (7.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (7.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (7.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (7.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (7.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (7.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (7.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (7.3.3)।"
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
                    "prompt": "कौन सा वाक्य « पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 7-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (7.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (7.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (7.3.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («गया_था_7_3»):",
                    "acceptedAnswers": [
                        "गया_था_7_3"
                    ],
                    "explanation": "The target keyword was: 【गया_था_7_3】"
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
        "objective": "Comprehensive mastery of पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous).",
        "presentation": {
            "explanation": "इस पाठ में हम « पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) » (भाग 4) और पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (7.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (7.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (7.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (7.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (7.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (7.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (7.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (7.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (7.4.3)।"
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
                    "prompt": "कौन सा वाक्य « पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 7-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (7.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (7.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (7.4.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («गया_था_7_4»):",
                    "acceptedAnswers": [
                        "गया_था_7_4"
                    ],
                    "explanation": "The target keyword was: 【गया_था_7_4】"
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
        "objective": "Comprehensive mastery of पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous).",
        "presentation": {
            "explanation": "इस पाठ में हम « पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) » (भाग 5) और पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (7.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (7.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (7.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (7.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (7.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (7.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पूर्ण भूतकाल और अपूर्ण भूतकाल (Past Perfect & Imperfect) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (7.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (7.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (7.5.3)।"
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
                    "prompt": "कौन सा वाक्य « पूर्ण और अपूर्ण भूतकाल (Past Perfect & Continuous) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 7-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (7.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (7.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (7.5.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («गया_था_7_5»):",
                    "acceptedAnswers": [
                        "गया_था_7_5"
                    ],
                    "explanation": "The target keyword was: 【गया_था_7_5】"
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
        "objective": "Comprehensive mastery of भविष्यत् काल और अनुरोध (Future Tense & Polite Requests).",
        "presentation": {
            "explanation": "इस पाठ में हम « भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) » (भाग 1) और भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (8.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (8.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (8.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भविष्यत् काल और अनुरोध (Future Tense & Polite Requests)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (8.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (8.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (8.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (8.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (8.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (8.1.3)।"
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
                    "prompt": "कौन सा वाक्य « भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 8-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (8.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (8.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (8.1.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («जाएगा_8_1»):",
                    "acceptedAnswers": [
                        "जाएगा_8_1"
                    ],
                    "explanation": "The target keyword was: 【जाएगा_8_1】"
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
        "objective": "Comprehensive mastery of भविष्यत् काल और अनुरोध (Future Tense & Polite Requests).",
        "presentation": {
            "explanation": "इस पाठ में हम « भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) » (भाग 2) और भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (8.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (8.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (8.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भविष्यत् काल और अनुरोध (Future Tense & Polite Requests)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (8.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (8.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (8.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (8.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (8.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (8.2.3)।"
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
                    "prompt": "कौन सा वाक्य « भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 8-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (8.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (8.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (8.2.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («जाएगा_8_2»):",
                    "acceptedAnswers": [
                        "जाएगा_8_2"
                    ],
                    "explanation": "The target keyword was: 【जाएगा_8_2】"
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
        "objective": "Comprehensive mastery of भविष्यत् काल और अनुरोध (Future Tense & Polite Requests).",
        "presentation": {
            "explanation": "इस पाठ में हम « भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) » (भाग 3) और भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (8.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (8.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (8.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भविष्यत् काल और अनुरोध (Future Tense & Polite Requests)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (8.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (8.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (8.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (8.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (8.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (8.3.3)।"
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
                    "prompt": "कौन सा वाक्य « भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 8-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (8.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (8.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (8.3.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («जाएगा_8_3»):",
                    "acceptedAnswers": [
                        "जाएगा_8_3"
                    ],
                    "explanation": "The target keyword was: 【जाएगा_8_3】"
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
        "objective": "Comprehensive mastery of भविष्यत् काल और अनुरोध (Future Tense & Polite Requests).",
        "presentation": {
            "explanation": "इस पाठ में हम « भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) » (भाग 4) और भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (8.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (8.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (8.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भविष्यत् काल और अनुरोध (Future Tense & Polite Requests)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (8.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (8.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (8.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (8.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (8.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (8.4.3)।"
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
                    "prompt": "कौन सा वाक्य « भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 8-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (8.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (8.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (8.4.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («जाएगा_8_4»):",
                    "acceptedAnswers": [
                        "जाएगा_8_4"
                    ],
                    "explanation": "The target keyword was: 【जाएगा_8_4】"
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
        "objective": "Comprehensive mastery of भविष्यत् काल और अनुरोध (Future Tense & Polite Requests).",
        "presentation": {
            "explanation": "इस पाठ में हम « भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) » (भाग 5) और भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (8.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (8.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (8.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भविष्यत् काल और अनुरोध (Future Tense & Polite Requests)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (8.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (8.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (8.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« भविष्यत् काल और विनम्र अनुरोध (Future Tense & Polite) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (8.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (8.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (8.5.3)।"
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
                    "prompt": "कौन सा वाक्य « भविष्यत् काल और अनुरोध (Future Tense & Polite Requests) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 8-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (8.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (8.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (8.5.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («जाएगा_8_5»):",
                    "acceptedAnswers": [
                        "जाएगा_8_5"
                    ],
                    "explanation": "The target keyword was: 【जाएगा_8_5】"
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
        "objective": "Comprehensive mastery of चाहिए का प्रयोग (Obligation with चाहिए).",
        "presentation": {
            "explanation": "इस पाठ में हम « अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) » (भाग 1) और चाहिए का प्रयोग (Obligation with चाहिए) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (9.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (9.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (9.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for चाहिए का प्रयोग (Obligation with चाहिए)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« चाहिए का प्रयोग (Obligation with चाहिए) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (9.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (9.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (9.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (9.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (9.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (9.1.3)।"
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
                    "prompt": "कौन सा वाक्य « चाहिए का प्रयोग (Obligation with चाहिए) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 9-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (9.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (9.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (9.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («चाहिए_9_1»):",
                    "acceptedAnswers": [
                        "चाहिए_9_1"
                    ],
                    "explanation": "The target keyword was: 【चाहिए_9_1】"
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
        "objective": "Comprehensive mastery of चाहिए का प्रयोग (Obligation with चाहिए).",
        "presentation": {
            "explanation": "इस पाठ में हम « अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) » (भाग 2) और चाहिए का प्रयोग (Obligation with चाहिए) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (9.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (9.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (9.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for चाहिए का प्रयोग (Obligation with चाहिए)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« चाहिए का प्रयोग (Obligation with चाहिए) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (9.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (9.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (9.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (9.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (9.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (9.2.3)।"
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
                    "prompt": "कौन सा वाक्य « चाहिए का प्रयोग (Obligation with चाहिए) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 9-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (9.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (9.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (9.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («चाहिए_9_2»):",
                    "acceptedAnswers": [
                        "चाहिए_9_2"
                    ],
                    "explanation": "The target keyword was: 【चाहिए_9_2】"
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
        "objective": "Comprehensive mastery of चाहिए का प्रयोग (Obligation with चाहिए).",
        "presentation": {
            "explanation": "इस पाठ में हम « अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) » (भाग 3) और चाहिए का प्रयोग (Obligation with चाहिए) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (9.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (9.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (9.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for चाहिए का प्रयोग (Obligation with चाहिए)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« चाहिए का प्रयोग (Obligation with चाहिए) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (9.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (9.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (9.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (9.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (9.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (9.3.3)।"
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
                    "prompt": "कौन सा वाक्य « चाहिए का प्रयोग (Obligation with चाहिए) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 9-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (9.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (9.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (9.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («चाहिए_9_3»):",
                    "acceptedAnswers": [
                        "चाहिए_9_3"
                    ],
                    "explanation": "The target keyword was: 【चाहिए_9_3】"
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
        "objective": "Comprehensive mastery of चाहिए का प्रयोग (Obligation with चाहिए).",
        "presentation": {
            "explanation": "इस पाठ में हम « अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) » (भाग 4) और चाहिए का प्रयोग (Obligation with चाहिए) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (9.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (9.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (9.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for चाहिए का प्रयोग (Obligation with चाहिए)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« चाहिए का प्रयोग (Obligation with चाहिए) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (9.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (9.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (9.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (9.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (9.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (9.4.3)।"
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
                    "prompt": "कौन सा वाक्य « चाहिए का प्रयोग (Obligation with चाहिए) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 9-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (9.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (9.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (9.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («चाहिए_9_4»):",
                    "acceptedAnswers": [
                        "चाहिए_9_4"
                    ],
                    "explanation": "The target keyword was: 【चाहिए_9_4】"
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
        "objective": "Comprehensive mastery of चाहिए का प्रयोग (Obligation with चाहिए).",
        "presentation": {
            "explanation": "इस पाठ में हम « अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) » (भाग 5) और चाहिए का प्रयोग (Obligation with चाहिए) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (9.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (9.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (9.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for चाहिए का प्रयोग (Obligation with चाहिए)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« चाहिए का प्रयोग (Obligation with चाहिए) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (9.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (9.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (9.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अनिवार्यता और चाहिए संरचनाएं (Obligation with चाहिए) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (9.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (9.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (9.5.3)।"
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
                    "prompt": "कौन सा वाक्य « चाहिए का प्रयोग (Obligation with चाहिए) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 9-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (9.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (9.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (9.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («चाहिए_9_5»):",
                    "acceptedAnswers": [
                        "चाहिए_9_5"
                    ],
                    "explanation": "The target keyword was: 【चाहिए_9_5】"
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
        "objective": "Comprehensive mastery of बाध्यता पड़ना और होना (Compulsion with पड़ना).",
        "presentation": {
            "explanation": "इस पाठ में हम « मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) » (भाग 1) और बाध्यता पड़ना और होना (Compulsion with पड़ना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (10.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (10.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (10.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for बाध्यता पड़ना और होना (Compulsion with पड़ना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« बाध्यता पड़ना और होना (Compulsion with पड़ना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (10.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (10.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (10.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (10.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (10.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (10.1.3)।"
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
                    "prompt": "कौन सा वाक्य « बाध्यता पड़ना और होना (Compulsion with पड़ना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 10-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (10.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (10.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (10.1.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पड़ता_है_10_1»):",
                    "acceptedAnswers": [
                        "पड़ता_है_10_1"
                    ],
                    "explanation": "The target keyword was: 【पड़ता_है_10_1】"
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
        "objective": "Comprehensive mastery of बाध्यता पड़ना और होना (Compulsion with पड़ना).",
        "presentation": {
            "explanation": "इस पाठ में हम « मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) » (भाग 2) और बाध्यता पड़ना और होना (Compulsion with पड़ना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (10.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (10.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (10.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for बाध्यता पड़ना और होना (Compulsion with पड़ना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« बाध्यता पड़ना और होना (Compulsion with पड़ना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (10.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (10.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (10.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (10.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (10.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (10.2.3)।"
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
                    "prompt": "कौन सा वाक्य « बाध्यता पड़ना और होना (Compulsion with पड़ना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 10-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (10.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (10.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (10.2.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पड़ता_है_10_2»):",
                    "acceptedAnswers": [
                        "पड़ता_है_10_2"
                    ],
                    "explanation": "The target keyword was: 【पड़ता_है_10_2】"
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
        "objective": "Comprehensive mastery of बाध्यता पड़ना और होना (Compulsion with पड़ना).",
        "presentation": {
            "explanation": "इस पाठ में हम « मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) » (भाग 3) और बाध्यता पड़ना और होना (Compulsion with पड़ना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (10.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (10.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (10.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for बाध्यता पड़ना और होना (Compulsion with पड़ना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« बाध्यता पड़ना और होना (Compulsion with पड़ना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (10.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (10.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (10.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (10.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (10.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (10.3.3)।"
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
                    "prompt": "कौन सा वाक्य « बाध्यता पड़ना और होना (Compulsion with पड़ना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 10-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (10.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (10.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (10.3.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पड़ता_है_10_3»):",
                    "acceptedAnswers": [
                        "पड़ता_है_10_3"
                    ],
                    "explanation": "The target keyword was: 【पड़ता_है_10_3】"
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
        "objective": "Comprehensive mastery of बाध्यता पड़ना और होना (Compulsion with पड़ना).",
        "presentation": {
            "explanation": "इस पाठ में हम « मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) » (भाग 4) और बाध्यता पड़ना और होना (Compulsion with पड़ना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (10.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (10.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (10.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for बाध्यता पड़ना और होना (Compulsion with पड़ना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« बाध्यता पड़ना और होना (Compulsion with पड़ना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (10.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (10.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (10.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (10.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (10.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (10.4.3)।"
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
                    "prompt": "कौन सा वाक्य « बाध्यता पड़ना और होना (Compulsion with पड़ना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 10-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (10.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (10.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (10.4.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पड़ता_है_10_4»):",
                    "acceptedAnswers": [
                        "पड़ता_है_10_4"
                    ],
                    "explanation": "The target keyword was: 【पड़ता_है_10_4】"
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
        "objective": "Comprehensive mastery of बाध्यता पड़ना और होना (Compulsion with पड़ना).",
        "presentation": {
            "explanation": "इस पाठ में हम « मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) » (भाग 5) और बाध्यता पड़ना और होना (Compulsion with पड़ना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (10.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (10.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (10.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for बाध्यता पड़ना और होना (Compulsion with पड़ना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« बाध्यता पड़ना और होना (Compulsion with पड़ना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (10.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (10.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (10.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« मजबूरी और बाध्यता: पड़ना/होना (Compulsion with पड़ना) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (10.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (10.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (10.5.3)।"
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
                    "prompt": "कौन सा वाक्य « बाध्यता पड़ना और होना (Compulsion with पड़ना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 10-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (10.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (10.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (10.5.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («पड़ता_है_10_5»):",
                    "acceptedAnswers": [
                        "पड़ता_है_10_5"
                    ],
                    "explanation": "The target keyword was: 【पड़ता_है_10_5】"
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
        "objective": "Comprehensive mastery of स्वामित्व का/के/की और के पास (Possession Expressions).",
        "presentation": {
            "explanation": "इस पाठ में हम « अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) » (भाग 1) और स्वामित्व का/के/की और के पास (Possession Expressions) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (11.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (11.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (11.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for स्वामित्व का/के/की और के पास (Possession Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« स्वामित्व का/के/की और के पास (Possession Expressions) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (11.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (11.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (11.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (11.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (11.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (11.1.3)।"
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
                    "prompt": "कौन सा वाक्य « स्वामित्व का/के/की और के पास (Possession Expressions) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 11-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (11.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (11.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (11.1.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («के_पास_11_1»):",
                    "acceptedAnswers": [
                        "के_पास_11_1"
                    ],
                    "explanation": "The target keyword was: 【के_पास_11_1】"
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
        "objective": "Comprehensive mastery of स्वामित्व का/के/की और के पास (Possession Expressions).",
        "presentation": {
            "explanation": "इस पाठ में हम « अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) » (भाग 2) और स्वामित्व का/के/की और के पास (Possession Expressions) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (11.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (11.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (11.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for स्वामित्व का/के/की और के पास (Possession Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« स्वामित्व का/के/की और के पास (Possession Expressions) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (11.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (11.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (11.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (11.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (11.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (11.2.3)।"
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
                    "prompt": "कौन सा वाक्य « स्वामित्व का/के/की और के पास (Possession Expressions) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 11-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (11.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (11.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (11.2.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («के_पास_11_2»):",
                    "acceptedAnswers": [
                        "के_पास_11_2"
                    ],
                    "explanation": "The target keyword was: 【के_पास_11_2】"
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
        "objective": "Comprehensive mastery of स्वामित्व का/के/की और के पास (Possession Expressions).",
        "presentation": {
            "explanation": "इस पाठ में हम « अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) » (भाग 3) और स्वामित्व का/के/की और के पास (Possession Expressions) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (11.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (11.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (11.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for स्वामित्व का/के/की और के पास (Possession Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« स्वामित्व का/के/की और के पास (Possession Expressions) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (11.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (11.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (11.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (11.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (11.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (11.3.3)।"
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
                    "prompt": "कौन सा वाक्य « स्वामित्व का/के/की और के पास (Possession Expressions) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 11-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (11.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (11.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (11.3.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («के_पास_11_3»):",
                    "acceptedAnswers": [
                        "के_पास_11_3"
                    ],
                    "explanation": "The target keyword was: 【के_पास_11_3】"
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
        "objective": "Comprehensive mastery of स्वामित्व का/के/की और के पास (Possession Expressions).",
        "presentation": {
            "explanation": "इस पाठ में हम « अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) » (भाग 4) और स्वामित्व का/के/की और के पास (Possession Expressions) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (11.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (11.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (11.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for स्वामित्व का/के/की और के पास (Possession Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« स्वामित्व का/के/की और के पास (Possession Expressions) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (11.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (11.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (11.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (11.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (11.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (11.4.3)।"
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
                    "prompt": "कौन सा वाक्य « स्वामित्व का/के/की और के पास (Possession Expressions) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 11-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (11.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (11.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (11.4.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («के_पास_11_4»):",
                    "acceptedAnswers": [
                        "के_पास_11_4"
                    ],
                    "explanation": "The target keyword was: 【के_पास_11_4】"
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
        "objective": "Comprehensive mastery of स्वामित्व का/के/की और के पास (Possession Expressions).",
        "presentation": {
            "explanation": "इस पाठ में हम « अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) » (भाग 5) और स्वामित्व का/के/की और के पास (Possession Expressions) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (11.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (11.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (11.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for स्वामित्व का/के/की और के पास (Possession Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« स्वामित्व का/के/की और के पास (Possession Expressions) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (11.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (11.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (11.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अधिकार और स्वामित्व: का/के/की एवं के पास (Possession) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (11.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (11.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (11.5.3)।"
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
                    "prompt": "कौन सा वाक्य « स्वामित्व का/के/की और के पास (Possession Expressions) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 11-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (11.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (11.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (11.5.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («के_पास_11_5»):",
                    "acceptedAnswers": [
                        "के_पास_11_5"
                    ],
                    "explanation": "The target keyword was: 【के_पास_11_5】"
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
        "objective": "Comprehensive mastery of संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs).",
        "presentation": {
            "explanation": "इस पाठ में हम « संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) » (भाग 1) और संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (12.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (12.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (12.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (12.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (12.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (12.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (12.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (12.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (12.1.3)।"
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
                    "prompt": "कौन सा वाक्य « संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 12-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (12.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (12.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (12.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ले_लिया_12_1»):",
                    "acceptedAnswers": [
                        "ले_लिया_12_1"
                    ],
                    "explanation": "The target keyword was: 【ले_लिया_12_1】"
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
        "objective": "Comprehensive mastery of संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs).",
        "presentation": {
            "explanation": "इस पाठ में हम « संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) » (भाग 2) और संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (12.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (12.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (12.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (12.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (12.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (12.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (12.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (12.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (12.2.3)।"
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
                    "prompt": "कौन सा वाक्य « संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 12-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (12.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (12.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (12.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ले_लिया_12_2»):",
                    "acceptedAnswers": [
                        "ले_लिया_12_2"
                    ],
                    "explanation": "The target keyword was: 【ले_लिया_12_2】"
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
        "objective": "Comprehensive mastery of संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs).",
        "presentation": {
            "explanation": "इस पाठ में हम « संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) » (भाग 3) और संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (12.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (12.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (12.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (12.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (12.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (12.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (12.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (12.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (12.3.3)।"
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
                    "prompt": "कौन सा वाक्य « संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 12-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (12.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (12.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (12.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ले_लिया_12_3»):",
                    "acceptedAnswers": [
                        "ले_लिया_12_3"
                    ],
                    "explanation": "The target keyword was: 【ले_लिया_12_3】"
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
        "objective": "Comprehensive mastery of संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs).",
        "presentation": {
            "explanation": "इस पाठ में हम « संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) » (भाग 4) और संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (12.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (12.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (12.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (12.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (12.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (12.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (12.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (12.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (12.4.3)।"
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
                    "prompt": "कौन सा वाक्य « संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 12-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (12.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (12.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (12.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ले_लिया_12_4»):",
                    "acceptedAnswers": [
                        "ले_लिया_12_4"
                    ],
                    "explanation": "The target keyword was: 【ले_लिया_12_4】"
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
        "objective": "Comprehensive mastery of संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs).",
        "presentation": {
            "explanation": "इस पाठ में हम « संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) » (भाग 5) और संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (12.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (12.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (12.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (12.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (12.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (12.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संयुक्त क्रियाएं और सहायक धातुएं (Compound Verbs) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (12.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (12.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (12.5.3)।"
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
                    "prompt": "कौन सा वाक्य « संयुक्त क्रियाएं लेना/देना/जाना (Compound Verbs) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 12-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (12.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (12.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (12.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ले_लिया_12_5»):",
                    "acceptedAnswers": [
                        "ले_लिया_12_5"
                    ],
                    "explanation": "The target keyword was: 【ले_लिया_12_5】"
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
        "objective": "Comprehensive mastery of संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood).",
        "presentation": {
            "explanation": "इस पाठ में हम « संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) » (भाग 1) और संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (13.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (13.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (13.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (13.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (13.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (13.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (13.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (13.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (13.1.3)।"
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
                    "prompt": "कौन सा वाक्य « संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 13-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (13.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (13.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (13.1.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («शायद_13_1»):",
                    "acceptedAnswers": [
                        "शायद_13_1"
                    ],
                    "explanation": "The target keyword was: 【शायद_13_1】"
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
        "objective": "Comprehensive mastery of संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood).",
        "presentation": {
            "explanation": "इस पाठ में हम « संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) » (भाग 2) और संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (13.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (13.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (13.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (13.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (13.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (13.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (13.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (13.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (13.2.3)।"
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
                    "prompt": "कौन सा वाक्य « संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 13-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (13.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (13.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (13.2.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («शायद_13_2»):",
                    "acceptedAnswers": [
                        "शायद_13_2"
                    ],
                    "explanation": "The target keyword was: 【शायद_13_2】"
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
        "objective": "Comprehensive mastery of संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood).",
        "presentation": {
            "explanation": "इस पाठ में हम « संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) » (भाग 3) और संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (13.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (13.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (13.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (13.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (13.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (13.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (13.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (13.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (13.3.3)।"
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
                    "prompt": "कौन सा वाक्य « संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 13-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (13.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (13.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (13.3.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («शायद_13_3»):",
                    "acceptedAnswers": [
                        "शायद_13_3"
                    ],
                    "explanation": "The target keyword was: 【शायद_13_3】"
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
        "objective": "Comprehensive mastery of संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood).",
        "presentation": {
            "explanation": "इस पाठ में हम « संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) » (भाग 4) और संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (13.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (13.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (13.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (13.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (13.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (13.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (13.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (13.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (13.4.3)।"
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
                    "prompt": "कौन सा वाक्य « संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 13-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (13.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (13.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (13.4.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («शायद_13_4»):",
                    "acceptedAnswers": [
                        "शायद_13_4"
                    ],
                    "explanation": "The target keyword was: 【शायद_13_4】"
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
        "objective": "Comprehensive mastery of संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood).",
        "presentation": {
            "explanation": "इस पाठ में हम « संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) » (भाग 5) और संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (13.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (13.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (13.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (13.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (13.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (13.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संभावनार्थ और इच्छार्थक क्रियाएं (Subjunctive Mood) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (13.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (13.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (13.5.3)।"
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
                    "prompt": "कौन सा वाक्य « संभावना और इच्छा सूचक क्रियाएं (Subjunctive Mood) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 13-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (13.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (13.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (13.5.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («शायद_13_5»):",
                    "acceptedAnswers": [
                        "शायद_13_5"
                    ],
                    "explanation": "The target keyword was: 【शायद_13_5】"
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
        "objective": "Comprehensive mastery of कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर).",
        "presentation": {
            "explanation": "इस पाठ में हम « पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) » (भाग 1) और कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (14.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (14.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (14.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (14.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (14.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (14.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (14.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (14.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (14.1.3)।"
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
                    "prompt": "कौन सा वाक्य « कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 14-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (14.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (14.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (14.1.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («खाकर_14_1»):",
                    "acceptedAnswers": [
                        "खाकर_14_1"
                    ],
                    "explanation": "The target keyword was: 【खाकर_14_1】"
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
        "objective": "Comprehensive mastery of कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर).",
        "presentation": {
            "explanation": "इस पाठ में हम « पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) » (भाग 2) और कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (14.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (14.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (14.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (14.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (14.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (14.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (14.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (14.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (14.2.3)।"
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
                    "prompt": "कौन सा वाक्य « कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 14-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (14.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (14.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (14.2.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («खाकर_14_2»):",
                    "acceptedAnswers": [
                        "खाकर_14_2"
                    ],
                    "explanation": "The target keyword was: 【खाकर_14_2】"
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
        "objective": "Comprehensive mastery of कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर).",
        "presentation": {
            "explanation": "इस पाठ में हम « पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) » (भाग 3) और कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (14.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (14.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (14.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (14.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (14.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (14.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (14.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (14.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (14.3.3)।"
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
                    "prompt": "कौन सा वाक्य « कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 14-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (14.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (14.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (14.3.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («खाकर_14_3»):",
                    "acceptedAnswers": [
                        "खाकर_14_3"
                    ],
                    "explanation": "The target keyword was: 【खाकर_14_3】"
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
        "objective": "Comprehensive mastery of कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर).",
        "presentation": {
            "explanation": "इस पाठ में हम « पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) » (भाग 4) और कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (14.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (14.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (14.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (14.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (14.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (14.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (14.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (14.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (14.4.3)।"
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
                    "prompt": "कौन सा वाक्य « कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 14-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (14.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (14.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (14.4.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («खाकर_14_4»):",
                    "acceptedAnswers": [
                        "खाकर_14_4"
                    ],
                    "explanation": "The target keyword was: 【खाकर_14_4】"
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
        "objective": "Comprehensive mastery of कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर).",
        "presentation": {
            "explanation": "इस पाठ में हम « पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) » (भाग 5) और कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (14.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (14.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (14.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (14.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (14.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (14.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पूर्वकालिक क्रिया: कर-प्रत्यय (Conjunctive Participles) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (14.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (14.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (14.5.3)।"
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
                    "prompt": "कौन सा वाक्य « कर प्रत्यय वाली पूर्वकालिक क्रिया (Conjunctive Participles with कर) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 14-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (14.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (14.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (14.5.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («खाकर_14_5»):",
                    "acceptedAnswers": [
                        "खाकर_14_5"
                    ],
                    "explanation": "The target keyword was: 【खाकर_14_5】"
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
        "objective": "Comprehensive mastery of जो...वह संबंधवाचक वाक्य (Relative Correlatives).",
        "presentation": {
            "explanation": "इस पाठ में हम « संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) » (भाग 1) और जो...वह संबंधवाचक वाक्य (Relative Correlatives) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (15.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (15.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (15.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for जो...वह संबंधवाचक वाक्य (Relative Correlatives)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« जो...वह संबंधवाचक वाक्य (Relative Correlatives) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (15.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (15.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (15.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (15.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (15.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (15.1.3)।"
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
                    "prompt": "कौन सा वाक्य « जो...वह संबंधवाचक वाक्य (Relative Correlatives) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 15-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (15.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (15.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (15.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («जो_वह_15_1»):",
                    "acceptedAnswers": [
                        "जो_वह_15_1"
                    ],
                    "explanation": "The target keyword was: 【जो_वह_15_1】"
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
        "objective": "Comprehensive mastery of जो...वह संबंधवाचक वाक्य (Relative Correlatives).",
        "presentation": {
            "explanation": "इस पाठ में हम « संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) » (भाग 2) और जो...वह संबंधवाचक वाक्य (Relative Correlatives) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (15.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (15.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (15.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for जो...वह संबंधवाचक वाक्य (Relative Correlatives)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« जो...वह संबंधवाचक वाक्य (Relative Correlatives) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (15.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (15.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (15.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (15.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (15.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (15.2.3)।"
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
                    "prompt": "कौन सा वाक्य « जो...वह संबंधवाचक वाक्य (Relative Correlatives) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 15-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (15.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (15.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (15.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («जो_वह_15_2»):",
                    "acceptedAnswers": [
                        "जो_वह_15_2"
                    ],
                    "explanation": "The target keyword was: 【जो_वह_15_2】"
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
        "objective": "Comprehensive mastery of जो...वह संबंधवाचक वाक्य (Relative Correlatives).",
        "presentation": {
            "explanation": "इस पाठ में हम « संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) » (भाग 3) और जो...वह संबंधवाचक वाक्य (Relative Correlatives) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (15.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (15.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (15.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for जो...वह संबंधवाचक वाक्य (Relative Correlatives)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« जो...वह संबंधवाचक वाक्य (Relative Correlatives) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (15.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (15.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (15.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (15.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (15.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (15.3.3)।"
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
                    "prompt": "कौन सा वाक्य « जो...वह संबंधवाचक वाक्य (Relative Correlatives) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 15-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (15.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (15.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (15.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («जो_वह_15_3»):",
                    "acceptedAnswers": [
                        "जो_वह_15_3"
                    ],
                    "explanation": "The target keyword was: 【जो_वह_15_3】"
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
        "objective": "Comprehensive mastery of जो...वह संबंधवाचक वाक्य (Relative Correlatives).",
        "presentation": {
            "explanation": "इस पाठ में हम « संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) » (भाग 4) और जो...वह संबंधवाचक वाक्य (Relative Correlatives) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (15.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (15.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (15.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for जो...वह संबंधवाचक वाक्य (Relative Correlatives)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« जो...वह संबंधवाचक वाक्य (Relative Correlatives) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (15.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (15.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (15.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (15.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (15.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (15.4.3)।"
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
                    "prompt": "कौन सा वाक्य « जो...वह संबंधवाचक वाक्य (Relative Correlatives) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 15-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (15.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (15.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (15.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («जो_वह_15_4»):",
                    "acceptedAnswers": [
                        "जो_वह_15_4"
                    ],
                    "explanation": "The target keyword was: 【जो_वह_15_4】"
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
        "objective": "Comprehensive mastery of जो...वह संबंधवाचक वाक्य (Relative Correlatives).",
        "presentation": {
            "explanation": "इस पाठ में हम « संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) » (भाग 5) और जो...वह संबंधवाचक वाक्य (Relative Correlatives) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (15.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (15.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (15.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for जो...वह संबंधवाचक वाक्य (Relative Correlatives)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« जो...वह संबंधवाचक वाक्य (Relative Correlatives) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (15.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (15.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (15.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संबंधवाचक-नित्यसंबंधी वाक्य: जो...वह (Correlatives) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (15.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (15.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (15.5.3)।"
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
                    "prompt": "कौन सा वाक्य « जो...वह संबंधवाचक वाक्य (Relative Correlatives) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 15-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (15.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (15.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (15.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («जो_वह_15_5»):",
                    "acceptedAnswers": [
                        "जो_वह_15_5"
                    ],
                    "explanation": "The target keyword was: 【जो_वह_15_5】"
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
        "objective": "Comprehensive mastery of कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना).",
        "presentation": {
            "explanation": "इस पाठ में हम « कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) » (भाग 1) और कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (16.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (16.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (16.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (16.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (16.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (16.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (16.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (16.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (16.1.3)।"
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
                    "prompt": "कौन सा वाक्य « कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 16-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (16.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (16.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (16.1.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («किया_जाता_है_16_1»):",
                    "acceptedAnswers": [
                        "किया_जाता_है_16_1"
                    ],
                    "explanation": "The target keyword was: 【किया_जाता_है_16_1】"
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
        "objective": "Comprehensive mastery of कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना).",
        "presentation": {
            "explanation": "इस पाठ में हम « कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) » (भाग 2) और कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (16.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (16.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (16.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (16.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (16.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (16.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (16.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (16.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (16.2.3)।"
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
                    "prompt": "कौन सा वाक्य « कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 16-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (16.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (16.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (16.2.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («किया_जाता_है_16_2»):",
                    "acceptedAnswers": [
                        "किया_जाता_है_16_2"
                    ],
                    "explanation": "The target keyword was: 【किया_जाता_है_16_2】"
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
        "objective": "Comprehensive mastery of कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना).",
        "presentation": {
            "explanation": "इस पाठ में हम « कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) » (भाग 3) और कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (16.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (16.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (16.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (16.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (16.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (16.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (16.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (16.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (16.3.3)।"
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
                    "prompt": "कौन सा वाक्य « कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 16-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (16.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (16.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (16.3.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («किया_जाता_है_16_3»):",
                    "acceptedAnswers": [
                        "किया_जाता_है_16_3"
                    ],
                    "explanation": "The target keyword was: 【किया_जाता_है_16_3】"
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
        "objective": "Comprehensive mastery of कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना).",
        "presentation": {
            "explanation": "इस पाठ में हम « कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) » (भाग 4) और कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (16.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (16.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (16.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (16.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (16.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (16.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (16.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (16.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (16.4.3)।"
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
                    "prompt": "कौन सा वाक्य « कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 16-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (16.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (16.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (16.4.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («किया_जाता_है_16_4»):",
                    "acceptedAnswers": [
                        "किया_जाता_है_16_4"
                    ],
                    "explanation": "The target keyword was: 【किया_जाता_है_16_4】"
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
        "objective": "Comprehensive mastery of कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना).",
        "presentation": {
            "explanation": "इस पाठ में हम « कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) » (भाग 5) और कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (16.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (16.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (16.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (16.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (16.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (16.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« कर्मवाच्य संरचनाएं: जाना-सहायक (Passive Voice) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (16.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (16.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (16.5.3)।"
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
                    "prompt": "कौन सा वाक्य « कर्मवाच्य जाना सहायक क्रिया (Passive Voice with जाना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 16-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (16.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (16.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (16.5.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («किया_जाता_है_16_5»):",
                    "acceptedAnswers": [
                        "किया_जाता_है_16_5"
                    ],
                    "explanation": "The target keyword was: 【किया_जाता_है_16_5】"
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
        "objective": "Comprehensive mastery of प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना).",
        "presentation": {
            "explanation": "इस पाठ में हम « प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) » (भाग 1) और प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (17.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (17.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (17.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (17.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (17.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (17.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (17.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (17.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (17.1.3)।"
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
                    "prompt": "कौन सा वाक्य « प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 17-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (17.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (17.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (17.1.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («सिखाना_17_1»):",
                    "acceptedAnswers": [
                        "सिखाना_17_1"
                    ],
                    "explanation": "The target keyword was: 【सिखाना_17_1】"
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
        "objective": "Comprehensive mastery of प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना).",
        "presentation": {
            "explanation": "इस पाठ में हम « प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) » (भाग 2) और प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (17.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (17.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (17.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (17.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (17.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (17.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (17.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (17.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (17.2.3)।"
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
                    "prompt": "कौन सा वाक्य « प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 17-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (17.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (17.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (17.2.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («सिखाना_17_2»):",
                    "acceptedAnswers": [
                        "सिखाना_17_2"
                    ],
                    "explanation": "The target keyword was: 【सिखाना_17_2】"
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
        "objective": "Comprehensive mastery of प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना).",
        "presentation": {
            "explanation": "इस पाठ में हम « प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) » (भाग 3) और प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (17.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (17.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (17.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (17.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (17.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (17.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (17.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (17.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (17.3.3)।"
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
                    "prompt": "कौन सा वाक्य « प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 17-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (17.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (17.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (17.3.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («सिखाना_17_3»):",
                    "acceptedAnswers": [
                        "सिखाना_17_3"
                    ],
                    "explanation": "The target keyword was: 【सिखाना_17_3】"
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
        "objective": "Comprehensive mastery of प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना).",
        "presentation": {
            "explanation": "इस पाठ में हम « प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) » (भाग 4) और प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (17.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (17.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (17.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (17.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (17.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (17.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (17.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (17.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (17.4.3)।"
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
                    "prompt": "कौन सा वाक्य « प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 17-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (17.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (17.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (17.4.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («सिखाना_17_4»):",
                    "acceptedAnswers": [
                        "सिखाना_17_4"
                    ],
                    "explanation": "The target keyword was: 【सिखाना_17_4】"
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
        "objective": "Comprehensive mastery of प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना).",
        "presentation": {
            "explanation": "इस पाठ में हम « प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) » (भाग 5) और प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (17.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (17.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (17.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (17.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (17.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (17.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« प्रेरणार्थक क्रियाएं: प्रथम व द्वितीय (Causatives) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (17.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (17.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (17.5.3)।"
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
                    "prompt": "कौन सा वाक्य « प्रेरणार्थक क्रियाएं (Causative Morphology: पढ़ाना/पढ़वाना) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 17-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (17.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (17.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (17.5.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («सिखाना_17_5»):",
                    "acceptedAnswers": [
                        "सिखाना_17_5"
                    ],
                    "explanation": "The target keyword was: 【सिखाना_17_5】"
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
        "objective": "Comprehensive mastery of यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो).",
        "presentation": {
            "explanation": "इस पाठ में हम « शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) » (भाग 1) और यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (18.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (18.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (18.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (18.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (18.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (18.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (18.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (18.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (18.1.3)।"
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
                    "prompt": "कौन सा वाक्य « यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 18-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (18.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (18.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (18.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («अगर_तो_18_1»):",
                    "acceptedAnswers": [
                        "अगर_तो_18_1"
                    ],
                    "explanation": "The target keyword was: 【अगर_तो_18_1】"
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
        "objective": "Comprehensive mastery of यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो).",
        "presentation": {
            "explanation": "इस पाठ में हम « शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) » (भाग 2) और यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (18.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (18.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (18.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (18.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (18.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (18.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (18.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (18.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (18.2.3)।"
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
                    "prompt": "कौन सा वाक्य « यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 18-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (18.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (18.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (18.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («अगर_तो_18_2»):",
                    "acceptedAnswers": [
                        "अगर_तो_18_2"
                    ],
                    "explanation": "The target keyword was: 【अगर_तो_18_2】"
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
        "objective": "Comprehensive mastery of यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो).",
        "presentation": {
            "explanation": "इस पाठ में हम « शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) » (भाग 3) और यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (18.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (18.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (18.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (18.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (18.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (18.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (18.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (18.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (18.3.3)।"
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
                    "prompt": "कौन सा वाक्य « यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 18-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (18.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (18.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (18.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («अगर_तो_18_3»):",
                    "acceptedAnswers": [
                        "अगर_तो_18_3"
                    ],
                    "explanation": "The target keyword was: 【अगर_तो_18_3】"
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
        "objective": "Comprehensive mastery of यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो).",
        "presentation": {
            "explanation": "इस पाठ में हम « शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) » (भाग 4) और यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (18.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (18.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (18.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (18.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (18.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (18.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (18.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (18.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (18.4.3)।"
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
                    "prompt": "कौन सा वाक्य « यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 18-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (18.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (18.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (18.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («अगर_तो_18_4»):",
                    "acceptedAnswers": [
                        "अगर_तो_18_4"
                    ],
                    "explanation": "The target keyword was: 【अगर_तो_18_4】"
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
        "objective": "Comprehensive mastery of यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो).",
        "presentation": {
            "explanation": "इस पाठ में हम « शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) » (भाग 5) और यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (18.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (18.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (18.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (18.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (18.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (18.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« शर्तिया और हेतुहेतुमद् वाक्य (Conditionals) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (18.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (18.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (18.5.3)।"
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
                    "prompt": "कौन सा वाक्य « यदि...तो शर्तिया वाक्य (Conditionals: अगर...तो) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 18-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (18.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (18.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (18.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («अगर_तो_18_5»):",
                    "acceptedAnswers": [
                        "अगर_तो_18_5"
                    ],
                    "explanation": "The target keyword was: 【अगर_तो_18_5】"
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
        "objective": "Comprehensive mastery of कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि).",
        "presentation": {
            "explanation": "इस पाठ में हम « अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) » (भाग 1) और कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (19.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (19.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (19.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (19.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (19.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (19.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (19.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (19.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (19.1.3)।"
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
                    "prompt": "कौन सा वाक्य « कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 19-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (19.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (19.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (19.1.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कहा_कि_19_1»):",
                    "acceptedAnswers": [
                        "कहा_कि_19_1"
                    ],
                    "explanation": "The target keyword was: 【कहा_कि_19_1】"
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
        "objective": "Comprehensive mastery of कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि).",
        "presentation": {
            "explanation": "इस पाठ में हम « अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) » (भाग 2) और कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (19.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (19.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (19.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (19.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (19.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (19.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (19.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (19.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (19.2.3)।"
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
                    "prompt": "कौन सा वाक्य « कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 19-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (19.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (19.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (19.2.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कहा_कि_19_2»):",
                    "acceptedAnswers": [
                        "कहा_कि_19_2"
                    ],
                    "explanation": "The target keyword was: 【कहा_कि_19_2】"
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
        "objective": "Comprehensive mastery of कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि).",
        "presentation": {
            "explanation": "इस पाठ में हम « अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) » (भाग 3) और कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (19.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (19.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (19.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (19.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (19.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (19.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (19.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (19.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (19.3.3)।"
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
                    "prompt": "कौन सा वाक्य « कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 19-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (19.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (19.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (19.3.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कहा_कि_19_3»):",
                    "acceptedAnswers": [
                        "कहा_कि_19_3"
                    ],
                    "explanation": "The target keyword was: 【कहा_कि_19_3】"
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
        "objective": "Comprehensive mastery of कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि).",
        "presentation": {
            "explanation": "इस पाठ में हम « अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) » (भाग 4) और कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (19.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (19.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (19.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (19.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (19.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (19.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (19.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (19.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (19.4.3)।"
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
                    "prompt": "कौन सा वाक्य « कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 19-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (19.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (19.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (19.4.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कहा_कि_19_4»):",
                    "acceptedAnswers": [
                        "कहा_कि_19_4"
                    ],
                    "explanation": "The target keyword was: 【कहा_कि_19_4】"
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
        "objective": "Comprehensive mastery of कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि).",
        "presentation": {
            "explanation": "इस पाठ में हम « अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) » (भाग 5) और कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (19.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (19.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (19.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (19.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (19.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (19.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« अप्रत्यक्ष कथन और समुच्चयबोधक कि (Reported Speech) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (19.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (19.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (19.5.3)।"
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
                    "prompt": "कौन सा वाक्य « कि के साथ अप्रत्यक्ष कथन (Reported Speech with कि) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 19-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (19.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (19.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (19.5.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कहा_कि_19_5»):",
                    "acceptedAnswers": [
                        "कहा_कि_19_5"
                    ],
                    "explanation": "The target keyword was: 【कहा_कि_19_5】"
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
        "objective": "Comprehensive mastery of व्यावसायिक संवाद और पत्राचार (Corporate Hindi).",
        "presentation": {
            "explanation": "इस पाठ में हम « व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) » (भाग 1) और व्यावसायिक संवाद और पत्राचार (Corporate Hindi) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (20.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (20.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (20.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for व्यावसायिक संवाद और पत्राचार (Corporate Hindi)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« व्यावसायिक संवाद और पत्राचार (Corporate Hindi) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (20.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (20.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (20.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (20.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (20.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (20.1.3)।"
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
                    "prompt": "कौन सा वाक्य « व्यावसायिक संवाद और पत्राचार (Corporate Hindi) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 20-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (20.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (20.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (20.1.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कार्यालय_20_1»):",
                    "acceptedAnswers": [
                        "कार्यालय_20_1"
                    ],
                    "explanation": "The target keyword was: 【कार्यालय_20_1】"
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
        "objective": "Comprehensive mastery of व्यावसायिक संवाद और पत्राचार (Corporate Hindi).",
        "presentation": {
            "explanation": "इस पाठ में हम « व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) » (भाग 2) और व्यावसायिक संवाद और पत्राचार (Corporate Hindi) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (20.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (20.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (20.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for व्यावसायिक संवाद और पत्राचार (Corporate Hindi)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« व्यावसायिक संवाद और पत्राचार (Corporate Hindi) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (20.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (20.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (20.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (20.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (20.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (20.2.3)।"
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
                    "prompt": "कौन सा वाक्य « व्यावसायिक संवाद और पत्राचार (Corporate Hindi) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 20-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (20.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (20.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (20.2.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कार्यालय_20_2»):",
                    "acceptedAnswers": [
                        "कार्यालय_20_2"
                    ],
                    "explanation": "The target keyword was: 【कार्यालय_20_2】"
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
        "objective": "Comprehensive mastery of व्यावसायिक संवाद और पत्राचार (Corporate Hindi).",
        "presentation": {
            "explanation": "इस पाठ में हम « व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) » (भाग 3) और व्यावसायिक संवाद और पत्राचार (Corporate Hindi) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (20.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (20.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (20.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for व्यावसायिक संवाद और पत्राचार (Corporate Hindi)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« व्यावसायिक संवाद और पत्राचार (Corporate Hindi) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (20.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (20.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (20.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (20.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (20.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (20.3.3)।"
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
                    "prompt": "कौन सा वाक्य « व्यावसायिक संवाद और पत्राचार (Corporate Hindi) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 20-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (20.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (20.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (20.3.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कार्यालय_20_3»):",
                    "acceptedAnswers": [
                        "कार्यालय_20_3"
                    ],
                    "explanation": "The target keyword was: 【कार्यालय_20_3】"
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
        "objective": "Comprehensive mastery of व्यावसायिक संवाद और पत्राचार (Corporate Hindi).",
        "presentation": {
            "explanation": "इस पाठ में हम « व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) » (भाग 4) और व्यावसायिक संवाद और पत्राचार (Corporate Hindi) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (20.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (20.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (20.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for व्यावसायिक संवाद और पत्राचार (Corporate Hindi)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« व्यावसायिक संवाद और पत्राचार (Corporate Hindi) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (20.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (20.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (20.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (20.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (20.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (20.4.3)।"
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
                    "prompt": "कौन सा वाक्य « व्यावसायिक संवाद और पत्राचार (Corporate Hindi) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 20-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (20.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (20.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (20.4.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कार्यालय_20_4»):",
                    "acceptedAnswers": [
                        "कार्यालय_20_4"
                    ],
                    "explanation": "The target keyword was: 【कार्यालय_20_4】"
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
        "objective": "Comprehensive mastery of व्यावसायिक संवाद और पत्राचार (Corporate Hindi).",
        "presentation": {
            "explanation": "इस पाठ में हम « व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) » (भाग 5) और व्यावसायिक संवाद और पत्राचार (Corporate Hindi) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (20.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (20.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (20.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for व्यावसायिक संवाद और पत्राचार (Corporate Hindi)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« व्यावसायिक संवाद और पत्राचार (Corporate Hindi) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (20.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (20.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (20.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« व्यावसायिक हिंदी और पत्राचार (Corporate Hindi) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (20.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (20.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (20.5.3)।"
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
                    "prompt": "कौन सा वाक्य « व्यावसायिक संवाद और पत्राचार (Corporate Hindi) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 20-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (20.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (20.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (20.5.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कार्यालय_20_5»):",
                    "acceptedAnswers": [
                        "कार्यालय_20_5"
                    ],
                    "explanation": "The target keyword was: 【कार्यालय_20_5】"
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
        "objective": "Comprehensive mastery of चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi).",
        "presentation": {
            "explanation": "इस पाठ में हम « स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) » (भाग 1) और चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (21.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (21.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (21.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (21.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (21.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (21.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (21.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (21.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (21.1.3)।"
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
                    "prompt": "कौन सा वाक्य « चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 21-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (21.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (21.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (21.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («दवा_21_1»):",
                    "acceptedAnswers": [
                        "दवा_21_1"
                    ],
                    "explanation": "The target keyword was: 【दवा_21_1】"
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
        "objective": "Comprehensive mastery of चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi).",
        "presentation": {
            "explanation": "इस पाठ में हम « स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) » (भाग 2) और चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (21.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (21.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (21.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (21.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (21.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (21.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (21.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (21.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (21.2.3)।"
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
                    "prompt": "कौन सा वाक्य « चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 21-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (21.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (21.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (21.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («दवा_21_2»):",
                    "acceptedAnswers": [
                        "दवा_21_2"
                    ],
                    "explanation": "The target keyword was: 【दवा_21_2】"
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
        "objective": "Comprehensive mastery of चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi).",
        "presentation": {
            "explanation": "इस पाठ में हम « स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) » (भाग 3) और चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (21.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (21.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (21.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (21.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (21.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (21.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (21.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (21.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (21.3.3)।"
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
                    "prompt": "कौन सा वाक्य « चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 21-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (21.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (21.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (21.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («दवा_21_3»):",
                    "acceptedAnswers": [
                        "दवा_21_3"
                    ],
                    "explanation": "The target keyword was: 【दवा_21_3】"
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
        "objective": "Comprehensive mastery of चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi).",
        "presentation": {
            "explanation": "इस पाठ में हम « स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) » (भाग 4) और चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (21.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (21.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (21.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (21.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (21.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (21.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (21.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (21.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (21.4.3)।"
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
                    "prompt": "कौन सा वाक्य « चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 21-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (21.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (21.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (21.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («दवा_21_4»):",
                    "acceptedAnswers": [
                        "दवा_21_4"
                    ],
                    "explanation": "The target keyword was: 【दवा_21_4】"
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
        "objective": "Comprehensive mastery of चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi).",
        "presentation": {
            "explanation": "इस पाठ में हम « स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) » (भाग 5) और चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (21.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (21.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (21.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (21.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (21.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (21.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« स्वास्थ्य, चिकित्सा और नैदानिक संवाद (Medical Hindi) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (21.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (21.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (21.5.3)।"
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
                    "prompt": "कौन सा वाक्य « चिकित्सा और स्वास्थ्य परामर्श (Medical Hindi) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 21-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (21.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (21.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (21.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («दवा_21_5»):",
                    "acceptedAnswers": [
                        "दवा_21_5"
                    ],
                    "explanation": "The target keyword was: 【दवा_21_5】"
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
        "objective": "Comprehensive mastery of भारतीय खानपान और आतिथ्य (Cuisine & Hospitality).",
        "presentation": {
            "explanation": "इस पाठ में हम « भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) » (भाग 1) और भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (22.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (22.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (22.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भारतीय खानपान और आतिथ्य (Cuisine & Hospitality)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (22.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (22.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (22.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (22.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (22.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (22.1.3)।"
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
                    "prompt": "कौन सा वाक्य « भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 22-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (22.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (22.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (22.1.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («व्यंजन_22_1»):",
                    "acceptedAnswers": [
                        "व्यंजन_22_1"
                    ],
                    "explanation": "The target keyword was: 【व्यंजन_22_1】"
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
        "objective": "Comprehensive mastery of भारतीय खानपान और आतिथ्य (Cuisine & Hospitality).",
        "presentation": {
            "explanation": "इस पाठ में हम « भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) » (भाग 2) और भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (22.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (22.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (22.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भारतीय खानपान और आतिथ्य (Cuisine & Hospitality)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (22.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (22.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (22.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (22.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (22.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (22.2.3)।"
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
                    "prompt": "कौन सा वाक्य « भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 22-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (22.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (22.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (22.2.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («व्यंजन_22_2»):",
                    "acceptedAnswers": [
                        "व्यंजन_22_2"
                    ],
                    "explanation": "The target keyword was: 【व्यंजन_22_2】"
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
        "objective": "Comprehensive mastery of भारतीय खानपान और आतिथ्य (Cuisine & Hospitality).",
        "presentation": {
            "explanation": "इस पाठ में हम « भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) » (भाग 3) और भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (22.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (22.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (22.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भारतीय खानपान और आतिथ्य (Cuisine & Hospitality)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (22.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (22.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (22.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (22.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (22.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (22.3.3)।"
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
                    "prompt": "कौन सा वाक्य « भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 22-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (22.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (22.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (22.3.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («व्यंजन_22_3»):",
                    "acceptedAnswers": [
                        "व्यंजन_22_3"
                    ],
                    "explanation": "The target keyword was: 【व्यंजन_22_3】"
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
        "objective": "Comprehensive mastery of भारतीय खानपान और आतिथ्य (Cuisine & Hospitality).",
        "presentation": {
            "explanation": "इस पाठ में हम « भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) » (भाग 4) और भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (22.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (22.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (22.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भारतीय खानपान और आतिथ्य (Cuisine & Hospitality)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (22.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (22.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (22.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (22.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (22.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (22.4.3)।"
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
                    "prompt": "कौन सा वाक्य « भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 22-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (22.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (22.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (22.4.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («व्यंजन_22_4»):",
                    "acceptedAnswers": [
                        "व्यंजन_22_4"
                    ],
                    "explanation": "The target keyword was: 【व्यंजन_22_4】"
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
        "objective": "Comprehensive mastery of भारतीय खानपान और आतिथ्य (Cuisine & Hospitality).",
        "presentation": {
            "explanation": "इस पाठ में हम « भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) » (भाग 5) और भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (22.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (22.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (22.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भारतीय खानपान और आतिथ्य (Cuisine & Hospitality)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (22.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (22.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (22.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« भारतीय व्यंजन, पाककला और आतिथ्य (Cuisine & Hospitality) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (22.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (22.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (22.5.3)।"
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
                    "prompt": "कौन सा वाक्य « भारतीय खानपान और आतिथ्य (Cuisine & Hospitality) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 22-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (22.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (22.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (22.5.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («व्यंजन_22_5»):",
                    "acceptedAnswers": [
                        "व्यंजन_22_5"
                    ],
                    "explanation": "The target keyword was: 【व्यंजन_22_5】"
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
        "objective": "Comprehensive mastery of सिनेमा और भारतीय संगीत (Cinema & Arts Criticism).",
        "presentation": {
            "explanation": "इस पाठ में हम « सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) » (भाग 1) और सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (23.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (23.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (23.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सिनेमा और भारतीय संगीत (Cinema & Arts Criticism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (23.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (23.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (23.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (23.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (23.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (23.1.3)।"
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
                    "prompt": "कौन सा वाक्य « सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 23-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (23.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (23.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (23.1.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संगीत_23_1»):",
                    "acceptedAnswers": [
                        "संगीत_23_1"
                    ],
                    "explanation": "The target keyword was: 【संगीत_23_1】"
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
        "objective": "Comprehensive mastery of सिनेमा और भारतीय संगीत (Cinema & Arts Criticism).",
        "presentation": {
            "explanation": "इस पाठ में हम « सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) » (भाग 2) और सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (23.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (23.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (23.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सिनेमा और भारतीय संगीत (Cinema & Arts Criticism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (23.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (23.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (23.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (23.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (23.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (23.2.3)।"
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
                    "prompt": "कौन सा वाक्य « सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 23-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (23.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (23.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (23.2.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संगीत_23_2»):",
                    "acceptedAnswers": [
                        "संगीत_23_2"
                    ],
                    "explanation": "The target keyword was: 【संगीत_23_2】"
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
        "objective": "Comprehensive mastery of सिनेमा और भारतीय संगीत (Cinema & Arts Criticism).",
        "presentation": {
            "explanation": "इस पाठ में हम « सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) » (भाग 3) और सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (23.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (23.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (23.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सिनेमा और भारतीय संगीत (Cinema & Arts Criticism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (23.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (23.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (23.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (23.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (23.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (23.3.3)।"
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
                    "prompt": "कौन सा वाक्य « सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 23-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (23.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (23.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (23.3.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संगीत_23_3»):",
                    "acceptedAnswers": [
                        "संगीत_23_3"
                    ],
                    "explanation": "The target keyword was: 【संगीत_23_3】"
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
        "objective": "Comprehensive mastery of सिनेमा और भारतीय संगीत (Cinema & Arts Criticism).",
        "presentation": {
            "explanation": "इस पाठ में हम « सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) » (भाग 4) और सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (23.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (23.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (23.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सिनेमा और भारतीय संगीत (Cinema & Arts Criticism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (23.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (23.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (23.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (23.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (23.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (23.4.3)।"
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
                    "prompt": "कौन सा वाक्य « सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 23-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (23.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (23.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (23.4.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संगीत_23_4»):",
                    "acceptedAnswers": [
                        "संगीत_23_4"
                    ],
                    "explanation": "The target keyword was: 【संगीत_23_4】"
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
        "objective": "Comprehensive mastery of सिनेमा और भारतीय संगीत (Cinema & Arts Criticism).",
        "presentation": {
            "explanation": "इस पाठ में हम « सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) » (भाग 5) और सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (23.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (23.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (23.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for सिनेमा और भारतीय संगीत (Cinema & Arts Criticism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (23.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (23.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (23.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« सिनेमा, संगीत और कला समीक्षा (Cinema & Arts) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (23.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (23.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (23.5.3)।"
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
                    "prompt": "कौन सा वाक्य « सिनेमा और भारतीय संगीत (Cinema & Arts Criticism) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 23-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (23.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (23.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (23.5.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संगीत_23_5»):",
                    "acceptedAnswers": [
                        "संगीत_23_5"
                    ],
                    "explanation": "The target keyword was: 【संगीत_23_5】"
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
        "objective": "Comprehensive mastery of बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance).",
        "presentation": {
            "explanation": "इस पाठ में हम « बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) » (भाग 1) और बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (24.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (24.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (24.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (24.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (24.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (24.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (24.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (24.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (24.1.3)।"
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
                    "prompt": "कौन सा वाक्य « बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 24-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (24.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (24.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (24.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («खाता_24_1»):",
                    "acceptedAnswers": [
                        "खाता_24_1"
                    ],
                    "explanation": "The target keyword was: 【खाता_24_1】"
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
        "objective": "Comprehensive mastery of बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance).",
        "presentation": {
            "explanation": "इस पाठ में हम « बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) » (भाग 2) और बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (24.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (24.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (24.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (24.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (24.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (24.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (24.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (24.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (24.2.3)।"
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
                    "prompt": "कौन सा वाक्य « बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 24-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (24.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (24.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (24.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («खाता_24_2»):",
                    "acceptedAnswers": [
                        "खाता_24_2"
                    ],
                    "explanation": "The target keyword was: 【खाता_24_2】"
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
        "objective": "Comprehensive mastery of बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance).",
        "presentation": {
            "explanation": "इस पाठ में हम « बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) » (भाग 3) और बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (24.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (24.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (24.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (24.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (24.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (24.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (24.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (24.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (24.3.3)।"
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
                    "prompt": "कौन सा वाक्य « बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 24-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (24.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (24.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (24.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («खाता_24_3»):",
                    "acceptedAnswers": [
                        "खाता_24_3"
                    ],
                    "explanation": "The target keyword was: 【खाता_24_3】"
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
        "objective": "Comprehensive mastery of बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance).",
        "presentation": {
            "explanation": "इस पाठ में हम « बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) » (भाग 4) और बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (24.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (24.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (24.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (24.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (24.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (24.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (24.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (24.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (24.4.3)।"
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
                    "prompt": "कौन सा वाक्य « बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 24-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (24.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (24.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (24.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («खाता_24_4»):",
                    "acceptedAnswers": [
                        "खाता_24_4"
                    ],
                    "explanation": "The target keyword was: 【खाता_24_4】"
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
        "objective": "Comprehensive mastery of बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance).",
        "presentation": {
            "explanation": "इस पाठ में हम « बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) » (भाग 5) और बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (24.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (24.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (24.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (24.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (24.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (24.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« बैंकिंग, वित्त और डिजिटल भुगतान (Banking & Finance) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (24.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (24.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (24.5.3)।"
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
                    "prompt": "कौन सा वाक्य « बैंकिंग और वित्तीय शब्दावली (Banking & Digital Finance) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 24-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (24.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (24.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (24.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («खाता_24_5»):",
                    "acceptedAnswers": [
                        "खाता_24_5"
                    ],
                    "explanation": "The target keyword was: 【खाता_24_5】"
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
        "objective": "Comprehensive mastery of कृषि, पर्यावरण और मानसून (Ecology & Agriculture).",
        "presentation": {
            "explanation": "इस पाठ में हम « पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) » (भाग 1) और कृषि, पर्यावरण और मानसून (Ecology & Agriculture) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (25.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (25.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (25.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कृषि, पर्यावरण और मानसून (Ecology & Agriculture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कृषि, पर्यावरण और मानसून (Ecology & Agriculture) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (25.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (25.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (25.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (25.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (25.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (25.1.3)।"
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
                    "prompt": "कौन सा वाक्य « कृषि, पर्यावरण और मानसून (Ecology & Agriculture) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 25-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (25.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (25.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (25.1.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कृषि_25_1»):",
                    "acceptedAnswers": [
                        "कृषि_25_1"
                    ],
                    "explanation": "The target keyword was: 【कृषि_25_1】"
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
        "objective": "Comprehensive mastery of कृषि, पर्यावरण और मानसून (Ecology & Agriculture).",
        "presentation": {
            "explanation": "इस पाठ में हम « पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) » (भाग 2) और कृषि, पर्यावरण और मानसून (Ecology & Agriculture) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (25.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (25.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (25.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कृषि, पर्यावरण और मानसून (Ecology & Agriculture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कृषि, पर्यावरण और मानसून (Ecology & Agriculture) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (25.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (25.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (25.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (25.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (25.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (25.2.3)।"
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
                    "prompt": "कौन सा वाक्य « कृषि, पर्यावरण और मानसून (Ecology & Agriculture) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 25-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (25.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (25.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (25.2.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कृषि_25_2»):",
                    "acceptedAnswers": [
                        "कृषि_25_2"
                    ],
                    "explanation": "The target keyword was: 【कृषि_25_2】"
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
        "objective": "Comprehensive mastery of कृषि, पर्यावरण और मानसून (Ecology & Agriculture).",
        "presentation": {
            "explanation": "इस पाठ में हम « पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) » (भाग 3) और कृषि, पर्यावरण और मानसून (Ecology & Agriculture) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (25.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (25.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (25.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कृषि, पर्यावरण और मानसून (Ecology & Agriculture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कृषि, पर्यावरण और मानसून (Ecology & Agriculture) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (25.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (25.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (25.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (25.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (25.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (25.3.3)।"
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
                    "prompt": "कौन सा वाक्य « कृषि, पर्यावरण और मानसून (Ecology & Agriculture) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 25-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (25.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (25.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (25.3.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कृषि_25_3»):",
                    "acceptedAnswers": [
                        "कृषि_25_3"
                    ],
                    "explanation": "The target keyword was: 【कृषि_25_3】"
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
        "objective": "Comprehensive mastery of कृषि, पर्यावरण और मानसून (Ecology & Agriculture).",
        "presentation": {
            "explanation": "इस पाठ में हम « पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) » (भाग 4) और कृषि, पर्यावरण और मानसून (Ecology & Agriculture) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (25.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (25.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (25.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कृषि, पर्यावरण और मानसून (Ecology & Agriculture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कृषि, पर्यावरण और मानसून (Ecology & Agriculture) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (25.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (25.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (25.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (25.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (25.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (25.4.3)।"
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
                    "prompt": "कौन सा वाक्य « कृषि, पर्यावरण और मानसून (Ecology & Agriculture) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 25-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (25.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (25.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (25.4.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कृषि_25_4»):",
                    "acceptedAnswers": [
                        "कृषि_25_4"
                    ],
                    "explanation": "The target keyword was: 【कृषि_25_4】"
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
        "objective": "Comprehensive mastery of कृषि, पर्यावरण और मानसून (Ecology & Agriculture).",
        "presentation": {
            "explanation": "इस पाठ में हम « पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) » (भाग 5) और कृषि, पर्यावरण और मानसून (Ecology & Agriculture) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (25.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (25.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (25.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for कृषि, पर्यावरण और मानसून (Ecology & Agriculture)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« कृषि, पर्यावरण और मानसून (Ecology & Agriculture) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (25.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (25.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (25.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पर्यावरण, कृषि और मानसून जल प्रबंधन (Ecology & Agriculture) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (25.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (25.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (25.5.3)।"
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
                    "prompt": "कौन सा वाक्य « कृषि, पर्यावरण और मानसून (Ecology & Agriculture) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 25-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (25.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (25.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (25.5.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («कृषि_25_5»):",
                    "acceptedAnswers": [
                        "कृषि_25_5"
                    ],
                    "explanation": "The target keyword was: 【कृषि_25_5】"
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
        "objective": "Comprehensive mastery of संविधान और विधिक शब्दावली (Constitutional Law).",
        "presentation": {
            "explanation": "इस पाठ में हम « संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) » (भाग 1) और संविधान और विधिक शब्दावली (Constitutional Law) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (26.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (26.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (26.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संविधान और विधिक शब्दावली (Constitutional Law)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संविधान और विधिक शब्दावली (Constitutional Law) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (26.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (26.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (26.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (26.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (26.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (26.1.3)।"
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
                    "prompt": "कौन सा वाक्य « संविधान और विधिक शब्दावली (Constitutional Law) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 26-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (26.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (26.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (26.1.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संविधान_26_1»):",
                    "acceptedAnswers": [
                        "संविधान_26_1"
                    ],
                    "explanation": "The target keyword was: 【संविधान_26_1】"
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
        "objective": "Comprehensive mastery of संविधान और विधिक शब्दावली (Constitutional Law).",
        "presentation": {
            "explanation": "इस पाठ में हम « संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) » (भाग 2) और संविधान और विधिक शब्दावली (Constitutional Law) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (26.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (26.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (26.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संविधान और विधिक शब्दावली (Constitutional Law)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संविधान और विधिक शब्दावली (Constitutional Law) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (26.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (26.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (26.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (26.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (26.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (26.2.3)।"
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
                    "prompt": "कौन सा वाक्य « संविधान और विधिक शब्दावली (Constitutional Law) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 26-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (26.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (26.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (26.2.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संविधान_26_2»):",
                    "acceptedAnswers": [
                        "संविधान_26_2"
                    ],
                    "explanation": "The target keyword was: 【संविधान_26_2】"
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
        "objective": "Comprehensive mastery of संविधान और विधिक शब्दावली (Constitutional Law).",
        "presentation": {
            "explanation": "इस पाठ में हम « संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) » (भाग 3) और संविधान और विधिक शब्दावली (Constitutional Law) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (26.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (26.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (26.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संविधान और विधिक शब्दावली (Constitutional Law)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संविधान और विधिक शब्दावली (Constitutional Law) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (26.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (26.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (26.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (26.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (26.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (26.3.3)।"
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
                    "prompt": "कौन सा वाक्य « संविधान और विधिक शब्दावली (Constitutional Law) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 26-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (26.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (26.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (26.3.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संविधान_26_3»):",
                    "acceptedAnswers": [
                        "संविधान_26_3"
                    ],
                    "explanation": "The target keyword was: 【संविधान_26_3】"
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
        "objective": "Comprehensive mastery of संविधान और विधिक शब्दावली (Constitutional Law).",
        "presentation": {
            "explanation": "इस पाठ में हम « संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) » (भाग 4) और संविधान और विधिक शब्दावली (Constitutional Law) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (26.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (26.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (26.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संविधान और विधिक शब्दावली (Constitutional Law)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संविधान और विधिक शब्दावली (Constitutional Law) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (26.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (26.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (26.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (26.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (26.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (26.4.3)।"
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
                    "prompt": "कौन सा वाक्य « संविधान और विधिक शब्दावली (Constitutional Law) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 26-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (26.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (26.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (26.4.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संविधान_26_4»):",
                    "acceptedAnswers": [
                        "संविधान_26_4"
                    ],
                    "explanation": "The target keyword was: 【संविधान_26_4】"
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
        "objective": "Comprehensive mastery of संविधान और विधिक शब्दावली (Constitutional Law).",
        "presentation": {
            "explanation": "इस पाठ में हम « संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) » (भाग 5) और संविधान और विधिक शब्दावली (Constitutional Law) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (26.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (26.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (26.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for संविधान और विधिक शब्दावली (Constitutional Law)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« संविधान और विधिक शब्दावली (Constitutional Law) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (26.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (26.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (26.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« संवैधानिक शासन और विधिक शब्दावली (Constitutional Law) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (26.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (26.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (26.5.3)।"
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
                    "prompt": "कौन सा वाक्य « संविधान और विधिक शब्दावली (Constitutional Law) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 26-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (26.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (26.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (26.5.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संविधान_26_5»):",
                    "acceptedAnswers": [
                        "संविधान_26_5"
                    ],
                    "explanation": "The target keyword was: 【संविधान_26_5】"
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
        "objective": "Comprehensive mastery of हिंदी साहित्य और काव्य (Hindi Literature & Poetry).",
        "presentation": {
            "explanation": "इस पाठ में हम « हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) » (भाग 1) और हिंदी साहित्य और काव्य (Hindi Literature & Poetry) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (27.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (27.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (27.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for हिंदी साहित्य और काव्य (Hindi Literature & Poetry)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« हिंदी साहित्य और काव्य (Hindi Literature & Poetry) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (27.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (27.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (27.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (27.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (27.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (27.1.3)।"
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
                    "prompt": "कौन सा वाक्य « हिंदी साहित्य और काव्य (Hindi Literature & Poetry) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 27-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (27.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (27.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (27.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («साहित्य_27_1»):",
                    "acceptedAnswers": [
                        "साहित्य_27_1"
                    ],
                    "explanation": "The target keyword was: 【साहित्य_27_1】"
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
        "objective": "Comprehensive mastery of हिंदी साहित्य और काव्य (Hindi Literature & Poetry).",
        "presentation": {
            "explanation": "इस पाठ में हम « हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) » (भाग 2) और हिंदी साहित्य और काव्य (Hindi Literature & Poetry) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (27.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (27.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (27.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for हिंदी साहित्य और काव्य (Hindi Literature & Poetry)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« हिंदी साहित्य और काव्य (Hindi Literature & Poetry) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (27.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (27.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (27.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (27.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (27.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (27.2.3)।"
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
                    "prompt": "कौन सा वाक्य « हिंदी साहित्य और काव्य (Hindi Literature & Poetry) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 27-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (27.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (27.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (27.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («साहित्य_27_2»):",
                    "acceptedAnswers": [
                        "साहित्य_27_2"
                    ],
                    "explanation": "The target keyword was: 【साहित्य_27_2】"
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
        "objective": "Comprehensive mastery of हिंदी साहित्य और काव्य (Hindi Literature & Poetry).",
        "presentation": {
            "explanation": "इस पाठ में हम « हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) » (भाग 3) और हिंदी साहित्य और काव्य (Hindi Literature & Poetry) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (27.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (27.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (27.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for हिंदी साहित्य और काव्य (Hindi Literature & Poetry)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« हिंदी साहित्य और काव्य (Hindi Literature & Poetry) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (27.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (27.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (27.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (27.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (27.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (27.3.3)।"
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
                    "prompt": "कौन सा वाक्य « हिंदी साहित्य और काव्य (Hindi Literature & Poetry) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 27-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (27.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (27.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (27.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («साहित्य_27_3»):",
                    "acceptedAnswers": [
                        "साहित्य_27_3"
                    ],
                    "explanation": "The target keyword was: 【साहित्य_27_3】"
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
        "objective": "Comprehensive mastery of हिंदी साहित्य और काव्य (Hindi Literature & Poetry).",
        "presentation": {
            "explanation": "इस पाठ में हम « हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) » (भाग 4) और हिंदी साहित्य और काव्य (Hindi Literature & Poetry) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (27.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (27.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (27.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for हिंदी साहित्य और काव्य (Hindi Literature & Poetry)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« हिंदी साहित्य और काव्य (Hindi Literature & Poetry) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (27.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (27.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (27.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (27.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (27.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (27.4.3)।"
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
                    "prompt": "कौन सा वाक्य « हिंदी साहित्य और काव्य (Hindi Literature & Poetry) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 27-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (27.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (27.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (27.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («साहित्य_27_4»):",
                    "acceptedAnswers": [
                        "साहित्य_27_4"
                    ],
                    "explanation": "The target keyword was: 【साहित्य_27_4】"
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
        "objective": "Comprehensive mastery of हिंदी साहित्य और काव्य (Hindi Literature & Poetry).",
        "presentation": {
            "explanation": "इस पाठ में हम « हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) » (भाग 5) और हिंदी साहित्य और काव्य (Hindi Literature & Poetry) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (27.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (27.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (27.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for हिंदी साहित्य और काव्य (Hindi Literature & Poetry)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« हिंदी साहित्य और काव्य (Hindi Literature & Poetry) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (27.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (27.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (27.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« हिंदी साहित्य, छायावाद और आधुनिक गद्य (Literature & Poetics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (27.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (27.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (27.5.3)।"
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
                    "prompt": "कौन सा वाक्य « हिंदी साहित्य और काव्य (Hindi Literature & Poetry) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 27-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (27.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (27.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (27.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («साहित्य_27_5»):",
                    "acceptedAnswers": [
                        "साहित्य_27_5"
                    ],
                    "explanation": "The target keyword was: 【साहित्य_27_5】"
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
        "objective": "Comprehensive mastery of पत्रकारिता और मीडिया विमर्श (Journalism & Editorial).",
        "presentation": {
            "explanation": "इस पाठ में हम « पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) » (भाग 1) और पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (28.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (28.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (28.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for पत्रकारिता और मीडिया विमर्श (Journalism & Editorial)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (28.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (28.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (28.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (28.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (28.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (28.1.3)।"
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
                    "prompt": "कौन सा वाक्य « पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 28-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (28.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (28.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (28.1.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संपादक_28_1»):",
                    "acceptedAnswers": [
                        "संपादक_28_1"
                    ],
                    "explanation": "The target keyword was: 【संपादक_28_1】"
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
        "objective": "Comprehensive mastery of पत्रकारिता और मीडिया विमर्श (Journalism & Editorial).",
        "presentation": {
            "explanation": "इस पाठ में हम « पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) » (भाग 2) और पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (28.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (28.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (28.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for पत्रकारिता और मीडिया विमर्श (Journalism & Editorial)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (28.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (28.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (28.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (28.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (28.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (28.2.3)।"
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
                    "prompt": "कौन सा वाक्य « पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 28-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (28.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (28.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (28.2.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संपादक_28_2»):",
                    "acceptedAnswers": [
                        "संपादक_28_2"
                    ],
                    "explanation": "The target keyword was: 【संपादक_28_2】"
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
        "objective": "Comprehensive mastery of पत्रकारिता और मीडिया विमर्श (Journalism & Editorial).",
        "presentation": {
            "explanation": "इस पाठ में हम « पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) » (भाग 3) और पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (28.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (28.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (28.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for पत्रकारिता और मीडिया विमर्श (Journalism & Editorial)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (28.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (28.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (28.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (28.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (28.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (28.3.3)।"
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
                    "prompt": "कौन सा वाक्य « पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 28-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (28.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (28.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (28.3.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संपादक_28_3»):",
                    "acceptedAnswers": [
                        "संपादक_28_3"
                    ],
                    "explanation": "The target keyword was: 【संपादक_28_3】"
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
        "objective": "Comprehensive mastery of पत्रकारिता और मीडिया विमर्श (Journalism & Editorial).",
        "presentation": {
            "explanation": "इस पाठ में हम « पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) » (भाग 4) और पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (28.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (28.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (28.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for पत्रकारिता और मीडिया विमर्श (Journalism & Editorial)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (28.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (28.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (28.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (28.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (28.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (28.4.3)।"
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
                    "prompt": "कौन सा वाक्य « पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 28-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (28.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (28.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (28.4.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संपादक_28_4»):",
                    "acceptedAnswers": [
                        "संपादक_28_4"
                    ],
                    "explanation": "The target keyword was: 【संपादक_28_4】"
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
        "objective": "Comprehensive mastery of पत्रकारिता और मीडिया विमर्श (Journalism & Editorial).",
        "presentation": {
            "explanation": "इस पाठ में हम « पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) » (भाग 5) और पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (28.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (28.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (28.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for पत्रकारिता और मीडिया विमर्श (Journalism & Editorial)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (28.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (28.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (28.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« पत्रकारिता, संपादकीय लेखन और मीडिया (Journalism & Media) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (28.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (28.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (28.5.3)।"
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
                    "prompt": "कौन सा वाक्य « पत्रकारिता और मीडिया विमर्श (Journalism & Editorial) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 28-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (28.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (28.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (28.5.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संपादक_28_5»):",
                    "acceptedAnswers": [
                        "संपादक_28_5"
                    ],
                    "explanation": "The target keyword was: 【संपादक_28_5】"
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
        "objective": "Comprehensive mastery of भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics).",
        "presentation": {
            "explanation": "इस पाठ में हम « दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) » (भाग 1) और भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (29.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (29.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (29.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (29.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (29.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (29.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (29.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (29.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (29.1.3)।"
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
                    "prompt": "कौन सा वाक्य « भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 29-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (29.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (29.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (29.1.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («दर्शन_29_1»):",
                    "acceptedAnswers": [
                        "दर्शन_29_1"
                    ],
                    "explanation": "The target keyword was: 【दर्शन_29_1】"
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
        "objective": "Comprehensive mastery of भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics).",
        "presentation": {
            "explanation": "इस पाठ में हम « दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) » (भाग 2) और भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (29.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (29.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (29.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (29.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (29.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (29.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (29.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (29.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (29.2.3)।"
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
                    "prompt": "कौन सा वाक्य « भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 29-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (29.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (29.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (29.2.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («दर्शन_29_2»):",
                    "acceptedAnswers": [
                        "दर्शन_29_2"
                    ],
                    "explanation": "The target keyword was: 【दर्शन_29_2】"
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
        "objective": "Comprehensive mastery of भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics).",
        "presentation": {
            "explanation": "इस पाठ में हम « दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) » (भाग 3) और भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (29.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (29.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (29.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (29.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (29.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (29.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (29.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (29.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (29.3.3)।"
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
                    "prompt": "कौन सा वाक्य « भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 29-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (29.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (29.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (29.3.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («दर्शन_29_3»):",
                    "acceptedAnswers": [
                        "दर्शन_29_3"
                    ],
                    "explanation": "The target keyword was: 【दर्शन_29_3】"
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
        "objective": "Comprehensive mastery of भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics).",
        "presentation": {
            "explanation": "इस पाठ में हम « दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) » (भाग 4) और भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (29.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (29.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (29.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (29.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (29.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (29.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (29.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (29.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (29.4.3)।"
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
                    "prompt": "कौन सा वाक्य « भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 29-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (29.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (29.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (29.4.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («दर्शन_29_4»):",
                    "acceptedAnswers": [
                        "दर्शन_29_4"
                    ],
                    "explanation": "The target keyword was: 【दर्शन_29_4】"
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
        "objective": "Comprehensive mastery of भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics).",
        "presentation": {
            "explanation": "इस पाठ में हम « दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) » (भाग 5) और भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (29.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (29.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (29.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (29.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (29.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (29.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« दर्शनशास्त्र, वेदांत और नीतिशास्त्र (Philosophy & Ethics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (29.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (29.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (29.5.3)।"
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
                    "prompt": "कौन सा वाक्य « भारतीय दर्शन और नीतिशास्त्र (Philosophy & Ethics) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 29-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (29.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (29.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (29.5.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («दर्शन_29_5»):",
                    "acceptedAnswers": [
                        "दर्शन_29_5"
                    ],
                    "explanation": "The target keyword was: 【दर्शन_29_5】"
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
        "objective": "Comprehensive mastery of वैज्ञानिक शोध और तकनीक (Scientific Research).",
        "presentation": {
            "explanation": "इस पाठ में हम « वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) » (भाग 1) और वैज्ञानिक शोध और तकनीक (Scientific Research) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (30.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (30.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (30.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for वैज्ञानिक शोध और तकनीक (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« वैज्ञानिक शोध और तकनीक (Scientific Research) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (30.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (30.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (30.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (30.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (30.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (30.1.3)।"
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
                    "prompt": "कौन सा वाक्य « वैज्ञानिक शोध और तकनीक (Scientific Research) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 30-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (30.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (30.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (30.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («अनुसंधान_30_1»):",
                    "acceptedAnswers": [
                        "अनुसंधान_30_1"
                    ],
                    "explanation": "The target keyword was: 【अनुसंधान_30_1】"
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
        "objective": "Comprehensive mastery of वैज्ञानिक शोध और तकनीक (Scientific Research).",
        "presentation": {
            "explanation": "इस पाठ में हम « वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) » (भाग 2) और वैज्ञानिक शोध और तकनीक (Scientific Research) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (30.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (30.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (30.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for वैज्ञानिक शोध और तकनीक (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« वैज्ञानिक शोध और तकनीक (Scientific Research) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (30.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (30.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (30.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (30.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (30.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (30.2.3)।"
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
                    "prompt": "कौन सा वाक्य « वैज्ञानिक शोध और तकनीक (Scientific Research) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 30-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (30.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (30.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (30.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («अनुसंधान_30_2»):",
                    "acceptedAnswers": [
                        "अनुसंधान_30_2"
                    ],
                    "explanation": "The target keyword was: 【अनुसंधान_30_2】"
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
        "objective": "Comprehensive mastery of वैज्ञानिक शोध और तकनीक (Scientific Research).",
        "presentation": {
            "explanation": "इस पाठ में हम « वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) » (भाग 3) और वैज्ञानिक शोध और तकनीक (Scientific Research) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (30.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (30.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (30.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for वैज्ञानिक शोध और तकनीक (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« वैज्ञानिक शोध और तकनीक (Scientific Research) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (30.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (30.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (30.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (30.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (30.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (30.3.3)।"
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
                    "prompt": "कौन सा वाक्य « वैज्ञानिक शोध और तकनीक (Scientific Research) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 30-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (30.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (30.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (30.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («अनुसंधान_30_3»):",
                    "acceptedAnswers": [
                        "अनुसंधान_30_3"
                    ],
                    "explanation": "The target keyword was: 【अनुसंधान_30_3】"
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
        "objective": "Comprehensive mastery of वैज्ञानिक शोध और तकनीक (Scientific Research).",
        "presentation": {
            "explanation": "इस पाठ में हम « वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) » (भाग 4) और वैज्ञानिक शोध और तकनीक (Scientific Research) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (30.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (30.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (30.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for वैज्ञानिक शोध और तकनीक (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« वैज्ञानिक शोध और तकनीक (Scientific Research) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (30.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (30.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (30.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (30.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (30.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (30.4.3)।"
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
                    "prompt": "कौन सा वाक्य « वैज्ञानिक शोध और तकनीक (Scientific Research) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 30-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (30.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (30.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (30.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («अनुसंधान_30_4»):",
                    "acceptedAnswers": [
                        "अनुसंधान_30_4"
                    ],
                    "explanation": "The target keyword was: 【अनुसंधान_30_4】"
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
        "objective": "Comprehensive mastery of वैज्ञानिक शोध और तकनीक (Scientific Research).",
        "presentation": {
            "explanation": "इस पाठ में हम « वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) » (भाग 5) और वैज्ञानिक शोध और तकनीक (Scientific Research) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (30.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (30.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (30.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for वैज्ञानिक शोध और तकनीक (Scientific Research)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« वैज्ञानिक शोध और तकनीक (Scientific Research) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (30.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (30.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (30.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« वैज्ञानिक अनुसंधान और तकनीकी विमर्श (Scientific Discourse) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (30.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (30.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (30.5.3)।"
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
                    "prompt": "कौन सा वाक्य « वैज्ञानिक शोध और तकनीक (Scientific Research) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 30-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (30.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (30.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (30.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («अनुसंधान_30_5»):",
                    "acceptedAnswers": [
                        "अनुसंधान_30_5"
                    ],
                    "explanation": "The target keyword was: 【अनुसंधान_30_5】"
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
        "objective": "Comprehensive mastery of भू-राजनीति और विदेश नीति (Geopolitics & Policy).",
        "presentation": {
            "explanation": "इस पाठ में हम « दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) » (भाग 1) और भू-राजनीति और विदेश नीति (Geopolitics & Policy) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (31.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (31.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (31.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भू-राजनीति और विदेश नीति (Geopolitics & Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भू-राजनीति और विदेश नीति (Geopolitics & Policy) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (31.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (31.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (31.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (31.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (31.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (31.1.3)।"
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
                    "prompt": "कौन सा वाक्य « भू-राजनीति और विदेश नीति (Geopolitics & Policy) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 31-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (31.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (31.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (31.1.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («विदेश_नीति_31_1»):",
                    "acceptedAnswers": [
                        "विदेश_नीति_31_1"
                    ],
                    "explanation": "The target keyword was: 【विदेश_नीति_31_1】"
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
        "objective": "Comprehensive mastery of भू-राजनीति और विदेश नीति (Geopolitics & Policy).",
        "presentation": {
            "explanation": "इस पाठ में हम « दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) » (भाग 2) और भू-राजनीति और विदेश नीति (Geopolitics & Policy) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (31.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (31.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (31.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भू-राजनीति और विदेश नीति (Geopolitics & Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भू-राजनीति और विदेश नीति (Geopolitics & Policy) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (31.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (31.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (31.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (31.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (31.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (31.2.3)।"
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
                    "prompt": "कौन सा वाक्य « भू-राजनीति और विदेश नीति (Geopolitics & Policy) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 31-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (31.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (31.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (31.2.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («विदेश_नीति_31_2»):",
                    "acceptedAnswers": [
                        "विदेश_नीति_31_2"
                    ],
                    "explanation": "The target keyword was: 【विदेश_नीति_31_2】"
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
        "objective": "Comprehensive mastery of भू-राजनीति और विदेश नीति (Geopolitics & Policy).",
        "presentation": {
            "explanation": "इस पाठ में हम « दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) » (भाग 3) और भू-राजनीति और विदेश नीति (Geopolitics & Policy) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (31.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (31.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (31.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भू-राजनीति और विदेश नीति (Geopolitics & Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भू-राजनीति और विदेश नीति (Geopolitics & Policy) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (31.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (31.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (31.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (31.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (31.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (31.3.3)।"
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
                    "prompt": "कौन सा वाक्य « भू-राजनीति और विदेश नीति (Geopolitics & Policy) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 31-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (31.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (31.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (31.3.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («विदेश_नीति_31_3»):",
                    "acceptedAnswers": [
                        "विदेश_नीति_31_3"
                    ],
                    "explanation": "The target keyword was: 【विदेश_नीति_31_3】"
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
        "objective": "Comprehensive mastery of भू-राजनीति और विदेश नीति (Geopolitics & Policy).",
        "presentation": {
            "explanation": "इस पाठ में हम « दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) » (भाग 4) और भू-राजनीति और विदेश नीति (Geopolitics & Policy) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (31.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (31.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (31.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भू-राजनीति और विदेश नीति (Geopolitics & Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भू-राजनीति और विदेश नीति (Geopolitics & Policy) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (31.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (31.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (31.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (31.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (31.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (31.4.3)।"
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
                    "prompt": "कौन सा वाक्य « भू-राजनीति और विदेश नीति (Geopolitics & Policy) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 31-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (31.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (31.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (31.4.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («विदेश_नीति_31_4»):",
                    "acceptedAnswers": [
                        "विदेश_नीति_31_4"
                    ],
                    "explanation": "The target keyword was: 【विदेश_नीति_31_4】"
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
        "objective": "Comprehensive mastery of भू-राजनीति और विदेश नीति (Geopolitics & Policy).",
        "presentation": {
            "explanation": "इस पाठ में हम « दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) » (भाग 5) और भू-राजनीति और विदेश नीति (Geopolitics & Policy) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (31.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (31.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (31.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for भू-राजनीति और विदेश नीति (Geopolitics & Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« भू-राजनीति और विदेश नीति (Geopolitics & Policy) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (31.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (31.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (31.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« दक्षिण एशियाई भू-राजनीति और विदेश नीति (Geopolitics) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (31.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (31.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (31.5.3)।"
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
                    "prompt": "कौन सा वाक्य « भू-राजनीति और विदेश नीति (Geopolitics & Policy) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 31-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (31.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (31.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (31.5.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («विदेश_नीति_31_5»):",
                    "acceptedAnswers": [
                        "विदेश_नीति_31_5"
                    ],
                    "explanation": "The target keyword was: 【विदेश_नीति_31_5】"
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
        "objective": "Comprehensive mastery of राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties).",
        "presentation": {
            "explanation": "इस पाठ में हम « राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) » (भाग 1) और राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (32.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (32.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (32.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (32.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (32.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (32.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (32.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (32.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (32.1.3)।"
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
                    "prompt": "कौन सा वाक्य « राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 32-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (32.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (32.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (32.1.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संधि_32_1»):",
                    "acceptedAnswers": [
                        "संधि_32_1"
                    ],
                    "explanation": "The target keyword was: 【संधि_32_1】"
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
        "objective": "Comprehensive mastery of राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties).",
        "presentation": {
            "explanation": "इस पाठ में हम « राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) » (भाग 2) और राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (32.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (32.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (32.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (32.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (32.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (32.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (32.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (32.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (32.2.3)।"
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
                    "prompt": "कौन सा वाक्य « राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 32-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (32.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (32.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (32.2.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संधि_32_2»):",
                    "acceptedAnswers": [
                        "संधि_32_2"
                    ],
                    "explanation": "The target keyword was: 【संधि_32_2】"
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
        "objective": "Comprehensive mastery of राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties).",
        "presentation": {
            "explanation": "इस पाठ में हम « राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) » (भाग 3) और राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (32.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (32.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (32.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (32.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (32.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (32.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (32.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (32.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (32.3.3)।"
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
                    "prompt": "कौन सा वाक्य « राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 32-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (32.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (32.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (32.3.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संधि_32_3»):",
                    "acceptedAnswers": [
                        "संधि_32_3"
                    ],
                    "explanation": "The target keyword was: 【संधि_32_3】"
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
        "objective": "Comprehensive mastery of राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties).",
        "presentation": {
            "explanation": "इस पाठ में हम « राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) » (भाग 4) और राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (32.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (32.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (32.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (32.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (32.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (32.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (32.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (32.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (32.4.3)।"
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
                    "prompt": "कौन सा वाक्य « राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 32-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (32.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (32.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (32.4.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संधि_32_4»):",
                    "acceptedAnswers": [
                        "संधि_32_4"
                    ],
                    "explanation": "The target keyword was: 【संधि_32_4】"
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
        "objective": "Comprehensive mastery of राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties).",
        "presentation": {
            "explanation": "इस पाठ में हम « राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) » (भाग 5) और राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (32.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (32.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (32.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (32.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (32.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (32.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« राजनयिक शिष्टाचार और अंतर्राष्ट्रीय संधियां (Diplomacy) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (32.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (32.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (32.5.3)।"
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
                    "prompt": "कौन सा वाक्य « राजनय और अंतर्राष्ट्रीय संधियां (Diplomatic Treaties) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 32-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (32.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (32.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (32.5.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («संधि_32_5»):",
                    "acceptedAnswers": [
                        "संधि_32_5"
                    ],
                    "explanation": "The target keyword was: 【संधि_32_5】"
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
        "objective": "Comprehensive mastery of मुहावरे और लोकोक्तियां (Idioms & Proverbs).",
        "presentation": {
            "explanation": "इस पाठ में हम « उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) » (भाग 1) और मुहावरे और लोकोक्तियां (Idioms & Proverbs) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (33.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (33.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (33.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for मुहावरे और लोकोक्तियां (Idioms & Proverbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« मुहावरे और लोकोक्तियां (Idioms & Proverbs) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (33.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (33.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (33.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (33.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (33.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (33.1.3)।"
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
                    "prompt": "कौन सा वाक्य « मुहावरे और लोकोक्तियां (Idioms & Proverbs) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 33-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (33.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (33.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (33.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («मुहावरा_33_1»):",
                    "acceptedAnswers": [
                        "मुहावरा_33_1"
                    ],
                    "explanation": "The target keyword was: 【मुहावरा_33_1】"
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
        "objective": "Comprehensive mastery of मुहावरे और लोकोक्तियां (Idioms & Proverbs).",
        "presentation": {
            "explanation": "इस पाठ में हम « उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) » (भाग 2) और मुहावरे और लोकोक्तियां (Idioms & Proverbs) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (33.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (33.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (33.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for मुहावरे और लोकोक्तियां (Idioms & Proverbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« मुहावरे और लोकोक्तियां (Idioms & Proverbs) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (33.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (33.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (33.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (33.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (33.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (33.2.3)।"
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
                    "prompt": "कौन सा वाक्य « मुहावरे और लोकोक्तियां (Idioms & Proverbs) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 33-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (33.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (33.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (33.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («मुहावरा_33_2»):",
                    "acceptedAnswers": [
                        "मुहावरा_33_2"
                    ],
                    "explanation": "The target keyword was: 【मुहावरा_33_2】"
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
        "objective": "Comprehensive mastery of मुहावरे और लोकोक्तियां (Idioms & Proverbs).",
        "presentation": {
            "explanation": "इस पाठ में हम « उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) » (भाग 3) और मुहावरे और लोकोक्तियां (Idioms & Proverbs) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (33.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (33.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (33.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for मुहावरे और लोकोक्तियां (Idioms & Proverbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« मुहावरे और लोकोक्तियां (Idioms & Proverbs) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (33.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (33.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (33.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (33.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (33.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (33.3.3)।"
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
                    "prompt": "कौन सा वाक्य « मुहावरे और लोकोक्तियां (Idioms & Proverbs) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 33-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (33.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (33.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (33.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («मुहावरा_33_3»):",
                    "acceptedAnswers": [
                        "मुहावरा_33_3"
                    ],
                    "explanation": "The target keyword was: 【मुहावरा_33_3】"
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
        "objective": "Comprehensive mastery of मुहावरे और लोकोक्तियां (Idioms & Proverbs).",
        "presentation": {
            "explanation": "इस पाठ में हम « उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) » (भाग 4) और मुहावरे और लोकोक्तियां (Idioms & Proverbs) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (33.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (33.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (33.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for मुहावरे और लोकोक्तियां (Idioms & Proverbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« मुहावरे और लोकोक्तियां (Idioms & Proverbs) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (33.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (33.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (33.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (33.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (33.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (33.4.3)।"
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
                    "prompt": "कौन सा वाक्य « मुहावरे और लोकोक्तियां (Idioms & Proverbs) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 33-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (33.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (33.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (33.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («मुहावरा_33_4»):",
                    "acceptedAnswers": [
                        "मुहावरा_33_4"
                    ],
                    "explanation": "The target keyword was: 【मुहावरा_33_4】"
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
        "objective": "Comprehensive mastery of मुहावरे और लोकोक्तियां (Idioms & Proverbs).",
        "presentation": {
            "explanation": "इस पाठ में हम « उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) » (भाग 5) और मुहावरे और लोकोक्तियां (Idioms & Proverbs) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (33.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (33.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (33.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for मुहावरे और लोकोक्तियां (Idioms & Proverbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« मुहावरे और लोकोक्तियां (Idioms & Proverbs) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (33.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (33.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (33.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« उच्चस्तरीय मुहावरे और लोकोक्तियां (Advanced Idioms) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (33.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (33.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (33.5.3)।"
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
                    "prompt": "कौन सा वाक्य « मुहावरे और लोकोक्तियां (Idioms & Proverbs) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 33-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (33.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (33.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (33.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («मुहावरा_33_5»):",
                    "acceptedAnswers": [
                        "मुहावरा_33_5"
                    ],
                    "explanation": "The target keyword was: 【मुहावरा_33_5】"
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
        "objective": "Comprehensive mastery of शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "इस पाठ में हम « शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) » (भाग 1) और शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (34.1.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (34.1.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (34.1.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 1)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (34.1.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (34.1.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (34.1.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 1):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (34.1.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (34.1.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (34.1.3)।"
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
                    "prompt": "कौन सा वाक्य « शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 34-1)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (34.1.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (34.1.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (34.1.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («शिखर_वार्ता_34_1»):",
                    "acceptedAnswers": [
                        "शिखर_वार्ता_34_1"
                    ],
                    "explanation": "The target keyword was: 【शिखर_वार्ता_34_1】"
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
        "objective": "Comprehensive mastery of शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "इस पाठ में हम « शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) » (भाग 2) और शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (34.2.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (34.2.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (34.2.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 2)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (34.2.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (34.2.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (34.2.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 2):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (34.2.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (34.2.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (34.2.3)।"
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
                    "prompt": "कौन सा वाक्य « शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 34-2)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (34.2.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (34.2.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (34.2.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («शिखर_वार्ता_34_2»):",
                    "acceptedAnswers": [
                        "शिखर_वार्ता_34_2"
                    ],
                    "explanation": "The target keyword was: 【शिखर_वार्ता_34_2】"
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
        "objective": "Comprehensive mastery of शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "इस पाठ में हम « शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) » (भाग 3) और शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (34.3.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (34.3.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (34.3.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 3)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (34.3.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (34.3.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (34.3.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 3):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (34.3.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (34.3.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (34.3.3)।"
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
                    "prompt": "कौन सा वाक्य « शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 34-3)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (34.3.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (34.3.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (34.3.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («शिखर_वार्ता_34_3»):",
                    "acceptedAnswers": [
                        "शिखर_वार्ता_34_3"
                    ],
                    "explanation": "The target keyword was: 【शिखर_वार्ता_34_3】"
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
        "objective": "Comprehensive mastery of शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "इस पाठ में हम « शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) » (भाग 4) और शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (34.4.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (34.4.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (34.4.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 4)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (34.4.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (34.4.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (34.4.3)।"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 4):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (34.4.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (34.4.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (34.4.3)।"
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
                    "prompt": "कौन सा वाक्य « शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 34-4)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (34.4.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (34.4.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (34.4.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («शिखर_वार्ता_34_4»):",
                    "acceptedAnswers": [
                        "शिखर_वार्ता_34_4"
                    ],
                    "explanation": "The target keyword was: 【शिखर_वार्ता_34_4】"
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
        "objective": "Comprehensive mastery of शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft).",
        "presentation": {
            "explanation": "इस पाठ में हम « शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) » (भाग 5) और शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) के मुख्य भाषाई नियमों का गहन अध्ययन करेंगे। मानक हिन्दी में पदक्रम कर्ता-कर्म-क्रिया (SOV) पर आधारित होता है और सही परसर्गों एवं क्रिया रूपों का प्रयोग अर्थ की स्पष्टता सुनिश्चित करता है। औपचारिक संवाद तथा दैनिक जीवन दोनों में व्याकरण सम्मत वाक्य रचना आत्मविश्वास और सहजता को बढ़ाती है।\n\nव्याकरण विश्लेषण एवं अंग्रेज़ी अर्थ (Grammar Analysis & English Glosses):\nसही व्याकरणिक संरचनाओं के अभ्यास से विद्यार्थी धाराप्रवाह हिन्दी का प्रयोग सरलता से कर सकते हैं।",
            "examples": [
                {
                    "target": "अध्यापक महोदय कक्षा में सभी विद्यार्थियों को विषय के मुख्य और गूढ़ बिंदु समझा रहे हैं (34.5.1)।",
                    "reading": "Adhyapak mahoday kaksha mein sabhi vidyarthiyon ko vishay ke mukhya aur goodh bindu samjha rahe hain.",
                    "translation": "The respected teacher is explaining the key and subtle points of the subject to students in class."
                },
                {
                    "target": "हम प्रतिदिन सुबह पुस्तकालय जाकर ज्ञानवर्धक पुस्तकें और शोध पत्र एकाग्रता से पढ़ते हैं (34.5.2)।",
                    "reading": "Hum pratidin subah pustakalay jakar gyanvardhak pustakein aur shodhpattra ekagrata se padhte hain.",
                    "translation": "We go to the library every morning to read informative books and research papers attentively."
                },
                {
                    "target": "इस ऐतिहासिक शहर में कई प्राचीन स्मारक और सुंदर दर्शनीय स्थल आज भी शान से मौजूद हैं (34.5.3)।",
                    "reading": "Is aitihasik shahar mein kayi pracheen smarak aur sundar darshaniya sthal aaj bhi shaan se maujood hain.",
                    "translation": "Many ancient monuments and beautiful sightseeing spots still exist proudly in this historic city."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Hindi."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "« शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) » के संदर्भ में कौन सा वाक्य मानक व्याकरण की दृष्टि से पूर्णतः शुद्ध है (अभ्यास 5)?",
                    "options": [
                        "मेरी छोटी बहन ने आज सुबह परिवार के लिए स्वादिष्ट नाश्ता और गरमा-गरम चाय बनाई (34.5.1)।",
                        "कल दोपहर केंद्रीय पुस्तकालय में बहुत से छात्र शांतिपूर्वक अपनी परीक्षाओं की तैयारी कर रहे थे (34.5.2)।",
                        "यह रेस्तरां अपने स्वादिष्ट और पारंपरिक उत्तर भारतीय व्यंजनों के लिए पूरे शहर में प्रसिद्ध है (34.5.3)।"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "« शिखर सम्मेलन और नीति वक्तव्य (C2 Capstone Statecraft) » के सही वाक्य विन्यास को दर्शाने वाले कथन का चयन करें (प्रश्न 5):",
                    "options": [
                        "पिताजी ने बाज़ार से लौटते समय बच्चों के लिए सुंदर ज्ञानवर्धक पुस्तकें और खिलौने खरीदे (34.5.1)।",
                        "कल सुबह आठ बजे सभी यात्री रेलवे स्टेशन पर निर्धारित समय से पहले पहुँच गए थे (34.5.2)।",
                        "बगीचे में खिले हुए रंग-बिरंगे फूल सुबह की ठंडी हवा में वातावरण को सुगंधित बना रहे हैं (34.5.3)।"
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
                    "prompt": "कौन सा वाक्य « शिखर सम्मेलन और नीतिगत वक्तव्य (C2 Capstone Statecraft) » के व्याकरणिक नियमों को शत-प्रतिशत प्रमाणित करता है (मूल्यांकन 34-5)?",
                    "options": [
                        "वैज्ञानिकों ने नई अंतरिक्ष परियोजना के प्रथम चरण के सफल परीक्षण की आधिकारिक घोषणा की (34.5.1)।",
                        "अगले वर्ष तक शहर में नई मेट्रो लाइन का निर्माण कार्य पूर्ण रूप से समाप्त हो जाएगा (34.5.2)।",
                        "अंतर्राष्ट्रीय वैज्ञानिक सम्मेलन में अनेक देशों के वरिष्ठ शोधकर्ताओं ने भाग लिया (34.5.3)।"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («शिखर_वार्ता_34_5»):",
                    "acceptedAnswers": [
                        "शिखर_वार्ता_34_5"
                    ],
                    "explanation": "The target keyword was: 【शिखर_वार्ता_34_5】"
                }
            ]
        }
    }
};
  var CURRICULUM = { id: 'hindi', name: 'Hindi', units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['hindi'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
