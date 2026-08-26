// French curriculum — full CEFR A1–C2 roadmap (34 units, 170 lessons)
(function (global) {
  'use strict';
  var UNITS = [
    {
        "id": "fr-u1",
        "unit": 1,
        "title": "Salutations, Présentations et Phonétique (Greetings & Phonetics)",
        "level": "A1",
        "goal": "Mastery of Salutations et formules de politesse (Greetings & Politeness).",
        "lessonIds": [
            "fr-u1-l1",
            "fr-u1-l2",
            "fr-u1-l3",
            "fr-u1-l4",
            "fr-u1-l5"
        ]
    },
    {
        "id": "fr-u2",
        "unit": 2,
        "title": "Articles, Genre et Nombre des Noms (Articles & Gender Agreement)",
        "level": "A1",
        "goal": "Mastery of Articles définis et indéfinis (Articles & Noun Gender).",
        "lessonIds": [
            "fr-u2-l1",
            "fr-u2-l2",
            "fr-u2-l3",
            "fr-u2-l4",
            "fr-u2-l5"
        ]
    },
    {
        "id": "fr-u3",
        "unit": 3,
        "title": "Verbes du Premier Groupe au Présent (Regular -er Verbs in Present)",
        "level": "A1",
        "goal": "Mastery of Verbes réguliers en -er (Regular -er Verbs).",
        "lessonIds": [
            "fr-u3-l1",
            "fr-u3-l2",
            "fr-u3-l3",
            "fr-u3-l4",
            "fr-u3-l5"
        ]
    },
    {
        "id": "fr-u4",
        "unit": 4,
        "title": "Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller",
        "level": "A1",
        "goal": "Mastery of Verbes irréguliers essentiels (Être, Avoir, Faire, Aller).",
        "lessonIds": [
            "fr-u4-l1",
            "fr-u4-l2",
            "fr-u4-l3",
            "fr-u4-l4",
            "fr-u4-l5"
        ]
    },
    {
        "id": "fr-u5",
        "unit": 5,
        "title": "La Négation Simple et Complexe (Negation Structures)",
        "level": "A1",
        "goal": "Mastery of Structures de la négation (Negation: Ne...pas/jamais/rien).",
        "lessonIds": [
            "fr-u5-l1",
            "fr-u5-l2",
            "fr-u5-l3",
            "fr-u5-l4",
            "fr-u5-l5"
        ]
    },
    {
        "id": "fr-u6",
        "unit": 6,
        "title": "Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement)",
        "level": "A2",
        "goal": "Mastery of Accord et place des adjectifs (Adjective Agreement & Position).",
        "lessonIds": [
            "fr-u6-l1",
            "fr-u6-l2",
            "fr-u6-l3",
            "fr-u6-l4",
            "fr-u6-l5"
        ]
    },
    {
        "id": "fr-u7",
        "unit": 7,
        "title": "Le Passé Composé avec Avoir et Être (Compound Past Tense)",
        "level": "A2",
        "goal": "Mastery of Passé composé avec avoir et être (Past Tense with Auxiliaries).",
        "lessonIds": [
            "fr-u7-l1",
            "fr-u7-l2",
            "fr-u7-l3",
            "fr-u7-l4",
            "fr-u7-l5"
        ]
    },
    {
        "id": "fr-u8",
        "unit": 8,
        "title": "L'Imparfait : Description et Habitude (Imperfect Tense)",
        "level": "A2",
        "goal": "Mastery of Imparfait de description (Imperfect for Habits & Description).",
        "lessonIds": [
            "fr-u8-l1",
            "fr-u8-l2",
            "fr-u8-l3",
            "fr-u8-l4",
            "fr-u8-l5"
        ]
    },
    {
        "id": "fr-u9",
        "unit": 9,
        "title": "Passé Composé vs Imparfait en Narration (Past Aspect Distinctions)",
        "level": "A2",
        "goal": "Mastery of Alternance passé composé et imparfait (Past Narrative Aspect).",
        "lessonIds": [
            "fr-u9-l1",
            "fr-u9-l2",
            "fr-u9-l3",
            "fr-u9-l4",
            "fr-u9-l5"
        ]
    },
    {
        "id": "fr-u10",
        "unit": 10,
        "title": "Le Futur Simple et le Futur Proche (Future Tense & Projections)",
        "level": "A2",
        "goal": "Mastery of Futur simple et futur proche (Future Expressions).",
        "lessonIds": [
            "fr-u10-l1",
            "fr-u10-l2",
            "fr-u10-l3",
            "fr-u10-l4",
            "fr-u10-l5"
        ]
    },
    {
        "id": "fr-u11",
        "unit": 11,
        "title": "Pronoms Compléments Directs et Indirects (COD & COI)",
        "level": "B1",
        "goal": "Mastery of Pronoms COD et COI (Direct & Indirect Object Pronouns).",
        "lessonIds": [
            "fr-u11-l1",
            "fr-u11-l2",
            "fr-u11-l3",
            "fr-u11-l4",
            "fr-u11-l5"
        ]
    },
    {
        "id": "fr-u12",
        "unit": 12,
        "title": "Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En)",
        "level": "B1",
        "goal": "Mastery of Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En).",
        "lessonIds": [
            "fr-u12-l1",
            "fr-u12-l2",
            "fr-u12-l3",
            "fr-u12-l4",
            "fr-u12-l5"
        ]
    },
    {
        "id": "fr-u13",
        "unit": 13,
        "title": "Le Conditionnel Présent : Politesse et Souhait (Present Conditional)",
        "level": "B1",
        "goal": "Mastery of Conditionnel de politesse et souhait (Polite Conditional).",
        "lessonIds": [
            "fr-u13-l1",
            "fr-u13-l2",
            "fr-u13-l3",
            "fr-u13-l4",
            "fr-u13-l5"
        ]
    },
    {
        "id": "fr-u14",
        "unit": 14,
        "title": "Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood)",
        "level": "B1",
        "goal": "Mastery of Subjonctif présent de nécessité (Subjunctive of Necessity).",
        "lessonIds": [
            "fr-u14-l1",
            "fr-u14-l2",
            "fr-u14-l3",
            "fr-u14-l4",
            "fr-u14-l5"
        ]
    },
    {
        "id": "fr-u15",
        "unit": 15,
        "title": "Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns)",
        "level": "B1",
        "goal": "Mastery of Pronoms relatifs qui, que, où, dont (Relative Clauses).",
        "lessonIds": [
            "fr-u15-l1",
            "fr-u15-l2",
            "fr-u15-l3",
            "fr-u15-l4",
            "fr-u15-l5"
        ]
    },
    {
        "id": "fr-u16",
        "unit": 16,
        "title": "La Comparaison et le Superlatif (Comparative Structures)",
        "level": "B1",
        "goal": "Mastery of Comparatifs et superlatifs (Comparative & Superlative Forms).",
        "lessonIds": [
            "fr-u16-l1",
            "fr-u16-l2",
            "fr-u16-l3",
            "fr-u16-l4",
            "fr-u16-l5"
        ]
    },
    {
        "id": "fr-u17",
        "unit": 17,
        "title": "Le Plus-que-parfait et la Concordance des Temps au Passé",
        "level": "B2",
        "goal": "Mastery of Plus-que-parfait et antériorité (Past Anteriority).",
        "lessonIds": [
            "fr-u17-l1",
            "fr-u17-l2",
            "fr-u17-l3",
            "fr-u17-l4",
            "fr-u17-l5"
        ]
    },
    {
        "id": "fr-u18",
        "unit": 18,
        "title": "Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses)",
        "level": "B2",
        "goal": "Mastery of Hypothèses avec la conjonction si (Hypothetical Conditions).",
        "lessonIds": [
            "fr-u18-l1",
            "fr-u18-l2",
            "fr-u18-l3",
            "fr-u18-l4",
            "fr-u18-l5"
        ]
    },
    {
        "id": "fr-u19",
        "unit": 19,
        "title": "La Voix Passive et le Passif Pronominal (Passive Voice)",
        "level": "B2",
        "goal": "Mastery of Forme passive et passif pronominal (Passive Constructions).",
        "lessonIds": [
            "fr-u19-l1",
            "fr-u19-l2",
            "fr-u19-l3",
            "fr-u19-l4",
            "fr-u19-l5"
        ]
    },
    {
        "id": "fr-u20",
        "unit": 20,
        "title": "Le Discours Rapporté au Présent et au Passé (Reported Speech)",
        "level": "B2",
        "goal": "Mastery of Discours indirect et concordance (Reported Speech).",
        "lessonIds": [
            "fr-u20-l1",
            "fr-u20-l2",
            "fr-u20-l3",
            "fr-u20-l4",
            "fr-u20-l5"
        ]
    },
    {
        "id": "fr-u21",
        "unit": 21,
        "title": "Subordonnées Circonstancielles de Cause, But et Conséquence",
        "level": "B2",
        "goal": "Mastery of Propositions subordonnées de cause et but (Causal & Final Clauses).",
        "lessonIds": [
            "fr-u21-l1",
            "fr-u21-l2",
            "fr-u21-l3",
            "fr-u21-l4",
            "fr-u21-l5"
        ]
    },
    {
        "id": "fr-u22",
        "unit": 22,
        "title": "La Concession et l'Opposition : Bien que, Malgré, Quoique",
        "level": "B2",
        "goal": "Mastery of Concession et opposition (Concessive Clauses).",
        "lessonIds": [
            "fr-u22-l1",
            "fr-u22-l2",
            "fr-u22-l3",
            "fr-u22-l4",
            "fr-u22-l5"
        ]
    },
    {
        "id": "fr-u23",
        "unit": 23,
        "title": "Correspondance Professionnelle et Négociation Commerciale",
        "level": "B2",
        "goal": "Mastery of Français des affaires et négociation (Corporate Communication).",
        "lessonIds": [
            "fr-u23-l1",
            "fr-u23-l2",
            "fr-u23-l3",
            "fr-u23-l4",
            "fr-u23-l5"
        ]
    },
    {
        "id": "fr-u24",
        "unit": 24,
        "title": "Terminologie Médicale et Système de Santé (Healthcare French)",
        "level": "B2",
        "goal": "Mastery of Consultations médicales et santé (Medical Discourse).",
        "lessonIds": [
            "fr-u24-l1",
            "fr-u24-l2",
            "fr-u24-l3",
            "fr-u24-l4",
            "fr-u24-l5"
        ]
    },
    {
        "id": "fr-u25",
        "unit": 25,
        "title": "Droit Civil, Contrats et Vocabulaire Juridique (Legal French)",
        "level": "C1",
        "goal": "Mastery of Vocabulaire juridique et contrats (Legal Terminology).",
        "lessonIds": [
            "fr-u25-l1",
            "fr-u25-l2",
            "fr-u25-l3",
            "fr-u25-l4",
            "fr-u25-l5"
        ]
    },
    {
        "id": "fr-u26",
        "unit": 26,
        "title": "Économie, Finance et Marchés Boursiers (Financial Discourse)",
        "level": "C1",
        "goal": "Mastery of Analyse économique et marchés (Financial Markets).",
        "lessonIds": [
            "fr-u26-l1",
            "fr-u26-l2",
            "fr-u26-l3",
            "fr-u26-l4",
            "fr-u26-l5"
        ]
    },
    {
        "id": "fr-u27",
        "unit": 27,
        "title": "Critique Littéraire et Analyse Cinématographique (Arts & Film)",
        "level": "C1",
        "goal": "Mastery of Analyse littéraire et cinéma (Arts & Cinema Criticism).",
        "lessonIds": [
            "fr-u27-l1",
            "fr-u27-l2",
            "fr-u27-l3",
            "fr-u27-l4",
            "fr-u27-l5"
        ]
    },
    {
        "id": "fr-u28",
        "unit": 28,
        "title": "Écologie, Énergie et Politiques Environnementales (Ecology)",
        "level": "C1",
        "goal": "Mastery of Écologie et développement durable (Environmental Policy).",
        "lessonIds": [
            "fr-u28-l1",
            "fr-u28-l2",
            "fr-u28-l3",
            "fr-u28-l4",
            "fr-u28-l5"
        ]
    },
    {
        "id": "fr-u29",
        "unit": 29,
        "title": "Débats Politiques et Institutions Républicaines (Politics)",
        "level": "C1",
        "goal": "Mastery of Institutions républicaines et débat (Political Institutions).",
        "lessonIds": [
            "fr-u29-l1",
            "fr-u29-l2",
            "fr-u29-l3",
            "fr-u29-l4",
            "fr-u29-l5"
        ]
    },
    {
        "id": "fr-u30",
        "unit": 30,
        "title": "Philosophie des Lumières et Pensée Critique (Philosophy)",
        "level": "C1",
        "goal": "Mastery of Philosophie et pensée critique (Philosophical Discourse).",
        "lessonIds": [
            "fr-u30-l1",
            "fr-u30-l2",
            "fr-u30-l3",
            "fr-u30-l4",
            "fr-u30-l5"
        ]
    },
    {
        "id": "fr-u31",
        "unit": 31,
        "title": "Recherche Scientifique et Épistémologie (Academic Research)",
        "level": "C2",
        "goal": "Mastery of Recherche scientifique et méthodologie (Scientific Methodology).",
        "lessonIds": [
            "fr-u31-l1",
            "fr-u31-l2",
            "fr-u31-l3",
            "fr-u31-l4",
            "fr-u31-l5"
        ]
    },
    {
        "id": "fr-u32",
        "unit": 32,
        "title": "Diplomatie Multilatérale et Protocoles d'État (Diplomacy)",
        "level": "C2",
        "goal": "Mastery of Diplomatie et traités internationaux (Diplomatic Protocol).",
        "lessonIds": [
            "fr-u32-l1",
            "fr-u32-l2",
            "fr-u32-l3",
            "fr-u32-l4",
            "fr-u32-l5"
        ]
    },
    {
        "id": "fr-u33",
        "unit": 33,
        "title": "Stylistique Littéraire, Passé Simple et Subjonctif Imparfait",
        "level": "C2",
        "goal": "Mastery of Stylistique littéraire et passé simple (Literary Stylistics).",
        "lessonIds": [
            "fr-u33-l1",
            "fr-u33-l2",
            "fr-u33-l3",
            "fr-u33-l4",
            "fr-u33-l5"
        ]
    },
    {
        "id": "fr-u34",
        "unit": 34,
        "title": "Sommets Internationaux et Synthèse Rhétorique (C2 Capstone)",
        "level": "C2",
        "goal": "Mastery of Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric).",
        "lessonIds": [
            "fr-u34-l1",
            "fr-u34-l2",
            "fr-u34-l3",
            "fr-u34-l4",
            "fr-u34-l5"
        ]
    }
];
  var LESSONS = {
    "fr-u1-l1": {
        "id": "fr-u1-l1",
        "subject": "french",
        "unit": 1,
        "lessonNumber": 1,
        "title": "Salutations, Présentations et Phonétique (Greetings & Phonetics) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of Salutations et formules de politesse (Greetings & Politeness).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Salutations, Présentations et Phonétique (Greetings & Phonetics) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Salutations et formules de politesse (Greetings & Politeness). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (1.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (1.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (1.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Salutations et formules de politesse (Greetings & Politeness)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Salutations et formules de politesse (Greetings & Politeness) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (1.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (1.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (1.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Salutations, Présentations et Phonétique (Greetings & Phonetics) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (1.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (1.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (1.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Salutations et formules de politesse (Greetings & Politeness) » (Test 1-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (1.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (1.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (1.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bonjour_1_1»):",
                    "acceptedAnswers": [
                        "bonjour_1_1"
                    ],
                    "explanation": "The target keyword was: 【bonjour_1_1】"
                }
            ]
        }
    },
    "fr-u1-l2": {
        "id": "fr-u1-l2",
        "subject": "french",
        "unit": 1,
        "lessonNumber": 2,
        "title": "Salutations, Présentations et Phonétique (Greetings & Phonetics) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of Salutations et formules de politesse (Greetings & Politeness).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Salutations, Présentations et Phonétique (Greetings & Phonetics) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Salutations et formules de politesse (Greetings & Politeness). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (1.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (1.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (1.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Salutations et formules de politesse (Greetings & Politeness)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Salutations et formules de politesse (Greetings & Politeness) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (1.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (1.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (1.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Salutations, Présentations et Phonétique (Greetings & Phonetics) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (1.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (1.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (1.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Salutations et formules de politesse (Greetings & Politeness) » (Test 1-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (1.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (1.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (1.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bonjour_1_2»):",
                    "acceptedAnswers": [
                        "bonjour_1_2"
                    ],
                    "explanation": "The target keyword was: 【bonjour_1_2】"
                }
            ]
        }
    },
    "fr-u1-l3": {
        "id": "fr-u1-l3",
        "subject": "french",
        "unit": 1,
        "lessonNumber": 3,
        "title": "Salutations, Présentations et Phonétique (Greetings & Phonetics) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of Salutations et formules de politesse (Greetings & Politeness).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Salutations, Présentations et Phonétique (Greetings & Phonetics) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Salutations et formules de politesse (Greetings & Politeness). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (1.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (1.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (1.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Salutations et formules de politesse (Greetings & Politeness)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Salutations et formules de politesse (Greetings & Politeness) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (1.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (1.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (1.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Salutations, Présentations et Phonétique (Greetings & Phonetics) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (1.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (1.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (1.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Salutations et formules de politesse (Greetings & Politeness) » (Test 1-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (1.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (1.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (1.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bonjour_1_3»):",
                    "acceptedAnswers": [
                        "bonjour_1_3"
                    ],
                    "explanation": "The target keyword was: 【bonjour_1_3】"
                }
            ]
        }
    },
    "fr-u1-l4": {
        "id": "fr-u1-l4",
        "subject": "french",
        "unit": 1,
        "lessonNumber": 4,
        "title": "Salutations, Présentations et Phonétique (Greetings & Phonetics) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of Salutations et formules de politesse (Greetings & Politeness).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Salutations, Présentations et Phonétique (Greetings & Phonetics) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Salutations et formules de politesse (Greetings & Politeness). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (1.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (1.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (1.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Salutations et formules de politesse (Greetings & Politeness)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Salutations et formules de politesse (Greetings & Politeness) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (1.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (1.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (1.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Salutations, Présentations et Phonétique (Greetings & Phonetics) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (1.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (1.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (1.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Salutations et formules de politesse (Greetings & Politeness) » (Test 1-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (1.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (1.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (1.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bonjour_1_4»):",
                    "acceptedAnswers": [
                        "bonjour_1_4"
                    ],
                    "explanation": "The target keyword was: 【bonjour_1_4】"
                }
            ]
        }
    },
    "fr-u1-l5": {
        "id": "fr-u1-l5",
        "subject": "french",
        "unit": 1,
        "lessonNumber": 5,
        "title": "Salutations, Présentations et Phonétique (Greetings & Phonetics) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of Salutations et formules de politesse (Greetings & Politeness).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Salutations, Présentations et Phonétique (Greetings & Phonetics) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Salutations et formules de politesse (Greetings & Politeness). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (1.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (1.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (1.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Salutations et formules de politesse (Greetings & Politeness)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Salutations et formules de politesse (Greetings & Politeness) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (1.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (1.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (1.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Salutations, Présentations et Phonétique (Greetings & Phonetics) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (1.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (1.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (1.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Salutations et formules de politesse (Greetings & Politeness) » (Test 1-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (1.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (1.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (1.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bonjour_1_5»):",
                    "acceptedAnswers": [
                        "bonjour_1_5"
                    ],
                    "explanation": "The target keyword was: 【bonjour_1_5】"
                }
            ]
        }
    },
    "fr-u2-l1": {
        "id": "fr-u2-l1",
        "subject": "french",
        "unit": 2,
        "lessonNumber": 1,
        "title": "Articles, Genre et Nombre des Noms (Articles & Gender Agreement) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of Articles définis et indéfinis (Articles & Noun Gender).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Articles, Genre et Nombre des Noms (Articles & Gender Agreement) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Articles définis et indéfinis (Articles & Noun Gender). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (2.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (2.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (2.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Articles définis et indéfinis (Articles & Noun Gender)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Articles définis et indéfinis (Articles & Noun Gender) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (2.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (2.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (2.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Articles, Genre et Nombre des Noms (Articles & Gender Agreement) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (2.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (2.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (2.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Articles définis et indéfinis (Articles & Noun Gender) » (Test 2-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (2.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (2.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (2.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («le_livre_2_1»):",
                    "acceptedAnswers": [
                        "le_livre_2_1"
                    ],
                    "explanation": "The target keyword was: 【le_livre_2_1】"
                }
            ]
        }
    },
    "fr-u2-l2": {
        "id": "fr-u2-l2",
        "subject": "french",
        "unit": 2,
        "lessonNumber": 2,
        "title": "Articles, Genre et Nombre des Noms (Articles & Gender Agreement) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of Articles définis et indéfinis (Articles & Noun Gender).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Articles, Genre et Nombre des Noms (Articles & Gender Agreement) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Articles définis et indéfinis (Articles & Noun Gender). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (2.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (2.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (2.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Articles définis et indéfinis (Articles & Noun Gender)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Articles définis et indéfinis (Articles & Noun Gender) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (2.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (2.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (2.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Articles, Genre et Nombre des Noms (Articles & Gender Agreement) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (2.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (2.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (2.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Articles définis et indéfinis (Articles & Noun Gender) » (Test 2-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (2.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (2.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (2.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («le_livre_2_2»):",
                    "acceptedAnswers": [
                        "le_livre_2_2"
                    ],
                    "explanation": "The target keyword was: 【le_livre_2_2】"
                }
            ]
        }
    },
    "fr-u2-l3": {
        "id": "fr-u2-l3",
        "subject": "french",
        "unit": 2,
        "lessonNumber": 3,
        "title": "Articles, Genre et Nombre des Noms (Articles & Gender Agreement) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of Articles définis et indéfinis (Articles & Noun Gender).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Articles, Genre et Nombre des Noms (Articles & Gender Agreement) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Articles définis et indéfinis (Articles & Noun Gender). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (2.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (2.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (2.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Articles définis et indéfinis (Articles & Noun Gender)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Articles définis et indéfinis (Articles & Noun Gender) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (2.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (2.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (2.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Articles, Genre et Nombre des Noms (Articles & Gender Agreement) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (2.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (2.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (2.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Articles définis et indéfinis (Articles & Noun Gender) » (Test 2-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (2.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (2.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (2.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («le_livre_2_3»):",
                    "acceptedAnswers": [
                        "le_livre_2_3"
                    ],
                    "explanation": "The target keyword was: 【le_livre_2_3】"
                }
            ]
        }
    },
    "fr-u2-l4": {
        "id": "fr-u2-l4",
        "subject": "french",
        "unit": 2,
        "lessonNumber": 4,
        "title": "Articles, Genre et Nombre des Noms (Articles & Gender Agreement) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of Articles définis et indéfinis (Articles & Noun Gender).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Articles, Genre et Nombre des Noms (Articles & Gender Agreement) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Articles définis et indéfinis (Articles & Noun Gender). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (2.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (2.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (2.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Articles définis et indéfinis (Articles & Noun Gender)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Articles définis et indéfinis (Articles & Noun Gender) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (2.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (2.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (2.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Articles, Genre et Nombre des Noms (Articles & Gender Agreement) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (2.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (2.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (2.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Articles définis et indéfinis (Articles & Noun Gender) » (Test 2-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (2.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (2.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (2.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («le_livre_2_4»):",
                    "acceptedAnswers": [
                        "le_livre_2_4"
                    ],
                    "explanation": "The target keyword was: 【le_livre_2_4】"
                }
            ]
        }
    },
    "fr-u2-l5": {
        "id": "fr-u2-l5",
        "subject": "french",
        "unit": 2,
        "lessonNumber": 5,
        "title": "Articles, Genre et Nombre des Noms (Articles & Gender Agreement) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of Articles définis et indéfinis (Articles & Noun Gender).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Articles, Genre et Nombre des Noms (Articles & Gender Agreement) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Articles définis et indéfinis (Articles & Noun Gender). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (2.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (2.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (2.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Articles définis et indéfinis (Articles & Noun Gender)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Articles définis et indéfinis (Articles & Noun Gender) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (2.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (2.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (2.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Articles, Genre et Nombre des Noms (Articles & Gender Agreement) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (2.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (2.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (2.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Articles définis et indéfinis (Articles & Noun Gender) » (Test 2-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (2.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (2.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (2.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («le_livre_2_5»):",
                    "acceptedAnswers": [
                        "le_livre_2_5"
                    ],
                    "explanation": "The target keyword was: 【le_livre_2_5】"
                }
            ]
        }
    },
    "fr-u3-l1": {
        "id": "fr-u3-l1",
        "subject": "french",
        "unit": 3,
        "lessonNumber": 1,
        "title": "Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of Verbes réguliers en -er (Regular -er Verbs).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Verbes réguliers en -er (Regular -er Verbs). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (3.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (3.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (3.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Verbes réguliers en -er (Regular -er Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Verbes réguliers en -er (Regular -er Verbs) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (3.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (3.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (3.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (3.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (3.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (3.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Verbes réguliers en -er (Regular -er Verbs) » (Test 3-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (3.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (3.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (3.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («parler_3_1»):",
                    "acceptedAnswers": [
                        "parler_3_1"
                    ],
                    "explanation": "The target keyword was: 【parler_3_1】"
                }
            ]
        }
    },
    "fr-u3-l2": {
        "id": "fr-u3-l2",
        "subject": "french",
        "unit": 3,
        "lessonNumber": 2,
        "title": "Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of Verbes réguliers en -er (Regular -er Verbs).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Verbes réguliers en -er (Regular -er Verbs). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (3.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (3.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (3.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Verbes réguliers en -er (Regular -er Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Verbes réguliers en -er (Regular -er Verbs) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (3.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (3.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (3.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (3.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (3.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (3.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Verbes réguliers en -er (Regular -er Verbs) » (Test 3-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (3.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (3.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (3.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («parler_3_2»):",
                    "acceptedAnswers": [
                        "parler_3_2"
                    ],
                    "explanation": "The target keyword was: 【parler_3_2】"
                }
            ]
        }
    },
    "fr-u3-l3": {
        "id": "fr-u3-l3",
        "subject": "french",
        "unit": 3,
        "lessonNumber": 3,
        "title": "Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of Verbes réguliers en -er (Regular -er Verbs).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Verbes réguliers en -er (Regular -er Verbs). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (3.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (3.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (3.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Verbes réguliers en -er (Regular -er Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Verbes réguliers en -er (Regular -er Verbs) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (3.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (3.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (3.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (3.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (3.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (3.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Verbes réguliers en -er (Regular -er Verbs) » (Test 3-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (3.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (3.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (3.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («parler_3_3»):",
                    "acceptedAnswers": [
                        "parler_3_3"
                    ],
                    "explanation": "The target keyword was: 【parler_3_3】"
                }
            ]
        }
    },
    "fr-u3-l4": {
        "id": "fr-u3-l4",
        "subject": "french",
        "unit": 3,
        "lessonNumber": 4,
        "title": "Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of Verbes réguliers en -er (Regular -er Verbs).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Verbes réguliers en -er (Regular -er Verbs). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (3.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (3.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (3.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Verbes réguliers en -er (Regular -er Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Verbes réguliers en -er (Regular -er Verbs) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (3.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (3.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (3.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (3.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (3.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (3.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Verbes réguliers en -er (Regular -er Verbs) » (Test 3-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (3.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (3.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (3.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («parler_3_4»):",
                    "acceptedAnswers": [
                        "parler_3_4"
                    ],
                    "explanation": "The target keyword was: 【parler_3_4】"
                }
            ]
        }
    },
    "fr-u3-l5": {
        "id": "fr-u3-l5",
        "subject": "french",
        "unit": 3,
        "lessonNumber": 5,
        "title": "Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of Verbes réguliers en -er (Regular -er Verbs).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Verbes réguliers en -er (Regular -er Verbs). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (3.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (3.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (3.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Verbes réguliers en -er (Regular -er Verbs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Verbes réguliers en -er (Regular -er Verbs) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (3.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (3.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (3.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Verbes du Premier Groupe au Présent (Regular -er Verbs in Present) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (3.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (3.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (3.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Verbes réguliers en -er (Regular -er Verbs) » (Test 3-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (3.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (3.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (3.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («parler_3_5»):",
                    "acceptedAnswers": [
                        "parler_3_5"
                    ],
                    "explanation": "The target keyword was: 【parler_3_5】"
                }
            ]
        }
    },
    "fr-u4-l1": {
        "id": "fr-u4-l1",
        "subject": "french",
        "unit": 4,
        "lessonNumber": 1,
        "title": "Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of Verbes irréguliers essentiels (Être, Avoir, Faire, Aller).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Verbes irréguliers essentiels (Être, Avoir, Faire, Aller). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (4.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (4.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (4.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Verbes irréguliers essentiels (Être, Avoir, Faire, Aller)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Verbes irréguliers essentiels (Être, Avoir, Faire, Aller) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (4.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (4.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (4.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (4.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (4.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (4.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Verbes irréguliers essentiels (Être, Avoir, Faire, Aller) » (Test 4-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (4.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (4.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (4.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_suis_4_1»):",
                    "acceptedAnswers": [
                        "je_suis_4_1"
                    ],
                    "explanation": "The target keyword was: 【je_suis_4_1】"
                }
            ]
        }
    },
    "fr-u4-l2": {
        "id": "fr-u4-l2",
        "subject": "french",
        "unit": 4,
        "lessonNumber": 2,
        "title": "Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of Verbes irréguliers essentiels (Être, Avoir, Faire, Aller).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Verbes irréguliers essentiels (Être, Avoir, Faire, Aller). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (4.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (4.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (4.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Verbes irréguliers essentiels (Être, Avoir, Faire, Aller)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Verbes irréguliers essentiels (Être, Avoir, Faire, Aller) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (4.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (4.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (4.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (4.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (4.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (4.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Verbes irréguliers essentiels (Être, Avoir, Faire, Aller) » (Test 4-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (4.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (4.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (4.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_suis_4_2»):",
                    "acceptedAnswers": [
                        "je_suis_4_2"
                    ],
                    "explanation": "The target keyword was: 【je_suis_4_2】"
                }
            ]
        }
    },
    "fr-u4-l3": {
        "id": "fr-u4-l3",
        "subject": "french",
        "unit": 4,
        "lessonNumber": 3,
        "title": "Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of Verbes irréguliers essentiels (Être, Avoir, Faire, Aller).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Verbes irréguliers essentiels (Être, Avoir, Faire, Aller). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (4.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (4.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (4.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Verbes irréguliers essentiels (Être, Avoir, Faire, Aller)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Verbes irréguliers essentiels (Être, Avoir, Faire, Aller) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (4.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (4.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (4.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (4.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (4.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (4.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Verbes irréguliers essentiels (Être, Avoir, Faire, Aller) » (Test 4-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (4.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (4.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (4.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_suis_4_3»):",
                    "acceptedAnswers": [
                        "je_suis_4_3"
                    ],
                    "explanation": "The target keyword was: 【je_suis_4_3】"
                }
            ]
        }
    },
    "fr-u4-l4": {
        "id": "fr-u4-l4",
        "subject": "french",
        "unit": 4,
        "lessonNumber": 4,
        "title": "Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of Verbes irréguliers essentiels (Être, Avoir, Faire, Aller).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Verbes irréguliers essentiels (Être, Avoir, Faire, Aller). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (4.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (4.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (4.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Verbes irréguliers essentiels (Être, Avoir, Faire, Aller)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Verbes irréguliers essentiels (Être, Avoir, Faire, Aller) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (4.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (4.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (4.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (4.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (4.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (4.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Verbes irréguliers essentiels (Être, Avoir, Faire, Aller) » (Test 4-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (4.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (4.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (4.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_suis_4_4»):",
                    "acceptedAnswers": [
                        "je_suis_4_4"
                    ],
                    "explanation": "The target keyword was: 【je_suis_4_4】"
                }
            ]
        }
    },
    "fr-u4-l5": {
        "id": "fr-u4-l5",
        "subject": "french",
        "unit": 4,
        "lessonNumber": 5,
        "title": "Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of Verbes irréguliers essentiels (Être, Avoir, Faire, Aller).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Verbes irréguliers essentiels (Être, Avoir, Faire, Aller). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (4.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (4.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (4.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Verbes irréguliers essentiels (Être, Avoir, Faire, Aller)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Verbes irréguliers essentiels (Être, Avoir, Faire, Aller) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (4.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (4.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (4.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Verbes Irréguliers Essentiels : Être, Avoir, Faire, Aller » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (4.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (4.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (4.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Verbes irréguliers essentiels (Être, Avoir, Faire, Aller) » (Test 4-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (4.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (4.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (4.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_suis_4_5»):",
                    "acceptedAnswers": [
                        "je_suis_4_5"
                    ],
                    "explanation": "The target keyword was: 【je_suis_4_5】"
                }
            ]
        }
    },
    "fr-u5-l1": {
        "id": "fr-u5-l1",
        "subject": "french",
        "unit": 5,
        "lessonNumber": 1,
        "title": "La Négation Simple et Complexe (Negation Structures) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of Structures de la négation (Negation: Ne...pas/jamais/rien).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Négation Simple et Complexe (Negation Structures) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Structures de la négation (Negation: Ne...pas/jamais/rien). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (5.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (5.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (5.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Structures de la négation (Negation: Ne...pas/jamais/rien)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Structures de la négation (Negation: Ne...pas/jamais/rien) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (5.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (5.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (5.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Négation Simple et Complexe (Negation Structures) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (5.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (5.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (5.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Structures de la négation (Negation: Ne...pas/jamais/rien) » (Test 5-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (5.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (5.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (5.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ne_pas_5_1»):",
                    "acceptedAnswers": [
                        "ne_pas_5_1"
                    ],
                    "explanation": "The target keyword was: 【ne_pas_5_1】"
                }
            ]
        }
    },
    "fr-u5-l2": {
        "id": "fr-u5-l2",
        "subject": "french",
        "unit": 5,
        "lessonNumber": 2,
        "title": "La Négation Simple et Complexe (Negation Structures) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of Structures de la négation (Negation: Ne...pas/jamais/rien).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Négation Simple et Complexe (Negation Structures) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Structures de la négation (Negation: Ne...pas/jamais/rien). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (5.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (5.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (5.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Structures de la négation (Negation: Ne...pas/jamais/rien)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Structures de la négation (Negation: Ne...pas/jamais/rien) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (5.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (5.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (5.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Négation Simple et Complexe (Negation Structures) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (5.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (5.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (5.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Structures de la négation (Negation: Ne...pas/jamais/rien) » (Test 5-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (5.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (5.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (5.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ne_pas_5_2»):",
                    "acceptedAnswers": [
                        "ne_pas_5_2"
                    ],
                    "explanation": "The target keyword was: 【ne_pas_5_2】"
                }
            ]
        }
    },
    "fr-u5-l3": {
        "id": "fr-u5-l3",
        "subject": "french",
        "unit": 5,
        "lessonNumber": 3,
        "title": "La Négation Simple et Complexe (Negation Structures) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of Structures de la négation (Negation: Ne...pas/jamais/rien).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Négation Simple et Complexe (Negation Structures) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Structures de la négation (Negation: Ne...pas/jamais/rien). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (5.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (5.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (5.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Structures de la négation (Negation: Ne...pas/jamais/rien)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Structures de la négation (Negation: Ne...pas/jamais/rien) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (5.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (5.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (5.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Négation Simple et Complexe (Negation Structures) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (5.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (5.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (5.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Structures de la négation (Negation: Ne...pas/jamais/rien) » (Test 5-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (5.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (5.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (5.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ne_pas_5_3»):",
                    "acceptedAnswers": [
                        "ne_pas_5_3"
                    ],
                    "explanation": "The target keyword was: 【ne_pas_5_3】"
                }
            ]
        }
    },
    "fr-u5-l4": {
        "id": "fr-u5-l4",
        "subject": "french",
        "unit": 5,
        "lessonNumber": 4,
        "title": "La Négation Simple et Complexe (Negation Structures) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of Structures de la négation (Negation: Ne...pas/jamais/rien).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Négation Simple et Complexe (Negation Structures) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Structures de la négation (Negation: Ne...pas/jamais/rien). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (5.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (5.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (5.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Structures de la négation (Negation: Ne...pas/jamais/rien)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Structures de la négation (Negation: Ne...pas/jamais/rien) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (5.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (5.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (5.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Négation Simple et Complexe (Negation Structures) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (5.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (5.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (5.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Structures de la négation (Negation: Ne...pas/jamais/rien) » (Test 5-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (5.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (5.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (5.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ne_pas_5_4»):",
                    "acceptedAnswers": [
                        "ne_pas_5_4"
                    ],
                    "explanation": "The target keyword was: 【ne_pas_5_4】"
                }
            ]
        }
    },
    "fr-u5-l5": {
        "id": "fr-u5-l5",
        "subject": "french",
        "unit": 5,
        "lessonNumber": 5,
        "title": "La Négation Simple et Complexe (Negation Structures) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of Structures de la négation (Negation: Ne...pas/jamais/rien).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Négation Simple et Complexe (Negation Structures) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Structures de la négation (Negation: Ne...pas/jamais/rien). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (5.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (5.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (5.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Structures de la négation (Negation: Ne...pas/jamais/rien)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Structures de la négation (Negation: Ne...pas/jamais/rien) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (5.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (5.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (5.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Négation Simple et Complexe (Negation Structures) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (5.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (5.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (5.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Structures de la négation (Negation: Ne...pas/jamais/rien) » (Test 5-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (5.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (5.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (5.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («ne_pas_5_5»):",
                    "acceptedAnswers": [
                        "ne_pas_5_5"
                    ],
                    "explanation": "The target keyword was: 【ne_pas_5_5】"
                }
            ]
        }
    },
    "fr-u6-l1": {
        "id": "fr-u6-l1",
        "subject": "french",
        "unit": 6,
        "lessonNumber": 1,
        "title": "Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of Accord et place des adjectifs (Adjective Agreement & Position).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Accord et place des adjectifs (Adjective Agreement & Position). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (6.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (6.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (6.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Accord et place des adjectifs (Adjective Agreement & Position)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Accord et place des adjectifs (Adjective Agreement & Position) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (6.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (6.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (6.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (6.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (6.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (6.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Accord et place des adjectifs (Adjective Agreement & Position) » (Test 6-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (6.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (6.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (6.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («grand_6_1»):",
                    "acceptedAnswers": [
                        "grand_6_1"
                    ],
                    "explanation": "The target keyword was: 【grand_6_1】"
                }
            ]
        }
    },
    "fr-u6-l2": {
        "id": "fr-u6-l2",
        "subject": "french",
        "unit": 6,
        "lessonNumber": 2,
        "title": "Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of Accord et place des adjectifs (Adjective Agreement & Position).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Accord et place des adjectifs (Adjective Agreement & Position). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (6.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (6.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (6.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Accord et place des adjectifs (Adjective Agreement & Position)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Accord et place des adjectifs (Adjective Agreement & Position) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (6.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (6.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (6.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (6.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (6.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (6.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Accord et place des adjectifs (Adjective Agreement & Position) » (Test 6-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (6.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (6.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (6.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («grand_6_2»):",
                    "acceptedAnswers": [
                        "grand_6_2"
                    ],
                    "explanation": "The target keyword was: 【grand_6_2】"
                }
            ]
        }
    },
    "fr-u6-l3": {
        "id": "fr-u6-l3",
        "subject": "french",
        "unit": 6,
        "lessonNumber": 3,
        "title": "Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of Accord et place des adjectifs (Adjective Agreement & Position).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Accord et place des adjectifs (Adjective Agreement & Position). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (6.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (6.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (6.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Accord et place des adjectifs (Adjective Agreement & Position)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Accord et place des adjectifs (Adjective Agreement & Position) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (6.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (6.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (6.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (6.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (6.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (6.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Accord et place des adjectifs (Adjective Agreement & Position) » (Test 6-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (6.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (6.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (6.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («grand_6_3»):",
                    "acceptedAnswers": [
                        "grand_6_3"
                    ],
                    "explanation": "The target keyword was: 【grand_6_3】"
                }
            ]
        }
    },
    "fr-u6-l4": {
        "id": "fr-u6-l4",
        "subject": "french",
        "unit": 6,
        "lessonNumber": 4,
        "title": "Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of Accord et place des adjectifs (Adjective Agreement & Position).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Accord et place des adjectifs (Adjective Agreement & Position). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (6.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (6.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (6.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Accord et place des adjectifs (Adjective Agreement & Position)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Accord et place des adjectifs (Adjective Agreement & Position) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (6.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (6.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (6.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (6.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (6.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (6.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Accord et place des adjectifs (Adjective Agreement & Position) » (Test 6-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (6.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (6.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (6.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («grand_6_4»):",
                    "acceptedAnswers": [
                        "grand_6_4"
                    ],
                    "explanation": "The target keyword was: 【grand_6_4】"
                }
            ]
        }
    },
    "fr-u6-l5": {
        "id": "fr-u6-l5",
        "subject": "french",
        "unit": 6,
        "lessonNumber": 5,
        "title": "Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of Accord et place des adjectifs (Adjective Agreement & Position).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Accord et place des adjectifs (Adjective Agreement & Position). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (6.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (6.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (6.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Accord et place des adjectifs (Adjective Agreement & Position)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Accord et place des adjectifs (Adjective Agreement & Position) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (6.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (6.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (6.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Adjectifs Qualificatifs et Accords (Adjective Syntax & Placement) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (6.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (6.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (6.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Accord et place des adjectifs (Adjective Agreement & Position) » (Test 6-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (6.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (6.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (6.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («grand_6_5»):",
                    "acceptedAnswers": [
                        "grand_6_5"
                    ],
                    "explanation": "The target keyword was: 【grand_6_5】"
                }
            ]
        }
    },
    "fr-u7-l1": {
        "id": "fr-u7-l1",
        "subject": "french",
        "unit": 7,
        "lessonNumber": 1,
        "title": "Le Passé Composé avec Avoir et Être (Compound Past Tense) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of Passé composé avec avoir et être (Past Tense with Auxiliaries).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Passé Composé avec Avoir et Être (Compound Past Tense) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Passé composé avec avoir et être (Past Tense with Auxiliaries). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (7.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (7.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (7.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Passé composé avec avoir et être (Past Tense with Auxiliaries)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Passé composé avec avoir et être (Past Tense with Auxiliaries) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (7.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (7.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (7.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Passé Composé avec Avoir et Être (Compound Past Tense) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (7.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (7.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (7.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Passé composé avec avoir et être (Past Tense with Auxiliaries) » (Test 7-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (7.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (7.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (7.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («j_ai_visité_7_1»):",
                    "acceptedAnswers": [
                        "j_ai_visité_7_1"
                    ],
                    "explanation": "The target keyword was: 【j_ai_visité_7_1】"
                }
            ]
        }
    },
    "fr-u7-l2": {
        "id": "fr-u7-l2",
        "subject": "french",
        "unit": 7,
        "lessonNumber": 2,
        "title": "Le Passé Composé avec Avoir et Être (Compound Past Tense) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of Passé composé avec avoir et être (Past Tense with Auxiliaries).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Passé Composé avec Avoir et Être (Compound Past Tense) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Passé composé avec avoir et être (Past Tense with Auxiliaries). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (7.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (7.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (7.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Passé composé avec avoir et être (Past Tense with Auxiliaries)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Passé composé avec avoir et être (Past Tense with Auxiliaries) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (7.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (7.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (7.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Passé Composé avec Avoir et Être (Compound Past Tense) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (7.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (7.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (7.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Passé composé avec avoir et être (Past Tense with Auxiliaries) » (Test 7-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (7.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (7.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (7.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («j_ai_visité_7_2»):",
                    "acceptedAnswers": [
                        "j_ai_visité_7_2"
                    ],
                    "explanation": "The target keyword was: 【j_ai_visité_7_2】"
                }
            ]
        }
    },
    "fr-u7-l3": {
        "id": "fr-u7-l3",
        "subject": "french",
        "unit": 7,
        "lessonNumber": 3,
        "title": "Le Passé Composé avec Avoir et Être (Compound Past Tense) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of Passé composé avec avoir et être (Past Tense with Auxiliaries).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Passé Composé avec Avoir et Être (Compound Past Tense) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Passé composé avec avoir et être (Past Tense with Auxiliaries). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (7.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (7.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (7.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Passé composé avec avoir et être (Past Tense with Auxiliaries)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Passé composé avec avoir et être (Past Tense with Auxiliaries) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (7.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (7.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (7.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Passé Composé avec Avoir et Être (Compound Past Tense) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (7.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (7.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (7.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Passé composé avec avoir et être (Past Tense with Auxiliaries) » (Test 7-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (7.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (7.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (7.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («j_ai_visité_7_3»):",
                    "acceptedAnswers": [
                        "j_ai_visité_7_3"
                    ],
                    "explanation": "The target keyword was: 【j_ai_visité_7_3】"
                }
            ]
        }
    },
    "fr-u7-l4": {
        "id": "fr-u7-l4",
        "subject": "french",
        "unit": 7,
        "lessonNumber": 4,
        "title": "Le Passé Composé avec Avoir et Être (Compound Past Tense) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of Passé composé avec avoir et être (Past Tense with Auxiliaries).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Passé Composé avec Avoir et Être (Compound Past Tense) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Passé composé avec avoir et être (Past Tense with Auxiliaries). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (7.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (7.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (7.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Passé composé avec avoir et être (Past Tense with Auxiliaries)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Passé composé avec avoir et être (Past Tense with Auxiliaries) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (7.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (7.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (7.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Passé Composé avec Avoir et Être (Compound Past Tense) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (7.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (7.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (7.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Passé composé avec avoir et être (Past Tense with Auxiliaries) » (Test 7-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (7.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (7.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (7.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («j_ai_visité_7_4»):",
                    "acceptedAnswers": [
                        "j_ai_visité_7_4"
                    ],
                    "explanation": "The target keyword was: 【j_ai_visité_7_4】"
                }
            ]
        }
    },
    "fr-u7-l5": {
        "id": "fr-u7-l5",
        "subject": "french",
        "unit": 7,
        "lessonNumber": 5,
        "title": "Le Passé Composé avec Avoir et Être (Compound Past Tense) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of Passé composé avec avoir et être (Past Tense with Auxiliaries).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Passé Composé avec Avoir et Être (Compound Past Tense) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Passé composé avec avoir et être (Past Tense with Auxiliaries). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (7.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (7.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (7.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Passé composé avec avoir et être (Past Tense with Auxiliaries)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Passé composé avec avoir et être (Past Tense with Auxiliaries) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (7.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (7.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (7.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Passé Composé avec Avoir et Être (Compound Past Tense) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (7.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (7.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (7.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Passé composé avec avoir et être (Past Tense with Auxiliaries) » (Test 7-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (7.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (7.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (7.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («j_ai_visité_7_5»):",
                    "acceptedAnswers": [
                        "j_ai_visité_7_5"
                    ],
                    "explanation": "The target keyword was: 【j_ai_visité_7_5】"
                }
            ]
        }
    },
    "fr-u8-l1": {
        "id": "fr-u8-l1",
        "subject": "french",
        "unit": 8,
        "lessonNumber": 1,
        "title": "L'Imparfait : Description et Habitude (Imperfect Tense) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of Imparfait de description (Imperfect for Habits & Description).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « L'Imparfait : Description et Habitude (Imperfect Tense) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Imparfait de description (Imperfect for Habits & Description). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (8.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (8.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (8.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Imparfait de description (Imperfect for Habits & Description)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Imparfait de description (Imperfect for Habits & Description) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (8.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (8.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (8.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « L'Imparfait : Description et Habitude (Imperfect Tense) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (8.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (8.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (8.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Imparfait de description (Imperfect for Habits & Description) » (Test 8-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (8.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (8.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (8.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_faisait_8_1»):",
                    "acceptedAnswers": [
                        "il_faisait_8_1"
                    ],
                    "explanation": "The target keyword was: 【il_faisait_8_1】"
                }
            ]
        }
    },
    "fr-u8-l2": {
        "id": "fr-u8-l2",
        "subject": "french",
        "unit": 8,
        "lessonNumber": 2,
        "title": "L'Imparfait : Description et Habitude (Imperfect Tense) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of Imparfait de description (Imperfect for Habits & Description).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « L'Imparfait : Description et Habitude (Imperfect Tense) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Imparfait de description (Imperfect for Habits & Description). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (8.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (8.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (8.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Imparfait de description (Imperfect for Habits & Description)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Imparfait de description (Imperfect for Habits & Description) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (8.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (8.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (8.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « L'Imparfait : Description et Habitude (Imperfect Tense) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (8.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (8.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (8.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Imparfait de description (Imperfect for Habits & Description) » (Test 8-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (8.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (8.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (8.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_faisait_8_2»):",
                    "acceptedAnswers": [
                        "il_faisait_8_2"
                    ],
                    "explanation": "The target keyword was: 【il_faisait_8_2】"
                }
            ]
        }
    },
    "fr-u8-l3": {
        "id": "fr-u8-l3",
        "subject": "french",
        "unit": 8,
        "lessonNumber": 3,
        "title": "L'Imparfait : Description et Habitude (Imperfect Tense) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of Imparfait de description (Imperfect for Habits & Description).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « L'Imparfait : Description et Habitude (Imperfect Tense) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Imparfait de description (Imperfect for Habits & Description). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (8.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (8.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (8.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Imparfait de description (Imperfect for Habits & Description)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Imparfait de description (Imperfect for Habits & Description) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (8.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (8.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (8.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « L'Imparfait : Description et Habitude (Imperfect Tense) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (8.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (8.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (8.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Imparfait de description (Imperfect for Habits & Description) » (Test 8-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (8.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (8.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (8.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_faisait_8_3»):",
                    "acceptedAnswers": [
                        "il_faisait_8_3"
                    ],
                    "explanation": "The target keyword was: 【il_faisait_8_3】"
                }
            ]
        }
    },
    "fr-u8-l4": {
        "id": "fr-u8-l4",
        "subject": "french",
        "unit": 8,
        "lessonNumber": 4,
        "title": "L'Imparfait : Description et Habitude (Imperfect Tense) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of Imparfait de description (Imperfect for Habits & Description).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « L'Imparfait : Description et Habitude (Imperfect Tense) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Imparfait de description (Imperfect for Habits & Description). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (8.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (8.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (8.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Imparfait de description (Imperfect for Habits & Description)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Imparfait de description (Imperfect for Habits & Description) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (8.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (8.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (8.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « L'Imparfait : Description et Habitude (Imperfect Tense) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (8.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (8.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (8.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Imparfait de description (Imperfect for Habits & Description) » (Test 8-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (8.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (8.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (8.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_faisait_8_4»):",
                    "acceptedAnswers": [
                        "il_faisait_8_4"
                    ],
                    "explanation": "The target keyword was: 【il_faisait_8_4】"
                }
            ]
        }
    },
    "fr-u8-l5": {
        "id": "fr-u8-l5",
        "subject": "french",
        "unit": 8,
        "lessonNumber": 5,
        "title": "L'Imparfait : Description et Habitude (Imperfect Tense) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of Imparfait de description (Imperfect for Habits & Description).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « L'Imparfait : Description et Habitude (Imperfect Tense) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Imparfait de description (Imperfect for Habits & Description). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (8.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (8.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (8.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Imparfait de description (Imperfect for Habits & Description)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Imparfait de description (Imperfect for Habits & Description) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (8.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (8.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (8.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « L'Imparfait : Description et Habitude (Imperfect Tense) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (8.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (8.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (8.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Imparfait de description (Imperfect for Habits & Description) » (Test 8-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (8.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (8.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (8.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_faisait_8_5»):",
                    "acceptedAnswers": [
                        "il_faisait_8_5"
                    ],
                    "explanation": "The target keyword was: 【il_faisait_8_5】"
                }
            ]
        }
    },
    "fr-u9-l1": {
        "id": "fr-u9-l1",
        "subject": "french",
        "unit": 9,
        "lessonNumber": 1,
        "title": "Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of Alternance passé composé et imparfait (Past Narrative Aspect).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Alternance passé composé et imparfait (Past Narrative Aspect). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (9.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (9.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (9.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Alternance passé composé et imparfait (Past Narrative Aspect)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Alternance passé composé et imparfait (Past Narrative Aspect) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (9.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (9.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (9.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (9.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (9.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (9.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Alternance passé composé et imparfait (Past Narrative Aspect) » (Test 9-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (9.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (9.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (9.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («soudain_9_1»):",
                    "acceptedAnswers": [
                        "soudain_9_1"
                    ],
                    "explanation": "The target keyword was: 【soudain_9_1】"
                }
            ]
        }
    },
    "fr-u9-l2": {
        "id": "fr-u9-l2",
        "subject": "french",
        "unit": 9,
        "lessonNumber": 2,
        "title": "Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of Alternance passé composé et imparfait (Past Narrative Aspect).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Alternance passé composé et imparfait (Past Narrative Aspect). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (9.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (9.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (9.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Alternance passé composé et imparfait (Past Narrative Aspect)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Alternance passé composé et imparfait (Past Narrative Aspect) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (9.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (9.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (9.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (9.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (9.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (9.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Alternance passé composé et imparfait (Past Narrative Aspect) » (Test 9-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (9.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (9.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (9.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («soudain_9_2»):",
                    "acceptedAnswers": [
                        "soudain_9_2"
                    ],
                    "explanation": "The target keyword was: 【soudain_9_2】"
                }
            ]
        }
    },
    "fr-u9-l3": {
        "id": "fr-u9-l3",
        "subject": "french",
        "unit": 9,
        "lessonNumber": 3,
        "title": "Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of Alternance passé composé et imparfait (Past Narrative Aspect).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Alternance passé composé et imparfait (Past Narrative Aspect). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (9.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (9.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (9.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Alternance passé composé et imparfait (Past Narrative Aspect)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Alternance passé composé et imparfait (Past Narrative Aspect) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (9.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (9.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (9.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (9.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (9.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (9.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Alternance passé composé et imparfait (Past Narrative Aspect) » (Test 9-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (9.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (9.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (9.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («soudain_9_3»):",
                    "acceptedAnswers": [
                        "soudain_9_3"
                    ],
                    "explanation": "The target keyword was: 【soudain_9_3】"
                }
            ]
        }
    },
    "fr-u9-l4": {
        "id": "fr-u9-l4",
        "subject": "french",
        "unit": 9,
        "lessonNumber": 4,
        "title": "Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of Alternance passé composé et imparfait (Past Narrative Aspect).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Alternance passé composé et imparfait (Past Narrative Aspect). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (9.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (9.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (9.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Alternance passé composé et imparfait (Past Narrative Aspect)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Alternance passé composé et imparfait (Past Narrative Aspect) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (9.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (9.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (9.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (9.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (9.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (9.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Alternance passé composé et imparfait (Past Narrative Aspect) » (Test 9-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (9.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (9.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (9.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («soudain_9_4»):",
                    "acceptedAnswers": [
                        "soudain_9_4"
                    ],
                    "explanation": "The target keyword was: 【soudain_9_4】"
                }
            ]
        }
    },
    "fr-u9-l5": {
        "id": "fr-u9-l5",
        "subject": "french",
        "unit": 9,
        "lessonNumber": 5,
        "title": "Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of Alternance passé composé et imparfait (Past Narrative Aspect).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Alternance passé composé et imparfait (Past Narrative Aspect). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (9.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (9.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (9.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Alternance passé composé et imparfait (Past Narrative Aspect)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Alternance passé composé et imparfait (Past Narrative Aspect) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (9.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (9.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (9.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Passé Composé vs Imparfait en Narration (Past Aspect Distinctions) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (9.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (9.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (9.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Alternance passé composé et imparfait (Past Narrative Aspect) » (Test 9-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (9.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (9.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (9.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («soudain_9_5»):",
                    "acceptedAnswers": [
                        "soudain_9_5"
                    ],
                    "explanation": "The target keyword was: 【soudain_9_5】"
                }
            ]
        }
    },
    "fr-u10-l1": {
        "id": "fr-u10-l1",
        "subject": "french",
        "unit": 10,
        "lessonNumber": 1,
        "title": "Le Futur Simple et le Futur Proche (Future Tense & Projections) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of Futur simple et futur proche (Future Expressions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Futur Simple et le Futur Proche (Future Tense & Projections) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Futur simple et futur proche (Future Expressions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (10.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (10.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (10.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Futur simple et futur proche (Future Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Futur simple et futur proche (Future Expressions) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (10.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (10.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (10.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Futur Simple et le Futur Proche (Future Tense & Projections) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (10.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (10.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (10.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Futur simple et futur proche (Future Expressions) » (Test 10-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (10.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (10.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (10.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_voyagerai_10_1»):",
                    "acceptedAnswers": [
                        "je_voyagerai_10_1"
                    ],
                    "explanation": "The target keyword was: 【je_voyagerai_10_1】"
                }
            ]
        }
    },
    "fr-u10-l2": {
        "id": "fr-u10-l2",
        "subject": "french",
        "unit": 10,
        "lessonNumber": 2,
        "title": "Le Futur Simple et le Futur Proche (Future Tense & Projections) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of Futur simple et futur proche (Future Expressions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Futur Simple et le Futur Proche (Future Tense & Projections) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Futur simple et futur proche (Future Expressions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (10.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (10.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (10.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Futur simple et futur proche (Future Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Futur simple et futur proche (Future Expressions) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (10.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (10.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (10.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Futur Simple et le Futur Proche (Future Tense & Projections) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (10.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (10.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (10.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Futur simple et futur proche (Future Expressions) » (Test 10-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (10.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (10.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (10.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_voyagerai_10_2»):",
                    "acceptedAnswers": [
                        "je_voyagerai_10_2"
                    ],
                    "explanation": "The target keyword was: 【je_voyagerai_10_2】"
                }
            ]
        }
    },
    "fr-u10-l3": {
        "id": "fr-u10-l3",
        "subject": "french",
        "unit": 10,
        "lessonNumber": 3,
        "title": "Le Futur Simple et le Futur Proche (Future Tense & Projections) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of Futur simple et futur proche (Future Expressions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Futur Simple et le Futur Proche (Future Tense & Projections) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Futur simple et futur proche (Future Expressions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (10.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (10.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (10.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Futur simple et futur proche (Future Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Futur simple et futur proche (Future Expressions) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (10.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (10.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (10.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Futur Simple et le Futur Proche (Future Tense & Projections) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (10.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (10.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (10.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Futur simple et futur proche (Future Expressions) » (Test 10-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (10.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (10.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (10.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_voyagerai_10_3»):",
                    "acceptedAnswers": [
                        "je_voyagerai_10_3"
                    ],
                    "explanation": "The target keyword was: 【je_voyagerai_10_3】"
                }
            ]
        }
    },
    "fr-u10-l4": {
        "id": "fr-u10-l4",
        "subject": "french",
        "unit": 10,
        "lessonNumber": 4,
        "title": "Le Futur Simple et le Futur Proche (Future Tense & Projections) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of Futur simple et futur proche (Future Expressions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Futur Simple et le Futur Proche (Future Tense & Projections) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Futur simple et futur proche (Future Expressions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (10.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (10.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (10.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Futur simple et futur proche (Future Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Futur simple et futur proche (Future Expressions) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (10.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (10.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (10.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Futur Simple et le Futur Proche (Future Tense & Projections) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (10.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (10.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (10.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Futur simple et futur proche (Future Expressions) » (Test 10-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (10.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (10.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (10.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_voyagerai_10_4»):",
                    "acceptedAnswers": [
                        "je_voyagerai_10_4"
                    ],
                    "explanation": "The target keyword was: 【je_voyagerai_10_4】"
                }
            ]
        }
    },
    "fr-u10-l5": {
        "id": "fr-u10-l5",
        "subject": "french",
        "unit": 10,
        "lessonNumber": 5,
        "title": "Le Futur Simple et le Futur Proche (Future Tense & Projections) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of Futur simple et futur proche (Future Expressions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Futur Simple et le Futur Proche (Future Tense & Projections) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Futur simple et futur proche (Future Expressions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (10.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (10.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (10.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Futur simple et futur proche (Future Expressions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Futur simple et futur proche (Future Expressions) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (10.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (10.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (10.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Futur Simple et le Futur Proche (Future Tense & Projections) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (10.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (10.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (10.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Futur simple et futur proche (Future Expressions) » (Test 10-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (10.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (10.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (10.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_voyagerai_10_5»):",
                    "acceptedAnswers": [
                        "je_voyagerai_10_5"
                    ],
                    "explanation": "The target keyword was: 【je_voyagerai_10_5】"
                }
            ]
        }
    },
    "fr-u11-l1": {
        "id": "fr-u11-l1",
        "subject": "french",
        "unit": 11,
        "lessonNumber": 1,
        "title": "Pronoms Compléments Directs et Indirects (COD & COI) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms COD et COI (Direct & Indirect Object Pronouns).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Pronoms Compléments Directs et Indirects (COD & COI) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Pronoms COD et COI (Direct & Indirect Object Pronouns). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (11.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (11.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (11.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms COD et COI (Direct & Indirect Object Pronouns)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms COD et COI (Direct & Indirect Object Pronouns) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (11.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (11.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (11.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Pronoms Compléments Directs et Indirects (COD & COI) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (11.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (11.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (11.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms COD et COI (Direct & Indirect Object Pronouns) » (Test 11-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (11.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (11.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (11.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («le_voir_11_1»):",
                    "acceptedAnswers": [
                        "le_voir_11_1"
                    ],
                    "explanation": "The target keyword was: 【le_voir_11_1】"
                }
            ]
        }
    },
    "fr-u11-l2": {
        "id": "fr-u11-l2",
        "subject": "french",
        "unit": 11,
        "lessonNumber": 2,
        "title": "Pronoms Compléments Directs et Indirects (COD & COI) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms COD et COI (Direct & Indirect Object Pronouns).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Pronoms Compléments Directs et Indirects (COD & COI) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Pronoms COD et COI (Direct & Indirect Object Pronouns). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (11.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (11.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (11.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms COD et COI (Direct & Indirect Object Pronouns)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms COD et COI (Direct & Indirect Object Pronouns) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (11.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (11.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (11.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Pronoms Compléments Directs et Indirects (COD & COI) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (11.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (11.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (11.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms COD et COI (Direct & Indirect Object Pronouns) » (Test 11-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (11.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (11.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (11.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («le_voir_11_2»):",
                    "acceptedAnswers": [
                        "le_voir_11_2"
                    ],
                    "explanation": "The target keyword was: 【le_voir_11_2】"
                }
            ]
        }
    },
    "fr-u11-l3": {
        "id": "fr-u11-l3",
        "subject": "french",
        "unit": 11,
        "lessonNumber": 3,
        "title": "Pronoms Compléments Directs et Indirects (COD & COI) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms COD et COI (Direct & Indirect Object Pronouns).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Pronoms Compléments Directs et Indirects (COD & COI) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Pronoms COD et COI (Direct & Indirect Object Pronouns). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (11.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (11.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (11.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms COD et COI (Direct & Indirect Object Pronouns)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms COD et COI (Direct & Indirect Object Pronouns) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (11.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (11.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (11.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Pronoms Compléments Directs et Indirects (COD & COI) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (11.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (11.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (11.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms COD et COI (Direct & Indirect Object Pronouns) » (Test 11-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (11.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (11.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (11.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («le_voir_11_3»):",
                    "acceptedAnswers": [
                        "le_voir_11_3"
                    ],
                    "explanation": "The target keyword was: 【le_voir_11_3】"
                }
            ]
        }
    },
    "fr-u11-l4": {
        "id": "fr-u11-l4",
        "subject": "french",
        "unit": 11,
        "lessonNumber": 4,
        "title": "Pronoms Compléments Directs et Indirects (COD & COI) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms COD et COI (Direct & Indirect Object Pronouns).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Pronoms Compléments Directs et Indirects (COD & COI) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Pronoms COD et COI (Direct & Indirect Object Pronouns). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (11.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (11.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (11.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms COD et COI (Direct & Indirect Object Pronouns)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms COD et COI (Direct & Indirect Object Pronouns) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (11.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (11.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (11.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Pronoms Compléments Directs et Indirects (COD & COI) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (11.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (11.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (11.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms COD et COI (Direct & Indirect Object Pronouns) » (Test 11-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (11.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (11.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (11.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («le_voir_11_4»):",
                    "acceptedAnswers": [
                        "le_voir_11_4"
                    ],
                    "explanation": "The target keyword was: 【le_voir_11_4】"
                }
            ]
        }
    },
    "fr-u11-l5": {
        "id": "fr-u11-l5",
        "subject": "french",
        "unit": 11,
        "lessonNumber": 5,
        "title": "Pronoms Compléments Directs et Indirects (COD & COI) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms COD et COI (Direct & Indirect Object Pronouns).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Pronoms Compléments Directs et Indirects (COD & COI) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Pronoms COD et COI (Direct & Indirect Object Pronouns). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (11.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (11.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (11.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms COD et COI (Direct & Indirect Object Pronouns)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms COD et COI (Direct & Indirect Object Pronouns) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (11.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (11.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (11.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Pronoms Compléments Directs et Indirects (COD & COI) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (11.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (11.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (11.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms COD et COI (Direct & Indirect Object Pronouns) » (Test 11-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (11.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (11.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (11.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («le_voir_11_5»):",
                    "acceptedAnswers": [
                        "le_voir_11_5"
                    ],
                    "explanation": "The target keyword was: 【le_voir_11_5】"
                }
            ]
        }
    },
    "fr-u12-l1": {
        "id": "fr-u12-l1",
        "subject": "french",
        "unit": 12,
        "lessonNumber": 1,
        "title": "Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (12.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (12.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (12.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (12.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (12.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (12.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (12.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (12.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (12.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En) » (Test 12-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (12.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (12.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (12.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («y_aller_12_1»):",
                    "acceptedAnswers": [
                        "y_aller_12_1"
                    ],
                    "explanation": "The target keyword was: 【y_aller_12_1】"
                }
            ]
        }
    },
    "fr-u12-l2": {
        "id": "fr-u12-l2",
        "subject": "french",
        "unit": 12,
        "lessonNumber": 2,
        "title": "Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (12.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (12.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (12.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (12.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (12.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (12.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (12.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (12.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (12.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En) » (Test 12-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (12.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (12.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (12.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («y_aller_12_2»):",
                    "acceptedAnswers": [
                        "y_aller_12_2"
                    ],
                    "explanation": "The target keyword was: 【y_aller_12_2】"
                }
            ]
        }
    },
    "fr-u12-l3": {
        "id": "fr-u12-l3",
        "subject": "french",
        "unit": 12,
        "lessonNumber": 3,
        "title": "Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (12.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (12.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (12.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (12.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (12.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (12.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (12.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (12.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (12.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En) » (Test 12-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (12.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (12.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (12.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («y_aller_12_3»):",
                    "acceptedAnswers": [
                        "y_aller_12_3"
                    ],
                    "explanation": "The target keyword was: 【y_aller_12_3】"
                }
            ]
        }
    },
    "fr-u12-l4": {
        "id": "fr-u12-l4",
        "subject": "french",
        "unit": 12,
        "lessonNumber": 4,
        "title": "Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (12.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (12.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (12.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (12.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (12.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (12.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (12.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (12.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (12.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En) » (Test 12-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (12.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (12.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (12.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («y_aller_12_4»):",
                    "acceptedAnswers": [
                        "y_aller_12_4"
                    ],
                    "explanation": "The target keyword was: 【y_aller_12_4】"
                }
            ]
        }
    },
    "fr-u12-l5": {
        "id": "fr-u12-l5",
        "subject": "french",
        "unit": 12,
        "lessonNumber": 5,
        "title": "Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (12.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (12.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (12.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (12.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (12.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (12.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Les Pronoms Adverbiaux 'Y' et 'En' (Adverbial Pronouns Y & En) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (12.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (12.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (12.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms adverbiaux Y et En (Adverbial Pronouns Y and En) » (Test 12-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (12.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (12.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (12.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («y_aller_12_5»):",
                    "acceptedAnswers": [
                        "y_aller_12_5"
                    ],
                    "explanation": "The target keyword was: 【y_aller_12_5】"
                }
            ]
        }
    },
    "fr-u13-l1": {
        "id": "fr-u13-l1",
        "subject": "french",
        "unit": 13,
        "lessonNumber": 1,
        "title": "Le Conditionnel Présent : Politesse et Souhait (Present Conditional) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of Conditionnel de politesse et souhait (Polite Conditional).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Conditionnel Présent : Politesse et Souhait (Present Conditional) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Conditionnel de politesse et souhait (Polite Conditional). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (13.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (13.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (13.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Conditionnel de politesse et souhait (Polite Conditional)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Conditionnel de politesse et souhait (Polite Conditional) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (13.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (13.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (13.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Conditionnel Présent : Politesse et Souhait (Present Conditional) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (13.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (13.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (13.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Conditionnel de politesse et souhait (Polite Conditional) » (Test 13-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (13.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (13.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (13.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_voudrais_13_1»):",
                    "acceptedAnswers": [
                        "je_voudrais_13_1"
                    ],
                    "explanation": "The target keyword was: 【je_voudrais_13_1】"
                }
            ]
        }
    },
    "fr-u13-l2": {
        "id": "fr-u13-l2",
        "subject": "french",
        "unit": 13,
        "lessonNumber": 2,
        "title": "Le Conditionnel Présent : Politesse et Souhait (Present Conditional) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of Conditionnel de politesse et souhait (Polite Conditional).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Conditionnel Présent : Politesse et Souhait (Present Conditional) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Conditionnel de politesse et souhait (Polite Conditional). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (13.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (13.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (13.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Conditionnel de politesse et souhait (Polite Conditional)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Conditionnel de politesse et souhait (Polite Conditional) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (13.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (13.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (13.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Conditionnel Présent : Politesse et Souhait (Present Conditional) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (13.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (13.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (13.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Conditionnel de politesse et souhait (Polite Conditional) » (Test 13-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (13.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (13.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (13.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_voudrais_13_2»):",
                    "acceptedAnswers": [
                        "je_voudrais_13_2"
                    ],
                    "explanation": "The target keyword was: 【je_voudrais_13_2】"
                }
            ]
        }
    },
    "fr-u13-l3": {
        "id": "fr-u13-l3",
        "subject": "french",
        "unit": 13,
        "lessonNumber": 3,
        "title": "Le Conditionnel Présent : Politesse et Souhait (Present Conditional) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of Conditionnel de politesse et souhait (Polite Conditional).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Conditionnel Présent : Politesse et Souhait (Present Conditional) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Conditionnel de politesse et souhait (Polite Conditional). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (13.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (13.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (13.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Conditionnel de politesse et souhait (Polite Conditional)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Conditionnel de politesse et souhait (Polite Conditional) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (13.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (13.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (13.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Conditionnel Présent : Politesse et Souhait (Present Conditional) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (13.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (13.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (13.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Conditionnel de politesse et souhait (Polite Conditional) » (Test 13-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (13.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (13.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (13.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_voudrais_13_3»):",
                    "acceptedAnswers": [
                        "je_voudrais_13_3"
                    ],
                    "explanation": "The target keyword was: 【je_voudrais_13_3】"
                }
            ]
        }
    },
    "fr-u13-l4": {
        "id": "fr-u13-l4",
        "subject": "french",
        "unit": 13,
        "lessonNumber": 4,
        "title": "Le Conditionnel Présent : Politesse et Souhait (Present Conditional) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of Conditionnel de politesse et souhait (Polite Conditional).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Conditionnel Présent : Politesse et Souhait (Present Conditional) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Conditionnel de politesse et souhait (Polite Conditional). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (13.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (13.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (13.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Conditionnel de politesse et souhait (Polite Conditional)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Conditionnel de politesse et souhait (Polite Conditional) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (13.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (13.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (13.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Conditionnel Présent : Politesse et Souhait (Present Conditional) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (13.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (13.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (13.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Conditionnel de politesse et souhait (Polite Conditional) » (Test 13-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (13.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (13.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (13.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_voudrais_13_4»):",
                    "acceptedAnswers": [
                        "je_voudrais_13_4"
                    ],
                    "explanation": "The target keyword was: 【je_voudrais_13_4】"
                }
            ]
        }
    },
    "fr-u13-l5": {
        "id": "fr-u13-l5",
        "subject": "french",
        "unit": 13,
        "lessonNumber": 5,
        "title": "Le Conditionnel Présent : Politesse et Souhait (Present Conditional) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of Conditionnel de politesse et souhait (Polite Conditional).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Conditionnel Présent : Politesse et Souhait (Present Conditional) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Conditionnel de politesse et souhait (Polite Conditional). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (13.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (13.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (13.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Conditionnel de politesse et souhait (Polite Conditional)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Conditionnel de politesse et souhait (Polite Conditional) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (13.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (13.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (13.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Conditionnel Présent : Politesse et Souhait (Present Conditional) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (13.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (13.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (13.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Conditionnel de politesse et souhait (Polite Conditional) » (Test 13-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (13.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (13.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (13.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («je_voudrais_13_5»):",
                    "acceptedAnswers": [
                        "je_voudrais_13_5"
                    ],
                    "explanation": "The target keyword was: 【je_voudrais_13_5】"
                }
            ]
        }
    },
    "fr-u14-l1": {
        "id": "fr-u14-l1",
        "subject": "french",
        "unit": 14,
        "lessonNumber": 1,
        "title": "Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of Subjonctif présent de nécessité (Subjunctive of Necessity).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Subjonctif présent de nécessité (Subjunctive of Necessity). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (14.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (14.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (14.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Subjonctif présent de nécessité (Subjunctive of Necessity)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Subjonctif présent de nécessité (Subjunctive of Necessity) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (14.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (14.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (14.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (14.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (14.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (14.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Subjonctif présent de nécessité (Subjunctive of Necessity) » (Test 14-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (14.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (14.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (14.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_faut_que_14_1»):",
                    "acceptedAnswers": [
                        "il_faut_que_14_1"
                    ],
                    "explanation": "The target keyword was: 【il_faut_que_14_1】"
                }
            ]
        }
    },
    "fr-u14-l2": {
        "id": "fr-u14-l2",
        "subject": "french",
        "unit": 14,
        "lessonNumber": 2,
        "title": "Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of Subjonctif présent de nécessité (Subjunctive of Necessity).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Subjonctif présent de nécessité (Subjunctive of Necessity). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (14.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (14.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (14.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Subjonctif présent de nécessité (Subjunctive of Necessity)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Subjonctif présent de nécessité (Subjunctive of Necessity) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (14.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (14.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (14.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (14.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (14.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (14.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Subjonctif présent de nécessité (Subjunctive of Necessity) » (Test 14-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (14.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (14.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (14.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_faut_que_14_2»):",
                    "acceptedAnswers": [
                        "il_faut_que_14_2"
                    ],
                    "explanation": "The target keyword was: 【il_faut_que_14_2】"
                }
            ]
        }
    },
    "fr-u14-l3": {
        "id": "fr-u14-l3",
        "subject": "french",
        "unit": 14,
        "lessonNumber": 3,
        "title": "Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of Subjonctif présent de nécessité (Subjunctive of Necessity).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Subjonctif présent de nécessité (Subjunctive of Necessity). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (14.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (14.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (14.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Subjonctif présent de nécessité (Subjunctive of Necessity)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Subjonctif présent de nécessité (Subjunctive of Necessity) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (14.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (14.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (14.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (14.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (14.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (14.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Subjonctif présent de nécessité (Subjunctive of Necessity) » (Test 14-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (14.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (14.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (14.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_faut_que_14_3»):",
                    "acceptedAnswers": [
                        "il_faut_que_14_3"
                    ],
                    "explanation": "The target keyword was: 【il_faut_que_14_3】"
                }
            ]
        }
    },
    "fr-u14-l4": {
        "id": "fr-u14-l4",
        "subject": "french",
        "unit": 14,
        "lessonNumber": 4,
        "title": "Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of Subjonctif présent de nécessité (Subjunctive of Necessity).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Subjonctif présent de nécessité (Subjunctive of Necessity). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (14.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (14.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (14.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Subjonctif présent de nécessité (Subjunctive of Necessity)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Subjonctif présent de nécessité (Subjunctive of Necessity) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (14.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (14.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (14.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (14.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (14.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (14.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Subjonctif présent de nécessité (Subjunctive of Necessity) » (Test 14-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (14.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (14.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (14.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_faut_que_14_4»):",
                    "acceptedAnswers": [
                        "il_faut_que_14_4"
                    ],
                    "explanation": "The target keyword was: 【il_faut_que_14_4】"
                }
            ]
        }
    },
    "fr-u14-l5": {
        "id": "fr-u14-l5",
        "subject": "french",
        "unit": 14,
        "lessonNumber": 5,
        "title": "Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of Subjonctif présent de nécessité (Subjunctive of Necessity).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Subjonctif présent de nécessité (Subjunctive of Necessity). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (14.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (14.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (14.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Subjonctif présent de nécessité (Subjunctive of Necessity)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Subjonctif présent de nécessité (Subjunctive of Necessity) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (14.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (14.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (14.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Subjonctif Présent : Nécessité et Volonté (Subjunctive Mood) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (14.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (14.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (14.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Subjonctif présent de nécessité (Subjunctive of Necessity) » (Test 14-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (14.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (14.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (14.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_faut_que_14_5»):",
                    "acceptedAnswers": [
                        "il_faut_que_14_5"
                    ],
                    "explanation": "The target keyword was: 【il_faut_que_14_5】"
                }
            ]
        }
    },
    "fr-u15-l1": {
        "id": "fr-u15-l1",
        "subject": "french",
        "unit": 15,
        "lessonNumber": 1,
        "title": "Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms relatifs qui, que, où, dont (Relative Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Pronoms relatifs qui, que, où, dont (Relative Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (15.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (15.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (15.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms relatifs qui, que, où, dont (Relative Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms relatifs qui, que, où, dont (Relative Clauses) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (15.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (15.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (15.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (15.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (15.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (15.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms relatifs qui, que, où, dont (Relative Clauses) » (Test 15-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (15.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (15.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (15.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («qui_parle_15_1»):",
                    "acceptedAnswers": [
                        "qui_parle_15_1"
                    ],
                    "explanation": "The target keyword was: 【qui_parle_15_1】"
                }
            ]
        }
    },
    "fr-u15-l2": {
        "id": "fr-u15-l2",
        "subject": "french",
        "unit": 15,
        "lessonNumber": 2,
        "title": "Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms relatifs qui, que, où, dont (Relative Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Pronoms relatifs qui, que, où, dont (Relative Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (15.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (15.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (15.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms relatifs qui, que, où, dont (Relative Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms relatifs qui, que, où, dont (Relative Clauses) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (15.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (15.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (15.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (15.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (15.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (15.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms relatifs qui, que, où, dont (Relative Clauses) » (Test 15-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (15.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (15.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (15.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («qui_parle_15_2»):",
                    "acceptedAnswers": [
                        "qui_parle_15_2"
                    ],
                    "explanation": "The target keyword was: 【qui_parle_15_2】"
                }
            ]
        }
    },
    "fr-u15-l3": {
        "id": "fr-u15-l3",
        "subject": "french",
        "unit": 15,
        "lessonNumber": 3,
        "title": "Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms relatifs qui, que, où, dont (Relative Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Pronoms relatifs qui, que, où, dont (Relative Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (15.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (15.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (15.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms relatifs qui, que, où, dont (Relative Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms relatifs qui, que, où, dont (Relative Clauses) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (15.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (15.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (15.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (15.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (15.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (15.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms relatifs qui, que, où, dont (Relative Clauses) » (Test 15-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (15.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (15.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (15.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («qui_parle_15_3»):",
                    "acceptedAnswers": [
                        "qui_parle_15_3"
                    ],
                    "explanation": "The target keyword was: 【qui_parle_15_3】"
                }
            ]
        }
    },
    "fr-u15-l4": {
        "id": "fr-u15-l4",
        "subject": "french",
        "unit": 15,
        "lessonNumber": 4,
        "title": "Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms relatifs qui, que, où, dont (Relative Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Pronoms relatifs qui, que, où, dont (Relative Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (15.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (15.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (15.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms relatifs qui, que, où, dont (Relative Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms relatifs qui, que, où, dont (Relative Clauses) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (15.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (15.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (15.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (15.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (15.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (15.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms relatifs qui, que, où, dont (Relative Clauses) » (Test 15-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (15.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (15.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (15.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («qui_parle_15_4»):",
                    "acceptedAnswers": [
                        "qui_parle_15_4"
                    ],
                    "explanation": "The target keyword was: 【qui_parle_15_4】"
                }
            ]
        }
    },
    "fr-u15-l5": {
        "id": "fr-u15-l5",
        "subject": "french",
        "unit": 15,
        "lessonNumber": 5,
        "title": "Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of Pronoms relatifs qui, que, où, dont (Relative Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Pronoms relatifs qui, que, où, dont (Relative Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (15.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (15.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (15.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Pronoms relatifs qui, que, où, dont (Relative Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Pronoms relatifs qui, que, où, dont (Relative Clauses) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (15.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (15.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (15.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Pronoms Relatifs Simples : Qui, Que, Où, Dont (Relative Pronouns) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (15.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (15.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (15.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Pronoms relatifs qui, que, où, dont (Relative Clauses) » (Test 15-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (15.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (15.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (15.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («qui_parle_15_5»):",
                    "acceptedAnswers": [
                        "qui_parle_15_5"
                    ],
                    "explanation": "The target keyword was: 【qui_parle_15_5】"
                }
            ]
        }
    },
    "fr-u16-l1": {
        "id": "fr-u16-l1",
        "subject": "french",
        "unit": 16,
        "lessonNumber": 1,
        "title": "La Comparaison et le Superlatif (Comparative Structures) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of Comparatifs et superlatifs (Comparative & Superlative Forms).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Comparaison et le Superlatif (Comparative Structures) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Comparatifs et superlatifs (Comparative & Superlative Forms). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (16.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (16.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (16.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Comparatifs et superlatifs (Comparative & Superlative Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Comparatifs et superlatifs (Comparative & Superlative Forms) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (16.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (16.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (16.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Comparaison et le Superlatif (Comparative Structures) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (16.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (16.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (16.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Comparatifs et superlatifs (Comparative & Superlative Forms) » (Test 16-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (16.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (16.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (16.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («plus_rapide_16_1»):",
                    "acceptedAnswers": [
                        "plus_rapide_16_1"
                    ],
                    "explanation": "The target keyword was: 【plus_rapide_16_1】"
                }
            ]
        }
    },
    "fr-u16-l2": {
        "id": "fr-u16-l2",
        "subject": "french",
        "unit": 16,
        "lessonNumber": 2,
        "title": "La Comparaison et le Superlatif (Comparative Structures) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of Comparatifs et superlatifs (Comparative & Superlative Forms).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Comparaison et le Superlatif (Comparative Structures) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Comparatifs et superlatifs (Comparative & Superlative Forms). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (16.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (16.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (16.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Comparatifs et superlatifs (Comparative & Superlative Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Comparatifs et superlatifs (Comparative & Superlative Forms) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (16.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (16.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (16.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Comparaison et le Superlatif (Comparative Structures) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (16.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (16.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (16.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Comparatifs et superlatifs (Comparative & Superlative Forms) » (Test 16-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (16.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (16.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (16.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («plus_rapide_16_2»):",
                    "acceptedAnswers": [
                        "plus_rapide_16_2"
                    ],
                    "explanation": "The target keyword was: 【plus_rapide_16_2】"
                }
            ]
        }
    },
    "fr-u16-l3": {
        "id": "fr-u16-l3",
        "subject": "french",
        "unit": 16,
        "lessonNumber": 3,
        "title": "La Comparaison et le Superlatif (Comparative Structures) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of Comparatifs et superlatifs (Comparative & Superlative Forms).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Comparaison et le Superlatif (Comparative Structures) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Comparatifs et superlatifs (Comparative & Superlative Forms). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (16.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (16.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (16.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Comparatifs et superlatifs (Comparative & Superlative Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Comparatifs et superlatifs (Comparative & Superlative Forms) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (16.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (16.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (16.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Comparaison et le Superlatif (Comparative Structures) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (16.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (16.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (16.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Comparatifs et superlatifs (Comparative & Superlative Forms) » (Test 16-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (16.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (16.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (16.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («plus_rapide_16_3»):",
                    "acceptedAnswers": [
                        "plus_rapide_16_3"
                    ],
                    "explanation": "The target keyword was: 【plus_rapide_16_3】"
                }
            ]
        }
    },
    "fr-u16-l4": {
        "id": "fr-u16-l4",
        "subject": "french",
        "unit": 16,
        "lessonNumber": 4,
        "title": "La Comparaison et le Superlatif (Comparative Structures) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of Comparatifs et superlatifs (Comparative & Superlative Forms).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Comparaison et le Superlatif (Comparative Structures) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Comparatifs et superlatifs (Comparative & Superlative Forms). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (16.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (16.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (16.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Comparatifs et superlatifs (Comparative & Superlative Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Comparatifs et superlatifs (Comparative & Superlative Forms) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (16.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (16.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (16.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Comparaison et le Superlatif (Comparative Structures) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (16.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (16.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (16.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Comparatifs et superlatifs (Comparative & Superlative Forms) » (Test 16-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (16.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (16.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (16.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («plus_rapide_16_4»):",
                    "acceptedAnswers": [
                        "plus_rapide_16_4"
                    ],
                    "explanation": "The target keyword was: 【plus_rapide_16_4】"
                }
            ]
        }
    },
    "fr-u16-l5": {
        "id": "fr-u16-l5",
        "subject": "french",
        "unit": 16,
        "lessonNumber": 5,
        "title": "La Comparaison et le Superlatif (Comparative Structures) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of Comparatifs et superlatifs (Comparative & Superlative Forms).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Comparaison et le Superlatif (Comparative Structures) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Comparatifs et superlatifs (Comparative & Superlative Forms). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (16.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (16.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (16.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Comparatifs et superlatifs (Comparative & Superlative Forms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Comparatifs et superlatifs (Comparative & Superlative Forms) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (16.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (16.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (16.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Comparaison et le Superlatif (Comparative Structures) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (16.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (16.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (16.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Comparatifs et superlatifs (Comparative & Superlative Forms) » (Test 16-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (16.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (16.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (16.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («plus_rapide_16_5»):",
                    "acceptedAnswers": [
                        "plus_rapide_16_5"
                    ],
                    "explanation": "The target keyword was: 【plus_rapide_16_5】"
                }
            ]
        }
    },
    "fr-u17-l1": {
        "id": "fr-u17-l1",
        "subject": "french",
        "unit": 17,
        "lessonNumber": 1,
        "title": "Le Plus-que-parfait et la Concordance des Temps au Passé (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of Plus-que-parfait et antériorité (Past Anteriority).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Plus-que-parfait et la Concordance des Temps au Passé » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Plus-que-parfait et antériorité (Past Anteriority). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (17.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (17.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (17.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Plus-que-parfait et antériorité (Past Anteriority)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Plus-que-parfait et antériorité (Past Anteriority) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (17.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (17.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (17.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Plus-que-parfait et la Concordance des Temps au Passé » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (17.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (17.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (17.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Plus-que-parfait et antériorité (Past Anteriority) » (Test 17-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (17.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (17.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (17.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («j_avais_fini_17_1»):",
                    "acceptedAnswers": [
                        "j_avais_fini_17_1"
                    ],
                    "explanation": "The target keyword was: 【j_avais_fini_17_1】"
                }
            ]
        }
    },
    "fr-u17-l2": {
        "id": "fr-u17-l2",
        "subject": "french",
        "unit": 17,
        "lessonNumber": 2,
        "title": "Le Plus-que-parfait et la Concordance des Temps au Passé (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of Plus-que-parfait et antériorité (Past Anteriority).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Plus-que-parfait et la Concordance des Temps au Passé » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Plus-que-parfait et antériorité (Past Anteriority). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (17.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (17.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (17.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Plus-que-parfait et antériorité (Past Anteriority)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Plus-que-parfait et antériorité (Past Anteriority) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (17.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (17.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (17.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Plus-que-parfait et la Concordance des Temps au Passé » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (17.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (17.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (17.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Plus-que-parfait et antériorité (Past Anteriority) » (Test 17-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (17.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (17.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (17.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («j_avais_fini_17_2»):",
                    "acceptedAnswers": [
                        "j_avais_fini_17_2"
                    ],
                    "explanation": "The target keyword was: 【j_avais_fini_17_2】"
                }
            ]
        }
    },
    "fr-u17-l3": {
        "id": "fr-u17-l3",
        "subject": "french",
        "unit": 17,
        "lessonNumber": 3,
        "title": "Le Plus-que-parfait et la Concordance des Temps au Passé (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of Plus-que-parfait et antériorité (Past Anteriority).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Plus-que-parfait et la Concordance des Temps au Passé » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Plus-que-parfait et antériorité (Past Anteriority). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (17.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (17.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (17.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Plus-que-parfait et antériorité (Past Anteriority)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Plus-que-parfait et antériorité (Past Anteriority) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (17.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (17.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (17.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Plus-que-parfait et la Concordance des Temps au Passé » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (17.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (17.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (17.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Plus-que-parfait et antériorité (Past Anteriority) » (Test 17-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (17.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (17.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (17.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («j_avais_fini_17_3»):",
                    "acceptedAnswers": [
                        "j_avais_fini_17_3"
                    ],
                    "explanation": "The target keyword was: 【j_avais_fini_17_3】"
                }
            ]
        }
    },
    "fr-u17-l4": {
        "id": "fr-u17-l4",
        "subject": "french",
        "unit": 17,
        "lessonNumber": 4,
        "title": "Le Plus-que-parfait et la Concordance des Temps au Passé (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of Plus-que-parfait et antériorité (Past Anteriority).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Plus-que-parfait et la Concordance des Temps au Passé » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Plus-que-parfait et antériorité (Past Anteriority). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (17.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (17.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (17.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Plus-que-parfait et antériorité (Past Anteriority)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Plus-que-parfait et antériorité (Past Anteriority) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (17.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (17.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (17.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Plus-que-parfait et la Concordance des Temps au Passé » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (17.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (17.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (17.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Plus-que-parfait et antériorité (Past Anteriority) » (Test 17-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (17.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (17.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (17.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («j_avais_fini_17_4»):",
                    "acceptedAnswers": [
                        "j_avais_fini_17_4"
                    ],
                    "explanation": "The target keyword was: 【j_avais_fini_17_4】"
                }
            ]
        }
    },
    "fr-u17-l5": {
        "id": "fr-u17-l5",
        "subject": "french",
        "unit": 17,
        "lessonNumber": 5,
        "title": "Le Plus-que-parfait et la Concordance des Temps au Passé (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of Plus-que-parfait et antériorité (Past Anteriority).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Plus-que-parfait et la Concordance des Temps au Passé » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Plus-que-parfait et antériorité (Past Anteriority). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (17.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (17.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (17.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Plus-que-parfait et antériorité (Past Anteriority)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Plus-que-parfait et antériorité (Past Anteriority) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (17.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (17.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (17.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Plus-que-parfait et la Concordance des Temps au Passé » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (17.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (17.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (17.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Plus-que-parfait et antériorité (Past Anteriority) » (Test 17-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (17.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (17.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (17.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («j_avais_fini_17_5»):",
                    "acceptedAnswers": [
                        "j_avais_fini_17_5"
                    ],
                    "explanation": "The target keyword was: 【j_avais_fini_17_5】"
                }
            ]
        }
    },
    "fr-u18-l1": {
        "id": "fr-u18-l1",
        "subject": "french",
        "unit": 18,
        "lessonNumber": 1,
        "title": "Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of Hypothèses avec la conjonction si (Hypothetical Conditions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Hypothèses avec la conjonction si (Hypothetical Conditions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (18.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (18.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (18.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Hypothèses avec la conjonction si (Hypothetical Conditions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Hypothèses avec la conjonction si (Hypothetical Conditions) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (18.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (18.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (18.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (18.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (18.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (18.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Hypothèses avec la conjonction si (Hypothetical Conditions) » (Test 18-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (18.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (18.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (18.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («si_j_avais_18_1»):",
                    "acceptedAnswers": [
                        "si_j_avais_18_1"
                    ],
                    "explanation": "The target keyword was: 【si_j_avais_18_1】"
                }
            ]
        }
    },
    "fr-u18-l2": {
        "id": "fr-u18-l2",
        "subject": "french",
        "unit": 18,
        "lessonNumber": 2,
        "title": "Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of Hypothèses avec la conjonction si (Hypothetical Conditions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Hypothèses avec la conjonction si (Hypothetical Conditions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (18.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (18.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (18.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Hypothèses avec la conjonction si (Hypothetical Conditions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Hypothèses avec la conjonction si (Hypothetical Conditions) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (18.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (18.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (18.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (18.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (18.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (18.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Hypothèses avec la conjonction si (Hypothetical Conditions) » (Test 18-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (18.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (18.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (18.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («si_j_avais_18_2»):",
                    "acceptedAnswers": [
                        "si_j_avais_18_2"
                    ],
                    "explanation": "The target keyword was: 【si_j_avais_18_2】"
                }
            ]
        }
    },
    "fr-u18-l3": {
        "id": "fr-u18-l3",
        "subject": "french",
        "unit": 18,
        "lessonNumber": 3,
        "title": "Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of Hypothèses avec la conjonction si (Hypothetical Conditions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Hypothèses avec la conjonction si (Hypothetical Conditions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (18.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (18.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (18.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Hypothèses avec la conjonction si (Hypothetical Conditions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Hypothèses avec la conjonction si (Hypothetical Conditions) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (18.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (18.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (18.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (18.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (18.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (18.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Hypothèses avec la conjonction si (Hypothetical Conditions) » (Test 18-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (18.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (18.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (18.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («si_j_avais_18_3»):",
                    "acceptedAnswers": [
                        "si_j_avais_18_3"
                    ],
                    "explanation": "The target keyword was: 【si_j_avais_18_3】"
                }
            ]
        }
    },
    "fr-u18-l4": {
        "id": "fr-u18-l4",
        "subject": "french",
        "unit": 18,
        "lessonNumber": 4,
        "title": "Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of Hypothèses avec la conjonction si (Hypothetical Conditions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Hypothèses avec la conjonction si (Hypothetical Conditions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (18.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (18.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (18.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Hypothèses avec la conjonction si (Hypothetical Conditions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Hypothèses avec la conjonction si (Hypothetical Conditions) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (18.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (18.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (18.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (18.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (18.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (18.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Hypothèses avec la conjonction si (Hypothetical Conditions) » (Test 18-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (18.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (18.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (18.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («si_j_avais_18_4»):",
                    "acceptedAnswers": [
                        "si_j_avais_18_4"
                    ],
                    "explanation": "The target keyword was: 【si_j_avais_18_4】"
                }
            ]
        }
    },
    "fr-u18-l5": {
        "id": "fr-u18-l5",
        "subject": "french",
        "unit": 18,
        "lessonNumber": 5,
        "title": "Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of Hypothèses avec la conjonction si (Hypothetical Conditions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Hypothèses avec la conjonction si (Hypothetical Conditions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (18.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (18.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (18.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Hypothèses avec la conjonction si (Hypothetical Conditions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Hypothèses avec la conjonction si (Hypothetical Conditions) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (18.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (18.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (18.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Hypothèses Réelles et Irréelles avec 'Si' (Conditional Hypotheses) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (18.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (18.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (18.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Hypothèses avec la conjonction si (Hypothetical Conditions) » (Test 18-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (18.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (18.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (18.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («si_j_avais_18_5»):",
                    "acceptedAnswers": [
                        "si_j_avais_18_5"
                    ],
                    "explanation": "The target keyword was: 【si_j_avais_18_5】"
                }
            ]
        }
    },
    "fr-u19-l1": {
        "id": "fr-u19-l1",
        "subject": "french",
        "unit": 19,
        "lessonNumber": 1,
        "title": "La Voix Passive et le Passif Pronominal (Passive Voice) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of Forme passive et passif pronominal (Passive Constructions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Voix Passive et le Passif Pronominal (Passive Voice) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Forme passive et passif pronominal (Passive Constructions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (19.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (19.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (19.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Forme passive et passif pronominal (Passive Constructions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Forme passive et passif pronominal (Passive Constructions) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (19.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (19.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (19.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Voix Passive et le Passif Pronominal (Passive Voice) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (19.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (19.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (19.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Forme passive et passif pronominal (Passive Constructions) » (Test 19-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (19.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (19.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (19.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («est_construit_19_1»):",
                    "acceptedAnswers": [
                        "est_construit_19_1"
                    ],
                    "explanation": "The target keyword was: 【est_construit_19_1】"
                }
            ]
        }
    },
    "fr-u19-l2": {
        "id": "fr-u19-l2",
        "subject": "french",
        "unit": 19,
        "lessonNumber": 2,
        "title": "La Voix Passive et le Passif Pronominal (Passive Voice) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of Forme passive et passif pronominal (Passive Constructions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Voix Passive et le Passif Pronominal (Passive Voice) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Forme passive et passif pronominal (Passive Constructions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (19.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (19.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (19.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Forme passive et passif pronominal (Passive Constructions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Forme passive et passif pronominal (Passive Constructions) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (19.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (19.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (19.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Voix Passive et le Passif Pronominal (Passive Voice) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (19.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (19.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (19.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Forme passive et passif pronominal (Passive Constructions) » (Test 19-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (19.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (19.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (19.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («est_construit_19_2»):",
                    "acceptedAnswers": [
                        "est_construit_19_2"
                    ],
                    "explanation": "The target keyword was: 【est_construit_19_2】"
                }
            ]
        }
    },
    "fr-u19-l3": {
        "id": "fr-u19-l3",
        "subject": "french",
        "unit": 19,
        "lessonNumber": 3,
        "title": "La Voix Passive et le Passif Pronominal (Passive Voice) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of Forme passive et passif pronominal (Passive Constructions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Voix Passive et le Passif Pronominal (Passive Voice) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Forme passive et passif pronominal (Passive Constructions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (19.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (19.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (19.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Forme passive et passif pronominal (Passive Constructions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Forme passive et passif pronominal (Passive Constructions) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (19.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (19.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (19.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Voix Passive et le Passif Pronominal (Passive Voice) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (19.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (19.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (19.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Forme passive et passif pronominal (Passive Constructions) » (Test 19-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (19.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (19.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (19.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («est_construit_19_3»):",
                    "acceptedAnswers": [
                        "est_construit_19_3"
                    ],
                    "explanation": "The target keyword was: 【est_construit_19_3】"
                }
            ]
        }
    },
    "fr-u19-l4": {
        "id": "fr-u19-l4",
        "subject": "french",
        "unit": 19,
        "lessonNumber": 4,
        "title": "La Voix Passive et le Passif Pronominal (Passive Voice) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of Forme passive et passif pronominal (Passive Constructions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Voix Passive et le Passif Pronominal (Passive Voice) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Forme passive et passif pronominal (Passive Constructions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (19.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (19.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (19.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Forme passive et passif pronominal (Passive Constructions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Forme passive et passif pronominal (Passive Constructions) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (19.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (19.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (19.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Voix Passive et le Passif Pronominal (Passive Voice) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (19.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (19.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (19.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Forme passive et passif pronominal (Passive Constructions) » (Test 19-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (19.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (19.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (19.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («est_construit_19_4»):",
                    "acceptedAnswers": [
                        "est_construit_19_4"
                    ],
                    "explanation": "The target keyword was: 【est_construit_19_4】"
                }
            ]
        }
    },
    "fr-u19-l5": {
        "id": "fr-u19-l5",
        "subject": "french",
        "unit": 19,
        "lessonNumber": 5,
        "title": "La Voix Passive et le Passif Pronominal (Passive Voice) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of Forme passive et passif pronominal (Passive Constructions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Voix Passive et le Passif Pronominal (Passive Voice) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Forme passive et passif pronominal (Passive Constructions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (19.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (19.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (19.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Forme passive et passif pronominal (Passive Constructions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Forme passive et passif pronominal (Passive Constructions) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (19.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (19.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (19.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Voix Passive et le Passif Pronominal (Passive Voice) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (19.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (19.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (19.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Forme passive et passif pronominal (Passive Constructions) » (Test 19-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (19.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (19.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (19.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («est_construit_19_5»):",
                    "acceptedAnswers": [
                        "est_construit_19_5"
                    ],
                    "explanation": "The target keyword was: 【est_construit_19_5】"
                }
            ]
        }
    },
    "fr-u20-l1": {
        "id": "fr-u20-l1",
        "subject": "french",
        "unit": 20,
        "lessonNumber": 1,
        "title": "Le Discours Rapporté au Présent et au Passé (Reported Speech) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of Discours indirect et concordance (Reported Speech).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Discours Rapporté au Présent et au Passé (Reported Speech) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Discours indirect et concordance (Reported Speech). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (20.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (20.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (20.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Discours indirect et concordance (Reported Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Discours indirect et concordance (Reported Speech) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (20.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (20.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (20.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Discours Rapporté au Présent et au Passé (Reported Speech) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (20.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (20.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (20.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Discours indirect et concordance (Reported Speech) » (Test 20-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (20.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (20.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (20.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_a_dit_que_20_1»):",
                    "acceptedAnswers": [
                        "il_a_dit_que_20_1"
                    ],
                    "explanation": "The target keyword was: 【il_a_dit_que_20_1】"
                }
            ]
        }
    },
    "fr-u20-l2": {
        "id": "fr-u20-l2",
        "subject": "french",
        "unit": 20,
        "lessonNumber": 2,
        "title": "Le Discours Rapporté au Présent et au Passé (Reported Speech) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of Discours indirect et concordance (Reported Speech).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Discours Rapporté au Présent et au Passé (Reported Speech) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Discours indirect et concordance (Reported Speech). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (20.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (20.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (20.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Discours indirect et concordance (Reported Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Discours indirect et concordance (Reported Speech) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (20.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (20.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (20.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Discours Rapporté au Présent et au Passé (Reported Speech) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (20.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (20.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (20.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Discours indirect et concordance (Reported Speech) » (Test 20-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (20.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (20.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (20.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_a_dit_que_20_2»):",
                    "acceptedAnswers": [
                        "il_a_dit_que_20_2"
                    ],
                    "explanation": "The target keyword was: 【il_a_dit_que_20_2】"
                }
            ]
        }
    },
    "fr-u20-l3": {
        "id": "fr-u20-l3",
        "subject": "french",
        "unit": 20,
        "lessonNumber": 3,
        "title": "Le Discours Rapporté au Présent et au Passé (Reported Speech) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of Discours indirect et concordance (Reported Speech).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Discours Rapporté au Présent et au Passé (Reported Speech) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Discours indirect et concordance (Reported Speech). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (20.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (20.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (20.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Discours indirect et concordance (Reported Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Discours indirect et concordance (Reported Speech) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (20.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (20.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (20.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Discours Rapporté au Présent et au Passé (Reported Speech) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (20.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (20.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (20.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Discours indirect et concordance (Reported Speech) » (Test 20-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (20.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (20.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (20.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_a_dit_que_20_3»):",
                    "acceptedAnswers": [
                        "il_a_dit_que_20_3"
                    ],
                    "explanation": "The target keyword was: 【il_a_dit_que_20_3】"
                }
            ]
        }
    },
    "fr-u20-l4": {
        "id": "fr-u20-l4",
        "subject": "french",
        "unit": 20,
        "lessonNumber": 4,
        "title": "Le Discours Rapporté au Présent et au Passé (Reported Speech) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of Discours indirect et concordance (Reported Speech).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Discours Rapporté au Présent et au Passé (Reported Speech) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Discours indirect et concordance (Reported Speech). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (20.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (20.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (20.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Discours indirect et concordance (Reported Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Discours indirect et concordance (Reported Speech) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (20.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (20.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (20.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Discours Rapporté au Présent et au Passé (Reported Speech) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (20.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (20.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (20.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Discours indirect et concordance (Reported Speech) » (Test 20-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (20.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (20.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (20.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_a_dit_que_20_4»):",
                    "acceptedAnswers": [
                        "il_a_dit_que_20_4"
                    ],
                    "explanation": "The target keyword was: 【il_a_dit_que_20_4】"
                }
            ]
        }
    },
    "fr-u20-l5": {
        "id": "fr-u20-l5",
        "subject": "french",
        "unit": 20,
        "lessonNumber": 5,
        "title": "Le Discours Rapporté au Présent et au Passé (Reported Speech) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of Discours indirect et concordance (Reported Speech).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Le Discours Rapporté au Présent et au Passé (Reported Speech) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Discours indirect et concordance (Reported Speech). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (20.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (20.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (20.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Discours indirect et concordance (Reported Speech)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Discours indirect et concordance (Reported Speech) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (20.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (20.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (20.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Le Discours Rapporté au Présent et au Passé (Reported Speech) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (20.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (20.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (20.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Discours indirect et concordance (Reported Speech) » (Test 20-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (20.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (20.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (20.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_a_dit_que_20_5»):",
                    "acceptedAnswers": [
                        "il_a_dit_que_20_5"
                    ],
                    "explanation": "The target keyword was: 【il_a_dit_que_20_5】"
                }
            ]
        }
    },
    "fr-u21-l1": {
        "id": "fr-u21-l1",
        "subject": "french",
        "unit": 21,
        "lessonNumber": 1,
        "title": "Subordonnées Circonstancielles de Cause, But et Conséquence (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of Propositions subordonnées de cause et but (Causal & Final Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Subordonnées Circonstancielles de Cause, But et Conséquence » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Propositions subordonnées de cause et but (Causal & Final Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (21.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (21.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (21.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Propositions subordonnées de cause et but (Causal & Final Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Propositions subordonnées de cause et but (Causal & Final Clauses) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (21.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (21.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (21.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Subordonnées Circonstancielles de Cause, But et Conséquence » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (21.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (21.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (21.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Propositions subordonnées de cause et but (Causal & Final Clauses) » (Test 21-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (21.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (21.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (21.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («parce_que_21_1»):",
                    "acceptedAnswers": [
                        "parce_que_21_1"
                    ],
                    "explanation": "The target keyword was: 【parce_que_21_1】"
                }
            ]
        }
    },
    "fr-u21-l2": {
        "id": "fr-u21-l2",
        "subject": "french",
        "unit": 21,
        "lessonNumber": 2,
        "title": "Subordonnées Circonstancielles de Cause, But et Conséquence (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of Propositions subordonnées de cause et but (Causal & Final Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Subordonnées Circonstancielles de Cause, But et Conséquence » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Propositions subordonnées de cause et but (Causal & Final Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (21.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (21.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (21.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Propositions subordonnées de cause et but (Causal & Final Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Propositions subordonnées de cause et but (Causal & Final Clauses) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (21.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (21.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (21.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Subordonnées Circonstancielles de Cause, But et Conséquence » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (21.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (21.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (21.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Propositions subordonnées de cause et but (Causal & Final Clauses) » (Test 21-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (21.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (21.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (21.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («parce_que_21_2»):",
                    "acceptedAnswers": [
                        "parce_que_21_2"
                    ],
                    "explanation": "The target keyword was: 【parce_que_21_2】"
                }
            ]
        }
    },
    "fr-u21-l3": {
        "id": "fr-u21-l3",
        "subject": "french",
        "unit": 21,
        "lessonNumber": 3,
        "title": "Subordonnées Circonstancielles de Cause, But et Conséquence (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of Propositions subordonnées de cause et but (Causal & Final Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Subordonnées Circonstancielles de Cause, But et Conséquence » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Propositions subordonnées de cause et but (Causal & Final Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (21.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (21.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (21.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Propositions subordonnées de cause et but (Causal & Final Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Propositions subordonnées de cause et but (Causal & Final Clauses) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (21.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (21.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (21.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Subordonnées Circonstancielles de Cause, But et Conséquence » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (21.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (21.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (21.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Propositions subordonnées de cause et but (Causal & Final Clauses) » (Test 21-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (21.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (21.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (21.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («parce_que_21_3»):",
                    "acceptedAnswers": [
                        "parce_que_21_3"
                    ],
                    "explanation": "The target keyword was: 【parce_que_21_3】"
                }
            ]
        }
    },
    "fr-u21-l4": {
        "id": "fr-u21-l4",
        "subject": "french",
        "unit": 21,
        "lessonNumber": 4,
        "title": "Subordonnées Circonstancielles de Cause, But et Conséquence (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of Propositions subordonnées de cause et but (Causal & Final Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Subordonnées Circonstancielles de Cause, But et Conséquence » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Propositions subordonnées de cause et but (Causal & Final Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (21.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (21.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (21.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Propositions subordonnées de cause et but (Causal & Final Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Propositions subordonnées de cause et but (Causal & Final Clauses) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (21.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (21.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (21.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Subordonnées Circonstancielles de Cause, But et Conséquence » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (21.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (21.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (21.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Propositions subordonnées de cause et but (Causal & Final Clauses) » (Test 21-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (21.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (21.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (21.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («parce_que_21_4»):",
                    "acceptedAnswers": [
                        "parce_que_21_4"
                    ],
                    "explanation": "The target keyword was: 【parce_que_21_4】"
                }
            ]
        }
    },
    "fr-u21-l5": {
        "id": "fr-u21-l5",
        "subject": "french",
        "unit": 21,
        "lessonNumber": 5,
        "title": "Subordonnées Circonstancielles de Cause, But et Conséquence (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of Propositions subordonnées de cause et but (Causal & Final Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Subordonnées Circonstancielles de Cause, But et Conséquence » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Propositions subordonnées de cause et but (Causal & Final Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (21.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (21.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (21.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Propositions subordonnées de cause et but (Causal & Final Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Propositions subordonnées de cause et but (Causal & Final Clauses) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (21.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (21.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (21.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Subordonnées Circonstancielles de Cause, But et Conséquence » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (21.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (21.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (21.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Propositions subordonnées de cause et but (Causal & Final Clauses) » (Test 21-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (21.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (21.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (21.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («parce_que_21_5»):",
                    "acceptedAnswers": [
                        "parce_que_21_5"
                    ],
                    "explanation": "The target keyword was: 【parce_que_21_5】"
                }
            ]
        }
    },
    "fr-u22-l1": {
        "id": "fr-u22-l1",
        "subject": "french",
        "unit": 22,
        "lessonNumber": 1,
        "title": "La Concession et l'Opposition : Bien que, Malgré, Quoique (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of Concession et opposition (Concessive Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Concession et l'Opposition : Bien que, Malgré, Quoique » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Concession et opposition (Concessive Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (22.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (22.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (22.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Concession et opposition (Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Concession et opposition (Concessive Clauses) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (22.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (22.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (22.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Concession et l'Opposition : Bien que, Malgré, Quoique » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (22.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (22.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (22.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Concession et opposition (Concessive Clauses) » (Test 22-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (22.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (22.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (22.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bien_que_22_1»):",
                    "acceptedAnswers": [
                        "bien_que_22_1"
                    ],
                    "explanation": "The target keyword was: 【bien_que_22_1】"
                }
            ]
        }
    },
    "fr-u22-l2": {
        "id": "fr-u22-l2",
        "subject": "french",
        "unit": 22,
        "lessonNumber": 2,
        "title": "La Concession et l'Opposition : Bien que, Malgré, Quoique (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of Concession et opposition (Concessive Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Concession et l'Opposition : Bien que, Malgré, Quoique » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Concession et opposition (Concessive Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (22.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (22.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (22.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Concession et opposition (Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Concession et opposition (Concessive Clauses) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (22.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (22.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (22.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Concession et l'Opposition : Bien que, Malgré, Quoique » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (22.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (22.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (22.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Concession et opposition (Concessive Clauses) » (Test 22-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (22.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (22.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (22.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bien_que_22_2»):",
                    "acceptedAnswers": [
                        "bien_que_22_2"
                    ],
                    "explanation": "The target keyword was: 【bien_que_22_2】"
                }
            ]
        }
    },
    "fr-u22-l3": {
        "id": "fr-u22-l3",
        "subject": "french",
        "unit": 22,
        "lessonNumber": 3,
        "title": "La Concession et l'Opposition : Bien que, Malgré, Quoique (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of Concession et opposition (Concessive Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Concession et l'Opposition : Bien que, Malgré, Quoique » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Concession et opposition (Concessive Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (22.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (22.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (22.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Concession et opposition (Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Concession et opposition (Concessive Clauses) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (22.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (22.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (22.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Concession et l'Opposition : Bien que, Malgré, Quoique » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (22.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (22.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (22.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Concession et opposition (Concessive Clauses) » (Test 22-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (22.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (22.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (22.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bien_que_22_3»):",
                    "acceptedAnswers": [
                        "bien_que_22_3"
                    ],
                    "explanation": "The target keyword was: 【bien_que_22_3】"
                }
            ]
        }
    },
    "fr-u22-l4": {
        "id": "fr-u22-l4",
        "subject": "french",
        "unit": 22,
        "lessonNumber": 4,
        "title": "La Concession et l'Opposition : Bien que, Malgré, Quoique (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of Concession et opposition (Concessive Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Concession et l'Opposition : Bien que, Malgré, Quoique » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Concession et opposition (Concessive Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (22.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (22.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (22.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Concession et opposition (Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Concession et opposition (Concessive Clauses) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (22.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (22.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (22.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Concession et l'Opposition : Bien que, Malgré, Quoique » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (22.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (22.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (22.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Concession et opposition (Concessive Clauses) » (Test 22-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (22.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (22.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (22.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bien_que_22_4»):",
                    "acceptedAnswers": [
                        "bien_que_22_4"
                    ],
                    "explanation": "The target keyword was: 【bien_que_22_4】"
                }
            ]
        }
    },
    "fr-u22-l5": {
        "id": "fr-u22-l5",
        "subject": "french",
        "unit": 22,
        "lessonNumber": 5,
        "title": "La Concession et l'Opposition : Bien que, Malgré, Quoique (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of Concession et opposition (Concessive Clauses).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « La Concession et l'Opposition : Bien que, Malgré, Quoique » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Concession et opposition (Concessive Clauses). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (22.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (22.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (22.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Concession et opposition (Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Concession et opposition (Concessive Clauses) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (22.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (22.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (22.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « La Concession et l'Opposition : Bien que, Malgré, Quoique » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (22.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (22.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (22.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Concession et opposition (Concessive Clauses) » (Test 22-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (22.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (22.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (22.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bien_que_22_5»):",
                    "acceptedAnswers": [
                        "bien_que_22_5"
                    ],
                    "explanation": "The target keyword was: 【bien_que_22_5】"
                }
            ]
        }
    },
    "fr-u23-l1": {
        "id": "fr-u23-l1",
        "subject": "french",
        "unit": 23,
        "lessonNumber": 1,
        "title": "Correspondance Professionnelle et Négociation Commerciale (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of Français des affaires et négociation (Corporate Communication).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Correspondance Professionnelle et Négociation Commerciale » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Français des affaires et négociation (Corporate Communication). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (23.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (23.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (23.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Français des affaires et négociation (Corporate Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Français des affaires et négociation (Corporate Communication) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (23.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (23.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (23.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Correspondance Professionnelle et Négociation Commerciale » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (23.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (23.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (23.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Français des affaires et négociation (Corporate Communication) » (Test 23-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (23.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (23.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (23.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («courriel_23_1»):",
                    "acceptedAnswers": [
                        "courriel_23_1"
                    ],
                    "explanation": "The target keyword was: 【courriel_23_1】"
                }
            ]
        }
    },
    "fr-u23-l2": {
        "id": "fr-u23-l2",
        "subject": "french",
        "unit": 23,
        "lessonNumber": 2,
        "title": "Correspondance Professionnelle et Négociation Commerciale (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of Français des affaires et négociation (Corporate Communication).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Correspondance Professionnelle et Négociation Commerciale » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Français des affaires et négociation (Corporate Communication). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (23.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (23.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (23.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Français des affaires et négociation (Corporate Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Français des affaires et négociation (Corporate Communication) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (23.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (23.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (23.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Correspondance Professionnelle et Négociation Commerciale » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (23.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (23.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (23.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Français des affaires et négociation (Corporate Communication) » (Test 23-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (23.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (23.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (23.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («courriel_23_2»):",
                    "acceptedAnswers": [
                        "courriel_23_2"
                    ],
                    "explanation": "The target keyword was: 【courriel_23_2】"
                }
            ]
        }
    },
    "fr-u23-l3": {
        "id": "fr-u23-l3",
        "subject": "french",
        "unit": 23,
        "lessonNumber": 3,
        "title": "Correspondance Professionnelle et Négociation Commerciale (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of Français des affaires et négociation (Corporate Communication).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Correspondance Professionnelle et Négociation Commerciale » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Français des affaires et négociation (Corporate Communication). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (23.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (23.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (23.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Français des affaires et négociation (Corporate Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Français des affaires et négociation (Corporate Communication) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (23.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (23.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (23.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Correspondance Professionnelle et Négociation Commerciale » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (23.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (23.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (23.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Français des affaires et négociation (Corporate Communication) » (Test 23-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (23.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (23.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (23.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («courriel_23_3»):",
                    "acceptedAnswers": [
                        "courriel_23_3"
                    ],
                    "explanation": "The target keyword was: 【courriel_23_3】"
                }
            ]
        }
    },
    "fr-u23-l4": {
        "id": "fr-u23-l4",
        "subject": "french",
        "unit": 23,
        "lessonNumber": 4,
        "title": "Correspondance Professionnelle et Négociation Commerciale (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of Français des affaires et négociation (Corporate Communication).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Correspondance Professionnelle et Négociation Commerciale » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Français des affaires et négociation (Corporate Communication). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (23.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (23.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (23.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Français des affaires et négociation (Corporate Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Français des affaires et négociation (Corporate Communication) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (23.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (23.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (23.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Correspondance Professionnelle et Négociation Commerciale » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (23.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (23.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (23.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Français des affaires et négociation (Corporate Communication) » (Test 23-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (23.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (23.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (23.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («courriel_23_4»):",
                    "acceptedAnswers": [
                        "courriel_23_4"
                    ],
                    "explanation": "The target keyword was: 【courriel_23_4】"
                }
            ]
        }
    },
    "fr-u23-l5": {
        "id": "fr-u23-l5",
        "subject": "french",
        "unit": 23,
        "lessonNumber": 5,
        "title": "Correspondance Professionnelle et Négociation Commerciale (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of Français des affaires et négociation (Corporate Communication).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Correspondance Professionnelle et Négociation Commerciale » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Français des affaires et négociation (Corporate Communication). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (23.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (23.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (23.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Français des affaires et négociation (Corporate Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Français des affaires et négociation (Corporate Communication) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (23.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (23.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (23.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Correspondance Professionnelle et Négociation Commerciale » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (23.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (23.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (23.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Français des affaires et négociation (Corporate Communication) » (Test 23-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (23.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (23.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (23.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («courriel_23_5»):",
                    "acceptedAnswers": [
                        "courriel_23_5"
                    ],
                    "explanation": "The target keyword was: 【courriel_23_5】"
                }
            ]
        }
    },
    "fr-u24-l1": {
        "id": "fr-u24-l1",
        "subject": "french",
        "unit": 24,
        "lessonNumber": 1,
        "title": "Terminologie Médicale et Système de Santé (Healthcare French) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of Consultations médicales et santé (Medical Discourse).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Terminologie Médicale et Système de Santé (Healthcare French) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Consultations médicales et santé (Medical Discourse). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (24.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (24.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (24.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Consultations médicales et santé (Medical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Consultations médicales et santé (Medical Discourse) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (24.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (24.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (24.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Terminologie Médicale et Système de Santé (Healthcare French) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (24.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (24.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (24.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Consultations médicales et santé (Medical Discourse) » (Test 24-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (24.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (24.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (24.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («médecin_24_1»):",
                    "acceptedAnswers": [
                        "médecin_24_1"
                    ],
                    "explanation": "The target keyword was: 【médecin_24_1】"
                }
            ]
        }
    },
    "fr-u24-l2": {
        "id": "fr-u24-l2",
        "subject": "french",
        "unit": 24,
        "lessonNumber": 2,
        "title": "Terminologie Médicale et Système de Santé (Healthcare French) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of Consultations médicales et santé (Medical Discourse).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Terminologie Médicale et Système de Santé (Healthcare French) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Consultations médicales et santé (Medical Discourse). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (24.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (24.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (24.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Consultations médicales et santé (Medical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Consultations médicales et santé (Medical Discourse) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (24.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (24.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (24.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Terminologie Médicale et Système de Santé (Healthcare French) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (24.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (24.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (24.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Consultations médicales et santé (Medical Discourse) » (Test 24-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (24.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (24.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (24.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («médecin_24_2»):",
                    "acceptedAnswers": [
                        "médecin_24_2"
                    ],
                    "explanation": "The target keyword was: 【médecin_24_2】"
                }
            ]
        }
    },
    "fr-u24-l3": {
        "id": "fr-u24-l3",
        "subject": "french",
        "unit": 24,
        "lessonNumber": 3,
        "title": "Terminologie Médicale et Système de Santé (Healthcare French) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of Consultations médicales et santé (Medical Discourse).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Terminologie Médicale et Système de Santé (Healthcare French) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Consultations médicales et santé (Medical Discourse). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (24.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (24.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (24.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Consultations médicales et santé (Medical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Consultations médicales et santé (Medical Discourse) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (24.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (24.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (24.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Terminologie Médicale et Système de Santé (Healthcare French) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (24.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (24.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (24.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Consultations médicales et santé (Medical Discourse) » (Test 24-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (24.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (24.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (24.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («médecin_24_3»):",
                    "acceptedAnswers": [
                        "médecin_24_3"
                    ],
                    "explanation": "The target keyword was: 【médecin_24_3】"
                }
            ]
        }
    },
    "fr-u24-l4": {
        "id": "fr-u24-l4",
        "subject": "french",
        "unit": 24,
        "lessonNumber": 4,
        "title": "Terminologie Médicale et Système de Santé (Healthcare French) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of Consultations médicales et santé (Medical Discourse).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Terminologie Médicale et Système de Santé (Healthcare French) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Consultations médicales et santé (Medical Discourse). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (24.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (24.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (24.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Consultations médicales et santé (Medical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Consultations médicales et santé (Medical Discourse) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (24.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (24.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (24.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Terminologie Médicale et Système de Santé (Healthcare French) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (24.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (24.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (24.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Consultations médicales et santé (Medical Discourse) » (Test 24-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (24.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (24.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (24.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («médecin_24_4»):",
                    "acceptedAnswers": [
                        "médecin_24_4"
                    ],
                    "explanation": "The target keyword was: 【médecin_24_4】"
                }
            ]
        }
    },
    "fr-u24-l5": {
        "id": "fr-u24-l5",
        "subject": "french",
        "unit": 24,
        "lessonNumber": 5,
        "title": "Terminologie Médicale et Système de Santé (Healthcare French) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of Consultations médicales et santé (Medical Discourse).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Terminologie Médicale et Système de Santé (Healthcare French) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Consultations médicales et santé (Medical Discourse). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (24.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (24.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (24.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Consultations médicales et santé (Medical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Consultations médicales et santé (Medical Discourse) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (24.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (24.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (24.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Terminologie Médicale et Système de Santé (Healthcare French) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (24.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (24.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (24.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Consultations médicales et santé (Medical Discourse) » (Test 24-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (24.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (24.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (24.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («médecin_24_5»):",
                    "acceptedAnswers": [
                        "médecin_24_5"
                    ],
                    "explanation": "The target keyword was: 【médecin_24_5】"
                }
            ]
        }
    },
    "fr-u25-l1": {
        "id": "fr-u25-l1",
        "subject": "french",
        "unit": 25,
        "lessonNumber": 1,
        "title": "Droit Civil, Contrats et Vocabulaire Juridique (Legal French) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of Vocabulaire juridique et contrats (Legal Terminology).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Droit Civil, Contrats et Vocabulaire Juridique (Legal French) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Vocabulaire juridique et contrats (Legal Terminology). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (25.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (25.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (25.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vocabulaire juridique et contrats (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Vocabulaire juridique et contrats (Legal Terminology) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (25.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (25.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (25.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Droit Civil, Contrats et Vocabulaire Juridique (Legal French) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (25.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (25.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (25.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Vocabulaire juridique et contrats (Legal Terminology) » (Test 25-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (25.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (25.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (25.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («tribunal_25_1»):",
                    "acceptedAnswers": [
                        "tribunal_25_1"
                    ],
                    "explanation": "The target keyword was: 【tribunal_25_1】"
                }
            ]
        }
    },
    "fr-u25-l2": {
        "id": "fr-u25-l2",
        "subject": "french",
        "unit": 25,
        "lessonNumber": 2,
        "title": "Droit Civil, Contrats et Vocabulaire Juridique (Legal French) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of Vocabulaire juridique et contrats (Legal Terminology).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Droit Civil, Contrats et Vocabulaire Juridique (Legal French) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Vocabulaire juridique et contrats (Legal Terminology). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (25.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (25.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (25.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vocabulaire juridique et contrats (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Vocabulaire juridique et contrats (Legal Terminology) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (25.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (25.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (25.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Droit Civil, Contrats et Vocabulaire Juridique (Legal French) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (25.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (25.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (25.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Vocabulaire juridique et contrats (Legal Terminology) » (Test 25-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (25.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (25.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (25.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («tribunal_25_2»):",
                    "acceptedAnswers": [
                        "tribunal_25_2"
                    ],
                    "explanation": "The target keyword was: 【tribunal_25_2】"
                }
            ]
        }
    },
    "fr-u25-l3": {
        "id": "fr-u25-l3",
        "subject": "french",
        "unit": 25,
        "lessonNumber": 3,
        "title": "Droit Civil, Contrats et Vocabulaire Juridique (Legal French) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of Vocabulaire juridique et contrats (Legal Terminology).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Droit Civil, Contrats et Vocabulaire Juridique (Legal French) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Vocabulaire juridique et contrats (Legal Terminology). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (25.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (25.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (25.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vocabulaire juridique et contrats (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Vocabulaire juridique et contrats (Legal Terminology) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (25.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (25.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (25.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Droit Civil, Contrats et Vocabulaire Juridique (Legal French) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (25.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (25.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (25.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Vocabulaire juridique et contrats (Legal Terminology) » (Test 25-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (25.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (25.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (25.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («tribunal_25_3»):",
                    "acceptedAnswers": [
                        "tribunal_25_3"
                    ],
                    "explanation": "The target keyword was: 【tribunal_25_3】"
                }
            ]
        }
    },
    "fr-u25-l4": {
        "id": "fr-u25-l4",
        "subject": "french",
        "unit": 25,
        "lessonNumber": 4,
        "title": "Droit Civil, Contrats et Vocabulaire Juridique (Legal French) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of Vocabulaire juridique et contrats (Legal Terminology).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Droit Civil, Contrats et Vocabulaire Juridique (Legal French) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Vocabulaire juridique et contrats (Legal Terminology). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (25.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (25.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (25.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vocabulaire juridique et contrats (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Vocabulaire juridique et contrats (Legal Terminology) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (25.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (25.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (25.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Droit Civil, Contrats et Vocabulaire Juridique (Legal French) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (25.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (25.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (25.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Vocabulaire juridique et contrats (Legal Terminology) » (Test 25-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (25.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (25.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (25.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («tribunal_25_4»):",
                    "acceptedAnswers": [
                        "tribunal_25_4"
                    ],
                    "explanation": "The target keyword was: 【tribunal_25_4】"
                }
            ]
        }
    },
    "fr-u25-l5": {
        "id": "fr-u25-l5",
        "subject": "french",
        "unit": 25,
        "lessonNumber": 5,
        "title": "Droit Civil, Contrats et Vocabulaire Juridique (Legal French) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of Vocabulaire juridique et contrats (Legal Terminology).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Droit Civil, Contrats et Vocabulaire Juridique (Legal French) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Vocabulaire juridique et contrats (Legal Terminology). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (25.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (25.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (25.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Vocabulaire juridique et contrats (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Vocabulaire juridique et contrats (Legal Terminology) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (25.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (25.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (25.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Droit Civil, Contrats et Vocabulaire Juridique (Legal French) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (25.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (25.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (25.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Vocabulaire juridique et contrats (Legal Terminology) » (Test 25-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (25.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (25.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (25.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («tribunal_25_5»):",
                    "acceptedAnswers": [
                        "tribunal_25_5"
                    ],
                    "explanation": "The target keyword was: 【tribunal_25_5】"
                }
            ]
        }
    },
    "fr-u26-l1": {
        "id": "fr-u26-l1",
        "subject": "french",
        "unit": 26,
        "lessonNumber": 1,
        "title": "Économie, Finance et Marchés Boursiers (Financial Discourse) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of Analyse économique et marchés (Financial Markets).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Économie, Finance et Marchés Boursiers (Financial Discourse) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Analyse économique et marchés (Financial Markets). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (26.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (26.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (26.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Analyse économique et marchés (Financial Markets)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Analyse économique et marchés (Financial Markets) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (26.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (26.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (26.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Économie, Finance et Marchés Boursiers (Financial Discourse) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (26.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (26.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (26.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Analyse économique et marchés (Financial Markets) » (Test 26-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (26.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (26.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (26.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bourse_26_1»):",
                    "acceptedAnswers": [
                        "bourse_26_1"
                    ],
                    "explanation": "The target keyword was: 【bourse_26_1】"
                }
            ]
        }
    },
    "fr-u26-l2": {
        "id": "fr-u26-l2",
        "subject": "french",
        "unit": 26,
        "lessonNumber": 2,
        "title": "Économie, Finance et Marchés Boursiers (Financial Discourse) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of Analyse économique et marchés (Financial Markets).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Économie, Finance et Marchés Boursiers (Financial Discourse) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Analyse économique et marchés (Financial Markets). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (26.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (26.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (26.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Analyse économique et marchés (Financial Markets)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Analyse économique et marchés (Financial Markets) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (26.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (26.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (26.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Économie, Finance et Marchés Boursiers (Financial Discourse) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (26.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (26.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (26.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Analyse économique et marchés (Financial Markets) » (Test 26-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (26.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (26.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (26.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bourse_26_2»):",
                    "acceptedAnswers": [
                        "bourse_26_2"
                    ],
                    "explanation": "The target keyword was: 【bourse_26_2】"
                }
            ]
        }
    },
    "fr-u26-l3": {
        "id": "fr-u26-l3",
        "subject": "french",
        "unit": 26,
        "lessonNumber": 3,
        "title": "Économie, Finance et Marchés Boursiers (Financial Discourse) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of Analyse économique et marchés (Financial Markets).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Économie, Finance et Marchés Boursiers (Financial Discourse) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Analyse économique et marchés (Financial Markets). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (26.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (26.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (26.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Analyse économique et marchés (Financial Markets)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Analyse économique et marchés (Financial Markets) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (26.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (26.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (26.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Économie, Finance et Marchés Boursiers (Financial Discourse) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (26.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (26.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (26.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Analyse économique et marchés (Financial Markets) » (Test 26-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (26.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (26.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (26.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bourse_26_3»):",
                    "acceptedAnswers": [
                        "bourse_26_3"
                    ],
                    "explanation": "The target keyword was: 【bourse_26_3】"
                }
            ]
        }
    },
    "fr-u26-l4": {
        "id": "fr-u26-l4",
        "subject": "french",
        "unit": 26,
        "lessonNumber": 4,
        "title": "Économie, Finance et Marchés Boursiers (Financial Discourse) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of Analyse économique et marchés (Financial Markets).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Économie, Finance et Marchés Boursiers (Financial Discourse) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Analyse économique et marchés (Financial Markets). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (26.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (26.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (26.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Analyse économique et marchés (Financial Markets)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Analyse économique et marchés (Financial Markets) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (26.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (26.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (26.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Économie, Finance et Marchés Boursiers (Financial Discourse) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (26.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (26.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (26.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Analyse économique et marchés (Financial Markets) » (Test 26-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (26.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (26.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (26.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bourse_26_4»):",
                    "acceptedAnswers": [
                        "bourse_26_4"
                    ],
                    "explanation": "The target keyword was: 【bourse_26_4】"
                }
            ]
        }
    },
    "fr-u26-l5": {
        "id": "fr-u26-l5",
        "subject": "french",
        "unit": 26,
        "lessonNumber": 5,
        "title": "Économie, Finance et Marchés Boursiers (Financial Discourse) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of Analyse économique et marchés (Financial Markets).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Économie, Finance et Marchés Boursiers (Financial Discourse) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Analyse économique et marchés (Financial Markets). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (26.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (26.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (26.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Analyse économique et marchés (Financial Markets)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Analyse économique et marchés (Financial Markets) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (26.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (26.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (26.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Économie, Finance et Marchés Boursiers (Financial Discourse) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (26.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (26.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (26.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Analyse économique et marchés (Financial Markets) » (Test 26-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (26.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (26.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (26.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («bourse_26_5»):",
                    "acceptedAnswers": [
                        "bourse_26_5"
                    ],
                    "explanation": "The target keyword was: 【bourse_26_5】"
                }
            ]
        }
    },
    "fr-u27-l1": {
        "id": "fr-u27-l1",
        "subject": "french",
        "unit": 27,
        "lessonNumber": 1,
        "title": "Critique Littéraire et Analyse Cinématographique (Arts & Film) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of Analyse littéraire et cinéma (Arts & Cinema Criticism).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Critique Littéraire et Analyse Cinématographique (Arts & Film) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Analyse littéraire et cinéma (Arts & Cinema Criticism). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (27.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (27.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (27.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Analyse littéraire et cinéma (Arts & Cinema Criticism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Analyse littéraire et cinéma (Arts & Cinema Criticism) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (27.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (27.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (27.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Critique Littéraire et Analyse Cinématographique (Arts & Film) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (27.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (27.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (27.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Analyse littéraire et cinéma (Arts & Cinema Criticism) » (Test 27-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (27.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (27.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (27.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («roman_27_1»):",
                    "acceptedAnswers": [
                        "roman_27_1"
                    ],
                    "explanation": "The target keyword was: 【roman_27_1】"
                }
            ]
        }
    },
    "fr-u27-l2": {
        "id": "fr-u27-l2",
        "subject": "french",
        "unit": 27,
        "lessonNumber": 2,
        "title": "Critique Littéraire et Analyse Cinématographique (Arts & Film) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of Analyse littéraire et cinéma (Arts & Cinema Criticism).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Critique Littéraire et Analyse Cinématographique (Arts & Film) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Analyse littéraire et cinéma (Arts & Cinema Criticism). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (27.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (27.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (27.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Analyse littéraire et cinéma (Arts & Cinema Criticism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Analyse littéraire et cinéma (Arts & Cinema Criticism) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (27.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (27.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (27.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Critique Littéraire et Analyse Cinématographique (Arts & Film) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (27.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (27.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (27.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Analyse littéraire et cinéma (Arts & Cinema Criticism) » (Test 27-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (27.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (27.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (27.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («roman_27_2»):",
                    "acceptedAnswers": [
                        "roman_27_2"
                    ],
                    "explanation": "The target keyword was: 【roman_27_2】"
                }
            ]
        }
    },
    "fr-u27-l3": {
        "id": "fr-u27-l3",
        "subject": "french",
        "unit": 27,
        "lessonNumber": 3,
        "title": "Critique Littéraire et Analyse Cinématographique (Arts & Film) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of Analyse littéraire et cinéma (Arts & Cinema Criticism).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Critique Littéraire et Analyse Cinématographique (Arts & Film) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Analyse littéraire et cinéma (Arts & Cinema Criticism). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (27.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (27.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (27.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Analyse littéraire et cinéma (Arts & Cinema Criticism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Analyse littéraire et cinéma (Arts & Cinema Criticism) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (27.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (27.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (27.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Critique Littéraire et Analyse Cinématographique (Arts & Film) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (27.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (27.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (27.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Analyse littéraire et cinéma (Arts & Cinema Criticism) » (Test 27-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (27.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (27.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (27.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («roman_27_3»):",
                    "acceptedAnswers": [
                        "roman_27_3"
                    ],
                    "explanation": "The target keyword was: 【roman_27_3】"
                }
            ]
        }
    },
    "fr-u27-l4": {
        "id": "fr-u27-l4",
        "subject": "french",
        "unit": 27,
        "lessonNumber": 4,
        "title": "Critique Littéraire et Analyse Cinématographique (Arts & Film) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of Analyse littéraire et cinéma (Arts & Cinema Criticism).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Critique Littéraire et Analyse Cinématographique (Arts & Film) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Analyse littéraire et cinéma (Arts & Cinema Criticism). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (27.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (27.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (27.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Analyse littéraire et cinéma (Arts & Cinema Criticism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Analyse littéraire et cinéma (Arts & Cinema Criticism) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (27.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (27.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (27.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Critique Littéraire et Analyse Cinématographique (Arts & Film) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (27.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (27.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (27.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Analyse littéraire et cinéma (Arts & Cinema Criticism) » (Test 27-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (27.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (27.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (27.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («roman_27_4»):",
                    "acceptedAnswers": [
                        "roman_27_4"
                    ],
                    "explanation": "The target keyword was: 【roman_27_4】"
                }
            ]
        }
    },
    "fr-u27-l5": {
        "id": "fr-u27-l5",
        "subject": "french",
        "unit": 27,
        "lessonNumber": 5,
        "title": "Critique Littéraire et Analyse Cinématographique (Arts & Film) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of Analyse littéraire et cinéma (Arts & Cinema Criticism).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Critique Littéraire et Analyse Cinématographique (Arts & Film) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Analyse littéraire et cinéma (Arts & Cinema Criticism). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (27.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (27.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (27.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Analyse littéraire et cinéma (Arts & Cinema Criticism)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Analyse littéraire et cinéma (Arts & Cinema Criticism) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (27.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (27.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (27.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Critique Littéraire et Analyse Cinématographique (Arts & Film) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (27.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (27.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (27.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Analyse littéraire et cinéma (Arts & Cinema Criticism) » (Test 27-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (27.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (27.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (27.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («roman_27_5»):",
                    "acceptedAnswers": [
                        "roman_27_5"
                    ],
                    "explanation": "The target keyword was: 【roman_27_5】"
                }
            ]
        }
    },
    "fr-u28-l1": {
        "id": "fr-u28-l1",
        "subject": "french",
        "unit": 28,
        "lessonNumber": 1,
        "title": "Écologie, Énergie et Politiques Environnementales (Ecology) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of Écologie et développement durable (Environmental Policy).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Écologie, Énergie et Politiques Environnementales (Ecology) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Écologie et développement durable (Environmental Policy). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (28.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (28.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (28.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Écologie et développement durable (Environmental Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Écologie et développement durable (Environmental Policy) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (28.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (28.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (28.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Écologie, Énergie et Politiques Environnementales (Ecology) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (28.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (28.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (28.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Écologie et développement durable (Environmental Policy) » (Test 28-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (28.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (28.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (28.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («écologie_28_1»):",
                    "acceptedAnswers": [
                        "écologie_28_1"
                    ],
                    "explanation": "The target keyword was: 【écologie_28_1】"
                }
            ]
        }
    },
    "fr-u28-l2": {
        "id": "fr-u28-l2",
        "subject": "french",
        "unit": 28,
        "lessonNumber": 2,
        "title": "Écologie, Énergie et Politiques Environnementales (Ecology) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of Écologie et développement durable (Environmental Policy).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Écologie, Énergie et Politiques Environnementales (Ecology) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Écologie et développement durable (Environmental Policy). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (28.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (28.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (28.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Écologie et développement durable (Environmental Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Écologie et développement durable (Environmental Policy) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (28.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (28.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (28.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Écologie, Énergie et Politiques Environnementales (Ecology) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (28.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (28.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (28.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Écologie et développement durable (Environmental Policy) » (Test 28-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (28.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (28.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (28.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («écologie_28_2»):",
                    "acceptedAnswers": [
                        "écologie_28_2"
                    ],
                    "explanation": "The target keyword was: 【écologie_28_2】"
                }
            ]
        }
    },
    "fr-u28-l3": {
        "id": "fr-u28-l3",
        "subject": "french",
        "unit": 28,
        "lessonNumber": 3,
        "title": "Écologie, Énergie et Politiques Environnementales (Ecology) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of Écologie et développement durable (Environmental Policy).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Écologie, Énergie et Politiques Environnementales (Ecology) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Écologie et développement durable (Environmental Policy). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (28.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (28.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (28.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Écologie et développement durable (Environmental Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Écologie et développement durable (Environmental Policy) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (28.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (28.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (28.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Écologie, Énergie et Politiques Environnementales (Ecology) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (28.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (28.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (28.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Écologie et développement durable (Environmental Policy) » (Test 28-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (28.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (28.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (28.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («écologie_28_3»):",
                    "acceptedAnswers": [
                        "écologie_28_3"
                    ],
                    "explanation": "The target keyword was: 【écologie_28_3】"
                }
            ]
        }
    },
    "fr-u28-l4": {
        "id": "fr-u28-l4",
        "subject": "french",
        "unit": 28,
        "lessonNumber": 4,
        "title": "Écologie, Énergie et Politiques Environnementales (Ecology) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of Écologie et développement durable (Environmental Policy).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Écologie, Énergie et Politiques Environnementales (Ecology) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Écologie et développement durable (Environmental Policy). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (28.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (28.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (28.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Écologie et développement durable (Environmental Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Écologie et développement durable (Environmental Policy) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (28.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (28.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (28.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Écologie, Énergie et Politiques Environnementales (Ecology) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (28.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (28.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (28.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Écologie et développement durable (Environmental Policy) » (Test 28-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (28.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (28.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (28.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («écologie_28_4»):",
                    "acceptedAnswers": [
                        "écologie_28_4"
                    ],
                    "explanation": "The target keyword was: 【écologie_28_4】"
                }
            ]
        }
    },
    "fr-u28-l5": {
        "id": "fr-u28-l5",
        "subject": "french",
        "unit": 28,
        "lessonNumber": 5,
        "title": "Écologie, Énergie et Politiques Environnementales (Ecology) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of Écologie et développement durable (Environmental Policy).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Écologie, Énergie et Politiques Environnementales (Ecology) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Écologie et développement durable (Environmental Policy). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (28.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (28.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (28.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Écologie et développement durable (Environmental Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Écologie et développement durable (Environmental Policy) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (28.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (28.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (28.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Écologie, Énergie et Politiques Environnementales (Ecology) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (28.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (28.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (28.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Écologie et développement durable (Environmental Policy) » (Test 28-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (28.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (28.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (28.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («écologie_28_5»):",
                    "acceptedAnswers": [
                        "écologie_28_5"
                    ],
                    "explanation": "The target keyword was: 【écologie_28_5】"
                }
            ]
        }
    },
    "fr-u29-l1": {
        "id": "fr-u29-l1",
        "subject": "french",
        "unit": 29,
        "lessonNumber": 1,
        "title": "Débats Politiques et Institutions Républicaines (Politics) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of Institutions républicaines et débat (Political Institutions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Débats Politiques et Institutions Républicaines (Politics) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Institutions républicaines et débat (Political Institutions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (29.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (29.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (29.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Institutions républicaines et débat (Political Institutions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Institutions républicaines et débat (Political Institutions) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (29.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (29.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (29.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Débats Politiques et Institutions Républicaines (Politics) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (29.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (29.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (29.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Institutions républicaines et débat (Political Institutions) » (Test 29-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (29.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (29.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (29.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («démocratie_29_1»):",
                    "acceptedAnswers": [
                        "démocratie_29_1"
                    ],
                    "explanation": "The target keyword was: 【démocratie_29_1】"
                }
            ]
        }
    },
    "fr-u29-l2": {
        "id": "fr-u29-l2",
        "subject": "french",
        "unit": 29,
        "lessonNumber": 2,
        "title": "Débats Politiques et Institutions Républicaines (Politics) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of Institutions républicaines et débat (Political Institutions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Débats Politiques et Institutions Républicaines (Politics) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Institutions républicaines et débat (Political Institutions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (29.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (29.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (29.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Institutions républicaines et débat (Political Institutions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Institutions républicaines et débat (Political Institutions) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (29.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (29.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (29.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Débats Politiques et Institutions Républicaines (Politics) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (29.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (29.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (29.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Institutions républicaines et débat (Political Institutions) » (Test 29-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (29.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (29.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (29.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («démocratie_29_2»):",
                    "acceptedAnswers": [
                        "démocratie_29_2"
                    ],
                    "explanation": "The target keyword was: 【démocratie_29_2】"
                }
            ]
        }
    },
    "fr-u29-l3": {
        "id": "fr-u29-l3",
        "subject": "french",
        "unit": 29,
        "lessonNumber": 3,
        "title": "Débats Politiques et Institutions Républicaines (Politics) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of Institutions républicaines et débat (Political Institutions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Débats Politiques et Institutions Républicaines (Politics) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Institutions républicaines et débat (Political Institutions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (29.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (29.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (29.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Institutions républicaines et débat (Political Institutions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Institutions républicaines et débat (Political Institutions) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (29.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (29.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (29.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Débats Politiques et Institutions Républicaines (Politics) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (29.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (29.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (29.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Institutions républicaines et débat (Political Institutions) » (Test 29-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (29.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (29.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (29.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («démocratie_29_3»):",
                    "acceptedAnswers": [
                        "démocratie_29_3"
                    ],
                    "explanation": "The target keyword was: 【démocratie_29_3】"
                }
            ]
        }
    },
    "fr-u29-l4": {
        "id": "fr-u29-l4",
        "subject": "french",
        "unit": 29,
        "lessonNumber": 4,
        "title": "Débats Politiques et Institutions Républicaines (Politics) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of Institutions républicaines et débat (Political Institutions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Débats Politiques et Institutions Républicaines (Politics) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Institutions républicaines et débat (Political Institutions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (29.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (29.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (29.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Institutions républicaines et débat (Political Institutions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Institutions républicaines et débat (Political Institutions) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (29.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (29.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (29.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Débats Politiques et Institutions Républicaines (Politics) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (29.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (29.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (29.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Institutions républicaines et débat (Political Institutions) » (Test 29-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (29.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (29.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (29.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («démocratie_29_4»):",
                    "acceptedAnswers": [
                        "démocratie_29_4"
                    ],
                    "explanation": "The target keyword was: 【démocratie_29_4】"
                }
            ]
        }
    },
    "fr-u29-l5": {
        "id": "fr-u29-l5",
        "subject": "french",
        "unit": 29,
        "lessonNumber": 5,
        "title": "Débats Politiques et Institutions Républicaines (Politics) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of Institutions républicaines et débat (Political Institutions).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Débats Politiques et Institutions Républicaines (Politics) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Institutions républicaines et débat (Political Institutions). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (29.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (29.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (29.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Institutions républicaines et débat (Political Institutions)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Institutions républicaines et débat (Political Institutions) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (29.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (29.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (29.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Débats Politiques et Institutions Républicaines (Politics) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (29.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (29.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (29.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Institutions républicaines et débat (Political Institutions) » (Test 29-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (29.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (29.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (29.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («démocratie_29_5»):",
                    "acceptedAnswers": [
                        "démocratie_29_5"
                    ],
                    "explanation": "The target keyword was: 【démocratie_29_5】"
                }
            ]
        }
    },
    "fr-u30-l1": {
        "id": "fr-u30-l1",
        "subject": "french",
        "unit": 30,
        "lessonNumber": 1,
        "title": "Philosophie des Lumières et Pensée Critique (Philosophy) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of Philosophie et pensée critique (Philosophical Discourse).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Philosophie des Lumières et Pensée Critique (Philosophy) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Philosophie et pensée critique (Philosophical Discourse). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (30.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (30.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (30.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Philosophie et pensée critique (Philosophical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Philosophie et pensée critique (Philosophical Discourse) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (30.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (30.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (30.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Philosophie des Lumières et Pensée Critique (Philosophy) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (30.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (30.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (30.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Philosophie et pensée critique (Philosophical Discourse) » (Test 30-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (30.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (30.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (30.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («philosophie_30_1»):",
                    "acceptedAnswers": [
                        "philosophie_30_1"
                    ],
                    "explanation": "The target keyword was: 【philosophie_30_1】"
                }
            ]
        }
    },
    "fr-u30-l2": {
        "id": "fr-u30-l2",
        "subject": "french",
        "unit": 30,
        "lessonNumber": 2,
        "title": "Philosophie des Lumières et Pensée Critique (Philosophy) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of Philosophie et pensée critique (Philosophical Discourse).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Philosophie des Lumières et Pensée Critique (Philosophy) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Philosophie et pensée critique (Philosophical Discourse). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (30.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (30.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (30.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Philosophie et pensée critique (Philosophical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Philosophie et pensée critique (Philosophical Discourse) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (30.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (30.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (30.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Philosophie des Lumières et Pensée Critique (Philosophy) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (30.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (30.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (30.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Philosophie et pensée critique (Philosophical Discourse) » (Test 30-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (30.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (30.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (30.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («philosophie_30_2»):",
                    "acceptedAnswers": [
                        "philosophie_30_2"
                    ],
                    "explanation": "The target keyword was: 【philosophie_30_2】"
                }
            ]
        }
    },
    "fr-u30-l3": {
        "id": "fr-u30-l3",
        "subject": "french",
        "unit": 30,
        "lessonNumber": 3,
        "title": "Philosophie des Lumières et Pensée Critique (Philosophy) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of Philosophie et pensée critique (Philosophical Discourse).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Philosophie des Lumières et Pensée Critique (Philosophy) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Philosophie et pensée critique (Philosophical Discourse). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (30.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (30.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (30.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Philosophie et pensée critique (Philosophical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Philosophie et pensée critique (Philosophical Discourse) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (30.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (30.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (30.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Philosophie des Lumières et Pensée Critique (Philosophy) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (30.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (30.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (30.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Philosophie et pensée critique (Philosophical Discourse) » (Test 30-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (30.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (30.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (30.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («philosophie_30_3»):",
                    "acceptedAnswers": [
                        "philosophie_30_3"
                    ],
                    "explanation": "The target keyword was: 【philosophie_30_3】"
                }
            ]
        }
    },
    "fr-u30-l4": {
        "id": "fr-u30-l4",
        "subject": "french",
        "unit": 30,
        "lessonNumber": 4,
        "title": "Philosophie des Lumières et Pensée Critique (Philosophy) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of Philosophie et pensée critique (Philosophical Discourse).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Philosophie des Lumières et Pensée Critique (Philosophy) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Philosophie et pensée critique (Philosophical Discourse). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (30.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (30.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (30.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Philosophie et pensée critique (Philosophical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Philosophie et pensée critique (Philosophical Discourse) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (30.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (30.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (30.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Philosophie des Lumières et Pensée Critique (Philosophy) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (30.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (30.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (30.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Philosophie et pensée critique (Philosophical Discourse) » (Test 30-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (30.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (30.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (30.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («philosophie_30_4»):",
                    "acceptedAnswers": [
                        "philosophie_30_4"
                    ],
                    "explanation": "The target keyword was: 【philosophie_30_4】"
                }
            ]
        }
    },
    "fr-u30-l5": {
        "id": "fr-u30-l5",
        "subject": "french",
        "unit": 30,
        "lessonNumber": 5,
        "title": "Philosophie des Lumières et Pensée Critique (Philosophy) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of Philosophie et pensée critique (Philosophical Discourse).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Philosophie des Lumières et Pensée Critique (Philosophy) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Philosophie et pensée critique (Philosophical Discourse). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (30.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (30.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (30.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Philosophie et pensée critique (Philosophical Discourse)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Philosophie et pensée critique (Philosophical Discourse) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (30.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (30.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (30.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Philosophie des Lumières et Pensée Critique (Philosophy) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (30.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (30.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (30.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Philosophie et pensée critique (Philosophical Discourse) » (Test 30-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (30.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (30.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (30.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («philosophie_30_5»):",
                    "acceptedAnswers": [
                        "philosophie_30_5"
                    ],
                    "explanation": "The target keyword was: 【philosophie_30_5】"
                }
            ]
        }
    },
    "fr-u31-l1": {
        "id": "fr-u31-l1",
        "subject": "french",
        "unit": 31,
        "lessonNumber": 1,
        "title": "Recherche Scientifique et Épistémologie (Academic Research) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of Recherche scientifique et méthodologie (Scientific Methodology).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Recherche Scientifique et Épistémologie (Academic Research) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Recherche scientifique et méthodologie (Scientific Methodology). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (31.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (31.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (31.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Recherche scientifique et méthodologie (Scientific Methodology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Recherche scientifique et méthodologie (Scientific Methodology) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (31.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (31.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (31.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Recherche Scientifique et Épistémologie (Academic Research) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (31.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (31.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (31.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Recherche scientifique et méthodologie (Scientific Methodology) » (Test 31-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (31.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (31.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (31.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («recherche_31_1»):",
                    "acceptedAnswers": [
                        "recherche_31_1"
                    ],
                    "explanation": "The target keyword was: 【recherche_31_1】"
                }
            ]
        }
    },
    "fr-u31-l2": {
        "id": "fr-u31-l2",
        "subject": "french",
        "unit": 31,
        "lessonNumber": 2,
        "title": "Recherche Scientifique et Épistémologie (Academic Research) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of Recherche scientifique et méthodologie (Scientific Methodology).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Recherche Scientifique et Épistémologie (Academic Research) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Recherche scientifique et méthodologie (Scientific Methodology). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (31.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (31.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (31.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Recherche scientifique et méthodologie (Scientific Methodology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Recherche scientifique et méthodologie (Scientific Methodology) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (31.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (31.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (31.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Recherche Scientifique et Épistémologie (Academic Research) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (31.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (31.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (31.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Recherche scientifique et méthodologie (Scientific Methodology) » (Test 31-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (31.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (31.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (31.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («recherche_31_2»):",
                    "acceptedAnswers": [
                        "recherche_31_2"
                    ],
                    "explanation": "The target keyword was: 【recherche_31_2】"
                }
            ]
        }
    },
    "fr-u31-l3": {
        "id": "fr-u31-l3",
        "subject": "french",
        "unit": 31,
        "lessonNumber": 3,
        "title": "Recherche Scientifique et Épistémologie (Academic Research) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of Recherche scientifique et méthodologie (Scientific Methodology).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Recherche Scientifique et Épistémologie (Academic Research) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Recherche scientifique et méthodologie (Scientific Methodology). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (31.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (31.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (31.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Recherche scientifique et méthodologie (Scientific Methodology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Recherche scientifique et méthodologie (Scientific Methodology) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (31.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (31.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (31.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Recherche Scientifique et Épistémologie (Academic Research) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (31.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (31.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (31.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Recherche scientifique et méthodologie (Scientific Methodology) » (Test 31-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (31.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (31.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (31.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («recherche_31_3»):",
                    "acceptedAnswers": [
                        "recherche_31_3"
                    ],
                    "explanation": "The target keyword was: 【recherche_31_3】"
                }
            ]
        }
    },
    "fr-u31-l4": {
        "id": "fr-u31-l4",
        "subject": "french",
        "unit": 31,
        "lessonNumber": 4,
        "title": "Recherche Scientifique et Épistémologie (Academic Research) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of Recherche scientifique et méthodologie (Scientific Methodology).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Recherche Scientifique et Épistémologie (Academic Research) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Recherche scientifique et méthodologie (Scientific Methodology). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (31.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (31.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (31.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Recherche scientifique et méthodologie (Scientific Methodology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Recherche scientifique et méthodologie (Scientific Methodology) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (31.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (31.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (31.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Recherche Scientifique et Épistémologie (Academic Research) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (31.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (31.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (31.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Recherche scientifique et méthodologie (Scientific Methodology) » (Test 31-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (31.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (31.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (31.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («recherche_31_4»):",
                    "acceptedAnswers": [
                        "recherche_31_4"
                    ],
                    "explanation": "The target keyword was: 【recherche_31_4】"
                }
            ]
        }
    },
    "fr-u31-l5": {
        "id": "fr-u31-l5",
        "subject": "french",
        "unit": 31,
        "lessonNumber": 5,
        "title": "Recherche Scientifique et Épistémologie (Academic Research) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of Recherche scientifique et méthodologie (Scientific Methodology).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Recherche Scientifique et Épistémologie (Academic Research) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Recherche scientifique et méthodologie (Scientific Methodology). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (31.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (31.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (31.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Recherche scientifique et méthodologie (Scientific Methodology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Recherche scientifique et méthodologie (Scientific Methodology) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (31.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (31.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (31.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Recherche Scientifique et Épistémologie (Academic Research) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (31.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (31.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (31.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Recherche scientifique et méthodologie (Scientific Methodology) » (Test 31-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (31.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (31.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (31.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («recherche_31_5»):",
                    "acceptedAnswers": [
                        "recherche_31_5"
                    ],
                    "explanation": "The target keyword was: 【recherche_31_5】"
                }
            ]
        }
    },
    "fr-u32-l1": {
        "id": "fr-u32-l1",
        "subject": "french",
        "unit": 32,
        "lessonNumber": 1,
        "title": "Diplomatie Multilatérale et Protocoles d'État (Diplomacy) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of Diplomatie et traités internationaux (Diplomatic Protocol).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Diplomatie Multilatérale et Protocoles d'État (Diplomacy) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Diplomatie et traités internationaux (Diplomatic Protocol). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (32.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (32.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (32.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Diplomatie et traités internationaux (Diplomatic Protocol)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Diplomatie et traités internationaux (Diplomatic Protocol) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (32.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (32.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (32.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Diplomatie Multilatérale et Protocoles d'État (Diplomacy) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (32.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (32.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (32.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Diplomatie et traités internationaux (Diplomatic Protocol) » (Test 32-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (32.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (32.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (32.1.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («diplomatie_32_1»):",
                    "acceptedAnswers": [
                        "diplomatie_32_1"
                    ],
                    "explanation": "The target keyword was: 【diplomatie_32_1】"
                }
            ]
        }
    },
    "fr-u32-l2": {
        "id": "fr-u32-l2",
        "subject": "french",
        "unit": 32,
        "lessonNumber": 2,
        "title": "Diplomatie Multilatérale et Protocoles d'État (Diplomacy) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of Diplomatie et traités internationaux (Diplomatic Protocol).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Diplomatie Multilatérale et Protocoles d'État (Diplomacy) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Diplomatie et traités internationaux (Diplomatic Protocol). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (32.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (32.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (32.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Diplomatie et traités internationaux (Diplomatic Protocol)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Diplomatie et traités internationaux (Diplomatic Protocol) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (32.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (32.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (32.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Diplomatie Multilatérale et Protocoles d'État (Diplomacy) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (32.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (32.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (32.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Diplomatie et traités internationaux (Diplomatic Protocol) » (Test 32-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (32.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (32.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (32.2.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («diplomatie_32_2»):",
                    "acceptedAnswers": [
                        "diplomatie_32_2"
                    ],
                    "explanation": "The target keyword was: 【diplomatie_32_2】"
                }
            ]
        }
    },
    "fr-u32-l3": {
        "id": "fr-u32-l3",
        "subject": "french",
        "unit": 32,
        "lessonNumber": 3,
        "title": "Diplomatie Multilatérale et Protocoles d'État (Diplomacy) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of Diplomatie et traités internationaux (Diplomatic Protocol).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Diplomatie Multilatérale et Protocoles d'État (Diplomacy) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Diplomatie et traités internationaux (Diplomatic Protocol). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (32.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (32.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (32.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Diplomatie et traités internationaux (Diplomatic Protocol)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Diplomatie et traités internationaux (Diplomatic Protocol) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (32.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (32.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (32.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Diplomatie Multilatérale et Protocoles d'État (Diplomacy) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (32.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (32.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (32.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Diplomatie et traités internationaux (Diplomatic Protocol) » (Test 32-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (32.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (32.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (32.3.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («diplomatie_32_3»):",
                    "acceptedAnswers": [
                        "diplomatie_32_3"
                    ],
                    "explanation": "The target keyword was: 【diplomatie_32_3】"
                }
            ]
        }
    },
    "fr-u32-l4": {
        "id": "fr-u32-l4",
        "subject": "french",
        "unit": 32,
        "lessonNumber": 4,
        "title": "Diplomatie Multilatérale et Protocoles d'État (Diplomacy) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of Diplomatie et traités internationaux (Diplomatic Protocol).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Diplomatie Multilatérale et Protocoles d'État (Diplomacy) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Diplomatie et traités internationaux (Diplomatic Protocol). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (32.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (32.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (32.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Diplomatie et traités internationaux (Diplomatic Protocol)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Diplomatie et traités internationaux (Diplomatic Protocol) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (32.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (32.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (32.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Diplomatie Multilatérale et Protocoles d'État (Diplomacy) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (32.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (32.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (32.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Diplomatie et traités internationaux (Diplomatic Protocol) » (Test 32-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (32.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (32.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (32.4.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («diplomatie_32_4»):",
                    "acceptedAnswers": [
                        "diplomatie_32_4"
                    ],
                    "explanation": "The target keyword was: 【diplomatie_32_4】"
                }
            ]
        }
    },
    "fr-u32-l5": {
        "id": "fr-u32-l5",
        "subject": "french",
        "unit": 32,
        "lessonNumber": 5,
        "title": "Diplomatie Multilatérale et Protocoles d'État (Diplomacy) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of Diplomatie et traités internationaux (Diplomatic Protocol).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Diplomatie Multilatérale et Protocoles d'État (Diplomacy) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Diplomatie et traités internationaux (Diplomatic Protocol). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (32.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (32.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (32.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Diplomatie et traités internationaux (Diplomatic Protocol)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Diplomatie et traités internationaux (Diplomatic Protocol) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (32.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (32.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (32.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Diplomatie Multilatérale et Protocoles d'État (Diplomacy) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (32.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (32.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (32.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Diplomatie et traités internationaux (Diplomatic Protocol) » (Test 32-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (32.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (32.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (32.5.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («diplomatie_32_5»):",
                    "acceptedAnswers": [
                        "diplomatie_32_5"
                    ],
                    "explanation": "The target keyword was: 【diplomatie_32_5】"
                }
            ]
        }
    },
    "fr-u33-l1": {
        "id": "fr-u33-l1",
        "subject": "french",
        "unit": 33,
        "lessonNumber": 1,
        "title": "Stylistique Littéraire, Passé Simple et Subjonctif Imparfait (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of Stylistique littéraire et passé simple (Literary Stylistics).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Stylistique Littéraire, Passé Simple et Subjonctif Imparfait » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Stylistique littéraire et passé simple (Literary Stylistics). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (33.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (33.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (33.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Stylistique littéraire et passé simple (Literary Stylistics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Stylistique littéraire et passé simple (Literary Stylistics) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (33.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (33.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (33.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Stylistique Littéraire, Passé Simple et Subjonctif Imparfait » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (33.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (33.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (33.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Stylistique littéraire et passé simple (Literary Stylistics) » (Test 33-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (33.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (33.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (33.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_fut_33_1»):",
                    "acceptedAnswers": [
                        "il_fut_33_1"
                    ],
                    "explanation": "The target keyword was: 【il_fut_33_1】"
                }
            ]
        }
    },
    "fr-u33-l2": {
        "id": "fr-u33-l2",
        "subject": "french",
        "unit": 33,
        "lessonNumber": 2,
        "title": "Stylistique Littéraire, Passé Simple et Subjonctif Imparfait (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of Stylistique littéraire et passé simple (Literary Stylistics).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Stylistique Littéraire, Passé Simple et Subjonctif Imparfait » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Stylistique littéraire et passé simple (Literary Stylistics). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (33.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (33.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (33.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Stylistique littéraire et passé simple (Literary Stylistics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Stylistique littéraire et passé simple (Literary Stylistics) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (33.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (33.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (33.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Stylistique Littéraire, Passé Simple et Subjonctif Imparfait » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (33.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (33.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (33.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Stylistique littéraire et passé simple (Literary Stylistics) » (Test 33-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (33.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (33.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (33.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_fut_33_2»):",
                    "acceptedAnswers": [
                        "il_fut_33_2"
                    ],
                    "explanation": "The target keyword was: 【il_fut_33_2】"
                }
            ]
        }
    },
    "fr-u33-l3": {
        "id": "fr-u33-l3",
        "subject": "french",
        "unit": 33,
        "lessonNumber": 3,
        "title": "Stylistique Littéraire, Passé Simple et Subjonctif Imparfait (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of Stylistique littéraire et passé simple (Literary Stylistics).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Stylistique Littéraire, Passé Simple et Subjonctif Imparfait » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Stylistique littéraire et passé simple (Literary Stylistics). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (33.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (33.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (33.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Stylistique littéraire et passé simple (Literary Stylistics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Stylistique littéraire et passé simple (Literary Stylistics) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (33.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (33.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (33.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Stylistique Littéraire, Passé Simple et Subjonctif Imparfait » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (33.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (33.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (33.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Stylistique littéraire et passé simple (Literary Stylistics) » (Test 33-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (33.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (33.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (33.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_fut_33_3»):",
                    "acceptedAnswers": [
                        "il_fut_33_3"
                    ],
                    "explanation": "The target keyword was: 【il_fut_33_3】"
                }
            ]
        }
    },
    "fr-u33-l4": {
        "id": "fr-u33-l4",
        "subject": "french",
        "unit": 33,
        "lessonNumber": 4,
        "title": "Stylistique Littéraire, Passé Simple et Subjonctif Imparfait (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of Stylistique littéraire et passé simple (Literary Stylistics).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Stylistique Littéraire, Passé Simple et Subjonctif Imparfait » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Stylistique littéraire et passé simple (Literary Stylistics). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (33.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (33.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (33.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Stylistique littéraire et passé simple (Literary Stylistics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Stylistique littéraire et passé simple (Literary Stylistics) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (33.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (33.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (33.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Stylistique Littéraire, Passé Simple et Subjonctif Imparfait » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (33.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (33.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (33.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Stylistique littéraire et passé simple (Literary Stylistics) » (Test 33-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (33.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (33.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (33.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_fut_33_4»):",
                    "acceptedAnswers": [
                        "il_fut_33_4"
                    ],
                    "explanation": "The target keyword was: 【il_fut_33_4】"
                }
            ]
        }
    },
    "fr-u33-l5": {
        "id": "fr-u33-l5",
        "subject": "french",
        "unit": 33,
        "lessonNumber": 5,
        "title": "Stylistique Littéraire, Passé Simple et Subjonctif Imparfait (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of Stylistique littéraire et passé simple (Literary Stylistics).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Stylistique Littéraire, Passé Simple et Subjonctif Imparfait » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Stylistique littéraire et passé simple (Literary Stylistics). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (33.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (33.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (33.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Stylistique littéraire et passé simple (Literary Stylistics)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Stylistique littéraire et passé simple (Literary Stylistics) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (33.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (33.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (33.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Stylistique Littéraire, Passé Simple et Subjonctif Imparfait » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (33.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (33.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (33.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Stylistique littéraire et passé simple (Literary Stylistics) » (Test 33-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (33.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (33.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (33.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («il_fut_33_5»):",
                    "acceptedAnswers": [
                        "il_fut_33_5"
                    ],
                    "explanation": "The target keyword was: 【il_fut_33_5】"
                }
            ]
        }
    },
    "fr-u34-l1": {
        "id": "fr-u34-l1",
        "subject": "french",
        "unit": 34,
        "lessonNumber": 1,
        "title": "Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) » (Section 1), nous étudions les principes morphosyntaxiques relatifs à Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (34.1.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (34.1.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (34.1.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric) » (Section 1) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (34.1.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (34.1.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (34.1.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) » (Exercice 1) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (34.1.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (34.1.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (34.1.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric) » (Test 34-1) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (34.1.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (34.1.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (34.1.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («sommet_34_1»):",
                    "acceptedAnswers": [
                        "sommet_34_1"
                    ],
                    "explanation": "The target keyword was: 【sommet_34_1】"
                }
            ]
        }
    },
    "fr-u34-l2": {
        "id": "fr-u34-l2",
        "subject": "french",
        "unit": 34,
        "lessonNumber": 2,
        "title": "Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) » (Section 2), nous étudions les principes morphosyntaxiques relatifs à Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (34.2.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (34.2.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (34.2.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric) » (Section 2) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (34.2.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (34.2.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (34.2.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) » (Exercice 2) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (34.2.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (34.2.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (34.2.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric) » (Test 34-2) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (34.2.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (34.2.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (34.2.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («sommet_34_2»):",
                    "acceptedAnswers": [
                        "sommet_34_2"
                    ],
                    "explanation": "The target keyword was: 【sommet_34_2】"
                }
            ]
        }
    },
    "fr-u34-l3": {
        "id": "fr-u34-l3",
        "subject": "french",
        "unit": 34,
        "lessonNumber": 3,
        "title": "Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) » (Section 3), nous étudions les principes morphosyntaxiques relatifs à Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (34.3.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (34.3.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (34.3.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric) » (Section 3) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (34.3.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (34.3.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (34.3.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) » (Exercice 3) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (34.3.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (34.3.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (34.3.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric) » (Test 34-3) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (34.3.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (34.3.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (34.3.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («sommet_34_3»):",
                    "acceptedAnswers": [
                        "sommet_34_3"
                    ],
                    "explanation": "The target keyword was: 【sommet_34_3】"
                }
            ]
        }
    },
    "fr-u34-l4": {
        "id": "fr-u34-l4",
        "subject": "french",
        "unit": 34,
        "lessonNumber": 4,
        "title": "Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) » (Section 4), nous étudions les principes morphosyntaxiques relatifs à Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (34.4.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (34.4.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (34.4.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric) » (Section 4) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (34.4.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (34.4.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (34.4.3)."
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) » (Exercice 4) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (34.4.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (34.4.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (34.4.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric) » (Test 34-4) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (34.4.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (34.4.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (34.4.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («sommet_34_4»):",
                    "acceptedAnswers": [
                        "sommet_34_4"
                    ],
                    "explanation": "The target keyword was: 【sommet_34_4】"
                }
            ]
        }
    },
    "fr-u34-l5": {
        "id": "fr-u34-l5",
        "subject": "french",
        "unit": 34,
        "lessonNumber": 5,
        "title": "Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric).",
        "presentation": {
            "explanation": "Dans cette leçon portant sur « Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) » (Section 5), nous étudions les principes morphosyntaxiques relatifs à Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric). La maîtrise des accords grammaticaux, de la concordance des temps et des nuances stylistiques permet de s'exprimer avec clarté, élégance et précision, que ce soit à l'oral dans la vie quotidienne ou à l'écrit dans des contextes universitaires et professionnels exigeants.\n\nAnalyse syntaxique et gloses explicatives (Grammar Analysis & English Glosses):\nL'application rigoureuse des règles et l'enrichissement lexical constituent le fondement d'une communication fluide.",
            "examples": [
                {
                    "target": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire (34.5.1).",
                    "reading": "Le professeur accueille chaleureusement les nouveaux étudiants dans le grand amphithéâtre universitaire.",
                    "translation": "The professor warmly welcomes the new students into the grand university lecture hall."
                },
                {
                    "target": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central (34.5.2).",
                    "reading": "Nous prenons le train express chaque matin pour nous rendre rapidement au bureau central.",
                    "translation": "We take the express train every morning to travel quickly to the central office."
                },
                {
                    "target": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents (34.5.3).",
                    "reading": "Cette nouvelle bibliothèque municipale propose une vaste collection d'ouvrages scientifiques récents.",
                    "translation": "This new municipal library offers an extensive collection of recent scientific works."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition applique correctement les règles syntaxiques relatives à « Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric) » (Section 5) ?",
                    "options": [
                        "Les chercheurs analysent attentivement les résultats de l'expérience menée en laboratoire (34.5.1).",
                        "Hier soir nous avons regardé un film documentaire particulièrement captivant à la télévision (34.5.2).",
                        "Les étudiants se réunissent régulièrement à la bibliothèque universitaire pour approfondir leurs recherches (34.5.3)."
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui respecte la syntaxe française de « Sommets Internationaux et Synthèse Rhétorique (C2 Capstone) » (Exercice 5) :",
                    "options": [
                        "L'architecte a présenté un projet écologique innovant pour la réhabilitation du quartier résidentiel (34.5.1).",
                        "Le train en provenance de Lyon arrivera en gare avec dix minutes d'avance sur l'horaire prévu (34.5.2).",
                        "Les promeneurs apprécient particulièrement les allées fleuries durant la saison printanière en ville (34.5.3)."
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
                    "prompt": "Quelle formulation satisfait pleinement aux exigences stylistiques pour « Synthèse rhétorique et grands sommets (C2 Capstone Rhetoric) » (Test 34-5) ?",
                    "options": [
                        "Le conseil d'administration a approuvé à l'unanimité le plan stratégique triennal de développement (34.5.1).",
                        "La nouvelle ligne de métro traversera toute la métropole du nord au sud d'ici l'année prochaine (34.5.2).",
                        "De nombreux scientifiques internationaux participent activement à cette grande conférence annuelle (34.5.3)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («sommet_34_5»):",
                    "acceptedAnswers": [
                        "sommet_34_5"
                    ],
                    "explanation": "The target keyword was: 【sommet_34_5】"
                }
            ]
        }
    }
};
  var CURRICULUM = { id: 'french', name: 'French', units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['french'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
