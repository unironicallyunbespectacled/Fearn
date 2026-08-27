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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of La Politesse et l'Atténuation Courtoise. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for La Politesse et l'Atténuation Courtoise"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for La Politesse et l'Atténuation Courtoise in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Use 'je voudrais', 'j'aimerais', and 'pourriez-vous' for polite custom » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (62a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (62b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (62c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u13-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "La préposition employée ici n'est pas commandée par le verbe (62x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (62y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (62z)."
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
                    "prompt": "Contrôle des acquis (fr-u13-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (62m).",
                        "Cette forme présente une anomalie phonétique en français standard (62n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (62p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u13-l2 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Conseils et Suggestions Nuancées. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Conseils et Suggestions Nuancées"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Conseils et Suggestions Nuancées in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Provide nuanced advice and moral recommendations using 'devoir' (tu de » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (63a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (63b).",
                        "Cette construction passive alourdit inutilement l'énoncé (63c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u13-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette proposition modifie subtilement le sens originel du verbe (63x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (63y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (63z)."
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
                    "prompt": "Contrôle des acquis (fr-u13-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette proposition modifie subtilement le sens originel du verbe (63m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (63n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (63p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u13-l3 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Le Conditionnel Journalistique et l'Information Non Confirmée. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Le Conditionnel Journalistique et l'Information Non Confirmée"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Le Conditionnel Journalistique et l'Information Non Confirmée in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Report unconfirmed information and journalistic speculation using the  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (64a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (64b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (64c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u13-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette forme présente une anomalie phonétique en français standard (64x).",
                        "La préposition employée ici n'est pas commandée par le verbe (64y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (64z)."
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
                    "prompt": "Contrôle des acquis (fr-u13-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (64m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (64n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (64p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u13-l4 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Les Hypothèses du Présent (Si + Imparfait). In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Les Hypothèses du Présent (Si + Imparfait)"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Les Hypothèses du Présent (Si + Imparfait) in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Form basic unreal present conditional sentences with 'si + imparfait - » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (65a).",
                        "Cette construction passive alourdit inutilement l'énoncé (65b).",
                        "Cette construction passive alourdit inutilement l'énoncé (65c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u13-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette construction passive alourdit inutilement l'énoncé (65x).",
                        "Cette construction passive alourdit inutilement l'énoncé (65y).",
                        "Cette construction passive alourdit inutilement l'énoncé (65z)."
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
                    "prompt": "Contrôle des acquis (fr-u13-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette construction passive alourdit inutilement l'énoncé (65m).",
                        "Cette construction passive alourdit inutilement l'énoncé (65n).",
                        "Cette construction passive alourdit inutilement l'énoncé (65p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u13-l5 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Formation Régulière du Subjonctif Présent. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Formation Régulière du Subjonctif Présent"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Formation Régulière du Subjonctif Présent in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Form the subjonctif présent for regular verbs using the 3rd-person plu » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (66a).",
                        "Cette forme présente une anomalie phonétique en français standard (66b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (66c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u14-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (66x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (66y).",
                        "Cette forme présente une anomalie phonétique en français standard (66z)."
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
                    "prompt": "Contrôle des acquis (fr-u14-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (66m).",
                        "La préposition employée ici n'est pas commandée par le verbe (66n).",
                        "Cette forme présente une anomalie phonétique en français standard (66p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u14-l1 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Les Verbes Irréguliers Majeurs au Subjonctif. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Les Verbes Irréguliers Majeurs au Subjonctif"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Les Verbes Irréguliers Majeurs au Subjonctif in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Conjugate essential irregular verbs in the subjunctive (être: soit, av » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (67a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (67b).",
                        "Cette construction passive alourdit inutilement l'énoncé (67c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u14-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (67x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (67y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (67z)."
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
                    "prompt": "Contrôle des acquis (fr-u14-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (67m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (67n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (67p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u14-l2 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of La Nécessité et l'Obligation Impersonnelle. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for La Nécessité et l'Obligation Impersonnelle"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for La Nécessité et l'Obligation Impersonnelle in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Express obligation and necessity with impersonal expressions requiring » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (68a).",
                        "La préposition employée ici n'est pas commandée par le verbe (68b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (68c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u14-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (68x).",
                        "Cette forme présente une anomalie phonétique en français standard (68y).",
                        "La préposition employée ici n'est pas commandée par le verbe (68z)."
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
                    "prompt": "Contrôle des acquis (fr-u14-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (68m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (68n).",
                        "La préposition employée ici n'est pas commandée par le verbe (68p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u14-l3 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of La Volonté, le Souhait et l'Ordre. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for La Volonté, le Souhait et l'Ordre"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for La Volonté, le Souhait et l'Ordre in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Use the subjunctive after verbs of desire, will, permission, and prohi » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (69a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (69b).",
                        "Cette construction passive alourdit inutilement l'énoncé (69c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u14-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette variante relève d'un registre familier inadapté au contexte (69x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (69y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (69z)."
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
                    "prompt": "Contrôle des acquis (fr-u14-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette variante relève d'un registre familier inadapté au contexte (69m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (69n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (69p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u14-l4 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Doute, Sentiment et Certitude (Indicatif vs Subjonctif). In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Doute, Sentiment et Certitude (Indicatif vs Subjonctif)"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Doute, Sentiment et Certitude (Indicatif vs Subjonctif) in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Distinguish indicative certainty from subjunctive doubt, emotion, and  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (70a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (70b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (70c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u14-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (70x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (70y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (70z)."
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
                    "prompt": "Contrôle des acquis (fr-u14-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (70m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (70n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (70p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u14-l5 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Le Pronom Relatif Sujet QUI. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Le Pronom Relatif Sujet QUI"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Le Pronom Relatif Sujet QUI in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Use the relative pronoun QUI as the grammatical subject of the subordi » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (71a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (71b).",
                        "Cette construction passive alourdit inutilement l'énoncé (71c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u15-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'antériorité temporelle est mal établie par rapport au repère (71x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (71y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (71z)."
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
                    "prompt": "Contrôle des acquis (fr-u15-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'antériorité temporelle est mal établie par rapport au repère (71m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (71n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (71p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u15-l1 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Le Pronom Relatif Objet Direct QUE. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Le Pronom Relatif Objet Direct QUE"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Le Pronom Relatif Objet Direct QUE in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Use the relative pronoun QUE (qu') as the direct object and execute pa » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (72a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (72b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (72c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u15-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "La préposition employée ici n'est pas commandée par le verbe (72x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (72y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (72z)."
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
                    "prompt": "Contrôle des acquis (fr-u15-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (72m).",
                        "Cette forme présente une anomalie phonétique en français standard (72n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (72p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u15-l2 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Le Pronom Relatif OÙ (Lieu et Temps). In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Le Pronom Relatif OÙ (Lieu et Temps)"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Le Pronom Relatif OÙ (Lieu et Temps) in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Use the relative pronoun OÙ to express spatial locations and precise p » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (73a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (73b).",
                        "Cette construction passive alourdit inutilement l'énoncé (73c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u15-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette proposition modifie subtilement le sens originel du verbe (73x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (73y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (73z)."
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
                    "prompt": "Contrôle des acquis (fr-u15-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette proposition modifie subtilement le sens originel du verbe (73m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (73n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (73p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u15-l3 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Le Pronom Relatif DONT (Complément de DE). In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Le Pronom Relatif DONT (Complément de DE)"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Le Pronom Relatif DONT (Complément de DE) in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Use the relative pronoun DONT to replace prepositional complements int » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (74a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (74b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (74c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u15-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette forme présente une anomalie phonétique en français standard (74x).",
                        "La préposition employée ici n'est pas commandée par le verbe (74y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (74z)."
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
                    "prompt": "Contrôle des acquis (fr-u15-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (74m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (74n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (74p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u15-l4 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Les Pronoms Relatifs Indéfinis (Ce qui, Ce que, Ce dont). In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Les Pronoms Relatifs Indéfinis (Ce qui, Ce que, Ce dont)"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Les Pronoms Relatifs Indéfinis (Ce qui, Ce que, Ce dont) in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Deploy indefinite relative pronouns CE QUI, CE QUE, and CE DONT to ref » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (75a).",
                        "Cette construction passive alourdit inutilement l'énoncé (75b).",
                        "Cette construction passive alourdit inutilement l'énoncé (75c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u15-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette construction passive alourdit inutilement l'énoncé (75x).",
                        "Cette construction passive alourdit inutilement l'énoncé (75y).",
                        "Cette construction passive alourdit inutilement l'énoncé (75z)."
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
                    "prompt": "Contrôle des acquis (fr-u15-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette construction passive alourdit inutilement l'énoncé (75m).",
                        "Cette construction passive alourdit inutilement l'énoncé (75n).",
                        "Cette construction passive alourdit inutilement l'énoncé (75p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u15-l5 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of La Comparaison des Adjectifs et des Adverbes. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for La Comparaison des Adjectifs et des Adverbes"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for La Comparaison des Adjectifs et des Adverbes in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Form comparative structures with adjectives and adverbs (plus...que, m » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (76a).",
                        "Cette forme présente une anomalie phonétique en français standard (76b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (76c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u16-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (76x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (76y).",
                        "Cette forme présente une anomalie phonétique en français standard (76z)."
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
                    "prompt": "Contrôle des acquis (fr-u16-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (76m).",
                        "La préposition employée ici n'est pas commandée par le verbe (76n).",
                        "Cette forme présente une anomalie phonétique en français standard (76p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u16-l1 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of La Comparaison des Noms et des Verbes. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for La Comparaison des Noms et des Verbes"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for La Comparaison des Noms et des Verbes in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Form comparative structures with nouns (plus de...que, autant de...que » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (77a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (77b).",
                        "Cette construction passive alourdit inutilement l'énoncé (77c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u16-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (77x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (77y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (77z)."
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
                    "prompt": "Contrôle des acquis (fr-u16-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (77m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (77n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (77p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u16-l2 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Les Comparatifs Irréguliers : Meilleur vs Mieux. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Les Comparatifs Irréguliers : Meilleur vs Mieux"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Les Comparatifs Irréguliers : Meilleur vs Mieux in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Master irregular comparatives: meilleur (better adjective) vs. mieux ( » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (78a).",
                        "La préposition employée ici n'est pas commandée par le verbe (78b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (78c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u16-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (78x).",
                        "Cette forme présente une anomalie phonétique en français standard (78y).",
                        "La préposition employée ici n'est pas commandée par le verbe (78z)."
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
                    "prompt": "Contrôle des acquis (fr-u16-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (78m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (78n).",
                        "La préposition employée ici n'est pas commandée par le verbe (78p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u16-l3 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Le Superlatif Absolu et Relatif. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Le Superlatif Absolu et Relatif"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Le Superlatif Absolu et Relatif in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Construct superlative statements (le plus, la plus, les plus, le meill » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (79a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (79b).",
                        "Cette construction passive alourdit inutilement l'énoncé (79c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u16-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette variante relève d'un registre familier inadapté au contexte (79x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (79y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (79z)."
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
                    "prompt": "Contrôle des acquis (fr-u16-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette variante relève d'un registre familier inadapté au contexte (79m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (79n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (79p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u16-l4 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Synthèse Comparative et Évaluation Critique. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Synthèse Comparative et Évaluation Critique"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Synthèse Comparative et Évaluation Critique in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Synthesize comparative and superlative structures in critical consumer » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (80a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (80b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (80c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u16-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (80x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (80y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (80z)."
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
                    "prompt": "Contrôle des acquis (fr-u16-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (80m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (80n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (80p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u16-l5 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Formation du Plus-que-parfait. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Formation du Plus-que-parfait"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Formation du Plus-que-parfait in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Form le plus-que-parfait using imperfect auxiliaries (avais/étais) and » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (81a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (81b).",
                        "Cette construction passive alourdit inutilement l'énoncé (81c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u17-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'antériorité temporelle est mal établie par rapport au repère (81x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (81y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (81z)."
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
                    "prompt": "Contrôle des acquis (fr-u17-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'antériorité temporelle est mal établie par rapport au repère (81m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (81n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (81p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u17-l1 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of L'Antériorité Temporelle et la Causalité au Passé. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for L'Antériorité Temporelle et la Causalité au Passé"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for L'Antériorité Temporelle et la Causalité au Passé in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Sequence complex narrative events establishing clear cause-and-effect  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (82a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (82b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (82c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u17-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "La préposition employée ici n'est pas commandée par le verbe (82x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (82y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (82z)."
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
                    "prompt": "Contrôle des acquis (fr-u17-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (82m).",
                        "Cette forme présente une anomalie phonétique en français standard (82n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (82p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u17-l2 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of La Concordance des Temps dans le Récit Passé. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for La Concordance des Temps dans le Récit Passé"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for La Concordance des Temps dans le Récit Passé in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Manage temporal concordance across multi-tiered past narrative structu » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (83a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (83b).",
                        "Cette construction passive alourdit inutilement l'énoncé (83c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u17-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette proposition modifie subtilement le sens originel du verbe (83x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (83y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (83z)."
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
                    "prompt": "Contrôle des acquis (fr-u17-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette proposition modifie subtilement le sens originel du verbe (83m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (83n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (83p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u17-l3 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Le Regret et le Souhait Rétrospectif. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Le Regret et le Souhait Rétrospectif"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Le Regret et le Souhait Rétrospectif in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Express unfulfilled past desires and hindsight regret using 'si seulem » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (84a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (84b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (84c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u17-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette forme présente une anomalie phonétique en français standard (84x).",
                        "La préposition employée ici n'est pas commandée par le verbe (84y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (84z)."
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
                    "prompt": "Contrôle des acquis (fr-u17-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (84m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (84n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (84p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u17-l4 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of L'Analepse et la Narration Rétrospective Complexe. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for L'Analepse et la Narration Rétrospective Complexe"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for L'Analepse et la Narration Rétrospective Complexe in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Deploy flashback (l'analepse) techniques in extended multi-paragraph c » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (85a).",
                        "Cette construction passive alourdit inutilement l'énoncé (85b).",
                        "Cette construction passive alourdit inutilement l'énoncé (85c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u17-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette construction passive alourdit inutilement l'énoncé (85x).",
                        "Cette construction passive alourdit inutilement l'énoncé (85y).",
                        "Cette construction passive alourdit inutilement l'énoncé (85z)."
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
                    "prompt": "Contrôle des acquis (fr-u17-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette construction passive alourdit inutilement l'énoncé (85m).",
                        "Cette construction passive alourdit inutilement l'énoncé (85n).",
                        "Cette construction passive alourdit inutilement l'énoncé (85p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u17-l5 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of L'Hypothèse Réelle (Si + Présent -> Futur). In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for L'Hypothèse Réelle (Si + Présent -> Futur)"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for L'Hypothèse Réelle (Si + Présent -> Futur) in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Construct real first conditional hypotheses with 'si + présent -> futu » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (86a).",
                        "Cette forme présente une anomalie phonétique en français standard (86b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (86c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u18-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (86x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (86y).",
                        "Cette forme présente une anomalie phonétique en français standard (86z)."
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
                    "prompt": "Contrôle des acquis (fr-u18-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (86m).",
                        "La préposition employée ici n'est pas commandée par le verbe (86n).",
                        "Cette forme présente une anomalie phonétique en français standard (86p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u18-l1 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of L'Hypothèse Imaginaire du Présent (Si + Imparfait -> Conditionnel). In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for L'Hypothèse Imaginaire du Présent (Si + Imparfait -> Conditionnel)"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for L'Hypothèse Imaginaire du Présent (Si + Imparfait -> Conditionnel) in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Construct unreal present second conditional hypotheses with 'si + impa » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (87a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (87b).",
                        "Cette construction passive alourdit inutilement l'énoncé (87c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u18-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (87x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (87y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (87z)."
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
                    "prompt": "Contrôle des acquis (fr-u18-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (87m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (87n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (87p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u18-l2 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of L'Hypothèse Irréelle du Passé (Si + Plus-que-parfait -> Conditionnel Passé). In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for L'Hypothèse Irréelle du Passé (Si + Plus-que-parfait -> Conditionnel Passé)"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for L'Hypothèse Irréelle du Passé (Si + Plus-que-parfait -> Conditionnel Passé) in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Construct unreal past third conditional hypotheses with 'si + plus-que » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (88a).",
                        "La préposition employée ici n'est pas commandée par le verbe (88b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (88c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u18-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (88x).",
                        "Cette forme présente une anomalie phonétique en français standard (88y).",
                        "La préposition employée ici n'est pas commandée par le verbe (88z)."
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
                    "prompt": "Contrôle des acquis (fr-u18-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (88m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (88n).",
                        "La préposition employée ici n'est pas commandée par le verbe (88p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u18-l3 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Les Hypothèses Mixtes (Cause Passée, Effet Présent). In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Les Hypothèses Mixtes (Cause Passée, Effet Présent)"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Les Hypothèses Mixtes (Cause Passée, Effet Présent) in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Construct mixed conditional structures connecting past causes to prese » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (89a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (89b).",
                        "Cette construction passive alourdit inutilement l'énoncé (89c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u18-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette variante relève d'un registre familier inadapté au contexte (89x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (89y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (89z)."
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
                    "prompt": "Contrôle des acquis (fr-u18-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette variante relève d'un registre familier inadapté au contexte (89m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (89n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (89p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u18-l4 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "Thorough linguistic breakdown of Les Conjonctions Hypothétiques Alternatives. In French B1, mastering this syntax structure enables learners to articulate complex interpersonal nuances, formal register shifts, and precise logical arguments.",
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
                "Cognitive memory anchor for Les Conjonctions Hypothétiques Alternatives"
            ],
            "culturalNotes": [
                "Sociolinguistic and cultural context for Les Conjonctions Hypothétiques Alternatives in modern France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Form alternative hypothetical conjunctions (à condition que + subjonct » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (90a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (90b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (90c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u18-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (90x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (90y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (90z)."
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
                    "prompt": "Contrôle des acquis (fr-u18-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (90m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (90n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (90p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u18-l5 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Formation Canonique de la Voix Passive. At the CEFR B2 level, learners acquire precise command over formation canonique de la voix passive, integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for Formation Canonique de la Voix Passive"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Formation Canonique de la Voix Passive in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Form the passive voice using auxiliary 'être' and the past participle  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (91a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (91b).",
                        "Cette construction passive alourdit inutilement l'énoncé (91c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u19-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'antériorité temporelle est mal établie par rapport au repère (91x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (91y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (91z)."
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
                    "prompt": "Contrôle des acquis (fr-u19-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'antériorité temporelle est mal établie par rapport au repère (91m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (91n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (91p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u19-l1 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Le Complément d'Agent avec la Préposition DE. At the CEFR B2 level, learners acquire precise command over le complément d'agent avec la préposition de, integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for Le Complément d'Agent avec la Préposition DE"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Le Complément d'Agent avec la Préposition DE in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Identify verbs of state, sentiment, and description taking agent prepo » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (92a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (92b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (92c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u19-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "La préposition employée ici n'est pas commandée par le verbe (92x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (92y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (92z)."
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
                    "prompt": "Contrôle des acquis (fr-u19-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (92m).",
                        "Cette forme présente une anomalie phonétique en français standard (92n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (92p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u19-l2 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Le Passif Pronominal et les Vérités Générales. At the CEFR B2 level, learners acquire precise command over le passif pronominal et les vérités générales, integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for Le Passif Pronominal et les Vérités Générales"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Le Passif Pronominal et les Vérités Générales in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Deploy pronominal passive constructions (se + verbe 3e personne) for g » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (93a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (93b).",
                        "Cette construction passive alourdit inutilement l'énoncé (93c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u19-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette proposition modifie subtilement le sens originel du verbe (93x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (93y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (93z)."
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
                    "prompt": "Contrôle des acquis (fr-u19-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette proposition modifie subtilement le sens originel du verbe (93m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (93n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (93p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u19-l3 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Les Structures Passives Causatives (Se faire et Se voir). At the CEFR B2 level, learners acquire precise command over les structures passives causatives (se faire et se voir), integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for Les Structures Passives Causatives (Se faire et Se voir)"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Les Structures Passives Causatives (Se faire et Se voir) in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Use causative passive structures with 'se faire' and 'se voir' (se fai » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (94a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (94b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (94c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u19-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette forme présente une anomalie phonétique en français standard (94x).",
                        "La préposition employée ici n'est pas commandée par le verbe (94y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (94z)."
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
                    "prompt": "Contrôle des acquis (fr-u19-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (94m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (94n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (94p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u19-l4 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of L'Alternative Active avec le Pronom ON. At the CEFR B2 level, learners acquire precise command over l'alternative active avec le pronom on, integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for L'Alternative Active avec le Pronom ON"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of L'Alternative Active avec le Pronom ON in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Choose natural active voice alternatives using 'on' to avoid heavy pas » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (95a).",
                        "Cette construction passive alourdit inutilement l'énoncé (95b).",
                        "Cette construction passive alourdit inutilement l'énoncé (95c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u19-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette construction passive alourdit inutilement l'énoncé (95x).",
                        "Cette construction passive alourdit inutilement l'énoncé (95y).",
                        "Cette construction passive alourdit inutilement l'énoncé (95z)."
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
                    "prompt": "Contrôle des acquis (fr-u19-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette construction passive alourdit inutilement l'énoncé (95m).",
                        "Cette construction passive alourdit inutilement l'énoncé (95n).",
                        "Cette construction passive alourdit inutilement l'énoncé (95p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u19-l5 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Le Discours Rapporté au Présent. At the CEFR B2 level, learners acquire precise command over le discours rapporté au présent, integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for Le Discours Rapporté au Présent"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Le Discours Rapporté au Présent in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Convert direct quotations into reported indirect speech with present i » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (96a).",
                        "Cette forme présente une anomalie phonétique en français standard (96b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (96c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u20-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (96x).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (96y).",
                        "Cette forme présente une anomalie phonétique en français standard (96z)."
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
                    "prompt": "Contrôle des acquis (fr-u20-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (96m).",
                        "La préposition employée ici n'est pas commandée par le verbe (96n).",
                        "Cette forme présente une anomalie phonétique en français standard (96p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u20-l1 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of La Concordance des Temps au Passé dans le Discours Indirect. At the CEFR B2 level, learners acquire precise command over la concordance des temps au passé dans le discours indirect, integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for La Concordance des Temps au Passé dans le Discours Indirect"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of La Concordance des Temps au Passé dans le Discours Indirect in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Execute past tense concordance in reported speech (présent -> imparfai » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (97a).",
                        "Cette proposition modifie subtilement le sens originel du verbe (97b).",
                        "Cette construction passive alourdit inutilement l'énoncé (97c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u20-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (97x).",
                        "L'antériorité temporelle est mal établie par rapport au repère (97y).",
                        "Cette proposition modifie subtilement le sens originel du verbe (97z)."
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
                    "prompt": "Contrôle des acquis (fr-u20-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (97m).",
                        "Cette variante relève d'un registre familier inadapté au contexte (97n).",
                        "Cette proposition modifie subtilement le sens originel du verbe (97p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u20-l2 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Le Futur dans le Passé (Futur -> Conditionnel). At the CEFR B2 level, learners acquire precise command over le futur dans le passé (futur -> conditionnel), integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for Le Futur dans le Passé (Futur -> Conditionnel)"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Le Futur dans le Passé (Futur -> Conditionnel) in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Shift future and conditional tenses in past reported speech (futur sim » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (98a).",
                        "La préposition employée ici n'est pas commandée par le verbe (98b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (98c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u20-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (98x).",
                        "Cette forme présente une anomalie phonétique en français standard (98y).",
                        "La préposition employée ici n'est pas commandée par le verbe (98z)."
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
                    "prompt": "Contrôle des acquis (fr-u20-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (98m).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (98n).",
                        "La préposition employée ici n'est pas commandée par le verbe (98p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u20-l3 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of La Transposition des Marqueurs Temporels et Spatiaux. At the CEFR B2 level, learners acquire precise command over la transposition des marqueurs temporels et spatiaux, integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for La Transposition des Marqueurs Temporels et Spatiaux"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of La Transposition des Marqueurs Temporels et Spatiaux in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Transform spatial and temporal deictic markers (aujourd'hui -> ce jour » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (99a).",
                        "L'antériorité temporelle est mal établie par rapport au repère (99b).",
                        "Cette construction passive alourdit inutilement l'énoncé (99c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u20-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette variante relève d'un registre familier inadapté au contexte (99x).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (99y).",
                        "L'antériorité temporelle est mal établie par rapport au repère (99z)."
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
                    "prompt": "Contrôle des acquis (fr-u20-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette variante relève d'un registre familier inadapté au contexte (99m).",
                        "Cette proposition modifie subtilement le sens originel du verbe (99n).",
                        "L'antériorité temporelle est mal établie par rapport au repère (99p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u20-l4 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Les Verbes Introducteurs Nuancés du Discours Journalistique. At the CEFR B2 level, learners acquire precise command over les verbes introducteurs nuancés du discours journalistique, integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for Les Verbes Introducteurs Nuancés du Discours Journalistique"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Les Verbes Introducteurs Nuancés du Discours Journalistique in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Report journalistic interviews and parliamentary inquiries using sophi » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (100a).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (100b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (100c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u20-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (100x).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (100y).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (100z)."
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
                    "prompt": "Contrôle des acquis (fr-u20-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (100m).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (100n).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (100p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u20-l5 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of L'Expression de la Cause : Nuances et Conjonctions. At the CEFR B2 level, learners acquire precise command over l'expression de la cause : nuances et conjonctions, integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for L'Expression de la Cause : Nuances et Conjonctions"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of L'Expression de la Cause : Nuances et Conjonctions in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Express cause across varied registers (parce que, puisque, comme en tê » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (101a).",
                        "Cette variante relève d'un registre familier inadapté au contexte (101b).",
                        "Cette construction passive alourdit inutilement l'énoncé (101c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u21-l1 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "L'antériorité temporelle est mal établie par rapport au repère (101x).",
                        "Cette proposition modifie subtilement le sens originel du verbe (101y).",
                        "Cette variante relève d'un registre familier inadapté au contexte (101z)."
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
                    "prompt": "Contrôle des acquis (fr-u21-l1) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "L'antériorité temporelle est mal établie par rapport au repère (101m).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (101n).",
                        "Cette variante relève d'un registre familier inadapté au contexte (101p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u21-l1 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Grâce à, À cause de, En raison de et Faute de. At the CEFR B2 level, learners acquire precise command over grâce à, à cause de, en raison de et faute de, integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for Grâce à, À cause de, En raison de et Faute de"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Grâce à, À cause de, En raison de et Faute de in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Distinguish positive cause (grâce à) from negative cause (à cause de)  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (102a).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (102b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (102c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u21-l2 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "La préposition employée ici n'est pas commandée par le verbe (102x).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (102y).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (102z)."
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
                    "prompt": "Contrôle des acquis (fr-u21-l2) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "La préposition employée ici n'est pas commandée par le verbe (102m).",
                        "Cette forme présente une anomalie phonétique en français standard (102n).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (102p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u21-l2 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of L'Expression du But : Subjonctif vs Infinitif. At the CEFR B2 level, learners acquire precise command over l'expression du but : subjonctif vs infinitif, integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for L'Expression du But : Subjonctif vs Infinitif"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of L'Expression du But : Subjonctif vs Infinitif in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Express purpose requiring subjunctive (pour que, afin que) versus iden » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (103a).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (103b).",
                        "Cette construction passive alourdit inutilement l'énoncé (103c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u21-l3 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette proposition modifie subtilement le sens originel du verbe (103x).",
                        "Cette variante relève d'un registre familier inadapté au contexte (103y).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (103z)."
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
                    "prompt": "Contrôle des acquis (fr-u21-l3) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette proposition modifie subtilement le sens originel du verbe (103m).",
                        "L'antériorité temporelle est mal établie par rapport au repère (103n).",
                        "Le pronom complément n'est pas placé au rang hiérarchique adéquat (103p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u21-l3 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of L'Expression de la Conséquence Logique. At the CEFR B2 level, learners acquire precise command over l'expression de la conséquence logique, integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for L'Expression de la Conséquence Logique"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of L'Expression de la Conséquence Logique in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Express logical consequence using coordinators and subordinators (donc » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (104a).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (104b).",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (104c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u21-l4 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette forme présente une anomalie phonétique en français standard (104x).",
                        "La préposition employée ici n'est pas commandée par le verbe (104y).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (104z)."
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
                    "prompt": "Contrôle des acquis (fr-u21-l4) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette forme présente une anomalie phonétique en français standard (104m).",
                        "Le mode verbal requis n'est pas respecté dans cette subordonnée (104n).",
                        "L'accord syntaxique ne correspond pas exactement au sujet exprimé (104p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u21-l4 (terme attendu : « Nous ») :",
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
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "In-depth analysis of Synthèse Argumentative : Cause, But et Conséquence. At the CEFR B2 level, learners acquire precise command over synthèse argumentative : cause, but et conséquence, integrating advanced syntax with professional and domain-specific lexicon.",
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
                "Structural memory anchor for Synthèse Argumentative : Cause, But et Conséquence"
            ],
            "culturalNotes": [
                "Authentic pragmatic application of Synthèse Argumentative : Cause, But et Conséquence in professional France."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "Choisissez l'énoncé qui illustre correctement l'objectif : « Structure cause, purpose, and consequence cohesively in analytical B2  » :",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Dans ce contexte particulier, nous préférons employer une autre tournure (105a).",
                        "Cette construction passive alourdit inutilement l'énoncé (105b).",
                        "Cette construction passive alourdit inutilement l'énoncé (105c)."
                    ],
                    "answerIndex": 0,
                    "explanation": "Cette option applique fidèlement les règles grammaticales et stylistiques de la leçon."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "Sélectionnez l'exemple authentique correspondant à la compétence fr-u21-l5 :",
                    "options": [
                        "L'application pratique de cette notion enrichit l'expression écrite et orale.",
                        "Cette construction passive alourdit inutilement l'énoncé (105x).",
                        "Cette construction passive alourdit inutilement l'énoncé (105y).",
                        "Cette construction passive alourdit inutilement l'énoncé (105z)."
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
                    "prompt": "Contrôle des acquis (fr-u21-l5) : Quelle phrase applique rigoureusement la règle étudiée ?",
                    "options": [
                        "Nous étudions attentivement cette règle linguistique fondamentale en français.",
                        "Cette construction passive alourdit inutilement l'énoncé (105m).",
                        "Cette construction passive alourdit inutilement l'énoncé (105n).",
                        "Cette construction passive alourdit inutilement l'énoncé (105p)."
                    ],
                    "answerIndex": 0,
                    "explanation": "L'énoncé sélectionné démontre une maîtrise complète de la structure cible."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Saisissez le premier mot de la phrase modèle pour fr-u21-l5 (terme attendu : « Nous ») :",
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
