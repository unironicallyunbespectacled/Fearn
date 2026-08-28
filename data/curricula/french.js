// French curriculum — full CEFR A1–C2 roadmap (34 units, 170 lessons)
(function (global) {
  'use strict';
  var UNITS = [
    {
        "id": "fr-u1",
        "unit": 1,
        "title": "Salutations, Présentations et Phonétique (Greetings & Phonetics)",
        "level": "A1",
        "goal": "By the end of this unit, learners can greet people appropriately across formal and informal registers, introduce themselves and ask others their names, use polite conversational formulas, and apply fundamental French phonetics including silent final consonants and basic liaisons.",
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
        "title": "Articles, Genre et Nombre des Noms (Articles, Gender & Plurals)",
        "level": "A1",
        "goal": "By the end of this unit, learners can use definite (le, la, l', les) and indefinite (un, une, des) articles, recognize noun gender patterns, form regular and irregular plurals, and master contracted articles with à and de.",
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
        "goal": "By the end of this unit, learners can conjugate regular -er verbs in the present tense, utilize all French subject pronouns including 'on', handle spelling changes in -cer and -ger verbs, and describe daily routines.",
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
        "goal": "By the end of this unit, learners can conjugate and correctly deploy the four core irregular French verbs (être, avoir, faire, aller) across essential idiomatic, temporal, and spatial contexts.",
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
        "goal": "By the end of this unit, learners can construct negative sentences using ne...pas, modify indefinite/partitive articles to 'de' in the negative, and use complex negative adverbs (ne...jamais, ne...plus, ne...rien, ne...personne, ne...que).",
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
        "goal": "By the end of this unit, learners can agree adjectives in gender and number, handle irregular adjectives, apply the BANGS pre-nominal adjective rule, and master adjectives whose meaning changes with position.",
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
        "goal": "By the end of this unit, learners can form the passé composé with auxiliary avoir and être (DR MRS VANDERTRAMP verbs), form irregular past participles, apply participle agreement with être and reflexive verbs, and position negatives correctly.",
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
        "goal": "By the end of this unit, learners can conjugate regular and irregular verbs in l'imparfait and deploy it for past habitual actions, childhood memories, background scene descriptions, and ongoing interrupted actions.",
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
        "goal": "By the end of this unit, learners can contrast passé composé (foreground completed actions) and imparfait (background descriptive setting), recognize temporal trigger adverbs, and narrate multi-paragraph historical and personal stories.",
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
        "goal": "By the end of this unit, learners can express immediate future with futur proche (aller + inf.), conjugate futur simple with regular and irregular stems, use future temporal conjunctions (quand, lorsque, dès que), and make long-term plans.",
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
        "goal": "By the end of this unit, learners can identify and place direct (COD) and indirect (COI) object pronouns, execute past participle agreement with preceding direct objects, and order double object pronouns in complex sentences.",
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
        "goal": "By the end of this unit, learners can replace prepositional phrases and locations with Y, replace partitives and de-clauses with En, use Y and En with imperatives, and integrate them into multi-pronoun hierarchies.",
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
        "goal": "By the end of this unit, learners can form the conditionnel présent, express courteous requests and desires, provide nuanced advice using devoir and falloir, report unconfirmed news, and construct basic hypothetical si-clauses.",
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
        "goal": "By the end of this unit, learners can conjugate regular and irregular verbs in le subjonctif présent, understand the mood distinction between indicative and subjunctive, and use subjunctive after verbs of will, necessity, emotion, and doubt.",
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
        "goal": "By the end of this unit, learners can join clauses using relative pronouns qui (subject), que (direct object), où (time/place), dont (preposition de), and use indefinite relatives (ce qui, ce que, ce dont).",
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
        "goal": "By the end of this unit, learners can formulate comparisons of adjectives, adverbs, nouns, and verbs, master irregular comparatives (meilleur vs. mieux, pire), and construct superlative statements.",
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
        "level": "B1",
        "goal": "By the end of this unit, learners can form le plus-que-parfait, express past anteriority, sequence complex historical and narrative events, and manage past tense concordance across subordinate clauses.",
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
        "level": "B1",
        "goal": "By the end of this unit, learners can construct the three classical conditional systems (real: si+présent->futur; unreal present: si+imparfait->conditionnel; unreal past: si+PQP->conditionnel passé), express past regret, and build mixed conditionals.",
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
        "goal": "By the end of this unit, learners can transform active sentences into the passive voice with être and par/de, utilize the pronominal passive (se faire, se voir, ça se fait), and deploy active alternatives with 'on'.",
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
        "goal": "By the end of this unit, learners can convert direct quotes into indirect reported speech, execute temporal shifting (concordance des temps: présent->imparfait, futur->conditionnel), adjust deictic time/place markers, and report journalistic interviews.",
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
        "goal": "By the end of this unit, learners can articulate cause (parce que, puisque, grâce à, à cause de), express purpose requiring subjunctive (pour que, afin que) vs. infinitive (afin de), express consequence (donc, si bien que), and structure analytical essays.",
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
        "goal": "By the end of this unit, learners can distinguish opposition from concession, utilize concessive conjunctions requiring subjunctive (bien que, quoique), use prepositional concession (malgré, en dépit de), and construct nuanced debate counter-arguments.",
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
        "goal": "By the end of this unit, learners can write formal business correspondence, craft standard French CVs and motivation letters, deploy negotiation and sales vocabulary, and resolve commercial disputes diplomatically.",
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
        "goal": "By the end of this unit, learners can conduct medical consultations, describe clinical symptoms and ailments, navigate prescriptions and the French social security system (carte Vitale, mutuelle), and discuss public health issues.",
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
        "goal": "By the end of this unit, learners can analyze French civil code principles, interpret contractual clauses (force majeure, nullité), understand judicial court procedures, and draft formal legal opinions.",
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
        "goal": "By the end of this unit, learners can discuss macroeconomic indicators (PIB, inflation), analyze corporate financial statements, debate capital market dynamics (actions, obligations, dividendes), and evaluate monetary union policies.",
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
        "goal": "By the end of this unit, learners can analyze literary prose techniques, identify rhetorical tropes and poetic meter (alexandrins, césures), dissect cinematic mise-en-scène and French New Wave film language, and write aesthetic critiques.",
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
        "goal": "By the end of this unit, learners can debate climate science and carbon footprint metrics, analyze biodiversity conservation strategies, evaluate renewable vs. nuclear energy transitions, and interpret international environmental pacts.",
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
        "goal": "By the end of this unit, learners can analyze the constitutional structure of the French Fifth Republic, navigate parliamentary legislative mechanisms (article 49.3, motion de censure), examine electoral systems, and debate the philosophy of laïcité.",
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
        "goal": "By the end of this unit, learners can articulate Enlightenment political philosophy (Voltaire, Rousseau), examine Cartesian rationalism, analyze 20th-century Existentialism (Sartre, Camus, Beauvoir), and write a formal French philosophical dissertation.",
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
        "goal": "By the end of this unit, learners can formulate scientific hypotheses and methodologies in academic French, analyze epistemological ruptures (Bachelard), adhere to peer-reviewed publication protocols, and debate bioethical frontiers in biotechnology.",
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
        "goal": "By the end of this unit, learners can master French diplomatic protocols, draft international treaties and communiqués, navigate multilateral summit diplomacy (UN, Francophonie, EU), and manage diplomatic crisis negotiations.",
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
        "goal": "By the end of this unit, learners can read and write with literary tenses (passé simple, subjonctif imparfait, subjonctif plus-que-parfait), master classical sentence cadence (rythme ternaire), and execute elevated literary prose.",
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
        "goal": "By the end of this unit, learners synthesize all prior phonological, grammatical, stylistic, and pragmatic mastery to deliver persuasive speeches, navigate rapid sociolinguistic register shifts (from argot to high literature), and express near-native nuance across the Francophone world.",
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
        "unit": "fr-u1",
        "level": "A1",
        "objective": "Greet others appropriately at different times of day and choose between formal (vous) and informal (tu) greeting formulas.",
        "prerequisites": [],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In French, greetings establish both the social distance and the time of day. The universal formal and daytime greeting is Bonjour (literally 'good day'), which is used from morning until late afternoon. As dusk falls, Bonsoir ('good evening') replaces Bonjour. When greeting friends, family, or young peers, the informal Salut ('hi' / 'bye') is common, but it should never be used with strangers, shopkeepers, or superiors. When parting, the standard polite farewell is Au revoir ('until we see each other again'), while À bientôt means 'see you soon', À demain means 'see you tomorrow', and Bonne journée ('have a good day') or Bonne soirée ('have a good evening') wish someone well for the rest of the day or night. Notice the key distinction: Bonjour is said upon arriving, while Bonne journée is said upon departing.",
            "examples": [
                {
                    "target": "Bonjour, monsieur.",
                    "reading": "bon-zhoor, muh-syuh",
                    "translation": "Good morning / Hello, sir."
                },
                {
                    "target": "Bonsoir, madame.",
                    "reading": "bon-swahr, mah-dahm",
                    "translation": "Good evening, madam."
                },
                {
                    "target": "Salut, Thomas !",
                    "reading": "sah-loo, toh-mah",
                    "translation": "Hi, Thomas! (informal)"
                },
                {
                    "target": "Au revoir et bonne journée !",
                    "reading": "oh ruh-vwahr ay bun zhoor-nay",
                    "translation": "Goodbye and have a good day!"
                },
                {
                    "target": "À bientôt !",
                    "reading": "ah byan-toh",
                    "translation": "See you soon!"
                },
                {
                    "target": "À demain !",
                    "reading": "ah duh-man",
                    "translation": "See you tomorrow!"
                }
            ],
            "mnemonics": [
                "Bonjour = bon (good) + jour (day) — say it when arriving during the day. Bonne journée = 'have a good day' — say it when leaving.",
                "Au revoir literally translates to 'at the re-seeing' (until seeing each other again)."
            ],
            "culturalNotes": [
                "In France, entering a shop, bakery (boulangerie), or taxi without greeting the proprietor with 'Bonjour, monsieur' or 'Bonjour, madame' is perceived as remarkably impolite. Always say 'Bonjour' before asking any question or placing an order.",
                "The physical greeting often involves 'la bise' (light cheek kissing, typically 2 kisses in Paris) between friends and family, whereas a crisp handshake ('une poignée de main') is standard in professional contexts."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Greet others appropriately at different times of day and choose betwee » :",
                    "options": [
                        "Bonjour, monsieur.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (1a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (1b).",
                        "Cette construction passive alourdit inutilement l'énoncé (1c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u1-l1 :",
                    "options": [
                        "Bonsoir, madame.",
                        "L'antériorité temporelle est mal établie par rapport au repère (1x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (1y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (1z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u1-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Bonjour, monsieur.",
                        "L'antériorité temporelle est mal établie par rapport au repère (1m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (1n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (1p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u1-l1 (terme attendu : « Bonjour ») :",
                    "acceptedAnswers": [
                        "Bonjour",
                        "bonjour",
                        "Bonjour"
                    ],
                    "explanation": "Le mot exact est « Bonjour »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u1-l2": {
        "id": "fr-u1-l2",
        "unit": "fr-u1",
        "level": "A1",
        "objective": "Ask how someone is doing using formal (Comment allez-vous ?) and informal (Comment ça va ?) phrasing, and express different states of well-being.",
        "prerequisites": [
            "fr-u1-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u1-l1"
            ]
        },
        "presentation": {
            "explanation": "Asking how someone is doing in French depends on the social register. In casual everyday conversation with friends and acquaintances, Comment ça va ? or simply Ça va ? is universal. The phrase literally means 'How does it go?'. The response playfully mirrors the question: Ça va bien, merci ('It is going well, thanks') or simply Ça va ('I'm fine'). If things are mediocre, you can say Comme ci, comme ça ('So-so') or Pas mal ('Not bad'). If things are bad, Ça ne va pas or Ça va mal conveys distress.\n\nIn formal, academic, or professional situations, you must address the person with vous and invert the verb aller (to go): Comment allez-vous ? (pronounced with a liaison: /kɔ.mɑ̃.ta.le.vu/). The formal response is Je vais bien, merci. Et vous ? ('I am doing well, thank you. And you?'). To return the question informally to a peer, use Et toi ? ('And you?'). Notice that French uses the verb aller ('to go'), unlike English which uses 'to be' ('How are you?').",
            "examples": [
                {
                    "target": "Comment allez-vous ?",
                    "reading": "koh-mahn-tah-lay-voo",
                    "translation": "How are you? (formal)"
                },
                {
                    "target": "Je vais bien, merci. Et vous ?",
                    "reading": "zhuh vay byan, mair-see. ay voo",
                    "translation": "I am doing well, thank you. And you? (formal)"
                },
                {
                    "target": "Comment ça va ?",
                    "reading": "koh-mahn sah vah",
                    "translation": "How are you doing? / How's it going? (standard/informal)"
                },
                {
                    "target": "Ça va très bien !",
                    "reading": "sah vah tray byan",
                    "translation": "It's going very well!"
                },
                {
                    "target": "Comme ci, comme ça.",
                    "reading": "kuhm see, kuhm sah",
                    "translation": "So-so."
                },
                {
                    "target": "Pas mal, et toi ?",
                    "reading": "pah mahl, ay twah",
                    "translation": "Not bad, and you? (informal)"
                },
                {
                    "target": "Ça ne va pas très bien aujourd'hui.",
                    "reading": "sah nuh vah pah tray byan oh-zhoor-dwee",
                    "translation": "Things aren't going very well today."
                }
            ],
            "mnemonics": [
                "Ça va is both the question and the answer! '? Ça va ?' (Voice goes up: 'You good?') -> '! Ça va !' (Voice goes down: 'I'm good!').",
                "Comment allez-vous uses the verb aller (to go) — imagine asking 'How are you travelling along?' rather than 'How are you being?'"
            ],
            "culturalNotes": [
                "In French etiquette, asking 'Comment allez-vous ?' is not merely an empty greeting; expect the listener to acknowledge it with 'Très bien, merci' and politely return the inquiry ('Et vous-même ?').",
                "Et vous ? is used for formal singular or any plural group. Et toi ? is strictly used with one person whom you address as 'tu'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Ask how someone is doing using formal (Comment allez-vous ?) and infor » :",
                    "options": [
                        "Comment allez-vous ?",
                        "La préposition employée ici n'est pas commandée par le verbe (2a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (2b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (2c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u1-l2 :",
                    "options": [
                        "Je vais bien, merci. Et vous ?",
                        "La préposition employée ici n'est pas commandée par le verbe (2x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (2y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (2z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u1-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Comment allez-vous ?",
                        "La préposition employée ici n'est pas commandée par le verbe (2m).",
                        "Cette forme présente une anomalie phonétique en français standard (2n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (2p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u1-l2 (terme attendu : « Comment ») :",
                    "acceptedAnswers": [
                        "Comment",
                        "comment",
                        "Comment"
                    ],
                    "explanation": "Le mot exact est « Comment »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u1-l3": {
        "id": "fr-u1-l3",
        "unit": "fr-u1",
        "level": "A1",
        "objective": "Introduce yourself with reflexive verb s'appeler and ask other people's names across formal and informal registers.",
        "prerequisites": [
            "fr-u1-l1",
            "fr-u1-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u1-l1",
                "fr-u1-l2"
            ]
        },
        "presentation": {
            "explanation": "To state your name in French, you use the reflexive verb s'appeler (literally 'to call oneself'): Je m'appelle [Nom] ('My name is [Name]', literally 'I call myself...'). Note the spelling: s'appeler has one 'l' in the infinitive, but takes a double 'l' (appelle) in the singular and third-person plural conjugations to maintain the open /ɛ/ vowel sound.\n\nTo ask someone's name informally, use Tu t'appelles comment ? or Comment tu t'appelles ?. Formally, use Comment vous vous appelez ? or the inverted Comment vous appelez-vous ?.\n\nWhen meeting someone for the first time, say Enchanté ('Nice to meet you' / 'Delighted'). When written by a female speaker, it is spelled Enchantée, though both are pronounced identically (/ɑ̃.ʃɑ̃.te/). To introduce someone else, use the demonstrative presentation words C'est... ('This is...') or Voici... ('Here is...'), such as: Voici Marie, une amie.",
            "examples": [
                {
                    "target": "Je m'appelle Lucas.",
                    "reading": "zhuh mah-pel loo-kah",
                    "translation": "My name is Lucas."
                },
                {
                    "target": "Comment vous vous appelez ?",
                    "reading": "koh-mahn voo voo zah-play",
                    "translation": "What is your name? (formal)"
                },
                {
                    "target": "Tu t'appelles comment ?",
                    "reading": "too tah-pel koh-mahn",
                    "translation": "What is your name? (informal)"
                },
                {
                    "target": "Enchanté de faire votre connaissance.",
                    "reading": "ahn-shahn-tay duh fair vohtr koh-nay-sahns",
                    "translation": "Delighted to make your acquaintance. (formal)"
                },
                {
                    "target": "Voici mon ami Alexandre.",
                    "reading": "vwah-see mohn nah-mee ah-lek-sahndr",
                    "translation": "This is my friend Alexandre."
                },
                {
                    "target": "C'est Sophie, ma collègue.",
                    "reading": "say soh-fee, mah koh-leg",
                    "translation": "This is Sophie, my coworker."
                }
            ],
            "mnemonics": [
                "S'appeler relates to English 'appellation' and 'appellant' — you are literally 'calling' yourself.",
                "Enchanté means 'enchanted' — think of saying 'I am enchanted to meet you'."
            ],
            "culturalNotes": [
                "While French people frequently introduce themselves by first name in social settings, in business contexts it is common to state both first and last name, or just the family name preceded by Monsieur/Madame.",
                "In writing, remember the agreement: a man writes 'Enchanté', while a woman writes 'Enchantée'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Introduce yourself with reflexive verb s'appeler and ask other people' » :",
                    "options": [
                        "Je m'appelle Lucas.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (3a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (3b).",
                        "Cette construction passive alourdit inutilement l'énoncé (3c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u1-l3 :",
                    "options": [
                        "Comment vous vous appelez ?",
                        "Cette proposition modifie subtilement le sens originel du verbe (3x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (3y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (3z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u1-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Je m'appelle Lucas.",
                        "Cette proposition modifie subtilement le sens originel du verbe (3m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (3n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (3p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u1-l3 (terme attendu : « Je ») :",
                    "acceptedAnswers": [
                        "Je",
                        "je",
                        "Je"
                    ],
                    "explanation": "Le mot exact est « Je »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u1-l4": {
        "id": "fr-u1-l4",
        "unit": "fr-u1",
        "level": "A1",
        "objective": "Use French courtesy expressions including please, thank you, you're welcome, and apologies in daily social transactions.",
        "prerequisites": [
            "fr-u1-l1",
            "fr-u1-l2",
            "fr-u1-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u1-l1",
                "fr-u1-l2",
                "fr-u1-l3"
            ]
        },
        "presentation": {
            "explanation": "Politeness formulas (les formules de politesse) are the cornerstone of social life in the Francophone world. The phrase for 'please' changes based on whether you are speaking to someone formally or informally: S'il vous plaît (formal or plural, literally 'if it pleases you') vs. S'il te plaît (informal singular). To express gratitude, use Merci ('thank you') or Merci beaucoup ('thank you very much').\n\nTo reply to 'thank you': in standard everyday situations, use De rien ('you're welcome', literally 'of nothing') or the friendly Je t'en prie (informal). In formal, professional, or respectful settings, the gold standard is Je vous en prie ('you are most welcome' / 'it is my pleasure').\n\nTo excuse yourself, get through a crowd, or attract someone's attention, say Pardon or Excusez-moi (formal) / Excuse-moi (informal). If you made a mistake or want to offer a heartfelt apology, use Je suis désolé (masculine) / Je suis désolée (feminine).",
            "examples": [
                {
                    "target": "Un café, s'il vous plaît.",
                    "reading": "uhn kah-fay, seel voo pleh",
                    "translation": "A coffee, please. (ordering in a café)"
                },
                {
                    "target": "Passe-moi le livre, s'il te plaît.",
                    "reading": "pahs-mwah luh leevr, seel tuh pleh",
                    "translation": "Pass me the book, please. (to a friend)"
                },
                {
                    "target": "Merci beaucoup pour votre aide.",
                    "reading": "mair-see boh-koo poor vohtr ed",
                    "translation": "Thank you very much for your help."
                },
                {
                    "target": "Je vous en prie, madame.",
                    "reading": "zhuh voo zahn pree, mah-dahm",
                    "translation": "You are very welcome, madam. (formal)"
                },
                {
                    "target": "De rien, c'est normal !",
                    "reading": "duh ryan, say nor-mahl",
                    "translation": "You're welcome, it's no trouble! (informal)"
                },
                {
                    "target": "Excusez-moi, où sont les toilettes ?",
                    "reading": "ek-skyoo-zay-mwah, oo sohn lay twah-let",
                    "translation": "Excuse me, where are the restrooms?"
                },
                {
                    "target": "Pardon, je suis désolé.",
                    "reading": "pahr-dohn, zhuh swee day-zoh-lay",
                    "translation": "Pardon, I am sorry."
                }
            ],
            "mnemonics": [
                "S'il vous plaît = Si (if) + il (it) + vous (you) + plaît (pleases) -> 'if it pleases you'.",
                "De rien = 'of nothing' (like English 'it's nothing' or Spanish 'de nada')."
            ],
            "culturalNotes": [
                "In a French café or restaurant, you do not snap your fingers or yell 'Garçon!'. You make polite eye contact and say 'S'il vous plaît, monsieur' or 'Pardon, madame'.",
                "Omitting 's'il vous plaît' when ordering food or purchasing a ticket sounds blunt and aggressive to native French ears."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Use French courtesy expressions including please, thank you, you're we » :",
                    "options": [
                        "Un café, s'il vous plaît.",
                        "Cette forme présente une anomalie phonétique en français standard (4a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (4b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (4c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u1-l4 :",
                    "options": [
                        "Passe-moi le livre, s'il te plaît.",
                        "Cette forme présente une anomalie phonétique en français standard (4x).",
                        "La préposition employée ici n'est pas commandée par le verbe (4y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (4z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u1-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Un café, s'il vous plaît.",
                        "Cette forme présente une anomalie phonétique en français standard (4m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (4n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (4p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u1-l4 (terme attendu : « Un ») :",
                    "acceptedAnswers": [
                        "Un",
                        "un",
                        "Un"
                    ],
                    "explanation": "Le mot exact est « Un »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u1-l5": {
        "id": "fr-u1-l5",
        "unit": "fr-u1",
        "level": "A1",
        "objective": "Apply basic French phonological rules: identify silent final consonants using the CaReFuL rule and execute vocalic liaisons.",
        "prerequisites": [
            "fr-u1-l1",
            "fr-u1-l2",
            "fr-u1-l3",
            "fr-u1-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u1-l1",
                "fr-u1-l4"
            ]
        },
        "presentation": {
            "explanation": "French spelling has a rich history, leading to consistent rules that govern how letters sound in combination. The first foundational rule is the Silent Final Consonants rule: in most French words, final consonants (especially -d, -p, -s, -t, -x, -z) are NOT pronounced. For example, salut ends in silent 't' (/sa.ly/), vous ends in silent 's' (/vu/), and grand ends in silent 'd' (/gʁɑ̃/).\n\nThe most reliable exception rule is the CaReFuL rule: final consonants C, R, F, L are usually pronounced (e.g., avec, cher, neuf, hôtel — though note that regular -er verb infinitives like parler drop the /r/ sound).\n\nHowever, French prioritizes musical flow and hates vowel clashes (hiatus). When a word ending in a normally silent consonant is followed by a word starting with a vowel or silent 'h', a Liaison occurs: the silent consonant is pronounced and links to the following vowel sound!\n- 's' or 'x' links as a /z/ sound: les amis -> /le.za.mi/, vous avez -> /vu.za.ve/.\n- 'd' links as a /t/ sound: un grand homme -> /œ̃.gʁɑ̃.tɔm/.\n- 'n' carries nasal linking: un ami -> /œ̃.na.mi/.",
            "examples": [
                {
                    "target": "salut",
                    "reading": "sah-loo",
                    "translation": "pronounced /sa.ly/ (final 't' is silent)"
                },
                {
                    "target": "vous",
                    "reading": "voo",
                    "translation": "pronounced /vu/ (final 's' is silent in isolation)"
                },
                {
                    "target": "vous avez",
                    "reading": "voo-zah-vay",
                    "translation": "pronounced /vu.za.ve/ (liaison: silent 's' sounds as /z/ before vowel)"
                },
                {
                    "target": "les enfants",
                    "reading": "lay-zahn-fahn",
                    "translation": "pronounced /le.zɑ̃.fɑ̃/ (liaison: silent 's' becomes /z/)"
                },
                {
                    "target": "un sac",
                    "reading": "uhn sahk",
                    "translation": "pronounced /œ̃ sak/ (final 'c' from CaReFuL is pronounced)"
                },
                {
                    "target": "un chef",
                    "reading": "uhn shef",
                    "translation": "pronounced /œ̃ ʃɛf/ (final 'f' from CaReFuL is pronounced)"
                },
                {
                    "target": "un grand hôtel",
                    "reading": "uhn grahn toh-tel",
                    "translation": "pronounced /œ̃ gʁɑ̃.to.tɛl/ (liaison: 'd' sounds as /t/ before silent 'h')"
                }
            ],
            "mnemonics": [
                "Remember CaReFuL: consonants C, R, F, L are pronounced at word ends; D, P, S, T, X, Z are silent unless a liaison wakes them up!",
                "Liaison turns the silent 'S' into a buzzing 'Z' to link words smoothly without awkward pauses."
            ],
            "culturalNotes": [
                "The liaison is an essential part of French rhythm (l'enchaînement). While some liaisons are optional in casual speech, obligatory liaisons (such as between articles/pronouns and nouns/verbs like 'les enfants' or 'nous avons') must always be made.",
                "The letter 'h' in French is never aspirated as in English. It is always silent (e.g. 'hôtel' is pronounced starting with the 'o' vowel)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Apply basic French phonological rules: identify silent final consonant » :",
                    "options": [
                        "salut",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (5a).",
                        "Cette construction passive alourdit inutilement l'énoncé (5b).",
                        "Cette construction passive alourdit inutilement l'énoncé (5c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u1-l5 :",
                    "options": [
                        "vous",
                        "Cette construction passive alourdit inutilement l'énoncé (5x).",
                        "Cette construction passive alourdit inutilement l'énoncé (5y).",
                        "Cette construction passive alourdit inutilement l'énoncé (5z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u1-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "salut",
                        "Cette construction passive alourdit inutilement l'énoncé (5m).",
                        "Cette construction passive alourdit inutilement l'énoncé (5n).",
                        "Cette construction passive alourdit inutilement l'énoncé (5p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u1-l5 (terme attendu : « salut ») :",
                    "acceptedAnswers": [
                        "salut",
                        "salut",
                        "Salut"
                    ],
                    "explanation": "Le mot exact est « salut »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u3-l1": {
        "id": "fr-u3-l1",
        "unit": "fr-u3",
        "level": "A1",
        "objective": "Conjugate regular first-group verbs ending in -er in the present tense by isolating the stem and applying standard personal endings.",
        "prerequisites": [
            "fr-u2-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u2-l5"
            ]
        },
        "presentation": {
            "explanation": "Over 80% of French verbs belong to the regular first group ending in -er (like parler, habiter, écouter). To conjugate an -er verb in the present indicative, remove the infinitive ending -er to find the radical (stem), then add the six personal endings:\n- je: -e (je parle - I speak)\n- tu: -es (tu parles - you speak)\n- il / elle / on: -e (il parle - he speaks)\n- nous: -ons (nous parlons - we speak)\n- vous: -ez (vous parlez - you speak)\n- ils / elles: -ent (ils parlent - they speak)\n\nCrucial phonetic insight: the endings -e, -es, and -ent are completely SILENT! Therefore, je parle, tu parles, il parle, and ils parlent are all pronounced identically: /paʁl/. Only nous parlons (/paʁ.lɔ̃/) and vous parlez (/paʁ.le/) sound distinct.",
            "examples": [
                {
                    "target": "Je parle français avec mes amis.",
                    "reading": "zhuh pahrl frahn-say ah-vek may zah-mee",
                    "translation": "I speak French with my friends."
                },
                {
                    "target": "Tu habites à Paris ?",
                    "reading": "too ah-beet ah pah-ree",
                    "translation": "Do you live in Paris?"
                },
                {
                    "target": "Elle écoute de la musique classique.",
                    "reading": "el ay-koot duh lah moo-zeek klah-seek",
                    "translation": "She listens to classical music."
                },
                {
                    "target": "Nous travaillons dans un bureau.",
                    "reading": "noo trah-vah-yohn dahn zohn boo-roh",
                    "translation": "We work in an office."
                },
                {
                    "target": "Vous regardez un film intéressant.",
                    "reading": "voo ruh-gahr-day uhn feelm an-tay-reh-sahn",
                    "translation": "You are watching an interesting movie."
                },
                {
                    "target": "Ils étudient l'histoire moderne.",
                    "reading": "eel zay-too-dee lees-twahr moh-dairn",
                    "translation": "They study modern history."
                }
            ],
            "mnemonics": [
                "The 'Boot' or 'Shoe' verb pattern: je, tu, il, and ils all make the EXACT same sound (the stem sound). Only nous (-ons) and vous (-ez) stick out at the top!",
                "-ENT at the end of verbs is always a ghost — it's written for the eyes, never for the ears (/paʁl/, not /paʁ.lɑ̃/)."
            ],
            "culturalNotes": [
                "When addressing someone formally with 'vous', remember the ending -ez is pronounced /e/ (rhyming with 'café')."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Conjugate regular first-group verbs ending in -er in the present tense » :",
                    "options": [
                        "Je parle français avec mes amis.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (6a).",
                        "Cette forme présente une anomalie phonétique en français standard (6b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (6c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u3-l1 :",
                    "options": [
                        "Tu habites à Paris ?",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (6x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (6y).",
                        "Cette forme présente une anomalie phonétique en français standard (6z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u3-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Je parle français avec mes amis.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (6m).",
                        "La préposition employée ici n'est pas commandée par le verbe (6n).",
                        "Cette forme présente une anomalie phonétique en français standard (6p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u3-l1 (terme attendu : « Je ») :",
                    "acceptedAnswers": [
                        "Je",
                        "je",
                        "Je"
                    ],
                    "explanation": "Le mot exact est « Je »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u3-l2": {
        "id": "fr-u3-l2",
        "unit": "fr-u3",
        "level": "A1",
        "objective": "Distinguish and use all French subject pronouns, including the informal/universal pronoun 'on'.",
        "prerequisites": [
            "fr-u3-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u3-l1"
            ]
        },
        "presentation": {
            "explanation": "French subject pronouns (les pronoms sujets) indicate who performs the verb action:\n- je (j' before vowels): 1st person singular (I)\n- tu: 2nd person informal singular (you)\n- il / elle: 3rd person singular (he / she / it)\n- on: 3rd person singular pronoun used informally to mean 'we' (on y va - let's go), or generically 'one / people' (en France, on mange bien).\n- nous: 1st person plural (we - formal / written)\n- vous: 2nd person plural (you all) or formal singular (you, polite)\n- ils / elles: 3rd person plural (they masculine / they feminine). Note that in French, a mixed group of males and females always takes the masculine plural 'ils'.\n\nThe pronoun 'on' is grammatically singular (it always conjugates like il/elle: on parle, on va), but in modern spoken French, it replaces 'nous' in over 90% of casual conversations!",
            "examples": [
                {
                    "target": "On va au cinéma ce soir ?",
                    "reading": "ohn vah oh see-nay-mah suh swahr",
                    "translation": "Shall we go to the movies tonight? (on = we)"
                },
                {
                    "target": "En France, on aime la gastronomie.",
                    "reading": "ahn frahns, ohn nem lah gahs-troh-noh-mee",
                    "translation": "In France, people / one loves gastronomy."
                },
                {
                    "target": "Ils travaillent ensemble.",
                    "reading": "eel trah-vah-y ahn-sahnbl",
                    "translation": "They (masculine / mixed) work together."
                },
                {
                    "target": "Elles sont étudiantes.",
                    "reading": "el sohn tay-too-dyahnt",
                    "translation": "They (all female) are students."
                },
                {
                    "target": "J'habite à Bordeaux.",
                    "reading": "zhah-beet ah boor-doh",
                    "translation": "I live in Bordeaux. (je -> j' before h)"
                }
            ],
            "mnemonics": [
                "ON conjugates like ONE person (il/elle), but means EVERYONE or WE!",
                "Whenever a mixed group is together, masculine 'ILS' takes the grammatical crown in traditional French syntax."
            ],
            "culturalNotes": [
                "In conversational French, using 'nous' can sound overly stiff or literary. Friends will almost invariably say 'On mange où ?' rather than 'Où mangeons-nous ?'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Distinguish and use all French subject pronouns, including the informa » :",
                    "options": [
                        "On va au cinéma ce soir ?",
                        "La préposition employée ici n'est pas commandée par le verbe (7a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (7b).",
                        "Cette construction passive alourdit inutilement l'énoncé (7c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u3-l2 :",
                    "options": [
                        "En France, on aime la gastronomie.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (7x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (7y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (7z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u3-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "On va au cinéma ce soir ?",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (7m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (7n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (7p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u3-l2 (terme attendu : « On ») :",
                    "acceptedAnswers": [
                        "On",
                        "on",
                        "On"
                    ],
                    "explanation": "Le mot exact est « On »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u3-l3": {
        "id": "fr-u3-l3",
        "unit": "fr-u3",
        "level": "A1",
        "objective": "Apply phonetic spelling adjustments in -cer and -ger verbs to preserve soft consonant sounds in the nous form.",
        "prerequisites": [
            "fr-u3-l1",
            "fr-u3-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u3-l1",
                "fr-u3-l2"
            ]
        },
        "presentation": {
            "explanation": "In French, the letters 'c' and 'g' change their pronunciation depending on the following vowel:\n- Before 'e' and 'i', 'c' sounds soft /s/ (comme 'cent') and 'g' sounds soft /ʒ/ (comme 'gens').\n- Before 'a', 'o', and 'u', 'c' sounds hard /k/ (comme 'café') and 'g' sounds hard /g/ (comme 'gare').\n\nBecause of this rule, regular -er verbs ending in -cer and -ger require a spelling adjustment in the 'nous' form to prevent a jarring hard sound before the -ons ending:\n1. Verbs in -cer (e.g., commencer, avancer, lancer):\n- 'c' changes to 'ç' (c-cedilla) before 'o': nous commençons (/kɔ.mɑ̃.sɔ̃/, NOT /kɔ.mɑ̃.kɔ̃/).\n2. Verbs in -ger (e.g., manger, voyager, nager, partager):\n- Keep a silent 'e' between 'g' and 'o': nous mangeons (/mɑ̃.ʒɔ̃/, NOT /mɑ̃.gɔ̃/).\n\nAll other conjugations (je mange, tu manges, ils mangent) already have an 'e', so they require no spelling change.",
            "examples": [
                {
                    "target": "Nous commençons la réunion à neuf heures.",
                    "reading": "noo koh-mahn-sohn lah ray-oo-nyohn ah nuhf uhr",
                    "translation": "We are starting the meeting at nine o'clock. (commencer -> commençons)"
                },
                {
                    "target": "Nous mangeons au restaurant italien.",
                    "reading": "noo mahn-zhohn oh res-toh-rahn ee-tah-lyan",
                    "translation": "We are eating at the Italian restaurant. (manger -> mangeons)"
                },
                {
                    "target": "Nous voyageons souvent en train.",
                    "reading": "noo vwah-yah-zhohn soo-vahn ahn tran",
                    "translation": "We often travel by train. (voyager -> voyageons)"
                },
                {
                    "target": "Nous avançons vers l'entrée.",
                    "reading": "noo zah-vahn-sohn vair lahn-tray",
                    "translation": "We are moving forward toward the entrance. (avancer -> avançons)"
                },
                {
                    "target": "Je mange une pomme et tu manges un croissant.",
                    "reading": "zhuh mahnzh oon pohm ay too mahnzh uhn krwah-sahn",
                    "translation": "I eat an apple and you eat a croissant. (regular singular forms)"
                }
            ],
            "mnemonics": [
                "The C-Cedilla (ç) looks like a little tail that softens the hard 'C' into a snake 'S' before 'O'!",
                "In -GER verbs, the 'E' acts as a bodyguard to keep 'G' sounding soft and gentle (/ʒ/) instead of hard (/g/)."
            ],
            "culturalNotes": [
                "The cedilla (la cédille) was introduced into French orthography in the 16th century precisely to resolve this phonetic dilemma without inventing new letters."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Apply phonetic spelling adjustments in -cer and -ger verbs to preserve » :",
                    "options": [
                        "Nous commençons la réunion à neuf heures.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (8a).",
                        "La préposition employée ici n'est pas commandée par le verbe (8b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (8c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u3-l3 :",
                    "options": [
                        "Nous mangeons au restaurant italien.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (8x).",
                        "Cette forme présente une anomalie phonétique en français standard (8y).",
                        "La préposition employée ici n'est pas commandée par le verbe (8z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u3-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous commençons la réunion à neuf heures.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (8m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (8n).",
                        "La préposition employée ici n'est pas commandée par le verbe (8p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u3-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u2-l1": {
        "id": "fr-u2-l1",
        "unit": "fr-u2",
        "level": "A1",
        "objective": "Identify and use French definite articles (le, la, l', les) with masculine, feminine, and vowel-initial nouns.",
        "prerequisites": [
            "fr-u1-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u1-l5"
            ]
        },
        "presentation": {
            "explanation": "Every French noun has a grammatical gender: masculine or feminine. When referring to a specific item ('the'), French uses four definite articles:\n- le for masculine singular nouns starting with a consonant (le livre - the book, le café - the café).\n- la for feminine singular nouns starting with a consonant (la table - the table, la porte - the door).\n- l' (elision) when either masculine or feminine singular nouns start with a vowel or silent 'h' (l'ami - the male friend, l'amie - the female friend, l'hôtel - the hotel).\n- les for all plural nouns, masculine or feminine (les livres - the books, les tables - the tables, les hôtels - the hotels).\n\nRemember that elision with l' prevents the awkward vowel collision (/lə a.mi/ -> /la.mi/).",
            "examples": [
                {
                    "target": "Le livre est sur la table.",
                    "reading": "luh leevr ay soor lah tahbl",
                    "translation": "The book is on the table."
                },
                {
                    "target": "La maison est grande.",
                    "reading": "lah may-zohn ay grahnd",
                    "translation": "The house is big."
                },
                {
                    "target": "L'ami de Paul arrive demain.",
                    "reading": "lah-mee duh pohl ah-reev duh-man",
                    "translation": "Paul's friend arrives tomorrow."
                },
                {
                    "target": "L'école ouvre à huit heures.",
                    "reading": "lay-kohl oo-vr ah weet uhr",
                    "translation": "The school opens at eight o'clock."
                },
                {
                    "target": "Les étudiants écoutent le professeur.",
                    "reading": "lay zay-too-dyahn ay-koot luh proh-feh-suhr",
                    "translation": "The students listen to the teacher."
                }
            ],
            "mnemonics": [
                "LE = MascuLine (starts with L, ends with E). LA = Feminine (ends with A, like 'senora' or 'la donna').",
                "L' is an apostrophe drop: whenever two vowels crash (le + ami), the 'e' gets kicked out into an apostrophe!"
            ],
            "culturalNotes": [
                "Unlike English where 'the' is neutral and often omitted in generic statements, French requires a definite article for general concepts: 'J'aime le chocolat' (I like chocolate in general)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Identify and use French definite articles (le, la, l', les) with mascu » :",
                    "options": [
                        "Le livre est sur la table.",
                        "Cette forme présente une anomalie phonétique en français standard (9a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (9b).",
                        "Cette construction passive alourdit inutilement l'énoncé (9c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u2-l1 :",
                    "options": [
                        "La maison est grande.",
                        "Cette variante relève d'un registre familier inadapté au contexte (9x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (9y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (9z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u2-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Le livre est sur la table.",
                        "Cette variante relève d'un registre familier inadapté au contexte (9m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (9n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (9p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u2-l1 (terme attendu : « Le ») :",
                    "acceptedAnswers": [
                        "Le",
                        "le",
                        "Le"
                    ],
                    "explanation": "Le mot exact est « Le »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u2-l2": {
        "id": "fr-u2-l2",
        "unit": "fr-u2",
        "level": "A1",
        "objective": "Use indefinite articles (un, une, des) to refer to non-specific singular and plural nouns.",
        "prerequisites": [
            "fr-u2-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u2-l1"
            ]
        },
        "presentation": {
            "explanation": "Indefinite articles refer to non-specific items ('a', 'an', or plural 'some'):\n- un for masculine singular nouns (un stylo - a pen, un café - a coffee, un homme - a man).\n- une for feminine singular nouns (une table - a table, une pomme - an apple, une femme - a woman).\n- des for all plural nouns (des stylos - [some] pens, des tables - [some] tables, des amis - [some] friends).\n\nCrucial note for English speakers: in English, the plural of 'a cat' is simply 'cats' without an article. In French, you CANNOT omit the article; you must say des chats. Des is mandatory in French whenever you refer to plural uncounted items.",
            "examples": [
                {
                    "target": "J'ai un livre et une trousse.",
                    "reading": "zhay uhn leevr ay oon troos",
                    "translation": "I have a book and a pencil case."
                },
                {
                    "target": "Il achète des croissants.",
                    "reading": "eel ah-shet day krwah-sahn",
                    "translation": "He buys (some) croissants."
                },
                {
                    "target": "C'est un problème intéressant.",
                    "reading": "say tuhn proh-blem an-tay-reh-sahn",
                    "translation": "It is an interesting problem."
                },
                {
                    "target": "Voici une amie de Sophie.",
                    "reading": "vwah-see oon nah-mee duh soh-fee",
                    "translation": "Here is a friend of Sophie's."
                },
                {
                    "target": "Nous voyons des oiseaux dans le parc.",
                    "reading": "noo vwah-yohn day zwah-zoh dahn luh pahrk",
                    "translation": "We see birds in the park."
                }
            ],
            "mnemonics": [
                "UN = 1 masculine thing. UNE = 1 feminine thing (notice the extra 'e'). DES = plural of 'un/une' (think: DE + S = plural of 'a').",
                "Never leave a plural noun naked! English says 'I see dogs'; French always dresses them: 'Je vois DES chiens'."
            ],
            "culturalNotes": [
                "When ordering at a boulangerie or café, 'un/une' functions both as the indefinite article 'a' and as the number 'one': 'Un café et deux croissants, s'il vous plaît'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Use indefinite articles (un, une, des) to refer to non-specific singul » :",
                    "options": [
                        "J'ai un livre et une trousse.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (10a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (10b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (10c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u2-l2 :",
                    "options": [
                        "Il achète des croissants.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (10x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (10y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (10z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u2-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "J'ai un livre et une trousse.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (10m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (10n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (10p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u2-l2 (terme attendu : « Jai ») :",
                    "acceptedAnswers": [
                        "Jai",
                        "jai",
                        "Jai"
                    ],
                    "explanation": "Le mot exact est « Jai »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u2-l3": {
        "id": "fr-u2-l3",
        "unit": "fr-u2",
        "level": "A1",
        "objective": "Recognize reliable noun ending patterns to predict whether a French noun is masculine or feminine.",
        "prerequisites": [
            "fr-u2-l1",
            "fr-u2-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u2-l1",
                "fr-u2-l2"
            ]
        },
        "presentation": {
            "explanation": "While grammatical gender in French must ultimately be learned with each word, high-frequency word endings provide reliable guidelines:\n\n1. Typically Feminine Endings:\n- -tion / -sion (la nation, la décision, la conversation)\n- -té / -tié (la liberté, la société, l'amitié)\n- -ette (la bicyclette, la baguette)\n- -ance / -ence (la balance, la différence — exception: le silence)\n- -ure (la culture, la nature)\n- -ie (la philosophie, la boulangerie)\n\n2. Typically Masculine Endings:\n- -ment (le monument, le gouvernement, le sentiment)\n- -eau (le bureau, le château, le bateau — exception: l'eau, la peau)\n- -age (le voyage, le fromage, le garage — exceptions: la plage, la cage, la page)\n- -isme (le réalisme, le tourisme)\n- -oir (le miroir, le couloir)\n- -al / -ail (le journal, le travail)\n\nLearning nouns always as a pair with their article (e.g. learning 'la table' rather than just 'table') is the single most effective habit for mastering French.",
            "examples": [
                {
                    "target": "La décision est difficile.",
                    "reading": "lah day-see-zyohn ay dee-fee-seel",
                    "translation": "The decision is difficult. (-sion is feminine)"
                },
                {
                    "target": "Le gouvernement annonce une réforme.",
                    "reading": "luh goo-vair-nuh-mahn ah-nohns oon ray-form",
                    "translation": "The government announces a reform. (-ment is masculine)"
                },
                {
                    "target": "Ce voyage est magnifique.",
                    "reading": "suh vwah-yahzh ay mah-nyee-feek",
                    "translation": "This trip is magnificent. (-age is masculine)"
                },
                {
                    "target": "La liberté est une valeur fondamentale.",
                    "reading": "lah lee-bair-tay ay toon vah-luhr fohn-dah-mahn-tahl",
                    "translation": "Freedom is a fundamental value. (-té is feminine)"
                },
                {
                    "target": "Le château est historique.",
                    "reading": "luh shah-toh ay tees-toh-reek",
                    "translation": "The castle is historic. (-eau is masculine)"
                }
            ],
            "mnemonics": [
                "Words ending in -TION and -TÉ are Feminine (think: Revolution & Liberté are French feminine icons!).",
                "Words ending in -MENT and -AGE are Masculine (think: Men travel -> 'Gouvernement & Voyage')."
            ],
            "culturalNotes": [
                "Language learners often fear gender arbitrariness, but native French speakers subconsciously rely on these very morphological suffix patterns when encountering newly coined technical words (e.g., 'le streaming', 'la numérisation')."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Recognize reliable noun ending patterns to predict whether a French no » :",
                    "options": [
                        "La décision est difficile.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (11a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (11b).",
                        "Cette construction passive alourdit inutilement l'énoncé (11c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u2-l3 :",
                    "options": [
                        "Le gouvernement annonce une réforme.",
                        "L'antériorité temporelle est mal établie par rapport au repère (11x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (11y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (11z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u2-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "La décision est difficile.",
                        "L'antériorité temporelle est mal établie par rapport au repère (11m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (11n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (11p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u2-l3 (terme attendu : « La ») :",
                    "acceptedAnswers": [
                        "La",
                        "la",
                        "La"
                    ],
                    "explanation": "Le mot exact est « La »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u2-l4": {
        "id": "fr-u2-l4",
        "unit": "fr-u2",
        "level": "A1",
        "objective": "Form regular and irregular plural nouns in French (-s, -x, -aux, and invariable nouns).",
        "prerequisites": [
            "fr-u2-l1",
            "fr-u2-l2",
            "fr-u2-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u2-l1",
                "fr-u2-l2"
            ]
        },
        "presentation": {
            "explanation": "In French, most nouns form their plural by adding an unpronounced -s to the singular form:\n- un livre -> des livres (/leevr/)\n- une table -> des tables (/tahbl/)\n\nHowever, several important irregular plural patterns exist:\n1. Nouns ending in -s, -x, -z in the singular do NOT change in the plural (invariable):\n- un pays -> des pays (country -> countries)\n- un prix -> des prix (price/prize -> prices)\n- un nez -> des nez (nose -> noses)\n\n2. Nouns ending in -eau, -au, -eu take -x in the plural:\n- un bureau -> des bureaux\n- un chapeau -> des chapeaux\n- un jeu -> des jeux\n\n3. Most nouns ending in -al change to -aux:\n- un journal -> des journaux\n- un animal -> des animaux\n- un hôpital -> des hôpitaux\n\nCrucial pronunciation rule: the plural endings -s, -x, and -aux are silent in spoken French! The plural status is conveyed primarily through the article (le vs. les, un vs. des) and liaisons.",
            "examples": [
                {
                    "target": "Les journaux sont sur la table.",
                    "reading": "lay zhoor-noh sohn soor lah tahbl",
                    "translation": "The newspapers are on the table. (journal -> journaux)"
                },
                {
                    "target": "Nous visitons plusieurs pays européens.",
                    "reading": "noo vee-zee-tohn ploo-zyuhr pay-ee uh-roh-pay-an",
                    "translation": "We visit several European countries. (pays is invariant)"
                },
                {
                    "target": "Les enfants aiment les animaux.",
                    "reading": "lay zahn-fahn em lay zah-nee-moh",
                    "translation": "Children love animals. (animal -> animaux)"
                },
                {
                    "target": "Les nouveaux bureaux sont spacieux.",
                    "reading": "lay noo-voh boo-roh sohn spah-syoo",
                    "translation": "The new offices are spacious. (bureau -> bureaux)"
                },
                {
                    "target": "Les prix augmentent cette année.",
                    "reading": "lay pree ohg-mahnt set ah-nay",
                    "translation": "Prices are increasing this year. (prix is invariant)"
                }
            ],
            "mnemonics": [
                "-AL transforms to -AUX (think: Animal -> AnimAUX).",
                "Nouns already ending in S, X, Z are already 'plural-shaped' in spelling, so they refuse any extra letters!"
            ],
            "culturalNotes": [
                "Because final -s and -x are silent in French, listening for the article ('le' /lə/ vs 'les' /le/) is essential for oral comprehension to distinguish singular from plural."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Form regular and irregular plural nouns in French (-s, -x, -aux, and i » :",
                    "options": [
                        "Les journaux sont sur la table.",
                        "La préposition employée ici n'est pas commandée par le verbe (12a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (12b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (12c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u2-l4 :",
                    "options": [
                        "Nous visitons plusieurs pays européens.",
                        "La préposition employée ici n'est pas commandée par le verbe (12x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (12y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (12z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u2-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Les journaux sont sur la table.",
                        "La préposition employée ici n'est pas commandée par le verbe (12m).",
                        "Cette forme présente une anomalie phonétique en français standard (12n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (12p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u2-l4 (terme attendu : « Les ») :",
                    "acceptedAnswers": [
                        "Les",
                        "les",
                        "Les"
                    ],
                    "explanation": "Le mot exact est « Les »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u2-l5": {
        "id": "fr-u2-l5",
        "unit": "fr-u2",
        "level": "A1",
        "objective": "Form and use contracted articles with prepositions à (au, aux) and de (du, des).",
        "prerequisites": [
            "fr-u2-l1",
            "fr-u2-l2",
            "fr-u2-l3",
            "fr-u2-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u2-l1",
                "fr-u2-l4"
            ]
        },
        "presentation": {
            "explanation": "In French, when the prepositions à ('to / at') or de ('of / from') meet the definite articles le or les, they mandatory contract into a single word:\n\n1. Contractions with À (to/at):\n- à + le = AU (Je vais au cinéma — NOT 'à le cinéma')\n- à + la = À LA (no contraction: Je vais à la plage)\n- à + l' = À L' (no contraction: Je vais à l'hôtel)\n- à + les = AUX (Je parle aux étudiants — NOT 'à les étudiants')\n\n2. Contractions with DE (of/from):\n- de + le = DU (Le livre du professeur — NOT 'de le professeur')\n- de + la = DE LA (no contraction: La porte de la maison)\n- de + l' = DE L' (no contraction: L'entrée de l'immeuble)\n- de + les = DES (La liste des étudiants — NOT 'de les étudiants')\n\nSaying 'à le' or 'de le' in French is a major grammatical violation. You must always contract them to AU and DU.",
            "examples": [
                {
                    "target": "Je vais au restaurant ce soir.",
                    "reading": "zhuh vay oh res-toh-rahn suh swahr",
                    "translation": "I am going to the restaurant tonight. (à + le = au)"
                },
                {
                    "target": "Elle parle au directeur.",
                    "reading": "el pahrl oh dee-rek-tuhr",
                    "translation": "She is speaking to the director. (à + le = au)"
                },
                {
                    "target": "C'est la voiture du voisin.",
                    "reading": "say lah vwah-toor doo vwah-zan",
                    "translation": "It is the neighbor's car. (de + le = du)"
                },
                {
                    "target": "Nous allons aux États-Unis.",
                    "reading": "noo zah-lohn zoh zay-tah-zoo-nee",
                    "translation": "We are going to the United States. (à + les = aux)"
                },
                {
                    "target": "Voici les devoirs des étudiants.",
                    "reading": "vwah-see lay duh-vwahr day zay-too-dyahn",
                    "translation": "Here is the homework of the students. (de + les = des)"
                }
            ],
            "mnemonics": [
                "À + LE = AU (sounds like 'oh!'). DE + LE = DU (sounds like /dy/).",
                "French hates the clunky sounds 'à le' and 'de le' — they fuse immediately into sleek single syllables: AU and DU."
            ],
            "culturalNotes": [
                "Contracted articles are ubiquitous in everyday geography: countries with plural names take 'aux' (aux États-Unis, aux Pays-Bas, aux Antilles), while masculine countries take 'au' (au Canada, au Japon, au Mexique)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Form and use contracted articles with prepositions à (au, aux) and de  » :",
                    "options": [
                        "Je vais au restaurant ce soir.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (13a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (13b).",
                        "Cette construction passive alourdit inutilement l'énoncé (13c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u2-l5 :",
                    "options": [
                        "Elle parle au directeur.",
                        "Cette proposition modifie subtilement le sens originel du verbe (13x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (13y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (13z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u2-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Je vais au restaurant ce soir.",
                        "Cette proposition modifie subtilement le sens originel du verbe (13m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (13n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (13p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u2-l5 (terme attendu : « Je ») :",
                    "acceptedAnswers": [
                        "Je",
                        "je",
                        "Je"
                    ],
                    "explanation": "Le mot exact est « Je »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u3-l4": {
        "id": "fr-u3-l4",
        "unit": "fr-u3",
        "level": "A1",
        "objective": "Conjugate stem-changing -er verbs (acheter, préférer, appeler) reflecting vowel alterations before silent endings.",
        "prerequisites": [
            "fr-u3-l1",
            "fr-u3-l2",
            "fr-u3-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u3-l1",
                "fr-u3-l3"
            ]
        },
        "presentation": {
            "explanation": "Stem-changing verbs in French are regular in their personal endings (-e, -es, -e, -ons, -ez, -ent), but alter their internal stem vowel in the singular forms and 3rd-person plural (the 'boot' forms) to maintain an open syllable before a silent ending:\n\n1. e -> è (e.g., acheter - to buy, lever - to raise):\n- j'achète, tu achètes, il achète, ils achètent (open /ɛ/ sound)\n- BUT: nous achetons, vous achetez (closed /ə/ sound, because the ending is pronounced!)\n\n2. é -> è (e.g., préférer - to prefer, répéter - to repeat):\n- je préfère, tu préfères, il préfère, ils préfèrent\n- BUT: nous préférons, vous préférez (reverts to é)\n\n3. Consonant doubling (e.g., appeler - to call, jeter - to throw):\n- j'appelle, tu appelles, il appelle, ils appellent (double 'l' makes the 'e' open /ɛ/)\n- BUT: nous appelons, vous appelez (single 'l')\n\nNotice that nous and vous NEVER take the stem change because their endings (-ons, -ez) carry the stress!",
            "examples": [
                {
                    "target": "J'achète du pain à la boulangerie.",
                    "reading": "zhah-shet doo pan ah lah boo-lahn-zhree",
                    "translation": "I buy bread at the bakery. (acheter -> achète)"
                },
                {
                    "target": "Nous achetons des fruits au marché.",
                    "reading": "noo zahsh-tohn day frwee oh mahr-shay",
                    "translation": "We buy fruit at the market. (nous achetons)"
                },
                {
                    "target": "Je préfère le thé au café.",
                    "reading": "zhuh pray-fair luh tay oh kah-fay",
                    "translation": "I prefer tea to coffee. (préférer -> préfère)"
                },
                {
                    "target": "Vous préférez voyager en train ?",
                    "reading": "voo pray-fay-ray vwah-yah-zhay ahn tran",
                    "translation": "Do you prefer to travel by train? (vous préférez)"
                },
                {
                    "target": "Elle appelle son amie.",
                    "reading": "el ah-pel soh nah-mee",
                    "translation": "She calls her friend. (appeler -> appelle)"
                }
            ],
            "mnemonics": [
                "The Boot Rule: When the ending is SILENT (the boot), the stem must WAKE UP with a grave accent (è) or double letter to be heard!",
                "Nous and vous have loud, strong endings (-ons, -ez), so their stem stays calm and relaxed."
            ],
            "culturalNotes": [
                "Mastering these stem changes is essential for natural French cadence; native speakers naturally open the vowel before silent syllables to ensure clear articulation."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Conjugate stem-changing -er verbs (acheter, préférer, appeler) reflect » :",
                    "options": [
                        "J'achète du pain à la boulangerie.",
                        "Cette forme présente une anomalie phonétique en français standard (14a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (14b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (14c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u3-l4 :",
                    "options": [
                        "Nous achetons des fruits au marché.",
                        "Cette forme présente une anomalie phonétique en français standard (14x).",
                        "La préposition employée ici n'est pas commandée par le verbe (14y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (14z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u3-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "J'achète du pain à la boulangerie.",
                        "Cette forme présente une anomalie phonétique en français standard (14m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (14n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (14p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u3-l4 (terme attendu : « Jachète ») :",
                    "acceptedAnswers": [
                        "Jachète",
                        "jachète",
                        "Jachète"
                    ],
                    "explanation": "Le mot exact est « Jachète »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u3-l5": {
        "id": "fr-u3-l5",
        "unit": "fr-u3",
        "level": "A1",
        "objective": "Combine regular -er verbs, time expressions, and everyday vocabulary to narrate a full daily routine.",
        "prerequisites": [
            "fr-u3-l1",
            "fr-u3-l2",
            "fr-u3-l3",
            "fr-u3-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u3-l1",
                "fr-u3-l4"
            ]
        },
        "presentation": {
            "explanation": "Describing daily life in French unites regular -er verbs with key temporal connectors and adverbs of frequency:\n\n1. Common Daily Verbs:\n- habiter (to live), travailler (to work), étudier (to study)\n- écouter (to listen to), regarder (to watch), préparer (to prepare)\n- dîner (to have dinner), déjeuner (to have lunch), rentrer (to return home)\n\n2. Temporal Connectors & Sequencing:\n- D'abord (First), Puis / Ensuite (Then / Next), Après (Afterward), Enfin (Finally)\n- le matin (in the morning), l'après-midi (in the afternoon), le soir (in the evening)\n- tous les jours (every day), souvent (often), parfois (sometimes), toujours (always)\n\nExample sequence: Le matin, je prépare le petit-déjeuner. Ensuite, je travaille à l'université. Le soir, je dîne avec ma famille et je regarde un film.",
            "examples": [
                {
                    "target": "D'abord, j'écoute les nouvelles à la radio.",
                    "reading": "dah-bohr, zhay-koot lay noo-vel ah lah rah-dyoh",
                    "translation": "First, I listen to the news on the radio."
                },
                {
                    "target": "Ensuite, nous travaillons sur le projet.",
                    "reading": "ahn-sweet, noo trah-vah-yohn soor luh proh-zhay",
                    "translation": "Next, we work on the project."
                },
                {
                    "target": "Le soir, il dîne avec ses amis.",
                    "reading": "luh swahr, eel deen ah-vek say zah-mee",
                    "translation": "In the evening, he has dinner with his friends."
                },
                {
                    "target": "Elle rentre à la maison à dix-huit heures.",
                    "reading": "el rahntr ah lah may-zohn ah deez-weet uhr",
                    "translation": "She returns home at 6:00 PM."
                },
                {
                    "target": "Enfin, je regarde la télévision.",
                    "reading": "ahn-fan, zhuh ruh-gahrd lah tay-lay-vee-zyohn",
                    "translation": "Finally, I watch television."
                }
            ],
            "mnemonics": [
                "D'ABORD -> ENSUITE -> ENFIN: The holy trinity of French storytelling sequence (First -> Then -> Finally)!",
                "Remember that French verbs like 'écouter' and 'regarder' directly take an object without prepositions: 'j'écoute la radio' (NOT 'j'écoute à la radio')."
            ],
            "culturalNotes": [
                "In France, lunch (le déjeuner) is traditionally a structured break between 12:00 and 14:00, and dinner (le dîner) is typically eaten later than in North America, usually between 19:30 and 21:00."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Combine regular -er verbs, time expressions, and everyday vocabulary t » :",
                    "options": [
                        "D'abord, j'écoute les nouvelles à la radio.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (15a).",
                        "Cette construction passive alourdit inutilement l'énoncé (15b).",
                        "Cette construction passive alourdit inutilement l'énoncé (15c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u3-l5 :",
                    "options": [
                        "Ensuite, nous travaillons sur le projet.",
                        "Cette construction passive alourdit inutilement l'énoncé (15x).",
                        "Cette construction passive alourdit inutilement l'énoncé (15y).",
                        "Cette construction passive alourdit inutilement l'énoncé (15z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u3-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "D'abord, j'écoute les nouvelles à la radio.",
                        "Cette construction passive alourdit inutilement l'énoncé (15m).",
                        "Cette construction passive alourdit inutilement l'énoncé (15n).",
                        "Cette construction passive alourdit inutilement l'énoncé (15p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u3-l5 (terme attendu : « Dabord ») :",
                    "acceptedAnswers": [
                        "Dabord",
                        "dabord",
                        "Dabord"
                    ],
                    "explanation": "Le mot exact est « Dabord »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u4-l1": {
        "id": "fr-u4-l1",
        "unit": "fr-u4",
        "level": "A1",
        "objective": "Conjugate the irregular verb ÊTRE in the present tense and use it for identity, profession, nationality, and adjectives.",
        "prerequisites": [
            "fr-u3-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u3-l5"
            ]
        },
        "presentation": {
            "explanation": "ÊTRE ('to be') is the most important verb in French. Its present conjugation is completely irregular:\n- je suis (I am)\n- tu es (you are - informal)\n- il / elle / on est (he / she / it / one is)\n- nous sommes (we are)\n- vous êtes (you are - plural/formal, with liaison: /vu.zɛt/)\n- ils / elles sont (they are, /eel sohn/)\n\nKey usages of Être:\n1. Nationalities and Professions: Je suis professeur (Notice: French does NOT use an article before professions after être!). Il est français.\n2. Inherent characteristics with adjectives: Elle est intelligente, Nous sommes prêts.\n3. Location with prepositions: Je suis à Paris, Le livre est sur la table.\n\nBe very careful not to confuse 'ils sont' (/eel sohn/ - they are) with 'ils ont' (/eel zohn/ - they have with /z/ liaison)!",
            "examples": [
                {
                    "target": "Je suis étudiant à l'université.",
                    "reading": "zhuh swee zay-too-dyahn ah loo-nee-vair-see-tay",
                    "translation": "I am a student at the university. (no article with profession)"
                },
                {
                    "target": "Tu es prêt pour le départ ?",
                    "reading": "too ay pray poor luh day-pahr",
                    "translation": "Are you ready for departure?"
                },
                {
                    "target": "Elle est médecin à l'hôpital central.",
                    "reading": "el ay med-san ah loh-pee-tahl sahn-trahl",
                    "translation": "She is a doctor at the central hospital."
                },
                {
                    "target": "Nous sommes très heureux de vous voir.",
                    "reading": "noo suhm tray zuh-ruh duh voo vwahr",
                    "translation": "We are very happy to see you."
                },
                {
                    "target": "Vous êtes en retard, monsieur.",
                    "reading": "voo zet ahn ruh-tahr, muh-syuh",
                    "translation": "You are late, sir. (liaison: vous êtes)"
                },
                {
                    "target": "Ils sont français et italiens.",
                    "reading": "eel sohn frahn-say ay zee-tah-lyan",
                    "translation": "They are French and Italian."
                }
            ],
            "mnemonics": [
                "JE SUIS = I AM (Sweet I am!). NOUS SOMMES = We are (some are we!).",
                "Phonetic Danger: ILS SONT has an /s/ sound (they are), while ILS ONT has a buzzing /z/ sound (they have)!"
            ],
            "culturalNotes": [
                "In French, stating your profession uses 'Je suis + [profession]' directly without 'un/une': 'Je suis avocat' (I am a lawyer), 'Je suis ingénieur'. Adding 'un' ('Je suis un avocat') sounds foreign or emphasizes that you are merely one of many."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Conjugate the irregular verb ÊTRE in the present tense and use it for  » :",
                    "options": [
                        "Je suis étudiant à l'université.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (16a).",
                        "Cette forme présente une anomalie phonétique en français standard (16b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (16c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u4-l1 :",
                    "options": [
                        "Tu es prêt pour le départ ?",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (16x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (16y).",
                        "Cette forme présente une anomalie phonétique en français standard (16z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u4-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Je suis étudiant à l'université.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (16m).",
                        "La préposition employée ici n'est pas commandée par le verbe (16n).",
                        "Cette forme présente une anomalie phonétique en français standard (16p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u4-l1 (terme attendu : « Je ») :",
                    "acceptedAnswers": [
                        "Je",
                        "je",
                        "Je"
                    ],
                    "explanation": "Le mot exact est « Je »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u4-l2": {
        "id": "fr-u4-l2",
        "unit": "fr-u4",
        "level": "A1",
        "objective": "Conjugate AVOIR in the present tense and deploy it for age, possession, and core physical sensations (avoir faim, avoir soif, avoir chaud, avoir froid).",
        "prerequisites": [
            "fr-u4-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u4-l1"
            ]
        },
        "presentation": {
            "explanation": "AVOIR ('to have') is the second pillar of French verbs. Its present conjugation is:\n- j'ai (I have - notice elision j'ai, pronounced /ʒe/)\n- tu as (you have - /ty a/)\n- il / elle / on a (he/she/it has - /eel ah/)\n- nous avons (we have - /noo zah-vohn/ with liaison)\n- vous avez (you have - /voo zah-vay/ with liaison)\n- ils / elles ont (they have - /eel zohn/ with liaison)\n\nCrucial Idiomatic Expressions with Avoir:\nUnlike English which uses 'to be', French uses AVOIR for:\n1. Age: J'ai 25 ans (literally: 'I have 25 years' — never say 'Je suis 25 ans'!).\n2. Physical sensations: J'ai faim (I am hungry), J'ai soif (I am thirsty), J'ai chaud (I am hot), J'ai froid (I am cold), J'ai sommeil (I am sleepy).\n3. Emotional states: J'ai peur (I am afraid), J'ai de la chance (I am lucky).\n4. Need and desire: avoir besoin de (to need), avoir envie de (to feel like / want).",
            "examples": [
                {
                    "target": "J'ai vingt ans et j'ai deux frères.",
                    "reading": "zhay van tahn ay zhay duh frair",
                    "translation": "I am twenty years old and I have two brothers."
                },
                {
                    "target": "Tu as faim ? On va au restaurant.",
                    "reading": "too ah fan ? ohn vah oh res-toh-rahn",
                    "translation": "Are you hungry? Let's go to the restaurant."
                },
                {
                    "target": "Nous avons soif après la course.",
                    "reading": "noo zah-vohn swahf ah-preh lah koors",
                    "translation": "We are thirsty after the run."
                },
                {
                    "target": "Ils ont froid en hiver.",
                    "reading": "eel zohn frwah ahn nee-vair",
                    "translation": "They are cold in winter."
                },
                {
                    "target": "J'ai besoin d'un nouveau passeport.",
                    "reading": "zhay buh-zwan duhn noo-voh pahs-pohr",
                    "translation": "I need a new passport. (avoir besoin de)"
                }
            ],
            "mnemonics": [
                "In French, you POSSESS your age and hunger: 'I HAVE 20 years', 'I HAVE hunger' (J'ai faim)!",
                "J'AI sounds like 'Jay' — think of Jay having everything he needs."
            ],
            "culturalNotes": [
                "Saying 'Je suis chaud' or 'Je suis froid' in French does NOT mean 'I feel warm/cold' — it can have suggestive sexual slang connotations. Always use 'J'ai chaud' / 'J'ai froid' for physical temperature!"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Conjugate AVOIR in the present tense and deploy it for age, possession » :",
                    "options": [
                        "J'ai vingt ans et j'ai deux frères.",
                        "La préposition employée ici n'est pas commandée par le verbe (17a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (17b).",
                        "Cette construction passive alourdit inutilement l'énoncé (17c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u4-l2 :",
                    "options": [
                        "Tu as faim ? On va au restaurant.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (17x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (17y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (17z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u4-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "J'ai vingt ans et j'ai deux frères.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (17m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (17n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (17p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u4-l2 (terme attendu : « Jai ») :",
                    "acceptedAnswers": [
                        "Jai",
                        "jai",
                        "Jai"
                    ],
                    "explanation": "Le mot exact est « Jai »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u4-l3": {
        "id": "fr-u4-l3",
        "unit": "fr-u4",
        "level": "A1",
        "objective": "Conjugate FAIRE in the present tense and use it for activities, hobbies, sports, and weather expressions.",
        "prerequisites": [
            "fr-u4-l1",
            "fr-u4-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u4-l2"
            ]
        },
        "presentation": {
            "explanation": "FAIRE ('to do / to make') is one of the most versatile verbs in French. Its present conjugation is irregular, especially in the vous and ils forms:\n- je fais (/fɛ/)\n- tu fais (/fɛ/)\n- il / elle / on fait (/fɛ/)\n- nous faisons (/fə.zɔ̃/ - notice the 'ai' is pronounced like a schwa /ə/!)\n- vous faites (/fɛt/ - irregular ending -es, like 'êtes' and 'dites'!)\n- ils / elles font (/fɔ̃/ - ending in -ont, like 'sont' and 'ont'!)\n\nMajor Usages of Faire:\n1. Weather Expressions with impersonal 'Il fait...':\n- Il fait beau (the weather is nice), Il fait chaud (it's hot), Il fait froid (it's cold), Il fait mauvais (the weather is bad), Il fait du vent (it's windy), Il fait du soleil (it's sunny).\n2. Activities and Sports with partitive articles (faire du / de la / de l' / des):\n- faire du vélo (to bike), faire de la natation (to swim), faire du sport (to exercise), faire la cuisine (to cook), faire les courses (to do grocery shopping).",
            "examples": [
                {
                    "target": "Qu'est-ce que vous faites ce week-end ?",
                    "reading": "kes kuh voo fet suh wee-kend",
                    "translation": "What are you doing this weekend?"
                },
                {
                    "target": "Aujourd'hui, il fait très beau et chaud.",
                    "reading": "oh-zhoor-dwee, eel fay tray boh ay shoh",
                    "translation": "Today, the weather is very nice and warm."
                },
                {
                    "target": "Je fais du sport trois fois par semaine.",
                    "reading": "zhuh fay doo spohr trwah fwah pahr suh-men",
                    "translation": "I do sports / exercise three times a week."
                },
                {
                    "target": "Nous faisons les courses le samedi matin.",
                    "reading": "noo fuh-zohn lay koors luh sahm-dee mah-tan",
                    "translation": "We do grocery shopping on Saturday morning."
                },
                {
                    "target": "Ils font attention aux détails.",
                    "reading": "eel fohn tah-tahn-syohn oh day-tahy",
                    "translation": "They pay attention to details."
                }
            ],
            "mnemonics": [
                "VOUS FAITES: One of only three French verbs with an irregular -TES ending in 'vous' (vous êtes, vous faites, vous dites)!",
                "WEATHER = FAIRE: The sky 'makes' the weather in French: 'Il FAIT beau'."
            ],
            "culturalNotes": [
                "French distinguishes 'faire les courses' (grocery / supermarket shopping for essentials) from 'faire du shopping' (recreational shopping for clothes and luxuries)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Conjugate FAIRE in the present tense and use it for activities, hobbie » :",
                    "options": [
                        "Qu'est-ce que vous faites ce week-end ?",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (18a).",
                        "La préposition employée ici n'est pas commandée par le verbe (18b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (18c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u4-l3 :",
                    "options": [
                        "Aujourd'hui, il fait très beau et chaud.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (18x).",
                        "Cette forme présente une anomalie phonétique en français standard (18y).",
                        "La préposition employée ici n'est pas commandée par le verbe (18z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u4-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Qu'est-ce que vous faites ce week-end ?",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (18m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (18n).",
                        "La préposition employée ici n'est pas commandée par le verbe (18p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u4-l3 (terme attendu : « Questce ») :",
                    "acceptedAnswers": [
                        "Questce",
                        "questce",
                        "Questce"
                    ],
                    "explanation": "Le mot exact est « Questce »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u4-l4": {
        "id": "fr-u4-l4",
        "unit": "fr-u4",
        "level": "A1",
        "objective": "Conjugate ALLER in the present tense and deploy spatial prepositions (à, en, au, aux, chez).",
        "prerequisites": [
            "fr-u4-l1",
            "fr-u4-l2",
            "fr-u4-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u4-l3"
            ]
        },
        "presentation": {
            "explanation": "ALLER ('to go') is the only verb ending in -er that is completely irregular. Its present conjugation is:\n- je vais (/vɛ/)\n- tu vas (/va/)\n- il / elle / on va (/va/)\n- nous allons (/noo zah-lohn/ with liaison)\n- vous allez (/voo zah-lay/ with liaison)\n- ils / elles vont (/eel vohn/ with liaison)\n\nPrepositions of Destination with Aller:\n1. To a city: always À (Je vais à Paris, à Tokyo, à Montréal).\n2. To a masculine country: AU (Je vais au Canada, au Japon).\n3. To a feminine country or vowel-initial country: EN (Je vais en France, en Espagne, en Italie).\n4. To a plural country: AUX (Je vais aux États-Unis, aux Pays-Bas).\n5. To a person's place / professional: CHEZ (Je vais chez le médecin, chez Pierre, chez moi - to my place/home). Never use 'à' with persons!",
            "examples": [
                {
                    "target": "Je vais en France cet été.",
                    "reading": "zhuh vay ahn frahns set ay-tay",
                    "translation": "I am going to France this summer. (feminine country -> en)"
                },
                {
                    "target": "Tu vas au cinéma avec nous ?",
                    "reading": "too vah oh see-nay-mah ah-vek noo",
                    "translation": "Are you going to the movies with us?"
                },
                {
                    "target": "Nous allons chez le dentiste à quatorze heures.",
                    "reading": "noo zah-lohn shay luh dahn-teest ah kah-tohrz uhr",
                    "translation": "We are going to the dentist at 2:00 PM. (person -> chez)"
                },
                {
                    "target": "Elle va à Nice pour le week-end.",
                    "reading": "el vah ah nees poor luh wee-kend",
                    "translation": "She is going to Nice for the weekend. (city -> à)"
                },
                {
                    "target": "Ils vont aux Pays-Bas demain.",
                    "reading": "eel vohn toh pay-ee-bah duh-man",
                    "translation": "They are going to the Netherlands tomorrow. (plural country -> aux)"
                }
            ],
            "mnemonics": [
                "CHEZ = SOMEONE'S PLACE: Think of 'Chez Panisse' or going to someone's house. People always get CHEZ, places get À/EN!",
                "CITIES take À (small single point), COUNTRIES take EN/AU (big land area)."
            ],
            "culturalNotes": [
                "Chez moi (at my home), chez toi (at your place), chez nous (at our house) are among the most frequent home expressions in French lifestyle."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Conjugate ALLER in the present tense and deploy spatial prepositions ( » :",
                    "options": [
                        "Je vais en France cet été.",
                        "Cette forme présente une anomalie phonétique en français standard (19a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (19b).",
                        "Cette construction passive alourdit inutilement l'énoncé (19c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u4-l4 :",
                    "options": [
                        "Tu vas au cinéma avec nous ?",
                        "Cette variante relève d'un registre familier inadapté au contexte (19x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (19y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (19z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u4-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Je vais en France cet été.",
                        "Cette variante relève d'un registre familier inadapté au contexte (19m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (19n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (19p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u4-l4 (terme attendu : « Je ») :",
                    "acceptedAnswers": [
                        "Je",
                        "je",
                        "Je"
                    ],
                    "explanation": "Le mot exact est « Je »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u4-l5": {
        "id": "fr-u4-l5",
        "unit": "fr-u4",
        "level": "A1",
        "objective": "Synthesize and contrast the four core irregular verbs (être, avoir, faire, aller) in multi-sentence conversational dialogues.",
        "prerequisites": [
            "fr-u4-l1",
            "fr-u4-l2",
            "fr-u4-l3",
            "fr-u4-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u4-l1",
                "fr-u4-l4"
            ]
        },
        "presentation": {
            "explanation": "Mastering French A1 relies on effortlessly choosing between the Big Four irregular verbs without hesitation:\n\n1. ÊTRE (je suis, tu es, il est, nous sommes, vous êtes, ils sont) -> WHO/WHAT someone IS (identity, profession, nationality, characteristics, location).\n2. AVOIR (j'ai, tu as, il a, nous avons, vous avez, ils ont) -> WHAT someone HAS (possession, age, physical sensations like faim/soif/chaud/froid).\n3. FAIRE (je fais, tu fais, il fait, nous faisons, vous faites, ils font) -> WHAT someone DOES or MAKES (activities, sports with du/de la, weather with il fait).\n4. ALLER (je vais, tu vas, il va, nous allons, vous allez, ils vont) -> WHERE someone GOES (destinations with à/en/au/aux/chez, health in 'comment ça va').\n\nA classic integrative monologue: 'Bonjour ! Je suis Julien, j'ai 28 ans et je suis ingénieur. Aujourd'hui, il fait beau alors je vais au parc pour faire du sport avec des amis.'",
            "examples": [
                {
                    "target": "Je suis fatigué parce que je fais beaucoup de travail.",
                    "reading": "zhuh swee fah-tee-gay pahr-skuh zhuh fay boh-koo duh trah-vahy",
                    "translation": "I am tired because I do a lot of work."
                },
                {
                    "target": "Elle a faim, alors elle va au restaurant.",
                    "reading": "el ah fan, ah-lohr el vah oh res-toh-rahn",
                    "translation": "She is hungry, so she goes to the restaurant."
                },
                {
                    "target": "Nous sommes à Paris et nous avons un bel appartement.",
                    "reading": "noo suhm zah pah-ree ay noo zah-vohn zohn bel ah-pahr-tuh-mahn",
                    "translation": "We are in Paris and we have a beautiful apartment."
                },
                {
                    "target": "Vous faites du vélo quand il fait beau ?",
                    "reading": "voo fet doo vay-loh kahn teel fay boh",
                    "translation": "Do you go biking when the weather is nice?"
                },
                {
                    "target": "Ils vont chez des amis ce soir.",
                    "reading": "eel vohn shay day zah-mee suh swahr",
                    "translation": "They are going to friends' place tonight."
                }
            ],
            "mnemonics": [
                "Big 4 Matrix: Être = Identity / Avoir = Age & Need / Faire = Action & Weather / Aller = Movement & Health!",
                "Check the 3rd person plural quartet: Ils SONT (être), Ils ONT (avoir), Ils FONT (faire), Ils VONT (aller) — notice they all end in -ONT!"
            ],
            "culturalNotes": [
                "These four verbs represent roughly 40% of all spoken verb tokens in daily French communication. Achieving automatic reflex control over them is the cornerstone of fluency."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Synthesize and contrast the four core irregular verbs (être, avoir, fa » :",
                    "options": [
                        "Je suis fatigué parce que je fais beaucoup de travail.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (20a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (20b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (20c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u4-l5 :",
                    "options": [
                        "Elle a faim, alors elle va au restaurant.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (20x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (20y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (20z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u4-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Je suis fatigué parce que je fais beaucoup de travail.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (20m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (20n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (20p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u4-l5 (terme attendu : « Je ») :",
                    "acceptedAnswers": [
                        "Je",
                        "je",
                        "Je"
                    ],
                    "explanation": "Le mot exact est « Je »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u5-l1": {
        "id": "fr-u5-l1",
        "unit": "fr-u5",
        "level": "A1",
        "objective": "Construct standard negative sentences using the two-part 'ne...pas' frame surrounding the conjugated verb.",
        "prerequisites": [
            "fr-u4-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u4-l5"
            ]
        },
        "presentation": {
            "explanation": "In French, negation is formed as a two-part 'sandwich' structure surrounding the conjugated verb:\n\nNE + [conjugated verb] + PAS\n\n- Je parle français -> Je ne parle pas français (I do not speak French).\n- Il travaille -> Il ne travaille pas (He does not work).\n- Nous sommes d'accord -> Nous ne sommes pas d'accord (We do not agree).\n\nElision with N': When the conjugated verb begins with a vowel sound or silent 'h', 'ne' becomes 'n'':\n- J'aime le café -> Je n'aime pas le café.\n- Elle habite à Paris -> Elle n'habite pas à Paris.\n- Il a faim -> Il n'a pas faim.\n\nIn spoken colloquial French, native speakers very frequently omit the 'ne' in informal speech ('Je sais pas' instead of 'Je ne sais pas'). However, 'pas' can NEVER be omitted, and 'ne' is strictly required in formal and written French.",
            "examples": [
                {
                    "target": "Je ne parle pas espagnol.",
                    "reading": "zhuh nuh pahrl pah zes-pah-nyohl",
                    "translation": "I do not speak Spanish."
                },
                {
                    "target": "Il n'aime pas le fromage.",
                    "reading": "eel nem pah luh froh-mahzh",
                    "translation": "He does not like cheese. (elision n'aime)"
                },
                {
                    "target": "Nous ne sommes pas en retard.",
                    "reading": "noo nuh suhm pah zahn ruh-tahr",
                    "translation": "We are not late."
                },
                {
                    "target": "Elle n'habite pas ici.",
                    "reading": "el nah-beet pah zee-see",
                    "translation": "She does not live here. (elision n'habite)"
                },
                {
                    "target": "Vous n'avez pas de questions ?",
                    "reading": "voo nah-vay pah duh kes-tyohn",
                    "translation": "Do you not have any questions?"
                }
            ],
            "mnemonics": [
                "The Negation Sandwich: Verb is the meat, 'NE' is the bottom bread, 'PAS' is the top bread!",
                "Vowel collision rule applies: NE + VOWEL = N' (N'aime, N'a, N'habite)."
            ],
            "culturalNotes": [
                "Dropping 'ne' in speech ('J'sais pas', 'C'est pas vrai') is standard in casual French, but keep 'ne' in all writing, exams, and professional interactions."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Construct standard negative sentences using the two-part 'ne...pas' fr » :",
                    "options": [
                        "Je ne parle pas espagnol.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (21a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (21b).",
                        "Cette construction passive alourdit inutilement l'énoncé (21c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u5-l1 :",
                    "options": [
                        "Il n'aime pas le fromage.",
                        "L'antériorité temporelle est mal établie par rapport au repère (21x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (21y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (21z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u5-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Je ne parle pas espagnol.",
                        "L'antériorité temporelle est mal établie par rapport au repère (21m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (21n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (21p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u5-l1 (terme attendu : « Je ») :",
                    "acceptedAnswers": [
                        "Je",
                        "je",
                        "Je"
                    ],
                    "explanation": "Le mot exact est « Je »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u5-l2": {
        "id": "fr-u5-l2",
        "unit": "fr-u5",
        "level": "A1",
        "objective": "Apply the rule transforming indefinite (un, une, des) and partitive (du, de la, de l') articles into 'de / d'' in negative sentences.",
        "prerequisites": [
            "fr-u5-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u5-l1"
            ]
        },
        "presentation": {
            "explanation": "One of the most important rules of French syntax concerns articles in negative sentences:\n\nWhen a sentence is negated, the indefinite articles (un, une, des) and partitive articles (du, de la, de l') transform into DE (or D' before vowels) to express the total absence of quantity ('zero quantity' / 'none at all'):\n\n- J'ai un frère -> Je n'ai pas DE frère (NOT 'pas un frère').\n- Elle a une voiture -> Elle n'a pas DE voiture.\n- Nous avons des enfants -> Nous n'avons pas D'enfants.\n- Il boit du café -> Il ne boit pas DE café.\n- Elle mange de la viande -> Elle ne mange pas DE viande.\n\nThe ONLY Exception: The verb ÊTRE!\nWith the verb être, the articles do NOT change because être equates identities rather than quantities:\n- C'est un problème -> Ce n'est pas un problème (NOT 'pas de problème' in formal identification, though colloquially 'pas de problème' exists as an idiom).",
            "examples": [
                {
                    "target": "Je n'ai pas de voiture.",
                    "reading": "zhuh nay pah duh vwah-toor",
                    "translation": "I do not have a car. (un/une -> de)"
                },
                {
                    "target": "Elle ne boit pas de café le soir.",
                    "reading": "el nuh bwah pah duh kah-fay luh swahr",
                    "translation": "She does not drink coffee in the evening. (du -> de)"
                },
                {
                    "target": "Nous n'avons pas d'animaux domestiques.",
                    "reading": "noo nah-vohn pah dah-nee-moh doh-mes-teek",
                    "translation": "We do not have pets. (des -> d')"
                },
                {
                    "target": "Il n'y a pas de problème.",
                    "reading": "eel nyah pah duh proh-blem",
                    "translation": "There is no problem."
                },
                {
                    "target": "Ce n'est pas un étudiant.",
                    "reading": "suh nay pah zuhn zay-too-dyahn",
                    "translation": "He is not a student. (être exception: un stays un)"
                }
            ],
            "mnemonics": [
                "Zero Quantity = DE: In the negative, un/une/des/du/de la all collapse into zero: DE/D'!",
                "ÊTRE is the royal exception: Être is an equal sign (=), so it doesn't reduce articles to 'de'."
            ],
            "culturalNotes": [
                "The phrase 'Pas de problème' (No problem) is universally heard across France every day, literally embodying this exact rule."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Apply the rule transforming indefinite (un, une, des) and partitive (d » :",
                    "options": [
                        "Je n'ai pas de voiture.",
                        "La préposition employée ici n'est pas commandée par le verbe (22a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (22b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (22c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u5-l2 :",
                    "options": [
                        "Elle ne boit pas de café le soir.",
                        "La préposition employée ici n'est pas commandée par le verbe (22x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (22y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (22z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u5-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Je n'ai pas de voiture.",
                        "La préposition employée ici n'est pas commandée par le verbe (22m).",
                        "Cette forme présente une anomalie phonétique en français standard (22n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (22p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u5-l2 (terme attendu : « Je ») :",
                    "acceptedAnswers": [
                        "Je",
                        "je",
                        "Je"
                    ],
                    "explanation": "Le mot exact est « Je »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u5-l3": {
        "id": "fr-u5-l3",
        "unit": "fr-u5",
        "level": "A1",
        "objective": "Deploy complex negative adverbs 'ne...jamais' (never) and 'ne...plus' (no longer / not anymore) in place of 'pas'.",
        "prerequisites": [
            "fr-u5-l1",
            "fr-u5-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u5-l1",
                "fr-u5-l2"
            ]
        },
        "presentation": {
            "explanation": "In French, complex negative adverbs REPLACE 'pas' entirely. You never combine 'pas' with 'jamais' or 'plus' (*never say 'ne pas jamais'*)!\n\n1. NE ... JAMAIS (never):\n- Opposite of toujours (always) or souvent (often).\n- Je fume -> Je ne fume JAMAIS (I never smoke).\n- Il voyage -> Il ne voyage jamais en avion (He never travels by plane).\n\n2. NE ... PLUS (no longer / not anymore):\n- Opposite of encore (still) or toujours (still).\n- J'habite à Lyon -> Je n'habite PLUS à Lyon (I no longer live in Lyon).\n- Elle a faim -> Elle n'a plus faim (She is not hungry anymore).\n\nPronunciation of 'PLUS' in negative: In 'ne...plus', the final 's' is SILENT (/ply/)! (Contrasting with affirmative 'plus' meaning 'more', where 's' is often sounded as /plys/).",
            "examples": [
                {
                    "target": "Je ne bois jamais d'alcool.",
                    "reading": "zhuh nuh bwah zhah-meh dahl-kohl",
                    "translation": "I never drink alcohol."
                },
                {
                    "target": "Nous n'habitons plus à Paris.",
                    "reading": "noo nah-bee-tohn plyoo ah pah-ree",
                    "translation": "We no longer live in Paris. (final s in plus is silent)"
                },
                {
                    "target": "Elle ne regarde jamais la télévision.",
                    "reading": "el nuh ruh-gahrd zhah-meh lah tay-lay-vee-zyohn",
                    "translation": "She never watches television."
                },
                {
                    "target": "Je n'ai plus d'argent.",
                    "reading": "zhay nay plyoo dahr-zhahn",
                    "translation": "I don't have any money left / anymore."
                },
                {
                    "target": "Il ne fume plus depuis un an.",
                    "reading": "eel nuh foom plyoo duh-pwee zohn nahn",
                    "translation": "He doesn't smoke anymore for a year."
                }
            ],
            "mnemonics": [
                "PAS is kicked out: When JAMAIS (never) or PLUS (no longer) walks in, PAS must leave the room!",
                "Ne...Plus = 'No More': 'S' is silent (/ply/), meaning the action has stopped."
            ],
            "culturalNotes": [
                "Saying 'Je n'en peux plus' (I can't take it anymore / I'm exhausted) is one of the most common colloquial idioms in French daily conversation."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Deploy complex negative adverbs 'ne...jamais' (never) and 'ne...plus'  » :",
                    "options": [
                        "Je ne bois jamais d'alcool.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (23a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (23b).",
                        "Cette construction passive alourdit inutilement l'énoncé (23c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u5-l3 :",
                    "options": [
                        "Nous n'habitons plus à Paris.",
                        "Cette proposition modifie subtilement le sens originel du verbe (23x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (23y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (23z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u5-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Je ne bois jamais d'alcool.",
                        "Cette proposition modifie subtilement le sens originel du verbe (23m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (23n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (23p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u5-l3 (terme attendu : « Je ») :",
                    "acceptedAnswers": [
                        "Je",
                        "je",
                        "Je"
                    ],
                    "explanation": "Le mot exact est « Je »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u5-l4": {
        "id": "fr-u5-l4",
        "unit": "fr-u5",
        "level": "A1",
        "objective": "Deploy negative pronouns 'ne...rien' (nothing) and 'ne...personne' (nobody / no one) in object and subject positions.",
        "prerequisites": [
            "fr-u5-l1",
            "fr-u5-l2",
            "fr-u5-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u5-l3"
            ]
        },
        "presentation": {
            "explanation": "French has negative pronouns that negate objects or subjects:\n\n1. NE ... RIEN (nothing / not anything):\n- As object: placed directly after the conjugated verb (like 'pas').\n  - Je ne comprends RIEN (I understand nothing / I don't understand anything).\n  - Il ne dit rien (He says nothing).\n- As subject: RIEN NE + verb:\n  - Rien n'est facile (Nothing is easy).\n\n2. NE ... PERSONNE (nobody / no one / not anyone):\n- As object: placed at the END of the verb phrase (unlike 'pas' and 'rien'!).\n  - Je ne vois PERSONNE (I see no one / I don't see anyone).\n  - Il n'écoute personne (He listens to no one).\n- As subject: PERSONNE NE + verb:\n  - Personne n'est venu (Nobody came).\n\nNotice the key syntax difference: 'rien' sits right after the conjugated verb (Je ne sais rien), but 'personne' sits in the direct object position at the end of the clause (Je ne connais personne ici).",
            "examples": [
                {
                    "target": "Je ne comprends rien à cet exercice.",
                    "reading": "zhuh nuh kohm-prahn ryan ah set eg-zair-sees",
                    "translation": "I understand nothing about this exercise."
                },
                {
                    "target": "Il n'y a personne dans la salle.",
                    "reading": "eel nyah pair-suhn dahn lah sahl",
                    "translation": "There is nobody in the room."
                },
                {
                    "target": "Rien n'est impossible.",
                    "reading": "ryan nay tan-poh-see-bl",
                    "translation": "Nothing is impossible. (Rien as subject)"
                },
                {
                    "target": "Personne ne parle pendant l'examen.",
                    "reading": "pair-suhn nuh pahrl pahn-dahn leg-zah-man",
                    "translation": "Nobody speaks during the exam. (Personne as subject)"
                },
                {
                    "target": "Elle ne mange rien le matin.",
                    "reading": "el nuh mahnzh ryan luh mah-tan",
                    "translation": "She eats nothing in the morning."
                }
            ],
            "mnemonics": [
                "RIEN = THING (Think: 'Nothing' starts with N, Rien negates things).",
                "PERSONNE = PERSON (Negates human beings: 'Nobody'). When Personne is the subject, it leads the sentence: 'Personne ne sait'!"
            ],
            "culturalNotes": [
                "In French philosophy and literature, 'Le Néant' (nothingness) and expressions with 'rien' (like Édith Piaf's iconic 'Non, je ne regrette rien') are central cultural touchstones."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Deploy negative pronouns 'ne...rien' (nothing) and 'ne...personne' (no » :",
                    "options": [
                        "Je ne comprends rien à cet exercice.",
                        "Cette forme présente une anomalie phonétique en français standard (24a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (24b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (24c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u5-l4 :",
                    "options": [
                        "Il n'y a personne dans la salle.",
                        "Cette forme présente une anomalie phonétique en français standard (24x).",
                        "La préposition employée ici n'est pas commandée par le verbe (24y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (24z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u5-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Je ne comprends rien à cet exercice.",
                        "Cette forme présente une anomalie phonétique en français standard (24m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (24n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (24p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u5-l4 (terme attendu : « Je ») :",
                    "acceptedAnswers": [
                        "Je",
                        "je",
                        "Je"
                    ],
                    "explanation": "Le mot exact est « Je »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u5-l5": {
        "id": "fr-u5-l5",
        "unit": "fr-u5",
        "level": "A1",
        "objective": "Use the restrictive structure 'ne...que' (only) and distinguish it from absolute negation.",
        "prerequisites": [
            "fr-u5-l1",
            "fr-u5-l2",
            "fr-u5-l3",
            "fr-u5-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u5-l1",
                "fr-u5-l4"
            ]
        },
        "presentation": {
            "explanation": "The structure NE ... QUE (or N' ... QUE) looks like a negative, but semantically it expresses a RESTRICTION meaning 'ONLY' (or 'nothing but'):\n\nNE + [conjugated verb] + QUE + [restricted element]\n\n- Je ne parle QUE français (I ONLY speak French = I don't speak anything other than French).\n- Il n'a QUE dix euros (He ONLY has ten euros).\n- Nous ne mangeons QUE des légumes (We ONLY eat vegetables).\n- Elle n'arrive QU'à huit heures (She ONLY arrives at eight o'clock — notice qu' before vowels!).\n\nVital Contrast with Real Negation:\n1. 'Ne...que' is NOT an absolute negative — the action DOES happen, but only to a limited degree!\n2. Because 'ne...que' is positive in meaning, articles do NOT change to 'de' (e.g., 'J'ai des amis' -> 'Je n'ai QUE des amis', NOT 'que d'amis').\n3. Alternative with 'seulement': 'Je parle seulement français' means the same thing, but 'ne...que' is vastly more common and idiomatic in native French speech.",
            "examples": [
                {
                    "target": "Je n'ai que cinq minutes.",
                    "reading": "zhuh nay kuh san mee-noot",
                    "translation": "I only have five minutes."
                },
                {
                    "target": "Elle ne boit que de l'eau.",
                    "reading": "el nuh bwah kuh duh loh",
                    "translation": "She only drinks water. (articles don't reduce to 'de')"
                },
                {
                    "target": "Nous ne travaillons que le matin.",
                    "reading": "noo nuh trah-vah-yohn kuh luh mah-tan",
                    "translation": "We only work in the morning."
                },
                {
                    "target": "Il n'y a qu'une seule solution.",
                    "reading": "eel nyah koon suhl soh-loo-syohn",
                    "translation": "There is only one single solution."
                },
                {
                    "target": "Le musée n'ouvre qu'à dix heures.",
                    "reading": "luh moo-zay noo-vr kah deez uhr",
                    "translation": "The museum only opens at 10:00 AM."
                }
            ],
            "mnemonics": [
                "NE...QUE = ONLY: 'Ne' starts the limit, 'QUE' points directly to the ONLY thing allowed!",
                "Don't kill the articles: Because 'ne...que' means YES (only this), articles stay intact (un, une, des, du stay alive)!"
            ],
            "culturalNotes": [
                "The famous proverb 'Il n'y a que la vérité qui blesse' (Only the truth hurts) is a classic example of this structure embedded in French cultural wisdom."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Use the restrictive structure 'ne...que' (only) and distinguish it fro » :",
                    "options": [
                        "Je n'ai que cinq minutes.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (25a).",
                        "Cette construction passive alourdit inutilement l'énoncé (25b).",
                        "Cette construction passive alourdit inutilement l'énoncé (25c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u5-l5 :",
                    "options": [
                        "Elle ne boit que de l'eau.",
                        "Cette construction passive alourdit inutilement l'énoncé (25x).",
                        "Cette construction passive alourdit inutilement l'énoncé (25y).",
                        "Cette construction passive alourdit inutilement l'énoncé (25z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u5-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Je n'ai que cinq minutes.",
                        "Cette construction passive alourdit inutilement l'énoncé (25m).",
                        "Cette construction passive alourdit inutilement l'énoncé (25n).",
                        "Cette construction passive alourdit inutilement l'énoncé (25p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u5-l5 (terme attendu : « Je ») :",
                    "acceptedAnswers": [
                        "Je",
                        "je",
                        "Je"
                    ],
                    "explanation": "Le mot exact est « Je »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u6-l1": {
        "id": "fr-u6-l1",
        "unit": "fr-u6",
        "level": "A2",
        "objective": "Apply regular gender (-e) and number (-s) agreement rules to French descriptive adjectives.",
        "prerequisites": [
            "fr-u5-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u5-l5"
            ]
        },
        "presentation": {
            "explanation": "In French, adjectives are chameleons: they must agree in both GENDER (masculine/feminine) and NUMBER (singular/plural) with the noun they modify.\n\n1. Regular Feminine Formation:\n- Add -e to the masculine singular form: un livre vert -> une table verte (/vɛʁ/ -> /vɛʁt/ — notice the final 't' becomes audible!).\n- If the masculine form already ends in unaccented -e, it does NOT change: un homme calme -> une femme calme.\n\n2. Regular Plural Formation:\n- Add -s to the singular form: des livres verts, des tables vertes.\n- If the masculine singular already ends in -s or -x, it is invariable in plural: un film français -> des films français; un homme heureux -> des hommes heureux.",
            "examples": [
                {
                    "target": "La robe verte est élégante.",
                    "reading": "lah rohb vairt ay tay-lay-gahnt",
                    "translation": "The green dress is elegant. (verte / élégante agree in f.s.)"
                },
                {
                    "target": "Les étudiants français sont sérieux.",
                    "reading": "lay zay-too-dyahn frahn-say sohn say-ryoo",
                    "translation": "The French students are serious. (sérieux invariable in pl.)"
                },
                {
                    "target": "Ce sont des chaises confortables.",
                    "reading": "suh sohn day shez kohn-fohr-tahbl",
                    "translation": "These are comfortable chairs. (-e -> -es in pl.)"
                },
                {
                    "target": "Il porte un manteau noir et des chaussures noires.",
                    "reading": "eel pohrt uhn mahn-toh nwahr ay day shoh-soor nwahr",
                    "translation": "He wears a black coat and black shoes."
                },
                {
                    "target": "Elle est très intelligente et dynamique.",
                    "reading": "el ay tray zan-tay-lee-zhahnt ay dee-nah-meek",
                    "translation": "She is very intelligent and energetic."
                }
            ],
            "mnemonics": [
                "Gender adds 'E', Plural adds 'S': Base + E (feminine) + S (plural) = ES (feminine plural)!",
                "Audible Awakening: Adding -e to an adjective often 'wakes up' a previously silent final consonant (vert /vɛʁ/ -> verte /vɛʁt/)!"
            ],
            "culturalNotes": [
                "In fashion and design capital Paris, precision in color and descriptive adjective agreement is an everyday mark of cultural literacy."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Apply regular gender (-e) and number (-s) agreement rules to French de » :",
                    "options": [
                        "La robe verte est élégante.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (26a).",
                        "Cette forme présente une anomalie phonétique en français standard (26b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (26c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u6-l1 :",
                    "options": [
                        "Les étudiants français sont sérieux.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (26x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (26y).",
                        "Cette forme présente une anomalie phonétique en français standard (26z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u6-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "La robe verte est élégante.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (26m).",
                        "La préposition employée ici n'est pas commandée par le verbe (26n).",
                        "Cette forme présente une anomalie phonétique en français standard (26p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u6-l1 (terme attendu : « La ») :",
                    "acceptedAnswers": [
                        "La",
                        "la",
                        "La"
                    ],
                    "explanation": "Le mot exact est « La »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u6-l2": {
        "id": "fr-u6-l2",
        "unit": "fr-u6",
        "level": "A2",
        "objective": "Master irregular adjective morphology in French (beau, nouveau, vieux, blanc, long, bon).",
        "prerequisites": [
            "fr-u6-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u6-l1"
            ]
        },
        "presentation": {
            "explanation": "Several core French adjectives exhibit special irregular stems in the feminine, and have a unique third masculine singular form used exclusively before vowel sounds or silent 'h':\n\n1. The Trio of Triplets (BEAU, NOUVEAU, VIEUX):\n- Masculine Consonant: un BEAU livre, un NOUVEAU film, un VIEUX bâtiment\n- Masculine Vowel/h: un BEL homme, un NOUVEL appartement, un VIEIL ami (the special form prevents vowel hiatus!)\n- Feminine Singular: une BELLE maison, une NOUVELLE voiture, une VIEILLE amie\n- Masculine Plural: de BEAUX livres, de NOUVEAUX films, de VIEUX bâtiments\n- Feminine Plural: de BELLES maisons, de NOUVELLES voitures, de VIEILLES amies\n\n2. Other Common Irregular Feminine Forms:\n- blanc -> blanche (white), franc -> franche (frank)\n- long -> longue (long), frais -> fraîche (fresh)\n- bon -> bonne (good), gros -> grosse (thick/big), gentil -> gentille (kind).",
            "examples": [
                {
                    "target": "C'est un bel appartement dans un vieil immeuble.",
                    "reading": "say tuhn bel ah-pahr-tuh-mahn dahn zohn vyay ee-muhbl",
                    "translation": "It is a beautiful apartment in an old building. (bel / vieil before vowels)"
                },
                {
                    "target": "Elle a acheté une nouvelle voiture blanche.",
                    "reading": "el ah ahsh-tay oon noo-vel vwah-toor blahnsh",
                    "translation": "She bought a new white car. (nouvelle / blanche)"
                },
                {
                    "target": "Voici une très vieille histoire.",
                    "reading": "vwah-see oon tray vyay ees-twahr",
                    "translation": "Here is a very old story."
                },
                {
                    "target": "De beaux arbres entourent le château.",
                    "reading": "duh boh zahrbr ahn-toor luh shah-toh",
                    "translation": "Beautiful trees surround the castle."
                },
                {
                    "target": "Une eau fraîche est très agréable en été.",
                    "reading": "oon oh fresh ay tray zah-gray-ahbl ahn nay-tay",
                    "translation": "Fresh water is very pleasant in summer."
                }
            ],
            "mnemonics": [
                "BEL, NOUVEL, VIEIL: The liquid 'L' rescue squad! Whenever a masculine noun starts with a vowel, the 'L' steps in to make smooth music (un bel ami)!",
                "Beau -> Belle, Nouveau -> Nouvelle, Vieux -> Vieille: Double 'L' rules the feminine trio."
            ],
            "culturalNotes": [
                "Notice that when an adjective precedes a plural noun, the plural article 'des' traditionally becomes 'de' in refined French: 'de beaux arts', 'de grands projets'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Master irregular adjective morphology in French (beau, nouveau, vieux, » :",
                    "options": [
                        "C'est un bel appartement dans un vieil immeuble.",
                        "La préposition employée ici n'est pas commandée par le verbe (27a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (27b).",
                        "Cette construction passive alourdit inutilement l'énoncé (27c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u6-l2 :",
                    "options": [
                        "Elle a acheté une nouvelle voiture blanche.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (27x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (27y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (27z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u6-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "C'est un bel appartement dans un vieil immeuble.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (27m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (27n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (27p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u6-l2 (terme attendu : « Cest ») :",
                    "acceptedAnswers": [
                        "Cest",
                        "cest",
                        "Cest"
                    ],
                    "explanation": "Le mot exact est « Cest »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u6-l3": {
        "id": "fr-u6-l3",
        "unit": "fr-u6",
        "level": "A2",
        "objective": "Position French descriptive adjectives correctly in standard post-nominal position (colors, shapes, nationalities, categories).",
        "prerequisites": [
            "fr-u6-l1",
            "fr-u6-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u6-l2"
            ]
        },
        "presentation": {
            "explanation": "The fundamental baseline rule of French syntax is that adjectives follow the noun (POST-NOMINAL position), unlike in English where adjectives precede the noun:\n\nCategories of Adjectives that MUST Follow the Noun:\n1. Colors: une voiture rouge (a red car), un ciel bleu (a blue sky).\n2. Nationalities & Origins: le vin français (French wine), la cuisine italienne (Italian cooking).\n3. Shapes & Physical States: une table ronde (a round table), un mur froid (a cold wall).\n4. Technical, Scientific, & Political Categories: une décision politique (a political decision), un problème économique (an economic problem).\n5. Past Participles used as adjectives: une porte fermée (a closed door), un livre ouvert (an open book).\n\nNever say 'un rouge livre' or 'la française langue' — in French, you name the thing first, then describe its distinguishing attributes!",
            "examples": [
                {
                    "target": "J'ai acheté une chemise bleue et un pantalon noir.",
                    "reading": "zhay ahsh-tay oon shuh-meez bluh ay uhn pahn-tah-lohn nwahr",
                    "translation": "I bought a blue shirt and black pants. (colors follow)"
                },
                {
                    "target": "Nous aimons la cuisine marocaine.",
                    "reading": "noo zeh-mohn lah kwee-zeen mah-roh-ken",
                    "translation": "We love Moroccan cuisine. (nationality follows)"
                },
                {
                    "target": "Ils discutent d'un projet scientifique complexe.",
                    "reading": "eel dees-koot duhn proh-zhay syahn-tee-feek kohm-pleks",
                    "translation": "They discuss a complex scientific project. (classification follows)"
                },
                {
                    "target": "C'est une table rectangulaire en bois.",
                    "reading": "say toon tahbl rek-tahn-goo-lair ahn bwah",
                    "translation": "It is a rectangular wooden table. (shape follows)"
                },
                {
                    "target": "La porte principale reste fermée le dimanche.",
                    "reading": "lah pohrt pran-see-pahl rest fair-may luh dee-mahnsh",
                    "translation": "The main door remains closed on Sundays."
                }
            ],
            "mnemonics": [
                "Thing FIRST, Detail SECOND: French gives you the noun first so you know what object you're imagining before painting its color or nationality!",
                "Colors and Countries ALWAYS chase the noun from behind (une pomme ROUGE, un café FRANÇAIS)."
            ],
            "culturalNotes": [
                "French gastronomy relies heavily on post-nominal regional adjectives of origin: 'le fromage savoyard', 'le champagne rémois', 'la moutarde dijonnaise'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Position French descriptive adjectives correctly in standard post-nomi » :",
                    "options": [
                        "J'ai acheté une chemise bleue et un pantalon noir.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (28a).",
                        "La préposition employée ici n'est pas commandée par le verbe (28b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (28c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u6-l3 :",
                    "options": [
                        "Nous aimons la cuisine marocaine.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (28x).",
                        "Cette forme présente une anomalie phonétique en français standard (28y).",
                        "La préposition employée ici n'est pas commandée par le verbe (28z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u6-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "J'ai acheté une chemise bleue et un pantalon noir.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (28m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (28n).",
                        "La préposition employée ici n'est pas commandée par le verbe (28p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u6-l3 (terme attendu : « Jai ») :",
                    "acceptedAnswers": [
                        "Jai",
                        "jai",
                        "Jai"
                    ],
                    "explanation": "Le mot exact est « Jai »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u6-l4": {
        "id": "fr-u6-l4",
        "unit": "fr-u6",
        "level": "A2",
        "objective": "Apply the BANGS rule to identify and position the core group of high-frequency pre-nominal French adjectives.",
        "prerequisites": [
            "fr-u6-l1",
            "fr-u6-l2",
            "fr-u6-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u6-l3"
            ]
        },
        "presentation": {
            "explanation": "While most French adjectives follow the noun, a short list of very common, subjective, and frequent adjectives PRECEDES the noun. These are memorized using the famous acronym BANGS:\n\n- B — Beauty: beau / bel / belle (beautiful), joli (pretty)\n  - un beau jardin (a beautiful garden), une jolie fleur (a pretty flower)\n- A — Age: vieux / vieil / vieille (old), jeune (young), nouveau / nouvel / nouvelle (new)\n  - un jeune homme (a young man), une vieille maison (an old house)\n- N — Number & Rank: un, deux, premier (first), deuxième (second), dernier (last)\n  - le premier jour (the first day), la dernière fois (the last time)\n- G — Goodness & Badness: bon / bonne (good), mauvais (bad), gentil (kind), meilleur (better)\n  - une bonne idée (a good idea), un mauvais film (a bad movie)\n- S — Size: grand (tall/big), petit (small), gros (fat/large), long (long), haut (high)\n  - un grand appartement (a large apartment), une petite fille (a little girl)\n\nWhen multiple adjectives describe a noun, a BANGS adjective stays in front while a color/nationality goes behind: 'une JOLIE robe ROUGE' (a pretty red dress)!",
            "examples": [
                {
                    "target": "C'est une très belle maison avec un grand jardin.",
                    "reading": "say toon tray bel may-zohn ah-vek uhn grahn zhahr-dan",
                    "translation": "It is a very beautiful house with a large garden. (Beauty & Size precede)"
                },
                {
                    "target": "J'ai rencontré un jeune homme sympathique.",
                    "reading": "zhay rahn-kohn-tray uhn zhuhn uhm sam-pah-teek",
                    "translation": "I met a friendly young man. (Age precedes, personality follows)"
                },
                {
                    "target": "C'est une bonne idée pour le premier jour.",
                    "reading": "say toon buhn ee-day poor luh pruh-myay zhoor",
                    "translation": "It's a good idea for the first day. (Goodness & Number precede)"
                },
                {
                    "target": "Elle porte une jolie robe rouge.",
                    "reading": "el pohrt oon zhoh-lee rohb roozh",
                    "translation": "She wears a pretty red dress. (Jolie precedes, rouge follows)"
                },
                {
                    "target": "Un petit garçon mange une grosse pomme.",
                    "reading": "uhn puh-tee gahr-sohn mahnzh oon grohs pohm",
                    "translation": "A little boy eats a big apple. (Size precedes)"
                }
            ],
            "mnemonics": [
                "BANGS Rule: Beauty, Age, Number, Goodness, Size go BEFORE the noun like a big BANG!",
                "Short, punchy words cut the line to sit in front (grand, petit, bon, beau)."
            ],
            "culturalNotes": [
                "French literature uses the interplay of pre-nominal BANGS adjectives with evocative post-nominal descriptors to create musical aesthetic rhythm."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Apply the BANGS rule to identify and position the core group of high-f » :",
                    "options": [
                        "C'est une très belle maison avec un grand jardin.",
                        "Cette forme présente une anomalie phonétique en français standard (29a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (29b).",
                        "Cette construction passive alourdit inutilement l'énoncé (29c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u6-l4 :",
                    "options": [
                        "J'ai rencontré un jeune homme sympathique.",
                        "Cette variante relève d'un registre familier inadapté au contexte (29x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (29y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (29z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u6-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "C'est une très belle maison avec un grand jardin.",
                        "Cette variante relève d'un registre familier inadapté au contexte (29m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (29n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (29p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u6-l4 (terme attendu : « Cest ») :",
                    "acceptedAnswers": [
                        "Cest",
                        "cest",
                        "Cest"
                    ],
                    "explanation": "Le mot exact est « Cest »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u6-l5": {
        "id": "fr-u6-l5",
        "unit": "fr-u6",
        "level": "A2",
        "objective": "Distinguish adjectives whose meaning fundamentally shifts depending on whether they precede or follow the noun.",
        "prerequisites": [
            "fr-u6-l1",
            "fr-u6-l2",
            "fr-u6-l3",
            "fr-u6-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u6-l4"
            ]
        },
        "presentation": {
            "explanation": "In French, a remarkable group of adjectives changes meaning dramatically depending on whether you place them BEFORE (figurative / subjective meaning) or AFTER (literal / objective meaning) the noun:\n\n1. GRAND:\n- un grand homme = a GREAT / historic man (figurative before)\n- un homme grand = a TALL man in physical height (literal after)\n\n2. PAUVRE:\n- un pauvre homme = an UNFORTUNATE / pitiable man (sympathy before)\n- un homme pauvre = a PENNILESS / poor man lacking money (economic state after)\n\n3. ANCIEN:\n- mon ancien appartement = my FORMER apartment (previous state before)\n- un bâtiment ancien = an ANCIENT / antique building (historical age after)\n\n4. PROPRE:\n- ma propre chambre = my OWN private room (possession before)\n- une chambre propre = a CLEAN / unsoiled room (hygiene after)\n\n5. CHER:\n- un cher ami = a DEAR / cherished friend (affection before)\n- une montre chère = an EXPENSIVE watch (monetary cost after)\n\nGolden Rule: BEFORE = Emotional, subjective, or figurative. AFTER = Physical, factual, or literal!",
            "examples": [
                {
                    "target": "Napoléon était un grand homme, mais ce n'était pas un homme grand.",
                    "reading": "nah-poh-lay-ohn ay-teh tuhn grahn tuhm, meh suh nay-teh pah zuhn uhm grahn",
                    "translation": "Napoleon was a great man (figurative), but he was not a tall man (physical height)."
                },
                {
                    "target": "Ce pauvre garçon n'a pas de chance, mais il n'est pas un garçon pauvre.",
                    "reading": "suh pohvr gahr-sohn nah pah duh shahns, meh teel nay pah zuhn gahr-sohn pohvr",
                    "translation": "This poor / unfortunate boy has no luck, but he is not a penniless boy."
                },
                {
                    "target": "J'ai visité mon ancienne école dans un quartier ancien.",
                    "reading": "zhay vee-zee-tay mohn nahn-syen nay-kohl dahn zohn kahr-tyay ahn-syan",
                    "translation": "I visited my former school in an ancient neighborhood."
                },
                {
                    "target": "J'ai ma propre voiture et elle est très propre.",
                    "reading": "zhay mah prohpr vwah-toor ay el ay tray prohpr",
                    "translation": "I have my own car (possession) and it is very clean (hygiene)."
                },
                {
                    "target": "C'est un cher ami, mais ses goûts sont trop chers !",
                    "reading": "say tuhn shair ah-mee, meh say goo sohn troh shair",
                    "translation": "He is a dear friend, but his tastes are too expensive!"
                }
            ],
            "mnemonics": [
                "BEFORE = In your HEART (figurative, emotional: my dear friend, my former home, my own room)!",
                "AFTER = Under the RULER (literal, physical: a tall man, a clean floor, an expensive price)!"
            ],
            "culturalNotes": [
                "French writers use this placement flexibility to achieve profound psychological nuance without adding extra qualifying words."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Distinguish adjectives whose meaning fundamentally shifts depending on » :",
                    "options": [
                        "Napoléon était un grand homme, mais ce n'était pas un homme grand.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (30a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (30b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (30c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u6-l5 :",
                    "options": [
                        "Ce pauvre garçon n'a pas de chance, mais il n'est pas un garçon pauvre.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (30x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (30y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (30z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u6-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Napoléon était un grand homme, mais ce n'était pas un homme grand.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (30m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (30n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (30p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u6-l5 (terme attendu : « Napoléon ») :",
                    "acceptedAnswers": [
                        "Napoléon",
                        "napoléon",
                        "Napoléon"
                    ],
                    "explanation": "Le mot exact est « Napoléon »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u7-l1": {
        "id": "fr-u7-l1",
        "unit": "fr-u7",
        "level": "A2",
        "objective": "Form the passé composé with auxiliary AVOIR and regular past participles (-é, -i, -u).",
        "prerequisites": [
            "fr-u6-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u6-l5"
            ]
        },
        "presentation": {
            "explanation": "The Passé Composé is the principal French tense used to express completed events and discrete actions in the past. It is called 'composé' (compound) because it requires TWO elements:\n\n[Subject] + [Auxiliary AVOIR in present] + [Past Participle (Participe Passé)]\n\nRegular Past Participle Endings:\n1. First Group (-er verbs) -> -É: parler -> parlé, manger -> mangé, habiter -> habité (e.g. J'ai parlé français).\n2. Second Group (-ir verbs) -> -I: finir -> fini, choisir -> choisi, réussir -> réussi (e.g. Tu as fini tes devoirs).\n3. Regular Third Group (-re verbs) -> -U: vendre -> vendu, attendre -> attendu, répondre -> répondu (e.g. Il a attendu le bus).\n\nNotice that in standard passé composé with avoir, the past participle does NOT agree with the subject: 'Elle a parlé', 'Ils ont fini', 'Nous avons attendu'.",
            "examples": [
                {
                    "target": "Hier, j'ai mangé dans un bon restaurant.",
                    "reading": "yair, zhay mahn-zhay dahn zohn bohn res-toh-rahn",
                    "translation": "Yesterday, I ate at a good restaurant."
                },
                {
                    "target": "Tu as fini ton projet à temps ?",
                    "reading": "too ah fee-nee tohn proh-zhay ah tahn",
                    "translation": "Did you finish your project on time?"
                },
                {
                    "target": "Nous avons attendu le train pendant trente minutes.",
                    "reading": "noo zah-vohn zah-tahn-doo luh tran pahn-dahn trahnt mee-noot",
                    "translation": "We waited for the train for thirty minutes."
                },
                {
                    "target": "Elle a choisi une très jolie robe.",
                    "reading": "el ah shwah-zee oon tray zhoh-lee rohb",
                    "translation": "She chose a very pretty dress."
                },
                {
                    "target": "Ils ont vendu leur ancienne maison.",
                    "reading": "eel zohn vahn-doo luhr ahn-syen may-zohn",
                    "translation": "They sold their former house."
                }
            ],
            "mnemonics": [
                "The 3-Step Ladder: -ER goes to -É / -IR goes to -I / -RE goes to -U (Parler -> Parlé / Finir -> Fini / Vendre -> Vendu)!",
                "AVOIR is the workhorse: Over 90% of all French verbs use Avoir in the past tense without subject agreement."
            ],
            "culturalNotes": [
                "The Passé Composé completely replaced the literary Passé Simple in spoken and everyday written French starting in the 18th century."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Form the passé composé with auxiliary AVOIR and regular past participl » :",
                    "options": [
                        "Hier, j'ai mangé dans un bon restaurant.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (31a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (31b).",
                        "Cette construction passive alourdit inutilement l'énoncé (31c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u7-l1 :",
                    "options": [
                        "Tu as fini ton projet à temps ?",
                        "L'antériorité temporelle est mal établie par rapport au repère (31x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (31y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (31z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u7-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Hier, j'ai mangé dans un bon restaurant.",
                        "L'antériorité temporelle est mal établie par rapport au repère (31m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (31n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (31p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u7-l1 (terme attendu : « Hier ») :",
                    "acceptedAnswers": [
                        "Hier",
                        "hier",
                        "Hier"
                    ],
                    "explanation": "Le mot exact est « Hier »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u7-l2": {
        "id": "fr-u7-l2",
        "unit": "fr-u7",
        "level": "A2",
        "objective": "Master high-frequency irregular past participles used with auxiliary AVOIR (fait, pris, vu, bu, lu, écrit, mis, ouvert, eu, été).",
        "prerequisites": [
            "fr-u7-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u7-l1"
            ]
        },
        "presentation": {
            "explanation": "Many essential 3rd-group French verbs have irregular past participles that must be memorized in thematic phonetic families:\n\n1. Participles ending in -IS or -IT:\n- prendre -> pris, apprendre -> appris, comprendre -> compris\n- mettre -> mis, permettre -> permis\n- faire -> fait, écrire -> écrit, dire -> dit\n\n2. Participles ending in -ERT:\n- ouvrir -> ouvert, offrir -> offert, découvrir -> découvert\n\n3. Participles ending in -U:\n- voir -> vu, boire -> bu, lire -> lu, savoir -> su, pouvoir -> pu, vouloir -> voulu, devoir -> dû (notice circumflex on dû!), recevoir -> reçu, vivre -> vécu\n\n4. The Big Two Auxiliaries:\n- avoir -> EU (/y/ - spelled eu, pronounced like a single French 'u'!)\n- être -> ÉTÉ (/e.te/ - e.g. J'ai été malade).\n\nExample sentence: 'Hier, j'ai vu un ami, nous avons bu un café, puis j'ai lu le journal et j'ai fait mes devoirs.'",
            "examples": [
                {
                    "target": "Qu'est-ce que tu as fait ce week-end ?",
                    "reading": "kes kuh too ah fay suh wee-kend",
                    "translation": "What did you do this weekend? (faire -> fait)"
                },
                {
                    "target": "J'ai pris le train de huit heures.",
                    "reading": "zhay pree luh tran duh weet uhr",
                    "translation": "I took the 8:00 train. (prendre -> pris)"
                },
                {
                    "target": "Nous avons bu un excellent vin français.",
                    "reading": "noo zah-vohn boo uhn nek-seh-lahn van frahn-say",
                    "translation": "We drank an excellent French wine. (boire -> bu)"
                },
                {
                    "target": "Elle a lu tout le roman en deux jours.",
                    "reading": "el ah loo too luh roh-mahn ahn duh zhoor",
                    "translation": "She read the whole novel in two days. (lire -> lu)"
                },
                {
                    "target": "Il a ouvert la fenêtre.",
                    "reading": "eel ah oo-vair lah fuh-nehtr",
                    "translation": "He opened the window. (ouvrir -> ouvert)"
                },
                {
                    "target": "J'ai eu beaucoup de chance.",
                    "reading": "zhay oo boh-koo duh shahns",
                    "translation": "I had a lot of luck. (avoir -> eu, pronounced /y/)"
                }
            ],
            "mnemonics": [
                "The -U Rhyme Family: Vu, Bu, Lu, Su, Pu, Du, VoulU (Saw, Drank, Read, Knew, Could, Had to, Wanted)!",
                "EU sounds like 'U': 'J'ai eu' is pronounced /ʒe y/ — as simple as the vowel 'u'!"
            ],
            "culturalNotes": [
                "The circumflex accent on 'dû' (past participle of devoir) exists in the masculine singular to distinguish it from the contracted article 'du' (de + le)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Master high-frequency irregular past participles used with auxiliary A » :",
                    "options": [
                        "Qu'est-ce que tu as fait ce week-end ?",
                        "La préposition employée ici n'est pas commandée par le verbe (32a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (32b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (32c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u7-l2 :",
                    "options": [
                        "J'ai pris le train de huit heures.",
                        "La préposition employée ici n'est pas commandée par le verbe (32x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (32y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (32z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u7-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Qu'est-ce que tu as fait ce week-end ?",
                        "La préposition employée ici n'est pas commandée par le verbe (32m).",
                        "Cette forme présente une anomalie phonétique en français standard (32n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (32p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u7-l2 (terme attendu : « Questce ») :",
                    "acceptedAnswers": [
                        "Questce",
                        "questce",
                        "Questce"
                    ],
                    "explanation": "Le mot exact est « Questce »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u7-l3": {
        "id": "fr-u7-l3",
        "unit": "fr-u7",
        "level": "A2",
        "objective": "Identify the 17 verbs of movement and change of state that take auxiliary ÊTRE using the DR & MRS VANDERTRAMP mnemonic.",
        "prerequisites": [
            "fr-u7-l1",
            "fr-u7-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u7-l2"
            ]
        },
        "presentation": {
            "explanation": "While most French verbs take AVOIR, approximately 17 common intransitive verbs of movement and change of state take the auxiliary ÊTRE in the passé composé. These verbs are universally memorized with the famous acronym DR & MRS VANDERTRAMP:\n\n- D — Devenir (devenu - to become)\n- R — Revenir (revenu - to come back)\n- & \n- M — Monter (monté - to go up)\n- R — Rester (resté - to stay/remain)\n- S — Sortir (sorti - to go out)\n- V — Venir (venu - to come)\n- A — Aller (allé - to go)\n- N — Naître (né - to be born)\n- D — Descendre (descendu - to go down)\n- E — Entrer (entré - to enter)\n- R — Rentrer (rentré - to return home)\n- T — Tomber (tombé - to fall)\n- R — Retourner (retourné - to return)\n- A — Arriver (arrivé - to arrive)\n- M — Mourir (mort - to die)\n- P — Partir (parti - to leave)\n\nCrucial Rule of Être: Whenever Être is the auxiliary, the past participle MUST AGREE in gender (-e) and number (-s) with the subject!",
            "examples": [
                {
                    "target": "Elle est allée à Paris.",
                    "reading": "el ay tah-lay ah pah-ree",
                    "translation": "She went to Paris. (aller takes être; allée adds -e for feminine subject)"
                },
                {
                    "target": "Ils sont arrivés à l'heure.",
                    "reading": "eel sohn tah-ree-vay ah luhr",
                    "translation": "They arrived on time. (arrivés adds -s for plural subject)"
                },
                {
                    "target": "Marie est née en 1995.",
                    "reading": "mah-ree ay nay ahn meel nuhf sahnt kahr-vahn-kanz",
                    "translation": "Marie was born in 1995. (naître -> née)"
                },
                {
                    "target": "Nous sommes partis tôt ce matin.",
                    "reading": "noo suhm pahr-tee toh suh mah-tan",
                    "translation": "We left early this morning. (partir -> partis)"
                },
                {
                    "target": "Il est mort à l'âge de quatre-vingts ans.",
                    "reading": "eel ay mohr ah lahzh duh kahtr-van zahn",
                    "translation": "He died at the age of eighty. (mourir -> mort)"
                }
            ],
            "mnemonics": [
                "DR & MRS VANDERTRAMP: Imagine a globe-trotting lady who travels up, down, in, out, arrives, departs, is born and stays!",
                "The House of Être (La Maison d'Être): All verbs describe entering, leaving, arriving, or remaining in life's journey."
            ],
            "culturalNotes": [
                "French children memorize DR MRS VANDERTRAMP or 'La Maison d'Être' in primary school; it is the definitive gateway to grammatical agreement."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Identify the 17 verbs of movement and change of state that take auxili » :",
                    "options": [
                        "Elle est allée à Paris.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (33a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (33b).",
                        "Cette construction passive alourdit inutilement l'énoncé (33c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u7-l3 :",
                    "options": [
                        "Ils sont arrivés à l'heure.",
                        "Cette proposition modifie subtilement le sens originel du verbe (33x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (33y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (33z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u7-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Elle est allée à Paris.",
                        "Cette proposition modifie subtilement le sens originel du verbe (33m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (33n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (33p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u7-l3 (terme attendu : « Elle ») :",
                    "acceptedAnswers": [
                        "Elle",
                        "elle",
                        "Elle"
                    ],
                    "explanation": "Le mot exact est « Elle »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u7-l4": {
        "id": "fr-u7-l4",
        "unit": "fr-u7",
        "level": "A2",
        "objective": "Apply subject agreement rules with auxiliary être and reflexive verbs in the passé composé.",
        "prerequisites": [
            "fr-u7-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u7-l3"
            ]
        },
        "presentation": {
            "explanation": "ALL pronominal (reflexive) verbs in French conjugate with auxiliary ÊTRE in the passé composé:\n\n- se lever -> je me suis levé(e), tu t'es levé(e), il s'est levé, elle s'est levée, nous nous sommes levé(e)s, vous vous êtes levé(e)(s), ils se sont levés, elles se sont levées.\n- se coucher -> elle s'est couchée tard (she went to bed late).\n- s'habiller -> ils se sont habillés (they got dressed).\n\nAgreement Rules with Reflexives:\n1. When the reflexive pronoun is the direct object (the action is done to oneself), the past participle agrees with the reflexive pronoun / subject: 'Elle s'est lavée' (She washed herself -> f.s. agreement).\n2. EXCEPTION: When a direct object follows the verb, the reflexive pronoun is indirect, so NO agreement is made: 'Elle s'est lavé les mains' (She washed her hands -> 'les mains' is direct object after verb, so 'lavé' does not add -e!).",
            "examples": [
                {
                    "target": "Elle s'est réveillée à sept heures.",
                    "reading": "el say ray-vay-yay ah set uhr",
                    "translation": "She woke up at 7:00. (agreement with reflexive subject)"
                },
                {
                    "target": "Nous nous sommes promenés dans le parc.",
                    "reading": "noo noo suhm prohm-nay dahn luh pahrk",
                    "translation": "We took a walk in the park."
                },
                {
                    "target": "Elle s'est lavé les mains avant le repas.",
                    "reading": "el say lah-vay lay man ah-vahn luh ruh-pah",
                    "translation": "She washed her hands before the meal. (no agreement: direct object follows)"
                },
                {
                    "target": "Ils se sont rencontrés à l'université.",
                    "reading": "eel suh sohn rahn-kohn-tray ah loo-nee-vair-see-tay",
                    "translation": "They met each other at the university."
                },
                {
                    "target": "Je me suis couché très tard hier soir.",
                    "reading": "zhuh muh swee koo-shay tray tahr yair swahr",
                    "translation": "I went to bed very late last night."
                }
            ],
            "mnemonics": [
                "Reflexive = Mirror with Être: Reflexive verbs always look into the Être mirror!",
                "Hands-Off Exception: If you name the body part AFTER the verb (les mains, les cheveux), keep your hands off the participle (no agreement)!"
            ],
            "culturalNotes": [
                "The subtle direct vs. indirect reflexive agreement rule ('Elle s'est lavée' vs. 'Elle s'est lavé les mains') is one of the classic test questions on French national dictations (la dictée)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Apply subject agreement rules with auxiliary être and reflexive verbs  » :",
                    "options": [
                        "Elle s'est réveillée à sept heures.",
                        "Cette forme présente une anomalie phonétique en français standard (34a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (34b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (34c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u7-l4 :",
                    "options": [
                        "Nous nous sommes promenés dans le parc.",
                        "Cette forme présente une anomalie phonétique en français standard (34x).",
                        "La préposition employée ici n'est pas commandée par le verbe (34y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (34z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u7-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Elle s'est réveillée à sept heures.",
                        "Cette forme présente une anomalie phonétique en français standard (34m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (34n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (34p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u7-l4 (terme attendu : « Elle ») :",
                    "acceptedAnswers": [
                        "Elle",
                        "elle",
                        "Elle"
                    ],
                    "explanation": "Le mot exact est « Elle »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u7-l5": {
        "id": "fr-u7-l5",
        "unit": "fr-u7",
        "level": "A2",
        "objective": "Place negative frames (ne...pas, ne...jamais, ne...rien) accurately around auxiliary verbs in compound past tenses.",
        "prerequisites": [
            "fr-u7-l1",
            "fr-u7-l2",
            "fr-u7-l3",
            "fr-u7-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u7-l4"
            ]
        },
        "presentation": {
            "explanation": "In compound tenses like the Passé Composé, negative frames wrap around the AUXILIARY VERB, not the past participle:\n\n[Subject] + NE + [Auxiliary] + PAS / JAMAIS / PLUS / RIEN + [Past Participle]\n\n- Je n'ai PAS compris (I did not understand).\n- Il n'a JAMAIS vu ce film (He has never seen this movie).\n- Nous ne sommes PLUS retournés là-bas (We no longer returned there).\n- Je n'ai RIEN fait (I did nothing / I didn't do anything).\n\nTHE SOLE EXCEPTION: 'PERSONNE'\nBecause 'personne' is a full pronoun object, it is placed AFTER the past participle at the end of the sentence:\n- Je n'ai vu PERSONNE (I saw nobody — NOT 'Je n'ai personne vu')!\n- Elle n'a parlé à personne (She spoke to no one).",
            "examples": [
                {
                    "target": "Je n'ai pas compris la question.",
                    "reading": "zhuh nay pah kohm-pree lah kes-tyohn",
                    "translation": "I did not understand the question. (ne...pas wraps auxiliary 'ai')"
                },
                {
                    "target": "Nous n'avons rien acheté au marché.",
                    "reading": "noo nah-vohn ryan ahsh-tay oh mahr-shay",
                    "translation": "We bought nothing at the market. (rien precedes participle)"
                },
                {
                    "target": "Elle n'est jamais allée au Japon.",
                    "reading": "el nay zhah-meh zah-lay oh zhah-pohn",
                    "translation": "She has never been to Japan. (jamais wraps auxiliary 'est')"
                },
                {
                    "target": "Je n'ai vu personne dans la rue.",
                    "reading": "zhuh nay voo pair-suhn dahn lah roo",
                    "translation": "I saw nobody in the street. (personne follows participle)"
                },
                {
                    "target": "Il ne s'est pas réveillé à l'heure.",
                    "reading": "eel nuh say pah ray-vay-yay ah luhr",
                    "translation": "He did not wake up on time. (ne...pas wraps reflexive 's'est')"
                }
            ],
            "mnemonics": [
                "Wrap the Helper: Negatives hug the AUXILIARY (helper verb), leaving the participle on the outside!",
                "Personne is Lonely at the End: 'Personne' stands all alone at the very end of the past sentence (n'ai vu personne)!"
            ],
            "culturalNotes": [
                "French conversational speed often compresses 'Je n'ai pas' into 'J'ai pas' (/ʒe.pa/), but the word order around the auxiliary remains identical."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Place negative frames (ne...pas, ne...jamais, ne...rien) accurately ar » :",
                    "options": [
                        "Je n'ai pas compris la question.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (35a).",
                        "Cette construction passive alourdit inutilement l'énoncé (35b).",
                        "Cette construction passive alourdit inutilement l'énoncé (35c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u7-l5 :",
                    "options": [
                        "Nous n'avons rien acheté au marché.",
                        "Cette construction passive alourdit inutilement l'énoncé (35x).",
                        "Cette construction passive alourdit inutilement l'énoncé (35y).",
                        "Cette construction passive alourdit inutilement l'énoncé (35z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u7-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Je n'ai pas compris la question.",
                        "Cette construction passive alourdit inutilement l'énoncé (35m).",
                        "Cette construction passive alourdit inutilement l'énoncé (35n).",
                        "Cette construction passive alourdit inutilement l'énoncé (35p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u7-l5 (terme attendu : « Je ») :",
                    "acceptedAnswers": [
                        "Je",
                        "je",
                        "Je"
                    ],
                    "explanation": "Le mot exact est « Je »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u8-l1": {
        "id": "fr-u8-l1",
        "unit": "fr-u8",
        "level": "A2",
        "objective": "Form the imperfect tense (l'imparfait) by taking the present tense 'nous' stem and adding standard endings (-ais, -ais, -ait, -ions, -iez, -aient).",
        "prerequisites": [
            "fr-u7-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u7-l5"
            ]
        },
        "presentation": {
            "explanation": "L'Imparfait is formed by taking the present tense conjugation of NOUS, dropping the -ons ending to isolate the radical (stem), and adding the universal imperfect endings:\n- je: -ais (/ɛ/)\n- tu: -ais (/ɛ/)\n- il / elle / on: -ait (/ɛ/)\n- nous: -ions (/jɔ̃/)\n- vous: -iez (/je/)\n- ils / elles: -aient (/ɛ/)\n\nCrucial Phonetic Insight: The endings for je, tu, il, and ils are all pronounced identically: /ɛ/! Only nous (-ions) and vous (-iez) sound distinct.",
            "examples": [
                {
                    "target": "Quand j'étais jeune, je parlais souvent avec mes grands-parents.",
                    "reading": "kahn zhay-teh zhuhn, zhuh pahr-leh soo-vahn ah-vek may grahn-pah-rahn",
                    "translation": "When I was young, I often spoke with my grandparents."
                },
                {
                    "target": "Nous finissions nos devoirs avant le dîner.",
                    "reading": "noo fee-nee-syohn noh duh-vwahr ah-vahn luh dee-nay",
                    "translation": "We used to finish our homework before dinner."
                },
                {
                    "target": "Tu prenais toujours le bus de sept heures.",
                    "reading": "too pruh-neh too-zhoor luh boos duh set uhr",
                    "translation": "You always took the 7:00 bus."
                },
                {
                    "target": "Il faisait très beau pendant les vacances.",
                    "reading": "eel fuh-zeh tray boh pahn-dahn lay vah-kahns",
                    "translation": "The weather was very nice during the holidays."
                },
                {
                    "target": "Elles habitaient dans un grand appartement.",
                    "reading": "el zah-bee-teh dahn zohn grahn zah-pahr-tuh-mahn",
                    "translation": "They used to live in a big apartment."
                }
            ],
            "mnemonics": [
                "The 'AIS' Rhyme: Je, Tu, Il, Ils all rhyme on /ɛ/ (-ais, -ais, -ait, -aient)!",
                "Always Start with NOUS: Drop -ons from the 'nous' form to unlock the imperfect stem of 99% of French verbs!"
            ],
            "culturalNotes": [
                "The classic French storytelling opening 'Il était une fois...' (Once upon a time...) uses the imparfait of être to set the background scene."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Form the imperfect tense (l'imparfait) by taking the present tense 'no » :",
                    "options": [
                        "Quand j'étais jeune, je parlais souvent avec mes grands-parents.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (36a).",
                        "Cette forme présente une anomalie phonétique en français standard (36b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (36c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u8-l1 :",
                    "options": [
                        "Nous finissions nos devoirs avant le dîner.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (36x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (36y).",
                        "Cette forme présente une anomalie phonétique en français standard (36z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u8-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Quand j'étais jeune, je parlais souvent avec mes grands-parents.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (36m).",
                        "La préposition employée ici n'est pas commandée par le verbe (36n).",
                        "Cette forme présente une anomalie phonétique en français standard (36p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u8-l1 (terme attendu : « Quand ») :",
                    "acceptedAnswers": [
                        "Quand",
                        "quand",
                        "Quand"
                    ],
                    "explanation": "Le mot exact est « Quand »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u8-l2": {
        "id": "fr-u8-l2",
        "unit": "fr-u8",
        "level": "A2",
        "objective": "Conjugate the sole irregular stem verb in l'imparfait: ÊTRE (j'étais, tu étais, il était, nous étions, vous étiez, ils étaient).",
        "prerequisites": [
            "fr-u8-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u8-l1"
            ]
        },
        "presentation": {
            "explanation": "In all of French grammar, there is exactly ONE verb with an irregular stem in l'imparfait: the verb ÊTRE!\n\nBecause the present form 'nous sommes' does not end in -ons, ÊTRE adopts the unique stem ÉT- (with an acute accent):\n- j'étais (/ʒe.tɛ/ - I was / used to be)\n- tu étais (/ty e.tɛ/)\n- il / elle / on était (/i.le.tɛ/ with liaison)\n- nous étions (/nu.ze.tjɔ̃/ with liaison)\n- vous étiez (/vu.ze.tje/ with liaison)\n- ils / elles étaient (/il.ze.tɛ/ with liaison)\n\nEvery other verb in the French language follows the standard 'nous' stem rule without exception!",
            "examples": [
                {
                    "target": "Quand j'étais petit, j'aimais les animaux.",
                    "reading": "kahn zhay-teh puh-tee, zheh-meh lay zah-nee-moh",
                    "translation": "When I was little, I loved animals."
                },
                {
                    "target": "Elle était très heureuse d'apprendre la nouvelle.",
                    "reading": "el ay-teh tray zuh-ruhz dah-prahndr lah noo-vel",
                    "translation": "She was very happy to hear the news."
                },
                {
                    "target": "Nous étions en vacances au bord de la mer.",
                    "reading": "noo zay-tyohn zahn vah-kahns oh bohr duh lah mair",
                    "translation": "We were on vacation by the sea."
                },
                {
                    "target": "Vous étiez là hier soir ?",
                    "reading": "voo zay-tyay lah yair swahr",
                    "translation": "Were you there last night?"
                },
                {
                    "target": "Ils étaient toujours prêts à aider.",
                    "reading": "eel zay-teh too-zhoor preh zah ay-day",
                    "translation": "They were always ready to help."
                }
            ],
            "mnemonics": [
                "ÉT- is the unique King of Imparfait: Only Être gets the ÉT- crown (j'étais)!",
                "Remember the classic opening: 'Quand j'étais petit...' (When I was young...)."
            ],
            "culturalNotes": [
                "In French nostalgia culture (la nostalgie), conversations about youth invariably begin with 'À l'époque où nous étions jeunes...' (Back when we were young...)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Conjugate the sole irregular stem verb in l'imparfait: ÊTRE (j'étais,  » :",
                    "options": [
                        "Quand j'étais petit, j'aimais les animaux.",
                        "La préposition employée ici n'est pas commandée par le verbe (37a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (37b).",
                        "Cette construction passive alourdit inutilement l'énoncé (37c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u8-l2 :",
                    "options": [
                        "Elle était très heureuse d'apprendre la nouvelle.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (37x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (37y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (37z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u8-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Quand j'étais petit, j'aimais les animaux.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (37m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (37n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (37p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u8-l2 (terme attendu : « Quand ») :",
                    "acceptedAnswers": [
                        "Quand",
                        "quand",
                        "Quand"
                    ],
                    "explanation": "Le mot exact est « Quand »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u9-l1": {
        "id": "fr-u9-l1",
        "unit": "fr-u9",
        "level": "A2",
        "objective": "Contrast passé composé (completed foreground action) vs imparfait (continuous background setting) in narrative.",
        "prerequisites": [
            "fr-u8-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Passé Composé vs Imparfait : Règle Fondamentale. In French grammar, mastering passé composé vs imparfait : règle fondamentale is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Passé Composé vs Imparfait : Règle Fondamentale"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Passé Composé vs Imparfait : Règle Fondamentale in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Contrast passé composé (completed foreground action) vs imparfait (con » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (38a).",
                        "La préposition employée ici n'est pas commandée par le verbe (38b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (38c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u9-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (38x).",
                        "Cette forme présente une anomalie phonétique en français standard (38y).",
                        "La préposition employée ici n'est pas commandée par le verbe (38z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u9-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (38m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (38n).",
                        "La préposition employée ici n'est pas commandée par le verbe (38p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u9-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u9-l2": {
        "id": "fr-u9-l2",
        "unit": "fr-u9",
        "level": "A2",
        "objective": "Identify temporal trigger adverbs separating punctiliar events (soudain, hier) from habitual states (toujours, d'habitude).",
        "prerequisites": [
            "fr-u9-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Les Marqueurs Temporels Révélateurs. In French grammar, mastering les marqueurs temporels révélateurs is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Les Marqueurs Temporels Révélateurs"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Les Marqueurs Temporels Révélateurs in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Identify temporal trigger adverbs separating punctiliar events (soudai » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (39a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (39b).",
                        "Cette construction passive alourdit inutilement l'énoncé (39c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u9-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette variante relève d'un registre familier inadapté au contexte (39x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (39y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (39z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u9-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette variante relève d'un registre familier inadapté au contexte (39m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (39n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (39p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u9-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u9-l3": {
        "id": "fr-u9-l3",
        "unit": "fr-u9",
        "level": "A2",
        "objective": "Narrate changes of state and sudden psychological shifts (avoir peur vs. prendre peur; savoir vs. apprendre).",
        "prerequisites": [
            "fr-u9-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Changement d'État et Déclencheurs Psychologiques. In French grammar, mastering changement d'état et déclencheurs psychologiques is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Changement d'État et Déclencheurs Psychologiques"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Changement d'État et Déclencheurs Psychologiques in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Narrate changes of state and sudden psychological shifts (avoir peur v » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (40a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (40b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (40c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u9-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (40x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (40y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (40z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u9-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (40m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (40n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (40p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u9-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u9-l4": {
        "id": "fr-u9-l4",
        "unit": "fr-u9",
        "level": "A2",
        "objective": "Structure multi-paragraph historical and autobiographical narrative texts with balanced past aspect.",
        "prerequisites": [
            "fr-u9-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of La Structure du Récit Autobiographique. In French grammar, mastering la structure du récit autobiographique is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for La Structure du Récit Autobiographique"
            ],
            "culturalNotes": [
                "Cultural and conversational context for La Structure du Récit Autobiographique in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Structure multi-paragraph historical and autobiographical narrative te » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (41a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (41b).",
                        "Cette construction passive alourdit inutilement l'énoncé (41c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u9-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'antériorité temporelle est mal établie par rapport au repère (41x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (41y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (41z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u9-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'antériorité temporelle est mal établie par rapport au repère (41m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (41n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (41p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u9-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u9-l5": {
        "id": "fr-u9-l5",
        "unit": "fr-u9",
        "level": "A2",
        "objective": "Synthesize past tenses in a complete creative short story with dialogue and setting.",
        "prerequisites": [
            "fr-u9-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Synthèse Narrative : Le Conte et la Nouvelle. In French grammar, mastering synthèse narrative : le conte et la nouvelle is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Synthèse Narrative : Le Conte et la Nouvelle"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Synthèse Narrative : Le Conte et la Nouvelle in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Synthesize past tenses in a complete creative short story with dialogu » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (42a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (42b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (42c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u9-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "La préposition employée ici n'est pas commandée par le verbe (42x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (42y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (42z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u9-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (42m).",
                        "Cette forme présente une anomalie phonétique en français standard (42n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (42p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u9-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u10-l1": {
        "id": "fr-u10-l1",
        "unit": "fr-u10",
        "level": "A2",
        "objective": "Express immediate future and planned intentions with futur proche (aller + infinitif).",
        "prerequisites": [
            "fr-u9-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Le Futur Proche : Intentions et Événements Imminents. In French grammar, mastering le futur proche : intentions et événements imminents is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Le Futur Proche : Intentions et Événements Imminents"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Le Futur Proche : Intentions et Événements Imminents in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Express immediate future and planned intentions with futur proche (all » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (43a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (43b).",
                        "Cette construction passive alourdit inutilement l'énoncé (43c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u10-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette proposition modifie subtilement le sens originel du verbe (43x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (43y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (43z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u10-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette proposition modifie subtilement le sens originel du verbe (43m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (43n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (43p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u10-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u10-l2": {
        "id": "fr-u10-l2",
        "unit": "fr-u10",
        "level": "A2",
        "objective": "Form the futur simple for regular verbs using the infinitive stem and endings (-ai, -as, -a, -ons, -ez, -ont).",
        "prerequisites": [
            "fr-u10-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Formation Régulière du Futur Simple. In French grammar, mastering formation régulière du futur simple is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Formation Régulière du Futur Simple"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Formation Régulière du Futur Simple in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Form the futur simple for regular verbs using the infinitive stem and  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (44a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (44b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (44c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u10-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette forme présente une anomalie phonétique en français standard (44x).",
                        "La préposition employée ici n'est pas commandée par le verbe (44y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (44z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u10-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (44m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (44n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (44p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u10-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u10-l3": {
        "id": "fr-u10-l3",
        "unit": "fr-u10",
        "level": "A2",
        "objective": "Master high-frequency irregular future stems (ser-, aur-, fer-, ir-, saur-, pourr-, voudr-, viendr-).",
        "prerequisites": [
            "fr-u10-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Les Radicaux Irréguliers Essentiels du Futur Simple. In French grammar, mastering les radicaux irréguliers essentiels du futur simple is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Les Radicaux Irréguliers Essentiels du Futur Simple"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Les Radicaux Irréguliers Essentiels du Futur Simple in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Master high-frequency irregular future stems (ser-, aur-, fer-, ir-, s » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (45a).",
                        "Cette construction passive alourdit inutilement l'énoncé (45b).",
                        "Cette construction passive alourdit inutilement l'énoncé (45c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u10-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette construction passive alourdit inutilement l'énoncé (45x).",
                        "Cette construction passive alourdit inutilement l'énoncé (45y).",
                        "Cette construction passive alourdit inutilement l'énoncé (45z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u10-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette construction passive alourdit inutilement l'énoncé (45m).",
                        "Cette construction passive alourdit inutilement l'énoncé (45n).",
                        "Cette construction passive alourdit inutilement l'énoncé (45p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u10-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u10-l4": {
        "id": "fr-u10-l4",
        "unit": "fr-u10",
        "level": "A2",
        "objective": "Use future temporal conjunctions requiring future simple in French (quand, lorsque, dès que, aussitôt que).",
        "prerequisites": [
            "fr-u10-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Les Conjonctions Temporelles du Futur (Quand, Dès que). In French grammar, mastering les conjonctions temporelles du futur (quand, dès que) is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Les Conjonctions Temporelles du Futur (Quand, Dès que)"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Les Conjonctions Temporelles du Futur (Quand, Dès que) in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Use future temporal conjunctions requiring future simple in French (qu » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (46a).",
                        "Cette forme présente une anomalie phonétique en français standard (46b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (46c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u10-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (46x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (46y).",
                        "Cette forme présente une anomalie phonétique en français standard (46z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u10-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (46m).",
                        "La préposition employée ici n'est pas commandée par le verbe (46n).",
                        "Cette forme présente une anomalie phonétique en français standard (46p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u10-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u10-l5": {
        "id": "fr-u10-l5",
        "unit": "fr-u10",
        "level": "A2",
        "objective": "Synthesize future projections, long-term personal resolutions, and career plans.",
        "prerequisites": [
            "fr-u10-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Projets d'Avenir et Résolutions Professionnelles. In French grammar, mastering projets d'avenir et résolutions professionnelles is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Projets d'Avenir et Résolutions Professionnelles"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Projets d'Avenir et Résolutions Professionnelles in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Synthesize future projections, long-term personal resolutions, and car » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (47a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (47b).",
                        "Cette construction passive alourdit inutilement l'énoncé (47c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u10-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (47x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (47y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (47z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u10-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (47m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (47n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (47p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u10-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u11-l1": {
        "id": "fr-u11-l1",
        "unit": "fr-u11",
        "level": "B1",
        "objective": "Identify and place direct object pronouns (COD: me, te, le, la, nous, vous, les) before the conjugated verb.",
        "prerequisites": [
            "fr-u10-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Les Pronoms Compléments d'Objet Direct (COD). In French grammar, mastering les pronoms compléments d'objet direct (cod) is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Les Pronoms Compléments d'Objet Direct (COD)"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Les Pronoms Compléments d'Objet Direct (COD) in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Identify and place direct object pronouns (COD: me, te, le, la, nous,  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (48a).",
                        "La préposition employée ici n'est pas commandée par le verbe (48b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (48c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u11-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (48x).",
                        "Cette forme présente une anomalie phonétique en français standard (48y).",
                        "La préposition employée ici n'est pas commandée par le verbe (48z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u11-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (48m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (48n).",
                        "La préposition employée ici n'est pas commandée par le verbe (48p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u11-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u11-l2": {
        "id": "fr-u11-l2",
        "unit": "fr-u11",
        "level": "B1",
        "objective": "Identify and place indirect object pronouns (COI: me, te, lui, nous, vous, leur) replacing 'à + personne'.",
        "prerequisites": [
            "fr-u11-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Les Pronoms Compléments d'Objet Indirect (COI). In French grammar, mastering les pronoms compléments d'objet indirect (coi) is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Les Pronoms Compléments d'Objet Indirect (COI)"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Les Pronoms Compléments d'Objet Indirect (COI) in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Identify and place indirect object pronouns (COI: me, te, lui, nous, v » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (49a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (49b).",
                        "Cette construction passive alourdit inutilement l'énoncé (49c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u11-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette variante relève d'un registre familier inadapté au contexte (49x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (49y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (49z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u11-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette variante relève d'un registre familier inadapté au contexte (49m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (49n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (49p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u11-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u11-l3": {
        "id": "fr-u11-l3",
        "unit": "fr-u11",
        "level": "B1",
        "objective": "Apply the obligatory past participle agreement rule when a COD precedes auxiliary 'avoir' in passé composé.",
        "prerequisites": [
            "fr-u11-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of L'Accord du Participe Passé avec le COD Précédent. In French grammar, mastering l'accord du participe passé avec le cod précédent is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for L'Accord du Participe Passé avec le COD Précédent"
            ],
            "culturalNotes": [
                "Cultural and conversational context for L'Accord du Participe Passé avec le COD Précédent in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Apply the obligatory past participle agreement rule when a COD precede » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (50a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (50b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (50c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u11-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (50x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (50y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (50z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u11-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (50m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (50n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (50p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u11-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u11-l4": {
        "id": "fr-u11-l4",
        "unit": "fr-u11",
        "level": "B1",
        "objective": "Position double object pronouns (COD + COI) in correct hierarchical order before verbs.",
        "prerequisites": [
            "fr-u11-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of L'Ordre des Doubles Pronoms Compléments. In French grammar, mastering l'ordre des doubles pronoms compléments is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for L'Ordre des Doubles Pronoms Compléments"
            ],
            "culturalNotes": [
                "Cultural and conversational context for L'Ordre des Doubles Pronoms Compléments in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Position double object pronouns (COD + COI) in correct hierarchical or » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (51a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (51b).",
                        "Cette construction passive alourdit inutilement l'énoncé (51c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u11-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'antériorité temporelle est mal établie par rapport au repère (51x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (51y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (51z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u11-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'antériorité temporelle est mal établie par rapport au repère (51m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (51n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (51p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u11-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u11-l5": {
        "id": "fr-u11-l5",
        "unit": "fr-u11",
        "level": "B1",
        "objective": "Position object pronouns correctly with affirmative and negative imperative commands (Donne-le-moi ! Ne me le donne pas !).",
        "prerequisites": [
            "fr-u11-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Les Pronoms avec l'Impératif Affirmatif et Négatif. In French grammar, mastering les pronoms avec l'impératif affirmatif et négatif is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Les Pronoms avec l'Impératif Affirmatif et Négatif"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Les Pronoms avec l'Impératif Affirmatif et Négatif in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Position object pronouns correctly with affirmative and negative imper » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (52a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (52b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (52c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u11-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "La préposition employée ici n'est pas commandée par le verbe (52x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (52y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (52z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u11-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (52m).",
                        "Cette forme présente une anomalie phonétique en français standard (52n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (52p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u11-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u12-l1": {
        "id": "fr-u12-l1",
        "unit": "fr-u12",
        "level": "B1",
        "objective": "Replace spatial destinations and 'à + noun' concepts with the adverbial pronoun Y.",
        "prerequisites": [
            "fr-u11-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Le Pronom Adverbial Y (Lieu et Complément de À). In French grammar, mastering le pronom adverbial y (lieu et complément de à) is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Le Pronom Adverbial Y (Lieu et Complément de À)"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Le Pronom Adverbial Y (Lieu et Complément de À) in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Replace spatial destinations and 'à + noun' concepts with the adverbia » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (53a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (53b).",
                        "Cette construction passive alourdit inutilement l'énoncé (53c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u12-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette proposition modifie subtilement le sens originel du verbe (53x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (53y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (53z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u12-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette proposition modifie subtilement le sens originel du verbe (53m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (53n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (53p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u12-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u12-l2": {
        "id": "fr-u12-l2",
        "unit": "fr-u12",
        "level": "B1",
        "objective": "Replace quantities, partitives, and 'de + noun' concepts with the adverbial pronoun EN.",
        "prerequisites": [
            "fr-u12-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Le Pronom Adverbial EN (Quantité et Complément de DE). In French grammar, mastering le pronom adverbial en (quantité et complément de de) is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Le Pronom Adverbial EN (Quantité et Complément de DE)"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Le Pronom Adverbial EN (Quantité et Complément de DE) in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Replace quantities, partitives, and 'de + noun' concepts with the adve » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (54a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (54b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (54c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u12-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette forme présente une anomalie phonétique en français standard (54x).",
                        "La préposition employée ici n'est pas commandée par le verbe (54y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (54z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u12-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (54m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (54n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (54p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u12-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u12-l3": {
        "id": "fr-u12-l3",
        "unit": "fr-u12",
        "level": "B1",
        "objective": "Use Y and EN with affirmative and negative imperative structures (Vas-y ! N'y va pas ! Manges-en !).",
        "prerequisites": [
            "fr-u12-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Les Pronoms Y et EN à l'Impératif. In French grammar, mastering les pronoms y et en à l'impératif is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Les Pronoms Y et EN à l'Impératif"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Les Pronoms Y et EN à l'Impératif in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Use Y and EN with affirmative and negative imperative structures (Vas- » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (55a).",
                        "Cette construction passive alourdit inutilement l'énoncé (55b).",
                        "Cette construction passive alourdit inutilement l'énoncé (55c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u12-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette construction passive alourdit inutilement l'énoncé (55x).",
                        "Cette construction passive alourdit inutilement l'énoncé (55y).",
                        "Cette construction passive alourdit inutilement l'énoncé (55z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u12-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette construction passive alourdit inutilement l'énoncé (55m).",
                        "Cette construction passive alourdit inutilement l'énoncé (55n).",
                        "Cette construction passive alourdit inutilement l'énoncé (55p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u12-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u12-l4": {
        "id": "fr-u12-l4",
        "unit": "fr-u12",
        "level": "B1",
        "objective": "Integrate Y and EN into the complete multi-pronoun clitic hierarchy (me/te/se/nous/vous -> le/la/les -> lui/leur -> y -> en).",
        "prerequisites": [
            "fr-u12-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of La Hiérarchie Complète des Pronoms Clitiques. In French grammar, mastering la hiérarchie complète des pronoms clitiques is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for La Hiérarchie Complète des Pronoms Clitiques"
            ],
            "culturalNotes": [
                "Cultural and conversational context for La Hiérarchie Complète des Pronoms Clitiques in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Integrate Y and EN into the complete multi-pronoun clitic hierarchy (m » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (56a).",
                        "Cette forme présente une anomalie phonétique en français standard (56b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (56c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u12-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (56x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (56y).",
                        "Cette forme présente une anomalie phonétique en français standard (56z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u12-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (56m).",
                        "La préposition employée ici n'est pas commandée par le verbe (56n).",
                        "Cette forme présente une anomalie phonétique en français standard (56p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u12-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u12-l5": {
        "id": "fr-u12-l5",
        "unit": "fr-u12",
        "level": "B1",
        "objective": "Synthesize all object and adverbial pronouns in conversational French dialogues.",
        "prerequisites": [
            "fr-u12-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Comprehensive presentation of Synthèse des Pronoms dans la Conversation Courante. In French grammar, mastering synthèse des pronoms dans la conversation courante is vital for fluid sentence connection, precise discourse organization, and natural communication.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Memory anchor for Synthèse des Pronoms dans la Conversation Courante"
            ],
            "culturalNotes": [
                "Cultural and conversational context for Synthèse des Pronoms dans la Conversation Courante in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Synthesize all object and adverbial pronouns in conversational French  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (57a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (57b).",
                        "Cette construction passive alourdit inutilement l'énoncé (57c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u12-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (57x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (57y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (57z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u12-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (57m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (57n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (57p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u12-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u8-l3": {
        "id": "fr-u8-l3",
        "unit": "fr-u8",
        "level": "A2",
        "objective": "Use l'imparfait to describe recurring habits, repeated routines, and childhood pastimes in the past.",
        "prerequisites": [
            "fr-u8-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u8-l2"
            ]
        },
        "presentation": {
            "explanation": "In French, l'imparfait is the required tense for repeated or habitual actions in the past (actions that used to happen regularly without a specified beginning or end):\n\nKey Temporal Triggers for Imperfect Habits:\n- tous les jours / chaque jour (every day)\n- toujours (always), souvent (often), d'habitude (usually)\n- le samedi / le week-end (on Saturdays / on weekends = recurring)\n- autrefois / à l'époque (in the past / back then)\n- quand j'étais enfant (when I was a child)\n\nContrast with English: English often uses 'used to' or 'would' for past habits ('We would go to the beach every summer'). In French, you simply use the imperfect: 'Nous allions à la plage chaque été'.",
            "examples": [
                {
                    "target": "Tous les étés, nous allions à la mer.",
                    "reading": "too lay zay-tay, noo zah-lyohn ah lah mair",
                    "translation": "Every summer, we used to go to the seaside."
                },
                {
                    "target": "Quand j'étais petit, je jouais au football tous les jours.",
                    "reading": "kahn zhay-teh puh-tee, zhuh zhoo-eh oh foot-bohl too lay zhoor",
                    "translation": "When I was little, I played soccer every day."
                },
                {
                    "target": "D'habitude, elle prenait son café sur le balcon.",
                    "reading": "dah-bee-tood, el pruh-neh soh kah-fay soor luh bahl-kohn",
                    "translation": "Usually, she would drink her coffee on the balcony."
                },
                {
                    "target": "Le dimanche, nous dînions chez nos grands-parents.",
                    "reading": "luh dee-mahnsh, noo dee-nyohn shay noh grahn-pah-rahn",
                    "translation": "On Sundays, we used to have dinner at our grandparents' house."
                },
                {
                    "target": "Autrefois, les gens écrivaient beaucoup de lettres.",
                    "reading": "oh-truh-fwah, lay zhahn zay-kree-veh boh-koo duh lehtr",
                    "translation": "In the past, people used to write many letters."
                }
            ],
            "mnemonics": [
                "Imparfait = Infinite Loop: Picture an ongoing carousel spinning in the past with no start or stop date!",
                "Habit = AIS: If you did it again and again, wrap it in -ais, -ait, -ions!"
            ],
            "culturalNotes": [
                "French family memoirs and biographical literature heavily evoke the sensory nostalgia of the 'dimanche chez les grands-parents' through the imperfect."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Use l'imparfait to describe recurring habits, repeated routines, and c » :",
                    "options": [
                        "Tous les étés, nous allions à la mer.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (58a).",
                        "La préposition employée ici n'est pas commandée par le verbe (58b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (58c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u8-l3 :",
                    "options": [
                        "Quand j'étais petit, je jouais au football tous les jours.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (58x).",
                        "Cette forme présente une anomalie phonétique en français standard (58y).",
                        "La préposition employée ici n'est pas commandée par le verbe (58z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u8-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Tous les étés, nous allions à la mer.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (58m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (58n).",
                        "La préposition employée ici n'est pas commandée par le verbe (58p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u8-l3 (terme attendu : « Tous ») :",
                    "acceptedAnswers": [
                        "Tous",
                        "tous",
                        "Tous"
                    ],
                    "explanation": "Le mot exact est « Tous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u8-l4": {
        "id": "fr-u8-l4",
        "unit": "fr-u8",
        "level": "A2",
        "objective": "Deploy l'imparfait to set the scene: describe weather, physical scenery, emotional states, and age in past narratives.",
        "prerequisites": [
            "fr-u8-l1",
            "fr-u8-l2",
            "fr-u8-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u8-l3"
            ]
        },
        "presentation": {
            "explanation": "In past storytelling, the imperfect functions like the background painting of a theater stage. It paints conditions that were ALREADY IN PROGRESS when foreground events took place:\n\n1. Weather in the Past:\n- Il faisait beau / mauvais / froid (The weather was nice / bad / cold).\n- Il pleuvait (It was raining - pleuvoir -> pleuvait).\n- Le vent soufflait (The wind was blowing).\n\n2. Physical & Emotional States:\n- J'avais peur (I was afraid).\n- Elle était triste / heureuse (She was sad / happy).\n- Ils avaient faim et soif (They were hungry and thirsty).\n\n3. Age & Time of Day:\n- J'avais dix ans (I was ten years old).\n- Il était minuit (It was midnight).\n\nWhenever you describe the setting or state of mind without stating that it completed within a specific boundary, use L'IMPARFAIT.",
            "examples": [
                {
                    "target": "Il pleuvait et la nuit était sombre.",
                    "reading": "eel pluh-veh ay lah nwee ay-teh sohbr",
                    "translation": "It was raining and the night was dark. (weather & atmosphere)"
                },
                {
                    "target": "Le château avait de grandes fenêtres anciennes.",
                    "reading": "luh shah-toh ah-veh duh grahnd fuh-nehtr ahn-syen",
                    "translation": "The castle had large old windows. (physical description)"
                },
                {
                    "target": "Nous avions très faim après la longue marche.",
                    "reading": "noo zah-vyohn tray fan ah-preh lah lohng mahrsh",
                    "translation": "We were very hungry after the long walk. (physical sensation)"
                },
                {
                    "target": "Il était dix-neuf heures quand ils sont arrivés.",
                    "reading": "eel ay-teh deez-nuhf uhr kahn teel sohn tah-ree-vay",
                    "translation": "It was 7:00 PM when they arrived. (time setting)"
                },
                {
                    "target": "Elle portait un magnifique manteau rouge.",
                    "reading": "el pohr-teh tuhn mah-nyee-feek mahn-toh roozh",
                    "translation": "She was wearing a magnificent red coat. (appearance)"
                }
            ],
            "mnemonics": [
                "Setting the Stage: Imparfait paints the backdrop (trees, clouds, feelings); Passé Composé sends the actor running across the stage!",
                "Physical states in the past (faim, froid, peur, âge) naturally live in the imperfect."
            ],
            "culturalNotes": [
                "French 19th-century realist novels (Balzac, Flaubert, Zola) frequently spend several pages in l'imparfait setting the sensory atmosphere before the first plot action occurs."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Deploy l'imparfait to set the scene: describe weather, physical scener » :",
                    "options": [
                        "Il pleuvait et la nuit était sombre.",
                        "Cette forme présente une anomalie phonétique en français standard (59a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (59b).",
                        "Cette construction passive alourdit inutilement l'énoncé (59c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u8-l4 :",
                    "options": [
                        "Le château avait de grandes fenêtres anciennes.",
                        "Cette variante relève d'un registre familier inadapté au contexte (59x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (59y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (59z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u8-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Il pleuvait et la nuit était sombre.",
                        "Cette variante relève d'un registre familier inadapté au contexte (59m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (59n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (59p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u8-l4 (terme attendu : « Il ») :",
                    "acceptedAnswers": [
                        "Il",
                        "il",
                        "Il"
                    ],
                    "explanation": "Le mot exact est « Il »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u8-l5": {
        "id": "fr-u8-l5",
        "unit": "fr-u8",
        "level": "A2",
        "objective": "Combine l'imparfait (ongoing background action) with passé composé (interrupting event) using 'pendant que' and 'quand'.",
        "prerequisites": [
            "fr-u8-l1",
            "fr-u8-l2",
            "fr-u8-l3",
            "fr-u8-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u8-l4"
            ]
        },
        "presentation": {
            "explanation": "One of the most powerful sentence structures in French is the INTERRUPTED ACTION, which contrasts the imperfect and the passé composé in the same sentence:\n\n1. L'IMPARFAIT describes the ongoing, continuous action that was already happening (the background movie):\n- 'Je dormais...' (I was sleeping...)\n- 'Nous marchions dans la rue...' (We were walking in the street...)\n- Often introduced by: Pendant que (While / As).\n\n2. Le PASSÉ COMPOSÉ describes the sudden, discrete event that INTERRUPTED the ongoing action:\n- '...quand le téléphone a sonné' (...when the phone rang!)\n- '...quand soudain il a commencé à pleuvoir' (...when suddenly it started raining!)\n- Often introduced by: Quand (When), Soudain / Tout à coup (Suddenly).\n\nFormula: [PENDANT QUE + Imparfait], [SOUDAIN + Passé Composé]!\nExample: 'Pendant que je lisais un livre, quelqu'un a frappé à la porte.'",
            "examples": [
                {
                    "target": "Je dormais quand le téléphone a sonné.",
                    "reading": "zhuh dohr-meh kahn luh tay-lay-fohn ah soh-nay",
                    "translation": "I was sleeping (imperfect) when the phone rang (passé composé)."
                },
                {
                    "target": "Pendant que nous mangions, Pierre est arrivé.",
                    "reading": "pahn-dahn kuh noo mahn-zhyohn, pyair ay tah-ree-vay",
                    "translation": "While we were eating (imperfect), Pierre arrived (passé composé)."
                },
                {
                    "target": "Elle traversait la rue quand elle a vu son ami.",
                    "reading": "el trah-vair-seh lah roo kahn tel ah voo soh nah-mee",
                    "translation": "She was crossing the street when she saw her friend."
                },
                {
                    "target": "Ils étudiaient tranquillement quand l'alarme a retenti.",
                    "reading": "eel zay-too-dyeh trahn-keel-mahn kahn lah-lahrm ah ruh-tahn-tee",
                    "translation": "They were studying quietly when the alarm went off."
                },
                {
                    "target": "Nous nous promenions dans le parc quand la pluie a commencé.",
                    "reading": "noo noo prohm-nyohn dahn luh pahrk kahn lah plwee ah koh-mahn-say",
                    "translation": "We were walking in the park when the rain started."
                }
            ],
            "mnemonics": [
                "The Lightning Bolt: The Imperfect is the calm sky; the Passé Composé is the sudden lightning bolt striking down!",
                "Pendant que takes the movie (Imparfait); Quand triggers the snapshot (Passé Composé)."
            ],
            "culturalNotes": [
                "This dual-aspect interplay is the foundation of French narrative suspense in detective fiction (romans policiers) and journalism."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Combine l'imparfait (ongoing background action) with passé composé (in » :",
                    "options": [
                        "Je dormais quand le téléphone a sonné.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (60a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (60b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (60c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u8-l5 :",
                    "options": [
                        "Pendant que nous mangions, Pierre est arrivé.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (60x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (60y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (60z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau A2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u8-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Je dormais quand le téléphone a sonné.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (60m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (60n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (60p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u8-l5 (terme attendu : « Je ») :",
                    "acceptedAnswers": [
                        "Je",
                        "je",
                        "Je"
                    ],
                    "explanation": "Le mot exact est « Je »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u13-l1": {
        "id": "fr-u13-l1",
        "unit": "fr-u13",
        "level": "B1",
        "objective": "Form the conditionnel présent by attaching imperfect endings (-ais, -ais, -ait, -ions, -iez, -aient) to the future stem.",
        "prerequisites": [
            "fr-u12-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u12-l5"
            ]
        },
        "presentation": {
            "explanation": "The Conditionnel Présent is formed with algebraic elegance in French:\n\n[FUTURE STEM (Infinitive or irregular future stem ending in -r)] + [IMPERFECT ENDINGS (-ais, -ais, -ait, -ions, -iez, -aient)]\n\n1. Regular Verbs:\n- parler -> stem: parler- -> je parlerais, tu parlerais, il parlerait, nous parlerions, vous parleriez, ils parleraient.\n- finir -> stem: finir- -> je finirais, nous finirions.\n- vendre -> drop final 'e' -> vendr- -> je vendrais.\n\n2. Irregular Stems (identical to Future Simple!):\n- être -> ser- (je serais)\n- avoir -> aur- (j'aurais)\n- faire -> fer- (je ferais)\n- aller -> ir- (j'irais)\n- vouloir -> voudr- (je voudrais)\n- pouvoir -> pourr- (je pourrais)\n- devoir -> devr- (je devrais)\n- savoir -> saur- (je saurais)\n- venir -> viendr- (je viendrais)\n- voir -> verr- (je verrais)\n\nPronunciation Note: Just like in the imperfect, the endings -ais, -ais, -ait, and -aient are all pronounced identically as open /ɛ/!",
            "examples": [
                {
                    "target": "J'aimerais visiter le musée du Louvre.",
                    "reading": "zheh-muh-reh vee-zee-tay luh moo-zay doo loovr",
                    "translation": "I would like to visit the Louvre museum."
                },
                {
                    "target": "Nous pourrions partir ensemble ce week-end.",
                    "reading": "noo poo-ryohn pahr-teer ahn-sahnbl suh wee-kend",
                    "translation": "We could leave together this weekend. (pouvoir -> pourrions)"
                },
                {
                    "target": "Tu devrais te reposer un peu.",
                    "reading": "too duh-vreh tuh ruh-poh-zay uhn puh",
                    "translation": "You should rest a little. (devoir -> devrais)"
                },
                {
                    "target": "Il ferait n'importe quoi pour aider ses amis.",
                    "reading": "eel fuh-reh nan-pohrt kwah poor ay-day say zah-mee",
                    "translation": "He would do anything to help his friends. (faire -> ferait)"
                },
                {
                    "target": "Avec plus de temps, ils voyageraient davantage.",
                    "reading": "ah-vek ploo duh tahn, eel vwah-yahzh-reh dah-vahn-tahzh",
                    "translation": "With more time, they would travel more."
                }
            ],
            "mnemonics": [
                "Future Stem + Imperfect Endings: The Conditional is literally the child of the Future and the Imperfect!",
                "The 'R' tells you it's Conditional: Look for the 'R' right before the -ais/-ait ending (je parleRAIS, je seRAIS)!"
            ],
            "culturalNotes": [
                "French politeness and diplomatic discourse rely extensively on the conditional to soften assertions and show refined respect."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Form the conditionnel présent by attaching imperfect endings (-ais, -a » :",
                    "options": [
                        "J'aimerais visiter le musée du Louvre.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (61a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (61b).",
                        "Cette construction passive alourdit inutilement l'énoncé (61c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u13-l1 :",
                    "options": [
                        "Nous pourrions partir ensemble ce week-end.",
                        "L'antériorité temporelle est mal établie par rapport au repère (61x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (61y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (61z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u13-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "J'aimerais visiter le musée du Louvre.",
                        "L'antériorité temporelle est mal établie par rapport au repère (61m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (61n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (61p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u13-l1 (terme attendu : « Jaimerais ») :",
                    "acceptedAnswers": [
                        "Jaimerais",
                        "jaimerais",
                        "Jaimerais"
                    ],
                    "explanation": "Le mot exact est « Jaimerais »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u13-l2": {
        "id": "fr-u13-l2",
        "unit": "fr-u13",
        "level": "B1",
        "objective": "Use 'je voudrais', 'j'aimerais', and 'pourriez-vous' for polite customer and social interactions.",
        "prerequisites": [
            "fr-u13-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u13-l1"
            ]
        },
        "presentation": {
            "explanation": "In French, direct imperatives or bald indicative statements (such as 'Je veux une baguette' or 'Donnez-moi un café') sound blunt and socially aggressive. The present conditional functions as the premier instrument of courtesy (le conditionnel de politesse):\n\n1. Softening Desires:\n- 'Je voudrais...' (from vouloir) replaces the demanding 'Je veux...'.\n- 'J'aimerais...' (from aimer) expresses a courteous wish ('I would love to / I'd like').\n\n2. Softening Requests:\n- 'Pourriez-vous... ?' (from pouvoir, formal) transforms an order into a delicate inquiry ('Could you...?').\n- 'Pourrais-tu... ?' (informal) is used with friends or family.\n- 'Auriez-vous... ?' (from avoir) politely asks for availability ('Would you happen to have...?').\n\n3. Conversational Architecture:\nAlways frame your requests by opening with 'Bonjour Madame / Monsieur' and concluding with 's'il vous plaît'. French service personnel expect this three-part ceremonial exchange before transacting business.",
            "examples": [
                {
                    "target": "Bonjour Madame, je voudrais une baguette tradition et deux croissants, s'il vous plaît.",
                    "reading": "bon-zhoor mah-dahm, zhuh voo-dreh oon bah-get trah-dee-syohn ay duh krwah-sahn, seel voo pleh",
                    "translation": "Hello madam, I would like a traditional baguette and two croissants, please."
                },
                {
                    "target": "J'aimerais réserver une table pour quatre personnes ce soir à vingt heures.",
                    "reading": "zheh-muh-reh ray-zair-vay oon tahbl poor kahtr pair-sun suh swahr ah van-t‿uhr",
                    "translation": "I would like to book a table for four people tonight at 8 PM."
                },
                {
                    "target": "Pourriez-vous m'indiquer le chemin de la gare Montparnasse ?",
                    "reading": "poo-ryay-voo man-dee-kay luh shuh-man duh lah gahr mohn-pahr-nahs",
                    "translation": "Could you show me the way to the Montparnasse train station?"
                },
                {
                    "target": "Auriez-vous un instant pour examiner ce document avec moi ?",
                    "reading": "oh-ryay-voo uhn an-stahn poor eg-zah-mee-nay suh doh-koo-mahn ah-vek mwah",
                    "translation": "Would you have a moment to examine this document with me?"
                },
                {
                    "target": "Pourrais-tu me prêter ton stylo pendant quelques minutes ?",
                    "reading": "poo-reh-too muh preh-tay tohn stee-loh pahn-dahn kel-kuh mee-noot",
                    "translation": "Could you lend me your pen for a few minutes? (informal)"
                }
            ],
            "mnemonics": [
                "Never say 'Je veux' to a French waiter! Remember: VOUDR-ais has the 'R' that softens your demand into refined respect.",
                "Pourriez-vous = Could you (conditional polite 'R' + formal 'vous')."
            ],
            "culturalNotes": [
                "In France, commercial interactions are social rituals. Starting with 'Bonjour' followed by 'Je voudrais' and finishing with 's'il vous plaît' is non-negotiable etiquette in bakeries, cafés, and administrative offices."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Vous êtes dans un café parisien. Quelle formule est la plus polie pour commander un expresso ?",
                    "options": [
                        "Je voudrais un café serré, s'il vous plaît.",
                        "Je veux immédiatement un café noir.",
                        "Donnez-moi le café maintenant sans tarder.",
                        "Tu me donnes un café tout de suite."
                    ],
                    "answerIndex": 0,
                    "explanation": "« Je voudrais... s'il vous plaît » est la formule de politesse standard par excellence au restaurant ou au café."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Comment demander poliment à un passant inconnu de vous indiquer l'heure ?",
                    "options": [
                        "Dis-moi quelle heure il est !",
                        "Pourriez-vous me donner l'heure, s'il vous plaît ?",
                        "Donne-moi l'heure vite fait.",
                        "J'exige que vous me disiez l'heure."
                    ],
                    "answerIndex": 1,
                    "explanation": "L'inversion interrogative au conditionnel « Pourriez-vous... » avec le vouvoiement et « s'il vous plaît » respecte parfaitement les codes de politesse."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase illustre le conditionnel de politesse pour demander une faveur ?",
                    "options": [
                        "Je dois partir tout de suite.",
                        "Pourriez-vous fermer la fenêtre, s'il vous plaît ?",
                        "Tu fermes la fenêtre maintenant.",
                        "Nous fermerons la porte demain matin."
                    ],
                    "answerIndex": 1,
                    "explanation": "« Pourriez-vous... » emploie le conditionnel présent du verbe pouvoir pour adoucir la demande."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez la formule de politesse : « Je _________ une carafe d'eau, s'il vous plaît. » (forme au conditionnel de 'vouloir')",
                    "acceptedAnswers": [
                        "voudrais",
                        "Voudrais"
                    ],
                    "explanation": "La première personne du singulier au conditionnel présent du verbe vouloir est « voudrais »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u13-l3": {
        "id": "fr-u13-l3",
        "unit": "fr-u13",
        "level": "B1",
        "objective": "Provide nuanced advice and moral recommendations using 'devoir' (tu devrais) and 'falloir' (il faudrait).",
        "prerequisites": [
            "fr-u13-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u13-l2"
            ]
        },
        "presentation": {
            "explanation": "When offering guidance in French, the indicative mood (Tu dois..., Il faut...) creates an imperative tone of obligation. To soften commands into constructive counsel or gentle recommendations, use the conditional:\n\n1. Devoir in the Conditional (Personal Advice):\n- 'Tu devrais te reposer.' (You should rest.)\n- 'Vous devriez consulter un médecin sans attendre.' (You should see a doctor without delay.)\n- Conjugation: je devrais, tu devrais, il devrait, nous devrions, vous devriez, ils devraient.\n\n2. Falloir in the Conditional (Impersonal Recommendation):\n- 'Il faudrait...' expresses what ought to be done in a diplomatic, collective manner without directly targeting the listener.\n- 'Il faudrait repeindre cette pièce.' (We ought to / It would be necessary to repaint this room.)\n- 'Il faudrait partir tôt pour éviter les bouchons.' (It would be wise to leave early to avoid traffic jams.)\n\n3. Alternative Modulators:\n- 'Il vaudrait mieux + infinitif' (It would be better to... from valoir mieux).\n- 'Tu ferais bien de + infinitif' (You would do well to...).",
            "examples": [
                {
                    "target": "Tu devrais dormir au moins huit heures avant ton examen de français.",
                    "reading": "too duh-vreh dohr-meer oh mwan weet uhr ah-vahn tohn neg-zah-man duh frahn-seh",
                    "translation": "You should sleep at least eight hours before your French exam."
                },
                {
                    "target": "Vous devriez envoyer votre candidature avant la fin de la semaine.",
                    "reading": "voo duh-vryay ahn-vwah-yay voh-truh kahn-dee-dah-toor ah-vahn lah fan duh lah suh-men",
                    "translation": "You ought to send your application before the end of the week."
                },
                {
                    "target": "Il faudrait vérifier les horaires de train avant de partir pour la gare.",
                    "reading": "eel foh-dreh vay-ree-fyay lay zoh-rair duh tran ah-vahn duh pahr-teer poor lah gahr",
                    "translation": "It would be wise to check the train timetable before leaving for the station."
                },
                {
                    "target": "Il vaudrait mieux réserver nos billets d'avion plusieurs semaines à l'avance.",
                    "reading": "eel voh-dreh myuh ray-zair-vay noh bee-yay dah-vyohn ploo-zyuhr suh-men ah lah-vahns",
                    "translation": "It would be better to book our plane tickets several weeks in advance."
                },
                {
                    "target": "Tu ferais bien de prendre un parapluie, car le ciel est très nuageux.",
                    "reading": "too fuh-reh byan duh prahndr uhn pah-rah-plwee, kahr luh syel ay treh noo-ah-zhuh",
                    "translation": "You would do well to take an umbrella, because the sky is very cloudy."
                }
            ],
            "mnemonics": [
                "Devrais = DEVOIR + 'R' + AIS -> 'Should' (conditional counsel rather than strict 'must').",
                "Il FAUDRAIT is the gentle, polite cousin of the authoritarian IL FAUT."
            ],
            "culturalNotes": [
                "In French professional and social dialogue, giving feedback with 'Tu devrais' or 'Il faudrait peut-être' is strongly preferred over 'Tu dois', preserving collegiality and avoiding abrupt conflict."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Votre ami est très fatigué. Quel conseil bienveillant et nuancé lui donnez-vous ?",
                    "options": [
                        "Tu dois courir dix kilomètres maintenant !",
                        "Tu devrais prendre quelques jours de repos.",
                        "Tu as pris tes vacances l'année dernière.",
                        "Tu prendras le train hier soir."
                    ],
                    "answerIndex": 1,
                    "explanation": "« Tu devrais... » exprime un conseil nuancé au conditionnel présent."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Choisissez la formulation impersonnelle la plus adéquate pour suggérer une amélioration générale :",
                    "options": [
                        "Il faut absolument obéir sans discuter.",
                        "Il faudrait organiser une réunion pour clarifier la situation.",
                        "Il a fallu refaire le travail hier.",
                        "Il faudra partir dans trois semaines."
                    ],
                    "answerIndex": 1,
                    "explanation": "« Il faudrait + infinitif » exprime une suggestion mesurée et constructive."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase utilise correctement le verbe devoir au conditionnel pour prodiguer un conseil à un collègue (vouvoiement) ?",
                    "options": [
                        "Vous devez signer le contrat immédiatement.",
                        "Vous devriez relire attentivement la clause de confidentialité.",
                        "Vous avez dû oublier votre mot de passe.",
                        "Vous devrez arriver à l'heure demain."
                    ],
                    "answerIndex": 1,
                    "explanation": "« Vous devriez relire... » emploie le conditionnel présent pour formuler une recommandation modérée."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez avec le conditionnel de falloir : « Il _________ repeindre la cuisine avant de vendre l'appartement. »",
                    "acceptedAnswers": [
                        "faudrait",
                        "Faudrait"
                    ],
                    "explanation": "La forme impersonnelle de 'falloir' au conditionnel présent est « faudrait »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u13-l4": {
        "id": "fr-u13-l4",
        "unit": "fr-u13",
        "level": "B1",
        "objective": "Report unconfirmed information and journalistic speculation using the conditional of hearsay.",
        "prerequisites": [
            "fr-u13-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u13-l3"
            ]
        },
        "presentation": {
            "explanation": "In French journalism, press dispatches, and formal reporting, the conditional present is employed to report unconfirmed rumors, breaking news, or allegations without claiming absolute certainty (le conditionnel journalistique / conditionnel de rumeur):\n\n1. Translating English 'Allegedly' / 'Reportedly':\nInstead of inserting special adverbs, French simply conjugates the main verb into the conditional:\n- 'Le ministre démissionnerait ce soir.' = 'The minister will reportedly resign tonight.'\n- 'L'incendie aurait fait deux blessés.' = 'The fire reportedly caused two injuries.'\n- 'L'accord coûterait trois millions d'euros.' = 'The deal would allegedly cost three million euros.'\n\n2. Common Framing Formulas:\n- 'Selon nos informations / Selon des sources proches du dossier...' (According to our sources...)\n- 'D'après les témoins présents sur place...' (According to witnesses on site...)\n- 'Il y aurait...' (There are reportedly... from 'il y a').\n\n3. Epistemic Contrast:\n- Indicative ('Le président arrive à Paris'): The journalist asserts this as a verified fact.\n- Conditional ('Le président arriverait à Paris'): The news is plausible but unverified by official channels.",
            "examples": [
                {
                    "target": "Selon des sources policières, le suspect se cacherait dans un village voisin.",
                    "reading": "suh-lohn day soors poh-lee-syair, luh soos-pek suh kahsh-reh dahn zocn vee-lahzh vwah-zan",
                    "translation": "According to police sources, the suspect is reportedly hiding in a neighboring village."
                },
                {
                    "target": "Le coût total de la nouvelle ligne de métro s'élèverait à plus de deux milliards d'euros.",
                    "reading": "luh koo toh-tahl duh lah noo-vel leen-yuh duh may-troh say-lev-reh ah ploo duh duh meel-yahr duh-ruh",
                    "translation": "The total cost of the new subway line would reportedly amount to more than two billion euros."
                },
                {
                    "target": "D'après les syndicats, la direction annoncerait de nouvelles négociations vendredi prochain.",
                    "reading": "dah-preh lay san-dee-kah, lah dee-rek-syohn ah-nohn-sreh duh noo-vel nay-goh-syah-syohn vahn-druh-dee proh-shan",
                    "translation": "According to union leaders, management will reportedly announce fresh negotiations next Friday."
                },
                {
                    "target": "Il y aurait plusieurs milliers de manifestants rassemblés sur la place de la République.",
                    "reading": "eel ee oh-reh ploo-zyuhr meel-yay duh mah-nee-fes-tahn rah-sahn-blay soor lah plahs duh lah ray-poo-bleek",
                    "translation": "There are reportedly several thousand demonstrators gathered in Place de la République."
                },
                {
                    "target": "Le nouvel attaquant signerait son contrat avec le club parisien dès demain matin.",
                    "reading": "luh noo-vel ah-tah-kahn seen-yuh-reh sohn kohn-trah ah-vek luh kloob pah-ree-zyan deh duh-man mah-tan",
                    "translation": "The new striker will allegedly sign his contract with the Parisian club first thing tomorrow morning."
                }
            ],
            "mnemonics": [
                "JOURNALIST'S SHIELD: When a French reporter uses 'serait' instead of 'est', they are protecting themselves by saying 'it is reported to be'!"
            ],
            "culturalNotes": [
                "French press law holds publications liable for libel. Using the conditional is therefore a strict legal and ethical convention across French broadsheets like Le Monde and Le Figaro when reporting active investigations."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Dans un journal télévisé, quelle phrase indique que l'information n'a pas encore été officiellement confirmée ?",
                    "options": [
                        "Le Premier ministre s'est exprimé hier à 20 heures.",
                        "Le Premier ministre démissionnerait d'ici la fin du mois.",
                        "Le Premier ministre a signé le décret ce matin.",
                        "Le Premier ministre voyage toujours en avion officiel."
                    ],
                    "answerIndex": 1,
                    "explanation": "Le verbe au conditionnel présent (« démissionnerait ») indique une information sous réserve ou une rumeur non confirmée."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Traduisez fidèlement en français journalistique : « According to sources, the company is reportedly planning a merger. »",
                    "options": [
                        "Selon des sources, l'entreprise a planifié une fusion.",
                        "Selon des sources, l'entreprise envisagerait une fusion.",
                        "Selon des sources, l'entreprise refusera toujours la fusion.",
                        "Selon des sources, l'entreprise avait conclu la fusion."
                    ],
                    "answerIndex": 1,
                    "explanation": "« envisagerait » traduit parfaitement le conditionnel d'information non confirmée."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Pourquoi le journaliste utilise-t-il le conditionnel dans la phrase : « L'accident aurait fait deux blessés légers » ?",
                    "options": [
                        "Pour exprimer un regret face au passé.",
                        "Pour formuler une hypothèse ou rapporter un fait encore non vérifié.",
                        "Pour donner un ordre péremptoire aux secours.",
                        "Pour indiquer une certitude scientifique absolue."
                    ],
                    "answerIndex": 1,
                    "explanation": "Le conditionnel journalistique permet d'énoncer des faits probables sans engagement de certitude absolue."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez la dépêche de presse : « D'après les témoins, le suspect _________ âgé d'une trentaine d'années. » (forme au conditionnel d''être')",
                    "acceptedAnswers": [
                        "serait",
                        "Serait"
                    ],
                    "explanation": "Le conditionnel du verbe être à la 3e personne du singulier est « serait »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u13-l5": {
        "id": "fr-u13-l5",
        "unit": "fr-u13",
        "level": "B1",
        "objective": "Form basic unreal present conditional sentences with 'si + imparfait -> conditionnel'.",
        "prerequisites": [
            "fr-u13-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u13-l4"
            ]
        },
        "presentation": {
            "explanation": "The second conditional structure in French expresses contrary-to-fact, hypothetical, or imaginary scenarios in the present (l'irréel du présent):\n\nSI + [IMPARFAIT], [CONDITIONNEL PRÉSENT]\n(or inverted: [CONDITIONNEL PRÉSENT] + SI + [IMPARFAIT])\n\n1. Strict Tense Combination:\n- The condition clause introduced by 'Si' MUST be in the imperfect.\n- The result clause MUST be in the present conditional.\n- Example: 'Si j'avais du temps (imparfait), je voyagerais (conditionnel).' (If I had time, I would travel.)\n\n2. The Golden Syntactic Prohibition:\nNEVER place the conditional directly after 'si'!\n- Fatal error: 'Si j'aurais de l'argent...' (INCORRECT)\n- Grammatical standard: 'Si j'avais de l'argent...' (CORRECT)\nRemember the French mnemonic rhyme: 'Les « si » n'aiment pas les « -rais » !'\n\n3. Elision Rules for 'Si':\n- 'Si' elides ONLY before 'il' and 'ils' (S'il pleut, S'ils viennent).\n- 'Si' NEVER elides before 'elle', 'elles', or 'on' (Si elle vient, Si on veut).",
            "examples": [
                {
                    "target": "Si j'avais plus de temps libre, j'apprendrais à jouer du piano.",
                    "reading": "see zhah-veh ploo duh tahn leebr, zhah-prahn-dreh ah zhoo-ay doo pyah-noh",
                    "translation": "If I had more free time, I would learn to play the piano."
                },
                {
                    "target": "Si nous habitions à Nice, nous irions à la plage tous les dimanches.",
                    "reading": "see noo zah-bee-tyohn ah nees, noo zee-ryohn ah lah plahzh too lay dee-mahnsh",
                    "translation": "If we lived in Nice, we would go to the beach every Sunday."
                },
                {
                    "target": "Elle voyagerait autour du monde si elle gagnait au loto.",
                    "reading": "el vwah-yahzh-reh oh-toor doo mohnd see el gahn-yeh oh loh-toh",
                    "translation": "She would travel around the world if she won the lottery."
                },
                {
                    "target": "Si tu parlais couramment français, tu trouverais facilement un poste à Lyon.",
                    "reading": "see too pahr-leh koo-rah-mahn frahn-seh, too troo-vruh fah-seel-mahn uhn pohst ah lyohn",
                    "translation": "If you spoke French fluently, you would easily find a job in Lyon."
                },
                {
                    "target": "S'il faisait beau ce matin, nous ferions une longue promenade en forêt.",
                    "reading": "seel fuh-zeh boh suh mah-tan, noo fuh-ryohn oon lohng prohm-nahd ahn foh-reh",
                    "translation": "If the weather were nice this morning, we would take a long walk in the forest."
                }
            ],
            "mnemonics": [
                "LES 'SI' N'AIMENT PAS LES '-RAI' : If a clause begins with SI, the verb cannot end in -rais/-rait! The 'si' clause demands the imperfect!"
            ],
            "culturalNotes": [
                "The French proverb 'Avec des si, on mettrait Paris en bouteille' (With 'ifs', you could put Paris in a bottle) is invoked whenever someone indulges in pointless, endless daydreams about unreal possibilities."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Complétez correctement l'hypothèse : « Si j'_________ riche, j'achèterais un château en Touraine. »",
                    "options": [
                        "étais",
                        "serais",
                        "fus",
                        "suis"
                    ],
                    "answerIndex": 0,
                    "explanation": "Après 'si' pour exprimer une hypothèse sur le présent, on doit impérativement employer l'imparfait (« étais ») et non le conditionnel (« serais »)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase syntaxiquement correcte en français standard :",
                    "options": [
                        "Si j'aurais su, je ne viendrais pas.",
                        "Si nous avions une voiture, nous visiterions la Bretagne.",
                        "Si tu serais là, nous mangerions ensemble.",
                        "Si vous viendriez demain, nous serions contents."
                    ],
                    "answerIndex": 1,
                    "explanation": "La structure « Si + imparfait (avions) -> conditionnel présent (visiterions) » est rigoureusement respectée."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase illustre l'irréel du présent selon la règle « Si + imparfait -> conditionnel » ?",
                    "options": [
                        "Si tu viens demain, nous irons au cinéma.",
                        "Si tu étudiais sérieusement, tu réussirais tes examens.",
                        "Si tu es venu hier, tu as vu le spectacle.",
                        "Si tu seras présent, nous commencerons."
                    ],
                    "answerIndex": 1,
                    "explanation": "« Si tu étudiais (imparfait), tu réussirais (conditionnel) » correspond exactement à l'irréel du présent."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez la proposition principale : « Si nous avions des vacances, nous _________ en Italie. » (forme au conditionnel présent de 'partir')",
                    "acceptedAnswers": [
                        "partirions",
                        "Partirions"
                    ],
                    "explanation": "La 1ère personne du pluriel au conditionnel présent de partir est « partirions »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u14-l1": {
        "id": "fr-u14-l1",
        "unit": "fr-u14",
        "level": "B1",
        "objective": "Form the subjonctif présent for regular verbs using the 3rd-person plural stem and subjunctive endings (-e, -es, -e, -ions, -iez, -ent).",
        "prerequisites": [
            "fr-u13-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u13-l5"
            ]
        },
        "presentation": {
            "explanation": "The Subjonctif Présent is a grammatical mood expressing subjectivity, necessity, emotion, doubt, or will. For all regular verbs (-er, -ir, -re), its formation follows a systematic mechanical rule:\n\nSTEM: Take the 3rd-person plural (ils/elles) of the Present Indicative and drop the -ent.\nENDINGS: Add the subjunctive endings: -e, -es, -e, -ions, -iez, -ent.\n\n1. -ER Verbs (e.g., parler -> ils parlent -> stem: parl-):\n- que je parle, que tu parles, qu'il/elle parle, que nous parlions, que vous parliez, qu'ils/elles parlent.\n- Note: Notice that nous and vous have the classic imperfect endings (-ions, -iez), while je, tu, il, ils sound identical to the present indicative!\n\n2. -IR Verbs with infix -iss- (e.g., finir -> ils finissent -> stem: finiss-):\n- que je finisse, que tu finisses, qu'il finisse, que nous finissions, que vous finissiez, qu'ils finissent.\n\n3. -RE Verbs (e.g., attendre -> ils attendent -> stem: attend-):\n- que j'attende, que tu attendes, qu'il attende, que nous attendions, que vous attendiez, qu'ils attendent.\n\n4. Dual-Stem Verbs (e.g., prendre -> ils prennent / nous prenons):\n- The subjunctive uses the ils stem for je/tu/il/ils (que je prenne, qu'ils prennent) and the nous stem for nous/vous (que nous prenions, que vous preniez)!",
            "examples": [
                {
                    "target": "Il faut que nous parlions au directeur du projet dès ce matin.",
                    "reading": "eel foh kuh noo pahr-lyohn oh dee-rek-tuhr doo proh-zheh deh suh mah-tan",
                    "translation": "It is necessary that we speak to the project manager first thing this morning."
                },
                {
                    "target": "Le professeur exige que vous finissiez ce devoir avant midi.",
                    "reading": "luh proh-feh-suhr eg-zeezh kuh voo fee-nee-syay suh duh-vwahr ah-vahn mee-dee",
                    "translation": "The teacher demands that you finish this homework before noon."
                },
                {
                    "target": "J'aimerais que tu attendes quelques minutes dans la salle d'attente.",
                    "reading": "zheh-muh-reh kuh too ah-tahnd kel-kuh mee-noot dahn lah sahl dah-tahnt",
                    "translation": "I would like you to wait a few minutes in the waiting room."
                },
                {
                    "target": "Il est essentiel qu'ils choisissent un représentant pour l'équipe.",
                    "reading": "eel ay tay-sahn-syel keel shwah-zeest uhn ruh-pray-zahn-tahn poor lay-keep",
                    "translation": "It is essential that they choose a representative for the team."
                },
                {
                    "target": "Le médecin demande que je prenne ce médicament tous les soirs.",
                    "reading": "luh mayd-san duh-mahnd kuh zhuh pren suh may-dee-kah-mahn too lay swahr",
                    "translation": "The doctor asks that I take this medication every evening."
                }
            ],
            "mnemonics": [
                "SUBJUNCTIVE BOOT: 1-2-3-6 use the ILS present stem + (-e, -es, -e, -ent). The inside of the boot (nous/vous) keeps the NOUS stem + (-ions, -iez)!"
            ],
            "culturalNotes": [
                "While spoken informal French occasionally simplifies certain structures, mastery of the subjunctive mood is considered the golden hallmark of educated French across academic, legal, and professional spheres."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle est la forme correcte au subjonctif présent pour 'nous' avec le verbe 'finir' ?",
                    "options": [
                        "que nous finissions",
                        "que nous finissons",
                        "que nous finirions",
                        "que nous finissiez"
                    ],
                    "answerIndex": 0,
                    "explanation": "Le radical 'finiss-' combiné à la terminaison subjonctive '-ions' donne « que nous finissions »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Choisissez la phrase où le verbe régulier au subjonctif est correctement orthographié :",
                    "options": [
                        "Il faut que tu chantes plus fort.",
                        "Il faut que tu chante plus fort.",
                        "Il faut que tu chanteras plus fort.",
                        "Il faut que tu chantais plus fort."
                    ],
                    "answerIndex": 0,
                    "explanation": "Avec la 2e personne du singulier (tu), la terminaison régulière du subjonctif est « -es » : « tu chantes »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Complétez la subordonnée : « Il est indispensable que vous _________ (vendre) cette maison rapidement. »",
                    "options": [
                        "vendiez",
                        "vendez",
                        "vendrez",
                        "vendriez"
                    ],
                    "answerIndex": 0,
                    "explanation": "Le subjonctif présent avec 'vous' pour le verbe vendre prend la terminaison '-iez' : « vendiez »."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez la phrase au subjonctif : « Il faut que nous _________ (partir) à l'heure. »",
                    "acceptedAnswers": [
                        "partions",
                        "Partions"
                    ],
                    "explanation": "Le verbe partir au subjonctif présent avec nous donne « partions » (radical part- + -ions)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u14-l2": {
        "id": "fr-u14-l2",
        "unit": "fr-u14",
        "level": "B1",
        "objective": "Conjugate essential irregular verbs in the subjunctive (être: soit, avoir: ait, faire: fasse, aller: aille, savoir: sache, pouvoir: puisse).",
        "prerequisites": [
            "fr-u14-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u14-l1"
            ]
        },
        "presentation": {
            "explanation": "A core set of high-frequency irregular French verbs use unique, non-derived subjunctive stems that must be mastered individually:\n\n1. ÊTRE (Stem: soiy- / soy-):\n- que je sois, que tu sois, qu'il soit, que nous soyons, que vous soyez, qu'ils soient.\n\n2. AVOIR (Stem: ai- / ay-):\n- que j'aie, que tu aies, qu'il ait, que nous ayons, que vous ayez, qu'ils aient.\n\n3. FAIRE (Stem: fass-):\n- que je fasse, que tu fasses, qu'il fasse, que nous fassions, que vous fassiez, qu'ils fassent.\n\n4. ALLER (Stems: aill- / all-):\n- que j'aille, que tu ailles, qu'il aille, que nous allions, que vous alliez, qu'ils aillent.\n\n5. POUVOIR (Stem: puiss-):\n- que je puisse, que tu puisses, qu'il puisse, que nous puissions, que vous puissiez, qu'ils puissent.\n\n6. SAVOIR (Stem: sach-):\n- que je sache, que tu saches, qu'il sache, que nous sachions, que vous sachiez, qu'ils sachent.\n\n7. VOULOIR (Stems: veuill- / voul-):\n- que je veuille, que tu veuilles, qu'il veuille, que nous voulions, que vous vouliez, qu'ils veuillent.",
            "examples": [
                {
                    "target": "Il est nécessaire que vous soyez à l'aéroport trois heures avant le décollage.",
                    "reading": "eel ay nay-seh-sair kuh voo swah-yay ah lah-ay-roh-pohr twah zuhr ah-vahn luh day-koh-lahzh",
                    "translation": "It is necessary that you be at the airport three hours before takeoff."
                },
                {
                    "target": "J'aimerais que tout le monde ait l'opportunité de s'exprimer librement.",
                    "reading": "zheh-muh-reh kuh too luh mohnd ay loh-pohr-too-nee-tay duh sek-spree-may lee-bruh-mahn",
                    "translation": "I would like everyone to have the opportunity to speak freely."
                },
                {
                    "target": "Il faut que je fasse les courses avant la fermeture du supermarché.",
                    "reading": "eel foh kuh zhuh fahs lay koors ah-vahn lah fair-muh-toor doo soo-pair-mahr-shay",
                    "translation": "I must do the grocery shopping before the supermarket closes."
                },
                {
                    "target": "Le directeur souhaite que nous allions à Lyon pour rencontrer le client.",
                    "reading": "luh dee-rek-tuhr sweht kuh noo zah-lyohn ah lyohn poor rahn-kohn-tray luh klee-ahn",
                    "translation": "The director wishes that we go to Lyon to meet the client."
                },
                {
                    "target": "J'espère trouver une solution pour que tu puisses participer au projet.",
                    "reading": "zhes-pair troo-vay oon soh-loo-syohn poor kuh too pwees pahr-tee-see-pay oh proh-zheh",
                    "translation": "I hope to find a solution so that you can participate in the project."
                }
            ],
            "mnemonics": [
                "The 'Power' Subjunctive: POUVOIR turns into PUISS- (think 'puissant' / powerful) -> que je puisse!",
                "ÊTRE and AVOIR both end in -ons/-ez for nous/vous (soyons, soyez / ayons, ayez)!"
            ],
            "culturalNotes": [
                "Formulas like 'Que le meilleur gagne !' (May the best man win!) and 'Dieu soit loué !' (God be praised!) are frozen independent subjunctive idioms embedded in French literature and everyday culture."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Complétez la phrase avec la forme correcte d'ÊTRE au subjonctif : « Il est indispensable que tu _________ ponctuel à l'entretien. »",
                    "options": [
                        "sois",
                        "es",
                        "seras",
                        "soit"
                    ],
                    "answerIndex": 0,
                    "explanation": "Avec 'tu', le subjonctif présent du verbe être s'écrit « sois »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la forme correcte de FAIRE au subjonctif présent pour 'ils' :",
                    "options": [
                        "qu'ils font",
                        "qu'ils fassent",
                        "qu'ils feront",
                        "qu'ils faisaient"
                    ],
                    "answerIndex": 1,
                    "explanation": "Le radical du verbe faire au subjonctif est 'fass-', donc avec ils/elles : « qu'ils fassent »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase contient une forme incorrecte du subjonctif ?",
                    "options": [
                        "Il faut que nous sachions la vérité.",
                        "Je veux que vous alliez à cette conférence.",
                        "Il est urgent que je peux t'aider.",
                        "J'exige qu'il fasse attention."
                    ],
                    "answerIndex": 2,
                    "explanation": "« que je peux » est faux ; le verbe pouvoir exige le subjonctif « que je puisse »."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez avec le subjonctif de pouvoir : « Je cherche un guide pour que nous _________ explorer la grotte en sécurité. »",
                    "acceptedAnswers": [
                        "puissions",
                        "Puissions"
                    ],
                    "explanation": "La 1ère personne du pluriel du verbe pouvoir au subjonctif présent est « puissions »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u14-l3": {
        "id": "fr-u14-l3",
        "unit": "fr-u14",
        "level": "B1",
        "objective": "Express obligation and necessity with impersonal expressions requiring subjunctive (il faut que, il est nécessaire que, il est important que).",
        "prerequisites": [
            "fr-u14-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u14-l2"
            ]
        },
        "presentation": {
            "explanation": "Impersonal introductory expressions (les tournures impersonnelles) project necessity, urgency, or obligation upon another subject. Whenever the conjunction que introduces a new subject clause, the subjunctive mood is grammatically mandatory:\n\n[EXPRESSION IMPERSONNELLE] + QUE + [SUJET] + [VERBE AU SUBJONCTIF]\n\n1. Core Expressions of Obligation:\n- 'Il faut que...' (It is necessary that / [Subject] must...)\n- 'Il est nécessaire que...' (It is necessary that...)\n- 'Il est indispensable que...' (It is essential / indispensable that...)\n- 'Il est obligatoire que...' (It is mandatory that...)\n- 'Il est urgent que...' (It is urgent that...)\n\n2. Expressions of Importance & Evaluative Judgment:\n- 'Il est important que...' (It is important that...)\n- 'Il est essentiel que...' (It is essential that...)\n- 'Il vaut mieux que...' (It is better that...)\n- 'Il est préférable que...' (It is preferable that...)\n- 'Il est temps que...' (It is time that...)\n\n3. Syntactic Trap — Infinitive vs. Subjunctive:\n- If no specific subject is named, use the infinitive without que: 'Il faut partir' (One must leave).\n- If a specific subject is introduced with que, the subjunctive is mandatory: 'Il faut que TU partes' (You must leave).",
            "examples": [
                {
                    "target": "Il faut que nous prenions une décision avant la réunion de demain.",
                    "reading": "eel foh kuh noo pruh-nyohn oon day-see-zyohn ah-vahn lah ray-oo-nyohn duh duh-man",
                    "translation": "We must make a decision before tomorrow's meeting."
                },
                {
                    "target": "Il est indispensable que vous remplissiez ce formulaire avec précision.",
                    "reading": "eel ay tan-dees-pahn-sahbl kuh voo rahn-plee-syay suh fohr-moo-lair ah-vek pray-see-zyohn",
                    "translation": "It is essential that you fill out this form accurately."
                },
                {
                    "target": "Il est urgent que le médecin vienne examiner ce patient blessé.",
                    "reading": "eel ay toor-zhahn kuh luh mayd-san vyen neg-zah-mee-nay suh pah-syahn bleh-say",
                    "translation": "It is urgent that the doctor come examine this injured patient."
                },
                {
                    "target": "Il vaut mieux que tu partes maintenant pour ne pas rater ton vol.",
                    "reading": "eel voh myuh kuh too pahrt man-tuh-nahn poor nuh pah rah-tay tohn vohl",
                    "translation": "It is better that you leave now so as not to miss your flight."
                },
                {
                    "target": "Il est temps que les autorités prennent des mesures concrètes contre la pollution.",
                    "reading": "eel ay tahn kuh lay zoh-toh-ree-tay pren day muh-zoor kohn-kret kohntr lah poh-loo-syohn",
                    "translation": "It is time that the authorities take concrete measures against pollution."
                }
            ],
            "mnemonics": [
                "NO QUE, NO SUBJUNCTIVE: 'Il faut partir' (infinitive = general). 'Il faut QUE tu partes' (QUE triggers the subjunctive personality!)."
            ],
            "culturalNotes": [
                "In French administrative communications, official guidelines rely heavily on 'Il est impératif que...' and 'Il convient que...' with the subjunctive to establish regulatory requirements."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle tournure exige l'emploi du subjonctif présent dans la subordonnée ?",
                    "options": [
                        "Il est certain que vous...",
                        "Il est évident que tu...",
                        "Il est nécessaire que nous...",
                        "Il est vrai qu'il..."
                    ],
                    "answerIndex": 2,
                    "explanation": "« Il est nécessaire que... » exprime une obligation impersonnelle et déclenche obligatoirement le subjonctif."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Choisissez la phrase correcte traduisant « It is better that she stay here » :",
                    "options": [
                        "Il vaut mieux qu'elle reste ici.",
                        "Il vaut mieux qu'elle restera ici.",
                        "Il vaut mieux qu'elle restait ici.",
                        "Il vaut mieux qu'elle est restée ici."
                    ],
                    "answerIndex": 0,
                    "explanation": "« Il vaut mieux que » est suivi du subjonctif présent (« qu'elle reste »)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Complétez la consigne : « Il est indispensable que chacun _________ (comprendre) ses responsabilités. »",
                    "options": [
                        "comprenne",
                        "comprend",
                        "comprendra",
                        "comprenait"
                    ],
                    "answerIndex": 0,
                    "explanation": "Après 'il est indispensable que', le verbe comprendre à la 3e personne du singulier prend la forme subjonctive « comprenne »."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez l'obligation : « Il faut que vous _________ (écrire) votre nom en lettres capitales. »",
                    "acceptedAnswers": [
                        "écriviez",
                        "Ecriviez"
                    ],
                    "explanation": "Le verbe écrire au subjonctif présent avec 'vous' est « écriviez »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u14-l4": {
        "id": "fr-u14-l4",
        "unit": "fr-u14",
        "level": "B1",
        "objective": "Use the subjunctive after verbs of desire, will, permission, and prohibition (vouloir que, exiger que, interdire que).",
        "prerequisites": [
            "fr-u14-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u14-l3"
            ]
        },
        "presentation": {
            "explanation": "When a subject attempts to influence, mandate, permit, or restrict the actions of a different person, the secondary clause requires the subjunctive mood:\n\n1. Verbs of Volition and Desire:\n- 'Vouloir que...' (To want someone to...) -> 'Je veux que tu viennes.'\n- 'Désirer que...' (To desire that...) -> 'Elle désire que nous soyons présents.'\n- 'Souhaiter que...' (To wish that...) -> 'Nous souhaitons que vous réussissiez.'\n- 'Aimer que / Préférer que...' (To like/prefer that...) -> 'Je préfère qu'il vienne demain.'\n\n2. Verbs of Order and Demand:\n- 'Exiger que...' (To demand/require that...) -> 'Le directeur exige qu'ils finissent aujourd'hui.'\n- 'Ordonner que...' (To order that...) -> 'Le juge ordonne que le document soit produit.'\n- 'Demander que...' (To ask that...) -> 'Je demande que chacun fasse un effort.'\n\n3. Verbs of Permission and Prohibition:\n- 'Permettre que...' (To allow that...) -> 'L'accord permet que nous utilisions ce logiciel.'\n- 'Interdire que... / Défendre que...' (To forbid that...) -> 'La loi interdit que l'on fume ici.'\n- 'S'opposer à ce que...' (To oppose that...) -> 'Il s'oppose à ce que nous partions.'\n\n4. The Two-Subject Rule (La règle des deux sujets):\n- Same subject: Use the infinitive! ('Je veux partir' - NOT 'Je veux que je parte').\n- Different subjects: Use que + Subjunctive! ('Je veux que tu partes').",
            "examples": [
                {
                    "target": "Mon père veut absolument que je poursuive mes études universitaires à la Sorbonne.",
                    "reading": "mohn pair vuh zahb-soh-loo-mahn kuh zhuh poor-sweev may zay-tood oo-nee-vair-see-tair ah lah sohr-buhn",
                    "translation": "My father absolutely wants me to pursue my university studies at the Sorbonne."
                },
                {
                    "target": "Le règlement intérieur interdit que les employés utilisent leur téléphone personnel pendant le service.",
                    "reading": "luh reh-gluh-mahn an-tay-ryuhr an-tair-dee kuh lay zahm-plwah-yay oo-tee-leez luhr tay-lay-fohn pair-soh-nel pahn-dahn luh sair-vees",
                    "translation": "Internal regulations forbid employees from using their personal phones during working hours."
                },
                {
                    "target": "Nous exigeons que l'entreprise respecte scrupuleusement les normes de sécurité.",
                    "reading": "noo zeg-zee-zhohn kuh lahn-truh-preez res-pekt skroo-poo-luhz-mahn lay nohrm duh say-koo-ree-tay",
                    "translation": "We demand that the company scrupulously respect safety standards."
                },
                {
                    "target": "Je préfère que vous veniez chez moi plutôt que de nous retrouver au restaurant.",
                    "reading": "zhuh pray-fair kuh voo vuh-nyay shay mwah ploo-toh kuh duh noo ruh-troo-vay oh res-toh-rahn",
                    "translation": "I prefer that you come to my place rather than meet at the restaurant."
                },
                {
                    "target": "Le professeur demande que tous les étudiants éteignent leurs ordinateurs.",
                    "reading": "luh proh-feh-suhr duh-mahnd kuh too lay zay-too-dyahn ay-ten-yuh luhr zohr-dee-nah-tuhr",
                    "translation": "The teacher asks that all students turn off their computers."
                }
            ],
            "mnemonics": [
                "TWO HEADS NEED SUBJUNCTIVE: If Subject 1 wants Subject 2 to act (2 different people), you MUST bridge them with QUE + SUBJUNCTIVE!"
            ],
            "culturalNotes": [
                "Politeness protocols: In professional customer service, instead of saying bluntly 'Je veux que vous...', French speakers use the softened conditional: 'J'aimerais que vous fassiez...' or 'Je souhaiterais que vous veniez...'"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Complétez : « La directrice exige que tous les rapports _________ (être) remis avant vendredi soir. »",
                    "options": [
                        "soient",
                        "sont",
                        "seront",
                        "étaient"
                    ],
                    "answerIndex": 0,
                    "explanation": "Le verbe 'exiger que' exprime un ordre formel et commande le subjonctif : « soient »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase qui enfreint la règle des deux sujets en français standard :",
                    "options": [
                        "Je veux que je réussisse mon examen.",
                        "Je veux réussir mon examen.",
                        "Je veux que tu réussisses ton examen.",
                        "Je souhaite que nous réussissions ensemble."
                    ],
                    "answerIndex": 0,
                    "explanation": "Quand le sujet principal et le sujet subordonné sont identiques (Je... je...), on doit obligatoirement employer l'infinitif (« Je veux réussir ») et non une complétive au subjonctif."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase illustre l'expression d'une volonté avec changement de sujet ?",
                    "options": [
                        "Nous espérons partir demain matin en train.",
                        "Mes parents veulent que j'apprenne une troisième langue.",
                        "Tu penses que ce livre est passionnant.",
                        "Il sait que nous avons terminé le travail."
                    ],
                    "answerIndex": 1,
                    "explanation": "« Mes parents veulent que j'apprenne... » exprime la volonté du sujet 1 sur le sujet 2 avec le verbe au subjonctif (« apprenne »)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez avec le subjonctif de savoir : « J'exige que vous _________ toute la vérité sur cette affaire. »",
                    "acceptedAnswers": [
                        "sachiez",
                        "Sachiez"
                    ],
                    "explanation": "Le verbe savoir au subjonctif avec vous donne « sachiez »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u14-l5": {
        "id": "fr-u14-l5",
        "unit": "fr-u14",
        "level": "B1",
        "objective": "Distinguish indicative certainty from subjunctive doubt, emotion, and sentiment (penser que vs. douter que; être content que).",
        "prerequisites": [
            "fr-u14-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u14-l4"
            ]
        },
        "presentation": {
            "explanation": "The quintessential CEFR B1 milestone in French is mastering the boundary between the Indicative (mood of objective reality, assertion, and certainty) and the Subjunctive (mood of emotional reaction, subjective appraisal, doubt, and uncertainty):\n\n1. Certainty & Belief (INDICATIVE in affirmative):\n- 'Je pense que... / Je crois que... / Je trouve que...' -> INDICATIF\n- 'Il est certain que... / Il est évident que... / Il est clair que...' -> INDICATIF\n- Example: 'Je pense qu'il est compétent.' (INDICATIVE: est)\n\n2. Doubt & Negative Belief (SUBJUNCTIVE):\n- 'Je doute que...' -> SUBJONCTIF ('Je doute qu'il vienne.')\n- 'Il est douteux que... / Il est peu probable que...' -> SUBJONCTIF\n- In the negative or interrogative, penser and croire trigger the subjunctive:\n  * 'Je ne pense pas qu'il vienne.' (SUBJUNCTIVE: vienne)\n  * 'Crois-tu qu'il soit sincère ?' (SUBJUNCTIVE: soit)\n\n3. Feelings & Emotional Reactions (ALWAYS SUBJUNCTIVE):\nRegardless of whether the underlying event is factual, emotional reaction triggers the subjunctive:\n- 'Je suis content / heureux / ravi que tu sois là.'\n- 'Je regrette / Je suis triste qu'elle parte.'\n- 'J'ai peur / Je crains que nous soyons en retard.'\n- 'C'est dommage que vous ne puissiez pas venir.'",
            "examples": [
                {
                    "target": "Je pense que ce restaurant est excellent, mais je doute que nous puissions trouver une table sans réserver.",
                    "reading": "zhuh pahns kuh suh res-toh-rahn ay tek-say-lahn, may zhuh doot kuh noo pwees-yohn troo-vay oon tahbl sahn ray-zair-vay",
                    "translation": "I think this restaurant is excellent (indicative), but I doubt that we can find a table without booking (subjunctive)."
                },
                {
                    "target": "Nous sommes vraiment ravis que vous ayez accepté notre invitation au dîner.",
                    "reading": "noo suhm vreh-mahn rah-vee kuh voo zah-yay ahk-sep-tay noh-truh nan-vee-tah-syohn oh dee-nay",
                    "translation": "We are truly delighted that you accepted our dinner invitation."
                },
                {
                    "target": "Je ne crois pas qu'il fasse assez chaud pour se baigner dans la mer aujourd'hui.",
                    "reading": "zhuh nuh krwah pah keel fahs ah-say shoh poor suh ben-yay dahn lah mair oh-zhoor-dwee",
                    "translation": "I don't believe it is warm enough to swim in the sea today."
                },
                {
                    "target": "Il est évident que cette méthode fonctionne parfaitement bien.",
                    "reading": "eel ay tay-vee-dahn kuh set may-tohd fohnk-syohn pahr-fet-mahn byan",
                    "translation": "It is obvious that this method works perfectly well. (certainty = indicative)"
                },
                {
                    "target": "C'est dommage que Sophie ne sache pas conduire cette voiture manuelle.",
                    "reading": "say doh-mahzh kuh soh-fee nuh sahsh pah kohn-dweer set vwah-toor mah-noo-el",
                    "translation": "It is a pity that Sophie doesn't know how to drive this manual car."
                }
            ],
            "mnemonics": [
                "CERTAINTY = INDICATIVE (Solid ground). EMOTION & DOUBT = SUBJUNCTIVE (Cloudy feelings)!",
                "PENSER Affirmative = Indicative ('Je pense qu'il est là'). PENSER Negative = Subjunctive ('Je ne pense pas qu'il soit là')!"
            ],
            "culturalNotes": [
                "The phrase 'C'est dommage !' (What a pity!) is omnipresent in daily French conversation. When expanded with 'que', 'C'est dommage que...' invariably takes the subjunctive."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Dans quelle phrase le verbe subordonné doit-il obligatoirement être à l'indicatif ?",
                    "options": [
                        "Je suis triste qu'il...",
                        "Je doute qu'il...",
                        "Je sais qu'il...",
                        "J'ai peur qu'il..."
                    ],
                    "answerIndex": 2,
                    "explanation": "« Je sais que... » exprime un fait certain et avéré, commandant donc l'indicatif (« Je sais qu'il est là »)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez avec le mode adéquat : « Je ne pense pas que ce projet _________ (aboutir) sans financement supplémentaire. »",
                    "options": [
                        "aboutisse",
                        "aboutit",
                        "aboutira",
                        "aboutissait"
                    ],
                    "answerIndex": 0,
                    "explanation": "La forme négative « Je ne pense pas que » introduit un doute et requiert le subjonctif présent : « aboutisse »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Choisissez la phrase qui oppose correctement l'indicatif de certitude au subjonctif d'émotion :",
                    "options": [
                        "Il est sûr qu'il vienne, et je suis ravi qu'il est là.",
                        "Il est sûr qu'il vient, et je suis ravi qu'il soit là.",
                        "Il est sûr qu'il soit venu, et je suis ravi qu'il aille bien.",
                        "Il est sûr qu'il viendrait, et je suis ravi qu'il était là."
                    ],
                    "answerIndex": 1,
                    "explanation": "« Il est sûr qu'il vient » (certitude -> indicatif) s'oppose rigoureusement à « je suis ravi qu'il soit là » (émotion -> subjonctif)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez l'expression de regret : « Quel dommage que vous _________ (devoir) partir si tôt ! » (forme au subjonctif présent)",
                    "acceptedAnswers": [
                        "deviez",
                        "Deviez"
                    ],
                    "explanation": "Le verbe devoir au subjonctif présent avec 'vous' est « deviez »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u15-l1": {
        "id": "fr-u15-l1",
        "unit": "fr-u15",
        "level": "B1",
        "objective": "Use the relative pronoun QUI as the grammatical subject of the subordinate clause without elision.",
        "prerequisites": [
            "fr-u14-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u14-l5"
            ]
        },
        "presentation": {
            "explanation": "Relative pronouns connect two clauses by replacing a common antecedent noun. QUI functions as the grammatical subject of the verb that immediately follows it:\n\n1. The Core Syntactic Role:\n- QUI + [VERBE] (QUI is always the subject executing the action in the relative clause).\n- Example: 'J'ai un collègue. Ce collègue parle japonais.' -> 'J'ai un collègue QUI parle japonais.'\n\n2. The Golden Rule of Non-Elision:\nQUI NEVER ELIDES before vowels! (QUI + il -> 'qui il', NEVER 'qu'il').\n- Correct: 'C'est l'homme qui habite ici.' / 'C'est l'amie qui arrive demain.'\n- Fatal mistake: 'C'est l'amie qu'arrive demain' (INCORRECT).\n\n3. Agreement of the Subordinate Verb:\nThe verb after qui agrees in person and number with its antecedent:\n- 'C'est moi QUI ai raison.' (1st person singular!)\n- 'C'est vous QUI avez les clés.' (2nd person plural!)\n- 'Ce sont les étudiants QUI travaillent ici.' (3rd person plural!)",
            "examples": [
                {
                    "target": "Voici l'architecte qui a conçu la nouvelle bibliothèque municipale.",
                    "reading": "vwah-see lahr-shee-tekt kee ah kohn-soo lah noo-vel bee-blee-oh-tek moo-nee-see-pahl",
                    "translation": "Here is the architect who designed the new municipal library."
                },
                {
                    "target": "C'est une opportunité exceptionnelle qui arrive rarement dans une carrière.",
                    "reading": "say toon noh-pohr-too-nee-tay ek-sep-syohn-nel kee ah-reev rahr-mahn dahn zoon kah-ryair",
                    "translation": "It is an exceptional opportunity that rarely comes in a career."
                },
                {
                    "target": "C'est moi qui suis responsable de la gestion du budget cette année.",
                    "reading": "say mwah kee swee res-pohn-sahbl duh lah zhes-tyohn doo bood-zheh set ah-nay",
                    "translation": "It is I who am responsible for managing the budget this year."
                },
                {
                    "target": "Les scientifiques qui travaillent sur ce vaccin ont publié leurs résultats.",
                    "reading": "lay syahn-tee-feek kee trah-vah-yuh soor suh vahk-san ohn poo-blee-ay luhr ray-zool-tah",
                    "translation": "The scientists who work on this vaccine published their results."
                },
                {
                    "target": "Le train qui part à quatorze heures arrive directement à Marseille.",
                    "reading": "luh tran kee pahr ah kah-tohr-z‿uhr ah-reev dee-rek-tuh-mahn ah mahr-say",
                    "translation": "The train that leaves at 2 PM arrives directly in Marseille."
                }
            ],
            "mnemonics": [
                "QUI STAYS WHOLE: Qui NEVER drops its 'i' (qui arrive, qui est). QUE is the one that drops its 'e' (qu'il)!",
                "QUI + VERB: If a conjugated verb immediately follows, you need QUI!"
            ],
            "culturalNotes": [
                "In French formal rhetoric and political discourse, cleft sentences with 'C'est... qui' ('C'est nous qui avons pris cette responsabilité') are standard for projecting decisive accountability."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Reliez les deux phrases avec QUI : « J'ai rencontré un étudiant. Cet étudiant apprend l'arabe. »",
                    "options": [
                        "J'ai rencontré un étudiant qui apprend l'arabe.",
                        "J'ai rencontré un étudiant qu'apprend l'arabe.",
                        "J'ai rencontré un étudiant que apprend l'arabe.",
                        "J'ai rencontré un étudiant dont apprend l'arabe."
                    ],
                    "answerIndex": 0,
                    "explanation": "QUI est le sujet du verbe 'apprend' et ne s'élide jamais devant une voyelle."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Accordez correctement le verbe avec le pronom sujet QUI : « C'est vous qui _________ raison. »",
                    "options": [
                        "avez",
                        "a",
                        "ont",
                        "avons"
                    ],
                    "answerIndex": 0,
                    "explanation": "Le verbe s'accorde avec l'antécédent 'vous', donc « C'est vous qui avez raison »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase illustre un emploi fautif du pronom relatif qui ?",
                    "options": [
                        "L'employé qui ouvre la porte est ponctuel.",
                        "La femme qu'arrive à la gare est ma cousine.",
                        "C'est moi qui ai envoyé le courriel.",
                        "Les fleurs qui poussent ici sont sauvages."
                    ],
                    "answerIndex": 1,
                    "explanation": "« qu'arrive » est une faute ; QUI ne s'élide jamais devant une voyelle (« qui arrive »)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez la mise en relief : « C'est nous qui _________ (organiser) la conférence de presse. » (forme au présent de l'indicatif)",
                    "acceptedAnswers": [
                        "organisons",
                        "Organisons"
                    ],
                    "explanation": "Le verbe s'accorde avec le pronom antécédent 'nous' : « organisons »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u15-l2": {
        "id": "fr-u15-l2",
        "unit": "fr-u15",
        "level": "B1",
        "objective": "Use the relative pronoun QUE (qu') as the direct object and execute past participle agreement when applicable.",
        "prerequisites": [
            "fr-u15-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u15-l1"
            ]
        },
        "presentation": {
            "explanation": "QUE (or qu' before a vowel or silent h) replaces a direct object (COD) in the relative clause:\n\n1. The Core Syntactic Role:\n- QUE + [SUJET] + [VERBE] (QUE is the receiver of the action; a distinct subject always follows).\n- Example: 'J'ai lu le roman. Tu m'as conseillé ce roman.' -> 'J'ai lu le roman QUE tu m'as conseillé.'\n\n2. Mandatory Elision:\nUnlike qui, QUE elides systematically before vowels and silent h: 'qu'il', 'qu'elle', 'qu'on', 'qu'ils', 'qu'un'.\n- Example: 'Le cadeau QU'IL a offert.'\n\n3. Past Participle Agreement Rule (Accord du participe passé avec le COD antécédent):\nWhen the subordinate verb is in a compound tense conjugated with avoir (such as the passé composé), the past participle MUST agree in gender and number with the preceding direct object represented by QUE:\n- 'La lettre QUE j'ai écritE.' (lettre = fem. sing. -> +e)\n- 'Les photos QUE tu as prisES.' (photos = fem. plur. -> +es)\n- 'Les livres QUE nous avons achetéS.' (livres = masc. plur. -> +s)",
            "examples": [
                {
                    "target": "La robe que Sophie a achetée hier est particulièrement élégante.",
                    "reading": "lah rohb kuh soh-fee ah ahsh-tay yair ay pahr-tee-koo-lyair-mahn ay-lay-gahnt",
                    "translation": "The dress that Sophie bought yesterday is particularly elegant."
                },
                {
                    "target": "Les documents confidentiels que le directeur a signés sont archivés.",
                    "reading": "lay doh-koo-mahn kohn-fee-dahn-syel kuh luh dee-rek-tuhr ah seen-yay sohn tahr-shee-vay",
                    "translation": "The confidential documents that the director signed are archived."
                },
                {
                    "target": "C'est exactement la proposition qu'il attendait depuis plusieurs semaines.",
                    "reading": "say teg-zahk-tuh-mahn lah proh-poh-zee-syohn keel ah-tahn-deh duh-pwee ploo-zyuhr suh-men",
                    "translation": "It is exactly the proposal that he had been waiting for for several weeks."
                },
                {
                    "target": "Voici les clés que nous avions égarées lors de notre voyage.",
                    "reading": "vwah-see lay klay kuh noo zah-vyohn zay-gah-ray lohr duh noh-truh vwah-yahzh",
                    "translation": "Here are the keys that we had misplaced during our trip."
                },
                {
                    "target": "Le film que vous m'avez recommandé était absolument remarquable.",
                    "reading": "luh feelm kuh voo mah-vay ruh-koh-mahn-day ay-teh tahb-soh-loo-mahn ruh-mahr-kahbl",
                    "translation": "The movie that you recommended to me was absolutely remarkable."
                }
            ],
            "mnemonics": [
                "QUE + SUBJECT, QUI + VERB: If a subject (il, elle, vous) follows, use QUE! If a verb directly follows, use QUI!",
                "PRECEDING COD AGREEMENT: Look backward before avoir! If QUE represents a feminine or plural noun, dress up the past participle!"
            ],
            "culturalNotes": [
                "Past participle agreement with preceding 'que' is one of the most celebrated grammatical benchmarks of high-register French."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez la phrase qui applique correctement l'accord du participe passé avec le pronom relatif QUE :",
                    "options": [
                        "Les tartes que maman a préparées sont délicieuses.",
                        "Les tartes que maman a préparé sont délicieuses.",
                        "Les tartes qui maman a préparé sont délicieuses.",
                        "Les tartes qu'il a préparé sont délicieuses."
                    ],
                    "answerIndex": 0,
                    "explanation": "« tartes » est féminin pluriel et précède l'auxiliaire avoir via 'que' ; le participe passé prend donc '-es' : « préparées »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez avec le pronom adéquat : « Le rapport _________ l'ingénieur a rédigé est très complet. »",
                    "options": [
                        "que",
                        "qui",
                        "dont",
                        "où"
                    ],
                    "answerIndex": 0,
                    "explanation": "'L'ingénieur' est le sujet et le rapport est l'objet direct du verbe rédiger ; on emploie « que »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase comporte une faute d'accord avec le pronom relatif que ?",
                    "options": [
                        "La maison que mes grands-parents ont construite est ancienne.",
                        "Les lettres qu'il a envoyées sont arrivées ce matin.",
                        "Les valises que nous avons emporté étaient trop lourdes.",
                        "La chanson que nous avons entendue était émouvante."
                    ],
                    "answerIndex": 2,
                    "explanation": "« valises » étant féminin pluriel, le participe passé 'emporté' devait s'accorder avec '-es' (« emportées »)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Écrivez la forme correcte du participe passé : « Voici la pomme que j'ai _________ (manger). »",
                    "acceptedAnswers": [
                        "mangée",
                        "Mangée"
                    ],
                    "explanation": "L'antécédent 'pomme' est féminin singulier, donc accord : « mangée »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u15-l3": {
        "id": "fr-u15-l3",
        "unit": "fr-u15",
        "level": "B1",
        "objective": "Use the relative pronoun OÙ to express spatial locations and precise points in time.",
        "prerequisites": [
            "fr-u15-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u15-l2"
            ]
        },
        "presentation": {
            "explanation": "The relative pronoun OÙ (always written with a grave accent ù to distinguish it from the conjunction ou / 'or') replaces expressions of place (space) and time (moment):\n\n1. OÙ of Place (Spatial Reference):\nTranslates to English 'where', 'in which', 'to which':\n- 'La ville OÙ je suis né.' (The town where I was born.)\n- 'Le restaurant OÙ nous avons déjeuné.' (The restaurant where we had lunch.)\n- Note with D'OÙ: indicates geographic origin ('Le village d'où il vient' - The village from where he comes).\n\n2. OÙ of Time (Temporal Reference):\nTranslates to English 'when', 'in which', 'on which':\nIn French, NEVER use 'quand' as a relative pronoun with a noun antecedent!\n- Incorrect: 'Le jour quand nous sommes arrivés...' (ANGLICISM)\n- Correct: 'Le jour OÙ nous sommes arrivés...' (The day [when] we arrived...)\nCommon temporal triggers: l'année où, le moment où, l'époque où, la première fois où, à l'heure où.",
            "examples": [
                {
                    "target": "Paris est la ville où mes parents se sont rencontrés pour la première fois.",
                    "reading": "pah-ree ay lah veel oo may pah-rahn suh sohn rahn-kohn-tray poor lah pruh-myair fwah",
                    "translation": "Paris is the city where my parents met for the first time."
                },
                {
                    "target": "Je me souviendrai toujours du jour où nous avons décroché notre diplôme.",
                    "reading": "zhuh muh soo-vyan-dray too-zhoor doo zhoor oo noo zah-vyohn day-kroh-shay noh-truh deep-lohm",
                    "translation": "I will always remember the day when we earned our diploma."
                },
                {
                    "target": "Voici le village d'où mes ancêtres sont originaires.",
                    "reading": "vwah-see luh vee-lahzh doo may zahn-setr sohn toh-ree-zhee-nair",
                    "translation": "Here is the village from which my ancestors originate."
                },
                {
                    "target": "Au moment où l'alarme a retenti, tout le monde a évacué le bâtiment.",
                    "reading": "oh moh-mahn oo lah-lahrm ah ruh-tahn-tee, too luh mohnd ah ay-vah-koo-ay luh bah-tee-mahn",
                    "translation": "The moment the alarm sounded, everyone evacuated the building."
                },
                {
                    "target": "C'est une époque où les communications internationales étaient lentes et difficiles.",
                    "reading": "say toon nay-pohk oo lay koh-moo-nee-kah-syohn an-tair-nah-syoh-nahl ay-teh lahnt ay dee-fee-seel",
                    "translation": "It was an era when international communications were slow and difficult."
                }
            ],
            "mnemonics": [
                "NEVER 'LE JOUR QUAND': In English you say 'the day WHEN', but French ALWAYS says 'le jour OÙ'!",
                "The grave accent (ù) plants OÙ like a pin on a map or a calendar date!"
            ],
            "culturalNotes": [
                "French literature abounds with poetic temporal formulations using où, such as Victor Hugo's classic opening: 'À l'heure où blanchit la campagne...'"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle phrase traduit correctement « I remember the year when we moved to Lyon » ?",
                    "options": [
                        "Je me rappelle l'année où nous avons déménagé à Lyon.",
                        "Je me rappelle l'année quand nous avons déménagé à Lyon.",
                        "Je me rappelle l'année que nous avons déménagé à Lyon.",
                        "Je me rappelle l'année dont nous avons déménagé à Lyon."
                    ],
                    "answerIndex": 0,
                    "explanation": "Pour un antécédent temporel ('l'année'), le pronom relatif obligatoire en français est « où » (et jamais 'quand')."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez avec le pronom relatif convenable : « C'est l'hôtel _________ nous avons séjourné l'été dernier. »",
                    "options": [
                        "où",
                        "qui",
                        "que",
                        "dont"
                    ],
                    "answerIndex": 0,
                    "explanation": "L'antécédent 'l'hôtel' est un lieu où se déroule l'action ; on emploie le pronom relatif « où »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Identifiez l'anglicisme incorrect parmi les propositions suivantes :",
                    "options": [
                        "Le moment où il a parlé était solennel.",
                        "Le jour quand il est parti était pluvieux.",
                        "La maison où j'ai grandi a été vendue.",
                        "Le pays d'où proviennent ces épices est lointain."
                    ],
                    "answerIndex": 1,
                    "explanation": "« Le jour quand » est un anglicisme incorrect ; la syntaxe française exige « Le jour où »."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez l'indication de temps : « C'était à l'époque _________ le train à vapeur dominait les transports. »",
                    "acceptedAnswers": [
                        "où",
                        "Où"
                    ],
                    "explanation": "Le pronom relatif temporel s'écrit avec un accent grave : « où »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u15-l4": {
        "id": "fr-u15-l4",
        "unit": "fr-u15",
        "level": "B1",
        "objective": "Use the relative pronoun DONT to replace prepositional complements introduced by 'de' (parler de, avoir besoin de, avoir peur de).",
        "prerequisites": [
            "fr-u15-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u15-l3"
            ]
        },
        "presentation": {
            "explanation": "DONT replaces any person, thing, or concept governed by the preposition DE (de, du, de la, de l', des):\n\n1. Verbs Followed by 'DE':\n- 'parler de' -> Le livre DONT je parle. (The book I'm talking about.)\n- 'avoir besoin de' -> L'outil DONT j'ai besoin. (The tool I need.)\n- 'avoir peur de' -> La situation DONT ils ont peur. (The situation they fear.)\n- 'se souvenir de' -> Les vacances DONT nous nous souvenons. (The vacation we remember.)\n- Other verbs: s'occuper de, rêver de, profiter de, dépendre de, souffrir de.\n\n2. Adjectives Followed by 'DE':\n- 'être fier de' -> Mon fils, DONT je suis si fier. (My son, of whom I am so proud.)\n- 'être responsable de', 'être satisfait de', 'être amoureux de'.\n\n3. Expression of Possession (English 'Whose' / 'Of which'):\n- 'J'ai rencontré un écrivain. Le roman de cet écrivain est un succès.' -> 'J'ai rencontré un écrivain DONT le roman est un succès.'\n\n4. Strict Word Order with Articles:\nIn French, DONT is ALWAYS followed by the definite article + noun (dont LE père, dont LA voiture, dont LES travaux) — never omit the article!",
            "examples": [
                {
                    "target": "C'est précisément l'ordinateur portable dont j'ai besoin pour mon travail de graphiste.",
                    "reading": "say pray-see-zuh-mahn lohr-dee-nah-tuhr pohr-tahbl dohn zhay buh-zwan poor mohn trah-vah-yuh duh grah-feest",
                    "translation": "This is precisely the laptop I need for my graphic design work."
                },
                {
                    "target": "Voici l'étudiante talentueuse dont les professeurs louent la rigueur exemplaire.",
                    "reading": "vwah-see lay-too-dyahnt tah-lahn-twuhz dohn lay proh-feh-suhr loo lah ree-guhr eg-zahm-plair",
                    "translation": "Here is the talented student whose professors praise her exemplary rigor."
                },
                {
                    "target": "Le projet innovant dont nous parlons depuis un mois a enfin été validé.",
                    "reading": "luh proh-zheh ee-noh-vahn dohn noo pahr-lohn duh-pwee zuhn mwah ah ahn-fan ay-tay vah-lee-day",
                    "translation": "The innovative project we have been talking about for a month has finally been validated."
                },
                {
                    "target": "C'est une expérience inoubliable dont elle se souviendra toute sa vie.",
                    "reading": "say toon nek-spay-ryahns ee-noo-blee-ahbl dohn tel suh soo-vyan-drah toot sah vee",
                    "translation": "It is an unforgettable experience that she will remember all her life."
                },
                {
                    "target": "Le musée du Louvre abrite des chefs-d'œuvre dont la renommée est mondiale.",
                    "reading": "luh moo-zay doo loovr ah-breet day sheh-duhvr dohn lah ruh-noh-may ay mohn-dyahl",
                    "translation": "The Louvre museum houses masterpieces whose renown is worldwide."
                }
            ],
            "mnemonics": [
                "DONT = 'DE' IN DISGUISE: If the verb or idiom contains DE (avoir besoin DE, parler DE), DONT is the only key that fits!",
                "DONT + LE/LA/LES: Never skip the article! 'Whose car' = 'dont LA voiture'."
            ],
            "culturalNotes": [
                "While informal spoken French sometimes replaces 'dont' with 'que' ('le film que je te parlais'), this is considered an uneducated blunder in academic and professional contexts."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Reliez les deux propositions : « C'est un collègue. J'apprécie le professionnalisme de ce collègue. »",
                    "options": [
                        "C'est un collègue dont j'apprécie le professionnalisme.",
                        "C'est un collègue que j'apprécie son professionnalisme.",
                        "C'est un collègue qui j'apprécie le professionnalisme.",
                        "C'est un collègue où j'apprécie le professionnalisme."
                    ],
                    "answerIndex": 0,
                    "explanation": "Le complément de possession 'de ce collègue' est remplacé par DONT, suivi de l'article défini 'le professionnalisme'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez la phrase : « Le document _________ nous avons discuté hier est confidentiel. »",
                    "options": [
                        "dont",
                        "que",
                        "qui",
                        "où"
                    ],
                    "answerIndex": 0,
                    "explanation": "Le verbe 'discuter de' se construit avec la préposition 'de' ; le pronom relatif requis est donc « dont »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Pourquoi utilise-t-on DONT dans la phrase : « C'est l'erreur dont j'avais le plus peur » ?",
                    "options": [
                        "Parce que l'expression verbale est 'avoir peur DE'.",
                        "Parce que l'erreur est un sujet d'action.",
                        "Parce que l'erreur indique un lieu précis.",
                        "Parce que la phrase est au passé composé."
                    ],
                    "answerIndex": 0,
                    "explanation": "La locution verbale 'avoir peur de' régit la préposition DE, ce qui impose l'emploi du pronom relatif DONT."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez avec le pronom relatif adéquat : « Voici le matériel _________ nous avons besoin pour la rénovation. »",
                    "acceptedAnswers": [
                        "dont",
                        "Dont"
                    ],
                    "explanation": "L'expression 'avoir besoin de' impose le pronom relatif « dont »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u15-l5": {
        "id": "fr-u15-l5",
        "unit": "fr-u15",
        "level": "B1",
        "objective": "Deploy indefinite relative pronouns CE QUI, CE QUE, and CE DONT to refer to unspecified concepts or whole propositions.",
        "prerequisites": [
            "fr-u15-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u15-l4"
            ]
        },
        "presentation": {
            "explanation": "When a relative clause has no specific noun antecedent (referring instead to an entire idea, an abstract concept, or meaning 'what / that which'), French pairs the demonstrative pronoun CE with the relative pronouns:\n\n1. CE QUI (Indefinite Subject -> 'what / that which happens'):\n- Followed directly by a verb.\n- 'Ce qui m'intéresse, c'est l'histoire.' (What interests me is history.)\n- 'Il est arrivé en retard, ce qui a énervé le patron.' (He arrived late, which annoyed the boss.)\n\n2. CE QUE / CE QU' (Indefinite Direct Object -> 'what / that which [someone] does'):\n- Followed by subject + verb.\n- 'Je comprends ce que tu dis.' (I understand what you are saying.)\n- 'Fais ce qu'il te demande.' (Do what he asks you.)\n\n3. CE DONT (Indefinite Object of 'DE' -> 'what / that which [someone] needs/speaks of'):\n- Used with verbs and adjectives requiring de.\n- 'Ce dont j'ai besoin, c'est de repos.' (What I need is rest.)\n- 'Ce dont nous parlons est confidentiel.' (What we are discussing is confidential.)\n\n4. Emphatic Cleft Sentences:\n- 'Ce qui... c'est...' / 'Ce que... c'est...' / 'Ce dont... c'est...'\n- Example: 'Ce que j'aime le plus à Paris, ce sont les musées.'",
            "examples": [
                {
                    "target": "Ce qui m'impressionne le plus chez ce pianiste, c'est sa virtuosité technique.",
                    "reading": "suh kee mam-preh-syohn luh ploo shay suh pyah-neest, say sah veer-too-oh-zee-tay tek-neek",
                    "translation": "What impresses me most about this pianist is his technical virtuosity."
                },
                {
                    "target": "Dis-moi franchement ce que tu penses de cette nouvelle stratégie commerciale.",
                    "reading": "dee-mwah frahnsh-mahn suh kuh too pahns duh set noo-vel strah-tay-zhee koh-mair-syahl",
                    "translation": "Tell me frankly what you think of this new commercial strategy."
                },
                {
                    "target": "Ce dont nous manquons cruellement dans ce projet, ce sont des ressources financières.",
                    "reading": "suh dohn noo mahn-kohn kroo-el-mahn dahn suh proh-zheh, suh sohn day ruh-soors fee-nahn-syair",
                    "translation": "What we cruelly lack in this project is financial resources."
                },
                {
                    "target": "Il a oublié notre rendez-vous, ce qui prouve son manque total de sérieux.",
                    "reading": "eel ah oo-blee-ay noh-truh rahn-day-voo, suh kee proov sohn mahnk toh-tahl duh say-ryuh",
                    "translation": "He forgot our appointment, which proves his complete lack of reliability."
                },
                {
                    "target": "Prenez exactement ce dont vous avez besoin pour terminer les travaux ce soir.",
                    "reading": "pruh-nay zeg-zahk-tuh-mahn suh dohn voo zah-vay buh-zwan poor tair-mee-nay lay trah-voh suh swahr",
                    "translation": "Take exactly what you need to finish the work tonight."
                }
            ],
            "mnemonics": [
                "CE QUI + VERB (What acts). CE QUE + SUBJECT (What you do). CE DONT + 'DE' VERB (What you need/speak of)!",
                "Never translate 'what' as 'quoi' in the middle of a sentence like 'I know what you did'! Use 'Je sais CE QUE tu as fait'!"
            ],
            "culturalNotes": [
                "The emphatic formula 'Ce qui compte, c'est...' (What matters is...) is a staple of French philosophical essays and persuasive discourse."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Complétez la mise en relief : « _________ me plaît dans cette ville, c'est son dynamisme culturel. »",
                    "options": [
                        "Ce qui",
                        "Ce que",
                        "Ce dont",
                        "Quoi"
                    ],
                    "answerIndex": 0,
                    "explanation": "L'élément recherché est le sujet du verbe 'plaît' ; on emploie donc le pronom indéfini sujet « Ce qui »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Traduisez « What I need is a good coffee » :",
                    "options": [
                        "Ce dont j'ai besoin, c'est d'un bon café.",
                        "Ce que j'ai besoin, c'est d'un bon café.",
                        "Ce qui j'ai besoin, c'est d'un bon café.",
                        "Quoi j'ai besoin, c'est d'un bon café."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'expression 'avoir besoin de' exige « Ce dont »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Choisissez la phrase où 'ce que' et 'ce dont' sont employés à bon escient :",
                    "options": [
                        "Je sais ce dont tu as écrit et ce que tu parles.",
                        "Je sais ce que tu as écrit et ce dont tu parles.",
                        "Je sais ce qui tu as écrit et ce que tu parles.",
                        "Je sais ce que tu as écrit et ce qui tu parles."
                    ],
                    "answerIndex": 1,
                    "explanation": "« écrire » prend un COD direct ('ce que tu as écrit'), tandis que « parler » prend la préposition de ('ce dont tu parles')."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez la proposition : « Expliquez-moi ce _________ s'est passé hier soir. » (sujet de 's'est passé')",
                    "acceptedAnswers": [
                        "qui",
                        "Qui"
                    ],
                    "explanation": "Comme l'élément est le sujet du verbe s'est passé, on utilise « ce qui »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u16-l1": {
        "id": "fr-u16-l1",
        "unit": "fr-u16",
        "level": "B1",
        "objective": "Form comparative structures with adjectives and adverbs (plus...que, moins...que, aussi...que).",
        "prerequisites": [
            "fr-u15-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u15-l5"
            ]
        },
        "presentation": {
            "explanation": "In French, comparisons of superiority, inferiority, and equality for adjectives and adverbs use tripartite syntactic frames:\n\n1. Superiority: PLUS + [ADJECTIF / ADVERBE] + QUE ('more... than / -er than')\n- 'Le TGV est plus rapide que la voiture.' (Adjective: fast)\n- 'Thomas court plus vite que son frère.' (Adverb: quickly)\n\n2. Inferiority: MOINS + [ADJECTIF / ADVERBE] + QUE ('less... than')\n- 'Ce musée est moins fréquenté que le Louvre.'\n- 'Elle s'exprime moins clairement que d'habitude.'\n\n3. Equality: AUSSI + [ADJECTIF / ADVERBE] + QUE ('as... as')\n- 'Lyon est aussi belle que Bordeaux.' (Notice adjective agreement with Lyon / feminine).\n- 'Il chante aussi bien que son professeur.'\n\n4. Pronoun and Agreement Rules:\n- Disjunctive tonic pronouns follow que: 'plus grand que MOI', 'moins rapide que LUI'.\n- Adjectives in comparisons always agree in gender and number with the subject noun!\n- Elision: que becomes qu' before vowels: 'plus rapide qu'un avion'.",
            "examples": [
                {
                    "target": "Le nouveau modèle de train est beaucoup plus écologique que l'ancien.",
                    "reading": "luh noo-voh moh-del duh tran ay boh-koo ploo zay-koh-loh-zheek kuh lahn-syan",
                    "translation": "The new train model is much more eco-friendly than the old one."
                },
                {
                    "target": "Cette exposition temporaire est moins chère que celle du Grand Palais.",
                    "reading": "set tek-spoh-zee-syohn tahm-poh-rair ay mwan shair kuh sel doo grahn pah-leh",
                    "translation": "This temporary exhibition is less expensive than the one at the Grand Palais."
                },
                {
                    "target": "Sophie conduit aussi prudemment que son moniteur d'auto-école.",
                    "reading": "soh-fee kohn-dwee toh-see proo-dah-mahn kuh sohn moh-nee-tuhr doh-toh-ay-kohl",
                    "translation": "Sophie drives as carefully as her driving instructor."
                },
                {
                    "target": "Ces nouveaux appartements sont plus spacieux que nos anciens bureaux.",
                    "reading": "say noo-voh zah-pahr-tuh-mahn sohn ploo spah-syuh kuh noh zahn-syan boo-roh",
                    "translation": "These new apartments are more spacious than our old offices."
                },
                {
                    "target": "Le trajet en métro est aussi rapide qu'en taxi aux heures de pointe.",
                    "reading": "luh trah-zheh ahn may-troh ay toh-see rah-peed kahn tahk-see oh zuhr duh pwant",
                    "translation": "The subway trip is as fast as a taxi during rush hour."
                }
            ],
            "mnemonics": [
                "ADJECTIVES & ADVERBS use AUSSI...QUE! Nouns use AUTANT DE...QUE! Don't mix up Aussi (qualities) and Autant (quantities)!"
            ],
            "culturalNotes": [
                "In French culture, passionate gastronomic debates comparing regional ingredients (such as salted Breton butter vs. sweet butter) are an essential social tradition."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Complétez la comparaison d'égalité avec l'adjectif : « La cuisine italienne est _________ réputée _________ la cuisine française. »",
                    "options": [
                        "aussi / que",
                        "autant / que",
                        "plus / de",
                        "autant de / que"
                    ],
                    "answerIndex": 0,
                    "explanation": "Avec un adjectif qualificatif ('réputée'), la comparaison d'égalité se forme avec « aussi... que »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase comparative correctement formée en français :",
                    "options": [
                        "Mon frère est plus grand que moi.",
                        "Mon frère est plus grand que je.",
                        "Mon frère est plus grand de moi.",
                        "Mon frère est aussi grand de moi."
                    ],
                    "answerIndex": 0,
                    "explanation": "Après 'que' dans une structure comparative, on emploie obligatoirement le pronom tonique (« moi »)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Choisissez la phrase qui traduit fidèlement : « She works less efficiently than him » :",
                    "options": [
                        "Elle travaille moins efficacement que lui.",
                        "Elle travaille aussi efficacement que il.",
                        "Elle travaille plus efficacement de lui.",
                        "Elle travaille moins efficace que lui."
                    ],
                    "answerIndex": 0,
                    "explanation": "« moins efficacement que lui » associe l'adverbe, la comparaison d'infériorité et le pronom tonique 'lui'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez avec le mot comparatif de supériorité : « Cet exercice est _________ difficile que le précédent. »",
                    "acceptedAnswers": [
                        "plus",
                        "Plus"
                    ],
                    "explanation": "Le comparatif de supériorité avec un adjectif s'exprime avec « plus »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u16-l2": {
        "id": "fr-u16-l2",
        "unit": "fr-u16",
        "level": "B1",
        "objective": "Form comparative structures with nouns (plus de...que, autant de...que) and verbs (plus que, autant que).",
        "prerequisites": [
            "fr-u16-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u16-l1"
            ]
        },
        "presentation": {
            "explanation": "Comparing quantities of nouns and degrees of verbal action follows distinct syntax rules in French:\n\n1. Comparing Nouns (Quantity):\n- Superiority: PLUS DE + [NOM] + QUE (DE) ('more [noun] than') -> 'J'ai plus de temps que toi.'\n- Inferiority: MOINS DE + [NOM] + QUE (DE) ('fewer/less [noun] than') -> 'Il a moins de bagages qu'elle.'\n- Equality: AUTANT DE + [NOM] + QUE (DE) ('as much/many [noun] as') -> 'Nous avons autant d'idées que vous.'\n- Note: The preposition de / d' is mandatory after plus, moins, autant before a noun.\n\n2. Comparing Verbs (Action Intensity):\n- Superiority: [VERBE] + PLUS QUE ('acts more than') -> 'Elle travaille plus que moi.'\n- Inferiority: [VERBE] + MOINS QUE ('acts less than') -> 'Il dort moins que d'habitude.'\n- Equality: [VERBE] + AUTANT QUE ('acts as much as') -> 'Ils voyagent autant que nous.'\n\n3. Phonetic Note for PLUS:\nIn comparisons with adjectives ('plus grand'), the 's' of plus is silent (/ply/). When comparing quantities or verbs ('Il travaille plus' / 'plus de temps'), the 's' is pronounced /plys/ in positive comparisons!",
            "examples": [
                {
                    "target": "Cette petite boulangerie a autant de clients que le grand supermarché.",
                    "reading": "set puh-teet boo-lahn-zhree ah oh-tahn duh klee-ahn kuh luh grahn soo-pair-mahr-shay",
                    "translation": "This small bakery has as many customers as the big supermarket."
                },
                {
                    "target": "Les résidents de banlieue passent plus de temps dans les transports que les Parisiens.",
                    "reading": "lay ray-zee-dahn duh bahn-lyuh pahs ploo duh tahn dahn lay trahn-spohr kuh lay pah-ree-zyan",
                    "translation": "Suburban residents spend more time in transit than Parisians."
                },
                {
                    "target": "Notre équipe a obtenu moins de financements que prévu pour ce trimestre.",
                    "reading": "noh-truh ay-keep ah ohb-tuh-noo mwan duh fee-nahns-mahn kuh pray-voo poor suh tree-mestr",
                    "translation": "Our team obtained less funding than anticipated for this quarter."
                },
                {
                    "target": "Mon collègue s'entraîne plus que moi pour le marathon de Paris.",
                    "reading": "mohn koh-leg sahn-tren ploos kuh mwah poor luh mah-rah-tohn duh pah-ree",
                    "translation": "My colleague trains more than I do for the Paris marathon."
                },
                {
                    "target": "Malgré son emploi du temps chargé, il lit autant que son frère universitaire.",
                    "reading": "mahl-gray sohn nahm-plwah doo tahn shahr-zhay, eel lee oh-tahn kuh sohn frair oo-nee-vair-see-tair",
                    "translation": "Despite his busy schedule, he reads as much as his university brother."
                }
            ],
            "mnemonics": [
                "NOUNS LOVE 'DE': Plus DE livres, Moins DE travail, Autant DE café! Never drop the DE when counting nouns!",
                "AUTANT = QUANTITY / ACTION. AUSSI = QUALITY (Adjectives)."
            ],
            "culturalNotes": [
                "In French economic debates, 'le pouvoir d'achat' (purchasing power) is continuously framed around 'gagner plus de pouvoir d'achat' vs 'avoir moins de dépenses'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle phrase exprime correctement une égalité de quantité de noms ?",
                    "options": [
                        "Elle a autant de patience que son père.",
                        "Elle a aussi de patience que son père.",
                        "Elle a autant patience que son père.",
                        "Elle a aussi patience que son père."
                    ],
                    "answerIndex": 0,
                    "explanation": "Pour un nom ('patience'), la comparaison d'égalité exige « autant de... que »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez la comparaison d'action : « En hiver, les enfants jouent dehors _________ qu'en été. »",
                    "options": [
                        "moins",
                        "moins de",
                        "aussi",
                        "autant de"
                    ],
                    "answerIndex": 0,
                    "explanation": "Pour comparer un verbe ('jouent'), on emploie directement « moins que » sans la préposition 'de'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Choisissez l'option correcte pour compléter : « Pierre gagne _________ argent que Marc, mais il dépense _________ que lui. »",
                    "options": [
                        "autant d' / plus",
                        "aussi d' / plus de",
                        "autant / plus de",
                        "aussi / autant de"
                    ],
                    "answerIndex": 0,
                    "explanation": "Devant le nom 'argent' on met « autant d' », et après le verbe 'dépense' on met « plus »."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez la formule de quantité : « Nous avons reçu autant _________ candidatures que l'an dernier. »",
                    "acceptedAnswers": [
                        "de",
                        "De"
                    ],
                    "explanation": "Après autant pour un nom, la préposition requise est « de »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u16-l3": {
        "id": "fr-u16-l3",
        "unit": "fr-u16",
        "level": "B1",
        "objective": "Master irregular comparatives: meilleur (better adjective) vs. mieux (better adverb), and pire (worse).",
        "prerequisites": [
            "fr-u16-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u16-l2"
            ]
        },
        "presentation": {
            "explanation": "One of the most essential distinctions in French grammar is separating the comparative of the adjective bon (meilleur) from the comparative of the adverb bien (mieux):\n\n1. MEILLEUR(E)(S) = Comparative of the Adjective BON ('Better' / modifies a NOUN):\n- 'Ce vin est bon. Ce vin-ci est MEILLEUR.' (Adjective agreements: meilleur, meilleure, meilleurs, meilleures).\n- 'La baguette tradition est meilleure que la baguette blanche.'\n- NEVER SAY 'plus bon'! ('Plus bon' is incorrect in standard French).\n\n2. MIEUX = Comparative of the Adverb BIEN ('Better' / modifies a VERB or ADJECTIVE):\n- Invariable word (never changes spelling).\n- 'Marc chante bien. Julie chante MIEUX.'\n- 'Ce médicament m'aide à dormir mieux.'\n- NEVER SAY 'plus bien'! ('Plus bien' is incorrect).\n\n3. PIRE / PLUS MAUVAIS = Comparative of MAUVAIS ('Worse'):\n- 'Pire' is preferred for abstract, qualitative, or moral severity ('C'est encore pire que prévu' - It's even worse than expected).\n- 'Plus mauvais' is used for concrete sensory defects ('Ce café est plus mauvais que le premier').\n\n4. PIS = Archaic comparative of mal:\n- Preserved in fixed idioms: 'tant pis' (too bad / oh well), 'de mal en pis' (from bad to worse).",
            "examples": [
                {
                    "target": "Cette boulangerie artisanale prépare les meilleurs croissants du quartier.",
                    "reading": "set boo-lahn-zhree ahr-tee-zah-nahl pray-pahr lay may-yuhr krwah-sahn doo kahr-tyay",
                    "translation": "This artisanal bakery makes the best croissants in the neighborhood."
                },
                {
                    "target": "Grâce à ses cours intensifs, Claire parle français beaucoup mieux qu'avant.",
                    "reading": "grahs ah say koor zan-tahn-seef, klair pahrl frahn-seh boh-koo myuh kah-vahn",
                    "translation": "Thanks to her intensive courses, Claire speaks French much better than before."
                },
                {
                    "target": "La météo de ce week-end s'annonce encore pire que celle de la semaine dernière.",
                    "reading": "lah may-tay-oh duh suh wee-kend sah-nohns ahn-kohr peer kuh sel duh lah suh-men dair-nyair",
                    "translation": "This weekend's weather is forecast to be even worse than last week's."
                },
                {
                    "target": "Sa nouvelle présentation commerciale est bien meilleure que la première version.",
                    "reading": "sah noo-vel pray-zahn-tah-syohn koh-mair-syahl ay byan may-yuhr kuh lah pruh-myair vair-zyohn",
                    "translation": "His new commercial presentation is much better than the first version."
                },
                {
                    "target": "Nous comprenons beaucoup mieux le fonctionnement du système après cette formation.",
                    "reading": "noo kohn-pruh-nohn boh-koo myuh luh fohnk-syohn-mahn doo sees-tem ah-preh set fohr-mah-syohn",
                    "translation": "We understand how the system works much better after this training."
                }
            ],
            "mnemonics": [
                "BON -> MEILLEUR (Both modify NOUNS). BIEN -> MIEUX (Both modify VERBS)!",
                "BANISH 'PLUS BON' AND 'PLUS BIEN' FOREVER: French gives you MEILLEUR and MIEUX!"
            ],
            "culturalNotes": [
                "The philosophical interjection 'Tant pis !' (Too bad / Oh well!) and its enthusiastic twin 'Tant mieux !' (All the better / Great!) are universal French conversational reactions."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Complétez la phrase : « Cette tarte aux pommes est _________ que celle du supermarché. »",
                    "options": [
                        "meilleure",
                        "mieux",
                        "plus bonne",
                        "plus bien"
                    ],
                    "answerIndex": 0,
                    "explanation": "On qualifie le nom féminin 'tarte' ; le comparatif régulier de 'bonne' est l'adjectif « meilleure »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez : « Depuis qu'il porte des lunettes, Antoine voit beaucoup _________. »",
                    "options": [
                        "mieux",
                        "meilleur",
                        "plus bon",
                        "plus bien"
                    ],
                    "answerIndex": 0,
                    "explanation": "On modifie le verbe 'voit' ; le comparatif de l'adverbe 'bien' est l'adverbe invariable « mieux »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Dans quelle phrase l'emploi de meilleur/mieux est-il rigoureusement correct ?",
                    "options": [
                        "Ce gâteau est plus bien que l'autre.",
                        "Elle cuisine meilleur que son frère.",
                        "Ce gâteau est meilleur et elle cuisine mieux.",
                        "Ce gâteau est mieux et elle cuisine meilleur."
                    ],
                    "answerIndex": 2,
                    "explanation": "« gâteau est meilleur » (adjectif qualifiant le nom) et « elle cuisine mieux » (adverbe modifiant le verbe cuisiner)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Écrivez le féminin singulier du comparatif de 'bon' : « Sa note est _________ (bon) que celle de Marc. »",
                    "acceptedAnswers": [
                        "meilleure",
                        "Meilleure"
                    ],
                    "explanation": "Le comparatif féminin de bon est « meilleure »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u16-l4": {
        "id": "fr-u16-l4",
        "unit": "fr-u16",
        "level": "B1",
        "objective": "Construct superlative statements (le plus, la plus, les plus, le meilleur, la pire) with prepositional domain 'de'.",
        "prerequisites": [
            "fr-u16-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u16-l3"
            ]
        },
        "presentation": {
            "explanation": "The Superlative (le superlatif) elevates or reduces an entity to the extreme within a designated category:\n\n1. Superlative Formation:\n- LE / LA / LES + PLUS + [ADJECTIF] (+ DE [DOMAINE]) ('the most...')\n- LE / LA / LES + MOINS + [ADJECTIF] (+ DE [DOMAINE]) ('the least...')\n- Example: 'C'est la ville LA PLUS dynamique DE France.' (It is the most dynamic city in France.)\n\n2. The Golden Rule of Preposition 'DE':\nIn English, superlatives often use 'in' (the tallest in the world). In French, superlative domains ALWAYS take DE (du, de la, des):\n- 'Le plus haut sommet DU monde.' (NOT 'dans le monde').\n- 'La meilleure élève DE la classe.'\n\n3. Double Article Placement:\n- If the adjective normally follows the noun, the definite article MUST be repeated:\n  * 'L'hôtel LE plus cher.' (Double article: L'hôtel... le plus cher).\n  * 'Les livres LES plus intéressants.'\n\n4. Irregular Superlatives:\n- 'Le meilleur / la meilleure / les meilleurs' (the best)\n- 'Le pire / la pire / les pires' (the worst)\n- 'Le mieux' (the best - adverbial superlative: 'C'est lui qui chante le mieux').",
            "examples": [
                {
                    "target": "Le mont Blanc est le sommet le plus élevé d'Europe occidentale.",
                    "reading": "luh mohn blahn ay luh soh-meh luh ploo zay-luh-vay duh-rohp ohk-see-dahn-tahl",
                    "translation": "Mont Blanc is the highest peak in Western Europe."
                },
                {
                    "target": "C'est sans doute le roman le plus captivant de cet auteur contemporain.",
                    "reading": "say sahn doot luh roh-mahn luh ploo kahp-tee-vahn duh seh toh-tuhr kohn-tahm-poh-ran",
                    "translation": "It is without doubt this contemporary author's most captivating novel."
                },
                {
                    "target": "Voici la solution la moins coûteuse pour moderniser nos installations.",
                    "reading": "vwah-see lah soh-loo-syohn lah mwan koo-tuhz poor moh-dair-nee-zay noh zan-stah-lah-syohn",
                    "translation": "Here is the least costly solution for modernizing our facilities."
                },
                {
                    "target": "Cet institut de recherche rassemble les meilleurs experts du domaine médical.",
                    "reading": "set tan-stee-too duh ruh-shairsh rah-sahnbl lay may-yuhr zek-spair doo doh-men may-dee-kahl",
                    "translation": "This research institute brings together the best experts in the medical field."
                },
                {
                    "target": "C'est l'étudiant qui a obtenu les résultats les plus remarquables de sa promotion.",
                    "reading": "say lay-too-dyahn kee ah ohb-tuh-noo lay ray-zool-tah lay ploo ruh-mahr-kahbl duh sah proh-moh-syohn",
                    "translation": "He is the student who obtained the most remarkable results in his graduating class."
                }
            ],
            "mnemonics": [
                "DOUBLE THE ARTICLE: 'La ville LA plus belle', 'Les livres LES plus chers'! If the adjective sits after the noun, give it its own article!",
                "NEVER 'DANS LE MONDE' FOR SUPERLATIVES: It is ALWAYS 'DU monde'!"
            ],
            "culturalNotes": [
                "France's Guide Michelin famously awards three stars based on superlative culinary artistry: 'Une des meilleures tables du monde'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Traduisez fidèlement : « She is the most intelligent student in the school » :",
                    "options": [
                        "C'est l'étudiante la plus intelligente de l'école.",
                        "C'est l'étudiante la plus intelligente dans l'école.",
                        "C'est l'étudiante plus intelligente de l'école.",
                        "C'est l'étudiante la plus intelligente à l'école."
                    ],
                    "answerIndex": 0,
                    "explanation": "Le superlatif répète l'article (« l'étudiante la plus intelligente ») et introduit le domaine avec « de l'école »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez le superlatif irrégulier : « C'est la _________ décision que nous ayons prise. » (superlatif de supériorité de 'bonne')",
                    "options": [
                        "meilleure",
                        "plus bonne",
                        "mieux",
                        "plus meilleure"
                    ],
                    "answerIndex": 0,
                    "explanation": "Le superlatif féminin de 'bon' est « la meilleure »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase contient une erreur de construction superlative ?",
                    "options": [
                        "C'est le plus beau monument de la capitale.",
                        "Voici les voitures les plus rapides dans le monde.",
                        "C'est la méthode la moins complexe.",
                        "Il s'agit du pire scénario possible."
                    ],
                    "answerIndex": 1,
                    "explanation": "On doit dire « du monde » et non « dans le monde » après un superlatif."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez l'article répété : « Nous avons visité les châteaux _________ plus majestueux de la région. »",
                    "acceptedAnswers": [
                        "les",
                        "Les"
                    ],
                    "explanation": "Quand l'adjectif suit le nom, l'article défini se répète au pluriel : « les châteaux les plus majestueux »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u16-l5": {
        "id": "fr-u16-l5",
        "unit": "fr-u16",
        "level": "B1",
        "objective": "Synthesize comparative and superlative structures in critical consumer reviews and analytical comparisons.",
        "prerequisites": [
            "fr-u16-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u16-l4"
            ]
        },
        "presentation": {
            "explanation": "At the B1 summit, learners synthesize all forms of comparison (adjectives, adverbs, nouns, verbs, irregulars, superlatives) to construct nuanced reviews, critical analyses, and evaluative reports:\n\n1. Nuancing Comparisons with Adverbs of Degree:\n- 'beaucoup plus / bien plus que...' (much more than...)\n- 'un peu moins que...' (a little less than...)\n- 'nettement meilleur que...' (markedly / distinctly better than...)\n- 'de loin le plus...' (by far the most...)\n\n2. Parallel and Proportional Comparisons (Plus... plus... / Moins... moins...):\n- 'Plus on pratique, plus on progresse.' (The more you practice, the more you progress.)\n- 'Moins on dépense, plus on économise.' (The less you spend, the more you save.)\n- 'Plus c'est simple, mieux c'est.' (The simpler it is, the better it is.)\n\n3. Formulating Analytical Assessments:\n- Balancing pros and cons (les avantages et les inconvénients).\n- Evaluating price-to-quality ratios (le rapport qualité-prix).",
            "examples": [
                {
                    "target": "Ce smartphone offre de loin le meilleur rapport qualité-prix du marché actuel.",
                    "reading": "suh smaahrt-fohn ohfr duh lwan luh may-yuhr rah-pohr kah-lee-tay pree doo mahr-shay ahk-twel",
                    "translation": "This smartphone offers by far the best price-to-performance ratio on the current market."
                },
                {
                    "target": "Plus vous lisez d'articles de presse, plus votre vocabulaire devient riche et précis.",
                    "reading": "ploo voo lee-zay dahr-teekl duh pres, ploo voh-truh voh-kah-boo-lair duh-vyan reesh ay pray-see",
                    "translation": "The more press articles you read, the richer and more precise your vocabulary becomes."
                },
                {
                    "target": "Bien que ce restaurant soit un peu plus cher, la qualité du service est nettement supérieure.",
                    "reading": "byan kuh suh res-toh-rahn swah tuhn puh ploo shair, lah kah-lee-tay doo sair-vees ay net-mahn soo-pay-ryuhr",
                    "translation": "Although this restaurant is a little more expensive, the service quality is distinctly superior."
                },
                {
                    "target": "Moins une voiture consomme de carburant, plus elle est respectueuse de l'environnement.",
                    "reading": "mwan zoon vwah-toor kohn-suhm duh kahr-boo-rahn, ploo zel ay res-pek-twuhz duh lahn-vee-rohn-mahn",
                    "translation": "The less fuel a car consumes, the more environmentally friendly it is."
                },
                {
                    "target": "Parmi toutes les options analysées, ce logiciel reste le plus fiable et le plus ergonomique.",
                    "reading": "pahr-mee toot lay zohp-syohn ah-nah-lee-zay, suh loh-zhee-syel rest luh ploo fyahbl ay luh ploo zair-goh-noh-meek",
                    "translation": "Among all analyzed options, this software remains the most reliable and user-friendly."
                }
            ],
            "mnemonics": [
                "PROPORTIONAL PROVERB: 'Plus on est de fous, plus on rit' (The more, the merrier)! No 'the' or extra words in French: just PLUS [X], PLUS [Y]!"
            ],
            "culturalNotes": [
                "The concept of 'le rapport qualité-prix' is a core consumer benchmark in France, frequently cited in consumer protection reviews like '60 Millions de consommateurs'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Comment traduire « The more you practice, the better you speak » ?",
                    "options": [
                        "Plus tu pratiques, mieux tu parles.",
                        "Le plus tu pratiques, le plus tu parles.",
                        "Plus tu pratiques, meilleur tu parles.",
                        "Plus que tu pratiques, plus que tu parles."
                    ],
                    "answerIndex": 0,
                    "explanation": "La structure proportionnelle s'énonce directement « Plus... mieux... » sans article initial."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez l'évaluation critique : « Ce modèle est de loin _________ performant de sa catégorie. »",
                    "options": [
                        "le plus",
                        "plus",
                        "le meilleur",
                        "beaucoup"
                    ],
                    "answerIndex": 0,
                    "explanation": "Avec l'expression 'de loin', on utilise le superlatif « le plus performant »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase formule une critique comparative équilibrée et idiomatique ?",
                    "options": [
                        "Cet hôtel est plus bon mais il coûte plus.",
                        "Cet hôtel est meilleur mais il coûte plus cher.",
                        "Cet hôtel est plus bien mais il est moins cher.",
                        "Cet hôtel est le mieux hôtel de la ville."
                    ],
                    "answerIndex": 1,
                    "explanation": "« est meilleur » (adjectif) et « coûte plus cher » (adverbe de coût) constituent la tournure irréprochable."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez l'adverbe d'intensité : « Ce tableau est _________ (beaucoup) plus expressif que l'original. »",
                    "acceptedAnswers": [
                        "bien",
                        "Bien",
                        "beaucoup",
                        "Beaucoup"
                    ],
                    "explanation": "Pour intensifier un comparatif, on emploie « bien plus » ou « beaucoup plus »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u17-l1": {
        "id": "fr-u17-l1",
        "unit": "fr-u17",
        "level": "B1",
        "objective": "Form le plus-que-parfait using imperfect auxiliaries (avais/étais) and the past participle to express past anteriority.",
        "prerequisites": [
            "fr-u16-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u16-l5"
            ]
        },
        "presentation": {
            "explanation": "The Plus-que-parfait (Pluperfect) expresses an action completed prior to another past action or reference point ('the past of the past'):\n\n1. Conjugation Formula:\n[AUXILIAIRE AVOIR / ÊTRE À L'IMPARFAIT] + [PARTICIPE PASSÉ]\n\n2. Auxiliary Selection:\nFollows the exact same auxiliary rules as the passé composé (DR MRS VANDERTRAMP & reflexives take être; all others take avoir).\n- Auxiliary AVOIR (Imparfait): 'j'avais, tu avais, il avait, nous avions, vous aviez, ils avaient'.\n  * Example: 'J'avais déjà fini mon travail.'\n- Auxiliary ÊTRE (Imparfait): 'j'étais, tu étais, il était, elle était, nous étions, vous étiez, ils étaient'.\n  * Example: 'Elle était déjà partie.' (Mandatory subject agreement!)\n\n3. Reflexive Verbs:\n- 'je m'étais levé(e), tu t'étais couché(e), nous nous étions rencontrés'.",
            "examples": [
                {
                    "target": "Quand la police est arrivée sur les lieux, le cambrioleur s'était déjà enfui par la fenêtre.",
                    "reading": "kahn lah poh-lees ay tah-ree-vay soor lay lyuh, luh kahm-bree-yuhr say-teh day-zhah ahn-fwee pahr lah fuh-netr",
                    "translation": "When the police arrived at the scene, the burglar had already fled through the window."
                },
                {
                    "target": "J'avais soigneusement préparé tous mes dossiers avant le début de la réunion.",
                    "reading": "zhah-veh swahn-yuhz-mahn pray-pah-ray too may doh-syay ah-vahn luh day-boo duh lah ray-oo-nyohn",
                    "translation": "I had carefully prepared all my files before the start of the meeting."
                },
                {
                    "target": "Nous étions déjà rentrés de voyage lorsque la tempête a éclaté sur la côte.",
                    "reading": "noo zay-tyohn day-zhah rahn-tray duh vwah-yahzh lohrs-kuh lah tahm-pet ah ay-klah-tay soor lah koht",
                    "translation": "We had already returned from our trip when the storm broke over the coast."
                },
                {
                    "target": "Elle m'a montré les photos magnifiques qu'elle avait prises lors de son séjour à Kyoto.",
                    "reading": "el mah mohn-tray lay foh-toh mahn-yee-feek kel ah-veh preez lohr duh sohn say-zhoor ah kyoh-toh",
                    "translation": "She showed me the magnificent photos that she had taken during her stay in Kyoto."
                },
                {
                    "target": "Vous vous étiez trompés d'adresse en envoyant cette lettre recommandée.",
                    "reading": "voo voo zay-tyay trohn-pay dah-dres ahn nahn-vwah-yahn set letr ruh-koh-mahn-day",
                    "translation": "You had made a mistake with the address when sending this registered letter."
                }
            ],
            "mnemonics": [
                "PLUS-QUE-PARFAIT = IMPARFAIT AUXILIARY + PARTICIPE PASSÉ! Think: 'Past of the Past' (Had done / Had gone)!"
            ],
            "culturalNotes": [
                "In classic French detective fiction (such as Georges Simenon's Commissaire Maigret mysteries), the pluperfect is essential for methodically reconstructing the timeline preceding a crime."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Conjuguez au plus-que-parfait : « Quand nous sommes arrivés, le train _________ (déjà / partir). »",
                    "options": [
                        "était déjà parti",
                        "avait déjà parti",
                        "a déjà parti",
                        "serait déjà parti"
                    ],
                    "answerIndex": 0,
                    "explanation": "Le verbe 'partir' se conjugue avec l'auxiliaire être à l'imparfait : « était déjà parti »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez : « Elle m'a rendu le roman que je lui _________ (prêter) la semaine précédente. »",
                    "options": [
                        "avais prêté",
                        "avais prêter",
                        "étais prêté",
                        "ai prêté"
                    ],
                    "answerIndex": 0,
                    "explanation": "L'action de prêter est antérieure au rendu ; on utilise 'avoir' à l'imparfait + participe passé : « avais prêté »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase illustre un emploi correct du plus-que-parfait pour exprimer l'antériorité ?",
                    "options": [
                        "J'ai mangé parce que j'avais faim.",
                        "J'ai retrouvé les clés que j'avais perdues.",
                        "Quand il est venu, nous partions.",
                        "Elle lisait le livre qu'elle achetait hier."
                    ],
                    "answerIndex": 1,
                    "explanation": "« avais perdues » (plus-que-parfait avec accord COD) marque l'antériorité par rapport à l'action de retrouver (« ai retrouvé »)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Conjuguez avec 'ils' au plus-que-parfait : « Ils _________ (finir) leurs devoirs avant de sortir. »",
                    "acceptedAnswers": [
                        "avaient fini",
                        "Avaient fini"
                    ],
                    "explanation": "Auxiliaire avoir à l'imparfait (avaient) + participe passé (fini) = « avaient fini »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u17-l2": {
        "id": "fr-u17-l2",
        "unit": "fr-u17",
        "level": "B1",
        "objective": "Sequence complex narrative events establishing clear cause-and-effect relationships prior to past reference points.",
        "prerequisites": [
            "fr-u17-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u17-l1"
            ]
        },
        "presentation": {
            "explanation": "The Plus-que-parfait explains why a past situation occurred, establishing causal and temporal antecedence:\n\n1. Temporal Conjunctions of Anteriority:\n- 'Dès que / Aussitôt que + plus-que-parfait' -> passé composé\n  * Example: 'Dès qu'il avait terminé, il est parti.'\n- 'Après que + indicatif (plus-que-parfait)':\n  * Example: 'Après qu'elle avait fermé la porte, elle a entendu un bruit.'\n- 'Parce que / Car / Comme + plus-que-parfait' (Causal antecedence):\n  * Example: 'Il était fatigué parce qu'il avait mal dormi.'\n\n2. The Narrative Hierarchy in Past Tenses:\n- Plus-que-parfait = Prior background / anterior causes (what happened beforehand).\n- Passé composé / Passé simple = Punctual, sequential foreground actions.\n- Imparfait = Ongoing past states, background atmosphere, duration.",
            "examples": [
                {
                    "target": "Julien a raté son vol parce qu'il avait oublié son passeport sur la table du salon.",
                    "reading": "zhoo-lyan ah rah-tay sohn vohl pahr-skuh eel ah-veh too-blee-ay sohn pahs-pohr soor lah tahbl doo sah-lohn",
                    "translation": "Julien missed his flight because he had forgotten his passport on the living room table."
                },
                {
                    "target": "Comme elle s'était levée très tôt ce matin-là, elle a pu admirer le lever du soleil sur la montagne.",
                    "reading": "kohm el say-teh luh-vay treh toh suh mah-tan-lah, el ah poo dahd-mee-ray luh luh-vay doo soh-lay soor lah mohn-tahn-yuh",
                    "translation": "As she had woken up very early that morning, she was able to admire the sunrise over the mountain."
                },
                {
                    "target": "Aussitôt que les délégués avaient signé l'accord historique, les applaudissements ont éclaté.",
                    "reading": "oh-see-toh kuh lay day-lay-gay zah-vyeh seen-yay lah-kohr ees-toh-reek, lay zah-ploh-dees-mahn ohn tay-klah-tay",
                    "translation": "As soon as the delegates had signed the historic agreement, applause erupted."
                },
                {
                    "target": "Nous avons compris pourquoi le moteur avait calé après avoir inspecté le réservoir d'essence.",
                    "reading": "noo zah-vohn kohn-pree poor-kwah luh moh-tuhr ah-veh kah-lay ah-preh zah-vwahr an-spek-tay luh ray-zair-vwahr deh-sahns",
                    "translation": "We understood why the engine had stalled after inspecting the fuel tank."
                },
                {
                    "target": "Le directeur a félicité l'équipe car elle avait dépassé tous les objectifs fixés.",
                    "reading": "luh dee-rek-tuhr ah fay-lee-see-tay lay-keep kahr el ah-veh day-pah-say too lay zohb-zhek-teef feek-say",
                    "translation": "The director congratulated the team because it had exceeded all set goals."
                }
            ],
            "mnemonics": [
                "THE CHAIN OF TIME: First (Plus-que-parfait) -> Then (Passé composé) -> While (Imparfait)!"
            ],
            "culturalNotes": [
                "In French administrative and judicial reporting, precision in establishing the chronological sequence of events determines official accountability."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle proposition introduit une cause antérieure au plus-que-parfait ?",
                    "options": [
                        "parce qu'il avait trop mangé",
                        "pour qu'il mange",
                        "afin qu'il ait mangé",
                        "quoiqu'il mangeait"
                    ],
                    "answerIndex": 0,
                    "explanation": "« parce qu'il avait trop mangé » établit la cause antérieure au plus-que-parfait expliquant l'état passé."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez la phrase temporelle : « Dès que nous _________ (recevoir) votre message, nous sommes immédiatement partis. »",
                    "options": [
                        "avions reçu",
                        "avons reçu",
                        "recevions",
                        "aurions reçu"
                    ],
                    "answerIndex": 0,
                    "explanation": "L'antériorité immédiate par rapport au passé composé 'sommes partis' demande le plus-que-parfait « avions reçu »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Identifiez la phrase articulant rigoureusement une cause antérieure et une conséquence au passé :",
                    "options": [
                        "Comme il avait neigé toute la nuit, les routes étaient complètement bloquées.",
                        "Comme il neigeait toute la nuit, les routes sont bloquées.",
                        "Comme il a neigé toute la nuit, les routes avaient bloqué.",
                        "Comme il avait neigé, les routes bloquent."
                    ],
                    "answerIndex": 0,
                    "explanation": "« avait neigé » (cause antérieure au plus-que-parfait) explique parfaitement « étaient bloquées » (état résultant à l'imparfait)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez le verbe au plus-que-parfait : « Elle n'a pas pu payer parce qu'elle _________ (perdre) son portefeuille. »",
                    "acceptedAnswers": [
                        "avait perdu",
                        "Avait perdu"
                    ],
                    "explanation": "La cause antérieure est conjuguée au plus-que-parfait : « avait perdu »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u17-l3": {
        "id": "fr-u17-l3",
        "unit": "fr-u17",
        "level": "B1",
        "objective": "Manage temporal concordance across multi-tiered past narrative structures in journalism and literature.",
        "prerequisites": [
            "fr-u17-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u17-l2"
            ]
        },
        "presentation": {
            "explanation": "In sophisticated narrative registers (press reports, historical accounts, memoirs), master French storytellers coordinate three narrative strata:\n\n1. The Three Past Tense Strata:\n- Foreground events (Chronological succession): Passé composé (or Passé simple in literature).\n- Background context (Atmosphere, physical state): Imparfait.\n- Retrospective background (Flashbacks, anterior causes): Plus-que-parfait.\n\n2. Indirect Speech in the Past (Discours Indirect au Passé):\nWhen reporting statements in a past framework:\n- Present in direct speech -> Imparfait ('Il a dit : Je pars' -> 'Il a dit qu'il partait.')\n- Passé composé in direct speech -> Plus-que-parfait ('Il a dit : J'ai fini' -> 'Il a dit qu'il avait fini.')\n- Futur simple in direct speech -> Conditionnel présent ('Il a dit : Je viendrai' -> 'Il a dit qu'il viendrait.')",
            "examples": [
                {
                    "target": "Le journaliste a expliqué que l'incendie s'était déclaré après la fermeture du magasin.",
                    "reading": "luh zhoor-nah-leest ah eks-plee-kay kuh lan-sahn-dee say-teh day-klah-ray ah-preh lah fair-muh-toor doo mah-gah-zan",
                    "translation": "The journalist explained that the fire had started after the store's closing."
                },
                {
                    "target": "Elle affirmait avec assurance qu'elle avait déjà transmis tous les justificatifs demandés.",
                    "reading": "el ah-feer-meh ah-vek ah-soo-rahns kel ah-veh day-zhah trahns-mee too lay zhoos-tee-fee-kah-teef duh-mahn-day",
                    "translation": "She asserted with confidence that she had already forwarded all requested supporting documents."
                },
                {
                    "target": "Quand nous sommes entrés dans le salon, la cheminée était allumée et quelqu'un avait préparé du thé chaud.",
                    "reading": "kahn noo sohm zahn-tray dahn luh sah-lohn, lah shmee-nay ay-teh tah-loo-may ay kel-kuhn ah-veh pray-pah-ray doo tay shoh",
                    "translation": "When we entered the living room, the fireplace was lit (imparfait) and someone had prepared hot tea (plus-que-parfait)."
                },
                {
                    "target": "Les historiens ont confirmé que le traité avait été négocié en secret durant plusieurs mois.",
                    "reading": "lay zees-toh-ryan ohn kohn-feer-may kuh luh treh-tay ah-veh tay-tay nay-goh-syay ahn suh-kreh doo-rahn ploo-zyuhr mwah",
                    "translation": "Historians confirmed that the treaty had been negotiated in secret over several months."
                },
                {
                    "target": "Il m'a juré qu'il n'avait jamais vu ce document confidentiel avant hier soir.",
                    "reading": "eel mah zhoo-ray keel nah-veh zhah-meh voo suh doh-koo-mahn kohn-fee-dahn-syel ah-vahn yair swahr",
                    "translation": "He swore to me that he had never seen this confidential document before last night."
                }
            ],
            "mnemonics": [
                "DISCOURS INDIRECT SHIFT: In reported past speech, yesterday's Passé Composé becomes today's Plus-que-Parfait!"
            ],
            "culturalNotes": [
                "French investigative journalism (such as Le Monde and Mediapart) adheres strictly to these concordance rules to report testimonies with legal precision."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Transposez au discours indirect au passé : « Il a déclaré : 'J'ai signé le contrat hier.' »",
                    "options": [
                        "Il a déclaré qu'il avait signé le contrat la veille.",
                        "Il a déclaré qu'il a signé le contrat hier.",
                        "Il a déclaré qu'il signait le contrat la veille.",
                        "Il a déclaré qu'il signerait le contrat hier."
                    ],
                    "answerIndex": 0,
                    "explanation": "Au discours indirect après un verbe introducteur au passé, le passé composé devient plus-que-parfait ('avait signé') et 'hier' devient 'la veille'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Dans un récit au passé, quelle forme remplace le futur simple au discours indirect ?",
                    "options": [
                        "Le conditionnel présent",
                        "Le plus-que-parfait",
                        "L'imparfait",
                        "Le subjonctif"
                    ],
                    "answerIndex": 0,
                    "explanation": "Le futur simple devient le conditionnel présent (le 'futur du passé') au discours indirect au passé."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Choisissez la phrase qui respecte la concordance des temps dans le récit journalistique :",
                    "options": [
                        "Le ministre a annoncé qu'il a démissionné la veille.",
                        "Le ministre a annoncé qu'il avait démissionné la veille.",
                        "Le ministre annonçait qu'il démissionne la veille.",
                        "Le ministre a annoncé qu'il démissionnera la veille."
                    ],
                    "answerIndex": 1,
                    "explanation": "« a annoncé » (passé) régit le plus-que-parfait « avait démissionné » pour une action accomplie la veille."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Transposez au passé : « Elle a assuré qu'elle _________ (comprendre) toute la situation. » (action antérieure accomplie)",
                    "acceptedAnswers": [
                        "avait compris",
                        "Avait compris"
                    ],
                    "explanation": "Le verbe 'comprendre' au plus-que-parfait avec elle donne « avait compris »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u17-l4": {
        "id": "fr-u17-l4",
        "unit": "fr-u17",
        "level": "B1",
        "objective": "Express unfulfilled past desires and hindsight regret using 'si seulement + plus-que-parfait'.",
        "prerequisites": [
            "fr-u17-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u17-l3"
            ]
        },
        "presentation": {
            "explanation": "To express retrospective regret, hindsight sorrow, or unfulfilled past wishes regarding events that can no longer be modified, French uses:\n\n1. Hypothetical Regret (Si seulement + Plus-que-parfait):\n- 'Si seulement j'avais su !' (If only I had known!)\n- 'Si seulement nous étions partis plus tôt !' (If only we had left earlier!)\nThis structure expresses an exclamatory retrospective wish without needing a main clause.\n\n2. The Full Past Unreal Conditional System:\n- SI + PLUS-QUE-PARFAIT -> CONDITIONNEL PASSÉ\n- Conditionnel passé: [Avoir / Être au conditionnel présent] + [Participe passé]:\n  * 'Si j'avais étudié, j'aurais réussi l'examen.' (If I had studied, I would have passed the exam.)\n  * 'Si elle était venue, nous serions sortis.' (If she had come, we would have gone out.)\n\n3. Regret with Modal Verbs:\n- 'J'aurais dû...' (I should have...) -> 'J'aurais dû t'écouter.'\n- 'J'aurais voulu / aimé...' (I would have liked to...)",
            "examples": [
                {
                    "target": "Si seulement nous avions réservé nos billets à l'avance, nous n'aurions pas payé le tarif plein !",
                    "reading": "see suhl-mahn noo zah-vyohn ray-zair-vay noh bee-yeh ah lah-vahns, noo noh-ryohn pah pay-yay luh tah-reef plan",
                    "translation": "If only we had booked our tickets in advance, we would not have paid full price!"
                },
                {
                    "target": "Si j'avais su que tu étais à l'hôpital, je serais venu te rendre visite immédiatement.",
                    "reading": "see zhah-veh soo kuh too ay-teh ah loh-pee-tahl, zhuh suh-reh vuh-noo tuh rahn-druh vee-zeet ee-may-dyaht-mahn",
                    "translation": "If I had known you were in the hospital, I would have come to visit you immediately."
                },
                {
                    "target": "Quel immense regret ! J'aurais vraiment dû accepter cette proposition d'expatriation au Canada.",
                    "reading": "kel ee-mahns ruh-greh, zhoh-reh vreh-mahn doo ahk-sep-tay set proh-poh-zee-syohn dehk-spah-tree-ah-syohn oh kah-nah-dah",
                    "translation": "What immense regret! I really should have accepted that expatriation offer to Canada."
                },
                {
                    "target": "Si seulement elle s'était rendu compte plus tôt de la gravité de son erreur !",
                    "reading": "see suhl-mahn el say-teh rahn-doo ploo toh duh lah grah-vee-tay duh sohn nay-ruhr",
                    "translation": "If only she had realized the gravity of her mistake sooner!"
                },
                {
                    "target": "Si nous avions écouté les conseils du guide, nous ne nous serions pas perdus dans la forêt.",
                    "reading": "see noo zah-vyohn zay-koo-tay lay kohn-say doo geed, noo nuh noo suh-ryohn pah pair-doo dahn lah foh-reh",
                    "translation": "If we had listened to the guide's advice, we would not have gotten lost in the forest."
                }
            ],
            "mnemonics": [
                "SI NEVER TAKES THE CONDITIONAL: 'Si j'avais su' (YES) vs 'Si j'aurais su' (NEVER! Les 'Si' n'aiment pas les 'R')!",
                "J'aurais dû + infinitif = I should have done it!"
            ],
            "culturalNotes": [
                "The classic French proverb 'Avec des si, on mettrait Paris en bouteille' (With 'ifs', you could put Paris in a bottle) wittily critiques endless hindsight regret."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle phrase formule un regret rétrospectif correct sans faute grammaticale ?",
                    "options": [
                        "Si seulement j'avais écouté tes conseils !",
                        "Si seulement j'aurais écouté tes conseils !",
                        "Si seulement j'ai écouté tes conseils !",
                        "Si seulement je serais à l'écoute !"
                    ],
                    "answerIndex": 0,
                    "explanation": "Après 'si', on ne met jamais de conditionnel ; le regret rétrospectif se construit avec le plus-que-parfait : « Si seulement j'avais écouté »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez l'hypothèse passée : « Si nous avions pris le train, nous _________ (arriver) à l'heure. »",
                    "options": [
                        "serions arrivés",
                        "aurions arrivé",
                        "étions arrivés",
                        "avions arrivé"
                    ],
                    "answerIndex": 0,
                    "explanation": "Dans le système hypothétique passé (Si + PQP), l'apodose est au conditionnel passé : « nous serions arrivés »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Identifiez la faute majeure dans : « Si j'aurais su la vérité, je ne serais pas venu. »",
                    "options": [
                        "L'emploi du conditionnel passé après 'si' au lieu du plus-que-parfait.",
                        "L'accord du participe passé venu.",
                        "La négation 'ne... pas'.",
                        "L'emploi de l'auxiliaire être avec venir."
                    ],
                    "answerIndex": 0,
                    "explanation": "La proposition conditionnelle introduite par 'si' rejette formellement le conditionnel ; il faut dire « Si j'avais su »."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Formulez le regret avec le verbe devoir au conditionnel passé : « Tu _________ (devoir) me prévenir plus tôt ! »",
                    "acceptedAnswers": [
                        "aurais dû",
                        "Aurais dû"
                    ],
                    "explanation": "L'expression du reproche/regret au passé est « aurais dû »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u17-l5": {
        "id": "fr-u17-l5",
        "unit": "fr-u17",
        "level": "B1",
        "objective": "Deploy flashback (l'analepse) techniques in extended multi-paragraph creative narrative writing.",
        "prerequisites": [
            "fr-u17-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u17-l4"
            ]
        },
        "presentation": {
            "explanation": "An analepsis (l'analepse in literary narratology) is a retrospective flashback. In creative French writing, managing analepsis requires shifting fluidly across temporal markers and verb tenses:\n\n1. Temporal Markers Anchored in the Past (Repères Temporels du Récit):\n- In present discourse: 'hier' -> In past narrative: 'la veille' (the day before).\n- In present discourse: 'aujourd'hui' -> In past narrative: 'ce jour-là' (that day).\n- In present discourse: 'demain' -> In past narrative: 'le lendemain' (the next day).\n- In present discourse: 'il y a deux jours' -> In past narrative: 'deux jours plus tôt / auparavant' (two days earlier).\n- In present discourse: 'dans deux jours' -> In past narrative: 'deux jours plus tard / après' (two days later).\n\n2. Executing the Narrative Flashback:\n- Initiating analepsis: 'Tout avait commencé trois ans plus tôt...' (Plus-que-parfait).\n- Developing the backstory: Alternation of Imparfait (states/descriptions) and Plus-que-parfait (prior events).\n- Returning to the primary story arc: 'Ce matin-là, la porte s'est ouverte...'",
            "examples": [
                {
                    "target": "Tout avait commencé cinq ans auparavant, lorsque Thomas avait quitté son village natal pour tenter sa chance à Paris.",
                    "reading": "too tah-veh koh-mahn-say sank kahhn toh-pah-rah-vahn, lohrs-kuh toh-mah zah-veh kee-tay sohn vee-lahzh nah-tahl poor tahn-tay sah shahns ah pah-ree",
                    "translation": "It had all started five years earlier, when Thomas had left his native village to try his luck in Paris."
                },
                {
                    "target": "La veille de cette terrible tempête, les marins avaient pourtant observé un calme inhabituel sur l'océan.",
                    "reading": "lah veh-yuh duh set teh-reebl tahm-pet, lay mah-ran zah-vyohn poor-tahn ohb-zair-vay uhn kahlm ee-nah-bee-twel soor loh-say-ahn",
                    "translation": "The day before this terrible storm, the sailors had nonetheless observed an unusual calm on the ocean."
                },
                {
                    "target": "Elle se souvint soudain de la promesse qu'il lui avait faite quelques mois plus tôt sous les arcades du Louvre.",
                    "reading": "el suh soo-van soo-dan duh lah proh-mes keel lwee ah-veh fet kel-kuh mwah ploo toh soo lay zahr-kahd doo loovr",
                    "translation": "She suddenly remembered the promise he had made to her a few months earlier beneath the arcades of the Louvre."
                },
                {
                    "target": "Ce jour-là, l'inspecteur comprit enfin ce que les témoins avaient tenté de lui dissimuler durant l'enquête.",
                    "reading": "suh zhoor-lah, lan-spek-tuhr kohn-pree tahn-fan suh kuh lay tay-mwan zah-vyohn tahn-tay duh lwee dee-see-moo-lay doo-rahn lahn-ket",
                    "translation": "That day, the detective finally understood what the witnesses had tried to conceal from him during the investigation."
                },
                {
                    "target": "Trois semaines auparavant, un mystérieux courrier anonyme était parvenu au commissariat central.",
                    "reading": "trwah suh-men toh-pah-rah-vahn, uhn mees-tay-ryuh koo-ryay ah-noh-neem ay-teh pahr-vuh-noo oh koh-mee-sah-ryah sahn-trahl",
                    "translation": "Three weeks earlier, a mysterious anonymous letter had arrived at central police headquarters."
                }
            ],
            "mnemonics": [
                "RETROSPECTIVE CHRONOMETERS: Replace 'hier' with 'LA VEILLE', 'il y a 3 jours' with '3 JOURS PLUS TÔT' when narrating in the past!"
            ],
            "culturalNotes": [
                "French cinematic narrative traditions (from French Film Noir to the Nouvelle Vague) frequently open in media res before deploying flashback analepses to reveal character motivations."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Dans un récit au passé, quel marqueur temporel remplace l'expression « hier soir » ?",
                    "options": [
                        "la veille au soir",
                        "le jour d'hier",
                        "trois jours après",
                        "le lendemain soir"
                    ],
                    "answerIndex": 0,
                    "explanation": "Dans un récit au passé, 'hier soir' devient « la veille au soir »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez le repère temporel correct pour indiquer un événement qui s'est produit deux jours avant :",
                    "options": [
                        "deux jours plus tôt",
                        "dans deux jours",
                        "il y a deux jours",
                        "le surlendemain"
                    ],
                    "answerIndex": 0,
                    "explanation": "Dans une analepse au passé, on utilise « deux jours plus tôt » ou « deux jours auparavant »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Choisissez l'extrait narratif employant parfaitement les temps et repères de l'analepse :",
                    "options": [
                        "Hier il arrive, parce qu'il mangeait demain.",
                        "Ce jour-là, elle comprit tout : deux semaines plus tôt, son frère lui avait menti.",
                        "Ce jour-là, elle a compris tout : dans deux semaines, son frère lui ment.",
                        "Aujourd'hui, elle comprit que deux semaines plus tard il avait menti."
                    ],
                    "answerIndex": 1,
                    "explanation": "« Ce jour-là » (repère passé), « comprit » (passé), « deux semaines plus tôt » (analepse) et « avait menti » (plus-que-parfait) forment un ensemble narratif parfait."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Dans un récit au passé, comment transpose-t-on 'il y a dix ans' ? (terme attendu : dix ans _________)",
                    "acceptedAnswers": [
                        "auparavant",
                        "Auparavant",
                        "plus tôt",
                        "Plus tôt"
                    ],
                    "explanation": "Dans le récit au passé, 'il y a dix ans' se transpose en « dix ans auparavant » ou « dix ans plus tôt »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u18-l1": {
        "id": "fr-u18-l1",
        "unit": "fr-u18",
        "level": "B1",
        "objective": "Construct real first conditional hypotheses with 'si + présent -> futur simple / présent / impératif'.",
        "prerequisites": [
            "fr-u17-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u17-l5"
            ]
        },
        "presentation": {
            "explanation": "The 1st conditional pattern expresses real, possible, probable future conditions and general truths:\n\n1. Three Result Patterns:\n- SI + PRÉSENT -> FUTUR SIMPLE (Future consequence of a probable condition):\n  * 'S'il fait beau demain, nous irons à la plage.'\n- SI + PRÉSENT -> PRÉSENT (General truth / automatic consequence):\n  * 'Si on chauffe l'eau à 100 degrés, elle bout.'\n- SI + PRÉSENT -> IMPÉRATIF (Order, counsel, recommendation):\n  * 'Si tu as un problème, appelle-moi tout de suite.'\n\n2. The Elision Rule for 'SI':\n- 'Si' elides ONLY before il and ils: 's'il', 's'ils'.\n- 'Si' NEVER elides before elle, elles, or on: 'si elle', 'si elles', 'si on'!\n  * Correct: 'Si elle vient...' / Fatal mistake: 'S'elle vient...'\n\n3. Absolute Ban on Future after 'SI':\nNEVER use the future tense in a 'si' clause! 'Si j'aurai le temps' is incorrect; always say 'Si j'ai le temps'.",
            "examples": [
                {
                    "target": "S'il fait beau ce week-end, nous organiserons un grand pique-nique au parc de Sceaux.",
                    "reading": "seel feh boh suh wee-kend, noo zohr-gah-nee-zrohn uhn grahn peek-neek oh pahrk duh soh",
                    "translation": "If the weather is nice this weekend, we will organize a big picnic in Sceaux Park."
                },
                {
                    "target": "Si vous rencontrez la moindre difficulté technique, contactez immédiatement le service d'assistance.",
                    "reading": "see voo rahn-kohn-tray lah mwan-druh deef-fee-kool-tay tek-neek, kohn-tahk-tay ee-may-dyaht-mahn luh sair-vees dah-sees-tahns",
                    "translation": "If you encounter the slightest technical difficulty, contact support service immediately."
                },
                {
                    "target": "Si la température baisse en dessous de zéro, l'eau se transforme en glace.",
                    "reading": "see lah tahm-pay-rah-toor bes ahn duh-soo duh zay-roh, loh suh trahns-fohrm ahn glahs",
                    "translation": "If the temperature drops below zero, water turns into ice."
                },
                {
                    "target": "S'ils terminent le rapport avant vendredi, nous pourrons le soumettre au conseil d'administration.",
                    "reading": "seel tair-meen luh rah-pohr ah-vahn vahn-druh-dee, noo poo-rohn luh soo-metr oh kohn-say dahd-mee-nees-trah-syohn",
                    "translation": "If they finish the report before Friday, we will be able to submit it to the board of directors."
                },
                {
                    "target": "Si elle réussit son entretien d'embauche, elle commencera son nouveau travail le mois prochain.",
                    "reading": "see el ray-oo-see sohn nahn-truh-tyan dahm-bohsh, el koh-mahn-sruh sohn noo-voh trah-vah-yuh luh mwah proh-shan",
                    "translation": "If she aces her job interview, she will start her new job next month."
                }
            ],
            "mnemonics": [
                "SI ELISION: 'S'il' and 'S'ils' (YES)! 'Si elle' and 'Si on' (NEVER drop the 'i')!",
                "NO FUTURE AFTER SI: 'Si j'ai' (Present condition) -> 'J'irai' (Future result)!"
            ],
            "culturalNotes": [
                "In French corporate negotiations and project planning, conditional commitments ('Si nous obtenons l'accord, nous déploierons le projet') require precise legal phrasing."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Complétez l'hypothèse réelle : « S'il pleut demain, nous _________ (rester) à la maison. »",
                    "options": [
                        "resterons",
                        "resterions",
                        "restions",
                        "restâmes"
                    ],
                    "answerIndex": 0,
                    "explanation": "Après 'si + présent' pour une condition future, le verbe principal se conjugue au futur simple : « resterons »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Identifiez la phrase correctement orthographiée avec l'élision de 'si' :",
                    "options": [
                        "S'il vient et si elle vient aussi.",
                        "S'il vient et s'elle vient aussi.",
                        "Si il vient et s'elle vient aussi.",
                        "Si il vient et si elle vient aussi."
                    ],
                    "answerIndex": 0,
                    "explanation": "'Si' s'élide uniquement devant 'il/ils' (« s'il ») et ne s'élide jamais devant 'elle' (« si elle »)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase comporte une erreur de mode ou de temps après 'si' ?",
                    "options": [
                        "Si tu viens à Paris, préviens-moi.",
                        "Si nous aurons le temps, nous visiterons le musée.",
                        "Si vous voulez, nous pouvons partir maintenant.",
                        "S'il fait chaud, je boirai de l'eau."
                    ],
                    "answerIndex": 1,
                    "explanation": "On ne met jamais le futur après 'si' de condition ; il faut dire « Si nous avons le temps »."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Conjuguez le verbe principal au futur simple : « Si vous signez ce contrat, vous _________ (obtenir) une réduction. »",
                    "acceptedAnswers": [
                        "obtiendrez",
                        "Obtiendrez"
                    ],
                    "explanation": "Le verbe obtenir au futur simple avec 'vous' est « obtiendrez »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u18-l2": {
        "id": "fr-u18-l2",
        "unit": "fr-u18",
        "level": "B1",
        "objective": "Construct unreal present second conditional hypotheses with 'si + imparfait -> conditionnel présent'.",
        "prerequisites": [
            "fr-u18-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u18-l1"
            ]
        },
        "presentation": {
            "explanation": "The 2nd conditional pattern expresses hypothetical, imaginary, or contrary-to-fact present situations:\n\n1. The Syntactic Formula:\nSI + IMPARFAIT -> CONDITIONNEL PRÉSENT\n- Example: 'Si j'avais de l'argent (imparfait), j'achèterais une maison (conditionnel).'\n\n2. Semantic Nuance & Advice:\n- The condition is unreal in the present (I do not have money right now).\n- 'Si j'étais toi / Si j'étais à votre place...' (If I were you / in your shoes...) is the standard French structure for giving polite counsel.\n\n3. Strict Ban on Conditional after 'SI':\nNEVER use the conditional mood inside the 'si' clause!\n- Fatal mistake: 'Si je serais riche, je voyagerais.' (INCORRECT)\n- Correct: 'Si j'étais riche, je voyagerais.' (CORRECT)",
            "examples": [
                {
                    "target": "Si j'avais plus de temps libre, j'apprendrais à jouer du piano classique.",
                    "reading": "see zhah-veh ploo duh tahn leebr, zhah-prahn-dreh ah zhoo-ay doo pyah-noh klahs-seek",
                    "translation": "If I had more free time, I would learn to play classical piano."
                },
                {
                    "target": "Si nous habitions en bord de mer, nous nous baignerions tous les matins.",
                    "reading": "see noo zah-bee-tyohn ahn bohr duh mair, noo noo ben-yuh-ryohn too lay mah-tan",
                    "translation": "If we lived by the seaside, we would go swimming every morning."
                },
                {
                    "target": "À votre place, si j'étais confronté à ce dilemme, je demanderais conseil à un avocat.",
                    "reading": "ah voh-truh plahs, see zhay-teh kohn-frohn-tay ah suh dee-lem, zhuh duh-mahn-druh-reh kohn-say ah uhn nah-voh-kah",
                    "translation": "In your place, if I were faced with this dilemma, I would ask a lawyer for advice."
                },
                {
                    "target": "Si les transports en commun étaient gratuits, la pollution diminuerait considérablement en ville.",
                    "reading": "see lay trahn-spohr zahn koh-muhn zay-teh grah-twee, lah poh-loo-syohn dee-mee-nwah-reh kohn-see-day-rah-bluh-mahn ahn veel",
                    "translation": "If public transit were free, pollution would decrease considerably in the city."
                },
                {
                    "target": "Si vous pouviez voyager n'importe où dans le monde, quel pays choisiriez-vous ?",
                    "reading": "see voo poo-vyay vwah-yah-zhay nan-pohrt oo dahn luh mohnd, kel peh-ee shwah-zee-ryay-voo",
                    "translation": "If you could travel anywhere in the world, which country would you choose?"
                }
            ],
            "mnemonics": [
                "LES 'SI' N'AIMENT PAS LES 'RAIT': Never put -rais/-rait after 'si'! (Si j'étais -> Je ferais)!"
            ],
            "culturalNotes": [
                "The formulation 'Si j'étais vous...' or 'Si j'étais à votre place...' is the hallmark of diplomatic counsel in French professional and personal relationships."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Complétez l'hypothèse imaginaire du présent : « Si nous _________ (avoir) des ailes, nous volerions comme des oiseaux. »",
                    "options": [
                        "avions",
                        "aurions",
                        "avons",
                        "eûmes"
                    ],
                    "answerIndex": 0,
                    "explanation": "La subordonnée introduite par 'si' prend l'imparfait (« avions ») lorsque la principale est au conditionnel présent (« volerions »)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Traduisez : « If I were rich, I would travel around the world » :",
                    "options": [
                        "Si j'étais riche, je voyagerais autour du monde.",
                        "Si je serais riche, je voyagerais autour du monde.",
                        "Si j'étais riche, je voyagerai autour du monde.",
                        "Si je suis riche, je voyagerais autour du monde."
                    ],
                    "answerIndex": 0,
                    "explanation": "La construction irréprochable est « Si + imparfait (étais) -> conditionnel présent (voyagerais) »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Identifiez la faute dans : « Si tu voudrais, nous pourrions aller au cinéma. »",
                    "options": [
                        "L'emploi du conditionnel 'voudrais' après 'si' au lieu de l'imparfait 'voulais'.",
                        "L'emploi du conditionnel 'pourrions'.",
                        "L'accord avec 'nous'.",
                        "La préposition 'au'."
                    ],
                    "answerIndex": 0,
                    "explanation": "Après 'si', on emploie l'imparfait (« Si tu voulais ») et jamais le conditionnel."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Conjuguez le verbe principal au conditionnel présent : « Si j'avais son numéro, je lui _________ (téléphoner) tout de suite. »",
                    "acceptedAnswers": [
                        "téléphonerais",
                        "Téléphonerais"
                    ],
                    "explanation": "Le verbe téléphoner au conditionnel présent avec 'je' est « téléphonerais »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u18-l3": {
        "id": "fr-u18-l3",
        "unit": "fr-u18",
        "level": "B1",
        "objective": "Construct unreal past third conditional hypotheses with 'si + plus-que-parfait -> conditionnel passé' to express regret.",
        "prerequisites": [
            "fr-u18-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u18-l2"
            ]
        },
        "presentation": {
            "explanation": "The 3rd conditional pattern expresses past counterfactual conditions—events that did not occur in the past, creating hindsight analysis or regret:\n\n1. The Syntactic Formula:\nSI + PLUS-QUE-PARFAIT -> CONDITIONNEL PASSÉ\n- Conditionnel passé formation: [Conditionnel présent de l'auxiliaire avoir/être] + [Participe passé].\n  * avoir: j'aurais, tu aurais, il aurait, nous aurions, vous auriez, ils auraient.\n  * être: je serais, tu serais, il serait, elle serait, nous serions, vous seriez, ils seraient.\n\n2. Contrast with Present Unreal:\n- 2nd Conditional (Si + Imparfait -> Cond. Présent): Present unreality ('Si j'avais de l'argent aujourd'hui...').\n- 3rd Conditional (Si + PQP -> Cond. Passé): Past irreversible unreality ('Si j'avais eu de l'argent hier...').",
            "examples": [
                {
                    "target": "Si nous avions su que la route était barrée, nous aurions emprunté l'autoroute.",
                    "reading": "see noo zah-vyohn soo kuh lah root ay-teh bah-ray, noo zoh-ryohn nahm-pruhn-tay loh-toh-root",
                    "translation": "If we had known the road was closed, we would have taken the highway."
                },
                {
                    "target": "Si elle s'était réveillée à l'heure, elle ne serait pas arrivée en retard à son examen.",
                    "reading": "see el say-teh ray-vay-yay ah luhr, el nuh suh-reh pah zah-ree-vay ahn ruh-tahr ah sohn nek-zah-man",
                    "translation": "If she had woken up on time, she would not have arrived late for her exam."
                },
                {
                    "target": "Si vous m'aviez prévenu plus tôt, j'aurais pu décaler notre rendez-vous professionnel.",
                    "reading": "see voo mah-vyay pray-vuh-noo ploo toh, zhoh-reh poo day-kah-lay noh-truh rahn-day-voo proh-feh-syohn-nel",
                    "translation": "If you had warned me earlier, I could have rescheduled our professional meeting."
                },
                {
                    "target": "S'ils avaient investi dans cette start-up prometteuse, ils auraient réalisé un bénéfice considérable.",
                    "reading": "seel zah-vyehn tan-ves-tee dahn set stahrt-uhp proh-meh-tuhz, eel zoh-ryehn ray-ah-lee-zay uhn bay-nay-fees kohn-see-day-rahbl",
                    "translation": "If they had invested in this promising startup, they would have made a considerable profit."
                },
                {
                    "target": "Si le temps avait été plus clément, nous serions montés jusqu'au sommet du pic.",
                    "reading": "see luh tahn zah-veh tay-tay ploo klay-mahn, noo suh-ryohn mohn-tay zhoos-koh soh-meh doo peek",
                    "translation": "If the weather had been milder, we would have climbed all the way to the peak's summit."
                }
            ],
            "mnemonics": [
                "DOUBLE PAST = DOUBLE COMPOUND: Si + [Imparfait + Participle] -> [Conditional + Participle]!"
            ],
            "culturalNotes": [
                "In French counterfactual history ('uchronie'), the 3rd conditional is celebrated for exploring alternate historical timelines ('Si Napoléon avait gagné à Waterloo...')."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Complétez l'irréel du passé : « Si tu m'avais invité, je _________ (venir) avec grand plaisir. »",
                    "options": [
                        "serais venu",
                        "aurais venu",
                        "étais venu",
                        "serai venu"
                    ],
                    "answerIndex": 0,
                    "explanation": "Le verbe 'venir' forme son conditionnel passé avec l'auxiliaire être : « je serais venu »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Choisissez la proposition subordonnée correcte pour : « ... nous aurions gagné le match. »",
                    "options": [
                        "Si nous avions mieux joué,",
                        "Si nous aurions mieux joué,",
                        "Si nous jouions mieux,",
                        "Si nous avions joués mieux,"
                    ],
                    "answerIndex": 0,
                    "explanation": "Après 'si', on utilise le plus-que-parfait sans conditionnel : « Si nous avions mieux joué »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase illustre un système hypothétique irréel du passé sans faute ?",
                    "options": [
                        "S'il aurait fait beau, nous serions sortis.",
                        "S'il avait fait beau, nous serions sortis.",
                        "S'il faisait beau, nous serions sortis hier.",
                        "S'il avait fait beau, nous sommes sortis."
                    ],
                    "answerIndex": 1,
                    "explanation": "« S'il avait fait beau (PQP), nous serions sortis (Cond. passé) » applique rigoureusement la règle."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Conjuguez le verbe principal au conditionnel passé : « Si nous avions eu le budget, nous _________ (acheter) ce matériel. »",
                    "acceptedAnswers": [
                        "aurions acheté",
                        "Aurions acheté"
                    ],
                    "explanation": "Auxiliaire avoir au conditionnel présent (aurions) + participe passé (acheté) = « aurions acheté »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u18-l4": {
        "id": "fr-u18-l4",
        "unit": "fr-u18",
        "level": "B1",
        "objective": "Construct mixed conditional structures connecting past causes to present ongoing consequences.",
        "prerequisites": [
            "fr-u18-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u18-l3"
            ]
        },
        "presentation": {
            "explanation": "Mixed conditionals bridge past causes with present consequences, or ongoing present conditions with past results:\n\n1. Past Action -> Present Consequence:\nSI + PLUS-QUE-PARFAIT -> CONDITIONNEL PRÉSENT\n- Meaning: If an event had (or hadn't) occurred in the past, the present reality would be different right now.\n- Example: 'Si j'avais accepté ce poste à l'époque (past action), j'habiterais à Londres aujourd'hui (present state).'\n\n2. Ongoing Present Trait -> Past Consequence:\nSI + IMPARFAIT -> CONDITIONNEL PASSÉ\n- Meaning: If a general, permanent trait were true, a specific past outcome would have occurred.\n- Example: 'Si elle n'était pas si timide (permanent trait), elle aurait pris la parole lors de la réunion d'hier (past action).'",
            "examples": [
                {
                    "target": "Si j'avais suivi des cours de piano dans mon enfance, je saurais jouer de ce magnifique instrument aujourd'hui.",
                    "reading": "see zhah-veh swee-vee day koor duh pyah-noh dahn mohn nahn-fahns, zhuh soh-reh zhoo-ay duh suh mahn-yee-feek an-stroo-mahn oh-zhoor-dwee",
                    "translation": "If I had taken piano lessons in my childhood, I would know how to play this magnificent instrument today."
                },
                {
                    "target": "Si nous avions acheté cet appartement il y a dix ans, nous serions propriétaires maintenant.",
                    "reading": "see noo zah-vyohn zahsh-tay seh tah-pahr-tuh-mahn eel yah dee zahn, noo suh-ryohn proh-pree-ay-tair man-tuh-nahn",
                    "translation": "If we had bought this apartment ten years ago, we would be homeowners now."
                },
                {
                    "target": "Si elle n'était pas si courageuse de nature, elle aurait abandonné l'épreuve hier après-midi.",
                    "reading": "see el neh-teh pah see koo-rah-zhuhz duh nah-toor, el zhoh-reh tah-bahn-doh-nay lay-pruhvh yair ah-preh-mee-dee",
                    "translation": "If she were not so naturally courageous, she would have abandoned the race yesterday afternoon."
                },
                {
                    "target": "S'ils s'étaient bien reposés cette nuit, ils ne seraient pas si épuisés en ce moment.",
                    "reading": "seel say-teh byan ruh-poh-zay set nwee, eel nuh suh-reh pah see zay-pwee-zay ahn suh moh-mahn",
                    "translation": "If they had rested well last night, they would not be so exhausted right now."
                },
                {
                    "target": "Si Thomas parlait couramment espagnol, il aurait obtenu ce poste à Madrid l'année dernière.",
                    "reading": "see toh-mah pahr-leh koo-rah-mahn es-pah-nyohl, eel loh-reh tohb-tuh-noo suh pohst ah mah-dreed lah-nay dair-nyair",
                    "translation": "If Thomas spoke fluent Spanish, he would have gotten that job in Madrid last year."
                }
            ],
            "mnemonics": [
                "LOOK AT THE TIME ANCHOR: 'Aujourd'hui / maintenant' in the main clause = Conditionnel Présent! 'Hier / à l'époque' in the condition = Plus-que-Parfait!"
            ],
            "culturalNotes": [
                "Mixed conditionals are standard in French career reviews ('bilan de compétences') for evaluating how past training decisions impact present professional capabilities."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Complétez la condition mixte (cause passée -> effet présent) : « Si tu avais fini tes études, tu _________ (avoir) un meilleur salaire aujourd'hui. »",
                    "options": [
                        "aurais",
                        "aurais eu",
                        "avais",
                        "auras"
                    ],
                    "answerIndex": 0,
                    "explanation": "L'indicateur temporel 'aujourd'hui' signale une conséquence présente ; on emploie le conditionnel présent : « aurais »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Quelle phrase traduit : « If we had taken that flight, we would be in Rome right now » ?",
                    "options": [
                        "Si nous avions pris ce vol, nous serions à Rome en ce moment.",
                        "Si nous avions pris ce vol, nous aurions été à Rome en ce moment.",
                        "Si nous prenions ce vol, nous serions à Rome en ce moment.",
                        "Si nous avions pris ce vol, nous sommes à Rome en ce moment."
                    ],
                    "answerIndex": 0,
                    "explanation": "« Si nous avions pris (PQP) ... nous serions (Cond. présent) » lie la cause passée au résultat présent."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Analysez la structure : « Si j'avais étudié le droit, je serais avocat aujourd'hui. »",
                    "options": [
                        "C'est une conditionnelle mixte reliant une action passée non réalisée à un état présent.",
                        "C'est une conditionnelle 100% au passé.",
                        "C'est une hypothèse réelle du présent.",
                        "C'est une phrase fautive car les temps ne correspondent pas."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'antécédent passé (PQP 'avais étudié') produit un état présent (Cond. présent 'serais avocat aujourd'hui')."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Conjuguez le verbe au conditionnel présent (effet actuel) : « Si elle avait accepté l'offre, elle _________ (travailler) avec nous maintenant. »",
                    "acceptedAnswers": [
                        "travaillerait",
                        "Travaillerait"
                    ],
                    "explanation": "Le conditionnel présent avec 'elle' est « travaillerait »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u18-l5": {
        "id": "fr-u18-l5",
        "unit": "fr-u18",
        "level": "B1",
        "objective": "Form alternative hypothetical conjunctions (à condition que + subjonctif, pourvu que, au cas où + conditionnel).",
        "prerequisites": [
            "fr-u18-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u18-l4"
            ]
        },
        "presentation": {
            "explanation": "Beyond 'si', French utilizes sophisticated connective conjunctions that govern specific moods:\n\n1. Conjunctions Requiring the SUBJONCTIF:\n- 'À condition que...' (On condition that / Provided that):\n  * 'Je viendrai à condition que tu sois là.'\n- 'Pourvu que...' (Provided that / As long as):\n  * 'Nous réussirons pourvu que tout le monde fasse des efforts.'\n- 'À moins que (+ ne)...' (Unless):\n  * 'Nous partirons demain à moins qu'il ne pleuve.' (Optional expletive ne).\n\n2. Conjunctions Requiring the CONDITIONNEL:\n- 'Au cas où... / Dans le cas où...' (In case / In the event that):\n  * ALWAYS requires the conditionnel:\n  * 'Prends un parapluie au cas où il pleuvrait.' (Never indicative or subjunctive!).\n  * 'Au cas où vous auriez des questions, écrivez-moi.'\n\n3. Prepositional Phrases Requiring the INFINITIF:\n- 'À condition de + infinitif' (When both clauses share the exact same subject):\n  * 'Tu réussiras à condition de travailler régulièrement.'",
            "examples": [
                {
                    "target": "Vous pouvez emprunter ce matériel à condition que vous le rapportiez intact demain matin.",
                    "reading": "voo poo-vay zahm-pruhn-tay suh mah-tay-ryel ah kohn-dee-syohn kuh voo luh rah-pohr-tyay an-tahkt duh-man mah-tan",
                    "translation": "You may borrow this equipment on condition that you return it intact tomorrow morning."
                },
                {
                    "target": "Prenez une veste chaude au cas où la température chuterait brusquement ce soir.",
                    "reading": "pruh-nay zoon vest shohd oh kahz oo lah tahm-pay-rah-toor shoot-reh broosk-mahn suh swahr",
                    "translation": "Take a warm jacket in case the temperature should drop suddenly tonight."
                },
                {
                    "target": "Le projet sera livré dans les délais pourvu que les fournisseurs respectent leur calendrier.",
                    "reading": "luh proh-zheh suh-rah lee-vray dahn lay day-leh poor-voo kuh lay foor-nee-suhr res-pekt luhr kah-lahn-dree-yay",
                    "translation": "The project will be delivered on schedule provided the suppliers adhere to their timetable."
                },
                {
                    "target": "Nous irons faire une randonnée en forêt à moins qu'il ne fasse vraiment trop mauvais.",
                    "reading": "noo zee-rohn fair oon rahn-doh-nay ahn foh-reh ah mwan keel nuh fahs vreh-mahn troh moh-veh",
                    "translation": "We will go hiking in the forest unless the weather is really too bad."
                },
                {
                    "target": "Au cas où vous auriez besoin d'assistance supplémentaire, n'hésitez pas à composer le numéro vert.",
                    "reading": "oh kahz oo voo zoh-ryay buh-zwan dah-sees-tahns soo-play-mahn-tair, nay-zee-tay pah zah kohm-poh-zay luh noo-may-roh vair",
                    "translation": "In the event that you should need additional assistance, do not hesitate to dial the toll-free number."
                }
            ],
            "mnemonics": [
                "AU CAS OÙ ALWAYS TAKES CONDITIONAL: 'Au cas où il VIENDRAIT' (Never indicative or subjunctive)!",
                "À CONDITION QUE & POURVU QUE TAKE SUBJUNCTIVE: (À condition que tu SOIS là)!"
            ],
            "culturalNotes": [
                "In French administrative correspondence, 'au cas où' followed by the conditional ('au cas où vous constateriez une anomalie') is standard for formal customer notices."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quel mode verbal doit obligatoirement suivre la locution « au cas où » ?",
                    "options": [
                        "Le conditionnel",
                        "Le subjonctif",
                        "L'indicatif présent",
                        "L'impératif"
                    ],
                    "answerIndex": 0,
                    "explanation": "La conjonction « au cas où » commande obligatoirement le mode conditionnel (« au cas où il viendrait »)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez avec le mode adéquat : « Je te prête ma voiture à condition que tu _________ (faire) attention. »",
                    "options": [
                        "fasses",
                        "fais",
                        "feras",
                        "ferais"
                    ],
                    "answerIndex": 0,
                    "explanation": "« à condition que » régit obligatoirement le subjonctif présent : « fasses »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Choisissez la phrase qui applique la syntaxe correcte avec 'au cas où' et 'à condition que' :",
                    "options": [
                        "Appelle-moi au cas où tu aurais un souci, à condition que tu saches où aller.",
                        "Appelle-moi au cas où tu as un souci, à condition que tu sais où aller.",
                        "Appelle-moi au cas où tu aies un souci, à condition que tu sauras où aller.",
                        "Appelle-moi au cas où tu avais un souci, à condition que tu savais où aller."
                    ],
                    "answerIndex": 0,
                    "explanation": "« au cas où tu aurais » (conditionnel) et « à condition que tu saches » (subjonctif) respectent parfaitement les régimes modaux."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez avec le verbe être au subjonctif : « Tout ira bien pourvu que nous _________ (être) prudents. »",
                    "acceptedAnswers": [
                        "soyons",
                        "Soyons"
                    ],
                    "explanation": "Le verbe être au subjonctif présent avec 'nous' est « soyons »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u19-l1": {
        "id": "fr-u19-l1",
        "unit": "fr-u19",
        "level": "B2",
        "objective": "Form the passive voice using auxiliary 'être' and the past participle with preposition 'par'.",
        "prerequisites": [
            "fr-u18-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u18-l5"
            ]
        },
        "presentation": {
            "explanation": "The passive voice foregrounds the patient (receiver of the action) rather than the agent:\n\n1. Structural Transformation:\n- Active: [Sujet Agent] + [Verbe Transitif Direct] + [COD / Patient]\n  * 'L'architecte conçoit le bâtiment.'\n- Passive: [Sujet Patient] + [ÊTRE conjugué au même temps] + [Participe Passé] + [PAR + Complément d'Agent]\n  * 'Le bâtiment est conçu par l'architecte.'\n\n2. Mandatory Agreement of the Past Participle:\nThe past participle ALWAYS agrees in gender and number with the grammatical subject of être:\n- 'Les lois seront votées par l'Assemblée.' (féminin pluriel -> -es)\n- 'Le rapport a été rédigé par l'expert.' (masculin singulier -> -é)\n\n3. Passive Across Key Tenses:\n- Présent: 'Le tableau est restauré par des spécialistes.'\n- Passé composé: 'Les propositions ont été acceptées par le comité.'\n- Futur simple: 'La nouvelle gare sera inaugurée par le maire.'\n- Imparfait: 'La forteresse était surveillée par la garde.'",
            "examples": [
                {
                    "target": "Ce chef-d'œuvre de la Renaissance a été minutieusement restauré par les experts du Louvre.",
                    "reading": "suh shef-duhvr duh lah ruh-neh-sahns ah ay-tay mee-noos-yuhz-mahn res-toh-ray pahr lay zek-spair doo loovr",
                    "translation": "This Renaissance masterpiece was meticulously restored by the Louvre's experts."
                },
                {
                    "target": "Les nouvelles réformes fiscales seront officiellement présentées par le Premier ministre demain matin.",
                    "reading": "lay noo-vel ray-fohrm fees-kahl suh-rohn oh-fee-syel-mahn pray-zahn-tay pahr luh pruh-myay mee-neestr duh-man mah-tan",
                    "translation": "The new fiscal reforms will be officially presented by the Prime Minister tomorrow morning."
                },
                {
                    "target": "Toutes les candidatures sont examinées avec la plus grande rigueur par le jury de sélection.",
                    "reading": "toot lay kahn-dee-dah-toor sohn teg-zah-mee-nay ah-vek lah ploo grahnd ree-guhr pahr luh zhoo-ree duh say-lek-syohn",
                    "translation": "All applications are examined with the utmost rigor by the selection jury."
                },
                {
                    "target": "Cette forteresse médiévale était autrefois défendue par une garnison de chevaliers d'élite.",
                    "reading": "set fohr-tuh-res may-dyeh-vahl ay-teh oh-truh-fwah day-fahn-doo pahr oon gahr-nee-zohn duh shuh-vah-lyay day-leet",
                    "translation": "This medieval fortress was once defended by a garrison of elite knights."
                },
                {
                    "target": "Le discours d'ouverture a été prononcé par la directrice générale de l'institution.",
                    "reading": "luh dees-koor doo-vair-toor ah ay-tay proh-nohn-say pahr lah dee-rek-trees zhay-nay-rahl duh lan-stee-too-syohn",
                    "translation": "The opening address was delivered by the institution's general director."
                }
            ],
            "mnemonics": [
                "PASSIVE PARTICIPLE AGREES WITH THE NEW SUBJECT: 'Être' drives the gender/number (-e, -s, -es)!",
                "PAR IS THE ACTIVE AGENT: Done BY someone -> 'Par'!"
            ],
            "culturalNotes": [
                "In French journalism (Le Monde, AFP dispatches), the passive voice is heavily used to present breaking news before responsible agents are confirmed."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Transformez à la voix passive : « Le comité approuve cette décision. »",
                    "options": [
                        "Cette décision est approuvée par le comité.",
                        "Cette décision a approuvé par le comité.",
                        "Cette décision sera approuver par le comité.",
                        "Cette décision était approuvé par le comité."
                    ],
                    "answerIndex": 0,
                    "explanation": "Le verbe 'approuve' (présent) donne 'est approuvée' au passif, avec accord au féminin singulier avec 'cette décision'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez l'accord du participe passé : « Ces lettres ont été _________ (écrire) par Victor Hugo. »",
                    "options": [
                        "écrites",
                        "écrit",
                        "écrite",
                        "écrits"
                    ],
                    "answerIndex": 0,
                    "explanation": "Le sujet 'Ces lettres' est féminin pluriel ; le participe passé prend la marque '-es' : « écrites »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Identifiez la phrase passive correctement conjuguée et accordée au futur simple :",
                    "options": [
                        "Les conventions seront signées par les deux ministres.",
                        "Les conventions seront signé par les deux ministres.",
                        "Les conventions sont signées de les deux ministres.",
                        "Les conventions seront signer par les deux ministres."
                    ],
                    "answerIndex": 0,
                    "explanation": "« seront signées » conjugue 'être' au futur simple et accorde le participe au féminin pluriel avec « les conventions »."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Conjuguez 'être' au présent dans cette phrase passive : « La directive _________ (être) appliquée par tous les services. »",
                    "acceptedAnswers": [
                        "est",
                        "Est"
                    ],
                    "explanation": "Au présent avec 'la directive' (3e personne singulier), le verbe être est « est »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u19-l2": {
        "id": "fr-u19-l2",
        "unit": "fr-u19",
        "level": "B2",
        "objective": "Identify verbs of state, sentiment, and description taking agent preposition 'de' instead of 'par'.",
        "prerequisites": [
            "fr-u19-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u19-l1"
            ]
        },
        "presentation": {
            "explanation": "While 'par' is standard for dynamic physical or intellectual actions, 'DE' replaces 'par' with specific verb categories:\n\n1. Verbs of Emotion, Sentiment & Esteem:\n- aimer, adorer, respecter, estimer, haïr, craindre, apprécier, admirer.\n- Example: 'Ce professeur est aimé et respecté de tous ses étudiants.' (Not 'par tous' in elevated French).\n\n2. Verbs of Physical Description, Border & State (Static Result):\n- être entouré de, être bordé de, être couvert de, être décoré de, être composé de, être suivi de, être précédé de.\n- Example: 'Le jardin est entouré d'une haute grille en fer forgé.'\n\n3. Verbs of Mental Process / Knowledge:\n- être connu de, être ignoré de, être oublié de.\n- Example: 'Son talent était ignoré de tous.'\n\n4. The Core Contrast:\n- 'L'arbre a été abattu par le bûcheron.' (Active dynamic process -> par).\n- 'Le mont Blanc est couvert de neige éternelle.' (Static state / description -> de).",
            "examples": [
                {
                    "target": "Ce professeur émérite était profondément respecté et estimé de l'ensemble de ses collègues.",
                    "reading": "suh proh-feh-suhr ay-may-reet ay-teh proh-fohn-day-mahn res-pek-tay ay es-tee-may duh lahn-sahnbl duh say koh-leg",
                    "translation": "This emeritus professor was deeply respected and esteemed by all of his colleagues."
                },
                {
                    "target": "Le charmant domaine viticole était entouré de collines verdoyantes et de forêts de chênes.",
                    "reading": "luh shahr-mahn doh-men vee-tee-kohl ay-teh tahn-too-ray duh koh-leen vair-dwah-yahnt ay duh foh-reh duh shen",
                    "translation": "The charming wine estate was surrounded by verdant rolling hills and oak forests."
                },
                {
                    "target": "Ce jeune prodige de la peinture contemporaine est désormais connu de tous les grands galeristes parisiens.",
                    "reading": "suh zhuhn proh-deezh duh lah pan-toor kohn-tahm-poh-ren ay day-zohr-meh koh-noo duh too lay grahn gah-luh-reest pah-ree-zyan",
                    "translation": "This young prodigy of contemporary painting is now known to all the major Parisian gallery owners."
                },
                {
                    "target": "Le sommet majestueux de la montagne était entièrement recouvert d'un épais manteau neigeux.",
                    "reading": "luh soh-meh mah-zhes-twyuh duh lah mohn-tahn-yuh ay-teh tahn-tyair-mahn ruh-koo-vair duh nay-peh mahn-toh nay-zhuh",
                    "translation": "The majestic mountain summit was completely covered with a thick blanket of snow."
                },
                {
                    "target": "Son nom et ses exploits héroïques étaient célébrés et admirés de toute la population.",
                    "reading": "sohn nohn ay say zeks-plwah ay-roh-eek ay-teh say-lay-bray ay ahd-mee-ray duh toot lah poh-poo-lah-syohn",
                    "translation": "His name and heroic deeds were celebrated and admired by the entire population."
                }
            ],
            "mnemonics": [
                "FEELINGS & FENCES TAKE 'DE': Emotions (aimé de) and Physical surroundings (entouré de) use 'DE', not 'PAR'!"
            ],
            "culturalNotes": [
                "In French literature (from Flaubert to Proust), the distinction between 'par' (accidental action) and 'de' (enduring state or sentiment) is prized as a marker of literary style."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle préposition introduit le complément d'agent après le verbe de sentiment « estimé » ?",
                    "options": [
                        "de",
                        "par",
                        "avec",
                        "pour"
                    ],
                    "answerIndex": 0,
                    "explanation": "Les verbes de sentiment et d'estime (aimé, respecté, estimé) prennent traditionnellement la préposition « de »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez : « La vieille maison de campagne est entourée _________ beaux cyprès centenaires. »",
                    "options": [
                        "de",
                        "par des",
                        "avec des",
                        "pour des"
                    ],
                    "answerIndex": 0,
                    "explanation": "Le verbe 'être entouré' exprime un état descriptif et se construit avec « de » (« entourée de beaux cyprès »)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Choisissez la phrase qui emploie correctement la préposition 'de' avec la voix passive :",
                    "options": [
                        "La lettre a été tapée de la secrétaire.",
                        "Cet auteur classique est lu et admiré de milliers de passionnés.",
                        "Le voleur a été arrêté d'un gendarme.",
                        "Le pont a été détruit de la tempête."
                    ],
                    "answerIndex": 1,
                    "explanation": "« admiré de » est un verbe de sentiment/état qui régit la préposition 'de', alors que les actions dynamiques (tapée, arrêté, détruit) prennent 'par'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez avec la préposition correcte : « Cette artiste est respectée _________ tous ses pairs. »",
                    "acceptedAnswers": [
                        "de",
                        "De"
                    ],
                    "explanation": "Après un verbe de respect ou d'estime, on emploie la préposition « de »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u19-l3": {
        "id": "fr-u19-l3",
        "unit": "fr-u19",
        "level": "B2",
        "objective": "Deploy pronominal passive constructions (se + verbe 3e personne) for general truths and procedures.",
        "prerequisites": [
            "fr-u19-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u19-l2"
            ]
        },
        "presentation": {
            "explanation": "French often avoids the heavy auxiliary passive by using reflexive verbs in an impersonal/passive sense:\n\n1. The Pronominal Passive Construction:\n- Sujet Inanimé (Chose) + SE / S' + Verbe à la 3e personne (singulier ou pluriel)\n  * 'Le vin rouge se boit à température ambiante.' (Red wine is drunk at room temperature).\n  * Plural: 'Les huîtres se mangent très fraîches.' (Oysters are eaten very fresh).\n\n2. Primary Contexts:\n- General truths, customs, culinary traditions: 'Le champagne se sert frais.'\n- Commercial practices & care labels: 'Ce produit se vend en pharmacie.' / 'Ce tissu se lave à sec.'\n- Linguistic rules & translations: 'Comment ce terme se traduit-il en français ?'\n\n3. Inanimate Subject Rule:\nThe subject must be an inanimate object or concept. If an animate agent is present, use 'on' or canonical passive.",
            "examples": [
                {
                    "target": "Ce cépage rouge réputé se déguste de préférence à une température de seize à dix-huit degrés.",
                    "reading": "suh say-pahzh roozh ray-poo-tay suh day-goost duh pray-fay-rahns ah oon tahm-pay-rah-toor duh sehz ah deez-weet duh-gray",
                    "translation": "This renowned red grape variety is best enjoyed at a temperature of sixteen to eighteen degrees."
                },
                {
                    "target": "Ces élégants tissus en soie naturelle se lavent exclusivement à la main ou à sec.",
                    "reading": "say zay-lay-gahn tee-soo ahn swah nah-too-rel suh lahv eks-kloo-zeev-mahn ah lah man oo ah sek",
                    "translation": "These elegant natural silk fabrics are washed exclusively by hand or dry cleaned."
                },
                {
                    "target": "En français soutenu, cette expression idiomatique s'emploie principalement à l'écrit.",
                    "reading": "ahn frahn-seh soo-tuh-noo, set tek-spreh-syohn ee-dyoh-mah-teek sahm-plwah pran-see-pahl-mahn ah lay-kree",
                    "translation": "In formal French, this idiomatic expression is used primarily in writing."
                },
                {
                    "target": "Les billets pour ce spectacle très attendu se sont vendus en moins de dix minutes.",
                    "reading": "lay bee-yay poor suh spek-tahkl treh zah-tahn-doo suh sohn vahn-doo ahn mwan duh dee mee-noot",
                    "translation": "Tickets for this highly anticipated show sold out in less than ten minutes."
                },
                {
                    "target": "Dans les régions du Sud, le fromage de brebis se mange traditionnellement avec de la confiture de cerises noires.",
                    "reading": "dahn lay ray-zhyohn doo sood, luh froh-mahzh duh bruh-bee suh mahnzh trah-dee-syoh-nel-mahn ah-vek duh lah kohn-fee-toor duh suh-reez nwahr",
                    "translation": "In southern regions, sheep's milk cheese is traditionally eaten with black cherry jam."
                }
            ],
            "mnemonics": [
                "THINGS ACT ON THEMSELVES IN FRENCH: 'Le vin se boit' = 'Wine is drunk'!",
                "AGREE WITH THE PLURAL NOUN: 'Les journaux SE VENDENT' (3rd person plural)!"
            ],
            "culturalNotes": [
                "French gastronomy guidelines, recipe books (Escoffier's Guide Culinaire), and apparel care labels almost universally deploy the pronominal passive."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Comment traduit-on au passif pronominal « This book is read easily » ?",
                    "options": [
                        "Ce livre se lit facilement.",
                        "Ce livre est lu facilement par soi.",
                        "Ce livre lit soi facilement.",
                        "Ce livre s'est lu facilement hier."
                    ],
                    "answerIndex": 0,
                    "explanation": "La forme passive pronominale d'usage général est « Ce livre se lit facilement »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Accordez le verbe au passif pronominal : « En automne, les châtaignes _________ (se ramasser) en forêt. »",
                    "options": [
                        "se ramassent",
                        "se ramasse",
                        "s'est ramassé",
                        "se ramasser"
                    ],
                    "answerIndex": 0,
                    "explanation": "Le sujet 'les châtaignes' est pluriel, donc le verbe prend la désinence '-ent' : « se ramassent »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase illustre un passif pronominal exprimant un usage général ou une vérité coutumière ?",
                    "options": [
                        "Ce fromage se mange avec du pain frais.",
                        "Pierre se regarde dans le miroir.",
                        "Les enfants se disputent dans la cour.",
                        "Elle se réveille à sept heures."
                    ],
                    "answerIndex": 0,
                    "explanation": "« Ce fromage se mange » a un sujet inanimé et exprime une vérité générale passive ('is eaten'). Les autres options sont des réflexifs ou réciproques ordinaires."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez la question au passif pronominal : « Comment ce mot _________ (s'écrire) en français ? »",
                    "acceptedAnswers": [
                        "s'écrit",
                        "S'écrit"
                    ],
                    "explanation": "Le verbe s'écrire à la 3e personne du singulier au présent est « s'écrit »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u19-l4": {
        "id": "fr-u19-l4",
        "unit": "fr-u19",
        "level": "B2",
        "objective": "Use causative passive structures with 'se faire' and 'se voir' (se faire vacciner, se voir décerner un prix).",
        "prerequisites": [
            "fr-u19-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u19-l3"
            ]
        },
        "presentation": {
            "explanation": "French uses causative reflexive structures when the subject experiences or undergoes an action instigated by an external agent:\n\n1. SE FAIRE + INFINITIF (To have something done to oneself / To undergo an action):\n- Voluntary service: 'Je vais me faire couper les cheveux.' (I am getting my hair cut).\n- Involuntary / adverse event: 'Il s'est fait voler son portefeuille.' (He had his wallet stolen).\n- Past participle rule: 'Fait' followed by an infinitive is ALWAYS INVARIABLE:\n  * 'Elle s'est fait soigner.' (Never 'faite'!).\n\n2. SE VOIR + INFINITIF / PARTICIPE (To find oneself granted / inflicted something):\n- Elevated & journalistic register:\n  * 'Le chercheur s'est vu décerner la médaille d'or.' (The researcher was awarded the gold medal).\n  * 'L'entreprise s'est vue refuser le permis de construire.' (The company was denied the building permit).",
            "examples": [
                {
                    "target": "Avant leur grand voyage humanitaire en Afrique de l'Ouest, ils sont allés se faire vacciner contre la fièvre jaune.",
                    "reading": "ah-vahn luhr grahn vwah-yahzh oo-mah-nee-tair ahn nah-freek duh lwest, eel sohn zah-lay suh fair vahk-see-nay kohn-truh lah fyeh-vruh zhohn",
                    "translation": "Before their major humanitarian trip to West Africa, they went to get vaccinated against yellow fever."
                },
                {
                    "target": "Le brillant auteur s'est vu décerner le prestigieux prix Goncourt lors d'une cérémonie solennelle.",
                    "reading": "luh bree-yahn oh-tuhr say voo day-sair-nay luh pres-tee-zhyuh pree gohn-koor lohr doon say-ray-moh-nee soh-lahn-nel",
                    "translation": "The brilliant author was awarded the prestigious Goncourt prize during a solemn ceremony."
                },
                {
                    "target": "Malheureusement, elle s'est fait dérober son sac à main dans une rame de métro bondée.",
                    "reading": "mah-luhr-uhz-mahn, el say feh day-roh-bay sohn sahk ah man dahn zoon rahm duh may-troh bohn-day",
                    "translation": "Unfortunately, she had her handbag stolen in a crowded subway car."
                },
                {
                    "target": "En raison de ces retards répétés, le conducteur s'est vu retirer son permis de conduire pour six mois.",
                    "reading": "ahn ray-zohn duh say ruh-tahr ray-pay-tay, luh kohn-dook-tuhr say voo ruh-tee-ray sohn pair-mee duh kohn-dweer poor see mwah",
                    "translation": "Due to these repeated infractions, the driver had his driver's license revoked for six months."
                },
                {
                    "target": "Nous devons absolument faire réparer cette fuite d'eau avant que les dégâts ne s'aggravent.",
                    "reading": "noo duh-vohn zahb-soh-loo-mahn fair ray-pah-ray set fweet doh ah-vahn kuh lay day-gah nuh sah-grahv",
                    "translation": "We absolutely must have this water leak repaired before the damage worsens."
                }
            ],
            "mnemonics": [
                "FAIT + INFINITIVE NEVER ADDS AN 'E': 'Elle s'est fait vacciner' (Invariable 'fait'!)",
                "SE VOIR FOR FORMAL HONORS & PENALTIES: 'S'est vu décerner' = 'Was awarded'!"
            ],
            "culturalNotes": [
                "In French media and administrative contexts, 'se voir confier une mission' (to be entrusted with a mission) replaces clumsy canonical passive forms."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Identifiez l'orthographe correcte du participe 'fait' suivi d'un infinitif : « Elle s'est _________ opérer hier. »",
                    "options": [
                        "fait",
                        "faite",
                        "faits",
                        "faites"
                    ],
                    "answerIndex": 0,
                    "explanation": "Le participe passé 'fait' suivi immédiatement d'un infinitif reste toujours invariable : « s'est fait opérer »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Traduisez dans un registre soutenu : « The scientist was awarded the Nobel Prize » :",
                    "options": [
                        "Le scientifique s'est vu décerner le prix Nobel.",
                        "Le scientifique a vu donner le prix Nobel.",
                        "Le scientifique s'est fait donner le prix Nobel.",
                        "Le scientifique a décerné le prix Nobel."
                    ],
                    "answerIndex": 0,
                    "explanation": "« Se voir décerner » est l'expression journalistique et institutionnelle consacrée."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase comporte une faute d'accord ?",
                    "options": [
                        "Elle s'est fait vacciner ce matin.",
                        "Ils se sont fait voler leurs passeports.",
                        "Elle s'est faite vacciner ce matin.",
                        "Le lauréat s'est vu remettre son trophée."
                    ],
                    "answerIndex": 2,
                    "explanation": "« faite » est une faute : 'fait' suivi d'un infinitif est invariable (« s'est fait vacciner »)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez la structure passive causative : « Je dois me _________ (faire) couper les cheveux. »",
                    "acceptedAnswers": [
                        "faire",
                        "Faire"
                    ],
                    "explanation": "L'infinitif dans la locution causative est « faire »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u19-l5": {
        "id": "fr-u19-l5",
        "unit": "fr-u19",
        "level": "B2",
        "objective": "Choose natural active voice alternatives using 'on' to avoid heavy passive constructions.",
        "prerequisites": [
            "fr-u19-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u19-l4"
            ]
        },
        "presentation": {
            "explanation": "In authentic French, overusing the passive voice is considered heavy and overly bureaucratic. Native speakers routinely replace passive structures with active sentences using the indefinite pronoun ON:\n\n1. The Substitution Principle:\n- Heavy Passive: 'L'espagnol est parlé en Argentine.'\n- Natural Active: 'On parle espagnol en Argentine.'\n- Clumsy Passive: 'La décision a été prise hier soir par le conseil.'\n- Natural Active: 'On a pris la décision hier soir.' (or 'Le conseil a pris...')\n\n2. Key Advantages of 'ON':\n- Fluidity & Dynamism: Active verbs provide greater clarity and impact.\n- Avoids Complex Auxiliaries: Eliminates double compound forms ('a été construit', 'auraient été rédigés').\n- Indefinite / Collective Agent: When the agent is unknown, unspecified, or general, 'on' is the standard solution.\n- Linguistic Naturalness: French has a strong innate preference for active verbal structures over passive constructions.",
            "examples": [
                {
                    "target": "On a découvert un nouveau gisement de gaz naturel au large des côtes méditerranéennes.",
                    "reading": "ohn nah day-koo-vair uhn noo-voh zhee-zuh-mahn duh gahz nah-too-rel oh lahrzh day koht may-dee-teh-rah-nay-en",
                    "translation": "A new natural gas deposit was discovered off the Mediterranean coast."
                },
                {
                    "target": "On dit souvent que la persévérance est la véritable clé de la réussite professionnelle.",
                    "reading": "ohn dee soo-vahn kuh lah pair-say-vay-rahns ay lah vay-ree-tahbl klay duh lah ray-oo-seet proh-feh-syohn-nel",
                    "translation": "It is often said that perseverance is the true key to professional success."
                },
                {
                    "target": "Dans cette entreprise innovante, on encourage vivement les initiatives individuelles des salariés.",
                    "reading": "dahn set ahn-truh-preez een-noh-vahnt, ohn nahn-koo-rahzh veev-mahn lay zee-nee-syah-teev an-dee-vee-dwel day sah-lah-ryay",
                    "translation": "In this innovative company, employees' individual initiatives are strongly encouraged."
                },
                {
                    "target": "On a immédiatement fermé la station de métro pour des raisons de sécurité publique.",
                    "reading": "ohn nah ee-may-dyaht-mahn fair-may lah stah-syohn duh may-troh poor day ray-zohn duh say-koo-ree-tay poo-bleek",
                    "translation": "The subway station was immediately closed for public safety reasons."
                },
                {
                    "target": "On servira le dîner de gala dans les salons de réception dès l'arrivée des invités d'honneur.",
                    "reading": "ohn sair-vee-rah luh dee-nay duh gah-lah dahn lay sah-lohn duh ray-sep-syohn day lah-ree-vay day zan-vee-tay doh-nuhr",
                    "translation": "The gala dinner will be served in the reception halls as soon as the guests of honor arrive."
                }
            ],
            "mnemonics": [
                "DITCH THE PASSIVE SLUDGE: Replace 'A été fait' with 'On a fait' for crisp, authentic French!"
            ],
            "culturalNotes": [
                "The Académie Française and French stylistic guides (Grevisse's Le Bon Usage) emphasize that active sentences with 'on' embody the clarity ('la clarté française') celebrated in French prose."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Remplacez la tournure passive lourde « Le projet a été annulé » par une tournure active naturelle avec 'on' :",
                    "options": [
                        "On a annulé le projet.",
                        "On a été annuler le projet.",
                        "On est annulé le projet.",
                        "On annule le projet hier."
                    ],
                    "answerIndex": 0,
                    "explanation": "« On a annulé le projet » remplace élégamment et fidèlement le passif au passé composé."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Comment rendre « French is spoken here » de la façon la plus naturelle en français parlé et écrit ?",
                    "options": [
                        "Ici, on parle français.",
                        "Ici, le français est parlé par les gens.",
                        "Ici, le français a été parlé.",
                        "Ici, nous sommes parlés français."
                    ],
                    "answerIndex": 0,
                    "explanation": "« Ici, on parle français » est la formulation naturelle et concise universellement utilisée."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Pourquoi les rédacteurs francophones privilégient-ils souvent 'on' par rapport à la voix passive canonique ?",
                    "options": [
                        "Pour rendre le style plus dynamique, fluide et concis en évitant les lourdeurs d'auxiliaires passifs.",
                        "Parce que la voix passive est grammaticalement interdite en français.",
                        "Parce que 'on' oblige le verbe à se mettre au subjonctif.",
                        "Parce que 'on' ne peut désigner qu'une seule personne identifiée."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'emploi de 'on' allège la phrase et donne un tour actif et dynamique à l'expression."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Transposez à la voix active avec 'on' (passé composé) : « La nouvelle loi a été votée. » -> « On a _________ la nouvelle loi. »",
                    "acceptedAnswers": [
                        "voté",
                        "Voté"
                    ],
                    "explanation": "Avec le sujet 'on' et l'auxiliaire 'avoir' sans COD précédent, le participe est « voté »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u20-l1": {
        "id": "fr-u20-l1",
        "unit": "fr-u20",
        "level": "B2",
        "objective": "Convert direct quotations into reported indirect speech with present introductory verbs (il dit que, il demande si).",
        "prerequisites": [
            "fr-u19-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u19-l5"
            ]
        },
        "presentation": {
            "explanation": "When the reporting/introductory verb is in the PRESENT (or future), the tenses of the reported clause DO NOT CHANGE. However, pronouns, possessives, and syntax shift:\n\n1. Declarative Statements: Introductory verb + QUE / QU'\n- Direct: 'Paul dit : « J'adore cette ville. »'\n- Indirect: 'Paul dit qu'il adore cette ville.'\n\n2. Total Questions (Yes/No): Demander + SI / S'\n- Direct: 'Elle demande : « Est-ce que tu viens ? »'\n- Indirect: 'Elle demande si tu viens.'\n\n3. Partial Questions:\n- 'Qu'est-ce que / Que' -> CE QUE / CE QU':\n  * Direct: 'Il demande : « Qu'est-ce que tu fais ? »' -> Indirect: 'Il demande ce que tu fais.'\n- 'Qu'est-ce qui' -> CE QUI:\n  * Direct: 'Il demande : « Qu'est-ce qui se passe ? »' -> Indirect: 'Il demande ce qui se passe.'\n- Interrogative words (où, quand, comment, pourquoi, combien):\n  * Keep the word without subject-verb inversion: 'Il demande où nous allons.' (Not 'où allons-nous'!).\n\n4. Imperatives (Commands): DE + INFINITIF\n- Direct: 'Le guide dit : « Attendez ici ! »'\n- Indirect: 'Le guide dit d'attendre ici.'",
            "examples": [
                {
                    "target": "Le médecin affirme que le patient doit suivre ce traitement sans la moindre interruption.",
                    "reading": "luh mayd-san ah-feerm kuh luh pah-syahn dwah swee-vruh suh treht-mahn sahn lah mwan-druh an-tay-roop-syohn",
                    "translation": "The doctor asserts that the patient must follow this treatment without the slightest interruption."
                },
                {
                    "target": "Le responsable nous demande si nous avons bien reçu les consignes de sécurité.",
                    "reading": "luh res-pohn-sahbl noo duh-mahnd see noo zah-vohn byan ruh-soo lay kohn-seen-yuh duh say-koo-ree-tay",
                    "translation": "The manager asks us whether we have properly received the safety instructions."
                },
                {
                    "target": "L'agent d'accueil veut savoir ce qui s'est produit lors de l'incident au guichet.",
                    "reading": "lah-zhahn dah-kuh-yuh vuh sah-vwahr suh kee say proh-dwee lohr duh lan-see-dahn oh gee-sheh",
                    "translation": "The front desk clerk wants to know what happened during the incident at the counter."
                },
                {
                    "target": "L'avocat explique à son client pourquoi cette clause du contrat est essentielle.",
                    "reading": "lah-voh-kah eks-pleek ah sohn klee-ahn poor-kwah set klohz doo kohn-trah ay teh-sahn-syel",
                    "translation": "The lawyer explains to his client why this contract clause is essential."
                },
                {
                    "target": "Le professeur demande aux étudiants de rendre leur devoir avant la fin du cours.",
                    "reading": "luh proh-feh-suhr duh-mahnd oh zay-too-dyahn duh rahn-druh luhr duh-vwahr ah-vahn lah fan doo koor",
                    "translation": "The professor asks the students to hand in their assignment before the end of class."
                }
            ],
            "mnemonics": [
                "PRESENT INTRODUCER = ZERO TENSE SHIFT: Only pronouns and conjunctions change!",
                "WHAT -> CE QUE / CE QUI: 'Qu'est-ce que tu veux ?' becomes 'Il demande ce que tu veux'!"
            ],
            "culturalNotes": [
                "In French professional environments, reporting colleagues' questions with 'Il demande si...' or 'Elle souhaite savoir ce que...' ensures clear, respectful communication."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Transformez au discours indirect au présent : « Marc demande : 'Qu'est-ce que vous préparez ?' »",
                    "options": [
                        "Marc demande ce que nous préparons.",
                        "Marc demande qu'est-ce que nous préparons.",
                        "Marc demande ce qui nous préparons.",
                        "Marc demande si nous préparons."
                    ],
                    "answerIndex": 0,
                    "explanation": "La question 'qu'est-ce que' devient « ce que » au discours indirect."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Transposez l'impératif au discours indirect : « Le chef ordonne : 'Fermez la porte !' »",
                    "options": [
                        "Le chef ordonne de fermer la porte.",
                        "Le chef ordonne que fermer la porte.",
                        "Le chef ordonne si on ferme la porte.",
                        "Le chef ordonne de fermez la porte."
                    ],
                    "answerIndex": 0,
                    "explanation": "Un ordre à l'impératif se transforme en « de + infinitif » : « ordonne de fermer »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle transformation au discours indirect est syntaxiquement irréprochable ?",
                    "options": [
                        "Elle demande où nous allons.",
                        "Elle demande où est-ce que nous allons-nous.",
                        "Elle demande qu'est-ce qui nous faisons.",
                        "Elle demande de nous venons."
                    ],
                    "answerIndex": 0,
                    "explanation": "« Elle demande où nous allons » conserve le mot interrogatif 'où' sans inversion ni formule 'est-ce que'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez la transformation : « Il demande : 'Est-ce qu'il pleut ?' » -> « Il demande _________ il pleut. »",
                    "acceptedAnswers": [
                        "s'il",
                        "S'il"
                    ],
                    "explanation": "'Est-ce que' en interrogation totale devient 'si', avec élision obligatoire devant 'il' : « s'il »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u20-l2": {
        "id": "fr-u20-l2",
        "unit": "fr-u20",
        "level": "B2",
        "objective": "Execute past tense concordance in reported speech (présent -> imparfait, passé composé -> plus-que-parfait).",
        "prerequisites": [
            "fr-u20-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u20-l1"
            ]
        },
        "presentation": {
            "explanation": "When the reporting verb is in the PAST (passé composé, imparfait, passé simple), systematic backshifting occurs:\n\n1. Systematic Concordance Table:\n- Présent -> IMPARFAIT:\n  * Direct: 'Il a dit : « Je suis fatigué. »' -> Indirect: 'Il a dit qu'il était fatigué.'\n- Passé Composé / Passé Simple -> PLUS-QUE-PARFAIT:\n  * Direct: 'Elle a expliqué : « J'ai fini mon projet. »' -> Indirect: 'Elle a expliqué qu'elle avait fini son projet.'\n- Imparfait -> IMPARFAIT (Unchanged):\n  * Direct: 'Il a précisé : « Il faisait froid. »' -> Indirect: 'Il a précisé qu'il faisait froid.'\n- Plus-que-Parfait -> PLUS-QUE-PARFAIT (Unchanged):\n  * Direct: 'Il a ajouté : « J'avais déjà déjeuné. »' -> Indirect: 'Il a ajouté qu'il avait déjà déjeuné.'\n\n2. Temporal Horizon:\nThe reported statement is backshifted into the past perspective of the initial speaker's utterance.",
            "examples": [
                {
                    "target": "Le ministre a déclaré lors du point presse que la situation économique était sous contrôle.",
                    "reading": "luh mee-neestr ah day-klah-ray lohr doo pwan pres kuh lah see-twah-syohn ay-koh-noh-meek ay-teh soo kohn-trohl",
                    "translation": "The minister declared at the press briefing that the economic situation was under control."
                },
                {
                    "target": "L'accusé a soutenu devant le juge qu'il n'avait jamais rencontré les suspects auparavant.",
                    "reading": "lah-koo-zay ah soo-tuh-noo duh-vahn luh zhoozh keel nah-veh zhah-meh rahn-kohn-tray lay soos-peh toh-pah-rah-vahn",
                    "translation": "The defendant maintained before the judge that he had never met the suspects previously."
                },
                {
                    "target": "Les témoins ont affirmé qu'ils avaient entendu une violente déflagration au bout de la rue.",
                    "reading": "lay tay-mwan zohn tah-feer-may keel zah-vyohn tahn-tahn-doo oon vyoh-lahnt day-flah-grah-syohn oh boo duh lah roo",
                    "translation": "The witnesses affirmed that they had heard a violent explosion at the end of the street."
                },
                {
                    "target": "Elle m'a confié qu'elle cherchait un nouvel appartement dans le centre de Lyon depuis un mois.",
                    "reading": "el mah kohn-fyay kel shair-sheh uhn noo-vel ah-pahr-tuh-mahn dahn luh sahn-truh duh lyohn duh-pwee uhn mwah",
                    "translation": "She confided in me that she had been looking for a new apartment in central Lyon for a month."
                },
                {
                    "target": "L'ingénieur a certifié que toutes les anomalies techniques avaient été corrigées.",
                    "reading": "lan-zhay-nyuhr ah sair-tee-fyay kuh toot lay zah-noh-mah-lee tek-neek zah-vyohn tay-tay koh-ree-zhay",
                    "translation": "The engineer certified that all technical anomalies had been corrected."
                }
            ],
            "mnemonics": [
                "BACKSHIFT RULE: Present slides back to Imparfait; Compound past slides back to Plus-que-Parfait!"
            ],
            "culturalNotes": [
                "Court transcripts ('procès-verbaux') and police reports in France strictly enforce backshifting concordance."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Transposez au passé : « Il a dit : 'Je comprends la situation.' »",
                    "options": [
                        "Il a dit qu'il comprenait la situation.",
                        "Il a dit qu'il comprend la situation.",
                        "Il a dit qu'il comprendrait la situation.",
                        "Il a dit qu'il a compris la situation."
                    ],
                    "answerIndex": 0,
                    "explanation": "Le présent 'comprends' devient l'imparfait « comprenait » après un verbe introducteur au passé ('a dit')."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Transposez : « Elle a affirmé : 'Nous avons terminé le travail.' »",
                    "options": [
                        "Elle a affirmé qu'ils avaient terminé le travail.",
                        "Elle a affirmé qu'ils ont terminé le travail.",
                        "Elle a affirmé qu'ils termineraient le travail.",
                        "Elle a affirmé qu'ils avaient terminer le travail."
                    ],
                    "answerIndex": 0,
                    "explanation": "Le passé composé 'avons terminé' devient le plus-que-parfait « avaient terminé »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Identifiez la concordance des temps exacte pour : « L'expert a confirmé : 'J'ai examiné les pièces hier.' »",
                    "options": [
                        "L'expert a confirmé qu'il examine les pièces.",
                        "L'expert a confirmé qu'il avait examiné les pièces la veille.",
                        "L'expert a confirmé qu'il examinera les pièces demain.",
                        "L'expert a confirmé qu'il a examiné les pièces hier."
                    ],
                    "answerIndex": 1,
                    "explanation": "« avait examiné » (plus-que-parfait) et « la veille » transposent impeccablement le passé composé et le repère temporel."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Conjuguez à l'imparfait : « Julien m'a avoué qu'il _________ (être) très stressé par son examen. »",
                    "acceptedAnswers": [
                        "était",
                        "Était"
                    ],
                    "explanation": "Le verbe être à l'imparfait avec 'il' est « était »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u20-l3": {
        "id": "fr-u20-l3",
        "unit": "fr-u20",
        "level": "B2",
        "objective": "Shift future and conditional tenses in past reported speech (futur simple -> conditionnel présent).",
        "prerequisites": [
            "fr-u20-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u20-l2"
            ]
        },
        "presentation": {
            "explanation": "In French grammar, the Conditionnel Présent functions historically and syntactically as the 'Future in the Past' (le futur du passé):\n\n1. The Concordance Shifts:\n- Futur Simple -> CONDITIONNEL PRÉSENT:\n  * Direct: 'Il a promis : « Je viendrai demain. »'\n  * Indirect: 'Il a promis qu'il viendrait le lendemain.'\n- Futur Antérieur -> CONDITIONNEL PASSÉ:\n  * Direct: 'Elle a assuré : « J'aurai fini avant midi. »'\n  * Indirect: 'Elle a assuré qu'elle aurait fini avant midi.'\n- Futur Proche (Aller + Inf.) -> IMPARFAIT D'ALLER + INF.:\n  * Direct: 'Il a dit : « Je vais partir. »'\n  * Indirect: 'Il a dit qu'il allait partir.'\n- Conditionnel (Présent/Passé) -> Remains UNCHANGED:\n  * Direct: 'Il a pensé : « J'aimerais visiter le musée. »'\n  * Indirect: 'Il a pensé qu'il aimerait visiter le musée.'",
            "examples": [
                {
                    "target": "Le directeur a promis que les salaires seraient revalorisés dès le début du prochain trimestre.",
                    "reading": "luh dee-rek-tuhr ah proh-mee kuh lay sah-lair suh-reh ruh-vah-loh-ree-zay day luh day-boo doo proh-shan tree-mestr",
                    "translation": "The director promised that salaries would be increased at the start of the next quarter."
                },
                {
                    "target": "Elle m'a assuré qu'elle nous rejoindrait au restaurant dès qu'elle aurait fini sa réunion.",
                    "reading": "el mah ah-soo-ray kel noo ruh-zhwan-dreh oh res-toh-rahn day kel loh-reh fee-nee sah ray-oo-nyohn",
                    "translation": "She assured me that she would join us at the restaurant as soon as she had finished her meeting."
                },
                {
                    "target": "Les météorologues ont annoncé qu'une vague de froid intense frapperait le pays en fin de semaine.",
                    "reading": "lay may-tay-oh-roh-lohg zohn tah-nohn-say koon vahg duh frwah an-tahns frahp-reh luh peh-ee ahn fan duh suh-men",
                    "translation": "Meteorologists announced that an intense cold wave would hit the country by the end of the week."
                },
                {
                    "target": "Il nous a avertis qu'il allait déménager à Bordeaux pour prendre la direction de l'agence régionale.",
                    "reading": "eel noo zah ah-vair-tee keel ah-leh day-may-nah-zhay ah bohr-doh poor prahn-druh lah dee-rek-syohn duh lah-zhahns ray-zhyoh-nahl",
                    "translation": "He warned us that he was going to move to Bordeaux to take over regional agency management."
                },
                {
                    "target": "Le candidat a affirmé qu'il mettrait en œuvre son programme dès son élection.",
                    "reading": "luh kahn-dee-dah ah ah-feer-may keel meh-treh ahn nuhvr sohn proh-grahm day sohn nay-lek-syohn",
                    "translation": "The candidate asserted that he would implement his platform upon his election."
                }
            ],
            "mnemonics": [
                "FUTURE IN THE PAST = CONDITIONAL: 'Je ferai' in direct past speech becomes 'Il ferait' in reported speech!"
            ],
            "culturalNotes": [
                "French diplomatic cables and historical biographies (De Gaulle's Mémoires de Guerre) rely on the conditional as the future-in-the-past to articulate strategic visions."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Transposez au discours indirect au passé : « Il a dit : 'Je t'appellerai ce soir.' »",
                    "options": [
                        "Il a dit qu'il m'appellerait ce soir-là.",
                        "Il a dit qu'il m'appellera ce soir.",
                        "Il a dit qu'il m'a appelé ce soir.",
                        "Il a dit qu'il m'appelait hier."
                    ],
                    "answerIndex": 0,
                    "explanation": "Le futur simple 'appellerai' devient le conditionnel présent « appellerait » (futur du passé)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Quelle est la transposition correcte de « Nous allons signer l'accord » après « Le président a annoncé que... » ?",
                    "options": [
                        "qu'ils allaient signer l'accord.",
                        "qu'ils vont signer l'accord.",
                        "qu'ils signeraient l'accord hier.",
                        "qu'ils sont allés signer l'accord."
                    ],
                    "answerIndex": 0,
                    "explanation": "Le futur proche 'vont signer' devient 'allaient signer' (imparfait d'aller + infinitif)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Choisissez la phrase qui applique rigoureusement la règle du futur dans le passé :",
                    "options": [
                        "Elle a garanti qu'elle achètera le billet.",
                        "Elle a garanti qu'elle avait acheté le billet demain.",
                        "Elle a garanti qu'elle achèterait le billet le lendemain.",
                        "Elle a garanti qu'elle achète le billet ce jour-là."
                    ],
                    "answerIndex": 2,
                    "explanation": "« achèterait » (conditionnel présent) et « le lendemain » représentent la transposition parfaite du futur et du repère temporel."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Conjuguez au conditionnel présent : « Le maire a affirmé que les travaux _________ (prendre) six mois. »",
                    "acceptedAnswers": [
                        "prendraient",
                        "Prendraient"
                    ],
                    "explanation": "Le conditionnel présent de prendre avec 'les travaux' (3e personne pluriel) est « prendraient »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u20-l4": {
        "id": "fr-u20-l4",
        "unit": "fr-u20",
        "level": "B2",
        "objective": "Transform spatial and temporal deictic markers (aujourd'hui -> ce jour-là, demain -> le lendemain, hier -> la veille).",
        "prerequisites": [
            "fr-u20-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u20-l3"
            ]
        },
        "presentation": {
            "explanation": "When shifting to past reported speech, deictic markers anchored in the speaker's 'now' must be transformed into objective retrospective anchors:\n\n1. Temporal Deictic Shifts:\n- aujourd'hui -> ce jour-là\n- hier -> la veille\n- avant-hier -> l'avant-veille\n- demain -> le lendemain\n- après-demain -> le surlendemain\n- ce matin / ce soir -> ce matin-là / ce soir-là\n- cette semaine / cette année -> cette semaine-là / cette année-là\n- la semaine prochaine -> la semaine suivante\n- la semaine dernière -> la semaine précédente\n- il y a trois jours -> trois jours plus tôt / trois jours auparavant\n- dans trois jours -> trois jours plus tard / trois jours après\n\n2. Spatial Deictic Shifts:\n- ici -> là / là-bas\n- ce / cet / cette / ces [nom] -> ce / cet / cette / ces [nom]-là",
            "examples": [
                {
                    "target": "Le témoin a déclaré que l'agression s'était produite la veille au soir vers vingt-trois heures.",
                    "reading": "luh tay-mwan ah day-klah-ray kuh lah-greh-syohn say-teh proh-dweet lah veh-yuh oh swahr vair van-trwah zuhr",
                    "translation": "The witness declared that the assault had occurred the night before around 11:00 PM."
                },
                {
                    "target": "Sophie m'a expliqué qu'elle partirait pour Tokyo le lendemain matin à la première heure.",
                    "reading": "soh-fee mah eks-plee-kay kel pahr-tee-reh poor toh-kyoh luh lahn-duh-man mah-tan ah lah pruh-myair uhr",
                    "translation": "Sophie explained to me that she would leave for Tokyo the following morning at the crack of dawn."
                },
                {
                    "target": "L'accusé a prétendu qu'il se trouvait à Marseille ce jour-là et ne pouvait pas être sur les lieux du crime.",
                    "reading": "lah-koo-zay ah pray-tahn-doo keel suh troo-veh ah mahr-seh-yuh suh zhoor-lah ay nuh poo-veh pah zehtr soor lay lyuh doo kreem",
                    "translation": "The defendant claimed that he was in Marseille that day and could not have been at the crime scene."
                },
                {
                    "target": "Le banquier a confirmé que le virement avait été effectué trois jours auparavant.",
                    "reading": "luh bahn-kyay ah kohn-feer-may kuh luh veer-mahn ah-veh tay-tay ef-fek-too-ay trwah zhoor toh-pah-rah-vahn",
                    "translation": "The banker confirmed that the bank transfer had been executed three days earlier."
                },
                {
                    "target": "Le chercheur a annoncé qu'il publierait les résultats définitifs de l'étude l'année suivante.",
                    "reading": "luh shair-shuhr ah ah-nohn-say keel poo-blee-reh lay ray-zool-tah day-fee-nee-teef duh lay-tood lah-nay swee-vahnt",
                    "translation": "The researcher announced that he would publish the definitive study findings the following year."
                }
            ],
            "mnemonics": [
                "ADD '-LÀ' & 'VEILLE / LENDEMAIN': Aujourd'hui -> Ce jour-là; Hier -> La veille; Demain -> Le lendemain!"
            ],
            "culturalNotes": [
                "In French legal jurisprudence and journalism, failing to transpose deictic anchors creates ambiguity ('amphibologie') that can compromise legal statements."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quel repère temporel remplace « demain » dans un discours rapporté au passé ?",
                    "options": [
                        "le lendemain",
                        "la veille",
                        "ce jour-là",
                        "trois jours plus tôt"
                    ],
                    "answerIndex": 0,
                    "explanation": "Dans un récit ou discours indirect au passé, 'demain' devient « le lendemain »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Transposez le repère temporel : « Elle m'a dit : 'Je l'ai vu il y a deux jours.' »",
                    "options": [
                        "Elle m'a dit qu'elle l'avait vu deux jours plus tôt.",
                        "Elle m'a dit qu'elle l'a vu il y a deux jours.",
                        "Elle m'a dit qu'elle le voyait dans deux jours.",
                        "Elle m'a dit qu'elle l'avait vu le lendemain."
                    ],
                    "answerIndex": 0,
                    "explanation": "'il y a deux jours' se transpose en « deux jours plus tôt » ou « deux jours auparavant »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Identifiez la transposition correcte des repères dans : « Il m'a assuré : 'Nous partirons la semaine prochaine.' »",
                    "options": [
                        "Il m'a assuré qu'ils partiraient la semaine prochaine.",
                        "Il m'a assuré qu'ils partiraient la semaine suivante.",
                        "Il m'a assuré qu'ils sont partis la semaine dernière.",
                        "Il m'a assuré qu'ils partiront la semaine d'après."
                    ],
                    "answerIndex": 1,
                    "explanation": "« partiraient » (conditionnel) et « la semaine suivante » transposent fidèlement le temps et l'indicateur temporel."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Quel repère temporel remplace 'hier' dans un discours rapporté au passé ? (terme attendu : la _________)",
                    "acceptedAnswers": [
                        "veille",
                        "Veille"
                    ],
                    "explanation": "Le repère temporel correspondant à 'hier' dans un contexte passé est « la veille »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u20-l5": {
        "id": "fr-u20-l5",
        "unit": "fr-u20",
        "level": "B2",
        "objective": "Report journalistic interviews and parliamentary inquiries using sophisticated reporting verbs (soutenir, prétendre, objecter).",
        "prerequisites": [
            "fr-u20-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u20-l4"
            ]
        },
        "presentation": {
            "explanation": "In French journalistic, political, and academic discourse, relying solely on 'dire' or 'demander' is stylistically impoverished. Professional French uses nuanced introductory verbs indicating stance, credibility, or argumentative intent:\n\n1. Verbs of Affirmation & Conviction:\n- Soutenir / Maintenir que: To firmly maintain/assert an argument against doubt.\n- Affirmer / Certifier que: To state authoritatively as a verified fact.\n- Souligner / Faire observer que: To emphasize or draw attention to an essential point.\n\n2. Verbs of Skepticism & Unverified Claims:\n- Prétendre que: To claim (strongly implies the reporter doubts the claim's veracity).\n- Alléguer que: To allege (formal / legal register).\n- Laisser entendre que: To imply / insinuate.\n\n3. Verbs of Objection & Concession:\n- Objecter / Rétorquer que: To object / snap back with a counterargument.\n- Concéder / Reconnaître / Admettre que: To concede / admit a fact or error.\n- Déplorer / Regretter que (+ subjonctif): To deplore / lament that.",
            "examples": [
                {
                    "target": "Le ministre a catégoriquement démenti les rumeurs et a soutenu que le calendrier des réformes serait respecté.",
                    "reading": "luh mee-neestr ah kah-tay-goh-reek-mahn day-mahn-tee lay roo-muhr ay ah soo-tuh-noo kuh luh kah-lahn-dree-yay day ray-fohrm suh-reh res-pek-tay",
                    "translation": "The minister categorically denied the rumors and maintained that the reform schedule would be respected."
                },
                {
                    "target": "Le porte-parole de l'opposition a vivement objecté que les chiffres avancés par le gouvernement étaient inexacts.",
                    "reading": "luh pohrt-pah-rohl duh loh-poh-zee-syohn ah veev-mahn ohb-zhek-tay kuh lay sheefr ah-vahn-say pahr luh goo-vair-nuh-mahn ay-teh teen-eg-zahkt",
                    "translation": "The opposition spokesperson sharply objected that the figures put forward by the government were inaccurate."
                },
                {
                    "target": "L'accusé prétendait qu'il n'avait jamais eu connaissance des transactions financières litigieuses.",
                    "reading": "lah-koo-zay pray-tahn-deh keel nah-veh zhah-meh oo koh-neh-sahns day trahn-zahk-syohn fee-nahn-syair lee-tee-zhyuhz",
                    "translation": "The defendant claimed that he had never had knowledge of the disputed financial transactions."
                },
                {
                    "target": "Le rapporteur de la commission d'enquête a souligné qu'aucun dysfonctionnement majeur n'avait été constaté.",
                    "reading": "luh rah-pohr-tuhr duh lah koh-mee-syohn dahn-ket ah soo-leen-yay koh-koon dees-fohnk-syohn-mahn mah-zhuhr nah-veh tay-tay kohn-stah-tay",
                    "translation": "The rapporteur of the inquiry commission emphasized that no major dysfunction had been observed."
                },
                {
                    "target": "La direction a finalement reconnu que des erreurs logistiques avaient retardé l'acheminement des colis.",
                    "reading": "lah dee-rek-syohn ah fee-nahl-mahn ruh-koh-noo kuh day zay-ruhr loh-zhees-teek zah-vyohn ruh-tahr-day lahsh-meen-mahn day koh-lee",
                    "translation": "Management finally acknowledged that logistical errors had delayed package delivery."
                }
            ],
            "mnemonics": [
                "PRÉTENDRE = SKEPTICISM (Journalist doubts the claim)!",
                "OBJECTER = COUNTERARGUMENT (Pushing back against a claim)!"
            ],
            "culturalNotes": [
                "In French investigative journalism (Mediapart, Le Canard Enchaîné), verb choice ('prétendre' vs. 'affirmer' vs. 'reconnaître') preserves legal neutrality while conveying analytical perspective."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quel verbe introducteur suggère que le journaliste met en doute la déclaration rapportée ?",
                    "options": [
                        "prétendre",
                        "confirmer",
                        "certifier",
                        "prouver"
                    ],
                    "answerIndex": 0,
                    "explanation": "Le verbe « prétendre » introduit une nuance de doute ou de contestation sur la véracité des propos."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Choisissez le verbe exprimant une réplique vive face à une critique :",
                    "options": [
                        "rétorquer",
                        "concéder",
                        "admettre",
                        "susurrer"
                    ],
                    "answerIndex": 0,
                    "explanation": "« Rétorquer » signifie répliquer vivement et avec autorité à une objection."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Analysez la nuance apportée par le verbe dans : « Le suspect prétend qu'il dormait au moment des faits. »",
                    "options": [
                        "Le locuteur rapporte l'affirmation sans en garantir la véracité, suggérant un doute.",
                        "Le locuteur certifie sous serment la vérité des propos.",
                        "Le suspect avoue sa culpabilité sans réserve.",
                        "Le verbe exprime un souhait ou une prière."
                    ],
                    "answerIndex": 0,
                    "explanation": "« Prétendre » signale que l'allégation n'engage que le suspect et n'est pas tenue pour prouvée."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez avec le verbe signifiant 'admettre avec réticence' : « Le ministre a fini par _________ (reconnaître) ses torts. »",
                    "acceptedAnswers": [
                        "reconnaître",
                        "Reconnaître",
                        "reconnaitre",
                        "Reconnaitre"
                    ],
                    "explanation": "L'infinitif attendu est « reconnaître » (ou « reconnaitre »)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u21-l1": {
        "id": "fr-u21-l1",
        "unit": "fr-u21",
        "level": "B2",
        "objective": "Express cause across varied registers (parce que, puisque, comme en tête de phrase, car).",
        "prerequisites": [
            "fr-u20-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u20-l5"
            ]
        },
        "presentation": {
            "explanation": "French possesses multiple causal conjunctions that differ strictly in syntactic position, register, and informational status:\n\n1. PARCE QUE (Answers 'Pourquoi ?' / Neutral & Universal):\n- Introduces an unknown cause delivering new information.\n- Position: Normally after the main clause, or starting an answer.\n  * 'Il est absent parce qu'il est malade.'\n\n2. PUISQUE (Known / Common Ground Cause):\n- Introduces a cause already known, accepted, or obvious to both speakers ('since / as you know'):\n  * 'Puisque tu es là, aide-moi à ranger.'\n\n3. COMME (Sentence-Initial Cause):\n- MUST ALWAYS BE PLACED AT THE HEAD OF THE SENTENCE:\n  * 'Comme il pleuvait à verse, nous avons annulé la sortie.' (Never 'Nous avons annulé comme il pleuvait'!).\n\n4. CAR (Coordinating Conjunction / Written Register):\n- Used exclusively in formal writing to connect two independent clauses with explanatory justification.\n- Never begins an isolated spoken sentence:\n  * 'Le projet sera retardé, car les financements n'ont pas été débloqués.'",
            "examples": [
                {
                    "target": "Comme les conditions météorologiques étaient particulièrement défavorables, le comité a décidé d'annuler le départ.",
                    "reading": "kohm lay kohn-dee-syohn may-tay-oh-roh-loh-zheek ay-teh pahr-tee-koo-lyair-mahn day-fah-voh-rahbl, luh koh-mee-tay ah day-see-day dah-noo-lay luh day-pahr",
                    "translation": "As the weather conditions were particularly unfavorable, the committee decided to cancel the departure."
                },
                {
                    "target": "Puisque vous avez déjà validé tous les modules obligatoires, vous pouvez choisir vos options spécialisées.",
                    "reading": "pwees-kuh voo zah-vyay day-zhah vah-lee-day too lay moh-dool oh-blee-gah-twahr, voo poo-vay shwah-zeer voh zohp-syohn spay-syah-lee-zay",
                    "translation": "Since you have already validated all mandatory modules, you may choose your specialized electives."
                },
                {
                    "target": "Julien a refusé cette offre d'embauche alléchante parce qu'il ne souhaitait pas déménager à l'étranger.",
                    "reading": "zhoo-lyan ah ruh-foo-zay set ohfr dahm-bohsh ah-lay-shahnt pahr-skweel nuh sweh-teh pah day-may-nah-zhay ah lay-trahn-zhay",
                    "translation": "Julien turned down this tempting job offer because he did not wish to relocate abroad."
                },
                {
                    "target": "La négociation diplomatique a échoué, car aucune des deux délégations n'a accepté de faire de concessions.",
                    "reading": "lah nay-goh-syah-syohn dee-ploh-mah-teek ah ay-shway, kahr oh-koon day duh day-lay-gah-syohn nah ahk-sep-tay duh fair duh kohn-seh-syohn",
                    "translation": "The diplomatic negotiation failed, for neither delegation agreed to make concessions."
                },
                {
                    "target": "Étant donné que les délais sont extrêmement serrés, nous devrons mobiliser des renforts dès lundi.",
                    "reading": "ay-tahn doh-nay kuh lay day-leh sohn teks-trem-mahn seh-ray, noo duh-vrohn moh-bee-lee-zay day rahn-fohr day luhn-dee",
                    "translation": "Given that deadlines are extremely tight, we will need to mobilize reinforcements starting Monday."
                }
            ],
            "mnemonics": [
                "COMME COMES FIRST: Always put 'Comme' at the beginning of the sentence!",
                "PUISQUE IS COMMON GROUND: Use 'Puisque' when everyone already knows the reason!"
            ],
            "culturalNotes": [
                "In French rhetoric and debate (dissertation and parliamentary discourse), 'car' provides logical elegance, while 'comme en tête de phrase' sets the narrative premise."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle conjonction causale doit obligatoirement être placée en début de phrase ?",
                    "options": [
                        "Comme",
                        "Parce que",
                        "Car",
                        "Grâce à"
                    ],
                    "answerIndex": 0,
                    "explanation": "La conjonction de cause « Comme » se place obligatoirement en tête de phrase (« Comme il faisait beau... »)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez avec la conjonction exprimant une cause évidente / partagée : « _________ tu connais bien la ville, guide-nous ! »",
                    "options": [
                        "Puisque",
                        "Car",
                        "Parce que",
                        "Faute de"
                    ],
                    "answerIndex": 0,
                    "explanation": "« Puisque » s'impose quand la cause est connue et évidente pour les interlocuteurs."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Identifiez la phrase causale syntaxiquement correcte en français standard :",
                    "options": [
                        "Nous sommes restés chez nous comme il pleuvait.",
                        "Comme il pleuvait, nous sommes restés chez nous.",
                        "Car il pleuvait, nous sommes restés.",
                        "Puisque il pleuvait, nous sommes restés."
                    ],
                    "answerIndex": 1,
                    "explanation": "« Comme » en tête de phrase (« Comme il pleuvait... ») est parfaitement correct. 'Puisque' aurait dû s'élider en 'Puisqu'il', et 'Car' ne débute pas une phrase isolée."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Quelle conjonction de coordination formelle (3 lettres) justifie une proposition précédente à l'écrit ? (terme attendu : _________)",
                    "acceptedAnswers": [
                        "car",
                        "Car"
                    ],
                    "explanation": "La conjonction de coordination causale soutenue est « car »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u21-l2": {
        "id": "fr-u21-l2",
        "unit": "fr-u21",
        "level": "B2",
        "objective": "Distinguish positive cause (grâce à) from negative cause (à cause de) and neutral cause (en raison de).",
        "prerequisites": [
            "fr-u21-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u21-l1"
            ]
        },
        "presentation": {
            "explanation": "Prepositional phrases introducing nouns or pronouns require strict semantic categorization:\n\n1. GRÂCE À + NOM / PRONOM (Positive / Favorable Cause):\n- Expresses an outcome credited to a positive factor or helper ('thanks to'):\n  * 'Grâce à ses efforts constants, elle a obtenu son diplôme avec mention.'\n\n2. À CAUSE DE + NOM / PRONOM (Negative / Unfavorable Cause):\n- Expresses an obstacle, failure, or hindrance ('due to / because of a problem'):\n  * 'Le vol a été retardé à cause du brouillard épais.' (Never 'grâce au brouillard'!).\n\n3. EN RAISON DE + NOM (Neutral / Technical / Administrative Cause):\n- Objective and factual; standard for official notices:\n  * 'Fermeture exceptionnelle en raison de travaux de maintenance.'\n\n4. FAUTE DE + NOM / INFINITIF (Lack / Absence of Something):\n- Signifies 'for lack of / in the absence of':\n  * 'Faute de temps, nous n'avons pas pu visiter le musée.'",
            "examples": [
                {
                    "target": "Grâce au dévouement exemplaire de l'équipe soignante, tous les blessés ont été rapidement pris en charge.",
                    "reading": "grahs oh day-vwah-mahn ayg-zahm-plair duh lay-keep swan-yahnt, too lay bley-say zohn tay-tay rah-peed-mahn pree zahn shahrzh",
                    "translation": "Thanks to the exemplary dedication of the nursing staff, all the injured were quickly treated."
                },
                {
                    "target": "Le spectacle en plein air a dû être interrompu à cause d'un violent orage de grêle.",
                    "reading": "luh spek-tahkl ahn plan air ah doo ehtr an-tay-rohn-poo ah kohz duh nvyoh-lahn toh-rahzh duh grehl",
                    "translation": "The outdoor show had to be interrupted because of a violent hailstorm."
                },
                {
                    "target": "La circulation des trains sera perturbée ce matin en raison d'une panne de signalisation.",
                    "reading": "lah seer-koo-lah-syohn day tran suh-rah pair-toor-bay suh mah-tan ahn ray-zohn doon pahn duh seeg-nah-lee-zah-syohn",
                    "translation": "Train traffic will be disrupted this morning due to a signaling malfunction."
                },
                {
                    "target": "Faute de preuves tangibles et concluantes, le juge d'instruction a prononcé un non-lieu.",
                    "reading": "foht duh pruhv tahn-zheebl ay kohn-kloo-yahnt, luh zhoozh deen-strook-syohn ah proh-nohn-say uhn nohn-lyuh",
                    "translation": "For lack of tangible and conclusive evidence, the investigating magistrate ordered a dismissal."
                },
                {
                    "target": "À force de persévérance et d'entraînement intensif, l'athlète a battu le record national.",
                    "reading": "ah fohrs duh pair-say-vay-rahns ay dahn-tren-mahn an-tahn-seef, laht-let ah bah-too luh ruh-kohr nah-syoh-nahl",
                    "translation": "Through sheer perseverance and intensive training, the athlete broke the national record."
                }
            ],
            "mnemonics": [
                "GRÂCE = GRATITUDE (Positive outcome); À CAUSE DE = COMPLAINT (Negative problem); EN RAISON DE = REPORT (Neutral fact)!"
            ],
            "culturalNotes": [
                "Public transport announcements in France (RATP, SNCF) systematically announce delays with 'en raison d'un incident voyageur' or 'en raison de travaux sur la voie'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle locution prépositionnelle s'emploie pour introduire une cause bénéfique et heureuse ?",
                    "options": [
                        "grâce à",
                        "à cause de",
                        "en raison de",
                        "faute de"
                    ],
                    "answerIndex": 0,
                    "explanation": "« grâce à » souligne une cause positive qui a permis d'obtenir un résultat heureux."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez l'annonce officielle : « Le musée sera fermé demain _________ travaux de rénovation. »",
                    "options": [
                        "en raison de",
                        "grâce à des",
                        "faute de",
                        "à la faveur de"
                    ],
                    "answerIndex": 0,
                    "explanation": "« en raison de » est la formule administrative neutre et standard pour un motif objectif."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Quelle phrase illustre un emploi fautif de la préposition de cause ?",
                    "options": [
                        "Le projet a réussi grâce à notre travail d'équipe.",
                        "Il a raté son concours grâce à son manque de travail.",
                        "Le trafic est interrompu en raison d'un obstacle sur les voies.",
                        "Faute de budget, le concert a été annulé."
                    ],
                    "answerIndex": 1,
                    "explanation": "« grâce à son manque de travail » est absurde et fautif : pour une cause négative ou préjudiciable, il faut employer « à cause de »."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez la locution exprimant le manque ou l'absence : « _________ (manque) de moyens, le laboratoire a dû fermer. » (terme attendu : Faute)",
                    "acceptedAnswers": [
                        "Faute",
                        "faute"
                    ],
                    "explanation": "La locution prépositionnelle marquant l'absence ou le manque est « Faute de »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u21-l3": {
        "id": "fr-u21-l3",
        "unit": "fr-u21",
        "level": "B2",
        "objective": "Express purpose requiring subjunctive (pour que, afin que) versus identical subjects requiring infinitive (pour, afin de).",
        "prerequisites": [
            "fr-u21-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u21-l2"
            ]
        },
        "presentation": {
            "explanation": "Expressing purpose (goal, objective, intended result) obeys a strict syntactic rule governed by subject identity:\n\n1. DIFFERENT SUBJECTS -> SUBJONCTIF:\n- POUR QUE / AFIN QUE + SUBJONCTIF\n- Used when the subject of the main clause differs from the subject of the purpose clause:\n  * 'Je t'explique la règle pour que tu puisses réussir.' (Je vs Tu -> Subjonctif 'puisses').\n  * 'Afin que' is more formal and literary than 'pour que'.\n- DE PEUR QUE / DE CRAINTE QUE (+ ne) + SUBJONCTIF (Negative Purpose / Avoidance):\n  * 'Je parle doucement de peur qu'il ne se réveille.'\n\n2. IDENTICAL SUBJECTS -> INFINITIF (Mandatory Rule):\n- POUR / AFIN DE + INFINITIF\n- When the subject of both clauses is the exact same, using 'pour que' + subjunctive is a severe stylistic error:\n  * Correct: 'J'étudie pour réussir.' (Never 'J'étudie pour que je réussisse'!).\n  * 'Afin d'obtenir un visa, il s'est rendu au consulat.'",
            "examples": [
                {
                    "target": "Le gouvernement a revalorisé les bourses d'études afin que tous les étudiants puissent poursuivre leur cursus.",
                    "reading": "luh goo-vair-nuh-mahn ah ruh-vah-loh-ree-zay lay boors day-tood ah-fan kuh too lay zay-too-dyahn pwees poor-swee-vruh luhr koor-soo",
                    "translation": "The government increased student scholarships so that all students might pursue their degrees."
                },
                {
                    "target": "Nous avons envoyé le contrat par coursier exprès pour que vous le receviez avant la fermeture des bureaux.",
                    "reading": "noo zah-vohn nahn-vwah-yay luh kohn-trah pahr koor-syay eks-preh poor kuh voo luh ruh-suh-vyay ah-vahn lah fair-muh-toor day boo-roh",
                    "translation": "We sent the contract by courier specifically so that you would receive it before offices close."
                },
                {
                    "target": "Elle s'est entraînée sans relâche pendant six mois afin d'être parfaitement prête le jour du marathon.",
                    "reading": "el say tahn-treh-nay sahn ruh-lahsh pahn-dahn see mwah ah-fan dehtr pahr-fet-mahn pret luh zhoor doo mah-rah-tohn",
                    "translation": "She trained relentlessly for six months in order to be completely ready on the day of the marathon."
                },
                {
                    "target": "L'avocat a baissé la voix de peur que les journalistes présents dans le couloir n'entendent ses confidences.",
                    "reading": "lah-voh-kah ah bay-say lah vwah duh puhr kuh lay zhoor-nah-leest pray-zahn dahn luh koo-lwahr nahn-tahnd say kohn-fee-dahns",
                    "translation": "The lawyer lowered his voice lest the journalists present in the hallway overhear his remarks."
                },
                {
                    "target": "Le chef cuisinier ajuste minutieusement l'assaisonnement pour que chaque saveur s'exprime pleinement.",
                    "reading": "luh shef kwee-zee-nyay ah-zhoost mee-noos-yuhz-mahn lah-seh-zohn-mahn poor kuh shahk sah-vuhr seks-preem plen-mahn",
                    "translation": "The head chef meticulously adjusts the seasoning so that each flavor expresses itself fully."
                }
            ],
            "mnemonics": [
                "SAME SUBJECT = INFINITIVE: (Je travaille pour réussir)! DIFFERENT SUBJECT = SUBJUNCTIVE: (Je travaille pour que tu réussisses)!"
            ],
            "culturalNotes": [
                "In French legal drafting (municipal decrees, contractual conditions), 'afin que nul n'en ignore' ('so that none may plead ignorance') is a famous historic formula."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quelle phrase respecte la règle de l'identité des sujets dans l'expression du but ?",
                    "options": [
                        "Il s'est dépêché pour arriver à l'heure.",
                        "Il s'est dépêché pour qu'il arrive à l'heure.",
                        "Il s'est dépêché afin qu'il arrive à l'heure.",
                        "Il s'est dépêché pour qu'il arrivait à l'heure."
                    ],
                    "answerIndex": 0,
                    "explanation": "Quand le sujet est identique ('il' et 'il'), on doit obligatoirement employer la préposition suivie de l'infinitif : « pour arriver »."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez au subjonctif : « Je vous prête mes clés pour que vous _________ (pouvoir) entrer. »",
                    "options": [
                        "puissiez",
                        "pouvez",
                        "pourriez",
                        "pourrez"
                    ],
                    "answerIndex": 0,
                    "explanation": "Après 'pour que' avec deux sujets différents (Je / Vous), le subjonctif présent est obligatoire : « puissiez »."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Identifiez la phrase comportant une erreur de mode ou de construction du but :",
                    "options": [
                        "J'ai pris un taxi afin que je sois à l'heure.",
                        "J'ai pris un taxi afin d'être à l'heure.",
                        "J'ai appelé un taxi pour que mon ami arrive à l'heure.",
                        "Il parle fort pour que tout le monde l'entende."
                    ],
                    "answerIndex": 0,
                    "explanation": "« afin que je sois » est fautif car les deux propositions ont le même sujet ('Je'). Il faut dire : « afin d'être à l'heure »."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Conjuguez le verbe savoir au subjonctif présent : « Je t'explique la démarche pour que tu _________ (savoir) comment faire. »",
                    "acceptedAnswers": [
                        "saches",
                        "Saches"
                    ],
                    "explanation": "Le verbe savoir au subjonctif présent avec 'tu' est « saches »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u21-l4": {
        "id": "fr-u21-l4",
        "unit": "fr-u21",
        "level": "B2",
        "objective": "Express logical consequence using coordinators and subordinators (donc, alors, si bien que, de sorte que).",
        "prerequisites": [
            "fr-u21-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u21-l3"
            ]
        },
        "presentation": {
            "explanation": "Consequence represents the factual result of a preceding cause. Because consequence describes realized facts, it governs the INDICATIF:\n\n1. Coordinating Conjunctions & Adverbs:\n- DONC (Universal logical connector): 'Il n'a pas révisé, donc il a échoué.'\n- PAR CONSÉQUENT / EN CONSÉQUENCE (Formal & analytical):\n  * 'Le quorum n'a pas été atteint ; par conséquent, le vote est reporté.'\n- C'EST POURQUOI / D'OÙ (+ nom): 'Le pont est fermé, c'est pourquoi nous faisons un détour.'\n\n2. Subordinating Conjunctions Requiring the INDICATIF:\n- SI BIEN QUE (Factual consequence):\n  * 'La tempête a déraciné des arbres, si bien que la route a été coupée.'\n- DE SORTE QUE / DE MANIÈRE QUE (+ Indicatif for realized results):\n  * 'Il a parlé calmement, de sorte que tout le monde s'est apaisé.'\n\n3. Intensive Consequence Patterns:\n- SI + ADJECTIF/ADVERBE + QUE + INDICATIF:\n  * 'Elle était si fatiguée qu'elle s'est endormie tout de suite.'\n- TELLEMENT DE + NOM + QUE + INDICATIF:\n  * 'Il y avait tellement de monde que nous n'avons pas pu entrer.'",
            "examples": [
                {
                    "target": "La réunion a duré beaucoup plus longtemps que prévu, si bien que nous avons manqué notre train de retour.",
                    "reading": "lah ray-oo-nyohn ah doo-ray boh-koo ploo lohn-tahn kuh pray-voo, see byan kuh noo zah-vohn mahn-kay noh-truh tran duh ruh-toor",
                    "translation": "The meeting lasted much longer than anticipated, so that we missed our return train."
                },
                {
                    "target": "Ce candidat s'est exprimé avec une telle éloquence que l'ensemble de l'auditoire a été immédiatement conquis.",
                    "reading": "suh kahn-dee-dah say teks-pree-may ah-vek oon tel ay-loh-kahns kuh lahn-sahnbl duh loh-dee-twahr ah ay-tay ee-may-dyaht-mahn kohn-kee",
                    "translation": "This candidate spoke with such eloquence that the entire audience was immediately won over."
                },
                {
                    "target": "Les négociateurs ont travaillé sans relâche toute la nuit, de sorte qu'un accord global a été signé à l'aube.",
                    "reading": "lay nay-goh-syah-tuhr zohn trah-vah-yay sahn ruh-lahsh toot lah nwee, duh sohrt koon nah-kohr gloh-bahl ah ay-tay seen-yay ah lohb",
                    "translation": "The negotiators worked relentlessly all night, so that a comprehensive agreement was signed at dawn."
                },
                {
                    "target": "Il y avait tellement de bruit dans le hall que nous ne pouvions pas entendre les annonces sonores.",
                    "reading": "eel yah-veh tel-mahn duh brwee dahn luh ohl kuh noo nuh poo-vyohn pah zahn-tahndr lay zah-nohns soh-nohr",
                    "translation": "There was so much noise in the concourse that we could not hear the loudspeaker announcements."
                },
                {
                    "target": "Le budget alloué a été entièrement consommé ; par conséquent, tout nouvel investissement est suspendu.",
                    "reading": "luh boo-dzheh ah-loo-ay ah ay-tay ahn-tyair-mahn kohn-soh-may; pahr kohn-say-kahn, too noo-vel an-ves-tees-mahn ay soos-pahn-doo",
                    "translation": "The allocated budget has been completely spent; consequently, any new investment is suspended."
                }
            ],
            "mnemonics": [
                "CONSEQUENCE IS A REAL FACT = INDICATIVE: 'Si bien que' + Real Tense (a été / est)!",
                "INTENSITY LEADS TO RESULT: 'Si + Adj + que' / 'Tellement de + Noun + que'!"
            ],
            "culturalNotes": [
                "In French academic dissertations, logical consequence ('par conséquent, il s'ensuit que') forms the indispensable bridge between empirical premises and conclusions."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Quel mode verbal suit la conjonction de conséquence factuelle « si bien que » ?",
                    "options": [
                        "L'indicatif",
                        "Le subjonctif",
                        "Le conditionnel",
                        "L'impératif"
                    ],
                    "answerIndex": 0,
                    "explanation": "La conséquence constatée exprime un fait réel et régit obligatoirement l'indicatif (« si bien que nous sommes partis »)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Complétez la structure d'intensité : « Il y avait _________ de brouillard que la visibilité était nulle. »",
                    "options": [
                        "tellement",
                        "si",
                        "très",
                        "trop"
                    ],
                    "answerIndex": 0,
                    "explanation": "Devant un nom introduit par 'de' ('de brouillard'), on emploie « tellement de + nom + que » (ou 'tant de')."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Choisissez la phrase exprimant une conséquence logique irréprochable :",
                    "options": [
                        "Il a plu toute la nuit, pour que les routes soient inondées.",
                        "Il a plu toute la nuit, de sorte que les routes soient inondées hier.",
                        "Il a plu toute la nuit, si bien que les routes sont inondées ce matin.",
                        "Il a plu toute la nuit, car les routes sont inondées."
                    ],
                    "answerIndex": 2,
                    "explanation": "« si bien que les routes sont inondées » (indicatif présent) formule avec précision une conséquence factuelle réelle."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez la formule de liaison argumentative formelle : « Par _________ (conséquent), le projet est approuvé. »",
                    "acceptedAnswers": [
                        "conséquent",
                        "Conséquent",
                        "consequent",
                        "Consequent"
                    ],
                    "explanation": "L'adverbe de liaison formel est « Par conséquent »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u21-l5": {
        "id": "fr-u21-l5",
        "unit": "fr-u21",
        "level": "B2",
        "objective": "Structure cause, purpose, and consequence cohesively in analytical B2 argumentative essays.",
        "prerequisites": [
            "fr-u21-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "fr-u21-l4"
            ]
        },
        "presentation": {
            "explanation": "In CEFR B2 production (argumentative essays, document syntheses, formal correspondence), mastering the distinction between Cause (origin), Purpose (aim), and Consequence (result) is essential for logical cohesion:\n\n1. The Tripartite Argumentative Engine:\n- CAUSE (Why upstream?): 'Étant donné que, En raison de, Puisque, Sous prétexte que'.\n- BUT (What aim downstream?): 'Afin que (+ subj.), Dans l'optique de (+ inf.), Pour que (+ subj.)'.\n- CONSÉQUENCE (What factual outcome?): 'Par conséquent, Il en résulte que, D'où (+ nom), À tel point que'.\n\n2. Syntactic Precision Rules:\n- Distinguish 'De sorte que + indicatif' (result achieved) from 'De sorte que + subjonctif' (purpose sought).\n- Never confuse 'À cause de' (negative) with 'Grâce à' (positive).\n- Enforce the subject identity rule ('afin de' vs 'afin que').",
            "examples": [
                {
                    "target": "Étant donné la hausse spectaculaire des coûts énergétiques, la municipalité a isolé les bâtiments publics afin de réduire l'empreinte carbone.",
                    "reading": "ay-tahn doh-nay lah ohs spek-tah-koo-lair day koo tay-nair-zhay-teek, lah moo-nee-see-pah-lee-tay ah ee-zoh-lay lay bah-tee-mahn poo-bleek ah-fan duh ray-dweer lahm-prant kahr-bohn",
                    "translation": "Given the dramatic rise in energy costs, the municipality insulated public buildings in order to reduce its carbon footprint."
                },
                {
                    "target": "L'entreprise a automatisé sa chaîne de tri afin que les commandes soient expédiées le jour même, si bien que les délais de livraison ont été divisés par deux.",
                    "reading": "lahn-truh-preez ah oh-toh-mah-tee-zay sah shen duh tree ah-fan kuh lay koh-mahnd swaht teks-pay-dyay luh zhoor mehm, see byan kuh lay day-leh duh lee-vray-zohn zohn tay-tay dee-vee-zay pahr duh",
                    "translation": "The company automated its sorting line so that orders would be dispatched the same day, with the result that delivery times were cut in half."
                },
                {
                    "target": "Faute d'investissements suffisants dans les infrastructures ferroviaires, les retards se sont multipliés, à tel point que les usagers ont déposé un recours collectif.",
                    "reading": "foht dan-ves-tees-mahn soo-fee-zahn dahn lay zan-frah-strook-toor feh-roh-vyair, lay ruh-tahr suh sohn mool-tee-plee-ay, ah tel pwan kuh lay zoo-zah-zhay zohn day-poh-zay uhn ruh-koor koh-lek-teef",
                    "translation": "For lack of sufficient investment in railway infrastructure, delays multiplied to such an extent that commuters filed a class action."
                },
                {
                    "target": "Puisque les ressources naturelles s'amenuisent à l'échelle planétaire, nous devons repenser nos modes de consommation dans l'espoir de préserver l'écosystème.",
                    "reading": "pwees-kuh lay ruh-soors nah-too-rel sah-muh-nweez ah lay-shel plah-nay-tair, noo duh-vohn ruh-pahn-say noh mohd duh kohn-soh-mah-syohn dahn les-pwahr duh pray-zair-vay lay-koh-sees-tem",
                    "translation": "Since natural resources are dwindling on a global scale, we must rethink our consumption patterns in hopes of preserving the ecosystem."
                },
                {
                    "target": "Le chercheur a étayé son hypothèse à l'aide de données statistiques probantes, de sorte que la communauté scientifique a validé l'ensemble de ses conclusions.",
                    "reading": "luh shair-shuhr ah ay-tah-yay sohn nee-poh-tez ah lehd duh doh-nay stah-tees-teek proh-bahnt, duh sohrt kuh lah koh-moo-noh-tay syahn-tee-feek ah vah-lee-day lahn-sahnbl duh say kohn-kloo-zyohn",
                    "translation": "The researcher substantiated his hypothesis using compelling statistical data, so that the scientific community validated all of his conclusions."
                }
            ],
            "mnemonics": [
                "TRIAD OF REASONING: Cause explains the past, Purpose targets the future, Consequence proves the result!"
            ],
            "culturalNotes": [
                "In French higher education (Sciences Po entrance essays, DALF C1), structuring argumentation through the cause-purpose-consequence triad is the hallmark of intellectual rigor."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Identifiez le connecteur introduisant l'objectif / le but dans : « La loi a été durcie _________ dissuader les fraudeurs. »",
                    "options": [
                        "afin de",
                        "en raison de",
                        "si bien que",
                        "par conséquent"
                    ],
                    "answerIndex": 0,
                    "explanation": "« afin de + infinitif » introduit le but avec un sujet identique ('la loi')."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Dans un essai B2, quel enchaînement logique relie harmonieusement Cause -> But -> Conséquence ?",
                    "options": [
                        "Comme... pour que... si bien que...",
                        "Bien que... quoique... malgré...",
                        "Pendant que... dès que... après que...",
                        "Si... alors... sinon..."
                    ],
                    "answerIndex": 0,
                    "explanation": "« Comme » (cause), « pour que » (but), « si bien que » (conséquence) articulent les trois étapes du raisonnement logique."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Analysez l'extrait argumentatif : « Puisque le climat change (1), nous devons agir pour protéger la planète (2), de sorte que les générations futures puissent vivre dignement (3). »",
                    "options": [
                        "Hypothèse, Conséquence passée, Opposition.",
                        "(1) Cause partagée, (2) Action principale + But, (3) Finalité / But visé.",
                        "Concession, Cause négative, Condition irréelle.",
                        "Comparaison, Analepse, Voix passive."
                    ],
                    "answerIndex": 1,
                    "explanation": "« Puisque » introduit une cause partagée, « pour protéger » exprime le but immédiat, et « de sorte que + subjonctif » développe la finalité globale."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Complétez avec le mot marquant le point de départ causal : « _________ (étant) donné la complexité du problème... »",
                    "acceptedAnswers": [
                        "Étant",
                        "étant",
                        "Etant",
                        "etant"
                    ],
                    "explanation": "La formule d'introduction causale est « Étant donné » (ou « Etant donné »)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u22-l1": {
        "id": "fr-u22-l1",
        "unit": "fr-u22",
        "level": "B2",
        "objective": "Distinguish logical opposition (tandis que, alors que) from concession (bien que, quoique).",
        "prerequisites": [
            "fr-u21-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Opposition vs Concession : Principes Fondamentaux. At the CEFR B2 level, learners acquire precise command over opposition vs concession : principes fondamentaux, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for Opposition vs Concession : Principes Fondamentaux"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Opposition vs Concession : Principes Fondamentaux in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Distinguish logical opposition (tandis que, alors que) from concession » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (106a).",
                        "Cette forme présente une anomalie phonétique en français standard (106b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (106c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u22-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (106x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (106y).",
                        "Cette forme présente une anomalie phonétique en français standard (106z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u22-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (106m).",
                        "La préposition employée ici n'est pas commandée par le verbe (106n).",
                        "Cette forme présente une anomalie phonétique en français standard (106p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u22-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u22-l2": {
        "id": "fr-u22-l2",
        "unit": "fr-u22",
        "level": "B2",
        "objective": "Deploy concessive conjunctions requiring the subjunctive mood (bien que, quoique, encore que).",
        "prerequisites": [
            "fr-u22-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of La Concession au Subjonctif : Bien que et Quoique. At the CEFR B2 level, learners acquire precise command over la concession au subjonctif : bien que et quoique, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for La Concession au Subjonctif : Bien que et Quoique"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of La Concession au Subjonctif : Bien que et Quoique in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Deploy concessive conjunctions requiring the subjunctive mood (bien qu » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (107a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (107b).",
                        "Cette construction passive alourdit inutilement l'énoncé (107c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u22-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (107x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (107y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (107z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u22-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (107m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (107n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (107p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u22-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u22-l3": {
        "id": "fr-u22-l3",
        "unit": "fr-u22",
        "level": "B2",
        "objective": "Express prepositional concession with nouns using 'malgré' and 'en dépit de'.",
        "prerequisites": [
            "fr-u22-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of La Concession Nominale : Malgré et En dépit de. At the CEFR B2 level, learners acquire precise command over la concession nominale : malgré et en dépit de, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for La Concession Nominale : Malgré et En dépit de"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of La Concession Nominale : Malgré et En dépit de in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Express prepositional concession with nouns using 'malgré' and 'en dép » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (108a).",
                        "La préposition employée ici n'est pas commandée par le verbe (108b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (108c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u22-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (108x).",
                        "Cette forme présente une anomalie phonétique en français standard (108y).",
                        "La préposition employée ici n'est pas commandée par le verbe (108z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u22-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (108m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (108n).",
                        "La préposition employée ici n'est pas commandée par le verbe (108p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u22-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u22-l4": {
        "id": "fr-u22-l4",
        "unit": "fr-u22",
        "level": "B2",
        "objective": "Form concessive transition adverbs in formal debates (cependant, néanmoins, toutefois, quand même).",
        "prerequisites": [
            "fr-u22-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Les Adverbes de Concession et de Nuance. At the CEFR B2 level, learners acquire precise command over les adverbes de concession et de nuance, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for Les Adverbes de Concession et de Nuance"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Les Adverbes de Concession et de Nuance in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Form concessive transition adverbs in formal debates (cependant, néanm » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (109a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (109b).",
                        "Cette construction passive alourdit inutilement l'énoncé (109c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u22-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette variante relève d'un registre familier inadapté au contexte (109x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (109y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (109z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u22-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette variante relève d'un registre familier inadapté au contexte (109m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (109n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (109p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u22-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u22-l5": {
        "id": "fr-u22-l5",
        "unit": "fr-u22",
        "level": "B2",
        "objective": "Construct sophisticated counter-arguments and rhetorical concessions in structured debate.",
        "prerequisites": [
            "fr-u22-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of La Réfutation et la Concession Rhétorique dans le Débat. At the CEFR B2 level, learners acquire precise command over la réfutation et la concession rhétorique dans le débat, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for La Réfutation et la Concession Rhétorique dans le Débat"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of La Réfutation et la Concession Rhétorique dans le Débat in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Construct sophisticated counter-arguments and rhetorical concessions i » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (110a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (110b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (110c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u22-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (110x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (110y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (110z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u22-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (110m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (110n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (110p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u22-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u23-l1": {
        "id": "fr-u23-l1",
        "unit": "fr-u23",
        "level": "B2",
        "objective": "Format standard French formal business correspondence and official email conventions.",
        "prerequisites": [
            "fr-u22-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Les Normes de la Correspondance Professionnelle Française. At the CEFR B2 level, learners acquire precise command over les normes de la correspondance professionnelle française, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for Les Normes de la Correspondance Professionnelle Française"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Les Normes de la Correspondance Professionnelle Française in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Format standard French formal business correspondence and official ema » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (111a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (111b).",
                        "Cette construction passive alourdit inutilement l'énoncé (111c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u23-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'antériorité temporelle est mal établie par rapport au repère (111x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (111y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (111z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u23-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'antériorité temporelle est mal établie par rapport au repère (111m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (111n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (111p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u23-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u23-l2": {
        "id": "fr-u23-l2",
        "unit": "fr-u23",
        "level": "B2",
        "objective": "Draft a French CV and a compelling, personalized cover letter (lettre de motivation).",
        "prerequisites": [
            "fr-u23-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Rédaction du CV et de la Lettre de Motivation. At the CEFR B2 level, learners acquire precise command over rédaction du cv et de la lettre de motivation, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for Rédaction du CV et de la Lettre de Motivation"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Rédaction du CV et de la Lettre de Motivation in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Draft a French CV and a compelling, personalized cover letter (lettre  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (112a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (112b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (112c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u23-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "La préposition employée ici n'est pas commandée par le verbe (112x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (112y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (112z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u23-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (112m).",
                        "Cette forme présente une anomalie phonétique en français standard (112n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (112p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u23-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u23-l3": {
        "id": "fr-u23-l3",
        "unit": "fr-u23",
        "level": "B2",
        "objective": "Conduct commercial negotiations, discuss contractual terms, and establish pricing agreements.",
        "prerequisites": [
            "fr-u23-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Vocabulaire de la Négociation Commerciale et des Tarifs. At the CEFR B2 level, learners acquire precise command over vocabulaire de la négociation commerciale et des tarifs, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for Vocabulaire de la Négociation Commerciale et des Tarifs"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Vocabulaire de la Négociation Commerciale et des Tarifs in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Conduct commercial negotiations, discuss contractual terms, and establ » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (113a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (113b).",
                        "Cette construction passive alourdit inutilement l'énoncé (113c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u23-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette proposition modifie subtilement le sens originel du verbe (113x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (113y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (113z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u23-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette proposition modifie subtilement le sens originel du verbe (113m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (113n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (113p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u23-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u23-l4": {
        "id": "fr-u23-l4",
        "unit": "fr-u23",
        "level": "B2",
        "objective": "Handle customer complaints and resolve commercial disputes diplomatically in formal writing.",
        "prerequisites": [
            "fr-u23-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Traitement des Réclamations et Litiges Commerciaux. At the CEFR B2 level, learners acquire precise command over traitement des réclamations et litiges commerciaux, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for Traitement des Réclamations et Litiges Commerciaux"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Traitement des Réclamations et Litiges Commerciaux in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Handle customer complaints and resolve commercial disputes diplomatica » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (114a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (114b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (114c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u23-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette forme présente une anomalie phonétique en français standard (114x).",
                        "La préposition employée ici n'est pas commandée par le verbe (114y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (114z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u23-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (114m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (114n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (114p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u23-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u23-l5": {
        "id": "fr-u23-l5",
        "unit": "fr-u23",
        "level": "B2",
        "objective": "Simulate a complete commercial contract negotiation and formal partnership closing.",
        "prerequisites": [
            "fr-u23-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Simulation de Partenariat et Clôture de Contrat. At the CEFR B2 level, learners acquire precise command over simulation de partenariat et clôture de contrat, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for Simulation de Partenariat et Clôture de Contrat"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Simulation de Partenariat et Clôture de Contrat in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Simulate a complete commercial contract negotiation and formal partner » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (115a).",
                        "Cette construction passive alourdit inutilement l'énoncé (115b).",
                        "Cette construction passive alourdit inutilement l'énoncé (115c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u23-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette construction passive alourdit inutilement l'énoncé (115x).",
                        "Cette construction passive alourdit inutilement l'énoncé (115y).",
                        "Cette construction passive alourdit inutilement l'énoncé (115z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u23-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette construction passive alourdit inutilement l'énoncé (115m).",
                        "Cette construction passive alourdit inutilement l'énoncé (115n).",
                        "Cette construction passive alourdit inutilement l'énoncé (115p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u23-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u24-l1": {
        "id": "fr-u24-l1",
        "unit": "fr-u24",
        "level": "B2",
        "objective": "Conduct a standard medical consultation, describe clinical symptoms, and express pain intensity.",
        "prerequisites": [
            "fr-u23-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of La Consultation Médicale et la Description des Symptômes. At the CEFR B2 level, learners acquire precise command over la consultation médicale et la description des symptômes, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for La Consultation Médicale et la Description des Symptômes"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of La Consultation Médicale et la Description des Symptômes in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Conduct a standard medical consultation, describe clinical symptoms, a » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (116a).",
                        "Cette forme présente une anomalie phonétique en français standard (116b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (116c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u24-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (116x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (116y).",
                        "Cette forme présente une anomalie phonétique en français standard (116z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u24-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (116m).",
                        "La préposition employée ici n'est pas commandée par le verbe (116n).",
                        "Cette forme présente une anomalie phonétique en français standard (116p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u24-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u24-l2": {
        "id": "fr-u24-l2",
        "unit": "fr-u24",
        "level": "B2",
        "objective": "Understand pharmacological prescriptions, posology instructions, and pharmacy interactions.",
        "prerequisites": [
            "fr-u24-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Prescriptions Médicales, Posologie et Pharmacie. At the CEFR B2 level, learners acquire precise command over prescriptions médicales, posologie et pharmacie, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for Prescriptions Médicales, Posologie et Pharmacie"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Prescriptions Médicales, Posologie et Pharmacie in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Understand pharmacological prescriptions, posology instructions, and p » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (117a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (117b).",
                        "Cette construction passive alourdit inutilement l'énoncé (117c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u24-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (117x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (117y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (117z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u24-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (117m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (117n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (117p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u24-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u24-l3": {
        "id": "fr-u24-l3",
        "unit": "fr-u24",
        "level": "B2",
        "objective": "Navigate the French social healthcare system (Sécurité sociale, carte Vitale, mutuelle, médecin traitant).",
        "prerequisites": [
            "fr-u24-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Le Système de Santé Français : Sécurité Sociale et Mutuelle. At the CEFR B2 level, learners acquire precise command over le système de santé français : sécurité sociale et mutuelle, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for Le Système de Santé Français : Sécurité Sociale et Mutuelle"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Le Système de Santé Français : Sécurité Sociale et Mutuelle in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Navigate the French social healthcare system (Sécurité sociale, carte  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (118a).",
                        "La préposition employée ici n'est pas commandée par le verbe (118b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (118c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u24-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (118x).",
                        "Cette forme présente une anomalie phonétique en français standard (118y).",
                        "La préposition employée ici n'est pas commandée par le verbe (118z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u24-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (118m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (118n).",
                        "La préposition employée ici n'est pas commandée par le verbe (118p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u24-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u24-l4": {
        "id": "fr-u24-l4",
        "unit": "fr-u24",
        "level": "B2",
        "objective": "Describe hospital admissions, diagnostic testing, surgical interventions, and recovery pathways.",
        "prerequisites": [
            "fr-u24-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Urgences, Hospitalisation et Examens Médicaux. At the CEFR B2 level, learners acquire precise command over urgences, hospitalisation et examens médicaux, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for Urgences, Hospitalisation et Examens Médicaux"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Urgences, Hospitalisation et Examens Médicaux in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Describe hospital admissions, diagnostic testing, surgical interventio » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (119a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (119b).",
                        "Cette construction passive alourdit inutilement l'énoncé (119c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u24-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette variante relève d'un registre familier inadapté au contexte (119x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (119y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (119z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u24-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette variante relève d'un registre familier inadapté au contexte (119m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (119n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (119p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u24-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u24-l5": {
        "id": "fr-u24-l5",
        "unit": "fr-u24",
        "level": "B2",
        "objective": "Debate contemporary public health issues, preventive medicine policies, and bioethical concerns.",
        "prerequisites": [
            "fr-u24-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Débats de Santé Publique et Prévention Sanitaire. At the CEFR B2 level, learners acquire precise command over débats de santé publique et prévention sanitaire, integrating advanced syntax with professional and domain-specific lexicon.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Structural memory anchor for Débats de Santé Publique et Prévention Sanitaire"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Débats de Santé Publique et Prévention Sanitaire in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Debate contemporary public health issues, preventive medicine policies » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (120a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (120b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (120c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u24-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (120x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (120y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (120z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau B2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u24-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (120m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (120n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (120p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u24-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u25-l1": {
        "id": "fr-u25-l1",
        "unit": "fr-u25",
        "level": "C1",
        "objective": "Analyze the architecture of the French Civil Code (Code civil) and sources of law (jurisprudence, coutume, doctrine).",
        "prerequisites": [
            "fr-u24-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Les Fondements du Droit Civil et les Sources du Droit. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Les Fondements du Droit Civil et les Sources du Droit"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Les Fondements du Droit Civil et les Sources du Droit in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Analyze the architecture of the French Civil Code (Code civil) and sou » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (121a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (121b).",
                        "Cette construction passive alourdit inutilement l'énoncé (121c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u25-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'antériorité temporelle est mal établie par rapport au repère (121x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (121y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (121z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u25-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'antériorité temporelle est mal établie par rapport au repère (121m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (121n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (121p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u25-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u25-l2": {
        "id": "fr-u25-l2",
        "unit": "fr-u25",
        "level": "C1",
        "objective": "Interpret and draft contractual clauses (clause résolutoire, force majeure, clause pénale, non-concurrence).",
        "prerequisites": [
            "fr-u25-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of La Typologie et l'Interprétation des Clauses Contractuelles. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for La Typologie et l'Interprétation des Clauses Contractuelles"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of La Typologie et l'Interprétation des Clauses Contractuelles in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Interpret and draft contractual clauses (clause résolutoire, force maj » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (122a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (122b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (122c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u25-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "La préposition employée ici n'est pas commandée par le verbe (122x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (122y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (122z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u25-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (122m).",
                        "Cette forme présente une anomalie phonétique en français standard (122n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (122p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u25-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u25-l3": {
        "id": "fr-u25-l3",
        "unit": "fr-u25",
        "level": "C1",
        "objective": "Navigate French civil and criminal judicial proceedings (assignation, plaidoiries, arrêt, pourvoi en cassation).",
        "prerequisites": [
            "fr-u25-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of L'Organisation Juridictionnelle et la Procédure Judiciaire. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for L'Organisation Juridictionnelle et la Procédure Judiciaire"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of L'Organisation Juridictionnelle et la Procédure Judiciaire in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Navigate French civil and criminal judicial proceedings (assignation,  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (123a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (123b).",
                        "Cette construction passive alourdit inutilement l'énoncé (123c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u25-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette proposition modifie subtilement le sens originel du verbe (123x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (123y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (123z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u25-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette proposition modifie subtilement le sens originel du verbe (123m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (123n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (123p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u25-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u25-l4": {
        "id": "fr-u25-l4",
        "unit": "fr-u25",
        "level": "C1",
        "objective": "Understand tort liability and civil responsibility (responsabilité délictuelle, préjudice, lien de causalité).",
        "prerequisites": [
            "fr-u25-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of La Responsabilité Civile et la Réparation du Préjudice. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for La Responsabilité Civile et la Réparation du Préjudice"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of La Responsabilité Civile et la Réparation du Préjudice in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Understand tort liability and civil responsibility (responsabilité dél » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (124a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (124b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (124c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u25-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette forme présente une anomalie phonétique en français standard (124x).",
                        "La préposition employée ici n'est pas commandée par le verbe (124y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (124z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u25-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (124m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (124n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (124p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u25-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u25-l5": {
        "id": "fr-u25-l5",
        "unit": "fr-u25",
        "level": "C1",
        "objective": "Draft a formal legal opinion (consultation juridique) resolving a complex dispute scenario.",
        "prerequisites": [
            "fr-u25-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Rédaction d'une Consultation Juridique Complexe. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Rédaction d'une Consultation Juridique Complexe"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Rédaction d'une Consultation Juridique Complexe in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Draft a formal legal opinion (consultation juridique) resolving a comp » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (125a).",
                        "Cette construction passive alourdit inutilement l'énoncé (125b).",
                        "Cette construction passive alourdit inutilement l'énoncé (125c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u25-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette construction passive alourdit inutilement l'énoncé (125x).",
                        "Cette construction passive alourdit inutilement l'énoncé (125y).",
                        "Cette construction passive alourdit inutilement l'énoncé (125z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u25-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette construction passive alourdit inutilement l'énoncé (125m).",
                        "Cette construction passive alourdit inutilement l'énoncé (125n).",
                        "Cette construction passive alourdit inutilement l'énoncé (125p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u25-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u26-l1": {
        "id": "fr-u26-l1",
        "unit": "fr-u26",
        "level": "C1",
        "objective": "Discuss macroeconomic metrics and structural fiscal policies (PIB, déficit public, inflation, taux directeur).",
        "prerequisites": [
            "fr-u25-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Indicateurs Macroéconomiques et Politique Monétaire. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Indicateurs Macroéconomiques et Politique Monétaire"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Indicateurs Macroéconomiques et Politique Monétaire in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Discuss macroeconomic metrics and structural fiscal policies (PIB, déf » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (126a).",
                        "Cette forme présente une anomalie phonétique en français standard (126b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (126c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u26-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (126x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (126y).",
                        "Cette forme présente une anomalie phonétique en français standard (126z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u26-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (126m).",
                        "La préposition employée ici n'est pas commandée par le verbe (126n).",
                        "Cette forme présente une anomalie phonétique en français standard (126p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u26-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u26-l2": {
        "id": "fr-u26-l2",
        "unit": "fr-u26",
        "level": "C1",
        "objective": "Analyze corporate balance sheets, income statements, and financial ratios (bilan, compte de résultat, trésorerie).",
        "prerequisites": [
            "fr-u26-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Analyse Financière d'Entreprise et États Comptables. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Analyse Financière d'Entreprise et États Comptables"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Analyse Financière d'Entreprise et États Comptables in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Analyze corporate balance sheets, income statements, and financial rat » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (127a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (127b).",
                        "Cette construction passive alourdit inutilement l'énoncé (127c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u26-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (127x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (127y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (127z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u26-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (127m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (127n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (127p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u26-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u26-l3": {
        "id": "fr-u26-l3",
        "unit": "fr-u26",
        "level": "C1",
        "objective": "Debate capital market dynamics, equity valuations, and bond yields (marché boursier, actions, obligations, dividendes).",
        "prerequisites": [
            "fr-u26-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Marchés Financiers, Bourse et Instruments de Dette. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Marchés Financiers, Bourse et Instruments de Dette"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Marchés Financiers, Bourse et Instruments de Dette in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Debate capital market dynamics, equity valuations, and bond yields (ma » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (128a).",
                        "La préposition employée ici n'est pas commandée par le verbe (128b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (128c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u26-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (128x).",
                        "Cette forme présente une anomalie phonétique en français standard (128y).",
                        "La préposition employée ici n'est pas commandée par le verbe (128z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u26-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (128m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (128n).",
                        "La préposition employée ici n'est pas commandée par le verbe (128p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u26-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u26-l4": {
        "id": "fr-u26-l4",
        "unit": "fr-u26",
        "level": "C1",
        "objective": "Evaluate banking regulations, venture capital, and fintech innovations (capital-risque, solvabilité, levée de fonds).",
        "prerequisites": [
            "fr-u26-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Système Bancaire, FinTech et Capital-Investissement. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Système Bancaire, FinTech et Capital-Investissement"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Système Bancaire, FinTech et Capital-Investissement in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Evaluate banking regulations, venture capital, and fintech innovations » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (129a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (129b).",
                        "Cette construction passive alourdit inutilement l'énoncé (129c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u26-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette variante relève d'un registre familier inadapté au contexte (129x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (129y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (129z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u26-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette variante relève d'un registre familier inadapté au contexte (129m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (129n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (129p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u26-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u26-l5": {
        "id": "fr-u26-l5",
        "unit": "fr-u26",
        "level": "C1",
        "objective": "Conduct a comprehensive economic analysis and macroeconomic trend synthesis report.",
        "prerequisites": [
            "fr-u26-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Synthèse d'Analyse Économique et Perspectives Financières. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Synthèse d'Analyse Économique et Perspectives Financières"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Synthèse d'Analyse Économique et Perspectives Financières in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Conduct a comprehensive economic analysis and macroeconomic trend synt » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (130a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (130b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (130c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u26-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (130x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (130y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (130z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u26-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (130m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (130n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (130p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u26-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u27-l1": {
        "id": "fr-u27-l1",
        "unit": "fr-u27",
        "level": "C1",
        "objective": "Analyze French narrative techniques, focalization, and free indirect style (focalisation interne/externe, style indirect libre).",
        "prerequisites": [
            "fr-u26-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Techniques Narratives et Stylistique Romanesque. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Techniques Narratives et Stylistique Romanesque"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Techniques Narratives et Stylistique Romanesque in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Analyze French narrative techniques, focalization, and free indirect s » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (131a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (131b).",
                        "Cette construction passive alourdit inutilement l'énoncé (131c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u27-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'antériorité temporelle est mal établie par rapport au repère (131x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (131y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (131z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u27-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'antériorité temporelle est mal établie par rapport au repère (131m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (131n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (131p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u27-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u27-l2": {
        "id": "fr-u27-l2",
        "unit": "fr-u27",
        "level": "C1",
        "objective": "Identify classical and modern poetic forms, metrics, and rhetorical tropes (alexandrins, césure, anaphore, chiasme).",
        "prerequisites": [
            "fr-u27-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Poétique Française, Versification et Rhétorique. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Poétique Française, Versification et Rhétorique"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Poétique Française, Versification et Rhétorique in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Identify classical and modern poetic forms, metrics, and rhetorical tr » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (132a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (132b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (132c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u27-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "La préposition employée ici n'est pas commandée par le verbe (132x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (132y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (132z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u27-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (132m).",
                        "Cette forme présente une anomalie phonétique en français standard (132n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (132p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u27-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u27-l3": {
        "id": "fr-u27-l3",
        "unit": "fr-u27",
        "level": "C1",
        "objective": "Examine French cinematic aesthetics, the French New Wave (Nouvelle Vague), and auteur theory (cinéma d'auteur, montage).",
        "prerequisites": [
            "fr-u27-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Esthétique du Cinéma Français et Nouvelle Vague. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Esthétique du Cinéma Français et Nouvelle Vague"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Esthétique du Cinéma Français et Nouvelle Vague in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Examine French cinematic aesthetics, the French New Wave (Nouvelle Vag » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (133a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (133b).",
                        "Cette construction passive alourdit inutilement l'énoncé (133c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u27-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette proposition modifie subtilement le sens originel du verbe (133x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (133y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (133z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u27-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette proposition modifie subtilement le sens originel du verbe (133m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (133n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (133p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u27-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u27-l4": {
        "id": "fr-u27-l4",
        "unit": "fr-u27",
        "level": "C1",
        "objective": "Dissect dramatic theater conventions, stagecraft, and dialogue mechanics (didascalies, tirade, monologue, catharsis).",
        "prerequisites": [
            "fr-u27-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Dramaturgie Théâtrale et Analyse Scénique. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Dramaturgie Théâtrale et Analyse Scénique"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Dramaturgie Théâtrale et Analyse Scénique in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Dissect dramatic theater conventions, stagecraft, and dialogue mechani » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (134a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (134b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (134c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u27-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette forme présente une anomalie phonétique en français standard (134x).",
                        "La préposition employée ici n'est pas commandée par le verbe (134y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (134z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u27-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (134m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (134n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (134p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u27-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u27-l5": {
        "id": "fr-u27-l5",
        "unit": "fr-u27",
        "level": "C1",
        "objective": "Write an advanced, polished aesthetic critique of a literary masterpiece or cinematic work.",
        "prerequisites": [
            "fr-u27-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Rédaction d'une Critique Esthétique Littéraire et Filmique. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Rédaction d'une Critique Esthétique Littéraire et Filmique"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Rédaction d'une Critique Esthétique Littéraire et Filmique in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Write an advanced, polished aesthetic critique of a literary masterpie » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (135a).",
                        "Cette construction passive alourdit inutilement l'énoncé (135b).",
                        "Cette construction passive alourdit inutilement l'énoncé (135c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u27-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette construction passive alourdit inutilement l'énoncé (135x).",
                        "Cette construction passive alourdit inutilement l'énoncé (135y).",
                        "Cette construction passive alourdit inutilement l'énoncé (135z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u27-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette construction passive alourdit inutilement l'énoncé (135m).",
                        "Cette construction passive alourdit inutilement l'énoncé (135n).",
                        "Cette construction passive alourdit inutilement l'énoncé (135p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u27-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u28-l1": {
        "id": "fr-u28-l1",
        "unit": "fr-u28",
        "level": "C1",
        "objective": "Debate climate change mechanisms, anthropogenic greenhouse gas emissions, and IPCC reports (effet de serre, GIEC).",
        "prerequisites": [
            "fr-u27-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Climatologie, Bilan Carbone et Rapports du GIEC. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Climatologie, Bilan Carbone et Rapports du GIEC"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Climatologie, Bilan Carbone et Rapports du GIEC in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Debate climate change mechanisms, anthropogenic greenhouse gas emissio » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (136a).",
                        "Cette forme présente une anomalie phonétique en français standard (136b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (136c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u28-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (136x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (136y).",
                        "Cette forme présente une anomalie phonétique en français standard (136z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u28-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (136m).",
                        "La préposition employée ici n'est pas commandée par le verbe (136n).",
                        "Cette forme présente une anomalie phonétique en français standard (136p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u28-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u28-l2": {
        "id": "fr-u28-l2",
        "unit": "fr-u28",
        "level": "C1",
        "objective": "Analyze biodiversity conservation strategies, ecosystem restoration, and protected reserves (écosystèmes, espèces menacées).",
        "prerequisites": [
            "fr-u28-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Préservation de la Biodiversité et Restauration Écologique. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Préservation de la Biodiversité et Restauration Écologique"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Préservation de la Biodiversité et Restauration Écologique in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Analyze biodiversity conservation strategies, ecosystem restoration, a » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (137a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (137b).",
                        "Cette construction passive alourdit inutilement l'énoncé (137c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u28-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (137x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (137y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (137z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u28-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (137m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (137n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (137p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u28-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u28-l3": {
        "id": "fr-u28-l3",
        "unit": "fr-u28",
        "level": "C1",
        "objective": "Evaluate renewable energies versus nuclear power in the ecological transition (mix énergétique, décarbonation, éolien, nucléaire).",
        "prerequisites": [
            "fr-u28-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Transition Énergétique : Renouvelables et Nucléaire. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Transition Énergétique : Renouvelables et Nucléaire"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Transition Énergétique : Renouvelables et Nucléaire in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Evaluate renewable energies versus nuclear power in the ecological tra » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (138a).",
                        "La préposition employée ici n'est pas commandée par le verbe (138b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (138c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u28-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (138x).",
                        "Cette forme présente une anomalie phonétique en français standard (138y).",
                        "La préposition employée ici n'est pas commandée par le verbe (138z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u28-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (138m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (138n).",
                        "La préposition employée ici n'est pas commandée par le verbe (138p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u28-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u28-l4": {
        "id": "fr-u28-l4",
        "unit": "fr-u28",
        "level": "C1",
        "objective": "Examine circular economy models, waste management, and resource sobriety (économie circulaire, recyclage, sobriété).",
        "prerequisites": [
            "fr-u28-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Économie Circulaire et Gestion Durable des Ressources. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Économie Circulaire et Gestion Durable des Ressources"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Économie Circulaire et Gestion Durable des Ressources in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Examine circular economy models, waste management, and resource sobrie » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (139a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (139b).",
                        "Cette construction passive alourdit inutilement l'énoncé (139c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u28-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette variante relève d'un registre familier inadapté au contexte (139x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (139y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (139z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u28-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette variante relève d'un registre familier inadapté au contexte (139m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (139n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (139p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u28-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u28-l5": {
        "id": "fr-u28-l5",
        "unit": "fr-u28",
        "level": "C1",
        "objective": "Draft a policy briefing on international environmental pacts and sustainable development goals (Accords de Paris, ODD).",
        "prerequisites": [
            "fr-u28-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Politiques Environnementales Internationales et Accords de Paris. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Politiques Environnementales Internationales et Accords de Paris"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Politiques Environnementales Internationales et Accords de Paris in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Draft a policy briefing on international environmental pacts and susta » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (140a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (140b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (140c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u28-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (140x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (140y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (140z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u28-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (140m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (140n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (140p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u28-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u29-l1": {
        "id": "fr-u29-l1",
        "unit": "fr-u29",
        "level": "C1",
        "objective": "Analyze the constitutional architecture and executive balance of the French Fifth Republic (Constitution de 1958, régime semi-présidentiel).",
        "prerequisites": [
            "fr-u28-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of La Constitution de la Ve République et le Pouvoir Exécutif. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for La Constitution de la Ve République et le Pouvoir Exécutif"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of La Constitution de la Ve République et le Pouvoir Exécutif in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Analyze the constitutional architecture and executive balance of the F » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (141a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (141b).",
                        "Cette construction passive alourdit inutilement l'énoncé (141c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u29-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'antériorité temporelle est mal établie par rapport au repère (141x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (141y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (141z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u29-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'antériorité temporelle est mal établie par rapport au repère (141m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (141n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (141p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u29-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u29-l2": {
        "id": "fr-u29-l2",
        "unit": "fr-u29",
        "level": "C1",
        "objective": "Navigate parliamentary mechanics, bicameral legislation, and special constitutional tools (article 49.3, motion de censure, navette).",
        "prerequisites": [
            "fr-u29-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Le Travail Parlementaire, l'Article 49.3 et le Contrôle Démocratique. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Le Travail Parlementaire, l'Article 49.3 et le Contrôle Démocratique"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Le Travail Parlementaire, l'Article 49.3 et le Contrôle Démocratique in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Navigate parliamentary mechanics, bicameral legislation, and special c » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (142a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (142b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (142c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u29-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "La préposition employée ici n'est pas commandée par le verbe (142x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (142y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (142z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u29-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (142m).",
                        "Cette forme présente une anomalie phonétique en français standard (142n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (142p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u29-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u29-l3": {
        "id": "fr-u29-l3",
        "unit": "fr-u29",
        "level": "C1",
        "objective": "Examine electoral systems, voting behavior, and democratic representation in France (scrutin uninominal majoritaire, proportionnelle).",
        "prerequisites": [
            "fr-u29-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Systèmes Électoraux, Suffrage et Dynamiques Politiques. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Systèmes Électoraux, Suffrage et Dynamiques Politiques"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Systèmes Électoraux, Suffrage et Dynamiques Politiques in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Examine electoral systems, voting behavior, and democratic representat » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (143a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (143b).",
                        "Cette construction passive alourdit inutilement l'énoncé (143c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u29-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette proposition modifie subtilement le sens originel du verbe (143x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (143y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (143z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u29-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette proposition modifie subtilement le sens originel du verbe (143m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (143n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (143p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u29-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u29-l4": {
        "id": "fr-u29-l4",
        "unit": "fr-u29",
        "level": "C1",
        "objective": "Debate the legal and philosophical foundations of French secularism (laïcité républicaine, loi de 1905, neutralité de l'État).",
        "prerequisites": [
            "fr-u29-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of La Laïcité Républicaine et le Principe de Neutralité. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for La Laïcité Républicaine et le Principe de Neutralité"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of La Laïcité Républicaine et le Principe de Neutralité in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Debate the legal and philosophical foundations of French secularism (l » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (144a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (144b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (144c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u29-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette forme présente une anomalie phonétique en français standard (144x).",
                        "La préposition employée ici n'est pas commandée par le verbe (144y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (144z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u29-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (144m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (144n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (144p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u29-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u29-l5": {
        "id": "fr-u29-l5",
        "unit": "fr-u29",
        "level": "C1",
        "objective": "Construct an advanced political debate essay addressing contemporary constitutional reforms.",
        "prerequisites": [
            "fr-u29-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Essai de Science Politique et Réformes Institutionnelles. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Essai de Science Politique et Réformes Institutionnelles"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Essai de Science Politique et Réformes Institutionnelles in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Construct an advanced political debate essay addressing contemporary c » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (145a).",
                        "Cette construction passive alourdit inutilement l'énoncé (145b).",
                        "Cette construction passive alourdit inutilement l'énoncé (145c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u29-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette construction passive alourdit inutilement l'énoncé (145x).",
                        "Cette construction passive alourdit inutilement l'énoncé (145y).",
                        "Cette construction passive alourdit inutilement l'énoncé (145z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u29-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette construction passive alourdit inutilement l'énoncé (145m).",
                        "Cette construction passive alourdit inutilement l'énoncé (145n).",
                        "Cette construction passive alourdit inutilement l'énoncé (145p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u29-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u30-l1": {
        "id": "fr-u30-l1",
        "unit": "fr-u30",
        "level": "C1",
        "objective": "Analyze Enlightenment philosophy, social contract theory, and tolerance (Voltaire, Rousseau, Montesquieu).",
        "prerequisites": [
            "fr-u29-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of La Philosophie des Lumières et le Contrat Social. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for La Philosophie des Lumières et le Contrat Social"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of La Philosophie des Lumières et le Contrat Social in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Analyze Enlightenment philosophy, social contract theory, and toleranc » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (146a).",
                        "Cette forme présente une anomalie phonétique en français standard (146b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (146c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u30-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (146x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (146y).",
                        "Cette forme présente une anomalie phonétique en français standard (146z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u30-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (146m).",
                        "La préposition employée ici n'est pas commandée par le verbe (146n).",
                        "Cette forme présente une anomalie phonétique en français standard (146p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u30-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u30-l2": {
        "id": "fr-u30-l2",
        "unit": "fr-u30",
        "level": "C1",
        "objective": "Examine Cartesian rationalism, radical doubt, and dualism (Descartes, le Cogito, la méthode cartésienne).",
        "prerequisites": [
            "fr-u30-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Le Rationalisme Cartésien et la Quête de la Vérité. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Le Rationalisme Cartésien et la Quête de la Vérité"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Le Rationalisme Cartésien et la Quête de la Vérité in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Examine Cartesian rationalism, radical doubt, and dualism (Descartes,  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (147a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (147b).",
                        "Cette construction passive alourdit inutilement l'énoncé (147c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u30-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (147x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (147y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (147z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u30-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (147m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (147n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (147p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u30-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u30-l3": {
        "id": "fr-u30-l3",
        "unit": "fr-u30",
        "level": "C1",
        "objective": "Dissect 20th-century French Existentialism and human freedom (Sartre, Camus, Simone de Beauvoir).",
        "prerequisites": [
            "fr-u30-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of L'Existentialisme et la Liberté Humaine. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for L'Existentialisme et la Liberté Humaine"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of L'Existentialisme et la Liberté Humaine in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Dissect 20th-century French Existentialism and human freedom (Sartre,  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (148a).",
                        "La préposition employée ici n'est pas commandée par le verbe (148b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (148c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u30-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (148x).",
                        "Cette forme présente une anomalie phonétique en français standard (148y).",
                        "La préposition employée ici n'est pas commandée par le verbe (148z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u30-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (148m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (148n).",
                        "La préposition employée ici n'est pas commandée par le verbe (148p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u30-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u30-l4": {
        "id": "fr-u30-l4",
        "unit": "fr-u30",
        "level": "C1",
        "objective": "Examine post-structuralist thought, power dynamics, and deconstruction (Foucault, Derrida, Deleuze).",
        "prerequisites": [
            "fr-u30-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of La Pensée Critique Contemporaine et la Déconstruction. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for La Pensée Critique Contemporaine et la Déconstruction"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of La Pensée Critique Contemporaine et la Déconstruction in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Examine post-structuralist thought, power dynamics, and deconstruction » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (149a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (149b).",
                        "Cette construction passive alourdit inutilement l'énoncé (149c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u30-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette variante relève d'un registre familier inadapté au contexte (149x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (149y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (149z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u30-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette variante relève d'un registre familier inadapté au contexte (149m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (149n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (149p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u30-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u30-l5": {
        "id": "fr-u30-l5",
        "unit": "fr-u30",
        "level": "C1",
        "objective": "Write a complete formal French philosophical dissertation structured in three dialectical parts (thèse, antithèse, synthèse).",
        "prerequisites": [
            "fr-u30-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Rigorous academic exposition of Méthodologie de la Dissertation Philosophique Académique. At the CEFR C1 level, learners develop mastery in abstract conceptualization, domain-specific terminology, and sophisticated syntactic structures required for academic, legal, and intellectual fluency in French.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Conceptual anchor for Méthodologie de la Dissertation Philosophique Académique"
            ],
            "culturalNotes": [
                "Epistemological and institutional significance of Méthodologie de la Dissertation Philosophique Académique in France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Write a complete formal French philosophical dissertation structured i » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (150a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (150b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (150c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u30-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (150x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (150y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (150z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u30-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (150m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (150n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (150p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u30-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u31-l1": {
        "id": "fr-u31-l1",
        "unit": "fr-u31",
        "level": "C2",
        "objective": "Formulate scientific research hypotheses, experimental methodologies, and empirical frameworks in high academic French.",
        "prerequisites": [
            "fr-u30-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Épistémologie des Sciences et Hypothèses de Recherche. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over épistémologie des sciences et hypothèses de recherche.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Épistémologie des Sciences et Hypothèses de Recherche"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Épistémologie des Sciences et Hypothèses de Recherche in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Formulate scientific research hypotheses, experimental methodologies,  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (151a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (151b).",
                        "Cette construction passive alourdit inutilement l'énoncé (151c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u31-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'antériorité temporelle est mal établie par rapport au repère (151x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (151y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (151z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u31-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'antériorité temporelle est mal établie par rapport au repère (151m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (151n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (151p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u31-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u31-l2": {
        "id": "fr-u31-l2",
        "unit": "fr-u31",
        "level": "C2",
        "objective": "Analyze epistemological ruptures, paradigm shifts, and scientific revolutions (Bachelard, Canguilhem).",
        "prerequisites": [
            "fr-u31-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Obstacles Épistémologiques et Ruptures de Paradigme. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over obstacles épistémologiques et ruptures de paradigme.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Obstacles Épistémologiques et Ruptures de Paradigme"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Obstacles Épistémologiques et Ruptures de Paradigme in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Analyze epistemological ruptures, paradigm shifts, and scientific revo » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (152a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (152b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (152c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u31-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "La préposition employée ici n'est pas commandée par le verbe (152x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (152y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (152z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u31-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (152m).",
                        "Cette forme présente une anomalie phonétique en français standard (152n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (152p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u31-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u31-l3": {
        "id": "fr-u31-l3",
        "unit": "fr-u31",
        "level": "C2",
        "objective": "Master the conventions of academic peer-reviewed journal articles and doctoral defense discourse.",
        "prerequisites": [
            "fr-u31-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Rédaction d'Articles Scientifiques et Soutenance Académique. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over rédaction d'articles scientifiques et soutenance académique.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Rédaction d'Articles Scientifiques et Soutenance Académique"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Rédaction d'Articles Scientifiques et Soutenance Académique in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Master the conventions of academic peer-reviewed journal articles and  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (153a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (153b).",
                        "Cette construction passive alourdit inutilement l'énoncé (153c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u31-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette proposition modifie subtilement le sens originel du verbe (153x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (153y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (153z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u31-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette proposition modifie subtilement le sens originel du verbe (153m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (153n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (153p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u31-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u31-l4": {
        "id": "fr-u31-l4",
        "unit": "fr-u31",
        "level": "C2",
        "objective": "Debate frontiers in biotechnology, genomic editing, and bioethical jurisprudence (CRISPR, bioéthique).",
        "prerequisites": [
            "fr-u31-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Bioéthique, Génétique et Frontières Technologiques. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over bioéthique, génétique et frontières technologiques.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Bioéthique, Génétique et Frontières Technologiques"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Bioéthique, Génétique et Frontières Technologiques in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Debate frontiers in biotechnology, genomic editing, and bioethical jur » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (154a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (154b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (154c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u31-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette forme présente une anomalie phonétique en français standard (154x).",
                        "La préposition employée ici n'est pas commandée par le verbe (154y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (154z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u31-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (154m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (154n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (154p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u31-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u31-l5": {
        "id": "fr-u31-l5",
        "unit": "fr-u31",
        "level": "C2",
        "objective": "Synthesize interdisciplinary research into an authoritative academic position paper.",
        "prerequisites": [
            "fr-u31-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Synthèse Interdisciplinaire et Communication Scientifique. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over synthèse interdisciplinaire et communication scientifique.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Synthèse Interdisciplinaire et Communication Scientifique"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Synthèse Interdisciplinaire et Communication Scientifique in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Synthesize interdisciplinary research into an authoritative academic p » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (155a).",
                        "Cette construction passive alourdit inutilement l'énoncé (155b).",
                        "Cette construction passive alourdit inutilement l'énoncé (155c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u31-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette construction passive alourdit inutilement l'énoncé (155x).",
                        "Cette construction passive alourdit inutilement l'énoncé (155y).",
                        "Cette construction passive alourdit inutilement l'énoncé (155z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u31-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette construction passive alourdit inutilement l'énoncé (155m).",
                        "Cette construction passive alourdit inutilement l'énoncé (155n).",
                        "Cette construction passive alourdit inutilement l'énoncé (155p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u31-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u32-l1": {
        "id": "fr-u32-l1",
        "unit": "fr-u32",
        "level": "C2",
        "objective": "Master formal diplomatic registers, credentials, and state protocol courtesies (lettres de créance, corps diplomatique).",
        "prerequisites": [
            "fr-u31-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Protocoles Diplomatiques et Usages d'État. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over protocoles diplomatiques et usages d'état.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Protocoles Diplomatiques et Usages d'État"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Protocoles Diplomatiques et Usages d'État in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Master formal diplomatic registers, credentials, and state protocol co » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (156a).",
                        "Cette forme présente une anomalie phonétique en français standard (156b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (156c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u32-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (156x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (156y).",
                        "Cette forme présente une anomalie phonétique en français standard (156z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u32-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (156m).",
                        "La préposition employée ici n'est pas commandée par le verbe (156n).",
                        "Cette forme présente une anomalie phonétique en français standard (156p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u32-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u32-l2": {
        "id": "fr-u32-l2",
        "unit": "fr-u32",
        "level": "C2",
        "objective": "Draft multilateral treaties, bilateral accords, and official joint communiqués (préambule, clauses d'adhésion, réserves).",
        "prerequisites": [
            "fr-u32-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Rédaction de Traités Internationaux et Communiqués Conjoints. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over rédaction de traités internationaux et communiqués conjoints.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Rédaction de Traités Internationaux et Communiqués Conjoints"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Rédaction de Traités Internationaux et Communiqués Conjoints in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Draft multilateral treaties, bilateral accords, and official joint com » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (157a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (157b).",
                        "Cette construction passive alourdit inutilement l'énoncé (157c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u32-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (157x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (157y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (157z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u32-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (157m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (157n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (157p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u32-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u32-l3": {
        "id": "fr-u32-l3",
        "unit": "fr-u32",
        "level": "C2",
        "objective": "Navigate multilateral diplomacy in international forums (ONU, Union Européenne, OIF, Conseil de Sécurité).",
        "prerequisites": [
            "fr-u32-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Négociations Multilatérales aux Nations Unies et au Sein de l'UE. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over négociations multilatérales aux nations unies et au sein de l'ue.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Négociations Multilatérales aux Nations Unies et au Sein de l'UE"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Négociations Multilatérales aux Nations Unies et au Sein de l'UE in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Navigate multilateral diplomacy in international forums (ONU, Union Eu » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (158a).",
                        "La préposition employée ici n'est pas commandée par le verbe (158b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (158c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u32-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (158x).",
                        "Cette forme présente une anomalie phonétique en français standard (158y).",
                        "La préposition employée ici n'est pas commandée par le verbe (158z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u32-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (158m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (158n).",
                        "La préposition employée ici n'est pas commandée par le verbe (158p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u32-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u32-l4": {
        "id": "fr-u32-l4",
        "unit": "fr-u32",
        "level": "C2",
        "objective": "Conduct high-stakes diplomatic crisis mediation and backchannel diplomacy (bons offices, médiation diplomatique).",
        "prerequisites": [
            "fr-u32-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Gestion de Crise Diplomatique et Médiation Internationale. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over gestion de crise diplomatique et médiation internationale.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Gestion de Crise Diplomatique et Médiation Internationale"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Gestion de Crise Diplomatique et Médiation Internationale in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Conduct high-stakes diplomatic crisis mediation and backchannel diplom » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (159a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (159b).",
                        "Cette construction passive alourdit inutilement l'énoncé (159c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u32-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette variante relève d'un registre familier inadapté au contexte (159x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (159y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (159z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u32-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette variante relève d'un registre familier inadapté au contexte (159m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (159n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (159p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u32-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u32-l5": {
        "id": "fr-u32-l5",
        "unit": "fr-u32",
        "level": "C2",
        "objective": "Deliver an official plenipotentiary address before a global diplomatic assembly.",
        "prerequisites": [
            "fr-u32-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Discours Plénipotentiaire et Synthèse Géopolitique. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over discours plénipotentiaire et synthèse géopolitique.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Discours Plénipotentiaire et Synthèse Géopolitique"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Discours Plénipotentiaire et Synthèse Géopolitique in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Deliver an official plenipotentiary address before a global diplomatic » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (160a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (160b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (160c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u32-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (160x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (160y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (160z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u32-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (160m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (160n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (160p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u32-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u33-l1": {
        "id": "fr-u33-l1",
        "unit": "fr-u33",
        "level": "C2",
        "objective": "Master the literary Passé Simple across regular and irregular third-group verb families (fut, fit, prit, vit, naquit).",
        "prerequisites": [
            "fr-u32-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Le Passé Simple : Morphologie et Usage Littéraire. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over le passé simple : morphologie et usage littéraire.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Le Passé Simple : Morphologie et Usage Littéraire"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Le Passé Simple : Morphologie et Usage Littéraire in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Master the literary Passé Simple across regular and irregular third-gr » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (161a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (161b).",
                        "Cette construction passive alourdit inutilement l'énoncé (161c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u33-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'antériorité temporelle est mal établie par rapport au repère (161x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (161y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (161z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u33-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'antériorité temporelle est mal établie par rapport au repère (161m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (161n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (161p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u33-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u33-l2": {
        "id": "fr-u33-l2",
        "unit": "fr-u33",
        "level": "C2",
        "objective": "Recognize and compose with the literary Subjonctif Imparfait (fût, voulût, parlât) and Subjonctif Plus-que-parfait.",
        "prerequisites": [
            "fr-u33-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Le Subjonctif Imparfait et la Concordance Littéraire. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over le subjonctif imparfait et la concordance littéraire.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Le Subjonctif Imparfait et la Concordance Littéraire"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Le Subjonctif Imparfait et la Concordance Littéraire in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Recognize and compose with the literary Subjonctif Imparfait (fût, vou » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (162a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (162b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (162c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u33-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "La préposition employée ici n'est pas commandée par le verbe (162x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (162y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (162z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u33-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (162m).",
                        "Cette forme présente une anomalie phonétique en français standard (162n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (162p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u33-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u33-l3": {
        "id": "fr-u33-l3",
        "unit": "fr-u33",
        "level": "C2",
        "objective": "Analyze and construct elevated French prose cadence (rythme ternaire, période oratoire, assonance, parataxe).",
        "prerequisites": [
            "fr-u33-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Cadence Oratoire, Période et Rythme Ternaire. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over cadence oratoire, période et rythme ternaire.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Cadence Oratoire, Période et Rythme Ternaire"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Cadence Oratoire, Période et Rythme Ternaire in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Analyze and construct elevated French prose cadence (rythme ternaire,  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (163a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (163b).",
                        "Cette construction passive alourdit inutilement l'énoncé (163c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u33-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette proposition modifie subtilement le sens originel du verbe (163x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (163y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (163z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u33-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette proposition modifie subtilement le sens originel du verbe (163m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (163n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (163p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u33-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u33-l4": {
        "id": "fr-u33-l4",
        "unit": "fr-u33",
        "level": "C2",
        "objective": "Identify and master sophisticated rhetorical figures (l'hypallage, la prétérition, la métonymie, l'oxymore).",
        "prerequisites": [
            "fr-u33-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Figures de Style Avancées et Stylistique d'Auteur. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over figures de style avancées et stylistique d'auteur.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Figures de Style Avancées et Stylistique d'Auteur"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Figures de Style Avancées et Stylistique d'Auteur in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Identify and master sophisticated rhetorical figures (l'hypallage, la  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (164a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (164b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (164c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u33-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette forme présente une anomalie phonétique en français standard (164x).",
                        "La préposition employée ici n'est pas commandée par le verbe (164y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (164z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u33-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (164m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (164n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (164p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u33-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u33-l5": {
        "id": "fr-u33-l5",
        "unit": "fr-u33",
        "level": "C2",
        "objective": "Compose a complete literary pastiche emulating 19th- or 20th-century classical French prose.",
        "prerequisites": [
            "fr-u33-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Composition Littéraire Supérieure et Pastiche Stylistique. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over composition littéraire supérieure et pastiche stylistique.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Composition Littéraire Supérieure et Pastiche Stylistique"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Composition Littéraire Supérieure et Pastiche Stylistique in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Compose a complete literary pastiche emulating 19th- or 20th-century c » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (165a).",
                        "Cette construction passive alourdit inutilement l'énoncé (165b).",
                        "Cette construction passive alourdit inutilement l'énoncé (165c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u33-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette construction passive alourdit inutilement l'énoncé (165x).",
                        "Cette construction passive alourdit inutilement l'énoncé (165y).",
                        "Cette construction passive alourdit inutilement l'énoncé (165z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u33-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette construction passive alourdit inutilement l'énoncé (165m).",
                        "Cette construction passive alourdit inutilement l'énoncé (165n).",
                        "Cette construction passive alourdit inutilement l'énoncé (165p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u33-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u34-l1": {
        "id": "fr-u34-l1",
        "unit": "fr-u34",
        "level": "C2",
        "objective": "Deliver high-impact public oratory, persuasive speeches, and rhetoric in elevated French (éloquence républicaine).",
        "prerequisites": [
            "fr-u33-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of L'Art de l'Éloquence et le Discours Magistral. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over l'art de l'éloquence et le discours magistral.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for L'Art de l'Éloquence et le Discours Magistral"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of L'Art de l'Éloquence et le Discours Magistral in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Deliver high-impact public oratory, persuasive speeches, and rhetoric  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (166a).",
                        "Cette forme présente une anomalie phonétique en français standard (166b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (166c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u34-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (166x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (166y).",
                        "Cette forme présente une anomalie phonétique en français standard (166z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u34-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (166m).",
                        "La préposition employée ici n'est pas commandée par le verbe (166n).",
                        "Cette forme présente une anomalie phonétique en français standard (166p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u34-l1 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u34-l2": {
        "id": "fr-u34-l2",
        "unit": "fr-u34",
        "level": "C2",
        "objective": "Navigate rapid sociolinguistic code-switching from street argot/verlan to haute littérature.",
        "prerequisites": [
            "fr-u34-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Registres de Langue, Variations Sociolinguistiques et Verlan. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over registres de langue, variations sociolinguistiques et verlan.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Registres de Langue, Variations Sociolinguistiques et Verlan"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Registres de Langue, Variations Sociolinguistiques et Verlan in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Navigate rapid sociolinguistic code-switching from street argot/verlan » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (167a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (167b).",
                        "Cette construction passive alourdit inutilement l'énoncé (167c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u34-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (167x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (167y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (167z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u34-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (167m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (167n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (167p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u34-l2 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u34-l3": {
        "id": "fr-u34-l3",
        "unit": "fr-u34",
        "level": "C2",
        "objective": "Appreciate regional and pan-Francophone linguistic idioms (Québec, Sénégal, Suisse, Belgique, Maghreb).",
        "prerequisites": [
            "fr-u34-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Diversité et Richesse de la Francophonie Mondiale. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over diversité et richesse de la francophonie mondiale.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Diversité et Richesse de la Francophonie Mondiale"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Diversité et Richesse de la Francophonie Mondiale in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Appreciate regional and pan-Francophone linguistic idioms (Québec, Sén » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (168a).",
                        "La préposition employée ici n'est pas commandée par le verbe (168b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (168c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u34-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (168x).",
                        "Cette forme présente une anomalie phonétique en français standard (168y).",
                        "La préposition employée ici n'est pas commandée par le verbe (168z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u34-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (168m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (168n).",
                        "La préposition employée ici n'est pas commandée par le verbe (168p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u34-l3 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u34-l4": {
        "id": "fr-u34-l4",
        "unit": "fr-u34",
        "level": "C2",
        "objective": "Engage in real-time dialectical debate, rebuttal, and spontaneous rhetorical fencing (joutes oratoires).",
        "prerequisites": [
            "fr-u34-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of La Joute Oratoire et la Réfutation Dialectique Spontanée. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over la joute oratoire et la réfutation dialectique spontanée.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for La Joute Oratoire et la Réfutation Dialectique Spontanée"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of La Joute Oratoire et la Réfutation Dialectique Spontanée in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Engage in real-time dialectical debate, rebuttal, and spontaneous rhet » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (169a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (169b).",
                        "Cette construction passive alourdit inutilement l'énoncé (169c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u34-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette variante relève d'un registre familier inadapté au contexte (169x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (169y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (169z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u34-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette variante relève d'un registre familier inadapté au contexte (169m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (169n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (169p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u34-l4 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "fr-u34-l5": {
        "id": "fr-u34-l5",
        "unit": "fr-u34",
        "level": "C2",
        "objective": "Deliver the comprehensive C2 Capstone address synthesizing full native-level French mastery.",
        "prerequisites": [
            "fr-u34-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Mastery analysis of Le Grand Oral C2 : Synthèse Magistrale et Accomplissement. At the C2 summit level, the learner demonstrates near-native linguistic agility, flawless stylistic sophistication, and profound rhetorical command over le grand oral c2 : synthèse magistrale et accomplissement.",
            "examples": [
                {
                    "target": "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                    "reading": "noo zay-too-dyohn zah-tahn-teev-mahn set reh-gluh lan-gwees-teek fohn-dah-mahn-tahl",
                    "translation": "We carefully study this fundamental linguistic rule in French."
                },
                {
                    "target": "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                    "reading": "lah-plee-kah-syohn prah-teek duh set noh-syohn ahn-ree-shee lek-spreh-syohn ay-kreet ay oh-rahl",
                    "translation": "The practical application of this concept enriches written and oral expression."
                }
            ],
            "mnemonics": [
                "Rhetorical mastery anchor for Le Grand Oral C2 : Synthèse Magistrale et Accomplissement"
            ],
            "culturalNotes": [
                "High cultural and institutional significance of Le Grand Oral C2 : Synthèse Magistrale et Accomplissement in the Francophone world."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Deliver the comprehensive C2 Capstone address synthesizing full native » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (170a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (170b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (170c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u34-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (170x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (170y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (170z)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cet énoncé constitue la structure modèle conforme aux normes du niveau C2."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "Contrôle des acquis (fr-u34-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (170m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (170n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (170p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u34-l5 (terme attendu : « Nous ») :",
                    "acceptedAnswers": [
                        "Nous",
                        "nous",
                        "Nous"
                    ],
                    "explanation": "Le mot exact est « Nous »."
                }
            ],
            "passThreshold": 0.8
        }
    }
};
  var CURRICULUM = { id: 'french', name: 'French', units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['french'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
